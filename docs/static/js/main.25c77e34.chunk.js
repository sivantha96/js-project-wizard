(this["webpackJsonpjs-project-wizard-web"]=this["webpackJsonpjs-project-wizard-web"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(51),r=a.n(n),o=(a(153),a(132)),i=a(10),l=a(78),s=a(12),j=(a(154),a.p+"static/media/logo.1e29a291.svg"),d=a(187),u=a(182),h=a(184);var b="rn",p="express",O="none",g="mongo",f=[{key:p,text:"Express",value:p},{key:b,text:"React Native",value:b}],m=[{key:O,text:"None",value:O},{key:g,text:"MongoDB",value:g}],v=/^[A-Z][a-zA-Z]*$/,x=/^[a-zA-Z-]*$/,w=function(e,t){return e?t===b?v.test(e)?null:"Project name should be in valid Camel Case format. eg: ProjectName":x.test(e)?null:"Project name should be in valid Dash Case format. eg: project-name":"Project name is required"},k=function(e){return e===b?"MyAwesomeApp":"my-awesome-app"},N=a(2),y=function(e){var t=e.projectType,a=e.onChange,n=Object(c.useState)({value:"",error:null,placeholder:k(t),changed:!1}),r=Object(s.a)(n,2),o=r[0],i=r[1],l=Object(c.useState)({value:"",error:null}),j=Object(s.a)(l,2),d=j[0],u=j[1],b=Object(c.useState)({value:"",error:null}),p=Object(s.a)(b,2),O=p[0],g=p[1];Object(c.useEffect)((function(){t?i({value:o.value,error:o.changed?w(o.value,t):null,placeholder:k(t),changed:o.changed}):(i({value:"",error:null,placeholder:k(t),changed:!1}),u({value:"",error:null}),g({value:"",error:null}))}),[t]),Object(c.useEffect)((function(){var e=!o.error&&!d.error&&!O.error;a({isValid:e,name:o.value,author:d.value,description:O.value})}),[o,d,O,a]);return console.log("RENDERED DETAILS VIEW"),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(h.a.Group,{widths:"equal",children:[Object(N.jsx)(h.a.Input,{fluid:!0,label:"Project Name",placeholder:o.placeholder,value:o.value,onChange:function(e,a){var c=a.value;i({value:c,error:o.changed?w(c,t):null,placeholder:o.placeholder,changed:!0})},error:!!o.error&&{content:o.error,pointing:"above"}}),Object(N.jsx)(h.a.Input,{fluid:!0,label:"Author",placeholder:"John Doe",value:d.value,onChange:function(e,t){var a=t.value;u({value:a,error:a?null:"Author is required"})},error:!!d.error&&{content:d.error,pointing:"above"}})]}),Object(N.jsx)(h.a.TextArea,{label:"Project Description",placeholder:"Add a brief description about your project",value:O.value,onChange:function(e,t){var a=t.value;g({value:a,error:a?null:"Project Description is required"})},error:!!O.error&&{content:O.error,pointing:"above"}})]})},S=Object(c.memo)(y),C=function(e){var t=e.onChange,a=Object(c.useState)("none"),n=Object(s.a)(a,2),r=n[0],o=n[1],i=Object(c.useState)({value:"",error:null}),l=Object(s.a)(i,2),j=l[0],d=l[1];Object(c.useEffect)((function(){var e=!j.error;t({isValid:e,dataBaseType:r,dataBaseName:j.value})}),[r,j,t]);return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(h.a.Group,{widths:"equal",children:[Object(N.jsx)(h.a.Select,{fluid:!0,label:"Database",options:m,value:r,onChange:function(e,t){var a=t.value;o(a)}}),Object(N.jsx)(h.a.Input,{disabled:"none"===r,fluid:!0,label:"Database Name",placeholder:"express-app-db",value:j.value,onChange:function(e,t){var a=t.value;d({value:a,error:a?null:"Database name is required"})},error:!!j.error&&{content:j.error,pointing:"above"}})]})})},T=Object(c.memo)(C),V=a(183),P=a(75),A=a(190),E=function(e){var t=e.onChange,a=Object(c.useState)(!1),n=Object(s.a)(a,2),r=n[0],o=n[1],i=Object(c.useState)(!1),l=Object(s.a)(i,2),j=l[0],d=l[1],u=Object(c.useState)(!1),b=Object(s.a)(u,2),p=b[0],O=b[1],g=Object(c.useState)(!1),f=Object(s.a)(g,2),m=f[0],v=f[1];return Object(c.useEffect)((function(){t({isValid:r||j||p,hasReactNavigation:r,hasRedux:j,hasVectorIcons:p,hasTheming:m})}),[t,m,p,r,j]),Object(N.jsxs)("div",{className:"mt-10 mb-5",children:[Object(N.jsx)(h.a.Field,{className:"text-xl ",children:Object(N.jsx)("label",{children:"Select at least one feature from below to be included in your project"})}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["React Navigation   ",Object(N.jsx)(V.a,{on:"click",content:Object(N.jsxs)("span",{children:["This will include all the basic dependencies for a stack navigator, navigation utility functions, clean project structure the initial configuration recommended by the"," ",Object(N.jsx)("a",{href:"https://reactnavigation.org",target:"_blank",children:"Official React Navigation docs"})]}),trigger:Object(N.jsx)(P.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(A.a,{toggle:!0,checked:r,onChange:function(e,t){var a=t.checked;o(a)}})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2 align-center",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["Redux   ",Object(N.jsx)(V.a,{on:"click",content:Object(N.jsxs)("span",{children:["This will include"," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/redux",target:"_blank",children:"redux v4.1.2"}),","," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/react-redux",target:"_blank",children:"react-redux v7.2.6"}),","," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/redux-saga",target:"_blank",children:"redux-saga v1.1.3"}),", a clean project structure and initial configurations"]}),trigger:Object(N.jsx)(P.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(A.a,{toggle:!0,checked:j,onChange:function(e,t){var a=t.checked;d(a)}})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["React Native Vector Icons   ",Object(N.jsx)(V.a,{on:"click",content:Object(N.jsxs)("span",{children:["This will include the"," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/react-native-vector-icons",target:"_blank",children:"react-native-vector-icons v9.1.0"})," ","package and the configuration to work out of the box"]}),trigger:Object(N.jsx)(P.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(A.a,{toggle:!0,checked:p,onChange:function(e,t){var a=t.checked;O(a)}})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["Theming   ",Object(N.jsx)(V.a,{on:"click",content:Object(N.jsx)("span",{children:"This will include the folder structure for clean theming"}),trigger:Object(N.jsx)(P.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(A.a,{toggle:!0,checked:m,onChange:function(e,t){var a=t.checked;v(a)}})]})]})},R=Object(c.memo)(E),D=a(188),B=a(185),I=function(e){var t=e.heading,a=e.code;return Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)(d.a,{as:"h5",color:"green",children:t}),Object(N.jsxs)(D.a,{className:"flex justify-between items-center mt-3 font-mono",inverted:!0,children:[a,Object(N.jsx)(V.a,{content:"Copied!",on:"click",pinned:!0,trigger:Object(N.jsx)(B.a,{onClick:function(){navigator.clipboard.writeText(a)},icon:!0,children:Object(N.jsx)(P.a,{name:"copy"})})})]})]})};var z=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!1),o=Object(s.a)(r,2),i=o[0],O=o[1],g=Object(c.useState)({isValid:!1,name:"",author:"",description:""}),m=Object(s.a)(g,2),v=m[0],x=m[1],w=Object(c.useState)({isValid:!1,dataBaseType:"none",dataBaseName:""}),k=Object(s.a)(w,2),y=k[0],C=k[1],V=Object(c.useState)({isValid:!1,hasReactNavigation:!1,hasRedux:!1,hasVectorIcons:!1,hasTheming:!1}),P=Object(s.a)(V,2),A=P[0],E=P[1],D=Object(c.useState)(null),B=Object(s.a)(D,2),z=B[0],F=B[1],q=function(e){var t=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=a.length,n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*c));return t}(6);F(t);var a=document.createElement("a");a.href=window.URL.createObjectURL(new Blob([e])),a.download="".concat(t,".js"),document.body.appendChild(a),a.click()};return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("header",{className:"header",children:Object(N.jsx)(d.a,{as:"h2",image:j,content:"JS Project Wizard"})}),Object(N.jsx)("main",{className:"content",children:Object(N.jsxs)(u.a,{children:[Object(N.jsx)(I,{heading:"If you are here the first time, run the following command before getting started to install the dependencies",code:"npm install --prefix $HOME async"}),Object(N.jsxs)(h.a,{onSubmit:function(){var e,t;if(v.isValid)switch(O(!0),a){case p:if(!y.isValid)return;e=Object(l.a)(Object(l.a)({},v),{},{dbType:y.dataBaseType,dbName:y.dataBaseName}),(t=e,new Promise((function(e,a){var c="".concat("https://js-project-wizard-api.herokuapp.com/api","/express");fetch(c,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){t.text().then((function(t){e(t)}))})).catch((function(e){a(e)}))}))).then((function(e){q(e),n(null),O(!1)})).catch((function(e){O(!1)}));break;case b:if(!A.isValid)return;(function(e){return console.log(e),new Promise((function(t,a){var c="".concat("https://js-project-wizard-api.herokuapp.com/api","/react-native");fetch(c,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.text().then((function(e){t(e)}))})).catch((function(e){a(e)}))}))})(e=Object(l.a)(Object(l.a)({},v),A)).then((function(e){q(e),n(null),O(!1)})).catch((function(e){O(!1)}));break;default:O(!1)}},loading:i,className:"my-10",children:[Object(N.jsx)(h.a.Select,{fluid:!0,label:"Project Type",options:f,value:a,onChange:function(e,t){var a=t.value;F(null),n(a)}}),a&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,{projectType:a,onChange:x}),a===p?Object(N.jsx)(T,{onChange:C}):Object(N.jsx)(R,{onChange:E}),Object(N.jsx)(h.a.Button,{className:"my-3",primary:!0,disabled:a===p?!v.isValid||!y.isValid:!v.isValid||!A.isValid,children:"Generate Project"})]})]}),z&&Object(N.jsx)(I,{heading:"Generation complete. Move the downloaded file into where you want to initialize the project and run the following command.",code:"node ".concat(z,".js")})]})}),Object(N.jsx)("div",{className:"right-content"}),Object(N.jsx)("footer",{className:"footer"})]})};var F=function(){return Object(N.jsx)(o.a,{children:Object(N.jsx)(i.c,{children:Object(N.jsx)(i.a,{exact:!0,path:"/js-project-wizard/",component:z})})})};a(166);r.a.render(Object(N.jsx)(F,{}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.25c77e34.chunk.js.map