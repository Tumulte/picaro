(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_adminToolBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var _colorGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colorGenerator */ "./App/Ui/colorGenerator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const modelPanel = () => __webpack_require__.e(/*! import() */ "App_Ui_Components_modelPanel_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./modelPanel.vue */ "./App/Ui/Components/modelPanel.vue"));

const cssPanelSelector = () => __webpack_require__.e(/*! import() */ "App_Ui_Components_cssPanelSelector_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./cssPanelSelector.vue */ "./App/Ui/Components/cssPanelSelector.vue"));

const cssPanelRatio = () => __webpack_require__.e(/*! import() */ "App_Ui_Components_cssPanelRatio_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./cssPanelRatio.vue */ "./App/Ui/Components/cssPanelRatio.vue"));

const cssPanelColor = () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_vuetify_lib_components_VSlider_VSlider_js"), __webpack_require__.e("App_Ui_Components_cssPanelColor_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cssPanelColor.vue */ "./App/Ui/Components/cssPanelColor.vue"));

const uploadPanel = () => __webpack_require__.e(/*! import() */ "App_Ui_Components_uploadPanel_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./uploadPanel.vue */ "./App/Ui/Components/uploadPanel.vue"));

const cssPanelTypography = () => __webpack_require__.e(/*! import() */ "App_Ui_Components_cssPanelTypography_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./cssPanelTypography.vue */ "./App/Ui/Components/cssPanelTypography.vue"));





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    uploadPanel,
    modelPanel,
    cssPanelSelector,
    cssPanelColor,
    cssPanelRatio,
    cssPanelTypography,
    VNavigationDrawer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__.default
  },
  props: {
    isLogged: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      displayToolbar: true,
      openedPanel: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["settings"])), {}, {
    editCommonLayout: {
      get() {
        return this.$store.state.admin.editCommonLayout;
      },

      set(value) {
        this.$store.commit("editCommonLayout", value);
      }

    },
    editLayout: {
      get() {
        return this.$store.state.admin.editLayout;
      },

      set(value) {
        this.$store.commit("editLayout", value);
      }

    },
    styleSet: {
      get() {
        return this.$store.getters.styleSet;
      },

      set(value) {
        this.$store.commit("styleSet", value);
      }

    }
  }),

  mounted() {
    this.applyStyleSet(this.styleSet);
    this.$store.commit("styleSetLoaded", true);
    this.triggerNewStyle();
    this.getAllStyleSet();

    if (this.displayToolbar) {
      document.querySelector("#rf-vue-container").classList.add("toolbar-open");
    }
  },

  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(["triggerNewStyle", "addAlert", "awaitConfirmation"])), {}, {
    openPanel(name) {
      if (name === this.openedPanel) {
        this.openedPanel = "";
      } else {
        this.openedPanel = name;
      }

      this.editCommonLayout = false;
      this.editLayout = false;
    },

    getAllStyleSet() {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("/settingapi/styleset/all").then(response => {
        this.styleSetCollection = response.data;
      }).catch(error => {
        this.addAlert({
          type: "error",
          text: "Request failed.  Returned status of ".concat(error)
        });
      });
    },

    setOpenPanel(type) {
      if (this.openPanel === type) {
        this.openPanel = "";
        return;
      }

      this.openPanel = type;
    },

    toggleBar() {
      if (this.displayToolbar) {
        this.displayToolbar = false;
        document.querySelector("#rf-vue-container").classList.remove("toolbar-open");
      } else {
        this.displayToolbar = true;
        document.querySelector("#rf-vue-container").classList.add("toolbar-open");
      }
    },

    async deleteStyleSet() {
      await this.awaitConfirmation({
        text: "Are you sure you want to delete this style set ?",
        type: "warning"
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default().delete("/settingapi/".concat(this.styleSet.id)).then(() => {
        this.addAlert({
          type: "success",
          text: "This style set  was deleted"
        });
        this.getAllStyleSet();
        this.applyStyleSet(this.styleSetCollection[0]);
        document.getElementById("_admin-form-ext-submit").click();
      }).catch(errors => {
        this.addAlert({
          type: "error",
          text: errors
        });
      });
    },

    saveNewStyleSet() {
      const id = (0,nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid)();
      const previousID = this.styleSet.id;
      this.styleSet.id = id;
      axios__WEBPACK_IMPORTED_MODULE_2___default().post("/settingapi/styleset", this.styleSet).then(() => {
        this.addAlert({
          type: "success",
          text: "".concat(this.styleSet.setName, " saved successfully")
        });
        document.getElementById("_admin-form-ext-submit").click();
      }).catch(errors => {
        this.addAlert({
          type: "error",
          text: "Request failed.  Returned status of ".concat(errors)
        });
        this.styleSet.id = previousID;
      });
      this.getAllStyleSet();
    },

    async saveStyleSet() {
      await this.awaitConfirmation({
        text: "Are you sure you want to overwrite this style set ?",
        type: "warning"
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/settingapi/styleset/" + this.styleSet.id, this.styleSet).then(() => {
        this.addAlert({
          type: "success",
          text: "Style Set saved successfully"
        });
        this.getAllStyleSet();
        this.toggleIndex("cssPanelIndex");
        document.getElementById("_admin-form-ext-submit").click();
      }).catch(errors => {
        this.addAlert({
          type: "error",
          text: "Request failed.  Returned status of ".concat(errors)
        });
      });
    },

    applyStyleSet(styleSet, callback) {
      this.styleSet = styleSet;
      const colorSet = new _colorGenerator__WEBPACK_IMPORTED_MODULE_3__.generateColorSet(styleSet.dominant);
      colorSet.generate(styleSet.colorParameterCollection, parseInt(styleSet.variationLightAmt), parseInt(styleSet.variationSatAmt));
      this.$store.commit("loaded", true);
      this.$store.commit("colorSet", colorSet);
      this.$store.commit("styleSet", styleSet);

      if (callback) {
        callback();
      }
    },

    saveDataAndStructure() {
      axios__WEBPACK_IMPORTED_MODULE_2___default().put("/settingapi/", this.settings).then(() => {
        this.$store.dispatch("addAlert", {
          type: "success",
          text: "The layout have been updated"
        });
      }).catch(errors => {
        this.$store.dispatch("addAlert", {
          type: "error",
          text: "There was a problem : ".concat(errors)
        });
      });
    }

  }),

  created() {
    this.$store.commit("isLogged", this.isLogged);
  }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#rf-logo[data-v-671342c6] {\n  height: 100%;\n}\n.toolbar-container[data-v-671342c6] .v-toolbar__content {\n  padding-left: 0;\n}\n.subpanels[data-v-671342c6] {\n  width: 50px;\n}\n.toolbar-section[data-v-671342c6] {\n  display: flex;\n  align-items: center;\n  border-top: 10px solid;\n  position: relative;\n  flex: 50%;\n}\n.toolbar-section-title[data-v-671342c6] {\n  top: -15px;\n  left: 0;\n  position: absolute;\n  color: #fff;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.subpanels.__open[data-v-671342c6] {\n  width: 300px;\n}\n#rf-toolbar.mini[data-v-671342c6] {\n    width: 50px;\n}\n#rf-toolbar[data-v-671342c6] {\n  background-color: #fff;\n  height: 48px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  box-shadow: #aaa 0 0 5px;\n  z-index: 9999;\n}\n.toolbar-save-button[data-v-671342c6] {\n  margin-left: auto !important;\n  margin-right: 10px;\n}\n.horizontal-navigation-drawer.opened[data-v-671342c6] {\n    top: 48px;\n}\n.horizontal-navigation-drawer[data-v-671342c6] {\n  top: -105px;\n  position: fixed;\n  z-index: 100000;\n  left: 0px;\n  width: 100%;\n  transition: top 0.2s ease;\n  box-shadow: #ddd 0 5px 5px;\n  background: #fff;\n}\n", "",{"version":3,"sources":["webpack://./App/Ui/Components/adminToolBar.vue","<no source>","webpack://./adminToolBar.vue"],"names":[],"mappings":";AA+QA;EACA,YAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,SAAA;AACA;AACA;EACA,UAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;AACA;AACA;EACA,YAAA;AACA;AAEA;IACA,WAAA;AACA;AC7SA;ED8SA,sBAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,wBAAA;EACA,aAAA;AECA;AFCA;EACA,4BAAA;EACA,kBAAA;AACA;AAEA;IACA,SAAA;AACA;AC/TA;EDgUA,WAAA;EACA,eAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,yBAAA;EACA,0BAAA;EACA,gBAAA;AECA","sourcesContent":["<template lang=\"pug\">\n    .toolbar-container\n        #rf-toolbar\n            img(src=\"/public/svg/rflogo.svg\" id=\"rf-logo\" @click=\"toggleBar()\")\n            .toolbar-section(v-if=\"displayToolbar\" id=\"rf-toolbar--design\")\n                .toolbar-section-title Design\n                v-btn(@click=\"openPanel('css')\" dark :outlined=\"openedPanel !== 'css'\" :depressed=\"openedPanel === 'css'\" class=\"ml-2\" x-small) CSS\n                v-btn(@click=\"openPanel('typography')\" dark :outlined=\"openedPanel !== 'typography'\" :depressed=\"openedPanel === 'typography'\" class=\"ml-2\" x-small) Typography\n                v-btn(@click=\"openPanel('colors')\" :dark=\"!editLayout\" :outlined=\"!editLayout\" :depressed=\"editLayout\" class=\"ml-2\" x-small) Colors\n                v-btn(@click=\"openPanel('ratio')\" dark :outlined=\"openedPanel !== 'ratio'\" :depressed=\"openedPanel === 'ratio'\" class=\"ml-2\" x-small) Ratio & sizes\n                .toolbar-save-button\n                    v-btn(@click=\"saveStyleSet\" data-jest=\"add-common-row\" small class=\"ml-2 toolbar-save-button\")\n                        v-icon(color=\"white\") mdi-content-save\n                    v-btn( data-jest=\"add-common-row\" small class=\"ml-2 toolbar-save-button\")\n                        v-icon(color=\"white\") mdi-cog-outline\n            .toolbar-section(v-if=\"displayToolbar\" id=\"rf-toolbar--structure\")\n                .toolbar-section-title Data & Structure\n                v-btn(@click=\"openPanel('upload')\" :dark=\"openedPanel !== 'upload'\" :outlined=\"openedPanel !== 'upload'\" :depressed=\"openedPanel !== 'upload'\" class=\"ml-2\" x-small) Uploads\n                v-btn(@click=\"editCommonLayout = !editCommonLayout;editLayout = false;openedPanel=''\" dark :outlined=\"!editCommonLayout\" :depressed=\"editCommonLayout\" class=\"ml-2\" x-small=true) Layout\n                v-btn(@click=\"openPanel('models')\" dark :outlined=\"openedPanel !== 'models'\" :depressed=\"openedPanel === 'models'\" class=\"ml-2\" x-small=true) Models\n                v-btn(@click=\"openPanel('users')\" dark :outlined=\"openedPanel !== 'css'\" :depressed=\"openedPanel !== 'css'\" class=\"ml-2\" x-small=true) Users\n                v-btn(@click=\"saveDataAndStructure\" data-jest=\"add-common-row\" small class=\"rf-common-layout--save\" class=\"ml-2 toolbar-save-button\")\n                    v-icon(color=\"white\") mdi-content-save\n        v-navigation-drawer(:value=\"openedPanel === 'css'\" fixed=true width=\"450\" right=true)\n            css-panel-selector\n        v-navigation-drawer(:value=\"openedPanel === 'ratio'\" fixed=true width=\"450\" right=true)\n            css-panel-ratio\n        v-navigation-drawer(:value=\"openedPanel === 'colors'\" fixed=true width=\"auto\" right=true)\n            css-panel-color\n        v-navigation-drawer(:value=\"openedPanel === 'upload'\" right=true fixed=true width=\"300\")\n            upload-panel\n\n        v-navigation-drawer(class=\"rf-vertical-panel --structure\" :value=\"openedPanel === 'models'\" right=true fixed=true width=\"400\" hide-overlay)\n            model-panel()\n            v-btn(@click=\"saveDataAndStructure\" small class=\"rf-settings--save-button_structure float-right mr-6\")\n                v-icon(color=\"white\") mdi-content-save\n        .horizontal-navigation-drawer(:class=\"{opened :openedPanel === 'typography'}\")\n            css-panel-typography\n        .horizontal-navigation-drawer( v-if=\"false\" :class=\"{opened :openedPanel === 'designSettings'}\")\n            v-select(outlined :items=\"styleSetCollection\" v-model=\"selectedStyleSet\" item-value=\"id\" item-text=\"setName\" label=\"Style Set\" @change=\"updateStyleSet()\" return-object=true)\n            v-btn(text=true class=\"_container\"  v-if=\"styleSet.id !== 'default'\" @click.prevent=\"saveStyleSet()\") Save\n            v-text-field(type=\"text\" class=\"css-panel__input\" label=\"Config name\" name=\"setName\" v-model=\"styleSet.setName\")\n            v-btn(text=true @click.prevent=\"saveNewStyleSet()\") Save a new Style Set\n            v-btn(text=true class=\"_container\"  @click.prevent=\"deleteStyleSet()\"  v-if=\"styleSet.id !== 'default'\" type=\"button\") Delete Style Set\n\n</template>\n<script>\nimport axios from \"axios\";\n\nconst modelPanel = () => import(\"./modelPanel.vue\");\nconst cssPanelSelector = () => import(\"./cssPanelSelector.vue\");\nconst cssPanelRatio = () => import(\"./cssPanelRatio.vue\");\nconst cssPanelColor = () => import(\"./cssPanelColor.vue\");\nconst uploadPanel = () => import(\"./uploadPanel.vue\");\nconst cssPanelTypography = () => import(\"./cssPanelTypography.vue\");\nimport { nanoid } from \"nanoid\";\nimport { generateColorSet } from \"../colorGenerator\";\nimport { mapActions, mapGetters } from \"vuex\";\nimport { VNavigationDrawer } from \"vuetify/lib\";\n\nexport default {\n  components: {\n    uploadPanel,\n    modelPanel,\n    cssPanelSelector,\n    cssPanelColor,\n    cssPanelRatio,\n    cssPanelTypography,\n    VNavigationDrawer\n  },\n  props: {\n    isLogged: { type: Boolean, default: false }\n  },\n  data: function() {\n    return {\n      displayToolbar: true,\n      openedPanel: \"\"\n    };\n  },\n  computed: {\n    ...mapGetters([\"settings\"]),\n    editCommonLayout: {\n      get() {\n        return this.$store.state.admin.editCommonLayout;\n      },\n      set(value) {\n        this.$store.commit(\"editCommonLayout\", value);\n      }\n    },\n    editLayout: {\n      get() {\n        return this.$store.state.admin.editLayout;\n      },\n      set(value) {\n        this.$store.commit(\"editLayout\", value);\n      }\n    },\n    styleSet: {\n      get() {\n        return this.$store.getters.styleSet;\n      },\n      set(value) {\n        this.$store.commit(\"styleSet\", value);\n      }\n    }\n  },\n  mounted() {\n    this.applyStyleSet(this.styleSet);\n    this.$store.commit(\"styleSetLoaded\", true);\n    this.triggerNewStyle();\n    this.getAllStyleSet();\n\n    if (this.displayToolbar) {\n      document.querySelector(\"#rf-vue-container\").classList.add(\"toolbar-open\");\n    }\n  },\n  methods: {\n    ...mapActions([\"triggerNewStyle\", \"addAlert\", \"awaitConfirmation\"]),\n    openPanel(name) {\n      if (name === this.openedPanel) {\n        this.openedPanel = \"\";\n      } else {\n        this.openedPanel = name;\n      }\n      this.editCommonLayout = false;\n      this.editLayout = false;\n    },\n    getAllStyleSet() {\n      axios\n        .get(\"/settingapi/styleset/all\")\n        .then(response => {\n          this.styleSetCollection = response.data;\n        })\n        .catch(error => {\n          this.addAlert({\n            type: \"error\",\n            text: `Request failed.  Returned status of ${error}`\n          });\n        });\n    },\n    setOpenPanel(type) {\n      if (this.openPanel === type) {\n        this.openPanel = \"\";\n        return;\n      }\n      this.openPanel = type;\n    },\n    toggleBar() {\n      if (this.displayToolbar) {\n        this.displayToolbar = false;\n        document\n          .querySelector(\"#rf-vue-container\")\n          .classList.remove(\"toolbar-open\");\n      } else {\n        this.displayToolbar = true;\n        document\n          .querySelector(\"#rf-vue-container\")\n          .classList.add(\"toolbar-open\");\n      }\n    },\n    async deleteStyleSet() {\n      await this.awaitConfirmation({\n        text: \"Are you sure you want to delete this style set ?\",\n        type: \"warning\"\n      });\n      axios\n        .delete(`/settingapi/${this.styleSet.id}`)\n        .then(() => {\n          this.addAlert({\n            type: \"success\",\n            text: \"This style set  was deleted\"\n          });\n\n          this.getAllStyleSet();\n          this.applyStyleSet(this.styleSetCollection[0]);\n          document.getElementById(\"_admin-form-ext-submit\").click();\n        })\n        .catch(errors => {\n          this.addAlert({\n            type: \"error\",\n            text: errors\n          });\n        });\n    },\n    saveNewStyleSet() {\n      const id = nanoid();\n      const previousID = this.styleSet.id;\n      this.styleSet.id = id;\n      axios\n        .post(\"/settingapi/styleset\", this.styleSet)\n        .then(() => {\n          this.addAlert({\n            type: \"success\",\n            text: `${this.styleSet.setName} saved successfully`\n          });\n          document.getElementById(\"_admin-form-ext-submit\").click();\n        })\n        .catch(errors => {\n          this.addAlert({\n            type: \"error\",\n            text: `Request failed.  Returned status of ${errors}`\n          });\n          this.styleSet.id = previousID;\n        });\n      this.getAllStyleSet();\n    },\n    async saveStyleSet() {\n      await this.awaitConfirmation({\n        text: \"Are you sure you want to overwrite this style set ?\",\n        type: \"warning\"\n      });\n      axios\n        .put(\"/settingapi/styleset/\" + this.styleSet.id, this.styleSet)\n        .then(() => {\n          this.addAlert({\n            type: \"success\",\n            text: \"Style Set saved successfully\"\n          });\n          this.getAllStyleSet();\n          this.toggleIndex(\"cssPanelIndex\");\n          document.getElementById(\"_admin-form-ext-submit\").click();\n        })\n        .catch(errors => {\n          this.addAlert({\n            type: \"error\",\n            text: `Request failed.  Returned status of ${errors}`\n          });\n        });\n    },\n    applyStyleSet(styleSet, callback) {\n      this.styleSet = styleSet;\n\n      const colorSet = new generateColorSet(styleSet.dominant);\n\n      colorSet.generate(\n        styleSet.colorParameterCollection,\n        parseInt(styleSet.variationLightAmt),\n        parseInt(styleSet.variationSatAmt)\n      );\n      this.$store.commit(\"loaded\", true);\n      this.$store.commit(\"colorSet\", colorSet);\n\n      this.$store.commit(\"styleSet\", styleSet);\n      if (callback) {\n        callback();\n      }\n    },\n\n    saveDataAndStructure() {\n      axios\n        .put(\"/settingapi/\", this.settings)\n        .then(() => {\n          this.$store.dispatch(\"addAlert\", {\n            type: \"success\",\n            text: `The layout have been updated`\n          });\n        })\n        .catch(errors => {\n          this.$store.dispatch(\"addAlert\", {\n            type: \"error\",\n            text: `There was a problem : ${errors}`\n          });\n        });\n    }\n  },\n  created() {\n    this.$store.commit(\"isLogged\", this.isLogged);\n  }\n};\n</script>\n<style scoped>\n#rf-logo {\n  height: 100%;\n}\n.toolbar-container /deep/ .v-toolbar__content {\n  padding-left: 0;\n}\n.subpanels {\n  width: 50px;\n}\n.toolbar-section {\n  display: flex;\n  align-items: center;\n  border-top: 10px solid;\n  position: relative;\n  flex: 50%;\n}\n.toolbar-section-title {\n  top: -15px;\n  left: 0;\n  position: absolute;\n  color: #fff;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.subpanels.__open {\n  width: 300px;\n}\n#rf-toolbar {\n  &.mini {\n    width: 50px;\n  }\n  background-color: #fff;\n  height: 48px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  box-shadow: #aaa 0 0 5px;\n  z-index: 9999;\n}\n.toolbar-save-button {\n  margin-left: auto !important;\n  margin-right: 10px;\n}\n.horizontal-navigation-drawer {\n  &.opened {\n    top: 48px;\n  }\n  top: -105px;\n  position: fixed;\n  z-index: 100000;\n  left: 0px;\n  width: 100%;\n  transition: top 0.2s ease;\n  box-shadow: #ddd 0 5px 5px;\n  background: #fff;\n}\n</style>\n",null,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rf-logo {\n  height: 100%;\n}\n.toolbar-container /deep/ .v-toolbar__content {\n  padding-left: 0;\n}\n.subpanels {\n  width: 50px;\n}\n.toolbar-section {\n  display: flex;\n  align-items: center;\n  border-top: 10px solid;\n  position: relative;\n  flex: 50%;\n}\n.toolbar-section-title {\n  top: -15px;\n  left: 0;\n  position: absolute;\n  color: #fff;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.subpanels.__open {\n  width: 300px;\n}\n#rf-toolbar.mini {\n    width: 50px;\n  }\n#rf-toolbar {\n  background-color: #fff;\n  height: 48px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  box-shadow: #aaa 0 0 5px;\n  z-index: 9999;\n}\n.toolbar-save-button {\n  margin-left: auto !important;\n  margin-right: 10px;\n}\n.horizontal-navigation-drawer.opened {\n    top: 48px;\n  }\n.horizontal-navigation-drawer {\n  top: -105px;\n  position: fixed;\n  z-index: 100000;\n  left: 0px;\n  width: 100%;\n  transition: top 0.2s ease;\n  box-shadow: #ddd 0 5px 5px;\n  background: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./App/Ui/Components/adminToolBar.vue":
/*!********************************************!*\
  !*** ./App/Ui/Components/adminToolBar.vue ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug& */ "./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug&");
