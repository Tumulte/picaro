import modelPanel from './modelPanel.vue'
// eslint-disable-next-line
import alert from './Utils/alert.vue'
// @ts-ignore
import {createPinia, setActivePinia} from 'pinia'
import {useSettingsStore} from '@/stores/settings'
import {useUtilsStore} from "@/stores/utils";
// @ts-ignore
import {mount} from "cypress/vue";
import {SELECTOR} from "@/utils/const";


setActivePinia(
    createPinia()
)

const utilsStore = useUtilsStore()
const settingsStore = useSettingsStore()


describe('<modelPanel />', () => {
    it('renders', () => {
        cy.document().then(document => {
            const alert = document.createElement("div");
            alert.id = SELECTOR.ALERT_CONTAINER_ID
            document.body.appendChild(alert);

        });
        // CREATE A NEW MODEL
        cy.mount(modelPanel)
        cy.get('[data-test="new-model-button"]').click()
        cy.get('[data-test="create-model-button"]').should('have.attr', 'disabled')
        cy.get('[data-test="create-model-name-input"]').type('test model')
        cy.get('[data-test="create-model-button"]').click()
        cy.get('[data-test="created-model-name"]').should('contain.text', 'test model')

        // ADD NEW FIELD
        cy.get('[data-test="add-new-field-button"]').click()
        cy.get('[data-test="select-model-field"').select('boolean')
        cy.get('[data-test="add-field-button"').should('have.attr', 'disabled')
        cy.get('[data-test="model-field-input-label"]').type('test label')
        cy.get('[data-test="model-field-input-label"]').clear()
        cy.get('[data-test="model-field-input-name"]').type('test name')
        // Check errors of adding new field
        cy.get('[data-test="model-field-input-label-error"]').should('contain.text', 'Value is required')
        cy.get('[data-test="model-field-input-name-error"]').should('contain.text', 'Only letters and numbers and hyphens are allowed')
        cy.get('[data-test="model-field-input-label"]').type('test label')
        cy.get('[data-test="model-field-input-name"]').clear()
        cy.get('[data-test="model-field-input-name"]').type('test-name')
        cy.get('[data-test="add-field-button"').click()
        cy.get('[data-test="created-model-field"]').should("contain.text", "test-name")
        // Add second field
        cy.get('[data-test="add-new-field-button"]').click()
        cy.get('[data-test="select-model-field"').select('richText')
        cy.get('[data-test="model-field-input-label"]').type('rich text label')
        cy.get('[data-test="model-field-input-name"]').type('rich-text-name')
        cy.get('[data-test="add-field-button"').click()
        cy.get(':nth-child(2) > [data-test="created-model-field"]').should("contain", "rich-text-name")

        // EDIT FIELD
        cy.get(':nth-child(2) > [data-test="created-model-field"] > [data-test="edit-model-field-button"]').click()
        cy.get(':nth-child(1) > span > [data-test="created-model-field"]').should('not.exist')
        cy.get('[data-test="model-field-input-name"]').type('-alter')
        cy.get('[data-test="save-model-field-button"]').click()
        cy.get(':nth-child(2) > [data-test="created-model-field"]').should("contain.text", "rich-text-name-alter")
    })
})