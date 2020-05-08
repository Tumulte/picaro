import Vue from "vue";
import {warningTimeout as timeOut} from "../../rougeSettings.json";

export default {
    state: {
        list: {},
        tagCollection: {},
        modelCollection: {},
        navStructure: {},
        alertCollection: [],
        dialog: {},
        alertCallbackCollection: [],
        alertConfirmationStatus: {}
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

        navStructure(state, data) {
            state.navStructure = data;
        },
        modelCollection(state, data) {
            state.modelCollection = data;
        },

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
        modelCollection(state) {
            return state.modelCollection;
        },
        navStructure(state) {
            return state.navStructure;
        },
        alertCollection(state) {
            return state.alertCollection;
        },
        alertCallbackCollection(state) {
            return state.alertCallbackCollection;
        },
    },
    actions: {
        removeKeyFromCollection: function ({state}, data) {
            Vue.delete(state[data.collection], data.key);
        },
        addKeyToCollection: function ({state}, data) {
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
                console.debug(Array.from(alertButtons));

                Array.from(alertButtons).forEach(function (element) {
                    console.debug("yyyy");

                    element.addEventListener("click", () => {
                        console.debug("ststtt");
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