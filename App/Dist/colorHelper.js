"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorHelper = colorHelper;

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.array.index-of.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @class
 */
function colorHelper() {
  /**
   *
   * @param {string} hex #RRGGBB
   */
  var parseHex = function parseHex(hex) {
    return parseInt(hex, 16);
  };
  /**
   *
   * @param {number} number
   */


  var toHex = function toHex(number) {
    var hex = number.toString(16);

    if (hex.length === 1) {
      hex = "0".concat(hex);
    }

    return hex.toUpperCase();
  };

  this.hexToRgb = function (color) {
    this.color = color;

    if (this.color.red !== undefined) {
      return this;
    }

    var hex = this.color.replace("#", "");

    if (hex.length === 3) {
      //if 3 digit hex : double each digit
      hex = hex.split("").map(
      /**
       *
       * @param {string} letter
       */
      function (letter) {
        return "".concat(letter + letter);
      }).join("");
    }

    var red = parseHex(hex.substring(0, 2));
    var green = parseHex(hex.substring(2, 4));
    var blue = parseHex(hex.substring(4, 6));
    this.color = {
      red: red,
      green: green,
      blue: blue
    };
    return this;
  };

  this.rgbToHex = function (color) {
    this.color = color;

    if (typeof this.color.red !== "undefined") {
      this.color = "#".concat(toHex(this.color.red)).concat(toHex(this.color.green)).concat(toHex(this.color.blue));
    } else {
      //TODO generic errors for RBG or HEX
      throw new Error('The rgbToHex method require a "{red: XXX, green: YYY, blue: ZZZ}" object as input value');
    }

    return this;
  };

  this.rgbToHsl = function (color) {
    this.color = color;
    var rgbArray = [this.color.red / 255, this.color.green / 255, this.color.blue / 255];
    rgbArray.sort(function (a, b) {
      return a - b;
    });
    var min = rgbArray[0];
    var mid = rgbArray[1];
    var max = rgbArray[2];
    var light = Math.round((min + max) * 100 / 2); //In case on gray

    if (max === min && mid === min) {
      this.color = {
        light: light,
        saturation: 0,
        hue: 0
      };
      return this;
    }

    var saturation;

    if (light > 50) {
      saturation = (max - min) / (2 - max - min);
    } else {
      saturation = (max - min) / (max + min);
    }

    saturation = Math.round(saturation * 100);
    var hue;

    if (max === this.color.red / 255) {
      hue = (this.color.green - this.color.blue) / 255 / (max - min);
    } else if (max === this.color.green / 255) {
      hue = 2 + (this.color.blue - this.color.red) / 255 / (max - min);
    } else {
      hue = 4 + (this.color.red - this.color.green) / 255 / (max - min);
    }

    if (hue < 0) {
      hue = Math.round(hue * 60) + 360;
    } else {
      hue = Math.round(hue * 60);
    }

    this.color = {
      light: light,
      saturation: saturation,
      hue: hue
    };
    return this;
  };

  this.hslToRgb = function (color) {
    this.color = color;
    var light = this.color.light / 100;
    var sat = this.color.saturation / 100;
    var hue = this.color.hue / 360;

    if (this.color.saturation === 0) {
      var lightTo255 = Math.round(light * 255);
      this.color = {
        red: lightTo255,
        green: lightTo255,
        blue: lightTo255
      };
      return this;
    }

    var tempFormula; //I can't find what this is formula is supposed to be.

    if (light < 0.5) {
      tempFormula = light * (1 + sat);
    } else {
      tempFormula = light + sat - light * sat;
    }

    var tempFormula2 = 2 * light - tempFormula;

    var hueToRgb = function hueToRgb(tempFormula, tempFormula2, hue) {
      if (hue < 0) {
        hue += 1;
      } else if (hue > 1) {
        hue -= 1;
      }

      if (hue < 1 / 6) {
        return tempFormula + (tempFormula2 - tempFormula) * 6 * hue;
      } else if (hue < 1 / 2) {
        return tempFormula2;
      } else if (hue < 2 / 3) {
        return tempFormula + (tempFormula2 - tempFormula) * (2 / 3 - hue) * 6;
      } else {
        return tempFormula;
      }
    };

    var red = hueToRgb(tempFormula2, tempFormula, hue + 1 / 3);
    var green = hueToRgb(tempFormula2, tempFormula, hue);
    var blue = hueToRgb(tempFormula2, tempFormula, hue - 1 / 3);
    this.color = {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255)
    };
    return this;
  };
  /**
   *  @returns {colorUtils} this
   */


  this.hexToHsl = function (color) {
    color = this.hexToRgb(color).getValueCollection();
    color = this.rgbToHsl(color).getValueCollection();
    this.color = color;
    return this;
  };
  /**
   *  @returns {colorUtils} this
   */


  this.hslToHex = function (color) {
    color = this.hslToRgb(color).getValueCollection();
    color = this.rgbToHex(color).getValueCollection();
    this.color = color;
    return this;
  };
  /**
   *  @returns {string} this
   */


  this.getString = function (color) {
    if (color) {
      this.color = color;
    }

    if (typeof this.color === "string") {
      return this.color;
    } else if (this.color.red !== undefined) {
      return "rgb(".concat(this.color.red, ",").concat(this.color.green, ",").concat(this.color.blue, ")");
    } else if (this.color.hue !== undefined) {
      return "hsl(".concat(this.color.hue, ",").concat(this.color.saturation, "%,").concat(this.color.light, "%)");
    } else if (this.color.hexred !== undefined) {
      return "#".concat(this.color.hexred).concat(this.color.hexgreen).concat(this.color.hexblue);
    } else {
      throw new Error('The getString method only takes Objects with the following keys : "hue, saturation, light" (with HSL values) - "hexblue, hexgreen, hexred" (with Hexadecimal RGB), "red, green, blue" (with base 256 RGB)');
    }
  };
  /**
   * @returns {Object}
   * @param {Object=} color
   */


  this.getValueCollection = function (color) {
    if (typeof color !== "undefined") {
      this.color = color;
    }

    var re = new RegExp(/^#([0-9a-f]{3}){1,2}$/i);

    if (_typeof(this.color) === "object") {
      return this.color;
    } else if (this.color.indexOf("rgb(") > -1) {
      var colorValues = this.color.split(")")[0].split(",");
      return {
        red: colorValues[0],
        green: colorValues[1],
        blue: colorValues[2]
      };
    } else if (this.color.indexOf("hsl(") > -1) {
      var _colorValues = this.color.split("(")[1].split(")")[0].split(",");

      return {
        hue: parseInt(_colorValues[0]),
        saturation: parseInt(_colorValues[1]),
        light: parseInt(_colorValues[2])
      };
    } else if (re.test(this.color)) {
      var hex = this.color;
      return {
        hexred: hex.substring(1, 3),
        hexgreen: hex.substring(3, 5),
        hexblue: hex.substring(5, 7)
      };
    }
  };
}