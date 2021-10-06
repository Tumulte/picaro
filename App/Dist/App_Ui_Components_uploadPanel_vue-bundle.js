(self["webpackChunkjavascript_development_environment"] = self["webpackChunkjavascript_development_environment"] || []).push([["App_Ui_Components_uploadPanel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/uploadPanel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/uploadPanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");




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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UploadPanel",

  data() {
    return {
      file: null,
      fileCollection: [],
      filteredType: "all"
    };
  },

  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(["addAlert"])), {}, {
    submit() {
      const formData = new FormData();
      formData.append("file", this.file);
      axios__WEBPACK_IMPORTED_MODULE_3___default().post("/file/upload", formData).then(() => {
        this.addAlert({
          type: "success",
          text: "File added !"
        });
        this.file = null;
        this.fetchFiles();
      }).catch(errors => {
        this.addAlert({
          type: "error",
          text: "Request failed.  Returned status of ".concat(errors)
        });
      });
    },

    getThumb(img) {
      const [fileName, ext] = img.split(".");
      return fileName + "-thumb." + ext;
    },

    fetchFiles() {
      axios__WEBPACK_IMPORTED_MODULE_3___default()("/file/list").then(response => {
        this.fileCollection = response.data;
      });
    }

  }),
  computed: {
    availableTypeCollection() {
      let typeCollection = this.fileCollection.map(item => item.type.split("/")[1]);
      typeCollection = new Set(typeCollection);
      return typeCollection;
    }

  },

  created() {
    this.fetchFiles();
  }

});

/***/ }),

/***/ "./App/Ui/Components/uploadPanel.vue":
/*!*******************************************!*\
  !*** ./App/Ui/Components/uploadPanel.vue ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug& */ "./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug&");
