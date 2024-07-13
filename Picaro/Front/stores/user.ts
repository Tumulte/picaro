import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import {Filter, FilterCollection, ModelFilter} from "@types";
import groupBy from "object.groupby"

export const useUserStore = defineStore('user', () => {
    const router = useRouter()
    const filterCollection = {
        all: {},
        modelFilters: {}
    }

    function updateFilterCollection({filterParams, models, type}: {
        filterParams: string | string[],
        models?: string | string[],
        type: string
    }) {
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

    function getStringFromParams(filters: Filter[] | ModelFilter[], hasModel = false) {
        const groupedFilters = groupBy(filters, ({type}) => type)

        const values = Object.values(groupedFilters)

        const filtersType = Object.keys(groupedFilters).map((item, index) => {
            let models = ""
            if (hasModel) {
                const set = new Set()

                const modelsDedup = (values as ModelFilter[][])[index]
                    .reduce((acc, current) => {

                        current.modelIdCollection.forEach(id => {
                            set.add(id)
                        });

                        return set
                    }, set)

                models = `${Array.from(modelsDedup).join('++')}::`

            }
            return `${models}${item}`
        }).join('~')
        const params = values.map(params => {
            if (!params) return;


            return params.map(item => {
                return `${item.method}${item.field}..${item.value}`
            }).join('++')
        }).join('~')

        return {filtersType, params}
    }

    function updateRoute(filterCollection: FilterCollection) {

        const {filtersType: globalFilters, params: globalParams} = getStringFromParams(filterCollection.all)

        const {
            filtersType: modelFilters,
            params: modelFilterParams
        } = getStringFromParams(filterCollection.modelFilters, true)

        const params = {
            params: {
                globalFilters: encodeURI(globalFilters),
                globalParams: encodeURI(globalParams),
                modelFilters: encodeURI(modelFilters),
                modelFilterParams: encodeURI(modelFilterParams)
            }
        }
        router.push(params);
        return params
    }

    return {filterCollection, updateFilterCollection, updateRoute}
})
