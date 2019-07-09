var colorUtils = require('../colorHelper').colorUtils;
colorUtils = new colorUtils();
var messages = require('../../Messages/messages.json');
var cssGenerator = require('../cssGenerator');
var generateCss = false;

var selectorComponent = {
	data: function() {
		return {
			currentSelectorProperty: {},
			newSelector: '',
			newProperty: {},
			colorMapping: {},
			warningMessage: '',
		};
	},
	methods: {
		storeSelectorAndProperty: function(selector, property) {
			this.$store.commit('currentSelector', { selector: selector, property: property });
		},

		addSelector: function(value) {
			if (value in this.selectorCollection) {
				this.warningMessage = { text: messages.warnings.duplicateKey, type: 'warning', textVariable: value };
			} else {
				this.selectorCollection[value] = {};
				this.resetComponent();
			}
			value = '';
		},
		addProperty: function(value, selector) {
			if (value in this.selectorCollection[selector]) {
				this.warningMessage = { text: messages.warnings.duplicateKey, type: 'warning', textVariable: value };
			} else {
				this.selectorCollection[selector][value] = '';
				this.$store.commit('selectorIndex', value + selector);
			}
		},
		getColorFromCoordinates: function(data) {
			if (/^#([0-9a-f]{6})$/i.test(data)) {
				return '<div style="width:10px; height:10px; background:' + data + '"></div>';
			} else if (typeof data === 'object') {
				var selectedColor = this.colorCollection.combinationCollection[data[0]].subCombination[data[1]];
				selectedColor = colorUtils.hslToHex(selectedColor).getString();
				this.colorMapping[JSON.stringify(data)] = selectedColor;
				generateCss.apply(this.selectorCollection, this.colorMapping);
				return '<div style="width:10px; height:10px; background:' + selectedColor + '"></div>';
			} else {
				return data;
			}
		},
		deleteProperty: function(selector, property) {
			var self = this;
			this.warningMessage = {
				text: 'Are you sure you want to delete ?',
				type: 'warning',
				callback: function() {
					delete self.selectorCollection[selector][property];
					self.resetComponent();
					generateCss.apply(self.selectorCollection, self.colorMapping);
				},
			};
		},
		deleteSelector: function(selector) {
			var self = this;

			this.warningMessage = {
				text: "Are you sure you want to delete %s and all it's properties ?",
				type: 'warning',
				textVariable: selector,
				callback: function() {
					delete self.selectorCollection[selector];
					self.resetComponent();
					generateCss.apply(self.selectorCollection, self.colorMapping);
				},
			};
		},
		resetComponent: function() {
			var index = this.selectorIndex === 1 ? 0 : 1;
			this.$store.commit('selectorIndex', index);
		},
		saveSelectorEdit: function(selector, event) {
			this.selectorCollection[event.target.innerHTML] = this.selectorCollection[selector];
			delete this.selectorCollection[selector];
			generateCss.apply(this.selectorCollection, this.colorMapping);

			this.resetComponent();
		},
		savePropertyEdit: function(selector, property, event) {
			this.selectorCollection[selector][event.target.innerHTML] = this.selectorCollection[selector][property];
			delete this.selectorCollection[selector][property];
			generateCss.apply(this.selectorCollection, this.colorMapping);

			this.resetComponent();
		},
	},
	mounted: function() {
		generateCss.apply(this.selectorCollection, this.colorMapping);
	},

	computed: {
		colorCollection: function() {
			return this.$store.getters.colorCollection;
		},
		selectorCollection: function() {
			generateCss = new cssGenerator.generateCss(this.$store.getters.selectorCollection);

			return this.$store.getters.selectorCollection;
		},
		selectorIndex: function() {
			return this.$store.getters.selectorIndex;
		},
	},
};
module.exports = {
	selectorComponent: selectorComponent,
};
