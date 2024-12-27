"use strict";(self.webpackChunkxweb=self.webpackChunkxweb||[]).push([[1587],{6010:(e,t,a)=>{function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{a:()=>i}),(0,a(6375).a)(i,"populateCommonDb")},1587:(e,t,a)=>{a.d(t,{diagram:()=>k});var i=a(6010),l=a(7812),n=(a(4637),a(3784),a(2021),a(5165)),r=a(3011),s=(a(7851),a(1485)),o=(a(2280),a(4323),a(1624),a(6772),a(9913),a(1869),a(6375)),c=s.s.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,g=p.showData,u=structuredClone(c),h=(0,o.a)((()=>structuredClone(u)),"getConfig"),f=(0,o.a)((()=>{d=new Map,g=p.showData,(0,s.P)()}),"clear"),m=(0,o.a)((({label:e,value:t})=>{d.has(e)||(d.set(e,t),s.b.debug(`added new section: ${e}, with value: ${t}`))}),"addSection"),x=(0,o.a)((()=>d),"getSections"),w=(0,o.a)((e=>{g=e}),"setShowData"),S=(0,o.a)((()=>g),"getShowData"),T={getConfig:h,clear:f,setDiagramTitle:s.U,getDiagramTitle:s.V,setAccTitle:s.Q,getAccTitle:s.R,setAccDescription:s.S,getAccDescription:s.T,addSection:m,getSections:x,setShowData:w,getShowData:S},D=(0,o.a)(((e,t)=>{(0,i.a)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)}),"populateDb"),b={parse:(0,o.a)((async e=>{let t=await(0,l.a)("pie",e);s.b.debug(t),D(t,T)}),"parse")},y=(0,o.a)((e=>`\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`),"getStyles"),$=(0,o.a)((e=>{let t=[...e.entries()].map((e=>({label:e[0],value:e[1]}))).sort(((e,t)=>t.value-e.value));return(0,s.Ea)().value((e=>e.value))(t)}),"createPieArcs"),C=(0,o.a)(((e,t,a,i)=>{s.b.debug("rendering pie chart\n"+e);let l=i.db,o=(0,s.X)(),c=(0,r.l)(l.getConfig(),o.pie),p=(0,n.a)(t),d=p.append("g");d.attr("transform","translate(225,225)");let{themeVariables:g}=o,[u]=(0,r.k)(g.pieOuterStrokeWidth);u??=2;let h=c.textPosition,f=Math.min(450,450)/2-40,m=(0,s.Ba)().innerRadius(0).outerRadius(f),x=(0,s.Ba)().innerRadius(f*h).outerRadius(f*h);d.append("circle").attr("cx",0).attr("cy",0).attr("r",f+u/2).attr("class","pieOuterCircle");let w=l.getSections(),S=$(w),T=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],D=(0,s.ia)(T);d.selectAll("mySlices").data(S).enter().append("path").attr("d",m).attr("fill",(e=>D(e.data.label))).attr("class","pieCircle");let b=0;w.forEach((e=>{b+=e})),d.selectAll("mySlices").data(S).enter().append("text").text((e=>(e.data.value/b*100).toFixed(0)+"%")).attr("transform",(e=>"translate("+x.centroid(e)+")")).style("text-anchor","middle").attr("class","slice"),d.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let y=d.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",((e,t)=>"translate(216,"+(22*t-22*D.domain().length/2)+")"));y.append("rect").attr("width",18).attr("height",18).style("fill",D).style("stroke",D),y.data(S).append("text").attr("x",22).attr("y",14).text((e=>{let{label:t,value:a}=e.data;return l.getShowData()?`${t} [${a}]`:t}));let C=512+Math.max(...y.selectAll("text").nodes().map((e=>e?.getBoundingClientRect().width??0)));p.attr("viewBox",`0 0 ${C} 450`),(0,s.M)(p,450,C,c.useMaxWidth)}),"draw"),k={parser:b,db:T,renderer:{draw:C},styles:y}}}]);