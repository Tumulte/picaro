var colorUtils = require('../colorHelper').colorUtils;
colorUtils = new colorUtils();
var generateCss = require('../cssGenerator').generateCss;

var selectorComponent = {
	data: function() {
		return {
			/* eslint-disable-next-line no-undef */
			currentSelectorProperty: {},
			newSelector: '',
			newProperty: {},
			colorMapping: {},
		};
	},
	methods: {
		storeSelectorAndProperty: function(selector, property) {
			//this.$store.commit('currentSelectorCollection', this.selectorCollection);

			this.$store.commit('currentSelector', { selector: selector, property: property });
		},

		addSelector: function() {
			this.selectorCollection[this.newSelector] = {};
			this.newSelector = '';
		},
		addProperty: function(value, selector) {
			this.selectorCollection[selector][value] = '';
			this.$store.commit('selectorCollection', this.selectorCollection);
			this.$store.commit('selectorIndex', value + selector);
		},
		getColorFromCoordinates: function(data) {
			console.debug('stst');
			if (/^#([0-9a-f]{6})$/i.test(data)) {
				return '<div style="width:10px; height:10px; background:' + data + '"></div>';
			} else if (typeof data === 'object') {
				var selectedColor = this.colorCollection.combinationCollection[data[0]].subCombination[data[1]];
				selectedColor = colorUtils.hslToHex(selectedColor).getString();
				this.colorMapping[JSON.stringify(data)] = selectedColor;
				generateCss(this.selectorCollection, this.colorMapping);

				return '<div style="width:10px; height:10px; background:' + selectedColor + '"></div>';
			} else {
				return data;
			}
		},
	},
	mounted: function() {
		generateCss(this.selectorCollection);
	},

	computed: {
		colorCollection: function() {
			return this.$store.getters.getColorDataCollection;
		},
		selectorCollection: function() {
			return this.$store.getters.getSelectorDataCollection;
		},
		selectorIndex: function() {
			return this.$store.getters.getSelectorIndex;
		},
	},
};
module.exports = {
	selectorComponent: selectorComponent,
};
