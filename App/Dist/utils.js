"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTableName = makeTableName;
exports.isHexColor = isHexColor;
exports.makeFontFamilyName = makeFontFamilyName;
exports.makeRatio = makeRatio;
exports.validateData = validateData;
exports.cleanData = cleanData;
exports.webSafeFonts = exports.configModel = exports.debounce = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.parse-float.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {import('express').Request} req
 * @returns {string} the table name
 */
function makeTableName(req) {
  return "".concat(req.params.app, "_").concat(req.params.table);
}
/**
 * @param {string} string
 * @returns {boolean}
 */


function isHexColor(string) {
  return /^#([0-9a-f]{6})$/i.test(string);
}

function makeFontFamilyName(name) {
  if (!name) {
    return;
  }

  return name.replace(/.otf/gm, "").replace(/.ttf/gm, "").replace(/.woff/gm, "").replace(/"/g, "");
}

function makeRatio(sizes) {
  var ratio = parseFloat(sizes["line-height"]) + parseFloat(sizes["margin-top"] || 0) + parseFloat(sizes["margin-bottom"] || 0);
  return "".concat(Math.round(ratio * 100) / 100, "rem");
}

var debounce = function debounce(func, delay) {
  var inDebounce;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
};

exports.debounce = debounce;
var configModel = {
  id: {
    required: true,
    datatype: "string"
  },
  name: {
    required: true,
    datatype: "string"
  },
  styleSet: {
    required: true,
    datatype: "string"
  },
  language: {
    required: true,
    datatype: "string"
  },
  title: {
    required: true,
    datatype: "string"
  },
  devMode: {
    required: true,
    datatype: "boolean"
  },
  messageTimeOut: {
    required: true,
    datatype: "number"
  },
  applicationName: {
    required: true,
    datatype: "string"
  },
  navStructureString: {
    required: true,
    datatype: "string"
  },
  modelCollection: {
    required: true,
    datatype: "object"
  }
};
exports.configModel = configModel;

function isEmpty(data) {
  return !data && data !== false && data !== 0 && data !== "0" || data === [] || data === {};
}

function validateData(model, data) {
  var errorArray = [];

  for (var _i = 0, _Object$entries = Object.entries(model); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value.required && isEmpty(data[key])) {
      errorArray.push({
        error: "required",
        item: key
      });
    } else if (value.datatype) {
      if (_typeof(data[key]) !== value.datatype) {
        errorArray.push({
          error: "type",
          item: key
        });
      }
    } else if (value.regex) {
      var re = new RegExp(value.regex);

      if (!re.test(data[key])) {
        errorArray.push({
          error: "regex",
          item: key
        });
      }
    }
  }

  if (errorArray.length === 0) errorArray = null;
  return errorArray;
}

function cleanData(data) {
  delete data.$loki;
  delete data.meta; //TODO add security

  return data;
}

var webSafeFonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", " Garamond", "Courier New", "Brush Script MT"];
exports.webSafeFonts = webSafeFonts;