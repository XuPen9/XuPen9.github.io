"use strict";(self.webpackChunkxblog=self.webpackChunkxblog||[]).push([[1456],{1456:(t,e,a)=>{a.d(e,{diagram:()=>m});var r=a(9459),i=a(5206),n=a(4818),d=a(9219),o=(a(7851),a(4067)),l=(a(844),a(9913),a(1869),a(6375)),s=0,p=(0,l.a)((function(t,e,a,r,i){let n=(0,l.a)((function(t){switch(t){case i.db.relationType.AGGREGATION:return"aggregation";case i.db.relationType.EXTENSION:return"extension";case i.db.relationType.COMPOSITION:return"composition";case i.db.relationType.DEPENDENCY:return"dependency";case i.db.relationType.LOLLIPOP:return"lollipop"}}),"getRelationType");e.points=e.points.filter((t=>!Number.isNaN(t.y)));let p=e.points,g=(0,o.Ca)().x((function(t){return t.x})).y((function(t){return t.y})).curve(o.Ga),h=t.append("path").attr("d",g(p)).attr("id","edge"+s).attr("class","relation"),c="";r.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),1==a.relation.lineType&&h.attr("class","relation dashed-line"),10==a.relation.lineType&&h.attr("class","relation dotted-line"),"none"!==a.relation.type1&&h.attr("marker-start","url("+c+"#"+n(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&h.attr("marker-end","url("+c+"#"+n(a.relation.type2)+"End)");let f,x,y,u,b,w,m=e.points.length,k=d.m.calcLabelPosition(e.points);if(f=k.x,x=k.y,m%2!=0&&m>1){let t=d.m.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=d.m.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[m-1]);o.b.debug("cardinality_1_point "+JSON.stringify(t)),o.b.debug("cardinality_2_point "+JSON.stringify(r)),y=t.x,u=t.y,b=r.x,w=r.y}if(void 0!==a.title){let e=t.append("g").attr("class","classLabel"),i=e.append("text").attr("class","label").attr("x",f).attr("y",x).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=i;let n=i.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-r.padding/2).attr("y",n.y-r.padding/2).attr("width",n.width+r.padding).attr("height",n.height+r.padding)}o.b.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1&&t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",y).attr("y",u).attr("fill","black").attr("font-size","6").text(a.relationTitle1),void 0!==a.relationTitle2&&"none"!==a.relationTitle2&&t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",b).attr("y",w).attr("fill","black").attr("font-size","6").text(a.relationTitle2),s++}),"drawEdge"),g=(0,l.a)((function(t,e,a,r){o.b.debug("Rendering class ",e,a);let i,n=e.id,d={id:n,label:e.id,width:0,height:0},l=t.append("g").attr("id",r.db.lookUpDomId(n)).attr("class","classGroup");i=e.link?l.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):l.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let s=!0;e.annotations.forEach((function(t){let e=i.append("tspan").text("«"+t+"»");s||e.attr("dy",a.textHeight),s=!1}));let p=h(e),g=i.append("tspan").text(p).attr("class","title");s||g.attr("dy",a.textHeight);let c,x,y,u=i.node().getBBox().height;if(e.members.length>0){c=l.append("line").attr("x1",0).attr("y1",a.padding+u+a.dividerMargin/2).attr("y2",a.padding+u+a.dividerMargin/2);let t=l.append("text").attr("x",a.padding).attr("y",u+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");s=!0,e.members.forEach((function(e){f(t,e,s,a),s=!1})),x=t.node().getBBox()}if(e.methods.length>0){y=l.append("line").attr("x1",0).attr("y1",a.padding+u+a.dividerMargin+x.height).attr("y2",a.padding+u+a.dividerMargin+x.height);let t=l.append("text").attr("x",a.padding).attr("y",u+2*a.dividerMargin+x.height+a.textHeight).attr("fill","white").attr("class","classText");s=!0,e.methods.forEach((function(e){f(t,e,s,a),s=!1}))}let b=l.node().getBBox();var w=" ";e.cssClasses.length>0&&(w+=e.cssClasses.join(" "));let m=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",b.width+2*a.padding).attr("height",b.height+a.padding+.5*a.dividerMargin).attr("class",w).node().getBBox().width;return i.node().childNodes.forEach((function(t){t.setAttribute("x",(m-t.getBBox().width)/2)})),e.tooltip&&i.insert("title").text(e.tooltip),c&&c.attr("x2",m),y&&y.attr("x2",m),d.width=m,d.height=b.height+a.padding+.5*a.dividerMargin,d}),"drawClass"),h=(0,l.a)((function(t){let e=t.id;return t.type&&(e+="<"+(0,o.H)(t.type)+">"),e}),"getClassTitleString"),c=(0,l.a)((function(t,e,a,r){o.b.debug("Rendering note ",e,a);let i=e.id,n={id:i,text:e.text,width:0,height:0},d=t.append("g").attr("id",i).attr("class","classGroup"),l=d.append("text").attr("y",a.textHeight+a.padding).attr("x",0),s=JSON.parse(`"${e.text}"`).split("\n");s.forEach((function(t){o.b.debug(`Adding line: ${t}`),l.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)}));let p=d.node().getBBox(),g=d.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return l.node().childNodes.forEach((function(t){t.setAttribute("x",(g-t.getBBox().width)/2)})),n.width=g,n.height=p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin,n}),"drawNote"),f=(0,l.a)((function(t,e,a,r){let{displayText:i,cssStyle:n}=e.getDisplayDetails(),d=t.append("tspan").attr("x",r.padding).text(i);""!==n&&d.attr("style",e.cssStyle),a||d.attr("dy",r.textHeight)}),"addTspan"),x={getClassTitleString:h,drawClass:g,drawEdge:p,drawNote:c},y={},u=(0,l.a)((function(t){let e=Object.entries(y).find((e=>e[1].label===t));if(e)return e[0]}),"getGraphId"),b=(0,l.a)((function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")}),"insertMarkers"),w={draw:(0,l.a)((function(t,e,a,r){let d=(0,o.X)().class;y={},o.b.info("Rendering diagram "+t);let l,s=(0,o.X)().securityLevel;"sandbox"===s&&(l=(0,o.fa)("#i"+e));let p="sandbox"===s?(0,o.fa)(l.nodes()[0].contentDocument.body):(0,o.fa)("body"),g=p.select(`[id='${e}']`);b(g);let h=new n.a({multigraph:!0});h.setGraph({isMultiGraph:!0}),h.setDefaultEdgeLabel((function(){return{}}));let c=r.db.getClasses(),f=[...c.keys()];for(let t of f){let e=c.get(t),a=x.drawClass(g,e,d,r);y[a.id]=a,h.setNode(a.id,a),o.b.info("Org height: "+a.height)}r.db.getRelations().forEach((function(t){o.b.info("tjoho"+u(t.id1)+u(t.id2)+JSON.stringify(t)),h.setEdge(u(t.id1),u(t.id2),{relation:t},t.title||"DEFAULT")})),r.db.getNotes().forEach((function(t){o.b.debug(`Adding note: ${JSON.stringify(t)}`);let e=x.drawNote(g,t,d,r);y[e.id]=e,h.setNode(e.id,e),t.class&&c.has(t.class)&&h.setEdge(t.id,u(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),(0,i.a)(h),h.nodes().forEach((function(t){void 0!==t&&void 0!==h.node(t)&&(o.b.debug("Node "+t+": "+JSON.stringify(h.node(t))),p.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(h.node(t).x-h.node(t).width/2)+","+(h.node(t).y-h.node(t).height/2)+" )"))})),h.edges().forEach((function(t){void 0!==t&&void 0!==h.edge(t)&&(o.b.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(h.edge(t))),x.drawEdge(g,h.edge(t),h.edge(t).relation,d,r))}));let w=g.node().getBBox(),m=w.width+40,k=w.height+40;(0,o.M)(g,k,m,d.useMaxWidth);let E=`${w.x-20} ${w.y-20} ${m} ${k}`;o.b.debug(`viewBox ${E}`),g.attr("viewBox",E)}),"draw")},m={parser:r.a,db:r.b,renderer:w,styles:r.c,init:(0,l.a)((t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.b.clear()}),"init")}}}]);