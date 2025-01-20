"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16801],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>u});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),c=a,u=g["".concat(d,".").concat(c)]||g[c]||m[c]||i;return t?n.createElement(u,l(l({ref:r},p),{},{components:t})):n.createElement(u,l({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87226:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(58168),a=(t(96540),t(15680));const i={id:"ISeriesPrimitivePaneRenderer",title:"Interface: ISeriesPrimitivePaneRenderer",sidebar_label:"ISeriesPrimitivePaneRenderer",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/ISeriesPrimitivePaneRenderer",id:"version-4.2/api/interfaces/ISeriesPrimitivePaneRenderer",title:"Interface: ISeriesPrimitivePaneRenderer",description:"This interface represents rendering some element on the canvas",source:"@site/versioned_docs/version-4.2/api/interfaces/ISeriesPrimitivePaneRenderer.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ISeriesPrimitivePaneRenderer",permalink:"/lightweight-charts/docs/api/interfaces/ISeriesPrimitivePaneRenderer",draft:!1,editUrl:null,tags:[],version:"4.2",sidebarPosition:0,frontMatter:{id:"ISeriesPrimitivePaneRenderer",title:"Interface: ISeriesPrimitivePaneRenderer",sidebar_label:"ISeriesPrimitivePaneRenderer",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},d={},s=[{value:"Methods",id:"methods",level:2},{value:"draw",id:"draw",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"drawBackground",id:"drawbackground",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],p={toc:s},g="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(g,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This interface represents rendering some element on the canvas"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"draw"},"draw"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"draw"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"target"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,"Method to draw main content of the element"),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"target")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"CanvasRenderingTarget2D")),(0,a.yg)("td",{parentName:"tr",align:"left"},"canvas context to draw on, refer to FancyCanvas library for more details about this class")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"drawbackground"},"drawBackground"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"drawBackground"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"target"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,"Optional method to draw the background.\nSome elements could implement this method to draw on the background of the chart.\nUsually this is some kind of watermarks or time areas highlighting."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"target")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"CanvasRenderingTarget2D")),(0,a.yg)("td",{parentName:"tr",align:"left"},"canvas context to draw on, refer FancyCanvas library for more details about this class")))),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0}}]);