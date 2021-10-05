import Vue from "vue";
import { generateCSS } from "../Ui/cssGenerator";

const ratioCollection = {
  h1: {
    text: "header 1",
    marginTop: 1.34,
    "margin-bottom": 1.34,
    "font-size": 2,
    "line-height": 2.75
  },
  h2: {
    text: "header 2",
    "margin-top": 1.25,
    "margin-bottom": 1.25,
    "font-size": 1.5,
    "line-height": 2
  },
  h3: {
    text: "header 3",
    "margin-top": 1.17,
    "margin-bottom": 1.17,
    "font-size": 1.17,
    "line-height": 1.75
  },
  h4: {
    text: "header 4",
    "margin-top": 1.33,
    "margin-bottom": 1.33,
    "font-size": 1,
    "line-height": 1.4
  },
  h5: {
    text: "header 5",
    "margin-top": 1.4,
    "margin-bottom": 1.4,
    "font-size": 0.83,
    "line-height": 1.16
  },
  h6: {
    text: "header 6",
    "margin-top": 1.55,
    "margin-bottom": 1.55,
    "font-size": 0.67,
    "line-height": 0.9
  },
  p: {
    text: "base text"
  },
  html: {
    "line-height": 24,
    "font-size": 16
  }
};

export default {
  state: {
    currentColor: "",
    currentRatio: 1,
    currentSelector: null,
    colorCollection: {},
    cssPanelIndex: 1,
    colorSet: {},
    styleSet: {},
    loaded: false,
    ratioCollection: ratioCollection,
    newModelName: "",
    styleSetLoaded: false,
    triggerNewStyle: false,
    editCommonLayout: false,
    editLayout: false,
    isLogged: false
  },
  mutations: {
    /**
     *
     * @param {Object} state Vuex state
     * @param {String} coordinates color coordinates "[x,y]"
     */
    currentColor(state, coordinates) {
      if (state.currentSelector) {
        Vue.set(
          state.styleSet.selectorCollection[state.currentSelector.selector],
          state.currentSelector.property,
          {
            type: "color",
            data: coordinates
          }
        );
      }
    },
    currentRatio(state, coordinates) {
      if (state.currentSelector) {
        Vue.set(
          state.styleSet.selectorCollection[state.currentSelector.selector],
          state.currentSelector.property,
          {
            type: "ratio",
            data: coordinates
          }
        );
      }
    },

    currentSelector(state, data) {
      state.currentSelector = data;
    },
    ratioCollection(state, data) {
      state.ratioCollection = data;
      const lineHeight =
        Math.round((data.html["line-height"] / data.html["font-size"]) * 100) /
        100;
      state.ratioCollection.p = {
        "line-height": lineHeight,
        "font-size": 1,
        "margin-bottom": 0,
        "margin-top": 0,
        text: data.p.text
      };
    },

    colorSet(state, data) {
      state.colorSet = data;
    },

    styleSetLoaded(state, data) {
      state.styleSetLoaded = data;
    },

    styleSet(state, data) {
      state.styleSet = data;
    },

    colorCollection(state, data) {
      state.styleSet.dominant = data.dominant;
      state.colorCollection = data;
    },

    cssPanelIndex(state, data) {
      state.cssPanelIndex = data;
    },

    loaded(state, data) {
      state.loaded = data;
    },
    newModelName(state, data) {
      state.newModelName = data;
    },
    triggerNewStyle(state, data) {
      state.triggerNewStyle = data;
    },
    editCommonLayout(state, data) {
      state.editCommonLayout = data;
    },
    editLayout(state, data) {
      state.editLayout = data;
    },
    isLogged(state, data) {
      state.isLogged = data;
    }
  },
  getters: {
    styleSetLoaded(state) {
      return state.styleSetLoaded;
    },

    colorCollection: function(state) {
      return state.colorCollection;
    },
    ratioCollection: function(state) {
      return state.ratioCollection;
    },

    cssPanelIndex(state) {
      return state.cssPanelIndex;
    },

    colorSet(state) {
      return state.colorSet;
    },

    styleSet(state) {
      return state.styleSet;
    },

    loaded(state) {
      return state.loaded;
    },
    newModelName(state) {
      return state.newModelName;
    },
    triggerNewStyle(state) {
      return state.triggerNewStyle;
    },
    isLogged(state) {
      return state.isLogged;
    }
  },
  actions: {
    updateProperty({ state, dispatch }, value) {
      Vue.set(
        state.styleSet.selectorCollection[value.selector],
        value.new,
        state.styleSet.selectorCollection[value.selector][value.old]
      );
      Vue.delete(state.styleSet.selectorCollection[value.selector], value.old);
      dispatch("triggerNewStyle");
    },
    updateSelector({ state, dispatch }, value) {
      Vue.set(
        state.styleSet.selectorCollection,
        value.new,
        state.styleSet.selectorCollection[value.old]
      );
      Vue.delete(state.styleSet.selectorCollection, value.old);
      dispatch("triggerNewStyle");
    },
    addSelector({ state, dispatch }, value) {
      Vue.set(state.styleSet.selectorCollection, value, {});
      dispatch("triggerNewStyle");
    },
    addProperty({ state, dispatch }, data) {
      Vue.set(
        state.styleSet.selectorCollection[data.selector],
        data.property,
        data.value ? data.value : ""
      );
      dispatch("triggerNewStyle");
    },
    updateStyles({ state, dispatch }, data) {
      if (!data || !data.value) {
        return;
      }
      if (!state.styleSet.selectorCollection[data.selector]) {
        Vue.set(state.styleSet.selectorCollection, data.selector, {});
      }
      Vue.set(
        state.styleSet.selectorCollection[data.selector],
        data.property,
        data.value
      );
      dispatch("triggerNewStyle");
    },
    triggerNewStyle({ state }) {
      const liveStylesTag = document.getElementById("rf-live-styles");
      if (document.readyState === "complete" && liveStylesTag) {
        liveStylesTag.innerHTML = generateCSS(state.styleSet);
      }
    }
  }
};
