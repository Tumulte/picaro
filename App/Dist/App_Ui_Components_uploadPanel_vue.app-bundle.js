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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50L0FwcC9VaS9Db21wb25lbnRzL3VwbG9hZFBhbmVsLnZ1ZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvdXBsb2FkUGFuZWwudnVlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGV2ZWxvcG1lbnQtZW52aXJvbm1lbnQvLi9BcHAvVWkvQ29tcG9uZW50cy91cGxvYWRQYW5lbC52dWU/ZDdiOCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRldmVsb3BtZW50LWVudmlyb25tZW50Ly4vQXBwL1VpL0NvbXBvbmVudHMvdXBsb2FkUGFuZWwudnVlPzllZmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEE7QUFLQSxHQVJBOztBQVNBLDJDQUNBLDhEQURBO0FBRUE7QUFDQTtBQUNBO0FBRUEsd0RBQ0EsY0FEQSxFQUNBLFFBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQSxPQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkE7QUFJQSxPQWZBO0FBZ0JBLEtBdEJBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQTs7QUEyQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBOztBQS9CQSxJQVRBO0FBMENBO0FBQ0E7QUFDQSxtREFDQSwrQkFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFQQSxHQTFDQTs7QUFtREE7QUFDQTtBQUNBOztBQXJEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm1HO0FBQ3BDO0FBQ0w7OztBQUcxRDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQTJHO0FBQy9ILGNBQWMsbUJBQU8sQ0FBQywyQ0FBSztBQUMzQjtBQUNBLElBQUksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksaUJBQWlCLENBQUMsOElBQTJELEVBQUU7QUFBQTtBQUNuRjtBQUNBLGdCQUFnQiw0RkFBTTtBQUN0Qix5QkFBeUIscUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDa0ssQ0FBQyxpRUFBZSw2S0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsd0JBQXdCLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsbUJBQW1CLE1BQU0sb0JBQW9CLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwX1VpX0NvbXBvbmVudHNfdXBsb2FkUGFuZWxfdnVlLmFwcC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIGRpdihpZD1cInJmLXVwbG9hZC1wYW5lbFwiKVxuICAgICAgICB2LWZpbGUtaW5wdXQodi1tb2RlbD1cImZpbGVcIilcbiAgICAgICAgdi1idG4oQGNsaWNrPVwic3VibWl0XCIpIFN1Ym1pdFxuICAgICAgICB2LXRhYnNcbiAgICAgICAgICAgIHYtdGFiKCBAY2xpY2s9XCJmaWx0ZXJlZFR5cGUgPSAnYWxsJ1wiKSBBbGxcbiAgICAgICAgICAgIHYtdGFiKHYtZm9yPVwiKHR5cGUsIGluZGV4KSBpbiBhdmFpbGFibGVUeXBlQ29sbGVjdGlvblwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cImZpbHRlcmVkVHlwZSA9IHR5cGVcIikge3t0eXBlfX1cbiAgICAgICAgc3Bhbih2LWZvcj1cImZpbGUgaW4gZmlsZUNvbGxlY3Rpb25cIiB2LWlmPVwiZmlsZS50eXBlLmluY2x1ZGVzKGZpbHRlcmVkVHlwZSkgfHwgZmlsdGVyZWRUeXBlID09PSAnYWxsJ1wiKVxuICAgICAgICAgICAgaW1nKHYtaWY9XCJmaWxlLnR5cGUuaW5jbHVkZXMoJ2ltYWdlJylcIiBjbGFzcz1cInJmLXVwbG9hZC1wYW5lbC10aHVtYlwiIDpkYXRhLXNyYz1cImZpbGUuZmlsZVwiIDpzcmM9XCJgL3VwbG9hZGVkLyR7Z2V0VGh1bWIoZmlsZS5maWxlKX1gXCIpXG4gICAgICAgICAgICBkaXYodi1lbHNlKSB7e2ZpbGUuZmlsZX19XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJVcGxvYWRQYW5lbFwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlOiBudWxsLFxuICAgICAgZmlsZUNvbGxlY3Rpb246IFtdLFxuICAgICAgZmlsdGVyZWRUeXBlOiBcImFsbFwiXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoW1wiYWRkQWxlcnRcIl0pLFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIHRoaXMuZmlsZSk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL2ZpbGUvdXBsb2FkXCIsIGZvcm1EYXRhKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHRleHQ6IGBGaWxlIGFkZGVkICFgXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmZldGNoRmlsZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICB0ZXh0OiBgUmVxdWVzdCBmYWlsZWQuICBSZXR1cm5lZCBzdGF0dXMgb2YgJHtlcnJvcnN9YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFRodW1iKGltZykge1xuICAgICAgY29uc3QgW2ZpbGVOYW1lLCBleHRdID0gaW1nLnNwbGl0KFwiLlwiKTtcbiAgICAgIHJldHVybiBmaWxlTmFtZSArIFwiLXRodW1iLlwiICsgZXh0O1xuICAgIH0sXG4gICAgZmV0Y2hGaWxlcygpIHtcbiAgICAgIGF4aW9zKFwiL2ZpbGUvbGlzdFwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5maWxlQ29sbGVjdGlvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgYXZhaWxhYmxlVHlwZUNvbGxlY3Rpb24oKSB7XG4gICAgICBsZXQgdHlwZUNvbGxlY3Rpb24gPSB0aGlzLmZpbGVDb2xsZWN0aW9uLm1hcChcbiAgICAgICAgaXRlbSA9PiBpdGVtLnR5cGUuc3BsaXQoXCIvXCIpWzFdXG4gICAgICApO1xuICAgICAgdHlwZUNvbGxlY3Rpb24gPSBuZXcgU2V0KHR5cGVDb2xsZWN0aW9uKTtcbiAgICAgIHJldHVybiB0eXBlQ29sbGVjdGlvbjtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5mZXRjaEZpbGVzKCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXBsb2FkUGFuZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzY2U1YzM5Jmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwbG9hZFBhbmVsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBsb2FkUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZXRpZW5uZXJvdWdlL1dlYnN0b3JtUHJvamVjdHMvcmZDbGVhbi9yb3VnZUZyYW1ld29yay9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczM2NlNWMzOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczM2NlNWMzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczM2NlNWMzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXBsb2FkUGFuZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzY2U1YzM5Jmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzY2U1YzM5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAvVWkvQ29tcG9uZW50cy91cGxvYWRQYW5lbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwicmYtdXBsb2FkLXBhbmVsXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidi1maWxlLWlucHV0XCIsIHtcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmZpbGUgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJ2LWJ0blwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH0gfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidi10YWJzXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10YWJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyZWRUeXBlID0gXCJhbGxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBbGxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmF2YWlsYWJsZVR5cGVDb2xsZWN0aW9uLCBmdW5jdGlvbih0eXBlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInYtdGFiXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXJlZFR5cGUgPSB0eXBlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0eXBlKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fbChfdm0uZmlsZUNvbGxlY3Rpb24sIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGZpbGUudHlwZS5pbmNsdWRlcyhfdm0uZmlsdGVyZWRUeXBlKSB8fFxuICAgICAgICAgIF92bS5maWx0ZXJlZFR5cGUgPT09IFwiYWxsXCJcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIGZpbGUudHlwZS5pbmNsdWRlcyhcImltYWdlXCIpXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJmLXVwbG9hZC1wYW5lbC10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1zcmNcIjogZmlsZS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvdXBsb2FkZWQvXCIgKyBfdm0uZ2V0VGh1bWIoZmlsZS5maWxlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoZmlsZS5maWxlKSldKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==