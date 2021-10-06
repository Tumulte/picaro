"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _express = _interopRequireDefault(require("express"));

var _lokijs = _interopRequireDefault(require("lokijs"));

var _lokiFsStructuredAdapter = _interopRequireDefault(require("lokijs/src/loki-fs-structured-adapter"));

var _rougeSettings = require("../../rougeSettings.json");

var _crud = _interopRequireDefault(require("./crud.js"));

var _settingCrud = _interopRequireDefault(require("./settingCrud.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _fileHandling = _interopRequireDefault(require("./fileHandling.js"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _auth = _interopRequireDefault(require("./auth.js"));

var _routing = _interopRequireDefault(require("./routing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*DATABASE INITIALISATION */

/* rougeFramework default Params */
//rougeFramework Back End

/* API TOOLS */
//File uploads
//Authentication
//Basic Routing
const adapter = new _lokiFsStructuredAdapter.default();
const db = new _lokijs.default("./App/Data/rfData.db", {
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

  for (let activeApp of _rougeSettings.activeApps) {
    appDb[activeApp] = db.getCollection(activeApp);
  }

  console.log("DB loaded");

  if (settingsDb === null) {
    console.log("You need to execute the create script rfcli then select create");
    process.exit(1);
  }

  startApp(settingsDb, usersDb, styleSetDb, appDb, filesDb);
}

const startApp = function startApp(settingsDb, userDb, styleSetDb, appDb, filesDb) {
  /*****************************************************************
    /*                      Server Params
    /*****************************************************************/
  const port = 8080;
  const app = (0, _express.default)();
  app.use(_bodyParser.default.json());
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
  app.set("appName", _rougeSettings.defaultApp);
  /**************************************************************************
    /*      method override allows the usage of put/post/delete methods...
    /*************************************************************************/

  app.use((0, _methodOverride.default)("_method"));
  /*****************************************************************
    /*                     Template Engine : pug
    /*****************************************************************/

  app.set("view engine", "pug");
  /*****************************************************************
     /*                        Static Files
     /*****************************************************************/

  app.use("/static", _express.default.static("static"));
  app.use("/static", _express.default.static("node_modules/normalize.css"));
  app.use("/static", _express.default.static("App/Dist"));
  app.use("/fonts", _express.default.static("static/fonts"));
  /*****************************************************************
     /*                        Static Assets
     /*****************************************************************/

  app.use("/images", _express.default.static("App/Static/images"));
  app.use("/svg", _express.default.static("App/Static/svg"));
  app.use("/fonts", _express.default.static("App/Static/fonts"));
  app.use("/uploaded", _express.default.static("App/Static/uploaded"));
  /*****************************************************************
     /*                     Per Apps Static Files
     /*****************************************************************/

  for (let application of _rougeSettings.activeApps) {
    app.use("/".concat(application, "/static"), _express.default.static("app/".concat(application, "/static")));
  }
  /*****************************************************************
    /*                           AUTH
    /*****************************************************************/


  const isDevMode = process.env.NODE_ENV === "development" && _rougeSettings.devMode === true;

  if (!isDevMode) {
    (0, _auth.default)(app, userDb);
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

  const settingApi = (0, _settingCrud.default)(settingsDb, styleSetDb, app);
  app.use("/settingapi", settingApi);
  const api = (0, _crud.default)(appDb[app.get("appName")], app);
  app.use("/api", api);
  /*****************************************************************
   /*                   File Uploads
   /*****************************************************************/

  app.use((0, _expressFileupload.default)({
    limits: {
      fileSize: _rougeSettings.upload.maxSize * 1024 * 1024
    }
  }));
  const file = (0, _fileHandling.default)(appDb[app.get("appName")].name, filesDb);
  app.use("/file", file);
  /*****************************************************************
    /*                   Routing
    /*****************************************************************/

  (0, _routing.default)(app);
  /*****************************************************************
  /*                   Local Variables
  /*****************************************************************/

  app.locals.env = process.env;
  /*****************************************************************
    /*                    Start Server
    /*****************************************************************/

  /* eslint-disable no-console */

  app.listen(port, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to port : ".concat(port));
    }
  });
};