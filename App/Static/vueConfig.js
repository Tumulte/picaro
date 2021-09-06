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
  VScrollYReverseTransition,
  VCombobox,
  VSheet
} from "vuetify/lib";
// TODO add webpack chunks to exclude that in production
import adminToolBar from "../Ui/Components/adminToolBar.vue";
import userPanel from "../Ui/Components/userPanel.vue";
import model from "../Ui/Components/modelForm.vue";

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
    VCheckbox,
    VCombobox,
    VSheet
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

Vue.component("AdminToolBar", adminToolBar);
Vue.component("UserPanel", userPanel);
Vue.component("RfModel", model);
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
