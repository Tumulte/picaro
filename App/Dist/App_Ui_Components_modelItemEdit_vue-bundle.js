(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_modelItemEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelItemEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelItemEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ModelItemEdit",
  props: {
    modelName: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["awaitConfirmation", "addAlert"])), {}, {
    deleteField() {
      this.awaitConfirmation({
        text: "Are you sure you want to delete that field ?",
        type: "warning"
      }).then(this.deleteFromDatabase).catch(() => {
        return;
      });
    },

    deleteFromDatabase() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().delete("/api/".concat(encodeURI(this.modelName), "/").concat(this.id)).then(() => {
        this.addAlert({
          type: "success",
          text: "Deleted successfully"
        });
        this.$emit("reloadData");
      }).catch(errors => {
        this.addAlert({
          type: "error",
          text: "Request failed.  Returned status of ".concat(errors)
        });
      });
    }

  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["settings"]))
});

/***/ }),

/***/ "./App/Ui/Components/modelItemEdit.vue":
/*!*********************************************!*\
  !*** ./App/Ui/Components/modelItemEdit.vue ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug& */ "./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug&");
/* harmony import */ var _modelItemEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modelItemEdit.vue?vue&type=script&lang=js& */ "./App/Ui/Components/modelItemEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _modelItemEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61685e88",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('61685e88')) {
      api.createRecord('61685e88', component.options)
    } else {
      api.reload('61685e88', component.options)
    }
    module.hot.accept(/*! ./modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug& */ "./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug& */ "./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug&");
(function () {
      api.rerender('61685e88', {
        render: _modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/modelItemEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/modelItemEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./App/Ui/Components/modelItemEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelItemEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modelItemEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelItemEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelItemEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug&":
/*!*************************************************************************************************!*\
  !*** ./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modelItemEdit_vue_vue_type_template_id_61685e88_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/modelItemEdit.vue?vue&type=template&id=61685e88&scoped=true&lang=pug& ***!
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
  return _c(
    "v-btn",
    { attrs: { small: "", outlined: "" }, on: { click: _vm.deleteField } },
    [_vm._v("delete")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL21vZGVsSXRlbUVkaXQudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9tb2RlbEl0ZW1FZGl0LnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxJdGVtRWRpdC52dWU/OWE5OSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxJdGVtRWRpdC52dWU/ODRlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQSx1QkFEQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsS0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkEsR0FGQTtBQU1BLDJDQUNBLG1GQURBO0FBRUE7QUFDQTtBQUNBLDREQURBO0FBRUE7QUFGQSxTQUlBLElBSkEsQ0FJQSx1QkFKQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsT0FQQTtBQVFBLEtBWEE7O0FBWUE7QUFDQSx5RUFDQSx5QkFEQSxjQUNBLE9BREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0EsT0FSQSxFQVNBLEtBVEEsQ0FTQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBO0FBSUEsT0FkQTtBQWVBOztBQTVCQSxJQU5BO0FBb0NBLDhCQUNBLDhEQURBO0FBcENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RpSDtBQUNoRDtBQUNMOzs7QUFHNUQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsMEdBQU07QUFDUixFQUFFLG1IQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUEyRztBQUMvSCxjQUFjLG1CQUFPLENBQUMsMkNBQUs7QUFDM0I7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLGlCQUFpQixDQUFDLDBLQUF5RSxFQUFFO0FBQUE7QUFDakc7QUFDQSxnQkFBZ0IsMEdBQU07QUFDdEIseUJBQXlCLG1IQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q29LLENBQUMsaUVBQWUsK0tBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDBCQUEwQixPQUFPLHlCQUF5QixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfbW9kZWxJdGVtRWRpdF92dWUtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cblxuICAgIHYtYnRuKEBjbGljaz1cImRlbGV0ZUZpZWxkXCIgc21hbGwgb3V0bGluZWQpIGRlbGV0ZVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTW9kZWxJdGVtRWRpdFwiLFxuICBwcm9wczoge1xuICAgIG1vZGVsTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFtcImF3YWl0Q29uZmlybWF0aW9uXCIsIFwiYWRkQWxlcnRcIl0pLFxuICAgIGRlbGV0ZUZpZWxkKCkge1xuICAgICAgdGhpcy5hd2FpdENvbmZpcm1hdGlvbih7XG4gICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGF0IGZpZWxkID9cIixcbiAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCJcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHRoaXMuZGVsZXRlRnJvbURhdGFiYXNlKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWxldGVGcm9tRGF0YWJhc2UoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAuZGVsZXRlKGAvYXBpLyR7ZW5jb2RlVVJJKHRoaXMubW9kZWxOYW1lKX0vJHt0aGlzLmlkfWApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgdGV4dDogXCJEZWxldGVkIHN1Y2Nlc3NmdWxseVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcInJlbG9hZERhdGFcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgdGV4dDogYFJlcXVlc3QgZmFpbGVkLiAgUmV0dXJuZWQgc3RhdHVzIG9mICR7ZXJyb3JzfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1wic2V0dGluZ3NcIl0pXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tb2RlbEl0ZW1FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTY4NWU4OCZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb2RlbEl0ZW1FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxJdGVtRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYxNjg1ZTg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2V0aWVubmVyb3VnZS9XZWJzdG9ybVByb2plY3RzL3JmQ2xlYW4vcm91Z2VGcmFtZXdvcmsvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjE2ODVlODgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjE2ODVlODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjE2ODVlODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21vZGVsSXRlbUVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxNjg1ZTg4JnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYxNjg1ZTg4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy9tb2RlbEl0ZW1FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2RlbEl0ZW1FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZGVsSXRlbUVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYnRuXCIsXG4gICAgeyBhdHRyczogeyBzbWFsbDogXCJcIiwgb3V0bGluZWQ6IFwiXCIgfSwgb246IHsgY2xpY2s6IF92bS5kZWxldGVGaWVsZCB9IH0sXG4gICAgW192bS5fdihcImRlbGV0ZVwiKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=