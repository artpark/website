(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/resume.77494d49.pdf"},159:function(e,t,a){e.exports=a.p+"static/media/self.366ed032.jpg"},164:function(e,t,a){e.exports=a(301)},233:function(e,t){},235:function(e,t){},236:function(e,t){},237:function(e,t){},238:function(e,t){},272:function(e,t,a){e.exports=a.p+"static/media/cleanthisspace.da896e31.png"},273:function(e,t,a){e.exports=a.p+"static/media/ACWWW.c3fd2f71.png"},274:function(e,t,a){e.exports=a.p+"static/media/database.39a14bd0.png"},300:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(41),i=a(305),s=a(303),m=a(53),u=a(10),d=a(71),E=a(306),p=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(0),p=Object(l.a)(u,2),f=p[0],h=p[1],b=["/art par-kin-vIn-chAH/","THANUT PARKEENVINCHA","ARTY PARKEENVINCHA","SANTA CRUZ BANANA SLUG","LOWELL CARDINAL","FROM THE BAY AREA","FROM CANADA","FROM THAILAND","ASPIRING DEVELOPER"],v=function(){o(!c),h(b[Math.floor(Math.random()*b.length)])};return r.a.createElement(s.a.Header,{className:"header"},r.a.createElement(m.b,{to:"/"},r.a.createElement("p",{className:"header-font name",onMouseEnter:v,onMouseLeave:v},c?f:"ART PARKEENVINCHA")),r.a.createElement(d.Breakpoint,{medium:!0,up:!0},r.a.createElement("div",{className:"navbar"},r.a.createElement(i.a,{mode:"horizontal"},e.navBarMenuItems))),r.a.createElement(d.Breakpoint,{small:!0,down:!0},r.a.createElement(E.a,{id:"sider-toggle-button",type:"link",icon:e.isSiderCollapse?"menu-fold":"menu-unfold",onClick:function(){return e.setSiderCollapse(!e.isSiderCollapse)}})))},f="https://www.linkedin.com/in/thanut-art-parkeenvincha/",h="https://github.com/artpark",b="art.parkeenvincha@gmail.com",v=function(){return r.a.createElement(s.a.Footer,{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("p",{className:"footer-font"},"CONTACT INFO"),r.a.createElement("div",{className:"footer-buttons"},r.a.createElement(E.a,{type:"link",icon:"linkedin",size:"large",href:f,target:"_blank"}),r.a.createElement(E.a,{type:"link",icon:"github",size:"large",href:h,target:"_blank"}),r.a.createElement(E.a,{type:"link",icon:"mail",size:"large",onClick:function(){return window.location.href="mailto:".concat(b)},target:"_blank"}))))},N=a(65),g=a(29),k=a(159),A=a.n(k),O=function(){return r.a.createElement("div",{className:"banner-container"},r.a.createElement(N.a,{gutter:[75,0]},r.a.createElement(g.a,{sm:24,md:10},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:A.a,alt:"portrait",className:"portrait-image"}))),r.a.createElement(g.a,{sm:24,md:14},r.a.createElement("div",{className:"banner-description-container"},r.a.createElement("div",{className:"text-float-left"},r.a.createElement("h1",null,"Hello!"),r.a.createElement("h2",null,"I'm Art Parkeenvincha"))))))},w=function(){return r.a.createElement("div",{className:"about-page-container"},r.a.createElement("h1",null,"Coming soon!"))},j=a(17),C=a(64),S=a(113),y=a.n(S);C.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(C.pdfjs.version,"/pdf.worker.js");var I=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=(t[0],t[1]);return r.a.createElement("div",{className:"resume-container"},r.a.createElement("a",{href:y.a,download:!0,id:"resume-download-button"},r.a.createElement(j.a,{type:"download"})),r.a.createElement(C.Document,{file:y.a,onLoadSuccess:function(e){var t=e.numPages;a(t)}},r.a.createElement(C.Page,{pageNumber:1,scale:1,renderAnnotationLayer:!1})))},R=a(304),T=(a(272),a(273),a(274),R.a.Meta,function(){return r.a.createElement("div",{className:"projects-container"},r.a.createElement("h1",null,"Coming soon!"))}),x=a(114),M=a.n(x),B=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){M.a.get("https://accounts.spotify.com/authorize?client_id=".concat("be30a1ed57db437d910240e2f2685bc1")).then((function(e){return console.log(e)})),M.a.get("https://api.spotify.com/v1/playlists/1bcLTiVH5kKW8dCZyxYl7w",{headers:{Authorization:"Bearer BQChwLm7Q-3rcxfhmz-P0t1sewlviMIJMx0h4wTQvXKyqv4wYVK2tdisOZzItvv5c3263sJBU2kT0boROhmRk3S-_uQKfBrhqI4_JIe1lVeOOs6zyz7oh5zsV-MGuo5XOjsFuzWv0hT2_fE"}}).then((function(e){var t=e.data.tracks.items,a=[];Object.values(t).forEach((function(e){a.push(e.track.album.images[1].url)}));var n=[];a=a.filter((function(e){if(n.indexOf(e.toString())<0)return n.push(e.toString()),e}));var o=[];a.map((function(e){o.push(r.a.createElement("img",{src:e}))})),c(o)}))})),r.a.createElement("div",null,a)},L=[r.a.createElement(i.a.Item,{key:"1"},r.a.createElement(m.b,{to:"/about"},r.a.createElement("p",{className:"header-font"},"ABOUT"))),r.a.createElement(i.a.Item,{key:"2"},r.a.createElement(m.b,{to:"/resume"},r.a.createElement("p",{className:"header-font"},"RESUME"))),r.a.createElement(i.a.Item,{key:"3"},r.a.createElement(m.b,{to:"/projects"},r.a.createElement("p",{className:"header-font"},"PROJECTS")))],z=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.a,null,r.a.createElement(d.BreakpointProvider,null,r.a.createElement(s.a,{className:"layout"},r.a.createElement(s.a,{className:"content"},r.a.createElement(p,{isSiderCollapse:a,setSiderCollapse:c,navBarMenuItems:L}),r.a.createElement(u.d,null,r.a.createElement(u.a,{exact:!0,from:"/",to:"/website"}),r.a.createElement(u.b,{exact:!0,path:"/website"},r.a.createElement(O,null)),r.a.createElement(u.b,{path:"/about"},r.a.createElement(w,null)),r.a.createElement(u.b,{path:"/resume"},r.a.createElement(I,null)),r.a.createElement(u.b,{path:"/projects"},r.a.createElement(T,null)),r.a.createElement(u.b,{path:"/spotify"},r.a.createElement(B,null))),r.a.createElement(v,null)),r.a.createElement(s.a.Sider,{className:"navbar-responsive",trigger:null,collapsible:!0,collapsedWidth:0,collapsed:a},r.a.createElement(i.a,{mode:"inline"},L)))))};a(299),a(300),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=81}},[[164,1,2]]]);
//# sourceMappingURL=main.9dbf5dd9.chunk.js.map