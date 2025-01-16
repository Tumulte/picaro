import {describe, expect, it, vi} from "vitest"
import PicaroConfig from "./PicaroConfig.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";
import {settingsStoreFixture} from "../../fixtures/store";

vi.mock('vue-router', () => ({
    useRouter: vi.fn(),
    useRoute: () => ({
        params: {}
    })
}));

const wrapper = mount(PicaroConfig, {
    global: {
        plugins: [createTestingPinia({
            initialState: {settings: settingsStoreFixture}
        })],
    },
// eslint-disable-next-line
}) as VueWrapper<any>


describe("PicaroConfig", () => {
    it('displays the apps buttons when nothing is selected', () => {

        const buttons = wrapper.findAll('[data-test="app-button"]')
        const selectedAppTitle = wrapper.find('[data-test="app-title-selected"]')
        const newAppInput = wrapper.find('[data-test="new-app-input"]')
        
        expect(buttons.length).toBe(2)
        expect(selectedAppTitle.exists()).toBe(false)
        expect(newAppInput.exists()).toBe(false)

    })

    it('displays the new app input when new app is selected', async () => {
        wrapper.vm.appFormState = 'newApp'

        await wrapper.vm.$nextTick()

        const buttons = wrapper.findAll('[data-test="app-button"]')
        const selectedAppTitle = wrapper.find('[data-test="app-title-selected"]')
        const newAppInput = wrapper.find('[data-test="new-app-input"]')


        expect(buttons.length).toBe(0)
        expect(selectedAppTitle.exists()).toBe(false)
        expect(newAppInput.exists()).toBe(true)
    })

    it('displays the app form when an app is selected', async () => {
        wrapper.vm.appFormState = 'selectedApp'

        await wrapper.vm.$nextTick()

        const buttons = wrapper.findAll('[data-test="app-button"]')
        const selectedAppTitle = wrapper.find('[data-test="app-title-selected"]')
        const newAppInput = wrapper.find('[data-test="new-app-input"]')

        expect(buttons.length).toBe(0)
        expect(selectedAppTitle.exists()).toBe(true)
        expect(newAppInput.exists()).toBe(false)
    })

})
