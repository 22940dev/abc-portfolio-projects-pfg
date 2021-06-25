_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("23aj")}])},"23aj":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var r=s("nKUr"),n=s("g4pe"),i=s.n(n),o=s("YFqc"),c=s.n(o),a=s("8y3H");function l(e,t){return{name:e,link:t}}var h={typescript:l("Typescript","https://www.typescriptlang.org/"),javascript:l("Javascript","https://developer.mozilla.org/en/JavaScript"),tailwind:l("Tailwind CSS","https://tailwindcss.com/"),node:l("NodeJS","https://nodejs.org/en/"),discord_js:l("discord.js","https://discord.js.org/"),react:l("React","https://reactjs.org/"),vanilla_js:l("Vanilla JS","http://vanilla-js.com/"),codemirror:l("CodeMirror","https://codemirror.net/"),lua:l("Lua","https://www.lua.org/"),scss:l("Sass CSS","https://sass-lang.com/"),"\u03bchtml":l("\u03bchtml","https://github.com/WebReflection/uhtml"),electron:l("Electron","https://www.electronjs.org/"),zig:l("Zig","https://ziglang.org/"),webpack:l("Webpack","https://webpack.js.org/"),parcel:l("Parcel","https://parceljs.org/"),c:l("C","https://en.wikipedia.org/wiki/C_(programming_language)"),xlib:l("Xlib","https://en.wikipedia.org/wiki/Xlib"),sdl:l("SDL","https://www.libsdl.org/"),tree_sitter:l("Tree-Sitter","https://tree-sitter.github.io/tree-sitter/"),express:l("Express","https://expressjs.com/"),ejs:l("EJS","https://ejs.co/"),nextjs:l("NextJS","https://nextjs.org/"),assembly:l("Assembly","https://en.wikipedia.org/wiki/Assembly_language"),solid:l("SOLID","https://solidjs.com/")};function d(e){var t=h[e.tech];return Object(r.jsx)("a",{href:t.link,class:"hover:underline",target:"_blank",rel:"noreferrer noopener",children:t.name},e.tech)}function p(e){return Object(r.jsxs)("div",{class:"my-2 flex flex-col sm:flex-row hover:shadow-md bg-gray-100 hover:bg-white",onClick:function(t){t.stopPropagation();for(var s=t.target;s&&s!==t.currentTarget;){if(s instanceof HTMLElement&&("A"===s.nodeName||"BUTTON"===s.nodeName||"VIDEO"===s.nodeName||"AUDIO"===s.nodeName||"INPUT"===s.nodeName||"IFRAME"===s.nodeName))return;s=s.parentNode}window.open(e.url)},children:[Object(r.jsx)("div",{class:"sm:w-40 sm:h-auto flex-none overflow-hidden","aria-hidden":"true",children:Object(r.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:Object(r.jsx)("img",{src:e.img,width:e.img_size[0],height:e.img_size[0],alt:"",class:["w-full h-full object-cover",e.img_pixel?"rendering-crisp-edges":""].join(" ")})})}),Object(r.jsxs)("div",{class:"p-4 flex flex-col z-10 relative",children:[Object(r.jsx)("a",{class:"font-black hover:underline",href:e.url,target:"_blank",rel:"noreferrer noopener",children:e.title}),Object(r.jsx)("div",{class:"mb-2 mt-1",children:e.body}),Object(r.jsx)("div",{class:"font-light text-sm",children:(t=e.technologies.map((function(e){return Object(r.jsx)(d,{tech:e},e)})),s=function(){return" \u2022 "},t.flatMap((function(e,t){return 0===t?[e]:[s(),e]})))})]})]});var t,s}function g(e){return Object(r.jsx)(c.a,{href:e.href,children:Object(r.jsx)("a",{class:"text-blue-700 hover:underline",children:e.children})})}function m(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{href:"/about",children:"about"})," \xb7 ",Object(r.jsx)(g,{href:"/tools",children:"tools"})," \xb7 ",Object(r.jsx)(g,{href:"/now",children:"now"})," \xb7 ",Object(r.jsx)(g,{href:"/blog",children:"blog"})]})}function u(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"pfg's homepage"}),Object(r.jsx)("meta",{name:"description",content:"pfg's homepage website that is a homepage."})]}),Object(r.jsx)("header",{class:"bg-gradient-to-br from-green-700 to-blue-600",children:Object(r.jsx)("div",{class:"px-4 py-16 sm:py-32 flex flex-row justify-center",children:Object(r.jsx)("h1",{class:"w-max text-5xl font-black text-white",children:"pfg's homepage"})})}),Object(r.jsx)("div",{class:"bg-gray-300 min-h-screen",children:Object(r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:Object(r.jsxs)("div",{class:"p-4",children:[Object(r.jsx)("div",{class:"w-full"}),Object(r.jsx)(m,{}),Object(r.jsx)("h2",{class:"font-black text-3xl my-3",children:"Current Projects"}),Object(r.jsx)("p",{class:"mb-3",children:"Large projects I'm working on right now"}),Object(r.jsxs)("div",{class:"flex flex-col",children:[Object(r.jsx)(p,{title:"inter\xb7punct bot",url:"https://interpunct.info",body:Object(r.jsxs)(r.Fragment,{children:["A bot for the chat service"," ",Object(r.jsx)(a.a,{href:"https://discord.com",children:"Discord"})," that adds many"," ","features including games such as Checkers and Paper Soccer and moderator"," ","functions such as a ticketing system and a way for mods to give people"," ","roles faster using emojis."]}),img:"/icons/interpunct_img.png",img_size:[960,600],technologies:["typescript","node","discord_js"]}),Object(r.jsx)(p,{title:"ThreadReader",url:"https://thread.pfg.pw",body:Object(r.jsxs)(r.Fragment,{children:["A web app I'm making for"," ",Object(r.jsx)(a.a,{href:"https://reddit.com",children:"Reddit"})," and"," ",Object(r.jsx)(a.a,{href:"https://joinmastodon.org",children:"Mastodon"})," combining"," ","the best features of both old.reddit and new.reddit and providing a tree"," ","view for Mastodon."]}),img:"/icons/threadreader.png",img_size:[648,408],technologies:["solid","typescript","tailwind","webpack","vanilla_js"]})]}),Object(r.jsx)("h2",{class:"font-black text-3xl mb-3 mt-10",children:"Past Projects"}),Object(r.jsx)("p",{class:"mb-3",children:"Large projects I no longer use or maintain"}),Object(r.jsx)("div",{class:"flex flex-col",children:Object(r.jsx)(p,{title:"ScPL",url:"https://scpl.dev",body:Object(r.jsxs)(r.Fragment,{children:["A programming language that compiles to the iOS Visual Scripting tool,"," ",Object(r.jsx)(a.a,{href:"https://support.apple.com/guide/shortcuts/welcome/ios",children:"Shortcuts"}),". Had a web editor and compiler, command line compiler, and"," ","vscode extension with diagnostics and autocomplete. ScPL is no longer"," ","maintained and is missing new actions that were added in recent iOS updates."]}),img:"/icons/scpl.png",img_size:[519,328],technologies:["typescript","react","codemirror"]})}),Object(r.jsx)("h2",{class:"font-black text-3xl mb-3 mt-10",children:"One-offs"}),Object(r.jsxs)("p",{class:"mb-3",children:["Other things I worked on at some point in the past and may or may not still use"," ","or maintain."]}),Object(r.jsxs)("div",{class:"flex flex-col",children:[null,Object(r.jsx)(p,{title:"Clicker",url:"https://clicker.pfg.pw",body:Object(r.jsxs)(r.Fragment,{children:["An exponential growth idle game, originally programmed in Javascript on the"," ","iOS notes app with no indentation and no way to test that the code worked."]}),img:"/icons/clicker.png",img_size:[924,437],technologies:["typescript","webpack","vanilla_js","scss"]}),Object(r.jsx)(p,{title:"electron-music-player",url:"https://github.com/pfgithub/electron-music-player/",body:Object(r.jsxs)(r.Fragment,{children:["A music player written in electron that allows storing lyrics with songs and"," ","searching by lyrics."]}),img:"/icons/musicplayer.png",img_size:[658,377],technologies:["typescript","electron","scss","vanilla_js","\u03bchtml","parcel"]}),Object(r.jsx)(p,{title:"Mapexplorer",url:"https://pfg.pw/mapexplorer",img_pixel:!0,body:Object(r.jsxs)(r.Fragment,{children:["An interactive map for the game"," ",Object(r.jsx)(a.a,{href:"https://thetravelers.online",children:"thetravelers.online"}),"."," ","Controls: Move and pan with the mouse or touch, Zoom with scroll or pinch,"," ","Select tile with click or tap. Hotkeys: M [toggle m], K [render huge], G"," ","[go to coords]."]}),img:"/icons/mapexplorer.png",img_size:[867,490],technologies:["javascript"]}),Object(r.jsx)(p,{title:"progsim",url:"https://pfg.pw/progsim/progsim",body:Object(r.jsx)(r.Fragment,{children:"An assembly-like programming language intended for beginners to programming."}),img:"/icons/progsim.png",img_size:[485,315],technologies:["javascript","assembly"]}),Object(r.jsx)(p,{title:"Earlygame Run",url:"https://mods.factorio.com/mod/earlygame-run",body:Object(r.jsxs)(r.Fragment,{children:["A mod for the game"," ",Object(r.jsx)(a.a,{href:"https://factorio.com",children:"Factorio"})," that adds the"," ","ability to run from the moment you start the game."]}),img:"/icons/earlygame_run.png",img_size:[460,256],technologies:["lua"]}),Object(r.jsx)(p,{title:"masc",url:"https://github.com/pfgithub/masc",body:Object(r.jsx)(r.Fragment,{children:"A programming language that compiles to human-readable mips assembly."}),img:"/icons/masc.png",img_size:[324,174],technologies:["typescript"]}),Object(r.jsx)(p,{title:"Leaderboard History",url:"https://pfg.pw/travelersleaderboard/player",body:Object(r.jsxs)(r.Fragment,{children:["An interactive viewer for the leaderboard history for the game"," ",Object(r.jsx)(a.a,{href:"https://thetravelers.online",children:"thetravelers.online"}),"."]}),img:"/icons/travelersleaderboard.png",img_size:[577,352],technologies:["javascript"]}),Object(r.jsx)(p,{title:"Zcho",url:"https://github.com/pfgithub/zcho",body:Object(r.jsxs)(r.Fragment,{children:["A collection of command-line programs including jsonexplorer, an"," ","interactive explorer for json data, z menu, an interactive menu"," ","for shell scripts, and some other helper tools for shell scripts."]}),img:"/icons/jsonexplorer.png",img_size:[425,211],technologies:["zig"]}),Object(r.jsx)(p,{title:"Travelers API",url:"https://www.npmjs.com/package/travelersapi",body:Object(r.jsxs)(r.Fragment,{children:["A node API for creating bots for"," ",Object(r.jsx)(a.a,{href:"https://thetravelers.online",children:"thetravelers.online"}),"."]}),img:"/icons/travelersapi.png",img_size:[760,405],technologies:["typescript","node"]}),Object(r.jsx)(p,{title:"Mousebuttons",url:"https://github.com/pfgithub/mousebuttons",body:Object(r.jsxs)(r.Fragment,{children:["A command-line program that makes it possible to use a system-wide push"," ","to talk key in Zoom and other apps. Another program that allows configuring"," ","mice with many buttons to have custom chording sequences, such as holding"," ","down a side button and scrolling to change volume."]}),img:"/icons/mousebuttons.png",img_size:[91,67],technologies:["zig","xlib"]}),Object(r.jsx)(p,{title:"Filetransfer",url:"https://github.com/pfgithub/filetransfer",body:Object(r.jsx)(r.Fragment,{children:"A program for transferring files quickly within your local network."}),img:"/icons/filetransfer.png",img_size:[566,283],technologies:["javascript","express","ejs"]}),Object(r.jsx)(p,{title:"Pixelcode",url:"https://github.com/pfgithub/pixelcode",body:Object(r.jsxs)(r.Fragment,{children:["A neat-looking demo of a pixel art code editor. Only a demo, not usable"," ","or maintained."]}),img:"/icons/pixelcode.png",img_size:[347,107],img_pixel:!0,technologies:["zig","sdl","tree_sitter"]}),Object(r.jsx)(p,{title:"ZigMD",url:"https://github.com/pfgithub/zigmd",body:Object(r.jsx)(r.Fragment,{children:"A testing ground for immediate mode GUI and text editors and various other things."}),img:"/icons/zigmd.png",img_size:[636,390],technologies:["zig","sdl"]}),Object(r.jsx)(p,{title:"Windowsystem",url:"https://windowsystem.pfg.pw/",body:Object(r.jsx)(r.Fragment,{children:"A demo of a window system that supports resizing on touchscreen interfaces."}),img:"/icons/windowsystem.png",img_size:[559,312],technologies:["typescript","webpack","scss"]}),Object(r.jsx)(p,{title:"Sitepages",url:"https://pfg.pw/sitepages",body:Object(r.jsx)(r.Fragment,{children:"A collection of random unrelated web tools to perform various functions."}),img:"/icons/sitepages.png",img_size:[341,165],technologies:["javascript","vanilla_js","\u03bchtml"]}),Object(r.jsx)(p,{title:"Tools",url:"/tools",body:Object(r.jsx)(r.Fragment,{children:"Some helpful tools, like sitepages but with more effort put into each."}),img:"/icons/tools.png",img_size:[308,202],technologies:["nextjs","typescript","tailwind"]})]}),Object(r.jsx)("h2",{class:"font-black text-3xl mb-3 mt-10",children:"Links"}),Object(r.jsx)("div",{class:"flex flex-col",children:Object(r.jsx)(p,{title:"Github",url:"https://github.com/pfgithub",body:Object(r.jsx)(r.Fragment,{children:"My github page."}),img:"/icons/github.png",img_size:[744,441],technologies:[]})}),Object(r.jsx)("div",{class:"mb-4"})]})})}),Object(r.jsx)("footer",{class:"bg-gray-600 text-white",children:Object(r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:Object(r.jsxs)("div",{class:"p-4",children:["This page was made with ",Object(r.jsx)("span",{class:"underline",children:Object(r.jsx)(d,{tech:"nextjs"})}),","," ",Object(r.jsx)("span",{class:"underline",children:Object(r.jsx)(d,{tech:"typescript"})}),","," ","and ",Object(r.jsx)("span",{class:"underline",children:Object(r.jsx)(d,{tech:"tailwind"})}),"."," ",Object(r.jsx)("div",{class:"mb-2"}),Object(r.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com",target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Source"})," \xb7"," ",Object(r.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com/edit/main/pages/index.tsx",target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Edit"})]})})})]})}},"8y3H":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var r=s("nKUr");function n(e){return Object(r.jsx)("a",{href:e.href,class:"hover:underline text-blue-900",target:"_blank",rel:"noreferrer noopener",children:e.children})}},YFqc:function(e,t,s){e.exports=s("cTJO")},cTJO:function(e,t,s){"use strict";var r=s("J4zp"),n=s("284h");t.__esModule=!0,t.default=void 0;var i=n(s("q1tI")),o=s("elyg"),c=s("nOHt"),a=s("vNVm"),l={};function h(e,t,s,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,s,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+s+(n?"%"+n:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,s=(0,c.useRouter)(),n=s&&s.pathname||"/",d=i.default.useMemo((function(){var t=(0,o.resolveHref)(n,e.href,!0),s=r(t,2),i=s[0],c=s[1];return{href:i,as:e.as?(0,o.resolveHref)(n,e.as):c||i}}),[n,e.href,e.as]),p=d.href,g=d.as,m=e.children,u=e.replace,j=e.shallow,b=e.scroll,f=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var x=i.Children.only(m),O=x&&"object"===typeof x&&x.ref,v=(0,a.useIntersection)({rootMargin:"200px"}),w=r(v,2),y=w[0],_=w[1],k=i.default.useCallback((function(e){y(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,y]);(0,i.useEffect)((function(){var e=_&&t&&(0,o.isLocalURL)(p),r="undefined"!==typeof f?f:s&&s.locale,n=l[p+"%"+g+(r?"%"+r:"")];e&&!n&&h(s,p,g,{locale:r})}),[g,p,_,f,t,s]);var z={ref:k,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,s,r,n,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(s))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[n?"replace":"push"](s,r,{shallow:i,locale:a,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,s,p,g,u,j,b,f)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),h(s,p,g,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var A="undefined"!==typeof f?f:s&&s.locale,F=s&&s.isLocaleDomain&&(0,o.getDomainLocale)(g,A,s&&s.locales,s&&s.domainLocales);z.href=F||(0,o.addBasePath)((0,o.addLocale)(g,A,s&&s.defaultLocale))}return i.default.cloneElement(x,z)};t.default=d},g4pe:function(e,t,s){e.exports=s("8Kt/")},vNVm:function(e,t,s){"use strict";var r=s("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,s=e.disabled||!o,a=(0,n.useRef)(),l=(0,n.useState)(!1),h=r(l,2),d=h[0],p=h[1],g=(0,n.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),s||d||e&&e.tagName&&(a.current=function(e,t,s){var r=function(e){var t=e.rootMargin||"",s=c.get(t);if(s)return s;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;t&&s&&t(s)}))}),e);return c.set(t,s={id:t,observer:n,elements:r}),s}(s),n=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(n))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[s,t,d]);return(0,n.useEffect)((function(){if(!o&&!d){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[g,d]};var n=s("q1tI"),i=s("0G5g"),o="undefined"!==typeof IntersectionObserver;var c=new Map}},[["/EDR",0,2,1]]]);