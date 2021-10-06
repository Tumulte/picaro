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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL21vZGVsSXRlbUVkaXQudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy9tb2RlbEl0ZW1FZGl0LnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxJdGVtRWRpdC52dWU/OWE5OSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxJdGVtRWRpdC52dWU/ODRlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQSx1QkFEQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsS0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkEsR0FGQTtBQU1BLDJDQUNBLG1GQURBO0FBRUE7QUFDQTtBQUNBLDREQURBO0FBRUE7QUFGQSxTQUlBLElBSkEsQ0FJQSx1QkFKQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsT0FQQTtBQVFBLEtBWEE7O0FBWUE7QUFDQSx5RUFDQSx5QkFEQSxjQUNBLE9BREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0EsT0FSQSxFQVNBLEtBVEEsQ0FTQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBO0FBSUEsT0FkQTtBQWVBOztBQTVCQSxJQU5BO0FBb0NBLDhCQUNBLDhEQURBO0FBcENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RpSDtBQUNoRDtBQUNMOzs7QUFHNUQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsMEdBQU07QUFDUixFQUFFLG1IQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUEyRztBQUMvSCxjQUFjLG1CQUFPLENBQUMsMkNBQUs7QUFDM0I7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLGlCQUFpQixDQUFDLDBLQUF5RSxFQUFFO0FBQUE7QUFDakc7QUFDQSxnQkFBZ0IsMEdBQU07QUFDdEIseUJBQXlCLG1IQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q29LLENBQUMsaUVBQWUsK0tBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdk07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDBCQUEwQixPQUFPLHlCQUF5QixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfbW9kZWxJdGVtRWRpdF92dWUuYXBwLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG5cbiAgICB2LWJ0bihAY2xpY2s9XCJkZWxldGVGaWVsZFwiIHNtYWxsIG91dGxpbmVkKSBkZWxldGVcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIk1vZGVsSXRlbUVkaXRcIixcbiAgcHJvcHM6IHtcbiAgICBtb2RlbE5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJhd2FpdENvbmZpcm1hdGlvblwiLCBcImFkZEFsZXJ0XCJdKSxcbiAgICBkZWxldGVGaWVsZCgpIHtcbiAgICAgIHRoaXMuYXdhaXRDb25maXJtYXRpb24oe1xuICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhhdCBmaWVsZCA/XCIsXG4gICAgICAgIHR5cGU6IFwid2FybmluZ1wiXG4gICAgICB9KVxuICAgICAgICAudGhlbih0aGlzLmRlbGV0ZUZyb21EYXRhYmFzZSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlRnJvbURhdGFiYXNlKCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmRlbGV0ZShgL2FwaS8ke2VuY29kZVVSSSh0aGlzLm1vZGVsTmFtZSl9LyR7dGhpcy5pZH1gKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHRleHQ6IFwiRGVsZXRlZCBzdWNjZXNzZnVsbHlcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZWxvYWREYXRhXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yc31gXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtcInNldHRpbmdzXCJdKVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbW9kZWxJdGVtRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjE2ODVlODgmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9kZWxJdGVtRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVsSXRlbUVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MTY4NWU4OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYxNjg1ZTg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYxNjg1ZTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYxNjg1ZTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tb2RlbEl0ZW1FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTY4NWU4OCZzY29wZWQ9dHJ1ZSZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MTY4NWU4OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwL1VpL0NvbXBvbmVudHMvbW9kZWxJdGVtRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kZWxJdGVtRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2RlbEl0ZW1FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWJ0blwiLFxuICAgIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIsIG91dGxpbmVkOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlRmllbGQgfSB9LFxuICAgIFtfdm0uX3YoXCJkZWxldGVcIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9