(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,a){e.exports={btn:"Navbar_btn__3pYpp",collapseIcon:"Navbar_collapseIcon__1YDxa"}},16:function(e,t,a){e.exports={barContainer:"SliderWithText_barContainer__zrHp0",slider:"SliderWithText_slider__Olk55"}},17:function(e,t,a){e.exports={wheel:"Wheel_wheel__2HQxl",winnerArrow:"Wheel_winnerArrow__1ZE7r",wheelContainer:"Wheel_wheelContainer__1g5Hd"}},27:function(e,t,a){e.exports={gameDesc:"GameCard_gameDesc__1Xvat"}},36:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){e.exports={barContainer:"TwoEndSlider_barContainer__3nJ4T"}},60:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(8),l=a.n(c),r=a(4),i=a(5),o=a(2),d=Object(i.b)({name:"settings",initialState:{value:"https://onebruh.pythonanywhere.com/api/game?countGames=3&priceMore=0&priceLess=100000"},reducers:{setNewSettings:function(e,t){e.value=t.payload},setSettingsByObject:function(e,t){for(var a="https://onebruh.pythonanywhere.com/api/game?",n=!0,s=0,c=Object.entries(t.payload);s<c.length;s++){var l=Object(o.a)(c[s],2),r=l[0],i=l[1];n||(a+="&"),n=!1,a+="".concat(r,"=").concat(i)}e.value=a}}}),u=d.actions,h=(u.setNewSettings,u.setSettingsByObject),j=d.reducer,b=Object(i.b)({name:"roll",initialState:{value:!1},reducers:{setRollFalse:function(e){e.value=!1},setRollTrue:function(e){e.value=!0}}}),m=b.actions,g=m.setRollFalse,x=m.setRollTrue,p=b.reducer,v=Object(i.b)({name:"winner",initialState:{value:-1},reducers:{setNewWinner:function(e,t){e.value=t.payload},clearWinner:function(e){e.value=-1}}}),f=v.actions,O=f.setNewWinner,w=(f.clearWinner,v.reducer),N=Object(i.a)({reducer:{settings:j,roll:p,winner:w}}),y=(a(36),a(37),a(6)),_=a.n(y),S=a(9),C=a(10),k=a.n(C),W=(a(57),a.p+"static/media/settings.dcd0b939.svg"),V=a.p+"static/media/about.636ba72a.svg",T=a.p+"static/media/collapseIcon.cbc28786.svg",B=a(15),I=a.n(B),M=a(0);var P=function(e){var t=e.onToggleSettings;return Object(M.jsx)("nav",{className:"d-flex text-light p-3  navbar navbar-expand-lg",children:Object(M.jsxs)("div",{className:"container-fluid",children:[Object(M.jsx)("span",{className:"d-inline fs-2 me-4 navbar-brand",children:"BruhWheel"}),Object(M.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarItems","aria-controls":"navbarItems","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(M.jsx)("span",{children:Object(M.jsx)("img",{width:24,height:24,src:T,alt:"Collapse"})})}),Object(M.jsxs)("div",{id:"navbarItems",className:"collapse navbar-collapse",children:[Object(M.jsx)("div",{className:"d-flex",children:Object(M.jsx)("ul",{className:"list-unstyled fs-2",children:Object(M.jsxs)("li",{onClick:t,className:" fs-4 me-4 btn text-light d-flex ".concat(I.a.btn),children:["Settings ",Object(M.jsx)("img",{className:"ms-2 my-auto",src:W,alt:"Settings"})]})})}),Object(M.jsx)("div",{children:Object(M.jsx)("ul",{className:"list-unstyled my-auto fs-2",children:Object(M.jsx)("li",{className:" fs-4 btn text-light ".concat(I.a.btn),children:Object(M.jsxs)("a",{className:"d-flex",href:"#footer",children:["About ",Object(M.jsx)("img",{className:"ms-2 my-auto",width:24,height:24,src:V,alt:"About"})]})})})})]})]})})};var R=function(){return Object(M.jsx)("footer",{id:"footer",className:"bg-dark mt-4 text-center text-light px-5",children:Object(M.jsxs)("div",{id:"about",className:"container-fluid",children:[Object(M.jsx)("h3",{children:"Why BruhWheel?"}),Object(M.jsx)("p",{children:"It's just 4 fun site. Bruh - it's my nickname, Wheel - it's a way to get a random game.  BruhWheel can help you choose a game from Steam. Just push a roll button."}),Object(M.jsx)("h3",{children:"How it work?"}),Object(M.jsx)("p",{children:"All games come from SteamAPI or steam SPY API and from some different API. And library of the Bruh Wheel large as steam library large."}),Object(M.jsxs)("p",{children:["If you want you can see ",Object(M.jsx)("a",{className:"link-success",target:"_blank",rel:"noreferrer",href:"https://github.com/OneBrov/GameWheel",children:"source of the code"})]})]})})},G=a(26),A=a(7),E=a.n(A),D=a(16),H=a.n(D);var L=function(e){var t=e.name,a=e.myValue,n=e.maxValue,c=e.minValue,l=e.changeValue,r=s.a.useState(""),i=Object(o.a)(r,2),d=i[0],u=i[1],h=function(e){e.target.value>=c&&e.target.value<=n?u(""):u("The value mast be in range ".concat(c," to ").concat(n)),l(e.target.value)};return Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("div",{className:"d-flex justify-content-between mb-1",children:[Object(M.jsx)("label",{children:t}),Object(M.jsx)("input",{name:t,onChange:h,type:"number",value:a,min:c,max:n})]}),Object(M.jsxs)("div",{className:"d-flex justify-content-center ".concat(H.a.barContainer),children:[Object(M.jsxs)("p",{children:[" ",c]}),Object(M.jsx)("input",{onChange:h,className:"d-flex mx-3  ".concat(H.a.slider),value:a,placeholder:"3",type:"range",min:c,max:n,step:"1"}),Object(M.jsxs)("p",{children:[" ",n]})]}),d.length?Object(M.jsx)("div",{className:"alert alert-danger",role:"alert",children:d}):Object(M.jsx)(M.Fragment,{})]})};a(59);var F=function(e){var t=e.name,a=e.leftValue,n=e.rightValue,c=e.maxValue,l=e.minValue,r=e.changeLeftValue,i=e.changeRightValue,d=s.a.useState(""),u=Object(o.a)(d,2),h=u[0],j=u[1];return Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[Object(M.jsx)("label",{className:"me-3",children:t}),Object(M.jsx)("label",{children:"Min"}),Object(M.jsx)("input",{name:t,onChange:function(e){e.target.value>=l&&e.target.value<=c&&a<=n?j(""):j("Left value must be in range ".concat(l," to ").concat(c," and less than right value=").concat(n)),r(e.target.value)},className:"mx-2 w-100",type:"number",value:a,min:l,max:c}),Object(M.jsx)("p",{className:"align-center m-0 my-auto mx-2",children:"-"}),Object(M.jsx)("input",{name:t,onChange:function(e){e.target.value>=l&&e.target.value<=c&&a<=n?j(""):j("Right value must be in range ".concat(l," to ").concat(c," and more than left value=").concat(a)),i(e.target.value)},className:"mx-2 w-100",type:"number",value:n,min:l,max:c}),Object(M.jsx)("label",{children:"Max"})]}),h.length?Object(M.jsx)("div",{className:"alert alert-danger",role:"alert",children:h}):Object(M.jsx)(M.Fragment,{})]})},J=a.p+"static/media/exit.3ac220a8.svg";var Y=function(e){var t=e.settingsOpen,a=e.onToggleSettings,n=s.a.useState(3),c=Object(o.a)(n,2),l=c[0],i=c[1],d=s.a.useState(9999),u=Object(o.a)(d,2),j=u[0],b=u[1],m=s.a.useState(0),g=Object(o.a)(m,2),x=g[0],p=g[1],v=s.a.useState([]),f=Object(o.a)(v,2),O=f[0],w=f[1],N=Object(r.b)(),y=s.a.useRef(null);return s.a.useEffect((function(){(function(){var e=Object(S.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:"GET",url:"https://onebruh.pythonanywhere.com/api/genre/all/"});case 3:t=e.sent,a=t.data,w(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Oops!!! ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(M.jsxs)("div",{className:"".concat(E.a.overlay," ").concat(t?E.a.overlayVisible:""),children:[Object(M.jsxs)("div",{className:"".concat(E.a.settings," p-4"),children:[Object(M.jsxs)("div",{className:"d-flex justify-content-between pb-4",children:[Object(M.jsx)("h3",{children:"Settings:"}),Object(M.jsx)("img",{onClick:a,className:"my-auto  ".concat(E.a.close),width:24,height:24,src:J,alt:"Exit"})]}),Object(M.jsx)("h1",{children:" Wheel settings!"}),Object(M.jsxs)("form",{ref:y,id:"settingsForm",onSubmit:function(){return!1},action:"?",children:[Object(M.jsx)(L,{name:"Count Games:",myValue:l,maxValue:20,minValue:3,changeValue:i}),Object(M.jsx)(F,{name:"Price:",leftValue:x,rightValue:j,maxValue:9999,minValue:0,changeLeftValue:p,changeRightValue:b}),Object(M.jsxs)("div",{className:"row mb-3 ",children:[Object(M.jsx)("label",{children:"Genres:"}),Object(M.jsx)("select",{className:"",multiple:!0,name:"genres",children:O.length&&O.map((function(e){return Object(M.jsx)("option",{children:e.genre},e.id)}))})]})]}),Object(M.jsx)("div",{className:"row",children:Object(M.jsx)("button",{type:"submit",onClick:function(){if(l>=3&&l<=20&&j>=x&&j<=9999&&x>=0){var e,t=[],n=Object(G.a)(y.current.elements.genres);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.selected&&t.push(encodeURIComponent(s.value))}}catch(r){n.e(r)}finally{n.f()}var c={countGames:l,priceLess:j,priceMore:x,genres:t.join(",")};N(h(c)),a()}else console.log("Form is not valid!!! Please try again")},className:"btn btn-dark",children:"Submit"})})]}),Object(M.jsx)("div",{onClick:a,className:E.a.outside})]})},z=a(17),K=a.n(z);var Q=function(e){var t=e.games,a=e.spinningTime,n=s.a.useRef(null);return s.a.useEffect((function(){!function(e){for(var t=n.current,a=t.getContext("2d"),s=t.width/2,c=s,l=s,r=2*Math.PI/e,i=0;i<e;i++){a.beginPath(),a.moveTo(c,l),a.arc(c,l,s,i*r,(i+1)*r,!1),a.lineWidth=s;var o=15*i;a.fillStyle="hsl("+o+",70%, 60%)",a.fill(),a.lineWidth=2,a.strokeStyle="#444",a.stroke(),a.closePath()}}(t.length),function(e){var t=n.current,a=t.getContext("2d"),s=t.width/2,c=s,l=s;a.font=s/10+"px Helvetica",e.length>=12&&(a.font=s/16+"px Helvetica"),a.textAlign="left",a.strokeStyle="black",a.fillStyle="white",a.lineWidth=4,a.save(),a.translate(c,l);var r=360/e.length;a.rotate(-r/2*Math.PI/180);for(var i=0;i<e.length;i++){var o=e[i].name;o.length>15&&(o=o.slice(0,12)+"..."),a.strokeText(o,0+s/4,5,s-s/4),a.fillText(o,0+s/4,5,s-s/4),a.rotate(-r*Math.PI/180)}a.restore()}(t)}),[t]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("canvas",{id:"wheel-canvas",className:"m-auto d-block ".concat(K.a.wheel),height:1e3,width:1e3,ref:n,style:{transition:"all cubic-bezier(0.23, 0.64, 0.36, 1) ".concat(a)}}),Object(M.jsx)("div",{className:K.a.winnerArrow})]})},U=a(27),X=a.n(U);var Z=function(e){var t=e.game,a=e.picHeight,n=void 0===a?100:a,s=e.descriptionCollapse,c=void 0!==s&&s;return Object(M.jsxs)("div",{className:"flex-column p-2 ".concat(X.a.gameDesc),children:[Object(M.jsx)("img",{className:"mx-auto d-block my-3 ",height:n,src:"https://steamcdn-a.akamaihd.net/steam/apps/".concat(t.appid,"/header.jpg"),alt:"Rolled game"}),Object(M.jsx)("h3",{children:t.name}),c&&Object(M.jsx)("button",{className:"btn btn-light d-block p-1 w-100 mx-auto mb-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#gameDesc".concat(t.appid),"aria-expanded":"false","aria-controls":"gameDesc".concat(t.appid),children:"Toggle description"}),Object(M.jsxs)("div",{className:c?"collapse":"",id:c?"gameDesc".concat(t.appid):"",children:[Object(M.jsxs)("p",{children:[" BruhPoints: ",t.bruh_points]}),Object(M.jsxs)("p",{children:[" Positive reviews: ",t.possitive_count," "]}),Object(M.jsxs)("p",{children:[" Negative reviews: ",t.negative_count," "]}),Object(M.jsxs)("p",{children:[" Metascore: ",t.metascore," "]}),Object(M.jsxs)("p",{children:[" Sold copies: ",t.owners_count," "]}),Object(M.jsxs)("p",{children:[" Price: ",t.price," Rub"]}),Object(M.jsxs)("p",{children:[" Developer: ",t.developer," "]}),Object(M.jsxs)("p",{children:[" Publisher: ",t.publisher," "]}),Object(M.jsxs)("p",{children:[" Duration: ",t.duration," ",t.time_unit," ",t.label]}),Object(M.jsxs)("p",{children:[" HLTB: ",Object(M.jsxs)("a",{className:"link-light",rel:"noreferrer",href:t.hltb_link,target:"_blank",children:[" ",t.name]}),"  "]}),Object(M.jsxs)("p",{children:[" Steam: ",Object(M.jsxs)("a",{className:"link-light",rel:"noreferrer",href:"https://store.steampowered.com/app/".concat(t.appid),target:"_blank",children:[" ",t.name," "]})]}),Object(M.jsxs)("p",{children:[" Languages: ",t.languages.join(", ")," "]}),Object(M.jsxs)("p",{children:[" Genres: ",t.genres.join(", ")," "]}),Object(M.jsxs)("p",{children:[" Tags: ",t.tags.join(", ")," "]})]})]})};var q=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=s.a.useState([]),l=Object(o.a)(c,2),i=l[0],d=l[1],u=s.a.useState(0),h=Object(o.a)(u,2),j=h[0],b=h[1],m=Object(r.c)((function(e){return e.settings.value})),p=Object(r.c)((function(e){return e.roll.value})),v=Object(r.c)((function(e){return e.winner.value})),f=Object(r.b)();return s.a.useEffect((function(){!0!==p&&i.length||function(){var e=Object(S.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:"GET",url:m});case 3:t=e.sent,a=t.data,d(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Cant get games with the given parameters! ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[m,p]),s.a.useEffect((function(){if(!0===p){var e=(s=0,c=i.length-1,Math.floor(Math.random()*(c-s+1)+s)),t=function(e,t,a,n){var s=Math.floor(Math.random()*(t-e))+e,c=360/a*n,l=360/a*(n+1);return(s*=360)+(Math.floor(Math.random()*(l-c))+c)+1}(10,30,i.length,e),a=j+t;document.getElementById("wheel-canvas").style.transform="rotate("+a+"deg)";var n=~~(a%360/(360/i.length));setTimeout((function(){f(g()),f(O(n))}),5e3),b(a)}var s,c}),[i]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Y,{onToggleSettings:function(){return n(!1)},settingsOpen:a}),Object(M.jsx)(P,{onToggleSettings:function(){return n(!0)}}),Object(M.jsx)("div",{className:"container-fluid bg-gradient text-light bg-dark",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("div",{id:"leftColumn",className:"col-lg-3 ",children:[Object(M.jsx)("h2",{className:"text-center pb-4",children:"Rolled game"}),Object(M.jsx)("div",{className:"shadowBox winnerGame ".concat(p?"":"winnerGameVisible"),children:v>=0&&i[v]?Object(M.jsx)(Z,{game:i[v],picHeight:window.innerWidth>=1400?140:window.innerWidth>=1200?120:window.innerWidth>=992?90:window.innerWidth>=768?250:window.innerWidth>=576?200:100,descriptionCollapse:!1}):""})]}),Object(M.jsxs)("div",{id:"midColumn",className:"col-lg-6 mb-4",children:[Object(M.jsx)("h2",{className:"text-center pb-4",children:"Wheel"}),Object(M.jsxs)("div",{className:"shadowBox p-3 position-relative w-100 ",children:[Object(M.jsx)(Q,{spinningTime:"5s",games:i}),Object(M.jsx)("button",{onClick:function(){return f(x())},className:"rollButton btn p-0 ".concat(p?"rollButtonNotActive":""),children:p?"Rolling":"Roll"})]})]}),Object(M.jsxs)("div",{id:"rightColumn",className:"col-lg-3 col",children:[Object(M.jsx)("h2",{className:"text-center pb-4",children:"Game list"}),Object(M.jsx)("div",{className:"shadowBox",children:i?i.map((function(e){return Object(M.jsx)(Z,{game:e,picHeight:100,descriptionCollapse:!0},e.appid)})):""})]})]})}),Object(M.jsx)(R,{})]})};l.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(r.a,{store:N,children:Object(M.jsx)(q,{})})}),document.getElementById("root"))},7:function(e,t,a){e.exports={overlay:"SettingsCanvas_overlay__3tMbo",settings:"SettingsCanvas_settings__3LEWi",outside:"SettingsCanvas_outside__1nfoK",overlayVisible:"SettingsCanvas_overlayVisible__2iL1V",close:"SettingsCanvas_close__Tn6DG"}}},[[60,1,2]]]);
//# sourceMappingURL=main.f43f985b.chunk.js.map