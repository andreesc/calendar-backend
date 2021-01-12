(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{122:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(7),o=n.n(c),s=n(36),i=n(9),l=n(16),u=(n(76),n(27)),j=n(5),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(l.a)(t,2),a=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(j.a)(Object(j.a)({},a),{},Object(u.a)({},t.name,t.value)))};return[a,s,o]},b=n(8),m=n(12),v=n.n(m),O=n(22),f="https://react-calendar.herokuapp.com/api",p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(f,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"x-token":r,"Content-type":"application/json"},body:JSON.stringify(t)})},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(f,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},x="[UI] Open modal",g="[UI] Close modal",y="[Event] Set active",N="[Event] Add new event",E="[Event] Clear active event",w="[Event] Event updated",k="[Event] Event deleted",S="[Event] Events loaded",C="[Event] Clear events",D="[Auth] Finish checking login state",T="[Auth] Login",I="[Auth] Logout",P=n(19),A=n.n(P),_=n(15),L=n.n(_),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{end:L()(e.end).toDate(),start:L()(e.start).toDate()})}))},G=function(e){return{type:N,payload:e}},F=function(){return{type:E}},U=function(e){return{type:w,payload:e}},V=function(){return{type:k}},H=function(e){return{type:S,payload:e}},J=function(e){return{type:T,payload:e}},M=function(){return{type:D}},q=function(){return function(e){localStorage.clear(),e(B()),e({type:C})}},B=function(){return{type:I}};var X=function(){var e=d({lEmail:"",lPassword:""}),t=Object(l.a)(e,2),n=t[0],r=t[1],c=d({rEmail:"",rPassword:"",rPassword2:"",rName:""}),o=Object(l.a)(c,2),s=o[0],i=o[1],u=Object(b.b)(),j=n.lEmail,m=n.lPassword,f=s.rEmail,p=s.rPassword,x=s.rPassword2,g=s.rName;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),u((t=j,n=m,function(){var e=Object(O.a)(v.a.mark((function e(a){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth",{email:t,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-create-date",(new Date).getTime()),a(J({uid:c.uid,name:c.name}))):A.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:j,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",name:"lPassword",value:m,onChange:r,placeholder:"Contrase\xf1a"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(e){var t,n,a;e.preventDefault(),p!==x&&A.a.fire("Error","Las contrase\xf1as deben de ser iguales.","error"),u((t=g,n=f,a=p,function(){var e=Object(O.a)(v.a.mark((function e(r){var c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth/new",{name:t,email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-create-date",(new Date).getTime()),r(J({uid:o.uid,name:o.name}))):A.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:g,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",value:p,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:x,onChange:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},z=(n(82),n(57));n(83);var K=function(){var e=Object(b.c)((function(e){return e.auth})).name,t=Object(b.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(q())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})},Q={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}};var W=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("span",{children:["- ",r.name]})]})},Y=n(52),Z=n.n(Y),$=n(53),ee=n.n($),te=function(){return{type:x}},ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var ae=L()().minutes(0).seconds(0).add(1,"hours"),re=ae.clone().add(1,"hours"),ce={title:"",notes:"",start:ae.toDate(),end:re.toDate()};var oe=function(){var e=Object(b.c)((function(e){return e.ui})).modalOpen,t=Object(b.c)((function(e){return e.calendar})).activeEvent,n=Object(b.b)(),c=Object(r.useState)(ae.toDate()),o=Object(l.a)(c,2),s=o[0],i=o[1],d=Object(r.useState)(re.toDate()),m=Object(l.a)(d,2),f=m[0],h=m[1],x=Object(r.useState)(!0),y=Object(l.a)(x,2),N=y[0],E=y[1],w=Object(r.useState)(ce),k=Object(l.a)(w,2),S=k[0],C=k[1],D=S.title,T=S.notes,I=S.start,P=S.end;Object(r.useEffect)((function(){C(t||ce)}),[t,C]);var _=function(e){var t=e.target;C(Object(j.a)(Object(j.a)({},S),{},Object(u.a)({},t.name,t.value)))},R=function(){n({type:g}),C(ce),n(F())};return Object(a.jsxs)(Z.a,{isOpen:e,style:ne,onRequestClose:R,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h1",{children:[" ",t?"Editando evento":"Crear evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=L()(I),r=L()(P);if(a.isSameOrAfter(r))A.a.fire("Error","La fecha de fin debe ser mayor que la de inicio.","error");else{if(D.trim().length<2)return E(!1);var c;n(t?(c=S,function(){var e=Object(O.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(c.id),c,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?t(U(c)):A.a.fire("Error",a.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(O.a)(v.a.mark((function t(n,a){var r,c,o,s,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,p("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:c,name:o},n(G(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(S)),E(!0),R()}},className:"container",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(ee.a,{className:"form-control",onChange:function(e){console.log(e),i(e),C(Object(j.a)(Object(j.a)({},S),{},{start:e}))},value:s})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(ee.a,{className:"form-control",onChange:function(e){h(e),C(Object(j.a)(Object(j.a)({},S),{},{end:e}))},minDate:s,value:f})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!N&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:D,onChange:_}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:T,onChange:_}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})};var se=function(){var e=Object(b.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(te())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})};var ie=function(){var e=Object(b.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(O.a)(v.a.mark((function e(t,n){var a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(V()):A.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar evento"})]})};L.a.locale("es");var le=Object(z.b)(L.a);var ue=function(){var e=Object(r.useState)(localStorage.getItem("lastView")||"month"),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(b.b)(),s=Object(b.c)((function(e){return e.calendar})),i=s.events,u=s.activeEvent,j=Object(b.c)((function(e){return e.auth})).uid;return Object(r.useEffect)((function(){o(function(){var e=Object(O.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("events",{});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=R(a.events),a.ok&&t(H(r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(K,{}),Object(a.jsx)(z.a,{localizer:le,events:i,startAccessor:"start",endAccessor:"end",messages:Q,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:j===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){o(te())},onSelectEvent:function(e){o({type:y,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){o(F())},selectable:!0,view:n,components:{event:W}}),u&&Object(a.jsx)(ie,{}),Object(a.jsx)(se,{}),Object(a.jsx)(oe,{})]})},je=n(39);var de=function(e){var t=e.isAuthenticated,n=e.component,r=Object(je.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(i.b,Object(j.a)(Object(j.a)({},r),{},{component:function(e){return t?Object(a.jsx)(i.a,{to:"/"}):Object(a.jsx)(n,Object(j.a)({},e))}}))};var be=function(e){var t=e.isAuthenticated,n=e.component,r=Object(je.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",r.location.pathname),Object(a.jsx)(i.b,Object(j.a)(Object(j.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(j.a)({},e)):Object(a.jsx)(i.a,{to:"/login"})}}))};var me=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(O.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/renew",{});case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-create-date",(new Date).getTime()),t(J({uid:a.uid,name:a.name}))):t(M());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:"Loading..."}):Object(a.jsx)(s.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(de,{isAuthenticated:!!c,exact:!0,path:"/login",component:X}),Object(a.jsx)(be,{isAuthenticated:!!c,exact:!0,path:"/",component:ue}),Object(a.jsx)(i.a,{to:"/"})]})})})},ve=n(23),Oe={modalOpen:!1},fe=n(58),pe={events:[],activeEvent:null},he={checking:!0},xe=Object(ve.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!0});case g:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:t.payload});case N:return Object(j.a)(Object(j.a)({},e),{},{events:[t.payload].concat(Object(fe.a)(e.events))});case E:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:null});case w:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case k:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case S:return Object(j.a)(Object(j.a)({},e),{},{events:Object(fe.a)(t.payload)});case C:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:null,events:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(j.a)(Object(j.a)({},e),{},{checking:!1},t.payload);case D:return Object(j.a)(Object(j.a)({},e),{},{checking:!1});case I:return{checking:!1};default:return e}}}),ge=n(70),ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ne=Object(ve.e)(xe,ye(Object(ve.a)(ge.a))),Ee=function(){return Object(a.jsx)(b.a,{store:Ne,children:Object(a.jsx)(me,{})})};n(122);o.a.render(Object(a.jsx)(Ee,{}),document.getElementById("root"))},76:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.9bfd23c4.chunk.js.map