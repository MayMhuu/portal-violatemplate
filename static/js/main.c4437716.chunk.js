(this["webpackJsonpsemantic-violatemplate"]=this["webpackJsonpsemantic-violatemplate"]||[]).push([[2],{153:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var a=n(149),r=n(0),c=n(23),o=n(13),i=Object(r.createContext)(),s=i.Provider,u="token",d="auth",l=function(e){var t=e.children,n=Object(c.g)(),i=Object(r.useState)({}),l=Object(a.a)(i,2),b=l[0],j=l[1];Object(r.useEffect)((function(){var e=localStorage.getItem(u),t=localStorage.getItem(d);console.log("tokenXXXX",e),j({token:e?JSON.parse(e):{},auth:t?JSON.parse(t):{}})}),[]);var h=function(){localStorage.removeItem(u),localStorage.removeItem(d),j({}),n.push("/auth/login")},m=function(e){var t=e.auth,n=e.token;localStorage.setItem(d,JSON.stringify(t)),localStorage.setItem(u,JSON.stringify(n)),j({token:n})};return Object(o.jsx)(s,{value:{logout:h,authState:b,isAuthenticated:function(){return!!(b.token&&b.token.token&&b.token.expiredAt)},isExpired:function(){return!!(b.token&&b.token.token&&b.token.expiredAt&&(new Date).getTime()>new Date(b.token.expiredAt).getTime())&&(h(),!0)},setAuthState:function(e){return m(e)}},children:t})}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(152),r=n(90),c=n.n(r),o=n(70),i=n(91),s=n(205),u=n.n(s),d=Object(o.b)("fetchDataList",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,r,o,s,d,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,r=t.body,o=n.fulfillWithValue,s=n.rejectWithValue,d=n.dispatch,e.prev=2,d(Object(i.b)(!0)),e.next=6,u.a.get(a,{params:r});case 6:return l=e.sent,console.log("hitsXXXXXX",l),d(Object(i.b)(!1)),e.abrupt("return",o(l));case 12:return e.prev=12,e.t0=e.catch(2),d(Object(i.b)(!1)),e.abrupt("return",s(e.t0));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}())},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(16),r=n(70),c=n(187),o=n(258),i=n.n(o),s=Object(r.c)({name:"dataList",initialState:{status:"pending",dataList:[],error:null,column:null,direction:null},reducers:{changeSort:function(e,t){e.column===t.payload?Object.assign(e,{column:t.payload,dataList:Object(a.a)(Object(a.a)({},e.dataList),{},{data:Object(a.a)(Object(a.a)({},e.dataList.data),{},{hits:e.dataList.data.hits.slice().reverse()})}),direction:"ascending"===e.direction?"descending":"ascending"}):Object.assign(e,{column:t.payload,dataList:Object(a.a)(Object(a.a)({},e.dataList),{},{data:Object(a.a)(Object(a.a)({},e.dataList.data),{},{hits:i.a.sortBy(e.dataList.data.hits,[t.payload])})}),direction:"ascending"})}},extraReducers:function(e){e.addCase(c.a.pending,(function(e,t){e.error=null})),e.addCase(c.a.fulfilled,(function(e,t){Object.assign(e,{status:"success",dataList:t.payload})})),e.addCase(c.a.rejected,(function(e,t){e.status="rejected",e.error=t.payload}))}}),u=s.actions.changeSort,d=function(e){return e.dataList};t.c=s.reducer},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(16),r=n(149),c=n(0),o=n(223),i=(n(299),n(13)),s=function(e){var t=e.title,n=e.body,a=e.type,r=e.show,c=e.color;return setTimeout((function(){r&&Object(o.toast)({type:a,icon:"undefined",size:"mini",title:t,description:n,time:5e3,color:c,onDismiss:function(){return console.log("you have dismissed this toast")}})}),1e3),Object(i.jsx)(o.SemanticToastContainer,{position:"top-right"})},u=n(210),d=Object(c.createContext)(),l=d.Provider,b=function(e){var t=e.children,n=Object(c.useState)({}),o=Object(r.a)(n,2),d=o[0],b=o[1];return Object(i.jsxs)(l,{value:{addToast:function(e,t,n,r){b(Object(a.a)(Object(a.a)({},d),{},{title:e,message:t,type:n,show:!0,color:r}))}},children:[Object(i.jsx)(u.a.Row,{children:Object(i.jsx)(u.a.Column,{sm:"12",lg:"6",children:Object(i.jsx)(s,{title:d.title,body:d.message,type:d.type,show:d.show,color:d.color})})}),t]})}},263:function(e,t,n){"use strict";n.r(t);n(0);var a=n(329),r=n(210),c=n(13);t.default=function(){return Object(c.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(c.jsx)(a.a,{children:Object(c.jsx)(r.a.Row,{className:"justify-content-center",children:Object(c.jsx)(r.a.Column,{md:"6",children:Object(c.jsxs)("div",{className:"clearfix",children:[Object(c.jsx)("h1",{className:"float-left display-3 mr-4",children:"404"}),Object(c.jsxs)("h4",{className:"pt-3",children:["Oops! You ","'"," re lost."]}),Object(c.jsx)("p",{className:"text-muted float-left",children:"The page you are looking for was not found."})]})})})})})}},287:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(57),o=n.n(c),i=n(16),s=n(152),u=n(90),d=n.n(u),l=n(23),b=n(150),j=(n(287),n(153)),h=n(233),m=n(205),f=n.n(m),O=n(13),g=Object(a.createContext)().Provider,p=Object(l.h)((function(e){var t=e.children,n=Object(a.useContext)(j.a),r=Object(l.g)(),c=f.a.create({baseURL:"https://hn.algolia.com"});c.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(n.authState.token),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){var t=e&&e.response?e.response.status:0;return 401!==t&&403!==t||r.push("/auth/login"),Promise.reject(e)}));var o=c;return Object(O.jsx)(g,{value:{authFetch:o},children:t})})),v=n(263),x=n.p+"static/media/loading.c188f2b9.gif",y=Object(O.jsx)("div",{class:"ui center aligned container",children:Object(O.jsx)("img",{class:"ui centered image",style:{opacity:.2},src:x})}),k=r.a.lazy(Object(s.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4),n.e(10)]).then(n.bind(null,2270));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7),n.e(12)]).then(n.bind(null,2273))})),S=function(){return Object(O.jsx)(r.a.Suspense,{fallback:y,children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/",children:Object(O.jsx)(l.a,{to:"/admin/dashboard"})}),Object(O.jsx)(l.b,{path:"/admin",name:"Home",render:function(e){return Object(O.jsx)(k,Object(i.a)({},e))}}),Object(O.jsx)(l.b,{path:"/auth/login",name:"Login Page",render:function(e){return Object(O.jsx)(w,Object(i.a)({},e))}}),Object(O.jsx)(l.b,{exact:!0,path:"*",name:"404 - Not Found",render:function(e){return Object(O.jsx)(v.default,Object(i.a)({},e))}})]})})},L=function(){return Object(O.jsx)(h.b,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(j.b,{children:Object(O.jsx)(p,{children:Object(O.jsx)(S,{})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,2258)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},N=n(228),C=n(70),P=n(265),X=n.n(P),A=n(46),M=n(230),D=n(91),I=Object(A.b)({dataList:M.c,system:D.a}),B=n(266);n.n(B).a.config();var F=Object(C.a)({reducer:I,middleware:function(e){return e({serializableCheck:!1}).concat(X.a)},devTools:!1});n(321);o.a.render(Object(O.jsx)(N.a,{store:F,children:Object(O.jsx)(L,{})}),document.getElementById("root")),T(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return l}));var a=n(120),r=n(16),c=n(70),o={status:"idle",loading:!1,error:{},smallMenu:!1,activeMenu:null,removeName:"",selectedMenu:[],menuList:[{name:"DashBoard",to:"/admin/dashboard",icon:"home"},{name:"Author",to:"/admin/list",icon:"user"},{name:"Page",to:"/admin/list-Page",icon:"home"}],tabs:[{name:"DashBoard",path:"/admin/dashboard",pathname:"/admin/dashboard"}]},i=Object(c.c)({name:"system",initialState:o,reducers:{toggleMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.smallMenu,t=arguments.length>1?arguments[1]:void 0;return Object(r.a)(Object(r.a)({},e),t.payload)},loadingAction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.payload;return Object(r.a)(Object(r.a)({},e),{},{loading:n})},addToTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.payload,c=Object(a.a)(e.tabs);!c.find((function(e){return e.name===n.name}))&&c.push(n);var i=c.map((function(e){return e.name===n.name?Object.assign({},e,{path:n.path}):e})),s=i.filter((function(t){return e.removeName!==t.name}));return Object(r.a)(Object(r.a)({},e),{},{tabs:Object(a.a)(s)})},removeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.payload,c=Object(a.a)(e.tabs),i=c.filter((function(e){return e.name!==n.name}));return Object(r.a)(Object(r.a)({},e),{},{removeName:n.name,tabs:i.length>0?Object(a.a)(i):[{name:"Dashboard",path:"/admin/dashboard"}]})},clearTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.payload;return Object(r.a)(Object(r.a)({},e),{},{removeName:n.name})},activateMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.payload;return Object(r.a)(Object(r.a)({},e),{},{activeMenu:n})}},extraReducers:{}}),s=function(e){return e.system},u=i.actions,d=u.toggleMenu,l=u.loadingAction;u.clearTab,u.removeTab,u.addToTab,u.activateMenu;t.a=i.reducer}},[[322,3,5]]]);
//# sourceMappingURL=main.c4437716.chunk.js.map