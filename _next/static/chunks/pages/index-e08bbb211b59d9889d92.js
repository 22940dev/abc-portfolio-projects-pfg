_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,s=void 0!==i&&i;return n||o&&s}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("nKUr"),o=n("g4pe"),i=n.n(o);function s(e,t){return{name:e,link:t}}var a={typescript:s("Typescript","https://www.typescriptlang.org/"),javascript:s("Javascript","https://developer.mozilla.org/en/JavaScript"),tailwind:s("Tailwind CSS","https://tailwindcss.com/"),node:s("NodeJS","https://nodejs.org/en/"),discord_js:s("discord.js","https://discord.js.org/"),react:s("React","https://reactjs.org/"),vanilla_js:s("Vanilla JS","http://vanilla-js.com/"),codemirror:s("CodeMirror","https://codemirror.net/"),lua:s("Lua","https://www.lua.org/"),scss:s("Sass CSS","https://sass-lang.com/"),"\u03bchtml":s("\u03bchtml","https://github.com/WebReflection/uhtml"),electron:s("Electron","https://www.electronjs.org/"),zig:s("Zig","https://ziglang.org/"),webpack:s("Webpack","https://webpack.js.org/"),parcel:s("Parcel","https://parceljs.org/"),c:s("C","https://en.wikipedia.org/wiki/C_(programming_language)"),xlib:s("Xlib","https://en.wikipedia.org/wiki/Xlib"),sdl:s("SDL","https://www.libsdl.org/"),tree_sitter:s("Tree-Sitter","https://tree-sitter.github.io/tree-sitter/"),express:s("Express","https://expressjs.com/"),ejs:s("EJS","https://ejs.co/"),nextjs:s("NextJS","https://nextjs.org/"),assembly:s("Assembly","https://en.wikipedia.org/wiki/Assembly_language")};function c(e){var t=a[e.tech];return Object(r.jsx)("a",{href:t.link,class:"hover:underline",target:"_blank",rel:"noreferrer noopener",children:t.name},e.tech)}function l(e){return Object(r.jsxs)("div",{class:"my-2 flex flex-col sm:flex-row hover:shadow-md bg-gray-100 hover:bg-white",onClick:function(t){t.stopPropagation();for(var n=t.target;n&&n!==t.currentTarget;){if(n instanceof HTMLElement&&("A"===n.nodeName||"BUTTON"===n.nodeName||"VIDEO"===n.nodeName||"AUDIO"===n.nodeName||"INPUT"===n.nodeName||"IFRAME"===n.nodeName))return;n=n.parentNode}window.open(e.url)},children:[Object(r.jsx)("div",{class:"sm:w-40 sm:h-auto flex-none overflow-hidden","aria-hidden":"true",children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:Object(r.jsx)("img",{src:e.img,width:e.img_size[0],height:e.img_size[0],alt:"",class:["w-full h-full object-cover",e.img_pixel?"rendering-crisp-edges":""].join(" ")})})}),Object(r.jsxs)("div",{class:"p-4 flex flex-col z-10 relative",children:[Object(r.jsx)("a",{class:"font-black hover:underline",href:e.url,target:"_blank",rel:"noreferrer noopener",children:e.title}),Object(r.jsx)("div",{class:"mb-2 mt-1",children:e.body}),Object(r.jsx)("div",{class:"font-light text-sm",children:(t=e.technologies.map((function(e){return Object(r.jsx)(c,{tech:e},e)})),n=function(){return" \u2022 "},t.flatMap((function(e,t){return 0===t?[e]:[n(),e]})))})]})]});var t,n}function p(e){return Object(r.jsx)("a",{href:e.href,class:"hover:underline text-blue-900",target:"_blank",rel:"noreferrer noopener",children:e.children})}function d(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"pfg's homepage"}),Object(r.jsx)("meta",{name:"description",content:"pfg's homepage website that is a homepage."})]}),Object(r.jsx)("header",{class:"bg-gradient-to-br from-green-700 to-blue-600",children:Object(r.jsx)("div",{class:"px-4 py-16 sm:py-32 flex flex-row justify-center",children:Object(r.jsx)("h1",{class:"w-max text-5xl font-black text-white",children:"pfg's homepage"})})}),Object(r.jsx)("div",{class:"bg-gray-300 min-h-screen",children:Object(r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:Object(r.jsxs)("div",{class:"p-4",children:[Object(r.jsx)("div",{class:"w-full"}),Object(r.jsx)("h2",{class:"font-black text-3xl my-3",children:"Current Projects"}),Object(r.jsx)("p",{class:"mb-3",children:"Large projects I'm working on right now"}),Object(r.jsxs)("div",{class:"flex flex-col",children:[Object(r.jsx)(l,{title:"inter\xb7punct bot",url:"https://interpunct.info",body:Object(r.jsxs)(r.Fragment,{children:["A bot for the chat service"," ",Object(r.jsx)(p,{href:"https://discord.com",children:"Discord"})," that adds many"," ","features including games such as Checkers and Paper Soccer and moderator"," ","functions such as a ticketing system and a way for mods to give people"," ","roles faster using emojis."]}),img:"/icons/interpunct_img.png",img_size:[960,600],technologies:["typescript","node","discord_js"]}),Object(r.jsx)(l,{title:"ThreadReader",url:"https://thread.pfg.pw",body:Object(r.jsxs)(r.Fragment,{children:["A web app I'm making for"," ",Object(r.jsx)(p,{href:"https://reddit.com",children:"Reddit"})," and"," ",Object(r.jsx)(p,{href:"https://joinmastodon.org",children:"Mastodon"})," combining"," ","the best features of both old.reddit and new.reddit and providing a tree"," ","view for Mastodon."]}),img:"/icons/threadreader.png",img_size:[648,408],technologies:["typescript","tailwind","webpack","vanilla_js"]})]}),Object(r.jsx)("h2",{class:"font-black text-3xl mb-3 mt-10",children:"Past Projects"}),Object(r.jsx)("p",{class:"mb-3",children:"Large projects I no longer use or maintain"}),Object(r.jsx)("div",{class:"flex flex-col",children:Object(r.jsx)(l,{title:"ScPL",url:"https://scpl.dev",body:Object(r.jsxs)(r.Fragment,{children:["A programming language that compiles to the iOS Visual Scripting tool,"," ",Object(r.jsx)(p,{href:"https://support.apple.com/guide/shortcuts/welcome/ios",children:"Shortcuts"}),". Had a web editor and compiler, command line compiler, and"," ","vscode extension with diagnostics and autocomplete. ScPL is no longer"," ","maintained and is missing new actions that were added in recent iOS updates."]}),img:"/icons/scpl.png",img_size:[519,328],technologies:["typescript","react","codemirror"]})}),Object(r.jsx)("h2",{class:"font-black text-3xl mb-3 mt-10",children:"One-offs"}),Object(r.jsxs)("p",{class:"mb-3",children:["Other things I worked on at some point in the past and may or may not still use"," ","or maintain."]}),Object(r.jsxs)("div",{class:"flex flex-col",children:[Object(r.jsx)(l,{title:"Clicker",url:"https://clicker.pfg.pw",body:Object(r.jsxs)(r.Fragment,{children:["An exponential growth idle game, originally programmed in Javascript on the"," ","iOS notes app with no indentation and no way to test that the code worked."]}),img:"/icons/clicker.png",img_size:[924,437],technologies:["typescript","webpack","vanilla_js","scss"]}),Object(r.jsx)(l,{title:"electron-music-player",url:"https://github.com/pfgithub/electron-music-player/",body:Object(r.jsxs)(r.Fragment,{children:["A music player written in electron that allows storing lyrics with songs and"," ","searching by lyrics."]}),img:"/icons/musicplayer.png",img_size:[658,377],technologies:["typescript","electron","scss","vanilla_js","\u03bchtml","parcel"]}),Object(r.jsx)(l,{title:"Mapexplorer",url:"https://pfg.pw/mapexplorer",img_pixel:!0,body:Object(r.jsxs)(r.Fragment,{children:["An interactive map for the game"," ",Object(r.jsx)(p,{href:"https://thetravelers.online",children:"thetravelers.online"}),"."," ","Controls: Move and pan with the mouse or touch, Zoom with scroll or pinch,"," ","Select tile with click or tap. Hotkeys: M [toggle m], K [render huge], G"," ","[go to coords]."]}),img:"/icons/mapexplorer.png",img_size:[867,490],technologies:["javascript"]}),Object(r.jsx)(l,{title:"progsim",url:"https://pfg.pw/progsim/progsim",body:Object(r.jsx)(r.Fragment,{children:"An assembly-like programming language intended for beginners to programming."}),img:"/icons/progsim.png",img_size:[485,315],technologies:["javascript","assembly"]}),Object(r.jsx)(l,{title:"Earlygame Run",url:"https://mods.factorio.com/mod/earlygame-run",body:Object(r.jsxs)(r.Fragment,{children:["A mod for the game"," ",Object(r.jsx)(p,{href:"https://factorio.com",children:"Factorio"})," that adds the"," ","ability to run from the moment you start the game."]}),img:"/icons/earlygame_run.png",img_size:[460,256],technologies:["lua"]}),Object(r.jsx)(l,{title:"masc",url:"https://github.com/pfgithub/masc",body:Object(r.jsx)(r.Fragment,{children:"A programming language that compiles to human-readable mips assembly."}),img:"/icons/masc.png",img_size:[324,174],technologies:["typescript"]}),Object(r.jsx)(l,{title:"Leaderboard History",url:"https://pfg.pw/travelersleaderboard/player",body:Object(r.jsxs)(r.Fragment,{children:["An interactive viewer for the leaderboard history for the game"," ",Object(r.jsx)(p,{href:"https://thetravelers.online",children:"thetravelers.online"}),"."]}),img:"/icons/travelersleaderboard.png",img_size:[577,352],technologies:["javascript"]}),Object(r.jsx)(l,{title:"Zcho",url:"https://github.com/pfgithub/zcho",body:Object(r.jsxs)(r.Fragment,{children:["A collection of command-line programs including jsonexplorer, an"," ","interactive explorer for json data, z menu, an interactive menu"," ","for shell scripts, and some other helper tools for shell scripts."]}),img:"/icons/jsonexplorer.png",img_size:[425,211],technologies:["zig"]}),Object(r.jsx)(l,{title:"Travelers API",url:"https://www.npmjs.com/package/travelersapi",body:Object(r.jsxs)(r.Fragment,{children:["A node API for creating bots for"," ",Object(r.jsx)(p,{href:"https://thetravelers.online",children:"thetravelers.online"}),"."]}),img:"/icons/travelersapi.png",img_size:[760,405],technologies:["typescript","node"]}),Object(r.jsx)(l,{title:"Mousebuttons",url:"https://github.com/pfgithub/mousebuttons",body:Object(r.jsxs)(r.Fragment,{children:["A command-line program that makes it possible to use a system-wide push"," ","to talk key in Zoom and other apps. Another program that allows configuring"," ","mice with many buttons to have custom chording sequences, such as holding"," ","down a side button and scrolling to change volume."]}),img:"/icons/mousebuttons.png",img_size:[91,67],technologies:["zig","xlib"]}),Object(r.jsx)(l,{title:"Filetransfer",url:"https://github.com/pfgithub/filetransfer",body:Object(r.jsx)(r.Fragment,{children:"A program for transferring files quickly within your local network."}),img:"/icons/filetransfer.png",img_size:[566,283],technologies:["javascript","express","ejs"]}),Object(r.jsx)(l,{title:"Pixelcode",url:"https://github.com/pfgithub/pixelcode",body:Object(r.jsxs)(r.Fragment,{children:["A neat-looking demo of a pixel art code editor. Only a demo, not usable"," ","or maintained."]}),img:"/icons/pixelcode.png",img_size:[347,107],img_pixel:!0,technologies:["zig","sdl","tree_sitter"]}),Object(r.jsx)(l,{title:"ZigMD",url:"https://github.com/pfgithub/zigmd",body:Object(r.jsx)(r.Fragment,{children:"A testing ground for immediate mode GUI and text editors and various other things."}),img:"/icons/zigmd.png",img_size:[636,390],technologies:["zig","sdl"]}),Object(r.jsx)(l,{title:"Windowsystem",url:"https://windowsystem.pfg.pw/",body:Object(r.jsx)(r.Fragment,{children:"A demo of a window system that supports resizing on touchscreen interfaces."}),img:"/icons/windowsystem.png",img_size:[559,312],technologies:["typescript","webpack","scss"]}),Object(r.jsx)(l,{title:"Sitepages",url:"https://pfg.pw/sitepages",body:Object(r.jsx)(r.Fragment,{children:"A collection of random unrelated web tools to perform various functions."}),img:"/icons/sitepages.png",img_size:[341,165],technologies:["javascript","vanilla_js","\u03bchtml"]})]}),Object(r.jsx)("h2",{class:"font-black text-3xl mb-3 mt-10",children:"Links"}),Object(r.jsx)("div",{class:"flex flex-col",children:Object(r.jsx)(l,{title:"Github",url:"https://github.com/pfgithub",body:Object(r.jsx)(r.Fragment,{children:"My github page."}),img:"/icons/github.png",img_size:[744,441],technologies:[]})}),Object(r.jsx)("div",{class:"mb-4"})]})})}),Object(r.jsx)("footer",{class:"bg-gray-600 text-white",children:Object(r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:Object(r.jsxs)("div",{class:"p-4",children:["This page was made with ",Object(r.jsx)("span",{class:"underline",children:Object(r.jsx)(c,{tech:"nextjs"})}),","," ",Object(r.jsx)("span",{class:"underline",children:Object(r.jsx)(c,{tech:"typescript"})}),","," ","and ",Object(r.jsx)("span",{class:"underline",children:Object(r.jsx)(c,{tech:"tailwind"})}),"."," ",Object(r.jsx)("div",{class:"mb-2"}),Object(r.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com",target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Source"})," \xb7"," ",Object(r.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com/edit/main/pages/index.tsx",target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Edit"})]})})})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=p,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),a=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,l=u.length;c<l;c++){var p=u[c];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?i=!1:n.add(p);else{var d=o.props[p],h=r[p]||new Set;"name"===p&&s||!h.has(d)?(h.add(d),r[p]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}g.rewind=function(){};var m=g;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||s()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),a=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),d=function(e){s(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["/EDR",0,1]]]);