//TODO clear that out
/**
 * @type {VueApp}
 */
var Vue = require("vue");
var Vuex = require("vuex");
var vuetify = require("vuetify");
var VueRouter = require("vue-router").default;
var vuetifyLib = require("vuetify/lib");
var vInput = vuetifyLib.VInput;
var vButton = vuetifyLib.VBtn;
var vExpansionPanel = vuetifyLib.VExpansionPanel;
var vExpansionPanels = vuetifyLib.VExpansionPanels;
var vExpansionPanelHeader = vuetifyLib.VExpansionPanelHeader;
var vExpansionPanelContent = vuetifyLib.VExpansionPanelContent;
var vToolbar = vuetifyLib.VToolbar;
var vToolbarItems = vuetifyLib.VToolbarItems;
var vNavDrawer = vuetifyLib.VNavigationDrawer;
var vCard = vuetifyLib.VCard;
var vApp = vuetifyLib.VApp
var vNavigationDrawer = vuetifyLib.VNavigationDrawer;
var vBtn = vuetifyLib.VBtn
var vLabel = vuetifyLib.VLabel
var vTextField = vuetifyLib.VTextField
var vSwitch = vuetifyLib.VSwitch
var vForm = vuetifyLib.VForm;
var vCardTitle = vuetifyLib.VCardTitle
var vCardSubtitle = vuetifyLib.VCardSubtitle
var vCardText = vuetifyLib.VCardText
var vDivider = vuetifyLib.VDivider
var vListItem = vuetifyLib.VListItem
var vListItemGroup = vuetifyLib.VListItemGroup
var vContainer = vuetifyLib.VContainer
var vCol = vuetifyLib.VCol
var vRow = vuetifyLib.VRow
var vSelect = vuetifyLib.VSelect
var vRadio = vuetifyLib.VRadio
var vRadioGroup = vuetifyLib.VRadioGroup
var vSlider = vuetifyLib.VSlider
var vColorPicker = vuetifyLib.VColorPicker
var vIcon = vuetifyLib.VIcon
var vCardActions = vuetifyLib.VCardActions

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(vuetify, {
	components: {
		vInput,
		vSelect,
		vTextField,
		vListItem,
		vListItemGroup,
		vDivider,
		vButton,
		vSwitch,
		vLabel,
		vExpansionPanels,
		vExpansionPanel,
		vExpansionPanelHeader,
		vExpansionPanelContent,
		vToolbar,
		vToolbarItems,
		vNavDrawer,
		vCard,
		vCardTitle,
		vCardSubtitle,
		vCardText,
		vApp,
		vNavigationDrawer,
		vBtn,
		vForm,
		vContainer,
		vCol,
		vRow,
		vRadio,
		vRadioGroup,
		vSlider,
		vColorPicker,
		vIcon,
		vCardActions
	}
});
var ratioCollection = {
	h1: {
		text: "header 1",
		marginTop: 1.34,
		marginBottom: 1.34,
		fontSize: 2,
		lineHeight: 2.75
	},
	h2: {
		text: "header 2",
		marginTop: 1.25,
		marginBottom: 1.25,
		fontSize: 1.5,
		lineHeight: 2
	},
	h3: {
		text: "header 3",
		marginTop: 1.17,
		marginBottom: 1.17,
		fontSize: 1.17,
		lineHeight: 1.75
	},
	h4: {
		text: "header 4",
		marginTop: 1.33,
		marginBottom: 1.33,
		fontSize: 1,
		lineHeight: 1.4
	},
	h5: {
		text: "header 5",
		marginTop: 1.4,
		marginBottom: 1.4,
		fontSize: 0.83,
		lineHeight: 1.16
	},
	h6: {
		text: "header 6",
		marginTop: 1.55,
		marginBottom: 1.55,
		fontSize: 0.67,
		lineHeight: 0.9
	},
	p: {
		text: "base text"
	},
	html: {
		lineHeight: 24,
		fontSize: 16
	}
}
// TODO SPLIT logics of this file : it's not just style config
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
/* eslint-disable no-undef */
// @ts-ignore
if (ENVIRONMENT === "development") {
	// @ts-ignore
	require("webpack-hot-middleware/client?reload=true");
}

/* user components */
var VRuntimeTemplate = require("v-runtime-template").default;
// @ts-ignore
var tagsListComponent = require("../Ui/Components/tagsList.vue").default;
// @ts-ignore
var listComponent = require("../Ui/Components/list.vue").default;
// @ts-ignore
var linkComponent = require("../Ui/Components/link.vue").default;
// @ts-ignore
var formComponent = require("../Ui/Components/form.vue").default;
// @ts-ignore
var tagsComponent = require("../Ui/Components/tags.vue").default;
// @ts-ignore
var navComponent = require("../Ui/Components/nav.vue").default;


Vue.component("rf-list", listComponent);
Vue.component("rf-tags", tagsComponent);
Vue.component("rf-tags-list", tagsListComponent);
Vue.component("rf-link", linkComponent);
Vue.component("rf-form", formComponent);
Vue.component("rf-nav", navComponent);
Vue.component("v-runtime-template", VRuntimeTemplate);

