(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],p=0,b=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e81":function(t,e,n){"use strict";n("cf55")},"17f3":function(t,e,n){"use strict";n("ad25")},"217b":function(t,e,n){"use strict";n("7af3")},"3ca9":function(t,e,n){"use strict";n("8ea6")},"48bd":function(t,e,n){"use strict";n("4c16")},"4c16":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("7fda"),r=n.n(c),a={id:"header"},i={class:"container"},s={class:"logo"},u=Object(o["h"])("img",{src:r.a,alt:"",class:"logo"},null,-1),l=Object(o["h"])("div",{class:"version"}," version 0.65 (updated: 2022-09-06) ",-1),p={id:"content"},b={class:"container"},h={class:"container2"},f=Object(o["h"])("ul",{class:"flex-row"},[Object(o["h"])("li",null,[Object(o["h"])("a",{href:"/"},"Home")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"/about"},"About")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"/suggest"},"Help us!")])],-1),d={class:"flex-row"},m=Object(o["h"])("p",{class:"copy"},"© 2022 CanICompostIt.com",-1),j={expose:[],setup:function(t){var e=function(){return window.open("https://www.facebook.com/sharer.php?u=canicompostit.com","sharer","toolbar=0,status=0,width=626,height=436"),!1},n=function(){return window.open("https://pinterest.com/pin/create/bookmarklet/?media=canicompostit.com/img/carrots_small.3a2d84b8.jpg&url=canicompostit.com&description=The fastest way to find out if you can throw something in the compost bin","sharer","toolbar=0,status=0,width=626,height=436"),!1},c=function(){return window.open("https://twitter.com/share?url=canicompostit.com&text=The fastest way to find out if you can throw something in the compost bin --\x3e","sharer","toolbar=0,status=0,width=626,height=436"),!1};return function(t,r){var j=Object(o["y"])("router-link"),O=Object(o["y"])("router-view"),g=Object(o["y"])("fa");return Object(o["t"])(),Object(o["d"])(o["a"],null,[Object(o["h"])("section",a,[Object(o["h"])("div",i,[Object(o["h"])("div",s,[Object(o["h"])(j,{to:{name:"Home"}},{default:Object(o["F"])((function(){return[u]})),_:1}),l])])]),Object(o["h"])("section",p,[Object(o["h"])("div",b,[Object(o["h"])(O)])]),Object(o["h"])("footer",null,[Object(o["h"])("div",h,[f,Object(o["h"])("ul",d,[Object(o["h"])("li",null,[Object(o["h"])(g,{onClick:r[1]||(r[1]=function(t){return e()}),icon:["fab","facebook"]})]),Object(o["h"])("li",null,[Object(o["h"])(g,{onClick:r[2]||(r[2]=function(t){return n()}),icon:["fab","pinterest"]})]),Object(o["h"])("li",null,[Object(o["h"])(g,{onClick:r[3]||(r[3]=function(t){return c()}),icon:["fab","twitter"]})])]),m])])],64)}}};n("17f3");const O=j;var g=O,v=n("6c02");function y(t,e,n,c,r,a){var i=Object(o["y"])("SearchBar");return Object(o["t"])(),Object(o["d"])(i)}n("a4d3"),n("e01a"),n("4de4"),n("caad"),n("b0c0"),n("d3b7"),n("2532");var w=n("b85c"),x=(n("96cf"),n("1da1")),k={key:0,class:"item-bg error"},S=Object(o["h"])("p",null,"No results found! Tap to suggest...",-1),T={expose:[],setup:function(t){var e=Object(o["w"])(""),n=[];function c(){return n.filter((function(t){return t.name.toLowerCase().includes(e.value.toLowerCase())}))}function r(){document.querySelector("input").focus()}function a(){return i.apply(this,arguments)}function i(){return i=Object(x["a"])(regeneratorRuntime.mark((function t(){var e,o,c,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://script.google.com/macros/s/AKfycbw43aEKD9O-LhXZWcz-FYZ4a-wVf-wtnbK4vsjPzDXV6Ym6xevDvQMmZPv9NOODfjIGZg/exec");case 2:return e=t.sent,t.next=5,e.json();case 5:o=t.sent,c=Object(w["a"])(o.items);try{for(c.s();!(r=c.n()).done;)a=r.value,n.push(a)}catch(i){c.e(i)}finally{c.f()}case 8:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}return Object(o["p"])((function(){a()})),Object(o["r"])((function(){r()})),function(t,n){var r=Object(o["y"])("router-link");return Object(o["t"])(),Object(o["d"])(o["a"],null,[Object(o["G"])(Object(o["h"])("input",{id:"searchbox","onUpdate:modelValue":n[1]||(n[1]=function(t){return Object(o["m"])(e)?e.value=t:e=t}),onInput:n[2]||(n[2]=function(t){return Object(o["m"])(e)?e.value=t.target.value:e=t.target.value}),placeholder:"start typing to find out...",type:"text"},null,544),[[o["C"],Object(o["B"])(e)]]),(Object(o["t"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(c(),(function(t){return Object(o["G"])((Object(o["t"])(),Object(o["d"])("div",{key:t.id,class:"item-bg item-class"},[Object(o["h"])(r,{to:{name:"ItemDetails",params:{item:t,id:t.id,name:t.name,isCompostable:t.isCompostable,description:t.description}}},{default:Object(o["F"])((function(){return[Object(o["h"])("p",null,Object(o["A"])(t.name),1)]})),_:2},1032,["to"])],512)),[[o["D"],0!=Object(o["B"])(e).length]])})),128)),Object(o["B"])(e)&&!c().length?(Object(o["t"])(),Object(o["d"])("div",k,[Object(o["h"])(r,{to:{name:"Suggest",params:{itemToSuggest:Object(o["B"])(e)}}},{default:Object(o["F"])((function(){return[S]})),_:1},8,["to"])])):Object(o["e"])("",!0)],64)}}};n("0e81");const C=T;var I=C;window.TallyConfig={formId:"m68V8B",popup:{emoji:{text:"👋",animation:"wave"},open:{trigger:"time",ms:5e3}}};var _={name:"Home",components:{SearchBar:I},data:function(){return{items:[]}},mounted:function(){}},A=n("d959"),P=n.n(A);const H=P()(_,[["render",y]]);var B=H,D=Object(o["f"])('<p class="text">Hello!</p><p class="text">This is a simple app that will help you find out if you can throw something in the compost bin.</p><p class="text">It&#39;s based on my, and a ton of helpful people&#39; research. </p><p class="text">I&#39;ve created canicompostit.com because I was tired of always Googling everything. I hope you find it useful!</p><p class="text">If you&#39;ve come across something that you disagree with, or missing from the database, please reach out <a href="mailto:korosibalint@yahoo.co.uk?subject=composting">in email here</a>, or on <a href="https://twitter.com/korosibalint">Twitter here.</a></p><p class="text">Thank you! <br> Balint</p>',6);function L(t,e,n,o,c,r){return D}var M={name:"About",components:{SearchBar:I},data:function(){return{}}};n("217b");const F=P()(M,[["render",L]]);var Z=F,G={class:"answer"},Y={key:0},$={key:1},N={key:2},V={class:"item"},z=Object(o["h"])("h2",null,[Object(o["g"])("in the compost bin."),Object(o["h"])("br"),Object(o["g"])("⬇️")],-1),E={class:"description"},J=Object(o["g"])("Search again "),K={expose:[],props:["item"],setup:function(t){return function(t,e){var n=Object(o["y"])("router-link");return Object(o["t"])(),Object(o["d"])(o["a"],null,[Object(o["h"])("div",G,Object(o["A"])(t.$attrs.isCompostable),1),"YES 🎉"===t.$attrs.isCompostable?(Object(o["t"])(),Object(o["d"])("h2",Y,"you can throw")):"NO ✋🏼"===t.$attrs.isCompostable?(Object(o["t"])(),Object(o["d"])("h2",$,"you can't throw")):(Object(o["t"])(),Object(o["d"])("h2",N,"You probably can't throw")),Object(o["h"])("div",V,Object(o["A"])(t.$attrs.name),1),z,Object(o["h"])("p",E,[Object(o["h"])("span",{innerHTML:t.$attrs.description},null,8,["innerHTML"])]),Object(o["h"])("p",null,[Object(o["h"])(n,{to:"/"},{default:Object(o["F"])((function(){return[J]})),_:1})])],64)}}};n("f1fd");const W=K;var X=W,R={src:"https://tally.so/r/wLZgzl",width:"100%",height:"100%",frameborder:"0",marginheight:"0",marginwidth:"0",title:"Suggest an item! "},U={expose:[],props:["itemToSuggest"],setup:function(t){return function(t,e){return Object(o["t"])(),Object(o["d"])("iframe",R)}}};n("3ca9");const q=U;var Q=q,tt=Object(o["h"])("h2",null," Thanks for suggesting! We'll review the item and add it to the database ASAP. ",-1),et=Object(o["g"])("Wanna search an another item? "),nt=Object(o["g"])("Just click here");function ot(t,e){var n=Object(o["y"])("router-link");return Object(o["t"])(),Object(o["d"])(o["a"],null,[tt,Object(o["h"])("p",null,[et,Object(o["h"])(n,{to:"/"},{default:Object(o["F"])((function(){return[nt]})),_:1})])],64)}n("48bd");const ct={},rt=P()(ct,[["render",ot]]);var at=rt,it=[{path:"/",name:"Home",component:B,meta:{title:"Home Page - Example App",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}},{path:"/about",name:"About",component:Z},{path:"/:name",name:"ItemDetails",component:X,props:!0},{path:"/suggest",name:"Suggest",component:Q,props:!0},{path:"/thanks-for-suggesting",name:"SuggestThanks",component:at}],st=Object(v["a"])({history:Object(v["b"])("/"),routes:it}),ut=st,lt=n("ecee"),pt=n("c074"),bt=n("f2d1"),ht=n("ad3d"),ft=n("a584");lt["c"].add(pt["a"],bt["a"]),Object(o["c"])(g).use(ft["a"],{config:{id:"G-LX4H5N8Z0Y"}}).use(ft["a"],{config:{id:"UA-3450053-63"}}).use(ut).component("fa",ht["a"]).mount("#app")},"7af3":function(t,e,n){},"7fda":function(t,e,n){t.exports=n.p+"img/cici-logo.a3d5ef26.png"},"8ea6":function(t,e,n){},ad25:function(t,e,n){},cf55:function(t,e,n){},f1fd:function(t,e,n){"use strict";n("fcc3")},fcc3:function(t,e,n){}});
//# sourceMappingURL=app.ace9f329.js.map