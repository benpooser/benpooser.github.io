(this["webpackJsonpbenpooser.github.io"]=this["webpackJsonpbenpooser.github.io"]||[]).push([[0],{24:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),c=i(8),a=i.n(c),r=i(3),l=(i(24),i(14)),o=i.n(l),d=i(15),j=i.n(d),u=i(12),m=i.n(u),h=i(0);function b(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(h.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("a",{href:"#intro",className:"logo",children:Object(h.jsx)(m.a,{className:"icon"})}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(o.a,{className:"icon"}),Object(h.jsx)("span",{children:"+1 706 247 2866"})]}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(j.a,{className:"icon"}),Object(h.jsx)("span",{children:"pooserben@gmail.com"})]})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)("div",{className:"hamburger",onClick:function(){return i(!t)},children:[Object(h.jsx)("span",{className:"line1"}),Object(h.jsx)("span",{className:"line2"}),Object(h.jsx)("span",{className:"line3"})]})})]})})}i(31);var g=i(16);function p(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){Object(g.a)(e.current,{showCursor:!0,backDelay:1500,typeSpeed:50,backSpeed:30,strings:["Software Engineer","Georgia Tech Graduate","Coding Enthusiast"]})}),[]),Object(h.jsxs)("div",{className:"intro",id:"intro",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("div",{className:"imgContainer",children:Object(h.jsx)("img",{src:"assets/me_graduation.png",alt:""})})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h2",{children:"Hi There, I'm"}),Object(h.jsx)("h1",{children:"Ben Pooser"}),Object(h.jsx)("h3",{children:Object(h.jsx)("span",{ref:e})})]}),Object(h.jsx)("a",{href:"#skills",children:Object(h.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}i(32);function O(e){var t=e.id,i=e.title,n=e.active,s=e.setSelected;return Object(h.jsx)("li",{className:n?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:i})}i(33);var f=[{id:1,title:"Java",img:"./assets/java.jpeg"},{id:2,title:"Python",img:"./assets/python.jpeg"},{id:3,title:"C++",img:"./assets/cpp.png"},{id:4,title:"SQL",img:"./assets/sql.png"},{id:5,title:"JavaScript",img:"./assets/js.png"},{id:6,title:"Spring Boot",img:"./assets/springboot.png"}],x=[{id:1,title:"AWS",img:"./assets/aws.png"},{id:2,title:"Linux",img:"./assets/linux.jpeg"},{id:3,title:"Docker",img:"./assets/docker.png"},{id:4,title:"React",img:"./assets/react.png"},{id:5,title:"Bitbucket",img:"./assets/bitbucket.png"},{id:6,title:"TensorFlow",img:"./assets/tensorflow.png"}],v=[{id:1,title:"Git",img:"./assets/git.png"},{id:2,title:"Jenkins",img:"./assets/jenkins.png"},{id:3,title:"Agile/Scrum",img:"./assets/agile.png"},{id:4,title:"Zenhub",img:"./assets/zenhub.png"},{id:5,title:"Jira",img:"./assets/jira.png"}],k=[{id:1,title:"Machine Learning",img:"./assets/ml.png"},{id:2,title:"Database Design",img:"./assets/database.png"},{id:3,title:"Computer Networks",img:"./assets/networks.png"},{id:4,title:"Object-Oriented",img:"./assets/oop.png"},{id:5,title:"Datastructures",img:"./assets/datastructures.jpeg"},{id:6,title:"Algorithms",img:"./assets/algorithms.png"}];function w(){var e=Object(n.useState)("featured"),t=Object(r.a)(e,2),i=t[0],s=t[1],c=Object(n.useState)([]),a=Object(r.a)(c,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){switch(i){case"featured":o(f);break;case"web":o(x);break;case"mobile":o(v);break;case"design":o(k);break;default:o(f)}}),[i]),Object(h.jsxs)("div",{className:"portfolio",id:"skills",children:[Object(h.jsx)("h1",{children:"Skills"}),Object(h.jsx)("ul",{children:[{id:"featured",title:"Programming"},{id:"web",title:"Tools & Software"},{id:"mobile",title:"Project Management"},{id:"design",title:"Coursework"}].map((function(e){return Object(h.jsx)(O,{title:e.title,active:i===e.id,setSelected:s,id:e.id})}))}),Object(h.jsx)("div",{className:"container",children:l.map((function(e){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("img",{src:e.img,alt:""}),Object(h.jsx)("h3",{children:e.title})]})}))})]})}i(34);var y=i(17),N=i.n(y),S=i(18),C=i.n(S);function A(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),i=t[0],s=t[1],c=[{id:"1",icon:"./assets/mobile.png",title:"Mobile Application",desc:"Created a mobile application as a team using React Native to develop on both iOS and Android. \nDesigned to prevent food waste by letting users store items in a virtual fridge. \nWon Runner-Up in the Convergence Innovation Competition Fall 2020",img:"./assets/foodsaver.png",link:"https://github.com/jkim3389/FoodSaver"},{id:"2",icon:"./assets/ml-icon.png",title:"Machine Learning Project",desc:"Implemented machine learning techniques to classify breast cancer through scanned images. Used classification techniques such as K-Nearest Neighbors, Neural Networks, Support Vector Machines",img:"./assets/ml_project.png",link:"https://patelkb99.github.io/cs4641-team36.github.io/"},{id:"3",icon:"./assets/networking-icon.png",title:"Networking Project",desc:"Created Python Client and Server script using multi-threading/TCP coding techniques on either sides. Handles multiple clients at a time, receiving and sending information synchronously to other clients",img:"./assets/networking.png",link:"https://github.com/benpooser/networking"}],a=function(e){s("left"===e?i>0?i-1:2:i<c.length-1?i+1:0)};return Object(h.jsxs)("div",{className:"works",id:"works",children:[Object(h.jsx)("h1",{children:"Projects"}),Object(h.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:c.map((function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsxs)("div",{className:"leftContainer",children:[Object(h.jsx)("div",{className:"imgContainer",children:Object(h.jsx)("img",{src:e.icon,alt:""})}),Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("p",{children:e.desc}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:e.link,children:"Project Link"})})]})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(h.jsx)(N.a,{className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(h.jsx)(C.a,{className:"arrow right",alt:"",onClick:function(){return a()}})]})}i(35),i(36);var P=i(10);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var T=n.createElement("g",null,n.createElement("path",{d:"m467 14.292h-422c-24.813 0-45 20.187-45 45v305c0 24.813 20.187 45 45 45h151.198l-13.189 58.416h-63.275v30h272.532v-30h-63.275l-13.189-58.416h151.198c24.813 0 45-20.187 45-45v-305c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v240h-452v-240c0-8.271 6.729-15 15-15zm240.047 365 13.189 58.416h-84.471l13.189-58.416zm181.953-30h-422c-8.271 0-15-6.729-15-15v-35h452v35c0 8.271-6.729 15-15 15z"}),n.createElement("path",{d:"m134.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -61.139 195.981)"}),n.createElement("path",{d:"m234.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -31.85 266.691)"}));function I(e,t){var i=e.title,s=e.titleId,c=M(e,["title","titleId"]);return n.createElement("svg",E({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},c),i?n.createElement("title",{id:s},i):null,T)}var J=n.forwardRef(I);i.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var G=n.createElement("path",{d:"m478.091 132.55-222.091-94.415-221.216 94.018-.874.396c-20.988 10.135-33.981 30.909-33.91 54.216s13.193 44.001 34.244 54.006l48.034 20.096h-1.278v137.793c-12.505 6.763-21 19.992-21 35.206 0 22.091 17.909 40 40 40s40-17.909 40-40c0-14.388-7.6-26.996-19-34.044v-122.756l135 56.479 129.551-54.185c11.972 21.713 22.549 50.553 29.223 79.727-59.217 16.151-112.495 38.673-158.774 67.117-26.608-16.354-55.543-30.739-86.579-43.093-4.305-1.657-8.072-3.043-11.368-4.202 12.99 13.714 21.181 32.001 21.876 52.171 23.22 10.574 44.993 22.426 65.162 35.55l10.909 7.098 10.908-7.098c49.641-32.302 108.838-57.03 175.948-73.499l18.085-4.438-3.138-18.355c-6.488-37.953-19.432-76.702-35.178-106.483l54.263-22.695.868-.388c21.051-10.005 34.172-30.699 34.244-54.006s-12.921-44.082-33.909-54.216zm-17.147 71.919-204.944 85.719-93.771-39.22 133.794-56.787-51.156-21.741-134.203 56.96-59.609-24.932c-6.907-3.439-11.031-10.074-11.055-17.827s4.059-14.412 10.942-17.894l205.058-87.149 205.059 87.15c6.883 3.482 10.966 10.142 10.942 17.894-.024 7.753-4.149 14.388-11.057 17.827z"});function z(e,t){var i=e.title,s=e.titleId,c=B(e,["title","titleId"]);return n.createElement("svg",D({id:"Layer_1",enableBackground:"new 0 0 512.001 512.001",height:512,viewBox:"0 0 512.001 512.001",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},c),i?n.createElement("title",{id:s},i):null,G)}var L=n.forwardRef(z),F=(i.p,[{id:1,title:"Software Engineer - Manhattan Associates",location:"Atlanta, Georgia",description:"Joined the Movers team heading the Putaway component, collaborating with team members overseas. Practice Object-Oriented Programming techniques using Java and Spring Boot, creating JUnit tests. Helped implement the compatibility of multiple items at once in the Putaway component using Agile. Awarded Research & Development Team of the Quarter in April 2021",date:"March 2021 - Today",icon:"work"},{id:2,title:"Georgia Institue of Technology",location:"Atlanta, Georgia",description:"Transferred here to finish my Computer Science degree. Graduated with a 3.85 and Highest Honors. Active in Sigma Nu, and IM sports.",date:"January 2019 - December 2020",icon:"school"},{id:3,title:"DTT Enablement - Chick-fil-A Corporate",location:"Atlanta, Georgia",description:"Joined the Identity and Access Management Team to build automation tools for managing user accounts. Used AWS Lambda and CloudFormation with Python to make API calls in a Jenkins environment. Utilized Splunk to build alerts from SQL queries for deactivating inactive user accounts",date:"June 2020 - July 2020",icon:"work"},{id:4,title:"University of Georgia",location:"Athens, Georgia",description:"College - Attended with a 3.91 GPA before transferring out. Participated in Filipino Student Association, HEROs, and IM Soccer, Flag Football, and Ultimate Frisbee.",date:"August 2017 - December 2018",icon:"school"}]);i(40);function R(){var e={background:"#06D6A0"},t={background:"#f9c74f"};return Object(h.jsxs)("div",{className:"experience",id:"my_journey",children:[Object(h.jsx)("h1",{children:"My Journey"}),Object(h.jsx)(P.VerticalTimeline,{layout:"1-column-left",children:F.map((function(i){var n="work"===i.icon,s=void 0!==i.buttonText&&null!==i.buttonText&&""!==i.buttonText;return Object(h.jsxs)(P.VerticalTimelineElement,{date:i.date,dateClassName:"date",iconStyle:n?e:t,icon:n?Object(h.jsx)(J,{}):Object(h.jsx)(L,{}),children:[Object(h.jsx)("h3",{className:"vertical-timeline-element-title",children:i.title}),Object(h.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:i.location}),Object(h.jsx)("p",{id:"description",children:i.description}),s&&Object(h.jsx)("a",{className:"button ".concat(n?"workButton":"schoolButton"),href:"/",children:i.buttonText})]},i.key)}))})]})}i(41);function H(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(h.jsxs)("div",{className:"contact",id:"contact",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("h2",{children:"Contact."}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Email"}),Object(h.jsx)("textarea",{placeholder:"Message"}),Object(h.jsx)("button",{type:"submit",children:"Send"}),i&&Object(h.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}i(42),i(43);function U(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(h.jsx)("div",{className:"menu "+(t&&"active"),children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#intro",children:"Home"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#skills",children:"Skills"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#works",children:"Works"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#my_journey",children:"My Journey"})}),Object(h.jsx)("li",{onClick:function(){return i(!1)},children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var q=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(b,{menuOpen:i,setMenuOpen:s}),Object(h.jsx)(U,{menuOpen:i,setMenuOpen:s}),Object(h.jsxs)("div",{className:"sections",children:[Object(h.jsx)(p,{}),Object(h.jsx)(w,{}),Object(h.jsx)(A,{}),Object(h.jsx)(R,{}),Object(h.jsx)(H,{})]})]})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.fc4d0892.chunk.js.map