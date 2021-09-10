"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7260],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,m=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,k=p["".concat(m,".").concat(u)]||p[u]||l[u]||s;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=p;var a={};for(var m in n)hasOwnProperty.call(n,m)&&(a[m]=n[m]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<s;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2157:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],a={},m="Setting up Tendermint KMS + Softsign",d={unversionedId:"validators/kms/kms_softsign",id:"version-mainnet/validators/kms/kms_softsign",isDocsHomePage:!1,title:"Setting up Tendermint KMS + Softsign",description:"KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.",source:"@site/versioned_docs/version-mainnet/04-validators/kms/kms_softsign.md",sourceDirName:"04-validators/kms",slug:"/validators/kms/kms_softsign",permalink:"/validators/kms/kms_softsign",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/04-validators/kms/kms_softsign.md",version:"mainnet",lastUpdatedAt:1631282234,formattedLastUpdatedAt:"9/10/2021",frontMatter:{}},c=[{value:"Config file",id:"config-file",children:[{value:"Create the folders and file",id:"create-the-folders-and-file",children:[]},{value:"Add your configuration",id:"add-your-configuration",children:[]},{value:"Get the Identity key",id:"get-the-identity-key",children:[]},{value:"Import the private validator key",id:"import-the-private-validator-key",children:[]},{value:"Chain configuration",id:"chain-configuration",children:[]},{value:"Start the tmkms",id:"start-the-tmkms",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"setting-up-tendermint-kms--softsign"},"Setting up Tendermint KMS + Softsign"),(0,s.kt)("p",null,"::: danger Warning\nKMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.\n:::"),(0,s.kt)("h2",{id:"config-file"},"Config file"),(0,s.kt)("h3",{id:"create-the-folders-and-file"},"Create the folders and file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p kms/home\ncd kms/home\nnano tmkms.toml\n")),(0,s.kt)("h3",{id:"add-your-configuration"},"Add your configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'# Example Tendermint KMS configuration file\n\n## Chain Configuration\n\n[[chain]]\nid = "<chain-id>"\nkey_format = { type = "bech32", account_key_prefix = "desmospub", consensus_key_prefix = "desmosvalconspub" }\nstate_file = "/root/kms/home/state/cosmoshub-3-consensus.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["desmos-mainnet-1"]\nkey_type = "consensus"\npath = "/root/kms/home/secrets/validator-consensus.key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "desmos-mainnet"\naddr = "tcp://127.0.0.1:26658"\nsecret_key = "/root/kms/home/secrets/kms-identity.key"\nprotocol_version = "v0.34"\nreconnect = true\n\n')),(0,s.kt)("h3",{id:"get-the-identity-key"},"Get the Identity key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query staking validator <valoperaddress>\n")),(0,s.kt)("p",null,"You will get a similar response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'commission:\n  commission_rates:\n    max_change_rate: "0.050000000000000000"\n    max_rate: "0.500000000000000000"\n    rate: "0.050000000000000000"\n  update_time: "2021-06-08T13:56:42.931427534Z"\nconsensus_pubkey:\n  \'@type\': /cosmos.crypto.ed25519.PubKey\n  key: eUhoKzRsVUhPMDlvUWdjWmo1RmNtODFRqTT0=\ndelegator_shares: "9999999999.000080008000800080"\ndescription:\n  details: ""\n  identity: 12FA04A22E47GN17\n  moniker: testman\n  security_contact: ""\n  website: ""\njailed: false\nmin_self_delegation: "1"\noperator_address: desmosvaloper1...\nstatus: BOND_STATUS_BONDED\ntokens: "9999999999"\nunbonding_height: "617524"\nunbonding_time: "2021-05-13T05:05:09.783549624Z"\n\n')),(0,s.kt)("p",null,"Copy the ",(0,s.kt)("inlineCode",{parentName:"p"},"consensus_pubkey")," ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," value and put it inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"kms-identity.key")," file"),(0,s.kt)("h3",{id:"import-the-private-validator-key"},"Import the private validator key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/.desmos/config\n\ntmkms softsign import priv_validator_key.json "/root/kms/home/secret/desmos-mainnet.consensus.key"\n')),(0,s.kt)("h3",{id:"chain-configuration"},"Chain configuration"),(0,s.kt)("p",null,"Now you need to enable KMS access by editing .desmos/config/config.toml.",(0,s.kt)("br",{parentName:"p"}),"\n","In this file, modify ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_laddr")," to create a listening address/port or a unix socket in desmos."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')),(0,s.kt)("h3",{id:"start-the-tmkms"},"Start the tmkms"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c ~/.tmkms/tmkms.toml\n")),(0,s.kt)("p",null,"If you've setup everything properly you should see a log like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"2021-06-09T14:23:51.525184Z  INFO tmkms::commands::start: tmkms 0.10.1 starting up...\n2021-06-09T14:23:51.525380Z  INFO tmkms::keyring: [keyring:softsign] added consensus Ed25519 key: desmosvalconspub1zcjduepqepu8acj4qua576zzquvcly2un0xkzhwh0ehvgmx8gxgl34zhkceskthfp6\n2021-06-09T14:23:51.526030Z  INFO tmkms::connection::tcp: KMS node ID: 7489C3177FB578314099657A7B56CC241144CCC8\n2021-06-09T14:23:51.527591Z  INFO tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659] connected to validator successfully\n2021-06-09T14:23:51.527625Z  WARN tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659]: unverified validator peer ID! (6CA3A1674B1AE6774D1BA6E100D559C5BF80F82B)\n2021-06-09T14:35:20.416891Z  INFO tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659] signed PreCommit:78AD7099DE at h/r/s 609456/0/2 (0 ms)\n2021-06-09T14:35:25.792444Z  INFO tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659] signed PreVote:2DA528546B at h/r/s 609457/0/1 (0 ms)\n2021-06-09T14:35:26.126467Z  INFO tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659] signed PreCommit:2DA528546B at h/r/s 609457/0/2 (0 ms)\n2021-06-09T14:35:31.529730Z  INFO tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659] signed PreVote:AD37ACB851 at h/r/s 609458/0/1 (0 ms)\n2021-06-09T14:35:31.793969Z  INFO tmkms::session: [desmos-mainnet@tcp://127.0.0.1:26659] signed PreCommit:AD37ACB851 at h/r/s 609458/0/2 (0 ms)\n")))}p.isMDXComponent=!0}}]);