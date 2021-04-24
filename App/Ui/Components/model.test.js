import {createLocalVue, mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import model from "./modelForm.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";

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
const wrapper =
    mount(model, {
            vuetify, localVue, store,
            propsData: {
                modelName: "test model"
            }
        }
    );

wrapper.vm.$store.commit("modelCollection", {
    "test model": [
        {
            name: "tataname-2",
            type: "Boolean",
            required: true,
            label: "test of toto part 2"
        },
        {
            name: "new-element-2",
            label: "hello",
            required: false,
            type: "Text"
        }
    ]
});
describe("modelPanel", () => {
    it.skip("Generates a form from data", async () => {
        const formElements = wrapper.findAll("[data-jest='form-element']");
        expect(formElements.length).toBe(2);
        expect(wrapper.contains("[data-jest='boolean-field'][required='required']")).toBe(true);
        expect(wrapper.contains("[data-jest='text-field']:not([required='required'])")).toBe(true);

    });
});