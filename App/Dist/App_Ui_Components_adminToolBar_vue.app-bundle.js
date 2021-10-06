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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWU/Y2Y0MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvYWRtaW5Ub29sQmFyLnZ1ZT81ZjRiIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9hZG1pblRvb2xCYXIudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9hZG1pblRvb2xCYXIudnVlPzcwMjQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWU/ODNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLG9CQUhBO0FBSUEsaUJBSkE7QUFLQSxpQkFMQTtBQU1BLHNCQU5BO0FBT0E7QUFQQSxHQURBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBLEdBVkE7QUFhQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBSUEsR0FsQkE7QUFtQkEsNENBQ0EsOERBREE7QUFFQTtB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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQyxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLFNBQVMsaUJBQWlCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQUs7QUFDWCxVQUFVLENBdUZDO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfYWRtaW5Ub29sQmFyX3Z1ZS5hcHAtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgICAudG9vbGJhci1jb250YWluZXJcbiAgICAgICAgI3JmLXRvb2xiYXJcbiAgICAgICAgICAgIGltZyhzcmM9XCIvcHVibGljL3N2Zy9yZmxvZ28uc3ZnXCIgaWQ9XCJyZi1sb2dvXCIgQGNsaWNrPVwidG9nZ2xlQmFyKClcIilcbiAgICAgICAgICAgIC50b29sYmFyLXNlY3Rpb24odi1pZj1cImRpc3BsYXlUb29sYmFyXCIgaWQ9XCJyZi10b29sYmFyLS1kZXNpZ25cIilcbiAgICAgICAgICAgICAgICAudG9vbGJhci1zZWN0aW9uLXRpdGxlIERlc2lnblxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cIm9wZW5QYW5lbCgnY3NzJylcIiBkYXJrIDpvdXRsaW5lZD1cIm9wZW5lZFBhbmVsICE9PSAnY3NzJ1wiIDpkZXByZXNzZWQ9XCJvcGVuZWRQYW5lbCA9PT0gJ2NzcydcIiBjbGFzcz1cIm1sLTJcIiB4LXNtYWxsKSBDU1NcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJvcGVuUGFuZWwoJ3R5cG9ncmFwaHknKVwiIGRhcmsgOm91dGxpbmVkPVwib3BlbmVkUGFuZWwgIT09ICd0eXBvZ3JhcGh5J1wiIDpkZXByZXNzZWQ9XCJvcGVuZWRQYW5lbCA9PT0gJ3R5cG9ncmFwaHknXCIgY2xhc3M9XCJtbC0yXCIgeC1zbWFsbCkgVHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cIm9wZW5QYW5lbCgnY29sb3JzJylcIiA6ZGFyaz1cIiFlZGl0TGF5b3V0XCIgOm91dGxpbmVkPVwiIWVkaXRMYXlvdXRcIiA6ZGVwcmVzc2VkPVwiZWRpdExheW91dFwiIGNsYXNzPVwibWwtMlwiIHgtc21hbGwpIENvbG9yc1xuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cIm9wZW5QYW5lbCgncmF0aW8nKVwiIGRhcmsgOm91dGxpbmVkPVwib3BlbmVkUGFuZWwgIT09ICdyYXRpbydcIiA6ZGVwcmVzc2VkPVwib3BlbmVkUGFuZWwgPT09ICdyYXRpbydcIiBjbGFzcz1cIm1sLTJcIiB4LXNtYWxsKSBSYXRpbyAmIHNpemVzXG4gICAgICAgICAgICAgICAgLnRvb2xiYXItc2F2ZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwic2F2ZVN0eWxlU2V0XCIgZGF0YS1qZXN0PVwiYWRkLWNvbW1vbi1yb3dcIiBzbWFsbCBjbGFzcz1cIm1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pY29uKGNvbG9yPVwid2hpdGVcIikgbWRpLWNvbnRlbnQtc2F2ZVxuICAgICAgICAgICAgICAgICAgICB2LWJ0biggZGF0YS1qZXN0PVwiYWRkLWNvbW1vbi1yb3dcIiBzbWFsbCBjbGFzcz1cIm1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pY29uKGNvbG9yPVwid2hpdGVcIikgbWRpLWNvZy1vdXRsaW5lXG4gICAgICAgICAgICAudG9vbGJhci1zZWN0aW9uKHYtaWY9XCJkaXNwbGF5VG9vbGJhclwiIGlkPVwicmYtdG9vbGJhci0tc3RydWN0dXJlXCIpXG4gICAgICAgICAgICAgICAgLnRvb2xiYXItc2VjdGlvbi10aXRsZSBEYXRhICYgU3RydWN0dXJlXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwib3BlblBhbmVsKCd1cGxvYWQnKVwiIDpkYXJrPVwib3BlbmVkUGFuZWwgIT09ICd1cGxvYWQnXCIgOm91dGxpbmVkPVwib3BlbmVkUGFuZWwgIT09ICd1cGxvYWQnXCIgOmRlcHJlc3NlZD1cIm9wZW5lZFBhbmVsICE9PSAndXBsb2FkJ1wiIGNsYXNzPVwibWwtMlwiIHgtc21hbGwpIFVwbG9hZHNcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJlZGl0Q29tbW9uTGF5b3V0ID0gIWVkaXRDb21tb25MYXlvdXQ7ZWRpdExheW91dCA9IGZhbHNlO29wZW5lZFBhbmVsPScnXCIgZGFyayA6b3V0bGluZWQ9XCIhZWRpdENvbW1vbkxheW91dFwiIDpkZXByZXNzZWQ9XCJlZGl0Q29tbW9uTGF5b3V0XCIgY2xhc3M9XCJtbC0yXCIgeC1zbWFsbD10cnVlKSBMYXlvdXRcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJvcGVuUGFuZWwoJ21vZGVscycpXCIgZGFyayA6b3V0bGluZWQ9XCJvcGVuZWRQYW5lbCAhPT0gJ21vZGVscydcIiA6ZGVwcmVzc2VkPVwib3BlbmVkUGFuZWwgPT09ICdtb2RlbHMnXCIgY2xhc3M9XCJtbC0yXCIgeC1zbWFsbD10cnVlKSBNb2RlbHNcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJvcGVuUGFuZWwoJ3VzZXJzJylcIiBkYXJrIDpvdXRsaW5lZD1cIm9wZW5lZFBhbmVsICE9PSAnY3NzJ1wiIDpkZXByZXNzZWQ9XCJvcGVuZWRQYW5lbCAhPT0gJ2NzcydcIiBjbGFzcz1cIm1sLTJcIiB4LXNtYWxsPXRydWUpIFVzZXJzXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwic2F2ZURhdGFBbmRTdHJ1Y3R1cmVcIiBkYXRhLWplc3Q9XCJhZGQtY29tbW9uLXJvd1wiIHNtYWxsIGNsYXNzPVwicmYtY29tbW9uLWxheW91dC0tc2F2ZVwiIGNsYXNzPVwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgIHYtaWNvbihjb2xvcj1cIndoaXRlXCIpIG1kaS1jb250ZW50LXNhdmVcbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcig6dmFsdWU9XCJvcGVuZWRQYW5lbCA9PT0gJ2NzcydcIiBmaXhlZD10cnVlIHdpZHRoPVwiNDUwXCIgcmlnaHQ9dHJ1ZSlcbiAgICAgICAgICAgIGNzcy1wYW5lbC1zZWxlY3RvclxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cIm9wZW5lZFBhbmVsID09PSAncmF0aW8nXCIgZml4ZWQ9dHJ1ZSB3aWR0aD1cIjQ1MFwiIHJpZ2h0PXRydWUpXG4gICAgICAgICAgICBjc3MtcGFuZWwtcmF0aW9cbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcig6dmFsdWU9XCJvcGVuZWRQYW5lbCA9PT0gJ2NvbG9ycydcIiBmaXhlZD10cnVlIHdpZHRoPVwiYXV0b1wiIHJpZ2h0PXRydWUpXG4gICAgICAgICAgICBjc3MtcGFuZWwtY29sb3JcbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcig6dmFsdWU9XCJvcGVuZWRQYW5lbCA9PT0gJ3VwbG9hZCdcIiByaWdodD10cnVlIGZpeGVkPXRydWUgd2lkdGg9XCIzMDBcIilcbiAgICAgICAgICAgIHVwbG9hZC1wYW5lbFxuXG4gICAgICAgIHYtbmF2aWdhdGlvbi1kcmF3ZXIoY2xhc3M9XCJyZi12ZXJ0aWNhbC1wYW5lbCAtLXN0cnVjdHVyZVwiIDp2YWx1ZT1cIm9wZW5lZFBhbmVsID09PSAnbW9kZWxzJ1wiIHJpZ2h0PXRydWUgZml4ZWQ9dHJ1ZSB3aWR0aD1cIjQwMFwiIGhpZGUtb3ZlcmxheSlcbiAgICAgICAgICAgIG1vZGVsLXBhbmVsKClcbiAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cInNhdmVEYXRhQW5kU3RydWN0dXJlXCIgc21hbGwgY2xhc3M9XCJyZi1zZXR0aW5ncy0tc2F2ZS1idXR0b25fc3RydWN0dXJlIGZsb2F0LXJpZ2h0IG1yLTZcIilcbiAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XCJ3aGl0ZVwiKSBtZGktY29udGVudC1zYXZlXG4gICAgICAgIC5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyKDpjbGFzcz1cIntvcGVuZWQgOm9wZW5lZFBhbmVsID09PSAndHlwb2dyYXBoeSd9XCIpXG4gICAgICAgICAgICBjc3MtcGFuZWwtdHlwb2dyYXBoeVxuICAgICAgICAuaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlciggdi1pZj1cImZhbHNlXCIgOmNsYXNzPVwie29wZW5lZCA6b3BlbmVkUGFuZWwgPT09ICdkZXNpZ25TZXR0aW5ncyd9XCIpXG4gICAgICAgICAgICB2LXNlbGVjdChvdXRsaW5lZCA6aXRlbXM9XCJzdHlsZVNldENvbGxlY3Rpb25cIiB2LW1vZGVsPVwic2VsZWN0ZWRTdHlsZVNldFwiIGl0ZW0tdmFsdWU9XCJpZFwiIGl0ZW0tdGV4dD1cInNldE5hbWVcIiBsYWJlbD1cIlN0eWxlIFNldFwiIEBjaGFuZ2U9XCJ1cGRhdGVTdHlsZVNldCgpXCIgcmV0dXJuLW9iamVjdD10cnVlKVxuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIGNsYXNzPVwiX2NvbnRhaW5lclwiICB2LWlmPVwic3R5bGVTZXQuaWQgIT09ICdkZWZhdWx0J1wiIEBjbGljay5wcmV2ZW50PVwic2F2ZVN0eWxlU2V0KClcIikgU2F2ZVxuICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjc3MtcGFuZWxfX2lucHV0XCIgbGFiZWw9XCJDb25maWcgbmFtZVwiIG5hbWU9XCJzZXROYW1lXCIgdi1tb2RlbD1cInN0eWxlU2V0LnNldE5hbWVcIilcbiAgICAgICAgICAgIHYtYnRuKHRleHQ9dHJ1ZSBAY2xpY2sucHJldmVudD1cInNhdmVOZXdTdHlsZVNldCgpXCIpIFNhdmUgYSBuZXcgU3R5bGUgU2V0XG4gICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgY2xhc3M9XCJfY29udGFpbmVyXCIgIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlU3R5bGVTZXQoKVwiICB2LWlmPVwic3R5bGVTZXQuaWQgIT09ICdkZWZhdWx0J1wiIHR5cGU9XCJidXR0b25cIikgRGVsZXRlIFN0eWxlIFNldFxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgbW9kZWxQYW5lbCA9ICgpID0+IGltcG9ydChcIi4vbW9kZWxQYW5lbC52dWVcIik7XG5jb25zdCBjc3NQYW5lbFNlbGVjdG9yID0gKCkgPT4gaW1wb3J0KFwiLi9jc3NQYW5lbFNlbGVjdG9yLnZ1ZVwiKTtcbmNvbnN0IGNzc1BhbmVsUmF0aW8gPSAoKSA9PiBpbXBvcnQoXCIuL2Nzc1BhbmVsUmF0aW8udnVlXCIpO1xuY29uc3QgY3NzUGFuZWxDb2xvciA9ICgpID0+IGltcG9ydChcIi4vY3NzUGFuZWxDb2xvci52dWVcIik7XG5jb25zdCB1cGxvYWRQYW5lbCA9ICgpID0+IGltcG9ydChcIi4vdXBsb2FkUGFuZWwudnVlXCIpO1xuY29uc3QgY3NzUGFuZWxUeXBvZ3JhcGh5ID0gKCkgPT4gaW1wb3J0KFwiLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlXCIpO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb2xvclNldCB9IGZyb20gXCIuLi9jb2xvckdlbmVyYXRvclwiO1xuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyBWTmF2aWdhdGlvbkRyYXdlciB9IGZyb20gXCJ2dWV0aWZ5L2xpYlwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICB1cGxvYWRQYW5lbCxcbiAgICBtb2RlbFBhbmVsLFxuICAgIGNzc1BhbmVsU2VsZWN0b3IsXG4gICAgY3NzUGFuZWxDb2xvcixcbiAgICBjc3NQYW5lbFJhdGlvLFxuICAgIGNzc1BhbmVsVHlwb2dyYXBoeSxcbiAgICBWTmF2aWdhdGlvbkRyYXdlclxuICB9LFxuICBwcm9wczoge1xuICAgIGlzTG9nZ2VkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXlUb29sYmFyOiB0cnVlLFxuICAgICAgb3BlbmVkUGFuZWw6IFwiXCJcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1wic2V0dGluZ3NcIl0pLFxuICAgIGVkaXRDb21tb25MYXlvdXQ6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFkbWluLmVkaXRDb21tb25MYXlvdXQ7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImVkaXRDb21tb25MYXlvdXRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZWRpdExheW91dDoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYWRtaW4uZWRpdExheW91dDtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiZWRpdExheW91dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdHlsZVNldDoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHlsZVNldDtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic3R5bGVTZXRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVTZXQodGhpcy5zdHlsZVNldCk7XG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic3R5bGVTZXRMb2FkZWRcIiwgdHJ1ZSk7XG4gICAgdGhpcy50cmlnZ2VyTmV3U3R5bGUoKTtcbiAgICB0aGlzLmdldEFsbFN0eWxlU2V0KCk7XG5cbiAgICBpZiAodGhpcy5kaXNwbGF5VG9vbGJhcikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZi12dWUtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJ0b29sYmFyLW9wZW5cIik7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJ0cmlnZ2VyTmV3U3R5bGVcIiwgXCJhZGRBbGVydFwiLCBcImF3YWl0Q29uZmlybWF0aW9uXCJdKSxcbiAgICBvcGVuUGFuZWwobmFtZSkge1xuICAgICAgaWYgKG5hbWUgPT09IHRoaXMub3BlbmVkUGFuZWwpIHtcbiAgICAgICAgdGhpcy5vcGVuZWRQYW5lbCA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5lZFBhbmVsID0gbmFtZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWRpdENvbW1vbkxheW91dCA9IGZhbHNlO1xuICAgICAgdGhpcy5lZGl0TGF5b3V0ID0gZmFsc2U7XG4gICAgfSxcbiAgICBnZXRBbGxTdHlsZVNldCgpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvc2V0dGluZ2FwaS9zdHlsZXNldC9hbGxcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuc3R5bGVTZXRDb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRPcGVuUGFuZWwodHlwZSkge1xuICAgICAgaWYgKHRoaXMub3BlblBhbmVsID09PSB0eXBlKSB7XG4gICAgICAgIHRoaXMub3BlblBhbmVsID0gXCJcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuUGFuZWwgPSB0eXBlO1xuICAgIH0sXG4gICAgdG9nZ2xlQmFyKCkge1xuICAgICAgaWYgKHRoaXMuZGlzcGxheVRvb2xiYXIpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5VG9vbGJhciA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3JmLXZ1ZS1jb250YWluZXJcIilcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInRvb2xiYXItb3BlblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVRvb2xiYXIgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3JmLXZ1ZS1jb250YWluZXJcIilcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInRvb2xiYXItb3BlblwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGRlbGV0ZVN0eWxlU2V0KCkge1xuICAgICAgYXdhaXQgdGhpcy5hd2FpdENvbmZpcm1hdGlvbih7XG4gICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHN0eWxlIHNldCA/XCIsXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiXG4gICAgICB9KTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5kZWxldGUoYC9zZXR0aW5nYXBpLyR7dGhpcy5zdHlsZVNldC5pZH1gKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHRleHQ6IFwiVGhpcyBzdHlsZSBzZXQgIHdhcyBkZWxldGVkXCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuZ2V0QWxsU3R5bGVTZXQoKTtcbiAgICAgICAgICB0aGlzLmFwcGx5U3R5bGVTZXQodGhpcy5zdHlsZVNldENvbGxlY3Rpb25bMF0pO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX2FkbWluLWZvcm0tZXh0LXN1Ym1pdFwiKS5jbGljaygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGVycm9yc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNhdmVOZXdTdHlsZVNldCgpIHtcbiAgICAgIGNvbnN0IGlkID0gbmFub2lkKCk7XG4gICAgICBjb25zdCBwcmV2aW91c0lEID0gdGhpcy5zdHlsZVNldC5pZDtcbiAgICAgIHRoaXMuc3R5bGVTZXQuaWQgPSBpZDtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL3NldHRpbmdhcGkvc3R5bGVzZXRcIiwgdGhpcy5zdHlsZVNldClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLnN0eWxlU2V0LnNldE5hbWV9IHNhdmVkIHN1Y2Nlc3NmdWxseWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9hZG1pbi1mb3JtLWV4dC1zdWJtaXRcIikuY2xpY2soKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICB0ZXh0OiBgUmVxdWVzdCBmYWlsZWQuICBSZXR1cm5lZCBzdGF0dXMgb2YgJHtlcnJvcnN9YFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaWQgPSBwcmV2aW91c0lEO1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0QWxsU3R5bGVTZXQoKTtcbiAgICB9LFxuICAgIGFzeW5jIHNhdmVTdHlsZVNldCgpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXdhaXRDb25maXJtYXRpb24oe1xuICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVyd3JpdGUgdGhpcyBzdHlsZSBzZXQgP1wiLFxuICAgICAgICB0eXBlOiBcIndhcm5pbmdcIlxuICAgICAgfSk7XG4gICAgICBheGlvc1xuICAgICAgICAucHV0KFwiL3NldHRpbmdhcGkvc3R5bGVzZXQvXCIgKyB0aGlzLnN0eWxlU2V0LmlkLCB0aGlzLnN0eWxlU2V0KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHRleHQ6IFwiU3R5bGUgU2V0IHNhdmVkIHN1Y2Nlc3NmdWxseVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5nZXRBbGxTdHlsZVNldCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlSW5kZXgoXCJjc3NQYW5lbEluZGV4XCIpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX2FkbWluLWZvcm0tZXh0LXN1Ym1pdFwiKS5jbGljaygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yc31gXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXBwbHlTdHlsZVNldChzdHlsZVNldCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc3R5bGVTZXQgPSBzdHlsZVNldDtcblxuICAgICAgY29uc3QgY29sb3JTZXQgPSBuZXcgZ2VuZXJhdGVDb2xvclNldChzdHlsZVNldC5kb21pbmFudCk7XG5cbiAgICAgIGNvbG9yU2V0LmdlbmVyYXRlKFxuICAgICAgICBzdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcbiAgICAgICAgcGFyc2VJbnQoc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImxvYWRlZFwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImNvbG9yU2V0XCIsIGNvbG9yU2V0KTtcblxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic3R5bGVTZXRcIiwgc3R5bGVTZXQpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNhdmVEYXRhQW5kU3RydWN0dXJlKCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnB1dChcIi9zZXR0aW5nYXBpL1wiLCB0aGlzLnNldHRpbmdzKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhZGRBbGVydFwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHRleHQ6IGBUaGUgbGF5b3V0IGhhdmUgYmVlbiB1cGRhdGVkYFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkZEFsZXJ0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGBUaGVyZSB3YXMgYSBwcm9ibGVtIDogJHtlcnJvcnN9YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiaXNMb2dnZWRcIiwgdGhpcy5pc0xvZ2dlZCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4jcmYtbG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50b29sYmFyLWNvbnRhaW5lciAvZGVlcC8gLnYtdG9vbGJhcl9fY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5zdWJwYW5lbHMge1xuICB3aWR0aDogNTBweDtcbn1cbi50b29sYmFyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDUwJTtcbn1cbi50b29sYmFyLXNlY3Rpb24tdGl0bGUge1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc3VicGFuZWxzLl9fb3BlbiB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiNyZi10b29sYmFyIHtcbiAgJi5taW5pIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogI2FhYSAwIDAgNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuLnRvb2xiYXItc2F2ZS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlciB7XG4gICYub3BlbmVkIHtcbiAgICB0b3A6IDQ4cHg7XG4gIH1cbiAgdG9wOiAtMTA1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDAwO1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBlYXNlO1xuICBib3gtc2hhZG93OiAjZGRkIDAgNXB4IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNyZi1sb2dvW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9vbGJhci1jb250YWluZXJbZGF0YS12LTY3MTM0MmM2XSAudi10b29sYmFyX19jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnN1YnBhbmVsc1tkYXRhLXYtNjcxMzQyYzZdIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4udG9vbGJhci1zZWN0aW9uW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogNTAlO1xcbn1cXG4udG9vbGJhci1zZWN0aW9uLXRpdGxlW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgdG9wOiAtMTVweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zdWJwYW5lbHMuX19vcGVuW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG4jcmYtdG9vbGJhci5taW5pW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuI3JmLXRvb2xiYXJbZGF0YS12LTY3MTM0MmM2XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6ICNhYWEgMCAwIDVweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcbi50b29sYmFyLXNhdmUtYnV0dG9uW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXIub3BlbmVkW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgICB0b3A6IDQ4cHg7XFxufVxcbi5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyW2RhdGEtdi02NzEzNDJjNl0ge1xcbiAgdG9wOiAtMTA1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwMDA7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2U7XFxuICBib3gtc2hhZG93OiAjZGRkIDAgNXB4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL0FwcC9VaS9Db21wb25lbnRzL2FkbWluVG9vbEJhci52dWVcIixcIjxubyBzb3VyY2U+XCIsXCJ3ZWJwYWNrOi8vLi9hZG1pblRvb2xCYXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErUUE7RUFDQSxZQUFBO0FBQ0E7QUFDQTtFQUNBLGVBQUE7QUFDQTtBQUNBO0VBQ0EsV0FBQTtBQUNBO0FBQ0E7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNBO0FBQ0E7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNBO0FBQ0E7RUFDQSxZQUFBO0FBQ0E7QUFFQTtJQUNBLFdBQUE7QUFDQTtBQzdTQTtFRDhTQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBRUNBO0FGQ0E7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0E7QUFFQTtJQUNBLFNBQUE7QUFDQTtBQy9UQTtFRGdVQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBsYW5nPVxcXCJwdWdcXFwiPlxcbiAgICAudG9vbGJhci1jb250YWluZXJcXG4gICAgICAgICNyZi10b29sYmFyXFxuICAgICAgICAgICAgaW1nKHNyYz1cXFwiL3B1YmxpYy9zdmcvcmZsb2dvLnN2Z1xcXCIgaWQ9XFxcInJmLWxvZ29cXFwiIEBjbGljaz1cXFwidG9nZ2xlQmFyKClcXFwiKVxcbiAgICAgICAgICAgIC50b29sYmFyLXNlY3Rpb24odi1pZj1cXFwiZGlzcGxheVRvb2xiYXJcXFwiIGlkPVxcXCJyZi10b29sYmFyLS1kZXNpZ25cXFwiKVxcbiAgICAgICAgICAgICAgICAudG9vbGJhci1zZWN0aW9uLXRpdGxlIERlc2lnblxcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgnY3NzJylcXFwiIGRhcmsgOm91dGxpbmVkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ2NzcydcXFwiIDpkZXByZXNzZWQ9XFxcIm9wZW5lZFBhbmVsID09PSAnY3NzJ1xcXCIgY2xhc3M9XFxcIm1sLTJcXFwiIHgtc21hbGwpIENTU1xcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgndHlwb2dyYXBoeScpXFxcIiBkYXJrIDpvdXRsaW5lZD1cXFwib3BlbmVkUGFuZWwgIT09ICd0eXBvZ3JhcGh5J1xcXCIgOmRlcHJlc3NlZD1cXFwib3BlbmVkUGFuZWwgPT09ICd0eXBvZ3JhcGh5J1xcXCIgY2xhc3M9XFxcIm1sLTJcXFwiIHgtc21hbGwpIFR5cG9ncmFwaHlcXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVxcXCJvcGVuUGFuZWwoJ2NvbG9ycycpXFxcIiA6ZGFyaz1cXFwiIWVkaXRMYXlvdXRcXFwiIDpvdXRsaW5lZD1cXFwiIWVkaXRMYXlvdXRcXFwiIDpkZXByZXNzZWQ9XFxcImVkaXRMYXlvdXRcXFwiIGNsYXNzPVxcXCJtbC0yXFxcIiB4LXNtYWxsKSBDb2xvcnNcXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVxcXCJvcGVuUGFuZWwoJ3JhdGlvJylcXFwiIGRhcmsgOm91dGxpbmVkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ3JhdGlvJ1xcXCIgOmRlcHJlc3NlZD1cXFwib3BlbmVkUGFuZWwgPT09ICdyYXRpbydcXFwiIGNsYXNzPVxcXCJtbC0yXFxcIiB4LXNtYWxsKSBSYXRpbyAmIHNpemVzXFxuICAgICAgICAgICAgICAgIC50b29sYmFyLXNhdmUtYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcInNhdmVTdHlsZVNldFxcXCIgZGF0YS1qZXN0PVxcXCJhZGQtY29tbW9uLXJvd1xcXCIgc21hbGwgY2xhc3M9XFxcIm1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblxcXCIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pY29uKGNvbG9yPVxcXCJ3aGl0ZVxcXCIpIG1kaS1jb250ZW50LXNhdmVcXG4gICAgICAgICAgICAgICAgICAgIHYtYnRuKCBkYXRhLWplc3Q9XFxcImFkZC1jb21tb24tcm93XFxcIiBzbWFsbCBjbGFzcz1cXFwibWwtMiB0b29sYmFyLXNhdmUtYnV0dG9uXFxcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XFxcIndoaXRlXFxcIikgbWRpLWNvZy1vdXRsaW5lXFxuICAgICAgICAgICAgLnRvb2xiYXItc2VjdGlvbih2LWlmPVxcXCJkaXNwbGF5VG9vbGJhclxcXCIgaWQ9XFxcInJmLXRvb2xiYXItLXN0cnVjdHVyZVxcXCIpXFxuICAgICAgICAgICAgICAgIC50b29sYmFyLXNlY3Rpb24tdGl0bGUgRGF0YSAmIFN0cnVjdHVyZVxcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgndXBsb2FkJylcXFwiIDpkYXJrPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ3VwbG9hZCdcXFwiIDpvdXRsaW5lZD1cXFwib3BlbmVkUGFuZWwgIT09ICd1cGxvYWQnXFxcIiA6ZGVwcmVzc2VkPVxcXCJvcGVuZWRQYW5lbCAhPT0gJ3VwbG9hZCdcXFwiIGNsYXNzPVxcXCJtbC0yXFxcIiB4LXNtYWxsKSBVcGxvYWRzXFxuICAgICAgICAgICAgICAgIHYtYnRuKEBjbGljaz1cXFwiZWRpdENvbW1vbkxheW91dCA9ICFlZGl0Q29tbW9uTGF5b3V0O2VkaXRMYXlvdXQgPSBmYWxzZTtvcGVuZWRQYW5lbD0nJ1xcXCIgZGFyayA6b3V0bGluZWQ9XFxcIiFlZGl0Q29tbW9uTGF5b3V0XFxcIiA6ZGVwcmVzc2VkPVxcXCJlZGl0Q29tbW9uTGF5b3V0XFxcIiBjbGFzcz1cXFwibWwtMlxcXCIgeC1zbWFsbD10cnVlKSBMYXlvdXRcXG4gICAgICAgICAgICAgICAgdi1idG4oQGNsaWNrPVxcXCJvcGVuUGFuZWwoJ21vZGVscycpXFxcIiBkYXJrIDpvdXRsaW5lZD1cXFwib3BlbmVkUGFuZWwgIT09ICdtb2RlbHMnXFxcIiA6ZGVwcmVzc2VkPVxcXCJvcGVuZWRQYW5lbCA9PT0gJ21vZGVscydcXFwiIGNsYXNzPVxcXCJtbC0yXFxcIiB4LXNtYWxsPXRydWUpIE1vZGVsc1xcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcIm9wZW5QYW5lbCgndXNlcnMnKVxcXCIgZGFyayA6b3V0bGluZWQ9XFxcIm9wZW5lZFBhbmVsICE9PSAnY3NzJ1xcXCIgOmRlcHJlc3NlZD1cXFwib3BlbmVkUGFuZWwgIT09ICdjc3MnXFxcIiBjbGFzcz1cXFwibWwtMlxcXCIgeC1zbWFsbD10cnVlKSBVc2Vyc1xcbiAgICAgICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcInNhdmVEYXRhQW5kU3RydWN0dXJlXFxcIiBkYXRhLWplc3Q9XFxcImFkZC1jb21tb24tcm93XFxcIiBzbWFsbCBjbGFzcz1cXFwicmYtY29tbW9uLWxheW91dC0tc2F2ZVxcXCIgY2xhc3M9XFxcIm1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblxcXCIpXFxuICAgICAgICAgICAgICAgICAgICB2LWljb24oY29sb3I9XFxcIndoaXRlXFxcIikgbWRpLWNvbnRlbnQtc2F2ZVxcbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcig6dmFsdWU9XFxcIm9wZW5lZFBhbmVsID09PSAnY3NzJ1xcXCIgZml4ZWQ9dHJ1ZSB3aWR0aD1cXFwiNDUwXFxcIiByaWdodD10cnVlKVxcbiAgICAgICAgICAgIGNzcy1wYW5lbC1zZWxlY3RvclxcbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcig6dmFsdWU9XFxcIm9wZW5lZFBhbmVsID09PSAncmF0aW8nXFxcIiBmaXhlZD10cnVlIHdpZHRoPVxcXCI0NTBcXFwiIHJpZ2h0PXRydWUpXFxuICAgICAgICAgICAgY3NzLXBhbmVsLXJhdGlvXFxuICAgICAgICB2LW5hdmlnYXRpb24tZHJhd2VyKDp2YWx1ZT1cXFwib3BlbmVkUGFuZWwgPT09ICdjb2xvcnMnXFxcIiBmaXhlZD10cnVlIHdpZHRoPVxcXCJhdXRvXFxcIiByaWdodD10cnVlKVxcbiAgICAgICAgICAgIGNzcy1wYW5lbC1jb2xvclxcbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcig6dmFsdWU9XFxcIm9wZW5lZFBhbmVsID09PSAndXBsb2FkJ1xcXCIgcmlnaHQ9dHJ1ZSBmaXhlZD10cnVlIHdpZHRoPVxcXCIzMDBcXFwiKVxcbiAgICAgICAgICAgIHVwbG9hZC1wYW5lbFxcblxcbiAgICAgICAgdi1uYXZpZ2F0aW9uLWRyYXdlcihjbGFzcz1cXFwicmYtdmVydGljYWwtcGFuZWwgLS1zdHJ1Y3R1cmVcXFwiIDp2YWx1ZT1cXFwib3BlbmVkUGFuZWwgPT09ICdtb2RlbHMnXFxcIiByaWdodD10cnVlIGZpeGVkPXRydWUgd2lkdGg9XFxcIjQwMFxcXCIgaGlkZS1vdmVybGF5KVxcbiAgICAgICAgICAgIG1vZGVsLXBhbmVsKClcXG4gICAgICAgICAgICB2LWJ0bihAY2xpY2s9XFxcInNhdmVEYXRhQW5kU3RydWN0dXJlXFxcIiBzbWFsbCBjbGFzcz1cXFwicmYtc2V0dGluZ3MtLXNhdmUtYnV0dG9uX3N0cnVjdHVyZSBmbG9hdC1yaWdodCBtci02XFxcIilcXG4gICAgICAgICAgICAgICAgdi1pY29uKGNvbG9yPVxcXCJ3aGl0ZVxcXCIpIG1kaS1jb250ZW50LXNhdmVcXG4gICAgICAgIC5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyKDpjbGFzcz1cXFwie29wZW5lZCA6b3BlbmVkUGFuZWwgPT09ICd0eXBvZ3JhcGh5J31cXFwiKVxcbiAgICAgICAgICAgIGNzcy1wYW5lbC10eXBvZ3JhcGh5XFxuICAgICAgICAuaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlciggdi1pZj1cXFwiZmFsc2VcXFwiIDpjbGFzcz1cXFwie29wZW5lZCA6b3BlbmVkUGFuZWwgPT09ICdkZXNpZ25TZXR0aW5ncyd9XFxcIilcXG4gICAgICAgICAgICB2LXNlbGVjdChvdXRsaW5lZCA6aXRlbXM9XFxcInN0eWxlU2V0Q29sbGVjdGlvblxcXCIgdi1tb2RlbD1cXFwic2VsZWN0ZWRTdHlsZVNldFxcXCIgaXRlbS12YWx1ZT1cXFwiaWRcXFwiIGl0ZW0tdGV4dD1cXFwic2V0TmFtZVxcXCIgbGFiZWw9XFxcIlN0eWxlIFNldFxcXCIgQGNoYW5nZT1cXFwidXBkYXRlU3R5bGVTZXQoKVxcXCIgcmV0dXJuLW9iamVjdD10cnVlKVxcbiAgICAgICAgICAgIHYtYnRuKHRleHQ9dHJ1ZSBjbGFzcz1cXFwiX2NvbnRhaW5lclxcXCIgIHYtaWY9XFxcInN0eWxlU2V0LmlkICE9PSAnZGVmYXVsdCdcXFwiIEBjbGljay5wcmV2ZW50PVxcXCJzYXZlU3R5bGVTZXQoKVxcXCIpIFNhdmVcXG4gICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImNzcy1wYW5lbF9faW5wdXRcXFwiIGxhYmVsPVxcXCJDb25maWcgbmFtZVxcXCIgbmFtZT1cXFwic2V0TmFtZVxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQuc2V0TmFtZVxcXCIpXFxuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIEBjbGljay5wcmV2ZW50PVxcXCJzYXZlTmV3U3R5bGVTZXQoKVxcXCIpIFNhdmUgYSBuZXcgU3R5bGUgU2V0XFxuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIGNsYXNzPVxcXCJfY29udGFpbmVyXFxcIiAgQGNsaWNrLnByZXZlbnQ9XFxcImRlbGV0ZVN0eWxlU2V0KClcXFwiICB2LWlmPVxcXCJzdHlsZVNldC5pZCAhPT0gJ2RlZmF1bHQnXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiKSBEZWxldGUgU3R5bGUgU2V0XFxuXFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tIFxcXCJheGlvc1xcXCI7XFxuXFxuY29uc3QgbW9kZWxQYW5lbCA9ICgpID0+IGltcG9ydChcXFwiLi9tb2RlbFBhbmVsLnZ1ZVxcXCIpO1xcbmNvbnN0IGNzc1BhbmVsU2VsZWN0b3IgPSAoKSA9PiBpbXBvcnQoXFxcIi4vY3NzUGFuZWxTZWxlY3Rvci52dWVcXFwiKTtcXG5jb25zdCBjc3NQYW5lbFJhdGlvID0gKCkgPT4gaW1wb3J0KFxcXCIuL2Nzc1BhbmVsUmF0aW8udnVlXFxcIik7XFxuY29uc3QgY3NzUGFuZWxDb2xvciA9ICgpID0+IGltcG9ydChcXFwiLi9jc3NQYW5lbENvbG9yLnZ1ZVxcXCIpO1xcbmNvbnN0IHVwbG9hZFBhbmVsID0gKCkgPT4gaW1wb3J0KFxcXCIuL3VwbG9hZFBhbmVsLnZ1ZVxcXCIpO1xcbmNvbnN0IGNzc1BhbmVsVHlwb2dyYXBoeSA9ICgpID0+IGltcG9ydChcXFwiLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlXFxcIik7XFxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcXFwibmFub2lkXFxcIjtcXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbG9yU2V0IH0gZnJvbSBcXFwiLi4vY29sb3JHZW5lcmF0b3JcXFwiO1xcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5pbXBvcnQgeyBWTmF2aWdhdGlvbkRyYXdlciB9IGZyb20gXFxcInZ1ZXRpZnkvbGliXFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7XFxuICAgIHVwbG9hZFBhbmVsLFxcbiAgICBtb2RlbFBhbmVsLFxcbiAgICBjc3NQYW5lbFNlbGVjdG9yLFxcbiAgICBjc3NQYW5lbENvbG9yLFxcbiAgICBjc3NQYW5lbFJhdGlvLFxcbiAgICBjc3NQYW5lbFR5cG9ncmFwaHksXFxuICAgIFZOYXZpZ2F0aW9uRHJhd2VyXFxuICB9LFxcbiAgcHJvcHM6IHtcXG4gICAgaXNMb2dnZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfVxcbiAgfSxcXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRpc3BsYXlUb29sYmFyOiB0cnVlLFxcbiAgICAgIG9wZW5lZFBhbmVsOiBcXFwiXFxcIlxcbiAgICB9O1xcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcEdldHRlcnMoW1xcXCJzZXR0aW5nc1xcXCJdKSxcXG4gICAgZWRpdENvbW1vbkxheW91dDoge1xcbiAgICAgIGdldCgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hZG1pbi5lZGl0Q29tbW9uTGF5b3V0O1xcbiAgICAgIH0sXFxuICAgICAgc2V0KHZhbHVlKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImVkaXRDb21tb25MYXlvdXRcXFwiLCB2YWx1ZSk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBlZGl0TGF5b3V0OiB7XFxuICAgICAgZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFkbWluLmVkaXRMYXlvdXQ7XFxuICAgICAgfSxcXG4gICAgICBzZXQodmFsdWUpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwiZWRpdExheW91dFxcXCIsIHZhbHVlKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIHN0eWxlU2V0OiB7XFxuICAgICAgZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3R5bGVTZXQ7XFxuICAgICAgfSxcXG4gICAgICBzZXQodmFsdWUpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwic3R5bGVTZXRcXFwiLCB2YWx1ZSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LFxcbiAgbW91bnRlZCgpIHtcXG4gICAgdGhpcy5hcHBseVN0eWxlU2V0KHRoaXMuc3R5bGVTZXQpO1xcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcInN0eWxlU2V0TG9hZGVkXFxcIiwgdHJ1ZSk7XFxuICAgIHRoaXMudHJpZ2dlck5ld1N0eWxlKCk7XFxuICAgIHRoaXMuZ2V0QWxsU3R5bGVTZXQoKTtcXG5cXG4gICAgaWYgKHRoaXMuZGlzcGxheVRvb2xiYXIpIHtcXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxcXCIjcmYtdnVlLWNvbnRhaW5lclxcXCIpLmNsYXNzTGlzdC5hZGQoXFxcInRvb2xiYXItb3BlblxcXCIpO1xcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKFtcXFwidHJpZ2dlck5ld1N0eWxlXFxcIiwgXFxcImFkZEFsZXJ0XFxcIiwgXFxcImF3YWl0Q29uZmlybWF0aW9uXFxcIl0pLFxcbiAgICBvcGVuUGFuZWwobmFtZSkge1xcbiAgICAgIGlmIChuYW1lID09PSB0aGlzLm9wZW5lZFBhbmVsKSB7XFxuICAgICAgICB0aGlzLm9wZW5lZFBhbmVsID0gXFxcIlxcXCI7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMub3BlbmVkUGFuZWwgPSBuYW1lO1xcbiAgICAgIH1cXG4gICAgICB0aGlzLmVkaXRDb21tb25MYXlvdXQgPSBmYWxzZTtcXG4gICAgICB0aGlzLmVkaXRMYXlvdXQgPSBmYWxzZTtcXG4gICAgfSxcXG4gICAgZ2V0QWxsU3R5bGVTZXQoKSB7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5nZXQoXFxcIi9zZXR0aW5nYXBpL3N0eWxlc2V0L2FsbFxcXCIpXFxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXRDb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwiZXJyb3JcXFwiLFxcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yfWBcXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG4gICAgc2V0T3BlblBhbmVsKHR5cGUpIHtcXG4gICAgICBpZiAodGhpcy5vcGVuUGFuZWwgPT09IHR5cGUpIHtcXG4gICAgICAgIHRoaXMub3BlblBhbmVsID0gXFxcIlxcXCI7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcbiAgICAgIHRoaXMub3BlblBhbmVsID0gdHlwZTtcXG4gICAgfSxcXG4gICAgdG9nZ2xlQmFyKCkge1xcbiAgICAgIGlmICh0aGlzLmRpc3BsYXlUb29sYmFyKSB7XFxuICAgICAgICB0aGlzLmRpc3BsYXlUb29sYmFyID0gZmFsc2U7XFxuICAgICAgICBkb2N1bWVudFxcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcXFwiI3JmLXZ1ZS1jb250YWluZXJcXFwiKVxcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcXFwidG9vbGJhci1vcGVuXFxcIik7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMuZGlzcGxheVRvb2xiYXIgPSB0cnVlO1xcbiAgICAgICAgZG9jdW1lbnRcXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXFxcIiNyZi12dWUtY29udGFpbmVyXFxcIilcXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXFxcInRvb2xiYXItb3BlblxcXCIpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgYXN5bmMgZGVsZXRlU3R5bGVTZXQoKSB7XFxuICAgICAgYXdhaXQgdGhpcy5hd2FpdENvbmZpcm1hdGlvbih7XFxuICAgICAgICB0ZXh0OiBcXFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHN0eWxlIHNldCA/XFxcIixcXG4gICAgICAgIHR5cGU6IFxcXCJ3YXJuaW5nXFxcIlxcbiAgICAgIH0pO1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAuZGVsZXRlKGAvc2V0dGluZ2FwaS8ke3RoaXMuc3R5bGVTZXQuaWR9YClcXG4gICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XFxuICAgICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIHRleHQ6IFxcXCJUaGlzIHN0eWxlIHNldCAgd2FzIGRlbGV0ZWRcXFwiXFxuICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICB0aGlzLmdldEFsbFN0eWxlU2V0KCk7XFxuICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZVNldCh0aGlzLnN0eWxlU2V0Q29sbGVjdGlvblswXSk7XFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJfYWRtaW4tZm9ybS1leHQtc3VibWl0XFxcIikuY2xpY2soKTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcXG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XFxuICAgICAgICAgICAgdHlwZTogXFxcImVycm9yXFxcIixcXG4gICAgICAgICAgICB0ZXh0OiBlcnJvcnNcXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG4gICAgc2F2ZU5ld1N0eWxlU2V0KCkge1xcbiAgICAgIGNvbnN0IGlkID0gbmFub2lkKCk7XFxuICAgICAgY29uc3QgcHJldmlvdXNJRCA9IHRoaXMuc3R5bGVTZXQuaWQ7XFxuICAgICAgdGhpcy5zdHlsZVNldC5pZCA9IGlkO1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAucG9zdChcXFwiL3NldHRpbmdhcGkvc3R5bGVzZXRcXFwiLCB0aGlzLnN0eWxlU2V0KVxcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcXG4gICAgICAgICAgICB0eXBlOiBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgdGV4dDogYCR7dGhpcy5zdHlsZVNldC5zZXROYW1lfSBzYXZlZCBzdWNjZXNzZnVsbHlgXFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiX2FkbWluLWZvcm0tZXh0LXN1Ym1pdFxcXCIpLmNsaWNrKCk7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XFxuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xcbiAgICAgICAgICAgIHR5cGU6IFxcXCJlcnJvclxcXCIsXFxuICAgICAgICAgICAgdGV4dDogYFJlcXVlc3QgZmFpbGVkLiAgUmV0dXJuZWQgc3RhdHVzIG9mICR7ZXJyb3JzfWBcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaWQgPSBwcmV2aW91c0lEO1xcbiAgICAgICAgfSk7XFxuICAgICAgdGhpcy5nZXRBbGxTdHlsZVNldCgpO1xcbiAgICB9LFxcbiAgICBhc3luYyBzYXZlU3R5bGVTZXQoKSB7XFxuICAgICAgYXdhaXQgdGhpcy5hd2FpdENvbmZpcm1hdGlvbih7XFxuICAgICAgICB0ZXh0OiBcXFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG92ZXJ3cml0ZSB0aGlzIHN0eWxlIHNldCA/XFxcIixcXG4gICAgICAgIHR5cGU6IFxcXCJ3YXJuaW5nXFxcIlxcbiAgICAgIH0pO1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAucHV0KFxcXCIvc2V0dGluZ2FwaS9zdHlsZXNldC9cXFwiICsgdGhpcy5zdHlsZVNldC5pZCwgdGhpcy5zdHlsZVNldClcXG4gICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XFxuICAgICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIHRleHQ6IFxcXCJTdHlsZSBTZXQgc2F2ZWQgc3VjY2Vzc2Z1bGx5XFxcIlxcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgdGhpcy5nZXRBbGxTdHlsZVNldCgpO1xcbiAgICAgICAgICB0aGlzLnRvZ2dsZUluZGV4KFxcXCJjc3NQYW5lbEluZGV4XFxcIik7XFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJfYWRtaW4tZm9ybS1leHQtc3VibWl0XFxcIikuY2xpY2soKTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcXG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XFxuICAgICAgICAgICAgdHlwZTogXFxcImVycm9yXFxcIixcXG4gICAgICAgICAgICB0ZXh0OiBgUmVxdWVzdCBmYWlsZWQuICBSZXR1cm5lZCBzdGF0dXMgb2YgJHtlcnJvcnN9YFxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbiAgICBhcHBseVN0eWxlU2V0KHN0eWxlU2V0LCBjYWxsYmFjaykge1xcbiAgICAgIHRoaXMuc3R5bGVTZXQgPSBzdHlsZVNldDtcXG5cXG4gICAgICBjb25zdCBjb2xvclNldCA9IG5ldyBnZW5lcmF0ZUNvbG9yU2V0KHN0eWxlU2V0LmRvbWluYW50KTtcXG5cXG4gICAgICBjb2xvclNldC5nZW5lcmF0ZShcXG4gICAgICAgIHN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcXG4gICAgICApO1xcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwibG9hZGVkXFxcIiwgdHJ1ZSk7XFxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJjb2xvclNldFxcXCIsIGNvbG9yU2V0KTtcXG5cXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcInN0eWxlU2V0XFxcIiwgc3R5bGVTZXQpO1xcbiAgICAgIGlmIChjYWxsYmFjaykge1xcbiAgICAgICAgY2FsbGJhY2soKTtcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIHNhdmVEYXRhQW5kU3RydWN0dXJlKCkge1xcbiAgICAgIGF4aW9zXFxuICAgICAgICAucHV0KFxcXCIvc2V0dGluZ2FwaS9cXFwiLCB0aGlzLnNldHRpbmdzKVxcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcXFwiYWRkQWxlcnRcXFwiLCB7XFxuICAgICAgICAgICAgdHlwZTogXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIHRleHQ6IGBUaGUgbGF5b3V0IGhhdmUgYmVlbiB1cGRhdGVkYFxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcXG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXFxcImFkZEFsZXJ0XFxcIiwge1xcbiAgICAgICAgICAgIHR5cGU6IFxcXCJlcnJvclxcXCIsXFxuICAgICAgICAgICAgdGV4dDogYFRoZXJlIHdhcyBhIHByb2JsZW0gOiAke2Vycm9yc31gXFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgfSk7XFxuICAgIH1cXG4gIH0sXFxuICBjcmVhdGVkKCkge1xcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImlzTG9nZ2VkXFxcIiwgdGhpcy5pc0xvZ2dlZCk7XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbiNyZi1sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRvb2xiYXItY29udGFpbmVyIC9kZWVwLyAudi10b29sYmFyX19jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnN1YnBhbmVscyB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLnRvb2xiYXItc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiA1MCU7XFxufVxcbi50b29sYmFyLXNlY3Rpb24tdGl0bGUge1xcbiAgdG9wOiAtMTVweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zdWJwYW5lbHMuX19vcGVuIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuI3JmLXRvb2xiYXIge1xcbiAgJi5taW5pIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6ICNhYWEgMCAwIDVweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcbi50b29sYmFyLXNhdmUtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyIHtcXG4gICYub3BlbmVkIHtcXG4gICAgdG9wOiA0OHB4O1xcbiAgfVxcbiAgdG9wOiAtMTA1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwMDA7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2U7XFxuICBib3gtc2hhZG93OiAjZGRkIDAgNXB4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbjwvc3R5bGU+XFxuXCIsbnVsbCxcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiNyZi1sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRvb2xiYXItY29udGFpbmVyIC9kZWVwLyAudi10b29sYmFyX19jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnN1YnBhbmVscyB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLnRvb2xiYXItc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiA1MCU7XFxufVxcbi50b29sYmFyLXNlY3Rpb24tdGl0bGUge1xcbiAgdG9wOiAtMTVweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zdWJwYW5lbHMuX19vcGVuIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuI3JmLXRvb2xiYXIubWluaSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcbiNyZi10b29sYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogI2FhYSAwIDAgNXB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuLnRvb2xiYXItc2F2ZS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXIub3BlbmVkIHtcXG4gICAgdG9wOiA0OHB4O1xcbiAgfVxcbi5ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJhd2VyIHtcXG4gIHRvcDogLTEwNXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMDAwO1xcbiAgbGVmdDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBlYXNlO1xcbiAgYm94LXNoYWRvdzogI2RkZCAwIDVweCA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3MTM0MmM2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkbWluVG9vbEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzEzNDJjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3MTM0MmM2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzEzNDJjNiZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FkbWluVG9vbEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzEzNDJjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjcxMzQyYzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzEzNDJjNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzEzNDJjNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzEzNDJjNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzEzNDJjNiZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzEzNDJjNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvYWRtaW5Ub29sQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hZG1pblRvb2xCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRtaW5Ub29sQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXItY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInJmLXRvb2xiYXJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvcHVibGljL3N2Zy9yZmxvZ28uc3ZnXCIsIGlkOiBcInJmLWxvZ29cIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlQmFyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uZGlzcGxheVRvb2xiYXJcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1zZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicmYtdG9vbGJhci0tZGVzaWduXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyLXNlY3Rpb24tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEZXNpZ25cIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJjc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJjc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwiY3NzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNTU1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcInR5cG9ncmFwaHlcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJ0eXBvZ3JhcGh5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ4LXNtYWxsXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5QYW5lbChcInR5cG9ncmFwaHlcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVHlwb2dyYXBoeVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFyazogIV92bS5lZGl0TGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiAhX3ZtLmVkaXRMYXlvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgZGVwcmVzc2VkOiBfdm0uZWRpdExheW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwiY29sb3JzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbG9yc1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogX3ZtLm9wZW5lZFBhbmVsICE9PSBcInJhdGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGVwcmVzc2VkOiBfdm0ub3BlbmVkUGFuZWwgPT09IFwicmF0aW9cIixcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwicmF0aW9cIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmF0aW8gJiBzaXplc1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1zYXZlLWJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yIHRvb2xiYXItc2F2ZS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwiYWRkLWNvbW1vbi1yb3dcIiwgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZVN0eWxlU2V0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwid2hpdGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNvbnRlbnQtc2F2ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJhZGQtY29tbW9uLXJvd1wiLCBzbWFsbDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1kaS1jb2ctb3V0bGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uZGlzcGxheVRvb2xiYXJcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1zZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicmYtdG9vbGJhci0tc3RydWN0dXJlXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyLXNlY3Rpb24tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEYXRhICYgU3RydWN0dXJlXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBfdm0ub3BlbmVkUGFuZWwgIT09IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwidXBsb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVwbG9hZHNcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6ICFfdm0uZWRpdENvbW1vbkxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5lZGl0Q29tbW9uTGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICAgIFwieC1zbWFsbFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRDb21tb25MYXlvdXQgPSAhX3ZtLmVkaXRDb21tb25MYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0TGF5b3V0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuZWRQYW5lbCA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGF5b3V0XCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBfdm0ub3BlbmVkUGFuZWwgIT09IFwibW9kZWxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGVwcmVzc2VkOiBfdm0ub3BlbmVkUGFuZWwgPT09IFwibW9kZWxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ4LXNtYWxsXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5QYW5lbChcIm1vZGVsc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb2RlbHNcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtMlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJjc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZXByZXNzZWQ6IF92bS5vcGVuZWRQYW5lbCAhPT0gXCJjc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIngtc21hbGxcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblBhbmVsKFwidXNlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVXNlcnNcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJyZi1jb21tb24tbGF5b3V0LS1zYXZlIG1sLTIgdG9vbGJhci1zYXZlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtamVzdFwiOiBcImFkZC1jb21tb24tcm93XCIsIHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZURhdGFBbmRTdHJ1Y3R1cmUgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ3aGl0ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1kaS1jb250ZW50LXNhdmVcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJjc3NcIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNDUwXCIsXG4gICAgICAgICAgICByaWdodDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiY3NzLXBhbmVsLXNlbGVjdG9yXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm9wZW5lZFBhbmVsID09PSBcInJhdGlvXCIsXG4gICAgICAgICAgICBmaXhlZDogXCJcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjQ1MFwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImNzcy1wYW5lbC1yYXRpb1wiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJjb2xvcnNcIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImNzcy1wYW5lbC1jb2xvclwiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LW5hdmlnYXRpb24tZHJhd2VyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJ1cGxvYWRcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIzMDBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidXBsb2FkLXBhbmVsXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJmLXZlcnRpY2FsLXBhbmVsIC0tc3RydWN0dXJlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ub3BlbmVkUGFuZWwgPT09IFwibW9kZWxzXCIsXG4gICAgICAgICAgICByaWdodDogXCJcIixcbiAgICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNDAwXCIsXG4gICAgICAgICAgICBcImhpZGUtb3ZlcmxheVwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJtb2RlbC1wYW5lbFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJyZi1zZXR0aW5ncy0tc2F2ZS1idXR0b25fc3RydWN0dXJlIGZsb2F0LXJpZ2h0IG1yLTZcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlRGF0YUFuZFN0cnVjdHVyZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcIndoaXRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNvbnRlbnQtc2F2ZVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvcml6b250YWwtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAgICBjbGFzczogeyBvcGVuZWQ6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJ0eXBvZ3JhcGh5XCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJjc3MtcGFuZWwtdHlwb2dyYXBoeVwiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBmYWxzZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWRyYXdlclwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBvcGVuZWQ6IF92bS5vcGVuZWRQYW5lbCA9PT0gXCJkZXNpZ25TZXR0aW5nc1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uc3R5bGVTZXRDb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwic2V0TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3R5bGUgU2V0XCIsXG4gICAgICAgICAgICAgICAgICBcInJldHVybi1vYmplY3RcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlU3R5bGVTZXQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRTdHlsZVNldCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkU3R5bGVTZXQgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkU3R5bGVTZXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5zdHlsZVNldC5pZCAhPT0gXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJfY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZVN0eWxlU2V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjc3MtcGFuZWxfX2lucHV0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcIkNvbmZpZyBuYW1lXCIsIG5hbWU6IFwic2V0TmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQuc2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0eWxlU2V0LCBcInNldE5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3R5bGVTZXQuc2V0TmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZU5ld1N0eWxlU2V0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmUgYSBuZXcgU3R5bGUgU2V0XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQuaWQgIT09IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiX2NvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIsIHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVN0eWxlU2V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGUgU3R5bGUgU2V0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9