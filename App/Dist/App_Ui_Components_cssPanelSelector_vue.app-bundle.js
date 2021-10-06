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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2NvbG9yUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL3JhdGlvUGFsZXR0ZS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL3JhdGlvUGFsZXR0ZS52dWU/NDU4NSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZT9mMTUyIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jb2xvclBhbGV0dGUudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY29sb3JQYWxldHRlLnZ1ZT9hZTc2Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZT9iYTMxIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9yYXRpb1BhbGV0dGUudnVlPzE2NzkiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL2NvbG9yUGFsZXR0ZS52dWU/NzQzMSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxTZWxlY3Rvci52dWU/ZGVhYyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZT9mMDBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esc0JBREE7QUFFQSw4QkFDQSxzRkFEQSxDQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBOztBQVFBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFoQkE7QUFMQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBLE1BQ0EscUVBQ0EsT0FEQSxDQURBLEVBSUE7QUFDQTtBQUVBO0FBQ0EsR0FSQSxNQVFBLElBQ0EseUJBQ0EscUJBREEsSUFFQSx3REFIQSxDQUdBO0FBSEEsSUFJQTtBQUNBO0FBQ0EsR0FOQSxNQU1BO0FBQ0EsbUVBQ0EsY0FEQSxDQUNBLE9BREE7QUFFQTtBQUNBLENBbkJBOztBQW9CQTtBQUNBLHVCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsR0FG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfY3NzUGFuZWxTZWxlY3Rvcl92dWUuYXBwLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgZGl2XG4gICAgICAgIGRpdlxuICAgICAgICAgICAgdi1jYXJkKHYtZm9yPVwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmRvbWluYW50U3ViQ29sbGVjdGlvblwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInN0b3JlQ29sb3JDb29yZGluYXRlKFsnZG9taW5hbnQnLCBpbmRleF0pXCIgdi1pZj1cIiFjb2xvcklzSGlkZGVuKCdkb21pbmFudCcsIGluZGV4KVwiIGNsYXNzPVwicGEtM1wiIHYtYmluZDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIpXG4gICAgICAgIGRpdih2LWZvcj1cIihjb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb25cIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN1Yi1jb2xvci1wYXJhbWV0ZXJzXCIpXG4gICAgICAgICAgICB2LWNhcmQodi1mb3I9XCIoc3ViQ29sb3IsIHN1YkluZGV4KSBpbiBjb2xvci5zdWJDb21iaW5hdGlvblwiIDprZXk9XCJzdWJJbmRleFwiICBAY2xpY2s9XCJzdG9yZUNvbG9yQ29vcmRpbmF0ZShbaW5kZXgsIHN1YkluZGV4XSlcIiB2LWlmPVwiIWNvbG9ySXNIaWRkZW4oJ3N1YicsIHN1YkluZGV4LCBpbmRleClcIiA6c3R5bGU9XCJiZ0NvbG9yKHN1YkNvbG9yKVwiIGNsYXNzPVwicGEtM1wiIGRhdGEtamVzdD1cInN1Yi1jb21iaW5hdGlvbi1zcXVhcmVcIilcbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyBjb2xvckhlbHBlciB9IGZyb20gXCIuLi9jb2xvckhlbHBlclwiO1xuY29uc3QgY29sb3JVdGlscyA9IG5ldyBjb2xvckhlbHBlcigpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ29sb3JQYWxldHRlXCIsXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXCJjb2xvclNldFwiLCBcInN0eWxlU2V0XCIsIFwic2V0dGluZ3NcIl0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiZ0NvbG9yOiBmdW5jdGlvbihjb2xvcikge1xuICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiR7Y29sb3JVdGlscy5nZXRTdHJpbmcoY29sb3IpfWA7XG4gICAgfSxcbiAgICBzdG9yZUNvbG9yQ29vcmRpbmF0ZShjb29yZGluYXRlcykge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY3VycmVudENvbG9yXCIsIGNvb3JkaW5hdGVzKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidHJpZ2dlck5ld1N0eWxlXCIpO1xuICAgIH0sXG4gICAgY29sb3JJc0hpZGRlbihsb2NhdGlvbiwgaW5kZXgsIHN1YkluZGV4KSB7XG4gICAgICBsZXQgaGlkZGVuQ29tYmluYXRpb247XG4gICAgICBpZiAobG9jYXRpb24gPT09IFwiZG9taW5hbnRcIikge1xuICAgICAgICBoaWRkZW5Db21iaW5hdGlvbiA9IHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PT0gXCJzdWJcIikge1xuICAgICAgICBoaWRkZW5Db21iaW5hdGlvbiA9IHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW3N1YkluZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoaWRkZW5Db21iaW5hdGlvbj8uZmluZChpdGVtID0+IGl0ZW0gPT09IGluZGV4KSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIGRpdlxuICAgICAgICB2LXJvd1xuICAgICAgICAgICAgdi1jb2woY29scz1cIjEwXCIpXG4gICAgICAgICAgICAgICAgdi1leHBhbnNpb24tcGFuZWxzKDprZXk9XCJjb21wb25lbnRLZXlcIiB2LWlmPVwibG9hZGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHYtZXhwYW5zaW9uLXBhbmVsKHYtZm9yPVwiKHByb3BlcnR5Q29sbGVjdGlvbiwgc2VsZWN0b3IpIGluIHNlbGVjdG9yQ29sbGVjdGlvblwiIDprZXk9XCJzZWxlY3RvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdi1yb3coY2xhc3M9XCJweC0zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1jb2woY2xhc3M9XCJweC0zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dC1maWVsZChoaWRlLWRldGFpbHM9dHJ1ZSBvdXRsaW5lZD10cnVlIGRhdGEtamVzdD1cInNlbGVjdG9yLWNhcmRcIiBAY2xpY2s6YXBwZW5kPVwiZGVsZXRlU2VsZWN0b3Ioc2VsZWN0b3IpXCIgOnZhbHVlPVwic2VsZWN0b3JcIiBAY2hhbmdlPVwiY2hhbmdlU2VsZWN0b3Ioc2VsZWN0b3IsICRldmVudClcIiBhcHBlbmQtaWNvbj1cIm1kaS1kZWxldGUtb3V0bGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtY29sKGNvbHM9XCIyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcihjbGFzcz1cInBhLTBcIiBkYXRhLWplc3Q9XCJzZWxlY3Rvci1hY2NvcmRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQoY2xhc3M9XCJwYS0wXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1yb3coY2xhc3M9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIiBkYXRhLWplc3Q9XCJzZWxlY3QtcHJvcGVydHlcIiB2LWZvcj1cIih2YWx1ZSwgcHJvcGVydHkpIGluIHByb3BlcnR5Q29sbGVjdGlvblwiIDprZXk9XCJwcm9wZXJ0eVwiIHYtb246Y2xpY2s9XCJzdG9yZVNlbGVjdG9yQW5kUHJvcGVydHkoc2VsZWN0b3IsIHByb3BlcnR5KVwiIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1jb2woY29scz1cIjlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKEBjaGFuZ2U9XCJjaGFuZ2VQcm9wZXJ0eSgkZXZlbnQsIHNlbGVjdG9yLCBwcm9wZXJ0eSlcIiA6dmFsdWU9XCJwcm9wZXJ0eVwiIGRhdGEtamVzdD1cInByb3BlcnR5LWVkaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbih2LWlmPVwicHJvcGVydHkudHlwZSA9PT0gJ3JhdGlvJ1wiKSB7e21ha2VSYXRpbyhwcm9wZXJ0eSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4odi1lbHNlIGNvbnRlbnRlZGl0YWJsZT10cnVlIEBrZXlwcmVzcy5lbnRlci5wcmV2ZW50LnN0b3A9XCJzYXZlRWRpdCh7c2VsZWN0b3I6c2VsZWN0b3IsIHByb3BlcnR5OnByb3BlcnR5LCB2YWx1ZTogdHJ1ZX0gLCAkZXZlbnQpXCIgdi1odG1sPVwiZ2V0UHJvcGVydHkodmFsdWUpXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1jb2woY29scz1cIjNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYnRuKGNsYXNzPVwidy1hdXRvIHBhLTBcIiB0ZXh0PXRydWUgQGNsaWNrPVwiZGVsZXRlUHJvcGVydHkoc2VsZWN0b3IscHJvcGVydHkpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pY29uIG1kaS1kZWxldGUtb3V0bGluZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJBZGQgbmV3IHByb3BlcnR5XCIgY2xhc3M9XCJjc3MtcGFuZWxfX2lucHV0XCIgIEBrZXl1cC5lbnRlcj1cImFkZFByb3BlcnR5KCRldmVudC50YXJnZXQudmFsdWUsc2VsZWN0b3IpXCIgZGF0YS1qZXN0PVwiYWRkLXByb3BlcnR5XCIpXG4gICAgICAgICAgICB2LWNvbChjb2xzPVwiMlwiKVxuICAgICAgICAgICAgICAgIHJhdGlvLXBhbGV0dGVcbiAgICAgICAgICAgICAgICBjb2xvci1wYWxldHRlXG4gICAgICAgIHYtdGV4dC1maWVsZChsYWJlbD1cIkFkZCBuZXcgc2VsZWN0b3JcIiB0eXBlPVwidGV4dFwiICBjbGFzcz1cImNzcy1wYW5lbF9faW5wdXRcIiB2LW1vZGVsPVwibmV3U2VsZWN0b3JOYW1lXCIgQGtleXVwLmVudGVyPVwiYWRkU2VsZWN0b3IoKVwiIGRhdGEtamVzdD1cImFkZC1zZWxlY3RvclwiKVxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbG9ySGVscGVyIH0gZnJvbSBcIi4uL2NvbG9ySGVscGVyXCI7XG5cbmltcG9ydCB7IGlzSGV4Q29sb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBtZXNzYWdlcyBmcm9tIFwiLi4vLi4vTWVzc2FnZXMvbWVzc2FnZXMuanNvblwiO1xuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gXCIuL2NvbG9yUGFsZXR0ZS52dWVcIjtcbmltcG9ydCBSYXRpb1BhbGV0dGUgZnJvbSBcIi4vcmF0aW9QYWxldHRlLnZ1ZVwiO1xuXG5jb25zdCBjb2xvclV0aWxzID0gbmV3IGNvbG9ySGVscGVyKCk7XG5jb25zdCBnZXRDb2xvckZyb21Db2xsZWN0aW9uID0gZnVuY3Rpb24oaW5zdGFuY2UsIGRhdGEpIHtcbiAgaWYgKFxuICAgIFtcImRvbWluYW50XCIsIFwid2FybmluZ1wiLCBcImFsZXJ0XCIsIFwiaW5mb1wiLCBcImdyYXlcIiwgXCJzdWNjZXNzXCJdLmluY2x1ZGVzKFxuICAgICAgZGF0YVswXVxuICAgIClcbiAgKSB7XG4gICAgY29uc3QgaW5kZXggPSBgJHtkYXRhWzBdfVN1YkNvbGxlY3Rpb25gO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlLmNvbG9yQ29sbGVjdGlvbltpbmRleF1bZGF0YVsxXV07XG4gIH0gZWxzZSBpZiAoXG4gICAgZGF0YVswXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgZGF0YVsxXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgIWluc3RhbmNlLmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb25bZGF0YVswXV0gLy8gaW1wb3J0YW50IGZvciB3aGVuIHlvdSByZWR1Y2UgdGhlIG51bWJlciBvZiBjb2xvcnNcbiAgKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb25bZGF0YVswXV1cbiAgICAgIC5zdWJDb21iaW5hdGlvbltkYXRhWzFdXTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTZWxlY3RvclBhbmVsXCIsXG4gIGNvbXBvbmVudHM6IHsgQ29sb3JQYWxldHRlLCBSYXRpb1BhbGV0dGUgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFNlbGVjdG9yUHJvcGVydHk6IHt9LFxuICAgICAgbmV3U2VsZWN0b3I6IFwiXCIsXG4gICAgICBuZXdQcm9wZXJ0eToge30sXG4gICAgICBjb2xvck1hcHBpbmc6IHt9LFxuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgIG5ld1NlbGVjdG9yTmFtZTogXCJcIixcbiAgICAgIGNvbXBvbmVudEtleTogdHJ1ZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFtcImFkZEFsZXJ0XCIsIFwidHJpZ2dlck5ld1N0eWxlXCJdKSxcbiAgICBzdG9yZVNlbGVjdG9yQW5kUHJvcGVydHk6IGZ1bmN0aW9uKHNlbGVjdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY3VycmVudFNlbGVjdG9yXCIsIHtcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbWFrZVJhdGlvKHByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHkuZGF0YSA9PT0gXCJodG1sXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLnJhdGlvQ29sbGVjdGlvbltwcm9wZXJ0eS5kYXRhXVtcImxpbmUtaGVpZ2h0XCJdIC9cbiAgICAgICAgICAgIHRoaXMucmF0aW9Db2xsZWN0aW9uW3Byb3BlcnR5LmRhdGFdW1wiZm9udC1zaXplXCJdICtcbiAgICAgICAgICBcInJlbVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgKHBhcnNlRmxvYXQodGhpcy5yYXRpb0NvbGxlY3Rpb25bcHJvcGVydHkuZGF0YV1bXCJsaW5lLWhlaWdodFwiXSkgK1xuICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5yYXRpb0NvbGxlY3Rpb25bcHJvcGVydHkuZGF0YV1bXCJtYXJnaW4tdG9wXCJdIHx8IDApICtcbiAgICAgICAgICBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgdGhpcy5yYXRpb0NvbGxlY3Rpb25bcHJvcGVydHkuZGF0YV1bXCJtYXJnaW4tYm90dG9tXCJdIHx8IDBcbiAgICAgICAgICApKSAqXG4gICAgICAgICAgMTAwXG4gICAgICApIC8gMTAwfXJlbWA7XG4gICAgfSxcbiAgICBhZGRTZWxlY3RvcjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMubmV3U2VsZWN0b3JOYW1lKSB7XG4gICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgdG8gd3JpdGUgYSB2YWxpZCBDU1Mgc2VsZWN0b3JcIixcbiAgICAgICAgICB0eXBlOiBcImluZm9cIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5uZXdTZWxlY3Rvck5hbWUgaW4gdGhpcy5zZWxlY3RvckNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy53YXJuaW5nTWVzc2FnZSA9IHtcbiAgICAgICAgICB0ZXh0OiBtZXNzYWdlcy53YXJuaW5ncy5kdXBsaWNhdGVLZXksXG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgdGV4dFZhcmlhYmxlOiB0aGlzLm5ld1NlbGVjdG9yTmFtZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhZGRTZWxlY3RvclwiLCB0aGlzLm5ld1NlbGVjdG9yTmFtZSk7XG4gICAgICAgIHRoaXMubmV3U2VsZWN0b3JOYW1lID0gXCJcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZFByb3BlcnR5OiBmdW5jdGlvbih2YWx1ZSwgc2VsZWN0b3IpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSB0byB3cml0ZSBhIHZhbGlkIENTUyBwcm9wZXJ0eVwiLFxuICAgICAgICAgIHR5cGU6IFwiaW5mb1wiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbiB0aGlzLnNlbGVjdG9yQ29sbGVjdGlvbltzZWxlY3Rvcl0pIHtcbiAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgdGV4dDogYFRoZSBwcm9wZXJ0eSAke3ZhbHVlfSBhbHJlYWR5IGV4aXN0cyBpbiAke3NlbGVjdG9yfWAsXG4gICAgICAgICAgdHlwZTogXCJpbmZvXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkZFByb3BlcnR5XCIsIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgcHJvcGVydHk6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJjdXJyZW50U2VsZWN0b3JcIiwge1xuICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICBwcm9wZXJ0eTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgIGlmIChpc0hleENvbG9yKHByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJ3aWR0aDoxMHB4OyBoZWlnaHQ6MTBweDsgYmFja2dyb3VuZDoke3Byb3BlcnR5fVwiPjwvZGl2PmA7XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICBsZXQgc2VsZWN0ZWRDb2xvciA9IGdldENvbG9yRnJvbUNvbGxlY3Rpb24odGhpcywgcHJvcGVydHkuZGF0YSk7XG5cbiAgICAgICAgc2VsZWN0ZWRDb2xvciA9IGNvbG9yVXRpbHMuaHNsVG9IZXgoc2VsZWN0ZWRDb2xvcikuZ2V0U3RyaW5nKCk7XG4gICAgICAgIHRoaXMuY29sb3JNYXBwaW5nW0pTT04uc3RyaW5naWZ5KHByb3BlcnR5LmRhdGEpXSA9IHNlbGVjdGVkQ29sb3I7XG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cIndpZHRoOjEwcHg7IGhlaWdodDoxMHB4OyBiYWNrZ3JvdW5kOiR7c2VsZWN0ZWRDb2xvcn1cIj48L2Rpdj5gO1xuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS50eXBlID09PSBcInJhdGlvXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJhdGlvKHByb3BlcnR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGRlbGV0ZVByb3BlcnR5KHNlbGVjdG9yLCBwcm9wZXJ0eSkge1xuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhd2FpdENvbmZpcm1hdGlvblwiLCB7XG4gICAgICAgIHRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7cHJvcGVydHkudG9VcHBlckNhc2UoKX0gZnJvbSAke3NlbGVjdG9yfSA/YCxcbiAgICAgICAgdHlwZTogXCJpbmZvXCJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRkZWxldGUodGhpcy5zZWxlY3RvckNvbGxlY3Rpb25bc2VsZWN0b3JdLCBwcm9wZXJ0eSk7XG4gICAgfSxcbiAgICBhc3luYyBkZWxldGVTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhd2FpdENvbmZpcm1hdGlvblwiLCB7XG4gICAgICAgIHRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7c2VsZWN0b3IudG9VcHBlckNhc2UoKX0gYW5kIGFsbCBpdCdzIHByb3BlcnRpZXMgP2AsXG4gICAgICAgIHR5cGU6IFwiaW5mb1wiXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLnNlbGVjdG9yQ29sbGVjdGlvbiwgc2VsZWN0b3IpO1xuICAgIH0sXG4gICAgY2hhbmdlU2VsZWN0b3Ioc2VsZWN0b3IsIGV2ZW50KSB7XG4gICAgICBpZiAoIShldmVudCBpbiB0aGlzLnN0eWxlU2V0LnNlbGVjdG9yQ29sbGVjdGlvbikpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ1cGRhdGVTZWxlY3RvclwiLCB7XG4gICAgICAgICAgb2xkOiBzZWxlY3RvcixcbiAgICAgICAgICBuZXc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRLZXkgPSAhdGhpcy5jb21wb25lbnRLZXk7IC8vY2FuY2VsIGNoYW5nZXNcbiAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgdGV4dDogYFRoZSBzZWxlY3RvciAke2V2ZW50LnRvVXBwZXJDYXNlKCl9IGFscmVhZHkgZXhpc3RzYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5nZVByb3BlcnR5KGV2ZW50LCBzZWxlY3RvciwgcHJvcGVydHkpIHtcbiAgICAgIGlmICghKGV2ZW50IGluIHRoaXMuc3R5bGVTZXQuc2VsZWN0b3JDb2xsZWN0aW9uW3NlbGVjdG9yXSkpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ1cGRhdGVQcm9wZXJ0eVwiLCB7XG4gICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgIG9sZDogcHJvcGVydHksXG4gICAgICAgICAgbmV3OiBldmVudFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50S2V5ID0gIXRoaXMuY29tcG9uZW50S2V5OyAvL2NhbmNlbCBjaGFuZ2VzXG4gICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgICAgIHRleHQ6IGBUaGUgcHJvcGVydHkgJHtldmVudC50b1VwcGVyQ2FzZSgpfSBhbHJlYWR5IGV4aXN0c2BcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1wic3R5bGVTZXRcIiwgXCJjb2xvclNldFwiLCBcInJhdGlvQ29sbGVjdGlvblwiLCBcImxvYWRlZFwiXSksXG4gICAgc2VsZWN0b3JDb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3R5bGVTZXQuc2VsZWN0b3JDb2xsZWN0aW9uO1xuICAgIH0sXG4gICAgY29sb3JDb2xsZWN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgZGl2XG4gICAgICAgIHRlbXBsYXRlKHYtZm9yPVwiKGRhdGEsIHRhZykgaW4gc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uXCIpXG4gICAgICAgICAgICBkaXYoY2xhc3M9XCJyZi1yYXRpby0tdGV4dC1leGFtcGxlXCIgQGNsaWNrPVwic3RvcmVSYXRpb0Nvb3JkaW5hdGUodGFnKVwiKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCh2LWlmPVwidGFnICE9PSAnaHRtbCdcIiA6aXM9XCJ0YWdcIiBjbGFzcz1cIi0taW5uZXItdGV4dC1leGFtcGxlXCIpIOKAplxuICAgICAgICBkaXYoY2xhc3M9XCJyZi1yYXRpby0tdGV4dC1leGFtcGxlIF9fYmFzZVwiICAgQGNsaWNrPVwic3RvcmVSYXRpb0Nvb3JkaW5hdGUoJ2h0bWwnKVwiKSDigKZcblxuXG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlJhdGlvUGFsZXR0ZVwiLFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1wic3R5bGVTZXRcIiwgXCJsb2FkZWRcIl0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzdG9yZVJhdGlvQ29vcmRpbmF0ZShjb29yZGluYXRlcykge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY3VycmVudFJhdGlvXCIsIGNvb3JkaW5hdGVzKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidHJpZ2dlck5ld1N0eWxlXCIpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICBib3JkZXItbGVmdDogMTVweCAjNTU1NTU1IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gIH1cbiAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICNhYWEgc29saWQ7XG4gICAgYmFja2dyb3VuZDogI2FhYTtcbiAgfVxuICAmLl9fYmFzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItbGVmdDogMTVweCB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xuICB9XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucmYtcmF0aW8tLXRleHQtZXhhbXBsZVtkYXRhLXYtOGJkYTQ4YWNdIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlW2RhdGEtdi04YmRhNDhhY106bnRoLWNoaWxkKG9kZCkge1xcbiAgICBib3JkZXItbGVmdDogMTVweCAjNTU1NTU1IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cXG4ucmYtcmF0aW8tLXRleHQtZXhhbXBsZVtkYXRhLXYtOGJkYTQ4YWNdOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICNhYWEgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6ICNhYWE7XFxufVxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlLl9fYmFzZVtkYXRhLXYtOGJkYTQ4YWNdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggdmFyKC0tc2Vjb25kYXJ5KSBzb2xpZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNkJBO0VBQ0EsZ0JBQUE7QUFhQTtBQVpBO0lBQ0EsK0JBQUE7SUFDQSxnQkFBQTtBQUNBO0FBQ0E7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0FBQ0E7QUFDQTtJQUNBLGtDQUFBO0lBQ0Esd0NBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgbGFuZz1cXFwicHVnXFxcIj5cXG4gICAgZGl2XFxuICAgICAgICB0ZW1wbGF0ZSh2LWZvcj1cXFwiKGRhdGEsIHRhZykgaW4gc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uXFxcIilcXG4gICAgICAgICAgICBkaXYoY2xhc3M9XFxcInJmLXJhdGlvLS10ZXh0LWV4YW1wbGVcXFwiIEBjbGljaz1cXFwic3RvcmVSYXRpb0Nvb3JkaW5hdGUodGFnKVxcXCIpXFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCh2LWlmPVxcXCJ0YWcgIT09ICdodG1sJ1xcXCIgOmlzPVxcXCJ0YWdcXFwiIGNsYXNzPVxcXCItLWlubmVyLXRleHQtZXhhbXBsZVxcXCIpIOKAplxcbiAgICAgICAgZGl2KGNsYXNzPVxcXCJyZi1yYXRpby0tdGV4dC1leGFtcGxlIF9fYmFzZVxcXCIgICBAY2xpY2s9XFxcInN0b3JlUmF0aW9Db29yZGluYXRlKCdodG1sJylcXFwiKSDigKZcXG5cXG5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gXFxcInZ1ZXhcXFwiO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG5hbWU6IFxcXCJSYXRpb1BhbGV0dGVcXFwiLFxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgLi4ubWFwR2V0dGVycyhbXFxcInN0eWxlU2V0XFxcIiwgXFxcImxvYWRlZFxcXCJdKVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgc3RvcmVSYXRpb0Nvb3JkaW5hdGUoY29vcmRpbmF0ZXMpIHtcXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImN1cnJlbnRSYXRpb1xcXCIsIGNvb3JkaW5hdGVzKTtcXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcXFwidHJpZ2dlck5ld1N0eWxlXFxcIik7XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICY6bnRoLWNoaWxkKG9kZCkge1xcbiAgICBib3JkZXItbGVmdDogMTVweCAjNTU1NTU1IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgfVxcbiAgJjpudGgtY2hpbGQoZXZlbikge1xcbiAgICBib3JkZXItbGVmdDogMTVweCAjYWFhIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgfVxcbiAgJi5fX2Jhc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBib3JkZXItbGVmdDogMTVweCB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbiAgfVxcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OGJkYTQ4YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmF0aW9QYWxldHRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPThiZGE0OGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OGJkYTQ4YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYmY3NTUyJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiYmY3NTUyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2V0aWVubmVyb3VnZS9XZWJzdG9ybVByb2plY3RzL3JmQ2xlYW4vcm91Z2VGcmFtZXdvcmsvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGJiZjc1NTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGJiZjc1NTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGJiZjc1NTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbG9yUGFsZXR0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJiZjc1NTImc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGJiZjc1NTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC9VaS9Db21wb25lbnRzL2NvbG9yUGFsZXR0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Nzc1BhbmVsU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmNzNhMTBjJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Nzc1BhbmVsU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jc3NQYW5lbFNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2V0aWVubmVyb3VnZS9XZWJzdG9ybVByb2plY3RzL3JmQ2xlYW4vcm91Z2VGcmFtZXdvcmsvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2Y3M2ExMGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2Y3M2ExMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2Y3M2ExMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Nzc1BhbmVsU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmNzNhMTBjJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2NmNzNhMTBjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFNlbGVjdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmF0aW9QYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YmRhNDhhYyZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04YmRhNDhhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOGJkYTQ4YWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4YmRhNDhhYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4YmRhNDhhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4YmRhNDhhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmF0aW9QYWxldHRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YmRhNDhhYyZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4YmRhNDhhYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvcmF0aW9QYWxldHRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2xvclBhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sb3JQYWxldHRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JhdGlvUGFsZXR0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yYXRpb1BhbGV0dGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBfdm0uX2woX3ZtLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5kb21pbmFudFN1YkNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgIHN1YkNvbG9yLFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAhX3ZtLmNvbG9ySXNIaWRkZW4oXCJkb21pbmFudFwiLCBpbmRleClcbiAgICAgICAgICAgID8gX2MoXCJ2LWNhcmRcIiwge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtM1wiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvciksXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9yZUNvbG9yQ29vcmRpbmF0ZShbXCJkb21pbmFudFwiLCBpbmRleF0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fbChfdm0uY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBpbmRleFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwic3ViLWNvbG9yLXBhcmFtZXRlcnNcIiB9LFxuICAgICAgICAgIF92bS5fbChjb2xvci5zdWJDb21iaW5hdGlvbiwgZnVuY3Rpb24oc3ViQ29sb3IsIHN1YkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gIV92bS5jb2xvcklzSGlkZGVuKFwic3ViXCIsIHN1YkluZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgPyBfYyhcInYtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHN1YkluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtM1wiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwic3ViLWNvbWJpbmF0aW9uLXNxdWFyZVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9yZUNvbG9yQ29vcmRpbmF0ZShbaW5kZXgsIHN1YkluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEwXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWV4cGFuc2lvbi1wYW5lbHNcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IF92bS5jb21wb25lbnRLZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RvckNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5Q29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZXhwYW5zaW9uLXBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogc2VsZWN0b3IgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHgtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJweC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcInNlbGVjdG9yLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwibWRpLWRlbGV0ZS1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrOmFwcGVuZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlU2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1leHBhbnNpb24tcGFuZWwtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwic2VsZWN0b3ItYWNjb3JkaW9uXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYS0wXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocHJvcGVydHlDb2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtamVzdFwiOiBcInNlbGVjdC1wcm9wZXJ0eVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9yZVNlbGVjdG9yQW5kUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiOVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwicHJvcGVydHktZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnR5cGUgPT09IFwicmF0aW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFrZVJhdGlvKHByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29udGVudGVkaXRhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UHJvcGVydHkodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzczogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVFZGl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LWF1dG8gcGEtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWRlbGV0ZS1vdXRsaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3NzLXBhbmVsX19pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZCBuZXcgcHJvcGVydHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcImFkZC1wcm9wZXJ0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIyXCIgfSB9LFxuICAgICAgICAgICAgW19jKFwicmF0aW8tcGFsZXR0ZVwiKSwgX2MoXCJjb2xvci1wYWxldHRlXCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNzcy1wYW5lbF9faW5wdXRcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCJBZGQgbmV3IHNlbGVjdG9yXCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJkYXRhLWplc3RcIjogXCJhZGQtc2VsZWN0b3JcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdm0uYWRkU2VsZWN0b3IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1NlbGVjdG9yTmFtZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0ubmV3U2VsZWN0b3JOYW1lID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1NlbGVjdG9yTmFtZVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLl9sKF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24sIGZ1bmN0aW9uKGRhdGEsIHRhZykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3RvcmVSYXRpb0Nvb3JkaW5hdGUodGFnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdGFnICE9PSBcImh0bWxcIlxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIHRhZyxcbiAgICAgICAgICAgICAgICAgICAgeyB0YWc6IFwiY29tcG9uZW50XCIsIHN0YXRpY0NsYXNzOiBcIi0taW5uZXItdGV4dC1leGFtcGxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuKAplwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJmLXJhdGlvLS10ZXh0LWV4YW1wbGUgX19iYXNlXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9yZVJhdGlvQ29vcmRpbmF0ZShcImh0bWxcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCLigKZcIildXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9