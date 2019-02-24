//TODO :
//-Gérer les tags et l'héritage Quote -> Ouvrage -> auteur.
//- Filtre par tag : ajouter le scope (auteur/ouvrage/quote)
// +en gros ne laisser les tags que pour les quotes et générer le reste automatiquement
//- créer un type de quote «temoignage» (d'autres)
// +lier des quotes entre elles autour de ? (idée ? concepte ???)

const shortid = require('shortid');
const express = require('express');
const settings = require('./../rougeSettings.json');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const tableToForm = require('./formGenerator').tableToForm;

const cssProperties = require('./Ui/cssProperties');
//Tools
const bodyParser = require('body-parser');

//Framework
const crud = require('./crud.js').crud;
const methodOverride = require('method-override');

//webpack
const webpack = require('webpack');
const config = require('./../webpack.config.dev.js');
const compiler = webpack(config);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);

//Server Params
var port = 8080;
var app = express();
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

app.use(methodOverride('_method'));

//Parser
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

var appAdapter = new FileSync('./App/Data/appData.json');
var appDb = low(appAdapter);

var adapter = new FileSync('./App/Data/data.json');
var db = low(adapter);
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

for (var application in settings.applications) {
	app.use('/controllers', express.static('app/' + settings.applications[application] + '/controllers'));
}

var currentApplication = settings.applications[settings.defaultApp];
app.use('/:app', function(req, res) {
	if (req.params.app in settings.applications) {
		currentApplication = settings.applications[req.params.app];
	} else {
		res.status(404).send('This page does not exist');
	}
});
app.use(function(req, res, next) {
	res.locals.cssProperties = cssProperties.render();
	res.locals.title = currentApplication.title;
	res.locals.language = currentApplication.language;
	res.locals.configName = '';

	next();
});

//Pages
app.get('/', function(req, res) {
	app.set('views', __dirname + '/../app' + settings.defaultApp + '/views');
	res.render('index');
});
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

//cssPanel
app.post('/admin/settings', function(req, res) {
	req.body.id = shortid.generate();
	db.set('appDemo', []).write();
	appDb
		.get('appDemo')
		.push(req.body)
		.write();
	res.send('Sauvegardé');
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
