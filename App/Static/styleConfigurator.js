var settings = require('../../rougeSettings.json');
var Vue = require('vue');
var WebFont = require('webfontloader');
require('webpack-hot-middleware/client');
alert('rtiiiipp5ppiirt');
window.addEventListener('load', function() {
	/* eslint-disable no-unused-vars */
	var cssPanel = new Vue({
		el: '#css-panel',
		data: {
			fontSize: 20,
			googleFonts: this.getGoogleFonts,
			selectedGoogleFont: { main: '', alt: '', title: '', titleAlt: '' },
		},
		methods: {
			updateCssProperty: function() {
				document.documentElement.style.setProperty('--font-size', this.fontSize + 'px');
			},
			updateCssFont: function(type) {
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
