import {mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import boolean from "./_booleanSwitchEdit.vue";
import common from "./formEditCommons/_formFieldEditCommon";

const vuetify = new Vuetify();
const wrapper =
    mount(boolean, {
        vuetify, propsData: {
            edit: true
        },
        stubs: {
            formFieldEditCommon: common
        }


    });


describe("Boolean form element ", () => {

    it("prevents creation of a new field if it has not all the correct values", async () => {
        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        label.setValue("test");
        expect(wrapper.vm.valid).toBe(false);

        name.setValue("test-name");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.valid).toBe(false);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.commonData.label).toBe("test");
        expect(wrapper.vm.commonData.name).toBe("test-name");
        expect(wrapper.vm.valid).toBe(true);
        await wrapper.vm.$nextTick();

        name.setValue("test-naVme");
        await wrapper.vm.$nextTick();
        await wrapper.vm.$forceUpdate();
        expect(wrapper.vm.valid).toBe(false);

    });


});
