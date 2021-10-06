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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsUmF0aW8udnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZT8wZTA3Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZT9jN2VmIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxSYXRpby52dWU/MDZkMSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvY3NzUGFuZWxSYXRpby52dWU/NDg4NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTs7QUFNQSwyQ0FDQSxxRUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FQQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7QUFHQSxtRkFDQSxtQkFEQTtBQUhBO0FBT0E7QUFDQTs7QUFwQkEsSUFOQTtBQTRCQSw4QkFDQSx3RUFEQTtBQTVCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7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QUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkFwcF9VaV9Db21wb25lbnRzX2Nzc1BhbmVsUmF0aW9fdnVlLmFwcC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIHYtY29udGFpbmVyKHYtaWY9XCJsb2FkZWRcIilcbiAgICAgICAgdi1yb3coY2xhc3M9XCJyZXNldC1tYXJnaW4tYm90dG9tXCIpXG4gICAgICAgICAgICB2LWNvbChjb2xzPVwiOFwiIGNsYXNzPVwicGEtMCByZi1yYXRpby10ZXh0LWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgICAgIHRlbXBsYXRlKHYtZm9yPVwiKGRhdGEsIHRhZykgaW4gc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIGRpdihjbGFzcz1cInJmLXJhdGlvLS10ZXh0LWV4YW1wbGVcIiA6Y2xhc3M9XCJ7Jy0tc2VsZWN0ZWQtdGFnJzogdGFnID09PSBzZWxlY3RlZFRhZ31cIiAgQGNsaWNrPVwic2VsZWN0VGFnKHRhZylcIiApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQodi1pZj1cInRhZyAhPT0gJ2h0bWwnXCIgOmlzPVwidGFnXCIgY2xhc3M9XCItLWlubmVyLXRleHQtZXhhbXBsZVwiKSBTaXplIGZvciB7e3RhZ319XG4gICAgICAgICAgICAgICAgZGl2KGNsYXNzPVwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVwiICkgU2l6ZSBmb3IgYmFzZSB0ZXh0XG4gICAgICAgICAgICB2LWNvbChjb2xzPVwiNFwiIGNsYXNzPVwicGEtMFwiIHYtaWY9XCJzZWxlY3RlZFRhZyAmJiBzZWxlY3RlZFRhZyAhPT0gJ3AnXCIpXG4gICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC4xXCIgZGF0YS1qZXN0PVwicmF0aW8tZnNcIiBsYWJlbD1cIkZvbnQgc2l6ZVwiIHYtbW9kZWw9XCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydmb250LXNpemUnXVwiIEBpbnB1dD1cInVwZGF0ZVRleHRQYXJhbXMoJ2ZvbnQtc2l6ZScsIHNlbGVjdGVkVGFnKVwiKVxuICAgICAgICAgICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMVwiIGRhdGEtamVzdD1cInJhdGlvLWxoXCIgbGFiZWw9XCJMaW5lIGhlaWdodFwiIHYtbW9kZWw9XCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydsaW5lLWhlaWdodCddXCIgQGlucHV0PVwidXBkYXRlVGV4dFBhcmFtcygnbGluZS1oZWlnaHQnLCBzZWxlY3RlZFRhZylcIilcbiAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cIm51bWJlclwiIHN0ZXA9XCIwLjFcIiBkYXRhLWplc3Q9XCJyYXRpby1tYlwiIGxhYmVsPVwiTWFyZ2luIGJvdHRvbVwiIHYtbW9kZWw9XCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydtYXJnaW4tYm90dG9tJ11cIiBAaW5wdXQ9XCJ1cGRhdGVUZXh0UGFyYW1zKCdtYXJnaW4tYm90dG9tJyxzZWxlY3RlZFRhZylcIilcbiAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cIm51bWJlclwiIHN0ZXA9XCIwLjFcIiBkYXRhLWplc3Q9XCJyYXRpby1tdFwiIGxhYmVsPVwiTWFyZ2luIHRvcFwiIHYtbW9kZWw9XCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydtYXJnaW4tdG9wJ11cIiBAaW5wdXQ9XCJ1cGRhdGVUZXh0UGFyYW1zKCdtYXJnaW4tdG9wJyxzZWxlY3RlZFRhZylcIilcbiAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cImZvbnQtc2l6ZVwiIGRhdGEtamVzdD1cIm1haW4tZm9udC1zaXplXCIgdi1tb2RlbD1cInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbi5odG1sWydmb250LXNpemUnXVwiIEBpbnB1dD1cInVwZGF0ZVRleHRQYXJhbXMoJ2ZvbnQtc2l6ZScsJ2h0bWwnLCAncHggIWltcG9ydGFudCcpXCIpXG4gICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVwibnVtYmVyXCIgbGFiZWw9XCJsaW5lIGhlaWdodFwiIGRhdGEtamVzdD1cIm1haW4tbGluZS1oZWlnaHRcIiB2LW1vZGVsPVwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWxbJ2xpbmUtaGVpZ2h0J11cIiBAaW5wdXQ9XCJ1cGRhdGVUZXh0UGFyYW1zKCdsaW5lLWhlaWdodCcsJ2h0bWwnLCAncHggIWltcG9ydGFudCcpXCIpXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkVGFnOiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoW1widHJpZ2dlck5ld1N0eWxlXCJdKSxcbiAgICBzZWxlY3RUYWcodGFnKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFRhZyA9PT0gdGFnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSBcIlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZFRhZyA9IHRhZztcbiAgICB9LFxuICAgIHVwZGF0ZVRleHRQYXJhbXMocHJvcGVydHksIHNlbGVjdG9yLCB1bml0KSB7XG4gICAgICBpZiAoIXRoaXMuc3R5bGVTZXQuc2VsZWN0b3JDb2xsZWN0aW9uW3NlbGVjdG9yXSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFkZFNlbGVjdG9yXCIsIHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiYWRkUHJvcGVydHlcIiwge1xuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgdmFsdWU6IGAke3RoaXMuc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdG9yXVtwcm9wZXJ0eV19JHtcbiAgICAgICAgICB1bml0ID8gdW5pdCA6IFwicmVtXCJcbiAgICAgICAgfWBcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyTmV3U3R5bGUoKTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXCJzdHlsZVNldFwiLCBcImxvYWRlZFwiXSlcbiAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICBib3JkZXItbGVmdDogMTVweCAjNTU1NTU1IHNvbGlkO1xuICB9XG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBib3JkZXItbGVmdDogMTVweCAjYWFhIHNvbGlkO1xuICB9XG59XG4jcmYtY29udGVudC1jb250YWluZXIge1xuICAuLS1zZWxlY3RlZC10YWcge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLi0taW5uZXItdGV4dC1leGFtcGxlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeURhcmspO1xuICAgIH1cbiAgfVxuICAuLS1pbm5lci10ZXh0LWV4YW1wbGUge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbn1cbi5yZXNldC1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlW2RhdGEtdi03NjcwMDkwMF0ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnJmLXJhdGlvLS10ZXh0LWV4YW1wbGVbZGF0YS12LTc2NzAwOTAwXTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICM1NTU1NTUgc29saWQ7XFxufVxcbi5yZi1yYXRpby0tdGV4dC1leGFtcGxlW2RhdGEtdi03NjcwMDkwMF06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggI2FhYSBzb2xpZDtcXG59XFxuI3JmLWNvbnRlbnQtY29udGFpbmVyIC4tLXNlbGVjdGVkLXRhZ1tkYXRhLXYtNzY3MDA5MDBdIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbiNyZi1jb250ZW50LWNvbnRhaW5lciAuLS1zZWxlY3RlZC10YWcgLi0taW5uZXItdGV4dC1leGFtcGxlW2RhdGEtdi03NjcwMDkwMF0ge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeURhcmspO1xcbn1cXG4jcmYtY29udGVudC1jb250YWluZXIgLi0taW5uZXItdGV4dC1leGFtcGxlW2RhdGEtdi03NjcwMDkwMF0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG4ucmVzZXQtbWFyZ2luLWJvdHRvbVtkYXRhLXYtNzY3MDA5MDBdIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL0FwcC9VaS9Db21wb25lbnRzL2Nzc1BhbmVsUmF0aW8udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxREE7RUFDQSxnQkFBQTtBQVFBO0FBTkE7SUFDQSwrQkFBQTtBQUNBO0FBQ0E7SUFDQSw0QkFBQTtBQUNBO0FBR0E7SUFDQSw0QkFBQTtJQUNBLFdBQUE7QUFJQTtBQUhBO01BQ0EsZ0NBQUE7QUFDQTtBQUVBO0lBQ0EsZ0JBQUE7QUFDQTtBQUVBO0VBQ0EsZ0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgbGFuZz1cXFwicHVnXFxcIj5cXG4gICAgdi1jb250YWluZXIodi1pZj1cXFwibG9hZGVkXFxcIilcXG4gICAgICAgIHYtcm93KGNsYXNzPVxcXCJyZXNldC1tYXJnaW4tYm90dG9tXFxcIilcXG4gICAgICAgICAgICB2LWNvbChjb2xzPVxcXCI4XFxcIiBjbGFzcz1cXFwicGEtMCByZi1yYXRpby10ZXh0LWNvbnRhaW5lclxcXCIpXFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlKHYtZm9yPVxcXCIoZGF0YSwgdGFnKSBpbiBzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25cXFwiKVxcbiAgICAgICAgICAgICAgICAgICAgZGl2KGNsYXNzPVxcXCJyZi1yYXRpby0tdGV4dC1leGFtcGxlXFxcIiA6Y2xhc3M9XFxcInsnLS1zZWxlY3RlZC10YWcnOiB0YWcgPT09IHNlbGVjdGVkVGFnfVxcXCIgIEBjbGljaz1cXFwic2VsZWN0VGFnKHRhZylcXFwiIClcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQodi1pZj1cXFwidGFnICE9PSAnaHRtbCdcXFwiIDppcz1cXFwidGFnXFxcIiBjbGFzcz1cXFwiLS1pbm5lci10ZXh0LWV4YW1wbGVcXFwiKSBTaXplIGZvciB7e3RhZ319XFxuICAgICAgICAgICAgICAgIGRpdihjbGFzcz1cXFwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVxcXCIgKSBTaXplIGZvciBiYXNlIHRleHRcXG4gICAgICAgICAgICB2LWNvbChjb2xzPVxcXCI0XFxcIiBjbGFzcz1cXFwicGEtMFxcXCIgdi1pZj1cXFwic2VsZWN0ZWRUYWcgJiYgc2VsZWN0ZWRUYWcgIT09ICdwJ1xcXCIpXFxuICAgICAgICAgICAgICAgIHYtdGV4dC1maWVsZCh0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMVxcXCIgZGF0YS1qZXN0PVxcXCJyYXRpby1mc1xcXCIgbGFiZWw9XFxcIkZvbnQgc2l6ZVxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdGVkVGFnXVsnZm9udC1zaXplJ11cXFwiIEBpbnB1dD1cXFwidXBkYXRlVGV4dFBhcmFtcygnZm9udC1zaXplJywgc2VsZWN0ZWRUYWcpXFxcIilcXG4gICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMC4xXFxcIiBkYXRhLWplc3Q9XFxcInJhdGlvLWxoXFxcIiBsYWJlbD1cXFwiTGluZSBoZWlnaHRcXFwiIHYtbW9kZWw9XFxcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ2xpbmUtaGVpZ2h0J11cXFwiIEBpbnB1dD1cXFwidXBkYXRlVGV4dFBhcmFtcygnbGluZS1oZWlnaHQnLCBzZWxlY3RlZFRhZylcXFwiKVxcbiAgICAgICAgICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIwLjFcXFwiIGRhdGEtamVzdD1cXFwicmF0aW8tbWJcXFwiIGxhYmVsPVxcXCJNYXJnaW4gYm90dG9tXFxcIiB2LW1vZGVsPVxcXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydtYXJnaW4tYm90dG9tJ11cXFwiIEBpbnB1dD1cXFwidXBkYXRlVGV4dFBhcmFtcygnbWFyZ2luLWJvdHRvbScsc2VsZWN0ZWRUYWcpXFxcIilcXG4gICAgICAgICAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMC4xXFxcIiBkYXRhLWplc3Q9XFxcInJhdGlvLW10XFxcIiBsYWJlbD1cXFwiTWFyZ2luIHRvcFxcXCIgdi1tb2RlbD1cXFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdGVkVGFnXVsnbWFyZ2luLXRvcCddXFxcIiBAaW5wdXQ9XFxcInVwZGF0ZVRleHRQYXJhbXMoJ21hcmdpbi10b3AnLHNlbGVjdGVkVGFnKVxcXCIpXFxuICAgICAgICB2LXRleHQtZmllbGQodHlwZT1cXFwibnVtYmVyXFxcIiBsYWJlbD1cXFwiZm9udC1zaXplXFxcIiBkYXRhLWplc3Q9XFxcIm1haW4tZm9udC1zaXplXFxcIiB2LW1vZGVsPVxcXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24uaHRtbFsnZm9udC1zaXplJ11cXFwiIEBpbnB1dD1cXFwidXBkYXRlVGV4dFBhcmFtcygnZm9udC1zaXplJywnaHRtbCcsICdweCAhaW1wb3J0YW50JylcXFwiKVxcbiAgICAgICAgdi10ZXh0LWZpZWxkKHR5cGU9XFxcIm51bWJlclxcXCIgbGFiZWw9XFxcImxpbmUgaGVpZ2h0XFxcIiBkYXRhLWplc3Q9XFxcIm1haW4tbGluZS1oZWlnaHRcXFwiIHYtbW9kZWw9XFxcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbi5odG1sWydsaW5lLWhlaWdodCddXFxcIiBAaW5wdXQ9XFxcInVwZGF0ZVRleHRQYXJhbXMoJ2xpbmUtaGVpZ2h0JywnaHRtbCcsICdweCAhaW1wb3J0YW50JylcXFwiKVxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcXFwidnVleFxcXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBzZWxlY3RlZFRhZzogXFxcIlxcXCJcXG4gICAgfTtcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoW1xcXCJ0cmlnZ2VyTmV3U3R5bGVcXFwiXSksXFxuICAgIHNlbGVjdFRhZyh0YWcpIHtcXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFRhZyA9PT0gdGFnKSB7XFxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFnID0gXFxcIlxcXCI7XFxuICAgICAgfVxcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSB0YWc7XFxuICAgIH0sXFxuICAgIHVwZGF0ZVRleHRQYXJhbXMocHJvcGVydHksIHNlbGVjdG9yLCB1bml0KSB7XFxuICAgICAgaWYgKCF0aGlzLnN0eWxlU2V0LnNlbGVjdG9yQ29sbGVjdGlvbltzZWxlY3Rvcl0pIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFxcXCJhZGRTZWxlY3RvclxcXCIsIHNlbGVjdG9yKTtcXG4gICAgICB9XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXFxcImFkZFByb3BlcnR5XFxcIiwge1xcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxcbiAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxcbiAgICAgICAgdmFsdWU6IGAke3RoaXMuc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdG9yXVtwcm9wZXJ0eV19JHtcXG4gICAgICAgICAgdW5pdCA/IHVuaXQgOiBcXFwicmVtXFxcIlxcbiAgICAgICAgfWBcXG4gICAgICB9KTtcXG4gICAgICB0aGlzLnRyaWdnZXJOZXdTdHlsZSgpO1xcbiAgICB9XFxuICB9LFxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgLi4ubWFwR2V0dGVycyhbXFxcInN0eWxlU2V0XFxcIiwgXFxcImxvYWRlZFxcXCJdKVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG4ucmYtcmF0aW8tLXRleHQtZXhhbXBsZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgJjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICM1NTU1NTUgc29saWQ7XFxuICB9XFxuICAmOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxNXB4ICNhYWEgc29saWQ7XFxuICB9XFxufVxcbiNyZi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAuLS1zZWxlY3RlZC10YWcge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgLi0taW5uZXItdGV4dC1leGFtcGxlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnlEYXJrKTtcXG4gICAgfVxcbiAgfVxcbiAgLi0taW5uZXItdGV4dC1leGFtcGxlIHtcXG4gICAgYmFja2dyb3VuZDogI2VlZTtcXG4gIH1cXG59XFxuLnJlc2V0LW1hcmdpbi1ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjcwMDkwMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFJhdGlvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzAwOTAwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFJhdGlvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2NzAwOTAwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY3MDA5MDAmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY3NzUGFuZWxSYXRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY3MDA5MDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2NzAwOTAwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2V0aWVubmVyb3VnZS9XZWJzdG9ybVByb2plY3RzL3JmQ2xlYW4vcm91Z2VGcmFtZXdvcmsvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzY3MDA5MDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzY3MDA5MDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzY3MDA5MDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2NzAwOTAwJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2NzAwOTAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9jc3NQYW5lbFJhdGlvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jc3NQYW5lbFJhdGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Nzc1BhbmVsUmF0aW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ubG9hZGVkXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlc2V0LW1hcmdpbi1ib3R0b21cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtMCByZi1yYXRpby10ZXh0LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCI4XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24sIGZ1bmN0aW9uKGRhdGEsIHRhZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmYtcmF0aW8tLXRleHQtZXhhbXBsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcIi0tc2VsZWN0ZWQtdGFnXCI6IHRhZyA9PT0gX3ZtLnNlbGVjdGVkVGFnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RUYWcodGFnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnICE9PSBcImh0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCItLWlubmVyLXRleHQtZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTaXplIGZvciBcIiArIF92bS5fcyh0YWcpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJmLXJhdGlvLS10ZXh0LWV4YW1wbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNpemUgZm9yIGJhc2UgdGV4dFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFnICYmIF92bS5zZWxlY3RlZFRhZyAhPT0gXCJwXCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGEtMFwiLCBhdHRyczogeyBjb2xzOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBcIjAuMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcInJhdGlvLWZzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZvbnQgc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGV4dFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW192bS5zZWxlY3RlZFRhZ11bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltfdm0uc2VsZWN0ZWRUYWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltzZWxlY3RlZFRhZ11bJ2ZvbnQtc2l6ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBcIjAuMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcInJhdGlvLWxoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxpbmUgaGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUZXh0UGFyYW1zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltfdm0uc2VsZWN0ZWRUYWddW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltfdm0uc2VsZWN0ZWRUYWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdGVkVGFnXVsnbGluZS1oZWlnaHQnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogXCIwLjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWplc3RcIjogXCJyYXRpby1tYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNYXJnaW4gYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUZXh0UGFyYW1zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW192bS5zZWxlY3RlZFRhZ11bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bX3ZtLnNlbGVjdGVkVGFnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uW3NlbGVjdGVkVGFnXVsnbWFyZ2luLWJvdHRvbSddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBcIjAuMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtamVzdFwiOiBcInJhdGlvLW10XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1hcmdpbiB0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVRleHRQYXJhbXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bX3ZtLnNlbGVjdGVkVGFnXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbltfdm0uc2VsZWN0ZWRUYWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb25bc2VsZWN0ZWRUYWddWydtYXJnaW4tdG9wJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiZm9udC1zaXplXCIsXG4gICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwibWFpbi1mb250LXNpemVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVRleHRQYXJhbXMoXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJodG1sXCIsXG4gICAgICAgICAgICAgICAgICBcInB4ICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWxbXCJmb250LXNpemVcIl0sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWwsIFwiZm9udC1zaXplXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHlsZVNldC5yYXRpb0NvbGxlY3Rpb24uaHRtbFsnZm9udC1zaXplJ11cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcImxpbmUgaGVpZ2h0XCIsXG4gICAgICAgICAgICAgIFwiZGF0YS1qZXN0XCI6IFwibWFpbi1saW5lLWhlaWdodFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGV4dFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIixcbiAgICAgICAgICAgICAgICAgIFwiaHRtbFwiLFxuICAgICAgICAgICAgICAgICAgXCJweCAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbi5odG1sW1wibGluZS1oZWlnaHRcIl0sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3R5bGVTZXQucmF0aW9Db2xsZWN0aW9uLmh0bWwsIFwibGluZS1oZWlnaHRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0eWxlU2V0LnJhdGlvQ29sbGVjdGlvbi5odG1sWydsaW5lLWhlaWdodCddXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=