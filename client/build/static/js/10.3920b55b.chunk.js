(this.webpackJsonpreact_sample_1=this.webpackJsonpreact_sample_1||[]).push([[10],{108:function(e,t,a){e.exports={head:"otp_head__2yWGT",layout:"otp_layout__23W0E",otpDetails:"otp_otpDetails__QYpyA",resend:"otp_resend__1O1F5",resendTimer:"otp_resendTimer__2ZBAy",subHead:"otp_subHead__2HUUr",textBox:"otp_textBox__10beB",toast:"otp_toast__9YpOC",confirmToast:"otp_confirmToast__3UbVN"}},136:function(e,t,a){"use strict";a.r(t);var s=a(19),n=a.n(s),c=a(23),o=a(4),i=a(1),r=a(3),u=a(70),l=a(66),d=a(81),j=a(108),p=a.n(j),x=a(0);t.default=function(e){Object(i.useEffect)((function(){document.title="Online Shopping site for shoes in India | Friction",window.scrollTo(0,0)}));var t=Object(r.f)(),a=Object(r.g)(),s=Object(i.useState)(60),j=Object(o.a)(s,2),m=j[0],f=j[1],h=Object(i.useState)(0),b=Object(o.a)(h,2),O=b[0],_=b[1],g=Object(i.useState)(!1),v=Object(o.a)(g,2),y=v[0],N=v[1],C=Object(i.useState)(0),B=Object(o.a)(C,2),w=B[0],T=B[1],L=Object(i.useState)(!1),S=Object(o.a)(L,2),k=S[0],E=S[1],I=Object(i.useState)(!1),U=Object(o.a)(I,2),H=U[0],q=U[1];if(Object(i.useEffect)((function(){0===w&&F(t.state.email)}),[w,t.state.email]),!t.state)return Object(x.jsx)("img",{src:l.a,className:p.a.load,alt:"Loading..."});function P(e,t){document.getElementById(e).value.length&&document.getElementById(t).focus()}function F(e){return K.apply(this,arguments)}function K(){return(K=Object(c.a)(n.a.mark((function e(t){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/send-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,a.ok&&s&&T(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(c.a)(n.a.mark((function e(t,s){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.next=3,fetch("/api/user/update-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:s})});case 3:return c=e.sent,e.next=6,c.json();case 6:q(!1),c.ok&&(E(!0),setTimeout((function(){E(!1)}),3e3),setTimeout((function(){a("/")}),3500));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){var e=document.getElementById("first").value+document.getElementById("sec").value+document.getElementById("third").value+document.getElementById("fourth").value+document.getElementById("fifth").value+document.getElementById("sixth").value;return Number(e)===w?void function(e,t){Y.apply(this,arguments)}(t.state.email,t.state.password):(N(!0),void setTimeout((function(){N(!1)}),3e3))}function J(e){""===e.target.value&&0!==O?_(O-1):(5===O&&D(),_(O+1))}return m>0&&setTimeout((function(){f(m-1)}),1e3),Object(x.jsx)("div",{className:p.a.layout,children:Object(x.jsxs)("div",{children:[y&&Object(x.jsxs)("div",{className:p.a.toast,children:[" ",Object(x.jsx)(d.a,{close:function(e){N(!1)},value:"Incorrect OTP"})," "]}),Object(x.jsxs)("form",{children:[Object(x.jsx)("p",{className:p.a.head,children:"Verify with OTP"}),Object(x.jsxs)("p",{className:p.a.subHead,children:["Sent to ",t.state.email]}),Object(x.jsxs)("div",{className:p.a.otpDetails,children:[Object(x.jsx)("input",{type:"text",maxLength:"1",required:!0,id:"first",className:p.a.textBox,onKeyUp:function(){return P("first","sec")},onChange:J}),Object(x.jsx)("input",{type:"text",maxLength:"1",required:!0,id:"sec",className:p.a.textBox,onKeyUp:function(){return P("sec","third")},onChange:J}),Object(x.jsx)("input",{type:"text",maxLength:"1",required:!0,id:"third",className:p.a.textBox,onKeyUp:function(){return P("third","fourth")},onChange:J}),Object(x.jsx)("input",{type:"text",maxLength:"1",required:!0,id:"fourth",className:p.a.textBox,onKeyUp:function(){return P("fourth","fifth")},onChange:J}),Object(x.jsx)("input",{type:"text",maxLength:"1",required:!0,id:"fifth",className:p.a.textBox,onKeyUp:function(){return P("fifth","sixth")},onChange:J}),Object(x.jsx)("input",{type:"text",maxLength:"1",required:!0,id:"sixth",className:p.a.textBox,onChange:J})]}),m>0&&Object(x.jsxs)("p",{className:p.a.resendTimer,children:["Resend OTP in 00:",("0"+m).slice(-2)]}),!m&&Object(x.jsx)("p",{className:p.a.resend,onClick:function(e){f(60),T(0),0===w&&F(t.state.email)},children:"RESEND OTP"})]}),k&&Object(x.jsx)(u.a,{value:"Password Updated Successfully"}),H&&Object(x.jsx)("img",{src:l.a,className:p.a.load,alt:"Loading..."})]})})}},66:function(e,t,a){"use strict";t.a=a.p+"static/media/sectionLoader.f418ba14.gif"},67:function(e,t,a){"use strict";a(1);var s=a(0);t.a=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(s.jsx)("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"})})}},70:function(e,t,a){"use strict";a(1);var s=a(71),n=a.n(s),c=a(0);t.a=function(e){return Object(c.jsx)("div",{className:n.a.notificationHolder,children:Object(c.jsx)("div",{className:n.a.layout,children:Object(c.jsx)("p",{className:n.a.msg,children:e.value})})})}},71:function(e,t,a){e.exports={layout:"notificationCard_layout__1cSqA",notificationHolder:"notificationCard_notificationHolder__16Fvo"}},77:function(e,t,a){e.exports={check:"toastCard_check__1jG2B",close:"toastCard_close__3_FYz",checkBox:"toastCard_checkBox__1xnc1",layout:"toastCard_layout__24BmN",msg:"toastCard_msg__3Fvj_",progress:"toastCard_progress__18ckt",bar:"toastCard_bar__4YvrY"}},81:function(e,t,a){"use strict";a(1);var s=a(0);var n=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(s.jsx)("path",{d:"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"})})},c=a(67),o=a(77),i=a.n(o);t.a=function(e){return Object(s.jsxs)("div",{className:i.a.layout,children:[Object(s.jsx)("span",{className:i.a.close,onClick:function(t){e.close(1)},children:Object(s.jsx)(c.a,{})}),Object(s.jsx)("div",{className:i.a.checkBox,children:Object(s.jsx)("span",{className:i.a.check,children:Object(s.jsx)(n,{})})}),Object(s.jsx)("p",{className:i.a.msg,children:e.value}),Object(s.jsx)("div",{className:i.a.progress})]})}}}]);
//# sourceMappingURL=10.3920b55b.chunk.js.map