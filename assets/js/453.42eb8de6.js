"use strict";(self.webpackChunkxblog=self.webpackChunkxblog||[]).push([[453],{453:(t,e,n)=>{n.d(e,{diagram:()=>lt});var i=n(4067),r=n(6375),s=function(){var t=(0,r.a)((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),e=[1,9],n=[1,10],i=[1,5,10,12],s={trace:(0,r.a)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:(0,r.a)((function(t,e,n,i,r,s,o){var a=s.length-1;switch(r){case 7:let t=i.findOrCreateNode(s[a-4].trim().replaceAll('""','"')),e=i.findOrCreateNode(s[a-2].trim().replaceAll('""','"')),n=parseFloat(s[a].trim());i.addLink(t,e,n);break;case 8:case 9:case 11:this.$=s[a];break;case 10:this.$=s[a-1]}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:n},{1:[2,6],7:11,10:[1,12]},t(n,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(i,[2,8]),t(i,[2,9]),{19:[1,16]},t(i,[2,11]),{1:[2,1]},{1:[2,5]},t(n,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:n},{15:18,16:7,17:8,18:e,20:n},{18:[1,19]},t(n,[2,3]),{12:[1,20]},t(i,[2,10]),{15:21,16:7,17:8,18:e,20:n},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:(0,r.a)((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:(0,r.a)((function(t){var e=this,n=[0],i=[],s=[null],o=[],a=this.table,l="",h=0,c=0,u=0,f=o.slice.call(arguments,1),y=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);y.setInput(t,d.yy),d.yy.lexer=y,d.yy.parser=this,typeof y.yylloc>"u"&&(y.yylloc={});var g=y.yylloc;o.push(g);var _=y.options&&y.options.ranges;function k(){var t;return"number"!=typeof(t=i.pop()||y.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,r.a)((function(t){n.length=n.length-2*t,s.length=s.length-t,o.length=o.length-t}),"popStack"),(0,r.a)(k,"lex");for(var x,m,v,b,w,L,S,E,A,T={};;){if(v=n[n.length-1],this.defaultActions[v]?b=this.defaultActions[v]:((null===x||typeof x>"u")&&(x=k()),b=a[v]&&a[v][x]),typeof b>"u"||!b.length||!b[0]){var M;for(L in A=[],a[v])this.terminals_[L]&&L>2&&A.push("'"+this.terminals_[L]+"'");M=y.showPosition?"Parse error on line "+(h+1)+":\n"+y.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(M,{text:y.match,token:this.terminals_[x]||x,line:y.yylineno,loc:g,expected:A})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+x);switch(b[0]){case 1:n.push(x),s.push(y.yytext),o.push(y.yylloc),n.push(b[1]),x=null,m?(x=m,m=null):(c=y.yyleng,l=y.yytext,h=y.yylineno,g=y.yylloc,u>0&&u--);break;case 2:if(S=this.productions_[b[1]][1],T.$=s[s.length-S],T._$={first_line:o[o.length-(S||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(S||1)].first_column,last_column:o[o.length-1].last_column},_&&(T._$.range=[o[o.length-(S||1)].range[0],o[o.length-1].range[1]]),typeof(w=this.performAction.apply(T,[l,c,h,d.yy,b[1],s,o].concat(f)))<"u")return w;S&&(n=n.slice(0,-1*S*2),s=s.slice(0,-1*S),o=o.slice(0,-1*S)),n.push(this.productions_[b[1]][0]),s.push(T.$),o.push(T._$),E=a[n[n.length-2]][n[n.length-1]],n.push(E);break;case 3:return!0}}return!0}),"parse")},o={EOF:1,parseError:(0,r.a)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,r.a)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,r.a)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,r.a)((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,r.a)((function(){return this._more=!0,this}),"more"),reject:(0,r.a)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,r.a)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,r.a)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,r.a)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,r.a)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,r.a)((function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1}),"test_match"),next:(0,r.a)((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,r.a)((function(){return this.next()||this.lex()}),"lex"),begin:(0,r.a)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,r.a)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,r.a)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,r.a)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,r.a)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,r.a)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,r.a)((function(t,e,n,i){switch(n){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}}),"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function a(){this.yy={}}return s.lexer=o,(0,r.a)(a,"Parser"),a.prototype=s,s.Parser=a,new a}();s.parser=s;var o=s,a=[],l=[],h=new Map,c=(0,r.a)((()=>{a=[],l=[],h=new Map,(0,i.P)()}),"clear"),u=class{constructor(t,e,n=0){this.source=t,this.target=e,this.value=n}static{(0,r.a)(this,"SankeyLink")}},f=(0,r.a)(((t,e,n)=>{a.push(new u(t,e,n))}),"addLink"),y=class{constructor(t){this.ID=t}static{(0,r.a)(this,"SankeyNode")}},d=(0,r.a)((t=>{t=i.L.sanitizeText(t,(0,i.X)());let e=h.get(t);return void 0===e&&(e=new y(t),h.set(t,e),l.push(e)),e}),"findOrCreateNode"),p=(0,r.a)((()=>l),"getNodes"),g=(0,r.a)((()=>a),"getLinks"),_=(0,r.a)((()=>({nodes:l.map((t=>({id:t.ID}))),links:a.map((t=>({source:t.source.ID,target:t.target.ID,value:t.value})))})),"getGraph"),k={nodesMap:h,getConfig:(0,r.a)((()=>(0,i.X)().sankey),"getConfig"),getNodes:p,getLinks:g,getGraph:_,addLink:f,findOrCreateNode:d,getAccTitle:i.R,setAccTitle:i.Q,getAccDescription:i.T,setAccDescription:i.S,getDiagramTitle:i.V,setDiagramTitle:i.U,clear:c};function x(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n<e||void 0===n&&e>=e)&&(n=e);else{let i=-1;for(let r of t)null!=(r=e(r,++i,t))&&(n<r||void 0===n&&r>=r)&&(n=r)}return n}function m(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n>e||void 0===n&&e>=e)&&(n=e);else{let i=-1;for(let r of t)null!=(r=e(r,++i,t))&&(n>r||void 0===n&&r>=r)&&(n=r)}return n}function v(t,e){let n=0;if(void 0===e)for(let e of t)(e=+e)&&(n+=e);else{let i=-1;for(let r of t)(r=+e(r,++i,t))&&(n+=r)}return n}function b(t){return t.target.depth}function w(t){return t.depth}function L(t,e){return e-1-t.height}function S(t,e){return t.sourceLinks.length?t.depth:e-1}function E(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?m(t.sourceLinks,b)-1:0}function A(t){return function(){return t}}function T(t,e){return I(t.source,e.source)||t.index-e.index}function M(t,e){return I(t.target,e.target)||t.index-e.index}function I(t,e){return t.y0-e.y0}function N(t){return t.value}function C(t){return t.index}function P(t){return t.nodes}function D(t){return t.links}function O(t,e){let n=t.get(e);if(!n)throw new Error("missing: "+e);return n}function $({nodes:t}){for(let e of t){let t=e.y0,n=t;for(let n of e.sourceLinks)n.y0=t+n.width/2,t+=n.width;for(let t of e.targetLinks)t.y1=n+t.width/2,n+=t.width}}function z(){let t,e,n,i=0,s=0,o=1,a=1,l=24,h=8,c=C,u=S,f=P,y=D,d=6;function p(){let t={nodes:f.apply(null,arguments),links:y.apply(null,arguments)};return g(t),_(t),k(t),b(t),E(t),$(t),t}function g({nodes:t,links:e}){for(let[e,n]of t.entries())n.index=e,n.sourceLinks=[],n.targetLinks=[];let i=new Map(t.map(((e,n)=>[c(e,n,t),e])));for(let[t,n]of e.entries()){n.index=t;let{source:e,target:r}=n;"object"!=typeof e&&(e=n.source=O(i,e)),"object"!=typeof r&&(r=n.target=O(i,r)),e.sourceLinks.push(n),r.targetLinks.push(n)}if(null!=n)for(let{sourceLinks:e,targetLinks:i}of t)e.sort(n),i.sort(n)}function _({nodes:t}){for(let e of t)e.value=void 0===e.fixedValue?Math.max(v(e.sourceLinks,N),v(e.targetLinks,N)):e.fixedValue}function k({nodes:t}){let e=t.length,n=new Set(t),i=new Set,r=0;for(;n.size;){for(let t of n){t.depth=r;for(let{target:e}of t.sourceLinks)i.add(e)}if(++r>e)throw new Error("circular link");n=i,i=new Set}}function b({nodes:t}){let e=t.length,n=new Set(t),i=new Set,r=0;for(;n.size;){for(let t of n){t.height=r;for(let{source:e}of t.targetLinks)i.add(e)}if(++r>e)throw new Error("circular link");n=i,i=new Set}}function w({nodes:t}){let n=x(t,(t=>t.depth))+1,r=(o-i-l)/(n-1),s=new Array(n);for(let e of t){let t=Math.max(0,Math.min(n-1,Math.floor(u.call(null,e,n))));e.layer=t,e.x0=i+t*r,e.x1=e.x0+l,s[t]?s[t].push(e):s[t]=[e]}if(e)for(let t of s)t.sort(e);return s}function L(e){let n=m(e,(e=>(a-s-(e.length-1)*t)/v(e,N)));for(let i of e){let e=s;for(let r of i){r.y0=e,r.y1=e+r.value*n,e=r.y1+t;for(let t of r.sourceLinks)t.width=t.value*n}e=(a-e+t)/(i.length+1);for(let t=0;t<i.length;++t){let n=i[t];n.y0+=e*(t+1),n.y1+=e*(t+1)}R(i)}}function E(e){let n=w(e);t=Math.min(h,(a-s)/(x(n,(t=>t.length))-1)),L(n);for(let t=0;t<d;++t){let e=Math.pow(.99,t),i=Math.max(1-e,(t+1)/d);j(n,e,i),z(n,e,i)}}function z(t,n,i){for(let r=1,s=t.length;r<s;++r){let s=t[r];for(let t of s){let e=0,i=0;for(let{source:n,value:r}of t.targetLinks){let s=r*(t.layer-n.layer);e+=V(n,t)*s,i+=s}if(!(i>0))continue;let r=(e/i-t.y0)*n;t.y0+=r,t.y1+=r,X(t)}void 0===e&&s.sort(I),B(s,i)}}function j(t,n,i){for(let r=t.length-2;r>=0;--r){let s=t[r];for(let t of s){let e=0,i=0;for(let{target:n,value:r}of t.sourceLinks){let s=r*(n.layer-t.layer);e+=W(t,n)*s,i+=s}if(!(i>0))continue;let r=(e/i-t.y0)*n;t.y0+=r,t.y1+=r,X(t)}void 0===e&&s.sort(I),B(s,i)}}function B(e,n){let i=e.length>>1,r=e[i];F(e,r.y0-t,i-1,n),U(e,r.y1+t,i+1,n),F(e,a,e.length-1,n),U(e,s,0,n)}function U(e,n,i,r){for(;i<e.length;++i){let s=e[i],o=(n-s.y0)*r;o>1e-6&&(s.y0+=o,s.y1+=o),n=s.y1+t}}function F(e,n,i,r){for(;i>=0;--i){let s=e[i],o=(s.y1-n)*r;o>1e-6&&(s.y0-=o,s.y1-=o),n=s.y0-t}}function X({sourceLinks:t,targetLinks:e}){if(void 0===n){for(let{source:{sourceLinks:t}}of e)t.sort(M);for(let{target:{targetLinks:e}}of t)e.sort(T)}}function R(t){if(void 0===n)for(let{sourceLinks:e,targetLinks:n}of t)e.sort(M),n.sort(T)}function V(e,n){let i=e.y0-(e.sourceLinks.length-1)*t/2;for(let{target:r,width:s}of e.sourceLinks){if(r===n)break;i+=s+t}for(let{source:t,width:r}of n.targetLinks){if(t===e)break;i-=r}return i}function W(e,n){let i=n.y0-(n.targetLinks.length-1)*t/2;for(let{source:r,width:s}of n.targetLinks){if(r===e)break;i+=s+t}for(let{target:t,width:r}of e.sourceLinks){if(t===n)break;i-=r}return i}return(0,r.a)(p,"sankey"),p.update=function(t){return $(t),t},p.nodeId=function(t){return arguments.length?(c="function"==typeof t?t:A(t),p):c},p.nodeAlign=function(t){return arguments.length?(u="function"==typeof t?t:A(t),p):u},p.nodeSort=function(t){return arguments.length?(e=t,p):e},p.nodeWidth=function(t){return arguments.length?(l=+t,p):l},p.nodePadding=function(e){return arguments.length?(h=t=+e,p):h},p.nodes=function(t){return arguments.length?(f="function"==typeof t?t:A(t),p):f},p.links=function(t){return arguments.length?(y="function"==typeof t?t:A(t),p):y},p.linkSort=function(t){return arguments.length?(n=t,p):n},p.size=function(t){return arguments.length?(i=s=0,o=+t[0],a=+t[1],p):[o-i,a-s]},p.extent=function(t){return arguments.length?(i=+t[0][0],o=+t[1][0],s=+t[0][1],a=+t[1][1],p):[[i,s],[o,a]]},p.iterations=function(t){return arguments.length?(d=+t,p):d},(0,r.a)(g,"computeNodeLinks"),(0,r.a)(_,"computeNodeValues"),(0,r.a)(k,"computeNodeDepths"),(0,r.a)(b,"computeNodeHeights"),(0,r.a)(w,"computeNodeLayers"),(0,r.a)(L,"initializeNodeBreadths"),(0,r.a)(E,"computeNodeBreadths"),(0,r.a)(z,"relaxLeftToRight"),(0,r.a)(j,"relaxRightToLeft"),(0,r.a)(B,"resolveCollisions"),(0,r.a)(U,"resolveCollisionsTopToBottom"),(0,r.a)(F,"resolveCollisionsBottomToTop"),(0,r.a)(X,"reorderNodeLinks"),(0,r.a)(R,"reorderLinks"),(0,r.a)(V,"targetTop"),(0,r.a)(W,"sourceTop"),p}(0,r.a)(x,"max"),(0,r.a)(m,"min"),(0,r.a)(v,"sum"),(0,r.a)(b,"targetDepth"),(0,r.a)(w,"left"),(0,r.a)(L,"right"),(0,r.a)(S,"justify"),(0,r.a)(E,"center"),(0,r.a)(A,"constant"),(0,r.a)(T,"ascendingSourceBreadth"),(0,r.a)(M,"ascendingTargetBreadth"),(0,r.a)(I,"ascendingBreadth"),(0,r.a)(N,"value"),(0,r.a)(C,"defaultId"),(0,r.a)(P,"defaultNodes"),(0,r.a)(D,"defaultLinks"),(0,r.a)(O,"find"),(0,r.a)($,"computeLinkBreadths"),(0,r.a)(z,"Sankey");var j=Math.PI,B=2*j,U=1e-6,F=B-U;function X(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function R(){return new X}(0,r.a)(X,"Path"),(0,r.a)(R,"path"),X.prototype=R.prototype={constructor:X,moveTo:(0,r.a)((function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)}),"moveTo"),closePath:(0,r.a)((function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}),"closePath"),lineTo:(0,r.a)((function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)}),"lineTo"),quadraticCurveTo:(0,r.a)((function(t,e,n,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+i)}),"quadraticCurveTo"),bezierCurveTo:(0,r.a)((function(t,e,n,i,r,s){this._+="C"+ +t+","+ +e+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+s)}),"bezierCurveTo"),arcTo:(0,r.a)((function(t,e,n,i,r){t=+t,e=+e,n=+n,i=+i,r=+r;var s=this._x1,o=this._y1,a=n-t,l=i-e,h=s-t,c=o-e,u=h*h+c*c;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(u>U)if(Math.abs(c*a-l*h)>U&&r){var f=n-s,y=i-o,d=a*a+l*l,p=f*f+y*y,g=Math.sqrt(d),_=Math.sqrt(u),k=r*Math.tan((j-Math.acos((d+u-p)/(2*g*_)))/2),x=k/_,m=k/g;Math.abs(x-1)>U&&(this._+="L"+(t+x*h)+","+(e+x*c)),this._+="A"+r+","+r+",0,0,"+ +(c*f>h*y)+","+(this._x1=t+m*a)+","+(this._y1=e+m*l)}else this._+="L"+(this._x1=t)+","+(this._y1=e)}),"arcTo"),arc:(0,r.a)((function(t,e,n,i,r,s){t=+t,e=+e,s=!!s;var o=(n=+n)*Math.cos(i),a=n*Math.sin(i),l=t+o,h=e+a,c=1^s,u=s?i-r:r-i;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+l+","+h:(Math.abs(this._x1-l)>U||Math.abs(this._y1-h)>U)&&(this._+="L"+l+","+h),n&&(u<0&&(u=u%B+B),u>F?this._+="A"+n+","+n+",0,1,"+c+","+(t-o)+","+(e-a)+"A"+n+","+n+",0,1,"+c+","+(this._x1=l)+","+(this._y1=h):u>U&&(this._+="A"+n+","+n+",0,"+ +(u>=j)+","+c+","+(this._x1=t+n*Math.cos(r))+","+(this._y1=e+n*Math.sin(r))))}),"arc"),rect:(0,r.a)((function(t,e,n,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +i+"h"+-n+"Z"}),"rect"),toString:(0,r.a)((function(){return this._}),"toString")};var V=R;function W(t){return(0,r.a)((function(){return t}),"constant")}function G(t){return t[0]}function q(t){return t[1]}(0,r.a)(W,"default"),(0,r.a)(G,"x"),(0,r.a)(q,"y");var Q=Array.prototype.slice;function H(t){return t.source}function Y(t){return t.target}function Z(t){var e=H,n=Y,i=G,s=q,o=null;function a(){var r,a=Q.call(arguments),l=e.apply(this,a),h=n.apply(this,a);if(o||(o=r=V()),t(o,+i.apply(this,(a[0]=l,a)),+s.apply(this,a),+i.apply(this,(a[0]=h,a)),+s.apply(this,a)),r)return o=null,r+""||null}return(0,r.a)(a,"link"),a.source=function(t){return arguments.length?(e=t,a):e},a.target=function(t){return arguments.length?(n=t,a):n},a.x=function(t){return arguments.length?(i="function"==typeof t?t:W(+t),a):i},a.y=function(t){return arguments.length?(s="function"==typeof t?t:W(+t),a):s},a.context=function(t){return arguments.length?(o=t??null,a):o},a}function K(t,e,n,i,r){t.moveTo(e,n),t.bezierCurveTo(e=(e+i)/2,n,e,r,i,r)}function J(){return Z(K)}function tt(t){return[t.source.x1,t.y0]}function et(t){return[t.target.x0,t.y1]}function nt(){return J().source(tt).target(et)}(0,r.a)(H,"linkSource"),(0,r.a)(Y,"linkTarget"),(0,r.a)(Z,"link"),(0,r.a)(K,"curveHorizontal"),(0,r.a)(J,"linkHorizontal"),(0,r.a)(tt,"horizontalSource"),(0,r.a)(et,"horizontalTarget"),(0,r.a)(nt,"default");var it=class t{static{(0,r.a)(this,"Uid")}static{this.count=0}static next(e){return new t(e+ ++t.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}},rt={left:w,right:L,center:E,justify:S},st={draw:(0,r.a)((function(t,e,n,s){let o,{securityLevel:a,sankey:l}=(0,i.X)(),h=i.Z.sankey;"sandbox"===a&&(o=(0,i.fa)("#i"+e));let c="sandbox"===a?(0,i.fa)(o.nodes()[0].contentDocument.body):(0,i.fa)("body"),u="sandbox"===a?c.select(`[id="${e}"]`):(0,i.fa)(`[id="${e}"]`),f=l?.width??h.width,y=l?.height??h.width,d=l?.useMaxWidth??h.useMaxWidth,p=l?.nodeAlignment??h.nodeAlignment,g=l?.prefix??h.prefix,_=l?.suffix??h.suffix,k=l?.showValues??h.showValues,x=s.db.getGraph(),m=rt[p];z().nodeId((t=>t.id)).nodeWidth(10).nodePadding(10+(k?15:0)).nodeAlign(m).extent([[0,0],[f,y]])(x);let v=(0,i.ha)(i.za);u.append("g").attr("class","nodes").selectAll(".node").data(x.nodes).join("g").attr("class","node").attr("id",(t=>(t.uid=it.next("node-")).id)).attr("transform",(function(t){return"translate("+t.x0+","+t.y0+")"})).attr("x",(t=>t.x0)).attr("y",(t=>t.y0)).append("rect").attr("height",(t=>t.y1-t.y0)).attr("width",(t=>t.x1-t.x0)).attr("fill",(t=>v(t.id)));let b=(0,r.a)((({id:t,value:e})=>k?`${t}\n${g}${Math.round(100*e)/100}${_}`:t),"getText");u.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(x.nodes).join("text").attr("x",(t=>t.x0<f/2?t.x1+6:t.x0-6)).attr("y",(t=>(t.y1+t.y0)/2)).attr("dy",(k?"0":"0.35")+"em").attr("text-anchor",(t=>t.x0<f/2?"start":"end")).text(b);let w,L=u.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(x.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),S=l?.linkColor??"gradient";if("gradient"===S){let t=L.append("linearGradient").attr("id",(t=>(t.uid=it.next("linearGradient-")).id)).attr("gradientUnits","userSpaceOnUse").attr("x1",(t=>t.source.x1)).attr("x2",(t=>t.target.x0));t.append("stop").attr("offset","0%").attr("stop-color",(t=>v(t.source.id))),t.append("stop").attr("offset","100%").attr("stop-color",(t=>v(t.target.id)))}switch(S){case"gradient":w=(0,r.a)((t=>t.uid),"coloring");break;case"source":w=(0,r.a)((t=>v(t.source.id)),"coloring");break;case"target":w=(0,r.a)((t=>v(t.target.id)),"coloring");break;default:w=S}L.append("path").attr("d",nt()).attr("stroke",w).attr("stroke-width",(t=>Math.max(1,t.width))),(0,i.N)(void 0,u,0,d)}),"draw")},ot=(0,r.a)((t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim()),"prepareTextForParsing"),at=o.parse.bind(o);o.parse=t=>at(ot(t));var lt={parser:o,db:k,renderer:st}}}]);