/* harmony import */ var _uploadPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadPanel.vue?vue&type=script&lang=js& */ "./App/Ui/Components/uploadPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _uploadPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
  _uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
    if (!api.isRecorded('33ce5c39')) {
      api.createRecord('33ce5c39', component.options)
    } else {
      api.reload('33ce5c39', component.options)
    }
    module.hot.accept(/*! ./uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug& */ "./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug& */ "./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug&");
(function () {
      api.rerender('33ce5c39', {
        render: _uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "App/Ui/Components/uploadPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App/Ui/Components/uploadPanel.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./App/Ui/Components/uploadPanel.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./uploadPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/uploadPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug&":
/*!***********************************************************************************!*\
  !*** ./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadPanel_vue_vue_type_template_id_33ce5c39_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./App/Ui/Components/uploadPanel.vue?vue&type=template&id=33ce5c39&lang=pug& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "rf-upload-panel" } },
    [
      _c("v-file-input", {
        model: {
          value: _vm.file,
          callback: function($$v) {
            _vm.file = $$v
          },
          expression: "file"
        }
      }),
      _c("v-btn", { on: { click: _vm.submit } }, [_vm._v("Submit")]),
      _c(
        "v-tabs",
        [
          _c(
            "v-tab",
            {
              on: {
                click: function($event) {
                  _vm.filteredType = "all"
                }
              }
            },
            [_vm._v("All")]
          ),
          _vm._l(_vm.availableTypeCollection, function(type, index) {
            return _c(
              "v-tab",
              {
                key: index,
                on: {
                  click: function($event) {
                    _vm.filteredType = type
                  }
                }
              },
              [_vm._v(_vm._s(type))]
            )
          })
        ],
        2
      ),
      _vm._l(_vm.fileCollection, function(file) {
        return file.type.includes(_vm.filteredType) ||
          _vm.filteredType === "all"
          ? _c("span", [
              file.type.includes("image")
                ? _c("img", {
                    staticClass: "rf-upload-panel-thumb",
                    attrs: {
                      "data-src": file.file,
                      src: "/uploaded/" + _vm.getThumb(file.file)
                    }
                  })
                : _c("div", [_vm._v(_vm._s(file.file))])
            ])
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL3VwbG9hZFBhbmVsLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvdXBsb2FkUGFuZWwudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy91cGxvYWRQYW5lbC52dWU/ZDdiOCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvdXBsb2FkUGFuZWwudnVlPzllZmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEE7QUFLQSxHQVJBOztBQVNBLDJDQUNBLDhEQURBO0FBRUE7QUFDQTtBQUNBO0FBRUEsd0RBQ0EsY0FEQSxFQUNBLFFBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQSxPQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkE7QUFJQSxPQWZBO0FBZ0JBLEtBdEJBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQTs7QUEyQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBOztBQS9CQSxJQVRBO0FBMENBO0FBQ0E7QUFDQSxtREFDQSwrQkFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFQQSxHQTFDQTs7QUFtREE7QUFDQTtBQUNBOztBQXJEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm1HO0FBQ3BDO0FBQ0w7OztBQUcxRDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQTJHO0FBQy9ILGNBQWMsbUJBQU8sQ0FBQywyQ0FBSztBQUMzQjtBQUNBLElBQUksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksaUJBQWlCLENBQUMsOElBQTJELEVBQUU7QUFBQTtBQUNuRjtBQUNBLGdCQUFnQiw0RkFBTTtBQUN0Qix5QkFBeUIscUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0ssQ0FBQyxpRUFBZSw2S0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsd0JBQXdCLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsbUJBQW1CLE1BQU0sb0JBQW9CLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfdXBsb2FkUGFuZWxfdnVlLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgZGl2KGlkPVwicmYtdXBsb2FkLXBhbmVsXCIpXG4gICAgICAgIHYtZmlsZS1pbnB1dCh2LW1vZGVsPVwiZmlsZVwiKVxuICAgICAgICB2LWJ0bihAY2xpY2s9XCJzdWJtaXRcIikgU3VibWl0XG4gICAgICAgIHYtdGFic1xuICAgICAgICAgICAgdi10YWIoIEBjbGljaz1cImZpbHRlcmVkVHlwZSA9ICdhbGwnXCIpIEFsbFxuICAgICAgICAgICAgdi10YWIodi1mb3I9XCIodHlwZSwgaW5kZXgpIGluIGF2YWlsYWJsZVR5cGVDb2xsZWN0aW9uXCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwiZmlsdGVyZWRUeXBlID0gdHlwZVwiKSB7e3R5cGV9fVxuICAgICAgICBzcGFuKHYtZm9yPVwiZmlsZSBpbiBmaWxlQ29sbGVjdGlvblwiIHYtaWY9XCJmaWxlLnR5cGUuaW5jbHVkZXMoZmlsdGVyZWRUeXBlKSB8fCBmaWx0ZXJlZFR5cGUgPT09ICdhbGwnXCIpXG4gICAgICAgICAgICBpbWcodi1pZj1cImZpbGUudHlwZS5pbmNsdWRlcygnaW1hZ2UnKVwiIGNsYXNzPVwicmYtdXBsb2FkLXBhbmVsLXRodW1iXCIgOmRhdGEtc3JjPVwiZmlsZS5maWxlXCIgOnNyYz1cImAvdXBsb2FkZWQvJHtnZXRUaHVtYihmaWxlLmZpbGUpfWBcIilcbiAgICAgICAgICAgIGRpdih2LWVsc2UpIHt7ZmlsZS5maWxlfX1cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlVwbG9hZFBhbmVsXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGU6IG51bGwsXG4gICAgICBmaWxlQ29sbGVjdGlvbjogW10sXG4gICAgICBmaWx0ZXJlZFR5cGU6IFwiYWxsXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJhZGRBbGVydFwiXSksXG4gICAgc3VibWl0KCkge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgdGhpcy5maWxlKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvZmlsZS91cGxvYWRcIiwgZm9ybURhdGEpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgdGV4dDogYEZpbGUgYWRkZWQgIWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuZmV0Y2hGaWxlcygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICB0aGlzLmFkZEFsZXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRleHQ6IGBSZXF1ZXN0IGZhaWxlZC4gIFJldHVybmVkIHN0YXR1cyBvZiAke2Vycm9yc31gXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0VGh1bWIoaW1nKSB7XG4gICAgICBjb25zdCBbZmlsZU5hbWUsIGV4dF0gPSBpbWcuc3BsaXQoXCIuXCIpO1xuICAgICAgcmV0dXJuIGZpbGVOYW1lICsgXCItdGh1bWIuXCIgKyBleHQ7XG4gICAgfSxcbiAgICBmZXRjaEZpbGVzKCkge1xuICAgICAgYXhpb3MoXCIvZmlsZS9saXN0XCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmZpbGVDb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhdmFpbGFibGVUeXBlQ29sbGVjdGlvbigpIHtcbiAgICAgIGxldCB0eXBlQ29sbGVjdGlvbiA9IHRoaXMuZmlsZUNvbGxlY3Rpb24ubWFwKFxuICAgICAgICBpdGVtID0+IGl0ZW0udHlwZS5zcGxpdChcIi9cIilbMV1cbiAgICAgICk7XG4gICAgICB0eXBlQ29sbGVjdGlvbiA9IG5ldyBTZXQodHlwZUNvbGxlY3Rpb24pO1xuICAgICAgcmV0dXJuIHR5cGVDb2xsZWN0aW9uO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmZldGNoRmlsZXMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91cGxvYWRQYW5lbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNjZTVjMzkmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXBsb2FkUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91cGxvYWRQYW5lbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9ldGllbm5lcm91Z2UvV2Vic3Rvcm1Qcm9qZWN0cy9yZkNsZWFuL3JvdWdlRnJhbWV3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMzY2U1YzM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMzY2U1YzM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMzY2U1YzM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91cGxvYWRQYW5lbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNjZTVjMzkmbGFuZz1wdWcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzNjZTVjMzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC9VaS9Db21wb25lbnRzL3VwbG9hZFBhbmVsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWRQYW5lbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGxvYWRQYW5lbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJyZi11cGxvYWQtcGFuZWxcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LWZpbGUtaW5wdXRcIiwge1xuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uZmlsZSA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfYyhcInYtYnRuXCIsIHsgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfSB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRhYlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXJlZFR5cGUgPSBcImFsbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkFsbFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlVHlwZUNvbGxlY3Rpb24sIGZ1bmN0aW9uKHR5cGUsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidi10YWJcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlcmVkVHlwZSA9IHR5cGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHR5cGUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl9sKF92bS5maWxlQ29sbGVjdGlvbiwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICByZXR1cm4gZmlsZS50eXBlLmluY2x1ZGVzKF92bS5maWx0ZXJlZFR5cGUpIHx8XG4gICAgICAgICAgX3ZtLmZpbHRlcmVkVHlwZSA9PT0gXCJhbGxcIlxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgZmlsZS50eXBlLmluY2x1ZGVzKFwiaW1hZ2VcIilcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmYtdXBsb2FkLXBhbmVsLXRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXNyY1wiOiBmaWxlLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi91cGxvYWRlZC9cIiArIF92bS5nZXRUaHVtYihmaWxlLmZpbGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhmaWxlLmZpbGUpKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9