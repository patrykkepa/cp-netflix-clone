(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(17),s=n.n(i),o=(n(28),n(29),n(5)),l=n.n(o),u=n(6),h=n(4),d=n(18),f=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),b=n(19),j=n(22),v=n.n(j);n(62);var p=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,i=Object(a.useState)([]),s=Object(h.a)(i,2),o=s[0],d=s[1],j=Object(a.useState)(""),p=Object(h.a)(j,2),m=p[0],g=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){m?g(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(c.jsx)(b.a,{videoId:m,opts:{height:"390",witdh:"100%",playerVats:{autoplay:1}}})]})},m="029516b6191a4811d1e33ee19e9182e2",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"discover/tv?api_key=".concat(m,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(63);var O=function(){var e,t,n=Object(a.useState)([]),r=Object(h.a)(n,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(g.fetchNetflixOriginals);case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n                    "http://image.tmdb.org/t/p/original/'.concat(i.backdrop_path,'"\n                )'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsx)("h1",{className:"banner__title",children:i.title||i.name||i.original_name}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner__description",children:(e=i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{className:"banner--fadeBottom"})]})};n(64);var x=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll",null)}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(c.jsx)("img",{className:"nav__logo",src:"https://brand.netflix.com/static/assets/icons/netflix_logo.svg",alt:"Netflix logo"}),Object(c.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Netflix logo"})]})};var _=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x,{}),Object(c.jsx)(O,{}),Object(c.jsx)(p,{title:"Netflix Original",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchNetflixOriginals}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies}),Object(c.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9fb36522.chunk.js.map