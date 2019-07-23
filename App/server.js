const express = require('express');

//DB
//@ts-ignore
const low = require('lowdb');
//@ts-ignore
const shortid = require('shortid');
//@ts-ignore
const FileSync = require('lowdb/adapters/FileSync');
var appAdapter = new FileSync('./App/Data/appData.json');
var appDb = low(appAdapter);

const adapter = new FileSync('./App/Data/data.json');
const db = low(adapter);

//Tools
const bodyParser = require('body-parser');
//@ts-ignore
const methodOverride = require('method-override');

//rougeFramework Settings
/**
 * @type {Object}
 */
const settings = require('./../rougeSettings.json');
//rougeFramework UI
const tableToForm = require('./formGenerator').tableToForm;
const cssFileGenerator = require('./Ui/cssFileGenerator');
//rougeFramework Back End
const crud = require('./crud.js').crud;
const appCrud = require('./appCrud.js').appCrud;

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
	//@ts-ignore
	const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
	//@ts-ignore
	const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
	//webpack
	app.use(webpackDevMiddleware);
	app.use(webpackHotMiddleware);
}
//Parser
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use((req, res, next) => {
	// -----------------------------------------------------------------------
	// authentication middleware

	const auth = { login: settings.auth.id, password: settings.auth.pw }; // change this

	// parse login and password from headers
	const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
	const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');

	// Verify login and password are set and correct
	if (login && password && login === auth.login && password === auth.password) {
		// Access granted...
		return next();
	}

	// Access denied...
	res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
	res.status(401).send('Authentication required.'); // custom message

	// -----------------------------------------------------------------------
});
//API
var api = crud(db);
app.use('/api', api);

//Template Engine
app.set('view engine', 'pug');

//Static Files
app.use(express.static('static'));
app.use(express.static('node_modules/normalize.css'));
app.use(express.static('App/Dist'));
app.use('/images', express.static('App/Static/images'));
//Per apps Static Files
for (var application in settings.applications) {
	app.use(
		'/' + settings.applications[application] + '/static',
		express.static('app/' + settings.applications[application] + '/static')
	);
}

//Global template settings
var currentApplicationSettings = settings.applications[settings.defaultApp];
currentApplicationSettings.applicationName = settings.defaultApp;

//Application Data
var appApi = appCrud(appDb, currentApplicationSettings);
app.use('/appapi', appApi);

//TODO generate a default styleset with any app

app.use('/:app', function(req, res, next) {
	if (req.params.app in settings.applications) {
		currentApplicationSettings = settings.applications[req.params.app];
		currentApplicationSettings.applicationName = req.params.app;
	} else if (req.params.app !== 'admin') {
		res.status(404).send('This page does not exist');
	}
	next();
});
app.use(function(req, res, next) {
	res.locals.environment = process.env.NODE_ENV;
	res.locals.title = currentApplicationSettings.title;
	res.locals.language = currentApplicationSettings.language;
	res.locals.styleSetName = '';

	res.locals.styleSetId = currentApplicationSettings.styleSet;
	res.locals.colorSetCollection = JSON.stringify(appDb.get('colorSetPresets').value());
	next();
});

//Pages
app.get('/', function(req, res) {
	app.set('views', __dirname + '/../app' + settings.defaultApp + '/views');
	res.render('index');
});

//cssPanel
app.get('/:app', function(req, res) {
	app.set('views', __dirname + '/../app' + req.params.app + '/views');
	res.render('index');
});

app.use('/edit/:app/:table/:id', function(req, res, next) {
	var data = db
		.get(req.params.app + '_' + req.params.table)
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
app.use('/add/:app/:table/', function(req, res, next) {
	req.params.method = 'post';
	var form = tableToForm(req.params);
	//@ts-ignore
	req.form = form;

	next();
});
app.get('/edit/:app/:table/:id', function(req, res) {
	app.set('views', './app' + req.params.app + '/views');
	res.render('edit', {
		//@ts-ignore
		form: req.form,
	});
});
app.get('/add/:app/:table', function(req, res) {
	app.set('views', './app' + req.params.app + '/views');
	res.render('add', {
		//@ts-ignore
		form: req.form,
	});
});

//TODO add setup. Check initiateApp.js
app.get('/admin/setup', function() {
	appDb.set(currentApplicationSettings.applicationName, []).write();
});

//TODO add put
app.post('/admin/settings/:type', function(req, res) {
	if (req.body.styleSet === '') {
		req.body.styleSet = 'styleSet-' + req.body.id;
	}
	if (req.params.type === 'overwrite') {
		appDb
			.get(currentApplicationSettings.applicationName)
			.find({ id: req.body.id })
			.assign(req.body)
			.write();
	} else {
		req.body.id = shortid.generate();

		appDb
			.get(currentApplicationSettings.applicationName)
			.push(req.body)
			.write();
	}
	cssFileGenerator.generateCSSFile(currentApplicationSettings.applicationName, req.body);

	res.send('settings for ' + currentApplicationSettings.applicationName + ' saved');
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
