(this.webpackJsonpreact_sample_1=this.webpackJsonpreact_sample_1||[]).push([[5],{147:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t.p+"static/media/sneakers_header.7e4a6a98.jpg",s=t(96),n=t.n(s),i=t(0);var o=function(){return Object(i.jsxs)("div",{className:n.a.offer,children:[Object(i.jsxs)("div",{className:n.a.headTitle,children:["Trade-In-offer",Object(i.jsx)("h2",{children:"Super Value Deals"}),Object(i.jsx)("h2",{className:n.a.head2,children:"Best Quality Shopping"}),Object(i.jsx)("p",{className:n.a.head3,children:"Save more with coupons upto 70% off"}),Object(i.jsx)("button",{type:"button",className:n.a.headBtn,children:"Shop Now"})]}),Object(i.jsx)("div",{className:n.a.headImg,children:Object(i.jsx)("img",{src:r,alt:"Sneakers"})})]})},d=t(19),u=t.n(d),p=t(23),l=t(4),j=t(97),_=t.n(j),h=t(73),m=t(133),g=t(66),f=t(75);var b=function(e){var a=Object(c.useState)([]),t=Object(l.a)(a,2),r=t[0],s=t[1],n=Object(c.useState)(1),o=Object(l.a)(n,2),d=o[0],j=o[1],b=Object(c.useState)(!1),O=Object(l.a)(b,2),x=O[0],v=O[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,m.a.get("/api/products");case 3:a=e.sent,t=a.data,s(t.products),v(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r&&r.length>0){var C=20*d,N=C-20,w=r.slice(N,C).map((function(e){return Object(i.jsx)(h.a,{id:e._id,image:e.image,company:e.company,product:e.product,rating:e.rating,sp:e.sp,mrp:e.mrp,discount:e.discount},e._id)}));return Object(i.jsxs)("div",{className:_.a.layout,children:[Object(i.jsxs)("div",{className:_.a.features,children:[w,x&&Object(i.jsx)("img",{src:g.a,alt:"Loading..."})]}),Object(i.jsx)(f.a,{totalPost:r.length,postPerPage:20,setCurrPage:j,currPage:d})]})}return Object(i.jsx)("div",{className:_.a.layout,children:Object(i.jsx)("img",{src:g.a,alt:"Loading..."})})},O=t(31);a.default=function(e){return Object(c.useEffect)((function(){document.title="Online Shopping site for Shoes in India | Friction"})),Object(i.jsxs)(O.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(b,{})]})}},66:function(e,a,t){"use strict";a.a=t.p+"static/media/sectionLoader.f418ba14.gif"},68:function(e,a,t){e.exports={rating:"starRating_rating__2_rtu",star:"starRating_star__2OVKz",starFill:"starRating_starFill__2gMas",avg:"starRating_avg__2xKMq"}},72:function(e,a,t){"use strict";t(1);var c=t(0);var r=function(){return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(c.jsx)("path",{d:"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"})})},s=t(68),n=t.n(s);a.a=function(e){var a=e.stars;return Object(c.jsx)("div",{className:n.a.rating,children:Object(c.jsx)("span",{className:"".concat(n.a.star," ").concat(a>=4?n.a.starFill:n.a.avg),children:Object(c.jsx)(r,{})})})}},73:function(e,a,t){"use strict";var c=t(19),r=t.n(c),s=t(23),n=t(4),i=t(1),o=t(3),d=t(12),u=t(38),p=t(72),l=t(41),j=t(74),_=t.n(j),h=t(0);a.a=function(e){var a=Object(d.c)((function(e){return e.login.loggedin})),t=Object(d.c)((function(e){return e.login.userData})),c=Object(o.g)(),j=Object(i.useState)(!1),m=Object(n.a)(j,2),g=m[0],f=m[1];Object(i.useEffect)((function(){var a=localStorage.getItem("wishStore")?JSON.parse(localStorage.getItem("wishStore")):[];a.length>0&&(a.find((function(a){return a.id===e.id}))&&f(!0))}),[e]);var b=Object(d.b)();function O(){return(O=Object(s.a)(r.a.mark((function e(a,t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/history-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,wish:t})});case 2:return c=e.sent,e.next=5,c.json();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:_.a.card,onClick:function(){var a="/shoes/"+e.company.toLowerCase()+"-"+e.product.toLowerCase()+"/"+e.id;c(a)},children:[Object(h.jsx)("div",{className:_.a.image,children:Object(h.jsx)("img",{src:e.image,alt:"Shoe"})}),Object(h.jsxs)("div",{className:_.a.desc,children:[Object(h.jsx)("span",{className:_.a.comName,children:e.company}),Object(h.jsx)("p",{className:_.a.pName,children:e.product}),Object(h.jsxs)("p",{className:_.a.rating,children:[Object(h.jsx)(p.a,{stars:e.rating}),e.rating]}),Object(h.jsxs)("ul",{className:_.a.priceCart,children:[Object(h.jsxs)("li",{className:_.a.price,children:["\u20b9",e.sp," ",Object(h.jsxs)("span",{className:_.a.mrp,children:["\u20b9",e.mrp]})," ",Object(h.jsxs)("span",{className:_.a.discount,children:["(",e.discount,"% off)"]})]}),Object(h.jsx)("li",{onClick:function(r){r.stopPropagation(),a?(f(!g),b(u.b.addItem({id:e.id,image:e.image,company:e.company,product:e.product,rating:e.rating,sp:e.sp,mrp:e.mrp,discount:e.discount})),function(e,a){O.apply(this,arguments)}(t.email,JSON.parse(localStorage.getItem("wishStore")))):c("/login")},children:Object(h.jsx)("span",{className:"".concat(_.a.wishList," ").concat(g&&_.a.activeWish," ").concat(!g&&""),children:Object(h.jsx)(l.a,{})})})]})]})]})}},74:function(e,a,t){e.exports={card:"productCard_card__32vP2",comName:"productCard_comName__3rhzB",desc:"productCard_desc__1jUqu",discount:"productCard_discount__3UgA7",image:"productCard_image__2IUsX",mrp:"productCard_mrp__32w_L",pName:"productCard_pName__2GReW",price:"productCard_price__3p3wJ",priceCart:"productCard_priceCart__1klHI",rating:"productCard_rating__24tA3",star:"productCard_star__1cGLt",wishList:"productCard_wishList__31HL9",activeWish:"productCard_activeWish__2jXHq"}},75:function(e,a,t){"use strict";t(1);var c=t(76),r=t.n(c),s=t(0);a.a=function(e){for(var a=[],t=1;t<=Math.ceil(e.totalPost/e.postPerPage);t++)a.push(t);return Object(s.jsx)("div",{className:r.a.pages,children:a.map((function(a,t){return Object(s.jsx)("button",{onClick:function(){e.setCurrPage(a),window.scrollTo(0,0)},className:a===e.currPage?r.a.pageActive:r.a.pageInactive,children:a},t)}))})}},76:function(e,a,t){e.exports={pageActive:"pagination_pageActive__po8xV",pageInactive:"pagination_pageInactive__mOjxj"}},96:function(e,a,t){e.exports={head2:"offerHeader_head2__1phHH",head3:"offerHeader_head3__5_Nu-",headBtn:"offerHeader_headBtn__2JpwM",headImg:"offerHeader_headImg__2mCGb",headTitle:"offerHeader_headTitle__149RS",offer:"offerHeader_offer__3CUQk"}},97:function(e,a,t){e.exports={features:"catalogue_features__3z-54",layout:"catalogue_layout__3iDpP"}}}]);
//# sourceMappingURL=5.bf456896.chunk.js.map