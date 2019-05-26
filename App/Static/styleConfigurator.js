if (ENVIRONMENT === 'development') {
	require('webpack-hot-middleware/client?reload=true');
}

var cssPanelColor = require('../Ui/Components/cssPanelColor.vue').colorComponent;
var cssPanel = require('../Ui/Components/cssPanel.vue').panelComponent;
require('../../App/Static/AppStyles.css');

var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);
var store = new Vuex.Store({
	state: { colorData: {} },
	mutations: {
		colorData(state, data) {
			state.colorData = data;
		},
	},
	getters: {
		getColorDataCollection: function(state) {
			return state.colorData;
		},
	},
});

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
