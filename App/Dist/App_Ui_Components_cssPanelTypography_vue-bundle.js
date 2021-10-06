(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_cssPanelTypography_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rougeSettings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rougeSettings.json */ "./rougeSettings.json");
/* harmony import */ var _colorGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colorGenerator */ "./App/Ui/colorGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./App/utils.js");


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





const {
  googleFontKey
} = _rougeSettings_json__WEBPACK_IMPORTED_MODULE_1__;
const webSafeFontsFormatted = _utils__WEBPACK_IMPORTED_MODULE_4__.webSafeFonts.map(item => {
  return {
    family: item
  };
});
const fontTypes = ["fontFamilyMain", "fontFamilyTitle", "fontFamilyAlt"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TypographyPanel",

  data() {
    return {
      fontCollection: [],
      styleSetCollection: [],
      selectedStyleSet: {},
      googleFontCollection: [],
      localFontCollection: [],
      loaded: false
    };
  },

  computed: {
    cssPanelIndex: {
      get() {
        return this.$store.getters.cssPanelIndex;
      },

      set(newValue) {
        this.$store.commit("cssPanelIndex", newValue);
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
  },
  watch: {
    "styleSet.fontOrigin"() {
      this.updateFontCollection();
    }

  },

  mounted() {
    // TODO : replace with axios for consistency
    //Google Fonts
    if (googleFontKey) {
      const request = new XMLHttpRequest();
      request.open("GET", "https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=".concat(googleFontKey));

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            this.googleFontCollection = data.items;
            this.updateFontCollection();
          }
        }
      };

      request.send();
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default().get("/settingapi/fonts").then(response => {
      this.localFontCollection = response.data;
      this.updateFontCollection();
    }).catch(error => {
      this.localFontCollection = [];
      this.addAlert({
        type: "error",
        text: error
      });
    });
  },

  //TODO : organize that thing
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(["triggerNewStyle", "addAlert", "awaitConfirmation"])), {}, {
    applyStyleSet: function applyStyleSet(styleSet, callback) {
      this.styleSet = styleSet;
      const colorSet = new _colorGenerator__WEBPACK_IMPORTED_MODULE_2__.generateColorSet(styleSet.dominant);
      colorSet.generate(styleSet.colorParameterCollection, parseInt(styleSet.variationLightAmt), parseInt(styleSet.variationSatAmt));
      this.$store.commit("loaded", true);
      this.$store.commit("colorSet", colorSet);
      this.$store.commit("styleSet", styleSet);
      this.toggleIndex("cssPanelIndex");

      if (callback) {
        callback();
      }
    },
    updateAllCssFont: function updateAllCssFont() {
      for (let i = 0; i < fontTypes.length; i++) {
        this.updateCssFont(fontTypes[i]);
      }
    },
    updateCssFont: function updateCssFont(fontType) {
      if (this.styleSet[fontType] === "none") {
        return;
      }

      if (fontType === "fontFamilyMain") {
        this.$store.dispatch("updateStyles", {
          selector: "body",
          property: "font-family",
          value: this.styleSet[fontType]
        });
      } else if (fontType === "fontFamilyTitle") {
        const header = "h1, h2, h3, h4, h5, h6";
        this.$store.dispatch("updateStyles", {
          selector: header,
          property: "font-family",
          value: this.styleSet[fontType]
        });
      } else if (fontType === "fontFamilyAlt") {
        this.$store.dispatch("updateStyles", {
          selector: ".__altfont",
          property: "font-family",
          value: this.styleSet[fontType]
        });
      }
    },
    //TODO : remove
    stringify: function stringify(jsonObject) {
      return JSON.stringify(jsonObject);
    },
    updateIndex: function updateIndex() {
      this.cssPanelIndex = this.cssPanelIndex === 1 ? 0 : 1;
    },
    toggleIndex: function toggleIndex(index) {
      this[index] = this[index] === 1 ? 0 : 1;
    },

    updateFontCollection() {
      if (this.styleSet.fontOrigin === "google") {
        this.fontCollection = this.googleFontCollection;
      } else if (this.styleSet.fontOrigin === "local") {
        this.fontCollection = this.localFontCollection;
      }

      this.fontCollection = [...webSafeFontsFormatted, ...this.fontCollection];
    },

    updateStyleSet: function updateStyleSet() {
      this.applyStyleSet(this.selectedStyleSet);
    },
    submit: function submit(event) {
      if (this.styleSet.id !== "default") {
        this.checkSave(event);
      } else {
        this.saveNew(event);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#typography-panel[data-v-06cb740a] .v-input {\n    margin: 0 26px;\n}\n#typography-panel[data-v-06cb740a] {\n  background: #fff;\n  display: flex;\n  padding: 16px 26px;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./App/Ui/Components/cssPanelTypography.vue","<no source>","webpack://./cssPanelTypography.vue"],"names":[],"mappings":";AAoLA;IACA,cAAA;AACA;ACtLA;EDuLA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AECA","sourcesContent":["<template lang=\"pug\">\n    div(id=\"typography-panel\")\n        v-radio-group(dense v-model=\"styleSet.fontOrigin\" hide-details)\n            v-radio(label=\"Google Fonts\" name=\"fontOrigin\" value=\"google\")\n            v-radio(label=\"Local Fonts\" name=\"fontOrigin\" value=\"local\")\n        v-select(outlined hide-details dense v-model=\"styleSet.fontFamilyMain\" label=\"Main Font\" :items=\"fontCollection\" item-text=\"family\" item-value=\"family\"  @change=\"updateCssFont('fontFamilyMain')\")\n        v-select(outlined hide-details dense v-model=\"styleSet.fontFamilyAlt\" label=\"Alternative Font\" item-text=\"family\" item-value=\"family\" :items=\"fontCollection\" @change=\"updateCssFont('fontFamilyAlt')\")\n        v-select(outlined hide-details dense v-model=\"styleSet.fontFamilyTitle\" label=\"Title Font\" item-text=\"family\" item-value=\"family\" :items=\"fontCollection\" @change=\"updateCssFont('fontFamilyTitle')\")\n</template>\n\n<script>\nimport settings from \"../../../rougeSettings.json\";\nimport { generateColorSet } from \"../colorGenerator\";\nimport axios from \"axios\";\nimport { mapActions } from \"vuex\";\nimport { webSafeFonts } from \"../../utils\";\n\nconst { googleFontKey } = settings;\n\nconst webSafeFontsFormatted = webSafeFonts.map(item => {\n  return {\n    family: item\n  };\n});\n\nconst fontTypes = [\"fontFamilyMain\", \"fontFamilyTitle\", \"fontFamilyAlt\"];\n\nexport default {\n  name: \"TypographyPanel\",\n  data() {\n    return {\n      fontCollection: [],\n      styleSetCollection: [],\n      selectedStyleSet: {},\n      googleFontCollection: [],\n      localFontCollection: [],\n      loaded: false\n    };\n  },\n  computed: {\n    cssPanelIndex: {\n      get() {\n        return this.$store.getters.cssPanelIndex;\n      },\n      set(newValue) {\n        this.$store.commit(\"cssPanelIndex\", newValue);\n      }\n    },\n    styleSet: {\n      get() {\n        return this.$store.getters.styleSet;\n      },\n      set(value) {\n        this.$store.commit(\"styleSet\", value);\n      }\n    }\n  },\n  watch: {\n    \"styleSet.fontOrigin\"() {\n      this.updateFontCollection();\n    }\n  },\n  mounted() {\n    // TODO : replace with axios for consistency\n    //Google Fonts\n    if (googleFontKey) {\n      const request = new XMLHttpRequest();\n      request.open(\n        \"GET\",\n        `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${googleFontKey}`\n      );\n      request.onreadystatechange = () => {\n        if (request.readyState === 4) {\n          if (request.status === 200) {\n            const data = JSON.parse(request.responseText);\n            this.googleFontCollection = data.items;\n            this.updateFontCollection();\n          }\n        }\n      };\n      request.send();\n    }\n    axios\n      .get(\"/settingapi/fonts\")\n      .then(response => {\n        this.localFontCollection = response.data;\n        this.updateFontCollection();\n      })\n      .catch(error => {\n        this.localFontCollection = [];\n        this.addAlert({ type: \"error\", text: error });\n      });\n  },\n  //TODO : organize that thing\n  methods: {\n    ...mapActions([\"triggerNewStyle\", \"addAlert\", \"awaitConfirmation\"]),\n    applyStyleSet: function(styleSet, callback) {\n      this.styleSet = styleSet;\n\n      const colorSet = new generateColorSet(styleSet.dominant);\n\n      colorSet.generate(\n        styleSet.colorParameterCollection,\n        parseInt(styleSet.variationLightAmt),\n        parseInt(styleSet.variationSatAmt)\n      );\n      this.$store.commit(\"loaded\", true);\n      this.$store.commit(\"colorSet\", colorSet);\n\n      this.$store.commit(\"styleSet\", styleSet);\n\n      this.toggleIndex(\"cssPanelIndex\");\n      if (callback) {\n        callback();\n      }\n    },\n\n    updateAllCssFont: function() {\n      for (let i = 0; i < fontTypes.length; i++) {\n        this.updateCssFont(fontTypes[i]);\n      }\n    },\n    updateCssFont: function(fontType) {\n      if (this.styleSet[fontType] === \"none\") {\n        return;\n      }\n      if (fontType === \"fontFamilyMain\") {\n        this.$store.dispatch(\"updateStyles\", {\n          selector: \"body\",\n          property: \"font-family\",\n          value: this.styleSet[fontType]\n        });\n      } else if (fontType === \"fontFamilyTitle\") {\n        const header = \"h1, h2, h3, h4, h5, h6\";\n        this.$store.dispatch(\"updateStyles\", {\n          selector: header,\n          property: \"font-family\",\n          value: this.styleSet[fontType]\n        });\n      } else if (fontType === \"fontFamilyAlt\") {\n        this.$store.dispatch(\"updateStyles\", {\n          selector: \".__altfont\",\n          property: \"font-family\",\n          value: this.styleSet[fontType]\n        });\n      }\n    },\n    //TODO : remove\n    stringify: function(jsonObject) {\n      return JSON.stringify(jsonObject);\n    },\n    updateIndex: function() {\n      this.cssPanelIndex = this.cssPanelIndex === 1 ? 0 : 1;\n    },\n    toggleIndex: function(index) {\n      this[index] = this[index] === 1 ? 0 : 1;\n    },\n    updateFontCollection() {\n      if (this.styleSet.fontOrigin === \"google\") {\n        this.fontCollection = this.googleFontCollection;\n      } else if (this.styleSet.fontOrigin === \"local\") {\n        this.fontCollection = this.localFontCollection;\n      }\n      this.fontCollection = [...webSafeFontsFormatted, ...this.fontCollection];\n    },\n    updateStyleSet: function() {\n      this.applyStyleSet(this.selectedStyleSet);\n    },\n    submit: function(event) {\n      if (this.styleSet.id !== \"default\") {\n        this.checkSave(event);\n      } else {\n        this.saveNew(event);\n      }\n    }\n  }\n};\n</script>\n<style scoped>\n#typography-panel {\n  & /deep/ .v-input {\n    margin: 0 26px;\n  }\n  background: #fff;\n  display: flex;\n  padding: 16px 26px;\n  align-items: center;\n}\n</style>\n",null,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#typography-panel /deep/ .v-input {\n    margin: 0 26px;\n  }\n  #typography-panel {\n  background: #fff;\n  display: flex;\n  padding: 16px 26px;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./App/Ui/Components/cssPanelTypography.vue":
/*!**************************************************!*\
  !*** ./App/Ui/Components/cssPanelTypography.vue ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug& */ "./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug&");
/* harmony import */ var _cssPanelTypography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssPanelTypography.vue?vue&type=script&lang=js& */ "./App/Ui/Components/cssPanelTypography.vue?vue&type=script&lang=js&");
/* harmony import */ var _cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& */ "./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _cssPanelTypography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06cb740a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('06cb740a')) {
      api.createRecord('06cb740a', component.options)
    } else {
      api.reload('06cb740a', component.options)
    }
    module.hot.accept(/*! ./cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug& */ "./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug& */ "./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug&");
(function () {
      api.rerender('06cb740a', {
        render: _cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/cssPanelTypography.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/cssPanelTypography.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelTypography.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelTypography.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug&":
/*!******************************************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_template_id_06cb740a_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelTypography_vue_vue_type_style_index_0_id_06cb740a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=style&index=0&id=06cb740a&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelTypography.vue?vue&type=template&id=06cb740a&scoped=true&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "typography-panel" } },
    [
      _c(
        "v-radio-group",
        {
          attrs: { dense: "", "hide-details": "" },
          model: {
            value: _vm.styleSet.fontOrigin,
            callback: function($$v) {
              _vm.$set(_vm.styleSet, "fontOrigin", $$v)
            },
            expression: "styleSet.fontOrigin"
          }
        },
        [
          _c("v-radio", {
            attrs: {
              label: "Google Fonts",
              name: "fontOrigin",
              value: "google"
            }
          }),
          _c("v-radio", {
            attrs: { label: "Local Fonts", name: "fontOrigin", value: "local" }
          })
        ],
        1
      ),
      _c("v-select", {
        attrs: {
          outlined: "",
          "hide-details": "",
          dense: "",
          label: "Main Font",
          items: _vm.fontCollection,
          "item-text": "family",
          "item-value": "family"
        },
        on: {
          change: function($event) {
            return _vm.updateCssFont("fontFamilyMain")
          }
        },
        model: {
          value: _vm.styleSet.fontFamilyMain,
          callback: function($$v) {
            _vm.$set(_vm.styleSet, "fontFamilyMain", $$v)
          },
          expression: "styleSet.fontFamilyMain"
        }
      }),
      _c("v-select", {
        attrs: {
          outlined: "",
          "hide-details": "",
          dense: "",
          label: "Alternative Font",
          "item-text": "family",
          "item-value": "family",
          items: _vm.fontCollection
        },
        on: {
          change: function($event) {
            return _vm.updateCssFont("fontFamilyAlt")
          }
        },
        model: {
          value: _vm.styleSet.fontFamilyAlt,
          callback: function($$v) {
            _vm.$set(_vm.styleSet, "fontFamilyAlt", $$v)
          },
          expression: "styleSet.fontFamilyAlt"
        }
      }),
      _c("v-select", {
        attrs: {
          outlined: "",
          "hide-details": "",
          dense: "",
          label: "Title Font",
          "item-text": "family",
          "item-value": "family",
          items: _vm.fontCollection
        },
        on: {
          change: function($event) {
            return _vm.updateCssFont("fontFamilyTitle")
          }
        },
        model: {
          value: _vm.styleSet.fontFamilyTitle,
          callback: function($$v) {
            _vm.$set(_vm.styleSet, "fontFamilyTitle", $$v)
          },
          expression: "styleSet.fontFamilyTitle"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/M2JkZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT8xZTliIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFR5cG9ncmFwaHkudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFR5cG9ncmFwaHkudnVlPzQ1NWQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/Nzk3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxDQUpBO0FBTUE7QUFFQTtBQUNBLHlCQURBOztBQUVBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDRCQUZBO0FBR0EsMEJBSEE7QUFJQSw4QkFKQTtBQUtBLDZCQUxBO0FBTUE7QUFOQTtBQVFBLEdBWEE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBOztBQUlBO0FBQ0E7QUFDQTs7QUFOQSxLQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJBcHBfVWlfQ29tcG9uZW50c19jc3NQYW5lbFR5cG9ncmFwaHlfdnVlLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgZGl2KGlkPVwidHlwb2dyYXBoeS1wYW5lbFwiKVxuICAgICAgICB2LXJhZGlvLWdyb3VwKGRlbnNlIHYtbW9kZWw9XCJzdHlsZVNldC5mb250T3JpZ2luXCIgaGlkZS1kZXRhaWxzKVxuICAgICAgICAgICAgdi1yYWRpbyhsYWJlbD1cIkdvb2dsZSBGb250c1wiIG5hbWU9XCJmb250T3JpZ2luXCIgdmFsdWU9XCJnb29nbGVcIilcbiAgICAgICAgICAgIHYtcmFkaW8obGFiZWw9XCJMb2NhbCBGb250c1wiIG5hbWU9XCJmb250T3JpZ2luXCIgdmFsdWU9XCJsb2NhbFwiKVxuICAgICAgICB2LXNlbGVjdChvdXRsaW5lZCBoaWRlLWRldGFpbHMgZGVuc2Ugdi1tb2RlbD1cInN0eWxlU2V0LmZvbnRGYW1pbHlNYWluXCIgbGFiZWw9XCJNYWluIEZvbnRcIiA6aXRlbXM9XCJmb250Q29sbGVjdGlvblwiIGl0ZW0tdGV4dD1cImZhbWlseVwiIGl0ZW0tdmFsdWU9XCJmYW1pbHlcIiAgQGNoYW5nZT1cInVwZGF0ZUNzc0ZvbnQoJ2ZvbnRGYW1pbHlNYWluJylcIilcbiAgICAgICAgdi1zZWxlY3Qob3V0bGluZWQgaGlkZS1kZXRhaWxzIGRlbnNlIHYtbW9kZWw9XCJzdHlsZVNldC5mb250RmFtaWx5QWx0XCIgbGFiZWw9XCJBbHRlcm5hdGl2ZSBGb250XCIgaXRlbS10ZXh0PVwiZmFtaWx5XCIgaXRlbS12YWx1ZT1cImZhbWlseVwiIDppdGVtcz1cImZvbnRDb2xsZWN0aW9uXCIgQGNoYW5nZT1cInVwZGF0ZUNzc0ZvbnQoJ2ZvbnRGYW1pbHlBbHQnKVwiKVxuICAgICAgICB2LXNlbGVjdChvdXRsaW5lZCBoaWRlLWRldGFpbHMgZGVuc2Ugdi1tb2RlbD1cInN0eWxlU2V0LmZvbnRGYW1pbHlUaXRsZVwiIGxhYmVsPVwiVGl0bGUgRm9udFwiIGl0ZW0tdGV4dD1cImZhbWlseVwiIGl0ZW0tdmFsdWU9XCJmYW1pbHlcIiA6aXRlbXM9XCJmb250Q29sbGVjdGlvblwiIEBjaGFuZ2U9XCJ1cGRhdGVDc3NGb250KCdmb250RmFtaWx5VGl0bGUnKVwiKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzZXR0aW5ncyBmcm9tIFwiLi4vLi4vLi4vcm91Z2VTZXR0aW5ncy5qc29uXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbG9yU2V0IH0gZnJvbSBcIi4uL2NvbG9yR2VuZXJhdG9yXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IHdlYlNhZmVGb250cyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5jb25zdCB7IGdvb2dsZUZvbnRLZXkgfSA9IHNldHRpbmdzO1xuXG5jb25zdCB3ZWJTYWZlRm9udHNGb3JtYXR0ZWQgPSB3ZWJTYWZlRm9udHMubWFwKGl0ZW0gPT4ge1xuICByZXR1cm4ge1xuICAgIGZhbWlseTogaXRlbVxuICB9O1xufSk7XG5cbmNvbnN0IGZvbnRUeXBlcyA9IFtcImZvbnRGYW1pbHlNYWluXCIsIFwiZm9udEZhbWlseVRpdGxlXCIsIFwiZm9udEZhbWlseUFsdFwiXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlR5cG9ncmFwaHlQYW5lbFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb250Q29sbGVjdGlvbjogW10sXG4gICAgICBzdHlsZVNldENvbGxlY3Rpb246IFtdLFxuICAgICAgc2VsZWN0ZWRTdHlsZVNldDoge30sXG4gICAgICBnb29nbGVGb250Q29sbGVjdGlvbjogW10sXG4gICAgICBsb2NhbEZvbnRDb2xsZWN0aW9uOiBbXSxcbiAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNzc1BhbmVsSW5kZXg6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuY3NzUGFuZWxJbmRleDtcbiAgICAgIH0sXG4gICAgICBzZXQobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY3NzUGFuZWxJbmRleFwiLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdHlsZVNldDoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHlsZVNldDtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic3R5bGVTZXRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBcInN0eWxlU2V0LmZvbnRPcmlnaW5cIigpIHtcbiAgICAgIHRoaXMudXBkYXRlRm9udENvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gVE9ETyA6IHJlcGxhY2Ugd2l0aCBheGlvcyBmb3IgY29uc2lzdGVuY3lcbiAgICAvL0dvb2dsZSBGb250c1xuICAgIGlmIChnb29nbGVGb250S2V5KSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXF1ZXN0Lm9wZW4oXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS93ZWJmb250cy92MS93ZWJmb250cz9zb3J0PWFscGhhJmtleT0ke2dvb2dsZUZvbnRLZXl9YFxuICAgICAgKTtcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlRm9udENvbGxlY3Rpb24gPSBkYXRhLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGb250Q29sbGVjdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cbiAgICBheGlvc1xuICAgICAgLmdldChcIi9zZXR0aW5nYXBpL2ZvbnRzXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxGb250Q29sbGVjdGlvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHRoaXMudXBkYXRlRm9udENvbGxlY3Rpb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvY2FsRm9udENvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgdGhpcy5hZGRBbGVydCh7IHR5cGU6IFwiZXJyb3JcIiwgdGV4dDogZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfSxcbiAgLy9UT0RPIDogb3JnYW5pemUgdGhhdCB0aGluZ1xuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJ0cmlnZ2VyTmV3U3R5bGVcIiwgXCJhZGRBbGVydFwiLCBcImF3YWl0Q29uZmlybWF0aW9uXCJdKSxcbiAgICBhcHBseVN0eWxlU2V0OiBmdW5jdGlvbihzdHlsZVNldCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc3R5bGVTZXQgPSBzdHlsZVNldDtcblxuICAgICAgY29uc3QgY29sb3JTZXQgPSBuZXcgZ2VuZXJhdGVDb2xvclNldChzdHlsZVNldC5kb21pbmFudCk7XG5cbiAgICAgIGNvbG9yU2V0LmdlbmVyYXRlKFxuICAgICAgICBzdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcbiAgICAgICAgcGFyc2VJbnQoc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImxvYWRlZFwiLCB0cnVlKTtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImNvbG9yU2V0XCIsIGNvbG9yU2V0KTtcblxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic3R5bGVTZXRcIiwgc3R5bGVTZXQpO1xuXG4gICAgICB0aGlzLnRvZ2dsZUluZGV4KFwiY3NzUGFuZWxJbmRleFwiKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVBbGxDc3NGb250OiBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9udFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ3NzRm9udChmb250VHlwZXNbaV0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlQ3NzRm9udDogZnVuY3Rpb24oZm9udFR5cGUpIHtcbiAgICAgIGlmICh0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGZvbnRUeXBlID09PSBcImZvbnRGYW1pbHlNYWluXCIpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ1cGRhdGVTdHlsZXNcIiwge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJvZHlcIixcbiAgICAgICAgICBwcm9wZXJ0eTogXCJmb250LWZhbWlseVwiLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9udFR5cGUgPT09IFwiZm9udEZhbWlseVRpdGxlXCIpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gXCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XCI7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXBkYXRlU3R5bGVzXCIsIHtcbiAgICAgICAgICBzZWxlY3RvcjogaGVhZGVyLFxuICAgICAgICAgIHByb3BlcnR5OiBcImZvbnQtZmFtaWx5XCIsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc3R5bGVTZXRbZm9udFR5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb250VHlwZSA9PT0gXCJmb250RmFtaWx5QWx0XCIpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ1cGRhdGVTdHlsZXNcIiwge1xuICAgICAgICAgIHNlbGVjdG9yOiBcIi5fX2FsdGZvbnRcIixcbiAgICAgICAgICBwcm9wZXJ0eTogXCJmb250LWZhbWlseVwiLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vVE9ETyA6IHJlbW92ZVxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24oanNvbk9iamVjdCkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb25PYmplY3QpO1xuICAgIH0sXG4gICAgdXBkYXRlSW5kZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jc3NQYW5lbEluZGV4ID0gdGhpcy5jc3NQYW5lbEluZGV4ID09PSAxID8gMCA6IDE7XG4gICAgfSxcbiAgICB0b2dnbGVJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHRoaXNbaW5kZXhdID0gdGhpc1tpbmRleF0gPT09IDEgPyAwIDogMTtcbiAgICB9LFxuICAgIHVwZGF0ZUZvbnRDb2xsZWN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc3R5bGVTZXQuZm9udE9yaWdpbiA9PT0gXCJnb29nbGVcIikge1xuICAgICAgICB0aGlzLmZvbnRDb2xsZWN0aW9uID0gdGhpcy5nb29nbGVGb250Q29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHlsZVNldC5mb250T3JpZ2luID09PSBcImxvY2FsXCIpIHtcbiAgICAgICAgdGhpcy5mb250Q29sbGVjdGlvbiA9IHRoaXMubG9jYWxGb250Q29sbGVjdGlvbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9udENvbGxlY3Rpb24gPSBbLi4ud2ViU2FmZUZvbnRzRm9ybWF0dGVkLCAuLi50aGlzLmZvbnRDb2xsZWN0aW9uXTtcbiAgICB9LFxuICAgIHVwZGF0ZVN0eWxlU2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYXBwbHlTdHlsZVNldCh0aGlzLnNlbGVjdGVkU3R5bGVTZXQpO1xuICAgIH0sXG4gICAgc3VibWl0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHRoaXMuc3R5bGVTZXQuaWQgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTYXZlKGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZU5ldyhldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuI3R5cG9ncmFwaHktcGFuZWwge1xuICAmIC9kZWVwLyAudi1pbnB1dCB7XG4gICAgbWFyZ2luOiAwIDI2cHg7XG4gIH1cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAyNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3R5cG9ncmFwaHktcGFuZWxbZGF0YS12LTA2Y2I3NDBhXSAudi1pbnB1dCB7XFxuICAgIG1hcmdpbjogMCAyNnB4O1xcbn1cXG4jdHlwb2dyYXBoeS1wYW5lbFtkYXRhLXYtMDZjYjc0MGFdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTZweCAyNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZVwiLFwiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly8uL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9MQTtJQUNBLGNBQUE7QUFDQTtBQ3RMQTtFRHVMQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlIGxhbmc9XFxcInB1Z1xcXCI+XFxuICAgIGRpdihpZD1cXFwidHlwb2dyYXBoeS1wYW5lbFxcXCIpXFxuICAgICAgICB2LXJhZGlvLWdyb3VwKGRlbnNlIHYtbW9kZWw9XFxcInN0eWxlU2V0LmZvbnRPcmlnaW5cXFwiIGhpZGUtZGV0YWlscylcXG4gICAgICAgICAgICB2LXJhZGlvKGxhYmVsPVxcXCJHb29nbGUgRm9udHNcXFwiIG5hbWU9XFxcImZvbnRPcmlnaW5cXFwiIHZhbHVlPVxcXCJnb29nbGVcXFwiKVxcbiAgICAgICAgICAgIHYtcmFkaW8obGFiZWw9XFxcIkxvY2FsIEZvbnRzXFxcIiBuYW1lPVxcXCJmb250T3JpZ2luXFxcIiB2YWx1ZT1cXFwibG9jYWxcXFwiKVxcbiAgICAgICAgdi1zZWxlY3Qob3V0bGluZWQgaGlkZS1kZXRhaWxzIGRlbnNlIHYtbW9kZWw9XFxcInN0eWxlU2V0LmZvbnRGYW1pbHlNYWluXFxcIiBsYWJlbD1cXFwiTWFpbiBGb250XFxcIiA6aXRlbXM9XFxcImZvbnRDb2xsZWN0aW9uXFxcIiBpdGVtLXRleHQ9XFxcImZhbWlseVxcXCIgaXRlbS12YWx1ZT1cXFwiZmFtaWx5XFxcIiAgQGNoYW5nZT1cXFwidXBkYXRlQ3NzRm9udCgnZm9udEZhbWlseU1haW4nKVxcXCIpXFxuICAgICAgICB2LXNlbGVjdChvdXRsaW5lZCBoaWRlLWRldGFpbHMgZGVuc2Ugdi1tb2RlbD1cXFwic3R5bGVTZXQuZm9udEZhbWlseUFsdFxcXCIgbGFiZWw9XFxcIkFsdGVybmF0aXZlIEZvbnRcXFwiIGl0ZW0tdGV4dD1cXFwiZmFtaWx5XFxcIiBpdGVtLXZhbHVlPVxcXCJmYW1pbHlcXFwiIDppdGVtcz1cXFwiZm9udENvbGxlY3Rpb25cXFwiIEBjaGFuZ2U9XFxcInVwZGF0ZUNzc0ZvbnQoJ2ZvbnRGYW1pbHlBbHQnKVxcXCIpXFxuICAgICAgICB2LXNlbGVjdChvdXRsaW5lZCBoaWRlLWRldGFpbHMgZGVuc2Ugdi1tb2RlbD1cXFwic3R5bGVTZXQuZm9udEZhbWlseVRpdGxlXFxcIiBsYWJlbD1cXFwiVGl0bGUgRm9udFxcXCIgaXRlbS10ZXh0PVxcXCJmYW1pbHlcXFwiIGl0ZW0tdmFsdWU9XFxcImZhbWlseVxcXCIgOml0ZW1zPVxcXCJmb250Q29sbGVjdGlvblxcXCIgQGNoYW5nZT1cXFwidXBkYXRlQ3NzRm9udCgnZm9udEZhbWlseVRpdGxlJylcXFwiKVxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSBcXFwiLi4vLi4vLi4vcm91Z2VTZXR0aW5ncy5qc29uXFxcIjtcXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbG9yU2V0IH0gZnJvbSBcXFwiLi4vY29sb3JHZW5lcmF0b3JcXFwiO1xcbmltcG9ydCBheGlvcyBmcm9tIFxcXCJheGlvc1xcXCI7XFxuaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gXFxcInZ1ZXhcXFwiO1xcbmltcG9ydCB7IHdlYlNhZmVGb250cyB9IGZyb20gXFxcIi4uLy4uL3V0aWxzXFxcIjtcXG5cXG5jb25zdCB7IGdvb2dsZUZvbnRLZXkgfSA9IHNldHRpbmdzO1xcblxcbmNvbnN0IHdlYlNhZmVGb250c0Zvcm1hdHRlZCA9IHdlYlNhZmVGb250cy5tYXAoaXRlbSA9PiB7XFxuICByZXR1cm4ge1xcbiAgICBmYW1pbHk6IGl0ZW1cXG4gIH07XFxufSk7XFxuXFxuY29uc3QgZm9udFR5cGVzID0gW1xcXCJmb250RmFtaWx5TWFpblxcXCIsIFxcXCJmb250RmFtaWx5VGl0bGVcXFwiLCBcXFwiZm9udEZhbWlseUFsdFxcXCJdO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG5hbWU6IFxcXCJUeXBvZ3JhcGh5UGFuZWxcXFwiLFxcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBmb250Q29sbGVjdGlvbjogW10sXFxuICAgICAgc3R5bGVTZXRDb2xsZWN0aW9uOiBbXSxcXG4gICAgICBzZWxlY3RlZFN0eWxlU2V0OiB7fSxcXG4gICAgICBnb29nbGVGb250Q29sbGVjdGlvbjogW10sXFxuICAgICAgbG9jYWxGb250Q29sbGVjdGlvbjogW10sXFxuICAgICAgbG9hZGVkOiBmYWxzZVxcbiAgICB9O1xcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIGNzc1BhbmVsSW5kZXg6IHtcXG4gICAgICBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5jc3NQYW5lbEluZGV4O1xcbiAgICAgIH0sXFxuICAgICAgc2V0KG5ld1ZhbHVlKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImNzc1BhbmVsSW5kZXhcXFwiLCBuZXdWYWx1ZSk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBzdHlsZVNldDoge1xcbiAgICAgIGdldCgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0eWxlU2V0O1xcbiAgICAgIH0sXFxuICAgICAgc2V0KHZhbHVlKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcInN0eWxlU2V0XFxcIiwgdmFsdWUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSxcXG4gIHdhdGNoOiB7XFxuICAgIFxcXCJzdHlsZVNldC5mb250T3JpZ2luXFxcIigpIHtcXG4gICAgICB0aGlzLnVwZGF0ZUZvbnRDb2xsZWN0aW9uKCk7XFxuICAgIH1cXG4gIH0sXFxuICBtb3VudGVkKCkge1xcbiAgICAvLyBUT0RPIDogcmVwbGFjZSB3aXRoIGF4aW9zIGZvciBjb25zaXN0ZW5jeVxcbiAgICAvL0dvb2dsZSBGb250c1xcbiAgICBpZiAoZ29vZ2xlRm9udEtleSkge1xcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcXG4gICAgICByZXF1ZXN0Lm9wZW4oXFxuICAgICAgICBcXFwiR0VUXFxcIixcXG4gICAgICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS93ZWJmb250cy92MS93ZWJmb250cz9zb3J0PWFscGhhJmtleT0ke2dvb2dsZUZvbnRLZXl9YFxcbiAgICAgICk7XFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XFxuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XFxuICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xcbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlRm9udENvbGxlY3Rpb24gPSBkYXRhLml0ZW1zO1xcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9udENvbGxlY3Rpb24oKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuICAgICAgcmVxdWVzdC5zZW5kKCk7XFxuICAgIH1cXG4gICAgYXhpb3NcXG4gICAgICAuZ2V0KFxcXCIvc2V0dGluZ2FwaS9mb250c1xcXCIpXFxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgdGhpcy5sb2NhbEZvbnRDb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgIHRoaXMudXBkYXRlRm9udENvbGxlY3Rpb24oKTtcXG4gICAgICB9KVxcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICB0aGlzLmxvY2FsRm9udENvbGxlY3Rpb24gPSBbXTtcXG4gICAgICAgIHRoaXMuYWRkQWxlcnQoeyB0eXBlOiBcXFwiZXJyb3JcXFwiLCB0ZXh0OiBlcnJvciB9KTtcXG4gICAgICB9KTtcXG4gIH0sXFxuICAvL1RPRE8gOiBvcmdhbml6ZSB0aGF0IHRoaW5nXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoW1xcXCJ0cmlnZ2VyTmV3U3R5bGVcXFwiLCBcXFwiYWRkQWxlcnRcXFwiLCBcXFwiYXdhaXRDb25maXJtYXRpb25cXFwiXSksXFxuICAgIGFwcGx5U3R5bGVTZXQ6IGZ1bmN0aW9uKHN0eWxlU2V0LCBjYWxsYmFjaykge1xcbiAgICAgIHRoaXMuc3R5bGVTZXQgPSBzdHlsZVNldDtcXG5cXG4gICAgICBjb25zdCBjb2xvclNldCA9IG5ldyBnZW5lcmF0ZUNvbG9yU2V0KHN0eWxlU2V0LmRvbWluYW50KTtcXG5cXG4gICAgICBjb2xvclNldC5nZW5lcmF0ZShcXG4gICAgICAgIHN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcXG4gICAgICApO1xcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwibG9hZGVkXFxcIiwgdHJ1ZSk7XFxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJjb2xvclNldFxcXCIsIGNvbG9yU2V0KTtcXG5cXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcInN0eWxlU2V0XFxcIiwgc3R5bGVTZXQpO1xcblxcbiAgICAgIHRoaXMudG9nZ2xlSW5kZXgoXFxcImNzc1BhbmVsSW5kZXhcXFwiKTtcXG4gICAgICBpZiAoY2FsbGJhY2spIHtcXG4gICAgICAgIGNhbGxiYWNrKCk7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICB1cGRhdGVBbGxDc3NGb250OiBmdW5jdGlvbigpIHtcXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvbnRUeXBlcy5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgdGhpcy51cGRhdGVDc3NGb250KGZvbnRUeXBlc1tpXSk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICB1cGRhdGVDc3NGb250OiBmdW5jdGlvbihmb250VHlwZSkge1xcbiAgICAgIGlmICh0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXSA9PT0gXFxcIm5vbmVcXFwiKSB7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcbiAgICAgIGlmIChmb250VHlwZSA9PT0gXFxcImZvbnRGYW1pbHlNYWluXFxcIikge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXFxcInVwZGF0ZVN0eWxlc1xcXCIsIHtcXG4gICAgICAgICAgc2VsZWN0b3I6IFxcXCJib2R5XFxcIixcXG4gICAgICAgICAgcHJvcGVydHk6IFxcXCJmb250LWZhbWlseVxcXCIsXFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXVxcbiAgICAgICAgfSk7XFxuICAgICAgfSBlbHNlIGlmIChmb250VHlwZSA9PT0gXFxcImZvbnRGYW1pbHlUaXRsZVxcXCIpIHtcXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IFxcXCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XFxcIjtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFxcXCJ1cGRhdGVTdHlsZXNcXFwiLCB7XFxuICAgICAgICAgIHNlbGVjdG9yOiBoZWFkZXIsXFxuICAgICAgICAgIHByb3BlcnR5OiBcXFwiZm9udC1mYW1pbHlcXFwiLFxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdHlsZVNldFtmb250VHlwZV1cXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSBpZiAoZm9udFR5cGUgPT09IFxcXCJmb250RmFtaWx5QWx0XFxcIikge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXFxcInVwZGF0ZVN0eWxlc1xcXCIsIHtcXG4gICAgICAgICAgc2VsZWN0b3I6IFxcXCIuX19hbHRmb250XFxcIixcXG4gICAgICAgICAgcHJvcGVydHk6IFxcXCJmb250LWZhbWlseVxcXCIsXFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXVxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICAvL1RPRE8gOiByZW1vdmVcXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbihqc29uT2JqZWN0KSB7XFxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb25PYmplY3QpO1xcbiAgICB9LFxcbiAgICB1cGRhdGVJbmRleDogZnVuY3Rpb24oKSB7XFxuICAgICAgdGhpcy5jc3NQYW5lbEluZGV4ID0gdGhpcy5jc3NQYW5lbEluZGV4ID09PSAxID8gMCA6IDE7XFxuICAgIH0sXFxuICAgIHRvZ2dsZUluZGV4OiBmdW5jdGlvbihpbmRleCkge1xcbiAgICAgIHRoaXNbaW5kZXhdID0gdGhpc1tpbmRleF0gPT09IDEgPyAwIDogMTtcXG4gICAgfSxcXG4gICAgdXBkYXRlRm9udENvbGxlY3Rpb24oKSB7XFxuICAgICAgaWYgKHRoaXMuc3R5bGVTZXQuZm9udE9yaWdpbiA9PT0gXFxcImdvb2dsZVxcXCIpIHtcXG4gICAgICAgIHRoaXMuZm9udENvbGxlY3Rpb24gPSB0aGlzLmdvb2dsZUZvbnRDb2xsZWN0aW9uO1xcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHlsZVNldC5mb250T3JpZ2luID09PSBcXFwibG9jYWxcXFwiKSB7XFxuICAgICAgICB0aGlzLmZvbnRDb2xsZWN0aW9uID0gdGhpcy5sb2NhbEZvbnRDb2xsZWN0aW9uO1xcbiAgICAgIH1cXG4gICAgICB0aGlzLmZvbnRDb2xsZWN0aW9uID0gWy4uLndlYlNhZmVGb250c0Zvcm1hdHRlZCwgLi4udGhpcy5mb250Q29sbGVjdGlvbl07XFxuICAgIH0sXFxuICAgIHVwZGF0ZVN0eWxlU2V0OiBmdW5jdGlvbigpIHtcXG4gICAgICB0aGlzLmFwcGx5U3R5bGVTZXQodGhpcy5zZWxlY3RlZFN0eWxlU2V0KTtcXG4gICAgfSxcXG4gICAgc3VibWl0OiBmdW5jdGlvbihldmVudCkge1xcbiAgICAgIGlmICh0aGlzLnN0eWxlU2V0LmlkICE9PSBcXFwiZGVmYXVsdFxcXCIpIHtcXG4gICAgICAgIHRoaXMuY2hlY2tTYXZlKGV2ZW50KTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5zYXZlTmV3KGV2ZW50KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuI3R5cG9ncmFwaHktcGFuZWwge1xcbiAgJiAvZGVlcC8gLnYtaW5wdXQge1xcbiAgICBtYXJnaW46IDAgMjZweDtcXG4gIH1cXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTZweCAyNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIixudWxsLFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuI3R5cG9ncmFwaHktcGFuZWwgL2RlZXAvIC52LWlucHV0IHtcXG4gICAgbWFyZ2luOiAwIDI2cHg7XFxuICB9XFxuICAjdHlwb2dyYXBoeS1wYW5lbCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDE2cHggMjZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDZjYjc0MGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2Y2I3NDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDZjYjc0MGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2Y2I3NDBhJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2Y2I3NDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNmNiNzQwYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA2Y2I3NDBhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2Y2I3NDBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2Y2I3NDBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2Y2I3NDBhJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2Y2I3NDBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFR5cG9ncmFwaHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwidHlwb2dyYXBoeS1wYW5lbFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBkZW5zZTogXCJcIiwgXCJoaWRlLWRldGFpbHNcIjogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnN0eWxlU2V0LmZvbnRPcmlnaW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdHlsZVNldCwgXCJmb250T3JpZ2luXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInN0eWxlU2V0LmZvbnRPcmlnaW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogXCJHb29nbGUgRm9udHNcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJmb250T3JpZ2luXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBcImdvb2dsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIkxvY2FsIEZvbnRzXCIsIG5hbWU6IFwiZm9udE9yaWdpblwiLCB2YWx1ZTogXCJsb2NhbFwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICBsYWJlbDogXCJNYWluIEZvbnRcIixcbiAgICAgICAgICBpdGVtczogX3ZtLmZvbnRDb2xsZWN0aW9uLFxuICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwiZmFtaWx5XCIsXG4gICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiZmFtaWx5XCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVDc3NGb250KFwiZm9udEZhbWlseU1haW5cIilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdHlsZVNldC5mb250RmFtaWx5TWFpbixcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwiZm9udEZhbWlseU1haW5cIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHlsZVNldC5mb250RmFtaWx5TWFpblwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICBsYWJlbDogXCJBbHRlcm5hdGl2ZSBGb250XCIsXG4gICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJmYW1pbHlcIixcbiAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJmYW1pbHlcIixcbiAgICAgICAgICBpdGVtczogX3ZtLmZvbnRDb2xsZWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ3NzRm9udChcImZvbnRGYW1pbHlBbHRcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdHlsZVNldC5mb250RmFtaWx5QWx0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdHlsZVNldCwgXCJmb250RmFtaWx5QWx0XCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic3R5bGVTZXQuZm9udEZhbWlseUFsdFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICBsYWJlbDogXCJUaXRsZSBGb250XCIsXG4gICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJmYW1pbHlcIixcbiAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJmYW1pbHlcIixcbiAgICAgICAgICBpdGVtczogX3ZtLmZvbnRDb2xsZWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ3NzRm9udChcImZvbnRGYW1pbHlUaXRsZVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnN0eWxlU2V0LmZvbnRGYW1pbHlUaXRsZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwiZm9udEZhbWlseVRpdGxlXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic3R5bGVTZXQuZm9udEZhbWlseVRpdGxlXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=