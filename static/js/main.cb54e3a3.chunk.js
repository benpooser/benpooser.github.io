(this["webpackJsonpbenpooser.github.io"]=this["webpackJsonpbenpooser.github.io"]||[]).push([[0],{26:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(8),r=i.n(a),c=i(6),o=(i(26),i(14)),l=i.n(o),d=i(15),j=i.n(d),m=i(12),u=i.n(m),h=i(16),b=i.n(h),g=i(17),p=i.n(g),O=i(0);function f(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(O.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("a",{href:"#intro",className:"logo",children:Object(O.jsx)(u.a,{className:"icon"})}),Object(O.jsxs)("div",{className:"itemContainer",children:[Object(O.jsx)(l.a,{className:"icon"}),Object(O.jsx)("span",{children:"+1 706 247 2866"})]}),Object(O.jsxs)("div",{className:"itemContainer",children:[Object(O.jsx)(j.a,{className:"icon"}),Object(O.jsx)("span",{children:"pooserben@gmail.com"})]}),Object(O.jsx)("div",{className:"itemContainer",children:Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:"https://www.linkedin.com/in/ben-pooser/",children:Object(O.jsx)(b.a,{className:"icon"})})})}),Object(O.jsx)("div",{className:"itemContainer",children:Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:"https://github.com/benpooser",children:Object(O.jsx)(p.a,{className:"icon"})})})})]}),Object(O.jsx)("div",{className:"right",children:Object(O.jsxs)("div",{className:"hamburger",onClick:function(){return i(!t)},children:[Object(O.jsx)("span",{className:"line1"}),Object(O.jsx)("span",{className:"line2"}),Object(O.jsx)("span",{className:"line3"})]})})]})})}i(33);var v=i(18);function x(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){Object(v.a)(e.current,{showCursor:!0,backDelay:1500,typeSpeed:50,backSpeed:30,strings:["Software Engineer","Georgia Tech Graduate","Coding Enthusiast"]})}),[]),Object(O.jsxs)("div",{className:"intro",id:"intro",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("div",{className:"imgContainer",children:Object(O.jsx)("img",{src:"assets/me_graduation.png",alt:""})})}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("h2",{children:"Hi There, I'm"}),Object(O.jsx)("h1",{children:"Ben Pooser"}),Object(O.jsx)("h3",{children:Object(O.jsx)("span",{ref:e})})]}),Object(O.jsx)("a",{href:"#skills",children:Object(O.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}i(34);function w(e){var t=e.id,i=e.title,n=e.active,s=e.setSelected;return Object(O.jsx)("li",{className:n?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:i})}i(35);var k=[{id:1,title:"Java",img:"./assets/java.jpeg"},{id:2,title:"Python",img:"./assets/python.jpeg"},{id:3,title:"C++",img:"./assets/cpp.png"},{id:4,title:"SQL",img:"./assets/sql.png"},{id:5,title:"JavaScript",img:"./assets/js.png"},{id:6,title:"Spring Boot",img:"./assets/springboot.png"}],y=[{id:1,title:"AWS",img:"./assets/aws.png"},{id:2,title:"Linux",img:"./assets/linux.jpeg"},{id:3,title:"Docker",img:"./assets/docker.png"},{id:4,title:"React",img:"./assets/react.png"},{id:5,title:"Bitbucket",img:"./assets/bitbucket.png"},{id:6,title:"TensorFlow",img:"./assets/tensorflow.png"}],N=[{id:1,title:"Git",img:"./assets/git.png"},{id:2,title:"Jenkins",img:"./assets/jenkins.png"},{id:3,title:"Agile/Scrum",img:"./assets/agile.png"},{id:4,title:"Zenhub",img:"./assets/zenhub.png"},{id:5,title:"Jira",img:"./assets/jira.png"}],S=[{id:1,title:"Machine Learning",img:"./assets/ml.png"},{id:2,title:"Database Design",img:"./assets/database.png"},{id:3,title:"Computer Networks",img:"./assets/networks.png"},{id:4,title:"Object-Oriented",img:"./assets/oop.png"},{id:5,title:"Datastructures",img:"./assets/datastructures.jpeg"},{id:6,title:"Algorithms",img:"./assets/algorithms.png"}];function C(){var e=Object(n.useState)("featured"),t=Object(c.a)(e,2),i=t[0],s=t[1],a=Object(n.useState)([]),r=Object(c.a)(a,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){switch(i){case"featured":l(k);break;case"web":l(y);break;case"mobile":l(N);break;case"design":l(S);break;default:l(k)}}),[i]),Object(O.jsxs)("div",{className:"portfolio",id:"skills",children:[Object(O.jsx)("h1",{children:"Skills"}),Object(O.jsx)("ul",{children:[{id:"featured",title:"Programming"},{id:"web",title:"Tools & Software"},{id:"mobile",title:"Project Management"},{id:"design",title:"Coursework"}].map((function(e){return Object(O.jsx)(w,{title:e.title,active:i===e.id,setSelected:s,id:e.id})}))}),Object(O.jsx)("div",{className:"container",children:o.map((function(e){return Object(O.jsxs)("div",{className:"item",children:[Object(O.jsx)("img",{src:e.img,alt:""}),Object(O.jsx)("h3",{children:e.title})]})}))})]})}i(36);var A=i(19),P=i.n(A),M=i(20),E=i.n(M);function J(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),i=t[0],s=t[1],a=[{id:"1",icon:"./assets/mobile.png",title:"Mobile Application",desc:"Created a mobile application as a team using React Native to develop on both iOS and Android. \nDesigned to prevent food waste by letting users store items in a virtual fridge. \nWon Runner-Up in the Convergence Innovation Competition Fall 2020",img:"./assets/foodsaver.png",link:"https://github.com/jkim3389/FoodSaver"},{id:"2",icon:"./assets/ml-icon.png",title:"Machine Learning Project",desc:"Implemented machine learning techniques to classify breast cancer through scanned images. Used classification techniques such as K-Nearest Neighbors, Neural Networks, Support Vector Machines",img:"./assets/ml_project.png",link:"https://patelkb99.github.io/cs4641-team36.github.io/"},{id:"3",icon:"./assets/networking-icon.png",title:"Networking Project",desc:"Created Python Client and Server script using multi-threading/TCP coding techniques on either sides. Handles multiple clients at a time, receiving and sending information synchronously to other clients",img:"./assets/networking.png",link:"https://github.com/benpooser/networking"}],r=function(e){s("left"===e?i>0?i-1:2:i<a.length-1?i+1:0)};return Object(O.jsxs)("div",{className:"works",id:"works",children:[Object(O.jsx)("h1",{children:"Projects"}),Object(O.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:a.map((function(e){return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"item",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("div",{className:"leftContainer",children:[Object(O.jsx)("div",{className:"imgContainer",children:Object(O.jsx)("img",{src:e.icon,alt:""})}),Object(O.jsx)("h2",{children:e.title}),Object(O.jsx)("p",{children:e.desc}),Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:e.link,children:"Project Link"})})]})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(O.jsx)(P.a,{className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(O.jsx)(E.a,{className:"arrow right",alt:"",onClick:function(){return r()}})]})}i(37),i(38);var T=i(10);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var D=n.createElement("g",null,n.createElement("path",{d:"m467 14.292h-422c-24.813 0-45 20.187-45 45v305c0 24.813 20.187 45 45 45h151.198l-13.189 58.416h-63.275v30h272.532v-30h-63.275l-13.189-58.416h151.198c24.813 0 45-20.187 45-45v-305c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v240h-452v-240c0-8.271 6.729-15 15-15zm240.047 365 13.189 58.416h-84.471l13.189-58.416zm181.953-30h-422c-8.271 0-15-6.729-15-15v-35h452v35c0 8.271-6.729 15-15 15z"}),n.createElement("path",{d:"m134.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -61.139 195.981)"}),n.createElement("path",{d:"m234.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -31.85 266.691)"}));function G(e,t){var i=e.title,s=e.titleId,a=B(e,["title","titleId"]);return n.createElement("svg",I({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},a),i?n.createElement("title",{id:s},i):null,D)}var z=n.forwardRef(G);i.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var R=n.createElement("path",{d:"m478.091 132.55-222.091-94.415-221.216 94.018-.874.396c-20.988 10.135-33.981 30.909-33.91 54.216s13.193 44.001 34.244 54.006l48.034 20.096h-1.278v137.793c-12.505 6.763-21 19.992-21 35.206 0 22.091 17.909 40 40 40s40-17.909 40-40c0-14.388-7.6-26.996-19-34.044v-122.756l135 56.479 129.551-54.185c11.972 21.713 22.549 50.553 29.223 79.727-59.217 16.151-112.495 38.673-158.774 67.117-26.608-16.354-55.543-30.739-86.579-43.093-4.305-1.657-8.072-3.043-11.368-4.202 12.99 13.714 21.181 32.001 21.876 52.171 23.22 10.574 44.993 22.426 65.162 35.55l10.909 7.098 10.908-7.098c49.641-32.302 108.838-57.03 175.948-73.499l18.085-4.438-3.138-18.355c-6.488-37.953-19.432-76.702-35.178-106.483l54.263-22.695.868-.388c21.051-10.005 34.172-30.699 34.244-54.006s-12.921-44.082-33.909-54.216zm-17.147 71.919-204.944 85.719-93.771-39.22 133.794-56.787-51.156-21.741-134.203 56.96-59.609-24.932c-6.907-3.439-11.031-10.074-11.055-17.827s4.059-14.412 10.942-17.894l205.058-87.149 205.059 87.15c6.883 3.482 10.966 10.142 10.942 17.894-.024 7.753-4.149 14.388-11.057 17.827z"});function H(e,t){var i=e.title,s=e.titleId,a=F(e,["title","titleId"]);return n.createElement("svg",L({id:"Layer_1",enableBackground:"new 0 0 512.001 512.001",height:512,viewBox:"0 0 512.001 512.001",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},a),i?n.createElement("title",{id:s},i):null,R)}var U=n.forwardRef(H),q=(i.p,[{id:1,title:"Software Engineer - Microsoft",location:"Atlanta, Georgia",description:"Joined the One Fleet Containers Team under Azure Core",date:"May 2022 - Today",icon:"work"},{id:2,title:"Software Developer - IBM",location:"San Jose, California",description:"Joined the Digital Business Automation team working on the Cloud Pak for Business Automation. Worked in the back-end, learning how to deploy environments through Kubernetes and modifying Yaml files",date:"January 2022 - May 2022",icon:"work"},{id:3,title:"Software Engineer - Manhattan Associates",location:"Atlanta, Georgia",description:"Joined the Movers team heading the Putaway component, collaborating with team members overseas. Practice Object-Oriented Programming techniques using Java and Spring Boot, creating JUnit tests. Helped implement the compatibility of multiple items at once in the Putaway component using Agile. Awarded Research & Development Team of the Quarter in April 2021",date:"March 2021 - January 2022",icon:"work"},{id:4,title:"Georgia Institue of Technology",location:"Atlanta, Georgia",description:"Transferred here to finish my Computer Science degree. Graduated with a 3.85 and Highest Honors. Active in Sigma Nu, and IM sports.",date:"January 2019 - December 2020",icon:"school"},{id:5,title:"DTT Enablement - Chick-fil-A Corporate",location:"Atlanta, Georgia",description:"Joined the Identity and Access Management Team to build automation tools for managing user accounts. Used AWS Lambda and CloudFormation with Python to make API calls in a Jenkins environment. Utilized Splunk to build alerts from SQL queries for deactivating inactive user accounts",date:"June 2020 - July 2020",icon:"work"},{id:6,title:"University of Georgia",location:"Athens, Georgia",description:"College - Attended with a 3.91 GPA before transferring out. Participated in Filipino Student Association, HEROs, and IM Soccer, Flag Football, and Ultimate Frisbee.",date:"August 2017 - December 2018",icon:"school"}]);i(42);function _(){var e={background:"#06D6A0"},t={background:"#f9c74f"};return Object(O.jsxs)("div",{className:"experience",id:"my_journey",children:[Object(O.jsx)("h1",{children:"My Journey"}),Object(O.jsx)(T.VerticalTimeline,{layout:"1-column-left",children:q.map((function(i){var n="work"===i.icon,s=void 0!==i.buttonText&&null!==i.buttonText&&""!==i.buttonText;return Object(O.jsxs)(T.VerticalTimelineElement,{date:i.date,dateClassName:"date",iconStyle:n?e:t,icon:n?Object(O.jsx)(z,{}):Object(O.jsx)(U,{}),children:[Object(O.jsx)("h3",{className:"vertical-timeline-element-title",children:i.title}),Object(O.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:i.location}),Object(O.jsx)("p",{id:"description",children:i.description}),s&&Object(O.jsx)("a",{className:"button ".concat(n?"workButton":"schoolButton"),href:"/",children:i.buttonText})]},i.key)}))})]})}i(43),i(44);function W(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(O.jsx)("div",{className:"menu "+(t&&"active"),children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(){return i(!1)},children:Object(O.jsx)("a",{href:"#intro",children:"Home"})}),Object(O.jsx)("li",{onClick:function(){return i(!1)},children:Object(O.jsx)("a",{href:"#skills",children:"Skills"})}),Object(O.jsx)("li",{onClick:function(){return i(!1)},children:Object(O.jsx)("a",{href:"#works",children:"Works"})}),Object(O.jsx)("li",{onClick:function(){return i(!1)},children:Object(O.jsx)("a",{href:"#my_journey",children:"My Journey"})})]})})}var Q=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),i=t[0],s=t[1];return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(f,{menuOpen:i,setMenuOpen:s}),Object(O.jsx)(W,{menuOpen:i,setMenuOpen:s}),Object(O.jsxs)("div",{className:"sections",children:[Object(O.jsx)(x,{}),Object(O.jsx)(C,{}),Object(O.jsx)(J,{}),Object(O.jsx)(_,{})]})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cb54e3a3.chunk.js.map