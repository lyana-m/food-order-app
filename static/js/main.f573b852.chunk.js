(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__2wmuT",control:"Checkout_control__1NYa3",actions:"Checkout_actions__2yu4F",submit:"Checkout_submit__2iofy",invalid:"Checkout_invalid__2k-cv"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1s9Jj",total:"Cart_total__2OKeA",actions:"Cart_actions__3UzXr","button--alt":"Cart_button--alt__2DddN",button:"Cart_button__1V3Zk"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__202DV",summary:"CartItem_summary__3gJw1",price:"CartItem_price__fySzt",amount:"CartItem_amount__2AME7",actions:"CartItem_actions__MDTyp"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__Y4f07",icon:"HeaderCartButton_icon__1nbpM",badge:"HeaderCartButton_badge__2rFmJ",bump:"HeaderCartButton_bump__2dbMr"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2goxJ",description:"MealItem_description__3rx-E",price:"MealItem_price__2cwal"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__t9g5V","meals-appear":"AvailableMeals_meals-appear__1kS8q",mealsLoading:"AvailableMeals_mealsLoading__3PuuQ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2haFI",modal:"Modal_modal__2eWf2","slide-down":"Modal_slide-down__6mHw9"}},,function(e,t,n){e.exports={header:"Header_header__1OThC","main-image":"Header_main-image__EXaNc"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__32HKj"}},function(e,t,n){e.exports={card:"Card_card__2BvFH"}},function(e,t,n){e.exports={input:"Input_input__3_3R9"}},function(e,t,n){e.exports={form:"MealItemForm_form__1qETj"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],amount:0,addItemToCart:function(){},removeItemFromCart:function(){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u),d=s.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){return clearTimeout(e)}}}),[s.items]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),h=n.n(O),p=function(e){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"React Meals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food"})})]})},x=n(19),f=n.n(x),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),y=n(3),g=n(12),N=n(20),k=n.n(N),w=function(e){return Object(o.jsx)("div",{className:k.a.card,children:e.children})},I=n(21),M=n.n(I),A=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:M.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(y.a)(Object(y.a)({},e.input),{},{ref:t}))]})})),S=n(22),F=n.n(S),T=function(e){var t=Object(i.useRef)(),n=Object(i.useState)(!0),a=Object(r.a)(n,2),c=a[0],s=a[1];return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):(e.onAddToCart(c),s(!0))},children:[Object(o.jsx)(A,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:1,max:5,step:1,defaultValue:1}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please, enter correct amount (1-5)"})]})},H=n(13),E=n.n(H),D=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:E.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:E.a.description,children:e.description}),Object(o.jsx)("div",{className:E.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(T,{id:e.id,onAddToCart:function(n){t.addItemToCart({id:e.id,amount:n,name:e.name,price:e.price})}})})]})},R=n(14),B=n.n(R),P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),l=s[0],u=s[1],d=Object(i.useState)(""),j=Object(r.a)(d,2),m=j[0],b=j[1];Object(i.useEffect)((function(){O()}),[]);var O=function(){var e=Object(g.a)(C.a.mark((function e(){var t,n,c,r,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(""),e.prev=1,e.next=4,fetch("https://react-max-fa58c-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Something went wrong...");case 7:return e.next=9,t.json();case 9:for(n=e.sent,c=[],r=0,i=Object.keys(n);r<i.length;r++)s=i[r],c.push(Object(y.a)({id:s},n[s]));a(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),b(e.t0);case 18:u(!1);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();if(m)return Object(o.jsx)("section",{className:B.a.mealsLoading,children:Object(o.jsx)("p",{children:"Something went wrong..."})});if(l)return Object(o.jsx)("section",{className:B.a.mealsLoading,children:Object(o.jsx)("p",{children:"Meals are loading..."})});var h=n.map((function(e){return Object(o.jsx)(D,{name:e.name,price:e.price,description:e.description,id:e.id},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(w,{children:Object(o.jsx)("ul",{children:h})})})},J=function(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(P,{})]})},V=n(15),z=n.n(V),L=function(e){return Object(o.jsx)("div",{className:z.a.backdrop,onClick:e.onBackDropClick})},Y=function(e){return Object(o.jsx)("div",{className:z.a.modal,children:Object(o.jsx)("div",{className:z.a.content,children:e.children})})},q=document.getElementById("overlays"),$=function(e){return Object(o.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(o.jsx)(L,{onBackDropClick:e.onBackDropClick}),q),c.a.createPortal(Object(o.jsx)(Y,{children:e.children}),q)]})},K=n(7),X=n.n(K),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:X.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:X.a.summary,children:[Object(o.jsx)("span",{className:X.a.price,children:t}),Object(o.jsxs)("span",{className:X.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(4),W=n.n(U),Z=function(e){return!e.trim()},G=function(e){var t=Object(i.useState)({name:!0,street:!0,postal:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)();return Object(o.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=l.current.value,r=u.current.value,i=d.current.value,o=!Z(n),j=!Z(a),m=5===r.trim().length,b=!Z(i);c({name:o,street:j,postal:m,city:b}),o&&j&&m&&b&&(e.onSubmit({name:n,street:a,postal:r,city:i}),s.current.value="",l.current.value="",u.current.value="",d.current.value="")},children:[Object(o.jsxs)("div",{className:"".concat(W.a.control," ").concat(a.name?"":W.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{ref:s,type:"text",id:"name"}),!a.name&&Object(o.jsx)("p",{children:"Please enter a valid name"})]}),Object(o.jsxs)("div",{className:"".concat(W.a.control," ").concat(a.street?"":W.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{ref:l,type:"text",id:"street"}),!a.street&&Object(o.jsx)("p",{children:"Please enter a valid street"})]}),Object(o.jsxs)("div",{className:"".concat(W.a.control," ").concat(a.postal?"":W.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{ref:u,type:"text",id:"postal"}),!a.postal&&Object(o.jsx)("p",{children:"Please enter a valid postal code"})]}),Object(o.jsxs)("div",{className:"".concat(W.a.control," ").concat(a.city?"":W.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{ref:d,type:"text",id:"city"}),!a.city&&Object(o.jsx)("p",{children:"Please enter a valid city"})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},ee=n(5),te=n.n(ee),ne=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],p=O[1],x=Object(i.useContext)(u),f=x.items.length>0,_=function(e){console.log(e),x.addItemToCart(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},v=function(e){console.log(e),x.removeItemFromCart(e)},N=function(){var e=Object(g.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch("https://react-max-fa58c-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderItems:x.items})});case 4:p(!0),x.clearCart(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p(!0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),k=Object(o.jsx)("ul",{className:te.a["cart-items"],children:x.items.map((function(e){return Object(o.jsx)(Q,{id:e.id,amount:e.amount,name:e.name,price:e.price,onAdd:_.bind(null,e),onRemove:v.bind(null,e.id)},e.id)}))}),w=Object(o.jsxs)(s.a.Fragment,{children:[k,Object(o.jsxs)("div",{className:te.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsxs)("span",{children:["$",x.amount.toFixed(2)]})]}),a&&Object(o.jsx)(G,{onCancel:e.onHideCart,onSubmit:N}),!a&&Object(o.jsxs)("div",{className:te.a.actions,children:[Object(o.jsx)("button",{className:te.a["button--alt"],onClick:e.onHideCart,children:"Close"}),f&&Object(o.jsx)("button",{className:te.a.button,onClick:function(){c(!0)},children:"Order"})]})]}),I=Object(o.jsx)("p",{children:"The order is sending..."}),M=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"The order has been successfully sent!"}),Object(o.jsx)("div",{className:te.a.actions,children:Object(o.jsx)("button",{className:te.a["button--alt"],onClick:e.onHideCart,children:"Close"})})]});return Object(o.jsxs)($,{onBackDropClick:e.onHideCart,children:[!j&&!h&&w,j&&I,!j&&h&&M]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD_ITEM"===t.type){var n=e.items.find((function(e){return e.id===t.item.id}));return{items:n?e.items.map((function(e){return e.id===n.id?Object(y.a)(Object(y.a)({},e),{},{amount:e.amount+t.item.amount}):e})):[].concat(Object(ae.a)(e.items),[t.item]),totalAmount:e.totalAmount+t.item.amount*t.item.price}}if("REMOVE_ITEM"===t.type){var a=e.items.findIndex((function(e){return e.id===t.id})),c=e.items[a],r=[];if(1===c.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var i=Object(y.a)(Object(y.a)({},c),{},{amount:c.amount-1});(r=Object(ae.a)(e.items))[a]=i}return{items:r,totalAmount:e.totalAmount-c.price}}return t.type,ce},ie=function(e){var t=Object(i.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,amount:a.totalAmount,addItemToCart:function(e){c({type:"ADD_ITEM",item:e})},removeItemFromCart:function(e){c({type:"REMOVE_ITEM",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ne,{onHideCart:function(){a(!1)}}),Object(o.jsx)(p,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(J,{})})]})};c.a.render(Object(o.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.f573b852.chunk.js.map