import express from "express";
import { makeTableName, cleanData } from "./utils";
import multer from "multer";

const upload = multer();
const updateItem = function updateItem(db, req) {
  db.assign(req.body).write();
};
const crud = function crud(app) {
  const dataRouter = express.Router();

  dataRouter.route("/newmodel/:modelname").post(function(req, res) {
    if (app.locals.db.has(req.params.app + req.params.modelname).value()) {
      return res
        .status(500)
        .send(`The table ${req.params.modelname} already exists`);
    }

    app.locals.db.set(req.params.app + "_" + req.params.modelname, []).write();
  });

  dataRouter
    .route("/:model")
    .get(function(req, res) {
      res.json(app.locals.db.find({modelId: req.params.model}));
    })
    .post(upload.none(), function(req, res) {
      app.locals.db.insert(cleanData(req.body));
      res.send("Saved");
    })
    .put((req, res) => {
      app.locals.db.update(req.body);
      res.send("content saved");
    });
  dataRouter
      .route("/:model/field/:fields")
      .get(function(req, res) {
        const fieldCollection = req.params.fields.split("-")
        const data = app.locals.db.find({modelId: req.params.model})
        const fieldData = []
        data.forEach(item => {
            const modelData = item.modelData
            const itemFields = modelData.find(item => fieldCollection.includes(item.id) )
            fieldData.push({ itemId: item.id, fieldId: itemFields.id, content: itemFields.content })
        })
        res.json({modelId: req.params.model, fields : fieldData});
      })
  dataRouter
    .route("/:table/id/:itemId")
    .get(function(req, res) {
      res.json(req.data);
    })
    .put(function(req, res) {
      app.locals.db.get(makeTableName(req))
        .find({
          id: req.params.itemId
        })
        .assign(req.body)
        .write();
      res.send("updated !");
    })
    .patch(function(req, res) {
      updateItem(app.locals.db, req);
      res.send("updated !");
    })
    .delete(function(req, res) {
      app.locals.db.findAndRemove({ id: req.params.itemId });
      res.send("Item deleted");
    });

  return dataRouter;
};
export default crud;
