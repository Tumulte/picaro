(self.webpackChunkjavascript_development_environment=self.webpackChunkjavascript_development_environment||[]).push([[279],{2778:(e,t,n)=>{"use strict";n.d(t,{mD:()=>b,NE:()=>c,uo:()=>k,al:()=>a,Y_:()=>f,xb:()=>v,X0:()=>w,QK:()=>h,td:()=>y,_M:()=>s,o:()=>d,N0:()=>g,uJ:()=>C,ym:()=>A});var r=n(1081),o=n(3263),i=n(6922);function c(e,t){return!e.selection.empty&&(t&&t(e.tr.deleteSelection().scrollIntoView()),!0)}function a(e,t,n){var o=e.selection.$cursor;if(!o||(n?!n.endOfTextblock("backward",e):o.parentOffset>0))return!1;var c=p(o);if(!c){var a=o.blockRange(),s=a&&(0,r.k9)(a);return null!=s&&(t&&t(e.tr.lift(a,s).scrollIntoView()),!0)}var f=c.nodeBefore;if(!f.type.spec.isolating&&x(e,c,t))return!0;if(0==o.parent.content.size&&(l(f,"end")||i.qv.isSelectable(f))){if(t){var d=e.tr.deleteRange(o.before(),o.after());d.setSelection(l(f,"end")?i.Y1.findFrom(d.doc.resolve(d.mapping.map(c.pos,-1)),-1):i.qv.create(d.doc,c.pos-f.nodeSize)),t(d.scrollIntoView())}return!0}return!(!f.isAtom||c.depth!=o.depth-1||(t&&t(e.tr.delete(c.pos-f.nodeSize,c.pos).scrollIntoView()),0))}function l(e,t,n){for(;e;e="start"==t?e.firstChild:e.lastChild){if(e.isTextblock)return!0;if(n&&1!=e.childCount)return!1}return!1}function s(e,t,n){var r=e.selection,o=r.$head,c=o;if(!r.empty)return!1;if(o.parent.isTextblock){if(n?!n.endOfTextblock("backward",e):o.parentOffset>0)return!1;c=p(o)}var a=c&&c.nodeBefore;return!(!a||!i.qv.isSelectable(a)||(t&&t(e.tr.setSelection(i.qv.create(e.doc,c.pos-a.nodeSize)).scrollIntoView()),0))}function p(e){if(!e.parent.type.spec.isolating)for(var t=e.depth-1;t>=0;t--){if(e.index(t)>0)return e.doc.resolve(e.before(t+1));if(e.node(t).type.spec.isolating)break}return null}function f(e,t,n){var r=e.selection.$cursor;if(!r||(n?!n.endOfTextblock("forward",e):r.parentOffset<r.parent.content.size))return!1;var o=u(r);if(!o)return!1;var c=o.nodeAfter;if(x(e,o,t))return!0;if(0==r.parent.content.size&&(l(c,"start")||i.qv.isSelectable(c))){if(t){var a=e.tr.deleteRange(r.before(),r.after());a.setSelection(l(c,"start")?i.Y1.findFrom(a.doc.resolve(a.mapping.map(o.pos)),1):i.qv.create(a.doc,a.mapping.map(o.pos))),t(a.scrollIntoView())}return!0}return!(!c.isAtom||o.depth!=r.depth-1||(t&&t(e.tr.delete(o.pos,o.pos+c.nodeSize).scrollIntoView()),0))}function d(e,t,n){var r=e.selection,o=r.$head,c=o;if(!r.empty)return!1;if(o.parent.isTextblock){if(n?!n.endOfTextblock("forward",e):o.parentOffset<o.parent.content.size)return!1;c=u(o)}var a=c&&c.nodeAfter;return!(!a||!i.qv.isSelectable(a)||(t&&t(e.tr.setSelection(i.qv.create(e.doc,c.pos)).scrollIntoView()),0))}function u(e){if(!e.parent.type.spec.isolating)for(var t=e.depth-1;t>=0;t--){var n=e.node(t);if(e.index(t)+1<n.childCount)return e.doc.resolve(e.after(t+1));if(n.type.spec.isolating)break}return null}function v(e,t){var n=e.selection,o=n.$from,i=n.$to,c=o.blockRange(i),a=c&&(0,r.k9)(c);return null!=a&&(t&&t(e.tr.lift(c,a).scrollIntoView()),!0)}function h(e,t){var n=e.selection,r=n.$head,o=n.$anchor;return!(!r.parent.type.spec.code||!r.sameParent(o)||(t&&t(e.tr.insertText("\n").scrollIntoView()),0))}function m(e){for(var t=0;t<e.edgeCount;t++){var n=e.edge(t).type;if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}function k(e,t){var n=e.selection,r=n.$head,o=n.$anchor;if(!r.parent.type.spec.code||!r.sameParent(o))return!1;var c=r.node(-1),a=r.indexAfter(-1),l=m(c.contentMatchAt(a));if(!c.canReplaceWith(a,a,l))return!1;if(t){var s=r.after(),p=e.tr.replaceWith(s,s,l.createAndFill());p.setSelection(i.Y1.near(p.doc.resolve(s),1)),t(p.scrollIntoView())}return!0}function b(e,t){var n=e.selection,r=n.$from,o=n.$to;if(n instanceof i.C1||r.parent.inlineContent||o.parent.inlineContent)return!1;var c=m(o.parent.contentMatchAt(o.indexAfter()));if(!c||!c.isTextblock)return!1;if(t){var a=(!r.parentOffset&&o.index()<o.parent.childCount?r:o).pos,l=e.tr.insert(a,c.createAndFill());l.setSelection(i.Bs.create(l.doc,a+1)),t(l.scrollIntoView())}return!0}function w(e,t){var n=e.selection.$cursor;if(!n||n.parent.content.size)return!1;if(n.depth>1&&n.after()!=n.end(-1)){var o=n.before();if((0,r.Ax)(e.doc,o))return t&&t(e.tr.split(o).scrollIntoView()),!0}var i=n.blockRange(),c=i&&(0,r.k9)(i);return null!=c&&(t&&t(e.tr.lift(i,c).scrollIntoView()),!0)}function g(e,t){var n,r=e.selection,o=r.$from,c=r.to,a=o.sharedDepth(c);return 0!=a&&(n=o.before(a),t&&t(e.tr.setSelection(i.qv.create(e.doc,n))),!0)}function y(e,t){return t&&t(e.tr.setSelection(new i.C1(e.doc))),!0}function x(e,t,n){var c,a,s=t.nodeBefore,p=t.nodeAfter;if(s.type.spec.isolating||p.type.spec.isolating)return!1;if(function(e,t,n){var o=t.nodeBefore,i=t.nodeAfter,c=t.index();return!(!(o&&i&&o.type.compatibleContent(i.type))||(!o.content.size&&t.parent.canReplace(c-1,c)?(n&&n(e.tr.delete(t.pos-o.nodeSize,t.pos).scrollIntoView()),0):!t.parent.canReplace(c,c+1)||!i.isTextblock&&!(0,r.Mn)(e.doc,t.pos)||(n&&n(e.tr.clearIncompatible(t.pos,o.type,o.contentMatchAt(o.childCount)).join(t.pos).scrollIntoView()),0)))}(e,t,n))return!0;var f=t.parent.canReplace(t.index(),t.index()+1);if(f&&(c=(a=s.contentMatchAt(s.childCount)).findWrapping(p.type))&&a.matchType(c[0]||p.type).validEnd){if(n){for(var d=t.pos+p.nodeSize,u=o.HY.empty,v=c.length-1;v>=0;v--)u=o.HY.from(c[v].create(null,u));u=o.HY.from(s.copy(u));var h=e.tr.step(new r.FC(t.pos-1,d,t.pos,d,new o.p2(u,1,0),c.length,!0)),m=d+2*c.length;(0,r.Mn)(h.doc,m)&&h.join(m),n(h.scrollIntoView())}return!0}var k=i.Y1.findFrom(t,1),b=k&&k.$from.blockRange(k.$to),w=b&&(0,r.k9)(b);if(null!=w&&w>=t.depth)return n&&n(e.tr.lift(b,w).scrollIntoView()),!0;if(f&&l(p,"start",!0)&&l(s,"end")){for(var g=s,y=[];y.push(g),!g.isTextblock;)g=g.lastChild;for(var x=p,A=1;!x.isTextblock;x=x.firstChild)A++;if(g.canReplace(g.childCount,g.childCount,x.content)){if(n){for(var C=o.HY.empty,I=y.length-1;I>=0;I--)C=o.HY.from(y[I].copy(C));n(e.tr.step(new r.FC(t.pos-y.length,t.pos+p.nodeSize,t.pos+A,t.pos+p.nodeSize-A,new o.p2(C,y.length,0),0,!0)).scrollIntoView())}return!0}}return!1}function A(e,t){return function(n,o){var i=n.selection,c=i.$from,a=i.$to,l=c.blockRange(a),s=l&&(0,r.nd)(l,e,t);return!!s&&(o&&o(n.tr.wrap(l,s).scrollIntoView()),!0)}}function C(e,t){return function(n,r){var o=n.selection,i=o.from,c=o.to,a=!1;return n.doc.nodesBetween(i,c,(function(r,o){if(a)return!1;if(r.isTextblock&&!r.hasMarkup(e,t))if(r.type==e)a=!0;else{var i=n.doc.resolve(o),c=i.index();a=i.parent.canReplaceWith(c,c+1,e)}})),!!a&&(r&&r(n.tr.setBlockType(i,c,e,t).scrollIntoView()),!0)}}function I(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return function(t,n,r){for(var o=0;o<e.length;o++)if(e[o](t,n,r))return!0;return!1}}var V=I(c,a,s),S=I(c,f,d),$={Enter:I(h,b,w,(function(e,t){var n=e.selection,o=n.$from,c=n.$to;if(e.selection instanceof i.qv&&e.selection.node.isBlock)return!(!o.parentOffset||!(0,r.Ax)(e.doc,o.pos)||(t&&t(e.tr.split(o.pos).scrollIntoView()),0));if(!o.parent.isBlock)return!1;if(t){var a=c.parentOffset==c.parent.content.size,l=e.tr;(e.selection instanceof i.Bs||e.selection instanceof i.C1)&&l.deleteSelection();var s=0==o.depth?null:m(o.node(-1).contentMatchAt(o.indexAfter(-1))),p=a&&s?[{type:s}]:null,f=(0,r.Ax)(l.doc,l.mapping.map(o.pos),1,p);if(p||f||!(0,r.Ax)(l.doc,l.mapping.map(o.pos),1,s&&[{type:s}])||(p=[{type:s}],f=!0),f&&(l.split(l.mapping.map(o.pos),1,p),!a&&!o.parentOffset&&o.parent.type!=s)){var d=l.mapping.map(o.before()),u=l.doc.resolve(d);o.node(-1).canReplaceWith(u.index(),u.index()+1,s)&&l.setNodeMarkup(l.mapping.map(o.before()),s)}t(l.scrollIntoView())}return!0})),"Mod-Enter":k,Backspace:V,"Mod-Backspace":V,Delete:S,"Mod-Delete":S,"Mod-a":y},M={"Ctrl-h":$.Backspace,"Alt-Backspace":$["Mod-Backspace"],"Ctrl-d":$.Delete,"Ctrl-Alt-Backspace":$["Mod-Delete"],"Alt-Delete":$["Mod-Delete"],"Alt-d":$["Mod-Delete"]};for(var B in $)M[B]=$[B];"undefined"!=typeof navigator?/Mac/.test(navigator.platform):"undefined"!=typeof os&&os.platform()}}]);