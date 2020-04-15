import Vue from "vue";


const ratioCollection = {
    h1: {
        text: "header 1",
        marginTop: 1.34,
        marginBottom: 1.34,
        fontSize: 2,
        lineHeight: 2.75
    },
    h2: {
        text: "header 2",
        marginTop: 1.25,
        marginBottom: 1.25,
        fontSize: 1.5,
        lineHeight: 2
    },
    h3: {
        text: "header 3",
        marginTop: 1.17,
        marginBottom: 1.17,
        fontSize: 1.17,
        lineHeight: 1.75
    },
    h4: {
        text: "header 4",
        marginTop: 1.33,
        marginBottom: 1.33,
        fontSize: 1,
        lineHeight: 1.4
    },
    h5: {
        text: "header 5",
        marginTop: 1.4,
        marginBottom: 1.4,
        fontSize: 0.83,
        lineHeight: 1.16
    },
    h6: {
        text: "header 6",
        marginTop: 1.55,
        marginBottom: 1.55,
        fontSize: 0.67,
        lineHeight: 0.9
    },
    p: {
        text: "base text"
    },
    html: {
        lineHeight: 24,
        fontSize: 16
    }
};

export default {
    state: {
        colorParameterCollection: {},
        currentColor: "",
        currentRatio: 1,
        currentSelector: null,
        selectorCollection: {
            body: {},
            h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6: {},
            CLSS__altfont: {}
        },
        /* eslint-disable-next-line no-undef */
        colorCollection: {},
        selectorIndex: "1",
        cssPanelIndex: 1,
        colorSet: {},
        styleSet: {},
        loaded: false,
        ratioCollection: ratioCollection,

    },
    mutations: {

        // @ts-ignore
        colorParameterCollection(state, data) {
            state.colorParameterCollection = data;
        },
        /**
         *
         * @param {Object} state Vuex state
         * @param {String} coordinates color coordinates "[x,y]"
         */
        currentColor(state, coordinates) {
            if (state.currentSelector) {
                Vue.set(
                    state.selectorCollection[state.currentSelector.selector],
                    state.currentSelector.property, {
                        type: "color",
                        data: coordinates
                    }
                );
            }
        },
        currentRatio(state, coordinates) {
            if (state.currentSelector) {
                Vue.set(
                    state.selectorCollection[state.currentSelector.selector],
                    state.currentSelector.property, {
                        type: "ratio",
                        data: coordinates
                    }
                );
            }
        },
        // @ts-ignore
        currentSelector(state, data) {
            state.currentSelector = data;
        },
        ratioCollection(state, data) {
            state.ratioCollection = data;
            const lineHeight = Math.round(data.html.lineHeight / data.html.fontSize * 100) / 100;
            state.ratioCollection.p = {
                lineHeight: lineHeight,
                fontSize: 1,
                marginBottom: 0,
                marginTop: 0,
                text: data.p.text
            };
        },
        // @ts-ignore
        selectorCollection(state, data) {
            state.selectorCollection = data;
        },
        // @ts-ignore
        colorSet(state, data) {
            state.colorSet = data;
        },
        // @ts-ignore

        // @ts-ignore
        styleSet(state, data) {
            state.styleSet = data;
        },
        // @ts-ignore
        colorCollection(state, data) {
            state.colorCollection = data;
        },
        // @ts-ignore
        selectorIndex(state, data) {
            state.selectorIndex = data;
        },
        // @ts-ignore
        cssPanelIndex(state, data) {
            state.cssPanelIndex = data;
        },
        // @ts-ignore
        loaded(state, data) {
            state.loaded = data;
        },

    },
    getters: {
        // @ts-ignore
        colorParameterCollection: function (state) {
            return state.colorParameterCollection;
        },
        // @ts-ignore
        selectorCollection: function (state) {
            return state.selectorCollection;
        },
        // @ts-ignore
        colorCollection: function (state) {
            return state.colorCollection;
        },
        ratioCollection: function (state) {
            return state.ratioCollection;
        },
        // @ts-ignore
        selectorIndex: function (state) {
            return state.selectorIndex;
        },
        // @ts-ignore
        cssPanelIndex(state) {
            return state.cssPanelIndex;
        },
        // @ts-ignore
        colorSet(state) {
            return state.colorSet;
        },

        // @ts-ignore
        styleSet(state) {
            return state.styleSet;
        },
        // @ts-ignore
        loaded(state) {
            return state.loaded;
        },


    },
    actions: {

        updateSelector: function ({
                                      state
                                  }, value) {
            Vue.set(state.selectorCollection, value.new, state.selectorCollection[value.old]);
            Vue.delete(state.selectorCollection, value.old);
        },
        addSelector: function ({
                                   state
                               }, value) {
            Vue.set(state.selectorCollection, value, {});
        },
        addProperty: function ({
                                   state
                               }, data) {
            Vue.set(state.selectorCollection[data.selector], data.property, data.value ? data.value : "");
        },
        updateStyles: function ({
                                    state
                                }, data) {
            if (!data || !data.value) {
                return;
            }
            Vue.set(state.selectorCollection[data.selector], data.property, data.value);
        }
    },
};