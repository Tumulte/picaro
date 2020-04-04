import Vue from "vue";

export default {
    state: {
        list: {},
        tagCollection: {},
        validCounterCollection: {},
        validCounter: 0
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
        validCounter(state, data) {
            state.validCounter = data;
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
        validCounter: function (state) {
            return state.validCounter;
        }
    },
    actions: {

        updateValidCounter: function ({
                                          state
                                      }, value) {
            if (state.validCounterCollection.hasOwnProperty(value.counterName) && value.counterValue === 0) {
                Vue.delete(state.validCounterCollection, value.counterName);
            } else if (!state.validCounterCollection.hasOwnProperty(value.counterName) && value.counterValue !== 0) {
                Vue.set(state.validCounterCollection, value.counterName, value.counterValue);
            }
            state.validCounter = Object.keys(state.validCounterCollection).length;
        },
    }
};