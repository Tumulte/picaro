import {createLocalVue, mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import modelPanel from "./modelPanel.vue";
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
    mount(modelPanel, {
        vuetify, localVue, store
    });


let select = null;
let options = null;
describe("modelPanel", () => {
    it("Creates a new model", async () => {

            expect(wrapper.contains("[data-jest=\"add-model\"][disabled='disabled']")).toBe(true);
            const addButton = wrapper.get("[data-jest='add-model']");
            const name = wrapper.get("[data-jest='model-name']");
            name.setValue("test model");
            await Vue.nextTick();
            addButton.trigger("click");
            await Vue.nextTick();

            expect(wrapper.vm.hiddenModelString).toBe("{\"test model\":[]}");
            expect(wrapper.contains("[data-jest=\"add-model\"]")).toBe(false);
            expect(wrapper.contains("[data-jest=\"model-name\"]")).toBe(false);
            expect(wrapper.contains("[data-jest=\"model-name-title\"]")).toBe(true);
            select = wrapper.get("[data-jest='select-input']");
            options = select.findAll("option");
        }
    );
    it("prevents creation of a new field if it has not all the correct values", async () => {
        //select boolean
        options.at(1).setSelected();
        await Vue.nextTick();

        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        expect(wrapper.vm.allFieldsValid).toBe(false);

        name.setValue("test-name");
        await Vue.nextTick();
        await new Promise((r) => setTimeout(r, 200));
        expect(wrapper.vm.allFieldsValid).toBe(false);

        label.setValue("test");
        await Vue.nextTick();
        await new Promise((r) => setTimeout(r, 200));
        expect(wrapper.vm.allFieldsValid).toBe(true);

        name.setValue("test-naVme");
        await Vue.nextTick();
        await new Promise((r) => setTimeout(r, 200));
        wrapper.get("[data-jest='name-field-error']");
        expect(wrapper.vm.allFieldsValid).toBe(false);
    });

    // Inspect the raw component options
    it("creates new field of selected type", async () => {
        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        name.setValue("test-name");
        label.setValue("test");
        await Vue.nextTick();
        await new Promise((r) => setTimeout(r, 200));


        wrapper.get("[data-jest='add-button']:not([disabled='disabled'])").trigger("click");

        await Vue.nextTick();
        await new Promise((r) => setTimeout(r, 200));

        expect(wrapper.vm.$store.getters.validCounter).toBe(0);

        //write the new data in a string
        expect(wrapper.vm.hiddenModelString).toBe("{\"test model\":[{\"name\":\"test-name\",\"label\":\"test\",\"requiered\":false,\"type\":\"Boolean\"}]}");
        //reset the temp component
        expect(wrapper.vm.currentField).toStrictEqual({});

        //Display the new thing in the list
        const elementList = wrapper.get(".current-model-elements");
        expect(elementList.contains("[data-jest=\"rf-form-switch\"]")).toBe(true);

    });

    it("edits a field with new values", async () => {
        const edit = wrapper.get("[data-jest='edit-boolean']");
        edit.trigger("click");
        await Vue.nextTick();
        expect(wrapper.contains("[data-jest='save-boolean']")).toBe(true);
        expect(wrapper.contains("[data-jest='edit-boolean']")).toBe(false);
        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        await Vue.nextTick();
        name.setValue("tataname-2");
        label.setValue("test of toto part 2");
        await Vue.nextTick();
        await new Promise((r) => setTimeout(r, 200));

        wrapper.get("[data-jest='save-boolean']").trigger("click");
        await Vue.nextTick();
        expect(wrapper.vm.hiddenModelString).toBe("{\"test model\":[{\"name\":\"tataname-2\",\"type\":\"Boolean\",\"label\":\"test of toto part 2\"}]}");

    });
    it("reorganize the form", async () => {

        options.at(2).setSelected();

        await Vue.nextTick();

        //expect(wrapper.vm.$store.getters.validCounter).toBe(2);

        const name = wrapper.get("[data-jest='rf-form-name']");
        const label = wrapper.get("[data-jest='rf-form-label']");
        label.setValue("hello");
        await new Promise((r) => setTimeout(r, 200));
        expect(wrapper.vm.$store.getters.validCounter).toBe(1);
        name.setValue("new-element-2");
        await new Promise((r) => setTimeout(r, 200));
        expect(wrapper.vm.$store.getters.validCounter).toBe(0);
        await new Promise((r) => setTimeout(r, 200));
        await Vue.nextTick();
        expect(wrapper.vm.$store.getters.validCounter).toBe(0);

        wrapper.get("[data-jest='add-button']:not([disabled='disabled'])").trigger("click");
        await Vue.nextTick();

        expect(wrapper.vm.hiddenModelString).toBe("{\"test model\":[{\"name\":\"tataname-2\",\"type\":\"Boolean\",\"label\":\"test of toto part 2\"},{\"name\":\"new-element-2\",\"label\":\"hello\",\"requiered\":false,\"type\":\"Text\"}]}");

        const moveButtons = wrapper.findAll("[data-jest='move-field']");

        moveButtons.at(1).trigger("click");
        await Vue.nextTick();
        const moveDest = wrapper.find("[data-jest='move-field-destination']");

        moveDest.trigger("click");
        await Vue.nextTick();

        expect(wrapper.vm.hiddenModelString).toBe("{\"test model\":[{\"name\":\"new-element-2\",\"label\":\"hello\",\"requiered\":false,\"type\":\"Text\"},{\"name\":\"tataname-2\",\"type\":\"Boolean\",\"label\":\"test of toto part 2\"}]}");

    });
    // Inspect the component instance on mount
    it("deletes existing field", async () => {
        const removeButton = wrapper.findAll("[data-jest='delete-button']");
        removeButton.at(1).trigger("click");
        await Vue.nextTick();

        expect(wrapper.vm.hiddenModelString).toBe("{\"test model\":[{\"name\":\"new-element-2\",\"label\":\"hello\",\"requiered\":false,\"type\":\"Text\"}]}");
        

    });


});
