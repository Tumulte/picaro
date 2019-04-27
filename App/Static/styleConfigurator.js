var settings = require('../../rougeSettings.json');
var colors = require('../Ui/colorGenerator');
var colorUtils = require('../Ui/colorHelper').colorUtils;

colorUtils = new colorUtils();

var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);
var store = new Vuex.Store({
	state: { colorData: {} },
	mutations: {
		colorData(state, data) {
			state.colorData = data;
		},
	},
	getters: {
		getColorDataCollection: function(state) {
			return { dominantColor: state.colorData.dominant, combinationType: 'foo' };
		},
	},
});

var WebFont = require('webfontloader');
var fontTypes = { main: 'none', alt: 'none', title: 'none', titleAlt: 'none' };

/* eslint-disable-next-line no-undef */
if (styleCollection) {
	/* eslint-disable-next-line no-undef */
	var cssPanelData = styleCollection;
	/* eslint-disable-next-line no-undef */
	cssPanelData.styleSetCollection = styleSetCollection;
	cssPanelData.googleFonts = this.getGoogleFonts;
	cssPanelData.selectedGoogleFont = {};
	for (var type in fontTypes) {
		var dataName = 'fontFamily' + type.charAt(0).toUpperCase() + type.slice(1);
		/* eslint-disable-next-line no-undef */
		var existingFont = styleCollection[dataName];
		existingFont = existingFont ? existingFont : 'none';

		cssPanelData.selectedGoogleFont[type] = existingFont;
	}
} else {
	cssPanelData = {
		fontSize: 20,
		googleFonts: this.getGoogleFonts,
		selectedGoogleFont: fontTypes,
	};
}
var generateNewCombinationType = function(dominant, combination) {
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

Vue.component('css-panel-color', {
	data: function() {
		return {
			/* eslint-disable-next-line no-undef */
			colorCombinationTypeCollection: colorCombinationTypeCollection,
			/* eslint-disable-next-line no-undef */
			colorSet: colorSet.generate(colorCombination.combinationCollection),
			/* eslint-disable-next-line no-undef */
			dominantColor: colorUtils.hexToHsl(styleCollection.dominantColor).getValueCollection(),
			/* eslint-disable-next-line no-undef */
			combinationType: colorCombination.combinationCollection,
			/* eslint-disable-next-line no-undef */
			combinationTypeString: JSON.stringify(colorCombination.combinationCollection),
			variationLightAmt: 10,
			variationSatAmt: 0,
		};
	},
	methods: {
		hslToString: function(color) {
			return 'hsl(' + color.hue + ',' + color.saturation + '%,' + color.light + '%)';
		},
		bgColor: function(color) {
			return 'background:' + this.hslToString(color);
		},
		updateColor: function() {
			document.documentElement.style.setProperty('--color-dominant', this.hslToString(this.dominantColor));
			colorSet
				.updateColor(colorUtils.hslToHex(this.dominantColor).getString())
				.generate(this.combinationType, parseInt(this.variationLightAmt), parseInt(this.variationSatAmt));
		},

		updateCombinationColor: function(index, color) {
			document.documentElement.style.setProperty('--color-combination-' + index, this.hslToString(color));
			this.combinationType[index] = generateNewCombinationType(
				this.dominantColor,
				this.colorSet.combinationCollection[index]
			);
			this.colorSet = colorSet.generate(
				this.combinationType,
				parseInt(this.variationLightAmt),
				parseInt(this.variationSatAmt)
			);
		},
		updateCombinationType: function() {
			this.combinationType = JSON.parse(this.combinationTypeString);
			this.colorSet = colorSet.generate(this.combinationType);
		},
		stringify: function(item) {
			return JSON.stringify(item);
		},
		addColor: function() {
			this.combinationType.push({ hueVariation: this.dominantColor.hue });
			this.colorSet = colorSet.generate(
				this.combinationType,
				parseInt(this.variationLightAmt),
				parseInt(this.variationSatAmt)
			);
		},
		removeColor: function(index) {
			this.colorSet.combinationCollection.splice(index, 1);
		},
		updateVariationAmt: function() {
			this.colorSet = colorSet.generate(
				this.combinationType,
				parseInt(this.variationLightAmt),
				parseInt(this.variationSatAmt)
			);
		},
		passValuesToStore: function() {
			store.commit('colorData', this.colorSet);
		},
	},
	mounted: function() {
		this.passValuesToStore();
	},
});
Vue.component('css-panel-font', {
	data: function() {
		return cssPanelData;
	},
	methods: {
		updateCssProperty: function() {
			document.documentElement.style.setProperty('--font-size', this.fontSize + 'px');
		},
		updateCssFont: function(type) {
			if (this.selectedGoogleFont[type] === 'none') {
				return;
			}
			WebFont.load({
				google: {
					families: [this.selectedGoogleFont[type]],
				},
			});
			document.documentElement.style.setProperty('--font-family-' + type, this.selectedGoogleFont[type]);
		},
	},
	mounted: function() {
		var request = new XMLHttpRequest();

		request.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=' + settings.googleFontKey);
		var self = this;
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					var data = JSON.parse(request.responseText);

					self.googleFonts = data.items;
				}
			}
		};
		request.send();
	},
});
window.addEventListener('load', function() {
	/* eslint-disable-next-line no-unused-vars */
	var cssPanel = new Vue({
		el: '#css-panel',
		store,
	});
	/* eslint-disable-next-line no-unused-vars */
});
