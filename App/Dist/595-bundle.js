(self.webpackChunkjavascript_development_environment=self.webpackChunkjavascript_development_environment||[]).push([[595],{4098:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(4015),a=n.n(o),s=n(3645),r=n.n(s)()(a());r.push([t.id,"\n#rf-logo[data-v-671342c6] {\n  height: 100%;\n}\n.toolbar-container[data-v-671342c6] .v-toolbar__content {\n  padding-left: 0;\n}\n.toolbar-container[data-v-671342c6] .v-navigation-drawer {\n  z-index: 10000;\n}\n.subpanels[data-v-671342c6] {\n  width: 50px;\n}\n.toolbar-section[data-v-671342c6] {\n  display: flex;\n  align-items: center;\n  border-top: 10px solid;\n  position: relative;\n  flex: 50%;\n}\n.toolbar-section-title[data-v-671342c6] {\n  top: -15px;\n  left: 0;\n  position: absolute;\n  color: #fff;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.subpanels.__open[data-v-671342c6] {\n  width: 300px;\n}\n#rf-toolbar.mini[data-v-671342c6] {\n    width: 50px;\n}\n#rf-toolbar[data-v-671342c6] {\n  background-color: #fff;\n  height: 48px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  box-shadow: #aaa 0 0 5px;\n  z-index: 9999;\n}\n.toolbar-save-button[data-v-671342c6] {\n  margin-left: auto !important;\n  margin-right: 10px;\n}\n.horizontal-navigation-drawer.opened[data-v-671342c6] {\n    top: 48px;\n}\n.horizontal-navigation-drawer[data-v-671342c6] {\n  top: -120px;\n  position: fixed;\n  z-index: 100000;\n  left: 0px;\n  width: 100%;\n  transition: top 0.2s ease;\n  box-shadow: #ddd 0 5px 5px;\n  background: #fff;\n}\n","",{version:3,sources:["webpack://./App/Ui/Components/adminToolBar.vue"],names:[],mappings:";AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,UAAU;EACV,OAAO;EACP,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;AACA;IACI,WAAW;AACf;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;EACb,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;AACA;IACI,SAAS;AACb;AACA;EACE,WAAW;EACX,eAAe;EACf,eAAe;EACf,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,0BAA0B;EAC1B,gBAAgB;AAClB",sourcesContent:["\n#rf-logo[data-v-671342c6] {\n  height: 100%;\n}\n.toolbar-container[data-v-671342c6] .v-toolbar__content {\n  padding-left: 0;\n}\n.toolbar-container[data-v-671342c6] .v-navigation-drawer {\n  z-index: 10000;\n}\n.subpanels[data-v-671342c6] {\n  width: 50px;\n}\n.toolbar-section[data-v-671342c6] {\n  display: flex;\n  align-items: center;\n  border-top: 10px solid;\n  position: relative;\n  flex: 50%;\n}\n.toolbar-section-title[data-v-671342c6] {\n  top: -15px;\n  left: 0;\n  position: absolute;\n  color: #fff;\n  font-size: 15px;\n  text-transform: uppercase;\n}\n.subpanels.__open[data-v-671342c6] {\n  width: 300px;\n}\n#rf-toolbar.mini[data-v-671342c6] {\n    width: 50px;\n}\n#rf-toolbar[data-v-671342c6] {\n  background-color: #fff;\n  height: 48px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  box-shadow: #aaa 0 0 5px;\n  z-index: 9999;\n}\n.toolbar-save-button[data-v-671342c6] {\n  margin-left: auto !important;\n  margin-right: 10px;\n}\n.horizontal-navigation-drawer.opened[data-v-671342c6] {\n    top: 48px;\n}\n.horizontal-navigation-drawer[data-v-671342c6] {\n  top: -120px;\n  position: fixed;\n  z-index: 100000;\n  left: 0px;\n  width: 100%;\n  transition: top 0.2s ease;\n  box-shadow: #ddd 0 5px 5px;\n  background: #fff;\n}\n"],sourceRoot:""}]);const i=r},5595:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>L});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar-container"},[n("div",{attrs:{id:"rf-toolbar"}},[n("img",{attrs:{src:"/public/svg/rflogo.svg",id:"rf-logo"},on:{click:function(e){return t.toggleBar()}}}),t.displayToolbar?n("div",{staticClass:"toolbar-section",attrs:{id:"rf-toolbar--design"}},[n("div",{staticClass:"toolbar-section-title"},[t._v("Design")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"",outlined:"css"!==t.openedPanel,depressed:"css"===t.openedPanel,"x-small":""},on:{click:function(e){return t.openPanel("css")}}},[t._v("CSS")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"",outlined:"typography"!==t.openedPanel,depressed:"typography"===t.openedPanel,"x-small":""},on:{click:function(e){return t.openPanel("typography")}}},[t._v("Typography")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:!t.editLayout,outlined:!t.editLayout,depressed:t.editLayout,"x-small":""},on:{click:function(e){return t.openPanel("colors")}}},[t._v("Colors")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"",outlined:"ratio"!==t.openedPanel,depressed:"ratio"===t.openedPanel,"x-small":""},on:{click:function(e){return t.openPanel("ratio")}}},[t._v("Ratio & sizes")]),n("div",{staticClass:"toolbar-save-button"},[n("v-btn",{staticClass:"ml-2 toolbar-save-button",attrs:{"data-jest":"add-common-row",small:""},on:{click:t.saveStyleSet}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-content-save")])],1),n("v-btn",{staticClass:"ml-2 toolbar-save-button",attrs:{"data-jest":"add-common-row",small:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-cog-outline")])],1)],1)],1):t._e(),t.displayToolbar?n("div",{staticClass:"toolbar-section",attrs:{id:"rf-toolbar--structure"}},[n("div",{staticClass:"toolbar-section-title"},[t._v("Data & Structure")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"upload"!==t.openedPanel,outlined:"upload"!==t.openedPanel,depressed:"upload"!==t.openedPanel,"x-small":""},on:{click:function(e){return t.openPanel("upload")}}},[t._v("Uploads")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"",outlined:!t.editCommonLayout,depressed:t.editCommonLayout,"x-small":""},on:{click:function(e){t.editCommonLayout=!t.editCommonLayout,t.editLayout=!1,t.openedPanel=""}}},[t._v("Layout")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"",outlined:"models"!==t.openedPanel,depressed:"models"===t.openedPanel,"x-small":""},on:{click:function(e){return t.openPanel("models")}}},[t._v("Models")]),n("v-btn",{staticClass:"ml-2",attrs:{dark:"",outlined:"css"!==t.openedPanel,depressed:"css"!==t.openedPanel,"x-small":""},on:{click:function(e){return t.openPanel("users")}}},[t._v("Users")]),n("v-btn",{staticClass:"rf-common-layout--save ml-2 toolbar-save-button",attrs:{"data-jest":"add-common-row",small:""},on:{click:t.saveDataAndStructure}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-content-save")])],1)],1):t._e()]),n("v-navigation-drawer",{attrs:{value:"css"===t.openedPanel,fixed:"",width:"450",right:""}},[n("css-panel-selector")],1),n("v-navigation-drawer",{attrs:{value:"ratio"===t.openedPanel,fixed:"",width:"450",right:""}},[n("css-panel-ratio")],1),n("v-navigation-drawer",{attrs:{value:"colors"===t.openedPanel,fixed:"",width:"auto",right:""}},[n("css-panel-color")],1),n("v-navigation-drawer",{attrs:{value:"upload"===t.openedPanel,right:"",fixed:"",width:"300"}},[n("upload-panel")],1),n("v-navigation-drawer",{staticClass:"rf-vertical-panel --structure",attrs:{value:"models"===t.openedPanel,right:"",fixed:"",width:"400","hide-overlay":""}},[n("model-panel"),n("v-btn",{staticClass:"rf-settings--save-button_structure float-right mr-6",attrs:{small:""},on:{click:t.saveDataAndStructure}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-content-save")])],1)],1),n("div",{staticClass:"horizontal-navigation-drawer",class:{opened:"typography"===t.openedPanel}},[n("css-panel-typography")],1),t._e()],1)};o._withStripped=!0,n(5666),n(6992),n(1539),n(8674),n(8783),n(3948),n(1058),n(7941),n(2526),n(7327),n(5003),n(4747),n(9337);var a=n(9669),s=n.n(a),r=n(8917),i=n(179),l=n(629);function c(t,e,n,o,a,s,r){try{var i=t[s](r),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(o,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var s=t.apply(e,n);function r(t){c(s,o,a,r,i,"next",t)}function i(t){c(s,o,a,r,i,"throw",t)}r(void 0)}))}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const f={components:{uploadPanel:function(){return Promise.all([n.e(912),n.e(166)]).then(n.bind(n,6166))},modelPanel:function(){return Promise.all([n.e(817),n.e(306)]).then(n.bind(n,9306))},cssPanelSelector:function(){return n.e(457).then(n.bind(n,9457))},cssPanelColor:function(){return Promise.all([n.e(593),n.e(912),n.e(659)]).then(n.bind(n,3659))},cssPanelRatio:function(){return n.e(823).then(n.bind(n,7823))},cssPanelTypography:function(){return n.e(198).then(n.bind(n,198))},VNavigationDrawer:n(1865).Z},props:{isLogged:{type:Boolean,default:!1}},data:function(){return{displayToolbar:!0,openedPanel:""}},computed:p(p({},(0,l.Se)(["settings"])),{},{editCommonLayout:{get:function(){return this.$store.state.admin.editCommonLayout},set:function(t){this.$store.commit("editCommonLayout",t)}},editLayout:{get:function(){return this.$store.state.admin.editLayout},set:function(t){this.$store.commit("editLayout",t)}},styleSet:{get:function(){return this.$store.getters.styleSet},set:function(t){this.$store.commit("styleSet",t)}}}),mounted:function(){this.applyStyleSet(this.styleSet),this.$store.commit("styleSetLoaded",!0),this.triggerNewStyle(),this.getAllStyleSet(),this.displayToolbar&&document.querySelector("#rf-vue-container").classList.add("toolbar-open")},methods:p(p({},(0,l.nv)(["triggerNewStyle","addAlert","awaitConfirmation"])),{},{openPanel:function(t){t===this.openedPanel?this.openedPanel="":this.openedPanel=t,this.editCommonLayout=!1,this.editLayout=!1},getAllStyleSet:function(){var t=this;s().get("/settingapi/styleset/all").then((function(e){t.styleSetCollection=e.data})).catch((function(e){t.addAlert({type:"error",text:"Request failed.  Returned status of ".concat(e)})}))},setOpenPanel:function(t){this.openPanel!==t?this.openPanel=t:this.openPanel=""},toggleBar:function(){this.displayToolbar?(this.displayToolbar=!1,document.querySelector("#rf-vue-container").classList.remove("toolbar-open")):(this.displayToolbar=!0,document.querySelector("#rf-vue-container").classList.add("toolbar-open"))},deleteStyleSet:function(){var t=this;return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.awaitConfirmation({text:"Are you sure you want to delete this style set ?",type:"warning"});case 2:s().delete("/settingapi/".concat(t.styleSet.id)).then((function(){t.addAlert({type:"success",text:"This style set  was deleted"}),t.getAllStyleSet(),t.applyStyleSet(t.styleSetCollection[0]),document.getElementById("_admin-form-ext-submit").click()})).catch((function(e){t.addAlert({type:"error",text:e})}));case 3:case"end":return e.stop()}}),e)})))()},saveNewStyleSet:function(){var t=this,e=(0,r.x0)(),n=this.styleSet.id;this.styleSet.id=e,s().post("/settingapi/styleset",this.styleSet).then((function(){t.addAlert({type:"success",text:"".concat(t.styleSet.setName," saved successfully")}),document.getElementById("_admin-form-ext-submit").click()})).catch((function(e){t.addAlert({type:"error",text:"Request failed.  Returned status of ".concat(e)}),t.styleSet.id=n})),this.getAllStyleSet()},saveStyleSet:function(){var t=this;return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.awaitConfirmation({text:"Are you sure you want to overwrite this style set ?",type:"warning"});case 2:s().put("/settingapi/styleset/"+t.styleSet.id,t.styleSet).then((function(){t.addAlert({type:"success",text:"Style Set saved successfully"}),t.getAllStyleSet(),t.toggleIndex("cssPanelIndex"),document.getElementById("_admin-form-ext-submit").click()})).catch((function(e){t.addAlert({type:"error",text:"Request failed.  Returned status of ".concat(e)})}));case 3:case"end":return e.stop()}}),e)})))()},applyStyleSet:function(t,e){this.styleSet=t;var n=new i.n(t.dominant);n.generate(t.colorParameterCollection,parseInt(t.variationLightAmt),parseInt(t.variationSatAmt)),this.$store.commit("loaded",!0),this.$store.commit("colorSet",n),this.$store.commit("styleSet",t),e&&e()},saveDataAndStructure:function(){var t=this;s().put("/settingapi/",this.settings).then((function(){t.$store.dispatch("addAlert",{type:"success",text:"The layout have been updated"})})).catch((function(e){t.$store.dispatch("addAlert",{type:"error",text:"There was a problem : ".concat(e)})}))}}),created:function(){this.$store.commit("isLogged",this.isLogged)}};var v=n(3379),m=n.n(v),h=n(7795),y=n.n(h),b=n(569),g=n.n(b),C=n(3565),x=n.n(C),w=n(9216),S=n.n(w),P=n(4589),E=n.n(P),B=n(4098),k={};k.styleTagTransform=E(),k.setAttributes=x(),k.insert=g().bind(null,"head"),k.domAPI=y(),k.insertStyleElement=S(),m()(B.Z,k),B.Z&&B.Z.locals&&B.Z.locals;var _=(0,n(1900).Z)(f,o,[],!1,null,"671342c6",null);_.options.__file="App/Ui/Components/adminToolBar.vue";const L=_.exports}}]);