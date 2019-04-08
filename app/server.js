const express = require('express');

//DB
const low = require('lowdb');
const shortid = require('shortid');
const FileSync = require('lowdb/adapters/FileSync');
var appAdapter = new FileSync('./App/Data/appData.json');
var appDb = low(appAdapter);

var adapter = new FileSync('./App/Data/data.json');
var db = low(adapter);

//Tools
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//rougeFramework Settings
const settings = require('./../rougeSettings.json');
//rougeFramework UI
const tableToForm = require('./formGenerator').tableToForm;
const cssProperties = require('./Ui/cssProperties');
//rougeFramework Back End
const crud = require('./crud.js').crud;
const utils = require('./utils.js');

//webpack
const webpack = require('webpack');
const config = require('./../webpack.config.dev.js');
const compiler = webpack(config);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);

//Server Params
var port = 8080;
var app = express();
app.use(methodOverride('_method'));

//webpack
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

//Parser
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

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
var currentApplicationName = settings.defaultApp;
var currentApplicationSettings = settings.applications[settings.defaultApp];
app.use('/:app', function(req, res, next) {
	if (req.params.app in settings.applications) {
		currentApplicationSettings = settings.applications[req.params.app];
		currentApplicationName = req.params.app;
	} else if (req.params.app !== 'admin') {
		res.status(404).send('This page does not exist');
	}
	next();
});
app.use(function(req, res, next) {
	res.locals.cssProperties = cssProperties.render(currentApplicationName, currentApplicationSettings, appDb);
	res.locals.title = currentApplicationSettings.title;
	res.locals.language = currentApplicationSettings.language;
	res.locals.styleSetName = '';
	if (currentApplicationSettings.styleSet !== '') {
		var styleSetCollection = appDb.get(currentApplicationName).value();
		var styleSet = appDb
			.get(currentApplicationName)
			.find({ id: currentApplicationSettings.styleSet })
			.value();
		res.locals.styleSet = JSON.stringify(styleSet);
		res.locals.styleSetCollection = JSON.stringify(utils.idAsKey(styleSetCollection));
		res.locals.styleSetName = styleSet.styleSet;
		res.locals.styleSetId = currentApplicationSettings.styleSet;
	}
	res.locals.combinationTypeCollection = JSON.stringify(appDb.get('colorCombinationTypes').value());
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
	req.form = form;

	next();
});
app.use('/add/:app/:table/', function(req, res, next) {
	req.params.method = 'post';
	var form = tableToForm(req.params);
	req.form = form;

	next();
});
app.get('/edit/:app/:table/:id', function(req, res) {
	app.set('views', './app' + req.params.app + '/views');
	res.render('edit', {
		form: req.form,
	});
});
app.get('/add/:app/:table', function(req, res) {
	app.set('views', './app' + req.params.app + '/views');
	res.render('add', {
		form: req.form,
	});
});

//TODO add setup. Check initiateApp.js
app.get('/admin/setup', function() {
	appDb.set(currentApplicationName, []).write();
});

//TODO add put
app.post('/admin/settings/:type', function(req, res) {
	if (req.body.styleSet === '') {
		req.body.styleSet = 'styleSet-' + req.body.id;
	}
	if (req.params.type === 'overwrite') {
		appDb
			.get(currentApplicationName)
			.find({ id: req.body.id })
			.assign(req.body)
			.write();
	} else {
		req.body.id = shortid.generate();

		appDb
			.get(currentApplicationName)
			.push(req.body)
			.write();
	}

	res.send('settings for ' + currentApplicationName + ' saved');
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
