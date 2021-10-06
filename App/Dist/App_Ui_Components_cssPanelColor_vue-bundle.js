(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_cssPanelColor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colorHelper */ "./App/Ui/colorHelper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/components/VSlider/VSlider.js");
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



const colorUtils = new _colorHelper__WEBPACK_IMPORTED_MODULE_0__.colorHelper();

const generateNewColorSet = function generateNewColorSet(dominant, combination) {
  const newCombination = {};
  newCombination.hueVariation = parseInt(combination.hue) - parseInt(dominant.hue);

  if (parseInt(combination.saturation) !== parseInt(dominant.saturation)) {
    newCombination.saturation = parseInt(combination.saturation);
  }

  if (parseInt(combination.light) !== parseInt(dominant.light)) {
    newCombination.light = parseInt(combination.light);
  }

  return newCombination;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VSlider: vuetify_lib__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: ["panelOpened", "miniVariant"],

  data() {
    return {
      isMounted: false,
      dominantColorParams: null,
      ready: 0
    };
  },

  watch: {
    isMounted() {
      if (this.isMounted === true) {
        this.ready += 1;
      }
    },

    loaded() {
      if (this.loaded === true) {
        this.ready += 1;
      }
    },

    ready() {
      if (this.ready >= 2) {
        this.dominantColorParams = colorUtils.hexToHsl(this.styleSet.dominant).getValueCollection();
      }
    }

  },

  mounted() {
    this.isMounted = true;

    if (this.loaded === true) {
      this.ready += 1;
    }
  },

  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["updateSettings"])), {}, {
    resetSetting(setting, index) {
      let newSettings = this.styleSet.colorParameterCollection[index];
      delete newSettings[setting];
      this.$set(this.styleSet.colorParameterCollection, index, newSettings);
      this.regenerateColorSet();
    },

    bgColor: function bgColor(color) {
      return "background:".concat(colorUtils.getString(color));
    },

    getStringColor(color, hueOnly) {
      if (hueOnly) {
        color = JSON.parse(JSON.stringify(color));
        color.light = 50;
        color.saturation = 100;
      }

      return colorUtils.hslToHex(color).getString();
    },

    checkNum: function checkNum(number, min, max) {
      min = min ? min : 0;
      number = number < min ? min : number;
      number = number > max ? max : number;
      return isNaN(parseInt(number)) ? min : number;
    },
    updateColor: function updateColor() {
      if (!this.isMounted && !this.loaded) {
        //prevent initial trigger
        return;
      }

      this.$set(this.styleSet, "dominant", colorUtils.hslToHex(this.dominantColorParams).getString());
      this.colorSet.updateColor(this.dominantColorParams).generate(this.styleSet.colorParameterCollection, parseInt(this.styleSet.variationLightAmt), parseInt(this.styleSet.variationSatAmt));
    },
    updateCombinationColor: function updateCombinationColor(index) {
      this.$set(this.styleSet.colorParameterCollection, index, generateNewColorSet(this.dominantColorParams, this.colorSet.colorCollection.combinationCollection[index]));
      this.regenerateColorSet();
    },
    regenerateColorSet: function regenerateColorSet() {
      this.colorSet.generate(this.styleSet.colorParameterCollection, parseInt(this.styleSet.variationLightAmt), parseInt(this.styleSet.variationSatAmt));
    },
    isMainColor: function isMainColor(color, subColor) {
      return color === subColor;
    },
    stringify: function stringify(item) {
      return JSON.stringify(item);
    },
    addColor: function addColor() {
      const newColorSet = this.styleSet.colorParameterCollection;
      newColorSet.push({
        hueVariation: 0
      });
      this.colorSet.generate(this.styleSet.colorParameterCollection, parseInt(this.styleSet.variationLightAmt), parseInt(this.styleSet.variationSatAmt));
      this.styleSet.hiddenCombination.sub.push([]);
    },
    removeColor: function removeColor(index) {
      this.colorSet.colorCollection.combinationCollection.splice(index, 1);
      this.styleSet.colorParameterCollection.splice(index, 1);
      this.styleSet.hiddenCombination.sub.splice(index, 1);
    },
    updateVariationAmt: function updateVariationAmt() {
      this.colorSet.generate(this.styleSet.colorParameterCollection, parseInt(this.styleSet.variationLightAmt), parseInt(this.styleSet.variationSatAmt));
    },
    storeColorCoordinate: function storeColorCoordinate(coordinates) {
      this.$store.commit("currentColor", coordinates);
      this.$store.dispatch("triggerNewStyle");
    },

    toggleColor(location, index, locationIndex) {
      if (location === "dominant") {
        const existingItemIndex = this.styleSet.hiddenCombination[location].findIndex(item => item === index);

        if (existingItemIndex === -1) {
          this.styleSet.hiddenCombination[location].push(index);
        } else {
          this.styleSet.hiddenCombination[location].splice(existingItemIndex, 1);
        }
      } else if (location === "sub") {
        const existingItemIndex = this.styleSet.hiddenCombination[location][locationIndex].findIndex(item => item === index);

        if (existingItemIndex === -1) {
          this.styleSet.hiddenCombination[location][locationIndex].push(index);
        } else {
          this.styleSet.hiddenCombination[location][locationIndex].splice(existingItemIndex, 1);
        }
      }
    },

    colorIsHidden(location, index, subIndex) {
      let hiddenCombination;

      if (location === "dominant") {
        hiddenCombination = this.styleSet.hiddenCombination[location];
      } else if (location === "sub") {
        hiddenCombination = this.styleSet.hiddenCombination[location][subIndex];
      }

      return hiddenCombination.find(item => item === index) !== undefined;
    }

  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["loaded", "settings"])), {}, {
    styleSet() {
      return this.$store.getters.styleSet;
    },

    colorSet: {
      get() {
        return this.$store.getters.colorSet;
      },

      set(value) {
        this.$store.commit("colorSet", value);
      }

    },

    displayPanel() {
      return this.ready === 2;
    }

  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.color-panel--sample {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./App/Ui/Components/cssPanelColor.vue"],"names":[],"mappings":";AA0PA;EACA,aAAA;AACA","sourcesContent":["<template lang=\"pug\">\n    div(id=\"_color\" class=\"_panel\" v-if=\"displayPanel\")\n        v-card(class=\"_container pa-3 ma-3\" id=\"_range-light-container\")\n            v-slider(label=\"Light variation\" ticks=true tick-size=\"3\" min=\"0\" max=\"10\" name=\"variation-light-amt\" v-model=\"styleSet.variationLightAmt\" @change=\"updateVariationAmt()\" )\n            v-slider(label=\"Saturation variation\" ticks=true tick-size=\"3\" min=\"0\" max=\"10\" name=\"variation-sat-amt\" v-model=\"styleSet.variationSatAmt\" @change=\"updateVariationAmt()\" )\n        div(:style=\"bgColor(dominantColorParams)\" data-jest=\"dominant-preview\")\n            div(:style=\"bgColor(dominantColorParams)\" class=\"mb-0\")\n                v-slider(min=\"0\" max=\"360\" v-model=\"dominantColorParams.hue\" @change=\"updateColor()\" label=\"Hue\" thumb-label=\"always\" :thumb-color=\"getStringColor(dominantColorParams, true)\" ref=\"dominantHue\")\n                v-slider(min=\"0\" label=\"light\" max=\"100\" thumb-label=\"always\" @change=\"updateColor()\" v-model=\"dominantColorParams.light\" ref=\"dominantLight\")\n                v-slider(min=\"0\" max=\"100\" thumb-label=\"always\" @change=\"updateColor()\" v-model=\"dominantColorParams.saturation\" ref=\"dominantSat\")\n            .color-panel--sample\n                v-card(v-for=\"(subColor, index) in colorSet.colorCollection.dominantSubCollection\" :key=\"index\" @click=\"toggleColor('dominant',index)\" :class=\"{'__main':isMainColor(bgColor(subColor), bgColor(dominantColorParams)), '__is-hidden': colorIsHidden('dominant', index)}\" class=\"pa-3\" v-bind:style=\"bgColor(subColor)\")\n        v-card(v-for=\"(color, index) in colorSet.colorCollection.combinationCollection\" :key=\"index\" class=\"sub-color-parameters\")\n            div(:style=\"bgColor(color)\" :data-jest=\"`sub-preview${index}`\")\n                v-slider(min=\"0\" max=\"360\" v-model=\"color.hue\" label=\"Hue\" ref=\"subHue\" thumb-label=\"always\" :thumb-color=\"getStringColor(color, true)\" @change=\"updateCombinationColor(index)\")\n                v-slider(label=\"Light\" thumb-label=\"always\" min=\"0\" max=\"100\" v-model=\"color.light\" @change=\"updateCombinationColor(index)\")\n                v-btn(v-if=\"color.light !== dominantColorParams.light\" @click.stop=\"resetSetting('light', index, color)\" ) reset\n                v-slider(label=\"Sat.\" thumb-label=\"always\" min=\"0\" max=\"100\" v-model=\"color.saturation\" @change=\"updateCombinationColor(index)\")\n            .color-panel--sample\n                v-card(v-for=\"(subColor, subIndex) in color.subCombination\" :key=\"subIndex\" @click=\"toggleColor('sub', subIndex, index)\" :style=\"bgColor(subColor)\" class=\"pa-3\" data-jest=\"sub-combination-square\" :class=\"{'__is-hidden': colorIsHidden('sub',subIndex,index)}\")\n            v-card-actions\n                v-btn(text=true @click=\"removeColor(index)\" class=\"center\" :data-jest=\"`remove-color-${index}`\") Remove Color\n        .color-panel--sample\n            div(v-for=\"(subColor, index) in colorSet.colorCollection.graySubCollection\")\n                v-card(class=\"pa-3\" :style=\"bgColor(subColor)\")\n        .color-panel--sample\n            div(v-for=\"(subColor, index) in colorSet.colorCollection.alertSubCollection\" class=\"sub-combination\" )\n                v-card(v-bind:style=\"bgColor(subColor)\")\n        .color-panel--sample\n            div(v-for=\"(subColor, index) in colorSet.colorCollection.warningSubCollection\" class=\"sub-combination\")\n                v-card(v-bind:style=\"bgColor(subColor)\" )\n        .color-panel--sample\n            div(v-for=\"(subColor, index) in colorSet.colorCollection.successSubCollection\" class=\"sub-combination\")\n                v-card(v-bind:style=\"bgColor(subColor)\")\n        .color-panel--sample\n            div(v-for=\"(subColor, index) in colorSet.colorCollection.infoSubCollection\" class=\"sub-combination\" )\n                v-card(v-bind:style=\"bgColor(subColor)\")\n        v-card-actions\n            v-btn(text=true @click=\"addColor\" class=\"_color-button\" data-jest=\"addColor\") Add Color\n</template>\n<script>\nimport { colorHelper } from \"../colorHelper\";\nimport { mapGetters, mapActions } from \"vuex\";\nimport { VSlider } from \"vuetify/lib\";\n\nconst colorUtils = new colorHelper();\n\nconst generateNewColorSet = function(dominant, combination) {\n  const newCombination = {};\n  newCombination.hueVariation =\n    parseInt(combination.hue) - parseInt(dominant.hue);\n  if (parseInt(combination.saturation) !== parseInt(dominant.saturation)) {\n    newCombination.saturation = parseInt(combination.saturation);\n  }\n  if (parseInt(combination.light) !== parseInt(dominant.light)) {\n    newCombination.light = parseInt(combination.light);\n  }\n  return newCombination;\n};\n\nexport default {\n  components: { VSlider },\n  props: [\"panelOpened\", \"miniVariant\"],\n  data() {\n    return {\n      isMounted: false,\n      dominantColorParams: null,\n      ready: 0\n    };\n  },\n  watch: {\n    isMounted() {\n      if (this.isMounted === true) {\n        this.ready += 1;\n      }\n    },\n    loaded() {\n      if (this.loaded === true) {\n        this.ready += 1;\n      }\n    },\n    ready() {\n      if (this.ready >= 2) {\n        this.dominantColorParams = colorUtils\n          .hexToHsl(this.styleSet.dominant)\n          .getValueCollection();\n      }\n    }\n  },\n  mounted() {\n    this.isMounted = true;\n    if (this.loaded === true) {\n      this.ready += 1;\n    }\n  },\n  methods: {\n    ...mapActions([\"updateSettings\"]),\n    resetSetting(setting, index) {\n      let newSettings = this.styleSet.colorParameterCollection[index];\n      delete newSettings[setting];\n\n      this.$set(this.styleSet.colorParameterCollection, index, newSettings);\n      this.regenerateColorSet();\n    },\n    bgColor: function(color) {\n      return `background:${colorUtils.getString(color)}`;\n    },\n    getStringColor(color, hueOnly) {\n      if (hueOnly) {\n        color = JSON.parse(JSON.stringify(color));\n        color.light = 50;\n        color.saturation = 100;\n      }\n      return colorUtils.hslToHex(color).getString();\n    },\n    checkNum: function(number, min, max) {\n      min = min ? min : 0;\n      number = number < min ? min : number;\n      number = number > max ? max : number;\n      return isNaN(parseInt(number)) ? min : number;\n    },\n    updateColor: function() {\n      if (!this.isMounted && !this.loaded) {\n        //prevent initial trigger\n        return;\n      }\n      this.$set(\n        this.styleSet,\n        \"dominant\",\n        colorUtils.hslToHex(this.dominantColorParams).getString()\n      );\n      this.colorSet\n        .updateColor(this.dominantColorParams)\n        .generate(\n          this.styleSet.colorParameterCollection,\n          parseInt(this.styleSet.variationLightAmt),\n          parseInt(this.styleSet.variationSatAmt)\n        );\n    },\n\n    updateCombinationColor: function(index) {\n      this.$set(\n        this.styleSet.colorParameterCollection,\n        index,\n        generateNewColorSet(\n          this.dominantColorParams,\n          this.colorSet.colorCollection.combinationCollection[index]\n        )\n      );\n\n      this.regenerateColorSet();\n    },\n    regenerateColorSet: function() {\n      this.colorSet.generate(\n        this.styleSet.colorParameterCollection,\n        parseInt(this.styleSet.variationLightAmt),\n        parseInt(this.styleSet.variationSatAmt)\n      );\n    },\n    isMainColor: function(color, subColor) {\n      return color === subColor;\n    },\n    stringify: function(item) {\n      return JSON.stringify(item);\n    },\n    addColor: function() {\n      const newColorSet = this.styleSet.colorParameterCollection;\n      newColorSet.push({\n        hueVariation: 0\n      });\n      this.colorSet.generate(\n        this.styleSet.colorParameterCollection,\n        parseInt(this.styleSet.variationLightAmt),\n        parseInt(this.styleSet.variationSatAmt)\n      );\n      this.styleSet.hiddenCombination.sub.push([]);\n    },\n    removeColor: function(index) {\n      this.colorSet.colorCollection.combinationCollection.splice(index, 1);\n      this.styleSet.colorParameterCollection.splice(index, 1);\n      this.styleSet.hiddenCombination.sub.splice(index, 1);\n    },\n    updateVariationAmt: function() {\n      this.colorSet.generate(\n        this.styleSet.colorParameterCollection,\n        parseInt(this.styleSet.variationLightAmt),\n        parseInt(this.styleSet.variationSatAmt)\n      );\n    },\n    storeColorCoordinate: function(coordinates) {\n      this.$store.commit(\"currentColor\", coordinates);\n      this.$store.dispatch(\"triggerNewStyle\");\n    },\n    toggleColor(location, index, locationIndex) {\n      if (location === \"dominant\") {\n        const existingItemIndex = this.styleSet.hiddenCombination[\n          location\n        ].findIndex(item => item === index);\n        if (existingItemIndex === -1) {\n          this.styleSet.hiddenCombination[location].push(index);\n        } else {\n          this.styleSet.hiddenCombination[location].splice(\n            existingItemIndex,\n            1\n          );\n        }\n      } else if (location === \"sub\") {\n        const existingItemIndex = this.styleSet.hiddenCombination[location][\n          locationIndex\n        ].findIndex(item => item === index);\n        if (existingItemIndex === -1) {\n          this.styleSet.hiddenCombination[location][locationIndex].push(index);\n        } else {\n          this.styleSet.hiddenCombination[location][locationIndex].splice(\n            existingItemIndex,\n            1\n          );\n        }\n      }\n    },\n    colorIsHidden(location, index, subIndex) {\n      let hiddenCombination;\n      if (location === \"dominant\") {\n        hiddenCombination = this.styleSet.hiddenCombination[location];\n      } else if (location === \"sub\") {\n        hiddenCombination = this.styleSet.hiddenCombination[location][subIndex];\n      }\n      return hiddenCombination.find(item => item === index) !== undefined;\n    }\n  },\n  computed: {\n    ...mapGetters([\"loaded\", \"settings\"]),\n    styleSet() {\n      return this.$store.getters.styleSet;\n    },\n    colorSet: {\n      get() {\n        return this.$store.getters.colorSet;\n      },\n      set(value) {\n        this.$store.commit(\"colorSet\", value);\n      }\n    },\n    displayPanel() {\n      return this.ready === 2;\n    }\n  }\n};\n</script>\n<style>\n.color-panel--sample {\n  display: flex;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelColor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelColor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelColor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./App/Ui/Components/cssPanelColor.vue":
/*!*********************************************!*\
  !*** ./App/Ui/Components/cssPanelColor.vue ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug& */ "./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug&");
/* harmony import */ var _cssPanelColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssPanelColor.vue?vue&type=script&lang=js& */ "./App/Ui/Components/cssPanelColor.vue?vue&type=script&lang=js&");
/* harmony import */ var _cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssPanelColor.vue?vue&type=style&index=0&lang=css& */ "./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _cssPanelColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('264b6ed8')) {
      api.createRecord('264b6ed8', component.options)
    } else {
      api.reload('264b6ed8', component.options)
    }
    module.hot.accept(/*! ./cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug& */ "./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug& */ "./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug&");
(function () {
      api.rerender('264b6ed8', {
        render: _cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/cssPanelColor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/cssPanelColor.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./App/Ui/Components/cssPanelColor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelColor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug&":
/*!*************************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_template_id_264b6ed8_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelColor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelColor.vue?vue&type=template&id=264b6ed8&lang=pug& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.displayPanel
    ? _c(
        "div",
        { staticClass: "_panel", attrs: { id: "_color" } },
        [
          _c(
            "v-card",
            {
              staticClass: "_container pa-3 ma-3",
              attrs: { id: "_range-light-container" }
            },
            [
              _c("v-slider", {
                attrs: {
                  label: "Light variation",
                  ticks: "",
                  "tick-size": "3",
                  min: "0",
                  max: "10",
                  name: "variation-light-amt"
                },
                on: {
                  change: function($event) {
                    return _vm.updateVariationAmt()
                  }
                },
                model: {
                  value: _vm.styleSet.variationLightAmt,
                  callback: function($$v) {
                    _vm.$set(_vm.styleSet, "variationLightAmt", $$v)
                  },
                  expression: "styleSet.variationLightAmt"
                }
              }),
              _c("v-slider", {
                attrs: {
                  label: "Saturation variation",
                  ticks: "",
                  "tick-size": "3",
                  min: "0",
                  max: "10",
                  name: "variation-sat-amt"
                },
                on: {
                  change: function($event) {
                    return _vm.updateVariationAmt()
                  }
                },
                model: {
                  value: _vm.styleSet.variationSatAmt,
                  callback: function($$v) {
                    _vm.$set(_vm.styleSet, "variationSatAmt", $$v)
                  },
                  expression: "styleSet.variationSatAmt"
                }
              })
            ],
            1
          ),
          _c(
            "div",
            {
              style: _vm.bgColor(_vm.dominantColorParams),
              attrs: { "data-jest": "dominant-preview" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "mb-0",
                  style: _vm.bgColor(_vm.dominantColorParams)
                },
                [
                  _c("v-slider", {
                    ref: "dominantHue",
                    attrs: {
                      min: "0",
                      max: "360",
                      label: "Hue",
                      "thumb-label": "always",
                      "thumb-color": _vm.getStringColor(
                        _vm.dominantColorParams,
                        true
                      )
                    },
                    on: {
                      change: function($event) {
                        return _vm.updateColor()
                      }
                    },
                    model: {
                      value: _vm.dominantColorParams.hue,
                      callback: function($$v) {
                        _vm.$set(_vm.dominantColorParams, "hue", $$v)
                      },
                      expression: "dominantColorParams.hue"
                    }
                  }),
                  _c("v-slider", {
                    ref: "dominantLight",
                    attrs: {
                      min: "0",
                      label: "light",
                      max: "100",
                      "thumb-label": "always"
                    },
                    on: {
                      change: function($event) {
                        return _vm.updateColor()
                      }
                    },
                    model: {
                      value: _vm.dominantColorParams.light,
                      callback: function($$v) {
                        _vm.$set(_vm.dominantColorParams, "light", $$v)
                      },
                      expression: "dominantColorParams.light"
                    }
                  }),
                  _c("v-slider", {
                    ref: "dominantSat",
                    attrs: { min: "0", max: "100", "thumb-label": "always" },
                    on: {
                      change: function($event) {
                        return _vm.updateColor()
                      }
                    },
                    model: {
                      value: _vm.dominantColorParams.saturation,
                      callback: function($$v) {
                        _vm.$set(_vm.dominantColorParams, "saturation", $$v)
                      },
                      expression: "dominantColorParams.saturation"
                    }
                  })
                ],
                1
              ),
              _c(
                "div",
                { staticClass: "color-panel--sample" },
                _vm._l(
                  _vm.colorSet.colorCollection.dominantSubCollection,
                  function(subColor, index) {
                    return _c("v-card", {
                      key: index,
                      staticClass: "pa-3",
                      class: {
                        __main: _vm.isMainColor(
                          _vm.bgColor(subColor),
                          _vm.bgColor(_vm.dominantColorParams)
                        ),
                        "__is-hidden": _vm.colorIsHidden("dominant", index)
                      },
                      style: _vm.bgColor(subColor),
                      on: {
                        click: function($event) {
                          return _vm.toggleColor("dominant", index)
                        }
                      }
                    })
                  }
                ),
                1
              )
            ]
          ),
          _vm._l(_vm.colorSet.colorCollection.combinationCollection, function(
            color,
            index
          ) {
            return _c(
              "v-card",
              { key: index, staticClass: "sub-color-parameters" },
              [
                _c(
                  "div",
                  {
                    style: _vm.bgColor(color),
                    attrs: { "data-jest": "sub-preview" + index }
                  },
                  [
                    _c("v-slider", {
                      ref: "subHue",
                      refInFor: true,
                      attrs: {
                        min: "0",
                        max: "360",
                        label: "Hue",
                        "thumb-label": "always",
                        "thumb-color": _vm.getStringColor(color, true)
                      },
                      on: {
                        change: function($event) {
                          return _vm.updateCombinationColor(index)
                        }
                      },
                      model: {
                        value: color.hue,
                        callback: function($$v) {
                          _vm.$set(color, "hue", $$v)
                        },
                        expression: "color.hue"
                      }
                    }),
                    _c("v-slider", {
                      attrs: {
                        label: "Light",
                        "thumb-label": "always",
                        min: "0",
                        max: "100"
                      },
                      on: {
                        change: function($event) {
                          return _vm.updateCombinationColor(index)
                        }
                      },
                      model: {
                        value: color.light,
                        callback: function($$v) {
                          _vm.$set(color, "light", $$v)
                        },
                        expression: "color.light"
                      }
                    }),
                    color.light !== _vm.dominantColorParams.light
                      ? _c(
                          "v-btn",
                          {
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.resetSetting("light", index, color)
                              }
                            }
                          },
                          [_vm._v("reset")]
                        )
                      : _vm._e(),
                    _c("v-slider", {
                      attrs: {
                        label: "Sat.",
                        "thumb-label": "always",
                        min: "0",
                        max: "100"
                      },
                      on: {
                        change: function($event) {
                          return _vm.updateCombinationColor(index)
                        }
                      },
                      model: {
                        value: color.saturation,
                        callback: function($$v) {
                          _vm.$set(color, "saturation", $$v)
                        },
                        expression: "color.saturation"
                      }
                    })
                  ],
                  1
                ),
                _c(
                  "div",
                  { staticClass: "color-panel--sample" },
                  _vm._l(color.subCombination, function(subColor, subIndex) {
                    return _c("v-card", {
                      key: subIndex,
                      staticClass: "pa-3",
                      class: {
                        "__is-hidden": _vm.colorIsHidden("sub", subIndex, index)
                      },
                      style: _vm.bgColor(subColor),
                      attrs: { "data-jest": "sub-combination-square" },
                      on: {
                        click: function($event) {
                          return _vm.toggleColor("sub", subIndex, index)
                        }
                      }
                    })
                  }),
                  1
                ),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "center",
                        attrs: {
                          text: "",
                          "data-jest": "remove-color-" + index
                        },
                        on: {
                          click: function($event) {
                            return _vm.removeColor(index)
                          }
                        }
                      },
                      [_vm._v("Remove Color")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          }),
          _c(
            "div",
            { staticClass: "color-panel--sample" },
            _vm._l(_vm.colorSet.colorCollection.graySubCollection, function(
              subColor,
              index
            ) {
              return _c(
                "div",
                [
                  _c("v-card", {
                    staticClass: "pa-3",
                    style: _vm.bgColor(subColor)
                  })
                ],
                1
              )
            }),
            0
          ),
          _c(
            "div",
            { staticClass: "color-panel--sample" },
            _vm._l(_vm.colorSet.colorCollection.alertSubCollection, function(
              subColor,
              index
            ) {
              return _c(
                "div",
                { staticClass: "sub-combination" },
                [_c("v-card", { style: _vm.bgColor(subColor) })],
                1
              )
            }),
            0
          ),
          _c(
            "div",
            { staticClass: "color-panel--sample" },
            _vm._l(_vm.colorSet.colorCollection.warningSubCollection, function(
              subColor,
              index
            ) {
              return _c(
                "div",
                { staticClass: "sub-combination" },
                [_c("v-card", { style: _vm.bgColor(subColor) })],
                1
              )
            }),
            0
          ),
          _c(
            "div",
            { staticClass: "color-panel--sample" },
            _vm._l(_vm.colorSet.colorCollection.successSubCollection, function(
              subColor,
              index
            ) {
              return _c(
                "div",
                { staticClass: "sub-combination" },
                [_c("v-card", { style: _vm.bgColor(subColor) })],
                1
              )
            }),
            0
          ),
          _c(
            "div",
            { staticClass: "color-panel--sample" },
            _vm._l(_vm.colorSet.colorCollection.infoSubCollection, function(
              subColor,
              index
            ) {
              return _c(
                "div",
                { staticClass: "sub-combination" },
                [_c("v-card", { style: _vm.bgColor(subColor) })],
                1
              )
            }),
            0
          ),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  staticClass: "_color-button",
                  attrs: { text: "", "data-jest": "addColor" },
                  on: { click: _vm.addColor }
                },
                [_vm._v("Add Color")]
              )
            ],
            1
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsQ29sb3IudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZT82NTY2Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZT8yY2QwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxDb2xvci52dWU/NmIwYyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxDb2xvci52dWU/ZWM0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQ0Esa0RBREE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLENBWEE7O0FBYUE7QUFDQTtBQUFBO0FBQUEsR0FEQTtBQUVBLHVDQUZBOztBQUdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLCtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBVEE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FB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QWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfY3NzUGFuZWxDb2xvcl92dWUtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgICBkaXYoaWQ9XCJfY29sb3JcIiBjbGFzcz1cIl9wYW5lbFwiIHYtaWY9XCJkaXNwbGF5UGFuZWxcIilcbiAgICAgICAgdi1jYXJkKGNsYXNzPVwiX2NvbnRhaW5lciBwYS0zIG1hLTNcIiBpZD1cIl9yYW5nZS1saWdodC1jb250YWluZXJcIilcbiAgICAgICAgICAgIHYtc2xpZGVyKGxhYmVsPVwiTGlnaHQgdmFyaWF0aW9uXCIgdGlja3M9dHJ1ZSB0aWNrLXNpemU9XCIzXCIgbWluPVwiMFwiIG1heD1cIjEwXCIgbmFtZT1cInZhcmlhdGlvbi1saWdodC1hbXRcIiB2LW1vZGVsPVwic3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXRcIiBAY2hhbmdlPVwidXBkYXRlVmFyaWF0aW9uQW10KClcIiApXG4gICAgICAgICAgICB2LXNsaWRlcihsYWJlbD1cIlNhdHVyYXRpb24gdmFyaWF0aW9uXCIgdGlja3M9dHJ1ZSB0aWNrLXNpemU9XCIzXCIgbWluPVwiMFwiIG1heD1cIjEwXCIgbmFtZT1cInZhcmlhdGlvbi1zYXQtYW10XCIgdi1tb2RlbD1cInN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdFwiIEBjaGFuZ2U9XCJ1cGRhdGVWYXJpYXRpb25BbXQoKVwiIClcbiAgICAgICAgZGl2KDpzdHlsZT1cImJnQ29sb3IoZG9taW5hbnRDb2xvclBhcmFtcylcIiBkYXRhLWplc3Q9XCJkb21pbmFudC1wcmV2aWV3XCIpXG4gICAgICAgICAgICBkaXYoOnN0eWxlPVwiYmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zKVwiIGNsYXNzPVwibWItMFwiKVxuICAgICAgICAgICAgICAgIHYtc2xpZGVyKG1pbj1cIjBcIiBtYXg9XCIzNjBcIiB2LW1vZGVsPVwiZG9taW5hbnRDb2xvclBhcmFtcy5odWVcIiBAY2hhbmdlPVwidXBkYXRlQ29sb3IoKVwiIGxhYmVsPVwiSHVlXCIgdGh1bWItbGFiZWw9XCJhbHdheXNcIiA6dGh1bWItY29sb3I9XCJnZXRTdHJpbmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zLCB0cnVlKVwiIHJlZj1cImRvbWluYW50SHVlXCIpXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobWluPVwiMFwiIGxhYmVsPVwibGlnaHRcIiBtYXg9XCIxMDBcIiB0aHVtYi1sYWJlbD1cImFsd2F5c1wiIEBjaGFuZ2U9XCJ1cGRhdGVDb2xvcigpXCIgdi1tb2RlbD1cImRvbWluYW50Q29sb3JQYXJhbXMubGlnaHRcIiByZWY9XCJkb21pbmFudExpZ2h0XCIpXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobWluPVwiMFwiIG1heD1cIjEwMFwiIHRodW1iLWxhYmVsPVwiYWx3YXlzXCIgQGNoYW5nZT1cInVwZGF0ZUNvbG9yKClcIiB2LW1vZGVsPVwiZG9taW5hbnRDb2xvclBhcmFtcy5zYXR1cmF0aW9uXCIgcmVmPVwiZG9taW5hbnRTYXRcIilcbiAgICAgICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtZm9yPVwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmRvbWluYW50U3ViQ29sbGVjdGlvblwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cInRvZ2dsZUNvbG9yKCdkb21pbmFudCcsaW5kZXgpXCIgOmNsYXNzPVwieydfX21haW4nOmlzTWFpbkNvbG9yKGJnQ29sb3Ioc3ViQ29sb3IpLCBiZ0NvbG9yKGRvbWluYW50Q29sb3JQYXJhbXMpKSwgJ19faXMtaGlkZGVuJzogY29sb3JJc0hpZGRlbignZG9taW5hbnQnLCBpbmRleCl9XCIgY2xhc3M9XCJwYS0zXCIgdi1iaW5kOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIilcbiAgICAgICAgdi1jYXJkKHYtZm9yPVwiKGNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvblwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic3ViLWNvbG9yLXBhcmFtZXRlcnNcIilcbiAgICAgICAgICAgIGRpdig6c3R5bGU9XCJiZ0NvbG9yKGNvbG9yKVwiIDpkYXRhLWplc3Q9XCJgc3ViLXByZXZpZXcke2luZGV4fWBcIilcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihtaW49XCIwXCIgbWF4PVwiMzYwXCIgdi1tb2RlbD1cImNvbG9yLmh1ZVwiIGxhYmVsPVwiSHVlXCIgcmVmPVwic3ViSHVlXCIgdGh1bWItbGFiZWw9XCJhbHdheXNcIiA6dGh1bWItY29sb3I9XCJnZXRTdHJpbmdDb2xvcihjb2xvciwgdHJ1ZSlcIiBAY2hhbmdlPVwidXBkYXRlQ29tYmluYXRpb25Db2xvcihpbmRleClcIilcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihsYWJlbD1cIkxpZ2h0XCIgdGh1bWItbGFiZWw9XCJhbHdheXNcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdi1tb2RlbD1cImNvbG9yLmxpZ2h0XCIgQGNoYW5nZT1cInVwZGF0ZUNvbWJpbmF0aW9uQ29sb3IoaW5kZXgpXCIpXG4gICAgICAgICAgICAgICAgdi1idG4odi1pZj1cImNvbG9yLmxpZ2h0ICE9PSBkb21pbmFudENvbG9yUGFyYW1zLmxpZ2h0XCIgQGNsaWNrLnN0b3A9XCJyZXNldFNldHRpbmcoJ2xpZ2h0JywgaW5kZXgsIGNvbG9yKVwiICkgcmVzZXRcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihsYWJlbD1cIlNhdC5cIiB0aHVtYi1sYWJlbD1cImFsd2F5c1wiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2LW1vZGVsPVwiY29sb3Iuc2F0dXJhdGlvblwiIEBjaGFuZ2U9XCJ1cGRhdGVDb21iaW5hdGlvbkNvbG9yKGluZGV4KVwiKVxuICAgICAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1mb3I9XCIoc3ViQ29sb3IsIHN1YkluZGV4KSBpbiBjb2xvci5zdWJDb21iaW5hdGlvblwiIDprZXk9XCJzdWJJbmRleFwiIEBjbGljaz1cInRvZ2dsZUNvbG9yKCdzdWInLCBzdWJJbmRleCwgaW5kZXgpXCIgOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIiBjbGFzcz1cInBhLTNcIiBkYXRhLWplc3Q9XCJzdWItY29tYmluYXRpb24tc3F1YXJlXCIgOmNsYXNzPVwieydfX2lzLWhpZGRlbic6IGNvbG9ySXNIaWRkZW4oJ3N1Yicsc3ViSW5kZXgsaW5kZXgpfVwiKVxuICAgICAgICAgICAgdi1jYXJkLWFjdGlvbnNcbiAgICAgICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgQGNsaWNrPVwicmVtb3ZlQ29sb3IoaW5kZXgpXCIgY2xhc3M9XCJjZW50ZXJcIiA6ZGF0YS1qZXN0PVwiYHJlbW92ZS1jb2xvci0ke2luZGV4fWBcIikgUmVtb3ZlIENvbG9yXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXG4gICAgICAgICAgICBkaXYodi1mb3I9XCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uZ3JheVN1YkNvbGxlY3Rpb25cIilcbiAgICAgICAgICAgICAgICB2LWNhcmQoY2xhc3M9XCJwYS0zXCIgOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIilcbiAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcbiAgICAgICAgICAgIGRpdih2LWZvcj1cIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5hbGVydFN1YkNvbGxlY3Rpb25cIiBjbGFzcz1cInN1Yi1jb21iaW5hdGlvblwiIClcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1iaW5kOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIilcbiAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcbiAgICAgICAgICAgIGRpdih2LWZvcj1cIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi53YXJuaW5nU3ViQ29sbGVjdGlvblwiIGNsYXNzPVwic3ViLWNvbWJpbmF0aW9uXCIpXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtYmluZDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIgKVxuICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxuICAgICAgICAgICAgZGl2KHYtZm9yPVwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLnN1Y2Nlc3NTdWJDb2xsZWN0aW9uXCIgY2xhc3M9XCJzdWItY29tYmluYXRpb25cIilcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1iaW5kOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIilcbiAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcbiAgICAgICAgICAgIGRpdih2LWZvcj1cIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5pbmZvU3ViQ29sbGVjdGlvblwiIGNsYXNzPVwic3ViLWNvbWJpbmF0aW9uXCIgKVxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWJpbmQ6c3R5bGU9XCJiZ0NvbG9yKHN1YkNvbG9yKVwiKVxuICAgICAgICB2LWNhcmQtYWN0aW9uc1xuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIEBjbGljaz1cImFkZENvbG9yXCIgY2xhc3M9XCJfY29sb3ItYnV0dG9uXCIgZGF0YS1qZXN0PVwiYWRkQ29sb3JcIikgQWRkIENvbG9yXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbG9ySGVscGVyIH0gZnJvbSBcIi4uL2NvbG9ySGVscGVyXCI7XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IFZTbGlkZXIgfSBmcm9tIFwidnVldGlmeS9saWJcIjtcblxuY29uc3QgY29sb3JVdGlscyA9IG5ldyBjb2xvckhlbHBlcigpO1xuXG5jb25zdCBnZW5lcmF0ZU5ld0NvbG9yU2V0ID0gZnVuY3Rpb24oZG9taW5hbnQsIGNvbWJpbmF0aW9uKSB7XG4gIGNvbnN0IG5ld0NvbWJpbmF0aW9uID0ge307XG4gIG5ld0NvbWJpbmF0aW9uLmh1ZVZhcmlhdGlvbiA9XG4gICAgcGFyc2VJbnQoY29tYmluYXRpb24uaHVlKSAtIHBhcnNlSW50KGRvbWluYW50Lmh1ZSk7XG4gIGlmIChwYXJzZUludChjb21iaW5hdGlvbi5zYXR1cmF0aW9uKSAhPT0gcGFyc2VJbnQoZG9taW5hbnQuc2F0dXJhdGlvbikpIHtcbiAgICBuZXdDb21iaW5hdGlvbi5zYXR1cmF0aW9uID0gcGFyc2VJbnQoY29tYmluYXRpb24uc2F0dXJhdGlvbik7XG4gIH1cbiAgaWYgKHBhcnNlSW50KGNvbWJpbmF0aW9uLmxpZ2h0KSAhPT0gcGFyc2VJbnQoZG9taW5hbnQubGlnaHQpKSB7XG4gICAgbmV3Q29tYmluYXRpb24ubGlnaHQgPSBwYXJzZUludChjb21iaW5hdGlvbi5saWdodCk7XG4gIH1cbiAgcmV0dXJuIG5ld0NvbWJpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IFZTbGlkZXIgfSxcbiAgcHJvcHM6IFtcInBhbmVsT3BlbmVkXCIsIFwibWluaVZhcmlhbnRcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgICBkb21pbmFudENvbG9yUGFyYW1zOiBudWxsLFxuICAgICAgcmVhZHk6IDBcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIGlzTW91bnRlZCgpIHtcbiAgICAgIGlmICh0aGlzLmlzTW91bnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnJlYWR5ICs9IDE7XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkZWQoKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5yZWFkeSArPSAxO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVhZHkoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSA+PSAyKSB7XG4gICAgICAgIHRoaXMuZG9taW5hbnRDb2xvclBhcmFtcyA9IGNvbG9yVXRpbHNcbiAgICAgICAgICAuaGV4VG9Ic2wodGhpcy5zdHlsZVNldC5kb21pbmFudClcbiAgICAgICAgICAuZ2V0VmFsdWVDb2xsZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5sb2FkZWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucmVhZHkgKz0gMTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFtcInVwZGF0ZVNldHRpbmdzXCJdKSxcbiAgICByZXNldFNldHRpbmcoc2V0dGluZywgaW5kZXgpIHtcbiAgICAgIGxldCBuZXdTZXR0aW5ncyA9IHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uW2luZGV4XTtcbiAgICAgIGRlbGV0ZSBuZXdTZXR0aW5nc1tzZXR0aW5nXTtcblxuICAgICAgdGhpcy4kc2V0KHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLCBpbmRleCwgbmV3U2V0dGluZ3MpO1xuICAgICAgdGhpcy5yZWdlbmVyYXRlQ29sb3JTZXQoKTtcbiAgICB9LFxuICAgIGJnQ29sb3I6IGZ1bmN0aW9uKGNvbG9yKSB7XG4gICAgICByZXR1cm4gYGJhY2tncm91bmQ6JHtjb2xvclV0aWxzLmdldFN0cmluZyhjb2xvcil9YDtcbiAgICB9LFxuICAgIGdldFN0cmluZ0NvbG9yKGNvbG9yLCBodWVPbmx5KSB7XG4gICAgICBpZiAoaHVlT25seSkge1xuICAgICAgICBjb2xvciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29sb3IpKTtcbiAgICAgICAgY29sb3IubGlnaHQgPSA1MDtcbiAgICAgICAgY29sb3Iuc2F0dXJhdGlvbiA9IDEwMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2xvclV0aWxzLmhzbFRvSGV4KGNvbG9yKS5nZXRTdHJpbmcoKTtcbiAgICB9LFxuICAgIGNoZWNrTnVtOiBmdW5jdGlvbihudW1iZXIsIG1pbiwgbWF4KSB7XG4gICAgICBtaW4gPSBtaW4gPyBtaW4gOiAwO1xuICAgICAgbnVtYmVyID0gbnVtYmVyIDwgbWluID8gbWluIDogbnVtYmVyO1xuICAgICAgbnVtYmVyID0gbnVtYmVyID4gbWF4ID8gbWF4IDogbnVtYmVyO1xuICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlSW50KG51bWJlcikpID8gbWluIDogbnVtYmVyO1xuICAgIH0sXG4gICAgdXBkYXRlQ29sb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmlzTW91bnRlZCAmJiAhdGhpcy5sb2FkZWQpIHtcbiAgICAgICAgLy9wcmV2ZW50IGluaXRpYWwgdHJpZ2dlclxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLiRzZXQoXG4gICAgICAgIHRoaXMuc3R5bGVTZXQsXG4gICAgICAgIFwiZG9taW5hbnRcIixcbiAgICAgICAgY29sb3JVdGlscy5oc2xUb0hleCh0aGlzLmRvbWluYW50Q29sb3JQYXJhbXMpLmdldFN0cmluZygpXG4gICAgICApO1xuICAgICAgdGhpcy5jb2xvclNldFxuICAgICAgICAudXBkYXRlQ29sb3IodGhpcy5kb21pbmFudENvbG9yUGFyYW1zKVxuICAgICAgICAuZ2VuZXJhdGUoXG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXG4gICAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXG4gICAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUNvbWJpbmF0aW9uQ29sb3I6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB0aGlzLiRzZXQoXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZ2VuZXJhdGVOZXdDb2xvclNldChcbiAgICAgICAgICB0aGlzLmRvbWluYW50Q29sb3JQYXJhbXMsXG4gICAgICAgICAgdGhpcy5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uW2luZGV4XVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLnJlZ2VuZXJhdGVDb2xvclNldCgpO1xuICAgIH0sXG4gICAgcmVnZW5lcmF0ZUNvbG9yU2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY29sb3JTZXQuZ2VuZXJhdGUoXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXG4gICAgICApO1xuICAgIH0sXG4gICAgaXNNYWluQ29sb3I6IGZ1bmN0aW9uKGNvbG9yLCBzdWJDb2xvcikge1xuICAgICAgcmV0dXJuIGNvbG9yID09PSBzdWJDb2xvcjtcbiAgICB9LFxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgIH0sXG4gICAgYWRkQ29sb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbmV3Q29sb3JTZXQgPSB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbjtcbiAgICAgIG5ld0NvbG9yU2V0LnB1c2goe1xuICAgICAgICBodWVWYXJpYXRpb246IDBcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb2xvclNldC5nZW5lcmF0ZShcbiAgICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcbiAgICAgICk7XG4gICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uLnN1Yi5wdXNoKFtdKTtcbiAgICB9LFxuICAgIHJlbW92ZUNvbG9yOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdGhpcy5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbi5zdWIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICAgIHVwZGF0ZVZhcmlhdGlvbkFtdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNvbG9yU2V0LmdlbmVyYXRlKFxuICAgICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxuICAgICAgKTtcbiAgICB9LFxuICAgIHN0b3JlQ29sb3JDb29yZGluYXRlOiBmdW5jdGlvbihjb29yZGluYXRlcykge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiY3VycmVudENvbG9yXCIsIGNvb3JkaW5hdGVzKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidHJpZ2dlck5ld1N0eWxlXCIpO1xuICAgIH0sXG4gICAgdG9nZ2xlQ29sb3IobG9jYXRpb24sIGluZGV4LCBsb2NhdGlvbkluZGV4KSB7XG4gICAgICBpZiAobG9jYXRpb24gPT09IFwiZG9taW5hbnRcIikge1xuICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bXG4gICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBpbmRleCk7XG4gICAgICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXS5wdXNoKGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXS5zcGxpY2UoXG4gICAgICAgICAgICBleGlzdGluZ0l0ZW1JbmRleCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSBcInN1YlwiKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl1bXG4gICAgICAgICAgbG9jYXRpb25JbmRleFxuICAgICAgICBdLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGluZGV4KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW2xvY2F0aW9uSW5kZXhdLnB1c2goaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW2xvY2F0aW9uSW5kZXhdLnNwbGljZShcbiAgICAgICAgICAgIGV4aXN0aW5nSXRlbUluZGV4LFxuICAgICAgICAgICAgMVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9ySXNIaWRkZW4obG9jYXRpb24sIGluZGV4LCBzdWJJbmRleCkge1xuICAgICAgbGV0IGhpZGRlbkNvbWJpbmF0aW9uO1xuICAgICAgaWYgKGxvY2F0aW9uID09PSBcImRvbWluYW50XCIpIHtcbiAgICAgICAgaGlkZGVuQ29tYmluYXRpb24gPSB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gPT09IFwic3ViXCIpIHtcbiAgICAgICAgaGlkZGVuQ29tYmluYXRpb24gPSB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXVtzdWJJbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm4gaGlkZGVuQ29tYmluYXRpb24uZmluZChpdGVtID0+IGl0ZW0gPT09IGluZGV4KSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtcImxvYWRlZFwiLCBcInNldHRpbmdzXCJdKSxcbiAgICBzdHlsZVNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0eWxlU2V0O1xuICAgIH0sXG4gICAgY29sb3JTZXQ6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuY29sb3JTZXQ7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImNvbG9yU2V0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc3BsYXlQYW5lbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWR5ID09PSAyO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuLmNvbG9yLXBhbmVsLS1zYW1wbGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbG9yLXBhbmVsLS1zYW1wbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxDb2xvci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTBQQTtFQUNBLGFBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgbGFuZz1cXFwicHVnXFxcIj5cXG4gICAgZGl2KGlkPVxcXCJfY29sb3JcXFwiIGNsYXNzPVxcXCJfcGFuZWxcXFwiIHYtaWY9XFxcImRpc3BsYXlQYW5lbFxcXCIpXFxuICAgICAgICB2LWNhcmQoY2xhc3M9XFxcIl9jb250YWluZXIgcGEtMyBtYS0zXFxcIiBpZD1cXFwiX3JhbmdlLWxpZ2h0LWNvbnRhaW5lclxcXCIpXFxuICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XFxcIkxpZ2h0IHZhcmlhdGlvblxcXCIgdGlja3M9dHJ1ZSB0aWNrLXNpemU9XFxcIjNcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMFxcXCIgbmFtZT1cXFwidmFyaWF0aW9uLWxpZ2h0LWFtdFxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXRcXFwiIEBjaGFuZ2U9XFxcInVwZGF0ZVZhcmlhdGlvbkFtdCgpXFxcIiApXFxuICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XFxcIlNhdHVyYXRpb24gdmFyaWF0aW9uXFxcIiB0aWNrcz10cnVlIHRpY2stc2l6ZT1cXFwiM1xcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwXFxcIiBuYW1lPVxcXCJ2YXJpYXRpb24tc2F0LWFtdFxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQudmFyaWF0aW9uU2F0QW10XFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVWYXJpYXRpb25BbXQoKVxcXCIgKVxcbiAgICAgICAgZGl2KDpzdHlsZT1cXFwiYmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zKVxcXCIgZGF0YS1qZXN0PVxcXCJkb21pbmFudC1wcmV2aWV3XFxcIilcXG4gICAgICAgICAgICBkaXYoOnN0eWxlPVxcXCJiZ0NvbG9yKGRvbWluYW50Q29sb3JQYXJhbXMpXFxcIiBjbGFzcz1cXFwibWItMFxcXCIpXFxuICAgICAgICAgICAgICAgIHYtc2xpZGVyKG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIzNjBcXFwiIHYtbW9kZWw9XFxcImRvbWluYW50Q29sb3JQYXJhbXMuaHVlXFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVDb2xvcigpXFxcIiBsYWJlbD1cXFwiSHVlXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiA6dGh1bWItY29sb3I9XFxcImdldFN0cmluZ0NvbG9yKGRvbWluYW50Q29sb3JQYXJhbXMsIHRydWUpXFxcIiByZWY9XFxcImRvbWluYW50SHVlXFxcIilcXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobWluPVxcXCIwXFxcIiBsYWJlbD1cXFwibGlnaHRcXFwiIG1heD1cXFwiMTAwXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVDb2xvcigpXFxcIiB2LW1vZGVsPVxcXCJkb21pbmFudENvbG9yUGFyYW1zLmxpZ2h0XFxcIiByZWY9XFxcImRvbWluYW50TGlnaHRcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVDb2xvcigpXFxcIiB2LW1vZGVsPVxcXCJkb21pbmFudENvbG9yUGFyYW1zLnNhdHVyYXRpb25cXFwiIHJlZj1cXFwiZG9taW5hbnRTYXRcXFwiKVxcbiAgICAgICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXFxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWZvcj1cXFwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmRvbWluYW50U3ViQ29sbGVjdGlvblxcXCIgOmtleT1cXFwiaW5kZXhcXFwiIEBjbGljaz1cXFwidG9nZ2xlQ29sb3IoJ2RvbWluYW50JyxpbmRleClcXFwiIDpjbGFzcz1cXFwieydfX21haW4nOmlzTWFpbkNvbG9yKGJnQ29sb3Ioc3ViQ29sb3IpLCBiZ0NvbG9yKGRvbWluYW50Q29sb3JQYXJhbXMpKSwgJ19faXMtaGlkZGVuJzogY29sb3JJc0hpZGRlbignZG9taW5hbnQnLCBpbmRleCl9XFxcIiBjbGFzcz1cXFwicGEtM1xcXCIgdi1iaW5kOnN0eWxlPVxcXCJiZ0NvbG9yKHN1YkNvbG9yKVxcXCIpXFxuICAgICAgICB2LWNhcmQodi1mb3I9XFxcIihjb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb25cXFwiIDprZXk9XFxcImluZGV4XFxcIiBjbGFzcz1cXFwic3ViLWNvbG9yLXBhcmFtZXRlcnNcXFwiKVxcbiAgICAgICAgICAgIGRpdig6c3R5bGU9XFxcImJnQ29sb3IoY29sb3IpXFxcIiA6ZGF0YS1qZXN0PVxcXCJgc3ViLXByZXZpZXcke2luZGV4fWBcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihtaW49XFxcIjBcXFwiIG1heD1cXFwiMzYwXFxcIiB2LW1vZGVsPVxcXCJjb2xvci5odWVcXFwiIGxhYmVsPVxcXCJIdWVcXFwiIHJlZj1cXFwic3ViSHVlXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiA6dGh1bWItY29sb3I9XFxcImdldFN0cmluZ0NvbG9yKGNvbG9yLCB0cnVlKVxcXCIgQGNoYW5nZT1cXFwidXBkYXRlQ29tYmluYXRpb25Db2xvcihpbmRleClcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihsYWJlbD1cXFwiTGlnaHRcXFwiIHRodW1iLWxhYmVsPVxcXCJhbHdheXNcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiIHYtbW9kZWw9XFxcImNvbG9yLmxpZ2h0XFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVDb21iaW5hdGlvbkNvbG9yKGluZGV4KVxcXCIpXFxuICAgICAgICAgICAgICAgIHYtYnRuKHYtaWY9XFxcImNvbG9yLmxpZ2h0ICE9PSBkb21pbmFudENvbG9yUGFyYW1zLmxpZ2h0XFxcIiBAY2xpY2suc3RvcD1cXFwicmVzZXRTZXR0aW5nKCdsaWdodCcsIGluZGV4LCBjb2xvcilcXFwiICkgcmVzZXRcXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XFxcIlNhdC5cXFwiIHRodW1iLWxhYmVsPVxcXCJhbHdheXNcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiIHYtbW9kZWw9XFxcImNvbG9yLnNhdHVyYXRpb25cXFwiIEBjaGFuZ2U9XFxcInVwZGF0ZUNvbWJpbmF0aW9uQ29sb3IoaW5kZXgpXFxcIilcXG4gICAgICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1mb3I9XFxcIihzdWJDb2xvciwgc3ViSW5kZXgpIGluIGNvbG9yLnN1YkNvbWJpbmF0aW9uXFxcIiA6a2V5PVxcXCJzdWJJbmRleFxcXCIgQGNsaWNrPVxcXCJ0b2dnbGVDb2xvcignc3ViJywgc3ViSW5kZXgsIGluZGV4KVxcXCIgOnN0eWxlPVxcXCJiZ0NvbG9yKHN1YkNvbG9yKVxcXCIgY2xhc3M9XFxcInBhLTNcXFwiIGRhdGEtamVzdD1cXFwic3ViLWNvbWJpbmF0aW9uLXNxdWFyZVxcXCIgOmNsYXNzPVxcXCJ7J19faXMtaGlkZGVuJzogY29sb3JJc0hpZGRlbignc3ViJyxzdWJJbmRleCxpbmRleCl9XFxcIilcXG4gICAgICAgICAgICB2LWNhcmQtYWN0aW9uc1xcbiAgICAgICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgQGNsaWNrPVxcXCJyZW1vdmVDb2xvcihpbmRleClcXFwiIGNsYXNzPVxcXCJjZW50ZXJcXFwiIDpkYXRhLWplc3Q9XFxcImByZW1vdmUtY29sb3ItJHtpbmRleH1gXFxcIikgUmVtb3ZlIENvbG9yXFxuICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxcbiAgICAgICAgICAgIGRpdih2LWZvcj1cXFwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmdyYXlTdWJDb2xsZWN0aW9uXFxcIilcXG4gICAgICAgICAgICAgICAgdi1jYXJkKGNsYXNzPVxcXCJwYS0zXFxcIiA6c3R5bGU9XFxcImJnQ29sb3Ioc3ViQ29sb3IpXFxcIilcXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXFxuICAgICAgICAgICAgZGl2KHYtZm9yPVxcXCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uYWxlcnRTdWJDb2xsZWN0aW9uXFxcIiBjbGFzcz1cXFwic3ViLWNvbWJpbmF0aW9uXFxcIiApXFxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWJpbmQ6c3R5bGU9XFxcImJnQ29sb3Ioc3ViQ29sb3IpXFxcIilcXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXFxuICAgICAgICAgICAgZGl2KHYtZm9yPVxcXCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24ud2FybmluZ1N1YkNvbGxlY3Rpb25cXFwiIGNsYXNzPVxcXCJzdWItY29tYmluYXRpb25cXFwiKVxcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1iaW5kOnN0eWxlPVxcXCJiZ0NvbG9yKHN1YkNvbG9yKVxcXCIgKVxcbiAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcXG4gICAgICAgICAgICBkaXYodi1mb3I9XFxcIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5zdWNjZXNzU3ViQ29sbGVjdGlvblxcXCIgY2xhc3M9XFxcInN1Yi1jb21iaW5hdGlvblxcXCIpXFxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWJpbmQ6c3R5bGU9XFxcImJnQ29sb3Ioc3ViQ29sb3IpXFxcIilcXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXFxuICAgICAgICAgICAgZGl2KHYtZm9yPVxcXCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uaW5mb1N1YkNvbGxlY3Rpb25cXFwiIGNsYXNzPVxcXCJzdWItY29tYmluYXRpb25cXFwiIClcXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtYmluZDpzdHlsZT1cXFwiYmdDb2xvcihzdWJDb2xvcilcXFwiKVxcbiAgICAgICAgdi1jYXJkLWFjdGlvbnNcXG4gICAgICAgICAgICB2LWJ0bih0ZXh0PXRydWUgQGNsaWNrPVxcXCJhZGRDb2xvclxcXCIgY2xhc3M9XFxcIl9jb2xvci1idXR0b25cXFwiIGRhdGEtamVzdD1cXFwiYWRkQ29sb3JcXFwiKSBBZGQgQ29sb3JcXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgY29sb3JIZWxwZXIgfSBmcm9tIFxcXCIuLi9jb2xvckhlbHBlclxcXCI7XFxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gXFxcInZ1ZXhcXFwiO1xcbmltcG9ydCB7IFZTbGlkZXIgfSBmcm9tIFxcXCJ2dWV0aWZ5L2xpYlxcXCI7XFxuXFxuY29uc3QgY29sb3JVdGlscyA9IG5ldyBjb2xvckhlbHBlcigpO1xcblxcbmNvbnN0IGdlbmVyYXRlTmV3Q29sb3JTZXQgPSBmdW5jdGlvbihkb21pbmFudCwgY29tYmluYXRpb24pIHtcXG4gIGNvbnN0IG5ld0NvbWJpbmF0aW9uID0ge307XFxuICBuZXdDb21iaW5hdGlvbi5odWVWYXJpYXRpb24gPVxcbiAgICBwYXJzZUludChjb21iaW5hdGlvbi5odWUpIC0gcGFyc2VJbnQoZG9taW5hbnQuaHVlKTtcXG4gIGlmIChwYXJzZUludChjb21iaW5hdGlvbi5zYXR1cmF0aW9uKSAhPT0gcGFyc2VJbnQoZG9taW5hbnQuc2F0dXJhdGlvbikpIHtcXG4gICAgbmV3Q29tYmluYXRpb24uc2F0dXJhdGlvbiA9IHBhcnNlSW50KGNvbWJpbmF0aW9uLnNhdHVyYXRpb24pO1xcbiAgfVxcbiAgaWYgKHBhcnNlSW50KGNvbWJpbmF0aW9uLmxpZ2h0KSAhPT0gcGFyc2VJbnQoZG9taW5hbnQubGlnaHQpKSB7XFxuICAgIG5ld0NvbWJpbmF0aW9uLmxpZ2h0ID0gcGFyc2VJbnQoY29tYmluYXRpb24ubGlnaHQpO1xcbiAgfVxcbiAgcmV0dXJuIG5ld0NvbWJpbmF0aW9uO1xcbn07XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgY29tcG9uZW50czogeyBWU2xpZGVyIH0sXFxuICBwcm9wczogW1xcXCJwYW5lbE9wZW5lZFxcXCIsIFxcXCJtaW5pVmFyaWFudFxcXCJdLFxcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc01vdW50ZWQ6IGZhbHNlLFxcbiAgICAgIGRvbWluYW50Q29sb3JQYXJhbXM6IG51bGwsXFxuICAgICAgcmVhZHk6IDBcXG4gICAgfTtcXG4gIH0sXFxuICB3YXRjaDoge1xcbiAgICBpc01vdW50ZWQoKSB7XFxuICAgICAgaWYgKHRoaXMuaXNNb3VudGVkID09PSB0cnVlKSB7XFxuICAgICAgICB0aGlzLnJlYWR5ICs9IDE7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBsb2FkZWQoKSB7XFxuICAgICAgaWYgKHRoaXMubG9hZGVkID09PSB0cnVlKSB7XFxuICAgICAgICB0aGlzLnJlYWR5ICs9IDE7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICByZWFkeSgpIHtcXG4gICAgICBpZiAodGhpcy5yZWFkeSA+PSAyKSB7XFxuICAgICAgICB0aGlzLmRvbWluYW50Q29sb3JQYXJhbXMgPSBjb2xvclV0aWxzXFxuICAgICAgICAgIC5oZXhUb0hzbCh0aGlzLnN0eWxlU2V0LmRvbWluYW50KVxcbiAgICAgICAgICAuZ2V0VmFsdWVDb2xsZWN0aW9uKCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9LFxcbiAgbW91bnRlZCgpIHtcXG4gICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xcbiAgICBpZiAodGhpcy5sb2FkZWQgPT09IHRydWUpIHtcXG4gICAgICB0aGlzLnJlYWR5ICs9IDE7XFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoW1xcXCJ1cGRhdGVTZXR0aW5nc1xcXCJdKSxcXG4gICAgcmVzZXRTZXR0aW5nKHNldHRpbmcsIGluZGV4KSB7XFxuICAgICAgbGV0IG5ld1NldHRpbmdzID0gdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb25baW5kZXhdO1xcbiAgICAgIGRlbGV0ZSBuZXdTZXR0aW5nc1tzZXR0aW5nXTtcXG5cXG4gICAgICB0aGlzLiRzZXQodGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sIGluZGV4LCBuZXdTZXR0aW5ncyk7XFxuICAgICAgdGhpcy5yZWdlbmVyYXRlQ29sb3JTZXQoKTtcXG4gICAgfSxcXG4gICAgYmdDb2xvcjogZnVuY3Rpb24oY29sb3IpIHtcXG4gICAgICByZXR1cm4gYGJhY2tncm91bmQ6JHtjb2xvclV0aWxzLmdldFN0cmluZyhjb2xvcil9YDtcXG4gICAgfSxcXG4gICAgZ2V0U3RyaW5nQ29sb3IoY29sb3IsIGh1ZU9ubHkpIHtcXG4gICAgICBpZiAoaHVlT25seSkge1xcbiAgICAgICAgY29sb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbG9yKSk7XFxuICAgICAgICBjb2xvci5saWdodCA9IDUwO1xcbiAgICAgICAgY29sb3Iuc2F0dXJhdGlvbiA9IDEwMDtcXG4gICAgICB9XFxuICAgICAgcmV0dXJuIGNvbG9yVXRpbHMuaHNsVG9IZXgoY29sb3IpLmdldFN0cmluZygpO1xcbiAgICB9LFxcbiAgICBjaGVja051bTogZnVuY3Rpb24obnVtYmVyLCBtaW4sIG1heCkge1xcbiAgICAgIG1pbiA9IG1pbiA/IG1pbiA6IDA7XFxuICAgICAgbnVtYmVyID0gbnVtYmVyIDwgbWluID8gbWluIDogbnVtYmVyO1xcbiAgICAgIG51bWJlciA9IG51bWJlciA+IG1heCA/IG1heCA6IG51bWJlcjtcXG4gICAgICByZXR1cm4gaXNOYU4ocGFyc2VJbnQobnVtYmVyKSkgPyBtaW4gOiBudW1iZXI7XFxuICAgIH0sXFxuICAgIHVwZGF0ZUNvbG9yOiBmdW5jdGlvbigpIHtcXG4gICAgICBpZiAoIXRoaXMuaXNNb3VudGVkICYmICF0aGlzLmxvYWRlZCkge1xcbiAgICAgICAgLy9wcmV2ZW50IGluaXRpYWwgdHJpZ2dlclxcbiAgICAgICAgcmV0dXJuO1xcbiAgICAgIH1cXG4gICAgICB0aGlzLiRzZXQoXFxuICAgICAgICB0aGlzLnN0eWxlU2V0LFxcbiAgICAgICAgXFxcImRvbWluYW50XFxcIixcXG4gICAgICAgIGNvbG9yVXRpbHMuaHNsVG9IZXgodGhpcy5kb21pbmFudENvbG9yUGFyYW1zKS5nZXRTdHJpbmcoKVxcbiAgICAgICk7XFxuICAgICAgdGhpcy5jb2xvclNldFxcbiAgICAgICAgLnVwZGF0ZUNvbG9yKHRoaXMuZG9taW5hbnRDb2xvclBhcmFtcylcXG4gICAgICAgIC5nZW5lcmF0ZShcXG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXFxuICAgICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxcbiAgICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcXG4gICAgICAgICk7XFxuICAgIH0sXFxuXFxuICAgIHVwZGF0ZUNvbWJpbmF0aW9uQ29sb3I6IGZ1bmN0aW9uKGluZGV4KSB7XFxuICAgICAgdGhpcy4kc2V0KFxcbiAgICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXFxuICAgICAgICBpbmRleCxcXG4gICAgICAgIGdlbmVyYXRlTmV3Q29sb3JTZXQoXFxuICAgICAgICAgIHRoaXMuZG9taW5hbnRDb2xvclBhcmFtcyxcXG4gICAgICAgICAgdGhpcy5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uW2luZGV4XVxcbiAgICAgICAgKVxcbiAgICAgICk7XFxuXFxuICAgICAgdGhpcy5yZWdlbmVyYXRlQ29sb3JTZXQoKTtcXG4gICAgfSxcXG4gICAgcmVnZW5lcmF0ZUNvbG9yU2V0OiBmdW5jdGlvbigpIHtcXG4gICAgICB0aGlzLmNvbG9yU2V0LmdlbmVyYXRlKFxcbiAgICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxcbiAgICAgICk7XFxuICAgIH0sXFxuICAgIGlzTWFpbkNvbG9yOiBmdW5jdGlvbihjb2xvciwgc3ViQ29sb3IpIHtcXG4gICAgICByZXR1cm4gY29sb3IgPT09IHN1YkNvbG9yO1xcbiAgICB9LFxcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uKGl0ZW0pIHtcXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XFxuICAgIH0sXFxuICAgIGFkZENvbG9yOiBmdW5jdGlvbigpIHtcXG4gICAgICBjb25zdCBuZXdDb2xvclNldCA9IHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uO1xcbiAgICAgIG5ld0NvbG9yU2V0LnB1c2goe1xcbiAgICAgICAgaHVlVmFyaWF0aW9uOiAwXFxuICAgICAgfSk7XFxuICAgICAgdGhpcy5jb2xvclNldC5nZW5lcmF0ZShcXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcXG4gICAgICApO1xcbiAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb24uc3ViLnB1c2goW10pO1xcbiAgICB9LFxcbiAgICByZW1vdmVDb2xvcjogZnVuY3Rpb24oaW5kZXgpIHtcXG4gICAgICB0aGlzLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcXG4gICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb24uc3ViLnNwbGljZShpbmRleCwgMSk7XFxuICAgIH0sXFxuICAgIHVwZGF0ZVZhcmlhdGlvbkFtdDogZnVuY3Rpb24oKSB7XFxuICAgICAgdGhpcy5jb2xvclNldC5nZW5lcmF0ZShcXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcXG4gICAgICApO1xcbiAgICB9LFxcbiAgICBzdG9yZUNvbG9yQ29vcmRpbmF0ZTogZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImN1cnJlbnRDb2xvclxcXCIsIGNvb3JkaW5hdGVzKTtcXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcXFwidHJpZ2dlck5ld1N0eWxlXFxcIik7XFxuICAgIH0sXFxuICAgIHRvZ2dsZUNvbG9yKGxvY2F0aW9uLCBpbmRleCwgbG9jYXRpb25JbmRleCkge1xcbiAgICAgIGlmIChsb2NhdGlvbiA9PT0gXFxcImRvbWluYW50XFxcIikge1xcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW1xcbiAgICAgICAgICBsb2NhdGlvblxcbiAgICAgICAgXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBpbmRleCk7XFxuICAgICAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggPT09IC0xKSB7XFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dLnB1c2goaW5kZXgpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl0uc3BsaWNlKFxcbiAgICAgICAgICAgIGV4aXN0aW5nSXRlbUluZGV4LFxcbiAgICAgICAgICAgIDFcXG4gICAgICAgICAgKTtcXG4gICAgICAgIH1cXG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSBcXFwic3ViXFxcIikge1xcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXVtcXG4gICAgICAgICAgbG9jYXRpb25JbmRleFxcbiAgICAgICAgXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBpbmRleCk7XFxuICAgICAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggPT09IC0xKSB7XFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW2xvY2F0aW9uSW5kZXhdLnB1c2goaW5kZXgpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl1bbG9jYXRpb25JbmRleF0uc3BsaWNlKFxcbiAgICAgICAgICAgIGV4aXN0aW5nSXRlbUluZGV4LFxcbiAgICAgICAgICAgIDFcXG4gICAgICAgICAgKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNvbG9ySXNIaWRkZW4obG9jYXRpb24sIGluZGV4LCBzdWJJbmRleCkge1xcbiAgICAgIGxldCBoaWRkZW5Db21iaW5hdGlvbjtcXG4gICAgICBpZiAobG9jYXRpb24gPT09IFxcXCJkb21pbmFudFxcXCIpIHtcXG4gICAgICAgIGhpZGRlbkNvbWJpbmF0aW9uID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl07XFxuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PT0gXFxcInN1YlxcXCIpIHtcXG4gICAgICAgIGhpZGRlbkNvbWJpbmF0aW9uID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl1bc3ViSW5kZXhdO1xcbiAgICAgIH1cXG4gICAgICByZXR1cm4gaGlkZGVuQ29tYmluYXRpb24uZmluZChpdGVtID0+IGl0ZW0gPT09IGluZGV4KSAhPT0gdW5kZWZpbmVkO1xcbiAgICB9XFxuICB9LFxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgLi4ubWFwR2V0dGVycyhbXFxcImxvYWRlZFxcXCIsIFxcXCJzZXR0aW5nc1xcXCJdKSxcXG4gICAgc3R5bGVTZXQoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3R5bGVTZXQ7XFxuICAgIH0sXFxuICAgIGNvbG9yU2V0OiB7XFxuICAgICAgZ2V0KCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuY29sb3JTZXQ7XFxuICAgICAgfSxcXG4gICAgICBzZXQodmFsdWUpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcXFwiY29sb3JTZXRcXFwiLCB2YWx1ZSk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBkaXNwbGF5UGFuZWwoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMucmVhZHkgPT09IDI7XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4uY29sb3ItcGFuZWwtLXNhbXBsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsQ29sb3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsQ29sb3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjRiNmVkOCZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY3NzUGFuZWxDb2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY3NzUGFuZWxDb2xvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2V0aWVubmVyb3VnZS9XZWJzdG9ybVByb2plY3RzL3JmQ2xlYW4vcm91Z2VGcmFtZXdvcmsvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjY0YjZlZDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjY0YjZlZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjY0YjZlZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Nzc1BhbmVsQ29sb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NGI2ZWQ4Jmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2NGI2ZWQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsQ29sb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uZGlzcGxheVBhbmVsXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJfcGFuZWxcIiwgYXR0cnM6IHsgaWQ6IFwiX2NvbG9yXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJfY29udGFpbmVyIHBhLTMgbWEtM1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfcmFuZ2UtbGlnaHQtY29udGFpbmVyXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxpZ2h0IHZhcmlhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdGlja3M6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcInRpY2stc2l6ZVwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBtYXg6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFyaWF0aW9uLWxpZ2h0LWFtdFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYXJpYXRpb25BbXQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdHlsZVNldCwgXCJ2YXJpYXRpb25MaWdodEFtdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHlsZVNldC52YXJpYXRpb25MaWdodEFtdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNhdHVyYXRpb24gdmFyaWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB0aWNrczogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwidGljay1zaXplXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIG1heDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YXJpYXRpb24tc2F0LWFtdFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYXJpYXRpb25BbXQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwidmFyaWF0aW9uU2F0QW10XCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKF92bS5kb21pbmFudENvbG9yUGFyYW1zKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJkb21pbmFudC1wcmV2aWV3XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0wXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmJnQ29sb3IoX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImRvbWluYW50SHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IFwiMzYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYi1sYWJlbFwiOiBcImFsd2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGh1bWItY29sb3JcIjogX3ZtLmdldFN0cmluZ0NvbG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUNvbG9yKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kb21pbmFudENvbG9yUGFyYW1zLmh1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZG9taW5hbnRDb2xvclBhcmFtcywgXCJodWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkb21pbmFudENvbG9yUGFyYW1zLmh1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJkb21pbmFudExpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1heDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRodW1iLWxhYmVsXCI6IFwiYWx3YXlzXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVDb2xvcigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZG9taW5hbnRDb2xvclBhcmFtcy5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZG9taW5hbnRDb2xvclBhcmFtcywgXCJsaWdodFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRvbWluYW50Q29sb3JQYXJhbXMubGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZG9taW5hbnRTYXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbWluOiBcIjBcIiwgbWF4OiBcIjEwMFwiLCBcInRodW1iLWxhYmVsXCI6IFwiYWx3YXlzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVDb2xvcigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZG9taW5hbnRDb2xvclBhcmFtcy5zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5kb21pbmFudENvbG9yUGFyYW1zLCBcInNhdHVyYXRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkb21pbmFudENvbG9yUGFyYW1zLnNhdHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sb3ItcGFuZWwtLXNhbXBsZVwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgX3ZtLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5kb21pbmFudFN1YkNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbihzdWJDb2xvciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19tYWluOiBfdm0uaXNNYWluQ29sb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5iZ0NvbG9yKHN1YkNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJnQ29sb3IoX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2lzLWhpZGRlblwiOiBfdm0uY29sb3JJc0hpZGRlbihcImRvbWluYW50XCIsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUNvbG9yKFwiZG9taW5hbnRcIiwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInN1Yi1jb2xvci1wYXJhbWV0ZXJzXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKGNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJzdWItcHJldmlld1wiICsgaW5kZXggfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInN1Ykh1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjM2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRodW1iLWxhYmVsXCI6IFwiYWx3YXlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRodW1iLWNvbG9yXCI6IF92bS5nZXRTdHJpbmdDb2xvcihjb2xvciwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUNvbWJpbmF0aW9uQ29sb3IoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbG9yLmh1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoY29sb3IsIFwiaHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbG9yLmh1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRodW1iLWxhYmVsXCI6IFwiYWx3YXlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVDb21iaW5hdGlvbkNvbG9yKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2xvci5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoY29sb3IsIFwibGlnaHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29sb3IubGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yLmxpZ2h0ICE9PSBfdm0uZG9taW5hbnRDb2xvclBhcmFtcy5saWdodFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0U2V0dGluZyhcImxpZ2h0XCIsIGluZGV4LCBjb2xvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJyZXNldFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2F0LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYi1sYWJlbFwiOiBcImFsd2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogXCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ29tYmluYXRpb25Db2xvcihpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sb3Iuc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoY29sb3IsIFwic2F0dXJhdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb2xvci5zYXR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xvci1wYW5lbC0tc2FtcGxlXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChjb2xvci5zdWJDb21iaW5hdGlvbiwgZnVuY3Rpb24oc3ViQ29sb3IsIHN1YkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzdWJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX19pcy1oaWRkZW5cIjogX3ZtLmNvbG9ySXNIaWRkZW4oXCJzdWJcIiwgc3ViSW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtamVzdFwiOiBcInN1Yi1jb21iaW5hdGlvbi1zcXVhcmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlQ29sb3IoXCJzdWJcIiwgc3ViSW5kZXgsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwicmVtb3ZlLWNvbG9yLVwiICsgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVDb2xvcihpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZSBDb2xvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbG9yLXBhbmVsLS1zYW1wbGVcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uZ3JheVN1YkNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICBzdWJDb2xvcixcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLTNcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbG9yLXBhbmVsLS1zYW1wbGVcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uYWxlcnRTdWJDb2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgc3ViQ29sb3IsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdWItY29tYmluYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtY2FyZFwiLCB7IHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvcikgfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbG9yLXBhbmVsLS1zYW1wbGVcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24ud2FybmluZ1N1YkNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICBzdWJDb2xvcixcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN1Yi1jb21iaW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1jYXJkXCIsIHsgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sb3ItcGFuZWwtLXNhbXBsZVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5zdWNjZXNzU3ViQ29sbGVjdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgIHN1YkNvbG9yLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3ViLWNvbWJpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWNhcmRcIiwgeyBzdHlsZTogX3ZtLmJnQ29sb3Ioc3ViQ29sb3IpIH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xvci1wYW5lbC0tc2FtcGxlXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmluZm9TdWJDb2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgc3ViQ29sb3IsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdWItY29tYmluYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtY2FyZFwiLCB7IHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvcikgfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIl9jb2xvci1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIsIFwiZGF0YS1qZXN0XCI6IFwiYWRkQ29sb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGRDb2xvciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkIENvbG9yXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9