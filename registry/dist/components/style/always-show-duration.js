!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/always-show-duration"]=e():t["style/always-show-duration"]=e()}(globalThis,(()=>(()=>{var t,e,o={811:(t,e,o)=>{var r=o(355)((function(t){return t[1]}));r.push([t.id,".watchlater-card .duration,\n.time-group-item .duration,\n.favorite-card .duration,\n.video-card .duration {\n  opacity: 1 !important;\n}",""]),t.exports=r},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,o,r){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var n={};if(r)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(n[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&n[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),e.push(s))}},e}},23:(t,e,o)=>{var r=o(811);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var a=r[t]={id:t,exports:{}};return o[t](a,a.exports,n),a.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var a=Object.create(null);n.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var c=2&r&&o;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>o[t]));return i.default=()=>o,n.d(a,i),a},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";n.d(a,{component:()=>e});const t=coreApis.componentApis.styledComponent,e=(0,coreApis.componentApis.define.defineComponentMetadata)({...(0,t.toggleStyle)("alwaysShowDuration",(()=>Promise.resolve().then(n.t.bind(n,23,23)))),displayName:"总是显示视频时长",description:{"zh-CN":"使脚本展示的各种视频卡片中的时长无需鼠标经过也能一直显示."},tags:[componentsTags.video,componentsTags.style],commitHash:"e28b5088da06a9356fcb95be326d879d02b2c076",coreVersion:"2.6.1"})})(),a=a.component})()));