/*! For license information please see main.445fedf7.chunk.js.LICENSE.txt */
(this["webpackJsonpgrace-shopper"]=this["webpackJsonpgrace-shopper"]||[]).push([[0],{119:function(e,t,n){},144:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(12),c=n.n(a),s=n(15),i=n(8),o=n.n(i),l=n(14),u=n(10),d=n(31),h=n(34),j=n(84),p=n(85),b=n(98),f=n(97),x=n(188),m=n(100),g=n(215),O=n(56),y=n(209),v=n(95),w=n.n(v),k=n(33),C=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,a,c,s,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,a=t.token,c=t.body,e.prev=1,s={method:r?r.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},a&&(s.headers.Authorization="Bearer ".concat(a)),e.next=6,fetch("".concat("http://localhost:3001/api/").concat(n),s);case 6:return i=e.sent,e.next=9,i.json();case 9:if(!(l=e.sent).error){e.next=12;break}throw l.error;case 12:return e.abrupt("return",l);case 15:return e.prev=15,e.t0=e.catch(1),console.error("ERROR: ",e.t0),e.abrupt("return",e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),S=n(6),N=n(186),L=Object(S.a)((function(e){return{root:{fontFamily:"tahoma",color:e.palette.getContrastText("#9B7D46"),backgroundColor:"#C0A572","&:hover":{backgroundColor:"#9B7D46"}}}}))(N.a),I=n(193),D=n(212),T=n(194),F=n(213),P=n(214),q=n(191),R=n(195),W=n(196),J=n(197),B=(n(119),n(93)),A=n.n(B),E=n(94),U=n.n(E),M=n(92),z=n.n(M),Q=n(65),Z=n(90),G=n.n(Z),X=n(91),H=n.n(X),K=n(187),_=n(189),V=n(190),Y=n(192),$=n(1),ee=Object(K.a)((function(e){return{root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},paper:Object(h.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(0),marginBottom:e.spacing(0),padding:e.spacing(1),justifyContent:"center"}),buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),te=function(e){var t,n=e.token,r=e.cart,a=e.setCart,c=e.real,s=e.toggleDrawer,i=e.userData,d=Object(u.e)(),h=ee(),j=function(){return r.reduce((function(e,t){var n=t.price,r=t.quantity;return e+parseFloat(n.slice(1))*r}),0)},p=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a([]),localStorage.setItem("cart",JSON.stringify([]));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var s,l,u,d,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c>0)){e.next=13;break}if(s=Object(Q.a)(r),(l=s.indexOf((function(e){return e.name===t.name})))&&(s[l].quantity=c),!i&&!JSON.parse(localStorage.getItem("user"))){e.next=12;break}return u=JSON.parse(localStorage.getItem("user")),e.next=8,C({token:n,url:"order_products/".concat(t.id)});case 8:return d=e.sent,h=d.filter((function(e){return e.userId===u.id&&"created"===e.status}))[0],e.next=12,C({token:n,url:"order_products/".concat(h.id),method:"PATCH",body:{product:{quantity:t.quantity}}});case 12:a(s);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filter((function(e){return e.id!==t.id})),e.next=3,C({token:n,method:"DELETE",url:"order_products/".concat(t.id)});case 3:a(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object($.jsx)($.Fragment,{children:r&&r.length?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(x.a,{style:{width:"400px"},children:Object($.jsx)(_.a,{className:h.root,variant:"outlined",children:Object($.jsxs)(V.a,{children:[Object($.jsx)("div",{className:"products",children:r&&r.length>0?r.map((function(e,t){return Object($.jsxs)("div",{className:"product",children:[Object($.jsx)(O.a,{variant:"h5",component:"h2",children:e.name}),Object($.jsxs)("div",{style:{display:"flex",flexFlow:"row",justifyContent:"space-around",alignItems:"center"},children:[Object($.jsx)(O.a,{className:h.pos,color:"textSecondary",children:e.price}),Object($.jsx)("input",{style:{maxWidth:"40px",marginRight:"10px"},type:"number",size:"1",maxLength:"1",value:e.quantity,onChange:function(t){return b(e,parseInt(t.target.value))}}),Object($.jsx)(N.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return f(e)},children:"Remove"})]}),Object($.jsx)(q.a,{style:{marginTop:"10px"}})]},t)})):Object($.jsx)(Y.a,{})}),Object($.jsx)("br",{}),Object($.jsx)("br",{}),Object($.jsxs)(O.a,{variant:"h5",component:"h2",children:["Total: $",j()]})]})})}),Object($.jsxs)("div",{style:{display:"flex",flexFlow:"row",justifyContent:"space-around",marginTop:"10px"},children:[Object($.jsx)(N.a,{variant:"contained",color:"secondary",size:"small",onClick:p,style:{marginRight:"10px"},children:"Clear Cart"}),c?Object($.jsx)(H.a,{token:(t=100*j(),function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.post("http://localhost:3001/api/stripe/pay",{source:n.id,currency:"USD",amount:t});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),stripeKey:"pk_test_51IgESEAwKF3ow8u8iWs1EZ7w7SOHNw8zGEZZJ7cErTdZJfyvQ5iBSzWlQNC4Ngrkb24u8AbPrNP8ezMm1WpY5hhe0086gjXKtA",name:"Rhino Coffee",amount:100*j(),currency:"USD",billingAddress:!0,shippingAddress:!0,style:{marginLeft:"10px"}}):Object($.jsx)(L,{onClick:function(){d.push("/checkout"),s("right",!1)},children:"Checkout"})]})]}):Object($.jsx)("h3",{children:" Your cart is empty."})})},ne=Object(S.a)((function(e){return{root:{fontFamily:"tahoma",color:e.palette.getContrastText("#9B7D46"),backgroundColor:"#9B7D46",display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}}))(I.a),re=Object(S.a)((function(e){return{root:{padding:"30px",color:"#ffff",border:"2px solid #fff",borderRadius:"0",width:"70%"}}}))(N.a),ae=function(e){var t=e.token,n=e.logOut,a=Object(u.e)(),c=Object(r.useState)({left:!1}),i=Object(s.a)(c,2),o=i[0],l=i[1],j=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&l(Object(d.a)(Object(d.a)({},o),{},Object(h.a)({},e,t)))}};return Object($.jsx)($.Fragment,{children:Object($.jsxs)(D.a,{smUp:!0,children:[Object($.jsx)(T.a,{onClick:j("left",!0),children:Object($.jsx)(z.a,{style:{color:"#ffff"}})}),Object($.jsx)(F.a,{anchor:"left",open:o.left,onClose:j("left",!1),style:{width:"100%",height:"100%"},children:Object($.jsxs)(P.a,{style:{width:window.outerWidth,display:"flex",flexFlow:"column",justifyContent:"space-evenly",alignItems:"center",height:"100%",background:"#9B7D46"},children:[Object($.jsx)(re,{onClick:function(){a.push("/account")},children:"My Account"}),t?Object($.jsx)(re,{color:"inherit",onClick:n,children:"Logout"}):Object($.jsx)(re,{color:"inherit",onClick:function(e){a.push("/login")},children:"Login"}),Object($.jsx)(re,{color:"inherit",onClick:function(e){a.push("/about")},children:"About"}),Object($.jsx)(re,{color:"inherit",onClick:function(e){a.push("/products")},children:"Products"})]})})]})})},ce=function(e){e.name;var t=e.token,n=e.setToken,a=(e.products,e.setUserData),c=e.cart,i=e.setCart,o=Object(u.e)(),l=function(){localStorage.clear(),a({}),n(""),o.push("/")},j=Object(r.useState)({left:!1}),p=Object(s.a)(j,2),b=p[0],f=p[1],x=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&f(Object(d.a)(Object(d.a)({},b),{},Object(h.a)({},e,t)))}};return Object($.jsxs)(R.a,{position:"sticky",children:[Object($.jsxs)(ne,{className:"header",color:"primary",children:[Object($.jsx)(ae,{token:t,logOut:l}),Object($.jsxs)("div",{style:{display:"flex",flexFlow:"row",alignItems:"center"},children:[Object($.jsx)(g.a,{alt:"RC",src:"https://i.postimg.cc/Bv18bq7N/rhino-coffee.png",className:"HeaderLogo"}),Object($.jsx)(W.a,{style:{textDecoration:"none"},onClick:function(e){o.push("/")},children:Object($.jsx)("div",{className:"siteName",children:"Rhino Coffee"})})]}),Object($.jsx)("div",{children:Object($.jsxs)(D.a,{xsDown:!0,children:[Object($.jsx)(N.a,{color:"inherit",onClick:function(e){o.push("/about")},children:"About"}),Object($.jsx)(N.a,{color:"inherit",onClick:function(e){o.push("/products")},children:"Products"})]})}),Object($.jsxs)("div",{children:[Object($.jsxs)(D.a,{xsDown:!0,children:[t?Object($.jsx)(N.a,{color:"inherit",onClick:l,children:"Logout"}):Object($.jsx)(N.a,{color:"inherit",onClick:function(e){o.push("/login")},children:"Login"}),Object($.jsx)(T.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){o.push("/account")},color:"inherit",children:Object($.jsx)(A.a,{})})]}),Object($.jsx)(T.a,{"aria-label":"show shopping cart",color:"inherit",onClick:x("right",!0),children:Object($.jsx)(J.a,{badgeContent:c&&c.length?c.reduce((function(e,t){return e+t.quantity}),0):0,color:"secondary",children:Object($.jsx)(U.a,{})})})]})]}),Object($.jsx)(F.a,{anchor:"right",open:b.right,onClose:x("right",!1),children:Object($.jsxs)("div",{role:"presentation",children:[Object($.jsx)(q.a,{}),Object($.jsx)("div",{children:Object($.jsx)("h1",{className:"shoppingCart",children:"Shopping Cart:"})}),Object($.jsx)(te,{real:!1,token:t,cart:c,setCart:i,toggleDrawer:x})]})})]})},se=(n(144),{padding:20,height:"auto",width:280,margin:"20px auto"}),ie={backgroundColor:"rgb(74, 37, 37)"},oe=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target.value,n=JSON.parse(localStorage.getItem("accountForm"));n[e.target.name]=t,r.setState(Object(h.a)({},e.target.name,t)),localStorage.setItem("accountForm",JSON.stringify(n))},r.handleSubmit=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c,s,i,l,u,h,j,p,b,f,x,m,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=r.state,a=n.action,c=n.password,s=n.username,i=n.confirmPass,l=n.firstName,u=n.lastName,h=n.email,"register"!==a){e.next=42;break}if(!(c&&s&&i&&l&&u&&h)){e.next=38;break}if(!(s.length>7&&c.length>7)){e.next=34;break}if(c!==i){e.next=30;break}return e.prev=6,r.isLoading=!0,e.next=10,C({url:"users/register",method:"POST",body:{username:s,password:c,firstName:l,lastName:u,email:h}});case 10:j=e.sent,b=null===(p=j)||void 0===p?void 0:p.token,delete(f=null===p||void 0===p?void 0:p.user).password,b&&(f.token=b,r.props.setToken(b),localStorage.setItem("user",JSON.stringify(f)),localStorage.setItem("token",f.token),r.props.history.push("/")),e.next=23;break;case 18:return e.prev=18,e.t0=e.catch(6),console.error(e.t0),alert("please try a different username"),e.abrupt("return");case 23:return e.prev=23,r.setState(Object(d.a)({},r.emptyState)),localStorage.setItem("accountForm",JSON.stringify(r.emptyState)),r.isLoading=!1,e.finish(23);case 28:e.next=32;break;case 30:return alert("Make sure both password and confirm password fields match"),e.abrupt("return");case 32:e.next=36;break;case 34:return alert("username & password length must be greater than 7 characters"),e.abrupt("return");case 36:e.next=40;break;case 38:return alert("Not all required fields have been filled in"),e.abrupt("return");case 40:e.next=71;break;case 42:if(!c||!s){e.next=69;break}if(!(c.length>7)){e.next=65;break}return e.prev=44,r.isLoading=!0,e.next=48,C({url:"users/login",method:"POST",body:{username:s,password:c}});case 48:x=e.sent,(g=null===(m=x)||void 0===m?void 0:m.token)&&(r.props.setToken(g),localStorage.setItem("token",g),r.props.history.push("/")),e.next=59;break;case 54:return e.prev=54,e.t1=e.catch(44),console.error(e.t1),alert("incorrect login"),e.abrupt("return");case 59:return e.prev=59,localStorage.setItem("accountForm",JSON.stringify(r.emptyState)),r.isLoading=!1,e.finish(59);case 63:e.next=67;break;case 65:return alert("password length must be greater than 7 characters"),e.abrupt("return");case 67:e.next=71;break;case 69:return alert("Not all required fields have been filled in"),e.abrupt("return");case 71:case"end":return e.stop()}}),e,null,[[6,18,23,28],[44,54,59,63]])})));return function(t){return e.apply(this,arguments)}}(),r.state={username:"",password:"",confirmPass:"",firstName:"",lastName:"",email:"",action:r.props.action},r.emptyState={username:"",password:"",confirmPass:"",firstName:"",lastName:"",email:""},r.isLoading=!1,r.isLogin="login"===r.state.action,r.title=r.isLogin?"login":"register",r.oppositeTitle=r.isLogin?"register":"login",r.oppositeAction=r.isLogin?"Register":"Login",r.oppositeMessage=r.isLogin?"New to us?":"Have an account?",r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("accountForm")?this.setState(JSON.parse(localStorage.getItem("accountForm"))):localStorage.setItem("accountForm",JSON.stringify(this.emptyState))}},{key:"render",value:function(){var e=this,t=this.state,n=t.action,r=t.password,a=t.username,c=t.confirmPass,s=t.firstName,i=t.lastName,o=t.email;return Object($.jsx)(x.a,{children:Object($.jsxs)(m.a,{elevation:10,style:se,children:[Object($.jsx)(x.a,{align:"center",children:Object($.jsx)(g.a,{style:ie,children:Object($.jsx)(w.a,{})})}),Object($.jsxs)("div",{className:"textt",children:[Object($.jsx)(O.a,{component:"h1",variant:"h5",className:"textt",children:this.title}),Object($.jsx)(y.a,{disabled:this.isLoading,varient:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"username",name:"username",value:a,autoComplete:"name",autoFocus:!0,onChange:this.handleChange}),"register"===n&&Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{style:{display:"flex",flexFlow:"row"},children:[Object($.jsx)(y.a,{disabled:this.isLoading,varient:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"FirstName",label:"first name",name:"firstName",value:s,autoComplete:"name",autoFocus:!0,onChange:this.handleChange}),Object($.jsx)(y.a,{style:{marginLeft:"10px"},disabled:this.isLoading,varient:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:"last name",name:"lastName",value:i,autoComplete:"name",autoFocus:!0,onChange:this.handleChange})]}),Object($.jsx)(y.a,{disabled:this.isLoading,varient:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"email",name:"email",value:o,autoComplete:"name",autoFocus:!0,onChange:this.handleChange})]}),Object($.jsx)(y.a,{disabled:this.isLoading,type:"password",varient:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",value:r,onChange:this.handleChange}),"register"===n&&Object($.jsx)(y.a,{disabled:this.isLoading,type:"password",varient:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"confirmPass",label:"Confirm Password",name:"confirmPass",value:c,onChange:this.handleChange}),Object($.jsx)(L,{disabled:this.isLoading,fullWidth:!0,variant:"contained",color:"secondary",style:{marginTop:"10px"},onClick:this.handleSubmit,children:"Submit"}),Object($.jsxs)("span",{style:{display:"flex",flexFlow:"column",justifyContent:"center"},children:[Object($.jsxs)(k.b,{disabled:this.isLoading,to:"#",style:{marginTop:"15px"},onClick:function(){e.props.history.push("/".concat(e.oppositeAction))},children:[this.oppositeMessage," ",this.oppositeAction," here!"]}),Object($.jsx)(k.b,{disabled:this.isLoading,style:{display:"flex",marginTop:"10px",justifyContent:"center"},to:"#",onClick:function(){e.props.history.push("/")},children:"Continue as guest"})]})]})]})})}}]),n}(r.Component),le=Object(u.g)(oe),ue=n(198),de=n(199),he=(n(146),Object(K.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,paddingLeft:"60px",paddingRight:"60px"},gridList:{width:4e3,height:800,transform:"translateZ(0)"}}}))),je=[{imgUrl:"https://i.postimg.cc/Zq6BW9Mr/coffee-heart.jpg",title:"coffee-heart",cols:6},{imgUrl:"https://i.postimg.cc/XJtLcBgQ/8-cups.jpg",title:"8-cups",cols:6},{imgUrl:"https://i.postimg.cc/fLnV20zy/tea-display.jpg",title:"tea-display",cols:6},{imgUrl:"https://i.postimg.cc/4d5gMZYC/tea-image-2.jpg",title:"tea-image-2",cols:2},{imgUrl:"https://i.postimg.cc/7LPPtM7K/4-cups.jpg",title:"4-cups",cols:6},{imgUrl:"https://i.postimg.cc/CMQS65qG/coffee-cup-with-beans.jpg",title:"coffee-cup-with-beans",cols:6}],pe=function(){var e=he();return Object($.jsxs)("div",{className:e.root,children:[Object($.jsx)("span",{children:Object($.jsx)("h2",{className:"homeMessage",children:"Welcome to Rhino Coffee... Where Quality meets Taste!!!"})}),Object($.jsx)(ue.a,{cellHeight:400,spacing:1,className:e.gridList,children:je.map((function(e){return Object($.jsx)(de.a,{cols:e.featured?2:1,rows:e.featured?2:1,children:Object($.jsx)("img",{src:e.imgUrl,alt:e.title})},e.imgUrl)}))}),Object($.jsx)("span",{children:Object($.jsxs)("h2",{className:"homeMessage",children:["Send us your Instagram photos of you all enjoying Rhino Coffee products!","  ",Object($.jsx)("a",{href:"https://www.instagram.com/",children:Object($.jsx)("img",{alt:"Instagram.com",src:"https://i.postimg.cc/BZcwXVqX/insta-icon.png",width:"30",height:"30"})})]})})]})},be=n(210),fe=function(e){var t=e.product,n=Object(u.e)();return Object($.jsxs)(x.a,{container:!0,spacing:1,style:{maxWidth:1100,margin:" 20px auto "},children:[Object($.jsx)(x.a,{item:!0,sm:6,children:Object($.jsxs)(m.a,{children:[Object($.jsx)(N.a,{onClick:function(){n.push("/products")},children:"\u2190 Back to products"}),Object($.jsx)("img",{src:t.imageURL,width:"100%",alt:t.name})]})}),Object($.jsx)(x.a,{item:!0,sm:6,children:Object($.jsxs)(x.a,{container:!0,direction:"column",style:{height:"100%"},children:[Object($.jsx)(O.a,{variant:"h2",children:t.name}),Object($.jsx)(O.a,{variant:"subtitle2",children:t.category}),Object($.jsx)(q.a,{}),Object($.jsx)(be.a,{mt:2,style:{justifyContent:"space-between"},children:Object($.jsx)("div",{children:Object($.jsxs)(O.a,{variant:"subtitle1",children:[" ",t.description]})})}),Object($.jsxs)(be.a,{mt:"auto",children:[Object($.jsx)(O.a,{variant:"h5",children:t.price}),Object($.jsxs)(N.a,{variant:"contained",color:"secondary",children:[" ","Add to cart"]})]})]})})]})},xe=function(e){var t=e.products,n=Object(u.f)().productId;n=parseInt(n,10);var r=t.find((function(e){return n===e.id}));return Object($.jsx)($.Fragment,{children:r?Object($.jsx)(fe,{product:r}):Object($.jsxs)("div",{children:[Object($.jsx)(Y.a,{}),Object($.jsx)("h1",{children:"Loading"})]})})},me=n(200),ge=n(201),Oe=n(202),ye=n(96),ve=n.n(ye),we=Object(K.a)((function(e){return{root:{flexGrow:1,minWidth:"350px",margin:"20px 60PX 20PX 60PX"},media:{height:0,paddingTop:"56.25%"},card:{minWidth:"280px"},bottomCard:{justifyContent:"space-between"}}})),ke=function(e){var t=e.product,n=e.cart,r=e.setCart,a=we(),c=Object(u.e)(),s=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(Q.a)(n),(c=a.find((function(e){return t.id===e.id})))?c.quantity++:(c=Object(d.a)(Object(d.a)({},t),{},{quantity:1}),a.push(c)),r(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object($.jsx)(x.a,{item:!0,lg:3,children:Object($.jsxs)(_.a,{className:a.card,children:[Object($.jsx)(me.a,{title:t.name,subheader:t.price}),Object($.jsx)(ge.a,{className:a.media,image:t.imageURL,style:{backgroundSize:"contain"},title:"Beverage"}),Object($.jsx)(V.a,{children:Object($.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.category})}),Object($.jsxs)(Oe.a,{className:a.bottomCard,disableSpacing:!0,children:[Object($.jsx)("div",{children:Object($.jsx)(T.a,{"aria-label":"addShopping cart icon",onClick:function(){return s(t)},children:Object($.jsx)(ve.a,{})})}),Object($.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(e){c.push("/products/".concat(t.id))},children:"More info"})]})]})})},Ce=function(e){var t=e.products,n=(e.userData,e.cart),r=e.setCart,a=we();return Object($.jsx)("div",{className:a.root,children:Object($.jsx)(x.a,{container:!0,spacing:5,direction:"row",justify:"center",alignItems:"center",children:t&&t.length?t.map((function(e,t){return Object($.jsx)(ke,{product:e,cart:n,setCart:r},e.id)})):Object($.jsxs)(x.a,{item:!0,children:[Object($.jsx)(Y.a,{})," "]})})})},Se=Object(K.a)({root:{maxWidth:"auto"},media:{height:500}}),Ne=function(){var e=Se();return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(_.a,{className:e.root,children:[Object($.jsx)(ge.a,{className:e.media,image:"https://i.postimg.cc/4xz9x0kD/gaslamp-quarter-archway.jpg",title:"Gasslamp Quarter Downtown San Diego"}),Object($.jsxs)(V.a,{children:[Object($.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object($.jsx)(O.a,{gutterBottom:!0,variant:"h4",component:"h1",children:"Rhino Coffee"})}),Object($.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object($.jsx)(O.a,{variant:"body1",color:"textPrimary",component:"p",justifyContent:"center",children:"Rhino Coffee began as an idea from four Software Engineers (Jasper, Nick, Eddie and Juno) and their love of coffee and tea. Based out of Downtown San Diego, California, right in the heart of the Gaslamp Quarter which is also very rich with history, we came up with a project called Genesis Squad. Since we were at the beginning of our journey with this idea, we also wanted to name our brand based on the origin of coffee. Rhinos are beautiful animals and we thought that though not indigenous to Ethiopia, the horn of Africa had great symbolism and thus, Rhino Coffee was born."})})]})]}),Object($.jsxs)(_.a,{className:e.root,children:[Object($.jsx)(ge.a,{className:e.media,image:"https://i.postimg.cc/K8vKCM01/ethopia-coffee.jpg",title:"Coffee Roots"}),Object($.jsxs)(V.a,{children:[Object($.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object($.jsx)(O.a,{gutterBottom:!0,variant:"h4",component:"h1",children:"Coffee Roots"})}),Object($.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object($.jsx)(O.a,{variant:"body1",color:"textPrimary",component:"p",justifyContent:"center",children:"Oh coffee, and what a rich history it has had since its birthplace in the hills of Ethiopia. To this day, its popularity is conitnually growing all over the world. Through the many miles it has traveled, it's been contested, shared, stolen, and obsessed over. Its roots in Africa help tell that story. We at Rhino Coffee appreciate these roots and how they have played a large part of that journey of coffee, its popularity, and how it continues to enhance our lives everyday. So from our table to yours, we hope our products will be something for all to share and enjoy!"})})]})]})]})},Le=n(203),Ie=n(204),De=n(205),Te=n(206),Fe=n(207),Pe=n(208),qe=Object(K.a)({table:{minWidth:650}});var Re=function(e){var t=e.userOrders,n=qe(),r=Object(u.e)(),a=t.map((function(e){return t=e.id,n=e.status,r=e.products.length,a=e.datePlaced,{id:t,status:n,quantity:r,datePlaced:a};var t,n,r,a}));return Object($.jsx)(Le.a,{component:m.a,children:Object($.jsxs)(Ie.a,{className:n.table,"aria-label":"simple table",children:[Object($.jsx)(De.a,{children:Object($.jsxs)(Te.a,{children:[Object($.jsx)(Fe.a,{children:"Order Number (id)"}),Object($.jsx)(Fe.a,{align:"right",children:"Order Status (status)"}),Object($.jsx)(Fe.a,{align:"right",children:"Items in cart (Order length)"}),Object($.jsx)(Fe.a,{align:"right",children:"Date placed"}),Object($.jsx)(Fe.a,{align:"right",children:"Action\xa0(what do you want to do with it)"})]})}),Object($.jsx)(Pe.a,{children:a.map((function(e){return Object($.jsxs)(Te.a,{children:[Object($.jsx)(Fe.a,{component:"th",scope:"row",children:e.id}),Object($.jsx)(Fe.a,{align:"right",children:e.status}),Object($.jsx)(Fe.a,{align:"right",children:e.quantity}),Object($.jsx)(Fe.a,{align:"right",children:e.datePlaced}),Object($.jsx)(Fe.a,{align:"right",children:Object($.jsx)(N.a,{onClick:function(){r.push("/orders/".concat(e.id))},variant:"contained",color:"secondary",children:"View Order"})})]},e.id)}))})]})})},We=function(e){var t=e.userOrders,n=e.userData;return e.token?Object($.jsxs)($.Fragment,{children:[Object($.jsx)("div",{className:"dashboard",children:Object($.jsxs)("h1",{children:["Hello, ",n?n.firstName:Object($.jsx)(Y.a,{}),"!"]})}),t.datePlaced,Object($.jsx)(Re,{userOrders:t})]}):Object($.jsx)("div",{className:"sign-in-message",children:Object($.jsxs)("h1",{children:["Please ",Object($.jsx)(k.b,{to:"/login",children:"log in"})," to view your dashboard"]})})},Je=Object(K.a)({table:{minWidth:650}}),Be=3,Ae=1,Ee="$3",Ue=3,Me=function(){var e=Object(u.e)(),t=Je();return Object($.jsxs)(Le.a,{component:m.a,children:[Object($.jsx)(N.a,{onClick:function(){e.push("/account")},children:"\u2190 Back to orders"}),Object($.jsxs)(Ie.a,{className:t.table,"aria-label":"simple table",children:[Object($.jsx)(De.a,{children:Object($.jsxs)(Te.a,{children:[Object($.jsx)(Fe.a,{children:"Order Id"}),Object($.jsx)(Fe.a,{children:"Product Id "}),Object($.jsx)(Fe.a,{children:"Product"}),Object($.jsx)(Fe.a,{align:"right",children:"Quantity"}),Object($.jsx)(Fe.a,{align:"right",children:"Price"})]})}),Object($.jsx)(Pe.a,{children:Object($.jsxs)(Te.a,{children:[Object($.jsx)(Fe.a,{component:"th",scope:"row",children:Ae}),Object($.jsx)(Fe.a,{component:"th",scope:"row",children:Be}),Object($.jsx)(Fe.a,{component:"th",scope:"row",children:"PRODUCT"}),Object($.jsx)(Fe.a,{align:"right",children:Ue}),Object($.jsx)(Fe.a,{align:"right",children:Ee})]})})]}),Object($.jsx)(N.a,{onClick:function(){},variant:"contained",color:"secondary",children:"Edit Order"})," ",Object($.jsx)(N.a,{onClick:function(){},variant:"contained",color:"secondary",children:"Cancel Order"})," "]})},ze=(n(147),function(e){var t=e.token,n=e.cart,r=e.setCart,a=e.userData;return Object($.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexFlow:"column",alignItems:"center"},children:[Object($.jsx)("div",{children:Object($.jsx)("h1",{className:"shoppingCart",children:"Checkout:"})}),Object($.jsx)(te,{token:t,cart:n,setCart:r,real:!0,userData:a})]})}),Qe=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({url:"orders/cart",token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({url:"products"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({url:"users/me",token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({url:"users/".concat(t,"/orders"),token:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var He=function(){var e=Object(r.useState)(localStorage.getItem("token")),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(s.a)(c,2),d=i[0],h=i[1],j=Object(r.useState)(JSON.parse(localStorage.getItem("user"))||{}),p=Object(s.a)(j,2),b=p[0],f=p[1],x=Object(r.useState)(JSON.parse(localStorage.getItem("cart"))||[]),m=Object(s.a)(x,2),g=m[0],O=m[1],y=Object(r.useState)([]),v=Object(s.a)(y,2),w=v[0],k=v[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ze();case 3:if((t=e.sent)&&h(t),!n){e.next=22;break}return e.next=8,Ge(n);case 8:return r=e.sent,localStorage.setItem("user",JSON.stringify(r)),f(r),e.next=13,Qe(n);case 13:return a=e.sent,c=a.products,localStorage.setItem("cart",JSON.stringify(c)),O(c),e.t0=k,e.next=20,Xe(r.id,n);case 20:e.t1=e.sent,(0,e.t0)(e.t1);case 22:e.next=27;break;case 24:e.prev=24,e.t2=e.catch(0),console.error(e.t2);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ce,{products:d,userData:b,setUserData:f,cart:g,setCart:O,token:n,setToken:a}),Object($.jsx)(u.a,{exact:!0,path:"/",children:Object($.jsx)(pe,{products:d,token:n})}),Object($.jsx)(u.a,{path:"/login",children:Object($.jsx)(le,{action:"login",setToken:a})}),Object($.jsx)(u.a,{path:"/register",children:Object($.jsx)(le,{action:"register",setToken:a})}),Object($.jsx)(u.a,{exact:!0,path:"/products/:productId",children:Object($.jsx)(xe,{products:d})}),Object($.jsx)(u.a,{exact:!0,path:"/products",children:Object($.jsx)(Ce,{products:d,cart:g,setCart:O})}),Object($.jsx)(u.a,{path:"/about",children:Object($.jsx)(Ne,{})}),Object($.jsx)(u.a,{exact:!0,path:"/account",children:Object($.jsx)(We,{userData:b,token:n,userOrders:w})}),Object($.jsx)(u.a,{exact:!0,path:"/orders/:orderId",children:Object($.jsx)(Me,{})}),Object($.jsx)(u.a,{exact:!0,path:"/checkout",children:Object($.jsx)(ze,{token:n,cart:g,setCart:O,userData:b})})]})};c.a.render(Object($.jsx)(k.a,{children:Object($.jsx)(He,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.445fedf7.chunk.js.map