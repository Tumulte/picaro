import express from "express";
import dbUtils from "./dbUtils";
import {makeTableName} from "./utils";
import multer from "multer";

const RelationHandler = dbUtils.RelationHandler;
const DataWriteHandler = dbUtils.DataWriteHandler;
const upload = multer();

const updateItem = function updateItem(db, req) {
    db.assign(req.body).write();
};
const crud = function crud(db) {
    const dataRouter = express.Router();

    dataRouter.route("/:app/newmodel/:modelname").post(function (req, res) {
        if (db.has(req.params.app + req.params.modelname).value()) {
            return res.status(500).send(`The table ${req.params.modelname} already exists`);
        }

        db.set(req.params.app + "_" + req.params.modelname, []).write();
    });

    dataRouter.use("/:app/:table/:itemId", function (req, res, next) {
        if (db.has(makeTableName(req)).value()) {
            let data = new RelationHandler(db, req);
            data = data.get().getRelations();
            if (data === false) {
                res.status(404).send(`Item "${req.params.itemId}" does not exist`);
            } else {
                req.data = data;
                next();
            }
        } else {
            res.status(404).send(`this data ${makeTableName(req)} does not exist`);
        }
    });

    dataRouter
        .route("/:app/:table")
        .get(function (req, res) {
            if (db.has(makeTableName(req)).value()) {
                const data = new RelationHandler(db, req);
                res.json(data.get().getRelations());
            } else {
                res.status(404).send(`There is no table named ${makeTableName(req)}`);
            }
        })
        .post(upload.none(), function (req, res) {
            const data = new DataWriteHandler(db, req);
            data.save();
            res.send("Sauvegardé");
        });

    dataRouter
        .route("/:app/:table/:itemId")
        .get(function (req, res) {
            res.json(req.data);
        })

        .put(function (req, res) {
            db.get(makeTableName(req))
                .find({
                    id: req.params.itemId,
                })
                .assign(req.body)
                .write();
            res.send("updated !");
        })
        .patch(function (req, res) {
            updateItem(db, req);
            res.send("updated !");
        })
        .delete(function (req, res) {
            db.get("posts")
                .remove({
                    id: req.params.itemId,
                })
                .write();
            res.send("ok");
        });

    return dataRouter;
};
export default crud;
