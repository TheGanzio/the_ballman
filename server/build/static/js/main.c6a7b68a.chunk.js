(this.webpackJsonpnewsproject=this.webpackJsonpnewsproject||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(20),s=n(21),o=n(87),a=n(88),i=n(97),l=n(95),u=(n(64),n(157)),h=n(96),d=n(2),j=function(e){var t=e.title,n=e.description,c=(e.preDescription,e.authorName),r=e.image,s=e.url,o=e.time,a=e.readNext;return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(u.a.Image,{src:r}),Object(d.jsxs)(u.a.Content,{children:[Object(d.jsx)(u.a.Header,{as:"a",href:s,children:t}),Object(d.jsxs)(u.a.Description,{children:[n,Object(d.jsx)(u.a.Description,{as:"a",href:s,children:a})]}),Object(d.jsxs)(u.a.Extra,{children:[Object(d.jsx)(h.a,{icon:"pencil alternate icon",content:"\u0410\u0432\u0442\u043e\u0440: ".concat(c)}),Object(d.jsx)(h.a,{icon:"clock outline icon",content:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0430\u0442\u0442\u0456: ".concat(o)})]})]})]})},p=n(29),f=n.n(p),v=n(91),O=n.n(v),b=n(57),g=n(156),x=(n(83),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"fetchPostsHromadske",value:function(){var e=this.props.setPosts;e([]);f.a.get("/ukr").then((function(t){var n=t.data;e(n),console.log("Data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsUnian",value:function(){var e=this.props.setPosts;e([]),f.a.get("/it").then((function(t){var n=t.data;e(n),console.log("Data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsKoresp",value:function(){var e=this.props.setPosts;e([]),f.a.get("/world").then((function(t){var n=t.data;e(n),console.log("Data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsKorona",value:function(){var e=this.props.setPosts;e([]),f.a.get("/korona").then((function(t){var n=t.data;e(n),console.log("Korona data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsExpert",value:function(){var e=this.props.setPosts;e([]),f.a.get("/expert").then((function(t){var n=t.data;e(n),console.log("Expert data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsDonnu",value:function(){var e=this.props.setPosts;e([]),f.a.get("/donnu").then((function(t){var n=t.data;e(n),console.log("Donnu data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsATO",value:function(){var e=this.props.setPosts;e([]),f.a.get("/ato").then((function(t){var n=t.data;e(n),console.log("ATO data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"UNSAFE_componentWillMount",value:function(){this.fetchPostsHromadske(),this.props.genre.genre="UKR"}},{key:"genreText",value:function(e){switch(e){case"IT":return"IT \u0442\u0430 \u043d\u0430\u0443\u043a\u0430";case"UKR":return"\u0423\u043a\u0440\u0430\u0457\u043d\u0430";case"COR":return"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441";case"WORLD":return"\u041d\u043e\u0432\u0438\u043d\u0438 \u0441\u0432\u0456\u0442\u0443";case"EXP":return"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430";case"DONNU":return"\u0414\u041e\u041d\u041d\u0423 \u0456\u043c. \u0412\u0430\u0441\u0438\u043b\u044f \u0421\u0442\u0443\u0441\u0430";case"ATO":return"\u0412\u0456\u0439\u043d\u0430"}}},{key:"render",value:function(){var e=this,t=this.props.posts.items;return Object(d.jsxs)(g.a,{children:[Object(d.jsx)("div",{class:"main"}),Object(d.jsx)("div",{class:"footer",children:Object(d.jsx)("h1",{class:"h1",children:"The BellMan"})}),Object(d.jsxs)("div",{class:"ui inverted segment",children:[Object(d.jsx)("h3",{className:"secondHeader",children:this.genreText(this.props.genre.genre)})," "]}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{class:"ui compact menu",children:Object(d.jsxs)("div",{class:"ui simple dropdown item",children:["\u0420\u043e\u0437\u0434\u0456\u043b",Object(d.jsx)("i",{class:"dropdown icon"}),Object(d.jsxs)("div",{class:"menu",children:[Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("UKR")&&e.fetchPostsHromadske()&&O()(".menu").hide()},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"}),Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("ATO")&&e.fetchPostsATO()},children:"\u0412\u0456\u0439\u043d\u0430"}),Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("WORLD")&&e.fetchPostsKoresp()},children:"\u0421\u0432\u0456\u0442"}),Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("COR")&&e.fetchPostsKorona()},children:"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441"}),Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("DONNU")&&e.fetchPostsDonnu()},children:"\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0438\u0439 \u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0456\u043c. \u0412\u0430\u0441\u0438\u043b\u044f \u0421\u0442\u0443\u0441\u0430"}),Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("IT")&&e.fetchPostsUnian()},children:"\u0406\u0422 \u0442\u0430 \u043d\u0430\u0443\u043a\u0430"}),Object(d.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("EXP")&&e.fetchPostsExpert()},children:"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"})]})]})})}),Object(d.jsx)(u.a.Group,{divided:!0,children:t.map((function(e,t){var n=e.url,c=e.title,r=e.description,s=e.preDescription,o=e.authorName,a=e.image,i=e.time,l=e.readNext;return Object(d.jsx)(j,{readNext:l,time:i,url:n,title:c,preDescription:"".concat(s.substring(0,540)),description:"".concat(r.substring(0,540)),authorName:o,image:a},t)}))})]})}}]),n}(c.Component)),m=Object(b.b)((function(e){return Object(s.a)({loading:!0},e)}),(function(e){return{setPosts:function(t){return e({type:"SET_POSTS",payload:t})},setStat:function(t){return e({type:"SET_STAT",payload:t})},changeGenre:function(t){return e({type:"CHANGE_GENRE",payload:t})}}}))(x),P=n(47),E=n(93),k=n.n(E),y={items:[]},T={genre:"IT"},N=Object(P.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return Object(s.a)(Object(s.a)({},e),{},{items:t.payload});case"REMOVE":return Object(s.a)({},e);default:return e}},genre:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_GENRE":return Object(s.a)(Object(s.a)({},e),{},{genre:t.payload});default:return e}}}),D=Object(P.c)(N,Object(P.a)(k.a));n(142);Object(r.render)(Object(d.jsx)(b.a,{store:D,children:Object(d.jsx)(m,{})}),document.getElementById("root"))},83:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.c6a7b68a.chunk.js.map