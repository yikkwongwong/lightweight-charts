"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:0,sidebar_label:"Full Bar Width",pagination_title:"Full Bar Width",title:"Full Bar Width Calculations",description:"Describes the calculation for full bar widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","histogram","column","width"]},l=void 0,o={unversionedId:"plugins/pixel-perfect-rendering/widths/full-bar-width",id:"version-4.1/plugins/pixel-perfect-rendering/widths/full-bar-width",title:"Full Bar Width Calculations",description:"Describes the calculation for full bar widths",source:"@site/versioned_docs/version-4.1/plugins/pixel-perfect-rendering/widths/full-bar-width.md",sourceDirName:"plugins/pixel-perfect-rendering/widths",slug:"/plugins/pixel-perfect-rendering/widths/full-bar-width",permalink:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/full-bar-width",draft:!1,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Full Bar Width",pagination_title:"Full Bar Width",title:"Full Bar Width Calculations",description:"Describes the calculation for full bar widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","histogram","column","width"]},sidebar:"docsSidebar",previous:{title:"Crosshair",permalink:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/crosshair"},next:{title:"From v2 to v3",permalink:"/lightweight-charts/docs/migrations/from-v2-to-v3"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is recommend that you first read the ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/"},"Pixel Perfect Rendering")," page.")),(0,r.kt)("p",null,"The following functions can be used to get the calculated width that the library would use for the full width of a bar (data point) at a specific bar spacing and device pixel ratio. This can be used when you would like to use the full width available for each data point on the x axis, and don't want any gaps to be visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BitmapPositionLength {\n    /** coordinate for use with a bitmap rendering scope */\n    position: number;\n    /** length for use with a bitmap rendering scope */\n    length: number;\n}\n\n/**\n * Calculates the position and width which will completely full the space for the bar.\n * Useful if you want to draw something that will not have any gaps between surrounding bars.\n * @param xMedia - x coordinate of the bar defined in media sizing\n * @param halfBarSpacingMedia - half the width of the current barSpacing (un-rounded)\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns position and width which will completely full the space for the bar\n */\nexport function fullBarWidth(\n    xMedia: number,\n    halfBarSpacingMedia: number,\n    horizontalPixelRatio: number\n): BitmapPositionLength {\n    const fullWidthLeftMedia = xMedia - halfBarSpacingMedia;\n    const fullWidthRightMedia = xMedia + halfBarSpacingMedia;\n    const fullWidthLeftBitmap = Math.round(\n        fullWidthLeftMedia * horizontalPixelRatio\n    );\n    const fullWidthRightBitmap = Math.round(\n        fullWidthRightMedia * horizontalPixelRatio\n    );\n    const fullWidthBitmap = fullWidthRightBitmap - fullWidthLeftBitmap;\n    return {\n        position: fullWidthLeftBitmap,\n        length: fullWidthBitmap,\n    };\n}\n")))}u.isMDXComponent=!0}}]);