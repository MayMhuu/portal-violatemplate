(this["webpackJsonpsemantic-react"]=this["webpackJsonpsemantic-react"]||[]).push([[9],{2269:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(152),r=n(149),i=n(90),s=n.n(i),o=n(0),l=n(228),u=n(23),j=n(187),b=n(230),h=n(91),d=n(466),f=n(467),O=n(473),p=n(233),m=n(225),g=n(419),x=n(420),v=n(13),y=[{key:"index",label:"No."},{key:"created_at_i",label:"Id_R"},{key:"title",label:"Title_R"},{key:"author",label:"Author_R"},{key:"points",label:"Points_R"},{key:"num_comments",label:"Num Comments_R"},{key:"story_title",label:"Story Title_R"},{key:"created_at",label:"Created At_R"}];t.default=function(){var e=Object(o.useContext)(p.a),t=Object(u.g)(),n=Object(l.b)(),i=new URLSearchParams(t.location.search),k=parseInt(i.get("page"),10)||1,P=parseInt(i.get("itemsPerPage"),10)||5,C=Object(o.useState)({hitsPerPage:P,page:k,query:i}),w=Object(r.a)(C,2),S=w[0],R=w[1],D=Object(l.c)(b.b).error,N=(Object(l.c)(b.b).dataList||[]).data,_=N||{},L=_.hits,E=_.nbPages,q=(_.nbHits,Object(l.c)(h.c).loading);Object(o.useEffect)((function(){null!==D&&e.addToast("ERROR",D,"error")}),[D]),Object(o.useEffect)((function(){n(Object(j.a)({url:d.a.authorList,body:{page:S.hitsPerPage*(S.page-1),hitsPerPage:S.hitsPerPage,query:S.query}}))}),[S]);var z=[{type:"text",name:"query",label:"Search ---"}],Y=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(Object(a.a)(Object(a.a)({},S),{},{hitsPerPage:t,page:1}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(s.a.mark((function e(t,n,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R({hitsPerPage:n,page:t,query:a.search});case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(Object(a.a)(Object(a.a)({},S),{},{currentPage:1,query:t.query}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(Object(a.a)(Object(a.a)({},S),{},{currentPage:1,query:"redux"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=!Object(x.c)(N);return Object(v.jsxs)(v.Fragment,{children:[N&&F?Object(v.jsx)(m.a,{children:Object(v.jsx)(f.a,{onSearchAction:M,onRefreshAction:A,attributes:z})}):Object(v.jsx)(g.a,{count:Object(x.b)(z.length),columnData:Object(x.a)(z.length),className:"skeleton-wrapper"}),N&&!q?Object(v.jsx)(O.a,{listData:L,isLoading:q,currentPage:S.page,columns:y,itemsPerPage:S.hitsPerPage,totalCount:E,fetchDataPerPage:I,onChangeLimit:Y,sizeSelected:!1,searchKey:S.query}):Object(v.jsx)(g.a,{count:S.hitsPerPage,columnData:y.length,selectedPerPage:!0,className:"skeleton-wrapper"})]})}},419:function(e,t,n){"use strict";n(0);var a=n(225),c=n(376),r=n(574),i=(n(570),n(13));t.a=function(e){var t=e.className,n=e.count,s=e.columnData,o=e.selectedPerPage,l=e.size,u=function(){for(var e=[],t=0;t<s;t++)e.push(Object(i.jsx)("td",{children:Object(i.jsx)(r.a,{count:n,style:{marginTop:"25px"},height:l||35})},t));return e};return Object(i.jsx)(i.Fragment,{children:o?Object(i.jsxs)(a.a,{className:t,children:[Object(i.jsx)(r.a,{width:350,height:20,borderRadius:30}),Object(i.jsx)(c.a,{children:u()}),Object(i.jsx)(r.a,{width:600,height:40,borderRadius:10})]}):Object(i.jsx)(a.a,{className:t,children:Object(i.jsx)(c.a,{children:u()})})})}},420:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));n(87),n(43),n(439),n(13);var a=function(e){return!e},c=function(e){return e>4&&e<8?2:e>8?3:1},r=function(e){return e>4?4:e}},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={authorList:"https://hn.algolia.com/api/v1/search"}},467:function(e,t,n){"use strict";var a=n(231),c=n(16),r=n(149),i=n(0),s=n(375),o=n(210),l=n(83),u=(n(468),n(571)),j=(n(569),n(13));t.a=function(e){var t=e.onSearchAction,n=e.onRefreshAction,b=e.attributes,h=e.column,d=Object(i.useState)({}),f=Object(r.a)(d,2),O=f[0],p=f[1],m=function(e){e.target&&p(Object(c.a)(Object(c.a)({},O),{},Object(a.a)({},e.target.name,e.target.value)))},g=function(e,t){var n=t.name,r=t.value;p(Object(c.a)(Object(c.a)({},O),{},Object(a.a)({},n,r)))},x=function(e,t){var n=t||e.target,r=n.name,i=n.value;e.target&&p(Object(c.a)(Object(c.a)({},O),{},Object(a.a)({},r,i)))};return Object(j.jsx)(s.a,{children:Object(j.jsxs)(o.a,{columns:h,container:!0,doubling:!0,stackable:!0,children:[b.map((function(e,t){return"select"===e.type?Object(j.jsx)(o.a.Column,{children:Object(j.jsx)(s.a.Dropdown,{search:!0,placeholder:e.label,fluid:!0,name:e.name,multiple:e.multi||!1,selection:!0,options:e.option,onChange:x,value:e.multi?O[e.name]||[]:O[e.name]||""},t)}):"date"===e.type?Object(j.jsx)(u.a,{className:"three wide",id:e.name,name:e.name,placeholder:e.label,format:"YYYY-MM-DD",formatOptions:"YYYY-MM-DD",onChange:g,value:O[e.name]||"",type:"range"},t):Object(j.jsx)(o.a.Column,{children:Object(j.jsx)(s.a.Input,{fluid:!0,range:"true",placeholder:e.label,name:e.name,type:e.type,value:O[e.name]||"",onChange:m},t)})})),Object(j.jsxs)(o.a.Column,{children:[Object(j.jsx)(l.a,{className:"btn_search",size:"small",type:"submit",style:{background:"#0d787a",color:"white"},icon:"search",content:"Search",onClick:function(e){e.preventDefault();var n=Object(c.a)({},O);t(n)}}),Object(j.jsx)(l.a,{className:"btn_search",size:"small",type:"submit",icon:"refresh",content:"Refresh",onClick:function(e){e.preventDefault(),p({}),n({})}})]})]})})}},468:function(e,t,n){},470:function(e,t,n){},473:function(e,t,n){"use strict";var a=n(120),c=n(149),r=n(0),i=n.n(r),s=n(119),o=n(43),l=n(381),u=n(226),j=n(83),b=n(376),h=n(379),d=n(225),f=n(374);function O(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}var p=n(23),m=n(228),g=(n(470),n(13)),x=[{key:"0",value:5,text:"5"},{key:"1",value:10,text:"10"}],v=function(e){var t=e.limit,n=e.onChangeLimit;return Object(g.jsxs)(i.a.Fragment,{children:["Selected per page : "," ",Object(g.jsx)(s.a,{inline:!1,options:x,value:t,onChange:function(e,t){var a=t.value;n(a)}})]})},y=n(230),k=n(439),P=n.n(k),C=n(419);t.a=function(e){var t=e.listData,n=e.columns,i=e.onChangeLimit,x=e.isLoading,k=e.searchKey,w=e.fetchDataPerPage,S=e.renderBodyRow,R=e.actionList,D=e.key,N=e.totalCount,_=e.sizeSelected,L=e.itemsPerPage,E=e.currentPage,q=Object(p.g)(),z=Object(m.b)(),Y=n.map((function(e){return e.key})),I=Object(r.useState)(Y),M=Object(c.a)(I,2),A=M[0],F=M[1],H=Object(r.useState)(!1),T=Object(c.a)(H,2),U=T[0],B=T[1],K=Object(m.c)((function(e){return e.dataList.column||null})),G=Object(m.c)((function(e){return e.dataList.direction||null})),J=N&&Math.ceil(N/L),Z=Object(r.useState)(n),V=Object(c.a)(Z,2),$=V[0],Q=V[1],W=[],X=[];Object(r.useEffect)((function(){E&&L&&q.push(encodeURI("?page=".concat(E,"&itemsPerPage=").concat(L,"&search?query=").concat(k)))}),[E,L,k]),$.length>0&&$.forEach((function(e){e.key&&e.key.includes("hidden")?(W.push({key:e.key,label:"actions"===e.key?Object(g.jsx)(s.a,{item:!0,simple:!0,icon:Object(g.jsx)(o.a,{name:"columns",link:!0,onClick:function(){return B(!U)}}),children:Object(g.jsx)(l.a,{open:U,size:"mini",style:{padding:"15px",fontSize:"3rem"},children:Object(g.jsxs)(s.a.Menu,{children:[n.filter((function(e){return"index"!==e.key&&"actions"!==e.key})).map((function(e){var t=e.key,n=e.label;return Object(g.jsx)(s.a.Item,{children:Object(g.jsx)(u.a,{size:"small",label:O(n),value:t,defaultChecked:!!A.includes(t),onChange:function(e,t){return ee(e,t)}})},t)})),Object(g.jsxs)(s.a.Item,{children:[Object(g.jsx)(j.a,{content:"Confirm",variant:"outline",shape:"square",size:"medium",style:{backgroundColor:"#0d787a",color:"white"},floated:"right",onClick:function(e){te(e)}}),Object(g.jsx)(j.a,{content:"Cancel",variant:"outline",shape:"square",size:"medium",floated:"right",onClick:function(){B(!U)}})]})]})})}):O(e.label),colSpan:e.colSpan,rowSpan:e.rowSpan}),e.childHeader&&e.childHeader.length>0&&X.push.apply(X,Object(a.a)(e.childHeader))):W.push({key:e.key,label:e.label,colSpan:e.colSpan?e.colSpan:0,rowSpan:e.rowSpan?e.rowSpan:0})}));var ee=function(e,t){var n=t.value,c=(t.label,t.checked);F(c?[].concat(Object(a.a)(A),[n]):A.filter((function(e){return e!==n})))},te=function(e){var t=n.filter((function(e){return A.includes(e.key)}));t.length>0&&(Q(t),B(!U))},ne=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a.Row,{children:W.map((function(e,t){return Object(g.jsx)(b.a.HeaderCell,{colSpan:e.colSpan,rowSpan:e.rowSpan,sorted:K===e.label?G:null,onClick:function(){return function(e){z(Object(y.a)(e.key))}(e)},children:e.label},t)}))},1),Object(g.jsx)(b.a.Row,{children:X.map((function(e,t){return Object(g.jsx)(b.a.HeaderCell,{children:e.label},t)}))},2)]})},ae=S||function(e,t){return W.map((function(n,a){var c=n.key;if("index"===c)return Object(g.jsxs)(b.a.Cell,{children:[" ",L&&E?t+1+L*(E-1):t+1]},a);if("actions"===c)return Object(g.jsx)(b.a.Cell,{children:Object(g.jsxs)(j.a.Group,{basic:!0,size:"small",className:"btn_gp",children:[R&&R.filter((function(e){return"export"!==e.name})).map((function(t,n){return Object(g.jsx)(h.a,{trigger:Object(g.jsx)(j.a,{icon:!0,onClick:function(){return t.action(e)},children:Object(g.jsx)(o.a,{name:t.icon})},n),children:t.label})})),R&&R.filter((function(e){return"export"===e.name})).map((function(t,n){return Object(g.jsx)(h.a,{trigger:Object(g.jsx)(j.a,{icon:!0,children:Object(g.jsx)("a",{href:e.reportUrl,download:!0,children:Object(g.jsx)(o.a,{name:t.icon})})},n),children:t.label})}))]})},a);var r=P()(e[c],P.a.ISO_8601,!0).isValid();return Object(g.jsx)(b.a.Cell,{children:r?P()(new Date(e[c])).format("YYYY-MM-DD HH:mm"):e[c]},a)}))};return Object(g.jsx)(g.Fragment,{children:x?Object(g.jsx)(C.a,{count:L,columnData:n,selectedPerPage:!0,className:"skeleton-wrapper"}):Object(g.jsxs)(d.a,{children:[Object(g.jsxs)("div",{className:"select-text",hidden:_,children:[Object(g.jsx)(v,{limit:L,onChangeLimit:i}),"Total count: ",N||0]}),t&&t?Object(g.jsxs)("div",{className:"scroll-table",children:[Object(g.jsx)(b.a,{celled:!0,unstackable:!0,headerRow:ne,renderBodyRow:ae,tableData:t},D),Object(g.jsx)(f.a,{totalPages:J,activePage:E,onPageChange:function(e,t){return function(e,t){var n={skip:L*(t.activePage-1),limit:L,search:k};w(t.activePage,L,n)}(0,t)}},D)]}):Object(g.jsx)("div",{className:"scroll-table",children:Object(g.jsx)(b.a,{celled:!0,unstackable:!0,headerRow:ne},D)})]})})}},545:function(e,t,n){var a={"./bg-BG.json":546,"./ca-ES.json":547,"./cs-CZ.json":548,"./de-DE.json":549,"./el-GR.json":550,"./en-US.json":469,"./es-ES.json":551,"./et-EE.json":552,"./fi-FI.json":553,"./fr-FR.json":554,"./he-IL.json":555,"./it-IT.json":556,"./ja-JP.json":557,"./ko-KR.json":558,"./nb-NO.json":559,"./nn-NO.json":560,"./pl-PL.json":561,"./pt-BR.json":562,"./ro-RO.json":563,"./ru-RU.json":564,"./sk-SK.json":565,"./sv-SE.json":566,"./tr-TR.json":567,"./zh-CN.json":568};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=545}}]);
//# sourceMappingURL=9.d4868345.chunk.js.map