"use strict";

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

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

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
  const ratio = parseFloat(sizes["line-height"]) + parseFloat(sizes["margin-top"] || 0) + parseFloat(sizes["margin-bottom"] || 0);
  return "".concat(Math.round(ratio * 100) / 100, "rem");
}

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

exports.debounce = debounce;
const configModel = {
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
  let errorArray = [];

  for (const [key, value] of Object.entries(model)) {
    if (value.required && isEmpty(data[key])) {
      errorArray.push({
        error: "required",
        item: key
      });
    } else if (value.datatype) {
      if (typeof data[key] !== value.datatype) {
        errorArray.push({
          error: "type",
          item: key
        });
      }
    } else if (value.regex) {
      const re = new RegExp(value.regex);

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

const webSafeFonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", " Garamond", "Courier New", "Brush Script MT"];
exports.webSafeFonts = webSafeFonts;