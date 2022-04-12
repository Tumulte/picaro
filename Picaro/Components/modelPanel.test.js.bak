import { createLocalVue, mount } from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import modelPanel from "./modelPanel.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";
import vueTestingHelper from "../../Tests/testHelper";

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
const wrapper = mount(modelPanel, {
  vuetify,
  localVue,
  store
});

const w = new vueTestingHelper(wrapper);

describe("modelPanel", () => {
  it("Creates a new model", async () => {
    expect(
      wrapper.find("[data-jest=\"add-model\"][disabled='disabled']").exists()
    ).toBe(true);
    const addButton = wrapper.get("[data-jest='add-model']");
    const name = wrapper.get("[data-jest='model-name']");
    name.setValue("test model");
    await Vue.nextTick();
    addButton.trigger("click");
    await Vue.nextTick();

    expect(wrapper.vm.modelCollection).toStrictEqual({ "test model": [] });
    expect(wrapper.find('[data-jest="add-model"]').exists()).toBe(false);
    expect(wrapper.find('[data-jest="model-name"]').exists()).toBe(false);
  });

  // Inspect the raw component options
  it("creates new field of selected type", async () => {
    w.select(1, "select-input");

    await Vue.nextTick();
    const name = w.get("rf-form-name");
    const label = w.get("rf-form-label");
    name.setValue("test-name");
    label.setValue("test");
    await w.tick();

    await w.wait(100);
    w.click("add-button", ":not([disabled='disabled']");

    await w.tick();

    //write the new data in a string
    expect(wrapper.vm.modelCollection).toStrictEqual({
      "test model": [
        {
          name: "test-name",
          required: false,
          label: "test",
          type: "Boolean"
        }
      ]
    });

    //Display the new thing in the list
    const elementList = wrapper.get(".current-model-elements");
    expect(w.exists("rf-form-switch", "", elementList)).toBe(true);
  });

  it("edits a field with new values", async () => {
    w.click("edit-boolean");
    await w.tick();
    expect(w.exists("saveStyleSet-boolean")).toBe(true);
    expect(w.exists("edit-boolean")).toBe(false);
    w.setValue("tataname-2", "rf-form-name");
    w.setValue("test of toto part 2", "rf-form-label");
    await w.tick();
    w.click("saveStyleSet-boolean");
    await Vue.nextTick();
    expect(wrapper.vm.modelCollection).toStrictEqual({
      "test model": [
        {
          name: "tataname-2",
          required: false,
          label: "test of toto part 2",
          type: "Boolean"
        }
      ]
    });
  });
  it("reorganize the form", async () => {
    w.select(2, "select-input");

    await wrapper.vm.$nextTick();

    const name = wrapper.get("[data-jest='rf-form-name']");
    const label = wrapper.get("[data-jest='rf-form-label']");
    await wrapper.vm.$nextTick();

    label.setValue("hello");

    name.setValue("new-element-2");
    await wrapper.vm.$forceUpdate();

    expect(wrapper.vm.$refs.Text[0].commonData.label).toBe("hello");
    expect(wrapper.vm.$refs.Text[0].commonData.name).toBe("new-element-2");
    await wrapper.vm.$forceUpdate();

    expect(wrapper.vm.valid).toBe(true);
    wrapper
      .get("[data-jest='add-button']:not([disabled='disabled'])")
      .trigger("click");
    await Vue.nextTick();

    expect(wrapper.vm.modelCollection).toStrictEqual({
      "test model": [
        {
          name: "tataname-2",
          required: false,
          label: "test of toto part 2",
          type: "Boolean"
        },
        {
          name: "new-element-2",
          required: false,
          label: "hello",
          type: "Text",
          regex: ""
        }
      ]
    });

    const moveButtons = wrapper.findAll("[data-jest='move-field']");

    moveButtons.at(1).trigger("click");
    await Vue.nextTick();
    const moveDest = wrapper.find("[data-jest='move-field-destination']");

    moveDest.trigger("click");
    await Vue.nextTick();

    expect(wrapper.vm.modelCollection).toStrictEqual({
      "test model": [
        {
          name: "new-element-2",
          required: false,
          label: "hello",
          type: "Text",
          regex: ""
        },
        {
          name: "tataname-2",
          required: false,
          label: "test of toto part 2",
          type: "Boolean"
        }
      ]
    });
  });

  // Inspect the component instance on mount
  it("deletes existing field", async () => {
    const removeButton = wrapper.findAll("[data-jest='delete-button']");
    await wrapper.vm.$nextTick();

    removeButton.at(1).trigger("click");
    await Vue.nextTick();

    expect(wrapper.vm.modelCollection).toStrictEqual({
      "test model": [
        {
          name: "new-element-2",
          required: false,
          label: "hello",
          type: "Text",
          regex: ""
        }
      ]
    });
  });
  //todo : add moving existing models’ fields tests
  //todo: add cancel test
});
