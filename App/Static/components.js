//TODO clear that out
/**
 * @type {VueApp}
 */
import Vue from "vue";
import Vuetify, {
    VInput,
    VSelect,
    VTextField,
    VListItem,
    VListItemGroup,
    VDivider,
    VSwitch,
    VLabel,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VToolbar,
    VToolbarItems,
    VNavigationDrawer,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VApp,
    VBtn,
    VForm,
    VContainer,
    VCol,
    VRow,
    VRadio,
    VRadioGroup,
    VSlider,
    VColorPicker,
    VIcon,
    VCardActions
} from "vuetify/lib";

const vInput = vuetifyLib.VInput;
const vButton = vuetifyLib.VBtn;
const vExpansionPanel = vuetifyLib.VExpansionPanel;
const vExpansionPanels = vuetifyLib.VExpansionPanels;
const vExpansionPanelHeader = vuetifyLib.VExpansionPanelHeader;
const vExpansionPanelContent = vuetifyLib.VExpansionPanelContent;
const vToolbar = vuetifyLib.VToolbar;
const vToolbarItems = vuetifyLib.VToolbarItems;
const vNavDrawer = vuetifyLib.VNavigationDrawer;
const vCard = vuetifyLib.VCard;
const vApp = vuetifyLib.VApp;
const vNavigationDrawer = vuetifyLib.VNavigationDrawer;
const vBtn = vuetifyLib.VBtn;
const vLabel = vuetifyLib.VLabel;
const vTextField = vuetifyLib.VTextField;
const vSwitch = vuetifyLib.VSwitch;
const vForm = vuetifyLib.VForm;
const vCardTitle = vuetifyLib.VCardTitle;
const vCardSubtitle = vuetifyLib.VCardSubtitle;
const vCardText = vuetifyLib.VCardText;
const vDivider = vuetifyLib.VDivider;
const vListItem = vuetifyLib.VListItem;
const vListItemGroup = vuetifyLib.VListItemGroup;
const vContainer = vuetifyLib.VContainer;
const vCol = vuetifyLib.VCol;
const vRow = vuetifyLib.VRow;
const vSelect = vuetifyLib.VSelect;
const vRadio = vuetifyLib.VRadio;
const vRadioGroup = vuetifyLib.VRadioGroup;
const vSlider = vuetifyLib.VSlider;
const vColorPicker = vuetifyLib.VColorPicker;
const vIcon = vuetifyLib.VIcon;
const vCardActions = vuetifyLib.VCardActions;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify, {
    components: {
        VInput,
        VSelect,
        VTextField,
        VListItem,
        VListItemGroup,
        VDivider,
        VSwitch,
        VLabel,
        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent,
        VToolbar,
        VToolbarItems,
        VNavigationDrawer,
        VCard,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VApp,
        VBtn,
        VForm,
        VContainer,
        VCol,
        VRow,
        VRadio,
        VRadioGroup,
        VSlider,
        VColorPicker,
        VIcon,
        VCardActions
    }
});
const ratioCollection = {
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
};
// TODO SPLIT logics of this file : it's not just style config
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
/* eslint-disable no-undef */
// @ts-ignore
if (ENVIRONMENT === "development") {
    // @ts-ignore
    require("webpack-hot-middleware/client?reload=true");
}

/* user components */
import tagsList from "../Ui/Components/tagsList.vue";
import list from "../Ui/Components/list.vue";
import link from "../Ui/Components/link.vue";
import form from "../Ui/Components/form.vue";
import tags from "../Ui/Components/tags.vue";
import nav from "../Ui/Components/nav.vue";


Vue.component("rf-list", list);
Vue.component("rf-tags", tags);
Vue.component("rf-tags-list", tagsList);
Vue.component("rf-link", link);
Vue.component("rf-form", form);
Vue.component("rf-nav", nav);

const router = new VueRouter({
    routes: [{
        path: "/tag/:type/:tag"
    },
        {
            path: "/link/:id"
        }
    ]
});

const userStore = {
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
// TODO add webpack chuncks to exclude that in production
import adminPanel from "../Ui/Components/adminPanel.vue";
import cssPanelSelector from "../Ui/Components/cssPanelSelector.vue";
import cssPanelColor from "../Ui/Components/cssPanelColor.vue";
import cssPanel from "../Ui/Components/cssPanelMain.vue";
import cssPanelRatio from "../Ui/Components/cssPanelRatio.vue";
import messagesComponent from "../Tools/Components/messages.vue";
import navPanel from "../Ui/Components/navPanel.vue";
import adminToolBar from "../Ui/Components/adminToolBar.vue";
import modelPanel from "../Ui/Components/modelPanel.vue";
import userPanel from "../Ui/Components/userPanel.vue";

import vuetifyLib from "vuetify/lib";
import VueRouter from "vue-router";
import vuetify from "vuetify";
import Vuex from "vuex";

let adminStore = {};
if (
    ENVIRONMENT === "development" ||
    (typeof isLogged !== "undefined" && isLogged)
) {

    //@ts-ignore
    Vue.component("admin-panel", adminPanel);
    //@ts-ignore
    Vue.component("admin-tool-bar", adminToolBar);
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


    adminStore = {
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
                    );
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
                    );
                }
            },
            // @ts-ignore
            currentSelector(state, data) {
                state.currentSelector = data;
            },
            ratioCollection(state, data) {
                state.ratioCollection = data;
                const lineHeight = Math.round(data.html.lineHeight / data.html.fontSize * 100) / 100;
                state.ratioCollection.p = {
                    lineHeight: lineHeight,
                    fontSize: 1,
                    marginBottom: 0,
                    marginTop: 0,
                    text: data.p.text
                };
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
                return state.ratioCollection;
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
                Vue.set(state.selectorCollection, value.new, state.selectorCollection[value.old]);
                Vue.delete(state.selectorCollection, value.old);
            },
            addSelector: function ({
                                       state
                                   }, value) {
                Vue.set(state.selectorCollection, value, {});
            },
            addProperty: function ({
                                       state
                                   }, data) {
                Vue.set(state.selectorCollection[data.selector], data.property, data.value ? data.value : "");
            },
            updateStyles: function ({
                                        state
                                    }, data) {
                if (!data || !data.value) {
                    return;
                }
                Vue.set(state.selectorCollection[data.selector], data.property, data.value);
            }
        },
    };
}
const store = new Vuex.Store({
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