import settings from "../../rougeSettings.json";
import {nanoid} from "nanoid";
import {applyFilter} from "../Ui/components/utils/filter";

function updateRoute(filterCollection) {
    let globalFilters = "~";
    let globalParams = "0";
    const globalFiltersArray = [];
    const globalParamsArray = [];
    for (const [key, value] of Object.entries(filterCollection.all)) {
        globalFiltersArray.push(key);
        globalParamsArray.push(value.method + value.field + "." + value.value);
    }
    if (globalParamsArray.length > 0) {
        globalFilters = globalFiltersArray.join("__");
        globalParams = globalParamsArray.join("__");
    }

    let modelFiltersArray = [];
    let modelParamsArray = [];
    if (Object.entries(filterCollection.modelFilters).length !== 0) {
        for (const [key, filter] of Object.entries(filterCollection.modelFilters)) {
            const itemFilters = [];
            const itemParams = [];
            for (const [subkey, {value, method, field}] of Object.entries(filter)) {
                itemFilters.push(subkey);
                itemParams.push(`${method}${field}..${value.join("--")}`);
            }
            modelFiltersArray.push(
                `${JSON.parse(key).join("--")}__${itemFilters.join("--")}`
            );
            modelParamsArray.push(itemParams.join("__"));
        }
    } else {
        modelFiltersArray = ["~"];
        modelParamsArray = ["0"];
    }
    /* router.push({
      name: "filterRoute",
      params: {
        globalFilters: encodeURI(globalFilters),
        globalParams: encodeURI(globalParams),
        modelFilters: encodeURI(modelFiltersArray.join("~")),
        modelFilterParams:f encodeURI(modelParamsArray.join("~"))
      }
    }); */
}

export default {
    state: {
        list: [],
        tagCollection: {},
        alertCollection: [],
        dialog: {},
        alertCallbackCollection: [],
        alertConfirmationStatus: {},
        settings: {modelCollection: [], navStructureString: "{}"},
        modelCollection: [],
        navStructure: {},
        filterCollection: {all: {}, modelFilters: {}},
        pendingLinkedModule: ""
    },
    mutations: {
        // @ts-ignore
        list(state, data) {
            state.list = data;
        },
        // @ts-ignore
        tagCollection(state, data) {
            state.tagCollection = data;
        },
        settings(state, data) {
            state.settings = data;
            state.modelCollection = state.settings.modelCollection;
        },
        modelCollection(state, data) {
            state.modelCollection = data;
        },
        filterCollection(state, data) {
            state.filterCollection = data;
        },
        pendingLinkedModule(state, data) {
            state.pendingLinkedModule = data;
        },
        navStructure(state, data) {
            state.navStructure = data;
        }
    },
    getters: {
        // @ts-ignore
        list: function (state) {
            return state.list;
        },
        urlPrefix(state) {
            let prefix = ""
            // eslint-disable-next-line no-undef
            if (ENVIRONMENT === "development") {
                prefix = "public/"
            }
            return `/${prefix}${state.settings.applicationName}`
        },
        // @ts-ignore
        tagCollection: function (state) {
            return state.tagCollection;
        },
        alertCollection(state) {
            return state.alertCollection;
        },
        alertCallbackCollection(state) {
            return state.alertCallbackCollection;
        },
        settings(state) {
            return state.settings;
        },
        modelCollection(state) {
            return state.modelCollection;
        },
        availableFilterCollection(state) {
            return state.settings.availableFilterCollection;
        },
        modelCollectionNames(getters) {
            return Object.keys(getters.modelCollection);
        },
        navStructure(state) {
            return state.navStructure;
        },
        filterCollection(state) {
            return state.filterCollection;
        },
        filterCollectionExpanded(state) {
            const filterCollectionExpanded = {};
            for (const [key, value] of Object.entries(
                state.filterCollection.modelFilters
            )) {
                JSON.parse(key).forEach(item => {
                    filterCollectionExpanded[item] = value;
                });
            }
            return filterCollectionExpanded;
        },
        selectedCategories(state) {
            return state.filterCollection.all.categories || [];
        },
        pendingLinkedModule(state) {
            return state.pendingLinkedModule;
        }
    },
    actions: {
        getFilteredList({state}, {currentModelFilter}) {
            return state.list.filter(item => {
                return (
                    applyFilter(item, currentModelFilter) &&
                    applyFilter(item, state.filterCollection.all)
                );
            });
        },
        updateFilterCollection({state}, {filterParams, models, type}) {
            const temporaryFilterCollection = JSON.parse(
                JSON.stringify(state.filterCollection)
            ); //filterCollection will be later updated on route change
            models = typeof models === "string" ? [models] : models;
            models = JSON.stringify(models);
            const params =
                typeof filterParams === "string" ? [filterParams] : filterParams;
            if (!temporaryFilterCollection.modelFilters[models]) {
                temporaryFilterCollection.modelFilters[models] = {};
            }
            temporaryFilterCollection.modelFilters[models][type] = params;
            updateRoute(temporaryFilterCollection);
        },
        deleteFromFilterCollection({state}, {type, models}) {
            delete state.filterCollection.modelFilters[models][type];
            if (
                Object.keys(state.filterCollection.modelFilters[models]).length === 0
            ) {
                delete state.filterCollection.modelFilters[models];
            }
            updateRoute(state.filterCollection);
        },
        updateFilterCommonCollection({state}, {type, params}) {
            params = typeof params === "string" ? [params] : params;
            const temporaryFilterCollection = JSON.parse(
                JSON.stringify(state.filterCollection)
            ); //filterCollection will be later updater on route change

            temporaryFilterCollection.all[type] = params;
            temporaryFilterCollection.modelFilters = {}; //model specific filters dont carry over layout chages
            updateRoute(temporaryFilterCollection);
        },
        updateSettings({state}, {property, value}) {
            state.settings[property] = value;
        },
        updateAvailableFilters({state}, {property, value}) {
            state.settings.availableFilterCollection[property] = value;
        },
        updateLinkedModule({state}, {coordinates}) {
            state.settings.layoutLinkCollection[state.pendingLinkedModule] = coordinates
        },
        addLayoutToCollection({state}, {key, value}) {
            state.settings.layoutCollection[key] = value;
        },
        addItemToList({state}, {model: model, listData: listData}) {
            state.list[model] = listData;
        },
        removeKeyFromCollection({state}, {collection: collection, key: key}) {
            delete state[collection][key];
        },
        addKeyToCollection({state}, data) {
            state[data.collection][data.key] = data.value;
        },
        addAlert({state}, data) {
            const duplicates = state.alertCollection.filter(
                item => data.text === item.text
            ).length;
            if (duplicates) {
                return;
            }
            state.alertCollection.push(data);
            setTimeout(() => {
                state.alertCollection.shift();
            }, data.timeOut || settings.warningTimeout || 10000);
        },
        removeAlert({state}, data) {
            state.alertCollection.splice(data, 1);
        },


        getMediaFromLibrary() {
            return new Promise(function (resolve) {
                const uploadModule = document.getElementById("rf-upload-panel");
                uploadModule.addEventListener("click", event => {
                    if (event.target.classList.contains("rf-upload-panel-thumb")) {
                        resolve(event.target.getAttribute("data-src"));
                    }
                });
            });
        },
    }
};
