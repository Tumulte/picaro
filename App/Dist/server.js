"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.function.name.js");

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var adapter = new _lokiFsStructuredAdapter.default();
var db = new _lokijs.default("./App/Data/rfData.db", {
  adapter: adapter,
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

function databaseInitialize() {
  var settingsDb = db.getCollection("settings");
  var usersDb = db.getCollection("users");
  var styleSetDb = db.getCollection("styleset");
  var filesDb = db.getCollection("files");
  var appDb = {};

  var _iterator = _createForOfIteratorHelper(_rougeSettings.activeApps),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var activeApp = _step.value;
      appDb[activeApp] = db.getCollection(activeApp);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  console.log("DB loaded");

  if (settingsDb === null) {
    console.log("You need to execute the create script rfcli then select create");
    process.exit(1);
  }

  startApp(settingsDb, usersDb, styleSetDb, appDb, filesDb);
}

var startApp = function startApp(settingsDb, userDb, styleSetDb, appDb, filesDb) {
  /*****************************************************************
    /*                      Server Params
    /*****************************************************************/
  var port = 8080;
  var app = (0, _express.default)();
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
  app.use("/dist", _express.default.static("App/Dist"));
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

  var _iterator2 = _createForOfIteratorHelper(_rougeSettings.activeApps),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var application = _step2.value;
      app.use("/".concat(application, "/static"), _express.default.static("app/".concat(application, "/static")));
    }
    /*****************************************************************
      /*                           AUTH
      /*****************************************************************/

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var isDevMode = process.env.NODE_ENV === "development" && _rougeSettings.devMode === true;

  if (!isDevMode) {
    (0, _auth.default)(app, userDb);
  }

  app.post("*", function (req, res, next) {
    if (req.isAuthenticated() || isDevMode) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  });
  app.put("*", function (req, res, next) {
    if (req.isAuthenticated() || isDevMode) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  });
  app.get("*", function (req, res, next) {
    app.set("isLogged", req.isAuthenticated() || isDevMode);
    next();
  });
  /*****************************************************************
    /*                        APIs
    /*****************************************************************/

  var settingApi = (0, _settingCrud.default)(settingsDb, styleSetDb, app);
  app.use("/settingapi", settingApi);
  var api = (0, _crud.default)(appDb[app.get("appName")], app);
  app.use("/api", api);
  /*****************************************************************
   /*                   File Uploads
   /*****************************************************************/

  app.use((0, _expressFileupload.default)({
    limits: {
      fileSize: _rougeSettings.upload.maxSize * 1024 * 1024
    }
  }));
  var file = (0, _fileHandling.default)(appDb[app.get("appName")].name, filesDb);
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