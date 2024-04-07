import {defineStore} from "pinia";
import {useRouter} from "vue-router";

export const useUserStore = defineStore('user', () => {
    const router = useRouter()
    const filterCollection = {
        all: {},
        modelFilters: {}
    }

    function updateFilterCollection({filterParams, models, type}) {
        const temporaryFilterCollection = JSON.parse(
            JSON.stringify(this.filterCollection)
        ); //filterCollection will be later updated on route change
        if (!models) {
            temporaryFilterCollection.all[type] = filterParams;
            updateRoute(temporaryFilterCollection);
            return;
        }
        models = typeof models === "string" ? [models] : models;
        models = JSON.stringify(models);
        const params =
            typeof filterParams === "string" ? [filterParams] : filterParams;
        if (!temporaryFilterCollection.modelFilters[models]) {
            temporaryFilterCollection.modelFilters[models] = {};
        }
        temporaryFilterCollection.modelFilters[models][type] = params;
        this.updateRoute(temporaryFilterCollection);
    }

    function updateRoute(filterCollection) {
        let globalFilters = "~";
        let globalParams = "0";
        const globalFiltersArray = [];
        const globalParamsArray = [];
        for (const [key, value] of Object.entries(filterCollection.all)) {
            globalFiltersArray.push(key);
            globalParamsArray.push(value.method + value.field + ".." + value.value);
        }
        if (globalParamsArray.length > 0) {
            globalFilters = globalFiltersArray.join("::");
            globalParams = globalParamsArray.join("::");
        }

        let modelFiltersArray = [];
        let modelParamsArray = [];
        if (Object.entries(filterCollection.modelFilters).length !== 0) {
            for (const [key, filter] of Object.entries(filterCollection.modelFilters)) {
                const itemFilters = [];
                const itemParams = [];
                for (const [subkey, {value, method, field}] of Object.entries(filter)) {
                    itemFilters.push(subkey);
                    itemParams.push(`${method}${field}..${value.join("++")}`);
                }
                modelFiltersArray.push(
                    `${JSON.parse(key).join("++")}::${itemFilters.join("++")}`
                );
                modelParamsArray.push(itemParams.join("::"));
            }
        } else {
            modelFiltersArray = ["~"];
            modelParamsArray = ["0"];
        }
        router.push({
            params: {
                globalFilters: encodeURI(globalFilters),
                globalParams: encodeURI(globalParams),
                modelFilters: encodeURI(modelFiltersArray.join("~")),
                modelFilterParams: encodeURI(modelParamsArray.join("~"))
            }
        });
    }

    return {filterCollection, updateFilterCollection, updateRoute}
})
