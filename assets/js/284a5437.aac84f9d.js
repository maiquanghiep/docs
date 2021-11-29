"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[316],{3905:function(e,o,n){n.d(o,{Zo:function(){return d},kt:function(){return c}});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),u=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},d=function(e){var o=u(e.components);return t.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,f=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return n?t.createElement(f,a(a({ref:o},d),{},{components:n})):t.createElement(f,a({ref:o},d))}));function c(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6414:function(e,o,n){n.r(o),n.d(o,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"cosmovisor",title:"Use Cosmovisor",sidebar_position:5},l="Cosmovisor",u={unversionedId:"fullnode/cosmovisor",id:"version-mainnet/fullnode/cosmovisor",isDocsHomePage:!1,title:"Use Cosmovisor",description:"The Cosmos team provides a tool named Cosmovisor that allows your node to perform some automatic operations when needed. This is particularly useful when dealing with on-chain upgrades, because Cosmovisor can help you by taking care of downloading the updated binary and restarting the node for you.",source:"@site/versioned_docs/version-mainnet/03-fullnode/05-cosmovisor.md",sourceDirName:"03-fullnode",slug:"/fullnode/cosmovisor",permalink:"/fullnode/cosmovisor",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/03-fullnode/05-cosmovisor.md",version:"mainnet",lastUpdatedAt:1638184017,formattedLastUpdatedAt:"11/29/2021",sidebarPosition:5,frontMatter:{id:"cosmovisor",title:"Use Cosmovisor",sidebar_position:5},sidebar:"version-mainnet/docs",previous:{title:"Use RocksDB",permalink:"/fullnode/rocksdb-installation"},next:{title:"Overview",permalink:"/validators/overview"}},d=[{value:"Setup",id:"setup",children:[{value:"1. Downloading Cosmovisor",id:"1-downloading-cosmovisor",children:[]},{value:"2. Setting up environmental variables",id:"2-setting-up-environmental-variables",children:[]},{value:"3. Copying Desmos files in the proper folders",id:"3-copying-desmos-files-in-the-proper-folders",children:[]},{value:"4. Restarting your node",id:"4-restarting-your-node",children:[]}]}],p={toc:d};function m(e){var o=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cosmovisor"},"Cosmovisor"),(0,i.kt)("p",null,"The Cosmos team provides a tool named ",(0,i.kt)("em",{parentName:"p"},"Cosmovisor")," that allows your node to perform some automatic operations when needed. This is particularly useful when dealing with on-chain upgrades, because Cosmovisor can help you by taking care of downloading the updated binary and restarting the node for you."),(0,i.kt)("p",null,"If you want to learn how to setup Cosmovisor inside your full or validator node, please follow the guide below."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"1-downloading-cosmovisor"},"1. Downloading Cosmovisor"),(0,i.kt)("p",null,"To install the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor"),", run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest\n")),(0,i.kt)("p",null,"To install a previous version, you can specify the version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v0.1.0\n")),(0,i.kt)("p",null,"You can also install from source by pulling the cosmos-sdk repository and switching to the correct version and building as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone git@github.com:cosmos/cosmos-sdk\ncd cosmos-sdk\ngit checkout cosmovisor/vx.x.x\ncd cosmovisor\nmake\n")),(0,i.kt)("p",null,"This will build cosmovisor in your current directory. Afterwards you may want to put it into your machine's PATH like as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cp cosmovisor ~/go/bin/cosmovisor\n")),(0,i.kt)("p",null,"To check your cosmovisor version, you can use this command and make sure it matches the version you've installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'strings $(which cosmovisor) | egrep -e "mod\\s+github.com/cosmos/cosmos-sdk/cosmovisor\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: If you are using go ",(0,i.kt)("inlineCode",{parentName:"em"},"v1.15")," or earlier, you will need to use ",(0,i.kt)("inlineCode",{parentName:"em"},"go get"),", and you may want to run the command outside a project directory.")),(0,i.kt)("h3",{id:"2-setting-up-environmental-variables"},"2. Setting up environmental variables"),(0,i.kt)("p",null,"Cosmovisor relies on the following environmental variables to work properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_HOME")," is the location where upgrade binaries should be kept (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.desmos"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_NAME")," is the name of the binary itself (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"desmos"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_ALLOW_DOWNLOAD_BINARIES")," (",(0,i.kt)("em",{parentName:"li"},"optional"),", default = ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),") if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," will enable auto-downloading of new binaries\n(for security reasons, this is intended for full nodes rather than validators)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_RESTART_AFTER_UPGRADE")," (",(0,i.kt)("em",{parentName:"li"},"optional"),", default = ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," it will restart the sub-process with the same\ncommand line arguments and flags (but new binary) after a successful upgrade. By default, ",(0,i.kt)("inlineCode",{parentName:"li"},"cosmovisor")," dies\nafterwards and allows the supervisor to restart it if needed. Note that this will not auto-restart the child\nif there was an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAEMON_POLL_INTERVAL")," (",(0,i.kt)("em",{parentName:"li"},"optional"),", default = ",(0,i.kt)("inlineCode",{parentName:"li"},"300ms"),") is the interval length for polling the upgrade plan file. The value can either be a number (in milliseconds) or a duration (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1s"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNSAFE_SKIP_BACKUP")," (",(0,i.kt)("em",{parentName:"li"},"optional"),", default = ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"), if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", upgrades directly without performing a backup. Otherwise (",(0,i.kt)("inlineCode",{parentName:"li"},"false"),") backs up the data before trying the upgrade. The default value of ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," is useful and recommended in case of failures and when a backup needed to rollback. We recommend using the default backup option ",(0,i.kt)("inlineCode",{parentName:"li"},"UNSAFE_SKIP_BACKUP=false"),".")),(0,i.kt)("p",null,"To properly set those variables, we suggest you to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.profile")," file so that they are loaded when you log into your machine. To edit this file you can simply run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo nano ~/.profile\n")),(0,i.kt)("p",null,"Once you're in, we suggest you to set the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export DAEMON_HOME=$HOME/.desmos\nexport DAEMON_NAME=desmos\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES=true\nexport DAEMON_RESTART_AFTER_UPGRADE=true\nexport UNSAFE_SKIP_BACKUP=false\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT"),": If you don't have much free disk space, please set ",(0,i.kt)("inlineCode",{parentName:"p"},"UNSAFE_SKIP_BACKUP=true")," to avoid your node failing the upgrade due to insufficient disk space when creating the backup."),(0,i.kt)("p",null,"Once you're done, please reload the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.profile")," file by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.profile\n")),(0,i.kt)("p",null,"You can verify the values set by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo $DAEMON_NAME\n")),(0,i.kt)("p",null,"If this outputs ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos")," you are ready to go."),(0,i.kt)("h3",{id:"3-copying-desmos-files-in-the-proper-folders"},"3. Copying Desmos files in the proper folders"),(0,i.kt)("p",null,"In order to work properly, Cosmovisor needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos")," binary to be placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.desmos/cosmovisor/genesis/bin")," folder. To do this you can simply run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/.desmos/cosmovisor/genesis/bin/\ncp $(which desmos) ~/.desmos/cosmovisor/genesis/bin/\n")),(0,i.kt)("p",null,"To verify that you have setup everything correctly, you can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor version\n")),(0,i.kt)("p",null,"This should output the Desmos version."),(0,i.kt)("h3",{id:"4-restarting-your-node"},"4. Restarting your node"),(0,i.kt)("p",null,"Finally, if you've setup everything correctly you can now restart your node. To do this you can simply stop the running ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos start")," and re-start your Desmos node using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cosmovisor start\n")),(0,i.kt)("h4",{id:"updating-the-service-file"},"Updating the service file"),(0,i.kt)("p",null,"If you are running your node using a service, you need to update your service file to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmovisor")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"desmos"),". To do this you can simply run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sudo tee /etc/systemd/system/desmosd.service > /dev/null <<EOF  \n[Unit]\nDescription=Desmos Full Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\nEnvironment="DAEMON_HOME=$HOME/.desmos"\nEnvironment="DAEMON_NAME=desmos"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\nEnvironment="UNSAFE_SKIP_BACKUP=false"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT"),": If you don't have much free disk space, please set ",(0,i.kt)("inlineCode",{parentName:"p"},"UNSAFE_SKIP_BACKUP=true")," to avoid your node failing the upgrade due to insufficient disk space when creating the backup."),(0,i.kt)("p",null,"Once you have edited your system file, you need to reload it using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl daemon-reload\n")),(0,i.kt)("p",null,"Finally, you can restart is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart desmosd\n")))}m.isMDXComponent=!0}}]);