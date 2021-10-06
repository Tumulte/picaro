//TODO clear that out
import Vue from "vue";
import Vuelidate from "vuelidate";
/* user components */
import tagsList from "../Ui/Components/tagsList.vue";
import list from "../Ui/Components/displayList.vue";
import link from "../Ui/Components/filterLink.vue";
import tags from "../Ui/Components/tags.vue";
import nav from "../Ui/Components/nav.vue";
import alert from "../Ui/Components/Utils/alert.vue";
import rfApp from "../Ui/Components/rfApp.vue";

import modelField from "../Ui/Components/modelField.vue";
import router from "../Router/router";
import Vuetify, {
  VInput,
  VSelect,
  VTextField,
  VListItem,
  VListItemGroup,
  VSwitch,
  VLabel,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VToolbar,
  VToolbarItems,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VDialog,
  VApp,
  VBtn,
  VContainer,
  VCol,
  VRow,
  VRadio,
  VRadioGroup,
  VIcon,
  VCheckbox,
  VCardActions,
  VScrollYReverseTransition,
  VCombobox,
  VSheet,
  VFileInput,
  VTabs,
  VTab
} from "vuetify/lib";
// TODO add webpack chunks to exclude that in production
import VueRouter from "vue-router";
import vuetify from "vuetify";
import Vuex from "vuex";
import adminStore from "../Store/admin";
import userStore from "../Store/user";
import axios from "axios";
import rfLayout from "../Ui/Components/rfCommonLayout.vue";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.use(Vuetify, {
  components: {
    VTabs,
    VTab,
    VInput,
    VSelect,
    VTextField,
    VListItem,
    VListItemGroup,
    VSwitch,
    VLabel,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VToolbar,
    VToolbarItems,
    VCard,
    VScrollYReverseTransition,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VApp,
    VBtn,
    VContainer,
    VCol,
    VRow,
    VRadio,
    VRadioGroup,
    VIcon,
    VCardActions,
    VDialog,
    VCheckbox,
    VCombobox,
    VSheet,
    VFileInput
  }
});

Vue.component("RfList", list);
Vue.component("RfTags", tags);
Vue.component("RfTagsList", tagsList);
Vue.component("RfLink", link);
Vue.component("RfNav", nav);
Vue.component("RfAlert", alert);
Vue.component("RfModelField", modelField);
Vue.component("RfApp", rfApp);
Vue.component("RfLayout", rfLayout);

Vue.component("AdminToolBar", () =>
  import("../Ui/Components/adminToolBar.vue")
);
Vue.component("RfAlert", alert);

const store = new Vuex.Store({
  modules: {
    user: userStore,
    admin: adminStore
  }
});
window.addEventListener("load", function() {
  new Vue({
    el: "#rf-vue-container",
    store,
    router,
    vuetify: new vuetify()
  });
});
axios
  .get("/settingapi/")
  .then(response => {
    const { styleSet, settings } = response.data;
    store.commit("styleSet", styleSet);
    store.commit("settings", settings);
  })
  .catch(error => {
    store.dispatch("addAlert", {
      type: "error",
      text: `Settings Request failed.  Returned status of ${error}`
    });
  });
