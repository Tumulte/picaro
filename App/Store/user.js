import Vue from "vue";
import settings from "../../rougeSettings.json";
import router from "../Router/router";
import { nanoid } from "nanoid";

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
    for (const [key, filter] of Object.entries(filterCollection.modelFilters)) {
      let itemFilters = [];
      let itemParams = [];
      for (const [subkey, { value, method, field }] of Object.entries(filter)) {
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
    settings: { modelCollection: {}, navStructureString: "{}" },
    modelCollection: {},
    navStructure: {},
    filterCollection: { all: {}, modelFilters: {} },
    pendingLinkedPanel: ""
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
    pendingLinkedPanel(state, data) {
      state.pendingLinkedPanel = data;
    },
    navStructure(state, data) {
      state.navStructure = data;
    }
  },
  getters: {
    // @ts-ignore
    list: function(state) {
      return state.list;
    },
    // @ts-ignore
    tagCollection: function(state) {
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
    pendingLinkedPanel(state) {
      return state.pendingLinkedPanel;
    }
  },
  actions: {
    updateFilterCollection({ state }, { filterParams, models, type }) {
      const temporaryFilterCollection = JSON.parse(
        JSON.stringify(state.filterCollection)
      ); //filterCollection will be leter updater on route change
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
    deleteFromFilterCollection({ state }, { type, models }) {
      Vue.delete(state.filterCollection.modelFilters[models], type);
      if (
        Object.keys(state.filterCollection.modelFilters[models]).length === 0
      ) {
        Vue.delete(state.filterCollection.modelFilters, models);
      }
      updateRoute(state.filterCollection);
    },
    updateFilterCommonCollection({ state }, { type, params }) {
      params = typeof params === "string" ? [params] : params;
      const temporaryFilterCollection = JSON.parse(
        JSON.stringify(state.filterCollection)
      ); //filterCollection will be leter updater on route change

      temporaryFilterCollection.all[type] = params;
      temporaryFilterCollection.modelFilters = {}; //model specific filters dont carry over layout chages
      updateRoute(temporaryFilterCollection);
    },
    updateSettings({ state }, { property, value }) {
      Vue.set(state.settings, property, value);
    },
    updateAvailableFilters({ state }, { property, value }) {
      Vue.set(state.settings.availableFilterCollection, property, value);
    },
    updateLinkedPanel({ state }, { coordinates }) {
      Vue.set(
        state.settings.layoutLinkCollection,
        state.pendingLinkedPanel,
        coordinates
      );
    },
    addLayoutToCollection({ state }, { key, value }) {
      Vue.set(state.settings.layoutCollection, key, value);
    },
    addItemToList({ state }, { model: model, listData: listData }) {
      Vue.set(state.list, model, listData);
    },
    removeKeyFromCollection({ state }, { collection: collection, key: key }) {
      Vue.delete(state[collection], key);
    },
    addKeyToCollection({ state }, data) {
      Vue.set(state[data.collection], data.key, data.value);
    },
    addAlert({ state }, data) {
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
    removeAlert({ state }, data) {
      state.alertCollection.splice(data, 1);
    },
    removeAlertCallback({ state }, data) {
      state.alertCallbackCollection.splice(data, 1);
    },
    addAlertConfirmation({ state }, data) {
      Vue.set(state.alertConfirmationStatus, data.key, {
        status: true,
        index: data.index
      });
    },
    addAlertDiscard({ state }, data) {
      Vue.set(state.alertConfirmationStatus, data.key, {
        status: false,
        index: data.index
      });
    },
    awaitConfirmation({ state, dispatch }, data) {
      const key = nanoid();
      const removeAlert = function() {
        dispatch(
          "removeAlertCallback",
          state.alertConfirmationStatus[key].index
        );
        Vue.delete(state.alertConfirmationStatus, key);
      };
      const duplicates =
        state.alertCallbackCollection.filter(item => data.text === item.text)
          .length > 0;

      return new Promise((resolve, reject) => {
        if (duplicates) {
          return;
        }
        data.key = key;
        state.alertCallbackCollection.push(data);
        const alertButtons = document.getElementById("rf-alert-container");
        alertButtons.addEventListener("click", event => {
          if (
            !event.target.classList.contains("rf-alert-button") &&
            !event.target.parentNode.classList.contains("rf-alert-button")
          ) {
            return;
          }
          if (
            state.alertConfirmationStatus[key] &&
            state.alertConfirmationStatus[key].status === true
          ) {
            removeAlert();
            resolve();
          } else if (
            state.alertConfirmationStatus[key] &&
            state.alertConfirmationStatus[key].status === false
          ) {
            reject("User Cancelled");
            removeAlert();
          }
        });
      });
    }
  }
};
