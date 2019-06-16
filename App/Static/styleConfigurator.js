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

Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		colorData: {},
		currentColor: '',
		currentSelector: {},
		selectorCollection: { main: { color: '#676787', 'font-size': '10px' }, body: { background: '#fff' } },
	},
	mutations: {
		colorData(state, data) {
			state.colorData = data;
		},
		currentColor(state, data) {
			state.currentColor = data;
			if (state.currentSelector) {
				state.selectorCollection[state.currentSelector.selector][state.currentSelector.property] = data;
			}
		},
		currentSelector(state, data) {
			state.currentSelector = data;
		},
	},
	getters: {
		getColorDataCollection: function(state) {
			return state.colorData;
		},
		getSelectorDataCollection: function(state) {
			return state.selectorCollection;
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
