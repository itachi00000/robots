(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,n,a){e.exports=a(31)},28:function(e,n,a){},29:function(e,n,a){},31:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(3),i=a.n(r),c=a(6),l=a(4),s=(a(28),a(12)),u=a(13),m=a(16),h=a(14),d=a(5),f=a(15);var v=function(e){var n=e.name,a=e.email,t=e.id;return o.a.createElement("div",{className:"bg-blue dib br3 pa3 ma2 grow"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot ".concat(t)}),o.a.createElement("div",null,o.a.createElement("h2",null,t,". ",n),o.a.createElement("p",null,a)))};var b=function(e){var n=e.robots;return o.a.createElement("div",{className:""},n.map((function(e){return o.a.createElement(v,{key:"user-".concat(e.id),id:e.id,name:e.name,email:e.email})})))};var g=function(e){var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots...",onChange:n}))};var p=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"625px"}},e.children)},w=(a(29),[{id:1,name:"John Doe",username:"John",email:"john@email.com"},{id:2,name:"Jane Doe",username:"Jane",email:"jane@email.com"},{id:3,name:"Joe Doe",username:"Joe",email:"joe@email.com"},{id:4,name:"Juan Doe",username:"Juan",email:"juan@email.com"},{id:5,name:"Jack Doe",username:"Jack",email:"jack@email.com"},{id:6,name:"Jill Doe",username:"Jill",email:"jill@email.com"},{id:7,name:"Junjun Doe",username:"Junjun",email:"junjun@email.com"},{id:8,name:"Jenny Doe",username:"Jenny",email:"jenny@email.com"},{id:9,name:"Jana Doe",username:"Jana",email:"jana@email.com"},{id:10,name:"Jennifer Doe",username:"Jennifer",email:"jennifer@email.com"}]),j=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(m.a)(this,Object(h.a)(n).call(this,e))).state={robots:w,searchfield:""},a.onSearchChange=a.onSearchChange.bind(Object(d.a)(a)),a}return Object(f.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"onSearchChange",value:function(e){this.setState({searchfield:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchfield,t=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Robots"),o.a.createElement(g,{searchChange:this.onSearchChange}),o.a.createElement(p,null,o.a.createElement(b,{robots:t}))):o.a.createElement("h1",{className:"tc f1"},"Loading")}}]),n}(o.a.Component),E=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField}}),(function(e){}))(j),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=a(17),C={searchField:""},D=(a(30),Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(k.a)({searchField:n.payload},e);default:return e}})));i.a.render(o.a.createElement(c.a,{store:D},o.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robots",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robots","/service-worker.js");J?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.79a0beae.chunk.js.map