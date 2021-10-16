"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

var _express = _interopRequireDefault(require("express"));

var _rougeSettings = require("../../rougeSettings.json");

var _mimetypeExtension = _interopRequireDefault(require("mimetype-extension"));

var _sharp = _interopRequireDefault(require("sharp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(appName, filesDb) {
  const router = _express.default.Router();

  router.route("/upload").post((req, res) => {
    let file;
    let uploadPath;
    file = req.files.file;
    const [name, ext] = file.name.split(".");

    const allowedMimetype = _rougeSettings.upload.allowedType.map(item => _mimetypeExtension.default.type(item));

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    if (!allowedMimetype.includes(file.mimetype)) {
      return res.status(401).send("This file type isn't allowed");
    }

    uploadPath = __dirname + "/../Static/uploaded/";

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      _rougeSettings.upload.availableWidth.forEach(width => {
        (0, _sharp.default)(file.data).resize({
          width: width,
          withoutEnlargement: true
        }).toFile("".concat(uploadPath).concat(name, "-").concat(width, ".").concat(ext));
      });

      (0, _sharp.default)(file.data).resize(150).toFile("".concat(uploadPath).concat(name, "-thumb.").concat(ext));
    }

    const filePath = uploadPath + name + "-original." + ext;
    file.mv(filePath, function (err) {
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
    const queryParams = {
      app: appName
    };
    const type = req.params.type;

    if (type && type !== "all") {
      queryParams.type = _mimetypeExtension.default.type(req.params.type);
    }

    return res.json(filesDb.find(queryParams));
  });
  return router;
}