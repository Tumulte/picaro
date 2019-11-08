/**
 * @type {VueApp}
 */
var Vue = require('vue');
var Vuex = require('vuex');
var VRuntimeTemplate = require('v-runtime-template').default;

var VueRouter = require('vue-router').default;
var tagsListComponent = require('../Ui/Components/tagsList.vue');
var listComponent = require('../Ui/Components/list.vue');
var linkComponent = require('../Ui/Components/link.vue');
var formComponent = require('../Ui/Components/form.vue');
var tagsComponent = require('../Ui/Components/tags.vue');

Vue.component('rf-list', listComponent);
Vue.component('rf-tags', tagsComponent);
Vue.component('rf-tags-list', tagsListComponent);
Vue.component('rf-link', linkComponent);
Vue.component('rf-form', formComponent);
Vue.component('v-runtime-template', VRuntimeTemplate);
var event = new Event('formloaded');

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
		tagCollection: {},
	},
	mutations: {
		list(state, data) {
			state.list = data;
		},
		tagCollection(state, data) {
			state.tagCollection = data;
		},
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
		list: function(state) {
			return state.list;
		},
		tagCollection: function(state) {
			return state.tagCollection;
		},
	},
});

window.addEventListener('load', function() {
	//@ts-ignore
	if (document.getElementsByTagName('rf-list').length > 0) {
		new Vue({
			el: 'rf-list',
			router,
			store,
		});
	}
	if (document.getElementsByTagName('rf-tags-list').length > 0) {
		new Vue({
			el: 'rf-tags-list',
			router,
			store,
		});
	}
	if (document.getElementsByTagName('rf-link').length > 0) {
		new Vue({
			el: 'rf-link',
			router,
			store,
		});
	}
	if (document.getElementsByTagName('rf-form').length > 0) {
		new Vue({
			el: 'rf-form',
			store,
		});
	}
});
