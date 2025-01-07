import {describe, expect, it, vi} from "vitest"
import AppDisplay from "./AppDisplay.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";
import {FilterCollection} from "@types";

vi.mock('vue-router', () => ({
    useRoute: () => ({params: ""})
}));

const wrapper = mount(AppDisplay, {
    global: {
        plugins: [createTestingPinia()],
    },
// eslint-disable-next-line
}) as VueWrapper<any>

const expectedResult: FilterCollection = {
    all: [
        {method: 'eq', field: 'Field1', value: ['value', 'value1'], type: 'filter'},
        {method: 'in', field: 'Field2', value: ['value2'], type: 'filter'},
        {method: 'fd', field: 'Field3', value: ['value3'], type: 'categories'}
    ],
    modelFilters: [
        {modelIdCollection: ["model"], method: 'eq', field: 'Field1', value: ['value'], type: 'filter'},
        {
            modelIdCollection: ["model"],
            method: 'in',
            field: 'Field2',
            value: ['value2'],
            type: 'filter'
        },
        {
            modelIdCollection: ["model2", "model3"],
            method: 'fd',
            field: 'Field3',
            value: ['value3', 'value4'],
            type: 'categories'
        }
    ],
}
const params = {
    globalFilters: "filter~categories",
    globalParams: "eqField1..value**value1++inField2..value2~fdField3..value3",
    modelFilters: "model::filter~model2++model3::categories",
    modelFilterParams: "eqField1..value++inField2..value2~fdField3..value3**value4",
}

describe("AppDisplay", () => {
    it("should render", () => {
        expect(wrapper.vm.filterRouteToStore(params)).toEqual(expectedResult)
    })
})
