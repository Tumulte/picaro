"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/es.string.includes.js");

var _rougeSettings = require("../../rougeSettings.json");

function _default(app) {
  app.get("/:app", function (req, res) {
    if (_rougeSettings.activeApps.includes(req.params.app)) {
      app.set("appName", req.params.app);
      app.set("views", "".concat(__dirname, "/../../app").concat(req.params.app, "/views"));
      res.render("index", {
        isLogged: app.get("isLogged"),
        appName: req.params.app
      });
    } else if (req.params.app !== "admin" || req.params.app !== "__webpack_hmr") {
      res.status(404).send("This page does not exist");
    }
  });
  app.get("/edit/:app/:table/:id", function (req, res) {
    app.set("views", "./app".concat(req.params.app, "/views"));
    res.render("edit");
  });
  app.get("/admin/add/:app/:table", function (req, res) {
    app.set("views", "./app".concat(req.params.app, "/views"));
    res.render("add");
  }); //Pages

  app.get("/", function (req, res) {
    app.set("appName", _rougeSettings.defaultApp);
    app.set("views", "".concat(__dirname, "/../../app").concat(_rougeSettings.defaultApp, "/views"));
    res.render("index", {
      isLogged: app.get("isLogged"),
      appName: _rougeSettings.defaultApp
    });
  });
  app.get("/:app/:view", function (req, res, next) {
    if (req.params.app === "dev-bundle") {
      return next();
    }

    const upperCasedApp = req.params.app.charAt(0).toUpperCase() + req.params.app.slice(1);
    app.set("appName", req.params.app);
    app.set("views", "".concat(__dirname, "/../../app").concat(upperCasedApp, "/views"));
    res.render(req.params.view, {
      isLogged: app.get("isLogged"),
      appName: req.params.app
    });
  });
}