"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCSSFile = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _cssGenerator = require("./cssGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateCSSFile = function generateCSSFile(appName, styleSet) {
  _fs.default.writeFileSync(_path.default.join(__dirname, "/../../static/", appName.toLowerCase(), "/baseStyle.css"), (0, _cssGenerator.generateCSS)(styleSet), err => {
    if (err) {
      console.error(err);
    }
  });
};

exports.generateCSSFile = generateCSSFile;