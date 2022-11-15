"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{434:function(n,e,t){t.r(e),t.d(e,{default:function(){return fn}});var r,a,i,o,s,c,p,l,d,u,x,h,f,g,v,m,Z,j,b,w,y,k,_,S,E,z,P=t(885),U=t(689),I=t(791),W=t(390),C=t(168),A=t(934),M=t(731),O=A.Z.div(r||(r=(0,C.Z)(["\n  display: flex;\n  align-items: flex-start;\n  width: 1000px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  padding: 30px;\n  //   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  //     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  //   &:hover {\n  //     transform: scale(1.03);\n  //     cursor: pointer;\n  //     box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);\n  //     -webkit-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);\n  //     -moz-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);\n  //   }\n"]))),R=A.Z.div(a||(a=(0,C.Z)(["\n  border-radius: 4px;\n  overflow: hidden;\n"]))),T=A.Z.img(i||(i=(0,C.Z)(["\n  width: 360px;\n  height: 450px;\n  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 4px;\n  &:hover {\n    transform: scale(0.6);\n  }\n"]))),V=A.Z.div(o||(o=(0,C.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 0px 30px;\n  p {\n    margin-bottom: 20px;\n  }\n"]))),H=A.Z.p(s||(s=(0,C.Z)([""]))),q=A.Z.h2(c||(c=(0,C.Z)(["\n  font-weight: 700;\n  font-size: 30px;\n  margin-bottom: 20px;\n"]))),B=A.Z.div(p||(p=(0,C.Z)(["\n  display: flex;\n  margin-bottom: 30px;\n  p {\n    margin-right: 20px;\n  }\n"]))),D=A.Z.ul(l||(l=(0,C.Z)(["\n  display: flex;\n  list-style: none;\n  padding: 0px;\n"]))),F=(0,A.Z)(M.OL)(d||(d=(0,C.Z)(["\n  width: 40px;\n  margin-right: 20px;\n  padding: 5px;\n  color: orangered;\n  font-weight: 500;\n  font-size: 20px;\n  border-radius: 4px;\n  outline: none;\n  text-decoration: none;\n  &.active {\n    color: #ffffff;\n    background-color: orangered;\n  }\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: orangered;\n  }\n"]))),G=t(184),K=function(n){var e=n.info,t=e.original_title,r=e.genres,a=e.overview,i=e.poster_path,o=e.popularity,s=e.vote_average,c=r.map((function(n){return n.name})),p=(0,U.TH)();return(0,G.jsxs)(O,{children:[(0,G.jsx)(R,{children:(0,G.jsx)(T,{src:"https://image.tmdb.org/t/p/w300"+i,alt:t})}),(0,G.jsxs)(V,{children:[(0,G.jsx)(q,{children:t}),(0,G.jsx)("p",{children:c.join(" , ")}),(0,G.jsxs)(B,{children:[(0,G.jsxs)("p",{children:["\ud83d\udc41 ",Math.round(o)]}),(0,G.jsxs)("p",{children:["\u2b50\ufe0f",s]})]}),(0,G.jsx)(H,{children:a}),(0,G.jsxs)(D,{children:[(0,G.jsx)("li",{children:(0,G.jsx)(F,{to:"cast",state:p.state,children:"CAST"})}),(0,G.jsx)("li",{children:(0,G.jsx)(F,{to:"review",state:p.state,children:"REVIEW"})})]})]}),(0,G.jsx)(U.j3,{})]})},L=A.Z.div(u||(u=(0,C.Z)(["\n  width: 1000px;\n  margin: 0 auto;\n"]))),J=A.Z.ul(x||(x=(0,C.Z)(["\n  list-style: none;\n"]))),N=A.Z.li(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 30px;\n"]))),Q=A.Z.div(f||(f=(0,C.Z)(["\n  border-radius: 50%;\n  margin-right: 20px;\n  img {\n    border-radius: 50%;\n    height: 80px;\n  }\n"]))),X=A.Z.div(g||(g=(0,C.Z)([""]))),Y=A.Z.p(v||(v=(0,C.Z)(["\n  margin-bottom: 10px;\n"]))),$=A.Z.p(m||(m=(0,C.Z)([""]))),nn=function(n){var e=n.items;return(0,G.jsxs)(L,{children:[(0,G.jsx)("p",{children:"MOVIE REVIEWS"}),(0,G.jsx)(J,{children:e.map((function(n){var e=n.id,t=n.author,r=n.author_details,a=n.content;return(0,G.jsxs)(N,{children:[(0,G.jsx)(Q,{children:(0,G.jsx)("img",{src:r.avatar_path&&r.avatar_path.includes("gravatar")?r.avatar_path.substring(1):"https://image.tmdb.org/t/p/w300"+r.avatar_path&&"./images/no-photo_info",alt:"avatar",width:"80"})}),(0,G.jsxs)(X,{children:[(0,G.jsx)(Y,{children:t}),(0,G.jsx)($,{children:a})]})]},e)}))})]})},en=A.Z.div(Z||(Z=(0,C.Z)([""]))),tn=A.Z.p(j||(j=(0,C.Z)(["\n  margin-top: 24px;\n  color: orangered;\n  font-weight: 500;\n  font-size: 16px;\n  font-family: 'Exo', sans-serif;\n"]))),rn=function(n){var e=n.movieId,t=(0,I.useState)([]),r=(0,P.Z)(t,2),a=r[0],i=r[1],o=(0,I.useState)("idle"),s=(0,P.Z)(o,2),c=s[0],p=s[1];return(0,I.useEffect)((function(){p("pending"),(0,W.jP)(e).then((function(n){i(n.results),p("resolved")})).catch((function(n){p("rejected"),console.log(n)}))}),[e]),(0,G.jsxs)(en,{children:["resolved"===c&&a.length>0&&(0,G.jsx)(nn,{items:a}),0===a.length&&(0,G.jsx)(tn,{children:"We don't have any review for this movie"}),"rejected"===c&&(0,G.jsx)(tn,{children:"Ups... Something went wrong. Please try again later."})]})},an=A.Z.ul(b||(b=(0,C.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding-right: 100px;\n  padding-left: 100px;\n  margin-left: -20px;\n"]))),on=A.Z.li(w||(w=(0,C.Z)(["\n  flex-basis: calc ((100% - 4 * 30px) / 4);\n  margin-left: 20px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),sn=A.Z.img(y||(y=(0,C.Z)(["\n  border-radius: 50%;\n  object-fit: cover;\n  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(0.7);\n    cursor: pointer;\n  }\n"]))),cn=A.Z.div(k||(k=(0,C.Z)(["\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n"]))),pn=A.Z.p(_||(_=(0,C.Z)(["\n  font-family: 'Metal Mania', cursive;\n  &:hover {\n    color: orangered;\n  }\n"]))),ln=function(n){var e=n.items;return(0,G.jsx)(an,{children:e.map((function(n){var e=n.id,t=n.character,r=n.name,a=n.profile_path;return(0,G.jsxs)(on,{children:[(0,G.jsx)("div",{children:(0,G.jsx)(sn,{src:a?"https://image.tmdb.org/t/p/w300"+a:"./images/no-photo_info",alt:"actor",width:"200",height:"200"})}),(0,G.jsxs)(cn,{children:[(0,G.jsx)(pn,{children:t}),(0,G.jsx)("p",{children:r})]})]},e)}))})},dn=A.Z.p(S||(S=(0,C.Z)(["\n  margin-top: 24px;\n  color: orangered;\n  font-weight: 500;\n  font-size: 16px;\n  font-family: 'Exo', sans-serif;\n"]))),un=function(n){var e=n.movieId,t=(0,I.useState)([]),r=(0,P.Z)(t,2),a=r[0],i=r[1],o=(0,I.useState)("idle"),s=(0,P.Z)(o,2),c=s[0],p=s[1];return(0,I.useEffect)((function(){p("pending"),(0,W.zv)(e).then((function(n){i(n.cast),p("resolved")})).catch((function(n){p("rejected"),console.log(n)}))}),[e]),(0,G.jsxs)("div",{children:["resolved"===c&&a.length>0&&(0,G.jsx)(ln,{items:a}),0===a.length&&(0,G.jsx)(dn,{children:"We don't have any information about cast of this movie"}),"rejected"===c&&(0,G.jsx)("p",{children:"Ups... Something went wrong. Please try again later."})]})},xn=A.Z.div(E||(E=(0,C.Z)(["\n  padding: 50px 100px;\n  button {\n    width: 100px;\n    padding: 5px;\n    background-color: black;\n    color: orangered;\n    font-weight: 500;\n    font-size: 16px;\n    font-family: 'Exo', sans-serif;\n    border-radius: 4px;\n    border: none;\n    outline: none;\n    &.active {\n      background-color: orangered;\n    }\n    &:hover,\n    &:focus {\n      color: #ffffff;\n      background-color: orangered;\n    }\n  }\n"]))),hn=A.Z.h2(z||(z=(0,C.Z)(["\n  text-align: center;\n  margin-top: 100px;\n"]))),fn=function(){var n=(0,I.useState)(null),e=(0,P.Z)(n,2),t=e[0],r=e[1],a=(0,I.useState)("idle"),i=(0,P.Z)(a,2),o=i[0],s=i[1],c=(0,U.UO)().id,p=(0,U.s0)(),l=(0,U.TH)();(0,I.useEffect)((function(){s("pending"),(0,W.fh)(c).then((function(n){r(n.data),s("resolved")})).catch((function(n){s("rejected"),console.log(n)}))}),[c]);return(0,G.jsxs)(xn,{children:["resolved"===o&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("button",{type:"button",onClick:function(){var n,e;p(null!==(n=null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"GO BACK"}),(0,G.jsx)(K,{info:t})]}),"rejected"===o&&(0,G.jsx)(hn,{children:"Ups... Something went wrong. Please try again later."}),(0,G.jsxs)(U.Z5,{children:[(0,G.jsx)(U.AW,{path:"review",element:(0,G.jsx)(rn,{movieId:c})}),(0,G.jsx)(U.AW,{path:"cast",element:(0,G.jsx)(un,{movieId:c})})]})]})}},390:function(n,e,t){t.d(e,{Df:function(){return p},IR:function(){return d},fh:function(){return x},jP:function(){return v},zv:function(){return f}});var r=t(861),a=t(687),i=t.n(a),o=t(44),s="0d230252106f56106b4162aa542b588d",c="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(c,"/trending/movie/day?api_key=").concat(s,"&language=en-US&page=1"),n.next=4,o.ZP.get(e);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"),n.next=4,o.ZP.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"),n.next=4,o.ZP.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=4,o.ZP.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=4,o.ZP.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=434.1239ce47.chunk.js.map