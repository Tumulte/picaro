import express from "express";
/*DATABASE INITIALISATION */
import Loki from 'lokijs'
import Lfsa from 'lokijs/src/loki-fs-structured-adapter'
/* rougeFramework default Params */
import {defaultApp, activeApps} from "../rougeSettings.json"

//rougeFramework Back End
import crud from "./crud.js";
import settingCrud from "./appCrud.js";

/* API TOOLS */
import bodyParser from "body-parser";
import methodOverride from "method-override";

//Authentication
import basicRouting from "./routing";

const adapter = new Lfsa();
const db = new Loki('./App/Data/rfData.db', {
    adapter : adapter,
    autoload: true,
    autoloadCallback : databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});

const isProd = process.env.NODE_ENV === "production";

function databaseInitialize() {
    const settingsDb = db.getCollection("settings")
    const userDb = db.getCollection("users")
    const appDb = []
    for(let activeApp of activeApps){
        appDb.push(db.getCollection(activeApp))
    }

    console.log("DB loaded")
    if(settingsDb === null) {
        console.log("You need to execute the create script rfcli then select create")
        process.exit(1)
    }
    startApp(settingsDb,userDb, appDb)
}

const  startApp = function(settingsDb,userDb, appDb){
    /*****************************************************************
    /*                      Server Params
    /*****************************************************************/
    const port = 8080;
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('appName', defaultApp)

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

    for (let application of activeApps) {
        app.use(
            `/${application}/static`,
            express.static(`app/${application}/static`)
        );
    }

    /*****************************************************************
    /*                     AUTH (tba)
    /*****************************************************************/

    //auth(app)
    app.set("isLogged", true);  //req.isAuthenticated();

    /*****************************************************************
    /*                        APIs
    /*****************************************************************/

    const settingApi = settingCrud(settingsDb, app);
    app.use("/appapi", settingApi);
    const api = crud(appDb);
    app.use("/api", api);


    /*****************************************************************
    /*                   Routing
    /*****************************************************************/

    basicRouting(app)

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


























