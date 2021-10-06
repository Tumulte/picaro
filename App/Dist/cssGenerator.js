"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCSS = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _colorGenerator = require("./colorGenerator");

var _utils = require("./utils");

const prefixClass = "#rf-content-container";
const headerTags = "".concat(prefixClass, " h1,\n").concat(prefixClass, " h2,\n").concat(prefixClass, " h3,\n").concat(prefixClass, " h4,\n").concat(prefixClass, " h5,\n").concat(prefixClass, " h6");
/**
 *
 * @param {string} coordinates,
 * @param {Object} colorSet The vueX colorSet object
 * @param {Object} colorSet.combinationCollection,
 * @param {string} colorSet.dominant
 * @returns {string} - the Hex of the color
 */

const getParameter = function getParameter(coordinates, styleSet, colorSet) {
  if (coordinates.includes('"type":"color"')) {
    coordinates = JSON.parse(coordinates);
    const coordinate = coordinates.data[0];
    const subCoordinate = coordinates.data[1];

    if (typeof coordinate === "string") {
      return colorSet["".concat(coordinate, "SubCollection")][subCoordinate].hex;
    } else {
      return colorSet.combinationCollection[coordinate].subCombination[subCoordinate].hex;
    }
  } else if (coordinates.includes('"type":"ratio"')) {
    const ratioCollection = styleSet.ratioCollection;
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


const addFont = function addFont(font, type) {
  if (_utils.webSafeFonts.includes(font)) return "";

  if (type === "google") {
    return "@import url(\"https://fonts.googleapis.com/css?family=".concat(encodeURI(font), "&display=swap\");\n");
  } else if (type === "local") {
    return "@font-face {\n    font-family: \"".concat((0, _utils.makeFontFamilyName)(font), "\";\n    src: url(\"/fonts/").concat(encodeURI(font), "\");\n}");
  }
};

const getColorCSSVariables = function getColorCSSVariables(colorSet) {
  let colorVariable = "";

  for (let i = 0; i < colorSet.dominantSubCollection.length; i++) {
    colorVariable += "    --dominant".concat(i, ": ").concat(colorSet.dominantSubCollection[i].hex, ";\n");
  }

  for (let i = 0; i < colorSet.combinationCollection.length; i++) {
    colorVariable += "    --color".concat(i, ": ").concat(colorSet.combinationCollection[i].hex, ";\n");

    for (let j = 0; j < colorSet.combinationCollection[i].subCombination.length; j++) {
      colorVariable += "    --color".concat(i, "-sub").concat(j, ": ").concat(colorSet.combinationCollection[i].subCombination[j].hex, ";\n");
    }
  }

  colorVariable = colorVariable.slice(0, -1); //remove last line break to prevent empty line

  return colorVariable;
};

const getRatioCSSVariables = function getRatioCSSVariables(ratioCollection) {
  let ratioVariables = "";

  for (const [key, value] of Object.entries(ratioCollection)) {
    let totalRatio;

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


const generateCSS = function generateCSS(styleSet) {
  const colorSet = new _colorGenerator.generateColorSet(styleSet.dominant).generate(styleSet.colorParameterCollection, parseInt(styleSet.variationLightAmt), parseInt(styleSet.variationSatAmt));
  const customCSS = styleSet.selectorCollection;
  let extraParameters = "";
  let htmlProperties = "";
  let bodyProperties = "";
  let headerProperties = "";

  for (const [selector, properties] of Object.entries(customCSS)) {
    let propertiesString = "";
    const selectorText = selector.replace(/,/g, ",\n    ".concat(prefixClass, " "));

    if (selector === "body") {
      propertiesString = "    height: 100%;\n";
    }

    for (const [property, value] of Object.entries(properties)) {
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
      extraParameters += "".concat(prefixClass, " ").concat(selectorText, " {\n").concat(propertiesString, "\n}\n");
    }
  }

  let fontFace = "".concat(styleSet.fontFamilyMain ? addFont(styleSet.fontFamilyMain, styleSet.fontOrigin) : "", "\n").concat(styleSet.fontFamilyMain ? addFont(styleSet.fontFamilyTitle, styleSet.fontOrigin) : "", "\n").concat(styleSet.fontFamilyAlt ? addFont(styleSet.fontFamilyAlt, styleSet.fontOrigin) : "");
  return "/* START This is an automatically generated CSS, do not edit */\n".concat(fontFace, "\n:root {\n    --dominant: ").concat(styleSet.dominant, ";\n").concat(getColorCSSVariables(colorSet), "\n").concat(getRatioCSSVariables(styleSet.ratioCollection), "\n}\nhtml{\n").concat(htmlProperties, "\n}\n#rf-content-container {\n    font-family: ").concat((0, _utils.makeFontFamilyName)(styleSet.fontFamilyMain), ";").concat(bodyProperties, "\n}\n").concat(headerTags, " {\n").concat(headerProperties, "\n}\n").concat(extraParameters, "\n/* END This was an automatically generated CSS, do not edit */");
};

exports.generateCSS = generateCSS;