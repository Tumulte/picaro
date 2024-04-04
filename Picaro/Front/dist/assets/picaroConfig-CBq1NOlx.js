import{P as O,h as R,p as L,r as V,i as N,q as k,C as P,D as q,E as w,z,g as C,M as G,G as j,u as H,H as J,_ as K,j as r,a as n,w as l,I as h,k as d,F as m,l as x,f as S,t as b,b as g,B as Q,J as W,A as E,v as X,o,c as Y,K as T,e as p}from"./index-WjlegVn6.js";import{V as U,a as Z}from"./VCard-BDYUud8B.js";const $={components:{PicInput:O},emits:["reloadSettings"],setup(u,{emit:a}){const _=R(),e=L(),s=V("noApp"),A=V(""),c=V("vue-ts"),t=H(),v=z(),F=N(()=>e.allSettings),f=N(()=>J(e.currentAppSettings));function I(){s.value="newApp",e.currentAppSettings=null}k(()=>e.currentAppSettings,()=>{e.currentAppSettings&&(s.value="selectedApp")}),e.currentAppSettings&&(s.value="selectedApp"),k(()=>v.name,()=>{v.name==="newApp"&&(s.value="newApp")},{immediate:!0});function M(){C.post(`/api/setup/create/${A.value}/${c.value}`).then(i=>{var y;t.push({name:"app",params:{appId:(y=i.data)==null?void 0:y.appCreatedId}}),a("reloadSettings")})}function B(){_.awaitConfirmation({text:"Are you sure you want to delete the app ?",type:"warning"}).then(()=>{var i;C.delete(`/api/setup/delete/${(i=f.value)==null?void 0:i.applicationName}`).then(()=>{t.push({name:"index"}),a("reloadSettings")})}).catch(i=>{if(i!==G.PROMISE_USER_CANCELLED)throw new Error(i)})}function D(){j(f.value,e.currentAppSettings.applicationName),a("reloadSettings")}return{appFormState:s,newAppName:A,settings:F,settingsStore:e,currentSettings:f,newAppForm:I,createApp:M,route:v,newAppType:c,updateApp:D,deleteApp:B,v$:P({$autoDirty:!0})}},validations(){const u=q.withMessage("Only lowercase letters without spaces are allowed",a=>a===""||/^[a-z]+$/.test(a));return{title:{required:w},applicationName:{required:w,alpha:u},newAppName:{required:w,alpha:u}}}},ee={key:0,class:"pic-container"},te=d("h2",null," Select or create an application ",-1),ae={key:1,class:"pic-flex"},ne={class:"pic-container pic-aside"},le=d("h2",null," App List ",-1),oe={class:"pic-container"},ie={class:"pic-flex pic-between"};function re(u,a,_,e,s,A){const c=X("router-link");return!e.route.params.appId&&e.route.name!=="newApp"?(o(),r("div",ee,[n(h,null,{default:l(()=>[te]),_:1}),n(h,null,{default:l(()=>[(o(!0),r(m,null,x(e.settings,t=>(o(),Y(T,{key:t.applicationName},{default:l(()=>[n(U,{height:"100",title:t.applicationName,color:"primary",to:{name:"app",params:{appId:t.id}}},null,8,["title","to"])]),_:2},1024))),128)),n(T,null,{default:l(()=>[n(U,{height:"100",color:"grey",to:{name:"newApp"}},{default:l(()=>[n(Z,null,{default:l(()=>[p(" New App ")]),_:1})]),_:1})]),_:1})]),_:1})])):(o(),r("div",ae,[d("aside",ne,[le,(o(!0),r(m,null,x(e.settings,t=>(o(),r("div",{key:t.id},[n(c,{class:"pic-button--text",to:{name:"app",params:{appId:t.id}}},{default:l(()=>[p(b(t.applicationName),1)]),_:2},1032,["to"])]))),128)),n(S,{color:"primary",onClick:e.newAppForm},{default:l(()=>[p(" New App ")]),_:1},8,["onClick"])]),d("main",oe,[e.appFormState==="selectedApp"?(o(),r(m,{key:0},[d("h2",null,b(e.currentSettings.applicationName),1),n(g,{modelValue:e.currentSettings.title,"onUpdate:modelValue":a[0]||(a[0]=t=>e.currentSettings.title=t),validation:e.v$.title,label:"Title"},null,8,["modelValue","validation"]),n(g,{modelValue:e.currentSettings.applicationName,"onUpdate:modelValue":a[1]||(a[1]=t=>e.currentSettings.applicationName=t),validation:e.v$.applicationName,label:"Application name"},null,8,["modelValue","validation"]),n(g,{modelValue:e.currentSettings.messageTimeOut,"onUpdate:modelValue":a[2]||(a[2]=t=>e.currentSettings.messageTimeOut=t),validation:e.v$.messageTimeOut,label:"Message Timeout"},null,8,["modelValue","validation"]),n(Q,{modelValue:e.currentSettings.styleSet,"onUpdate:modelValue":a[3]||(a[3]=t=>e.currentSettings.styleSet=t),items:e.settingsStore.allStyleSets,label:"Style Set","item-title":"setName","item-value":"id"},null,8,["modelValue","items"]),n(W,{modelValue:e.currentSettings.devMode,"onUpdate:modelValue":a[4]||(a[4]=t=>e.currentSettings.devMode=t),type:"checkbox",label:"Dev mode"},null,8,["modelValue"]),d("div",ie,[n(S,{color:"primary",onClick:a[5]||(a[5]=t=>e.updateApp())},{default:l(()=>[p(" Update ")]),_:1}),n(S,{variant:"text",class:"pic-button--text",onClick:e.deleteApp},{default:l(()=>[p(" Delete ")]),_:1},8,["onClick"])])],64)):E("",!0),e.appFormState==="newApp"?(o(),r(m,{key:1},[n(g,{modelValue:e.newAppName,"onUpdate:modelValue":a[6]||(a[6]=t=>e.newAppName=t),validation:e.v$.newAppName,label:"App Name"},null,8,["modelValue","validation"]),n(S,{color:"primary",onClick:e.createApp},{default:l(()=>[p(" Create App ")]),_:1},8,["onClick"])],64)):E("",!0)])]))}const de=K($,[["render",re]]);export{de as default};
