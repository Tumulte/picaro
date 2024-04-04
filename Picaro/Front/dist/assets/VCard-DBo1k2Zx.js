import{R as k,a9 as g,a5 as Q,T as f,a as n,b0 as I,N as S,b1 as u,$ as x,F as A,aQ as h,aR as p,aU as y,b2 as U,b3 as $,ac as z,b4 as G,b5 as J,b6 as K,ab as W,b7 as X,a0 as Y,b8 as Z,b9 as ee,ai as ae,ba as te,bb as ne,bc as de,a2 as ie,bd as le,ak as se,be as ce,bf as re,bg as ue,aq as ve,bh as oe,i as P,al as me,am as be,bi as ye,bj as ke,bk as ge}from"./index-LIgmtz16.js";const fe=k()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return Q({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=I("v-card-subtitle"),Ce=I("v-card-title"),Ve=S({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...g(),...x()},"VCardItem"),Ae=k()({name:"VCardItem",props:Ve(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),b=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(y,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(p,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),b&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(y,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(p,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=I("v-card-text"),pe=S({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...U(),...g(),...x(),...$(),...z(),...G(),...J(),...K(),...W(),...X(),...Y(),...Z(),...ee({variant:"elevated"})},"VCard"),Se=k()({name:"VCard",directives:{Ripple:ae},props:pe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=te(e),{borderClasses:l}=ne(e),{colorClasses:o,colorStyles:m,variantClasses:b}=de(e),{densityClasses:s}=ie(e),{dimensionStyles:d}=le(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:_}=ve(e),c=oe(e,t),N=P(()=>e.link!==!1&&c.isLink.value),r=P(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),j=!!(a.subtitle||e.subtitle!=null),E=F||j,M=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),w=E||O||M,H=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,T.value,B.value,L.value,_.value,b.value,e.class],style:[m.value,d.value,D.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&n(Ae,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(he,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(fe,null,{default:a.actions}),ge(r.value,"v-card")]}}),[[be("ripple"),r.value&&e.ripple]])}),{}}});export{Se as V,Ce as a};
