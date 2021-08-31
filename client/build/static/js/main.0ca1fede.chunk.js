(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(23),i=r.n(s),a=(r(52),r(53),r(54),r(3)),c=r(7),o=r(6),l=r.n(o),u=r(10),d=r(11),j=r.n(d),p={registerUser:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("https://mytinerary-budtke.herokuapp.com/api/user/register",e);case 3:if(!(n=t.sent).data.success){t.next=9;break}return r({type:"USER_LOGGED",payload:n.data.response}),t.abrupt("return",{success:!0,response:n.data.response});case 9:throw new Error(n.data.response);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},loginUser:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("https://mytinerary-budtke.herokuapp.com/api/user/login",e);case 3:if(!(n=t.sent).data.success){t.next=9;break}return r({type:"USER_LOGGED",payload:n.data.response}),t.abrupt("return",{success:!0,response:n.data.response});case 9:throw new Error(n.data.response);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(e){e({type:"LOGOUT"})}},logInLS:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/user/valid",{headers:{Authorization:"Bearer "+e.token}});case 3:if(!t.sent.data.success){t.next=9;break}return r({type:"USER_LOGGED",payload:e}),t.abrupt("return",{success:!0});case 9:throw new Error("Invalid user");case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),r({type:"LOGOUT"}),t.abrupt("return",{success:!1,error:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},likeAnItinerary:function(e,t){return function(){var r=Object(u.a)(l.a.mark((function r(n){var s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.put("https://mytinerary-budtke.herokuapp.com/api/user/like/".concat(e),{},{headers:{Authorization:"Bearer "+t}});case 3:if(!(s=r.sent).data.success){r.next=9;break}return n({type:"LIKED_ITINERARY",payload:s.data.response}),r.abrupt("return",{success:!0});case 9:throw new Error(s.data.response);case 10:r.next=15;break;case 12:return r.prev=12,r.t0=r.catch(0),r.abrupt("return",{success:!1,response:r.t0});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},populateItineraries:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/user/favourites",{headers:{Authorization:"Bearer "+e}});case 3:if(!(n=t.sent).data.success){t.next=9;break}return r({type:"FAVOURITE_ITINERARIES",payload:n.data.response}),t.abrupt("return",{success:!0,response:n.data.response});case 9:throw new Error(n.data.response);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",{success:!1,response:t.t0});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},isValidOwner:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/user/validowner",{headers:{Authorization:"Bearer "+e}});case 3:if(!(n=t.sent).data.success){t.next=8;break}return t.abrupt("return",{success:!0,response:n.data.response});case 8:throw new Error("not a valid owner");case 9:t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",{success:!1,response:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}},b=r(0),h={logOut:p.logOut},m=Object(c.b)((function(e){return{userPhoto:e.usersRed.photoURL,token:e.usersRed.token,firstName:e.usersRed.firstName}}),h)((function(e){var t=e.token;return Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{className:"titleNavBar",children:[Object(b.jsx)(a.c,{exact:!0,to:"/",children:Object(b.jsx)("div",{className:"photo logo",style:{backgroundImage:"url('/assets/fotologo.png')"}})}),Object(b.jsx)(a.c,{exact:!0,to:"/",children:Object(b.jsx)("h1",{children:"myTinerary"})})]}),t&&Object(b.jsxs)("p",{className:"personalWelcome",children:["Welcome ","".concat(e.firstName),"!"]}),Object(b.jsxs)("nav",{children:[Object(b.jsx)(a.c,{exact:!0,to:"/",children:Object(b.jsx)("p",{children:"Home"})}),Object(b.jsx)(a.c,{to:"/cities",children:Object(b.jsx)("p",{children:"Cities"})}),!t&&Object(b.jsx)(a.c,{to:"/signin",children:Object(b.jsx)("p",{children:"Sign In"})}),!t&&Object(b.jsx)(a.c,{to:"/signup",children:Object(b.jsx)("p",{children:"Sign Up"})}),t&&Object(b.jsx)("p",{className:"linkBehave",onClick:function(){e.logOut()},children:"Sign Out"}),Object(b.jsx)(a.b,{to:"/favourites",children:Object(b.jsx)("div",{className:"photo user",style:{backgroundImage:"url(".concat(""!==e.userPhoto?e.userPhoto:"/assets/fotologoff.png",")")}})})]})]})})),O=function(){var e=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})};return Object(b.jsxs)("footer",{children:[Object(b.jsx)("h4",{children:"FWB - 2021"}),Object(b.jsxs)("div",{className:"socialMedia",children:[Object(b.jsx)("p",{children:"Social media:"}),Object(b.jsx)("a",{href:"https://facebook.com/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("div",{style:{backgroundImage:"url('/assets/logoface.png')"}})}),Object(b.jsx)("a",{href:"https://instagram.com/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("div",{style:{backgroundImage:"url('/assets/logoinsta.png')"}})}),Object(b.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("div",{style:{backgroundImage:"url('/assets/logotwitter.png')"}})})]}),Object(b.jsxs)("div",{className:"contactInfo",children:[Object(b.jsxs)("p",{children:["Address: ",Object(b.jsx)("a",{href:"https://www.google.com/maps/place/Sta+Fe+4333,+S2002KVG+Rosario,+Santa+Fe/@-32.9372963,-60.6830364,18z/data=!4m5!3m4!1s0x95b7acac682a3773:0x43efc8dd15945813!8m2!3d-32.9373436!4d-60.6819635",target:"_blank",rel:"noreferrer",children:"Santa Fe 4333, Rosario"})]}),Object(b.jsx)("p",{children:"Telephone: +543412222222"})]}),Object(b.jsxs)("nav",{children:[Object(b.jsx)(a.c,{exact:!0,to:"/",children:Object(b.jsx)("p",{onClick:e,children:"Home"})}),Object(b.jsx)(a.c,{to:"/cities",children:Object(b.jsx)("p",{onClick:e,children:"Cities"})})]})]})},f=function(){return Object(b.jsxs)("div",{className:"hero",style:{backgroundImage:"url('./assets/fotohero.jpg')"},children:[Object(b.jsx)("h2",{children:"Find your perfect trip, designed by insiders who know and love their cities!"}),Object(b.jsx)(a.b,{to:"/cities",children:Object(b.jsx)("button",{id:"callToActionHero",children:"CLICK HERE"})})]})},g=r(2),y=r(42),x=r(43),v=r(47),k=r(46),N=r(44),C=r.n(N),w=function(e){Object(v.a)(r,e);var t=Object(k.a)(r);function r(){return Object(y.a)(this,r),t.apply(this,arguments)}return Object(x.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"carouselSlickContainer",children:[Object(b.jsx)("h2",{children:"Popular myTineraries"}),Object(b.jsx)(C.a,Object(g.a)(Object(g.a)({},{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,rows:2,slidesPerRow:2,autoplay:!0,autoplaySpeed:2e3,pauseOnHover:!0,responsive:[{breakpoint:600,settings:{rows:1,slidesPerRow:1,dots:!1,arrows:!1}},{breakpoint:480,settings:{rows:1,slidesPerRow:1,dots:!1,arrows:!1}}]}),{},{children:[{id:0,city:"Granadero Baigorria",country:"Argentina",image:"baigorria.jpg",description:"Al norte de Rosario, donde viven los viejos"},{id:1,city:"Rosario",country:"Argentina",image:"rosario.jpg",description:"La capital no oficial de Argentina, ciudad Juarez Argentina"},{id:2,city:"Buenos Aires",country:"Argentina",image:"bsas.jpg",description:"La capital de Argentina, donde Larreta pone y saca pisos"},{id:3,city:"Ushuaia",country:"Argentina",image:"ushuaia.jpg",description:"El pais de las maravillas naturales y electrodomesticos"},{id:4,city:"Calafate",country:"Argentina",image:"calafate.jpg",description:"Donde vive la Presidente de la Naci\xf3n"},{id:5,city:"Bariloche",country:"Argentina",image:"bariloche.jpg",description:"Donde los pibes se van de joda, igual lindo paisaje"},{id:6,city:"Pergamino",country:"Argentina",image:"pergamino.jpg",description:"Entre Rosario y Buenos Aires"},{id:7,city:"Mar del Plata",country:"Argentina",image:"mardelplata.jpg",description:"Donde vas a tomar sol"},{id:8,city:"Mar de Aj\xf3",country:"Argentina",image:"mardeajo.jpg",description:"El mar huele bastante bien, pese a su nombre"},{id:9,city:"Puerto Madryn",country:"Argentina",image:"madryn.jpg",description:"Donde se puede avistar ballenas"},{id:10,city:"Villa Gesell",country:"Argentina",image:"gesell.jpg",description:"Donde van los pibes en verano"},{id:11,city:"Santa Fe",country:"Argentina",image:"santafe.jpg",description:"La capital oficial de la provincia de Santa Fe"}].map((function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"carouselSlideInfo",style:{backgroundImage:"url('assets/".concat(e.image,"')")},children:[Object(b.jsx)("p",{children:e.city}),Object(b.jsx)("p",{children:e.country})]})},e.id)}))}))]})}}]),r}(n.Component),I=function(){return Object(b.jsxs)("main",{children:[Object(b.jsx)(f,{}),Object(b.jsx)(w,{})]})},E=function(){return Object(n.useEffect)((function(){return window.scrollTo(0,0),document.title="myTinerary - Home",function(){return document.title="myTinerary"}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(I,{}),Object(b.jsx)(O,{})]})},S={getAllCities:function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/cities");case 3:if(!(r=e.sent).data.success){e.next=13;break}if(!(r.data.response.length>0)){e.next=10;break}return t({type:"GET_ALL_CITIES",payload:r.data.response}),e.abrupt("return",{success:!0});case 10:throw new Error("No cities found in db");case 11:e.next=14;break;case 13:throw new Error(r.data.response);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",{success:!1,error:e.t0});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}()},filterCities:function(e){return function(t){t({type:"GET_FILTERED_CITIES",payload:e})}},getACity:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/city/".concat(e));case 3:if(!(n=t.sent).data.success){t.next=13;break}if(!n.data.response){t.next=10;break}return r({type:"GET_A_CITY",payload:n.data.response}),t.abrupt("return",{success:!0});case 10:throw new Error("City not found");case 11:t.next=14;break;case 13:throw new Error(n.data.response);case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}()},resetCity:function(){return function(e){e({type:"RESET"})}},resetFilter:function(){return function(e){e({type:"RESET_FILTER"})}}},R={myFunction:S.filterCities},T=Object(c.b)(null,R)((function(e){var t=e.myFunction;return Object(b.jsx)("div",{className:"filterCitiesImage",style:{backgroundImage:"url('/assets/fotohero.jpg')"},children:Object(b.jsxs)("div",{className:"filterCitiesContainer",children:[Object(b.jsx)("h2",{children:"Find the perfect travel destination for your trip"}),Object(b.jsx)("p",{children:"Are you looking for romantic beaches in Santa Fe? The perfect vacation with your children in Baigorria?"}),Object(b.jsxs)("p",{children:["Or do you prefer sightseeing in Capit\xe1n Berm\xfadez? Explore our cities ",Object(b.jsx)("span",{className:"specialText",children:"NOW!"})]}),Object(b.jsx)("input",{type:"search",id:"search-cities",placeholder:"Search by city",onChange:function(e){return t(e.target.value)}})]})})})),A=r(5),L=function(e){var t=e.cityName,r=(e.country,e.image),s=e.description,i=Object(n.useState)(!1),a=Object(A.a)(i,2),c=a[0],o=a[1],l=function(){o(!c)};return Object(b.jsxs)("div",{className:"cardCity",style:{backgroundImage:"url('assets/".concat(r,"')")},onMouseEnter:l,onMouseLeave:l,children:[Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"title",children:t})}),Object(b.jsx)("div",{className:"cityDescription",style:c?{display:"block"}:{display:"none"},children:Object(b.jsx)("p",{children:s})})]})},U=Object(c.b)((function(e){return{filteredCities:e.citiesRed.filteredCities,fetching:e.citiesRed.fetching}}))((function(e){var t=e.allCities,r=e.filteredCities;if(e.fetching)return Object(b.jsx)("main",{className:"mainCities",children:Object(b.jsx)("div",{className:"noCitiesContainer",children:Object(b.jsx)("p",{children:"Loading..."})})});var n=[];return n=r.length>0?r:t,Object(b.jsxs)("main",{className:"mainCities",children:[Object(b.jsx)(T,{}),Object(b.jsx)("div",{className:"cardCitiesContainer",style:r.length>0?{display:"flex"}:{display:"none"},children:n.map((function(e){return Object(b.jsx)(a.b,{to:"/itineraries/".concat(e._id),children:Object(b.jsx)(L,{cityName:e.city,country:e.country,image:e.image,description:e.description},e._id)},e._id)}))}),Object(b.jsx)("div",{className:"noCitiesContainer",style:0===r.length?{display:"block"}:{display:"none"},children:Object(b.jsx)("p",{children:"UNABLE TO FIND THAT ONE, TRY AGAIN!"})})]})})),F={getCities:S.getAllCities,resetFilter:S.resetFilter},_=Object(c.b)((function(e){return{allCities:e.citiesRed.cities}}),F)((function(e){var t=e.allCities;return Object(n.useEffect)((function(){return 0===t.length&&e.getCities().then((function(t){t.success||(console.error(t.error),e.history.push("/error"))})),window.scrollTo(0,0),document.title="myTinerary - Cities",function(){document.title="myTinerary",e.resetFilter()}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(U,Object(g.a)({},e)),Object(b.jsx)(O,{})]})})),P=r(8),G={getAllItinerariesFromCity:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/itinerary/".concat(e));case 3:return n=t.sent,r({type:"GET_AN_ITINERARY",payload:n.data.response}),t.abrupt("return",{success:!0});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},resetItineraries:function(){return function(e){e({type:"RESET"})}},sendComment:function(e,t,r,n,s){return Object(u.a)(l.a.mark((function i(){var a;return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a={newComment:e,oldComment:t,id:n,action:s},i.prev=1,i.next=4,j.a.put("https://mytinerary-budtke.herokuapp.com/api/itinerary/comments",a,{headers:{authorization:"Bearer "+r}});case 4:if(!i.sent.data.success){i.next=9;break}return i.abrupt("return",{success:!0});case 9:throw new Error("comm problem with db");case 10:i.next=15;break;case 12:return i.prev=12,i.t0=i.catch(1),i.abrupt("return",{success:!1,response:i.t0});case 15:case"end":return i.stop()}}),i,null,[[1,12]])})))},getActivities:function(e){return Object(u.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://mytinerary-budtke.herokuapp.com/api/activity/".concat(e));case 3:if(!(r=t.sent).data.success){t.next=8;break}return t.abrupt("return",{success:!0,response:r.data.response});case 8:throw new Error("comm problem with db");case 9:t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",{success:!1,response:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))}},M=function(e){var t=Object(n.useState)(""),r=Object(A.a)(t,2),s=r[0],i=r[1],a=Object(n.useState)(!1),c=Object(A.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)({status:!1,what:""}),d=Object(A.a)(u,2),j=d[0],p=d[1],h=e.comment,m=h.author._id===e.idUser;console.log("me mont\xe9");var O=function(e){p({status:!j.status,what:e.target.id})},f=function(t){"positive"===t.target.id&&("edit"===j.what?e.editComment(""===s?h.comment:s,h._id):e.removeComment(h._id)),p(!1)};return h.author?Object(b.jsxs)("div",{className:"commentContainer",id:h._id,children:[Object(b.jsx)("div",{className:"photoUserComment",style:{backgroundImage:"url(".concat(h.author.photoURL,")")}}),Object(b.jsx)("p",{className:"firstName",children:h.author.name.firstName}),Object(b.jsxs)("p",{children:[h.author.name.lastName,":"]}),Object(b.jsxs)("div",{className:"userComment",children:[Object(b.jsx)("input",{type:"text",className:m?"commentOwner":"",disabled:!m,value:o?s:h.comment,onChange:function(e){i(e.target.value),l(!0)}}),Object(b.jsx)("p",{className:"buttonComment",style:m?{display:"block"}:{display:"none"},id:"edit",onClick:O,children:"\u2712\ufe0f"}),Object(b.jsx)("p",{className:"buttonComment",style:m?{display:"block"}:{display:"none"},id:"remove",onClick:O,children:"\ud83d\uddd1\ufe0f"}),Object(b.jsx)("p",{className:"buttonComment",style:j.status?{display:"block"}:{display:"none"},id:"positive",onClick:f,children:"\u2714\ufe0f"}),Object(b.jsx)("p",{className:"buttonComment",style:j.status?{display:"block"}:{display:"none"},id:"negative",onClick:f,children:"\u274c"})]})]},h._id):Object(b.jsx)("p",{children:"placeholder"})},D={likeAnItinerary:p.likeAnItinerary,sendComment:G.sendComment,isValidOwner:p.isValidOwner,getActivities:G.getActivities},B=Object(c.b)((function(e){return{token:e.usersRed.token,likedItineraries:e.usersRed.likedItineraries}}),D)((function(e){var t=e.itinerary,r=t.author,s=t.description,i=t.hashtags,c=t.price,o=t.duration,l=t.likes,u=t.title,d=t._id,j=t.comments,p=Object(n.useState)(!1),h=Object(A.a)(p,2),m=h[0],O=h[1],f=Object(n.useState)(!1),g=Object(A.a)(f,2),y=g[0],x=g[1],v=Object(n.useState)(!1),k=Object(A.a)(v,2),N=k[0],C=k[1],w=Object(n.useState)(!1),I=Object(A.a)(w,2),E=I[0],S=I[1],R=Object(n.useState)(""),T=Object(A.a)(R,2),L=T[0],U=T[1],F=Object(n.useState)([]),_=Object(A.a)(F,2),P=_[0],G=_[1];Object(n.useEffect)((function(){e.token?e.isValidOwner(e.token).then((function(e){return e.success&&U(e.response)})):U("")}),[e.token]);var D=Object(n.useState)(!1),B=Object(A.a)(D,2),V=B[0],H=B[1],Y=Object(n.useState)(""),q=Object(A.a)(Y,2),z=q[0],W=q[1],J=function(){e.token?""!==z?e.sendComment(z,null,e.token,d,"post").then((function(t){t.success?(e.myFunction(),W(""),x(!1)):(console.error("was not able to send comment"),e.history.push("/error"))})):x(!0):H(!0)},K=function(t){t.success?e.myFunction():(console.error("was not able to edit comment"),e.history.push("/error"))},Q=function(t,r){e.token&&e.sendComment(t,r,e.token,d,"update").then((function(e){return K(e)}))},X=function(t){e.token&&e.sendComment("",t,e.token,d,"delete").then((function(e){return K(e)}))};return Object(b.jsxs)("div",{className:"itineraryCard",children:[Object(b.jsxs)("div",{className:"itineraryVisibleInfo",children:[Object(b.jsxs)("div",{className:"itineraryHeader",children:[Object(b.jsxs)("div",{className:"itineraryAuthorContainer",children:[Object(b.jsx)("div",{className:"itineraryAuthorPhoto",style:{backgroundImage:"url('/assets/".concat(r.image,"')")}}),Object(b.jsxs)("p",{children:["Author: ",r.name]})]}),Object(b.jsx)("h2",{children:u}),Object(b.jsxs)("p",{className:"likesHeader",children:["Likes: ",Object(b.jsx)("span",{onClick:function(t){N||(e.token?(C(!0),S(!1),e.likeAnItinerary(d,e.token).then((function(t){t.success?(C(!1),e.myFunction()):console.error(t.response)}))):S(!0))},className:"heartEmoji",children:e.likedItineraries.find((function(e){return e._id===d}))||-1!==e.likedItineraries.indexOf(d)?"\u2764\ufe0f":"\ud83e\udd0d"}),l]})]}),Object(b.jsx)("div",{className:"needToBeLogged",style:E?{display:"block"}:{display:"none"},children:Object(b.jsx)(a.b,{to:"/signin",children:Object(b.jsx)("p",{children:"You must log in to like an itinerary! Click here"})})}),Object(b.jsx)("div",{className:"itineraryDescriptionContainer",children:Object(b.jsx)("h4",{children:s})}),Object(b.jsxs)("div",{className:"itineraryMainInfo",children:[Object(b.jsxs)("div",{className:"itineraryPriceDurationContainer",children:[Object(b.jsxs)("div",{className:"itineraryPrice",children:[Object(b.jsx)("p",{children:"Price:"}),function(){for(var e=[],t=0;t<c;t++)e.push("\ud83d\udcb5");return e.map((function(e,t){return Object(b.jsx)("p",{children:e},t)}))}()]}),Object(b.jsxs)("p",{children:["Duration: ",o," ",o>1?"hrs":"hr","\ud83d\udd52"]})]}),Object(b.jsx)("div",{className:"hashtagsContainer",children:i.map((function(e,t){return Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/hashtag/".concat(e),children:Object(b.jsxs)("p",{children:["#",e]})},t)}))})]}),Object(b.jsx)("button",{onClick:function(t){t.target.innerText="View more"===t.target.innerText?"View less":"View more",!P.length&&e.getActivities(d).then((function(e){e.success&&G(e.response)})),O(!m)},children:"View more"})]}),Object(b.jsxs)("div",{className:"itineraryActivitiesContainer",style:m?{display:"block"}:{display:"none"},children:[Object(b.jsx)("h2",{children:"Activities"}),Object(b.jsx)("div",{className:"activitiesContainer",children:P.length>0?P.map((function(e,t){return Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(e.photo,")")},children:Object(b.jsx)("p",{children:e.title})},t)})):Object(b.jsx)("p",{children:"No activities yet!"})}),Object(b.jsx)("h2",{children:"Comments"}),Object(b.jsxs)("div",{className:"commentsContainer",children:[Object(b.jsx)("div",{children:j.length>0?j.map((function(e,t){return Object(b.jsx)(M,{idUser:L,removeComment:X,editComment:Q,comment:e},t)})):Object(b.jsx)("p",{children:"No comments yet! be the first"})}),Object(b.jsxs)("div",{className:"sendContainer",children:[Object(b.jsx)("p",{children:"Send a new message:"}),Object(b.jsx)("input",{type:"text",onChange:function(e){W(e.target.value)},value:z,onKeyDown:function(e){"Enter"===e.key&&J()},onFocus:function(){!e.token&&H(!0)}}),Object(b.jsx)("p",{className:"buttonComment",onClick:J,children:">"})]}),Object(b.jsxs)("div",{className:"needToBeLogged",style:V||y?{display:"block"}:{display:"none"},children:[Object(b.jsx)(a.b,{to:"/signin",style:V?{display:"block"}:{display:"none"},children:Object(b.jsx)("p",{children:"You must log in to post a comment! Click here"})}),Object(b.jsx)("p",{style:y?{display:"block"}:{display:"none"},children:"Please write something"})]})]})]})]})})),V={getAllItineraries:G.getAllItinerariesFromCity,resetItineraries:G.resetItineraries,getACity:S.getACity,resetCity:S.resetCity},H=Object(c.b)((function(e){return{cities:e.citiesRed.cities,city:e.citiesRed.city,itineraries:e.itinerariesRed.itineraries,fetchingItineraries:e.itinerariesRed.fetching,fetchingCity:e.citiesRed.fetchingCity}}),V)((function(e){var t=e.cities,r=e.itineraries,s=e.fetchingItineraries,i=e.city,c=e.fetchingCity,o=t.length>0?t.find((function(t){return t._id===e.match.params.id})):null,l=function(t){t.success||(console.error(t.error),e.history.push("/error"))};Object(n.useEffect)((function(){return o||e.getACity(e.match.params.id).then((function(e){return l(e)})),e.getAllItineraries(e.match.params.id).then((function(e){return l(e)})),window.scrollTo(0,0),function(){e.resetItineraries(),e.resetCity(),document.title="myTinerary"}}),[]);var u=function(){e.getAllItineraries(e.match.params.id).then((function(e){return l(e)}))},d=function(e){return o?o[e]:i[e]};return s&&c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{className:"mainCities",children:Object(b.jsx)("div",{className:"noCitiesContainer",children:Object(b.jsx)("p",{children:"Loading..."})})}),Object(b.jsx)(O,{})]}):(document.title="myTinerary - ".concat(d("city")),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)("main",{className:"mainItinerary",children:[Object(b.jsxs)("div",{className:"photoItinerary",style:{backgroundImage:"url('/assets/".concat(d("image"),"')")},children:[Object(b.jsxs)("h3",{children:["In: ",d("country")," you can..."]}),Object(b.jsxs)("h2",{children:["Unfold the beauty of: ",d("city")]})]}),Object(b.jsx)("div",{className:"shortCityDescription",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"specialText",children:"Sneak peek:"})," ",d("description")]})}),Object(b.jsx)("div",{className:"itinerariesContainer",children:r&&0===r.length?Object(b.jsx)("p",{className:"noItineraries",children:"OOPS, NO ITINERARIES YET IN THIS CITY!"}):r.map((function(e,t){return Object(b.jsx)(B,{itinerary:e,myFunction:u},t)}))}),Object(b.jsx)(a.b,{to:"/cities",children:Object(b.jsx)("button",{children:"Back to cities"})})]}),Object(b.jsx)(O,{})]}))})),Y=function(e){var t=Object(n.useState)(!1),r=Object(A.a)(t,2),s=r[0],i=r[1],a=Object(n.useRef)(3);return Object(n.useEffect)((function(){setTimeout((function(){a.current--,0===a.current?e.history.push("/"):i(!s)}),1e3)}),[s]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{className:"mainCities",children:Object(b.jsx)("div",{className:"noCitiesContainer",children:Object(b.jsxs)("p",{children:["Something went wrong! you'll be redirected in ",a.current,"s"]})})}),Object(b.jsx)(O,{})]})},q=r(32),z=r(17),W=r(26),J={registerUser:p.registerUser},K=Object(c.b)(null,J)((function(e){var t=Object(n.useState)({error:""}),r=Object(A.a)(t,2),s=r[0],i=r[1],c=["Argentina","Chile","Brazil","Uruguay","Per\xfa","Bolivia","Paraguay","Rest of the World"],o=Object(n.useState)(!1),l=Object(A.a)(o,2),u=l[0],d=l[1],j=Object(n.useState)({firstName:"",lastName:"",eMail:"",password:"",photoURL:"",country:c[0],google:!1}),p=Object(A.a)(j,2),h=p[0],m=p[1];Object(n.useEffect)((function(){s.error.includes("Network")&&(console.error(s.error),e.history.push("/error"))}),[s.error]);var O=function(e){m(Object(g.a)(Object(g.a)({},h),{},Object(z.a)({},e.target.name,e.target.value)))},f={firstName:"First name must have 2 chars atleast, max 35",lastName:"First name must have 2 chars atleast, max 35",eMail:s.error.includes("eMail already in use")?"Email already in use!":"Email must be a valid one, for example jwb@gmail.com",password:"Password must have atleast 4 chars or numbers!",photoURL:"The URL of the photo should be atleast 6 characters long",country:"Country should be a valid one!"},y=Object.keys(f).filter((function(e){return s.error.includes(e)})),x=function(e){return s.error.includes(e)?"fieldError":""};return u?Object(b.jsx)("main",{className:"mainCities",children:Object(b.jsx)("div",{className:"noCitiesContainer",children:Object(b.jsx)("p",{children:"Loading..."})})}):Object(b.jsxs)("main",{className:"signUpMain",children:[Object(b.jsxs)("form",{className:"signUpForm",children:[Object(b.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(b.jsx)("input",{type:"text",className:x("firstName"),placeholder:"First Name",id:"firstName",name:"firstName",required:!0,value:h.firstName,onChange:O}),Object(b.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(b.jsx)("input",{type:"text",className:x("lastName"),placeholder:"Last Name",id:"lastName",name:"lastName",required:!0,value:h.lastName,onChange:O}),Object(b.jsx)("label",{htmlFor:"eMail",children:"Email:"}),Object(b.jsx)("input",{type:"email",className:x("eMail"),placeholder:"placeholder@mail.com",id:"eMail",name:"eMail",required:!0,value:h.eMail,onChange:O}),Object(b.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(b.jsx)("input",{type:"password",className:x("password"),placeholder:"Password",id:"password",name:"password",required:!0,value:h.password,onChange:O}),Object(b.jsx)("label",{htmlFor:"photoURL",children:"Photo URL:"}),Object(b.jsx)("input",{type:"url",className:x("photoURL"),placeholder:"URL of your photo",id:"photoURL",name:"photoURL",required:!0,value:h.photoURL,onChange:O}),Object(b.jsx)("label",{htmlFor:"country",children:"Country:"}),Object(b.jsx)("select",{name:"country",id:"country",value:h.country,onChange:O,children:c.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))}),Object(b.jsx)("button",{type:"button",onClick:function(t){t.preventDefault();var r=function(){var e=Object(q.a)(Object.keys(h)),t=Object(q.a)(Object.values(h));return e.filter((function(e,r){return""===t[r]})).join(" ")}();""===r?(d(!0),e.registerUser(h).then((function(e){!e.success&&i({error:e.error}),d(!1)}))):i({error:r})},children:"SIGN UP"}),Object(b.jsx)(W.GoogleLogin,{clientId:"367408341558-2t0f5ucqmmg4fhp1per1drrfmv5i611r.apps.googleusercontent.com",render:function(e){return Object(b.jsx)("button",{className:"googleButton",onClick:e.onClick,disabled:e.disabled,children:"Sign Up With Google"})},onSuccess:function(t){var r={firstName:t.profileObj.givenName||null,lastName:t.profileObj.familyName||null,eMail:t.profileObj.email||null,password:t.profileObj.googleId||null,photoURL:t.profileObj.imageUrl||null,country:"Rest of the World",google:!0};e.registerUser(r).then((function(e){return!e.success&&i({error:e.error})}))},cookiePolicy:"single_host_origin"})]}),Object(b.jsxs)("div",{className:"errorContainer",style:""===s.error?{display:"none"}:{display:"block"},children:[Object(b.jsx)("h4",{children:"ERRORS!: Please read carefully"}),y.map((function(e,t){return Object(b.jsx)("p",{children:f[e]},t)}))]}),Object(b.jsx)(a.b,{to:"/signin",children:"Already registered? SIGN IN!"})]})})),Q=function(e){return Object(n.useEffect)((function(){return window.scrollTo(0,0),document.title="myTinerary - Sign Up",function(){document.title="myTinerary"}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(K,Object(g.a)({},e)),Object(b.jsx)(O,{})]})},X={loginUser:p.loginUser},Z=Object(c.b)((function(e){return{}}),X)((function(e){var t=Object(n.useState)({error:"",errorEffect:!0}),r=Object(A.a)(t,2),s=r[0],i=r[1],c=Object(n.useState)(!1),o=Object(A.a)(c,2),l=o[0],u=o[1],d=Object(n.useState)({eMail:"",password:"",google:!1}),j=Object(A.a)(d,2),p=j[0],h=j[1],m=function(e){h(Object(g.a)(Object(g.a)({},p),{},Object(z.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){s.error.includes("Network")&&(console.error(s.error),e.history.push("/error"))}),[s.error]);return l?Object(b.jsx)("main",{className:"mainCities",children:Object(b.jsx)("div",{className:"noCitiesContainer",children:Object(b.jsx)("p",{children:"Loading..."})})}):Object(b.jsxs)("main",{className:"signUpMain",children:[Object(b.jsxs)("form",{className:"signUpForm",children:[Object(b.jsx)("label",{htmlFor:"eMail",children:"Email:"}),Object(b.jsx)("input",{type:"email",placeholder:"placeholder@mail.com",id:"eMail",name:"eMail",value:p.eMail,onChange:m,required:!0}),Object(b.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(b.jsx)("input",{type:"password",placeholder:"Password",id:"password",name:"password",value:p.password,onChange:m,required:!0}),Object(b.jsx)("button",{id:"signInBtn",type:"button",onClick:function(t){t.preventDefault();var r=function(){var e=[p.eMail,p.password];return["eMail","password"].filter((function(t,r){return""===e[r]})).join(" ")}();""===r?(u(!0),e.loginUser(p).then((function(e){!e.success&&i({error:e.error,errorEffect:!s.errorEffect}),u(!1)}))):i({error:r,errorEffect:!s.errorEffect})},children:"SIGN IN"}),Object(b.jsx)(W.GoogleLogin,{clientId:"367408341558-2t0f5ucqmmg4fhp1per1drrfmv5i611r.apps.googleusercontent.com",render:function(e){return Object(b.jsx)("button",{className:"googleButton",onClick:e.onClick,disabled:e.disabled,children:"Sign In with Google"})},onSuccess:function(t){var r={eMail:t.profileObj.email||null,password:t.profileObj.googleId||null,google:!0};e.loginUser(r).then((function(e){return!e.success&&i({error:e.error})}))},cookiePolicy:"single_host_origin"}),""!==s.error&&Object(b.jsx)("p",{className:s.errorEffect?"errorEffectFirst":"errorEffectSecond",children:s.error.includes("Google")?s.error:"Invalid email or password!"})]}),Object(b.jsx)(a.b,{to:"/signup",children:"Don't have an account yet? SIGN UP NOW!"})]})})),$=function(e){return Object(n.useEffect)((function(){return window.scrollTo(0,0),document.title="myTinerary - Sign In",function(){document.title="myTinerary"}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(Z,Object(g.a)({},e)),Object(b.jsx)(O,{})]})},ee={populateItineraries:p.populateItineraries},te=Object(c.b)((function(e){return{likedItineraries:e.usersRed.likedItineraries,token:e.usersRed.token}}),ee)((function(e){var t=Object(n.useState)(!1),r=Object(A.a)(t,2),s=r[0],i=r[1],c=e.likedItineraries;return Object(n.useEffect)((function(){return document.title="myTinerary - Favourites",e.populateItineraries(e.token).then((function(e){i(!s)})),function(){return document.title="myTinerary"}}),[]),s?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{className:"favItiMain",children:c.map((function(e){return Object(b.jsx)(a.b,{to:"/itineraries/".concat(e.city._id),children:Object(b.jsxs)("div",{className:"favItiContainer",children:[Object(b.jsxs)("div",{className:"favItiHeader",style:{backgroundImage:"url('assets/".concat(e.city.image,"')")},children:[Object(b.jsxs)("p",{children:["Country: ",e.city.country]}),Object(b.jsxs)("p",{children:["City: ",e.city.city]}),Object(b.jsxs)("p",{children:["Description: ",e.city.description]})]}),Object(b.jsxs)("div",{className:"favItiContent",children:[Object(b.jsxs)("p",{children:["Title: ",e.title]}),Object(b.jsxs)("p",{children:["Author: ",e.author.name]}),Object(b.jsxs)("p",{children:["Description: ",e.description]})]})]})},e._id)}))}),Object(b.jsx)(O,{})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("main",{className:"mainCities",children:Object(b.jsx)("div",{className:"noCitiesContainer",children:Object(b.jsx)("p",{children:"Loading..."})})}),Object(b.jsx)(O,{})]})}));var re={logLs:p.logInLS},ne=Object(c.b)((function(e){return{userPhoto:e.usersRed.photoURL,token:e.usersRed.token,firstName:e.usersRed.firstName}}),re)((function(e){var t=e.token;return Object(n.useEffect)((function(){if(localStorage.getItem("token")){var t={photoURL:localStorage.getItem("photoURL"),token:localStorage.getItem("token"),firstName:localStorage.getItem("firstName"),likedItineraries:JSON.parse(localStorage.getItem("likedItineraries"))};e.logLs(t)}}),[]),Object(b.jsx)(a.a,{children:Object(b.jsxs)(P.d,{children:[Object(b.jsx)(P.b,{exact:!0,path:"/",component:E}),!t&&Object(b.jsx)(P.b,{path:"/signup",component:Q}),!t&&Object(b.jsx)(P.b,{path:"/signin",component:$}),Object(b.jsx)(P.b,{path:"/cities",component:_}),Object(b.jsx)(P.b,{path:"/itineraries/:id",component:H}),t&&Object(b.jsx)(P.b,{path:"/favourites",component:te}),Object(b.jsx)(P.b,{path:"/error/",component:Y}),Object(b.jsx)(P.a,{to:"/"})]})})})),se=r(21),ie={cities:[],filteredCities:[],city:{},fetching:!0,fetchingCity:!0},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CITIES":return Object(g.a)(Object(g.a)({},e),{},{cities:t.payload,filteredCities:t.payload,fetching:!1});case"GET_FILTERED_CITIES":return Object(g.a)(Object(g.a)({},e),{},{filteredCities:e.cities.filter((function(e){return e.city.toLowerCase().startsWith(t.payload.toLowerCase().trim())}))});case"GET_A_CITY":return Object(g.a)(Object(g.a)({},e),{},{city:t.payload,fetchingCity:!1});case"RESET":return Object(g.a)(Object(g.a)({},e),{},{fetchingCity:!0,city:{}});case"RESET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filteredCities:e.cities});default:return e}},ce={itineraries:[],fetching:!0},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AN_ITINERARY":return Object(g.a)(Object(g.a)({},e),{},{itineraries:t.payload,fetching:!1});case"RESET":return ce;default:return e}},le={photoURL:"",token:"",firstName:"",likedItineraries:[],itinerariesArePopulated:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGGED":return localStorage.setItem("token",t.payload.token),localStorage.setItem("firstName",t.payload.firstName),localStorage.setItem("photoURL",t.payload.photoURL),localStorage.setItem("likedItineraries",JSON.stringify(t.payload.likedItineraries)),Object(g.a)({},t.payload);case"LOGOUT":return localStorage.clear(),le;case"LIKED_ITINERARY":return localStorage.setItem("likedItineraries",JSON.stringify(t.payload)),Object(g.a)(Object(g.a)({},e),{},{likedItineraries:t.payload});case"FAVOURITE_ITINERARIES":return Object(g.a)(Object(g.a)({},e),{},{likedItineraries:t.payload,itinerariesArePopulated:!0});default:return e}},de=Object(se.b)({citiesRed:ae,itinerariesRed:oe,usersRed:ue}),je=r(45),pe=Object(se.c)(de,Object(se.a)(je.a));i.a.render(Object(b.jsx)(c.a,{store:pe,children:Object(b.jsx)(ne,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.0ca1fede.chunk.js.map