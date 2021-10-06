(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_cssPanelSelector_vue"],{

/***/ "./App/Messages/messages.json":
/*!************************************!*\
  !*** ./App/Messages/messages.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"warnings":{"duplicateKey":"%s already exists"},"errors":{"hasError":"Errors occured"}}');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/colorPalette.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/colorPalette.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _colorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colorHelper */ "./App/Ui/colorHelper.js");
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


const colorUtils = new _colorHelper__WEBPACK_IMPORTED_MODULE_0__.colorHelper();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColorPalette",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["colorSet", "styleSet", "settings"])),
  methods: {
    bgColor: function bgColor(color) {
      return "background:".concat(colorUtils.getString(color));
    },

    storeColorCoordinate(coordinates) {
      this.$store.commit("currentColor", coordinates);
      this.$store.dispatch("triggerNewStyle");
    },

    colorIsHidden(location, index, subIndex) {
      var _hiddenCombination;

      let hiddenCombination;

      if (location === "dominant") {
        hiddenCombination = this.styleSet.hiddenCombination[location];
      } else if (location === "sub") {
        hiddenCombination = this.styleSet.hiddenCombination[location][subIndex];
      }

      return ((_hiddenCombination = hiddenCombination) === null || _hiddenCombination === void 0 ? void 0 : _hiddenCombination.find(item => item === index)) !== undefined;
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelSelector.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelSelector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorHelper */ "./App/Ui/colorHelper.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./App/utils.js");
/* harmony import */ var _Messages_messages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Messages/messages.json */ "./App/Messages/messages.json");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _colorPalette_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorPalette.vue */ "./App/Ui/Components/colorPalette.vue");
/* harmony import */ var _ratioPalette_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ratioPalette.vue */ "./App/Ui/Components/ratioPalette.vue");


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






const colorUtils = new _colorHelper__WEBPACK_IMPORTED_MODULE_1__.colorHelper();

