var settings = require('../../../rougeSettings.json');
var utils = require('../../utils');

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
			fontCollection: this.getfontCollection,
			selectedFont: { main: 'none', alt: 'none', title: 'none' },
			styleSetCollection: [],
			styleSet: {},
			cssPanelMain: 1,
			selectorIndex: 1,
			warningMessage: '',
			fontType: 'google',
		};
	},
	methods: {
		updateFontSize: function() {
			this.selectorCollection.html.fontSize = this.fontSize + 'px';
			this.$store.commit('selectorIndex', this.updateIndex());
		},
		updateCssFont: function(type) {
			if (this.selectedFont[type] === 'none') {
				return;
			}
			var fontStyleImports = '';
			var fontStyle = document.createElement('style');
			fontStyle.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(fontStyle);
			for (var item in this.selectedFont) {
				if (this.selectedFont[item] !== 'none') {
					fontStyleImports +=
						'@import url("https://fonts.googleapis.com/css?family=' +
						encodeURI(this.selectedFont[item]) +
						'&display=swap");\n';
				}
			}
			fontStyle.innerHTML = fontStyleImports;

			if (type === 'main') {
				this.selectorCollection.html.fontFamily = this.selectedFont[type];
			} else if (type === 'title') {
				var header = 'h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6';
				this.selectorCollection[header].fontFamily = this.selectedFont[type];
			} else if (type === 'alt') {
				this.selectorCollection.CLSS__altfont = {};
				this.selectorCollection.CLSS__altfont.fontFamily = this.selectedFont[type];
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
		checkSave: function(event) {
			var self = this;
			this.warningMessage = {
				text: 'Are you sure you want to overwrite this style set ?',
				type: 'warning',
				callback: function() {
					var form = event.target.form;
					var formData = new FormData(form);
					var xhr = new XMLHttpRequest();

					xhr.open('POST', event.target.formAction);
					xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

					xhr.onload = function() {
						if (xhr.status !== 200) {
							self.warningMessage = {
								type: 'error',
								text: 'Request failed.  Returned status of ' + xhr.status,
							};
						} else {
							self.warningMessage = { type: 'success', text: 'Saved successfully' };
						}
					};
					xhr.send(utils.urlencodeFormData(formData));
				},
			};
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

					self.fontCollection = data.items;
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

					self.styleSet = data;
					self.fontSize = data.fontSize;
					self.selectedFont.main = data.fontFamilyMain;
					self.selectedFont.title = data.fontFamilyTitle;
					self.selectedFont.alt = data.fontFamilyAlt;
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

module.exports = panelComponent;