var router = new VueRouter({
	routes: [{
			path: "/tag/:type/:tag"
		},
		{
			path: "/link/:id"
		}
	]
});

var userStore = {
	state: {
		list: {},
		tagCollection: {}
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
			if (data === "hasTags") {
				new Vue({
					el: "rf-tags",
					store
				});
			}
		}
	},
	getters: {
		// @ts-ignore
		list: function (state) {
			return state.list;
		},
		// @ts-ignore
		tagCollection: function (state) {
			return state.tagCollection;
		}
	}
};

//@ts-ignore
if (
	ENVIRONMENT === "development" ||
	(typeof isLogged !== "undefined" && isLogged)
) {
	/* eslint-enable no-undef */
	// @ts-ignore
	var adminPanel = require("../Ui/Components/adminPanel.vue").default;
	// @ts-ignore
	var cssPanelSelector = require("../Ui/Components/cssPanelSelector.vue").default;
	// @ts-ignore
	var cssPanelColor = require("../Ui/Components/cssPanelColor.vue").default;
	// @ts-ignore
	var cssPanel = require("../Ui/Components/cssPanelMain.vue").default;
	// @ts-ignore
	var cssPanelRatio = require("../Ui/Components/cssPanelRatio.vue").default;
	// @ts-ignore
	var messagesComponent = require("../Tools/Components/messages.vue").default;
	// @ts-ignore
	var navPanel = require("../Ui/Components/navPanel.vue").default;
	// @ts-ignore
	var adminToolBar = require("../Ui/Components/adminToolBar.vue").default;
	var modelPanel = require("../Ui/Components/modelPanel.vue").default;
	var userPanel = require("../Ui/Components/userPanel.vue").default;


	//@ts-ignore
	Vue.component("admin-panel", adminPanel);
	//@ts-ignore
	Vue.component("admin-tool-bar", adminToolBar)
	//@ts-ignore
	Vue.component("css-panel-selector", cssPanelSelector);
	//@ts-ignore
	Vue.component("css-panel-color", cssPanelColor);
	//@ts-ignore
	Vue.component("css-panel-ratio", cssPanelRatio);
	//@ts-ignore
	Vue.component("css-panel-main", cssPanel);
	//@ts-ignore
	Vue.component("nav-panel", navPanel);
	//@ts-ignore
	Vue.component("warning-component", messagesComponent);
	Vue.component("user-panel", userPanel);
	Vue.component("model-panel", modelPanel);


	var adminStore = {
		state: {
			colorParameterCollection: {},
			currentColor: "",
			currentRatio: 1,
			currentSelector: null,
			selectorCollection: {
				body: {},
				h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6: {},
				CLSS__altfont: {}
			},
			/* eslint-disable-next-line no-undef */
			colorCollection: {},
			selectorIndex: "1",
			cssPanelIndex: 1,
			colorSet: {},
			styleSet: {},
			navStructure: {},
			loaded: false,
			ratioCollection: ratioCollection
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
					Vue.set(
						state.selectorCollection[state.currentSelector.selector],
						state.currentSelector.property, {
							type: "color",
							data: coordinates
						}
					)
				}
			},
			currentRatio(state, coordinates) {
				if (state.currentSelector) {
					Vue.set(
						state.selectorCollection[state.currentSelector.selector],
						state.currentSelector.property, {
							type: "ratio",
							data: coordinates
						}
					)
				}
			},
			// @ts-ignore
			currentSelector(state, data) {
				state.currentSelector = data;
			},
			ratioCollection(state, data) {
				state.ratioCollection = data;
				var lineHeight = Math.round(data.html.lineHeight / data.html.fontSize * 100) / 100
				state.ratioCollection.p = {
					lineHeight: lineHeight,
					fontSize: 1,
					marginBottom: 0,
					marginTop: 0,
					text: data.p.text
				}
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
			}
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
			ratioCollection: function (state) {
				return state.ratioCollection
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
			}
		},
		actions: {
			updateSelector: function ({
				state
			}, value) {
				Vue.set(state.selectorCollection, value.new, state.selectorCollection[value.old])
				Vue.delete(state.selectorCollection, value.old)
			},
			addSelector: function ({
				state
			}, value) {
				Vue.set(state.selectorCollection, value, {})
			},
			addProperty: function ({
				state
			}, data) {
				Vue.set(state.selectorCollection[data.selector], data.property, data.value ? data.value : '')
			},
			updateStyles: function ({
				state
			}, data) {
				if (!data) {
					return;
				}
				Vue.set(state.selectorCollection[data.selector], data.property, data.value)
			}
		},
	};
} else {
	adminStore = {};
}
var store = new Vuex.Store({
	modules: {
		user: userStore,
		admin: adminStore
	}
});

window.addEventListener("load", function () {
	new Vue({
		el: "#rf-vue-container",
		store,
		router,
		vuetify: new vuetify()
	});

});