/* harmony import */ var _adminToolBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminToolBar.vue?vue&type=script&lang=js& */ "./App/Ui/Components/adminToolBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& */ "./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _adminToolBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "671342c6",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('671342c6')) {
      api.createRecord('671342c6', component.options)
    } else {
      api.reload('671342c6', component.options)
    }
    module.hot.accept(/*! ./adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug& */ "./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug& */ "./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug&");
(function () {
      api.rerender('671342c6', {
        render: _adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/adminToolBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/adminToolBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./App/Ui/Components/adminToolBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminToolBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_template_id_671342c6_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminToolBar_vue_vue_type_style_index_0_id_671342c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=style&index=0&id=671342c6&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/adminToolBar.vue?vue&type=template&id=671342c6&scoped=true&lang=pug& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "toolbar-container" },
    [
      _c("div", { attrs: { id: "rf-toolbar" } }, [
        _c("img", {
          attrs: { src: "/public/svg/rflogo.svg", id: "rf-logo" },
          on: {
            click: function($event) {
              return _vm.toggleBar()
            }
          }
        }),
        _vm.displayToolbar
          ? _c(
              "div",
              {
                staticClass: "toolbar-section",
                attrs: { id: "rf-toolbar--design" }
              },
              [
                _c("div", { staticClass: "toolbar-section-title" }, [
                  _vm._v("Design")
                ]),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: "",
                      outlined: _vm.openedPanel !== "css",
                      depressed: _vm.openedPanel === "css",
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("css")
                      }
                    }
                  },
                  [_vm._v("CSS")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: "",
                      outlined: _vm.openedPanel !== "typography",
                      depressed: _vm.openedPanel === "typography",
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("typography")
                      }
                    }
                  },
                  [_vm._v("Typography")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: !_vm.editLayout,
                      outlined: !_vm.editLayout,
                      depressed: _vm.editLayout,
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("colors")
                      }
                    }
                  },
                  [_vm._v("Colors")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: "",
                      outlined: _vm.openedPanel !== "ratio",
                      depressed: _vm.openedPanel === "ratio",
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("ratio")
                      }
                    }
                  },
                  [_vm._v("Ratio & sizes")]
                ),
                _c(
                  "div",
                  { staticClass: "toolbar-save-button" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "ml-2 toolbar-save-button",
                        attrs: { "data-jest": "add-common-row", small: "" },
                        on: { click: _vm.saveStyleSet }
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-content-save")
                        ])
                      ],
                      1
                    ),
                    _c(
                      "v-btn",
                      {
                        staticClass: "ml-2 toolbar-save-button",
                        attrs: { "data-jest": "add-common-row", small: "" }
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-cog-outline")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm.displayToolbar
          ? _c(
              "div",
              {
                staticClass: "toolbar-section",
                attrs: { id: "rf-toolbar--structure" }
              },
              [
                _c("div", { staticClass: "toolbar-section-title" }, [
                  _vm._v("Data & Structure")
                ]),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: _vm.openedPanel !== "upload",
                      outlined: _vm.openedPanel !== "upload",
                      depressed: _vm.openedPanel !== "upload",
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("upload")
                      }
                    }
                  },
                  [_vm._v("Uploads")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: "",
                      outlined: !_vm.editCommonLayout,
                      depressed: _vm.editCommonLayout,
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        _vm.editCommonLayout = !_vm.editCommonLayout
                        _vm.editLayout = false
                        _vm.openedPanel = ""
                      }
                    }
                  },
                  [_vm._v("Layout")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: "",
                      outlined: _vm.openedPanel !== "models",
                      depressed: _vm.openedPanel === "models",
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("models")
                      }
                    }
                  },
                  [_vm._v("Models")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
                    attrs: {
                      dark: "",
                      outlined: _vm.openedPanel !== "css",
                      depressed: _vm.openedPanel !== "css",
                      "x-small": ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openPanel("users")
                      }
                    }
                  },
                  [_vm._v("Users")]
                ),
                _c(
                  "v-btn",
                  {
                    staticClass:
                      "rf-common-layout--save ml-2 toolbar-save-button",
                    attrs: { "data-jest": "add-common-row", small: "" },
                    on: { click: _vm.saveDataAndStructure }
                  },
                  [
                    _c("v-icon", { attrs: { color: "white" } }, [
                      _vm._v("mdi-content-save")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ]),
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            value: _vm.openedPanel === "css",
            fixed: "",
            width: "450",
            right: ""
          }
        },
        [_c("css-panel-selector")],
        1
      ),
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            value: _vm.openedPanel === "ratio",
            fixed: "",
            width: "450",
            right: ""
          }
        },
        [_c("css-panel-ratio")],
        1
      ),
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            value: _vm.openedPanel === "colors",
            fixed: "",
            width: "auto",
            right: ""
          }
        },
        [_c("css-panel-color")],
        1
      ),
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            value: _vm.openedPanel === "upload",
            right: "",
            fixed: "",
            width: "300"
          }
        },
        [_c("upload-panel")],
        1
      ),
      _c(
        "v-navigation-drawer",
        {
          staticClass: "rf-vertical-panel --structure",
          attrs: {
            value: _vm.openedPanel === "models",
            right: "",
            fixed: "",
            width: "400",
            "hide-overlay": ""
          }
        },
        [
          _c("model-panel"),
          _c(
            "v-btn",
            {
              staticClass:
                "rf-settings--save-button_structure float-right mr-6",
              attrs: { small: "" },
              on: { click: _vm.saveDataAndStructure }
            },
            [
              _c("v-icon", { attrs: { color: "white" } }, [
                _vm._v("mdi-content-save")
              ])
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "horizontal-navigation-drawer",
          class: { opened: _vm.openedPanel === "typography" }
        },
        [_c("css-panel-typography")],
        1
      ),
       false
        ? 0
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWU/Y2Y0MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvYWRtaW5Ub29sQmFyLnZ1ZT81ZjRiIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9hZG1pblRvb2xCYXIudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9hZG1pblRvb2xCYXIudnVlPzcwMjQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWU/ODNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLG9CQUhBO0FBSUEsaUJBSkE7QUFLQSxpQkFMQTtBQU1BLHNCQU5BO0FBT0E7QUFQQSxHQURBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBLEdBVkE7QUFhQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBSUEsR0FsQkE7QUFtQkEsNENBQ0EsOERBREE7QUFFQTtB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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQyxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLFNBQVMsaUJBQWlCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQUs7QUFDWCxVQUFVLENBdUZDO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfYWRtaW5Ub29sQmFyX3Z1ZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIC50b29sYmFyLWNvbnRhaW5lclxuICAgICAgICAjcmYtdG9vbGJhclxuICAgICAgICAgICAgaW1nKHNyYz1cIi9wdWJsaWMvc3ZnL3JmbG9nby5zdmdcIiBpZD1cInJmLWxvZ29cIiBAY2xpY2s9XCJ0b2dnbGVCYXIoKVwiKVxuICAgICAgICAgICAgLnRvb2xiYXItc2VjdGlvbih2LWlmPVwiZGlzcGxheVRvb2xiYXJcIiBpZD1cInJmLXRvb2xiYXItLWRlc2lnblwiKVxuICAgICAgICAgICAgICAgIC50b29sYmFyLXNlY3Rpb24tdGl0bGUgRGVzaWduXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwib3BlblBhbmVsKCdjc3MnKVwiIGRhcmsgOm91dGxpbmVkPVwib3BlbmVkUGFuZWwgIT09ICdjc3MnXCIgOmRlcHJlc3NlZD1cIm9wZW5lZFBhbmVsID09PSAnY3NzJ1wiIGNsYXNzPVwibWwtMlwiIHgtc21hbGwpIENTU1xuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cIm9wZW5QYW5lbCgndHlwb2dyYXBoeScpXCIgZGFyayA6b3V0bGluZWQ9XCJvcGVuZWRQYW5lbCAhPT0gJ3R5cG9ncmFwaHknXCIgOmRlcHJlc3NlZD1cIm9wZW5lZFBhbmVsID09PSAndHlwb2dyYXBoeSdcIiBjbGFzcz1cIm1sLTJcIiB4LXNtYWxsKSBUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwib3BlblBhbmVsKCdjb2xvcnMnKVwiIDpkYXJrPVwiIWVkaXRMYXlvdXRcIiA6b3V0bGluZWQ9XCIhZWRpdExheW91dFwiIDpkZXByZXNzZWQ9XCJlZGl0TGF5b3V0XCIgY2xhc3M9XCJtbC0yXCIgeC1zbWFsbCkgQ29sb3JzXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwib3BlblBhbmVsKCdyYXRpbycpXCIgZGFyayA6b3V0bGluZWQ9XCJvcGVuZWRQYW5lbCAhPT0gJ3JhdGlvJ1wiIDpkZXByZXNzZWQ9XCJvcGVuZWRQYW5lbCA9PT0gJ3JhdGlvJ1wiIGNsYXNzPVwibWwtMlwiIHgtc21hbGwpIFJhdGlvICYgc2l6ZXNcbiAgICAgICAgICAgICAgICAudG9vbGJhci1zYXZlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJzYXZlU3R5bGVTZXRcIiBkYXRhLWplc3Q9XCJhZGQtY29tbW9uLXJvd1wiIHNtYWxsIGNsYXNzPVwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XCJ3aGl0ZVwiKSBtZGktY29udGVudC1zYXZlXG4gICAgICAgICAgICAgICAgICAgIHYtYnRuKCBkYXRhLWplc3Q9XCJhZGQtY29tbW9uLXJvd1wiIHNtYWxsIGNsYXNzPVwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XCJ3aGl0ZVwiKSBtZGktY29nLW91dGxpbmVcbiAgICAgICAgICAgIC50b29sYmFyLXNlY3Rpb24odi1pZj1cImRpc3BsYXlUb29sYmFyXCIgaWQ9XCJyZi10b29sYmFyLS1zdHJ1Y3R1cmVcIilcbiAgICAgICAgICAgICAgICAudG9vbGJhci1zZWN0aW9uLXRpdGxlIERhdGEgJiBTdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJvcGVuUGFuZWwoJ3VwbG9hZCcpXCIgOmRhcms9XCJvcGVuZWRQYW5lbCAhPT0gJ3VwbG9hZCdcIiA6b3V0bGluZWQ9XCJvcGVuZWRQYW5lbCAhPT0gJ3VwbG9hZCdcIiA6ZGVwcmVzc2VkPVwib3BlbmVkUGFuZWwgIT09ICd1cGxvYWQnXCIgY2xhc3M9XCJtbC0yXCIgeC1zbWFsbCkgVXBsb2Fkc1xuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cImVkaXRDb21tb25MYXlvdXQgPSAhZWRpdENvbW1vbkxheW91dDtlZGl0TGF5b3V0ID0gZmFsc2U7b3BlbmVkUGFuZWw9JydcIiBkYXJrIDpvdXRsaW5lZD1cIiFlZGl0Q29tbW9uTGF5b3V0XCIgOmRlcHJlc3NlZD1cImVkaXRDb21tb25MYXlvdXRcIiBjbGFzcz1cIm1sLTJcIiB4LXNtYWxsPXRydWUpIExheW91dFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cIm9wZW5QYW5lbCgnbW9kZWxzJylcIiBkYXJrIDpvdXRsaW5lZD1cIm9wZW5lZFBhbmVsICE9PSAnbW9kZWxzJ1wiIDpkZXByZXNzZWQ9XCJvcGVuZWRQYW5lbCA9PT0gJ21vZGVscydcIiBjbGFzcz1cIm1sLTJcIiB4LXNtYWxsPXRydWUpIE1vZGVsc1xuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cIm9wZW5QYW5lbCgndXNlcnMnKVwiIGRhcmsgOm91dGxpbmVkPVwib3BlbmVkUGFuZWwgIT09ICdjc3MnXCIgOmRlcHJlc3NlZD1cIm9wZW5lZFBhbmVsICE9PSAnY3NzJ1wiIGNsYXNzPVwibWwtMlwiIHgtc21hbGw9dHJ1ZSkgVXNlcnNcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJzYXZlRGF0YUFuZFN0cnVjdHVyZVwiIGRhdGEtamVzdD1cImFkZC1jb21tb24tcm93XCIgc21hbGwgY2xhc3M9XCJyZi1jb21tb24tbGF5b3V0LS1zYXZlXCIgY2xhc3M9XCJtbC0yIHRvb2xiYXItc2F2ZS1idXR0b25cIilcbiAgICAgICAgICAgICAgICAgICAgdi1pY29uKGNvbG9yPVwid2hpdGVcIikgbWRpLWNvbnRlbnQtc2F2ZVxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cIm9wZW5lZFBhbmVsID09PSAnY3NzJ1wiIGZpeGVkPXRydWUgd2lkdGg9XCI0NTBcIiByaWdodD10cnVlKVxuICAgICAgICAgICAgY3NzLXBhbmVsLXNlbGVjdG9yXG4gICAgICAgIHYtbmF2aWdhdGlvbi1kcmF3ZXIoOnZhbHVlPVwib3BlbmVkUGFuZWwgPT09ICdyYXRpbydcIiBmaXhlZD10cnVlIHdpZHRoPVwiNDUwXCIgcmlnaHQ9dHJ1ZSlcbiAgICAgICAgICAgIGNzcy1wYW5lbC1yYXRpb1xuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cIm9wZW5lZFBhbmVsID09PSAnY29sb3JzJ1wiIGZpeGVkPXRydWUgd2lkdGg9XCJhdXRvXCIgcmlnaHQ9dHJ1ZSlcbiAgICAgICAgICAgIGNzcy1wYW5lbC1jb2xvclxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cIm9wZW5lZFBhbmVsID09PSAndXBsb2FkJ1wiIHJpZ2h0PXRydWUgZml4ZWQ9dHJ1ZSB3aWR0aD1cIjMwMFwiKVxuICAgICAgICAgICAgdXBsb2FkLXBhbmVsXG5cbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcihjbGFzcz1cInJmLXZlcnRpY2FsLXBhbmVsIC0tc3RydWN0dXJlXCIgOnZhbHVlPVwib3BlbmVkUGFuZWwgPT09ICdtb2RlbHMnXCIgcmlnaHQ9dHJ1ZSBmaXhlZD10cnVlIHdpZHRoPVwiNDAwXCIgaGlkZS1vdmVybGF5KVxuICAgICAgICAgICAgbW9kZWwtcGFuZWwoKVxuICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwic2F2ZURhdGFBbmRTdHJ1Y3R1cmVcIiBzbWFsbCBjbGFzcz1cInJmLXNldHRpbmdzLS1zYXZlLWJ1dHRvbl9zdHJ1Y3R1cmUgZmxvYXQtcmlnaHQgbXItNlwiKVxuICAgICAgICAgICAgICAgIHYtaWNvbihjb2xvcj1cIndoaXRlXCIpIG1kaS1jb250ZW50LXNhdmVcbiAgICAgICAgLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXIoOmNsYXNzPVwie29wZW5lZCA6b3BlbmVkUGFuZWwgPT09ICd0eXBvZ3JhcGh5J31cIilcbiAgICAgICAgICAgIGNzcy1wYW5lbC10eXBvZ3JhcGh5XG4gICAgICAgIC5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyKCB2LWlmPVwiZmFsc2VcIiA6Y2xhc3M9XCJ7b3BlbmVkIDpvcGVuZWRQYW5lbCA9PT0gJ2Rlc2lnblNldHRpbmdzJ31cIilcbiAgICAgICAgICAgIHYtc2VsZWN0KG91dGxpbmVkIDppdGVtcz1cInN0eWxlU2V0Q29sbGVjdGlvblwiIHYtbW9kZWw9XCJzZWxlY3RlZFN0eWxlU2V0XCIgaXRlbS12YWx1ZT1cImlkXCIgaXRlbS10ZXh0PVwic2V0TmFtZVwiIGxhYmVsPVwiU3R5bGUgU2V0XCIgQGNoYW5nZT1cInVwZGF0ZVN0eWxlU2V0KClcIiByZXR1cm4tb2JqZWN0PXRydWUpXG4gICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgY2xhc3M9XCJfY29udGFpbmVyXCIgIHYtaWY9XCJzdHlsZVNldC5pZCAhPT0gJ2RlZmF1bHQnXCIgQGNsaWNrLnByZXZlbnQ9XCJzYXZlU3R5bGVTZXQoKVwiKSBTYXZlXG4gICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cInRleHRcIiBjbGFzcz1cImNzcy1wYW5lbF9faW5wdXRcIiBsYWJlbD1cIkNvbmZpZyBuYW1lXCIgbmFtZT1cInNldE5hbWVcIiB2LW1vZGVsPVwic3R5bGVTZXQuc2V0TmFtZVwiKVxuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIEBjbGljay5wcmV2ZW50PVwic2F2ZU5ld1N0eWxlU2V0KClcIikgU2F2ZSBhIG5ldyBTdHlsZSBTZXRcbiAgICAgICAgICAgIHYtYnRuKHRleHQ9dHJ1ZSBjbGFzcz1cIl9jb250YWluZXJcIiAgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVTdHlsZVNldCgpXCIgIHYtaWY9XCJzdHlsZVNldC5pZCAhPT0gJ2RlZmF1bHQnXCIgdHlwZT1cImJ1dHRvblwiKSBEZWxldGUgU3R5bGUgU2V0XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBtb2RlbFBhbmVsID0gKCkgPT4gaW1wb3J0KFwiLi9tb2RlbFBhbmVsLnZ1ZVwiKTtcbmNvbnN0IGNzc1BhbmVsU2VsZWN0b3IgPSAoKSA9PiBpbXBvcnQoXCIuL2Nzc1BhbmVsU2VsZWN0b3IudnVlXCIpO1xuY29uc3QgY3NzUGFuZWxSYXRpbyA9ICgpID0+IGltcG9ydChcIi4vY3NzUGFuZWxSYXRpby52dWVcIik7XG5jb25zdCBjc3NQYW5lbENvbG9yID0gKCkgPT4gaW1wb3J0KFwiLi9jc3NQYW5lbENvbG9yLnZ1ZVwiKTtcbmNvbnN0IHVwbG9hZFBhbmVsID0gKCkgPT4gaW1wb3J0KFwiLi91cGxvYWRQYW5lbC52dWVcIik7XG5jb25zdCBjc3NQYW5lbFR5cG9ncmFwaHkgPSAoKSA9PiBpbXBvcnQoXCIuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWVcIik7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbG9yU2V0IH0gZnJvbSBcIi4uL2NvbG9yR2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IFZOYXZpZ2F0aW9uRHJhd2VyIH0gZnJvbSBcInZ1ZXRpZnkvbGliXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIHVwbG9hZFBhbmVsLFxuICAgIG1vZGVsUGFuZWwsXG4gICAgY3NzUGFuZWxTZWxlY3RvcixcbiAgICBjc3NQYW5lbENvbG9yLFxuICAgIGNzc1BhbmVsUmF0aW8sXG4gICAgY3NzUGFuZWxUeXBvZ3JhcGh5LFxuICAgIFZOYXZpZ2F0aW9uRHJhd2VyXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgaXNMb2dnZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheVRvb2xiYXI6IHRydWUsXG4gICAgICBvcGVuZWRQYW5lbDogXCJcIlxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXCJzZXR0aW5nc1wiXSksXG4gICAgZWRpdENvbW1vbkxheW91dDoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYWRtaW4uZWRpdENvbW1vbkxheW91dDtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiZWRpdENvbW1vbkxheW91dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlZGl0TGF5b3V0OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hZG1pbi5lZGl0TGF5b3V0O1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJlZGl0TGF5b3V0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0eWxlU2V0OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0eWxlU2V0O1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJzdHlsZVNldFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZVNldCh0aGlzLnN0eWxlU2V0KTtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJzdHlsZVNldExvYWRlZFwiLCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJOZXdTdHlsZSgpO1xuICAgIHRoaXMuZ2V0QWxsU3R5bGVTZXQoKTtcblxuICAgIGlmICh0aGlzLmRpc3BsYXlUb29sYmFyKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JmLXZ1ZS1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcInRvb2xiYXItb3BlblwiKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFtcInRyaWdnZXJOZXdTdHlsZVwiLCBcImFkZEFsZXJ0XCIsIFwiYXdhaXRDb25maXJtYXRpb25cIl0pLFxuICAgIG9wZW5QYW5lbChuYW1lKSB7XG4gICAgICBpZiAobmFtZSA9PT0gdGhpcy5vcGVuZWRQYW5lbCkge1xuICAgICAgICB0aGlzLm9wZW5lZFBhbmVsID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbmVkUGFuZWwgPSBuYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5lZGl0Q29tbW9uTGF5b3V0ID0gZmFsc2U7XG4gICAgICB0aGlzLmVkaXRMYXlvdXQgPSBmYWxzZTtcbiAgICB9LFxuICAgIGdldEFsbFN0eWxlU2V0KCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9zZXR0aW5nYXBpL3N0eWxlc2V0L2FsbFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5zdHlsZVNldENvbGxlY3Rpb24gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgdGV4dDogYFJlcXVlc3QgZmFpbGVkLiAgUmV0dXJuZWQgc3RhdHVzIG9mICR7ZXJyb3J9YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNldE9wZW5QYW5lbCh0eXBlKSB7XG4gICAgICBpZiAodGhpcy5vcGVuUGFuZWwgPT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwgPSBcIlwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5QYW5lbCA9IHR5cGU7XG4gICAgfSxcbiAgICB0b2dnbGVCYXIoKSB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5VG9vbGJhcikge1xuICAgICAgICB0aGlzLmRpc3BsYXlUb29sYmFyID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcmYtdnVlLWNvbnRhaW5lclwiKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwidG9vbGJhci1vcGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5VG9vbGJhciA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcmYtdnVlLWNvbnRhaW5lclwiKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidG9vbGJhci1vcGVuXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZGVsZXRlU3R5bGVTZXQoKSB7XG4gICAgICBhd2FpdCB0aGlzLmF3YWl0Q29uZmlybWF0aW9uKHtcbiAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc3R5bGUgc2V0ID9cIixcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCJcbiAgICAgIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLmRlbGV0ZShgL3NldHRpbmdhcGkvJHt0aGlzLnN0eWxlU2V0LmlkfWApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgdGV4dDogXCJUaGlzIHN0eWxlIHNldCAgd2FzIGRlbGV0ZWRcIlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5nZXRBbGxTdHlsZVNldCgpO1xuICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZVNldCh0aGlzLnN0eWxlU2V0Q29sbGVjdGlvblswXSk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfYWRtaW4tZm9ybS1leHQtc3VibWl0XCIpLmNsaWNrKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgdGV4dDogZXJyb3JzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZU5ld1N0eWxlU2V0KCkge1xuICAgICAgY29uc3QgaWQgPSBuYW5vaWQoKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzSUQgPSB0aGlzLnN0eWxlU2V0LmlkO1xuICAgICAgdGhpcy5zdHlsZVNldC5pZCA9IGlkO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvc2V0dGluZ2FwaS9zdHlsZXNldFwiLCB0aGlzLnN0eWxlU2V0KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHRleHQ6IGAke3RoaXMuc3R5bGVTZXQuc2V0TmFtZX0gc2F2ZWQgc3VjY2Vzc2Z1bGx5YFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX2FkbWluLWZvcm0tZXh0LXN1Ym1pdFwiKS5jbGljaygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yc31gXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5pZCA9IHByZXZpb3VzSUQ7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5nZXRBbGxTdHlsZVNldCgpO1xuICAgIH0sXG4gICAgYXN5bmMgc2F2ZVN0eWxlU2V0KCkge1xuICAgICAgYXdhaXQgdGhpcy5hd2FpdENvbmZpcm1hdGlvbih7XG4gICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJ3cml0ZSB0aGlzIHN0eWxlIHNldCA/XCIsXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiXG4gICAgICB9KTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wdXQoXCIvc2V0dGluZ2FwaS9zdHlsZXNldC9cIiArIHRoaXMuc3R5bGVTZXQuaWQsIHRoaXMuc3R5bGVTZXQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgdGV4dDogXCJTdHlsZSBTZXQgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldEFsbFN0eWxlU2V0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVJbmRleChcImNzc1BhbmVsSW5kZXhcIik7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfYWRtaW4tZm9ybS1leHQtc3VibWl0XCIpLmNsaWNrKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgdGV4dDogYFJlcXVlc3QgZmFpbGVkLiAgUmV0dXJuZWQgc3RhdHVzIG9mICR7ZXJyb3JzfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhcHBseVN0eWxlU2V0KHN0eWxlU2V0LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5zdHlsZVNldCA9IHN0eWxlU2V0O1xuXG4gICAgICBjb25zdCBjb2xvclNldCA9IG5ldyBnZW5lcmF0ZUNvbG9yU2V0KHN0eWxlU2V0LmRvbWluYW50KTtcblxuICAgICAgY29sb3JTZXQuZ2VuZXJhdGUoXG4gICAgICAgIHN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcbiAgICAgICAgcGFyc2VJbnQoc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxuICAgICAgICBwYXJzZUludChzdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXG4gICAgICApO1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwibG9hZGVkXCIsIHRydWUpO1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY29sb3JTZXRcIiwgY29sb3JTZXQpO1xuXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJzdHlsZVNldFwiLCBzdHlsZVNldCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2F2ZURhdGFBbmRTdHJ1Y3R1cmUoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucHV0KFwiL3NldHRpbmdhcGkvXCIsIHRoaXMuc2V0dGluZ3MpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkZEFsZXJ0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgdGV4dDogYFRoZSBsYXlvdXQgaGF2ZSBiZWVuIHVwZGF0ZWRgXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiYWRkQWxlcnRcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgdGV4dDogYFRoZXJlIHdhcyBhIHByb2JsZW0gOiAke2Vycm9yc31gXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJpc0xvZ2dlZFwiLCB0aGlzLmlzTG9nZ2VkKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiNyZi1sb2dvIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvb2xiYXItY29udGFpbmVyIC9kZWVwLyAudi10b29sYmFyX19jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnN1YnBhbmVscyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLnRvb2xiYXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogNTAlO1xufVxuLnRvb2xiYXItc2VjdGlvbi10aXRsZSB7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zdWJwYW5lbHMuX19vcGVuIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuI3JmLXRvb2xiYXIge1xuICAmLm1pbmkge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAjYWFhIDAgMCA1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4udG9vbGJhci1zYXZlLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyIHtcbiAgJi5vcGVuZWQge1xuICAgIHRvcDogNDhweDtcbiAgfVxuICB0b3A6IC0xMDVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2U7XG4gIGJveC1zaGFkb3c6ICNkZGQgMCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3JmLWxvZ29bZGF0YS12LTY3MTM0MmM2XSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50b29sYmFyLWNvbnRhaW5lcltkYXRhLXYtNjcxMzQyYzZdIC52LXRvb2xiYXJfX2NvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uc3VicGFuZWxzW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi50b29sYmFyLXNlY3Rpb25bZGF0YS12LTY3MTM0MmM2XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiA1MCU7XFxufVxcbi50b29sYmFyLXNlY3Rpb24tdGl0bGVbZGF0YS12LTY3MTM0MmM2XSB7XFxuICB0b3A6IC0xNXB4O1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnN1YnBhbmVscy5fX29wZW5bZGF0YS12LTY3MTM0MmM2XSB7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcbiNyZi10b29sYmFyLm1pbmlbZGF0YS12LTY3MTM0MmM2XSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG4jcmYtdG9vbGJhcltkYXRhLXYtNjcxMzQyYzZdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogI2FhYSAwIDAgNXB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuLnRvb2xiYXItc2F2ZS1idXR0b25bZGF0YS12LTY3MTM0MmM2XSB7XFxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlci5vcGVuZWRbZGF0YS12LTY3MTM0MmM2XSB7XFxuICAgIHRvcDogNDhweDtcXG59XFxuLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXJbZGF0YS12LTY3MTM0MmM2XSB7XFxuICB0b3A6IC0xMDVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDAwMDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgZWFzZTtcXG4gIGJveC1zaGFkb3c6ICNkZGQgMCA1cHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vQXBwL1VpL0NvbXBvbmVudHMvYWRtaW5Ub29sQmFyLnZ1ZVwiLFwiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly8uL2FkbWluVG9vbEJhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStRQTtFQUNBLFlBQUE7QUFDQTtBQUNBO0VBQ0EsZUFBQTtBQUNBO0FBQ0E7RUFDQSxXQUFBO0FBQ0E7QUFDQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0E7QUFDQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0E7QUFDQTtFQUNBLFlBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtBQUNBO0FDN1NBO0VEOFNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FFQ0E7QUZDQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDQTtBQUVBO0lBQ0EsU0FBQTtBQUNBO0FDL1RBO0VEZ1VBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FFQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlIGxhbmc9XFxcInB1Z1xcXCI+XFxuICAgIC50b29sYmFyLWNvbnRhaW5lclxcbiAgICAgICAgI3JmLXRvb2xiYXJcXG4gICAgICAgICAgICBpbWcoc3JjPVxcXCIvcHVibGljL3N2Zy9yZmxvZ28uc3ZnXFxcIiBpZD1cXFwicmYtbG9nb1xcXCIgQGNsaWNrPVxcXCJ0b2dnbGVCYXIoKVxcXCIpXFxuICAgICAgICAgICAgLnRvb2xiYXItc2VjdGlvbih2LWlmPVxcXCJkaXNwbGF5VG9vbGJhclxcXCIgaWQ9XFxcInJmLXRvb2xiYXItLWRlc2lnblxcXCIpXFxuICAgICAgICAgICAgICAgIC50b29sYmFyLXNlY3Rpb24tdGl0bGUgRGVzaWduXFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwib3BlblBhbmVsKCdjc3MnKVxcXCIgZGFyayA6b3V0bGluZWQ9XFxcIm9wZW5lZFBhbmVsICE9PSAnY3NzJ1xcXCIgOmRlcHJlc3NlZD1cXFwib3BlbmVkUGFuZWwgPT09ICdjc3MnXFxcIiBjbGFzcz1cXFwibWwtMlxcXCIgeC1zbWFsbCkgQ1NTXFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwib3BlblBhbmVsKCd0eXBvZ3JhcGh5JylcXFwiIGRhcmsgOm91dGxpbmVkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ3R5cG9ncmFwaHknXFxcIiA6ZGVwcmVzc2VkPVxcXCJvcGVuZWRQYW5lbCA9PT0gJ3R5cG9ncmFwaHknXFxcIiBjbGFzcz1cXFwibWwtMlxcXCIgeC1zbWFsbCkgVHlwb2dyYXBoeVxcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgnY29sb3JzJylcXFwiIDpkYXJrPVxcXCIhZWRpdExheW91dFxcXCIgOm91dGxpbmVkPVxcXCIhZWRpdExheW91dFxcXCIgOmRlcHJlc3NlZD1cXFwiZWRpdExheW91dFxcXCIgY2xhc3M9XFxcIm1sLTJcXFwiIHgtc21hbGwpIENvbG9yc1xcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgncmF0aW8nKVxcXCIgZGFyayA6b3V0bGluZWQ9XFxcIm9wZW5lZFBhbmVsICE9PSAncmF0aW8nXFxcIiA6ZGVwcmVzc2VkPVxcXCJvcGVuZWRQYW5lbCA9PT0gJ3JhdGlvJ1xcXCIgY2xhc3M9XFxcIm1sLTJcXFwiIHgtc21hbGwpIFJhdGlvICYgc2l6ZXNcXG4gICAgICAgICAgICAgICAgLnRvb2xiYXItc2F2ZS1idXR0b25cXG4gICAgICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwic2F2ZVN0eWxlU2V0XFxcIiBkYXRhLWplc3Q9XFxcImFkZC1jb21tb24tcm93XFxcIiBzbWFsbCBjbGFzcz1cXFwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXFxcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XFxcIndoaXRlXFxcIikgbWRpLWNvbnRlbnQtc2F2ZVxcbiAgICAgICAgICAgICAgICAgICAgdi1idG4oIGRhdGEtamVzdD1cXFwiYWRkLWNvbW1vbi1yb3dcXFwiIHNtYWxsIGNsYXNzPVxcXCJtbC0yIHRvb2xiYXItc2F2ZS1idXR0b25cXFwiKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWNvbihjb2xvcj1cXFwid2hpdGVcXFwiKSBtZGktY29nLW91dGxpbmVcXG4gICAgICAgICAgICAudG9vbGJhci1zZWN0aW9uKHYtaWY9XFxcImRpc3BsYXlUb29sYmFyXFxcIiBpZD1cXFwicmYtdG9vbGJhci0tc3RydWN0dXJlXFxcIilcXG4gICAgICAgICAgICAgICAgLnRvb2xiYXItc2VjdGlvbi10aXRsZSBEYXRhICYgU3RydWN0dXJlXFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwib3BlblBhbmVsKCd1cGxvYWQnKVxcXCIgOmRhcms9XFxcIm9wZW5lZFBhbmVsICE9PSAndXBsb2FkJ1xcXCIgOm91dGxpbmVkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ3VwbG9hZCdcXFwiIDpkZXByZXNzZWQ9XFxcIm9wZW5lZFBhbmVsICE9PSAndXBsb2FkJ1xcXCIgY2xhc3M9XFxcIm1sLTJcXFwiIHgtc21hbGwpIFVwbG9hZHNcXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVxcXCJlZGl0Q29tbW9uTGF5b3V0ID0gIWVkaXRDb21tb25MYXlvdXQ7ZWRpdExheW91dCA9IGZhbHNlO29wZW5lZFBhbmVsPScnXFxcIiBkYXJrIDpvdXRsaW5lZD1cXFwiIWVkaXRDb21tb25MYXlvdXRcXFwiIDpkZXByZXNzZWQ9XFxcImVkaXRDb21tb25MYXlvdXRcXFwiIGNsYXNzPVxcXCJtbC0yXFxcIiB4LXNtYWxsPXRydWUpIExheW91dFxcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgnbW9kZWxzJylcXFwiIGRhcmsgOm91dGxpbmVkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ21vZGVscydcXFwiIDpkZXByZXNzZWQ9XFxcIm9wZW5lZFBhbmVsID09PSAnbW9kZWxzJ1xcXCIgY2xhc3M9XFxcIm1sLTJcXFwiIHgtc21hbGw9dHJ1ZSkgTW9kZWxzXFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwib3BlblBhbmVsKCd1c2VycycpXFxcIiBkYXJrIDpvdXRsaW5lZD1cXFwib3BlbmVkUGFuZWwgIT09ICdjc3MnXFxcIiA6ZGVwcmVzc2VkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ2NzcydcXFwiIGNsYXNzPVxcXCJtbC0yXFxcIiB4LXNtYWxsPXRydWUpIFVzZXJzXFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwic2F2ZURhdGFBbmRTdHJ1Y3R1cmVcXFwiIGRhdGEtamVzdD1cXFwiYWRkLWNvbW1vbi1yb3dcXFwiIHNtYWxsIGNsYXNzPVxcXCJyZi1jb21tb24tbGF5b3V0LS1zYXZlXFxcIiBjbGFzcz1cXFwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXFxcIilcXG4gICAgICAgICAgICAgICAgICAgIHYtaWNvbihjb2xvcj1cXFwid2hpdGVcXFwiKSBtZGktY29udGVudC1zYXZlXFxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cXFwib3BlbmVkUGFuZWwgPT09ICdjc3MnXFxcIiBmaXhlZD10cnVlIHdpZHRoPVxcXCI0NTBcXFwiIHJpZ2h0PXRydWUpXFxuICAgICAgICAgICAgY3NzLXBhbmVsLXNlbGVjdG9yXFxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cXFwib3BlbmVkUGFuZWwgPT09ICdyYXRpbydcXFwiIGZpeGVkPXRydWUgd2lkdGg9XFxcIjQ1MFxcXCIgcmlnaHQ9dHJ1ZSlcXG4gICAgICAgICAgICBjc3MtcGFuZWwtcmF0aW9cXG4gICAgICAgIHYtbmF2aWdhdGlvbi1kcmF3ZXIoOnZhbHVlPVxcXCJvcGVuZWRQYW5lbCA9PT0gJ2NvbG9ycydcXFwiIGZpeGVkPXRydWUgd2lkdGg9XFxcImF1dG9cXFwiIHJpZ2h0PXRydWUpXFxuICAgICAgICAgICAgY3NzLXBhbmVsLWNvbG9yXFxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cXFwib3BlbmVkUGFuZWwgPT09ICd1cGxvYWQnXFxcIiByaWdodD10cnVlIGZpeGVkPXRydWUgd2lkdGg9XFxcIjMwMFxcXCIpXFxuICAgICAgICAgICAgdXBsb2FkLXBhbmVsXFxuXFxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKGNsYXNzPVxcXCJyZi12ZXJ0aWNhbC1wYW5lbCAtLXN0cnVjdHVyZVxcXCIgOnZhbHVlPVxcXCJvcGVuZWRQYW5lbCA9PT0gJ21vZGVscydcXFwiIHJpZ2h0PXRydWUgZml4ZWQ9dHJ1ZSB3aWR0aD1cXFwiNDAwXFxcIiBoaWRlLW92ZXJsYXkpXFxuICAgICAgICAgICAgbW9kZWwtcGFuZWwoKVxcbiAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwic2F2ZURhdGFBbmRTdHJ1Y3R1cmVcXFwiIHNtYWxsIGNsYXNzPVxcXCJyZi1zZXR0aW5ncy0tc2F2ZS1idXR0b25fc3RydWN0dXJlIGZsb2F0LXJpZ2h0IG1yLTZcXFwiKVxcbiAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XFxcIndoaXRlXFxcIikgbWRpLWNvbnRlbnQtc2F2ZVxcbiAgICAgICAgLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXIoOmNsYXNzPVxcXCJ7b3BlbmVkIDpvcGVuZWRQYW5lbCA9PT0gJ3R5cG9ncmFwaHknfVxcXCIpXFxuICAgICAgICAgICAgY3NzLXBhbmVsLXR5cG9ncmFwaHlcXG4gICAgICAgIC5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyKCB2LWlmPVxcXCJmYWxzZVxcXCIgOmNsYXNzPVxcXCJ7b3BlbmVkIDpvcGVuZWRQYW5lbCA9PT0gJ2Rlc2lnblNldHRpbmdzJ31cXFwiKVxcbiAgICAgICAgICAgIHYtc2VsZWN0KG91dGxpbmVkIDppdGVtcz1cXFwic3R5bGVTZXRDb2xsZWN0aW9uXFxcIiB2LW1vZGVsPVxcXCJzZWxlY3RlZFN0eWxlU2V0XFxcIiBpdGVtLXZhbHVlPVxcXCJpZFxcXCIgaXRlbS10ZXh0PVxcXCJzZXROYW1lXFxcIiBsYWJlbD1cXFwiU3R5bGUgU2V0XFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVTdHlsZVNldCgpXFxcIiByZXR1cm4tb2JqZWN0PXRydWUpXFxuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIGNsYXNzPVxcXCJfY29udGFpbmVyXFxcIiAgdi1pZj1cXFwic3R5bGVTZXQuaWQgIT09ICdkZWZhdWx0J1xcXCIgQGNsaWNrLnByZXZlbnQ9XFxcInNhdmVTdHlsZVNldCgpXFxcIikgU2F2ZVxcbiAgICAgICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiY3NzLXBhbmVsX19pbnB1dFxcXCIgbGFiZWw9XFxcIkNvbmZpZyBuYW1lXFxcIiBuYW1lPVxcXCJzZXROYW1lXFxcIiB2LW1vZGVsPVxcXCJzdHlsZVNldC5zZXROYW1lXFxcIilcXG4gICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgQGNsaWNrLnByZXZlbnQ9XFxcInNhdmVOZXdTdHlsZVNldCgpXFxcIikgU2F2ZSBhIG5ldyBTdHlsZSBTZXRcXG4gICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgY2xhc3M9XFxcIl9jb250YWluZXJcXFwiICBAY2xpY2sucHJldmVudD1cXFwiZGVsZXRlU3R5bGVTZXQoKVxcXCIgIHYtaWY9XFxcInN0eWxlU2V0LmlkICE9PSAnZGVmYXVsdCdcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIpIERlbGV0ZSBTdHlsZSBTZXRcXG5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gXFxcImF4aW9zXFxcIjtcXG5cXG5jb25zdCBtb2RlbFBhbmVsID0gKCkgPT4gaW1wb3J0KFxcXCIuL21vZGVsUGFuZWwudnVlXFxcIik7XFxuY29uc3QgY3NzUGFuZWxTZWxlY3RvciA9ICgpID0+IGltcG9ydChcXFwiLi9jc3NQYW5lbFNlbGVjdG9yLnZ1ZVxcXCIpO1xcbmNvbnN0IGNzc1BhbmVsUmF0aW8gPSAoKSA9PiBpbXBvcnQoXFxcIi4vY3NzUGFuZWxSYXRpby52dWVcXFwiKTtcXG5jb25zdCBjc3NQYW5lbENvbG9yID0gKCkgPT4gaW1wb3J0KFxcXCIuL2Nzc1BhbmVsQ29sb3IudnVlXFxcIik7XFxuY29uc3QgdXBsb2FkUGFuZWwgPSAoKSA9PiBpbXBvcnQoXFxcIi4vdXBsb2FkUGFuZWwudnVlXFxcIik7XFxuY29uc3QgY3NzUGFuZWxUeXBvZ3JhcGh5ID0gKCkgPT4gaW1wb3J0KFxcXCIuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWVcXFwiKTtcXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFxcXCJuYW5vaWRcXFwiO1xcbmltcG9ydCB7IGdlbmVyYXRlQ29sb3JTZXQgfSBmcm9tIFxcXCIuLi9jb2xvckdlbmVyYXRvclxcXCI7XFxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXFxcInZ1ZXhcXFwiO1xcbmltcG9ydCB7IFZOYXZpZ2F0aW9uRHJhd2VyIH0gZnJvbSBcXFwidnVldGlmeS9saWJcXFwiO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgdXBsb2FkUGFuZWwsXFxuICAgIG1vZGVsUGFuZWwsXFxuICAgIGNzc1BhbmVsU2VsZWN0b3IsXFxuICAgIGNzc1BhbmVsQ29sb3IsXFxuICAgIGNzc1BhbmVsUmF0aW8sXFxuICAgIGNzc1BhbmVsVHlwb2dyYXBoeSxcXG4gICAgVk5hdmlnYXRpb25EcmF3ZXJcXG4gIH0sXFxuICBwcm9wczoge1xcbiAgICBpc0xvZ2dlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9XFxuICB9LFxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgZGlzcGxheVRvb2xiYXI6IHRydWUsXFxuICAgICAgb3BlbmVkUGFuZWw6IFxcXCJcXFwiXFxuICAgIH07XFxuICB9LFxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgLi4ubWFwR2V0dGVycyhbXFxcInNldHRpbmdzXFxcIl0pLFxcbiAgICBlZGl0Q29tbW9uTGF5b3V0OiB7XFxuICAgICAgZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFkbWluLmVkaXRDb21tb25MYXlvdXQ7XFxuICAgICAgfSxcXG4gICAgICBzZXQodmFsdWUpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwiZWRpdENvbW1vbkxheW91dFxcXCIsIHZhbHVlKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGVkaXRMYXlvdXQ6IHtcXG4gICAgICBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYWRtaW4uZWRpdExheW91dDtcXG4gICAgICB9LFxcbiAgICAgIHNldCh2YWx1ZSkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJlZGl0TGF5b3V0XFxcIiwgdmFsdWUpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgc3R5bGVTZXQ6IHtcXG4gICAgICBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHlsZVNldDtcXG4gICAgICB9LFxcbiAgICAgIHNldCh2YWx1ZSkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJzdHlsZVNldFxcXCIsIHZhbHVlKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sXFxuICBtb3VudGVkKCkge1xcbiAgICB0aGlzLmFwcGx5U3R5bGVTZXQodGhpcy5zdHlsZVNldCk7XFxuICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwic3R5bGVTZXRMb2FkZWRcXFwiLCB0cnVlKTtcXG4gICAgdGhpcy50cmlnZ2VyTmV3U3R5bGUoKTtcXG4gICAgdGhpcy5nZXRBbGxTdHlsZVNldCgpO1xcblxcbiAgICBpZiAodGhpcy5kaXNwbGF5VG9vbGJhcikge1xcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXFxcIiNyZi12dWUtY29udGFpbmVyXFxcIikuY2xhc3NMaXN0LmFkZChcXFwidG9vbGJhci1vcGVuXFxcIik7XFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoW1xcXCJ0cmlnZ2VyTmV3U3R5bGVcXFwiLCBcXFwiYWRkQWxlcnRcXFwiLCBcXFwiYXdhaXRDb25maXJtYXRpb25cXFwiXSksXFxuICAgIG9wZW5QYW5lbChuYW1lKSB7XFxuICAgICAgaWYgKG5hbWUgPT09IHRoaXMub3BlbmVkUGFuZWwpIHtcXG4gICAgICAgIHRoaXMub3BlbmVkUGFuZWwgPSBcXFwiXFxcIjtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5vcGVuZWRQYW5lbCA9IG5hbWU7XFxuICAgICAgfVxcbiAgICAgIHRoaXMuZWRpdENvbW1vbkxheW91dCA9IGZhbHNlO1xcbiAgICAgIHRoaXMuZWRpdExheW91dCA9IGZhbHNlO1xcbiAgICB9LFxcbiAgICBnZXRBbGxTdHlsZVNldCgpIHtcXG4gICAgICBheGlvc1xcbiAgICAgICAgLmdldChcXFwiL3NldHRpbmdhcGkvc3R5bGVzZXQvYWxsXFxcIilcXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgdGhpcy5zdHlsZVNldENvbGxlY3Rpb24gPSByZXNwb25zZS5kYXRhO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xcbiAgICAgICAgICAgIHR5cGU6IFxcXCJlcnJvclxcXCIsXFxuICAgICAgICAgICAgdGV4dDogYFJlcXVlc3QgZmFpbGVkLiAgUmV0dXJuZWQgc3RhdHVzIG9mICR7ZXJyb3J9YFxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbiAgICBzZXRPcGVuUGFuZWwodHlwZSkge1xcbiAgICAgIGlmICh0aGlzLm9wZW5QYW5lbCA9PT0gdHlwZSkge1xcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwgPSBcXFwiXFxcIjtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuICAgICAgdGhpcy5vcGVuUGFuZWwgPSB0eXBlO1xcbiAgICB9LFxcbiAgICB0b2dnbGVCYXIoKSB7XFxuICAgICAgaWYgKHRoaXMuZGlzcGxheVRvb2xiYXIpIHtcXG4gICAgICAgIHRoaXMuZGlzcGxheVRvb2xiYXIgPSBmYWxzZTtcXG4gICAgICAgIGRvY3VtZW50XFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxcXCIjcmYtdnVlLWNvbnRhaW5lclxcXCIpXFxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFxcXCJ0b29sYmFyLW9wZW5cXFwiKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5kaXNwbGF5VG9vbGJhciA9IHRydWU7XFxuICAgICAgICBkb2N1bWVudFxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcXFwiI3JmLXZ1ZS1jb250YWluZXJcXFwiKVxcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcXFwidG9vbGJhci1vcGVuXFxcIik7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBhc3luYyBkZWxldGVTdHlsZVNldCgpIHtcXG4gICAgICBhd2FpdCB0aGlzLmF3YWl0Q29uZmlybWF0aW9uKHtcXG4gICAgICAgIHRleHQ6IFxcXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc3R5bGUgc2V0ID9cXFwiLFxcbiAgICAgICAgdHlwZTogXFxcIndhcm5pbmdcXFwiXFxuICAgICAgfSk7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5kZWxldGUoYC9zZXR0aW5nYXBpLyR7dGhpcy5zdHlsZVNldC5pZH1gKVxcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgdGV4dDogXFxcIlRoaXMgc3R5bGUgc2V0ICB3YXMgZGVsZXRlZFxcXCJcXG4gICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgIHRoaXMuZ2V0QWxsU3R5bGVTZXQoKTtcXG4gICAgICAgICAgdGhpcy5hcHBseVN0eWxlU2V0KHRoaXMuc3R5bGVTZXRDb2xsZWN0aW9uWzBdKTtcXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcIl9hZG1pbi1mb3JtLWV4dC1zdWJtaXRcXFwiKS5jbGljaygpO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwiZXJyb3JcXFwiLFxcbiAgICAgICAgICAgIHRleHQ6IGVycm9yc1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbiAgICBzYXZlTmV3U3R5bGVTZXQoKSB7XFxuICAgICAgY29uc3QgaWQgPSBuYW5vaWQoKTtcXG4gICAgICBjb25zdCBwcmV2aW91c0lEID0gdGhpcy5zdHlsZVNldC5pZDtcXG4gICAgICB0aGlzLnN0eWxlU2V0LmlkID0gaWQ7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5wb3N0KFxcXCIvc2V0dGluZ2FwaS9zdHlsZXNldFxcXCIsIHRoaXMuc3R5bGVTZXQpXFxuICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xcbiAgICAgICAgICAgIHR5cGU6IFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLnN0eWxlU2V0LnNldE5hbWV9IHNhdmVkIHN1Y2Nlc3NmdWxseWBcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJfYWRtaW4tZm9ybS1leHQtc3VibWl0XFxcIikuY2xpY2soKTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcXG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XFxuICAgICAgICAgICAgdHlwZTogXFxcImVycm9yXFxcIixcXG4gICAgICAgICAgICB0ZXh0OiBgUmVxdWVzdCBmYWlsZWQuICBSZXR1cm5lZCBzdGF0dXMgb2YgJHtlcnJvcnN9YFxcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5pZCA9IHByZXZpb3VzSUQ7XFxuICAgICAgICB9KTtcXG4gICAgICB0aGlzLmdldEFsbFN0eWxlU2V0KCk7XFxuICAgIH0sXFxuICAgIGFzeW5jIHNhdmVTdHlsZVNldCgpIHtcXG4gICAgICBhd2FpdCB0aGlzLmF3YWl0Q29uZmlybWF0aW9uKHtcXG4gICAgICAgIHRleHQ6IFxcXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gb3ZlcndyaXRlIHRoaXMgc3R5bGUgc2V0ID9cXFwiLFxcbiAgICAgICAgdHlwZTogXFxcIndhcm5pbmdcXFwiXFxuICAgICAgfSk7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5wdXQoXFxcIi9zZXR0aW5nYXBpL3N0eWxlc2V0L1xcXCIgKyB0aGlzLnN0eWxlU2V0LmlkLCB0aGlzLnN0eWxlU2V0KVxcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgdGV4dDogXFxcIlN0eWxlIFNldCBzYXZlZCBzdWNjZXNzZnVsbHlcXFwiXFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgICB0aGlzLmdldEFsbFN0eWxlU2V0KCk7XFxuICAgICAgICAgIHRoaXMudG9nZ2xlSW5kZXgoXFxcImNzc1BhbmVsSW5kZXhcXFwiKTtcXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcIl9hZG1pbi1mb3JtLWV4dC1zdWJtaXRcXFwiKS5jbGljaygpO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwiZXJyb3JcXFwiLFxcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yc31gXFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuICAgIGFwcGx5U3R5bGVTZXQoc3R5bGVTZXQsIGNhbGxiYWNrKSB7XFxuICAgICAgdGhpcy5zdHlsZVNldCA9IHN0eWxlU2V0O1xcblxcbiAgICAgIGNvbnN0IGNvbG9yU2V0ID0gbmV3IGdlbmVyYXRlQ29sb3JTZXQoc3R5bGVTZXQuZG9taW5hbnQpO1xcblxcbiAgICAgIGNvbG9yU2V0LmdlbmVyYXRlKFxcbiAgICAgICAgc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxcbiAgICAgICAgcGFyc2VJbnQoc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxcbiAgICAgICAgcGFyc2VJbnQoc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxcbiAgICAgICk7XFxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJsb2FkZWRcXFwiLCB0cnVlKTtcXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImNvbG9yU2V0XFxcIiwgY29sb3JTZXQpO1xcblxcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwic3R5bGVTZXRcXFwiLCBzdHlsZVNldCk7XFxuICAgICAgaWYgKGNhbGxiYWNrKSB7XFxuICAgICAgICBjYWxsYmFjaygpO1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgc2F2ZURhdGFBbmRTdHJ1Y3R1cmUoKSB7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5wdXQoXFxcIi9zZXR0aW5nYXBpL1xcXCIsIHRoaXMuc2V0dGluZ3MpXFxuICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFxcXCJhZGRBbGVydFxcXCIsIHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgdGV4dDogYFRoZSBsYXlvdXQgaGF2ZSBiZWVuIHVwZGF0ZWRgXFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcXFwiYWRkQWxlcnRcXFwiLCB7XFxuICAgICAgICAgICAgdHlwZTogXFxcImVycm9yXFxcIixcXG4gICAgICAgICAgICB0ZXh0OiBgVGhlcmUgd2FzIGEgcHJvYmxlbSA6ICR7ZXJyb3JzfWBcXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9KTtcXG4gICAgfVxcbiAgfSxcXG4gIGNyZWF0ZWQoKSB7XFxuICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwiaXNMb2dnZWRcXFwiLCB0aGlzLmlzTG9nZ2VkKTtcXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuI3JmLWxvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9vbGJhci1jb250YWluZXIgL2RlZXAvIC52LXRvb2xiYXJfX2NvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uc3VicGFuZWxzIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4udG9vbGJhci1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDUwJTtcXG59XFxuLnRvb2xiYXItc2VjdGlvbi10aXRsZSB7XFxuICB0b3A6IC0xNXB4O1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnN1YnBhbmVscy5fX29wZW4ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG4jcmYtdG9vbGJhciB7XFxuICAmLm1pbmkge1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogI2FhYSAwIDAgNXB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuLnRvb2xiYXItc2F2ZS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXIge1xcbiAgJi5vcGVuZWQge1xcbiAgICB0b3A6IDQ4cHg7XFxuICB9XFxuICB0b3A6IC0xMDVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDAwMDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgZWFzZTtcXG4gIGJveC1zaGFkb3c6ICNkZGQgMCA1cHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuPC9zdHlsZT5cXG5cIixudWxsLFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuI3JmLWxvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9vbGJhci1jb250YWluZXIgL2RlZXAvIC52LXRvb2xiYXJfX2NvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uc3VicGFuZWxzIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4udG9vbGJhci1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDUwJTtcXG59XFxuLnRvb2xiYXItc2VjdGlvbi10aXRsZSB7XFxuICB0b3A6IC0xNXB4O1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnN1YnBhbmVscy5fX29wZW4ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG4jcmYtdG9vbGJhci5taW5pIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxuI3JmLXRvb2xiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAjYWFhIDAgMCA1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG4udG9vbGJhci1zYXZlLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlci5vcGVuZWQge1xcbiAgICB0b3A6IDQ4cHg7XFxuICB9XFxuLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXIge1xcbiAgdG9wOiAtMTA1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwMDA7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2U7XFxuICBib3gtc2hhZG93OiAjZGRkIDAgNXB4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjcxMzQyYzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3MTM0MmM2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjcxMzQyYzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3MTM0MmM2JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FkbWluVG9vbEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FkbWluVG9vbEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3MTM0MmM2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzEzNDJjNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3MTM0MmM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3MTM0MmM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3MTM0MmM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3MTM0MmM2JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3MTM0MmM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9hZG1pblRvb2xCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkbWluVG9vbEJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicmYtdG9vbGJhclwiIH0gfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9wdWJsaWMvc3ZnL3JmbG9nby5zdmdcIiwgaWQ6IFwicmYtbG9nb1wiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVCYXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5kaXNwbGF5VG9vbGJhclxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLXNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyZi10b29sYmFyLS1kZXNpZ25cIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXItc2VjdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRlc2lnblwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcImNzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlcHJlc3NlZDogX3ZtLm9wZW5lZFBhbmVsID09PSBcImNzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwieC1zbWFsbFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuUGFuZWwoXCJjc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ1NTXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBfdm0ub3BlbmVkUGFuZWwgIT09IFwidHlwb2dyYXBoeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlcHJlc3NlZDogX3ZtLm9wZW5lZFBhbmVsID09PSBcInR5cG9ncmFwaHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwidHlwb2dyYXBoeVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUeXBvZ3JhcGh5XCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXJrOiAhX3ZtLmVkaXRMYXlvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6ICFfdm0uZWRpdExheW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5lZGl0TGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICAgIFwieC1zbWFsbFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuUGFuZWwoXCJjb2xvcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29sb3JzXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBfdm0ub3BlbmVkUGFuZWwgIT09IFwicmF0aW9cIixcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJyYXRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwieC1zbWFsbFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuUGFuZWwoXCJyYXRpb1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSYXRpbyAmIHNpemVzXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyLXNhdmUtYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJhZGQtY29tbW9uLXJvd1wiLCBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlU3R5bGVTZXQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ3aGl0ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZGktY29udGVudC1zYXZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtamVzdFwiOiBcImFkZC1jb21tb24tcm93XCIsIHNtYWxsOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNvZy1vdXRsaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5kaXNwbGF5VG9vbGJhclxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLXNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyZi10b29sYmFyLS1zdHJ1Y3R1cmVcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXItc2VjdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRhdGEgJiBTdHJ1Y3R1cmVcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhcms6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlcHJlc3NlZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwieC1zbWFsbFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuUGFuZWwoXCJ1cGxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVXBsb2Fkc1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogIV92bS5lZGl0Q29tbW9uTGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICAgIGRlcHJlc3NlZDogX3ZtLmVkaXRDb21tb25MYXlvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ4LXNtYWxsXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdENvbW1vbkxheW91dCA9ICFfdm0uZWRpdENvbW1vbkxheW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRMYXlvdXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW5lZFBhbmVsID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMYXlvdXRcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJtb2RlbHNcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJtb2RlbHNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwibW9kZWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1vZGVsc1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcImNzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlcHJlc3NlZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcImNzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwieC1zbWFsbFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuUGFuZWwoXCJ1c2Vyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVc2Vyc1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcInJmLWNvbW1vbi1sYXlvdXQtLXNhdmUgbWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwiYWRkLWNvbW1vbi1yb3dcIiwgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlRGF0YUFuZFN0cnVjdHVyZSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNvbnRlbnQtc2F2ZVwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm9wZW5lZFBhbmVsID09PSBcImNzc1wiLFxuICAgICAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI0NTBcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJjc3MtcGFuZWwtc2VsZWN0b3JcIildLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ub3BlbmVkUGFuZWwgPT09IFwicmF0aW9cIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNDUwXCIsXG4gICAgICAgICAgICByaWdodDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiY3NzLXBhbmVsLXJhdGlvXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm9wZW5lZFBhbmVsID09PSBcImNvbG9yc1wiLFxuICAgICAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICAgICAgICByaWdodDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiY3NzLXBhbmVsLWNvbG9yXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm9wZW5lZFBhbmVsID09PSBcInVwbG9hZFwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICBmaXhlZDogXCJcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjMwMFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJ1cGxvYWQtcGFuZWxcIildLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmYtdmVydGljYWwtcGFuZWwgLS1zdHJ1Y3R1cmVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJtb2RlbHNcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI0MDBcIixcbiAgICAgICAgICAgIFwiaGlkZS1vdmVybGF5XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm1vZGVsLXBhbmVsXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInJmLXNldHRpbmdzLS1zYXZlLWJ1dHRvbl9zdHJ1Y3R1cmUgZmxvYXQtcmlnaHQgbXItNlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmVEYXRhQW5kU3RydWN0dXJlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZGktY29udGVudC1zYXZlXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgICAgICAgIGNsYXNzOiB7IG9wZW5lZDogX3ZtLm9wZW5lZFBhbmVsID09PSBcInR5cG9ncmFwaHlcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImNzcy1wYW5lbC10eXBvZ3JhcGh5XCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIGZhbHNlXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IG9wZW5lZDogX3ZtLm9wZW5lZFBhbmVsID09PSBcImRlc2lnblNldHRpbmdzXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5zdHlsZVNldENvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJzZXROYW1lXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdHlsZSBTZXRcIixcbiAgICAgICAgICAgICAgICAgIFwicmV0dXJuLW9iamVjdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVTdHlsZVNldCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFN0eWxlU2V0LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRTdHlsZVNldCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdHlsZVNldFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LmlkICE9PSBcImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIl9jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlU3R5bGVTZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNzcy1wYW5lbF9faW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbGFiZWw6IFwiQ29uZmlnIG5hbWVcIiwgbmFtZTogXCJzZXROYW1lXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdHlsZVNldC5zZXROYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwic2V0TmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHlsZVNldC5zZXROYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlTmV3U3R5bGVTZXQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZSBhIG5ldyBTdHlsZSBTZXRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5zdHlsZVNldC5pZCAhPT0gXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJfY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiwgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlU3R5bGVTZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZSBTdHlsZSBTZXRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=