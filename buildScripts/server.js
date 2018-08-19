//TODO :
//-Gérer les tags et l'héritage Quote -> Ouvrage -> auteur.
//- Filtre par tag : ajouter le scope (auteur/ouvrage/quote)
// +en gros ne laisser les tags que pour les quotes et générer le reste automatiquement
//- créer un type de quote «temoignage» (d'autres)
// +lier des quotes entre elles autour de ? (idée ? concepte ???)

import express from "express";
import webpack from "webpack";
import config from "../webpack.config.dev";
//Tools
import bodyParser from "body-parser";

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

//Template Engine
app.set("view engine", "pug");

//Static Files
app.use(express.static("dist"));

//Pages
app.get("/", function (req, res) {
  res.render("index");
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
//TEST