import {shallowMount, createLocalVue} from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import userStore from "../Store/user";
import Vue from "vue";
import router from "../Router/router";
import rfApp from "../Ui/Components/rfApp";

const localVue = createLocalVue();
localVue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        user: userStore,
    }
});
const wrapper = shallowMount(rfApp, {
    localVue,
    router,
    store
});

const filterParams = {
    all: {list: ["id123"], tags: ["my tag", "another tag"]},
    modelFilters: {
        "[\"a model\", \"another model\"]": {
            category: ["a category"], tags: ["tata", "y toto"]
        },
        "[\"something different\"]": {
            list: ["a category"], tags: ["lala", "lilou"]
        }
    }
};
wrapper.vm.$store.commit("filterCollection", filterParams);
wrapper.vm.$store.dispatch("updateFilterCollection", {
    models: "hello",
    type: "type",
    filterParams: "It's it"
});
describe("The filters are passed from the store to the router and back to allow url recall and history", () => {
    it("converts a set of filter parameters to an url", async () => {
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$route.path).toBe("/filters/list__tags/id123__my%2520tag--another%2520tag/a%2520model--another%2520model__category--tags~something%2520different__list--tags~hello__type/a%2520category__tata--y%2520toto~a%2520category__lala--lilou~It's%2520it");
    });
    it("returns an expanded, easier to process filter collection", () => {
        expect(wrapper.vm.$store.getters.filterCollectionExpanded).toStrictEqual({
            "a model": {
                "category": ["a category"],
                "tags": ["tata", "y toto"]
            },
            "another model": {"category": ["a category"], "tags": ["tata", "y toto"]},
            "hello": {"type": ["It's it"]},
            "something different": {"list": ["a category"], "tags": ["lala", "lilou"]}
        });
    });
});
