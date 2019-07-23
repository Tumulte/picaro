//app CSS. Will be processed by webpack
//@ts-ignore
require('../../App/Static/AppStyles.css');

/* eslint-disable no-undef */
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
// @ts-ignore
if (ENVIRONMENT === 'development') {
	// @ts-ignore
	require('webpack-hot-middleware/client?reload=true');
}
//@ts-ignore
var cssPanelSelector = require('../Ui/Components/cssPanelSelector.vue').selectorComponent;
//@ts-ignore
var cssPanelColor = require('../Ui/Components/cssPanelColor.vue').colorComponent;
//@ts-ignore
var cssPanel = require('../Ui/Components/cssPanel.vue').panelComponent;

var messagesComponent = require('../Tools/Components/messages.vue').messagesComponent;

var Vue = require('vue');
var Vuex = require('vuex');

//@ts-ignore
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
		/**
		 *
		 * @param {Object} state Vuex state
		 * @param {String} coordinates color coordinates "[x,y]"
		 */
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
//@ts-ignore
Vue.component('css-panel-selector', cssPanelSelector);
//@ts-ignore
Vue.component('css-panel-color', cssPanelColor);
//@ts-ignore
Vue.component('css-panel-main', cssPanel);
//@ts-ignore
Vue.component('warning-component', messagesComponent);

window.addEventListener('load', function() {
	//@ts-ignore
	new Vue({
		el: '#css-panel',
		store,
	});
});
