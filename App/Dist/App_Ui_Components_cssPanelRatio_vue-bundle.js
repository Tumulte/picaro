(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_cssPanelRatio_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data() {
    return {
      selectedTag: ""
    };
  },

  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["triggerNewStyle"])), {}, {
    selectTag(tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = "";
      }

      this.selectedTag = tag;
    },

    updateTextParams(property, selector, unit) {
      if (!this.styleSet.selectorCollection[selector]) {
        this.$store.dispatch("addSelector", selector);
      }

      this.$store.dispatch("addProperty", {
        selector: selector,
        property: property,
        value: "".concat(this.styleSet.ratioCollection[selector][property]).concat(unit ? unit : "rem")
      });
      this.triggerNewStyle();
    }

  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["styleSet", "loaded"]))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.rf-ratio--text-example[data-v-76700900] {\n  overflow: hidden;\n}\n.rf-ratio--text-example[data-v-76700900]:nth-child(odd) {\n    border-left: 15px #555555 solid;\n}\n.rf-ratio--text-example[data-v-76700900]:nth-child(even) {\n    border-left: 15px #aaa solid;\n}\n#rf-content-container .--selected-tag[data-v-76700900] {\n    background: var(--secondary);\n    color: #fff;\n}\n#rf-content-container .--selected-tag .--inner-text-example[data-v-76700900] {\n      background: var(--secondaryDark);\n}\n#rf-content-container .--inner-text-example[data-v-76700900] {\n    background: #eee;\n}\n.reset-margin-bottom[data-v-76700900] {\n  margin-bottom: 0;\n}\n", "",{"version":3,"sources":["webpack://./App/Ui/Components/cssPanelRatio.vue"],"names":[],"mappings":";AAqDA;EACA,gBAAA;AAQA;AANA;IACA,+BAAA;AACA;AACA;IACA,4BAAA;AACA;AAGA;IACA,4BAAA;IACA,WAAA;AAIA;AAHA;MACA,gCAAA;AACA;AAEA;IACA,gBAAA;AACA;AAEA;EACA,gBAAA;AACA","sourcesContent":["<template lang=\"pug\">\n    v-container(v-if=\"loaded\")\n        v-row(class=\"reset-margin-bottom\")\n            v-col(cols=\"8\" class=\"pa-0 rf-ratio-text-container\")\n                template(v-for=\"(data, tag) in styleSet.ratioCollection\")\n                    div(class=\"rf-ratio--text-example\" :class=\"{'--selected-tag': tag === selectedTag}\"  @click=\"selectTag(tag)\" )\n                        component(v-if=\"tag !== 'html'\" :is=\"tag\" class=\"--inner-text-example\") Size for {{tag}}\n                div(class=\"rf-ratio--text-example\" ) Size for base text\n            v-col(cols=\"4\" class=\"pa-0\" v-if=\"selectedTag && selectedTag !== 'p'\")\n                v-text-field(type=\"number\" step=\"0.1\" data-jest=\"ratio-fs\" label=\"Font size\" v-model=\"styleSet.ratioCollection[selectedTag]['font-size']\" @input=\"updateTextParams('font-size', selectedTag)\")\n                v-text-field(type=\"number\" step=\"0.1\" data-jest=\"ratio-lh\" label=\"Line height\" v-model=\"styleSet.ratioCollection[selectedTag]['line-height']\" @input=\"updateTextParams('line-height', selectedTag)\")\n                v-text-field(type=\"number\" step=\"0.1\" data-jest=\"ratio-mb\" label=\"Margin bottom\" v-model=\"styleSet.ratioCollection[selectedTag]['margin-bottom']\" @input=\"updateTextParams('margin-bottom',selectedTag)\")\n                v-text-field(type=\"number\" step=\"0.1\" data-jest=\"ratio-mt\" label=\"Margin top\" v-model=\"styleSet.ratioCollection[selectedTag]['margin-top']\" @input=\"updateTextParams('margin-top',selectedTag)\")\n        v-text-field(type=\"number\" label=\"font-size\" data-jest=\"main-font-size\" v-model=\"styleSet.ratioCollection.html['font-size']\" @input=\"updateTextParams('font-size','html', 'px !important')\")\n        v-text-field(type=\"number\" label=\"line height\" data-jest=\"main-line-height\" v-model=\"styleSet.ratioCollection.html['line-height']\" @input=\"updateTextParams('line-height','html', 'px !important')\")\n</template>\n<script>\nimport { mapActions, mapGetters } from \"vuex\";\n\nexport default {\n  data() {\n    return {\n      selectedTag: \"\"\n    };\n  },\n  methods: {\n    ...mapActions([\"triggerNewStyle\"]),\n    selectTag(tag) {\n      if (this.selectedTag === tag) {\n        this.selectedTag = \"\";\n      }\n      this.selectedTag = tag;\n    },\n    updateTextParams(property, selector, unit) {\n      if (!this.styleSet.selectorCollection[selector]) {\n        this.$store.dispatch(\"addSelector\", selector);\n      }\n      this.$store.dispatch(\"addProperty\", {\n        selector: selector,\n        property: property,\n        value: `${this.styleSet.ratioCollection[selector][property]}${\n          unit ? unit : \"rem\"\n        }`\n      });\n      this.triggerNewStyle();\n    }\n  },\n  computed: {\n    ...mapGetters([\"styleSet\", \"loaded\"])\n  }\n};\n</script>\n<style scoped>\n.rf-ratio--text-example {\n  overflow: hidden;\n\n  &:nth-child(odd) {\n    border-left: 15px #555555 solid;\n  }\n  &:nth-child(even) {\n    border-left: 15px #aaa solid;\n  }\n}\n#rf-content-container {\n  .--selected-tag {\n    background: var(--secondary);\n    color: #fff;\n    .--inner-text-example {\n      background: var(--secondaryDark);\n    }\n  }\n  .--inner-text-example {\n    background: #eee;\n  }\n}\n.reset-margin-bottom {\n  margin-bottom: 0;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./App/Ui/Components/cssPanelRatio.vue":
/*!*********************************************!*\
  !*** ./App/Ui/Components/cssPanelRatio.vue ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug& */ "./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug&");
