var settings = require('../../../rougeSettings.json');
const axios = require('axios');
var makeFontFamilyName = function(name) {
	if (!name) {
		return;
	}
	return name
		.replace('.otf', '')
		.replace('.ttf', '')
		.replace('.woff', '');
};

var fontTypes = ['fontFamilyMain', 'fontFamilyTitle', 'fontFamilyAlt'];
/**
 * @VueComponent
 */
var panelComponent = {
	/**
	 * @type {function}
	 */
	data: function() {
		return {
			fontCollection: {},

			styleSetCollection: [],
			styleSet: {},
			cssPanelMain: 1,
			selectorIndex: 1,
			warningMessage: '',
			googleFontCollection: [],
			localFontCollection: [],
		};
	},
	//TODO : organize that thing
	methods: {
		updateFontSize: function() {
			this.selectorCollection.html.fontSize = this.styleSet.fontSize + 'px';
			this.$store.commit('selectorIndex', this.updateIndex());
		},
		updateCssFont: function(fontType) {
			if (this.styleSet[fontType] === 'none') {
				return;
			}
			var fontStyleImports = '';
			if (document.getElementById('app-font-style')) {
				document.getElementById('app-font-style').remove();
			}
			var fontStyle = document.createElement('style');
			fontStyle.id = 'app-font-style';
			fontStyle.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(fontStyle);
			for (var i = 0; i < fontTypes.length; i++) {
				var currentFontType = fontTypes[i];
				if (this.styleSet[currentFontType] !== 'none') {
					if (this.styleSet.fontOrigin === 'google') {
						fontStyleImports +=
							'@import url("https://fonts.googleapis.com/css?family=' +
							encodeURI(this.styleSet[currentFontType]) +
							'&display=swap");\n';
					} else if (this.styleSet.fontOrigin === 'local') {
						fontStyleImports +=
							'@font-face {\n' +
							'font-family:"' +
							makeFontFamilyName(this.styleSet[currentFontType]) +
							'";\n' +
							'src:url("/fonts/' +
							encodeURI(this.styleSet[currentFontType]) +
							'");\n' +
							'}\n';
					}
				}
			}
			fontStyle.innerHTML = fontStyleImports;

			if (fontType === 'fontFamilyMain') {
				this.selectorCollection.html.fontFamily = makeFontFamilyName(this.styleSet[fontType]);
			} else if (fontType === 'fontFamilyTitle') {
				var header = 'h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6';
				this.selectorCollection[header].fontFamily = makeFontFamilyName(this.styleSet[fontType]);
			} else if (fontType === 'fontFamilyAlt') {
				this.selectorCollection.CLSS__altfont = {};
				this.selectorCollection.CLSS__altfont.fontFamily = makeFontFamilyName(this.styleSet[fontType]);
			}
			this.$store.commit('selectorIndex', this.updateIndex());
		},
		//TODO : remove
		stringify: function(jsonObject) {
			return JSON.stringify(jsonObject);
		},
		updateIndex: function() {
			this.selectorIndex = this.selectorIndex === 1 ? 0 : 1;
			return 'main' + this.selectorIndex;
		},
		updateFontCollection: function() {
			if (this.styleSet.fontOrigin === 'google') {
				this.fontCollection = this.googleFontCollection;
			} else if (this.styleSet.fontOrigin === 'local') {
				this.fontCollection = this.localFontCollection;
			}
		},
		updateStyleSet: function(styleSet) {
			//TODO put all this in a generic "loadStyleSet" thingie
			this.styleSet = styleSet;
			this.updateFontCollection();
			this.updateCssFont();
			this.$store.commit('selectorCollection', JSON.parse(styleSet.selectorSetParamString));
			this.$store.commit('selectorIndex', this.updateIndex());
		},
		checkSave: function(event) {
			var self = this;
			this.warningMessage = {
				text: 'Are you sure you want to overwrite this style set ?',
				type: 'warning',
				callback: function() {
					var form = event.target.form;
					var formData = new FormData(form);
					axios
						.post(event.target.getAttribute('formAction'), formData, {
							headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
						})
						.then(function() {
							self.warningMessage = { type: 'success', text: 'Saved successfully' };
						})
						.catch(function(errors) {
							self.warningMessage = {
								type: 'error',
								text: 'Request failed.  Returned status of ' + errors,
							};
						});
				},
			};
		},
		saveNew: function(event) {
			var self = this;

			var form = event.target.form;
			var formData = new FormData(form);

			axios
				.post(event.target.getAttribute('formAction'), formData)
				.then(function() {
					self.warningMessage = { type: 'success', text: 'Saved successfully' };
				})
				.catch(function(errors) {
					self.warningMessage = {
						type: 'error',
						text: 'Request failed.  Returned status of ' + errors,
					};
				});
		},
	},
	mounted: function() {
		// TODO : replace with axios for consistency
		//Google Fonts
		var self = this;
		var request = new XMLHttpRequest();
		request.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=' + settings.googleFontKey);
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					var data = JSON.parse(request.responseText);

					self.googleFontCollection = data.items;
					self.updateFontCollection();
				}
			}
		};
		request.send();
		//Local Fonts
		axios
			.get('/appapi/fonts')
			.then(function(response) {
				self.localFontCollection = response.data;
				self.updateFontCollection();
			})
			.catch(function(error) {
				self.localFontCollection = [];
				self.warningMessage.push(error);
			});
		axios
			.get('/appapi')
			.then(function(response) {
				self.styleSet = response.data;
				self.$store.commit('selectorCollection', JSON.parse(response.data.selectorSetParamString));
			})
			.catch(function(error) {
				self.warningMessage = {
					type: 'error',
					text: 'Request failed.  Returned status of ' + error,
				};
			});

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
