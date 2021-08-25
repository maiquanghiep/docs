"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3408],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6952:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={id:"setup",title:"Setup",sidebar_position:3},l="Become a Desmos validator",d={unversionedId:"validators/setup",id:"validators/setup",isDocsHomePage:!1,title:"Setup",description:"Validators are responsible for committing new blocks to the blockchain through voting.",source:"@site/docs/04-validators/03-setup.md",sourceDirName:"04-validators",slug:"/validators/setup",permalink:"/validators/setup",editUrl:"https://github.com/desmos-labs/docs/master/docs/04-validators/03-setup.md",version:"current",lastUpdatedAt:1629894424,formattedLastUpdatedAt:"8/25/2021",sidebarPosition:3,frontMatter:{id:"setup",title:"Setup",sidebar_position:3},sidebar:"docs",previous:{title:"Security",permalink:"/validators/security"},next:{title:"Halting",permalink:"/validators/halting"}},m=[{value:"1. Run a fullnode",id:"1-run-a-fullnode",children:[]},{value:"2. Create your validator",id:"2-create-your-validator",children:[]},{value:"3. Edit the validator description",id:"3-edit-the-validator-description",children:[{value:"View the validator description",id:"view-the-validator-description",children:[]}]},{value:"4. Confirm your validator is running",id:"4-confirm-your-validator-is-running",children:[]}],p={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"become-a-desmos-validator"},"Become a Desmos validator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/validators/overview"},"Validators")," are responsible for committing new blocks to the blockchain through voting.\nA validator's stake is slashed if they become unavailable or sign blocks at the same height. Please read about\n",(0,i.kt)("a",{parentName:"p",href:"/validators/validator-faq#how-can-validators-protect-themselves-from-denial-of-service-attacks"},"Sentry Node Architecture")," to protect your node from DDOS attacks and to ensure high-availability."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to become a validator for the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet"),", you should ",(0,i.kt)("a",{parentName:"p",href:"/validators/security"},"research security"),"."))),(0,i.kt)("h2",{id:"1-run-a-fullnode"},"1. Run a fullnode"),(0,i.kt)("p",null,"To become a validator, you must first have ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos")," installed and be able to run a fullnode. You can\nfirst ",(0,i.kt)("a",{parentName:"p",href:"/running-a-full-node/overview"},"setup your fullnode")," if you haven't yet."),(0,i.kt)("p",null,"The rest of the documentation will assume you have followed our instructions and have successfully set up a fullnode."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Not enough funds? Google Cloud can help you")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Running a validator node should be done on a separate machine, not your local computer. This is due to the fact that\nvalidators need to be constantly running to avoid getting slashed (and thus loosing funds). We highly recommend setting\nup a local machine that can run 24/7, even a Raspberry can do the job."),(0,i.kt)("p",{parentName:"div"},"If you do not have the possibility of using a local machine, even an hosted server can be perfect. If you wish to get\nstarted for free, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/free/docs/gcp-free-tier"},"300$ Google Cloud bonus"),". This\nshould be enough to run a validator for 5-6 months."))),(0,i.kt)("h2",{id:"2-create-your-validator"},"2. Create your validator"),(0,i.kt)("p",null,"In order to create a validator, you need to have to create a local wallet first. This will be used in order to hold the\ntokens that you will later delegate to your validator node, allowing him to properly work. In order to create this\nwallet, please run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys add <key_name>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"or")," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--recover")," flag if you already have a secret recovery phrase (mnemonic phase) you'd want to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys add <key_name> --recover\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Key name")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please select a key name that you will easily remember and be able to type fast. This name will be used all over the\nplaces inside other commands later."))),(0,i.kt)("p",null,"Once that you have created your local wallet, it's time to get some tokens to be used as the initial validator stake so\nthat it can run properly. If you are setting up a validator inside one of our testnets, you can request some testnet\ntokens inside our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/yxPRGdq"},"Discord"),". Once you have joined, go inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"#ask-tokens")," channel and\nrun the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!send <your_address>\n")),(0,i.kt)("p",null,"You can get your address by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"desmos keys show <key_name> -a\n")),(0,i.kt)("p",null,"To run a validator node you need to first get your current validator public key that was created when you\nran ",(0,i.kt)("inlineCode",{parentName:"p"},"desmod init"),". Your ",(0,i.kt)("inlineCode",{parentName:"p"},"desmosvalconspub")," (Desmos Validator Consensus Pubkey) can be used to create a new validator by\nstaking tokens. You can find your validator pubkey by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tendermint show-validator\n")),(0,i.kt)("p",null,"To create your validator, just use the following command:"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don't use more staking token than you have!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On Morpheus testnet, we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"udaric")," as the staking token and it will be the example below."),(0,i.kt)("p",{parentName:"div"},"We are going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"udesmos")," as the staking token on Mainnet."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx staking create-validator \\\n  --amount=1000000udaric \\\n  --pubkey=$(desmos tendermint show-validator) \\\n  --moniker="<Your moniker here>" \\\n  --chain-id=<chain_id> \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --gas="auto" \\\n  --gas-adjustment="1.2" \\\n  --gas-prices="0.025udaric" \\\n  --from=<key_name>\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When specifying the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"moniker")," flag, please keep in mind this is going to be the public name associated to your validator. For this reason, it should represent your company name or something else that can easily identify you among all the other validators."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When specifying commission parameters, the ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-max-change-rate")," is used to measure % ",(0,i.kt)("em",{parentName:"p"},"point")," change over the ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-rate"),". E.g. 1% to 2% is a 100% rate increase, but only 1 percentage point."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Min-self-delegation")," is a stritly positive integer that represents the minimum amount of self-delegated staking token your validator must always have. A ",(0,i.kt)("inlineCode",{parentName:"p"},"min-self-delegation")," of 1 means your validator will never have a self-delegation lower than ",(0,i.kt)("inlineCode",{parentName:"p"},"1udaric"),". A valdiator self delegate lower than this number will automatically be unbonded."))),(0,i.kt)("p",null,"You can confirm that you are in the validator set by using a block explorer, e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://morpheus.desmos.network"},"Big Dipper"),"."),(0,i.kt)("h2",{id:"3-edit-the-validator-description"},"3. Edit the validator description"),(0,i.kt)("p",null,"You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below. If a flag is not included in the command the field will default to empty (",(0,i.kt)("inlineCode",{parentName:"p"},"--moniker")," defaults to the machine name) if the field has never been set or remain the same if it has been set in the past."),(0,i.kt)("p",null,"The <key_name> specifies which validator you are editing. If you choose to not include certain flags, remember that the --from flag must be included to identify the validator to update."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--identity")," can be used as to verify identity with systems like Keybase or UPort. When using with Keybase ",(0,i.kt)("inlineCode",{parentName:"p"},"--identity")," should be populated with a 16-digit string that is generated with a ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io"},"keybase.io")," account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows some block explorers to retrieve your Keybase avatar. This is how you can add a logo to your validator profile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx staking edit-validator \\\n  --moniker="choose a moniker" \\\n  --website="https://desmos.network" \\\n  --identity=6A0D65E29A4CBC8E \\\n  --details="To infinity and beyond!" \\\n  --commission-rate="0.10" \\\n  --chain-id=<chain_id> \\\n  --from=<key_name>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-rate")," value must adhere to the following invariants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Must be between 0 and the validator's ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-rate")),(0,i.kt)("li",{parentName:"ul"},"Must not exceed the validator's ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," which is maximum\n% point change rate ",(0,i.kt)("strong",{parentName:"li"},"per day"),". In other words, a validator can only change\nits commission once per day and within ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," bounds.")),(0,i.kt)("h3",{id:"view-the-validator-description"},"View the validator description"),(0,i.kt)("p",null,"View the validator's information with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query staking validator <account_desmos>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx slashing unjail \\\n    --from=<key_name> \\\n    --chain-id=<chain_id>\n")),(0,i.kt)("h2",{id:"4-confirm-your-validator-is-running"},"4. Confirm your validator is running"),(0,i.kt)("p",null,"Your validator is active if the following command returns anything:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query tendermint-validator-set | grep $(desmos status 2>&1 | jq '.ValidatorInfo.PubKey.value')\n")),(0,i.kt)("p",null,"When you query the node status with ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos status"),", it includes the validator pubkey in base64 encoding. If your node is an active validator, the validator pubkey will be shown when you query the validator set."),(0,i.kt)("p",null,"You should now see your validator in one of the Desmos explorers. You are looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"bech32")," encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"operator address")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"desmosvaloper"),". It is another representation of your ",(0,i.kt)("inlineCode",{parentName:"p"},"<key_name>")," that you have used to create this validator."),(0,i.kt)("p",null,"To show the ",(0,i.kt)("inlineCode",{parentName:"p"},"operator address"),", you can run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos keys show <key_name> -a --bech val\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To be in the validator set, you need to have more total voting power than the 200th validator."))))}c.isMDXComponent=!0}}]);