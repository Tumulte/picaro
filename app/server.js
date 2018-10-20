//TODO :
//-Gérer les tags et l'héritage Quote -> Ouvrage -> auteur.
//- Filtre par tag : ajouter le scope (auteur/ouvrage/quote)
// +en gros ne laisser les tags que pour les quotes et générer le reste automatiquement
//- créer un type de quote «temoignage» (d'autres)
// +lier des quotes entre elles autour de ? (idée ? concepte ???)

import express from "express";
import webpack from "webpack";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import config from "../webpack.config.dev";
//Tools
import bodyParser from "body-parser";

//Framework
import crud from "./crud.js";

const compiler = webpack(config);

/*DB
var FileSync = require('lowdb/adapters/FileSync');
var low = require('lowdb');
var adapter = new FileSync('./db/data.json')
var db = low(adapter)
*/

//Server Params
var port = 8080;
var app = express();

//Parser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(
    require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    })
);

var adapter = new FileSync("./App/Data/data.json");
var db = low(adapter);
//API
var api = crud(db);
app.use("/api", api);

//Template Engine
app.set("view engine", "pug");

//Static Files
app.use(express.static("dist"));

//api
app.use("/api", api);

//Pages
app.get("/", function(req, res) {
    app.set("views", "./appIndex/views");
    res.render("index");
});
app.use("/edit/:app/:table", function(req, res, next) {
    var data = {
        prout: "pars",
        prit: "ndrt"
    }
    req.data = data[req.params.table]

    next();
});
app.get("/edit/:app/:table", function(req, res) {
    app.set("views", "./app" + req.params.app + "/views");
    res.render("edit", {
        data: req.data
    });
});
//Server
/* eslint-disable no-console */
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to port : " + port);
    }
});
//TEST