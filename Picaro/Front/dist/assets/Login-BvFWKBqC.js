import{d as p,r as n,c as i,w as u,V as c,u as V,o as f,a as t,b as r,e as v,f as g,g as w}from"./index-DxnugFQM.js";const k=p({__name:"Login",setup(x){const d=V(),e=n(""),a=n("");function m(){e.value&&a&&w.post("/api/auth/login",{username:e.value,password:a.value}).then(l=>{l.data&&(localStorage.setItem("accessToken",l.data.accessToken),d.push({path:"/admin"}))})}return(l,o)=>(f(),i(c,null,{default:u(()=>[t(r,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s),label:"Username"},null,8,["modelValue"]),t(r,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=s=>a.value=s),label:"Password",type:"password"},null,8,["modelValue"]),t(g,{onClick:m},{default:u(()=>[v(" Login ")]),_:1})]),_:1}))}});export{k as default};
