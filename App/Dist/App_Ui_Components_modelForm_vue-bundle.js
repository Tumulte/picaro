(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_modelForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_model_edit_booleanSwitch_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/model/edit/_booleanSwitch.vue */ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue");
/* harmony import */ var _partials_model_edit_textLine_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/model/edit/_textLine.vue */ "./App/Ui/Components/partials/model/edit/_textLine.vue");
/* harmony import */ var _partials_model_edit_richText_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/model/edit/_richText.vue */ "./App/Ui/Components/partials/model/edit/_richText.vue");
/* harmony import */ var _partials_model_edit_categoryFilter_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/model/edit/_categoryFilter.vue */ "./App/Ui/Components/partials/model/edit/_categoryFilter.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
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
  name: "ModelForm",
  components: {
    rfBoolean: _partials_model_edit_booleanSwitch_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    rfText: _partials_model_edit_textLine_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    rfRichText: _partials_model_edit_richText_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    rfCategoryFilter: _partials_model_edit_categoryFilter_vue__WEBPACK_IMPORTED_MODULE_4__.default
  },
  props: {
    modelData: {
      type: Object,

      default() {
        return {};
      }

    },
    panelParams: {
      type: Object,
      require: true
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      valid: true,
      currentModelData: {},
      key: true
    };
  },

  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(["addAlert"])), {}, {
    updateData(data) {
      this.$set(this.currentModelData, data.name, data.value);
    },

    sendForm() {
      let action = "post";
      if (Object.keys(this.modelData).length > 0) action = "put";
      this.currentModelData.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid)(8);
      this.$nextTick(() => {
        (axios__WEBPACK_IMPORTED_MODULE_0___default())[action]("/api/".concat(encodeURI(this.panelParams.model)), this.currentModelData).then(() => {
          this.addAlert({
            type: "success",
            text: "Saved successfully"
          });
          this.$emit("reloadData");
          this.key = !this.key;
        }).catch(errors => {
          this.addAlert({
            type: "error",
            text: "Request failed.  Returned status of ".concat(errors)
          });
        });
      });
    }

  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["modelCollection", "availableFilterCollection"])), {}, {
    panelCategories() {
      var _this$panelParams$cat;

      return (_this$panelParams$cat = this.panelParams.categories) === null || _this$panelParams$cat === void 0 ? void 0 : _this$panelParams$cat.map(item => {
        return item.id;
      });
    }

  }),
  watch: {
    modelCollection() {
      this.currentModelData = this.modelCollection[this.panelParams.model];
    }

  },

  created() {
    var _this$panelParams$cat2;

    this.currentModelData.categories = (_this$panelParams$cat2 = this.panelParams.categories) === null || _this$panelParams$cat2 === void 0 ? void 0 : _this$panelParams$cat2.map(item => {
      return item.id;
    });

    if (Object.keys(this.modelData).length > 0) {
      this.currentModelData = this.modelData;
    }
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "booleanSwitch",
  data: function data() {
    return {
      bool: "",
      boolRules: [v => !this.required || !!v || "Name is required"]
    };
  },
  props: {
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  watch: {
    bool() {
      this.$emit("updateData", {
        name: this.name,
        value: {
          content: this.bool,
          fieldType: "boolean-switch",
          required: this.required
        }
      });
    }

  }
});

/***/ }),

/***/ "./App/Ui/Components/modelForm.vue":
/*!*****************************************!*\
  !*** ./App/Ui/Components/modelForm.vue ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug& */ "./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug&");
