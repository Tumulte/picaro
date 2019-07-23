var settings = require('../../../rougeSettings.json');

/**
 * @VueComponent
 */
var panelComponent = {
	/**
	 * @type {function}
	 */
	data: function() {
		return {
			fontSize: 20,
			googleFonts: this.getGoogleFonts,
			selectedGoogleFont: { main: 'none', alt: 'none', title: 'none' },
			styleSetCollection: {},
			cssPanelMain: 1,
			selectorIndex: 1,
		};
	},
	methods: {
		updateFontSize: function() {
			this.selectorCollection.html.fontSize = this.fontSize + 'px';
			this.$store.commit('selectorIndex', this.updateIndex());
		},
		updateCssFont: function(type) {
			if (this.selectedGoogleFont[type] === 'none') {
				return;
			}
			var fontStyleImports = '';
			var fontStyle = document.createElement('style');
			fontStyle.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(fontStyle);
			for (var item in this.selectedGoogleFont) {
				if (this.selectedGoogleFont[item] !== 'none') {
					fontStyleImports +=
						'@import url("https://fonts.googleapis.com/css?family=' +
						encodeURI(this.selectedGoogleFont[item]) +
						'&display=swap");\n';
				}
			}
			fontStyle.innerHTML = fontStyleImports;

			if (type === 'main') {
				this.selectorCollection.html.fontFamily = this.selectedGoogleFont[type];
			} else if (type === 'title') {
				var header = 'h1,h2,h3,h4,h5,h6';
				this.selectorCollection[header].fontFamily = this.selectedGoogleFont[type];
			} else if (type === 'alt') {
				this.selectorCollection.CLSS__altfont = {};
				this.selectorCollection.CLSS__altfont.fontFamily = this.selectedGoogleFont[type];
			}
			this.$store.commit('selectorIndex', this.updateIndex());
		},
		stringify: function(jsonObject) {
			return JSON.stringify(jsonObject);
		},
		updateIndex: function() {
			this.selectorIndex = this.selectorIndex === 1 ? 0 : 1;
			return 'main' + this.selectorIndex;
		},
	},
	mounted: function() {
		var self = this;
		var request = new XMLHttpRequest();
		request.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=' + settings.googleFontKey);
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					var data = JSON.parse(request.responseText);

					self.googleFonts = data.items;
				}
			}
		};
		request.send();

		var styleRequest = new XMLHttpRequest();
		styleRequest.open('GET', '/appapi');
		styleRequest.onreadystatechange = function() {
			if (styleRequest.readyState === 4) {
				if (styleRequest.status === 200) {
					var data = JSON.parse(styleRequest.responseText);

					self.styleSetCollection = data;
					self.fontSize = data.fontSize;
					self.selectedGoogleFont.main = data.fontFamilyMain;
					self.selectedGoogleFont.title = data.fontFamilyTitle;
					self.selectedGoogleFont.alt = data.fontFamilyAlt;
					self.$store.commit('selectorCollection', JSON.parse(data.selectorSetParamString));
				}
			}
		};
		styleRequest.send();

		var appDataRequest = new XMLHttpRequest();
		appDataRequest.open('GET', '/appapi/all', true);

		appDataRequest.onreadystatechange = function() {
			if (appDataRequest.readyState === 4) {
				if (appDataRequest.status === 200) {
					self.styleSetCollection = JSON.parse(appDataRequest.responseText);
				}
			}
		};
		appDataRequest.send();
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
