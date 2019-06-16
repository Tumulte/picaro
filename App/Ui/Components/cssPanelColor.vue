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

/* eslint-disable-next-line no-undef */
var colorSet = new colors.generateColorSet(styleCollection.dominantColor);

var colorComponent = {
	data: function() {
		return {
			/* eslint-disable-next-line no-undef */
			colorSetCollection: colorSetCollection,
			/* eslint-disable-next-line no-undef */
			colorSet: colorSet.generate(storedColorSet.combinationCollection),
			/* eslint-disable-next-line no-undef */
			dominantColor: colorUtils.hexToHsl(styleCollection.dominantColor).getValueCollection(),
			/* eslint-disable-next-line no-undef */
			colorSetParamCollection: storedColorSet.combinationCollection,
			/* eslint-disable-next-line no-undef */
			colorSetParamString: JSON.stringify(storedColorSet.combinationCollection),
			variationLightAmt: 10,
			variationSatAmt: 0,
			selectorCollection: {},
		};
	},
	methods: {
		bgColor: function(color, type) {
			color.type = type;
			return 'background:' + colorUtils.getString(color);
		},
		updateColor: function() {
			document.documentElement.style.setProperty(
				'--color-dominant',
				colorUtils.getString(this.dominantColor, 'hsl')
			);
			colorSet
				.updateColor(colorUtils.hslToHex(this.dominantColor).getString())
				.generate(
					this.colorSetParamCollection,
					parseInt(this.variationLightAmt),
					parseInt(this.variationSatAmt)
				);
			this.generateAllCSS();
		},
		generateAllCSS: function() {
			for (var i = 0; i < this.colorSet.combinationCollection.length; i++) {
				if (this.colorSet.combinationCollection[i].targetCollection !== '') {
					this.generateCSS(this.colorSet.combinationCollection[i], i);
				}
			}
		},
		updateCombinationColor: function(index, color) {
			if (event.target.type === 'text') {
				return;
			}
			document.documentElement.style.setProperty(
				'--color-combination-' + index,
				colorUtils.getString(color, 'hsl')
			);
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
			if (this.colorSetParamCollection[index].targetCollection !== '') {
				this.generateCSS(this.colorSet.combinationCollection[index], index);
			}
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

			this.$store.commit('colorData', dataToBeStored);
		},
		storeColor: function(color) {
			this.$store.commit('currentColor', colorUtils.getString(color, 'hsl'));
		},
	},
	mounted: function() {
		this.passValuesToStore();
	},
};
module.exports = {
	colorComponent: colorComponent,
};
