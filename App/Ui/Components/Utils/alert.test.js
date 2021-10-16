import { createLocalVue, mount } from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import alert from "./alert.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../../Store/user";
import adminStore from "../../../Store/admin";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    user: userStore,
    admin: adminStore
  }
});
const localVue = createLocalVue();

const vuetify = new Vuetify();
Vue.use(Vuelidate);
const wrapper = mount(alert, {
  vuetify,
  localVue,
  store
});

describe("modelModule", () => {
  it("adds an alert to the alert list", async () => {
    wrapper.vm.$store.dispatch("addAlert", {
      text: "this is a warning message",
      type: "warning",
      timeOut: 100
    });
    wrapper.vm.$store.dispatch("addAlert", {
      text: "isn't it anonther ?",
      type: "error",
      timeOut: 100
    });
    await Vue.nextTick();
    expect(wrapper.html().includes("this is a warning message")).toBe(true);
    expect(wrapper.html().includes("warning")).toBe(true);
    expect(wrapper.html().includes("isn't it anonther")).toBe(true);
    expect(
      wrapper.html().includes(" v-alert__icon mdi mdi-alert theme--dark")
    ).toBe(true);
    expect(wrapper.vm.$store.getters.alertCollection.length).toBe(2);

    await new Promise(r => setTimeout(r, 200));
    expect(
      wrapper
        .html()
        .includes('div class="v-alert__content">this is a warning error')
    ).toBe(false);
    expect(
      wrapper.html().includes('div class="v-alert__content">isn\'t it anonther')
    ).toBe(false);
    expect(wrapper.vm.$store.getters.alertCollection.length).toBe(0);
  });
  it("Dismisses the alert when the button is clicked", async () => {
    wrapper.vm.$store.dispatch("addAlert", {
      text: "this is a warning message",
      type: "warning"
    });
    await Vue.nextTick();
    expect(wrapper.vm.$store.getters.alertCollection.length).toBe(1);

    wrapper.get("[data-jest='discard-button']").trigger("click");
    await Vue.nextTick();
    expect(wrapper.vm.$store.getters.alertCollection.length).toBe(0);
  });
});
