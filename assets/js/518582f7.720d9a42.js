"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9590],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9627:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="Relationship",p={unversionedId:"developers/types/profiles/relationship",id:"developers/types/profiles/relationship",isDocsHomePage:!1,title:"Relationship",description:"Inside Desmos, users can create relationships with other users.",source:"@site/docs/02-developers/types/profiles/relationship.md",sourceDirName:"02-developers/types/profiles",slug:"/developers/types/profiles/relationship",permalink:"/developers/types/profiles/relationship",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/types/profiles/relationship.md",version:"current",lastUpdatedAt:1629894424,formattedLastUpdatedAt:"8/25/2021",frontMatter:{}},l=[{value:"Contained data",id:"contained-data",children:[{value:"<code>Recipient</code>",id:"recipient",children:[]},{value:"<code>Subspace</code>",id:"subspace",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relationship"},"Relationship"),(0,o.kt)("p",null,'Inside Desmos, users can create relationships with other users.\nA relationship inside desmos is the equivalent of the "follow" concept of traditional social networks.'),(0,o.kt)("h2",{id:"contained-data"},"Contained data"),(0,o.kt)("p",null,"Each relationship contains the data that allows identifying the dApp where the users created such relationship."),(0,o.kt)("h3",{id:"recipient"},(0,o.kt)("inlineCode",{parentName:"h3"},"Recipient")),(0,o.kt)("p",null,"The user with which create the relationship."),(0,o.kt)("h3",{id:"subspace"},(0,o.kt)("inlineCode",{parentName:"h3"},"Subspace")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Subspace")," field identifies the application inside which the user creates the relationship."))}d.isMDXComponent=!0}}]);