var colors = require('../Ui/colorGenerator');
var generateCss = require('../Ui/cssGenerator').generateCss;
var colorUtils = require('../Ui/colorHelper').colorUtils;
colorUtils = new colorUtils();

/* eslint-disable-next-line no-undef */
if (ENVIRONMENT === 'development') {
	require('webpack-hot-middleware/client?reload=true');
}
var cssPanelSelector = require('../Ui/Components/cssPanelSelector.vue').selectorComponent;
var cssPanelColor = require('../Ui/Components/cssPanelColor.vue').colorComponent;
var cssPanel = require('../Ui/Components/cssPanel.vue').panelComponent;
require('../../App/Static/AppStyles.css');

var Vue = require('vue');
var Vuex = require('vuex');

/* eslint-disable-next-line no-undef */
var colorSet = new colors.generateColorSet(styleCollection.dominantColor);
Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		colorParametersData: {},
		currentColor: '',
		currentSelector: {},
		selectorCollection: { main: { color: '#676787', 'font-size': '20px' }, body: { background: '#fff' } },
		/* eslint-disable-next-line no-undef */
		colorCollection: colorSet.generate(storedColorSet.combinationCollection),
		selectorIndex: '1',
	},
	mutations: {
		colorParametersData(state, data) {
			state.colorParametersData = data;
		},
		currentColor(state, coordinates) {
			if (state.currentSelector) {
				state.selectorCollection[state.currentSelector.selector][state.currentSelector.property] = coordinates;
				state.selectorIndex = JSON.stringify(coordinates);
			}
		},
		currentSelector(state, data) {
			state.currentSelector = data;
		},
		selectorCollection(state, data) {
			state.selectorCollection = data;
		},
		colorCollection(state, data) {
			state.colorCollection = data;
		},
		selectorIndex(state, data) {
			state.selectorIndex = data;
		},
	},
	getters: {
		getColorParametersDataCollection: function(state) {
			return state.colorParametersData;
		},
		getSelectorDataCollection: function(state) {
			return state.selectorCollection;
		},
		getColorDataCollection: function(state) {
			return state.colorCollection;
		},
		getSelectorIndex: function(state) {
			return state.selectorIndex;
		},
	},
});
Vue.component('css-panel-selector', cssPanelSelector);
Vue.component('css-panel-color', cssPanelColor);
Vue.component('css-panel-font', cssPanel);
window.addEventListener('load', function() {
	/* eslint-disable-next-line no-unused-vars */
	var cssPanel = new Vue({
		el: '#css-panel',
		store,
	});
	/* eslint-disable-next-line no-unused-vars */
});
