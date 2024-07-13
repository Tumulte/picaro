import {beforeEach, describe, expect, it} from "vitest"
import {createPinia, setActivePinia} from "pinia";
import {useUserStore} from "./user";


const params = {
    all: [
        {method: 'eq', field: 'Field1', value: 'value', type: 'filter'},
        {method: 'gt', field: 'Field2', value: 'value2', type: 'filter'},
        {method: 'lt', field: 'Field3', value: 'value3', type: 'categories'}
    ],
    modelFilters: [
        {modelIdCollection: ["model"], method: 'eq', field: 'Field1', value: 'value', type: 'filter'},
        {
            modelIdCollection: ["model"],
            method: 'gt',
            field: 'Field2',
            value: 'value2',
            type: 'filter'
        },
        {
            modelIdCollection: ["model2", "model3"],
            method: 'lt',
            field: 'Field3',
            value: 'value3',
            type: 'categories'
        }
    ]
}

const routeParams = {
    params: {
        globalFilters: "filter~categories",
        globalParams: "eqField1..value++gtField2..value2~ltField3..value3",
        modelFilters: "model::filter~model2++model3::categories",
        modelFilterParams: "eqField1..value++gtField2..value2~ltField3..value3",
    }
}

describe("AppDisplay", () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia())
    })
    it("should render", () => {
        const userStore = useUserStore()

        expect(userStore.updateRoute(params)).toEqual(routeParams)
    })
})
