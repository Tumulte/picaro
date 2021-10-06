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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL21vZGVsRm9ybS52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC9BcHAvVWkvQ29tcG9uZW50cy9wYXJ0aWFscy9tb2RlbC9lZGl0L19ib29sZWFuU3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxGb3JtLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcGFydGlhbHMvbW9kZWwvZWRpdC9fYm9vbGVhblN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXZlbG9wbWVudC1lbnZpcm9ubWVudC8uL0FwcC9VaS9Db21wb25lbnRzL21vZGVsRm9ybS52dWU/ZTg4ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvcGFydGlhbHMvbW9kZWwvZWRpdC9fYm9vbGVhblN3aXRjaC52dWU/NjU0ZiIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxGb3JtLnZ1ZT9mMWQzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9wYXJ0aWFscy9tb2RlbC9lZGl0L19ib29sZWFuU3dpdGNoLnZ1ZT85NmJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLG1CQURB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ZS5hcHAtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgICBkaXYoOmtleT1cImtleVwiKVxuICAgICAgICB2LWZvcm0odi1tb2RlbD1cInZhbGlkXCIpXG4gICAgICAgICAgICB2LXN3aXRjaCh2LW1vZGVsPVwidmFsaWRcIiBjbGFzcz1cIm1hLTRcIiBsYWJlbD1cIlZhbGlkXCIgcmVhZG9ubHkpXG4gICAgICAgICAgICBkaXYodi1mb3I9XCJmaWVsZFBhcmFtcyBpbiBtb2RlbENvbGxlY3Rpb25bcGFuZWxQYXJhbXMubW9kZWxdXCIgZGF0YS1qZXN0PVwiZm9ybS1lbGVtZW50XCIpXG4gICAgICAgICAgICAgICAgY29tcG9uZW50KDppcz1cImByZiR7ZmllbGRQYXJhbXMudHlwZX1gXCIgOmlzLWVkaXQ9XCJpc0VkaXRcIiA6ZmllbGQtcGFyYW1zPVwiZmllbGRQYXJhbXNcIiA6cGFuZWwtcGFyYW1zPVwicGFuZWxQYXJhbXNcIiA6ZmllbGQtZGF0YT1cIm1vZGVsRGF0YVtmaWVsZFBhcmFtcy5uYW1lXVwiIEB1cGRhdGVEYXRhPVwidXBkYXRlRGF0YVwiKVxuICAgICAgICAgICAgZGl2KHYtZm9yPVwiZmllbGRQYXJhbXMgaW4gbW9kZWxDb2xsZWN0aW9uLmFwcEZpbHRlcnNcIiBkYXRhLWplc3Q9XCJmb3JtLWVsZW1lbnRcIilcbiAgICAgICAgICAgICAgICBjb21wb25lbnQoOmlzPVwiYHJmJHtmaWVsZFBhcmFtcy50eXBlfWBcIiA6bW9kZWwtcGFyYW1zPVwiZmllbGRQYXJhbXNcIiBAdXBkYXRlRGF0YT1cInVwZGF0ZURhdGFcIiA6aXMtZWRpdD1cInRydWVcIiA6ZmllbGQtZGF0YT1cIm1vZGVsRGF0YVtmaWVsZFBhcmFtcy5uYW1lXVwiKVxuICAgICAgICAgICAgdi1idG4oQGNsaWNrPVwic2VuZEZvcm0oKVwiIHNtYWxsIG91dGxpbmVkKSBTdWJtaXRcbiAgICAgICAgICAgIHYtc2VsZWN0KG11bHRpcGxlIDppdGVtcz1cImF2YWlsYWJsZUZpbHRlckNvbGxlY3Rpb24uY2F0ZWdvcmllc1wiIGl0ZW0tdGV4dD1cImxhYmVsXCIgaXRlbS12YWx1ZT1cImlkXCIgQGlucHV0PVwiY3VycmVudE1vZGVsRGF0YS5jYXRlZ29yaWVzID0gJGV2ZW50XCIgOnZhbHVlPVwicGFuZWxDYXRlZ29yaWVzXCIpXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByZkJvb2xlYW4gZnJvbSBcIi4vcGFydGlhbHMvbW9kZWwvZWRpdC9fYm9vbGVhblN3aXRjaC52dWVcIjtcbmltcG9ydCByZlRleHQgZnJvbSBcIi4vcGFydGlhbHMvbW9kZWwvZWRpdC9fdGV4dExpbmUudnVlXCI7XG5pbXBvcnQgcmZSaWNoVGV4dCBmcm9tIFwiLi9wYXJ0aWFscy9tb2RlbC9lZGl0L19yaWNoVGV4dC52dWVcIjtcbmltcG9ydCByZkNhdGVnb3J5RmlsdGVyIGZyb20gXCIuL3BhcnRpYWxzL21vZGVsL2VkaXQvX2NhdGVnb3J5RmlsdGVyLnZ1ZVwiO1xuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsRm9ybVwiLFxuICBjb21wb25lbnRzOiB7IHJmQm9vbGVhbiwgcmZUZXh0LCByZlJpY2hUZXh0LCByZkNhdGVnb3J5RmlsdGVyIH0sXG4gIHByb3BzOiB7XG4gICAgbW9kZWxEYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfSxcbiAgICBwYW5lbFBhcmFtczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNFZGl0OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICBjdXJyZW50TW9kZWxEYXRhOiB7fSxcbiAgICAgIGtleTogdHJ1ZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFtcImFkZEFsZXJ0XCJdKSxcbiAgICB1cGRhdGVEYXRhKGRhdGEpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmN1cnJlbnRNb2RlbERhdGEsIGRhdGEubmFtZSwgZGF0YS52YWx1ZSk7XG4gICAgfSxcbiAgICBzZW5kRm9ybSgpIHtcbiAgICAgIGxldCBhY3Rpb24gPSBcInBvc3RcIjtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vZGVsRGF0YSkubGVuZ3RoID4gMCkgYWN0aW9uID0gXCJwdXRcIjtcbiAgICAgIHRoaXMuY3VycmVudE1vZGVsRGF0YS5pZCA9IG5hbm9pZCg4KTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgYXhpb3NbYWN0aW9uXShcbiAgICAgICAgICBgL2FwaS8ke2VuY29kZVVSSSh0aGlzLnBhbmVsUGFyYW1zLm1vZGVsKX1gLFxuICAgICAgICAgIHRoaXMuY3VycmVudE1vZGVsRGF0YVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICB0ZXh0OiBcIlNhdmVkIHN1Y2Nlc3NmdWxseVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZWxvYWREYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5rZXkgPSAhdGhpcy5rZXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yc31gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtcIm1vZGVsQ29sbGVjdGlvblwiLCBcImF2YWlsYWJsZUZpbHRlckNvbGxlY3Rpb25cIl0pLFxuICAgIHBhbmVsQ2F0ZWdvcmllcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsUGFyYW1zLmNhdGVnb3JpZXM/Lm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgbW9kZWxDb2xsZWN0aW9uKCkge1xuICAgICAgdGhpcy5jdXJyZW50TW9kZWxEYXRhID0gdGhpcy5tb2RlbENvbGxlY3Rpb25bdGhpcy5wYW5lbFBhcmFtcy5tb2RlbF07XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3VycmVudE1vZGVsRGF0YS5jYXRlZ29yaWVzID0gdGhpcy5wYW5lbFBhcmFtcy5jYXRlZ29yaWVzPy5tYXAoXG4gICAgICBpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tb2RlbERhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudE1vZGVsRGF0YSA9IHRoaXMubW9kZWxEYXRhO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIHYtc3dpdGNoKGRhdGEtamVzdD1cImJvb2xlYW4tZmllbGRcIiAgdi1tb2RlbC50cmltPVwiYm9vbFwiIDpydWxlcz1cImJvb2xSdWxlc1wiIDpsYWJlbD1cImxhYmVsXCIgOm5hbWU9XCJuYW1lXCIpXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJib29sZWFuU3dpdGNoXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9vbDogXCJcIixcbiAgICAgICAgICAgIGJvb2xSdWxlczogW1xuICAgICAgICAgICAgICAgIHYgPT4gKCF0aGlzLnJlcXVpcmVkIHx8ICEhdikgfHwgXCJOYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXG4gICAgICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgIG5hbWU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGJvb2woKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwidXBkYXRlRGF0YVwiLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7Y29udGVudDogdGhpcy5ib29sLCBmaWVsZFR5cGU6IFwiYm9vbGVhbi1zd2l0Y2hcIiwgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWR9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21vZGVsRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhhM2YxYzMmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9kZWxGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjhhM2YxYzNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OGEzZjFjMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OGEzZjFjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OGEzZjFjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbW9kZWxGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGEzZjFjMyZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OGEzZjFjMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vX2Jvb2xlYW5Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM1OTZhNzhlJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL19ib29sZWFuU3dpdGNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vX2Jvb2xlYW5Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjNTk2YTc4ZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2M1OTZhNzhlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M1OTZhNzhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M1OTZhNzhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9fYm9vbGVhblN3aXRjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzU5NmE3OGUmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzU5NmE3OGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC9VaS9Db21wb25lbnRzL3BhcnRpYWxzL21vZGVsL2VkaXQvX2Jvb2xlYW5Td2l0Y2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZGVsRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2RlbEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL19ib29sZWFuU3dpdGNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL19ib29sZWFuU3dpdGNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGtleTogX3ZtLmtleSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtNFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiVmFsaWRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl9sKF92bS5tb2RlbENvbGxlY3Rpb25bX3ZtLnBhbmVsUGFyYW1zLm1vZGVsXSwgZnVuY3Rpb24oXG4gICAgICAgICAgICBmaWVsZFBhcmFtc1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwiZm9ybS1lbGVtZW50XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyZlwiICsgZmllbGRQYXJhbXMudHlwZSwge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1lZGl0XCI6IF92bS5pc0VkaXQsXG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGQtcGFyYW1zXCI6IGZpZWxkUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBcInBhbmVsLXBhcmFtc1wiOiBfdm0ucGFuZWxQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGQtZGF0YVwiOiBfdm0ubW9kZWxEYXRhW2ZpZWxkUGFyYW1zLm5hbWVdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdXBkYXRlRGF0YTogX3ZtLnVwZGF0ZURhdGEgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1vZGVsQ29sbGVjdGlvbi5hcHBGaWx0ZXJzLCBmdW5jdGlvbihmaWVsZFBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZGF0YS1qZXN0XCI6IFwiZm9ybS1lbGVtZW50XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyZlwiICsgZmllbGRQYXJhbXMudHlwZSwge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtb2RlbC1wYXJhbXNcIjogZmllbGRQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIFwiaXMtZWRpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImZpZWxkLWRhdGFcIjogX3ZtLm1vZGVsRGF0YVtmaWVsZFBhcmFtcy5uYW1lXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHVwZGF0ZURhdGE6IF92bS51cGRhdGVEYXRhIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBvdXRsaW5lZDogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VuZEZvcm0oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTdWJtaXRcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICBpdGVtczogX3ZtLmF2YWlsYWJsZUZpbHRlckNvbGxlY3Rpb24uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhbmVsQ2F0ZWdvcmllc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudE1vZGVsRGF0YS5jYXRlZ29yaWVzID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtamVzdFwiOiBcImJvb2xlYW4tZmllbGRcIixcbiAgICAgIHJ1bGVzOiBfdm0uYm9vbFJ1bGVzLFxuICAgICAgbGFiZWw6IF92bS5sYWJlbCxcbiAgICAgIG5hbWU6IF92bS5uYW1lXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IF92bS5ib29sLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYm9vbCA9IHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCIgPyAkJHYudHJpbSgpIDogJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJib29sXCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==