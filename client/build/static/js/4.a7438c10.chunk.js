(this.webpackJsonpreact_sample_1=this.webpackJsonpreact_sample_1||[]).push([[4],{122:function(e,t,c){e.exports={cartImg:"cartEmpty_cartImg__3UHbt",emptyBag:"cartEmpty_emptyBag__3p8fu",subHead:"cartEmpty_subHead__1ED2C"}},123:function(e,t,c){e.exports={alert:"productItemCard_alert__1aey8",backdrop:"productItemCard_backdrop__2Pb3d",card:"productItemCard_card__1lIKg",close:"productItemCard_close__2TYV7",company:"productItemCard_company__1Olyb",image:"productItemCard_image__D9odC",details:"productItemCard_details__Gj9EE",discount:"productItemCard_discount__B9ihw",header:"productItemCard_header__3h5rz",mrp:"productItemCard_mrp__2tnuj",price:"productItemCard_price__1iRrB",product:"productItemCard_product__2x3rx",sizeQty:"productItemCard_sizeQty__2omi9"}},124:function(e,t,c){e.exports={alert:"cart_alert__2Gr-H",backdrop:"cart_backdrop__1Bc28",cart:"cart_cart__C61Yl",cartItems:"cart_cartItems__3guRd",cartBill:"cart_cartBill__3HNY9"}},144:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(12),n=c(3),r=c.p+"static/media/bag.a88239b5.png",i=c(122),l=c.n(i),o=c(0);var d=function(e){var t=Object(n.g)();return Object(o.jsxs)("div",{className:l.a.emptyBag,children:[Object(o.jsx)("img",{src:r,alt:"Bag",className:l.a.cartImg}),Object(o.jsx)("p",{children:"Your bag is empty"}),Object(o.jsx)("p",{className:l.a.subHead,children:"Let's add some items"}),Object(o.jsx)("button",{type:"button",onClick:function(){t("/home")},children:"SHOP NOW"})]})},u=c(19),j=c.n(u),b=c(4),m=c(23);var p=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(o.jsx)("path",{d:"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"})})},O=c(39),_=c(123),h=c.n(_),x=c(67),v=c(87),C=c.n(v);var f=function(e){var t=Object(s.b)(),c=Object(s.c)((function(e){return e.cart.alertDetails})),n=Object(s.c)((function(e){return e.login.userData})),r=Object(a.useState)(c[0].value.toString()),i=Object(b.a)(r,2),l=i[0],d=i[1];function u(){return(u=Object(m.a)(j.a.mark((function e(t,c,a){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/history-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,cart:c,bill:a})});case 2:return s=e.sent,e.next=5,s.json();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){d(e.target.innerText)}function _(t){e.confirm(0)}return Object(o.jsxs)("div",{className:C.a.cardLayout,children:[!e.value&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("p",{className:C.a.close,children:Object(o.jsx)("span",{className:C.a.closeIcon,onClick:function(e){t(O.a.open({id:c[0].id,topic:c[0].topic,sz:c[0].sz,value:c[0].value}))},children:Object(o.jsx)(x.a,{})})}),Object(o.jsxs)("p",{children:["Select ",c[0].topic]}),Object(o.jsxs)("div",{className:C.a.value,children:["Quantity"===c[0].topic&&Object(o.jsx)("button",{type:"button",className:"1"===l?C.a.active:"",onClick:p,children:"1"}),"Quantity"===c[0].topic&&Object(o.jsx)("button",{type:"button",className:"2"===l?C.a.active:"",onClick:p,children:"2"}),"Quantity"===c[0].topic&&Object(o.jsx)("button",{type:"button",className:"3"===l?C.a.active:"",onClick:p,children:"3"}),"Quantity"===c[0].topic&&Object(o.jsx)("button",{type:"button",className:"4"===l?C.a.active:"",onClick:p,children:"4"}),"Quantity"===c[0].topic&&Object(o.jsx)("button",{type:"button",className:"5"===l?C.a.active:"",onClick:p,children:"5"}),Object(o.jsx)("button",{type:"button",className:"6"===l?C.a.active:"",onClick:p,children:"6"}),Object(o.jsx)("button",{type:"button",className:"7"===l?C.a.active:"",onClick:p,children:"7"}),Object(o.jsx)("button",{type:"button",className:"8"===l?C.a.active:"",onClick:p,children:"8"}),Object(o.jsx)("button",{type:"button",className:"9"===l?C.a.active:"",onClick:p,children:"9"}),Object(o.jsx)("button",{type:"button",className:"10"===l?C.a.active:"",onClick:p,children:"10"})]}),Object(o.jsx)("button",{type:"button",className:C.a.done,onClick:function(e){t(O.a.done({id:c[0].id,topic:c[0].topic,sz:c[0].sz,value:l})),function(e,t,c){u.apply(this,arguments)}(n.email,JSON.parse(localStorage.getItem("products")),JSON.parse(localStorage.getItem("billStore")))},children:"DONE"})]}),e.value&&Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:C.a.close,children:Object(o.jsx)("span",{className:C.a.closeIcon,onClick:_,children:Object(o.jsx)(x.a,{})})}),Object(o.jsx)("p",{className:C.a.head,children:"Remove from Bag"}),Object(o.jsx)("p",{children:"Are you sure you want to remove this item from bag?"}),Object(o.jsx)("p",{className:C.a.msg,children:"You can save items to your wishlist to use this product later"}),Object(o.jsxs)("div",{className:C.a.confirmBtn,children:[Object(o.jsx)("button",{type:"button",className:C.a.rem,onClick:function(t){e.confirm(1)},children:"REMOVE"}),Object(o.jsx)("button",{type:"button",className:C.a.cancel,onClick:_,children:"CANCEL"})]})]})]})};var y=function(e){var t=Object(s.b)(),c=Object(s.c)((function(e){return e.login.userData}));function n(){return(n=Object(m.a)(j.a.mark((function e(t,c,a){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/history-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,cart:c,bill:a})});case 2:return s=e.sent,e.next=5,s.json();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var r=Object(a.useState)(!1),i=Object(b.a)(r,2),l=i[0],d=i[1];return Object(o.jsxs)("div",{className:h.a.card,children:[Object(o.jsx)("div",{className:h.a.image,children:Object(o.jsx)("img",{src:e.image,alt:"Shoe"})}),Object(o.jsxs)("div",{className:h.a.details,children:[Object(o.jsxs)("ul",{className:h.a.header,children:[Object(o.jsx)("li",{className:h.a.company,children:e.company}),Object(o.jsx)("li",{children:Object(o.jsx)("span",{className:h.a.close,onClick:function(e){d(!0!==l)},children:Object(o.jsx)(p,{})})})]}),Object(o.jsx)("p",{className:h.a.product,children:e.product}),Object(o.jsx)("p",{children:e.rating}),Object(o.jsxs)("p",{className:h.a.sizeQty,children:[Object(o.jsxs)("span",{onClick:function(c){t(O.a.open({id:e.id,topic:"Size",sz:e.size,value:e.size}))},children:["Size: ",e.size]}),"\xa0\xa0\xa0",Object(o.jsxs)("span",{onClick:function(c){t(O.a.open({id:e.id,topic:"Quantity",sz:e.size,value:e.quantity}))},children:["Qty: ",e.quantity]})]}),Object(o.jsxs)("p",{className:h.a.price,children:["\u20b9",e.sp,"\xa0\xa0",Object(o.jsxs)("span",{className:h.a.mrp,children:["\u20b9",e.mrp]}),Object(o.jsxs)("span",{className:h.a.discount,children:["\xa0\xa0(",e.discount,"% off)"]})]})]}),l&&Object(o.jsx)("div",{className:h.a.backdrop}),l&&Object(o.jsx)("div",{className:h.a.alert,children:Object(o.jsx)(f,{value:1,confirm:function(a){d(!0!==l),1===a&&function(a){t(O.a.removeItem({id:e.id,sz:e.size}));var s=c.email,r=JSON.parse(localStorage.getItem("products")),i=JSON.parse(localStorage.getItem("billStore"));!function(e,t,c){n.apply(this,arguments)}(s,r,i)}()}})})]})},N=c(88),g=c(78),k=c(124),I=c.n(k);t.default=function(e){Object(a.useEffect)((function(){document.title="Shopping Bag",window.scrollTo(0,0)}));var t=Object(s.c)((function(e){return e.cart.items})).map((function(e){return Object(o.jsx)(y,{id:e.id,image:e.image,company:e.company,product:e.product,rating:e.rating,sp:e.sp,mrp:e.mrp,discount:e.discount,quantity:e.quantity,size:e.sz},e.id+"s"+e.sz)})),c=Object(s.c)((function(e){return e.cart.bill})),n=c.map((function(e){return Object(o.jsx)(N.a,{tmrp:e.tmrp,tdis:e.tdis,tdelfee:e.tdelfee,amount:e.amount,itemQty:e.len,value:"bill"})})),r=Object(s.c)((function(e){return e.cart.openAlert}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(g.a,{value:"bag"})}),0===c[0].len&&Object(o.jsx)(d,{}),0!==c[0].len&&Object(o.jsxs)("div",{className:I.a.cart,children:[Object(o.jsx)("div",{className:I.a.cartItems,children:t}),Object(o.jsx)("div",{className:I.a.cartBill,children:n}),r&&Object(o.jsx)("div",{className:I.a.backdrop}),r&&Object(o.jsx)("div",{className:I.a.alert,children:Object(o.jsx)(f,{})})]})]})}},67:function(e,t,c){"use strict";c(1);var a=c(0);t.a=function(){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(a.jsx)("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"})})}},78:function(e,t,c){"use strict";c(1);var a=c(79),s=c.n(a),n=c(0);t.a=function(e){return Object(n.jsx)("div",{className:s.a.menu,children:Object(n.jsxs)("ul",{className:s.a.menuList,children:[Object(n.jsx)("li",{className:"bag"===e.value?s.a.active:"",children:"B A G"}),Object(n.jsx)("li",{children:Object(n.jsx)("hr",{className:s.a.line})}),Object(n.jsx)("li",{className:"add"===e.value?s.a.active:"",children:"A D D R E S S"}),Object(n.jsx)("li",{children:Object(n.jsx)("hr",{className:s.a.line})}),Object(n.jsx)("li",{className:"pay"===e.value?s.a.active:"",children:"P A Y M E N T"})]})})}},79:function(e,t,c){e.exports={active:"checkoutMenu_active__38N7G",line:"checkoutMenu_line__2aqax",menu:"checkoutMenu_menu__3FN-Q",menuList:"checkoutMenu_menuList__2HkC_"}},87:function(e,t,c){e.exports={cancel:"alertCard_cancel__1zLsH",cardLayout:"alertCard_cardLayout__7EjiI",close:"alertCard_close__pWcQe",closeIcon:"alertCard_closeIcon__1JG5E",confirmBtn:"alertCard_confirmBtn__2vULc",done:"alertCard_done__1O2U_",head:"alertCard_head__2y5xx",msg:"alertCard_msg__3nIlu",rem:"alertCard_rem__2ysmO",value:"alertCard_value__1vgAH",active:"alertCard_active__3rHNd"}},88:function(e,t,c){"use strict";c(1);var a=c(3),s=c(89),n=c.n(s),r=c(0);t.a=function(e){var t=Object(a.g)();return Object(r.jsxs)("div",{className:n.a.cartBill,children:[Object(r.jsxs)("p",{children:["PRICE DETAILS(",e.itemQty," items)"]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Total MRP"}),Object(r.jsxs)("li",{children:["\u20b9",e.tmrp]})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Discount on MRP"}),Object(r.jsxs)("li",{children:["-\u20b9",e.tdis]})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Delivery Fee"}),Object(r.jsxs)("li",{children:["\u20b9",e.tdelfee]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("ul",{className:n.a.total,children:[Object(r.jsx)("li",{children:"Total Amount"}),Object(r.jsxs)("li",{children:["\u20b9",e.amount]})]}),"bill"===e.value&&Object(r.jsx)("button",{type:"button",className:n.a.proceed,onClick:function(){t("/address",{state:{itemQty:e.itemQty,tmrp:e.tmrp,tdis:e.tdis,tdelfee:e.tdelfee,amount:e.amount}})},children:"PROCEED TO BUY"})]})}},89:function(e,t,c){e.exports={cartBill:"productBillCard_cartBill__UDAmu",proceed:"productBillCard_proceed__8bc2Y",total:"productBillCard_total__irRof"}}}]);
//# sourceMappingURL=4.a7438c10.chunk.js.map