var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var settings = require("./../rougeSettings.json");

var appAdapter = new FileSync("./App/Data/appData.json");
var appDb = low(appAdapter);

var adapter = new FileSync("./App/Data/data.json");
var db = low(adapter);

var models = require("./../models/models.js")

/* eslint-disable no-console */
var initiateApp = function() {
    for (var app in settings.applications) {
        appDb.set(app, []).write()
        console.info("the app " + app + " has been set up in database")
        for (var model in models[app]) {
            db.set(app + "_" + model, []).write()
            console.info("the table " + model + " of the " + app + " app has been set up in database")
        }
    }
}

initiateApp();