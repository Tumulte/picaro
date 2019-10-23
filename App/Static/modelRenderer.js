/**
 * @type {VueApp}
 */
var Vue = require('vue');
var Vuex = require('vuex');
var VRuntimeTemplate = require('v-runtime-template').default;

var VueRouter = require('vue-router').default;
var tagsComponent = require('../Ui/Components/tags.vue');
var listComponent = require('../Ui/Components/list.vue');
var linkComponent = require('../Ui/Components/link.vue');
var formComponent = require('../Ui/Components/form.vue');

Vue.component('rf-list', listComponent);
Vue.component('rf-tags', tagsComponent);
Vue.component('rf-link', linkComponent);
Vue.component('rf-form', formComponent);
Vue.component('v-runtime-template', VRuntimeTemplate);

Vue.use(VueRouter);
var router = new VueRouter({
	routes: [
		{
			path: '/tag/:type/:tag',
		},
		{
			path: '/link/:id',
		},
	],
});

Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		list: {},
		tags: {},
	},
	mutations: {
		list(state, data) {
			state.list = data;
		},
		tags(state, data) {
			state.tags = data;
		},
	},
	getters: {
		list: function(state) {
			return state.list;
		},
		tags: function(state) {
			return state.tags;
		},
	},
});

window.addEventListener('load', function() {
	//@ts-ignore
	new Vue({
		el: 'rf-list',
		router,
		store,
	});
	new Vue({
		el: 'rf-tags',
		router,
		store,
	});
	new Vue({
		el: 'rf-link',
		router,
		store,
	});
	new Vue({
		el: 'rf-form',
		router,
		store,
	});
});
