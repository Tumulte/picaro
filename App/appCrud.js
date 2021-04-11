import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import {generateCSSFile} from "./Ui/cssFileGenerator";

const upload = multer();


const appCrud = function appCrud(appDb, app, currentApp) {
    const dataRouter = express.Router();
    dataRouter.route("/all/").get(function (req, res) {
        res.json(appDb.get(currentApp.applicationName).value());
    });

    dataRouter
        .route("/settings/")
        .get(function (req, res) {
            res.json(currentApp);
        })
        .put(upload.none(), function (req, res) {
            appDb
                .get("config")
                .find({id: currentApp.id})
                .assign(req.body)
                .write();
            res.send("Config modified successfully");
        });
    dataRouter.route("/").get(function (req, res) {
        /**
         * @type {object}
         */
        let data = appDb.get(currentApp.applicationName).find({id: currentApp.styleSet}).value();
        if (!data) {
            res.status(404).send(`No style collection named ${req.params.styleId}`);
        }
        data.storedColorSet = appDb.get("colorSetPresets").find({id: data.colorCombinationId}).value();
        res.json(data);
    }).post((req, res) => {
        if (req.body.styleSet === "") {
            req.body.styleSet = `styleSet-${req.body.id}`;
        }

        appDb
            .get(currentApp.applicationName)
            // @ts-ignore
            .push(req.body)
            .write();

        //TODO don't saveStyleSet if this fails
        generateCSSFile(currentApp.applicationName, req.body);

        res.send(`settings for ${currentApp.applicationName} saved`);
    });
    dataRouter.route("/overwrite").post((req, res) => {
        appDb
            .get(currentApp.applicationName)
            .find({
                id: req.body.id
            })
            .assign(req.body)
            .write();
        res.send(`StyleSet ${req.body.id} for ${currentApp.applicationName} updated`);

    });
    dataRouter.route("/fonts").get((req, res) => {
        const directoryPath = path.join(__dirname, "../static/fonts");
        /**
         * @type {array}
         */
        const localFonts = [];
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                res.status(403).send(`The fonts could not be found ${err}`);
            }
            files.forEach(function (file) {
                localFonts.push({family: file});
            });
            res.json(localFonts);
        });
    });
    dataRouter
        .route("/:styleId/")
        .get(function (req, res) {
            /**
             * @type {object}
             */
            let data = appDb.get(currentApp.applicationName).find({id: req.params.styleId}).value();
            if (!data.styleCollection) {
                res.status(404).send(`No style collection named ${req.params.styleId}`);
            }
            data.storedColorSet = appDb
                .get("colorSetPresets")
                .find({id: data.styleCollection.colorCombinationId})
                .value();
            res.json(data);
        })
        .delete(function (req, res) {
            //TODO double check this can't be done without being logged
            if (appDb.get(currentApp.applicationName).find({id: req.params.styleId}).value()) {
                appDb.get(currentApp.applicationName).remove({id: req.params.styleId}).write();
                res.send(`styleset ${req.params.styleId} DELETED`);
            } else {
                res.status(500).send("This style set does not exist or has already been deleted");
                return false;
            }
        });

    return dataRouter;
};
export default appCrud;
