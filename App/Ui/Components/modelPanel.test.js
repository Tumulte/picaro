import {createLocalVue, mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import modelPanel from "./modelPanel.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";

process.env.ISTEST = true;


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
    mount(modelPanel, {
        vuetify, localVue, store
    });


let select = null;
let options = null;
describe("modelPanel", () => {
    it("Creates a new model", async () => {

            expect(wrapper.find("[data-jest=\"add-model\"][disabled='disabled']").exists()).toBe(true);
            const addButton = wrapper.get("[data-jest='add-model']");
            const name = wrapper.get("[data-jest='model-name']");
            name.setValue("test model");
            await Vue.nextTick();
            addButton.trigger("click");
            await Vue.nextTick();

            expect(wrapper.vm.modelCollectionString).toBe("{\"test model\":[]}");
            expect(wrapper.find("[data-jest=\"add-model\"]").exists()).toBe(false);
            expect(wrapper.find("[data-jest=\"model-name\"]").exists()).toBe(false);
            select = wrapper.get("[data-jest='select-input']");
            options = select.findAll("option");
        }
    );

    // Inspect the raw component options
    it("creates new field of selected type", async () => {
        options.at(1).setSelected();

        await Vue.nextTick();
        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        name.setValue("test-name");
        label.setValue("test");
        await Vue.nextTick();

        await new Promise(r => setTimeout(r, 100));

        wrapper.get("[data-jest='add-button']:not([disabled='disabled'])").trigger("click");

        await wrapper.vm.$nextTick();


        //write the new data in a string
        expect(wrapper.vm.modelCollectionString).toBe("{\"test model\":[{\"name\":\"test-name\",\"required\":false,\"label\":\"test\",\"type\":\"Boolean\"}]}");

        //Display the new thing in the list
        const elementList = wrapper.get(".current-model-elements");
        expect(elementList.find("[data-jest=\"rf-form-switch\"]").exists()).toBe(true);

    });

    it("edits a field with new values", async () => {
        const edit = wrapper.get("[data-jest='edit-boolean']");
        edit.trigger("click");
        await Vue.nextTick();
        expect(wrapper.find("[data-jest='saveStyleSet-boolean']").exists()).toBe(true);
        expect(wrapper.find("[data-jest='edit-boolean']").exists()).toBe(false);
        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        await wrapper.vm.$nextTick();
        name.setValue("tataname-2");
        label.setValue("test of toto part 2");
        await wrapper.vm.$nextTick();

        wrapper.get("[data-jest='saveStyleSet-boolean']").trigger("click");
        await Vue.nextTick();
        expect(wrapper.vm.modelCollectionString).toBe("{\"test model\":[{\"name\":\"tataname-2\",\"required\":false,\"label\":\"test of toto part 2\",\"type\":\"Boolean\"}]}");

    });
    it("reorganize the form", async () => {

        options.at(2).setSelected();

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
        wrapper.get("[data-jest='add-button']:not([disabled='disabled'])").trigger("click");
        await Vue.nextTick();

        expect(wrapper.vm.modelCollectionString).toBe("{\"test model\":[{\"name\":\"tataname-2\",\"required\":false,\"label\":\"test of toto part 2\",\"type\":\"Boolean\"},{\"name\":\"new-element-2\",\"required\":false,\"label\":\"hello\",\"type\":\"Text\",\"regex\":\"\"}]}");

        const moveButtons = wrapper.findAll("[data-jest='move-field']");

        moveButtons.at(1).trigger("click");
        await Vue.nextTick();
        const moveDest = wrapper.find("[data-jest='move-field-destination']");

        moveDest.trigger("click");
        await Vue.nextTick();

        expect(wrapper.vm.modelCollectionString).toBe("{\"test model\":[{\"name\":\"new-element-2\",\"required\":false,\"label\":\"hello\",\"type\":\"Text\",\"regex\":\"\"},{\"name\":\"tataname-2\",\"required\":false,\"label\":\"test of toto part 2\",\"type\":\"Boolean\"}]}");

    });

    // Inspect the component instance on mount
    it("deletes existing field", async () => {
        const removeButton = wrapper.findAll("[data-jest='delete-button']");
        await wrapper.vm.$nextTick();

        removeButton.at(1).trigger("click");
        await Vue.nextTick();

        expect(wrapper.vm.modelCollectionString).toBe("{\"test model\":[{\"name\":\"new-element-2\",\"required\":false,\"label\":\"hello\",\"type\":\"Text\",\"regex\":\"\"}]}");


    });
    //todo : add moving existing models’ fields tests
    //todo: add cancel test

});