/* harmony import */ var _cssPanelRatio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssPanelRatio.vue?vue&type=script&lang=js& */ "./App/Ui/Components/cssPanelRatio.vue?vue&type=script&lang=js&");
/* harmony import */ var _cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& */ "./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _cssPanelRatio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76700900",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('76700900')) {
      api.createRecord('76700900', component.options)
    } else {
      api.reload('76700900', component.options)
    }
    module.hot.accept(/*! ./cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug& */ "./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug& */ "./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug&");
(function () {
      api.rerender('76700900', {
        render: _cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/cssPanelRatio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/cssPanelRatio.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./App/Ui/Components/cssPanelRatio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelRatio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug&":
/*!*************************************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_template_id_76700900_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_cssPanelRatio_vue_vue_type_style_index_0_id_76700900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=style&index=0&id=76700900&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/cssPanelRatio.vue?vue&type=template&id=76700900&scoped=true&lang=pug& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.loaded
    ? _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "reset-margin-bottom" },
            [
              _c(
                "v-col",
                {
                  staticClass: "pa-0 rf-ratio-text-container",
                  attrs: { cols: "8" }
                },
                [
                  _vm._l(_vm.styleSet.ratioCollection, function(data, tag) {
                    return [
                      _c(
                        "div",
                        {
                          staticClass: "rf-ratio--text-example",
                          class: { "--selected-tag": tag === _vm.selectedTag },
                          on: {
                            click: function($event) {
                              return _vm.selectTag(tag)
                            }
                          }
                        },
                        [
                          tag !== "html"
                            ? _c(
                                tag,
                                {
                                  tag: "component",
                                  staticClass: "--inner-text-example"
                                },
                                [_vm._v("Size for " + _vm._s(tag))]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  }),
                  _c("div", { staticClass: "rf-ratio--text-example" }, [
                    _vm._v("Size for base text")
                  ])
                ],
                2
              ),
              _vm.selectedTag && _vm.selectedTag !== "p"
                ? _c(
                    "v-col",
                    { staticClass: "pa-0", attrs: { cols: "4" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          type: "number",
                          step: "0.1",
                          "data-jest": "ratio-fs",
                          label: "Font size"
                        },
                        on: {
                          input: function($event) {
                            return _vm.updateTextParams(
                              "font-size",
                              _vm.selectedTag
                            )
                          }
                        },
                        model: {
                          value:
                            _vm.styleSet.ratioCollection[_vm.selectedTag][
                              "font-size"
                            ],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.styleSet.ratioCollection[_vm.selectedTag],
                              "font-size",
                              $$v
                            )
                          },
                          expression:
                            "styleSet.ratioCollection[selectedTag]['font-size']"
                        }
                      }),
                      _c("v-text-field", {
                        attrs: {
                          type: "number",
                          step: "0.1",
                          "data-jest": "ratio-lh",
                          label: "Line height"
                        },
                        on: {
                          input: function($event) {
                            return _vm.updateTextParams(
                              "line-height",
                              _vm.selectedTag
                            )
                          }
                        },
                        model: {
                          value:
                            _vm.styleSet.ratioCollection[_vm.selectedTag][
                              "line-height"
                            ],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.styleSet.ratioCollection[_vm.selectedTag],
                              "line-height",
                              $$v
                            )
                          },
                          expression:
                            "styleSet.ratioCollection[selectedTag]['line-height']"
                        }
                      }),
                      _c("v-text-field", {
                        attrs: {
                          type: "number",
                          step: "0.1",
                          "data-jest": "ratio-mb",
                          label: "Margin bottom"
                        },
                        on: {
                          input: function($event) {
                            return _vm.updateTextParams(
                              "margin-bottom",
                              _vm.selectedTag
                            )
                          }
                        },
                        model: {
                          value:
                            _vm.styleSet.ratioCollection[_vm.selectedTag][
                              "margin-bottom"
                            ],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.styleSet.ratioCollection[_vm.selectedTag],
                              "margin-bottom",
                              $$v
                            )
                          },
                          expression:
                            "styleSet.ratioCollection[selectedTag]['margin-bottom']"
                        }
                      }),
                      _c("v-text-field", {
                        attrs: {
                          type: "number",
                          step: "0.1",
                          "data-jest": "ratio-mt",
                          label: "Margin top"
                        },
                        on: {
                          input: function($event) {
                            return _vm.updateTextParams(
                              "margin-top",
                              _vm.selectedTag
                            )
                          }
                        },
                        model: {
                          value:
                            _vm.styleSet.ratioCollection[_vm.selectedTag][
                              "margin-top"
                            ],
                          callback: function($$v) {
                            _vm.$set(
                              _vm.styleSet.ratioCollection[_vm.selectedTag],
                              "margin-top",
                              $$v
                            )
                          },
                          expression:
                            "styleSet.ratioCollection[selectedTag]['margin-top']"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _c("v-text-field", {
            attrs: {
              type: "number",
              label: "font-size",
              "data-jest": "main-font-size"
            },
            on: {
              input: function($event) {
                return _vm.updateTextParams(
                  "font-size",
                  "html",
                  "px !important"
                )
              }
            },
            model: {
              value: _vm.styleSet.ratioCollection.html["font-size"],
              callback: function($$v) {
                _vm.$set(_vm.styleSet.ratioCollection.html, "font-size", $$v)
              },
              expression: "styleSet.ratioCollection.html['font-size']"
            }
          }),
          _c("v-text-field", {
            attrs: {
              type: "number",
              label: "line height",
              "data-jest": "main-line-height"
            },
            on: {
              input: function($event) {
                return _vm.updateTextParams(
                  "line-height",
                  "html",
                  "px !important"
                )
              }
            },
            model: {
              value: _vm.styleSet.ratioCollection.html["line-height"],
              callback: function($$v) {
                _vm.$set(_vm.styleSet.ratioCollection.html, "line-height", $$v)
              },
              expression: "styleSet.ratioCollection.html['line-height']"
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsUmF0aW8udnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZT8wZTA3Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZT9jN2VmIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxSYXRpby52dWU/MDZkMSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxSYXRpby52dWU/NDg4NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTs7QUFNQSwyQ0FDQSxxRUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FQQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7QUFHQSxtRkFDQSxtQkFEQTtBQUhBO0FBT0E7QUFDQTs7QUFwQkEsSUFOQTtBQTRCQSw4QkFDQSx3RUFEQTtBQTVCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7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QUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkFwcF9VaV9Db21wb25lbnRzX2Nzc1BhbmVsUmF0aW9fdnVlLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgdi1jb250YWluZXIodi1pZj1cImxvYWRlZFwiKVxuICAgICAgICB2LXJvdyhjbGFzcz1cInJlc2V0LW1hcmdpbi1ib3R0b21cIilcbiAgICAgICAgICAgIHYtY29sKGNvbHM9XCI4XCIgY2xhc3M9XCJwYS0wIHJmLXJhdGlvLXRleHQtY29udGFpbmVyXCIpXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUodi1mb3I9XCIoZGF0YSwgdGFnKSBpbiBzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgZGl2KGNsYXNzPVwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVwiIDpjbGFzcz1cInsnLS1zZWxlY3RlZC10YWcnOiB0YWcgPT09IHNlbGVjdGVkVGFnfVwiICBAY2xpY2s9XCJzZWxlY3RUYWcodGFnKVwiIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCh2LWlmPVwidGFnICE9PSAnaHRtbCdcIiA6aXM9XCJ0YWdcIiBjbGFzcz1cIi0taW5uZXItdGV4dC1leGFtcGxlXCIpIFNpemUgZm9yIHt7dGFnfX1cbiAgICAgICAgICAgICAgICBkaXYoY2xhc3M9XCJyZi1yYXRpby0tdGV4dC1leGFtcGxlXCIgKSBTaXplIGZvciBiYXNlIHRleHRcbiAgICAgICAgICAgIHYtY29sKGNvbHM9XCI0XCIgY2xhc3M9XCJwYS0wXCIgdi1pZj1cInNlbGVjdGVkVGFnICYmIHNlbGVjdGVkVGFnICE9PSAncCdcIilcbiAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cIm51bWJlclwiIHN0ZXA9XCIwLjFcIiBkYXRhLWplc3Q9XCJyYXRpby1mc1wiIGxhYmVsPVwiRm9udCBzaXplXCIgdi1tb2RlbD1cInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ2ZvbnQtc2l6ZSddXCIgQGlucHV0PVwidXBkYXRlVGV4dFBhcmFtcygnZm9udC1zaXplJywgc2VsZWN0ZWRUYWcpXCIpXG4gICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC4xXCIgZGF0YS1qZXN0PVwicmF0aW8tbGhcIiBsYWJlbD1cIkxpbmUgaGVpZ2h0XCIgdi1tb2RlbD1cInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ2xpbmUtaGVpZ2h0J11cIiBAaW5wdXQ9XCJ1cGRhdGVUZXh0UGFyYW1zKCdsaW5lLWhlaWdodCcsIHNlbGVjdGVkVGFnKVwiKVxuICAgICAgICAgICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMVwiIGRhdGEtamVzdD1cInJhdGlvLW1iXCIgbGFiZWw9XCJNYXJnaW4gYm90dG9tXCIgdi1tb2RlbD1cInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ21hcmdpbi1ib3R0b20nXVwiIEBpbnB1dD1cInVwZGF0ZVRleHRQYXJhbXMoJ21hcmdpbi1ib3R0b20nLHNlbGVjdGVkVGFnKVwiKVxuICAgICAgICAgICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMVwiIGRhdGEtamVzdD1cInJhdGlvLW10XCIgbGFiZWw9XCJNYXJnaW4gdG9wXCIgdi1tb2RlbD1cInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ21hcmdpbi10b3AnXVwiIEBpbnB1dD1cInVwZGF0ZVRleHRQYXJhbXMoJ21hcmdpbi10b3AnLHNlbGVjdGVkVGFnKVwiKVxuICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cIm51bWJlclwiIGxhYmVsPVwiZm9udC1zaXplXCIgZGF0YS1qZXN0PVwibWFpbi1mb250LXNpemVcIiB2LW1vZGVsPVwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWxbJ2ZvbnQtc2l6ZSddXCIgQGlucHV0PVwidXBkYXRlVGV4dFBhcmFtcygnZm9udC1zaXplJywnaHRtbCcsICdweCAhaW1wb3J0YW50JylcIilcbiAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cImxpbmUgaGVpZ2h0XCIgZGF0YS1qZXN0PVwibWFpbi1saW5lLWhlaWdodFwiIHYtbW9kZWw9XCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24uaHRtbFsnbGluZS1oZWlnaHQnXVwiIEBpbnB1dD1cInVwZGF0ZVRleHRQYXJhbXMoJ2xpbmUtaGVpZ2h0JywnaHRtbCcsICdweCAhaW1wb3J0YW50JylcIilcbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRUYWc6IFwiXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJ0cmlnZ2VyTmV3U3R5bGVcIl0pLFxuICAgIHNlbGVjdFRhZyh0YWcpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFnID09PSB0YWcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhZyA9IFwiXCI7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkVGFnID0gdGFnO1xuICAgIH0sXG4gICAgdXBkYXRlVGV4dFBhcmFtcyhwcm9wZXJ0eSwgc2VsZWN0b3IsIHVuaXQpIHtcbiAgICAgIGlmICghdGhpcy5zdHlsZVNldC5zZWxlY3RvckNvbGxlY3Rpb25bc2VsZWN0b3JdKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiYWRkU2VsZWN0b3JcIiwgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhZGRQcm9wZXJ0eVwiLCB7XG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICB2YWx1ZTogYCR7dGhpcy5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0b3JdW3Byb3BlcnR5XX0ke1xuICAgICAgICAgIHVuaXQgPyB1bml0IDogXCJyZW1cIlxuICAgICAgICB9YFxuICAgICAgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJOZXdTdHlsZSgpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtcInN0eWxlU2V0XCIsIFwibG9hZGVkXCJdKVxuICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICM1NTU1NTUgc29saWQ7XG4gIH1cbiAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICNhYWEgc29saWQ7XG4gIH1cbn1cbiNyZi1jb250ZW50LWNvbnRhaW5lciB7XG4gIC4tLXNlbGVjdGVkLXRhZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAuLS1pbm5lci10ZXh0LWV4YW1wbGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5RGFyayk7XG4gICAgfVxuICB9XG4gIC4tLWlubmVyLXRleHQtZXhhbXBsZSB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgfVxufVxuLnJlc2V0LW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGVbZGF0YS12LTc2NzAwOTAwXSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucmYtcmF0aW8tLXRleHQtZXhhbXBsZVtkYXRhLXYtNzY3MDA5MDBdOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggIzU1NTU1NSBzb2xpZDtcXG59XFxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGVbZGF0YS12LTc2NzAwOTAwXTpudGgtY2hpbGQoZXZlbikge1xcbiAgICBib3JkZXItbGVmdDogMTVweCAjYWFhIHNvbGlkO1xcbn1cXG4jcmYtY29udGVudC1jb250YWluZXIgLi0tc2VsZWN0ZWQtdGFnW2RhdGEtdi03NjcwMDkwMF0ge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuI3JmLWNvbnRlbnQtY29udGFpbmVyIC4tLXNlbGVjdGVkLXRhZyAuLS1pbm5lci10ZXh0LWV4YW1wbGVbZGF0YS12LTc2NzAwOTAwXSB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5RGFyayk7XFxufVxcbiNyZi1jb250ZW50LWNvbnRhaW5lciAuLS1pbm5lci10ZXh0LWV4YW1wbGVbZGF0YS12LTc2NzAwOTAwXSB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcbi5yZXNldC1tYXJnaW4tYm90dG9tW2RhdGEtdi03NjcwMDkwMF0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxSYXRpby52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFEQTtFQUNBLGdCQUFBO0FBUUE7QUFOQTtJQUNBLCtCQUFBO0FBQ0E7QUFDQTtJQUNBLDRCQUFBO0FBQ0E7QUFHQTtJQUNBLDRCQUFBO0lBQ0EsV0FBQTtBQUlBO0FBSEE7TUFDQSxnQ0FBQTtBQUNBO0FBRUE7SUFDQSxnQkFBQTtBQUNBO0FBRUE7RUFDQSxnQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBsYW5nPVxcXCJwdWdcXFwiPlxcbiAgICB2LWNvbnRhaW5lcih2LWlmPVxcXCJsb2FkZWRcXFwiKVxcbiAgICAgICAgdi1yb3coY2xhc3M9XFxcInJlc2V0LW1hcmdpbi1ib3R0b21cXFwiKVxcbiAgICAgICAgICAgIHYtY29sKGNvbHM9XFxcIjhcXFwiIGNsYXNzPVxcXCJwYS0wIHJmLXJhdGlvLXRleHQtY29udGFpbmVyXFxcIilcXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUodi1mb3I9XFxcIihkYXRhLCB0YWcpIGluIHN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvblxcXCIpXFxuICAgICAgICAgICAgICAgICAgICBkaXYoY2xhc3M9XFxcInJmLXJhdGlvLS10ZXh0LWV4YW1wbGVcXFwiIDpjbGFzcz1cXFwieyctLXNlbGVjdGVkLXRhZyc6IHRhZyA9PT0gc2VsZWN0ZWRUYWd9XFxcIiAgQGNsaWNrPVxcXCJzZWxlY3RUYWcodGFnKVxcXCIgKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCh2LWlmPVxcXCJ0YWcgIT09ICdodG1sJ1xcXCIgOmlzPVxcXCJ0YWdcXFwiIGNsYXNzPVxcXCItLWlubmVyLXRleHQtZXhhbXBsZVxcXCIpIFNpemUgZm9yIHt7dGFnfX1cXG4gICAgICAgICAgICAgICAgZGl2KGNsYXNzPVxcXCJyZi1yYXRpby0tdGV4dC1leGFtcGxlXFxcIiApIFNpemUgZm9yIGJhc2UgdGV4dFxcbiAgICAgICAgICAgIHYtY29sKGNvbHM9XFxcIjRcXFwiIGNsYXNzPVxcXCJwYS0wXFxcIiB2LWlmPVxcXCJzZWxlY3RlZFRhZyAmJiBzZWxlY3RlZFRhZyAhPT0gJ3AnXFxcIilcXG4gICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMC4xXFxcIiBkYXRhLWplc3Q9XFxcInJhdGlvLWZzXFxcIiBsYWJlbD1cXFwiRm9udCBzaXplXFxcIiB2LW1vZGVsPVxcXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydmb250LXNpemUnXVxcXCIgQGlucHV0PVxcXCJ1cGRhdGVUZXh0UGFyYW1zKCdmb250LXNpemUnLCBzZWxlY3RlZFRhZylcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIwLjFcXFwiIGRhdGEtamVzdD1cXFwicmF0aW8tbGhcXFwiIGxhYmVsPVxcXCJMaW5lIGhlaWdodFxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdGVkVGFnXVsnbGluZS1oZWlnaHQnXVxcXCIgQGlucHV0PVxcXCJ1cGRhdGVUZXh0UGFyYW1zKCdsaW5lLWhlaWdodCcsIHNlbGVjdGVkVGFnKVxcXCIpXFxuICAgICAgICAgICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMVxcXCIgZGF0YS1qZXN0PVxcXCJyYXRpby1tYlxcXCIgbGFiZWw9XFxcIk1hcmdpbiBib3R0b21cXFwiIHYtbW9kZWw9XFxcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ21hcmdpbi1ib3R0b20nXVxcXCIgQGlucHV0PVxcXCJ1cGRhdGVUZXh0UGFyYW1zKCdtYXJnaW4tYm90dG9tJyxzZWxlY3RlZFRhZylcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIwLjFcXFwiIGRhdGEtamVzdD1cXFwicmF0aW8tbXRcXFwiIGxhYmVsPVxcXCJNYXJnaW4gdG9wXFxcIiB2LW1vZGVsPVxcXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydtYXJnaW4tdG9wJ11cXFwiIEBpbnB1dD1cXFwidXBkYXRlVGV4dFBhcmFtcygnbWFyZ2luLXRvcCcsc2VsZWN0ZWRUYWcpXFxcIilcXG4gICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVxcXCJudW1iZXJcXFwiIGxhYmVsPVxcXCJmb250LXNpemVcXFwiIGRhdGEtamVzdD1cXFwibWFpbi1mb250LXNpemVcXFwiIHYtbW9kZWw9XFxcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbi5odG1sWydmb250LXNpemUnXVxcXCIgQGlucHV0PVxcXCJ1cGRhdGVUZXh0UGFyYW1zKCdmb250LXNpemUnLCdodG1sJywgJ3B4ICFpbXBvcnRhbnQnKVxcXCIpXFxuICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cXFwibnVtYmVyXFxcIiBsYWJlbD1cXFwibGluZSBoZWlnaHRcXFwiIGRhdGEtamVzdD1cXFwibWFpbi1saW5lLWhlaWdodFxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWxbJ2xpbmUtaGVpZ2h0J11cXFwiIEBpbnB1dD1cXFwidXBkYXRlVGV4dFBhcmFtcygnbGluZS1oZWlnaHQnLCdodG1sJywgJ3B4ICFpbXBvcnRhbnQnKVxcXCIpXFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHNlbGVjdGVkVGFnOiBcXFwiXFxcIlxcbiAgICB9O1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhbXFxcInRyaWdnZXJOZXdTdHlsZVxcXCJdKSxcXG4gICAgc2VsZWN0VGFnKHRhZykge1xcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFnID09PSB0YWcpIHtcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSBcXFwiXFxcIjtcXG4gICAgICB9XFxuICAgICAgdGhpcy5zZWxlY3RlZFRhZyA9IHRhZztcXG4gICAgfSxcXG4gICAgdXBkYXRlVGV4dFBhcmFtcyhwcm9wZXJ0eSwgc2VsZWN0b3IsIHVuaXQpIHtcXG4gICAgICBpZiAoIXRoaXMuc3R5bGVTZXQuc2VsZWN0b3JDb2xsZWN0aW9uW3NlbGVjdG9yXSkge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXFxcImFkZFNlbGVjdG9yXFxcIiwgc2VsZWN0b3IpO1xcbiAgICAgIH1cXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcXFwiYWRkUHJvcGVydHlcXFwiLCB7XFxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXFxuICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXFxuICAgICAgICB2YWx1ZTogYCR7dGhpcy5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0b3JdW3Byb3BlcnR5XX0ke1xcbiAgICAgICAgICB1bml0ID8gdW5pdCA6IFxcXCJyZW1cXFwiXFxuICAgICAgICB9YFxcbiAgICAgIH0pO1xcbiAgICAgIHRoaXMudHJpZ2dlck5ld1N0eWxlKCk7XFxuICAgIH1cXG4gIH0sXFxuICBjb21wdXRlZDoge1xcbiAgICAuLi5tYXBHZXR0ZXJzKFtcXFwic3R5bGVTZXRcXFwiLCBcXFwibG9hZGVkXFxcIl0pXFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAmOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggIzU1NTU1NSBzb2xpZDtcXG4gIH1cXG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggI2FhYSBzb2xpZDtcXG4gIH1cXG59XFxuI3JmLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIC4tLXNlbGVjdGVkLXRhZyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICAuLS1pbm5lci10ZXh0LWV4YW1wbGUge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeURhcmspO1xcbiAgICB9XFxuICB9XFxuICAuLS1pbm5lci10ZXh0LWV4YW1wbGUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgfVxcbn1cXG4ucmVzZXQtbWFyZ2luLWJvdHRvbSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFJhdGlvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzAwOTAwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3MDA5MDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3MDA5MDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jc3NQYW5lbFJhdGlvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjcwMDkwMCZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jc3NQYW5lbFJhdGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjcwMDkwMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzY3MDA5MDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NjcwMDkwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NjcwMDkwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NjcwMDkwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY3MDA5MDAmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzY3MDA5MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsUmF0aW8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5sb2FkZWRcbiAgICA/IF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVzZXQtbWFyZ2luLWJvdHRvbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0wIHJmLXJhdGlvLXRleHQtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbiwgZnVuY3Rpb24oZGF0YSwgdGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZi1yYXRpby0tdGV4dC1leGFtcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiLS1zZWxlY3RlZC10YWdcIjogdGFnID09PSBfdm0uc2VsZWN0ZWRUYWcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFRhZyh0YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgIT09IFwiaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIi0taW5uZXItdGV4dC1leGFtcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNpemUgZm9yIFwiICsgX3ZtLl9zKHRhZykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2l6ZSBmb3IgYmFzZSB0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWcgJiYgX3ZtLnNlbGVjdGVkVGFnICE9PSBcInBcIlxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYS0wXCIsIGF0dHJzOiB7IGNvbHM6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiMC4xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwicmF0aW8tZnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRm9udCBzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUZXh0UGFyYW1zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bX3ZtLnNlbGVjdGVkVGFnXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW192bS5zZWxlY3RlZFRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdGVkVGFnXVsnZm9udC1zaXplJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiMC4xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwicmF0aW8tbGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGluZSBoZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVRleHRQYXJhbXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW192bS5zZWxlY3RlZFRhZ11bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW192bS5zZWxlY3RlZFRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydsaW5lLWhlaWdodCddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBcIjAuMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcInJhdGlvLW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1hcmdpbiBib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVRleHRQYXJhbXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bX3ZtLnNlbGVjdGVkVGFnXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltfdm0uc2VsZWN0ZWRUYWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydtYXJnaW4tYm90dG9tJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiMC4xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwicmF0aW8tbXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWFyZ2luIHRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGV4dFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltfdm0uc2VsZWN0ZWRUYWddW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW192bS5zZWxlY3RlZFRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ21hcmdpbi10b3AnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJmb250LXNpemVcIixcbiAgICAgICAgICAgICAgXCJkYXRhLWplc3RcIjogXCJtYWluLWZvbnQtc2l6ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGV4dFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCIsXG4gICAgICAgICAgICAgICAgICBcImh0bWxcIixcbiAgICAgICAgICAgICAgICAgIFwicHggIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24uaHRtbFtcImZvbnQtc2l6ZVwiXSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24uaHRtbCwgXCJmb250LXNpemVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbi5odG1sWydmb250LXNpemUnXVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwibGluZSBoZWlnaHRcIixcbiAgICAgICAgICAgICAgXCJkYXRhLWplc3RcIjogXCJtYWluLWxpbmUtaGVpZ2h0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUZXh0UGFyYW1zKFxuICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgXCJodG1sXCIsXG4gICAgICAgICAgICAgICAgICBcInB4ICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWxbXCJsaW5lLWhlaWdodFwiXSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24uaHRtbCwgXCJsaW5lLWhlaWdodFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWxbJ2xpbmUtaGVpZ2h0J11cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==