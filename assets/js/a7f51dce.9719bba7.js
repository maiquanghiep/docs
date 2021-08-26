"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8551],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4026:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Attachment",p={unversionedId:"developers/types/staging/posts/attachment",id:"developers/types/staging/posts/attachment",isDocsHomePage:!1,title:"Attachment",description:"The Attachment type contains the details of a single attachment file object that can be associated within a Post object. With attachment, you can add images and multimedia files (vocals, documents, videos, etc.) to posts.",source:"@site/docs/02-developers/02-types/staging/posts/attachment.md",sourceDirName:"02-developers/02-types/staging/posts",slug:"/developers/types/staging/posts/attachment",permalink:"/developers/types/staging/posts/attachment",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-types/staging/posts/attachment.md",version:"current",lastUpdatedAt:1629994386,formattedLastUpdatedAt:"8/26/2021",frontMatter:{}},l=[{value:"<code>URI</code>",id:"uri",children:[]},{value:"<code>MimeType</code>",id:"mimetype",children:[]},{value:"<code>Tags</code>",id:"tags",children:[]}],d={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"attachment"},"Attachment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Attachment")," type contains the details of a single attachment file object that can be associated within a ",(0,o.kt)("a",{parentName:"p",href:"/developers/types/staging/posts/post"},(0,o.kt)("inlineCode",{parentName:"a"},"Post"))," object. With attachment, you can add images and multimedia files (vocals, documents, videos, etc.) to posts."),(0,o.kt)("p",null,"Following you will find a description of all the fields it is composed of. "),(0,o.kt)("h2",{id:"uri"},(0,o.kt)("inlineCode",{parentName:"h2"},"URI")),(0,o.kt)("p",null,"The first field of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Attachment")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"URI")," field. This field should contain the URI of the attachment file that is represented. "),(0,o.kt)("p",null,"When creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," on the chain, a regular expression checks this ",(0,o.kt)("inlineCode",{parentName:"p"},"URI"),". If the check does not pass, the post will not be stored and an error will be thrown instead: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-phpregexp"},"^(?:http(s)?://)[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]+$\n")),(0,o.kt)("h2",{id:"mimetype"},(0,o.kt)("inlineCode",{parentName:"h2"},"MimeType")),(0,o.kt)("p",null,"The second field of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Attachment")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"MimeType")," field. This one allows you to specify the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"MIME type")," of the included media file. "),(0,o.kt)("p",null,"No check is ever performed on this field's values, and any string is accepted as valid as long as it is not empty. That being said, please make sure to use a valid MIME type each time you specify it as it will make it easier for other apps to read your data. "),(0,o.kt)("h2",{id:"tags"},(0,o.kt)("inlineCode",{parentName:"h2"},"Tags")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tags")," is the third field of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Attachment"),". This field allows you to tag any user on a particular attachment.\nThis field can be omitted and the system will check that every tag inside the array ",(0,o.kt)("inlineCode",{parentName:"p"},"Tags")," is a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"bech32"),"\nencoded ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," of desmos.\nE.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"desmos1ulmv2dyc8zjmhk9zlsq4ajpudwc8zjfm82aysr")))}m.isMDXComponent=!0}}]);