//TODO :
//-Gérer les tags et l'héritage Quote -> Ouvrage -> auteur.
//- Filtre par tag : ajouter le scope (auteur/ouvrage/quote)
// +en gros ne laisser les tags que pour les quotes et générer le reste automatiquement
//- créer un type de quote «temoignage» (d'autres)
// +lier des quotes entre elles autour de ? (idée ? concepte ???)

console.log("connected to port : " + port);

var express = require('express');
//Tools
var bodyParser = require('body-parser')

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
app.use(bodyParser.urlencoded({
    extended: true
}));


//Template Engine
app.set('view engine', "pug");

//Static Files
app.use(express.static('public'));


//Pages
app.get('/', function (req, res) {
    res.render('index');
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