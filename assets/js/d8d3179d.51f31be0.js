"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7114],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),c=a,g=p["".concat(m,".").concat(c)]||p[c]||d[c]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},m="KMS - Key Management System",l={unversionedId:"mainnet/kms/kms",id:"version-2.3/mainnet/kms/kms",isDocsHomePage:!1,title:"KMS - Key Management System",description:"Tendermint KMS is a key management sytem that allows separating",source:"@site/versioned_docs/version-2.3/06-mainnet/kms/kms.md",sourceDirName:"06-mainnet/kms",slug:"/mainnet/kms/kms",permalink:"/mainnet/kms/kms",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/06-mainnet/kms/kms.md",version:"2.3",lastUpdatedAt:1639063294,formattedLastUpdatedAt:"12/9/2021",frontMatter:{}},u=[{value:"Building",id:"building",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Using a YubiHSM",id:"using-a-yubihsm",children:[]},{value:"Using a Ledger device running the Tendermint app",id:"using-a-ledger-device-running-the-tendermint-app",children:[]},{value:"Using the Softsign feature with tmkms",id:"using-the-softsign-feature-with-tmkms",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kms---key-management-system"},"KMS - Key Management System"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/kms"},"Tendermint KMS")," is a key management sytem that allows separating\nkey management from Tendermint nodes. In addition, it provides other advantages such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Improved security and risk management policies"),(0,i.kt)("li",{parentName:"ul"},"Unified API and support for various HSM (hardware security modules)"),(0,i.kt)("li",{parentName:"ul"},"Double signing protection (software or hardware based)")),(0,i.kt)("p",null,"It is recommended that the KMS service runs in a separate physical hosts."),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"Detailed build instructions can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms#installation"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When compiling the KMS, ensure you have enabled the applicable features:"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Backend"),(0,i.kt)("th",{parentName:"tr",align:null},"Recommended Command line"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"YubiHSM"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cargo build --features yubihsm"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ledger+Tendermint App"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cargo build --features ledgertm"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Softsign (software-only)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cargo build --features softsign"))))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"A KMS can be configured in various ways:"),(0,i.kt)("h3",{id:"using-a-yubihsm"},"Using a YubiHSM"),(0,i.kt)("p",null,"Detailed information on how to setup a KMS with YubiHSM2 can be\nfound ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/main/README.yubihsm.md"},"here")),(0,i.kt)("h3",{id:"using-a-ledger-device-running-the-tendermint-app"},"Using a Ledger device running the Tendermint app"),(0,i.kt)("p",null,"Detailed information on how to setup a KMS with Ledger Tendermint App can be found ",(0,i.kt)("a",{parentName:"p",href:"/mainnet/kms/kms_ledger"},"here")),(0,i.kt)("h3",{id:"using-the-softsign-feature-with-tmkms"},"Using the Softsign feature with tmkms"),(0,i.kt)("p",null,"Softsign is not recommended for production.",(0,i.kt)("br",{parentName:"p"}),"\n","Otherwise, it could be a good way in order to become familiar with the tendermint kms\nand understand the concepts behind it.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"/mainnet/kms/kms_softsign"},"Here")," you can find out how to setup it (e.g in a testnet)."))}p.isMDXComponent=!0}}]);