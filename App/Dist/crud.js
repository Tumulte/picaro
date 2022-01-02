"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.find.js");

var _express = _interopRequireDefault(require("express"));

var _utils = require("./utils");

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer.default)();

var updateItem = function updateItem(db, req) {
  db.assign(req.body).write();
};

var crud = function crud(db) {
  var dataRouter = _express.default.Router();

  dataRouter.route("/newmodel/:modelname").post(function (req, res) {
    if (db.has(req.params.app + req.params.modelname).value()) {
      return res.status(500).send("The table ".concat(req.params.modelname, " already exists"));
    }

    db.set(req.params.app + "_" + req.params.modelname, []).write();
  });
  dataRouter.route("/:table").get(function (req, res) {
    res.json(db.find());
  }).post(upload.none(), function (req, res) {
    db.insert((0, _utils.cleanData)(req.body));
    res.send("Saved");
  }).put(function (req, res) {
    db.update(req.body);
    res.send("content saved");
  });
  dataRouter.route("/:table/:itemId").get(function (req, res) {
    res.json(req.data);
  }).put(function (req, res) {
    db.get((0, _utils.makeTableName)(req)).find({
      id: req.params.itemId
    }).assign(req.body).write();
    res.send("updated !");
  }).patch(function (req, res) {
    updateItem(db, req);
    res.send("updated !");
  }).delete(function (req, res) {
    db.findAndRemove({
      id: req.params.itemId
    });
    res.send("Item deleted");
  });
  return dataRouter;
};

var _default = crud;
exports.default = _default;