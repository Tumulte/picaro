var settings = require('../../rougeSettings.json');
var colors = require('../Ui/colorGenerator');
var Vue = require('vue');
var WebFont = require('webfontloader');
var fontTypes = { main: 'none', alt: 'none', title: 'none', titleAlt: 'none' };

/* eslint-disable-next-line no-undef */
if (currentStyleSet) {
	/* eslint-disable-next-line no-undef */
	var cssPanelData = currentStyleSet;
	/* eslint-disable-next-line no-undef */
	cssPanelData.dataCollection = styleSetCollection;
	cssPanelData.googleFonts = this.getGoogleFonts;
	cssPanelData.selectedGoogleFont = {};
	for (var type in fontTypes) {
		var dataName = 'fontFamily' + type.charAt(0).toUpperCase() + type.slice(1);
		/* eslint-disable-next-line no-undef */
		var existingFont = currentStyleSet[dataName];
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
var colorSet = new colors.generateColorSet('#33FF00');

window.addEventListener('load', function() {
	/* eslint-disable-next-line no-unused-vars */
	var cssColorPanel = new Vue({
		el: '#css-panel-color',
		data: {
			/* eslint-disable-next-line no-undef */
			combinationTypeCollection: combinationTypeCollection,
			colorSet: colorSet.generate([{ hueVariation: 180 }, { hueVariation: 90 }]),
			dominantColor: '#33FF00',
			combinationType: false,
		},
		methods: {
			bgColor: function(color) {
				return 'background:' + color;
			},
			updateColor: function() {
				this.colorSet = colorSet.updateColor(this.dominantColor).generate(JSON.parse(this.combinationType));
			},
			updateCombinationType: function() {
				this.colorSet = colorSet.generate(JSON.parse(this.combinationType));
			},
			stringify: function(item) {
				return JSON.stringify(item);
			},
		},
	});
	/* eslint-disable-next-line no-unused-vars */
	var cssPanel = new Vue({
		el: '#css-panel-font',
		data: cssPanelData,
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

			request.open(
				'GET',
				'https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=' + settings.googleFontKey
			);
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
});