const getColorFromCollection = function getColorFromCollection(instance, data) {
  if (["dominant", "warning", "alert", "info", "gray", "success"].includes(data[0])) {
    const index = "".concat(data[0], "SubCollection");
    return instance.colorCollection[index][data[1]];
  } else if (data[0] === undefined || data[1] === undefined || !instance.colorCollection.combinationCollection[data[0]] // important for when you reduce the number of colors
  ) {
    return "";
  } else {
    return instance.colorCollection.combinationCollection[data[0]].subCombination[data[1]];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SelectorPanel",
  components: {
    ColorPalette: _colorPalette_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    RatioPalette: _ratioPalette_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },

  data() {
    return {
      currentSelectorProperty: {},
      newSelector: "",
      newProperty: {},
      colorMapping: {},
      message: "",
      newSelectorName: "",
      componentKey: true
    };
  },

  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)(["addAlert", "triggerNewStyle"])), {}, {
    storeSelectorAndProperty: function storeSelectorAndProperty(selector, property) {
      this.$store.commit("currentSelector", {
        selector: selector,
        property: property
      });
    },

    makeRatio(property) {
      if (property.data === "html") {
        return this.ratioCollection[property.data]["line-height"] / this.ratioCollection[property.data]["font-size"] + "rem";
      }

      return "".concat(Math.round((parseFloat(this.ratioCollection[property.data]["line-height"]) + parseFloat(this.ratioCollection[property.data]["margin-top"] || 0) + parseFloat(this.ratioCollection[property.data]["margin-bottom"] || 0)) * 100) / 100, "rem");
    },

    addSelector: function addSelector() {
      if (!this.newSelectorName) {
        this.addAlert({
          text: "You have to write a valid CSS selector",
          type: "info"
        });
        return;
      }

      if (this.newSelectorName in this.selectorCollection) {
        this.warningMessage = {
          text: _Messages_messages_json__WEBPACK_IMPORTED_MODULE_3__.warnings.duplicateKey,
          type: "warning",
          textVariable: this.newSelectorName
        };
      } else {
        this.$store.dispatch("addSelector", this.newSelectorName);
        this.newSelectorName = "";
      }
    },
    addProperty: function addProperty(value, selector) {
      if (!value) {
        this.addAlert({
          text: "You have to write a valid CSS property",
          type: "info"
        });
      } else if (value in this.selectorCollection[selector]) {
        this.addAlert({
          text: "The property ".concat(value, " already exists in ").concat(selector),
          type: "info"
        });
      } else {
        this.$store.dispatch("addProperty", {
          selector: selector,
          property: value
        });
        this.$store.commit("currentSelector", {
          selector: selector,
          property: value
        });
      }
    },
    getProperty: function getProperty(property) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isHexColor)(property)) {
        return "<div style=\"width:10px; height:10px; background:".concat(property, "\"></div>");
      } else if (property.type === "color") {
        let selectedColor = getColorFromCollection(this, property.data);
        selectedColor = colorUtils.hslToHex(selectedColor).getString();
        this.colorMapping[JSON.stringify(property.data)] = selectedColor;
        return "<div style=\"width:10px; height:10px; background:".concat(selectedColor, "\"></div>");
      } else if (property.type === "ratio") {
        return this.makeRatio(property);
      } else {
        return property;
      }
    },

    async deleteProperty(selector, property) {
      await this.$store.dispatch("awaitConfirmation", {
        text: "Are you sure you want to delete ".concat(property.toUpperCase(), " from ").concat(selector, " ?"),
        type: "info"
      });
      this.$delete(this.selectorCollection[selector], property);
    },

    async deleteSelector(selector) {
      await this.$store.dispatch("awaitConfirmation", {
        text: "Are you sure you want to delete ".concat(selector.toUpperCase(), " and all it's properties ?"),
        type: "info"
      });
      this.$delete(this.selectorCollection, selector);
    },

    changeSelector(selector, event) {
      if (!(event in this.styleSet.selectorCollection)) {
        this.$store.dispatch("updateSelector", {
          old: selector,
          new: event
        });
      } else {
        this.componentKey = !this.componentKey; //cancel changes

        this.addAlert({
          type: "warning",
          text: "The selector ".concat(event.toUpperCase(), " already exists")
        });
      }
    },

    changeProperty(event, selector, property) {
      if (!(event in this.styleSet.selectorCollection[selector])) {
        this.$store.dispatch("updateProperty", {
          selector: selector,
          old: property,
          new: event
        });
      } else {
        this.componentKey = !this.componentKey; //cancel changes

        this.addAlert({
          type: "warning",
          text: "The property ".concat(event.toUpperCase(), " already exists")
        });
      }
    }

  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)(["styleSet", "colorSet", "ratioCollection", "loaded"])), {}, {
    selectorCollection() {
      return this.styleSet.selectorCollection;
    },

    colorCollection() {
      if (this.loaded) {
        return this.colorSet.colorCollection;
      } else {
        return [];
      }
    }

  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RatioPalette",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["styleSet", "loaded"])),
  methods: {
    storeRatioCoordinate(coordinates) {
      this.$store.commit("currentRatio", coordinates);
      this.$store.dispatch("triggerNewStyle");
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.rf-ratio--text-example[data-v-8bda48ac] {\n  overflow: hidden;\n}\n.rf-ratio--text-example[data-v-8bda48ac]:nth-child(odd) {\n    border-left: 15px #555555 solid;\n    background: #555;\n}\n.rf-ratio--text-example[data-v-8bda48ac]:nth-child(even) {\n    border-left: 15px #aaa solid;\n    background: #aaa;\n}\n.rf-ratio--text-example.__base[data-v-8bda48ac] {\n    background-color: var(--secondary);\n    border-left: 15px var(--secondary) solid;\n}\n", "",{"version":3,"sources":["webpack://./App/Ui/Components/ratioPalette.vue"],"names":[],"mappings":";AA6BA;EACA,gBAAA;AAaA;AAZA;IACA,+BAAA;IACA,gBAAA;AACA;AACA;IACA,4BAAA;IACA,gBAAA;AACA;AACA;IACA,kCAAA;IACA,wCAAA;AACA","sourcesContent":["<template lang=\"pug\">\n    div\n        template(v-for=\"(data, tag) in styleSet.ratioCollection\")\n            div(class=\"rf-ratio--text-example\" @click=\"storeRatioCoordinate(tag)\")\n                component(v-if=\"tag !== 'html'\" :is=\"tag\" class=\"--inner-text-example\") …\n        div(class=\"rf-ratio--text-example __base\"   @click=\"storeRatioCoordinate('html')\") …\n\n\n\n</template>\n\n<script>\nimport { mapGetters } from \"vuex\";\n\nexport default {\n  name: \"RatioPalette\",\n  computed: {\n    ...mapGetters([\"styleSet\", \"loaded\"])\n  },\n  methods: {\n    storeRatioCoordinate(coordinates) {\n      this.$store.commit(\"currentRatio\", coordinates);\n      this.$store.dispatch(\"triggerNewStyle\");\n    }\n  }\n};\n</script>\n\n<style scoped>\n.rf-ratio--text-example {\n  overflow: hidden;\n  &:nth-child(odd) {\n    border-left: 15px #555555 solid;\n    background: #555;\n  }\n  &:nth-child(even) {\n    border-left: 15px #aaa solid;\n    background: #aaa;\n  }\n  &.__base {\n    background-color: var(--secondary);\n    border-left: 15px var(--secondary) solid;\n  }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./App/Ui/Components/colorPalette.vue":
/*!********************************************!*\
  !*** ./App/Ui/Components/colorPalette.vue ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug& */ "./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug&");
/* harmony import */ var _colorPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorPalette.vue?vue&type=script&lang=js& */ "./App/Ui/Components/colorPalette.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _colorPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0bbf7552",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0bbf7552')) {
      api.createRecord('0bbf7552', component.options)
    } else {
      api.reload('0bbf7552', component.options)
    }
    module.hot.accept(/*! ./colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug& */ "./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug& */ "./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug&");
(function () {
      api.rerender('0bbf7552', {
        render: _colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/colorPalette.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/cssPanelSelector.vue":
/*!************************************************!*\
  !*** ./App/Ui/Components/cssPanelSelector.vue ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug& */ "./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug&");
/* harmony import */ var _cssPanelSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssPanelSelector.vue?vue&type=script&lang=js& */ "./App/Ui/Components/cssPanelSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _cssPanelSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('cf73a10c')) {
      api.createRecord('cf73a10c', component.options)
    } else {
      api.reload('cf73a10c', component.options)
    }
    module.hot.accept(/*! ./cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug& */ "./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug& */ "./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug&");
(function () {
      api.rerender('cf73a10c', {
        render: _cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/cssPanelSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/ratioPalette.vue":
/*!********************************************!*\
  !*** ./App/Ui/Components/ratioPalette.vue ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug& */ "./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug&");
/* harmony import */ var _ratioPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratioPalette.vue?vue&type=script&lang=js& */ "./App/Ui/Components/ratioPalette.vue?vue&type=script&lang=js&");
/* harmony import */ var _ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& */ "./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ratioPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8bda48ac",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('8bda48ac')) {
      api.createRecord('8bda48ac', component.options)
    } else {
      api.reload('8bda48ac', component.options)
    }
    module.hot.accept(/*! ./ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug& */ "./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug& */ "./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug&");
(function () {
      api.rerender('8bda48ac', {
        render: _ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/ratioPalette.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/colorPalette.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./App/Ui/Components/colorPalette.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_colorPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./colorPalette.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/colorPalette.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_colorPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/cssPanelSelector.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelSelector.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/ratioPalette.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./App/Ui/Components/ratioPalette.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ratioPalette.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_colorPalette_vue_vue_type_template_id_0bbf7552_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug&":
/*!****************************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelSelector_vue_vue_type_template_id_cf73a10c_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug&":
/*!************************************************************************************************!*\
  !*** ./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_template_id_8bda48ac_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ratioPalette_vue_vue_type_style_index_0_id_8bda48ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=style&index=0&id=8bda48ac&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/colorPalette.vue?vue&type=template&id=0bbf7552&scoped=true&lang=pug& ***!
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
    [
      _c(
        "div",
        _vm._l(_vm.colorSet.colorCollection.dominantSubCollection, function(
          subColor,
          index
        ) {
          return !_vm.colorIsHidden("dominant", index)
            ? _c("v-card", {
                key: index,
                staticClass: "pa-3",
                style: _vm.bgColor(subColor),
                on: {
                  click: function($event) {
                    return _vm.storeColorCoordinate(["dominant", index])
                  }
                }
              })
            : _vm._e()
        }),
        1
      ),
      _vm._l(_vm.colorSet.colorCollection.combinationCollection, function(
        color,
        index
      ) {
        return _c(
          "div",
          { key: index, staticClass: "sub-color-parameters" },
          _vm._l(color.subCombination, function(subColor, subIndex) {
            return !_vm.colorIsHidden("sub", subIndex, index)
              ? _c("v-card", {
                  key: subIndex,
                  staticClass: "pa-3",
                  style: _vm.bgColor(subColor),
                  attrs: { "data-jest": "sub-combination-square" },
                  on: {
                    click: function($event) {
                      return _vm.storeColorCoordinate([index, subIndex])
                    }
                  }
                })
              : _vm._e()
          }),
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelSelector.vue?vue&type=template&id=cf73a10c&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "10" } },
            [
              _vm.loaded
                ? _c(
                    "v-expansion-panels",
                    { key: _vm.componentKey },
                    _vm._l(_vm.selectorCollection, function(
                      propertyCollection,
                      selector
                    ) {
                      return _c(
                        "v-expansion-panel",
                        { key: selector },
                        [
                          _c(
                            "v-row",
                            { staticClass: "px-3" },
                            [
                              _c(
                                "v-col",
                                { staticClass: "px-3" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "hide-details": "",
                                      outlined: "",
                                      "data-jest": "selector-card",
                                      value: selector,
                                      "append-icon": "mdi-delete-outline"
                                    },
                                    on: {
                                      "click:append": function($event) {
                                        return _vm.deleteSelector(selector)
                                      },
                                      change: function($event) {
                                        return _vm.changeSelector(
                                          selector,
                                          $event
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "v-col",
                                { attrs: { cols: "2" } },
                                [
                                  _c("v-expansion-panel-header", {
                                    staticClass: "pa-0",
                                    attrs: { "data-jest": "selector-accordion" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "v-expansion-panel-content",
                            { staticClass: "pa-0" },
                            [
                              _vm._l(propertyCollection, function(
                                value,
                                property
                              ) {
                                return _c(
                                  "v-row",
                                  {
                                    key: property,
                                    staticClass: "align-items-center",
                                    attrs: { "data-jest": "select-property" },
                                    on: {
                                      click: function($event) {
                                        return _vm.storeSelectorAndProperty(
                                          selector,
                                          property
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "9" } },
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                value: property,
                                                "data-jest": "property-edit"
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.changeProperty(
                                                    $event,
                                                    selector,
                                                    property
                                                  )
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _c("v-row", [
                                          property.type === "ratio"
                                            ? _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.makeRatio(property)
                                                  )
                                                )
                                              ])
                                            : _c("span", {
                                                attrs: { contenteditable: "" },
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.getProperty(value)
                                                  )
                                                },
                                                on: {
                                                  keypress: function($event) {
                                                    if (
                                                      !$event.type.indexOf(
                                                        "key"
                                                      ) &&
                                                      _vm._k(
                                                        $event.keyCode,
                                                        "enter",
                                                        13,
                                                        $event.key,
                                                        "Enter"
                                                      )
                                                    ) {
                                                      return null
                                                    }
                                                    $event.preventDefault()
                                                    $event.stopPropagation()
                                                    return _vm.saveEdit(
                                                      {
                                                        selector: selector,
                                                        property: property,
                                                        value: true
                                                      },
                                                      $event
                                                    )
                                                  }
                                                }
                                              })
                                        ])
                                      ],
                                      1
                                    ),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "3" } },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "w-auto pa-0",
                                            attrs: { text: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteProperty(
                                                  selector,
                                                  property
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-delete-outline")
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
                              }),
                              _c("v-text-field", {
                                staticClass: "css-panel__input",
                                attrs: {
                                  type: "text",
                                  label: "Add new property",
                                  "data-jest": "add-property"
                                },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.addProperty(
                                      $event.target.value,
                                      selector
                                    )
                                  }
                                }
                              })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [_c("ratio-palette"), _c("color-palette")],
            1
          )
        ],
        1
      ),
      _c("v-text-field", {
        staticClass: "css-panel__input",
        attrs: {
          label: "Add new selector",
          type: "text",
          "data-jest": "add-selector"
        },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.addSelector()
          }
        },
        model: {
          value: _vm.newSelectorName,
          callback: function($$v) {
            _vm.newSelectorName = $$v
          },
          expression: "newSelectorName"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/ratioPalette.vue?vue&type=template&id=8bda48ac&scoped=true&lang=pug& ***!
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
    [
      _vm._l(_vm.styleSet.ratioCollection, function(data, tag) {
        return [
          _c(
            "div",
            {
              staticClass: "rf-ratio--text-example",
              on: {
                click: function($event) {
                  return _vm.storeRatioCoordinate(tag)
                }
              }
            },
            [
              tag !== "html"
                ? _c(
                    tag,
                    { tag: "component", staticClass: "--inner-text-example" },
                    [_vm._v("…")]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      }),
      _c(
        "div",
        {
          staticClass: "rf-ratio--text-example __base",
          on: {
            click: function($event) {
              return _vm.storeRatioCoordinate("html")
            }
          }
        },
        [_vm._v("…")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2NvbG9yUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL3JhdGlvUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL3JhdGlvUGFsZXR0ZS52dWU/NDU4NSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZT9mMTUyIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jb2xvclBhbGV0dGUudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY29sb3JQYWxldHRlLnZ1ZT9hZTc2Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZT9iYTMxIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9yYXRpb1BhbGV0dGUudnVlPzE2NzkiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2NvbG9yUGFsZXR0ZS52dWU/NzQzMSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxTZWxlY3Rvci52dWU/ZGVhYyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZT9mMDBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esc0JBREE7QUFFQSw4QkFDQSxzRkFEQSxDQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBOztBQVFBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFoQkE7QUFMQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBLE1BQ0EscUVBQ0EsT0FEQSxDQURBLEVBSUE7QUFDQTtBQUVBO0FBQ0EsR0FSQSxNQVFBLElBQ0EseUJBQ0EscUJBREEsSUFFQSx3REFIQSxDQUdBO0FBSEEsSUFJQTtBQUNBO0FBQ0EsR0FOQSxNQU1BO0FBQ0EsbUVBQ0EsY0FEQSxDQUNBLE9BREE7QUFFQTtBQUNBLENBbkJBOztBQW9CQTtBQUNBLHVCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsR0FG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfY3NzUGFuZWxTZWxlY3Rvcl92dWUtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgICBkaXZcbiAgICAgICAgZGl2XG4gICAgICAgICAgICB2LWNhcmQodi1mb3I9XCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uZG9taW5hbnRTdWJDb2xsZWN0aW9uXCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwic3RvcmVDb2xvckNvb3JkaW5hdGUoWydkb21pbmFudCcsIGluZGV4XSlcIiB2LWlmPVwiIWNvbG9ySXNIaWRkZW4oJ2RvbWluYW50JywgaW5kZXgpXCIgY2xhc3M9XCJwYS0zXCIgdi1iaW5kOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIilcbiAgICAgICAgZGl2KHYtZm9yPVwiKGNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvblwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic3ViLWNvbG9yLXBhcmFtZXRlcnNcIilcbiAgICAgICAgICAgIHYtY2FyZCh2LWZvcj1cIihzdWJDb2xvciwgc3ViSW5kZXgpIGluIGNvbG9yLnN1YkNvbWJpbmF0aW9uXCIgOmtleT1cInN1YkluZGV4XCIgIEBjbGljaz1cInN0b3JlQ29sb3JDb29yZGluYXRlKFtpbmRleCwgc3ViSW5kZXhdKVwiIHYtaWY9XCIhY29sb3JJc0hpZGRlbignc3ViJywgc3ViSW5kZXgsIGluZGV4KVwiIDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIgY2xhc3M9XCJwYS0zXCIgZGF0YS1qZXN0PVwic3ViLWNvbWJpbmF0aW9uLXNxdWFyZVwiKVxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IGNvbG9ySGVscGVyIH0gZnJvbSBcIi4uL2NvbG9ySGVscGVyXCI7XG5jb25zdCBjb2xvclV0aWxzID0gbmV3IGNvbG9ySGVscGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDb2xvclBhbGV0dGVcIixcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtcImNvbG9yU2V0XCIsIFwic3R5bGVTZXRcIiwgXCJzZXR0aW5nc1wiXSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGJnQ29sb3I6IGZ1bmN0aW9uKGNvbG9yKSB7XG4gICAgICByZXR1cm4gYGJhY2tncm91bmQ6JHtjb2xvclV0aWxzLmdldFN0cmluZyhjb2xvcil9YDtcbiAgICB9LFxuICAgIHN0b3JlQ29sb3JDb29yZGluYXRlKGNvb3JkaW5hdGVzKSB7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJjdXJyZW50Q29sb3JcIiwgY29vcmRpbmF0ZXMpO1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ0cmlnZ2VyTmV3U3R5bGVcIik7XG4gICAgfSxcbiAgICBjb2xvcklzSGlkZGVuKGxvY2F0aW9uLCBpbmRleCwgc3ViSW5kZXgpIHtcbiAgICAgIGxldCBoaWRkZW5Db21iaW5hdGlvbjtcbiAgICAgIGlmIChsb2NhdGlvbiA9PT0gXCJkb21pbmFudFwiKSB7XG4gICAgICAgIGhpZGRlbkNvbWJpbmF0aW9uID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl07XG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSBcInN1YlwiKSB7XG4gICAgICAgIGhpZGRlbkNvbWJpbmF0aW9uID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl1bc3ViSW5kZXhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhpZGRlbkNvbWJpbmF0aW9uPy5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gaW5kZXgpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgZGl2XG4gICAgICAgIHYtcm93XG4gICAgICAgICAgICB2LWNvbChjb2xzPVwiMTBcIilcbiAgICAgICAgICAgICAgICB2LWV4cGFuc2lvbi1wYW5lbHMoOmtleT1cImNvbXBvbmVudEtleVwiIHYtaWY9XCJsb2FkZWRcIilcbiAgICAgICAgICAgICAgICAgICAgdi1leHBhbnNpb24tcGFuZWwodi1mb3I9XCIocHJvcGVydHlDb2xsZWN0aW9uLCBzZWxlY3RvcikgaW4gc2VsZWN0b3JDb2xsZWN0aW9uXCIgOmtleT1cInNlbGVjdG9yXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB2LXJvdyhjbGFzcz1cInB4LTNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWNvbChjbGFzcz1cInB4LTNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKGhpZGUtZGV0YWlscz10cnVlIG91dGxpbmVkPXRydWUgZGF0YS1qZXN0PVwic2VsZWN0b3ItY2FyZFwiIEBjbGljazphcHBlbmQ9XCJkZWxldGVTZWxlY3RvcihzZWxlY3RvcilcIiA6dmFsdWU9XCJzZWxlY3RvclwiIEBjaGFuZ2U9XCJjaGFuZ2VTZWxlY3RvcihzZWxlY3RvciwgJGV2ZW50KVwiIGFwcGVuZC1pY29uPVwibWRpLWRlbGV0ZS1vdXRsaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1jb2woY29scz1cIjJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1leHBhbnNpb24tcGFuZWwtaGVhZGVyKGNsYXNzPVwicGEtMFwiIGRhdGEtamVzdD1cInNlbGVjdG9yLWFjY29yZGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdi1leHBhbnNpb24tcGFuZWwtY29udGVudChjbGFzcz1cInBhLTBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXJvdyhjbGFzcz1cImFsaWduLWl0ZW1zLWNlbnRlclwiIGRhdGEtamVzdD1cInNlbGVjdC1wcm9wZXJ0eVwiIHYtZm9yPVwiKHZhbHVlLCBwcm9wZXJ0eSkgaW4gcHJvcGVydHlDb2xsZWN0aW9uXCIgOmtleT1cInByb3BlcnR5XCIgdi1vbjpjbGljaz1cInN0b3JlU2VsZWN0b3JBbmRQcm9wZXJ0eShzZWxlY3RvciwgcHJvcGVydHkpXCIgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWNvbChjb2xzPVwiOVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1yb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQoQGNoYW5nZT1cImNoYW5nZVByb3BlcnR5KCRldmVudCwgc2VsZWN0b3IsIHByb3BlcnR5KVwiIDp2YWx1ZT1cInByb3BlcnR5XCIgZGF0YS1qZXN0PVwicHJvcGVydHktZWRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1yb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuKHYtaWY9XCJwcm9wZXJ0eS50eXBlID09PSAncmF0aW8nXCIpIHt7bWFrZVJhdGlvKHByb3BlcnR5KX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbih2LWVsc2UgY29udGVudGVkaXRhYmxlPXRydWUgQGtleXByZXNzLmVudGVyLnByZXZlbnQuc3RvcD1cInNhdmVFZGl0KHtzZWxlY3RvcjpzZWxlY3RvciwgcHJvcGVydHk6cHJvcGVydHksIHZhbHVlOiB0cnVlfSAsICRldmVudClcIiB2LWh0bWw9XCJnZXRQcm9wZXJ0eSh2YWx1ZSlcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWNvbChjb2xzPVwiM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1idG4oY2xhc3M9XCJ3LWF1dG8gcGEtMFwiIHRleHQ9dHJ1ZSBAY2xpY2s9XCJkZWxldGVQcm9wZXJ0eShzZWxlY3Rvcixwcm9wZXJ0eSlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWljb24gbWRpLWRlbGV0ZS1vdXRsaW5lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cInRleHRcIiBsYWJlbD1cIkFkZCBuZXcgcHJvcGVydHlcIiBjbGFzcz1cImNzcy1wYW5lbF9faW5wdXRcIiAgQGtleXVwLmVudGVyPVwiYWRkUHJvcGVydHkoJGV2ZW50LnRhcmdldC52YWx1ZSxzZWxlY3RvcilcIiBkYXRhLWplc3Q9XCJhZGQtcHJvcGVydHlcIilcbiAgICAgICAgICAgIHYtY29sKGNvbHM9XCIyXCIpXG4gICAgICAgICAgICAgICAgcmF0aW8tcGFsZXR0ZVxuICAgICAgICAgICAgICAgIGNvbG9yLXBhbGV0dGVcbiAgICAgICAgdi10ZXh0LWZpZWxkKGxhYmVsPVwiQWRkIG5ldyBzZWxlY3RvclwiIHR5cGU9XCJ0ZXh0XCIgIGNsYXNzPVwiY3NzLXBhbmVsX19pbnB1dFwiIHYtbW9kZWw9XCJuZXdTZWxlY3Rvck5hbWVcIiBAa2V5dXAuZW50ZXI9XCJhZGRTZWxlY3RvcigpXCIgZGF0YS1qZXN0PVwiYWRkLXNlbGVjdG9yXCIpXG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHsgY29sb3JIZWxwZXIgfSBmcm9tIFwiLi4vY29sb3JIZWxwZXJcIjtcblxuaW1wb3J0IHsgaXNIZXhDb2xvciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gXCIuLi8uLi9NZXNzYWdlcy9tZXNzYWdlcy5qc29uXCI7XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSBcIi4vY29sb3JQYWxldHRlLnZ1ZVwiO1xuaW1wb3J0IFJhdGlvUGFsZXR0ZSBmcm9tIFwiLi9yYXRpb1BhbGV0dGUudnVlXCI7XG5cbmNvbnN0IGNvbG9yVXRpbHMgPSBuZXcgY29sb3JIZWxwZXIoKTtcbmNvbnN0IGdldENvbG9yRnJvbUNvbGxlY3Rpb24gPSBmdW5jdGlvbihpbnN0YW5jZSwgZGF0YSkge1xuICBpZiAoXG4gICAgW1wiZG9taW5hbnRcIiwgXCJ3YXJuaW5nXCIsIFwiYWxlcnRcIiwgXCJpbmZvXCIsIFwiZ3JheVwiLCBcInN1Y2Nlc3NcIl0uaW5jbHVkZXMoXG4gICAgICBkYXRhWzBdXG4gICAgKVxuICApIHtcbiAgICBjb25zdCBpbmRleCA9IGAke2RhdGFbMF19U3ViQ29sbGVjdGlvbmA7XG5cbiAgICByZXR1cm4gaW5zdGFuY2UuY29sb3JDb2xsZWN0aW9uW2luZGV4XVtkYXRhWzFdXTtcbiAgfSBlbHNlIGlmIChcbiAgICBkYXRhWzBdID09PSB1bmRlZmluZWQgfHxcbiAgICBkYXRhWzFdID09PSB1bmRlZmluZWQgfHxcbiAgICAhaW5zdGFuY2UuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvbltkYXRhWzBdXSAvLyBpbXBvcnRhbnQgZm9yIHdoZW4geW91IHJlZHVjZSB0aGUgbnVtYmVyIG9mIGNvbG9yc1xuICApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvbltkYXRhWzBdXVxuICAgICAgLnN1YkNvbWJpbmF0aW9uW2RhdGFbMV1dO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNlbGVjdG9yUGFuZWxcIixcbiAgY29tcG9uZW50czogeyBDb2xvclBhbGV0dGUsIFJhdGlvUGFsZXR0ZSB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U2VsZWN0b3JQcm9wZXJ0eToge30sXG4gICAgICBuZXdTZWxlY3RvcjogXCJcIixcbiAgICAgIG5ld1Byb3BlcnR5OiB7fSxcbiAgICAgIGNvbG9yTWFwcGluZzoge30sXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgbmV3U2VsZWN0b3JOYW1lOiBcIlwiLFxuICAgICAgY29tcG9uZW50S2V5OiB0cnVlXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoW1wiYWRkQWxlcnRcIiwgXCJ0cmlnZ2VyTmV3U3R5bGVcIl0pLFxuICAgIHN0b3JlU2VsZWN0b3JBbmRQcm9wZXJ0eTogZnVuY3Rpb24oc2VsZWN0b3IsIHByb3BlcnR5KSB7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJjdXJyZW50U2VsZWN0b3JcIiwge1xuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBtYWtlUmF0aW8ocHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eS5kYXRhID09PSBcImh0bWxcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMucmF0aW9Db2xsZWN0aW9uW3Byb3BlcnR5LmRhdGFdW1wibGluZS1oZWlnaHRcIl0gL1xuICAgICAgICAgICAgdGhpcy5yYXRpb0NvbGxlY3Rpb25bcHJvcGVydHkuZGF0YV1bXCJmb250LXNpemVcIl0gK1xuICAgICAgICAgIFwicmVtXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAocGFyc2VGbG9hdCh0aGlzLnJhdGlvQ29sbGVjdGlvbltwcm9wZXJ0eS5kYXRhXVtcImxpbmUtaGVpZ2h0XCJdKSArXG4gICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnJhdGlvQ29sbGVjdGlvbltwcm9wZXJ0eS5kYXRhXVtcIm1hcmdpbi10b3BcIl0gfHwgMCkgK1xuICAgICAgICAgIHBhcnNlRmxvYXQoXG4gICAgICAgICAgICB0aGlzLnJhdGlvQ29sbGVjdGlvbltwcm9wZXJ0eS5kYXRhXVtcIm1hcmdpbi1ib3R0b21cIl0gfHwgMFxuICAgICAgICAgICkpICpcbiAgICAgICAgICAxMDBcbiAgICAgICkgLyAxMDB9cmVtYDtcbiAgICB9LFxuICAgIGFkZFNlbGVjdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5uZXdTZWxlY3Rvck5hbWUpIHtcbiAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSB0byB3cml0ZSBhIHZhbGlkIENTUyBzZWxlY3RvclwiLFxuICAgICAgICAgIHR5cGU6IFwiaW5mb1wiXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm5ld1NlbGVjdG9yTmFtZSBpbiB0aGlzLnNlbGVjdG9yQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLndhcm5pbmdNZXNzYWdlID0ge1xuICAgICAgICAgIHRleHQ6IG1lc3NhZ2VzLndhcm5pbmdzLmR1cGxpY2F0ZUtleSxcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICB0ZXh0VmFyaWFibGU6IHRoaXMubmV3U2VsZWN0b3JOYW1lXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkZFNlbGVjdG9yXCIsIHRoaXMubmV3U2VsZWN0b3JOYW1lKTtcbiAgICAgICAgdGhpcy5uZXdTZWxlY3Rvck5hbWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWRkUHJvcGVydHk6IGZ1bmN0aW9uKHZhbHVlLCBzZWxlY3Rvcikge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIHRvIHdyaXRlIGEgdmFsaWQgQ1NTIHByb3BlcnR5XCIsXG4gICAgICAgICAgdHlwZTogXCJpbmZvXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluIHRoaXMuc2VsZWN0b3JDb2xsZWN0aW9uW3NlbGVjdG9yXSkge1xuICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICB0ZXh0OiBgVGhlIHByb3BlcnR5ICR7dmFsdWV9IGFscmVhZHkgZXhpc3RzIGluICR7c2VsZWN0b3J9YCxcbiAgICAgICAgICB0eXBlOiBcImluZm9cIlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiYWRkUHJvcGVydHlcIiwge1xuICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICBwcm9wZXJ0eTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImN1cnJlbnRTZWxlY3RvclwiLCB7XG4gICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgIHByb3BlcnR5OiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFByb3BlcnR5OiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgaWYgKGlzSGV4Q29sb3IocHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cIndpZHRoOjEwcHg7IGhlaWdodDoxMHB4OyBiYWNrZ3JvdW5kOiR7cHJvcGVydHl9XCI+PC9kaXY+YDtcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkudHlwZSA9PT0gXCJjb2xvclwiKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gZ2V0Q29sb3JGcm9tQ29sbGVjdGlvbih0aGlzLCBwcm9wZXJ0eS5kYXRhKTtcblxuICAgICAgICBzZWxlY3RlZENvbG9yID0gY29sb3JVdGlscy5oc2xUb0hleChzZWxlY3RlZENvbG9yKS5nZXRTdHJpbmcoKTtcbiAgICAgICAgdGhpcy5jb2xvck1hcHBpbmdbSlNPTi5zdHJpbmdpZnkocHJvcGVydHkuZGF0YSldID0gc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwid2lkdGg6MTBweDsgaGVpZ2h0OjEwcHg7IGJhY2tncm91bmQ6JHtzZWxlY3RlZENvbG9yfVwiPjwvZGl2PmA7XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnR5cGUgPT09IFwicmF0aW9cIikge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmF0aW8ocHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZGVsZXRlUHJvcGVydHkoc2VsZWN0b3IsIHByb3BlcnR5KSB7XG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImF3YWl0Q29uZmlybWF0aW9uXCIsIHtcbiAgICAgICAgdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtwcm9wZXJ0eS50b1VwcGVyQ2FzZSgpfSBmcm9tICR7c2VsZWN0b3J9ID9gLFxuICAgICAgICB0eXBlOiBcImluZm9cIlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLnNlbGVjdG9yQ29sbGVjdGlvbltzZWxlY3Rvcl0sIHByb3BlcnR5KTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGV0ZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImF3YWl0Q29uZmlybWF0aW9uXCIsIHtcbiAgICAgICAgdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtzZWxlY3Rvci50b1VwcGVyQ2FzZSgpfSBhbmQgYWxsIGl0J3MgcHJvcGVydGllcyA/YCxcbiAgICAgICAgdHlwZTogXCJpbmZvXCJcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZGVsZXRlKHRoaXMuc2VsZWN0b3JDb2xsZWN0aW9uLCBzZWxlY3Rvcik7XG4gICAgfSxcbiAgICBjaGFuZ2VTZWxlY3RvcihzZWxlY3RvciwgZXZlbnQpIHtcbiAgICAgIGlmICghKGV2ZW50IGluIHRoaXMuc3R5bGVTZXQuc2VsZWN0b3JDb2xsZWN0aW9uKSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInVwZGF0ZVNlbGVjdG9yXCIsIHtcbiAgICAgICAgICBvbGQ6IHNlbGVjdG9yLFxuICAgICAgICAgIG5ldzogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBvbmVudEtleSA9ICF0aGlzLmNvbXBvbmVudEtleTsgLy9jYW5jZWwgY2hhbmdlc1xuICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICB0ZXh0OiBgVGhlIHNlbGVjdG9yICR7ZXZlbnQudG9VcHBlckNhc2UoKX0gYWxyZWFkeSBleGlzdHNgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbmdlUHJvcGVydHkoZXZlbnQsIHNlbGVjdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgaWYgKCEoZXZlbnQgaW4gdGhpcy5zdHlsZVNldC5zZWxlY3RvckNvbGxlY3Rpb25bc2VsZWN0b3JdKSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInVwZGF0ZVByb3BlcnR5XCIsIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgb2xkOiBwcm9wZXJ0eSxcbiAgICAgICAgICBuZXc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRLZXkgPSAhdGhpcy5jb21wb25lbnRLZXk7IC8vY2FuY2VsIGNoYW5nZXNcbiAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgdGV4dDogYFRoZSBwcm9wZXJ0eSAke2V2ZW50LnRvVXBwZXJDYXNlKCl9IGFscmVhZHkgZXhpc3RzYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXCJzdHlsZVNldFwiLCBcImNvbG9yU2V0XCIsIFwicmF0aW9Db2xsZWN0aW9uXCIsIFwibG9hZGVkXCJdKSxcbiAgICBzZWxlY3RvckNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZVNldC5zZWxlY3RvckNvbGxlY3Rpb247XG4gICAgfSxcbiAgICBjb2xvckNvbGxlY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgICBkaXZcbiAgICAgICAgdGVtcGxhdGUodi1mb3I9XCIoZGF0YSwgdGFnKSBpbiBzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25cIilcbiAgICAgICAgICAgIGRpdihjbGFzcz1cInJmLXJhdGlvLS10ZXh0LWV4YW1wbGVcIiBAY2xpY2s9XCJzdG9yZVJhdGlvQ29vcmRpbmF0ZSh0YWcpXCIpXG4gICAgICAgICAgICAgICAgY29tcG9uZW50KHYtaWY9XCJ0YWcgIT09ICdodG1sJ1wiIDppcz1cInRhZ1wiIGNsYXNzPVwiLS1pbm5lci10ZXh0LWV4YW1wbGVcIikg4oCmXG4gICAgICAgIGRpdihjbGFzcz1cInJmLXJhdGlvLS10ZXh0LWV4YW1wbGUgX19iYXNlXCIgICBAY2xpY2s9XCJzdG9yZVJhdGlvQ29vcmRpbmF0ZSgnaHRtbCcpXCIpIOKAplxuXG5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUmF0aW9QYWxldHRlXCIsXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXCJzdHlsZVNldFwiLCBcImxvYWRlZFwiXSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN0b3JlUmF0aW9Db29yZGluYXRlKGNvb3JkaW5hdGVzKSB7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJjdXJyZW50UmF0aW9cIiwgY29vcmRpbmF0ZXMpO1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ0cmlnZ2VyTmV3U3R5bGVcIik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucmYtcmF0aW8tLXRleHQtZXhhbXBsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICM1NTU1NTUgc29saWQ7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgfVxuICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggI2FhYSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICB9XG4gICYuX19iYXNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHZhcigtLXNlY29uZGFyeSkgc29saWQ7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlW2RhdGEtdi04YmRhNDhhY10ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGVbZGF0YS12LThiZGE0OGFjXTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICM1NTU1NTUgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlW2RhdGEtdi04YmRhNDhhY106bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggI2FhYSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZDogI2FhYTtcXG59XFxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGUuX19iYXNlW2RhdGEtdi04YmRhNDhhY10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXItbGVmdDogMTVweCB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9BcHAvVWkvQ29tcG9uZW50cy9yYXRpb1BhbGV0dGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2QkE7RUFDQSxnQkFBQTtBQWFBO0FBWkE7SUFDQSwrQkFBQTtJQUNBLGdCQUFBO0FBQ0E7QUFDQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7QUFDQTtBQUNBO0lBQ0Esa0NBQUE7SUFDQSx3Q0FBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBsYW5nPVxcXCJwdWdcXFwiPlxcbiAgICBkaXZcXG4gICAgICAgIHRlbXBsYXRlKHYtZm9yPVxcXCIoZGF0YSwgdGFnKSBpbiBzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25cXFwiKVxcbiAgICAgICAgICAgIGRpdihjbGFzcz1cXFwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVxcXCIgQGNsaWNrPVxcXCJzdG9yZVJhdGlvQ29vcmRpbmF0ZSh0YWcpXFxcIilcXG4gICAgICAgICAgICAgICAgY29tcG9uZW50KHYtaWY9XFxcInRhZyAhPT0gJ2h0bWwnXFxcIiA6aXM9XFxcInRhZ1xcXCIgY2xhc3M9XFxcIi0taW5uZXItdGV4dC1leGFtcGxlXFxcIikg4oCmXFxuICAgICAgICBkaXYoY2xhc3M9XFxcInJmLXJhdGlvLS10ZXh0LWV4YW1wbGUgX19iYXNlXFxcIiAgIEBjbGljaz1cXFwic3RvcmVSYXRpb0Nvb3JkaW5hdGUoJ2h0bWwnKVxcXCIpIOKAplxcblxcblxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSBcXFwidnVleFxcXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgbmFtZTogXFxcIlJhdGlvUGFsZXR0ZVxcXCIsXFxuICBjb21wdXRlZDoge1xcbiAgICAuLi5tYXBHZXR0ZXJzKFtcXFwic3R5bGVTZXRcXFwiLCBcXFwibG9hZGVkXFxcIl0pXFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBzdG9yZVJhdGlvQ29vcmRpbmF0ZShjb29yZGluYXRlcykge1xcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwiY3VycmVudFJhdGlvXFxcIiwgY29vcmRpbmF0ZXMpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFxcXCJ0cmlnZ2VyTmV3U3R5bGVcXFwiKTtcXG4gICAgfVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4ucmYtcmF0aW8tLXRleHQtZXhhbXBsZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgJjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICM1NTU1NTUgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxuICB9XFxuICAmOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICNhYWEgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6ICNhYWE7XFxuICB9XFxuICAmLl9fYmFzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHZhcigtLXNlY29uZGFyeSkgc29saWQ7XFxuICB9XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04YmRhNDhhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OGJkYTQ4YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04YmRhNDhhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJiZjc1NTImc2NvcGVkPXRydWUmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGJiZjc1NTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYmJmNzU1MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYmJmNzU1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYmJmNzU1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmJmNzU1MiZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYmJmNzU1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvY29sb3JQYWxldHRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY3NzUGFuZWxTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Y3M2ExMGMmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY3NzUGFuZWxTZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Nzc1BhbmVsU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjZjczYTEwYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjZjczYTEwYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjZjczYTEwYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY3NzUGFuZWxTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Y3M2ExMGMmbGFuZz1wdWcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2Y3M2ExMGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsU2VsZWN0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThiZGE0OGFjJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcmF0aW9QYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPThiZGE0OGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4YmRhNDhhY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhiZGE0OGFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhiZGE0OGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhiZGE0OGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThiZGE0OGFjJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhiZGE0OGFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9yYXRpb1BhbGV0dGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxTZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmF0aW9QYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIF92bS5fbChfdm0uY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmRvbWluYW50U3ViQ29sbGVjdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgICAgc3ViQ29sb3IsXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuICFfdm0uY29sb3JJc0hpZGRlbihcImRvbWluYW50XCIsIGluZGV4KVxuICAgICAgICAgICAgPyBfYyhcInYtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0zXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3JlQ29sb3JDb29yZGluYXRlKFtcImRvbWluYW50XCIsIGluZGV4XSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl9sKF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGluZGV4XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJzdWItY29sb3ItcGFyYW1ldGVyc1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKGNvbG9yLnN1YkNvbWJpbmF0aW9uLCBmdW5jdGlvbihzdWJDb2xvciwgc3ViSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAhX3ZtLmNvbG9ySXNIaWRkZW4oXCJzdWJcIiwgc3ViSW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICA/IF9jKFwidi1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogc3ViSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0zXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmJnQ29sb3Ioc3ViQ29sb3IpLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJzdWItY29tYmluYXRpb24tc3F1YXJlXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3JlQ29sb3JDb29yZGluYXRlKFtpbmRleCwgc3ViSW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5sb2FkZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZXhwYW5zaW9uLXBhbmVsc1wiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogX3ZtLmNvbXBvbmVudEtleSB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlbGVjdG9yQ29sbGVjdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlDb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1leHBhbnNpb24tcGFuZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBzZWxlY3RvciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJweC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInB4LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwic2VsZWN0b3ItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJtZGktZGVsZXRlLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2s6YXBwZW5kXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlU2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJzZWxlY3Rvci1hY2NvcmRpb25cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhLTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwcm9wZXJ0eUNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwic2VsZWN0LXByb3BlcnR5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3JlU2VsZWN0b3JBbmRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCI5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWplc3RcIjogXCJwcm9wZXJ0eS1lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudHlwZSA9PT0gXCJyYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYWtlUmF0aW8ocHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb250ZW50ZWRpdGFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQcm9wZXJ0eSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZUVkaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctYXV0byBwYS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZGktZGVsZXRlLW91dGxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjc3MtcGFuZWxfX2lucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWRkIG5ldyBwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwiYWRkLXByb3BlcnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjJcIiB9IH0sXG4gICAgICAgICAgICBbX2MoXCJyYXRpby1wYWxldHRlXCIpLCBfYyhcImNvbG9yLXBhbGV0dGVcIildLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3NzLXBhbmVsX19pbnB1dFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcIkFkZCBuZXcgc2VsZWN0b3JcIixcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBcImRhdGEtamVzdFwiOiBcImFkZC1zZWxlY3RvclwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRTZWxlY3RvcigpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ubmV3U2VsZWN0b3JOYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5uZXdTZWxlY3Rvck5hbWUgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3U2VsZWN0b3JOYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uX2woX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbiwgZnVuY3Rpb24oZGF0YSwgdGFnKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZi1yYXRpby0tdGV4dC1leGFtcGxlXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9yZVJhdGlvQ29vcmRpbmF0ZSh0YWcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB0YWcgIT09IFwiaHRtbFwiXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgdGFnLFxuICAgICAgICAgICAgICAgICAgICB7IHRhZzogXCJjb21wb25lbnRcIiwgc3RhdGljQ2xhc3M6IFwiLS1pbm5lci10ZXh0LWV4YW1wbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi4oCmXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmYtcmF0aW8tLXRleHQtZXhhbXBsZSBfX2Jhc2VcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3JlUmF0aW9Db29yZGluYXRlKFwiaHRtbFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIuKAplwiKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=