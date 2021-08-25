"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9224],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},420:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"profile"},d="Profile",c={unversionedId:"developers/types/profiles/profile",id:"developers/types/profiles/profile",isDocsHomePage:!1,title:"Profile",description:"Inside Desmos, profile are the way that users could register their own identity.",source:"@site/docs/02-developers/types/profiles/profile.md",sourceDirName:"02-developers/types/profiles",slug:"/developers/types/profiles/profile",permalink:"/developers/types/profiles/profile",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/types/profiles/profile.md",version:"current",lastUpdatedAt:1629894424,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"profile"}},p=[{value:"Contained data",id:"contained-data",children:[{value:"<code>DTag</code>",id:"dtag",children:[]},{value:"<code>Nickname</code>",id:"nickname",children:[]},{value:"<code>Bio</code>",id:"bio",children:[]},{value:"<code>Pictures</code>",id:"pictures",children:[]},{value:"<code>Creator</code>",id:"creator",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"profile"},"Profile"),(0,i.kt)("p",null,"Inside Desmos, profile are the way that users could register their own identity."),(0,i.kt)("p",null,"Since this is a decentralized profile, every data inside it can be omitted except for the ",(0,i.kt)("inlineCode",{parentName:"p"},"dTag")," which could be used\nto identify a desmos ",(0,i.kt)("inlineCode",{parentName:"p"},"bech32addr")," once the profile is created. "),(0,i.kt)("p",null,"Profile can be enriched with some of your personal data.\nThese data that could be verified later on chain by providing some additional information."),(0,i.kt)("h2",{id:"contained-data"},"Contained data"),(0,i.kt)("p",null,"A profile contains different fields. Most of them could be omitted and each of them could be edited."),(0,i.kt)("h3",{id:"dtag"},(0,i.kt)("inlineCode",{parentName:"h3"},"DTag")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DTag")," is a string of min ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," and max ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," characters that uniquely identifies the user.\nIn order to be valid it needs to match the following RegEx:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"^[A-Za-z0-9_]+$\n")),(0,i.kt)("h3",{id:"nickname"},(0,i.kt)("inlineCode",{parentName:"h3"},"Nickname")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Nickname")," represents the name of the user. It can be either a combination of first, second and last name, or a completely invented name. Although we always suggest setting one, this field is completely optional. "),(0,i.kt)("h3",{id:"bio"},(0,i.kt)("inlineCode",{parentName:"h3"},"Bio")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Bio")," represents the biography of the user. It can be at most ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," characters long."),(0,i.kt)("h3",{id:"pictures"},(0,i.kt)("inlineCode",{parentName:"h3"},"Pictures")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/developers/types/profiles/profile-pictures"},(0,i.kt)("inlineCode",{parentName:"a"},"Pictures"))," contains the pictures of the account. This field is omittable."),(0,i.kt)("h3",{id:"creator"},(0,i.kt)("inlineCode",{parentName:"h3"},"Creator")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Creator")," field is used to specify the Bech32 address of the creator of the profile.\nIn order for a creator address to be valid, it must begin with the ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos")," Bech32 human-readable part."))}u.isMDXComponent=!0}}]);