/* harmony import */ var _modelForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modelForm.vue?vue&type=script&lang=js& */ "./App/Ui/Components/modelForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _modelForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "68a3f1c3",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('68a3f1c3')) {
      api.createRecord('68a3f1c3', component.options)
    } else {
      api.reload('68a3f1c3', component.options)
    }
    module.hot.accept(/*! ./modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug& */ "./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug& */ "./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug&");
(function () {
      api.rerender('68a3f1c3', {
        render: _modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/modelForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue":
/*!******************************************************************!*\
  !*** ./App/Ui/Components/partials/model/edit/_booleanSwitch.vue ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug& */ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug&");
/* harmony import */ var _booleanSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_booleanSwitch.vue?vue&type=script&lang=js& */ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _booleanSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c596a78e",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c596a78e')) {
      api.createRecord('c596a78e', component.options)
    } else {
      api.reload('c596a78e', component.options)
    }
    module.hot.accept(/*! ./_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug& */ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug& */ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug&");
(function () {
      api.rerender('c596a78e', {
        render: _booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/partials/model/edit/_booleanSwitch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/modelForm.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./App/Ui/Components/modelForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modelForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_booleanSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_booleanSwitch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_booleanSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug&":
/*!*********************************************************************************************!*\
  !*** ./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelForm_vue_vue_type_template_id_68a3f1c3_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug&");


/***/ }),

/***/ "./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug&":
/*!**********************************************************************************************************************!*\
  !*** ./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_booleanSwitch_vue_vue_type_template_id_c596a78e_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/pug-plain-loader/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelForm.vue?vue&type=template&id=68a3f1c3&scoped=true&lang=pug& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    { key: _vm.key },
    [
      _c(
        "v-form",
        {
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c("v-switch", {
            staticClass: "ma-4",
            attrs: { label: "Valid", readonly: "" },
            model: {
              value: _vm.valid,
              callback: function($$v) {
                _vm.valid = $$v
              },
              expression: "valid"
            }
          }),
          _vm._l(_vm.modelCollection[_vm.panelParams.model], function(
            fieldParams
          ) {
            return _c(
              "div",
              { attrs: { "data-jest": "form-element" } },
              [
                _c("rf" + fieldParams.type, {
                  tag: "component",
                  attrs: {
                    "is-edit": _vm.isEdit,
                    "field-params": fieldParams,
                    "panel-params": _vm.panelParams,
                    "field-data": _vm.modelData[fieldParams.name]
                  },
                  on: { updateData: _vm.updateData }
                })
              ],
              1
            )
          }),
          _vm._l(_vm.modelCollection.appFilters, function(fieldParams) {
            return _c(
              "div",
              { attrs: { "data-jest": "form-element" } },
              [
                _c("rf" + fieldParams.type, {
                  tag: "component",
                  attrs: {
                    "model-params": fieldParams,
                    "is-edit": true,
                    "field-data": _vm.modelData[fieldParams.name]
                  },
                  on: { updateData: _vm.updateData }
                })
              ],
              1
            )
          }),
          _c(
            "v-btn",
            {
              attrs: { small: "", outlined: "" },
              on: {
                click: function($event) {
                  return _vm.sendForm()
                }
              }
            },
            [_vm._v("Submit")]
          ),
          _c("v-select", {
            attrs: {
              multiple: "",
              items: _vm.availableFilterCollection.categories,
              "item-text": "label",
              "item-value": "id",
              value: _vm.panelCategories
            },
            on: {
              input: function($event) {
                _vm.currentModelData.categories = $event
              }
            }
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/partials/model/edit/_booleanSwitch.vue?vue&type=template&id=c596a78e&scoped=true&lang=pug& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-switch", {
    attrs: {
      "data-jest": "boolean-field",
      rules: _vm.boolRules,
      label: _vm.label,
      name: _vm.name
    },
    model: {
      value: _vm.bool,
      callback: function($$v) {
        _vm.bool = typeof $$v === "string" ? $$v.trim() : $$v
      },
      expression: "bool"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL21vZGVsRm9ybS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC9BcHAvVWkvQ29tcG9uZW50cy9wYXJ0aWFscy9tb2RlbC9lZGl0L19ib29sZWFuU3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxGb3JtLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcGFydGlhbHMvbW9kZWwvZWRpdC9fYm9vbGVhblN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL21vZGVsRm9ybS52dWU/ZTg4ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcGFydGlhbHMvbW9kZWwvZWRpdC9fYm9vbGVhblN3aXRjaC52dWU/NjU0ZiIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxGb3JtLnZ1ZT9mMWQzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9wYXJ0aWFscy9tb2RlbC9lZGl0L19ib29sZWFuU3dpdGNoLnZ1ZT85NmJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLG1CQURB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ZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIGRpdig6a2V5PVwia2V5XCIpXG4gICAgICAgIHYtZm9ybSh2LW1vZGVsPVwidmFsaWRcIilcbiAgICAgICAgICAgIHYtc3dpdGNoKHYtbW9kZWw9XCJ2YWxpZFwiIGNsYXNzPVwibWEtNFwiIGxhYmVsPVwiVmFsaWRcIiByZWFkb25seSlcbiAgICAgICAgICAgIGRpdih2LWZvcj1cImZpZWxkUGFyYW1zIGluIG1vZGVsQ29sbGVjdGlvbltwYW5lbFBhcmFtcy5tb2RlbF1cIiBkYXRhLWplc3Q9XCJmb3JtLWVsZW1lbnRcIilcbiAgICAgICAgICAgICAgICBjb21wb25lbnQoOmlzPVwiYHJmJHtmaWVsZFBhcmFtcy50eXBlfWBcIiA6aXMtZWRpdD1cImlzRWRpdFwiIDpmaWVsZC1wYXJhbXM9XCJmaWVsZFBhcmFtc1wiIDpwYW5lbC1wYXJhbXM9XCJwYW5lbFBhcmFtc1wiIDpmaWVsZC1kYXRhPVwibW9kZWxEYXRhW2ZpZWxkUGFyYW1zLm5hbWVdXCIgQHVwZGF0ZURhdGE9XCJ1cGRhdGVEYXRhXCIpXG4gICAgICAgICAgICBkaXYodi1mb3I9XCJmaWVsZFBhcmFtcyBpbiBtb2RlbENvbGxlY3Rpb24uYXBwRmlsdGVyc1wiIGRhdGEtamVzdD1cImZvcm0tZWxlbWVudFwiKVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCg6aXM9XCJgcmYke2ZpZWxkUGFyYW1zLnR5cGV9YFwiIDptb2RlbC1wYXJhbXM9XCJmaWVsZFBhcmFtc1wiIEB1cGRhdGVEYXRhPVwidXBkYXRlRGF0YVwiIDppcy1lZGl0PVwidHJ1ZVwiIDpmaWVsZC1kYXRhPVwibW9kZWxEYXRhW2ZpZWxkUGFyYW1zLm5hbWVdXCIpXG4gICAgICAgICAgICB2LWJ0bihAY2xpY2s9XCJzZW5kRm9ybSgpXCIgc21hbGwgb3V0bGluZWQpIFN1Ym1pdFxuICAgICAgICAgICAgdi1zZWxlY3QobXVsdGlwbGUgOml0ZW1zPVwiYXZhaWxhYmxlRmlsdGVyQ29sbGVjdGlvbi5jYXRlZ29yaWVzXCIgaXRlbS10ZXh0PVwibGFiZWxcIiBpdGVtLXZhbHVlPVwiaWRcIiBAaW5wdXQ9XCJjdXJyZW50TW9kZWxEYXRhLmNhdGVnb3JpZXMgPSAkZXZlbnRcIiA6dmFsdWU9XCJwYW5lbENhdGVnb3JpZXNcIilcbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHJmQm9vbGVhbiBmcm9tIFwiLi9wYXJ0aWFscy9tb2RlbC9lZGl0L19ib29sZWFuU3dpdGNoLnZ1ZVwiO1xuaW1wb3J0IHJmVGV4dCBmcm9tIFwiLi9wYXJ0aWFscy9tb2RlbC9lZGl0L190ZXh0TGluZS52dWVcIjtcbmltcG9ydCByZlJpY2hUZXh0IGZyb20gXCIuL3BhcnRpYWxzL21vZGVsL2VkaXQvX3JpY2hUZXh0LnZ1ZVwiO1xuaW1wb3J0IHJmQ2F0ZWdvcnlGaWx0ZXIgZnJvbSBcIi4vcGFydGlhbHMvbW9kZWwvZWRpdC9fY2F0ZWdvcnlGaWx0ZXIudnVlXCI7XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTW9kZWxGb3JtXCIsXG4gIGNvbXBvbmVudHM6IHsgcmZCb29sZWFuLCByZlRleHQsIHJmUmljaFRleHQsIHJmQ2F0ZWdvcnlGaWx0ZXIgfSxcbiAgcHJvcHM6IHtcbiAgICBtb2RlbERhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhbmVsUGFyYW1zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlOiB0cnVlXG4gICAgfSxcbiAgICBpc0VkaXQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIGN1cnJlbnRNb2RlbERhdGE6IHt9LFxuICAgICAga2V5OiB0cnVlXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoW1wiYWRkQWxlcnRcIl0pLFxuICAgIHVwZGF0ZURhdGEoZGF0YSkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY3VycmVudE1vZGVsRGF0YSwgZGF0YS5uYW1lLCBkYXRhLnZhbHVlKTtcbiAgICB9LFxuICAgIHNlbmRGb3JtKCkge1xuICAgICAgbGV0IGFjdGlvbiA9IFwicG9zdFwiO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9kZWxEYXRhKS5sZW5ndGggPiAwKSBhY3Rpb24gPSBcInB1dFwiO1xuICAgICAgdGhpcy5jdXJyZW50TW9kZWxEYXRhLmlkID0gbmFub2lkKDgpO1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBheGlvc1thY3Rpb25dKFxuICAgICAgICAgIGAvYXBpLyR7ZW5jb2RlVVJJKHRoaXMucGFuZWxQYXJhbXMubW9kZWwpfWAsXG4gICAgICAgICAgdGhpcy5jdXJyZW50TW9kZWxEYXRhXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIHRleHQ6IFwiU2F2ZWQgc3VjY2Vzc2Z1bGx5XCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcInJlbG9hZERhdGFcIik7XG4gICAgICAgICAgICB0aGlzLmtleSA9ICF0aGlzLmtleTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgdGV4dDogYFJlcXVlc3QgZmFpbGVkLiAgUmV0dXJuZWQgc3RhdHVzIG9mICR7ZXJyb3JzfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1wibW9kZWxDb2xsZWN0aW9uXCIsIFwiYXZhaWxhYmxlRmlsdGVyQ29sbGVjdGlvblwiXSksXG4gICAgcGFuZWxDYXRlZ29yaWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGFuZWxQYXJhbXMuY2F0ZWdvcmllcz8ubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5pZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBtb2RlbENvbGxlY3Rpb24oKSB7XG4gICAgICB0aGlzLmN1cnJlbnRNb2RlbERhdGEgPSB0aGlzLm1vZGVsQ29sbGVjdGlvblt0aGlzLnBhbmVsUGFyYW1zLm1vZGVsXTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jdXJyZW50TW9kZWxEYXRhLmNhdGVnb3JpZXMgPSB0aGlzLnBhbmVsUGFyYW1zLmNhdGVnb3JpZXM/Lm1hcChcbiAgICAgIGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5pZDtcbiAgICAgIH1cbiAgICApO1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vZGVsRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50TW9kZWxEYXRhID0gdGhpcy5tb2RlbERhdGE7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgdi1zd2l0Y2goZGF0YS1qZXN0PVwiYm9vbGVhbi1maWVsZFwiICB2LW1vZGVsLnRyaW09XCJib29sXCIgOnJ1bGVzPVwiYm9vbFJ1bGVzXCIgOmxhYmVsPVwibGFiZWxcIiA6bmFtZT1cIm5hbWVcIilcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImJvb2xlYW5Td2l0Y2hcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib29sOiBcIlwiLFxuICAgICAgICAgICAgYm9vbFJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgdiA9PiAoIXRoaXMucmVxdWlyZWQgfHwgISF2KSB8fCBcIk5hbWUgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICByZXF1aXJlZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcbiAgICAgICAgbGFiZWw6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgbmFtZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYm9vbCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGVEYXRhXCIsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtjb250ZW50OiB0aGlzLmJvb2wsIGZpZWxkVHlwZTogXCJib29sZWFuLXN3aXRjaFwiLCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbW9kZWxGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGEzZjFjMyZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb2RlbEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OGEzZjFjM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY4YTNmMWMzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY4YTNmMWMzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY4YTNmMWMzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tb2RlbEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4YTNmMWMzJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4YTNmMWMzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9tb2RlbEZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9fYm9vbGVhblN3aXRjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzU5NmE3OGUmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vX2Jvb2xlYW5Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9fYm9vbGVhblN3aXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM1OTZhNzhlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2V0aWVubmVyb3VnZS9XZWJzdG9ybVByb2plY3RzL3JmQ2xlYW4vcm91Z2VGcmFtZXdvcmsvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzU5NmE3OGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzU5NmE3OGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzU5NmE3OGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL19ib29sZWFuU3dpdGNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNTk2YTc4ZSZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNTk2YTc4ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvcGFydGlhbHMvbW9kZWwvZWRpdC9fYm9vbGVhblN3aXRjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kZWxGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZGVsRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vX2Jvb2xlYW5Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vX2Jvb2xlYW5Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsga2V5OiBfdm0ua2V5IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXN3aXRjaFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS00XCIsXG4gICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJWYWxpZFwiLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1vZGVsQ29sbGVjdGlvbltfdm0ucGFuZWxQYXJhbXMubW9kZWxdLCBmdW5jdGlvbihcbiAgICAgICAgICAgIGZpZWxkUGFyYW1zXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJmb3JtLWVsZW1lbnRcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJmXCIgKyBmaWVsZFBhcmFtcy50eXBlLCB7XG4gICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImlzLWVkaXRcIjogX3ZtLmlzRWRpdCxcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZC1wYXJhbXNcIjogZmllbGRQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIFwicGFuZWwtcGFyYW1zXCI6IF92bS5wYW5lbFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZC1kYXRhXCI6IF92bS5tb2RlbERhdGFbZmllbGRQYXJhbXMubmFtZV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB1cGRhdGVEYXRhOiBfdm0udXBkYXRlRGF0YSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fbChfdm0ubW9kZWxDb2xsZWN0aW9uLmFwcEZpbHRlcnMsIGZ1bmN0aW9uKGZpZWxkUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkYXRhLWplc3RcIjogXCJmb3JtLWVsZW1lbnRcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInJmXCIgKyBmaWVsZFBhcmFtcy50eXBlLCB7XG4gICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm1vZGVsLXBhcmFtc1wiOiBmaWVsZFBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1lZGl0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGQtZGF0YVwiOiBfdm0ubW9kZWxEYXRhW2ZpZWxkUGFyYW1zLm5hbWVdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdXBkYXRlRGF0YTogX3ZtLnVwZGF0ZURhdGEgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIsIG91dGxpbmVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZW5kRm9ybSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0uYXZhaWxhYmxlRmlsdGVyQ29sbGVjdGlvbi5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFuZWxDYXRlZ29yaWVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5jdXJyZW50TW9kZWxEYXRhLmNhdGVnb3JpZXMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LXN3aXRjaFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1qZXN0XCI6IFwiYm9vbGVhbi1maWVsZFwiLFxuICAgICAgcnVsZXM6IF92bS5ib29sUnVsZXMsXG4gICAgICBsYWJlbDogX3ZtLmxhYmVsLFxuICAgICAgbmFtZTogX3ZtLm5hbWVcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogX3ZtLmJvb2wsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5ib29sID0gdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIiA/ICQkdi50cmltKCkgOiAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImJvb2xcIlxuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9