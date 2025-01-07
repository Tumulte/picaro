import { describe, expect, it, vi } from "vitest";
import AppDisplay from "./AppDisplay.vue";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
vi.mock('vue-router', () => ({
    useRoute: () => ({ params: "" })
}));
const wrapper = mount(AppDisplay, {
    global: {
        plugins: [createTestingPinia()],
    },
});
const params = {
    globalFilters: "filter~categories",
    modelFilters: "model::filter~model2++model3::categories",
    globalParams: "eqField1..id++gtField2..id2~ltField3..id3",
    modelFilterParams: "eqField1..id++gtField2..id2~ltField3..id3",
};
describe("AppDisplay", () => {
    it("should render", () => {
        expect(wrapper.vm.filterRouteToStore(params)).toEqual({
            all: [
                { method: 'eq', field: 'Field1', value: ['id'], type: 'filter' },
                { method: 'gt', field: 'Field2', value: ['id2'], type: 'filter' },
                { method: 'lt', field: 'Field3', value: ['id3'], type: 'categories' }
            ],
            modelFilters: [
                { modelIdCollection: ["model"], method: 'eq', field: 'Field1', value: ['id'], type: 'filter' },
                {
                    modelIdCollection: ["model"],
                    method: 'gt',
                    field: 'Field2',
                    value: ['id2'],
                    type: 'filter'
                },
                {
                    modelIdCollection: ["model2", "model3"],
                    method: 'lt',
                    field: 'Field3',
                    value: ['id3'],
                    type: 'categories'
                }
            ]
        });
    });
});
//# sourceMappingURL=AppDisplay.test.js.map
