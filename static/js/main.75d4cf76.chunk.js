(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(11),s=c.n(n),a=c(5),r=c(2),i=(c(16),c(1)),j=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("nav",{className:"App__nav nav box",children:Object(i.jsxs)("ul",{className:"nav__list",children:[Object(i.jsx)("li",{className:"nav__item navbar-item is-tab",children:Object(i.jsx)(a.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav__item navbar-item is-tab",children:Object(i.jsx)(a.b,{to:"/people",children:"People"})})]})})})},l=function(){return Object(i.jsx)("h2",{className:"title is-2",children:"Home page"})},b=function(){return Object(i.jsx)("h2",{className:"title is-2",children:"Page not found"})},h=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"title is-2",children:"People page"}),Object(i.jsx)(r.b,{})]})},o=c(10),u=c(7),d=c(4),x=c(6),O=c.n(x),p=c(0),m=function(){var e=Object(u.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=(c(19),c(20),function(e){var t=e.person,c=t.name,n=t.sex,s=t.born,a=t.died,r=t.motherName,j=t.fatherName;return Object(i.jsxs)("tr",{className:"Person",children:[Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:j})]})}),N=function(){var e=Object(p.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(p.useEffect)((function(){!function(){var e=Object(u.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,c=t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName}))||null,father:t.find((function(t){return t.name===e.fatherName}))||null})})),n(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c.length?Object(i.jsxs)("table",{className:"PeopleTable table table is-hoverable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"title is-4",children:"name"}),Object(i.jsx)("th",{className:"title is-4",children:"sex"}),Object(i.jsx)("th",{className:"title is-4",children:"born"}),Object(i.jsx)("th",{className:"title is-4",children:"died"}),Object(i.jsx)("th",{className:"title is-4",children:"mother"}),Object(i.jsx)("th",{className:"title is-4",children:"father"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsx)(f,{person:e})}))})]}):Object(i.jsx)("h3",{children:"People are loading..."})},v=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)(r.e,{children:[Object(i.jsx)(r.c,{path:"/",element:Object(i.jsx)(l,{})}),Object(i.jsx)(r.c,{path:"/people",element:Object(i.jsx)(h,{}),children:Object(i.jsx)(r.c,{path:"",element:Object(i.jsx)(N,{})})}),Object(i.jsx)(r.c,{path:"/home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(b,{})})]})]})};s.a.render(Object(i.jsx)(a.a,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.75d4cf76.chunk.js.map