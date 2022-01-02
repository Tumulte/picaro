"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settingCrud;

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _rougeSettings = require("../../rougeSettings.json");

var _utils = require("./utils");

var _cssFileGenerator = require("./cssFileGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function settingCrud(settingDb, styleSetDb, app) {
  var dataRouter = _express.default.Router(); // All app settings


  dataRouter.route("/all/").get(function (req, res) {
    res.json(settingDb.find());
  });
  dataRouter.route("/fonts").get(function (req, res) {
    var directoryPath = _path.default.join(__dirname, "../../static/fonts");
    /**
     * @type {array}
     */


    var localFonts = [];

    _fs.default.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(403).send("The fonts could not be found ".concat(err));
      }

      files.forEach(function (file) {
        localFonts.push({
          family: file
        });
      });
      res.json(localFonts);
    });
  }); // All style set

  dataRouter.route("/styleset/all").get(function (req, res) {
    var data = styleSetDb.find();
    res.json(data);
  }); // Specific style set

  /**
   * @param req.params.styleId          styleSet Id (passed by query string).
   */

  dataRouter.route("/styleset/:styleId").get(function (req, res) {
    /**
     * @type {object}
     */
    var data = styleSetDb.findOne({
      id: req.params.styleId
    });

    if (!data) {
      res.status(404).send("No style collection for id ".concat(req.params.styleId));
    }

    res.json(data);
  }).put(function (req, res) {
    var styleSet = req.body;
    styleSetDb.update(styleSet);
    (0, _cssFileGenerator.generateCSSFile)(app.get("appName"), req.body);
    res.send("Settings Saved !");
  }).post(function (req, res) {
    styleSetDb.insert((0, _utils.cleanData)(req.body));
    (0, _cssFileGenerator.generateCSSFile)(app.get("appName"), req.body);
    res.send("Settings Saved !");
  }).delete(function (req, res) {
    //TODO double check this can't be done without being logged
    if (settingDb.get(_rougeSettings.defaultApp.applicationName).find({
      id: req.params.styleId
    }).value()) {
      settingDb.get(_rougeSettings.defaultApp.applicationName).remove({
        id: req.params.styleId
      }).write();
      res.send("styleset ".concat(req.params.styleId, " DELETED"));
    } else {
      res.status(500).send("This style set does not exist or has already been deleted");
      return false;
    }
  }); // Get current app setting (or default app settings if empty)

  dataRouter.route("/:app?").get(function (req, res) {
    if (req.params.app && !_rougeSettings.activeApps.includes(req.params.app)) {
      return res.status(404).send("This app doesn't exist");
    } else {
      var queryResult = settingDb.chain().find({
        applicationName: req.params.app || app.get("appName")
      }, true).eqJoin(styleSetDb, "styleSet", "id", function (left, right) {
        return {
          settings: left,
          styleSet: right
        };
      }).data({
        removeMeta: true
      })[0];
      res.json(queryResult);
    }
  }).put(function (req, res) {
    var styleSet = req.body;
    settingDb.update(styleSet);
    res.send("settings saved");
  }).post(function (req) {
    settingDb.insert((0, _utils.cleanData)(req.body));
  });
  return dataRouter;
}