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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/M2JkZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT8xZTliIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFR5cG9ncmFwaHkudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFR5cG9ncmFwaHkudnVlPzQ1NWQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/Nzk3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxDQUpBO0FBTUE7QUFFQTtBQUNBLHlCQURBOztBQUVBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDRCQUZBO0FBR0EsMEJBSEE7QUFJQSw4QkFKQTtBQUtBLDZCQUxBO0FBTUE7QUFOQTtBQVFBLEdBWEE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBOztBQUlBO0FBQ0E7QUFDQTs7QUFOQSxLQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJBcHBfVWlfQ29tcG9uZW50c19jc3NQYW5lbFR5cG9ncmFwaHlfdnVlLmFwcC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIGRpdihpZD1cInR5cG9ncmFwaHktcGFuZWxcIilcbiAgICAgICAgdi1yYWRpby1ncm91cChkZW5zZSB2LW1vZGVsPVwic3R5bGVTZXQuZm9udE9yaWdpblwiIGhpZGUtZGV0YWlscylcbiAgICAgICAgICAgIHYtcmFkaW8obGFiZWw9XCJHb29nbGUgRm9udHNcIiBuYW1lPVwiZm9udE9yaWdpblwiIHZhbHVlPVwiZ29vZ2xlXCIpXG4gICAgICAgICAgICB2LXJhZGlvKGxhYmVsPVwiTG9jYWwgRm9udHNcIiBuYW1lPVwiZm9udE9yaWdpblwiIHZhbHVlPVwibG9jYWxcIilcbiAgICAgICAgdi1zZWxlY3Qob3V0bGluZWQgaGlkZS1kZXRhaWxzIGRlbnNlIHYtbW9kZWw9XCJzdHlsZVNldC5mb250RmFtaWx5TWFpblwiIGxhYmVsPVwiTWFpbiBGb250XCIgOml0ZW1zPVwiZm9udENvbGxlY3Rpb25cIiBpdGVtLXRleHQ9XCJmYW1pbHlcIiBpdGVtLXZhbHVlPVwiZmFtaWx5XCIgIEBjaGFuZ2U9XCJ1cGRhdGVDc3NGb250KCdmb250RmFtaWx5TWFpbicpXCIpXG4gICAgICAgIHYtc2VsZWN0KG91dGxpbmVkIGhpZGUtZGV0YWlscyBkZW5zZSB2LW1vZGVsPVwic3R5bGVTZXQuZm9udEZhbWlseUFsdFwiIGxhYmVsPVwiQWx0ZXJuYXRpdmUgRm9udFwiIGl0ZW0tdGV4dD1cImZhbWlseVwiIGl0ZW0tdmFsdWU9XCJmYW1pbHlcIiA6aXRlbXM9XCJmb250Q29sbGVjdGlvblwiIEBjaGFuZ2U9XCJ1cGRhdGVDc3NGb250KCdmb250RmFtaWx5QWx0JylcIilcbiAgICAgICAgdi1zZWxlY3Qob3V0bGluZWQgaGlkZS1kZXRhaWxzIGRlbnNlIHYtbW9kZWw9XCJzdHlsZVNldC5mb250RmFtaWx5VGl0bGVcIiBsYWJlbD1cIlRpdGxlIEZvbnRcIiBpdGVtLXRleHQ9XCJmYW1pbHlcIiBpdGVtLXZhbHVlPVwiZmFtaWx5XCIgOml0ZW1zPVwiZm9udENvbGxlY3Rpb25cIiBAY2hhbmdlPVwidXBkYXRlQ3NzRm9udCgnZm9udEZhbWlseVRpdGxlJylcIilcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSBcIi4uLy4uLy4uL3JvdWdlU2V0dGluZ3MuanNvblwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb2xvclNldCB9IGZyb20gXCIuLi9jb2xvckdlbmVyYXRvclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyB3ZWJTYWZlRm9udHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgeyBnb29nbGVGb250S2V5IH0gPSBzZXR0aW5ncztcblxuY29uc3Qgd2ViU2FmZUZvbnRzRm9ybWF0dGVkID0gd2ViU2FmZUZvbnRzLm1hcChpdGVtID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmYW1pbHk6IGl0ZW1cbiAgfTtcbn0pO1xuXG5jb25zdCBmb250VHlwZXMgPSBbXCJmb250RmFtaWx5TWFpblwiLCBcImZvbnRGYW1pbHlUaXRsZVwiLCBcImZvbnRGYW1pbHlBbHRcIl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJUeXBvZ3JhcGh5UGFuZWxcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udENvbGxlY3Rpb246IFtdLFxuICAgICAgc3R5bGVTZXRDb2xsZWN0aW9uOiBbXSxcbiAgICAgIHNlbGVjdGVkU3R5bGVTZXQ6IHt9LFxuICAgICAgZ29vZ2xlRm9udENvbGxlY3Rpb246IFtdLFxuICAgICAgbG9jYWxGb250Q29sbGVjdGlvbjogW10sXG4gICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjc3NQYW5lbEluZGV4OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNzc1BhbmVsSW5kZXg7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImNzc1BhbmVsSW5kZXhcIiwgbmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGVTZXQ6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3R5bGVTZXQ7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcInN0eWxlU2V0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgXCJzdHlsZVNldC5mb250T3JpZ2luXCIoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZvbnRDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIC8vIFRPRE8gOiByZXBsYWNlIHdpdGggYXhpb3MgZm9yIGNvbnNpc3RlbmN5XG4gICAgLy9Hb29nbGUgRm9udHNcbiAgICBpZiAoZ29vZ2xlRm9udEtleSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxdWVzdC5vcGVuKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vd2ViZm9udHMvdjEvd2ViZm9udHM/c29ydD1hbHBoYSZrZXk9JHtnb29nbGVGb250S2V5fWBcbiAgICAgICk7XG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB0aGlzLmdvb2dsZUZvbnRDb2xsZWN0aW9uID0gZGF0YS5pdGVtcztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9udENvbGxlY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvc2V0dGluZ2FwaS9mb250c1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvY2FsRm9udENvbGxlY3Rpb24gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRDb2xsZWN0aW9uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEZvbnRDb2xsZWN0aW9uID0gW107XG4gICAgICAgIHRoaXMuYWRkQWxlcnQoeyB0eXBlOiBcImVycm9yXCIsIHRleHQ6IGVycm9yIH0pO1xuICAgICAgfSk7XG4gIH0sXG4gIC8vVE9ETyA6IG9yZ2FuaXplIHRoYXQgdGhpbmdcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoW1widHJpZ2dlck5ld1N0eWxlXCIsIFwiYWRkQWxlcnRcIiwgXCJhd2FpdENvbmZpcm1hdGlvblwiXSksXG4gICAgYXBwbHlTdHlsZVNldDogZnVuY3Rpb24oc3R5bGVTZXQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnN0eWxlU2V0ID0gc3R5bGVTZXQ7XG5cbiAgICAgIGNvbnN0IGNvbG9yU2V0ID0gbmV3IGdlbmVyYXRlQ29sb3JTZXQoc3R5bGVTZXQuZG9taW5hbnQpO1xuXG4gICAgICBjb2xvclNldC5nZW5lcmF0ZShcbiAgICAgICAgc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxuICAgICAgICBwYXJzZUludChzdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXG4gICAgICAgIHBhcnNlSW50KHN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcbiAgICAgICk7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJsb2FkZWRcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJjb2xvclNldFwiLCBjb2xvclNldCk7XG5cbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcInN0eWxlU2V0XCIsIHN0eWxlU2V0KTtcblxuICAgICAgdGhpcy50b2dnbGVJbmRleChcImNzc1BhbmVsSW5kZXhcIik7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlQWxsQ3NzRm9udDogZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvbnRUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNzc0ZvbnQoZm9udFR5cGVzW2ldKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZUNzc0ZvbnQ6IGZ1bmN0aW9uKGZvbnRUeXBlKSB7XG4gICAgICBpZiAodGhpcy5zdHlsZVNldFtmb250VHlwZV0gPT09IFwibm9uZVwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChmb250VHlwZSA9PT0gXCJmb250RmFtaWx5TWFpblwiKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXBkYXRlU3R5bGVzXCIsIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJib2R5XCIsXG4gICAgICAgICAgcHJvcGVydHk6IFwiZm9udC1mYW1pbHlcIixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdHlsZVNldFtmb250VHlwZV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZvbnRUeXBlID09PSBcImZvbnRGYW1pbHlUaXRsZVwiKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiO1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInVwZGF0ZVN0eWxlc1wiLCB7XG4gICAgICAgICAgc2VsZWN0b3I6IGhlYWRlcixcbiAgICAgICAgICBwcm9wZXJ0eTogXCJmb250LWZhbWlseVwiLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0eWxlU2V0W2ZvbnRUeXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9udFR5cGUgPT09IFwiZm9udEZhbWlseUFsdFwiKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXBkYXRlU3R5bGVzXCIsIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCIuX19hbHRmb250XCIsXG4gICAgICAgICAgcHJvcGVydHk6IFwiZm9udC1mYW1pbHlcIixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdHlsZVNldFtmb250VHlwZV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvL1RPRE8gOiByZW1vdmVcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uKGpzb25PYmplY3QpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uT2JqZWN0KTtcbiAgICB9LFxuICAgIHVwZGF0ZUluZGV4OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY3NzUGFuZWxJbmRleCA9IHRoaXMuY3NzUGFuZWxJbmRleCA9PT0gMSA/IDAgOiAxO1xuICAgIH0sXG4gICAgdG9nZ2xlSW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB0aGlzW2luZGV4XSA9IHRoaXNbaW5kZXhdID09PSAxID8gMCA6IDE7XG4gICAgfSxcbiAgICB1cGRhdGVGb250Q29sbGVjdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnN0eWxlU2V0LmZvbnRPcmlnaW4gPT09IFwiZ29vZ2xlXCIpIHtcbiAgICAgICAgdGhpcy5mb250Q29sbGVjdGlvbiA9IHRoaXMuZ29vZ2xlRm9udENvbGxlY3Rpb247XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3R5bGVTZXQuZm9udE9yaWdpbiA9PT0gXCJsb2NhbFwiKSB7XG4gICAgICAgIHRoaXMuZm9udENvbGxlY3Rpb24gPSB0aGlzLmxvY2FsRm9udENvbGxlY3Rpb247XG4gICAgICB9XG4gICAgICB0aGlzLmZvbnRDb2xsZWN0aW9uID0gWy4uLndlYlNhZmVGb250c0Zvcm1hdHRlZCwgLi4udGhpcy5mb250Q29sbGVjdGlvbl07XG4gICAgfSxcbiAgICB1cGRhdGVTdHlsZVNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmFwcGx5U3R5bGVTZXQodGhpcy5zZWxlY3RlZFN0eWxlU2V0KTtcbiAgICB9LFxuICAgIHN1Ym1pdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnN0eWxlU2V0LmlkICE9PSBcImRlZmF1bHRcIikge1xuICAgICAgICB0aGlzLmNoZWNrU2F2ZShldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNhdmVOZXcoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiN0eXBvZ3JhcGh5LXBhbmVsIHtcbiAgJiAvZGVlcC8gLnYtaW5wdXQge1xuICAgIG1hcmdpbjogMCAyNnB4O1xuICB9XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHggMjZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbiN0eXBvZ3JhcGh5LXBhbmVsW2RhdGEtdi0wNmNiNzQwYV0gLnYtaW5wdXQge1xcbiAgICBtYXJnaW46IDAgMjZweDtcXG59XFxuI3R5cG9ncmFwaHktcGFuZWxbZGF0YS12LTA2Y2I3NDBhXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDE2cHggMjZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWVcIixcIjxubyBzb3VyY2U+XCIsXCJ3ZWJwYWNrOi8vLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvTEE7SUFDQSxjQUFBO0FBQ0E7QUN0TEE7RUR1TEEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBsYW5nPVxcXCJwdWdcXFwiPlxcbiAgICBkaXYoaWQ9XFxcInR5cG9ncmFwaHktcGFuZWxcXFwiKVxcbiAgICAgICAgdi1yYWRpby1ncm91cChkZW5zZSB2LW1vZGVsPVxcXCJzdHlsZVNldC5mb250T3JpZ2luXFxcIiBoaWRlLWRldGFpbHMpXFxuICAgICAgICAgICAgdi1yYWRpbyhsYWJlbD1cXFwiR29vZ2xlIEZvbnRzXFxcIiBuYW1lPVxcXCJmb250T3JpZ2luXFxcIiB2YWx1ZT1cXFwiZ29vZ2xlXFxcIilcXG4gICAgICAgICAgICB2LXJhZGlvKGxhYmVsPVxcXCJMb2NhbCBGb250c1xcXCIgbmFtZT1cXFwiZm9udE9yaWdpblxcXCIgdmFsdWU9XFxcImxvY2FsXFxcIilcXG4gICAgICAgIHYtc2VsZWN0KG91dGxpbmVkIGhpZGUtZGV0YWlscyBkZW5zZSB2LW1vZGVsPVxcXCJzdHlsZVNldC5mb250RmFtaWx5TWFpblxcXCIgbGFiZWw9XFxcIk1haW4gRm9udFxcXCIgOml0ZW1zPVxcXCJmb250Q29sbGVjdGlvblxcXCIgaXRlbS10ZXh0PVxcXCJmYW1pbHlcXFwiIGl0ZW0tdmFsdWU9XFxcImZhbWlseVxcXCIgIEBjaGFuZ2U9XFxcInVwZGF0ZUNzc0ZvbnQoJ2ZvbnRGYW1pbHlNYWluJylcXFwiKVxcbiAgICAgICAgdi1zZWxlY3Qob3V0bGluZWQgaGlkZS1kZXRhaWxzIGRlbnNlIHYtbW9kZWw9XFxcInN0eWxlU2V0LmZvbnRGYW1pbHlBbHRcXFwiIGxhYmVsPVxcXCJBbHRlcm5hdGl2ZSBGb250XFxcIiBpdGVtLXRleHQ9XFxcImZhbWlseVxcXCIgaXRlbS12YWx1ZT1cXFwiZmFtaWx5XFxcIiA6aXRlbXM9XFxcImZvbnRDb2xsZWN0aW9uXFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVDc3NGb250KCdmb250RmFtaWx5QWx0JylcXFwiKVxcbiAgICAgICAgdi1zZWxlY3Qob3V0bGluZWQgaGlkZS1kZXRhaWxzIGRlbnNlIHYtbW9kZWw9XFxcInN0eWxlU2V0LmZvbnRGYW1pbHlUaXRsZVxcXCIgbGFiZWw9XFxcIlRpdGxlIEZvbnRcXFwiIGl0ZW0tdGV4dD1cXFwiZmFtaWx5XFxcIiBpdGVtLXZhbHVlPVxcXCJmYW1pbHlcXFwiIDppdGVtcz1cXFwiZm9udENvbGxlY3Rpb25cXFwiIEBjaGFuZ2U9XFxcInVwZGF0ZUNzc0ZvbnQoJ2ZvbnRGYW1pbHlUaXRsZScpXFxcIilcXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHNldHRpbmdzIGZyb20gXFxcIi4uLy4uLy4uL3JvdWdlU2V0dGluZ3MuanNvblxcXCI7XFxuaW1wb3J0IHsgZ2VuZXJhdGVDb2xvclNldCB9IGZyb20gXFxcIi4uL2NvbG9yR2VuZXJhdG9yXFxcIjtcXG5pbXBvcnQgYXhpb3MgZnJvbSBcXFwiYXhpb3NcXFwiO1xcbmltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5pbXBvcnQgeyB3ZWJTYWZlRm9udHMgfSBmcm9tIFxcXCIuLi8uLi91dGlsc1xcXCI7XFxuXFxuY29uc3QgeyBnb29nbGVGb250S2V5IH0gPSBzZXR0aW5ncztcXG5cXG5jb25zdCB3ZWJTYWZlRm9udHNGb3JtYXR0ZWQgPSB3ZWJTYWZlRm9udHMubWFwKGl0ZW0gPT4ge1xcbiAgcmV0dXJuIHtcXG4gICAgZmFtaWx5OiBpdGVtXFxuICB9O1xcbn0pO1xcblxcbmNvbnN0IGZvbnRUeXBlcyA9IFtcXFwiZm9udEZhbWlseU1haW5cXFwiLCBcXFwiZm9udEZhbWlseVRpdGxlXFxcIiwgXFxcImZvbnRGYW1pbHlBbHRcXFwiXTtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBuYW1lOiBcXFwiVHlwb2dyYXBoeVBhbmVsXFxcIixcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgZm9udENvbGxlY3Rpb246IFtdLFxcbiAgICAgIHN0eWxlU2V0Q29sbGVjdGlvbjogW10sXFxuICAgICAgc2VsZWN0ZWRTdHlsZVNldDoge30sXFxuICAgICAgZ29vZ2xlRm9udENvbGxlY3Rpb246IFtdLFxcbiAgICAgIGxvY2FsRm9udENvbGxlY3Rpb246IFtdLFxcbiAgICAgIGxvYWRlZDogZmFsc2VcXG4gICAgfTtcXG4gIH0sXFxuICBjb21wdXRlZDoge1xcbiAgICBjc3NQYW5lbEluZGV4OiB7XFxuICAgICAgZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuY3NzUGFuZWxJbmRleDtcXG4gICAgICB9LFxcbiAgICAgIHNldChuZXdWYWx1ZSkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJjc3NQYW5lbEluZGV4XFxcIiwgbmV3VmFsdWUpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgc3R5bGVTZXQ6IHtcXG4gICAgICBnZXQoKSB7XFxuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHlsZVNldDtcXG4gICAgICB9LFxcbiAgICAgIHNldCh2YWx1ZSkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJzdHlsZVNldFxcXCIsIHZhbHVlKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sXFxuICB3YXRjaDoge1xcbiAgICBcXFwic3R5bGVTZXQuZm9udE9yaWdpblxcXCIoKSB7XFxuICAgICAgdGhpcy51cGRhdGVGb250Q29sbGVjdGlvbigpO1xcbiAgICB9XFxuICB9LFxcbiAgbW91bnRlZCgpIHtcXG4gICAgLy8gVE9ETyA6IHJlcGxhY2Ugd2l0aCBheGlvcyBmb3IgY29uc2lzdGVuY3lcXG4gICAgLy9Hb29nbGUgRm9udHNcXG4gICAgaWYgKGdvb2dsZUZvbnRLZXkpIHtcXG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XFxuICAgICAgcmVxdWVzdC5vcGVuKFxcbiAgICAgICAgXFxcIkdFVFxcXCIsXFxuICAgICAgICBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vd2ViZm9udHMvdjEvd2ViZm9udHM/c29ydD1hbHBoYSZrZXk9JHtnb29nbGVGb250S2V5fWBcXG4gICAgICApO1xcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xcbiAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcXG4gICAgICAgICAgICB0aGlzLmdvb2dsZUZvbnRDb2xsZWN0aW9uID0gZGF0YS5pdGVtcztcXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvbnRDb2xsZWN0aW9uKCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9O1xcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xcbiAgICB9XFxuICAgIGF4aW9zXFxuICAgICAgLmdldChcXFwiL3NldHRpbmdhcGkvZm9udHNcXFwiKVxcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgIHRoaXMubG9jYWxGb250Q29sbGVjdGlvbiA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgICB0aGlzLnVwZGF0ZUZvbnRDb2xsZWN0aW9uKCk7XFxuICAgICAgfSlcXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xcbiAgICAgICAgdGhpcy5sb2NhbEZvbnRDb2xsZWN0aW9uID0gW107XFxuICAgICAgICB0aGlzLmFkZEFsZXJ0KHsgdHlwZTogXFxcImVycm9yXFxcIiwgdGV4dDogZXJyb3IgfSk7XFxuICAgICAgfSk7XFxuICB9LFxcbiAgLy9UT0RPIDogb3JnYW5pemUgdGhhdCB0aGluZ1xcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKFtcXFwidHJpZ2dlck5ld1N0eWxlXFxcIiwgXFxcImFkZEFsZXJ0XFxcIiwgXFxcImF3YWl0Q29uZmlybWF0aW9uXFxcIl0pLFxcbiAgICBhcHBseVN0eWxlU2V0OiBmdW5jdGlvbihzdHlsZVNldCwgY2FsbGJhY2spIHtcXG4gICAgICB0aGlzLnN0eWxlU2V0ID0gc3R5bGVTZXQ7XFxuXFxuICAgICAgY29uc3QgY29sb3JTZXQgPSBuZXcgZ2VuZXJhdGVDb2xvclNldChzdHlsZVNldC5kb21pbmFudCk7XFxuXFxuICAgICAgY29sb3JTZXQuZ2VuZXJhdGUoXFxuICAgICAgICBzdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXFxuICAgICAgICBwYXJzZUludChzdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXFxuICAgICAgICBwYXJzZUludChzdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXFxuICAgICAgKTtcXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImxvYWRlZFxcXCIsIHRydWUpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwiY29sb3JTZXRcXFwiLCBjb2xvclNldCk7XFxuXFxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJzdHlsZVNldFxcXCIsIHN0eWxlU2V0KTtcXG5cXG4gICAgICB0aGlzLnRvZ2dsZUluZGV4KFxcXCJjc3NQYW5lbEluZGV4XFxcIik7XFxuICAgICAgaWYgKGNhbGxiYWNrKSB7XFxuICAgICAgICBjYWxsYmFjaygpO1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgdXBkYXRlQWxsQ3NzRm9udDogZnVuY3Rpb24oKSB7XFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb250VHlwZXMubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIHRoaXMudXBkYXRlQ3NzRm9udChmb250VHlwZXNbaV0pO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgdXBkYXRlQ3NzRm9udDogZnVuY3Rpb24oZm9udFR5cGUpIHtcXG4gICAgICBpZiAodGhpcy5zdHlsZVNldFtmb250VHlwZV0gPT09IFxcXCJub25lXFxcIikge1xcbiAgICAgICAgcmV0dXJuO1xcbiAgICAgIH1cXG4gICAgICBpZiAoZm9udFR5cGUgPT09IFxcXCJmb250RmFtaWx5TWFpblxcXCIpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFxcXCJ1cGRhdGVTdHlsZXNcXFwiLCB7XFxuICAgICAgICAgIHNlbGVjdG9yOiBcXFwiYm9keVxcXCIsXFxuICAgICAgICAgIHByb3BlcnR5OiBcXFwiZm9udC1mYW1pbHlcXFwiLFxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdHlsZVNldFtmb250VHlwZV1cXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSBpZiAoZm9udFR5cGUgPT09IFxcXCJmb250RmFtaWx5VGl0bGVcXFwiKSB7XFxuICAgICAgICBjb25zdCBoZWFkZXIgPSBcXFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxcXCI7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcXFwidXBkYXRlU3R5bGVzXFxcIiwge1xcbiAgICAgICAgICBzZWxlY3RvcjogaGVhZGVyLFxcbiAgICAgICAgICBwcm9wZXJ0eTogXFxcImZvbnQtZmFtaWx5XFxcIixcXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc3R5bGVTZXRbZm9udFR5cGVdXFxuICAgICAgICB9KTtcXG4gICAgICB9IGVsc2UgaWYgKGZvbnRUeXBlID09PSBcXFwiZm9udEZhbWlseUFsdFxcXCIpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFxcXCJ1cGRhdGVTdHlsZXNcXFwiLCB7XFxuICAgICAgICAgIHNlbGVjdG9yOiBcXFwiLl9fYWx0Zm9udFxcXCIsXFxuICAgICAgICAgIHByb3BlcnR5OiBcXFwiZm9udC1mYW1pbHlcXFwiLFxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdHlsZVNldFtmb250VHlwZV1cXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgLy9UT0RPIDogcmVtb3ZlXFxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24oanNvbk9iamVjdCkge1xcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uT2JqZWN0KTtcXG4gICAgfSxcXG4gICAgdXBkYXRlSW5kZXg6IGZ1bmN0aW9uKCkge1xcbiAgICAgIHRoaXMuY3NzUGFuZWxJbmRleCA9IHRoaXMuY3NzUGFuZWxJbmRleCA9PT0gMSA/IDAgOiAxO1xcbiAgICB9LFxcbiAgICB0b2dnbGVJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcXG4gICAgICB0aGlzW2luZGV4XSA9IHRoaXNbaW5kZXhdID09PSAxID8gMCA6IDE7XFxuICAgIH0sXFxuICAgIHVwZGF0ZUZvbnRDb2xsZWN0aW9uKCkge1xcbiAgICAgIGlmICh0aGlzLnN0eWxlU2V0LmZvbnRPcmlnaW4gPT09IFxcXCJnb29nbGVcXFwiKSB7XFxuICAgICAgICB0aGlzLmZvbnRDb2xsZWN0aW9uID0gdGhpcy5nb29nbGVGb250Q29sbGVjdGlvbjtcXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3R5bGVTZXQuZm9udE9yaWdpbiA9PT0gXFxcImxvY2FsXFxcIikge1xcbiAgICAgICAgdGhpcy5mb250Q29sbGVjdGlvbiA9IHRoaXMubG9jYWxGb250Q29sbGVjdGlvbjtcXG4gICAgICB9XFxuICAgICAgdGhpcy5mb250Q29sbGVjdGlvbiA9IFsuLi53ZWJTYWZlRm9udHNGb3JtYXR0ZWQsIC4uLnRoaXMuZm9udENvbGxlY3Rpb25dO1xcbiAgICB9LFxcbiAgICB1cGRhdGVTdHlsZVNldDogZnVuY3Rpb24oKSB7XFxuICAgICAgdGhpcy5hcHBseVN0eWxlU2V0KHRoaXMuc2VsZWN0ZWRTdHlsZVNldCk7XFxuICAgIH0sXFxuICAgIHN1Ym1pdDogZnVuY3Rpb24oZXZlbnQpIHtcXG4gICAgICBpZiAodGhpcy5zdHlsZVNldC5pZCAhPT0gXFxcImRlZmF1bHRcXFwiKSB7XFxuICAgICAgICB0aGlzLmNoZWNrU2F2ZShldmVudCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMuc2F2ZU5ldyhldmVudCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbiN0eXBvZ3JhcGh5LXBhbmVsIHtcXG4gICYgL2RlZXAvIC52LWlucHV0IHtcXG4gICAgbWFyZ2luOiAwIDI2cHg7XFxuICB9XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDE2cHggMjZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbjwvc3R5bGU+XFxuXCIsbnVsbCxcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiN0eXBvZ3JhcGh5LXBhbmVsIC9kZWVwLyAudi1pbnB1dCB7XFxuICAgIG1hcmdpbjogMCAyNnB4O1xcbiAgfVxcbiAgI3R5cG9ncmFwaHktcGFuZWwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNnB4IDI2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2Y2I3NDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmNiNzQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2Y2I3NDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmNiNzQwYSZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Nzc1BhbmVsVHlwb2dyYXBoeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmNiNzQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDZjYjc0MGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNmNiNzQwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNmNiNzQwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNmNiNzQwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmNiNzQwYSZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNmNiNzQwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFR5cG9ncmFwaHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxUeXBvZ3JhcGh5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcInR5cG9ncmFwaHktcGFuZWxcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yYWRpby1ncm91cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgZGVuc2U6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zdHlsZVNldC5mb250T3JpZ2luLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwiZm9udE9yaWdpblwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHlsZVNldC5mb250T3JpZ2luXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtcmFkaW9cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiR29vZ2xlIEZvbnRzXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiZm9udE9yaWdpblwiLFxuICAgICAgICAgICAgICB2YWx1ZTogXCJnb29nbGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJMb2NhbCBGb250c1wiLCBuYW1lOiBcImZvbnRPcmlnaW5cIiwgdmFsdWU6IFwibG9jYWxcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgbGFiZWw6IFwiTWFpbiBGb250XCIsXG4gICAgICAgICAgaXRlbXM6IF92bS5mb250Q29sbGVjdGlvbixcbiAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcImZhbWlseVwiLFxuICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImZhbWlseVwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ3NzRm9udChcImZvbnRGYW1pbHlNYWluXCIpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQuZm9udEZhbWlseU1haW4sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0eWxlU2V0LCBcImZvbnRGYW1pbHlNYWluXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic3R5bGVTZXQuZm9udEZhbWlseU1haW5cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgbGFiZWw6IFwiQWx0ZXJuYXRpdmUgRm9udFwiLFxuICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwiZmFtaWx5XCIsXG4gICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiZmFtaWx5XCIsXG4gICAgICAgICAgaXRlbXM6IF92bS5mb250Q29sbGVjdGlvblxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUNzc0ZvbnQoXCJmb250RmFtaWx5QWx0XCIpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQuZm9udEZhbWlseUFsdCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwiZm9udEZhbWlseUFsdFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInN0eWxlU2V0LmZvbnRGYW1pbHlBbHRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgbGFiZWw6IFwiVGl0bGUgRm9udFwiLFxuICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwiZmFtaWx5XCIsXG4gICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiZmFtaWx5XCIsXG4gICAgICAgICAgaXRlbXM6IF92bS5mb250Q29sbGVjdGlvblxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUNzc0ZvbnQoXCJmb250RmFtaWx5VGl0bGVcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdHlsZVNldC5mb250RmFtaWx5VGl0bGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0eWxlU2V0LCBcImZvbnRGYW1pbHlUaXRsZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInN0eWxlU2V0LmZvbnRGYW1pbHlUaXRsZVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9