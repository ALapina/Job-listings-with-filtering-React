(this.webpackJsonpstatic_job_listings_react=this.webpackJsonpstatic_job_listings_react||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"/images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"/images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"/images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"/images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"/images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"/images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"/images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"/images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"/images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"/images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},15:function(e,t,l){},17:function(e,t,l){"use strict";l.r(t);var o=l(2),a=l(9),n=l.n(a),s=(l(15),l(6)),r=l(8),c=l(1),i=l(0),d=function(e){var t=e.job,l=e.setSelected,o=e.selected,a=t.company,n=t.logo,s=t.featured,d=t.position,u=t.role,m=t.level,b=t.postedAt,g=t.contract,j=t.location,p=t.languages,h=t.tools,x=t.new;return Object(i.jsxs)("section",{className:"bg-white max-w-8xl w-11/12 shadow-block mb-14 sm:mb-10 mx-auto rounded-md flex flex-wrap md:flex-nowrap justify-between items-center border-l-8 ".concat(s?"border-primary":"border-white"),children:[Object(i.jsxs)("div",{className:"flex flex-col sm:flex-row my-6",children:[Object(i.jsx)("div",{className:"ml-6 flex-shrink-0 w-16 sm:w-auto -mt-14 mb-4 sm:mb-0 sm:mt-0",children:Object(i.jsx)("img",{src:"/Job-listings-with-filtering-React"+n,alt:"".concat(a," company logo")})}),Object(i.jsxs)("div",{className:"ml-6",children:[Object(i.jsxs)("div",{className:"flex flex-wrap items-center",children:[Object(i.jsx)("p",{className:"text-primary",children:a}),Object(i.jsxs)("ul",{className:"flex text-white text-xs",children:[Object(i.jsx)("li",{className:"bg-primary rounded-2xl ml-3 ".concat(x?"px-2":"px-0"," ").concat(x?"py-1":"py-0"),children:x?"NEW!":""}),Object(i.jsx)("li",{className:"bg-neutral-400 rounded-2xl ml-3 ".concat(s?"py-1":"py-0"," ").concat(s?"px-2":"px-0"),children:s?"FEATURED":""})]})]}),Object(i.jsx)("h2",{className:"text-lg my-2",children:Object(i.jsx)("a",{className:"hover:text-primary",href:"#top",children:d})}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"flex flex-wrap items-center text-neutral-300 font-medium",children:[Object(i.jsx)("li",{children:b}),Object(i.jsx)("span",{className:"h-1 w-1 rounded-full bg-neutral-300 mx-2"}),Object(i.jsx)("li",{children:g}),Object(i.jsx)("span",{className:"h-1 w-1 rounded-full bg-neutral-300 mx-2"}),Object(i.jsx)("li",{children:j})]})})]})]}),Object(i.jsx)("div",{className:"mx-6 md:mx-0md:mb-0 h-0.5 md:h-0 w-full md:w-0 bg-neutral-300 rounded-full"}),Object(i.jsx)("div",{className:"mt-6 ml-6",children:Object(i.jsxs)("ul",{className:"flex flex-wrap",children:[Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){l(Object(c.a)(Object(c.a)({},o),{},{roles:[u]}))},className:"font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary",children:u})}),Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){l(Object(c.a)(Object(c.a)({},o),{},{levels:[m]}))},className:"font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary",children:m})}),p.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){o.languages.includes(e)||l(Object(c.a)(Object(c.a)({},o),{},{languages:[].concat(Object(r.a)(o.languages),[e])}))},className:"font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary",children:e})},e)})),h.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){o.tools.includes(e)||l(Object(c.a)(Object(c.a)({},o),{},{tools:[].concat(Object(r.a)(o.tools),[e])}))},className:"font-bold bg-neutral-200 rounded-md hover:bg-primary hover:text-white mr-4 mb-4 p-2 text-primary",children:e})},e)}))]})})]})},u=function(e){var t=e.data,l=e.setSelected,o=e.selected,a=t.filter((function(e){return function(e,t){var l=0!==t.roles.length,o=t.roles.includes(e.role),a=0!==t.levels.length,n=t.levels.includes(e.level),s=0!==t.languages.length,r=t.languages.every((function(t){return e.languages.includes(t)})),c=0!==t.tools.length,i=t.tools.every((function(t){return e.tools.includes(t)}));return(!0!==l||!1!==o)&&(!0!==a||!1!==n)&&(!0!==s||!1!==r)&&(!0!==c||!1!==i)}(e,o)})).map((function(e){return Object(i.jsx)(d,{job:e,setSelected:l,selected:o},e.id)}));return Object(i.jsx)("main",{children:a})},m=l(5),b=function(e){var t=e.selected,l=e.setSelected,o=e.selectedFilters;return Object(i.jsxs)("div",{className:"flex justify-between bg-white rounded-md m-auto -mt-10 max-w-8xl w-11/12 shadow-block",children:[Object(i.jsx)("ul",{className:"flex flex-wrap pt-6 pr-6 pl-6",children:function(){for(var e=[],o=function(){var o=Object(s.a)(n[a],2),r=o[0];o[1].forEach((function(o){e.push(Object(i.jsxs)("li",{className:"bg-neutral-200 rounded-md mr-4 mb-4",children:[Object(i.jsx)("span",{className:"p-2 text-primary sm:p-3",children:o}),Object(i.jsx)("button",{onClick:function(){l(Object(c.a)(Object(c.a)({},t),{},Object(m.a)({},r,t[r].filter((function(e){return e!==o})))))},"aria-label":"delete ".concat(o," filter"),className:"p-3 bg-primary text-white rounded-r-md hover:bg-neutral-400",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",children:Object(i.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"})})})]},o))}))},a=0,n=Object.entries(t);a<n.length;a++)o();return e}()}),Object(i.jsx)("button",{onClick:function(){l(o)},className:"self-center font-bold text-neutral-300 mr-5 hover:text-primary hover:underline",children:"Clear"})]})},g=function(e){var t=e.selected,l=e.setSelected,o=e.selectedFilters,a=Object.values(t).every((function(e){return 0===e.length}));return Object(i.jsxs)("header",{className:"mb-14 sm:mb-10",children:[Object(i.jsx)("div",{className:"bg-primary h-36",style:{backgroundImage:"url(".concat("/Job-listings-with-filtering-React/images/bg-header-desktop.svg",")")}}),!a&&Object(i.jsx)(b,{selected:t,setSelected:l,selectedFilters:o})]})},j=function(){return Object(i.jsxs)("div",{className:"attribution text-xs text-center",children:["Challenge by",Object(i.jsx)("a",{className:"text-attribution",href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by",Object(i.jsx)("a",{className:"text-attribution",href:"https://github.com/ALapina",children:"Anna Lapina"}),"."]})},p=l(10),h=function(){var e={roles:[],levels:[],languages:[],tools:[]},t=Object(o.useState)(e),l=Object(s.a)(t,2),a=l[0],n=l[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(g,{selected:a,setSelected:n,selectedFilters:e}),Object(i.jsx)(u,{data:p,selected:a,setSelected:n}),Object(i.jsx)(j,{})]})};n.a.render(Object(i.jsx)(h,{}),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f9f3d921.chunk.js.map