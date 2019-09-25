var colorHelper = require('./colorHelper');

var colorUtils = new colorHelper.colorUtils();

/**
 *
 * @param {string} dominant Hexadecimal of the main color
 * @class
 */
var generateColorSet = function(dominant) {
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
		combinationCollection: [],
	};
	var self = this;

	/**
	 *
	 * @param {number} angle
	 * @returns {number}
	 */
	var base360 = function(angle) {
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
	var getSubValues = function(baseValue, variation) {
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
		for (i = 1; i <= 10; i++) {
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
	var addCombination = function(combination) {
		combination.hue = base360(combination.hue);
		var hex = colorUtils.hslToHex(combination).getString();
		self.colorCollection.combinationCollection.push({
			hex: hex,
			hue: combination.hue,
			light: combination.light,
			saturation: combination.saturation,
		});
		addSubCombination();
	};
	/**
	 *
	 * @param {Object} combination

	 */
	var createSubCombinationArray = function(combination) {
		var lightCollection = getSubValues(combination.light, self.lightVariation);

		var satCollection = getSubValues(combination.saturation, self.satVariation);

		var subCombination = [];
		for (var i = 0; i < 10; i++) {
			subCombination[i] = {
				hue: combination.hue,
				light: lightCollection[i],
				saturation: satCollection[i],
				hex: colorUtils
					.hslToHex({ hue: combination.hue, light: lightCollection[i], saturation: satCollection[i] })
					.getString(),
			};
		}
		return subCombination;
	};
	/**
	 *
	 */
	var addSubCombination = function() {
		var combinationCollection = self.colorCollection.combinationCollection;

		var lastEntry = combinationCollection[combinationCollection.length - 1];
		lastEntry.subCombination = createSubCombinationArray(lastEntry);
	};
	/**
	 * @param {string} newColor The hex of the new color
	 */
	this.updateColor = function(newColor) {
		this.colorCollection.dominant = newColor;

		this.hsl = colorUtils.hexToHsl(newColor).getValueCollection();
		return this;
	};

	this.combination = function() {
		var tonic = this.hsl;
		tonic.hue = this.hsl.hue + 180;
		addCombination(tonic);
		return this.colorCollection;
	};
	this.splitCombination = function() {
		var baseHue = this.hsl.hue;
		var tonic = this.hsl;
		var split = 30;
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
		var self = this;

		this.lightVariation = lightVariation;
		this.satVariation = satVariation;
		this.colorCollection.dominantSubCollection = createSubCombinationArray(this.hsl);

		this.colorCollection.combinationCollection = [];
		colors.forEach(function(item) {
			var saturation = item.saturation ? item.saturation : self.hsl.saturation;
			var light = item.light ? item.light : self.hsl.light;
			var combination = {
				hue: self.hsl.hue + item.hueVariation,
				saturation: saturation,
				light: light,
			};
			addCombination(combination);
		});
		return this.colorCollection;
	};
};

module.exports = {
	generateColorSet: generateColorSet,
};
