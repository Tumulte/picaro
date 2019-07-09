var settings = require('../../../rougeSettings.json');
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
cssPanelData.cssPanelMain = 1;
var panelComponent = {
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
		stringify: function(jsonObject) {
			return JSON.stringify(jsonObject);
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

	computed: {
		selectorCollection: function() {
			return this.$store.getters.selectorCollection;
		},

		cssPanelIndex: function() {
			return this.$store.getters.cssPanelIndex;
		},
	},
};

module.exports = {
	panelComponent: panelComponent,
};
