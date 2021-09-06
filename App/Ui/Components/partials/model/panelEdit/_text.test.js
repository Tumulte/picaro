import { mount } from "@vue/test-utils";

import Vuetify from "vuetify";
import text from "./_modelField.vue";

const vuetify = new Vuetify();
const wrapper = mount(text, {
  vuetify,
  propsData: {
    edit: true
  }
});

describe("Text form element ", () => {
  it("prevents creation of a new field if it has not all the correct values", async () => {
    const name = wrapper.get("[data-jest='rf-form-name']");
    const label = wrapper.get("[data-jest='rf-form-label']");

    label.setValue("hello");

    name.setValue("new-element-2");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.commonData.label).toBe("hello");
    expect(wrapper.vm.commonData.name).toBe("new-element-2");
    await wrapper.vm.$forceUpdate();

    expect(wrapper.vm.valid).toBe(true);
  });
});
