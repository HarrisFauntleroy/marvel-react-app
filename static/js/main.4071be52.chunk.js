(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{20:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(13),r=c.n(i),l=(c(20),c(3)),j=c(14),o=c.n(j),u=c.p+"static/media/logo.7ef3043b.png",b=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("img",{src:u,alt:"Marvel + React logo"})})},d=c.p+"static/media/spinner.11d9cde8.gif",h=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:d,alt:"loading wheel",className:"loading"})})},O=function(e){var t=e.item;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-inner",children:[Object(n.jsx)("div",{className:"card-front",children:Object(n.jsx)("img",{src:"".concat(t.thumbnail.path,"/standard_fantastic.").concat(t.thumbnail.extension," "),alt:""})}),Object(n.jsxs)("div",{className:"card-back",children:[Object(n.jsx)("h1",{className:"center",children:t.name}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Character Name:"})," ",t.name]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Description:"})," ",t.description]})]})]})]})})},m=function(e){var t=e.characters;return e.isLoading?Object(n.jsx)(h,{}):Object(n.jsx)("section",{className:"cards",children:t.map((function(e){return Object(n.jsx)(O,{item:e},e.id)}))})},f=function(e){var t=e.getQuery,c=e.getFilter,s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],j=i[1],o=Object(a.useState)("false"),u=Object(l.a)(o,2),b=u[0],d=u[1],h=Object(a.useState)("characters"),O=Object(l.a)(h,2),m=O[0],f=O[1],x=function(e){c(e),f(e)};return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsxs)("ul",{className:"navlist ".concat(b?"closed":"open"),children:[Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"characters"===m?"active":"inactive",onClick:function(e){return x("characters")},href:"/characters",children:"Characters"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"comics"===m?"active":"inactive",onClick:function(e){return x("comics")},href:"/comics",children:"Comics"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"creators"===m?"active":"inactive",onClick:function(e){return x("creators")},href:"/creators",children:"Creators"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"events"===m?"active":"inactive",onClick:function(e){return x("events")},href:"/events",children:"Events"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"series"===m?"active":"inactive",onClick:function(e){return x("series")},href:"/series",children:"Series"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"stories"===m?"active":"inactive",onClick:function(e){return x("stories")},href:"/stories",children:"Stories"})}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search...",value:r,onChange:function(e){return c=e.target.value,j(c),void t(c);var c},autoFocus:!0})]}),Object(n.jsx)("button",{className:"menu ".concat(b?"":"opened"),onClick:function(){d(!b)},"aria-label":"Main Menu",children:Object(n.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",children:[Object(n.jsx)("path",{className:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(n.jsx)("path",{className:"line line2",d:"M 20,50 H 80"}),Object(n.jsx)("path",{className:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})]})},x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!0),r=Object(l.a)(i,2),j=r[0],u=r[1],d=Object(a.useState)(""),h=Object(l.a)(d,2),O=h[0],x=h[1],v=Object(a.useState)("characters"),g=Object(l.a)(v,2),p=g[0],N=g[1];return Object(a.useEffect)((function(){o()("https://gateway.marvel.com/v1/public/"+p+"?",{params:Object.assign({apikey:"59ad2aa3fcbed5a077923510a14604cf",ts:"1",hash:"d4db04e586186471a9f4b0d9fc0f1697"},""!==O?{nameStartsWith:O}:null)}).then((function(e){s(e.data.data.results),u(!1),console.log(e)})).catch((function(e){console.log(e)}))}),[O,p]),Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{getQuery:function(e,t){var c;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];c&&clearTimeout(c),c=setTimeout((function(){e.apply(void 0,a)}),t)}}((function(e){return x(e)}),1e3),getFilter:function(e){return N(e)}}),Object(n.jsx)(b,{}),Object(n.jsx)("div",{className:"card-container",children:Object(n.jsx)(m,{isLoading:j,characters:c})})]})},v=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(x,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.4071be52.chunk.js.map