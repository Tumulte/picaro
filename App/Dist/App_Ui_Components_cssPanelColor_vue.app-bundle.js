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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsQ29sb3IudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZT82NTY2Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZT8yY2QwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbENvbG9yLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxDb2xvci52dWU/NmIwYyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxDb2xvci52dWU/ZWM0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQ0Esa0RBREE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLENBWEE7O0FBYUE7QUFDQTtBQUFBO0FBQUEsR0FEQTtBQUVBLHVDQUZBOztBQUdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLCtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBVEE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FB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QWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfY3NzUGFuZWxDb2xvcl92dWUuYXBwLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgZGl2KGlkPVwiX2NvbG9yXCIgY2xhc3M9XCJfcGFuZWxcIiB2LWlmPVwiZGlzcGxheVBhbmVsXCIpXG4gICAgICAgIHYtY2FyZChjbGFzcz1cIl9jb250YWluZXIgcGEtMyBtYS0zXCIgaWQ9XCJfcmFuZ2UtbGlnaHQtY29udGFpbmVyXCIpXG4gICAgICAgICAgICB2LXNsaWRlcihsYWJlbD1cIkxpZ2h0IHZhcmlhdGlvblwiIHRpY2tzPXRydWUgdGljay1zaXplPVwiM1wiIG1pbj1cIjBcIiBtYXg9XCIxMFwiIG5hbWU9XCJ2YXJpYXRpb24tbGlnaHQtYW10XCIgdi1tb2RlbD1cInN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10XCIgQGNoYW5nZT1cInVwZGF0ZVZhcmlhdGlvbkFtdCgpXCIgKVxuICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XCJTYXR1cmF0aW9uIHZhcmlhdGlvblwiIHRpY2tzPXRydWUgdGljay1zaXplPVwiM1wiIG1pbj1cIjBcIiBtYXg9XCIxMFwiIG5hbWU9XCJ2YXJpYXRpb24tc2F0LWFtdFwiIHYtbW9kZWw9XCJzdHlsZVNldC52YXJpYXRpb25TYXRBbXRcIiBAY2hhbmdlPVwidXBkYXRlVmFyaWF0aW9uQW10KClcIiApXG4gICAgICAgIGRpdig6c3R5bGU9XCJiZ0NvbG9yKGRvbWluYW50Q29sb3JQYXJhbXMpXCIgZGF0YS1qZXN0PVwiZG9taW5hbnQtcHJldmlld1wiKVxuICAgICAgICAgICAgZGl2KDpzdHlsZT1cImJnQ29sb3IoZG9taW5hbnRDb2xvclBhcmFtcylcIiBjbGFzcz1cIm1iLTBcIilcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihtaW49XCIwXCIgbWF4PVwiMzYwXCIgdi1tb2RlbD1cImRvbWluYW50Q29sb3JQYXJhbXMuaHVlXCIgQGNoYW5nZT1cInVwZGF0ZUNvbG9yKClcIiBsYWJlbD1cIkh1ZVwiIHRodW1iLWxhYmVsPVwiYWx3YXlzXCIgOnRodW1iLWNvbG9yPVwiZ2V0U3RyaW5nQ29sb3IoZG9taW5hbnRDb2xvclBhcmFtcywgdHJ1ZSlcIiByZWY9XCJkb21pbmFudEh1ZVwiKVxuICAgICAgICAgICAgICAgIHYtc2xpZGVyKG1pbj1cIjBcIiBsYWJlbD1cImxpZ2h0XCIgbWF4PVwiMTAwXCIgdGh1bWItbGFiZWw9XCJhbHdheXNcIiBAY2hhbmdlPVwidXBkYXRlQ29sb3IoKVwiIHYtbW9kZWw9XCJkb21pbmFudENvbG9yUGFyYW1zLmxpZ2h0XCIgcmVmPVwiZG9taW5hbnRMaWdodFwiKVxuICAgICAgICAgICAgICAgIHYtc2xpZGVyKG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB0aHVtYi1sYWJlbD1cImFsd2F5c1wiIEBjaGFuZ2U9XCJ1cGRhdGVDb2xvcigpXCIgdi1tb2RlbD1cImRvbWluYW50Q29sb3JQYXJhbXMuc2F0dXJhdGlvblwiIHJlZj1cImRvbWluYW50U2F0XCIpXG4gICAgICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWZvcj1cIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5kb21pbmFudFN1YkNvbGxlY3Rpb25cIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJ0b2dnbGVDb2xvcignZG9taW5hbnQnLGluZGV4KVwiIDpjbGFzcz1cInsnX19tYWluJzppc01haW5Db2xvcihiZ0NvbG9yKHN1YkNvbG9yKSwgYmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zKSksICdfX2lzLWhpZGRlbic6IGNvbG9ySXNIaWRkZW4oJ2RvbWluYW50JywgaW5kZXgpfVwiIGNsYXNzPVwicGEtM1wiIHYtYmluZDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIpXG4gICAgICAgIHYtY2FyZCh2LWZvcj1cIihjb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5jb21iaW5hdGlvbkNvbGxlY3Rpb25cIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN1Yi1jb2xvci1wYXJhbWV0ZXJzXCIpXG4gICAgICAgICAgICBkaXYoOnN0eWxlPVwiYmdDb2xvcihjb2xvcilcIiA6ZGF0YS1qZXN0PVwiYHN1Yi1wcmV2aWV3JHtpbmRleH1gXCIpXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobWluPVwiMFwiIG1heD1cIjM2MFwiIHYtbW9kZWw9XCJjb2xvci5odWVcIiBsYWJlbD1cIkh1ZVwiIHJlZj1cInN1Ykh1ZVwiIHRodW1iLWxhYmVsPVwiYWx3YXlzXCIgOnRodW1iLWNvbG9yPVwiZ2V0U3RyaW5nQ29sb3IoY29sb3IsIHRydWUpXCIgQGNoYW5nZT1cInVwZGF0ZUNvbWJpbmF0aW9uQ29sb3IoaW5kZXgpXCIpXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XCJMaWdodFwiIHRodW1iLWxhYmVsPVwiYWx3YXlzXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHYtbW9kZWw9XCJjb2xvci5saWdodFwiIEBjaGFuZ2U9XCJ1cGRhdGVDb21iaW5hdGlvbkNvbG9yKGluZGV4KVwiKVxuICAgICAgICAgICAgICAgIHYtYnRuKHYtaWY9XCJjb2xvci5saWdodCAhPT0gZG9taW5hbnRDb2xvclBhcmFtcy5saWdodFwiIEBjbGljay5zdG9wPVwicmVzZXRTZXR0aW5nKCdsaWdodCcsIGluZGV4LCBjb2xvcilcIiApIHJlc2V0XG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XCJTYXQuXCIgdGh1bWItbGFiZWw9XCJhbHdheXNcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdi1tb2RlbD1cImNvbG9yLnNhdHVyYXRpb25cIiBAY2hhbmdlPVwidXBkYXRlQ29tYmluYXRpb25Db2xvcihpbmRleClcIilcbiAgICAgICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtZm9yPVwiKHN1YkNvbG9yLCBzdWJJbmRleCkgaW4gY29sb3Iuc3ViQ29tYmluYXRpb25cIiA6a2V5PVwic3ViSW5kZXhcIiBAY2xpY2s9XCJ0b2dnbGVDb2xvcignc3ViJywgc3ViSW5kZXgsIGluZGV4KVwiIDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIgY2xhc3M9XCJwYS0zXCIgZGF0YS1qZXN0PVwic3ViLWNvbWJpbmF0aW9uLXNxdWFyZVwiIDpjbGFzcz1cInsnX19pcy1oaWRkZW4nOiBjb2xvcklzSGlkZGVuKCdzdWInLHN1YkluZGV4LGluZGV4KX1cIilcbiAgICAgICAgICAgIHYtY2FyZC1hY3Rpb25zXG4gICAgICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIEBjbGljaz1cInJlbW92ZUNvbG9yKGluZGV4KVwiIGNsYXNzPVwiY2VudGVyXCIgOmRhdGEtamVzdD1cImByZW1vdmUtY29sb3ItJHtpbmRleH1gXCIpIFJlbW92ZSBDb2xvclxuICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxuICAgICAgICAgICAgZGl2KHYtZm9yPVwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmdyYXlTdWJDb2xsZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgdi1jYXJkKGNsYXNzPVwicGEtM1wiIDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIpXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXG4gICAgICAgICAgICBkaXYodi1mb3I9XCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uYWxlcnRTdWJDb2xsZWN0aW9uXCIgY2xhc3M9XCJzdWItY29tYmluYXRpb25cIiApXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtYmluZDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIpXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXG4gICAgICAgICAgICBkaXYodi1mb3I9XCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24ud2FybmluZ1N1YkNvbGxlY3Rpb25cIiBjbGFzcz1cInN1Yi1jb21iaW5hdGlvblwiKVxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWJpbmQ6c3R5bGU9XCJiZ0NvbG9yKHN1YkNvbG9yKVwiIClcbiAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcbiAgICAgICAgICAgIGRpdih2LWZvcj1cIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5zdWNjZXNzU3ViQ29sbGVjdGlvblwiIGNsYXNzPVwic3ViLWNvbWJpbmF0aW9uXCIpXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtYmluZDpzdHlsZT1cImJnQ29sb3Ioc3ViQ29sb3IpXCIpXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXG4gICAgICAgICAgICBkaXYodi1mb3I9XCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uaW5mb1N1YkNvbGxlY3Rpb25cIiBjbGFzcz1cInN1Yi1jb21iaW5hdGlvblwiIClcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1iaW5kOnN0eWxlPVwiYmdDb2xvcihzdWJDb2xvcilcIilcbiAgICAgICAgdi1jYXJkLWFjdGlvbnNcbiAgICAgICAgICAgIHYtYnRuKHRleHQ9dHJ1ZSBAY2xpY2s9XCJhZGRDb2xvclwiIGNsYXNzPVwiX2NvbG9yLWJ1dHRvblwiIGRhdGEtamVzdD1cImFkZENvbG9yXCIpIEFkZCBDb2xvclxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjb2xvckhlbHBlciB9IGZyb20gXCIuLi9jb2xvckhlbHBlclwiO1xuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyBWU2xpZGVyIH0gZnJvbSBcInZ1ZXRpZnkvbGliXCI7XG5cbmNvbnN0IGNvbG9yVXRpbHMgPSBuZXcgY29sb3JIZWxwZXIoKTtcblxuY29uc3QgZ2VuZXJhdGVOZXdDb2xvclNldCA9IGZ1bmN0aW9uKGRvbWluYW50LCBjb21iaW5hdGlvbikge1xuICBjb25zdCBuZXdDb21iaW5hdGlvbiA9IHt9O1xuICBuZXdDb21iaW5hdGlvbi5odWVWYXJpYXRpb24gPVxuICAgIHBhcnNlSW50KGNvbWJpbmF0aW9uLmh1ZSkgLSBwYXJzZUludChkb21pbmFudC5odWUpO1xuICBpZiAocGFyc2VJbnQoY29tYmluYXRpb24uc2F0dXJhdGlvbikgIT09IHBhcnNlSW50KGRvbWluYW50LnNhdHVyYXRpb24pKSB7XG4gICAgbmV3Q29tYmluYXRpb24uc2F0dXJhdGlvbiA9IHBhcnNlSW50KGNvbWJpbmF0aW9uLnNhdHVyYXRpb24pO1xuICB9XG4gIGlmIChwYXJzZUludChjb21iaW5hdGlvbi5saWdodCkgIT09IHBhcnNlSW50KGRvbWluYW50LmxpZ2h0KSkge1xuICAgIG5ld0NvbWJpbmF0aW9uLmxpZ2h0ID0gcGFyc2VJbnQoY29tYmluYXRpb24ubGlnaHQpO1xuICB9XG4gIHJldHVybiBuZXdDb21iaW5hdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBWU2xpZGVyIH0sXG4gIHByb3BzOiBbXCJwYW5lbE9wZW5lZFwiLCBcIm1pbmlWYXJpYW50XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc01vdW50ZWQ6IGZhbHNlLFxuICAgICAgZG9taW5hbnRDb2xvclBhcmFtczogbnVsbCxcbiAgICAgIHJlYWR5OiAwXG4gICAgfTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpc01vdW50ZWQoKSB7XG4gICAgICBpZiAodGhpcy5pc01vdW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5yZWFkeSArPSAxO1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZGVkKCkge1xuICAgICAgaWYgKHRoaXMubG9hZGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMucmVhZHkgKz0gMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlYWR5KCkge1xuICAgICAgaWYgKHRoaXMucmVhZHkgPj0gMikge1xuICAgICAgICB0aGlzLmRvbWluYW50Q29sb3JQYXJhbXMgPSBjb2xvclV0aWxzXG4gICAgICAgICAgLmhleFRvSHNsKHRoaXMuc3R5bGVTZXQuZG9taW5hbnQpXG4gICAgICAgICAgLmdldFZhbHVlQ29sbGVjdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMubG9hZGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnJlYWR5ICs9IDE7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJ1cGRhdGVTZXR0aW5nc1wiXSksXG4gICAgcmVzZXRTZXR0aW5nKHNldHRpbmcsIGluZGV4KSB7XG4gICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbltpbmRleF07XG4gICAgICBkZWxldGUgbmV3U2V0dGluZ3Nbc2V0dGluZ107XG5cbiAgICAgIHRoaXMuJHNldCh0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbiwgaW5kZXgsIG5ld1NldHRpbmdzKTtcbiAgICAgIHRoaXMucmVnZW5lcmF0ZUNvbG9yU2V0KCk7XG4gICAgfSxcbiAgICBiZ0NvbG9yOiBmdW5jdGlvbihjb2xvcikge1xuICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiR7Y29sb3JVdGlscy5nZXRTdHJpbmcoY29sb3IpfWA7XG4gICAgfSxcbiAgICBnZXRTdHJpbmdDb2xvcihjb2xvciwgaHVlT25seSkge1xuICAgICAgaWYgKGh1ZU9ubHkpIHtcbiAgICAgICAgY29sb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbG9yKSk7XG4gICAgICAgIGNvbG9yLmxpZ2h0ID0gNTA7XG4gICAgICAgIGNvbG9yLnNhdHVyYXRpb24gPSAxMDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29sb3JVdGlscy5oc2xUb0hleChjb2xvcikuZ2V0U3RyaW5nKCk7XG4gICAgfSxcbiAgICBjaGVja051bTogZnVuY3Rpb24obnVtYmVyLCBtaW4sIG1heCkge1xuICAgICAgbWluID0gbWluID8gbWluIDogMDtcbiAgICAgIG51bWJlciA9IG51bWJlciA8IG1pbiA/IG1pbiA6IG51bWJlcjtcbiAgICAgIG51bWJlciA9IG51bWJlciA+IG1heCA/IG1heCA6IG51bWJlcjtcbiAgICAgIHJldHVybiBpc05hTihwYXJzZUludChudW1iZXIpKSA/IG1pbiA6IG51bWJlcjtcbiAgICB9LFxuICAgIHVwZGF0ZUNvbG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc01vdW50ZWQgJiYgIXRoaXMubG9hZGVkKSB7XG4gICAgICAgIC8vcHJldmVudCBpbml0aWFsIHRyaWdnZXJcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy4kc2V0KFxuICAgICAgICB0aGlzLnN0eWxlU2V0LFxuICAgICAgICBcImRvbWluYW50XCIsXG4gICAgICAgIGNvbG9yVXRpbHMuaHNsVG9IZXgodGhpcy5kb21pbmFudENvbG9yUGFyYW1zKS5nZXRTdHJpbmcoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuY29sb3JTZXRcbiAgICAgICAgLnVwZGF0ZUNvbG9yKHRoaXMuZG9taW5hbnRDb2xvclBhcmFtcylcbiAgICAgICAgLmdlbmVyYXRlKFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxuICAgICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxuICAgICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICB1cGRhdGVDb21iaW5hdGlvbkNvbG9yOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdGhpcy4kc2V0KFxuICAgICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdlbmVyYXRlTmV3Q29sb3JTZXQoXG4gICAgICAgICAgdGhpcy5kb21pbmFudENvbG9yUGFyYW1zLFxuICAgICAgICAgIHRoaXMuY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvbltpbmRleF1cbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5yZWdlbmVyYXRlQ29sb3JTZXQoKTtcbiAgICB9LFxuICAgIHJlZ2VuZXJhdGVDb2xvclNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNvbG9yU2V0LmdlbmVyYXRlKFxuICAgICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uU2F0QW10KVxuICAgICAgKTtcbiAgICB9LFxuICAgIGlzTWFpbkNvbG9yOiBmdW5jdGlvbihjb2xvciwgc3ViQ29sb3IpIHtcbiAgICAgIHJldHVybiBjb2xvciA9PT0gc3ViQ29sb3I7XG4gICAgfSxcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgICB9LFxuICAgIGFkZENvbG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG5ld0NvbG9yU2V0ID0gdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb247XG4gICAgICBuZXdDb2xvclNldC5wdXNoKHtcbiAgICAgICAgaHVlVmFyaWF0aW9uOiAwXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29sb3JTZXQuZ2VuZXJhdGUoXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXG4gICAgICApO1xuICAgICAgdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbi5zdWIucHVzaChbXSk7XG4gICAgfSxcbiAgICByZW1vdmVDb2xvcjogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHRoaXMuY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb24uc3ViLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSxcbiAgICB1cGRhdGVWYXJpYXRpb25BbXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jb2xvclNldC5nZW5lcmF0ZShcbiAgICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24sXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcbiAgICAgICk7XG4gICAgfSxcbiAgICBzdG9yZUNvbG9yQ29vcmRpbmF0ZTogZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImN1cnJlbnRDb2xvclwiLCBjb29yZGluYXRlcyk7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInRyaWdnZXJOZXdTdHlsZVwiKTtcbiAgICB9LFxuICAgIHRvZ2dsZUNvbG9yKGxvY2F0aW9uLCBpbmRleCwgbG9jYXRpb25JbmRleCkge1xuICAgICAgaWYgKGxvY2F0aW9uID09PSBcImRvbWluYW50XCIpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW1xuICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgIF0uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gaW5kZXgpO1xuICAgICAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl0ucHVzaChpbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl0uc3BsaWNlKFxuICAgICAgICAgICAgZXhpc3RpbmdJdGVtSW5kZXgsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PT0gXCJzdWJcIikge1xuICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW1xuICAgICAgICAgIGxvY2F0aW9uSW5kZXhcbiAgICAgICAgXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBpbmRleCk7XG4gICAgICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXVtsb2NhdGlvbkluZGV4XS5wdXNoKGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXVtsb2NhdGlvbkluZGV4XS5zcGxpY2UoXG4gICAgICAgICAgICBleGlzdGluZ0l0ZW1JbmRleCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcklzSGlkZGVuKGxvY2F0aW9uLCBpbmRleCwgc3ViSW5kZXgpIHtcbiAgICAgIGxldCBoaWRkZW5Db21iaW5hdGlvbjtcbiAgICAgIGlmIChsb2NhdGlvbiA9PT0gXCJkb21pbmFudFwiKSB7XG4gICAgICAgIGhpZGRlbkNvbWJpbmF0aW9uID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl07XG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSBcInN1YlwiKSB7XG4gICAgICAgIGhpZGRlbkNvbWJpbmF0aW9uID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl1bc3ViSW5kZXhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhpZGRlbkNvbWJpbmF0aW9uLmZpbmQoaXRlbSA9PiBpdGVtID09PSBpbmRleCkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXCJsb2FkZWRcIiwgXCJzZXR0aW5nc1wiXSksXG4gICAgc3R5bGVTZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHlsZVNldDtcbiAgICB9LFxuICAgIGNvbG9yU2V0OiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNvbG9yU2V0O1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJjb2xvclNldFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwbGF5UGFuZWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkeSA9PT0gMjtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbi5jb2xvci1wYW5lbC0tc2FtcGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb2xvci1wYW5lbC0tc2FtcGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsQ29sb3IudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEwUEE7RUFDQSxhQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlIGxhbmc9XFxcInB1Z1xcXCI+XFxuICAgIGRpdihpZD1cXFwiX2NvbG9yXFxcIiBjbGFzcz1cXFwiX3BhbmVsXFxcIiB2LWlmPVxcXCJkaXNwbGF5UGFuZWxcXFwiKVxcbiAgICAgICAgdi1jYXJkKGNsYXNzPVxcXCJfY29udGFpbmVyIHBhLTMgbWEtM1xcXCIgaWQ9XFxcIl9yYW5nZS1saWdodC1jb250YWluZXJcXFwiKVxcbiAgICAgICAgICAgIHYtc2xpZGVyKGxhYmVsPVxcXCJMaWdodCB2YXJpYXRpb25cXFwiIHRpY2tzPXRydWUgdGljay1zaXplPVxcXCIzXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTBcXFwiIG5hbWU9XFxcInZhcmlhdGlvbi1saWdodC1hbXRcXFwiIHYtbW9kZWw9XFxcInN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10XFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVWYXJpYXRpb25BbXQoKVxcXCIgKVxcbiAgICAgICAgICAgIHYtc2xpZGVyKGxhYmVsPVxcXCJTYXR1cmF0aW9uIHZhcmlhdGlvblxcXCIgdGlja3M9dHJ1ZSB0aWNrLXNpemU9XFxcIjNcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMFxcXCIgbmFtZT1cXFwidmFyaWF0aW9uLXNhdC1hbXRcXFwiIHYtbW9kZWw9XFxcInN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdFxcXCIgQGNoYW5nZT1cXFwidXBkYXRlVmFyaWF0aW9uQW10KClcXFwiIClcXG4gICAgICAgIGRpdig6c3R5bGU9XFxcImJnQ29sb3IoZG9taW5hbnRDb2xvclBhcmFtcylcXFwiIGRhdGEtamVzdD1cXFwiZG9taW5hbnQtcHJldmlld1xcXCIpXFxuICAgICAgICAgICAgZGl2KDpzdHlsZT1cXFwiYmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zKVxcXCIgY2xhc3M9XFxcIm1iLTBcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXNsaWRlcihtaW49XFxcIjBcXFwiIG1heD1cXFwiMzYwXFxcIiB2LW1vZGVsPVxcXCJkb21pbmFudENvbG9yUGFyYW1zLmh1ZVxcXCIgQGNoYW5nZT1cXFwidXBkYXRlQ29sb3IoKVxcXCIgbGFiZWw9XFxcIkh1ZVxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOnRodW1iLWNvbG9yPVxcXCJnZXRTdHJpbmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zLCB0cnVlKVxcXCIgcmVmPVxcXCJkb21pbmFudEh1ZVxcXCIpXFxuICAgICAgICAgICAgICAgIHYtc2xpZGVyKG1pbj1cXFwiMFxcXCIgbGFiZWw9XFxcImxpZ2h0XFxcIiBtYXg9XFxcIjEwMFxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgQGNoYW5nZT1cXFwidXBkYXRlQ29sb3IoKVxcXCIgdi1tb2RlbD1cXFwiZG9taW5hbnRDb2xvclBhcmFtcy5saWdodFxcXCIgcmVmPVxcXCJkb21pbmFudExpZ2h0XFxcIilcXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMFxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgQGNoYW5nZT1cXFwidXBkYXRlQ29sb3IoKVxcXCIgdi1tb2RlbD1cXFwiZG9taW5hbnRDb2xvclBhcmFtcy5zYXR1cmF0aW9uXFxcIiByZWY9XFxcImRvbWluYW50U2F0XFxcIilcXG4gICAgICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1mb3I9XFxcIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5kb21pbmFudFN1YkNvbGxlY3Rpb25cXFwiIDprZXk9XFxcImluZGV4XFxcIiBAY2xpY2s9XFxcInRvZ2dsZUNvbG9yKCdkb21pbmFudCcsaW5kZXgpXFxcIiA6Y2xhc3M9XFxcInsnX19tYWluJzppc01haW5Db2xvcihiZ0NvbG9yKHN1YkNvbG9yKSwgYmdDb2xvcihkb21pbmFudENvbG9yUGFyYW1zKSksICdfX2lzLWhpZGRlbic6IGNvbG9ySXNIaWRkZW4oJ2RvbWluYW50JywgaW5kZXgpfVxcXCIgY2xhc3M9XFxcInBhLTNcXFwiIHYtYmluZDpzdHlsZT1cXFwiYmdDb2xvcihzdWJDb2xvcilcXFwiKVxcbiAgICAgICAgdi1jYXJkKHYtZm9yPVxcXCIoY29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uXFxcIiA6a2V5PVxcXCJpbmRleFxcXCIgY2xhc3M9XFxcInN1Yi1jb2xvci1wYXJhbWV0ZXJzXFxcIilcXG4gICAgICAgICAgICBkaXYoOnN0eWxlPVxcXCJiZ0NvbG9yKGNvbG9yKVxcXCIgOmRhdGEtamVzdD1cXFwiYHN1Yi1wcmV2aWV3JHtpbmRleH1gXFxcIilcXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobWluPVxcXCIwXFxcIiBtYXg9XFxcIjM2MFxcXCIgdi1tb2RlbD1cXFwiY29sb3IuaHVlXFxcIiBsYWJlbD1cXFwiSHVlXFxcIiByZWY9XFxcInN1Ykh1ZVxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOnRodW1iLWNvbG9yPVxcXCJnZXRTdHJpbmdDb2xvcihjb2xvciwgdHJ1ZSlcXFwiIEBjaGFuZ2U9XFxcInVwZGF0ZUNvbWJpbmF0aW9uQ29sb3IoaW5kZXgpXFxcIilcXG4gICAgICAgICAgICAgICAgdi1zbGlkZXIobGFiZWw9XFxcIkxpZ2h0XFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwXFxcIiB2LW1vZGVsPVxcXCJjb2xvci5saWdodFxcXCIgQGNoYW5nZT1cXFwidXBkYXRlQ29tYmluYXRpb25Db2xvcihpbmRleClcXFwiKVxcbiAgICAgICAgICAgICAgICB2LWJ0bih2LWlmPVxcXCJjb2xvci5saWdodCAhPT0gZG9taW5hbnRDb2xvclBhcmFtcy5saWdodFxcXCIgQGNsaWNrLnN0b3A9XFxcInJlc2V0U2V0dGluZygnbGlnaHQnLCBpbmRleCwgY29sb3IpXFxcIiApIHJlc2V0XFxuICAgICAgICAgICAgICAgIHYtc2xpZGVyKGxhYmVsPVxcXCJTYXQuXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwXFxcIiB2LW1vZGVsPVxcXCJjb2xvci5zYXR1cmF0aW9uXFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVDb21iaW5hdGlvbkNvbG9yKGluZGV4KVxcXCIpXFxuICAgICAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtZm9yPVxcXCIoc3ViQ29sb3IsIHN1YkluZGV4KSBpbiBjb2xvci5zdWJDb21iaW5hdGlvblxcXCIgOmtleT1cXFwic3ViSW5kZXhcXFwiIEBjbGljaz1cXFwidG9nZ2xlQ29sb3IoJ3N1YicsIHN1YkluZGV4LCBpbmRleClcXFwiIDpzdHlsZT1cXFwiYmdDb2xvcihzdWJDb2xvcilcXFwiIGNsYXNzPVxcXCJwYS0zXFxcIiBkYXRhLWplc3Q9XFxcInN1Yi1jb21iaW5hdGlvbi1zcXVhcmVcXFwiIDpjbGFzcz1cXFwieydfX2lzLWhpZGRlbic6IGNvbG9ySXNIaWRkZW4oJ3N1Yicsc3ViSW5kZXgsaW5kZXgpfVxcXCIpXFxuICAgICAgICAgICAgdi1jYXJkLWFjdGlvbnNcXG4gICAgICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIEBjbGljaz1cXFwicmVtb3ZlQ29sb3IoaW5kZXgpXFxcIiBjbGFzcz1cXFwiY2VudGVyXFxcIiA6ZGF0YS1qZXN0PVxcXCJgcmVtb3ZlLWNvbG9yLSR7aW5kZXh9YFxcXCIpIFJlbW92ZSBDb2xvclxcbiAgICAgICAgLmNvbG9yLXBhbmVsLS1zYW1wbGVcXG4gICAgICAgICAgICBkaXYodi1mb3I9XFxcIihzdWJDb2xvciwgaW5kZXgpIGluIGNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5ncmF5U3ViQ29sbGVjdGlvblxcXCIpXFxuICAgICAgICAgICAgICAgIHYtY2FyZChjbGFzcz1cXFwicGEtM1xcXCIgOnN0eWxlPVxcXCJiZ0NvbG9yKHN1YkNvbG9yKVxcXCIpXFxuICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxcbiAgICAgICAgICAgIGRpdih2LWZvcj1cXFwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmFsZXJ0U3ViQ29sbGVjdGlvblxcXCIgY2xhc3M9XFxcInN1Yi1jb21iaW5hdGlvblxcXCIgKVxcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1iaW5kOnN0eWxlPVxcXCJiZ0NvbG9yKHN1YkNvbG9yKVxcXCIpXFxuICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxcbiAgICAgICAgICAgIGRpdih2LWZvcj1cXFwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLndhcm5pbmdTdWJDb2xsZWN0aW9uXFxcIiBjbGFzcz1cXFwic3ViLWNvbWJpbmF0aW9uXFxcIilcXG4gICAgICAgICAgICAgICAgdi1jYXJkKHYtYmluZDpzdHlsZT1cXFwiYmdDb2xvcihzdWJDb2xvcilcXFwiIClcXG4gICAgICAgIC5jb2xvci1wYW5lbC0tc2FtcGxlXFxuICAgICAgICAgICAgZGl2KHYtZm9yPVxcXCIoc3ViQ29sb3IsIGluZGV4KSBpbiBjb2xvclNldC5jb2xvckNvbGxlY3Rpb24uc3VjY2Vzc1N1YkNvbGxlY3Rpb25cXFwiIGNsYXNzPVxcXCJzdWItY29tYmluYXRpb25cXFwiKVxcbiAgICAgICAgICAgICAgICB2LWNhcmQodi1iaW5kOnN0eWxlPVxcXCJiZ0NvbG9yKHN1YkNvbG9yKVxcXCIpXFxuICAgICAgICAuY29sb3ItcGFuZWwtLXNhbXBsZVxcbiAgICAgICAgICAgIGRpdih2LWZvcj1cXFwiKHN1YkNvbG9yLCBpbmRleCkgaW4gY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmluZm9TdWJDb2xsZWN0aW9uXFxcIiBjbGFzcz1cXFwic3ViLWNvbWJpbmF0aW9uXFxcIiApXFxuICAgICAgICAgICAgICAgIHYtY2FyZCh2LWJpbmQ6c3R5bGU9XFxcImJnQ29sb3Ioc3ViQ29sb3IpXFxcIilcXG4gICAgICAgIHYtY2FyZC1hY3Rpb25zXFxuICAgICAgICAgICAgdi1idG4odGV4dD10cnVlIEBjbGljaz1cXFwiYWRkQ29sb3JcXFwiIGNsYXNzPVxcXCJfY29sb3ItYnV0dG9uXFxcIiBkYXRhLWplc3Q9XFxcImFkZENvbG9yXFxcIikgQWRkIENvbG9yXFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcbmltcG9ydCB7IGNvbG9ySGVscGVyIH0gZnJvbSBcXFwiLi4vY29sb3JIZWxwZXJcXFwiO1xcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5pbXBvcnQgeyBWU2xpZGVyIH0gZnJvbSBcXFwidnVldGlmeS9saWJcXFwiO1xcblxcbmNvbnN0IGNvbG9yVXRpbHMgPSBuZXcgY29sb3JIZWxwZXIoKTtcXG5cXG5jb25zdCBnZW5lcmF0ZU5ld0NvbG9yU2V0ID0gZnVuY3Rpb24oZG9taW5hbnQsIGNvbWJpbmF0aW9uKSB7XFxuICBjb25zdCBuZXdDb21iaW5hdGlvbiA9IHt9O1xcbiAgbmV3Q29tYmluYXRpb24uaHVlVmFyaWF0aW9uID1cXG4gICAgcGFyc2VJbnQoY29tYmluYXRpb24uaHVlKSAtIHBhcnNlSW50KGRvbWluYW50Lmh1ZSk7XFxuICBpZiAocGFyc2VJbnQoY29tYmluYXRpb24uc2F0dXJhdGlvbikgIT09IHBhcnNlSW50KGRvbWluYW50LnNhdHVyYXRpb24pKSB7XFxuICAgIG5ld0NvbWJpbmF0aW9uLnNhdHVyYXRpb24gPSBwYXJzZUludChjb21iaW5hdGlvbi5zYXR1cmF0aW9uKTtcXG4gIH1cXG4gIGlmIChwYXJzZUludChjb21iaW5hdGlvbi5saWdodCkgIT09IHBhcnNlSW50KGRvbWluYW50LmxpZ2h0KSkge1xcbiAgICBuZXdDb21iaW5hdGlvbi5saWdodCA9IHBhcnNlSW50KGNvbWJpbmF0aW9uLmxpZ2h0KTtcXG4gIH1cXG4gIHJldHVybiBuZXdDb21iaW5hdGlvbjtcXG59O1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGNvbXBvbmVudHM6IHsgVlNsaWRlciB9LFxcbiAgcHJvcHM6IFtcXFwicGFuZWxPcGVuZWRcXFwiLCBcXFwibWluaVZhcmlhbnRcXFwiXSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNNb3VudGVkOiBmYWxzZSxcXG4gICAgICBkb21pbmFudENvbG9yUGFyYW1zOiBudWxsLFxcbiAgICAgIHJlYWR5OiAwXFxuICAgIH07XFxuICB9LFxcbiAgd2F0Y2g6IHtcXG4gICAgaXNNb3VudGVkKCkge1xcbiAgICAgIGlmICh0aGlzLmlzTW91bnRlZCA9PT0gdHJ1ZSkge1xcbiAgICAgICAgdGhpcy5yZWFkeSArPSAxO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgbG9hZGVkKCkge1xcbiAgICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdHJ1ZSkge1xcbiAgICAgICAgdGhpcy5yZWFkeSArPSAxO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgcmVhZHkoKSB7XFxuICAgICAgaWYgKHRoaXMucmVhZHkgPj0gMikge1xcbiAgICAgICAgdGhpcy5kb21pbmFudENvbG9yUGFyYW1zID0gY29sb3JVdGlsc1xcbiAgICAgICAgICAuaGV4VG9Ic2wodGhpcy5zdHlsZVNldC5kb21pbmFudClcXG4gICAgICAgICAgLmdldFZhbHVlQ29sbGVjdGlvbigpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcXG4gICAgaWYgKHRoaXMubG9hZGVkID09PSB0cnVlKSB7XFxuICAgICAgdGhpcy5yZWFkeSArPSAxO1xcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKFtcXFwidXBkYXRlU2V0dGluZ3NcXFwiXSksXFxuICAgIHJlc2V0U2V0dGluZyhzZXR0aW5nLCBpbmRleCkge1xcbiAgICAgIGxldCBuZXdTZXR0aW5ncyA9IHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uW2luZGV4XTtcXG4gICAgICBkZWxldGUgbmV3U2V0dGluZ3Nbc2V0dGluZ107XFxuXFxuICAgICAgdGhpcy4kc2V0KHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLCBpbmRleCwgbmV3U2V0dGluZ3MpO1xcbiAgICAgIHRoaXMucmVnZW5lcmF0ZUNvbG9yU2V0KCk7XFxuICAgIH0sXFxuICAgIGJnQ29sb3I6IGZ1bmN0aW9uKGNvbG9yKSB7XFxuICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiR7Y29sb3JVdGlscy5nZXRTdHJpbmcoY29sb3IpfWA7XFxuICAgIH0sXFxuICAgIGdldFN0cmluZ0NvbG9yKGNvbG9yLCBodWVPbmx5KSB7XFxuICAgICAgaWYgKGh1ZU9ubHkpIHtcXG4gICAgICAgIGNvbG9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb2xvcikpO1xcbiAgICAgICAgY29sb3IubGlnaHQgPSA1MDtcXG4gICAgICAgIGNvbG9yLnNhdHVyYXRpb24gPSAxMDA7XFxuICAgICAgfVxcbiAgICAgIHJldHVybiBjb2xvclV0aWxzLmhzbFRvSGV4KGNvbG9yKS5nZXRTdHJpbmcoKTtcXG4gICAgfSxcXG4gICAgY2hlY2tOdW06IGZ1bmN0aW9uKG51bWJlciwgbWluLCBtYXgpIHtcXG4gICAgICBtaW4gPSBtaW4gPyBtaW4gOiAwO1xcbiAgICAgIG51bWJlciA9IG51bWJlciA8IG1pbiA/IG1pbiA6IG51bWJlcjtcXG4gICAgICBudW1iZXIgPSBudW1iZXIgPiBtYXggPyBtYXggOiBudW1iZXI7XFxuICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlSW50KG51bWJlcikpID8gbWluIDogbnVtYmVyO1xcbiAgICB9LFxcbiAgICB1cGRhdGVDb2xvcjogZnVuY3Rpb24oKSB7XFxuICAgICAgaWYgKCF0aGlzLmlzTW91bnRlZCAmJiAhdGhpcy5sb2FkZWQpIHtcXG4gICAgICAgIC8vcHJldmVudCBpbml0aWFsIHRyaWdnZXJcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuICAgICAgdGhpcy4kc2V0KFxcbiAgICAgICAgdGhpcy5zdHlsZVNldCxcXG4gICAgICAgIFxcXCJkb21pbmFudFxcXCIsXFxuICAgICAgICBjb2xvclV0aWxzLmhzbFRvSGV4KHRoaXMuZG9taW5hbnRDb2xvclBhcmFtcykuZ2V0U3RyaW5nKClcXG4gICAgICApO1xcbiAgICAgIHRoaXMuY29sb3JTZXRcXG4gICAgICAgIC51cGRhdGVDb2xvcih0aGlzLmRvbWluYW50Q29sb3JQYXJhbXMpXFxuICAgICAgICAuZ2VuZXJhdGUoXFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxcbiAgICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10KSxcXG4gICAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXFxuICAgICAgICApO1xcbiAgICB9LFxcblxcbiAgICB1cGRhdGVDb21iaW5hdGlvbkNvbG9yOiBmdW5jdGlvbihpbmRleCkge1xcbiAgICAgIHRoaXMuJHNldChcXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxcbiAgICAgICAgaW5kZXgsXFxuICAgICAgICBnZW5lcmF0ZU5ld0NvbG9yU2V0KFxcbiAgICAgICAgICB0aGlzLmRvbWluYW50Q29sb3JQYXJhbXMsXFxuICAgICAgICAgIHRoaXMuY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmNvbWJpbmF0aW9uQ29sbGVjdGlvbltpbmRleF1cXG4gICAgICAgIClcXG4gICAgICApO1xcblxcbiAgICAgIHRoaXMucmVnZW5lcmF0ZUNvbG9yU2V0KCk7XFxuICAgIH0sXFxuICAgIHJlZ2VuZXJhdGVDb2xvclNldDogZnVuY3Rpb24oKSB7XFxuICAgICAgdGhpcy5jb2xvclNldC5nZW5lcmF0ZShcXG4gICAgICAgIHRoaXMuc3R5bGVTZXQuY29sb3JQYXJhbWV0ZXJDb2xsZWN0aW9uLFxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25MaWdodEFtdCksXFxuICAgICAgICBwYXJzZUludCh0aGlzLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdClcXG4gICAgICApO1xcbiAgICB9LFxcbiAgICBpc01haW5Db2xvcjogZnVuY3Rpb24oY29sb3IsIHN1YkNvbG9yKSB7XFxuICAgICAgcmV0dXJuIGNvbG9yID09PSBzdWJDb2xvcjtcXG4gICAgfSxcXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbihpdGVtKSB7XFxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xcbiAgICB9LFxcbiAgICBhZGRDb2xvcjogZnVuY3Rpb24oKSB7XFxuICAgICAgY29uc3QgbmV3Q29sb3JTZXQgPSB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbjtcXG4gICAgICBuZXdDb2xvclNldC5wdXNoKHtcXG4gICAgICAgIGh1ZVZhcmlhdGlvbjogMFxcbiAgICAgIH0pO1xcbiAgICAgIHRoaXMuY29sb3JTZXQuZ2VuZXJhdGUoXFxuICAgICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXFxuICAgICAgKTtcXG4gICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uLnN1Yi5wdXNoKFtdKTtcXG4gICAgfSxcXG4gICAgcmVtb3ZlQ29sb3I6IGZ1bmN0aW9uKGluZGV4KSB7XFxuICAgICAgdGhpcy5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XFxuICAgICAgdGhpcy5zdHlsZVNldC5jb2xvclBhcmFtZXRlckNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcXG4gICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uLnN1Yi5zcGxpY2UoaW5kZXgsIDEpO1xcbiAgICB9LFxcbiAgICB1cGRhdGVWYXJpYXRpb25BbXQ6IGZ1bmN0aW9uKCkge1xcbiAgICAgIHRoaXMuY29sb3JTZXQuZ2VuZXJhdGUoXFxuICAgICAgICB0aGlzLnN0eWxlU2V0LmNvbG9yUGFyYW1ldGVyQ29sbGVjdGlvbixcXG4gICAgICAgIHBhcnNlSW50KHRoaXMuc3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXQpLFxcbiAgICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZVNldC52YXJpYXRpb25TYXRBbXQpXFxuICAgICAgKTtcXG4gICAgfSxcXG4gICAgc3RvcmVDb2xvckNvb3JkaW5hdGU6IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XFxuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFxcXCJjdXJyZW50Q29sb3JcXFwiLCBjb29yZGluYXRlcyk7XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXFxcInRyaWdnZXJOZXdTdHlsZVxcXCIpO1xcbiAgICB9LFxcbiAgICB0b2dnbGVDb2xvcihsb2NhdGlvbiwgaW5kZXgsIGxvY2F0aW9uSW5kZXgpIHtcXG4gICAgICBpZiAobG9jYXRpb24gPT09IFxcXCJkb21pbmFudFxcXCIpIHtcXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltcXG4gICAgICAgICAgbG9jYXRpb25cXG4gICAgICAgIF0uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gaW5kZXgpO1xcbiAgICAgICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ID09PSAtMSkge1xcbiAgICAgICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXS5wdXNoKGluZGV4KTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dLnNwbGljZShcXG4gICAgICAgICAgICBleGlzdGluZ0l0ZW1JbmRleCxcXG4gICAgICAgICAgICAxXFxuICAgICAgICAgICk7XFxuICAgICAgICB9XFxuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PT0gXFxcInN1YlxcXCIpIHtcXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gdGhpcy5zdHlsZVNldC5oaWRkZW5Db21iaW5hdGlvbltsb2NhdGlvbl1bXFxuICAgICAgICAgIGxvY2F0aW9uSW5kZXhcXG4gICAgICAgIF0uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gaW5kZXgpO1xcbiAgICAgICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ID09PSAtMSkge1xcbiAgICAgICAgICB0aGlzLnN0eWxlU2V0LmhpZGRlbkNvbWJpbmF0aW9uW2xvY2F0aW9uXVtsb2NhdGlvbkluZGV4XS5wdXNoKGluZGV4KTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW2xvY2F0aW9uSW5kZXhdLnNwbGljZShcXG4gICAgICAgICAgICBleGlzdGluZ0l0ZW1JbmRleCxcXG4gICAgICAgICAgICAxXFxuICAgICAgICAgICk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBjb2xvcklzSGlkZGVuKGxvY2F0aW9uLCBpbmRleCwgc3ViSW5kZXgpIHtcXG4gICAgICBsZXQgaGlkZGVuQ29tYmluYXRpb247XFxuICAgICAgaWYgKGxvY2F0aW9uID09PSBcXFwiZG9taW5hbnRcXFwiKSB7XFxuICAgICAgICBoaWRkZW5Db21iaW5hdGlvbiA9IHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dO1xcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gPT09IFxcXCJzdWJcXFwiKSB7XFxuICAgICAgICBoaWRkZW5Db21iaW5hdGlvbiA9IHRoaXMuc3R5bGVTZXQuaGlkZGVuQ29tYmluYXRpb25bbG9jYXRpb25dW3N1YkluZGV4XTtcXG4gICAgICB9XFxuICAgICAgcmV0dXJuIGhpZGRlbkNvbWJpbmF0aW9uLmZpbmQoaXRlbSA9PiBpdGVtID09PSBpbmRleCkgIT09IHVuZGVmaW5lZDtcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcEdldHRlcnMoW1xcXCJsb2FkZWRcXFwiLCBcXFwic2V0dGluZ3NcXFwiXSksXFxuICAgIHN0eWxlU2V0KCkge1xcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0eWxlU2V0O1xcbiAgICB9LFxcbiAgICBjb2xvclNldDoge1xcbiAgICAgIGdldCgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmNvbG9yU2V0O1xcbiAgICAgIH0sXFxuICAgICAgc2V0KHZhbHVlKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXFxcImNvbG9yU2V0XFxcIiwgdmFsdWUpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgZGlzcGxheVBhbmVsKCkge1xcbiAgICAgIHJldHVybiB0aGlzLnJlYWR5ID09PSAyO1xcbiAgICB9XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuLmNvbG9yLXBhbmVsLS1zYW1wbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxDb2xvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY3NzUGFuZWxDb2xvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY0YjZlZDgmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY3NzUGFuZWxDb2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Nzc1BhbmVsQ29sb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Nzc1BhbmVsQ29sb3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2NGI2ZWQ4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2NGI2ZWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2NGI2ZWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjRiNmVkOCZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNjRiNmVkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxDb2xvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxDb2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbENvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmRpc3BsYXlQYW5lbFxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiX3BhbmVsXCIsIGF0dHJzOiB7IGlkOiBcIl9jb2xvclwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiX2NvbnRhaW5lciBwYS0zIG1hLTNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiX3JhbmdlLWxpZ2h0LWNvbnRhaW5lclwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJMaWdodCB2YXJpYXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHRpY2tzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJ0aWNrLXNpemVcIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgbWF4OiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInZhcmlhdGlvbi1saWdodC1hbXRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFyaWF0aW9uQW10KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0eWxlU2V0LnZhcmlhdGlvbkxpZ2h0QW10LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQsIFwidmFyaWF0aW9uTGlnaHRBbXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3R5bGVTZXQudmFyaWF0aW9uTGlnaHRBbXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidi1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTYXR1cmF0aW9uIHZhcmlhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgdGlja3M6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcInRpY2stc2l6ZVwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBtYXg6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFyaWF0aW9uLXNhdC1hbXRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFyaWF0aW9uQW10KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0eWxlU2V0LnZhcmlhdGlvblNhdEFtdCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0eWxlU2V0LCBcInZhcmlhdGlvblNhdEFtdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHlsZVNldC52YXJpYXRpb25TYXRBbXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uYmdDb2xvcihfdm0uZG9taW5hbnRDb2xvclBhcmFtcyksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwiZG9taW5hbnQtcHJldmlld1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMFwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5iZ0NvbG9yKF92bS5kb21pbmFudENvbG9yUGFyYW1zKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJkb21pbmFudEh1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjM2MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkh1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGh1bWItbGFiZWxcIjogXCJhbHdheXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRodW1iLWNvbG9yXCI6IF92bS5nZXRTdHJpbmdDb2xvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb21pbmFudENvbG9yUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVDb2xvcigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZG9taW5hbnRDb2xvclBhcmFtcy5odWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMsIFwiaHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZG9taW5hbnRDb2xvclBhcmFtcy5odWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZG9taW5hbnRMaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYi1sYWJlbFwiOiBcImFsd2F5c1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ29sb3IoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMubGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMsIFwibGlnaHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkb21pbmFudENvbG9yUGFyYW1zLmxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImRvbWluYW50U2F0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1pbjogXCIwXCIsIG1heDogXCIxMDBcIiwgXCJ0aHVtYi1sYWJlbFwiOiBcImFsd2F5c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ29sb3IoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMuc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZG9taW5hbnRDb2xvclBhcmFtcywgXCJzYXR1cmF0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZG9taW5hbnRDb2xvclBhcmFtcy5zYXR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbG9yLXBhbmVsLS1zYW1wbGVcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgIF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uZG9taW5hbnRTdWJDb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oc3ViQ29sb3IsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fbWFpbjogX3ZtLmlzTWFpbkNvbG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYmdDb2xvcihzdWJDb2xvciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5iZ0NvbG9yKF92bS5kb21pbmFudENvbG9yUGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX19pcy1oaWRkZW5cIjogX3ZtLmNvbG9ySXNIaWRkZW4oXCJkb21pbmFudFwiLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvciksXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVDb2xvcihcImRvbWluYW50XCIsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl9sKF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uY29tYmluYXRpb25Db2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJzdWItY29sb3ItcGFyYW1ldGVyc1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uYmdDb2xvcihjb2xvciksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwic3ViLXByZXZpZXdcIiArIGluZGV4IH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJzdWJIdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogXCIzNjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkh1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYi1sYWJlbFwiOiBcImFsd2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYi1jb2xvclwiOiBfdm0uZ2V0U3RyaW5nQ29sb3IoY29sb3IsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVDb21iaW5hdGlvbkNvbG9yKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2xvci5odWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGNvbG9yLCBcImh1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb2xvci5odWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zbGlkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJMaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYi1sYWJlbFwiOiBcImFsd2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogXCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQ29tYmluYXRpb25Db2xvcihpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sb3IubGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGNvbG9yLCBcImxpZ2h0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbG9yLmxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjb2xvci5saWdodCAhPT0gX3ZtLmRvbWluYW50Q29sb3JQYXJhbXMubGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldFNldHRpbmcoXCJsaWdodFwiLCBpbmRleCwgY29sb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwicmVzZXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNhdC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGh1bWItbGFiZWxcIjogXCJhbHdheXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IFwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUNvbWJpbmF0aW9uQ29sb3IoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbG9yLnNhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGNvbG9yLCBcInNhdHVyYXRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29sb3Iuc2F0dXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sb3ItcGFuZWwtLXNhbXBsZVwiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woY29sb3Iuc3ViQ29tYmluYXRpb24sIGZ1bmN0aW9uKHN1YkNvbG9yLCBzdWJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogc3ViSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9faXMtaGlkZGVuXCI6IF92bS5jb2xvcklzSGlkZGVuKFwic3ViXCIsIHN1YkluZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvciksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJzdWItY29tYmluYXRpb24tc3F1YXJlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUNvbG9yKFwic3ViXCIsIHN1YkluZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcInJlbW92ZS1jb2xvci1cIiArIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlQ29sb3IoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmUgQ29sb3JcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xvci1wYW5lbC0tc2FtcGxlXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmdyYXlTdWJDb2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgc3ViQ29sb3IsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0zXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvcilcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xvci1wYW5lbC0tc2FtcGxlXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLmFsZXJ0U3ViQ29sbGVjdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgIHN1YkNvbG9yLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3ViLWNvbWJpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWNhcmRcIiwgeyBzdHlsZTogX3ZtLmJnQ29sb3Ioc3ViQ29sb3IpIH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xvci1wYW5lbC0tc2FtcGxlXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY29sb3JTZXQuY29sb3JDb2xsZWN0aW9uLndhcm5pbmdTdWJDb2xsZWN0aW9uLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgc3ViQ29sb3IsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdWItY29tYmluYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtY2FyZFwiLCB7IHN0eWxlOiBfdm0uYmdDb2xvcihzdWJDb2xvcikgfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbG9yLXBhbmVsLS1zYW1wbGVcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2xvclNldC5jb2xvckNvbGxlY3Rpb24uc3VjY2Vzc1N1YkNvbGxlY3Rpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICBzdWJDb2xvcixcbiAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInN1Yi1jb21iaW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1jYXJkXCIsIHsgc3R5bGU6IF92bS5iZ0NvbG9yKHN1YkNvbG9yKSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sb3ItcGFuZWwtLXNhbXBsZVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNvbG9yU2V0LmNvbG9yQ29sbGVjdGlvbi5pbmZvU3ViQ29sbGVjdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgIHN1YkNvbG9yLFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3ViLWNvbWJpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWNhcmRcIiwgeyBzdHlsZTogX3ZtLmJnQ29sb3Ioc3ViQ29sb3IpIH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJfY29sb3ItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiLCBcImRhdGEtamVzdFwiOiBcImFkZENvbG9yXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkQ29sb3IgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkFkZCBDb2xvclwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==