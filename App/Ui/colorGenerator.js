var processColor = require('./colorHelper').processColor;

var generateColorSet = function(dominant) {
	var colorUtils = new processColor(dominant);
	this.hsl = colorUtils.hexToHsl().getValueCollection();
	this.colorCollection = {
		dominant: dominant,
		combinationCollection: [],
	};
	var self = this;
	var base360 = function(angle) {
		if (angle > 360) {
			return angle - 360;
		} else if (angle > 0) {
			return angle + 360;
		} else {
			return angle;
		}
	};

	var addCombination = function(tonic) {
		tonic.hue = base360(tonic.hue);
		var hex = colorUtils.hslToHex(tonic).getString();
		self.colorCollection.combinationCollection.push(hex);
	};

	this.updateColor = function(newColor) {
		colorUtils.color = newColor;
		this.colorCollection.combinationCollection = [];
		this.colorCollection.dominant = newColor;
		this.hsl = colorUtils.hexToHsl().getValueCollection();
		return this;
	};
	this.combinatiom = function() {
		var tonic = this.hsl;
		tonic.hue = this.hsl.hue + 180;
		addCombination(tonic);
		return this.colorCollection;
	};
	this.splitCombinatiom = function() {
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
	this.generate = function(colors) {
		var self = this;
		this.colorCollection.combinationCollection = [];

		colors.forEach(function(item) {
			var saturation = item.saturation ? item.saturation : self.hsl.saturation;
			var light = item.light ? item.light : self.hsl.light;

			var combinatiom = {
				hue: self.hsl.hue + item.hueVariation,
				saturation: saturation,
				light: light,
			};
			addCombination(combinatiom);
		});

		return this.colorCollection;
	};
};

module.exports = {
	generateColorSet: generateColorSet,
};
