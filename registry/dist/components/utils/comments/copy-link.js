!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/comments/copy-link"]=t():e["utils/comments/copy-link"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={206:e=>{e.exports=coreApis.componentApis.utils.commentApis}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>c[e]=()=>o[e]));return c.default=()=>o,n.d(i,c),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.d(i,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.utils,o=coreApis.utils.urls,r=(0,e.defineComponentMetadata)({name:"copyCommentsLink",displayName:"复制评论链接",description:{"zh-CN":"开启后, 可在每条评论的菜单中选择复制链接."},entry:async()=>{const{forEachCommentItem:e,addMenuItem:r}=await Promise.resolve().then(n.t.bind(n,206,23));e({added:e=>{const n=e=>{e.forEach((e=>{r(e,{className:"copy-link",text:"复制链接",action:async()=>{const r=(e=>{if(document.URL.match(/\/\/t\.bilibili\.com\/(\d+)/))return"";if(o.feedsUrls.every((e=>!(0,t.matchUrlPattern)(e))))return"";let r=e;for(;null!==r&&r!==document.body;){if(r.hasAttribute("data-did"))return`https://t.bilibili.com/${r.getAttribute("data-did")}`;r=r.parentElement}return""})(e.element)||document.URL.replace(location.hash,"");await navigator.clipboard.writeText(`${r}#reply${e.id}`)}})}))};n([e,...e.replies]),e.onRepliesUpdate=e=>n(e)}})},tags:[componentsTags.utils],commitHash:"99c2bb848fec11c60202d7da9e2f56302d194910",coreVersion:"2.7.2"})})(),i=i.component})()));