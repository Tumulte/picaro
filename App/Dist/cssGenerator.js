"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCSS = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.parse-int.js");

var _colorGenerator = require("./colorGenerator");

var _utils = require("./utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefixClass = "#rf-content-container";
var adminPrefixClass = ".rf-toolbar-container";
var headerTags = "".concat(prefixClass, " h1,\n").concat(prefixClass, " h2,\n").concat(prefixClass, " h3,\n").concat(prefixClass, " h4,\n").concat(prefixClass, " h5,\n").concat(prefixClass, " h6");
/**
 *
 * @param {string} coordinates,
 * @param {Object} colorSet The vueX colorSet object
 * @param {Object} colorSet.combinationCollection,
 * @param {string} colorSet.dominant
 * @returns {string} - the Hex of the color
 */

var getParameter = function getParameter(coordinates, styleSet, colorSet) {
  if (coordinates.includes('"type":"color"')) {
    coordinates = JSON.parse(coordinates);
    var coordinate = coordinates.data[0];
    var subCoordinate = coordinates.data[1];

    if (typeof coordinate === "string") {
      return colorSet["".concat(coordinate, "SubCollection")][subCoordinate].hex;
    } else {
      return colorSet.combinationCollection[coordinate].subCombination[subCoordinate].hex;
    }
  } else if (coordinates.includes('"type":"ratio"')) {
    var ratioCollection = styleSet.ratioCollection;
    coordinates = JSON.parse(coordinates);
    return (0, _utils.makeRatio)(ratioCollection[coordinates.data]).replace(/"/g, "");
  } else if (coordinates.includes("rem")) {
    return coordinates.replace(/"/g, "");
  }

  return (0, _utils.makeFontFamilyName)(coordinates);
};
/**
 *
 * @param {string} font The name of the google font.
 */
//TODO a condition for local fonts


var addFont = function addFont(font, type) {
  if (_utils.webSafeFonts.includes(font)) return "";

  if (type === "google") {
    return "@import url(\"https://fonts.googleapis.com/css?family=".concat(encodeURI(font), "&display=swap\");\n");
  } else if (type === "local") {
    return "@font-face {\n    font-family: \"".concat((0, _utils.makeFontFamilyName)(font), "\";\n    src: url(\"/fonts/").concat(encodeURI(font), "\");\n}");
  }
};

var getColorCSSVariables = function getColorCSSVariables(colorSet) {
  var colorVariable = "";

  for (var i = 0; i < colorSet.dominantSubCollection.length; i++) {
    colorVariable += "    --dominant".concat(i, ": ").concat(colorSet.dominantSubCollection[i].hex, ";\n");
  }

  for (var _i = 0; _i < colorSet.combinationCollection.length; _i++) {
    colorVariable += "    --color".concat(_i, ": ").concat(colorSet.combinationCollection[_i].hex, ";\n");

    for (var j = 0; j < colorSet.combinationCollection[_i].subCombination.length; j++) {
      colorVariable += "    --color".concat(_i, "-sub").concat(j, ": ").concat(colorSet.combinationCollection[_i].subCombination[j].hex, ";\n");
    }
  }

  colorVariable = colorVariable.slice(0, -1); //remove last line break to prevent empty line

  return colorVariable;
};

var getRatioCSSVariables = function getRatioCSSVariables(ratioCollection) {
  var ratioVariables = "";

  for (var _i2 = 0, _Object$entries = Object.entries(ratioCollection); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var totalRatio = void 0;

    if (key === "html") {
      totalRatio = value["line-height"];
    } else {
      totalRatio = parseInt(value["line-height"]) + parseInt(value["margin-top"]) + parseInt(value["margin-bottom"]);
    }

    ratioVariables += "    --ratio-".concat(key, ": ").concat(totalRatio, "rem;\n");
  }

  return ratioVariables;
};
/**
 * Writes the CSS file of the application in the corresponding static folder
 *
 * @param {string} appName The application name
 * @param {Object} styleSet The current selected app styleset
 */


var generateCSS = function generateCSS(styleSet) {
  var colorSet = new _colorGenerator.generateColorSet(styleSet.dominant).generate(styleSet.colorParameterCollection, parseInt(styleSet.variationLightAmt), parseInt(styleSet.variationSatAmt));
  var customCSS = styleSet.selectorCollection;
  var extraParameters = "";
  var htmlProperties = "";
  var bodyProperties = "";
  var headerProperties = "";

  for (var _i3 = 0, _Object$entries2 = Object.entries(customCSS); _i3 < _Object$entries2.length; _i3++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
        selector = _Object$entries2$_i[0],
        properties = _Object$entries2$_i[1];

    var propertiesString = "";
    var selectorText = selector.replace(/,/g, ",\n    ".concat(prefixClass, " "));

    if (selector === "body") {
      propertiesString = "    height: 100%;\n";
    }

    for (var _i4 = 0, _Object$entries3 = Object.entries(properties); _i4 < _Object$entries3.length; _i4++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
          property = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];

      if (value && value !== "0rem") {
        propertiesString += "    ".concat(property, ": ").concat(getParameter(JSON.stringify(value), styleSet, colorSet), ";\n");
      }
    }

    propertiesString = propertiesString.slice(0, -1); //remove last line break to avoid empty line

    if (selector === "body") {
      bodyProperties = "\n".concat(propertiesString);
    } else if (selector === "html") {
      htmlProperties = "".concat(propertiesString);
    } else if (selector === "h1, h2, h3, h4, h5, h6") {
      headerProperties = propertiesString;
    } else if (propertiesString) {
      extraParameters += "".concat(prefixClass, " ").concat(selectorText, ", ").concat(adminPrefixClass, " ").concat(selectorText, "  {\n").concat(propertiesString, "\n}\n");
    }
  }

  var fontFace = "".concat(styleSet.fontFamilyMain ? addFont(styleSet.fontFamilyMain, styleSet.fontOrigin) : "", "\n").concat(styleSet.fontFamilyMain ? addFont(styleSet.fontFamilyTitle, styleSet.fontOrigin) : "", "\n").concat(styleSet.fontFamilyAlt ? addFont(styleSet.fontFamilyAlt, styleSet.fontOrigin) : "");
  return "/* START This is an automatically generated CSS, do not edit */\n".concat(fontFace, "\n:root {\n    --dominant: ").concat(styleSet.dominant, ";\n").concat(getColorCSSVariables(colorSet), "\n").concat(getRatioCSSVariables(styleSet.ratioCollection), "\n}\nhtml{\n").concat(htmlProperties, "\n}\n#rf-content-container {\n    font-family: ").concat((0, _utils.makeFontFamilyName)(styleSet.fontFamilyMain), ";").concat(bodyProperties, "\n}\n").concat(headerTags, " {\n").concat(headerProperties, "\n}\n").concat(extraParameters, "\n/* END This was an automatically generated CSS, do not edit */");
};

exports.generateCSS = generateCSS;