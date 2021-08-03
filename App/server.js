import express from "express";
/*DATABASE INITIALISATION */
import Loki from 'lokijs'
import Lfsa from 'lokijs/src/loki-fs-structured-adapter'
/* rougeFramework default Params */
import settings from "../rougeSettings.json"

//rougeFramework Back End
import crud from "./crud.js";
import appCrud from "./appCrud.js";

/* API TOOLS */
import bodyParser from "body-parser";
import methodOverride from "method-override";

//Authentication
import basicRouting from "./routing";

const adapter = new Lfsa();
const db = new Loki('rfData.db', {
    adapter : adapter,
    autoload: true,
    autoloadCallback : databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});

const isProd = process.env.NODE_ENV === "production";
const currentApplicationSettings = {}

function databaseInitialize() {
    const settingsDb = db.getCollection("settings")
    const userDb = db.getCollection("users")
    currentApplicationSettings.applicationName = settings.applications.defaultApp;
    const appDb = db.getCollection(currentApplicationSettings.applicationName)

    console.log("DB loaded")
    if(settingsDb === null) {
        console.log("You need to execute the create script rfcli then select create")
        process.exit(1)
    }
    startApp(settingsDb,userDb, appDb)
}

const startApp = function(settingsDb,userDb, appDb){
    /*****************************************************************
    /*                      Server Params
    /*****************************************************************/
    const port = 8080;
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /**************************************************************************
    /*      method override allows the usage of put/post/delete methods...
    /*************************************************************************/

    app.use(methodOverride("_method"));

    /*****************************************************************
    /*                     Template Engine : pug
    /*****************************************************************/

    app.set("view engine", "pug");

    /*****************************************************************
     /*                        Static Files
     /*****************************************************************/

    app.use("/static", express.static("static"));
    app.use("/static", express.static("node_modules/normalize.css"));
    app.use("/static", express.static("App/Dist"));
    app.use("/fonts", express.static("static/fonts"));

    /*****************************************************************
     /*                        Static Assets
     /*****************************************************************/

    app.use("/images", express.static("App/Static/images"));
    app.use("/svg", express.static("App/Static/svg"));
    app.use("/fonts", express.static("App/Static/fonts"));

    /*****************************************************************
     /*                     Per Apps Static Files
     /*****************************************************************/

    for (let application in settings.applications) {
        app.use(
            `/${settings.applications[application]}/static`,
            express.static(`app/${settings.applications[application]}/static`)
        );
    }

    /*****************************************************************
    /*                     AUTH (tba)
    /*****************************************************************/

    //auth(app)

    /*****************************************************************
    /*                        APIs
    /*****************************************************************/

    const appApi = appCrud(settingsDb, app, currentApplicationSettings);
    app.use("/appapi", appApi);
    const api = crud(appDb);
    app.use("/api", api);


    /*****************************************************************
    /*                 Front-end global variables
    /*****************************************************************/
    app.use(function (req, res, next) {
        res.locals.environment = process.env.NODE_ENV;
        res.locals.title = currentApplicationSettings.title;
        res.locals.language = currentApplicationSettings.language;
        res.locals.settings = currentApplicationSettings;
        res.locals.appName = currentApplicationSettings.applicationName;

        res.locals.isLogged = currentApplicationSettings.devMode ? true : true //req.isAuthenticated();

        next();
    });
    if (!isProd) {
        app.use(function (req, res, next) {
            res.locals.isDev = true;
            next();
        });
    }

    /*****************************************************************
    /*                   Routing
    /*****************************************************************/

    basicRouting(app, currentApplicationSettings)

    /*****************************************************************
    /*                    Start Server
    /*****************************************************************/
    /* eslint-disable no-console */
    app.listen(port, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(`connected to port : ${port}`);
        }
    });

}


























