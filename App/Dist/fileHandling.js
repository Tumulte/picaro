"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.from.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.find.js");

var _express = _interopRequireDefault(require("express"));

var _rougeSettings = require("../../rougeSettings.json");

var _mimetypeExtension = _interopRequireDefault(require("mimetype-extension"));

var _sharp = _interopRequireDefault(require("sharp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(appName, filesDb) {
  var router = _express.default.Router();

  router.route("/upload").post(function (req, res) {
    var file;
    var uploadPath;
    file = req.files.file;

    var _file$name$split = file.name.split("."),
        _file$name$split2 = _slicedToArray(_file$name$split, 2),
        name = _file$name$split2[0],
        ext = _file$name$split2[1];

    var allowedMimetype = _rougeSettings.upload.allowedType.map(function (item) {
      return _mimetypeExtension.default.type(item);
    });

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    if (!allowedMimetype.includes(file.mimetype)) {
      return res.status(401).send("This file type isn't allowed");
    }

    uploadPath = __dirname + "/../Static/uploaded/";

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      _rougeSettings.upload.availableWidth.forEach(function (width) {
        (0, _sharp.default)(file.data).resize({
          width: width,
          withoutEnlargement: true
        }).toFile("".concat(uploadPath).concat(name, "-").concat(width, ".").concat(ext));
      });

      (0, _sharp.default)(file.data).resize(150).toFile("".concat(uploadPath).concat(name, "-thumb.").concat(ext));
    }

    var filePath = uploadPath + name + "-original." + ext;
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
  router.route("/list/:type?/:search?").get(function (req, res) {
    var queryParams = {
      app: appName
    };
    var type = req.params.type;

    if (type && type !== "all") {
      queryParams.type = _mimetypeExtension.default.type(req.params.type);
    }

    return res.json(filesDb.find(queryParams));
  });
  return router;
}