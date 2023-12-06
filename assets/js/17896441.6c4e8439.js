"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{98007:(t,e,n)=>{n.d(e,{ZP:()=>u});var r=n(67294),a=n(90814),c=n(91262),O=n(92949),s=n(60373),o=n(44908);function _(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const l={3.8:async t=>{const e=await n.e(3115).then(n.bind(n,3115));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return _(t,n,a.resize.bind(a)),a}}},"4.0":async t=>{const e=await n.e(1539).then(n.bind(n,81539));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return _(t,n,a.resize.bind(a)),a}}},4.1:async t=>{const e=await n.e(8992).then(n.bind(n,39876));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return _(t,n,a.resize.bind(a)),a}}},current:async()=>{const t=await n.e(6738).then(n.bind(n,66738));return{module:t,createChart:(e,n)=>{const r=t.createChart(e,n);return _(window,e,r.resize.bind(r)),r}}}},i="iframe_R_Fr";function L(t){const{script:e,iframeStyle:n}=t,{preferredVersion:a}=(0,s.J)(),c=o&&o.length>0?o[0]:"",O=a?.name??c??"current",_=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),L=r.useRef(null);return r.useEffect((()=>{const t=L.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const r=async()=>{try{const{module:t,createChart:n}=await l[O](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)r();else{const e=()=>{r(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[_]),r.createElement("iframe",{key:e,ref:L,srcDoc:_,className:i,style:n})}var R=n(43864);const C=()=>`${Math.random().toString(36).slice(2,11)}`;function E(t){return"string"==typeof t?t:function(){const[t,e]=(0,r.useState)("");return(0,r.useEffect)((()=>e(C())),[]),t}()}const d=Object.keys(R.l.DARK);const u=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:s,chartOnly:o,iframeStyle:_,...l}=t;let{children:C}=t;const{colorMode:u}=(0,O.I)(),h="dark"===u,A=E();return n&&"string"==typeof C&&(C=function(t,e){const n=e?R.l.DARK:R.l.LIGHT;let r=t;for(const a of d)r=r.replace(new RegExp(a,"g"),`'${n[a]}'`);return r}(C,h)),C=C.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||s?r.createElement(r.Fragment,null,s&&r.createElement(r.Fragment,null,r.createElement("input",{id:A,type:"checkbox",className:"toggle-hidden-lines"}),r.createElement("label",{className:"toggle-label",htmlFor:A},"Show all code")),!o&&r.createElement(a.Z,l,C),e&&r.createElement(c.Z,{fallback:r.createElement("div",{className:i},"\xa0")},(()=>r.createElement(L,{script:C,iframeStyle:_})))):r.createElement(a.Z,l,C)}},43864:(t,e,n)=>{n.d(e,{l:()=>r});const r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},44908:t=>{t.exports=["4.1","4.0","3.8"]}}]);