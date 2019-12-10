// @ts-ignore
rough = require('roughjs/dist/rough.umd');
require('wired-elements');

/**
 * @type {VueApp}
 */
var Vue = require('vue');
var Vuex = require('vuex');
var VueRouter = require('vue-router').default;

Vue.use(VueRouter);
Vue.use(Vuex);


//app CSS. Will be processed by webpack
//@ts-ignore

// TODO SPLIT logics of this file : it's not just style config
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
/* eslint-disable no-undef */
// @ts-ignore
if (ENVIRONMENT === 'development') {
	// @ts-ignore
	require('webpack-hot-middleware/client?reload=true');
}

/* user components */
var VRuntimeTemplate = require('v-runtime-template').default;
// @ts-ignore
var tagsListComponent = require('../Ui/Components/tagsList.vue');
// @ts-ignore
var listComponent = require('../Ui/Components/list.vue');
// @ts-ignore
var linkComponent = require('../Ui/Components/link.vue');
// @ts-ignore
var formComponent = require('../Ui/Components/form.vue');
// @ts-ignore
var tagsComponent = require('../Ui/Components/tags.vue');
// @ts-ignore
var navComponent = require('../Ui/Components/nav.vue');

Vue.component('rf-list', listComponent);
Vue.component('rf-tags', tagsComponent);
Vue.component('rf-tags-list', tagsListComponent);
Vue.component('rf-link', linkComponent);
Vue.component('rf-form', formComponent);
Vue.component('rf-nav', navComponent);
Vue.component('v-runtime-template', VRuntimeTemplate);

var router = new VueRouter({
	routes: [{
			path: '/tag/:type/:tag',
		},
		{
			path: '/link/:id',
		},
	],
});

var userStore = {
	state: {
		list: {},
		tagCollection: {},
	},
	mutations: {
		// @ts-ignore
		list(state, data) {
			state.list = data;
		},
		// @ts-ignore
		tagCollection(state, data) {
			state.tagCollection = data;
		},
		// @ts-ignore
		formType(state, data) {
			if (data === 'hasTags') {
				new Vue({
					el: 'rf-tags',
					store,
				});
			}
		},
	},
	getters: {
		// @ts-ignore
		list: function (state) {
			return state.list;
		},
		// @ts-ignore
		tagCollection: function (state) {
			return state.tagCollection;
		},
	},
};





/**
 * @param {number} index
 * @returns {number}
 */
var toggleIndex = function (index) {
	return index === 0 ? 1 : 0;
};
//@ts-ignore
if (ENVIRONMENT === 'development' || (typeof isLogged !== 'undefined' && isLogged)) {
	/* eslint-enable no-undef */
	// @ts-ignore
	var adminPanel = require('../Ui/Components/adminPanel.vue');
	// @ts-ignore
	var cssPanelSelector = require('../Ui/Components/cssPanelSelector.vue');
	// @ts-ignore
	var cssPanelColor = require('../Ui/Components/cssPanelColor.vue');
	// @ts-ignore
	var cssPanel = require('../Ui/Components/cssPanelMain.vue');
	// @ts-ignore
	var messagesComponent = require('../Tools/Components/messages.vue');
	// @ts-ignore
	var navPanel = require('../Ui/Components/navPanel.vue');
	//@ts-ignore
	Vue.component('admin-panel', adminPanel);
	//@ts-ignore
	Vue.component('css-panel-selector', cssPanelSelector);
	//@ts-ignore
	Vue.component('css-panel-color', cssPanelColor);
	//@ts-ignore
	Vue.component('css-panel-main', cssPanel);
	//@ts-ignore
	Vue.component('nav-panel', navPanel);
	//@ts-ignore
	Vue.component('warning-component', messagesComponent);
	var adminStore = {
		state: {
			colorParameterCollection: {},
			currentColor: '',
			currentSelector: {},
			selectorCollection: {
				html: {},
				h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6: {}
			},
			/* eslint-disable-next-line no-undef */
			colorCollection: {},
			selectorIndex: '1',
			cssPanelIndex: 1,
			colorSet: {},
			styleSet: {},
			navStructure: {},
			loaded: false,
		},
		mutations: {
			// @ts-ignore
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
			// @ts-ignore
			currentSelector(state, data) {
				state.currentSelector = data;
			},
			// @ts-ignore
			selectorCollection(state, data) {
				state.selectorCollection = data;
			},
			// @ts-ignore
			colorSet(state, data) {
				state.colorSet = data;
			},
			// @ts-ignore
			navStructure(state, data) {
				state.navStructure = data;
			},
			// @ts-ignore
			styleSet(state, data) {
				state.styleSet = data;
			},
			// @ts-ignore
			colorCollection(state, data) {
				state.colorCollection = data;
			},
			// @ts-ignore
			selectorIndex(state, data) {
				state.selectorIndex = data;
			},
			// @ts-ignore
			cssPanelIndex(state, data) {
				state.cssPanelIndex = data;
			},
			// @ts-ignore
			loaded(state, data) {
				state.loaded = data;
			},
		},
		getters: {
			// @ts-ignore
			colorParameterCollection: function (state) {
				return state.colorParameterCollection;
			},
			// @ts-ignore
			selectorCollection: function (state) {
				return state.selectorCollection;
			},
			// @ts-ignore
			colorCollection: function (state) {
				return state.colorCollection;
			},
			// @ts-ignore
			selectorIndex: function (state) {
				return state.selectorIndex;
			},
			// @ts-ignore
			cssPanelIndex(state) {
				return state.cssPanelIndex;
			},
			// @ts-ignore
			colorSet(state) {
				return state.colorSet;
			},
			// @ts-ignore
			navStructure(state) {
				return state.navStructure;
			},

			// @ts-ignore
			styleSet(state) {
				return state.styleSet;
			},
			// @ts-ignore
			loaded(state) {
				return state.loaded;
			},
		}
	}
} else {
	adminStore = {}
}
var store = new Vuex.Store({
	modules: {
		user: userStore,
		admin: adminStore
	}
})
window.addEventListener('load', function () {
	new Vue({
		el: '#rf-vue-container',
		store,
		router
	});

	/**
	 *
	 * @param {HTMLCollectionOf<Element>} item
	 * @param {Object} params
	 */
	var createSvgSketch = function (item, params) {
		Array.prototype.forEach.call(item, function (el) {
			var rect = el.parentNode.getBoundingClientRect();

			// @ts-ignore
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