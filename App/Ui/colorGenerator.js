import { colorHelper } from "./colorHelper";

const colorUtils = new colorHelper();

/**
 *
 * @param {string} dominant Hexadecimal of the main color
 * @class
 */
export function generateColorSet(dominant) {
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
  const self = this;

  /**
   *
   * @param {number} angle
   * @returns {number}
   */
  const base360 = function(angle) {
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
  const getSubValues = function(baseValue, variation) {
    let offset = 0;

    for (let i = 1; i <= 5; i++) {
      if (baseValue + (i - 1) * variation > 100) {
        offset += 1;
      } else if (baseValue - i * variation < 0) {
        offset -= 1;
      }
    }
    offset = offset * variation;
    const valueCollection = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= 5) {
        valueCollection[i - 1] = baseValue - (6 - i) * variation - offset;
      } else {
        valueCollection[i - 1] = baseValue + (i - 6) * variation - offset;
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
  const addCombination = function(combination) {
    combination.hue = base360(combination.hue);
    const hex = colorUtils.hslToHex(combination).getString();
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
  const createSubCombinationArray = function(combination, gray) {
    const lightCollection = getSubValues(
      combination.light,
      self.lightVariation
    );
    const satCollection = getSubValues(
      combination.saturation,
      self.satVariation
    );

    let subCombination = [];
    for (let i = 0; i < 10; i++) {
      subCombination[i] = {
        hue: combination.hue,
        light: lightCollection[i],
        saturation: gray ? 0 : satCollection[i],
        hex: colorUtils
          .hslToHex({
            hue: combination.hue,
            light: lightCollection[i],
            saturation: satCollection[i]
          })
          .getString()
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
  const addSubCombination = function() {
    const combinationCollection = self.colorCollection.combinationCollection;

    const lastEntry = combinationCollection[combinationCollection.length - 1];
    lastEntry.subCombination = createSubCombinationArray(lastEntry);
  };
  /**
   * @param {string} newColor The hex of the new color
   */
  this.updateColor = function(newColor) {
    this.colorCollection.dominant = newColor;
    if (newColor.hue) {
      this.hsl = newColor;
    } else {
      this.hsl = colorUtils.hexToHsl(newColor).getValueCollection();
    }
    return this;
  };

  this.combination = function() {
    const tonic = this.hsl;
    tonic.hue = this.hsl.hue + 180;
    addCombination(tonic);
    return this.colorCollection;
  };
  this.splitCombination = function() {
    const baseHue = this.hsl.hue;
    const tonic = this.hsl;
    const split = 30;
    tonic.hue = this.hsl.hue + (180 + split);
    addCombination(tonic);
    tonic.hue = baseHue;
    tonic.hue = this.hsl.hue + (180 - split);
    addCombination(tonic);

    return this.colorCollection;
  };
  // TODO : remove "object" types
  /**
   * @param {Array} colors
   * @param {number} lightVariation
   * @param {number} satVariation
   * @returns {object}
   */
  this.generate = function(colors, lightVariation, satVariation) {
    this.lightVariation = lightVariation;
    this.satVariation = satVariation;
    this.colorCollection.dominantSubCollection = createSubCombinationArray(
      this.hsl
    );
    this.colorCollection.combinationCollection = [];
    colors.forEach(item => {
      const saturation =
        item.saturation !== undefined ? item.saturation : this.hsl.saturation;
      const light = item.light !== undefined ? item.light : this.hsl.light;
      const combination = {
        hue: this.hsl.hue + item.hueVariation,
        saturation: saturation,
        light: light
      };

      addCombination(combination);
    });

    this.colorCollection.graySubCollection = createSubCombinationArray(
      {
        hue: this.hsl.hue,
        saturation: 0,
        light: this.hsl.light
      },
      true
    );

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
