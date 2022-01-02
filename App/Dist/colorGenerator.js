"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColorSet = generateColorSet;

require("core-js/modules/web.dom-collections.for-each.js");

var _colorHelper = require("./colorHelper");

var colorUtils = new _colorHelper.colorHelper();
/**
 *
 * @param {string} dominant Hexadecimal of the main color
 * @class
 */

function generateColorSet(dominant) {
  this.lightVariation = 0;
  this.satVariation = 10;
  /**
   * @type {import("../Typings/global").Hsl}
   */

  this.hsl = colorUtils.hexToHsl(dominant).getValueCollection();
  /**
   * @type {object}
   */

  this.colorCollection = {
    dominant: dominant,
    combinationCollection: []
  };
  var self = this;
  /**
   *
   * @param {number} angle
   * @returns {number}
   */

  var base360 = function base360(angle) {
    if (angle > 360) {
      return angle - 360;
    } else if (angle < 0) {
      return angle + 360;
    } else {
      return angle;
    }
  };
  /**
   *
   * @param {number} baseValue The base value (0-100)
   * @param {number} variation The variation from the base value (1-10)
   * @returns {Array} Returns an evenly distributed array of numbers (min: 0, max: 100. ordered low to high)
   */


  var getSubValues = function getSubValues(baseValue, variation) {
    var offset = 0;

    for (var i = 1; i <= 5; i++) {
      if (baseValue + (i - 1) * variation > 100) {
        offset += 1;
      } else if (baseValue - i * variation < 0) {
        offset -= 1;
      }
    }

    offset = offset * variation;
    var valueCollection = [];

    for (var _i = 1; _i <= 10; _i++) {
      if (_i <= 5) {
        valueCollection[_i - 1] = baseValue - (6 - _i) * variation - offset;
      } else {
        valueCollection[_i - 1] = baseValue + (_i - 6) * variation - offset;
      }
    }

    return valueCollection;
  };
  /**
     *
     * @param {Object} combination
     * @param {number} combination.hue
     * @param {number} combination.light
     * @param {number} combination.saturation
      */


  var addCombination = function addCombination(combination) {
    combination.hue = base360(combination.hue);
    var hex = colorUtils.hslToHex(combination).getString();
    self.colorCollection.combinationCollection.push({
      hex: hex,
      hue: combination.hue,
      light: combination.light,
      saturation: combination.saturation
    });
    addSubCombination();
  };
  /**
     *
     * @param {Object} combination
     * @param {boolean=} gray
      */


  var createSubCombinationArray = function createSubCombinationArray(combination, gray) {
    var lightCollection = getSubValues(combination.light, self.lightVariation);
    var satCollection = getSubValues(combination.saturation, self.satVariation);
    var subCombination = [];

    for (var i = 0; i < 10; i++) {
      subCombination[i] = {
        hue: combination.hue,
        light: lightCollection[i],
        saturation: gray ? 0 : satCollection[i],
        hex: colorUtils.hslToHex({
          hue: combination.hue,
          light: lightCollection[i],
          saturation: satCollection[i]
        }).getString()
      };
    }

    if (gray) {
      subCombination.push({
        hue: 0,
        light: 0,
        saturation: 0,
        hex: "#000"
      });
      subCombination.push({
        hue: 0,
        light: 100,
        saturation: 0,
        hex: "#fff"
      });
    }

    return subCombination;
  };
  /**
   *
   */


  var addSubCombination = function addSubCombination() {
    var combinationCollection = self.colorCollection.combinationCollection;
    var lastEntry = combinationCollection[combinationCollection.length - 1];
    lastEntry.subCombination = createSubCombinationArray(lastEntry);
  };
  /**
   * @param {string} newColor The hex of the new color
   */


  this.updateColor = function (newColor) {
    this.colorCollection.dominant = newColor;

    if (newColor.hue) {
      this.hsl = newColor;
    } else {
      this.hsl = colorUtils.hexToHsl(newColor).getValueCollection();
    }

    return this;
  };

  this.combination = function () {
    var tonic = this.hsl;
    tonic.hue = this.hsl.hue + 180;
    addCombination(tonic);
    return this.colorCollection;
  };

  this.splitCombination = function () {
    var baseHue = this.hsl.hue;
    var tonic = this.hsl;
    var split = 30;
    tonic.hue = this.hsl.hue + (180 + split);
    addCombination(tonic);
    tonic.hue = baseHue;
    tonic.hue = this.hsl.hue + (180 - split);
    addCombination(tonic);
    return this.colorCollection;
  }; // TODO : remove "object" types

  /**
   * @param {Array} colors
   * @param {number} lightVariation
   * @param {number} satVariation
   * @returns {object}
   */


  this.generate = function (colors, lightVariation, satVariation) {
    var _this = this;

    this.lightVariation = lightVariation;
    this.satVariation = satVariation;
    this.colorCollection.dominantSubCollection = createSubCombinationArray(this.hsl);
    this.colorCollection.combinationCollection = [];
    colors.forEach(function (item) {
      var saturation = item.saturation !== undefined ? item.saturation : _this.hsl.saturation;
      var light = item.light !== undefined ? item.light : _this.hsl.light;
      var combination = {
        hue: _this.hsl.hue + item.hueVariation,
        saturation: saturation,
        light: light
      };
      addCombination(combination);
    });
    this.colorCollection.graySubCollection = createSubCombinationArray({
      hue: this.hsl.hue,
      saturation: 0,
      light: this.hsl.light
    }, true);
    this.colorCollection.alertSubCollection = createSubCombinationArray({
      hue: 0,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    });
    this.colorCollection.warningSubCollection = createSubCombinationArray({
      hue: 60,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    });
    this.colorCollection.successSubCollection = createSubCombinationArray({
      hue: 120,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    });
    this.colorCollection.infoSubCollection = createSubCombinationArray({
      hue: 240,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    });
    return this.colorCollection;
  };
}