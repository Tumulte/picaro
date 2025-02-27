import {defineStore} from "pinia";
import {ModelContent} from "@types";

export interface DataStore {
    currentModelData: ModelContent[]
}

export const useDataStore = defineStore('data', {
    state: (): DataStore => ({
        currentModelData: [],
    }),
})
