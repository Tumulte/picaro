import express from "express";
import { makeTableName } from "./utils";
import multer from "multer";

const upload = multer();

const updateItem = function updateItem(db, req) {
  db.assign(req.body).write();
};
const crud = function crud(db) {
  const dataRouter = express.Router();

  dataRouter.route("/newmodel/:modelname").post(function(req, res) {
    if (db.has(req.params.app + req.params.modelname).value()) {
      return res
        .status(500)
        .send(`The table ${req.params.modelname} already exists`);
    }

    db.set(req.params.app + "_" + req.params.modelname, []).write();
  });

  dataRouter.use("/:table/:itemId", function(req, res, next) {
    if (db[req.params.app]) {
      req.data = db[req.params.app].find({ id: req.params.itemId });
      next();
    } else {
      res.status(404).send(`this data ${makeTableName(req)} does not exist`);
    }
  });

  dataRouter
    .route("/:table")
    .get(function(req, res) {
      res.json(db.find());
    })
    .post(upload.none(), function(req, res) {
      data.save();
      res.send("Saved");
    });

  dataRouter
    .route("/:table/:itemId")
    .get(function(req, res) {
      res.json(req.data);
    })
    .put(function(req, res) {
      db.get(makeTableName(req))
        .find({
          id: req.params.itemId
        })
        .assign(req.body)
        .write();
      res.send("updated !");
    })
    .patch(function(req, res) {
      updateItem(db, req);
      res.send("updated !");
    })
    .delete(function(req, res) {
      db.get(makeTableName(req))
        .remove({
          id: req.params.itemId
        })
        .write();
      res.send("Item deleted");
    });

  return dataRouter;
};
export default crud;
