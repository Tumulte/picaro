import Vue from "vue";
import {warningTimeout as timeOut} from "../../rougeSettings.json";
import router from "../Router/router";

function updateRoute(filterCollection) {
    let globalFilters = "~";
    let globalParams = "0";
    let globalFiltersArray = [];
    let globalParamsArray = [];
    for (const [key, value] of Object.entries(filterCollection.all)) {
        globalFiltersArray.push(key);
        globalParamsArray.push(value.join("--"));
    }
    if (globalParamsArray.length > 0) {
        globalFilters = globalFiltersArray.join("__");
        globalParams = globalParamsArray.join("__");
    }

    let modelFiltersArray = [];
    let modelParamsArray = [];
    if (Object.entries(filterCollection.modelFilters).length !== 0) {
        for (const [key, value] of Object.entries(filterCollection.modelFilters)) {
            let itemFilters = [];
            let itemParams = [];
            for (const [subkey, subvalue] of Object.entries(value)) {
                itemFilters.push(subkey);
                itemParams.push(subvalue.join("--"));
            }
            modelFiltersArray.push(`${JSON.parse(key).join("--")}__${itemFilters.join("--")}`);
            modelParamsArray.push(itemParams.join("__"));
        }
    } else {
        modelFiltersArray = ["~"];
        modelParamsArray = ["0"];

    }
    router.push({
        name: "filterRoute",
        params: {
            globalFilters: encodeURI(globalFilters),
            globalParams: encodeURI(globalParams),
            modelFilters: encodeURI(modelFiltersArray.join("~")),
            modelFilterParams: encodeURI(modelParamsArray.join("~"))
        }
    });

}

export default {
    state: {
        list: {},
        tagCollection: {},
        alertCollection: [],
        dialog: {},
        alertCallbackCollection: [],
        alertConfirmationStatus: {},
        settings: {modelCollection: {}, navStructureString: "{}"},
        modelCollection: {},
        navStructure: {},
        filterCollection: {all: {}, modelFilters: {}}
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
            state.navStructure = JSON.parse(state.settings.navStructureString);
        },
        modelCollection(state, data) {
            state.modelCollection = data;
        },
        filterCollection(state, data) {
            state.filterCollection = data;
        }
    },
    getters: {
        // @ts-ignore
        list: function (state) {
            return state.list;
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
        navStructure(state) {
            return state.navStructure;
        },
        filterCollection(state) {
            return state.filterCollection;
        },
        filterCollectionExpanded(state) {
            const filterCollectionExpanded = {};
            for (const [key, value] of Object.entries(state.filterCollection.modelFilters)) {
                JSON.parse(key).forEach(item => {
                    filterCollectionExpanded[item] = value;
                });
            }
            return filterCollectionExpanded;
        }
    },
    actions: {
        updateFilterCollection({state}, {filterParams, models, type}) {
            const temporaryFilterCollection = JSON.parse(JSON.stringify(state.filterCollection)); //filterCollection will be leter updater on route change
            models = typeof models === "string" ? [models] : models;
            models = JSON.stringify(models);
            const params = typeof filterParams === "string" ? [filterParams] : filterParams;
            if (!temporaryFilterCollection.modelFilters[models]) {
                temporaryFilterCollection.modelFilters[models] = {};
            }

            temporaryFilterCollection.modelFilters[models][type] = params;
            updateRoute(temporaryFilterCollection);
        },
        updateFilterCommonCollection({state}, {type, params}) {
            params = typeof params === "string" ? [params] : params;
            const temporaryFilterCollection = JSON.parse(JSON.stringify(state.filterCollection)); //filterCollection will be leter updater on route change

            temporaryFilterCollection.all[type] = params;
            console.debug(temporaryFilterCollection);
            updateRoute(temporaryFilterCollection);

        },
        addItemToList({state}, {model: model, listData: listData}) {
            Vue.set(state.list, model, listData);
        },
        removeKeyFromCollection({state}, {collection: collection, key: key}) {
            Vue.delete(state[collection], key);
        },
        addKeyToCollection({state}, data) {
            Vue.set(state[data.collection], data.key, data.value);
        },
        addAlert({state}, data) {
            const duplicates = state.alertCollection.filter(item => data.text === item.text).length;
            if (duplicates) {
                return;
            }
            state.alertCollection.push(data);
            setTimeout(() => {
                state.alertCollection.shift();
            }, data.timeOut ? data.timeOut : timeOut);

        },
        removeAlert({state}, data) {
            state.alertCollection.splice(data, 1);
        },
        removeAlertCallback({state}, data) {
            state.alertCallbackCollection.splice(data, 1);
        },
        addAlertConfirmation({state}, data) {
            Vue.set(state.alertConfirmationStatus, data.key, {status: true, index: data.index});
        },
        addAlertDiscard({state}, data) {
            Vue.set(state.alertConfirmationStatus, data.key, {status: false, index: data.index});
        },
        awaitConfirmation({state, dispatch}, data) {
            const key = Math.random().toString(36).substring(2, 15);
            const removeAlert = function () {
                dispatch("removeAlertCallback", state.alertConfirmationStatus[key].index);
                Vue.delete(state.alertConfirmationStatus, key);
            };
            const duplicates = state.alertCallbackCollection.filter(item => data.text === item.text).length > 0;

            return new Promise(async function (resolve) {
                if (duplicates) {
                    return;
                }
                data.key = key;
                state.alertCallbackCollection.push(data);
                await Vue.nextTick();
                const alertButtons = document.getElementsByClassName("rf-alert-button");
                Array.from(alertButtons).forEach(function (element) {
                    element.addEventListener("click", () => {
                        if (state.alertConfirmationStatus[key] && state.alertConfirmationStatus[key].status === true) {
                            removeAlert();
                            resolve();
                        } else if (state.alertConfirmationStatus[key] && state.alertConfirmationStatus[key].status === false) {
                            removeAlert();
                        }
                    });
                });
            });
        }

    }
};