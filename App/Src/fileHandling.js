import express from "express";
import { upload } from "../../rougeSettings.json";
import mimetypeExtension from "mimetype-extension";
import sharp from "sharp";

export default function(appName, filesDb) {
  const router = express.Router();

  router.route("/upload").post((req, res) => {
    let file;
    let uploadPath;
    file = req.files.file;
    const [name, ext] = file.name.split(".");

    const allowedMimetype = upload.allowedType.map(item =>
      mimetypeExtension.type(item)
    );
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    if (!allowedMimetype.includes(file.mimetype)) {
      return res.status(401).send("This file type isn't allowed");
    }
    uploadPath = __dirname + "/../Static/uploaded/";
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      upload.availableWidth.forEach(width => {
        sharp(file.data)
          .resize({ width: width, withoutEnlargement: true })
          .toFile(`${uploadPath}${name}-${width}.${ext}`);
      });
      sharp(file.data)
        .resize(150)
        .toFile(`${uploadPath}${name}-thumb.${ext}`);
    }

    const filePath = uploadPath + name + "-original." + ext;

    file.mv(filePath, function(err) {
      if (err) return res.status(500).send(err);

      res.send("File uploaded!");
    });
    console.log(appName);
    filesDb.insert({
      name: "",
      file: file.name,
      app: appName,
      type: file.mimetype
    });
  });
  router.route("/list/:type?/:search?").get((req, res) => {
    const queryParams = { app: appName };
    const type = req.params.type;
    if (type && type !== "all") {
      queryParams.type = mimetypeExtension.type(req.params.type);
    }
    return res.json(filesDb.find(queryParams));
  });
  return router;
}
