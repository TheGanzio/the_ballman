(this.webpackJsonpnewsproject=this.webpackJsonpnewsproject||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(20),r=n(21),i=n(87),o=n(88),a=n(96),l=n(94),d=(n(64),n(156)),h=n(95),j=n(1),u=function(e){var t=e.title,n=e.description,c=(e.preDescription,e.authorName),s=e.image,r=e.url,i=e.time,o=e.readNext;return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(d.a.Image,{src:s}),Object(j.jsxs)(d.a.Content,{children:[Object(j.jsx)(d.a.Header,{as:"a",href:r,children:t}),Object(j.jsxs)(d.a.Description,{children:[n,Object(j.jsx)(d.a.Description,{as:"a",href:r,children:o})]}),Object(j.jsxs)(d.a.Extra,{children:[Object(j.jsx)(h.a,{icon:"pencil alternate icon",content:"\u0410\u0432\u0442\u043e\u0440: ".concat(c)}),Object(j.jsx)(h.a,{icon:"clock outline icon",content:"\u0414\u0430\u0442\u0430 \u0441\u0442\u0430\u0442\u0442\u0456: ".concat(i)})]})]})]})},p=n(44),b=n.n(p),O=n(57),x=n(155),m=(n(83),function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"fetchPostsHromadske",value:function(){var e=this.props.setPosts;e([]);b.a.get("/ukr").then((function(t){var n=t.data;e(n),console.log("Data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsUnian",value:function(){var e=this.props.setPosts;e([]),b.a.get("/it").then((function(t){var n=t.data;e(n),console.log("Data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsKoresp",value:function(){var e=this.props.setPosts;e([]),b.a.get("/world").then((function(t){var n=t.data;e(n),console.log("Data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsKorona",value:function(){var e=this.props.setPosts;e([]),b.a.get("/korona").then((function(t){var n=t.data;e(n),console.log("Korona data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"fetchPostsExpert",value:function(){var e=this.props.setPosts;e([]),b.a.get("/expert").then((function(t){var n=t.data;e(n),console.log("Expert data has been received!!")})).catch((function(){console.log("Error retrieving data!!!")}))}},{key:"UNSAFE_componentWillMount",value:function(){this.fetchPostsHromadske(),this.props.genre.genre="UKR"}},{key:"genreText",value:function(e){switch(e){case"IT":return"IT \u0442\u0430 \u043d\u0430\u0443\u043a\u0430";case"UKR":return"\u0423\u043a\u0440\u0430\u0457\u043d\u0430";case"COR":return"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441";case"WORLD":return"\u041d\u043e\u0432\u0438\u043d\u0438 \u0441\u0432\u0456\u0442\u0443";case"EXP":return"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"}}},{key:"render",value:function(){var e=this,t=this.props.posts.items;return"UKR"===this.props.genre.genre?Object(j.jsxs)(x.a,{children:[Object(j.jsx)("div",{class:"main"}),Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("h1",{class:"h1",children:"The BellMan"})}),Object(j.jsxs)("div",{class:"ui inverted segment",children:[Object(j.jsx)("h3",{className:"secondHeader",children:this.genreText(this.props.genre.genre)})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"ui compact menu",children:Object(j.jsxs)("div",{class:"ui simple dropdown item",children:["\u0420\u043e\u0437\u0434\u0456\u043b",Object(j.jsx)("i",{class:"dropdown icon"}),Object(j.jsxs)("div",{class:"menu",children:[Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("UKR")&&e.fetchPostsHromadske()},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("IT")&&e.fetchPostsUnian()},children:"\u0406\u0422"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("WORLD")&&e.fetchPostsKoresp()},children:"\u0421\u0432\u0456\u0442"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("COR")&&e.fetchPostsKorona()},children:"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("EXP")&&e.fetchPostsExpert()},children:"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"})]})]})})}),Object(j.jsx)(d.a.Group,{divided:!0,children:t.map((function(e,t){var n=e.url,c=e.title,s=e.description,r=e.preDescription,i=e.authorName,o=e.image,a=e.time,l=e.readNext;return Object(j.jsx)(u,{readNext:l,time:a,url:n,title:c,preDescription:"".concat(r.substring(0,540)),description:"".concat(s.substring(0,540)),authorName:i,image:o},t)}))})]}):"IT"===this.props.genre.genre?Object(j.jsxs)(x.a,{children:[Object(j.jsx)("div",{class:"main"}),Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("h1",{class:"h1",children:"The BellMan"})}),Object(j.jsxs)("div",{className:"ui inverted segment",children:[Object(j.jsx)("h3",{className:"secondHeader",children:this.genreText(this.props.genre.genre)})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"ui compact menu",children:Object(j.jsxs)("div",{class:"ui simple dropdown item",children:["\u0420\u043e\u0437\u0434\u0456\u043b",Object(j.jsx)("i",{class:"dropdown icon"}),Object(j.jsxs)("div",{class:"menu",children:[Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("UKR")&&e.fetchPostsHromadske()},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("IT")&&e.fetchPostsUnian()},children:"\u0406\u0422"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("WORLD")&&e.fetchPostsKoresp()},children:"\u0421\u0432\u0456\u0442"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("COR")&&e.fetchPostsKorona()},children:"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("EXP")&&e.fetchPostsExpert()},children:"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"})]})]})})}),Object(j.jsx)(d.a.Group,{divided:!0,children:t.map((function(e,t){var n=e.url,c=e.title,s=e.description,r=e.preDescription,i=e.authorName,o=e.image,a=e.time,l=e.readNext;return Object(j.jsx)(u,{time:a,readNext:l,url:n,title:c,preDescription:"".concat(r.substring(0,540)),description:"".concat(s.substring(0,540)),authorName:i,image:o},t)}))})]}):"WORLD"===this.props.genre.genre?Object(j.jsxs)(x.a,{children:[Object(j.jsx)("div",{class:"main"}),Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("h1",{class:"h1",children:"The BellMan"})}),Object(j.jsxs)("div",{className:"ui inverted segment",children:[Object(j.jsx)("h3",{className:"secondHeader",children:this.genreText(this.props.genre.genre)})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"ui compact menu",children:Object(j.jsxs)("div",{class:"ui simple dropdown item",children:["\u0420\u043e\u0437\u0434\u0456\u043b",Object(j.jsx)("i",{class:"dropdown icon"}),Object(j.jsxs)("div",{class:"menu",children:[Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("UKR")&&e.fetchPostsHromadske()},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("IT")&&e.fetchPostsUnian()},children:"\u0406\u0422"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("WORLD")&&e.fetchPostsKoresp()},children:"\u0421\u0432\u0456\u0442"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("COR")&&e.fetchPostsKorona()},children:"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("EXP")&&e.fetchPostsExpert()},children:"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"})]})]})})}),Object(j.jsx)(d.a.Group,{divided:!0,children:t.map((function(e,t){var n=e.url,c=e.title,s=e.description,r=e.preDescription,i=e.authorName,o=e.image,a=e.time,l=e.readNext;return Object(j.jsx)(u,{time:a,readNext:l,url:n,title:c,preDescription:"".concat(r.substring(0,540)),description:"".concat(s.substring(0,540)),authorName:i,image:o},t)}))})]}):"COR"===this.props.genre.genre?Object(j.jsxs)(x.a,{children:[Object(j.jsx)("div",{class:"main"}),Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("h1",{class:"h1",children:"The BellMan"})}),Object(j.jsxs)("div",{className:"ui inverted segment",children:[Object(j.jsx)("h3",{className:"secondHeader",children:this.genreText(this.props.genre.genre)})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"ui compact menu",children:Object(j.jsxs)("div",{class:"ui simple dropdown item",children:["\u0420\u043e\u0437\u0434\u0456\u043b",Object(j.jsx)("i",{class:"dropdown icon"}),Object(j.jsxs)("div",{class:"menu",children:[Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("UKR")&&e.fetchPostsHromadske()},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("IT")&&e.fetchPostsUnian()},children:"\u0406\u0422"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("WORLD")&&e.fetchPostsKoresp()},children:"\u0421\u0432\u0456\u0442"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("COR")&&e.fetchPostsKorona()},children:"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("EXP")&&e.fetchPostsExpert()},children:"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"})]})]})})}),Object(j.jsx)(d.a.Group,{divided:!0,children:t.map((function(e,t){var n=e.url,c=e.title,s=e.description,r=e.preDescription,i=e.authorName,o=e.image,a=e.time,l=e.readNext;return Object(j.jsx)(u,{time:a,readNext:l,url:n,title:c,preDescription:"".concat(r.substring(0,540)),description:"".concat(s.substring(0,540)),authorName:i,image:o},t)}))})]}):"EXP"===this.props.genre.genre?Object(j.jsxs)(x.a,{children:[Object(j.jsx)("div",{class:"main"}),Object(j.jsx)("div",{class:"footer",children:Object(j.jsx)("h1",{class:"h1",children:"The BellMan"})}),Object(j.jsxs)("div",{className:"ui inverted segment",children:[Object(j.jsx)("h3",{className:"secondHeader",children:this.genreText(this.props.genre.genre)})," "]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"ui compact menu",children:Object(j.jsxs)("div",{class:"ui simple dropdown item",children:["\u0420\u043e\u0437\u0434\u0456\u043b",Object(j.jsx)("i",{class:"dropdown icon"}),Object(j.jsxs)("div",{class:"menu",children:[Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("UKR")&&e.fetchPostsHromadske()},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("IT")&&e.fetchPostsUnian()},children:"\u0406\u0422"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("WORLD")&&e.fetchPostsKoresp()},children:"\u0421\u0432\u0456\u0442"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("COR")&&e.fetchPostsKorona()},children:"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0456\u0440\u0443\u0441"}),Object(j.jsx)("div",{class:"item",onClick:function(){return e.props.changeGenre("EXP")&&e.fetchPostsExpert()},children:"\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u043d\u0430 \u0434\u0443\u043c\u043a\u0430"})]})]})})}),Object(j.jsx)(d.a.Group,{divided:!0,children:t.map((function(e,t){var n=e.url,c=e.title,s=e.description,r=e.preDescription,i=e.authorName,o=e.image,a=e.time,l=e.readNext;return Object(j.jsx)(u,{time:a,readNext:l,url:n,title:c,preDescription:"".concat(r.substring(0,540)),description:"".concat(s.substring(0,540)),authorName:i,image:o},t)}))})]}):void 0}}]),n}(c.Component)),v=Object(O.b)((function(e){return Object(r.a)({loading:!0},e)}),(function(e){return{setPosts:function(t){return e({type:"SET_POSTS",payload:t})},setStat:function(t){return e({type:"SET_STAT",payload:t})},changeGenre:function(t){return e({type:"CHANGE_GENRE",payload:t})}}}))(m),g=n(47),f=n(92),P=n.n(f),k={items:[]},C={genre:"IT"},N=Object(g.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return Object(r.a)(Object(r.a)({},e),{},{items:t.payload});case"REMOVE":return Object(r.a)({},e);default:return e}},genre:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_GENRE":return Object(r.a)(Object(r.a)({},e),{},{genre:t.payload});default:return e}}}),G=Object(g.c)(N,Object(g.a)(P.a));n(141);Object(s.render)(Object(j.jsx)(O.a,{store:G,children:Object(j.jsx)(v,{})}),document.getElementById("root"))},83:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.5034fd67.chunk.js.map