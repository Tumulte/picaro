import {describe, expect, it} from "vitest"
import DataConfig from "./DataConfig.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";
import {settingsStoreFixture} from "@fixtures/store";
import {createRouter, createWebHistory} from "vue-router";
import {adminRoutes} from "../../adminRoutes";
import {checkExists} from "../../../test/utils";

const router = createRouter({
    history: createWebHistory(),
    routes: adminRoutes
})


function getWrapper(): VueWrapper<any> {
    return mount(DataConfig, {
        global: {
            plugins: [
                createTestingPinia({
                    initialState: {settings: settingsStoreFixture}
                }),
                router
            ],
        },
    })
}


describe("DataConfig", () => {
    it('does not display anything at first', () => {
        const wrapper = getWrapper()

        const main = wrapper.find('.pic-main-empty')

        expect(wrapper.vm.modelFormState).toBe('noModel')

        expect(main.exists()).toBe(true)
        expect(main.text()).toBe('')
    })
    it('should display the new form', async () => {
        const wrapper = getWrapper()
        wrapper.vm.modelFormState = 'awaitingName'

        await wrapper.vm.$nextTick()

        expect(checkExists([
            '.pic-main-empty',
            'create-model-name-input'
        ], wrapper)).toEqual(
            [
                false,
                true
            ]
        )


    })
    it('should display the model data', async () => {
        const wrapper = getWrapper()

        await router.push({name: 'model', params: {modelId: 'modelId1'}})

        await router.isReady()

        expect(wrapper.vm.modelFormState).toBe('modelSelected')
        expect(checkExists([
            'edit-model',
            'create-model-name-input',
            '.pic-main-empty',

        ], wrapper)).toEqual(
            [
                true,
                false,
                false
            ]
        )

        expect(wrapper.vm.currentEditModel)
            .toEqual(
                settingsStoreFixture.currentAppSettings?.modelCollection.find(model => model.id = 'modelId1')
            )
    })
})
