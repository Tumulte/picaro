//TODO :
//-Gérer les tags et l'héritage Quote -> Ouvrage -> auteur.
//- Filtre par tag : ajouter le scope (auteur/ouvrage/quote)
// +en gros ne laisser les tags que pour les quotes et générer le reste automatiquement
//- créer un type de quote «temoignage» (d'autres)
// +lier des quotes entre elles autour de ? (idée ? concepte ???)

var express = require("express");
var settings = require("./../rougeSettings.json");
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var tableToForm = require("./formGenerator").tableToForm;

var cssProperties = require("./Ui/cssProperties");
//Tools
var bodyParser = require("body-parser");

//Framework
var crud = require("./crud.js").crud;
var methodOverride = require('method-override')

//const compiler = webpack(config);

//Server Params
var port = 8080;
var app = express();


app.use(methodOverride("_method"))


//Parser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
/*
app.use(
    require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    })
);
*/

var adapter = new FileSync("./App/Data/data.json");
var db = low(adapter);
//API
var api = crud(db);
app.use("/api", api);

//Template Engine
app.set("view engine", "pug");

//Static Files
app.use("/static", express.static("public"));
app.use("/static", express.static("node_modules/normalize.css"));
app.use("/static", express.static("App/Dist"));
for (var application in settings.applications) {
    app.use("/controllers", express.static("app/" + settings.applications[application] + "/controllers"));
}


app.use(function (req, res, next) {
    res.locals.cssProperties = cssProperties.render();
    res.locals.title = settings.applications[settings.defaultApp].title;
    res.locals.language = settings.applications[settings.defaultApp].language

    next();
})



//Pages
app.get("/", function (req, res) {
    app.set("views", __dirname + "/../app" + settings.defaultApp + "/views");
    res.render("index");
});

app.use("/edit/:app/:table/:id", function (req, res, next) {
    var data = db
        .get(req.params.app + "_" + req.params.table)
        .find({
            id: req.params.id
        })
        .value();
    req.params.method = "put";
    var form = tableToForm(req.params, data);
    req.form = form;

    next();
});
app.use("/add/:app/:table/", function (req, res, next) {
    req.params.method = "post";
    var form = tableToForm(req.params);
    req.form = form;

    next();
});
app.get("/edit/:app/:table/:id", function (req, res) {
    app.set("views", "./app" + req.params.app + "/views");
    res.render("edit", {
        form: req.form
    });
});
app.get("/add/:app/:table", function (req, res) {
    app.set("views", "./app" + req.params.app + "/views");
    res.render("add", {
        form: req.form
    });
});
//Server
/* eslint-disable no-console */
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to port : " + port);
    }
});