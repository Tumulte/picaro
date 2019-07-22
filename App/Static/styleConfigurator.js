//app CSS. Will be processed by webpack
require('../../App/Static/AppStyles.css');

var colors = require('../Ui/colorGenerator');

/* eslint-disable no-undef */
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
// @ts-ignore
if (ENVIRONMENT === 'development') {
	// @ts-ignore
	require('webpack-hot-middleware/client?reload=true');
}
/* eslint-enable no-undef */

var cssPanelSelector = require('../Ui/Components/cssPanelSelector.js').selectorComponent;
var cssPanelColor = require('../Ui/Components/cssPanelColor.js').colorComponent;
var cssPanel = require('../Ui/Components/cssPanel.js').panelComponent;
var messagesComponent = require('../Tools/Components/messages.js').messagesComponent;

var selectorCollection = {};

var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		colorParameterCollection: {},
		currentColor: '',
		currentSelector: {},
		selectorCollection: { html: {}, h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6: {} },
		/* eslint-disable-next-line no-undef */
		colorCollection: {},
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
