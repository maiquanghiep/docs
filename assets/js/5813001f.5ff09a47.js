"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1410],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(b,o(o({ref:t},l),{},{components:a})):n.createElement(b,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9687:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={},c="MSgCreateSubspace",p={unversionedId:"developers/transactions/staging/subspaces/create-subspace",id:"developers/transactions/staging/subspaces/create-subspace",isDocsHomePage:!1,title:"MSgCreateSubspace",description:"This message allows you to create a subspace. If you want to know more about the Subspace type you can check the related",source:"@site/docs/02-developers/03-transactions/staging/subspaces/create-subspace.md",sourceDirName:"02-developers/03-transactions/staging/subspaces",slug:"/developers/transactions/staging/subspaces/create-subspace",permalink:"/developers/transactions/staging/subspaces/create-subspace",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/staging/subspaces/create-subspace.md",version:"current",lastUpdatedAt:1629994386,formattedLastUpdatedAt:"8/26/2021",frontMatter:{}},l=[{value:"Structure",id:"structure",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgcreatesubspace"},(0,s.kt)("inlineCode",{parentName:"h1"},"MSgCreateSubspace")),(0,s.kt)("p",null,"This message allows you to create a subspace. If you want to know more about the ",(0,s.kt)("inlineCode",{parentName:"p"},"Subspace")," type you can check the related\ndocs ",(0,s.kt)("a",{parentName:"p",href:"/developers/types/staging/subspaces/subspace"},"here")),(0,s.kt)("h2",{id:"structure"},"Structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1beta1.MsgCreateSubspace",\n  "id": "<ID of the subspace that will be created>",\n  "name": "<Human readable name of the subspace>",\n  "description": "<Description of the subspace>",\n  "logo": "<URI of the picture that identifies the subspace>",\n  "subspace_type": "<Type of the subspace to create>",\n  "creator": "<Desmos address of the subspace creator>"\n}\n')),(0,s.kt)("h2",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"ID of the subspace to create")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"name")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Human readable name of the subspace to create")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"description")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Description of the subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"logo")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"URI of the picture that identifies the subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"subspace_type")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Enum"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Tells if users can post in it without being registered")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"creator")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the subspace creator")))),(0,s.kt)("p",null,"Please note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"subspace_type")," field will only accept the following values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SubspaceTypeOpen")," ( ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),") to signal an open subspace that does not require any registration to be allowed to post inside it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SubspaceTypeClosed")," (",(0,s.kt)("inlineCode",{parentName:"li"},"2"),") to signal a closed subspace that does require a registration in order to be allowed to post inside it")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1beta1.MsgCreateSubspace",\n  "id": "19de02e105c68a60e45c289bff19fde745bca9c63c38f2095b59e8e8090ae1af",\n  "name": "mooncake",\n  "description": "a good cake with secret messages in it",\n  "logo": "https://mooncake-logo-png.com",\n  "subspace_type": 1,\n  "creator": "desmos14dz9drkw0dyagnht5fnj6s63cwpxxkw8zsx7x9"\n}\n')),(0,s.kt)("h1",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"create_subspace\n")))}d.isMDXComponent=!0}}]);