import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import settings from "./../rougeSettings.json";
import models from "./../models/models.js";

const appAdapter = new FileSync("./App/Data/appData.json");
const appDb = low(appAdapter);

const adapter = new FileSync("./App/Data/data.json");
const db = low(adapter);
/* eslint-disable no-console */
const initiateApp = function () {
    for (let app in settings.applications) {
        appDb.set(app, []).write();
        console.info(`the app ${app} has been set up in database`);
        for (let model in models[app]) {
            db.set(`${app}_${model}`, []).write();
            console.info(`the table ${model} of the ${app} app has been set up in database`);
        }
    }
};

initiateApp();