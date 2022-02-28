import express from "express";

/*DATABASE INITIALISATION */
import Loki from "lokijs";
import Lfsa from "lokijs/src/loki-fs-structured-adapter";
/* rougeFramework default Params */
import {
  defaultApp,
  activeApps,
  upload,
  devMode
} from "../../rougeSettings.json";

//rougeFramework Back End
import crud from "./crud.js";
import settingCrud from "./settingCrud.js";

/* API TOOLS */
import bodyParser from "body-parser";
import methodOverride from "method-override";

//File uploads
import fileHandling from "./fileHandling.js";
import fileUpload from "express-fileupload";

//Authentication
import auth from "./auth.js";

//Basic Routing
import basicRouting from "./routing";

const adapter = new Lfsa();
const db = new Loki("./App/Data/rfData.db", {
  adapter: adapter,
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

function databaseInitialize() {
  const settingsDb = db.getCollection("settings");
  const usersDb = db.getCollection("users");
  const styleSetDb = db.getCollection("styleset");
  const filesDb = db.getCollection("files");

  const appDb = {};
  for (let activeApp of activeApps) {
    appDb[activeApp] = db.getCollection(activeApp);
  }

  console.log("DB loaded");
  if (settingsDb === null) {
    console.log(
      "You need to execute the create script rfcli then select create"
    );
    process.exit(1);
  }
  startApp(settingsDb, usersDb, styleSetDb, appDb, filesDb);
}

const startApp = function(settingsDb, userDb, styleSetDb, appDb, filesDb) {
  /*****************************************************************
    /*                      Server Params
    /*****************************************************************/
  const port = 8080;
  const app = express();
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.set("appName", defaultApp);

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
  app.use("/dist", express.static("App/Dist"));
  app.use("/fonts", express.static("static/fonts"));

  /*****************************************************************
     /*                        Static Assets
     /*****************************************************************/

  app.use("/images", express.static("App/Static/images"));
  app.use("/svg", express.static("App/Static/svg"));
  app.use("/fonts", express.static("App/Static/fonts"));
  app.use("/uploaded", express.static("App/Static/uploaded"));

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
    /*                           AUTH
    /*****************************************************************/
  const isDevMode = process.env.NODE_ENV === "development" && devMode === true;
  if (!isDevMode) {
    auth(app, userDb);
  }
  app.post("*", (req, res, next) => {
    if (req.isAuthenticated() || isDevMode) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  });
  app.put("*", (req, res, next) => {
    if (req.isAuthenticated() || isDevMode) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  });
  app.get("*", (req, res, next) => {
    app.set("isLogged", req.isAuthenticated() || isDevMode);
    next();
  });

  /*****************************************************************
    /*                        APIs
    /*****************************************************************/

  const settingApi = settingCrud(settingsDb, styleSetDb, app);
  app.use("/settingapi", settingApi);
  const api = crud(app);
  app.use("/api", function(req, res, next) {
    app.locals.db = appDb[app.get("appName")]
    next()
  })
  app.use("/api", api);

  /*****************************************************************
   /*                   File Uploads
   /*****************************************************************/
  app.use(
    fileUpload({
      limits: { fileSize: upload.maxSize * 1024 * 1024 }
    })
  );
  const file = fileHandling(appDb[app.get("appName")].name, filesDb);
  app.use("/file", file);

  /*****************************************************************
    /*                   Routing
    /*****************************************************************/

  basicRouting(app);

  /*****************************************************************
 /*                   Local Variables
 /*****************************************************************/

  app.locals.env = process.env;

  /*****************************************************************
    /*                    Start Server
    /*****************************************************************/
  /* eslint-disable no-console */
  app.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`connected to port : ${port}`);
    }
  });
};
