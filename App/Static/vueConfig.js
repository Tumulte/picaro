//TODO clear that out
import Vue from "vue";
import Vuelidate from "vuelidate";
/* user components */
import tagsList from "../Ui/Components/tagsList.vue";
import list from "../Ui/Components/displayList.vue";
import link from "../Ui/Components/filterLink.vue";
import tags from "../Ui/Components/tags.vue";
import nav from "../Ui/Components/nav.vue";
import alert from "@components/utils/alert.vue";
import rfApp from "../Ui/Components/rfApp.vue";

import modelField from "../Ui/Components/modelField.vue";
import router from "../Router/router";
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
// TODO add webpack chuncks to exclude that in production
import cssPanel from "../Ui/Components/cssPanelMain.vue";
import adminToolBar from "../Ui/Components/adminToolBar.vue";
import userPanel from "../Ui/Components/userPanel.vue";
import model from "../Ui/Components/modelForm.vue";


import VueRouter from "vue-router";
import vuetify from "vuetify";
import Vuex from "vuex";
import adminStore from "../Store/admin";
import userStore from "../Store/user";
import axios from "axios";
import rfLayout from "../Ui/Components/rfLayout.vue";

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


Vue.component("rf-list", list);
Vue.component("rf-tags", tags);
Vue.component("rf-tags-list", tagsList);
Vue.component("rf-link", link);
Vue.component("rf-nav", nav);
Vue.component("rf-alert", alert);
Vue.component("rf-model-field", modelField);
Vue.component("rf-app", rfApp);
Vue.component("rf-layout", rfLayout);

if (
    ENVIRONMENT === "development" ||
    (typeof isLogged !== "undefined" && isLogged)
) {

    Vue.component("admin-tool-bar", adminToolBar);
    Vue.component("css-panel-main", cssPanel);
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
if (!process.env.ISTEST) {

    axios
        .get("/appapi/settings/")
        .then(response => {
            store.commit("settings", response.data);
        }).catch(error => {
        store.dispatch("addAlert", {
            type: "error",
            text: `Settings Request failed.  Returned status of ${error}`
        });
    });
}
