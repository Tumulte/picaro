var colors = require('../colorGenerator');
var colorUtils = require('../colorHelper').colorUtils;
colorUtils = new colorUtils();

var generateNewColorSet = function(dominant, combination) {
	var newCombination = {};
	newCombination.hueVariation = parseInt(combination.hue) - parseInt(dominant.hue);
	if (parseInt(combination.saturation) !== parseInt(dominant.saturation)) {
		newCombination.saturation = parseInt(combination.saturation);
	}
	if (parseInt(combination.light) !== parseInt(dominant.light)) {
		newCombination.light = parseInt(combination.light);
	}

	return newCombination;
};

var colorSet = false;

var colorComponent = {
	data: function() {
		return {
			colorSet: {},
			/* eslint-disable-next-line no-undef */
			colorSetCollection: colorSetCollection,
			dominantColor: { hue: 200, saturation: 0, light: 70 },
			colorSetParamCollection: [],
			colorSetParamString: '',
			variationLightAmt: 10,
			variationSatAmt: 0,
		};
	},
	methods: {
		bgColor: function(color) {
			return 'background:' + colorUtils.getString(color);
		},
		updateColor: function() {
			this.colorSet = colorSet
				.updateColor(colorUtils.hslToHex(this.dominantColor).getString())
				.generate(
					this.colorSetParamCollection,
					parseInt(this.variationLightAmt),
					parseInt(this.variationSatAmt)
				);
			this.$store.commit('colorCollection', this.colorSet);
		},

		updateCombinationColor: function(index) {
			//only triggers on sliders. TODO : check if necessary
			if (event.target.type === 'text') {
				return;
			}

			this.colorSetParamCollection[index] = generateNewColorSet(
				this.dominantColor,
				this.colorSet.combinationCollection[index]
			);
			this.colorSetParamString = JSON.stringify(this.colorSetParamCollection);
			this.colorSet = colorSet.generate(
				this.colorSetParamCollection,
				parseInt(this.variationLightAmt),
				parseInt(this.variationSatAmt)
			);
			this.$store.commit('colorCollection', this.colorSet);
		},
		updatecolorSetParams: function() {
			this.colorSetParamCollection = JSON.parse(this.colorSetParamString);
			this.colorSet = colorSet.generate(this.colorSetParamCollection);
		},
		stringify: function(item) {
			return JSON.stringify(item);
		},
		addColor: function() {
			this.colorSetParamCollection.push({ hueVariation: this.dominantColor.hue });
			this.colorSet = colorSet.generate(
				this.colorSetParamCollection,
				parseInt(this.variationLightAmt),
				parseInt(this.variationSatAmt)
			);
		},
		removeColor: function(index) {
			this.colorSet.combinationCollection.splice(index, 1);
		},
		updateVariationAmt: function() {
			this.colorSet = colorSet.generate(
				this.colorSetParamCollection,
				parseInt(this.variationLightAmt),
				parseInt(this.variationSatAmt)
			);
		},
		passValuesToStore: function() {
			var dataToBeStored = {
				dominant: this.colorSet.dominant,
				colorSetParamString: this.colorSetParamString,
				variationLightAmt: this.variationLightAmt,
				variationSatAmt: this.variationSatAmt,
			};

			this.$store.commit('colorParameterCollection', dataToBeStored);
		},
		storeColorCoordinate: function(coordinates) {
			this.$store.commit('currentColor', coordinates);
		},
	},
	computed: {
		colorCollection: function() {
			return this.$store.getters.colorCollection;
		},
	},
	mounted: function() {
		var self = this;
		var styleRequest = new XMLHttpRequest();
		styleRequest.open('GET', '/appapi', true);

		styleRequest.onreadystatechange = function() {
			if (styleRequest.readyState === 4) {
				if (styleRequest.status === 200) {
					var data = JSON.parse(styleRequest.responseText);
					colorSet = new colors.generateColorSet(data.dominantColor);

					self.colorSet = colorSet;
					self.dominantColor = colorUtils.hexToHsl(data.dominantColor).getValueCollection();
					self.colorSetParamString = data.colorSetParamString;
					self.colorSetParamCollection = JSON.parse(data.colorSetParamString);
					self.$store.commit('colorCollection', colorSet.generate(JSON.parse(data.colorSetParamString)));
					self.passValuesToStore();
				}
			}
		};
		styleRequest.send();
	},
};
module.exports = {
	colorComponent: colorComponent,
};
