"use strict";(self.webpackChunkxblog=self.webpackChunkxblog||[]).push([[7355],{7355:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(2402),a=t(3073),r=t(9271),u=t(953),i=t(641),n=t(8278),o=t(6883),h=t(656);const c=["/","/en/","/zh_guide/","/zh_index/","/zh_index/disable.html","/zh_index/encrypt.html","/zh_index/layout.html","/zh_index/markdown.html","/zh_index/page.html","/en/en_guide/","/en/en_index/","/en/en_index/disable.html","/en/en_index/encrypt.html","/en/en_index/layout.html","/en/en_index/markdown.html","/en/en_index/page.html","/zh_guide/bar/","/zh_guide/bar/baz.html","/zh_guide/foo/","/zh_guide/foo/ray.html","/en/en_guide/bar/","/en/en_guide/bar/baz.html","/en/en_guide/foo/","/en/en_guide/foo/ray.html","/404.html"];t(6039);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),d=e=>c[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:p}=h.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,n.rd)(),c=(0,n.Zv)(),m=(0,s.s5)(h.a),{enabled:g,addQueryHistory:_,queryHistory:x,removeQueryHistory:f}=(()=>{const{queryHistoryCount:e}=h.s,l=e>0;return{enabled:l,queryHistory:v,addQueryHistory:t=>{l&&(v.value=Array.from(new Set([t,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:H,resultHistory:b,addResultHistory:k,removeResultHistory:Q}=(()=>{const e=p>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:d(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,p-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),R=g||H,w=(0,u.lW)(e,"queries"),{results:z,isSearching:C}=(e=>{const l=(0,h.u)(),t=(0,n.Zv)(),s=(0,n.BV)(),a=(0,u.KR)(0),o=(0,i.EW)((()=>a.value>0)),c=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:n}=(0,h.c)(),o=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:n,suggestionsFilter:o,...h}=l.value;r?(a.value+=1,u(e.join(" "),t.value,h).then((e=>i(e,r,t.value,s.value))).then((e=>{a.value-=1,c.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(c.value=[])}))):c.value=[]}),h.s.searchDelay-h.s.suggestDelay);(0,i.wB)([e,t],(([e])=>o(e)),{immediate:!0}),(0,i.hi)((()=>{n()}))})),{isSearching:o,results:c}})(w),q=(0,u.Kh)({isQuery:!0,index:0}),S=(0,u.KR)(0),E=(0,u.KR)(0),A=(0,i.EW)((()=>R&&(x.value.length>0||b.value.length>0))),W=(0,i.EW)((()=>z.value.length>0)),D=(0,i.EW)((()=>z.value[S.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),j=e=>{if("customField"===e.type){const l=h.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[c.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",T(e))))},M=()=>{S.value=0,E.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(W.value){if("ArrowUp"===s.key)E.value>0?E.value-=1:(S.value=S.value>0?S.value-1:z.value.length-1,E.value=D.value.contents.length-1);else if("ArrowDown"===s.key)E.value<D.value.contents.length-1?E.value+=1:(S.value=S.value<z.value.length-1?S.value+1:0,E.value=0);else if("Enter"===s.key){const l=D.value.contents[E.value];_(e.queries.join(" ")),k(l),t.push(d(l)),M()}}else if(H)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=q;0===l?(q.isQuery=!e,q.index=e?b.value.length-1:x.value.length-1):q.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=q;l===(e?x.value.length-1:b.value.length-1)?(q.isQuery=!e,q.index=0):q.index=l+1})();else if("Enter"===s.key){const{index:e}=q;q.isQuery?(l("updateQuery",x.value[e]),s.preventDefault()):(t.push(b.value[e].link),M())}})),(0,i.wB)([S,E],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!W.value:!A.value}],id:"search-pro-results"},e.queries.length?C.value?(0,i.h)(o.S,{hint:m.value.searching}):W.value?(0,i.h)("ul",{class:"search-pro-result-list"},z.value.map((({title:l,contents:t},s)=>{const a=S.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&E.value===t;return(0,i.h)(n.Wt,{to:d(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{_(e.queries.join(" ")),k(l),M()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?o.T:"heading"===l.type?o.H:o.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",j(l))])]))}))])}))):m.value.emptyResult:R?A.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),x.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:q.isQuery&&q.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),f(t)}})])))])):null,H?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),b.value.map(((e,l)=>(0,i.h)(n.Wt,{to:e.link,class:["search-pro-result-item",{active:!q.isQuery&&q.index===l}],onClick:()=>{M()}},(()=>[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>T(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),Q(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);