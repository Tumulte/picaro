import {defineStore} from 'pinia'
import {SettingsStore} from "@types";

export const useSettingsStore = defineStore('settings', {
    state: (): SettingsStore => ({
        allStyleSets: [],
        allSettings: [],
        currentStyleSet: undefined,
        currentAppSettings: undefined,
    }),
})
