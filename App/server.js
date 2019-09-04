const express = require('express');

/*DATABASE INITIALISATION */
const low = require('lowdb');
const shortid = require('shortid');
const FileSync = require('lowdb/adapters/FileSync');
//rougeFramework own database (parameters, styles, users…)
var appAdapter = new FileSync('./App/Data/appData.json');
var appDb = low(appAdapter);
//Apps database
const adapter = new FileSync('./App/Data/data.json');
const db = low(adapter);

/* EXPRESS TOOLS */
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/* rougeFramework Settings */
const settings = require('./../rougeSettings.json');

//rougeFramework UI
const tableToForm = require('./formGenerator');
const cssFileGenerator = require('./Ui/cssFileGenerator');
//rougeFramework Back End
const crud = require('./crud.js');
const appCrud = require('./appCrud.js');
var multer = require('multer');
var upload = multer();

var isProd = process.env.NODE_ENV === 'production';

//Server Params
var port = 8080;
var app = express();

app.use(methodOverride('_method'));
if (!isProd) {
	//webpack
	const webpack = require('webpack');
	const config = require('../webpack.config.dev.js');
	const compiler = webpack(config);
	const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
	// @ts-ignore
	const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
	//webpack
	app.use(webpackDevMiddleware);
	app.use(webpackHotMiddleware);
}
//Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API
var api = crud(db);
app.use('/api', checkAuthenticated, api);

//Template Engine
app.set('view engine', 'pug');

//Static Files
app.use(express.static('static'));
app.use(express.static('node_modules/normalize.css'));
app.use(express.static('App/Dist'));
app.use('/images', express.static('App/Static/images'));
app.use('/svg', express.static('App/Static/svg'));

//Per apps Static Files

for (var application in settings.applications) {
	app.use(
		// @ts-ignore
		'/' + settings.applications[application] + '/static',
		// @ts-ignore
		express.static('app/' + settings.applications[application] + '/static')
	);
}

//Global template settings
// @ts-ignore
var currentApplicationSettings = settings.applications[settings.defaultApp];
currentApplicationSettings.applicationName = settings.defaultApp;

//Application Data
var appApi = appCrud(appDb, currentApplicationSettings);
app.use('/appapi', appApi);

//TODO generate a default styleset with any app

app.use('/:app', function(req, res, next) {
	/**
	 * @type {string}
	 */
	var upperCasedApp = req.params.app.charAt(0).toUpperCase() + req.params.app.slice(1);

	if (upperCasedApp in settings.applications) {
		// @ts-ignore
		currentApplicationSettings = settings.applications[upperCasedApp];
		currentApplicationSettings.applicationName = upperCasedApp;
	} else if (req.params.app !== 'admin') {
		res.status(404).send('This page does not exist');
	}
	next();
});
app.use(function(req, res, next) {
	res.locals.environment = process.env.NODE_ENV;
	res.locals.title = currentApplicationSettings.title;
	res.locals.language = currentApplicationSettings.language;

	res.locals.styleSetId = currentApplicationSettings.styleSet;
	res.locals.colorSetCollection = JSON.stringify(appDb.get('colorSetPresets').value());
	next();
});

//Auth
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const initializePassport = require('./passportConfig');

app.use(flash());
app.use(
	session({
		secret: settings.sessionSecret,
		resave: true,
		saveUninitialized: false,
		cookie: { maxAge: 6000000 },
	})
);

/**
 *
 * @param {string} value
 * @param {string} type
 * @returns {object} The user data
 */
var getUser = function(value, type = 'username') {
	/**
	 * @type {object}
	 */
	var parameters = {};
	parameters[type] = value;
	return (
		appDb
			.get('users')
			// @ts-ignore
			.find(parameters)
			.value()
	);
};
app.use(passport.initialize());

initializePassport(passport, getUser);
app.post(
	'/admin/login',
	checkNotAuthenticated,
	passport.authenticate('local', {
		successRedirect: '/' + currentApplicationSettings.applicationName,
		failureRedirect: '/admin/login',
		failureFlash: true,
	})
);
app.use(passport.session());
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/' + currentApplicationSettings.applicationName + '/login');
}
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/' + currentApplicationSettings.applicationName);
	}
	next();
}
app.get('/admin/login', checkNotAuthenticated, function(req, res) {
	app.set('views', __dirname + '/Views');
	//TODO Put the "islogged" in a use()
	res.locals.isLogged = req.isAuthenticated();

	res.render('login');
});
app.get('/admin/logout', function(req, res) {
	req.logOut();
	res.redirect('/');
});

//TODO add setup. Check initiateApp.js
app.get('/admin/setup', function() {
	appDb.set(currentApplicationSettings.applicationName, []).write();
});

//TODO add put
app.post('/admin/settings/:type', upload.none(), function(req, res) {
	if (req.body.styleSet === '') {
		req.body.styleSet = 'styleSet-' + req.body.id;
	}
	if (req.params.type === 'overwrite') {
		appDb
			.get(currentApplicationSettings.applicationName)
			// @ts-ignore
			.find({ id: req.body.id })
			.assign(req.body)
			.write();
	} else {
		req.body.id = shortid.generate();

		appDb
			.get(currentApplicationSettings.applicationName)
			// @ts-ignore
			.push(req.body)
			.write();
	}
	cssFileGenerator.generateCSSFile(currentApplicationSettings.applicationName, req.body);

	res.send('settings for ' + currentApplicationSettings.applicationName + ' saved');
});

//Pages
app.get('/', function(req, res) {
	res.locals.isLogged = req.isAuthenticated();
	app.set('views', __dirname + '/../app' + settings.defaultApp + '/views');
	res.render('index');
});

app.get('/:app', function(req, res) {
	res.locals.isLogged = req.isAuthenticated();
	var upperCasedApp = req.params.app.charAt(0).toUpperCase() + req.params.app.slice(1);
	app.set('views', __dirname + '/../app' + upperCasedApp + '/views');
	res.render('index');
});

app.get('/:app/:view', function(req, res) {
	res.locals.isLogged = req.isAuthenticated();
	var upperCasedApp = req.params.app.charAt(0).toUpperCase() + req.params.app.slice(1);
	app.set('views', __dirname + '/../app' + upperCasedApp + '/views');
	res.render(req.params.view);
});

app.use('/edit/:app/:table/:id', function(req, res, next) {
	var data = db
		.get(req.params.app + '_' + req.params.table)
		// @ts-ignore
		.find({
			id: req.params.id,
		})
		.value();
	req.params.method = 'put';
	var form = tableToForm(req.params, data);
	//@ts-ignore
	req.form = form;

	next();
});

app.use(
	'/admin/add/:app/:table/',
	/**
	 *
	 * @param {express.Response} res
	 * @param {express.NextFunction} next
	 * @param {express.Request} req
	 *
	 */
	function(req, res, next) {
		req.params.method = 'post';

		var form = tableToForm(req.params);
		res.locals.form = form;

		next();
	}
);
app.get('/edit/:app/:table/:id', function(req, res) {
	app.set('views', './app' + req.params.app + '/views');
	res.render('edit');
});
app.get('/admin/add/:app/:table', function(req, res) {
	app.set('views', './app' + req.params.app + '/views');
	res.render('add');
});

//Server
/* eslint-disable no-console */
app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('connected to port : ' + port);
	}
});

app.on('listening', function() {});
