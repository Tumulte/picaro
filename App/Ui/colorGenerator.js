var colorUtils = require('./colorHelper').colorUtils;
colorUtils = new colorUtils();

var generateColorSet = function(dominant) {
	this.hsl = colorUtils.hexToHsl(dominant).getValueCollection();
	this.colorCollection = {
		dominant: dominant,
		combinationCollection: [],
	};
	var self = this;
	var base360 = function(angle) {
		if (angle > 360) {
			return angle - 360;
		} else if (angle < 0) {
			return angle + 360;
		} else {
			return angle;
		}
	};
	var organizedArrayBase100 = function(baseValue, variation) {
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
	var addCombination = function(combination, lightVariation, satVariation) {
		combination.hue = base360(combination.hue);
		var hex = colorUtils.hslToHex(combination).getString();
		self.colorCollection.combinationCollection.push({
			hex: hex,
			hue: combination.hue,
			light: combination.light,
			saturation: combination.saturation,
		});
		addSubCombination(lightVariation, satVariation);
	};
	var addSubCombination = function(lightVariation, satVariation) {
		if (typeof lightVariation !== 'number' || lightVariation > 10) {
			lightVariation = 10;
		}
		if (typeof satVariation !== 'number') {
			satVariation = 0;
		}
		if (satVariation > 10) {
			satVariation = 10;
		}
		var currentArrayPosition = self.colorCollection.combinationCollection.length - 1;
		var currentEntry = self.colorCollection.combinationCollection[currentArrayPosition];
		var lightCollection = organizedArrayBase100(currentEntry.light, lightVariation);
		var satCollection = organizedArrayBase100(currentEntry.saturation, satVariation);
		currentEntry.subCombination = [];
		for (var i = 0; i < 10; i++) {
			currentEntry.subCombination[i] = {
				hue: currentEntry.hue,
				light: lightCollection[i],
				saturation: satCollection[i],
			};
		}
	};
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
	this.generate = function(colors, lightVariation, satVariation) {
		var self = this;
		this.lightVariation = lightVariation;
		this.satVariation = satVariation;

		this.colorCollection.combinationCollection = [];
		colors.forEach(function(item) {
			var saturation = item.saturation ? item.saturation : self.hsl.saturation;
			var light = item.light ? item.light : self.hsl.light;
			var combination = {
				hue: self.hsl.hue + item.hueVariation,
				saturation: saturation,
				light: light,
			};
			addCombination(combination, lightVariation, satVariation);
		});
		return this.colorCollection;
	};
};

module.exports = {
	generateColorSet: generateColorSet,
};
