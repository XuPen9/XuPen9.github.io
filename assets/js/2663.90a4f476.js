/*! For license information please see 2663.90a4f476.js.LICENSE.txt */
"use strict";(self.webpackChunkxweb=self.webpackChunkxweb||[]).push([[2663],{2663:(t,A,e)=>{e.r(A),e.d(A,{Toolbar:()=>w});const r="http://www.w3.org/1999/xlink",i={show:r,actuate:r,href:r};function n(t,A){let e;if("string"==typeof t)e=1;else{if("function"!=typeof t)throw new Error("Invalid VNode type");e=2}return{vtype:e,type:t,props:A}}const s=n;function o(t){return t.children}const h={isSvg:!1};function l(t,A){Array.isArray(A)||(A=[A]),(A=A.filter(Boolean)).length&&t.append(...A)}const c={className:"class",labelFor:"for"};function a(t,A,e,r){if(A=c[A]||A,!0===e)t.setAttribute(A,"");else if(!1===e)t.removeAttribute(A);else{const n=r?i[A]:void 0;void 0!==n?t.setAttributeNS(n,A,e):t.setAttribute(A,e)}}function v(t,A){return Array.isArray(t)?t.map((t=>v(t,A))).reduce(((t,A)=>t.concat(A)),[]):g(t,A)}function g(t,A=h){if(null==t||"boolean"==typeof t)return null;if(t instanceof Node)return t;if(2===(null==(e=t)?void 0:e.vtype)){const{type:e,props:r}=t;if(e===o){const t=document.createDocumentFragment();return r.children&&l(t,v(r.children,A)),t}return g(e(r),A)}var e;if((t=>"string"==typeof t||"number"==typeof t)(t))return document.createTextNode(`${t}`);if((t=>1===(null==t?void 0:t.vtype))(t)){let e;const{type:r,props:i}=t;if(A.isSvg||"svg"!==r||(A=Object.assign({},A,{isSvg:!0})),e=A.isSvg?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r),function(t,A,e){for(const r in A)if("key"!==r&&"children"!==r&&"ref"!==r)if("dangerouslySetInnerHTML"===r)t.innerHTML=A[r].__html;else if("innerHTML"===r||"textContent"===r||"innerText"===r||"value"===r&&["textarea","select"].includes(t.tagName)){const e=A[r];null!=e&&(t[r]=e)}else r.startsWith("on")?t[r.toLowerCase()]=A[r]:a(t,r,A[r],e.isSvg)}(e,i,A),i.children){let t=A;A.isSvg&&"foreignObject"===r&&(t=Object.assign({},t,{isSvg:!1}));const n=v(i.children,t);null!=n&&l(e,n)}const{ref:n}=i;return"function"==typeof n&&n(e),e}throw new Error("mount: Invalid Vnode!")}function u(t){return g(t)}const d="mm-toolbar-item";function f({title:t,content:A,onClick:e}){return n("div",{className:d,title:t,onClick:e,children:A})}let R;const m=class t{constructor(){this.showBrand=!0,this.registry={},this.el=u(n("div",{className:"mm-toolbar"})),this.items=[...t.defaultItems],this.register({id:"zoomIn",title:"Zoom in",content:t.icon("M9 5v4h-4v2h4v4h2v-4h4v-2h-4v-4z"),onClick:this.getHandler((t=>t.rescale(1.25)))}),this.register({id:"zoomOut",title:"Zoom out",content:t.icon("M5 9h10v2h-10z"),onClick:this.getHandler((t=>t.rescale(.8)))}),this.register({id:"fit",title:"Fit window size",content:t.icon("M4 7h2v-2h2v4h-4zM4 13h2v2h2v-4h-4zM16 7h-2v-2h-2v4h4zM16 13h-2v2h-2v-4h4z"),onClick:this.getHandler((t=>t.fit()))}),this.register({id:"recurse",title:"Toggle recursively",content:t.icon("M16 4h-12v12h12v-8h-8v4h2v-2h4v4h-8v-8h10z"),onClick:t=>{var A;const e=t.target.closest(`.${d}`),r=null==e?void 0:e.classList.toggle("active");null==(A=this.markmap)||A.setOptions({toggleRecursively:r})}}),this.render()}static create(A){const e=new t;return e.attach(A),e}static icon(t,A={}){return A={stroke:"none",fill:"currentColor","fill-rule":"evenodd",...A},n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:n("path",{...A,d:t})})}setBrand(t){return this.showBrand=t,this.render()}register(t){this.registry[t.id]=t}getHandler(t){var A;return A=t,t=async(...t)=>{if(!R){R=A(...t);try{await R}finally{R=void 0}}},()=>{this.markmap&&t(this.markmap)}}setItems(t){return this.items=[...t],this.render()}attach(t){this.markmap=t}render(){const t=this.items.map((t=>{if("string"==typeof t){const A=this.registry[t];return A||console.warn(`[markmap-toolbar] ${t} not found`),A}return t})).filter(Boolean);for(;this.el.firstChild;)this.el.firstChild.remove();return this.el.append(u(s(o,{children:[this.showBrand&&s("a",{className:"mm-toolbar-brand",href:"https://markmap.js.org/",children:[n("img",{alt:"markmap",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACoFBMVEUAAAAAAAD//wAAAACAgAD//wAAAABVVQCqqgBAQACAQACAgABmZgBtbQAAAABgQABgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFQAAAAAAAAAAAAAAAAAHAAARBQIdGAIYEwI/OgJYUQUfHQI+OgJDPgJJRARBPQRJQgRRSwRRTQRIQQRUTgRUUARZUgRSTQRPSQRjWgZORQRfWQZsZAhTTQRNRwRWUAZkXAZOSARUTgZPRwRRSQRoYwZWUQZWTgRbUwZmXQZoXghmXwdqYwdsYwdfVwVmXQdqYgdiWgVpYAl3bgl6cgl4cAqLggw8OAOWjA2Uig1OSAR2bQihlg55cAh5cAh6cQmMgwyOhAyUjA2QhQ2Uiw2Viw2soBCflA+voxGwpRGhlg+hlg+snxGroBGjmBCpnBC0pxKyphKxpRG2qhK0qBK5rBK5rBP/7h3/8B7/8R3/8h3/8R7/8h786x397B3+7R3EtxT66Rz66hz76hz86xz96xz97Bz+7Rz45xz56Bz76hz97Bz97B3MvRX15Rv25Rv45xz66Rz76hz97B3+7R3IuxX05Bv15Bv25Rz56Bz66Ry/sxPAsxPCtRTCthTNvxbZyxfczxfi0xjl1Rnn2Bnr2xrr3Brs3Rru3Rru3xrv3hrw3xrx4Bvx4Rvy4hvz4hvz4xv04xv05Bv14xv15Bv15Rv25Bv25Rv25Rz25hv35hv35xv45xv45xz55xz56Bv56Bz66Rv66Rz76Rv76Rz76hz86hv86xz+7h3/7R3/7h3/7x3/8B3/8B7/8R3/8R4Yqhj5AAAAq3RSTlMAAQECAgIDAwMEBAQFBwgICAwQERITFRYXGBkbHB0eHyQlJyguNTg8RUZISU5PV2FiY2RlZmdqa2xubnJzc3R2d3d3eXl5eXp7fH1+gIGCgoKDg4SEhIWGh4eHiYmJjIyMjZSUlJ+sra+zt7i4uru8ztHV1tbW2d7g4OHi4uPk5ufp7Ozv9fX29/f3+Pj6+vr7+/v7+/v7+/z8/Pz8/f39/f39/f3+/v7+/v7K6J1dAAACHklEQVQ4y2NgwAoYWdi5uLm5GXHIcrLCmMzYpDmAhKCKjoGtp40MFhVsDAwSxmmVEzZu2XvqSLkchjw3g0h445Ybd24vmTN1Usd5X3R5DgaNqgN35sycP2/GxMkTMRVwMOivvtO3YsWUm3duX790EcMKdgbNNXdnnJh1+9T6ipzU+FB0RzIyiFYB5WdfaElUF8TmTQ6GwH39J2bvypMHcpg4MAKKkUGo5s6KWRfyGRh4WJClGEGBCgS8DLobliy/3abMwM8NBYwQjXDgf3ryxOspyKYyg+RFTFwdnYDAzbrw+oLFm9Ot3J3AwNHFTBykQrhg++GDh48cOXzk4P6VZy8s230MyAGCwwcP7iyRBJpiur1n8hQIWHX27NkLi6bAwOSuow5ABeY7OydOhoCFIAULe6E8YFCf8QAqEC86evniZTA4tfLsuRXHr0E4ly9ePF0uC3KnpH1MZBQQxPoVgxyZ5RMdBQaRMc6yIEcihWbQGaA3k9G8CfQoN0pAtSoxCMACihk9qGtBQZ2LHtRIkRUMiqwd2TJADiswsrjQlAGju/o+MLrPNkWo8mFN1ewMWmvBCebQ0rKMJG87QzF0FRwMRuvugpLcrXu3rp7Zs61UCtMZ2nVHbk+fMX/+jMmTp3Sf9MLiULG45q237txaPG3yxPYrYQzYMo60RWbD3E27Ll68Uq+AK+uJqOlZBiSEKGLNnMA0iDfzwrI/NKgBOivk9piPdtUAAAAASUVORK5CYII="}),n("span",{children:"markmap"})]}),t.map(f)]}))),this.el}};m.defaultItems=["zoomIn","zoomOut","fit","recurse"];let w=m}}]);