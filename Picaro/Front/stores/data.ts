import {defineStore} from "pinia";

export const useDataStore = defineStore('data', {
    state: () => ({
        currentModelData: [],
    }),
})
