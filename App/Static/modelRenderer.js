import Vue from "vue";
import Vuex from "vuex";
import VRuntimeTemplate from "v-runtime-template";
import VueRouter from "vue-router";

const tagsListComponent = require("../Ui/Components/tagsList.vue");
const listComponent = require("../Ui/Components/displayList.vue");
const linkComponent = require("../Ui/Components/filterLink.vue");
const tagsComponent = require("../Ui/Components/tags.vue");
const navComponent = require("../Ui/Components/nav.vue");

Vue.component("RfList", listComponent);
Vue.component("RfTags", tagsComponent);
Vue.component("RfTagsList", tagsListComponent);
Vue.component("RfLink", linkComponent);
Vue.component("RfNav", navComponent);

Vue.component("VRuntimeTemplate", VRuntimeTemplate);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/tag/:type/:tag"
    },
    {
      path: "/link/:id"
    }
  ]
});

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    list: {},
    tagCollection: {}
  },
  mutations: {
    list(state, data) {
      state.list = data;
    },
    tagCollection(state, data) {
      state.tagCollection = data;
    },
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
    list: function(state) {
      return state.list;
    },
    tagCollection: function(state) {
      return state.tagCollection;
    }
  }
});

window.addEventListener("load", function() {
  //@ts-ignore
  new Vue({
    el: "#rf-cont",
    router,
    store
  });
});
