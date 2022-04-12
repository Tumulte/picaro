import {defineStore} from 'pinia'
import {reactive} from "vue";
import {Settings, StyleSet} from "../../Types";

interface State {
    currentAppSettings: Settings | undefined
    allSettings: Settings[]
    allStyleSets: StyleSet[]
    currentStyleSet: StyleSet | undefined
}


export const useSettingsStore = defineStore('settings', {
    state: (): State => ({
        allStyleSets: [],
        allSettings: [],
        currentStyleSet: undefined,
        currentAppSettings: undefined
    }),
})
