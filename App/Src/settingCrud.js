import express from "express";
import fs from "fs";
import path from "path";
import { defaultApp, activeApps } from "../../rougeSettings.json";
import { cleanData } from "./utils";
import { generateCSSFile } from "./cssFileGenerator";

export default function settingCrud(settingDb, styleSetDb, app) {
  const dataRouter = express.Router();
  // All app settings
  dataRouter.route("/all/").get(function(req, res) {
    res.json(settingDb.find());
  });

  dataRouter.route("/fonts").get((req, res) => {
    const directoryPath = path.join(__dirname, "../static/fonts");
    /**
     * @type {array}
     */
    const localFonts = [];
    fs.readdir(directoryPath, function(err, files) {
      if (err) {
        res.status(403).send(`The fonts could not be found ${err}`);
      }
      files.forEach(function(file) {
        localFonts.push({ family: file });
      });
      res.json(localFonts);
    });
  });
  // All style set
  dataRouter.route("/styleset/all").get(function(req, res) {
    let data = styleSetDb.find();
    res.json(data);
  });

  // Specific style set
  /**
   * @param req.params.styleId          styleSet Id (passed by query string).
   */
  dataRouter
    .route("/styleset/:styleId")
    .get(function(req, res) {
      /**
       * @type {object}
       */
      let data = styleSetDb.findOne({ id: req.params.styleId });
      if (!data) {
        res
          .status(404)
          .send(`No style collection for id ${req.params.styleId}`);
      }
      res.json(data);
    })
    .put((req, res) => {
      let styleSet = req.body;
      styleSetDb.update(styleSet);
      generateCSSFile(app.get("appName"), req.body);

      res.send("Settings Saved !");
    })
    .post((req, res) => {
      styleSetDb.insert(cleanData(req.body));
      generateCSSFile(app.get("appName"), req.body);

      res.send("Settings Saved !");
    })
    .delete(function(req, res) {
      //TODO double check this can't be done without being logged
      if (
        settingDb
          .get(defaultApp.applicationName)
          .find({ id: req.params.styleId })
          .value()
      ) {
        settingDb
          .get(defaultApp.applicationName)
          .remove({ id: req.params.styleId })
          .write();
        res.send(`styleset ${req.params.styleId} DELETED`);
      } else {
        res
          .status(500)
          .send("This style set does not exist or has already been deleted");
        return false;
      }
    });

  // Get current app setting (or default app settings if empty)
  dataRouter
    .route("/:app?")
    .get(function(req, res) {
      if (req.params.app && !activeApps.includes(req.params.app)) {
        return res.status(404).send("This app doesn't exist");
      } else {
        const queryResult = settingDb
          .chain()
          .find({ applicationName: req.params.app || app.get("appName") }, true)
          .eqJoin(styleSetDb, "styleSet", "id", (left, right) => {
            return { settings: left, styleSet: right };
          })
          .data({ removeMeta: true })[0];
        res.json(queryResult);
      }
    })
    .put((req, res) => {
      let styleSet = req.body;
      settingDb.update(styleSet);
      res.send("settings saved");
    })
    .post(req => {
      settingDb.insert(cleanData(req.body));
    });

  return dataRouter;
}
