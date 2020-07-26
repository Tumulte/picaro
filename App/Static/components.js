//TODO clear that out
import Vue from "vue";
import Vuelidate from "vuelidate";

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
    VAlert,
    VDialog,
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
    VCheckbox,
    VCardActions,
    VScrollYReverseTransition
} from "vuetify/lib";


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuelidate);
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
        VScrollYReverseTransition,
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
        VCardActions,
        VAlert,
        VDialog,
        VCheckbox
    }
});

// TODO SPLIT logics of this file : it's not just style config
// Webpack Development Server, active only for Development. Validation is confused, validation is OFF.
/* eslint-disable no-undef */
// @ts-ignore

if (ENVIRONMENT === "development") {
    // @ts-ignore
    //require("webpack-hot-middleware/client?reload=true&path=http://localhost:8080/dev-bundle/__webpack_hmr");
}

/* user components */
import tagsList from "../Ui/Components/tagsList.vue";
import list from "../Ui/Components/list.vue";
import link from "../Ui/Components/link.vue";
import tags from "../Ui/Components/tags.vue";
import nav from "../Ui/Components/nav.vue";
import alert from "@components/utils/alert.vue";
import richText from "../Ui/Components/partials/display/_richText.vue";


Vue.component("rf-list", list);
Vue.component("rf-tags", tags);
Vue.component("rf-tags-list", tagsList);
Vue.component("rf-link", link);
Vue.component("rf-nav", nav);
Vue.component("rf-alert", alert);
Vue.component("rf-rich-text", richText);


const router = new VueRouter({
    routes: [{
        path: "/tag/:type/:tag"
    },
        {
            path: "/link/:id"
        }
    ]
});


// TODO add webpack chuncks to exclude that in production
import cssPanel from "../Ui/Components/cssPanelMain.vue";
import messagesComponent from "../Tools/Components/messages.vue";
import adminToolBar from "../Ui/Components/adminToolBar.vue";
import userPanel from "../Ui/Components/userPanel.vue";
import model from "../Ui/Components/model.vue";


import VueRouter from "vue-router";
import vuetify from "vuetify";
import Vuex from "vuex";
import adminStore from "../Store/admin";
import userStore from "../Store/user";

if (
    ENVIRONMENT === "development" ||
    (typeof isLogged !== "undefined" && isLogged)
) {

    Vue.component("admin-tool-bar", adminToolBar);
    Vue.component("css-panel-main", cssPanel);
    Vue.component("warning-component", messagesComponent);
    Vue.component("user-panel", userPanel);
    Vue.component("rf-model", model);
    Vue.component("rf-alert", alert);


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