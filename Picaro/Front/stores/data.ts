import {defineStore} from "pinia";
import {ModelContent} from "@types";
import {Ref} from "vue";

export interface DataStore {
    currentModelData: ModelContent[] | Ref<ModelContent[]>
}

export const useDataStore = defineStore('data', {
    state: (): DataStore => ({
        currentModelData: [],
    }),
})
