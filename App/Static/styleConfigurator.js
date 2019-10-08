rough = require('../../node_modules/roughjs/dist/rough.umd');
require('wired-elements');
//app CSS. Will be processed by webpack
//@ts-ignore
require('../../App/Static/appStyles.css');

// TODO SPLIT logics of this file : it's not just style config
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
/* eslint-disable no-undef */
// @ts-ignore
if (ENVIRONMENT === 'development') {
	// @ts-ignore
	require('webpack-hot-middleware/client?reload=true');
}

/* eslint-enable no-undef */

//@ts-ignore
var cssPanelSelector = require('../Ui/Components/cssPanelSelector.vue');
//@ts-ignore
var cssPanelColor = require('../Ui/Components/cssPanelColor.vue');
//@ts-ignore
var cssPanel = require('../Ui/Components/cssPanel.vue');
//@ts-ignore
var messagesComponent = require('../Tools/Components/messages.vue');

var Vue = require('vue');
var Vuex = require('vuex');

/**
 * @param {number} index
 * @returns {number}
 */
var toggleIndex = function(index) {
	return index === 0 ? 1 : 0;
};
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
		colorSet: {},
		styleSet: {},
		loaded: false,
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
				state.selectorIndex = toggleIndex(state.selectorIndex);
			}
		},
		currentSelector(state, data) {
			state.currentSelector = data;
		},
		selectorCollection(state, data) {
			state.selectorCollection = data;
		},
		colorSet(state, data) {
			state.colorSet = data;
		},
		styleSet(state, data) {
			state.styleSet = data;
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
		loaded(state, data) {
			state.loaded = data;
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
			return state.selectorIndex;
		},
		cssPanelIndex(state) {
			return state.cssPanelIndex;
		},
		colorSet(state) {
			return state.colorSet;
		},
		styleSet(state) {
			return state.styleSet;
		},
		loaded(state) {
			return state.loaded;
		},
	},
});
if (typeof isLogged !== 'undefined' && isLogged) {
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
			el: '#rf-css-panel',
			store,
		});
	});
}
window.addEventListener('load', function() {
	/**
	 *
	 * @param {HTMLCollectionOf<Element>} item
	 * @param {Object} params
	 */
	var createSvgSketch = function(item, params) {
		Array.prototype.forEach.call(item, function(el) {
			var rect = el.parentNode.getBoundingClientRect();

			var svg = rough.svg(el);
			el.appendChild(svg.rectangle(5, 5, rect.width, rect.height, params));
		});
	};
	var svgCollectionBox = document.getElementsByClassName('css-panel-svg-box');
	createSvgSketch(svgCollectionBox, {
		roughness: 3,
		strokeWidth: 2,
	});
	var svgCollectionHighlight = document.getElementsByClassName('css-panel-svg-highlight');

	createSvgSketch(svgCollectionHighlight, {
		fill: '#f15e5e',
		fillWeight: 3,
		fillStyle: 'solid',
		roughness: 3,
		strokeWidth: 1.5,
	});

	var svgCollection = document.getElementsByClassName('css-panel-svg');
	createSvgSketch(svgCollection, {
		fill: '#fff',
		fillWeight: 3,
		fillStyle: 'zigzag',
		roughness: 3,
		strokeWidth: 2,
	});
});
