(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18f0":function(e,t,n){"use strict";n("df3a")},"55aa":function(e,t,n){"use strict";n("a937")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("7fda"),o=n.n(c),a={id:"header"},u={class:"container"},i={class:"logo"},s=Object(r["f"])("img",{src:o.a,alt:"",class:"logo"},null,-1),f=Object(r["f"])("div",{class:"version"}," version 0.26 (updated: 2022-08-21) ",-1),l={id:"content"},b={class:"container"},p=Object(r["f"])("section",{id:"footer"},[Object(r["f"])("div",{class:"container"})],-1);function d(e,t){var n=Object(r["w"])("router-link"),c=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("section",a,[Object(r["f"])("div",u,[Object(r["f"])("div",i,[Object(r["f"])(n,{to:{name:"Home"}},{default:Object(r["D"])((function(){return[s]})),_:1}),f])])]),Object(r["f"])("section",l,[Object(r["f"])("div",b,[Object(r["f"])(c)])]),p],64)}n("ac61");var O=n("d959"),j=n.n(O);const m={},v=j()(m,[["render",d]]);var h=v,g=n("6c02");function y(e,t,n,c,o,a){var u=Object(r["w"])("SearchBar");return Object(r["r"])(),Object(r["d"])(u)}n("a4d3"),n("e01a"),n("4de4"),n("caad"),n("b0c0"),n("d3b7"),n("2532");var w=n("b85c"),x=(n("96cf"),n("1da1")),k={key:0,class:"item-bg error"},P=Object(r["f"])("p",null,"No results found!",-1),S={expose:[],setup:function(e){var t=Object(r["u"])(""),n=[];function c(){return n.filter((function(e){return e.name.toLowerCase().includes(t.value.toLowerCase())}))}function o(){document.querySelector("input").focus()}function a(){return u.apply(this,arguments)}function u(){return u=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,r,c,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbw43aEKD9O-LhXZWcz-FYZ4a-wVf-wtnbK4vsjPzDXV6Ym6xevDvQMmZPv9NOODfjIGZg/exec");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,c=Object(w["a"])(r.items);try{for(c.s();!(o=c.n()).done;)a=o.value,n.push(a)}catch(u){c.e(u)}finally{c.f()}case 8:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return Object(r["n"])((function(){a()})),Object(r["p"])((function(){o()})),function(e,n){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["E"])(Object(r["f"])("input",{id:"searchbox","onUpdate:modelValue":n[1]||(n[1]=function(e){return Object(r["k"])(t)?t.value=e:t=e}),onInput:n[2]||(n[2]=function(e){return Object(r["k"])(t)?t.value=e.target.value:t=e.target.value}),placeholder:"start typing to find out...",type:"text"},null,544),[[r["A"],Object(r["z"])(t)]]),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c(),(function(e){return Object(r["E"])((Object(r["r"])(),Object(r["d"])("div",{key:e.id,class:"item-bg item-class"},[Object(r["f"])(o,{to:{name:"ItemDetails",params:{item:e,id:e.id,name:e.name,isCompostable:e.isCompostable,description:e.description}}},{default:Object(r["D"])((function(){return[Object(r["f"])("p",null,Object(r["y"])(e.name),1)]})),_:2},1032,["to"])],512)),[[r["B"],0!=Object(r["z"])(t).length]])})),128)),Object(r["z"])(t)&&!c().length?(Object(r["r"])(),Object(r["d"])("div",k,[P])):Object(r["e"])("",!0)],64)}}};n("55aa");const D=S;var _=D;window.TallyConfig={formId:"m68V8B",popup:{emoji:{text:"👋",animation:"wave"},open:{trigger:"time",ms:5e3}}};var C={name:"Home",components:{SearchBar:_},data:function(){return{items:[]}},mounted:function(){}};const z=j()(C,[["render",y]]);var A=z;function B(e,t,n,r,c,o){return null}var I={name:"About",components:{SearchBar:_},data:function(){return{}}};n("eced");const M=j()(I,[["render",B]]);var Z=M,H={class:"answer"},L=Object(r["f"])("h2",null," you can put",-1),V={class:"item"},E=Object(r["f"])("h2",null,"in the compost bin.",-1),K={expose:[],props:["item"],setup:function(e){return function(e,t){return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",H,Object(r["y"])(e.$attrs.isCompostable),1),L,Object(r["f"])("div",V,Object(r["y"])(e.$attrs.name),1),E],64)}}};n("18f0");const N=K;var T=N,X=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:Z},{path:"/item/:name",name:"ItemDetails",component:T,props:!0}],Y=Object(g["a"])({history:Object(g["b"])("/"),routes:X}),G=Y,J=n("a584");Object(r["c"])(h).use(J["a"],{config:{id:"G-LX4H5N8Z0Y"}}).use(J["a"],{config:{id:"UA-3450053-63"}}).use(G).mount("#app")},"5a3a":function(e,t,n){},"7fda":function(e,t,n){e.exports=n.p+"img/cici-logo.a3d5ef26.png"},a013:function(e,t,n){},a937:function(e,t,n){},ac61:function(e,t,n){"use strict";n("5a3a")},df3a:function(e,t,n){},eced:function(e,t,n){"use strict";n("a013")}});
//# sourceMappingURL=app.9d6b8893.js.map