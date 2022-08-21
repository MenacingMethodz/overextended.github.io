"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[212],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7640:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9496),r=n(1626),i="tabItem_zeWL";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},866:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(5443),r=n(9496),i=n(1626),o=n(4252),l=n(1135),u=n(9162),p=n(3946),s="tabList_gs2P",m="tabItem_Ugfh";function c(e){var t,n,o=e.lazy,c=e.block,d=e.defaultValue,h=e.values,b=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),y=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,r.useState)(x),E=C[0],O=C[1],_=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=y[b];null!=I&&I!==E&&v.some((function(e){return e.value===I}))&&O(I)}var M=function(e){var t=e.currentTarget,n=_.indexOf(t),a=v[n].value;a!==E&&(T(t),O(a),null!=b&&w(b,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=_.indexOf(e.currentTarget)+1;n=null!=(a=_[r])?a:_[0];break;case"ArrowLeft":var i,o=_.indexOf(e.currentTarget)-1;n=null!=(i=_[o])?i:_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return _.push(e)},onKeyDown:j,onFocus:M,onClick:M},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var a=n(5443),r=n(3010),i=(n(9496),n(9613)),o=n(866),l=n(7640),u=["components"],p={title:"Context Menu"},s=void 0,m={unversionedId:"ox_lib/Interface/Client/context",id:"ox_lib/Interface/Client/context",title:"Context Menu",description:"lib.registerContext",source:"@site/docs/ox_lib/Interface/Client/context.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/context",permalink:"/docs/ox_lib/Interface/Client/context",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/context.md",tags:[],version:"current",lastUpdatedAt:1661121231,formattedLastUpdatedAt:"8/21/2022",frontMatter:{title:"Context Menu"},sidebar:"ox_lib",previous:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"},next:{title:"Input Dialog",permalink:"/docs/ox_lib/Interface/Client/input"}},c={},d=[{value:"lib.registerContext",id:"libregistercontext",level:3},{value:"lib.showContext",id:"libshowcontext",level:3},{value:"lib.hideContext",id:"libhidecontext",level:3},{value:"lib.getOpenContextMenu",id:"libgetopencontextmenu",level:3},{value:"Usage Example",id:"usage-example",level:3}],h={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"libregistercontext"},"lib.registerContext"),(0,i.kt)("p",null,"Used for registering a context menu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- id: string\n-- title: string\n-- menu: string (optional)\n-- onExit: function (optional)\n-- options: table\n    -- item: key as string or table\n        -- title: string (optional - if item isn't key)\n        -- menu: string (optional)\n        -- icon: string (optional)\n        -- iconColor: string (optional)\n        -- arrow: boolean (optional)\n        -- description: string (optional)\n        -- metadata: string table or key, value table or table (optional)\n        -- event: string (optional)\n        -- serverEvent: string (optional)\n        -- args: any (optional)\nlib.registerContext(context)\n")),(0,i.kt)("p",null,"You can register as many context menus in one ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.registerContext")," function\nas you'd like."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"id")," - Unique menu identifier, will be used to open the menu.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"title")," - Every menu must have a title.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"menu")," - Menu identifier - if defined there will be a back arrow next to the menu title\nthat will take you to the menu you defined.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"onExit")," - Function that will be ran when the user closes their context menu with ESC.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"options")," - Contains all the clickable menu items.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item")," - Defined as a key, can be empty if you don't want it to do anything.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/title")," - If not using keys then sets the title for the button.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/onSelect")," - Function that triggers when a button is pressed, returns it's args.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/image")," - Image url, puts the image at the top of the metadata popover.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/icon")," - FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/iconColor")," - Color of the displayed icon.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/menu")," - Menu identifier that the button will take you to, when defined an arrow\npointing to the right to indicate a menu will be shown.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/arrow")," - Shows an arrow on the right side like ",(0,i.kt)("inlineCode",{parentName:"p"},"menu")," does, useful when you are\nopening a menu from an event.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/description")," - Description that will appear under the button title that is defined\nas a key.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/metadata")," - Information that will display on the side upon hovering a button.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/event")," - Event that the button is going to trigger.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"item/serverEvent")," - Server event that the button is going to trigger.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"args")," - Arguments that will be sent to the events.  "),(0,i.kt)("p",null,"The menu can be either in the order you write it in, or sorted alphabetically.",(0,i.kt)("br",{parentName:"p"}),"\n","To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys,\notherwise not using keys and instead using tables will make the menu be in the order you\ndefine it as."),(0,i.kt)("h3",{id:"libshowcontext"},"lib.showContext"),(0,i.kt)("p",null,"Opens a registered context menu by it's id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- id: string\n\nlib.showContext(id)\n")),(0,i.kt)("h3",{id:"libhidecontext"},"lib.hideContext"),(0,i.kt)("p",null,"Hides any currently visible context menu."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onExit")," param defines whether the onExit function for the\nmenu should be ran or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"\n-- onExit: boolean\nlib.hideContext(onExit)\n")),(0,i.kt)("h3",{id:"libgetopencontextmenu"},"lib.getOpenContextMenu"),(0,i.kt)("p",null,"Returns the id of the currently open context menu."),(0,i.kt)("p",null,"If not context menu is open returns ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getOpenContextMenu()\n")),(0,i.kt)("h3",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"First we register the menu with our specified options then we call the show function in the command."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu)."))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"custom",label:"Custom order",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n    id = 'example_menu',\n    title = 'Example Context',\n    onExit = function()\n        print('Hello there')\n    end,\n    options = {\n        {title = 'Empty button'},\n        {\n            title = 'Example button',\n            description = 'Example button description',\n            onSelect = function(args)\n              print('Pressed the button!')\n            end,\n            metadata = {\n                {label = 'Value 1', value = 'Some value'},\n                {label = 'Value 2', value = 300},\n            }\n        },\n        {\n            title = 'Menu button',\n            menu = 'other_example_menu',\n            description = 'Takes you to another menu!',\n            metadata = {'It also has metadata support'}\n        },\n        {\n            title = 'Event button',\n            description = 'Open a menu and send event data',\n            arrow = true,\n            event = 'some_event',\n            args = {value1 = 300, value2 = 'Other value'}\n        }\n    },\n    {\n        id = 'other_example_menu',\n        title = 'Other Context Menu',\n        menu = 'example_menu',\n        options = {\n            ['Nothing here'] = {}\n        }\n    }\n})\n"))),(0,i.kt)(l.Z,{value:"ordered",label:"Alphabetically ordered",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n    id = 'example_menu',\n    title = 'Example Context',\n    onExit = function()\n        print('Hello there')\n    end,\n    options = {\n        ['Empty button'] = {},\n        ['Example button'] = {\n            description = 'Example button description',\n            metadata = {\n                ['Value 1'] = 'Some value',\n                ['Value 2'] = 300\n            }\n        },\n        ['Menu button'] = {\n            menu = 'other_example_menu',\n            description = 'Takes you to another menu',\n            metadata = {'It also has metadata support'}\n        },\n        ['Event button'] = {\n            description = 'Open a menu and send event data',\n            arrow = true,\n            event = 'some_event',\n            args = {value1 = 300, value2 = 'Other value'}\n        }\n    },\n    {\n        id = 'other_example_menu',\n        title = 'Other Context Menu',\n        menu = 'example_menu',\n        options = {\n            ['Nothing here'] = {}\n        }\n    }\n})\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterCommand('testcontext', function()\n    lib.showContext('example_menu')\nend)\n")),(0,i.kt)("p",null,"To trigger the event from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event button")," and get it's data we first\nneed to register the event properly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('some_event', function(data)\n    print(json.encode(data, {indent=true}))\n    lib.registerContext({\n        id = 'another_context_menu',\n        title = 'Event Menu',\n        menu = 'example_menu',\n        options = {\n            ['Menu data'] = {\n                description = 'Data from the previous menu',\n                metadata = {\n                    ['Value1'] = data.value1,\n                    ['Value2'] = data.value2\n                }\n            }\n        }\n    })\n    lib.showContext('another_context_menu')\nend)\n")),(0,i.kt)("p",null,"The data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," table in the menu is passed as a first argument to\nthe event you register, in this case that argument is called ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,i.kt)("p",null,"Using this event we also register a new context menu with it's own options."),(0,i.kt)("p",null,"By defining a ",(0,i.kt)("inlineCode",{parentName:"p"},"menu")," param to be the id of the first menu we can get the\nneat back arrow button next to the menu title that will take us back."),(0,i.kt)("p",null,"If we have a button that does not define either event, serverEvent or menu\nthe button will do nothing upon being clicked."),(0,i.kt)("p",null,"Of course just registering the event won't do much so we need to display it\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.showContext")," function, passing in the menu's id."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/aJu92dv.png",alt:"menu_example"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/kFGSlBF.png",alt:"metadata"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/r0Ln4VP.png",alt:"event_menu"})))}b.isMDXComponent=!0}}]);