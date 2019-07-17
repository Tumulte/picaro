var colors = require('../Ui/colorGenerator');

/* eslint-disable-next-line no-undef */
if (ENVIRONMENT === 'development') {
	require('webpack-hot-middleware/client?reload=true');
}
var cssPanelSelector = require('../Ui/Components/cssPanelSelector.vue').selectorComponent;
var cssPanelColor = require('../Ui/Components/cssPanelColor.vue').colorComponent;
var cssPanel = require('../Ui/Components/cssPanel.vue').panelComponent;
var messagesComponent = require('../Tools/Components/messages.vue').messagesComponent;
/* eslint-disable-next-line no-undef */
var selectorCollection = JSON.parse(styleCollection.selectorSetParamString);
selectorCollection.html = {};
require('../../App/Static/AppStyles.css');

var Vue = require('vue');
var Vuex = require('vuex');

/* eslint-disable-next-line no-undef */
var colorSet = new colors.generateColorSet(styleCollection.dominantColor);
Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		colorParameterCollection: {},
		currentColor: '',
		currentSelector: {},
		selectorCollection: selectorCollection,
		/* eslint-disable-next-line no-undef */
		colorCollection: colorSet.generate(storedColorSet.combinationCollection),
		selectorIndex: '1',
		cssPanelIndex: 1,
	},
	mutations: {
		colorParameterCollection(state, data) {
			state.colorParameterCollection = data;
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
		cssPanelIndex(state, data) {
			state.cssPanelIndex = data;
		},
	},
	getters: {
		colorParameterCollection: function(state) {
			return state.colorParameterCollection;
		},
		selectorCollection: function(state) {
			return state.selectorCollection;
		},
		colorCollection: function(state) {
			return state.colorCollection;
		},
		selectorIndex: function(state) {
			state.cssPanelIndex === 1 ? (state.cssPanelIndex = 0) : (state.cssPanelIndex = 1);
			return state.selectorIndex;
		},
		cssPanelIndex(state) {
			return state.cssPanelIndex;
		},
	},
});
Vue.component('css-panel-selector', cssPanelSelector);
Vue.component('css-panel-color', cssPanelColor);
Vue.component('css-panel-main', cssPanel);
Vue.component('warning-component', messagesComponent);

window.addEventListener('load', function() {
	/* eslint-disable-next-line no-unused-vars */
	var cssPanel = new Vue({
		el: '#css-panel',
		store,
	});
	/* eslint-disable-next-line no-unused-vars */
});
