"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1570],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3952:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"/04-queries/profiles/relationships"},l=void 0,p={unversionedId:"developers/queries/profiles/relationships",id:"developers/queries/profiles/relationships",isDocsHomePage:!1,title:"Query relationships",description:"Query relationships",source:"@site/docs/02-developers/04-queries/profiles/relationships.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/04-queries/profiles/relationships",permalink:"/04-queries/profiles/relationships",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/04-queries/profiles/relationships.md",version:"current",lastUpdatedAt:1629994386,formattedLastUpdatedAt:"8/26/2021",frontMatter:{id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"/04-queries/profiles/relationships"},sidebar:"docs",previous:{title:"Incoming DTag requests",permalink:"/04-queries/profiles/incoming-dtag-requests"},next:{title:"Blocked users",permalink:"/04-queries/profiles/blocked-users"}},u=[{value:"Query relationships",id:"query-relationships",children:[]}],c={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"query-relationships"},"Query relationships"),(0,i.kt)("p",null,"This query allows you to retrieve the relationships with the optional creator ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles relationships [[address]]\n\n# Example\n# desmos query relationships\n# desmos query relationships desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}d.isMDXComponent=!0}}]);