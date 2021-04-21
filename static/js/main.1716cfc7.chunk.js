(this.webpackJsonparmaggedon_v=this.webpackJsonparmaggedon_v||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(21),r=a.n(i),n=(a(28),a(12)),d=(a(29),a(0));var l=function(){return Object(d.jsx)(n.a,{children:Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"header__text-wrap",children:[Object(d.jsx)("h1",{className:"header__title",children:Object(d.jsx)(n.b,{className:"header__title-link",to:"/",children:"ARMAGGEDON V"})}),Object(d.jsx)("h2",{className:"header__subtitle",children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0438 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u044f \u0430\u0441\u0442\u0435\u0440\u043e\u0438\u0434\u043e\u0432, \u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u0434\u043b\u0435\u0442\u0430\u044e\u0449\u0438\u0445 \u043a\xa0\u0417\u0435\u043c\u043b\u0435."})]}),Object(d.jsxs)("nav",{className:"header__nav",children:[Object(d.jsx)(n.b,{id:"main-link",className:"header__link",to:"/",children:"\u0410\u0441\u0442\u0435\u0440\u043e\u0438\u0434\u044b"}),Object(d.jsx)(n.b,{id:"destroy-link",className:"header__link",to:"/destroy",children:"\u0423\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})})},_=a(3);var o=function(){return Object(c.useEffect)((function(){document.querySelector(".header__link.header__link_active")&&document.querySelector(".header__link.header__link_active").classList.remove("header__link_active"),document.querySelector("#destroy-link.header__link").classList.add("header__link_active")}),[]),Object(d.jsx)("div",{children:"basket"})},j=a(14),u=a(6);a(36),a(37);var m=function(e){var t=e.distanceChange,a=e.clickFilter,s=e.distanceDisplay,i=Object(c.useState)(s),r=Object(u.a)(i,2),n=r[0];return r[1],Object(c.useEffect)((function(){document.querySelector(".filter__item.filter__item_active")&&document.querySelector(".filter__item.filter__item_active").classList.remove("filter__item_active"),document.querySelector(".filter__item[data-value='".concat(n,"']")).classList.add("filter__item_active")}),[n]),Object(d.jsxs)("div",{className:"filter",children:[Object(d.jsxs)("div",{className:"filter__danger-wrap",children:[Object(d.jsx)("input",{onChange:a,type:"checkbox",name:"filter_danger",id:"filter_danger"}),Object(d.jsx)("label",{htmlFor:"filter_danger",children:Object(d.jsx)("span",{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u0430\u0441\u043d\u044b\u0435"})})]}),Object(d.jsxs)("div",{className:"filter__distance-wrap",children:[Object(d.jsxs)("div",{className:"filter__km-wrap",children:[Object(d.jsx)("span",{className:"filter__distance-title",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 "}),Object(d.jsxs)("div",{onClick:t,"data-value":"km",className:"filter__item",children:["\u0432 \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u0430\u0445,"," "]})]}),Object(d.jsx)("div",{onClick:t,"data-value":"lu",className:"filter__item",children:"\u0432 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f\u0445 \u0434\u043e \u043b\u0443\u043d\u044b"})]})]})};a(38);var b=function(e){return{backgroundSize:e.size-e.size/3,backgroundPositionY:function(){return-this.backgroundSize+Math.sqrt(this.backgroundSize)+100},backgroundPositionX:function(){return-this.backgroundSize+21*Math.sqrt(this.backgroundSize)}}};var h=function(e){return{date:new Date(e.close_approach_data[0].epoch_date_close_approach).toLocaleString("ru",{day:"numeric",month:"long",year:"numeric"}),distanceKM:Math.round(+e.close_approach_data[0].miss_distance.kilometers)+" \u043a\u043c",distanceLunar:(+e.close_approach_data[0].miss_distance.lunar).toFixed(1)+" \u0440\u0430\u0437 \u0434\u043e \u043b\u0443\u043d\u044b",size:Math.round(e.estimated_diameter.meters.estimated_diameter_max),isDanger:e.is_potentially_hazardous_asteroid}};var O=function(e){var t=e.item,a=e.distanceDisplay;localStorage.setItem("distanceDisplay",a);var c=new h(t),s={backgroundSize:b(c).backgroundSize,backgroundPositionY:b(c).backgroundPositionY(),backgroundPositionX:b(c).backgroundPositionX()};return Object(d.jsx)("div",{className:c.isDanger?"bg-gradient bg-gradient_danger":"bg-gradient",children:Object(d.jsxs)("div",{style:s,className:"ast-card",children:[Object(d.jsx)("div",{className:"ast-card__start"}),Object(d.jsxs)("div",{className:"ast-card__medium",children:[Object(d.jsx)("h2",{title:"\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 ".concat(t.designation),className:"ast-card__name",children:Object(d.jsx)(n.b,{className:"ast-card__name-link",to:"/details?id=".concat(t.id),children:t.name.substr(1).slice(0,-1)})}),Object(d.jsxs)("div",{className:"ast-card__decr-item ast-card__decr_date",children:[Object(d.jsx)("span",{className:"ast-card__decr-title",children:"\u0414\u0430\u0442\u0430"}),Object(d.jsx)("span",{className:"ast-card__decr-dots"}),Object(d.jsx)("span",{className:"ast-card__decr-value",children:c.date.slice(0,-3)})]}),Object(d.jsxs)("div",{className:"ast-card__decr-item ast-card__decr_dist",children:[Object(d.jsx)("span",{className:"ast-card__decr-title",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(d.jsx)("span",{className:"ast-card__decr-dots"}),Object(d.jsx)("span",{className:"ast-card__decr-value",children:"km"===a?c.distanceKM:c.distanceLunar})]}),Object(d.jsxs)("div",{className:"ast-card__decr-item ast-card__decr-size",children:[Object(d.jsx)("span",{className:"ast-card__decr-title",children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(d.jsx)("span",{className:"ast-card__decr-dots",children:" "}),Object(d.jsxs)("span",{className:"ast-card__decr-value",children:[c.size," \u043c"]})]})]}),Object(d.jsxs)("div",{className:"ast-card__end",children:[Object(d.jsx)("p",{className:"ast-card__evaluate-title",children:"\u041e\u0446\u0435\u043d\u043a\u0430: "}),Object(d.jsx)("p",{className:"ast-card__evaluate-value",children:c.isDanger?"\u041e\u043f\u0430\u0441\u0435\u043d":"\u041d\u0435 \u043e\u043f\u0430\u0441\u0435\u043d"}),Object(d.jsx)("button",{"data-id":t.id,className:"ast-card__destroy-btn",children:"\u041d\u0430 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})})},v=a(51);var f=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)([]),r=Object(u.a)(i,2),n=r[0],l=r[1],_=Object(c.useState)(!1),o=Object(u.a)(_,2),b=o[0],h=o[1],f=Object(c.useState)(!0),p=Object(u.a)(f,2),x=p[0],g=p[1],k=Object(c.useState)("https://api.nasa.gov/neo/rest/v1/feed?api_key=Qg1ksuSgpuseUwl1wPGcWh4xVL45gHz3dv83Jmfp"),N=Object(u.a)(k,2),y=N[0],S=N[1],w=Object(c.useState)(localStorage.getItem("distanceDisplay")||"km"),L=Object(u.a)(w,2),z=L[0],q=L[1];Object(c.useEffect)((function(){x&&fetch(y).then((function(e){return e.json()})).then((function(e){S(e.links.next.replace("http://","https://"));var t=[];Object.keys(e.near_earth_objects).sort((function(e,t){return new Date(e)-new Date(t)})).forEach((function(a,c){c!==Object.keys(e.near_earth_objects).length-1&&(t=[].concat(Object(j.a)(t),Object(j.a)(e.near_earth_objects[a])))})),s([].concat(Object(j.a)(a),Object(j.a)(t)).sort((function(e,t){return e.close_approach_data[0].epoch_date_close_approach-t.close_approach_data[0].epoch_date_close_approach})))})).catch((function(e){return console.log(e)})).finally((function(){return g(!1)}))}),[x]),Object(c.useEffect)((function(){l(b?a.filter((function(e){return e.is_potentially_hazardous_asteroid})):a)}),[a,b]),Object(c.useEffect)((function(){return document.addEventListener("scroll",D),document.querySelector(".header__link.header__link_active")&&document.querySelector(".header__link.header__link_active").classList.remove("header__link_active"),document.querySelector("#main-link.header__link").classList.add("header__link_active"),function(){document.removeEventListener("scroll",D)}}),[]);var D=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<250&&g(!0)};return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(m,{distanceChange:function(e){q(e.target.dataset.value),document.querySelector(".filter__item.filter__item_active").classList.remove("filter__item_active"),e.target.classList.add("filter__item_active")},clickFilter:function(e){h(e.target.checked)},distanceDisplay:z}),Object(d.jsxs)("div",{className:"ast-wrap",children:[n.map((function(e){return Object(d.jsx)(O,{item:e,distanceDisplay:z},e.id+e.close_approach_data[0].close_approach_date_full)})),fetch?Object(d.jsx)(v.a,{}):""]})]})};a(39);var p=function(){var e,t,a=Object(c.useState)(0),s=Object(u.a)(a,2),i=s[0],r=s[1],n=Object(c.useState)(!0),l=Object(u.a)(n,2),_=l[0],o=l[1],j=Object(c.useState)(localStorage.getItem("distanceDisplay")||"km"),m=Object(u.a)(j,2),O=m[0],f=m[1];Object(c.useEffect)((function(){document.querySelector(".header__link.header__link_active")&&document.querySelector(".header__link.header__link_active").classList.remove("header__link_active"),document.querySelector(".filter__item.filter__item_active")&&document.querySelector(".filter__item.filter__item_active").classList.remove("filter__item_active"),document.querySelector(".filter__item[data-value='".concat(O,"']"))&&document.querySelector(".filter__item[data-value='".concat(O,"']")).classList.add("filter__item_active")}),[]),Object(c.useEffect)((function(){var e=window.location.hash.split("id=")[1];fetch("https://www.neowsapp.com/rest/v1/neo/".concat(e,"?api_key=Qg1ksuSgpuseUwl1wPGcWh4xVL45gHz3dv83Jmfp")).then((function(e){return e.json()})).then((function(e){return r(e)})).finally((function(){return o(!1)}))}),[]),i&&(e=new h(i),t={backgroundSize:b(e).backgroundSize,backgroundPositionY:b(e).backgroundPositionY(),backgroundPositionX:b(e).backgroundPositionX()});var p=function(e){f(e.target.dataset.value),document.querySelector(".filter__item.filter__item_active").classList.remove("filter__item_active"),e.target.classList.add("filter__item_active")};return _?Object(d.jsx)(v.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"filter__distance-wrap filter__distance-wrap_detail",children:[Object(d.jsxs)("div",{className:"filter__km-wrap",children:[Object(d.jsx)("span",{className:"filter__distance-title",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 "}),Object(d.jsx)("div",{onClick:p,"data-value":"km",className:"km"===O?"filter__item filter__item_active":"filter__item",children:"\u0432 \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u0430\u0445,"})]}),Object(d.jsxs)("div",{onClick:p,"data-value":"lu",className:"lu"===O?"filter__item filter__item_active":"filter__item",children:[" ","\u0432 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f\u0445 \u0434\u043e \u043b\u0443\u043d\u044b"]})]}),Object(d.jsx)("div",{className:e.isDanger?"bg-gradient bg-gradient_details bg-gradient_danger":"bg-gradient bg-gradient_details",children:Object(d.jsxs)("div",{style:t,className:"ast-card",children:[Object(d.jsx)("div",{className:"ast-card__start"}),Object(d.jsxs)("div",{className:"ast-card__medium",children:[Object(d.jsx)("h2",{className:"ast-card__name ast-card__name_basket",children:i.designation}),Object(d.jsxs)("div",{className:"ast-card__decr-item ast-card__decr_date",children:[Object(d.jsx)("span",{className:"ast-card__decr-title",children:"\u0414\u0430\u0442\u0430"}),Object(d.jsx)("span",{className:"ast-card__decr-dots"}),Object(d.jsx)("span",{className:"ast-card__decr-value",children:e.date.slice(0,-3)})]}),Object(d.jsxs)("div",{className:"ast-card__decr-item ast-card__decr_dist",children:[Object(d.jsx)("span",{className:"ast-card__decr-title",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(d.jsx)("span",{className:"ast-card__decr-dots"}),Object(d.jsx)("span",{className:"ast-card__decr-value",children:"km"===O?e.distanceKM:e.distanceLunar})]}),Object(d.jsxs)("div",{className:"ast-card__decr-item ast-card__decr-size",children:[Object(d.jsx)("span",{className:"ast-card__decr-title",children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(d.jsx)("span",{className:"ast-card__decr-dots"}),Object(d.jsxs)("span",{className:"ast-card__decr-value",children:[e.size," \u043c"]})]})]}),Object(d.jsxs)("div",{className:"ast-card__end",children:[Object(d.jsx)("p",{className:"ast-card__evaluate-title",children:"\u041e\u0446\u0435\u043d\u043a\u0430: "}),Object(d.jsx)("p",{className:"ast-card__evaluate-value",children:e.isDanger?"\u041e\u043f\u0430\u0441\u0435\u043d":"\u041d\u0435 \u043e\u043f\u0430\u0441\u0435\u043d"}),Object(d.jsx)("button",{"data-id":i.id,className:"ast-card__destroy-btn",children:"\u041d\u0430 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})})]})};var x=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(l,{}),Object(d.jsxs)(n.a,{children:[Object(d.jsx)(_.a,{path:"/",exact:!0,component:f}),Object(d.jsx)(_.a,{path:"/destroy",component:o}),Object(d.jsx)(_.a,{path:"/details",component:p})]}),Object(d.jsx)("footer",{className:"footer",children:"2021 \xa9 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0438 \u043f\u043b\u0430\u043d\u0435\u0442\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1716cfc7.chunk.js.map