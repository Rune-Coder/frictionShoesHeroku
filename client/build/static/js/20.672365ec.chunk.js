(this.webpackJsonpreact_sample_1=this.webpackJsonpreact_sample_1||[]).push([[20],{130:function(e,t,a){e.exports={badge:"paymentSuccess_badge__2LODo",continue:"paymentSuccess_continue__35gKk",layout:"paymentSuccess_layout__2_Ues",subHead:"paymentSuccess_subHead__2hCKQ"}},140:function(e,t,a){"use strict";a.r(t);var s=a(19),n=a.n(s),r=a(23),c=a(4),o=a(1),i=a(3),l=a(42),u=a(12),p=a(40),d=a(130),b=a.n(d),f=a(0);t.default=function(e){Object(o.useEffect)((function(){document.title="Online Shopping site for shoes in India | Friction",window.scrollTo(0,0)}));var t=Object(i.g)(),a=Object(u.c)((function(e){return e.login.loggedin}));Object(o.useEffect)((function(){var e=localStorage.getItem("address")?JSON.parse(localStorage.getItem("address")):{};a&&e.pin||t("/",{replace:!0})}),[t,a]);var s=Object(u.c)((function(e){return e.login.userData})),d=Object(o.useState)([]),g=Object(c.a)(d,2),m=g[0],O=g[1],j=Object(u.b)();function h(){return h=Object(r.a)(n.a.mark((function e(t,a){var s,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],r=[],e.next=4,fetch("/api/user/history-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,cart:s,bill:r,orders:a})});case 4:return c=e.sent,e.next=7,c.json();case 7:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}return Object(o.useEffect)((function(){function e(){return(e=Object(r.a)(n.a.mark((function e(t){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/history-get",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,a.ok&&s.orders&&O(s.orders);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(s.email)}),[s.email]),Object(f.jsxs)("div",{className:b.a.layout,children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:b.a.badge,children:Object(f.jsx)(l.a,{})})}),Object(f.jsx)("p",{children:"Payment Successfull"}),Object(f.jsx)("button",{onClick:function(e){var a=localStorage.getItem("billStore")?JSON.parse(localStorage.getItem("billStore")):[{amount:0}],n=localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[],r=localStorage.getItem("address")?JSON.parse(localStorage.getItem("address")):{},c=m.slice();c.push({order_id:"",status:"processing",bill:a,products:n,payment:"Online",address:r,date:""}),function(e,t){h.apply(this,arguments)}(s.email,c),j(p.a.remAddress()),t("/orders",{replace:!0})},className:b.a.continue,children:"CONTINUE"}),Object(f.jsx)("p",{className:b.a.subHead,children:"Please do not go back or refresh page"})]})}}}]);
//# sourceMappingURL=20.672365ec.chunk.js.map