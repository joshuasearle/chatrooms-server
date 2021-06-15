(this["webpackJsonpchatrooms-client"]=this["webpackJsonpchatrooms-client"]||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(58),c=a.n(n),o=a(3),i=a(15),l=a(2),u=function(e,t){return e.length<=t?e:"".concat(e.slice(0,t),"...")},m=a(1),j=function(e){var t=e.displayName,a=t?u(t,10):"Login";return Object(m.jsx)("div",{className:"navbar",children:Object(m.jsxs)("div",{className:"navbar__items",children:[Object(m.jsx)(i.b,{className:"navbar__title",to:t?"/rooms":"/login",children:Object(m.jsx)("h1",{children:"Chatrooms"})}),Object(m.jsxs)("div",{className:"navbar__links",children:[t&&Object(m.jsx)(i.b,{className:"navbar__link",to:"/rooms",children:"Rooms"}),Object(m.jsx)(i.b,{className:"navbar__link",to:"/login",children:a})]})]})})},b=function(){var e="chatroomsDisplayName",t=window.localStorage.getItem(e)||"",a=Object(r.useState)(""),s=Object(o.a)(a,2),n=s[0],c=s[1],i=Object(r.useState)(t),l=Object(o.a)(i,2);return[n,function(t){window.localStorage.setItem(e,t),c(t)},l[0],l[1]]},d=function(e,t){var a=Object(r.useState)([]),s=Object(o.a)(a,2),n=s[0],c=s[1];return Object(r.useEffect)((function(){t&&e.on("rooms",(function(e){c(e)}),[t])})),[n,c]},h=a(60),p=a.n(h),O="https://chatrooms-server-joshua-searle.herokuapp.com",x=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1],n=null!==a&&a.connected;return Object(r.useEffect)((function(){var e=p()(O);return e.on("connect",(function(){s(e)})),function(){e.disconnect()}}),[]),[a,n]},f=a(8),v=a.n(f),_=a(16),N=a(24),g=a.n(N),k=function(){var e=Object(_.a)(v.a.mark((function e(t,a,r){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat(O,"/login"),{displayName:a,socketId:t.id});case 2:return s=e.sent,r(s.data.rooms),e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),y=function(e){var t=e.displayNameInput,a=e.setDisplayNameInput,s=e.setDisplayName,n=e.connected,c=e.socket,i=e.setRooms,u=Object(r.useState)(!1),j=Object(o.a)(u,2),b=j[0],d=j[1],h=Object(r.useState)(""),p=Object(o.a)(h,2),O=p[0],x=p[1],f=""===t,N=function(){var e=Object(_.a)(v.a.mark((function e(a){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!f){e.next=3;break}return e.abrupt("return");case 3:if(n){e.next=5;break}return e.abrupt("return",x("Server error"));case 5:return e.prev=5,e.next=8,k(c,t,i);case 8:if(r=e.sent,console.log(r),console.log(r.created),r.created){e.next=13;break}return e.abrupt("return",x(r.message));case 13:s(t),d(!0),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),x("Server error");case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t){return e.apply(this,arguments)}}();return b?Object(m.jsx)(l.a,{to:"/rooms",push:!0}):Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h1",{className:"login__title",children:"Set Your Display Name"}),Object(m.jsxs)("form",{className:"login__form",children:[Object(m.jsx)("input",{type:"text",className:"login__input input",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Enter your display name here"}),O&&Object(m.jsx)("div",{className:"login__error error",children:O}),Object(m.jsx)("button",{disabled:f,className:"button",onClick:N,children:"View Rooms"})]})]})},S=function(e){var t=e.rooms,a=e.socket,s=e.displayName,n=Object(r.useState)(""),c=Object(o.a)(n,2),i=c[0],j=c[1],b=Object(l.g)().roomName,d=t.find((function(e){return e.roomName===b})),h=""===i;return d?Object(m.jsxs)("div",{className:"room",children:[Object(m.jsx)("h1",{className:"room__title",children:b}),Object(m.jsx)("div",{className:"room__messages",children:d.messages.map((function(e,t){var a=e.displayName===s?"room__author room__author--right":"room__author room__author--left",r=e.displayName===s?"room__message room__message--right":"room__message room__message--left";return[Object(m.jsx)("div",{className:a,children:u(e.displayName,15)},"message".concat(t)),Object(m.jsx)("div",{className:r,children:e.content},"author".concat(t))]}))}),Object(m.jsxs)("div",{className:"room__send",children:[Object(m.jsx)("textarea",{value:i,onChange:function(e){return j(e.target.value)},className:"room__input input"}),Object(m.jsx)("button",{disabled:h,className:"room__button button",onClick:function(e){e.preventDefault(),a.emit("message",{roomName:b,content:i,socketId:a.id}),j("")},children:"Send"})]})]}):Object(m.jsx)(l.a,{to:s?"/rooms":"/login"})},w=function(){var e=Object(_.a)(v.a.mark((function e(t,a){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat(O,"/room"),{roomName:a,socketId:t.id});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(e){var t=e.socket,a=Object(r.useState)(""),s=Object(o.a)(a,2),n=s[0],c=s[1],i=Object(r.useState)(""),l=Object(o.a)(i,2),u=l[0],j=l[1],b=Object(r.useState)(""),d=Object(o.a)(b,2),h=d[0],p=d[1],O=""===n,x=function(){var e=Object(_.a)(v.a.mark((function e(a){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,w(t,n);case 3:(r=e.sent).created?(p(r.message),j(""),c("")):(j(r.message),p(""));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"create-room half-page",children:[Object(m.jsx)("h1",{className:"create-room__title",children:"Create Room"}),Object(m.jsxs)("form",{className:"create-room__form",children:[Object(m.jsx)("input",{value:n,type:"text",className:"create-room__input input",onChange:function(e){p(""),j(""),c(e.target.value)}}),u&&Object(m.jsx)("div",{className:"error",children:u}),h&&Object(m.jsx)("div",{className:"success",children:h}),Object(m.jsx)("button",{className:"create-room__button button",onClick:x,disabled:O,children:"Create Room"})]})]})},C=function(e){var t=e.rooms;return Object(m.jsxs)("div",{className:"rooms-list half-page",children:[Object(m.jsx)("h1",{className:"rooms-list__title",children:"Rooms"}),Object(m.jsx)("div",{className:"rooms-list__list",children:t.map((function(e,t){return Object(m.jsx)(i.b,{className:"rooms-list__button button",to:"/rooms/".concat(e.roomName),children:u(e.roomName,10)},t)}))})]})},D=function(e){var t=e.socket,a=e.rooms;return Object(m.jsxs)("div",{className:"rooms-page",children:[Object(m.jsx)(I,{socket:t}),Object(m.jsx)(C,{rooms:a})]})},R=function(){var e=b(),t=Object(o.a)(e,4),a=t[0],r=t[1],s=t[2],n=t[3],c=x(),u=Object(o.a)(c,2),h=u[0],p=u[1],O=d(h,p),f=Object(o.a)(O,2),v=f[0],_=f[1];return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(j,{displayName:a}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/login",children:Object(m.jsx)(y,{setRooms:_,socket:h,connected:p,displayNameInput:s,setDisplayNameInput:n,setDisplayName:r})}),Object(m.jsxs)(l.b,{exact:!0,path:"/rooms",children:[a?null:Object(m.jsx)(l.a,{to:"/login"}),Object(m.jsx)(D,{socket:h,rooms:v})]}),Object(m.jsxs)(l.b,{exact:!0,path:"/rooms/:roomName",children:[a?null:Object(m.jsx)(l.a,{to:"/login"}),Object(m.jsx)(S,{rooms:v,socket:h,displayName:a})]}),Object(m.jsx)(l.b,{exact:!0,path:"",children:Object(m.jsx)(l.a,{to:"/login"})})]})]})};a(117);c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.a06f51c5.chunk.js.map