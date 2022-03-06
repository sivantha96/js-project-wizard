(this["webpackJsonpjs-project-wizard-web"]=this["webpackJsonpjs-project-wizard-web"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(51),r=a.n(c),o=(a(153),a(132)),i=a(10),s=a(78),l=a(12),j=(a(154),a.p+"static/media/logo.1e29a291.svg"),u=a(187),d=a(182),h=a(184);var b="rn",p="express",O="none",v="mongo",g=[{key:p,text:"Express",value:p},{key:b,text:"React Native",value:b}],f=[{key:O,text:"None",value:O},{key:v,text:"MongoDB",value:v}],m=/^[A-Z][a-zA-Z]*$/,x=/^[a-zA-Z-]*$/,w=function(e,t){return e?t===b?m.test(e)?null:"Project name should be in valid Camel Case format. eg: ProjectName":x.test(e)?null:"Project name should be in valid Dash Case format. eg: project-name":"Project name is required"},k=function(e){return e===b?"MyAwesomeApp":"my-awesome-app"},N=a(4),y=function(e){var t=e.projectType,a=e.onChange,c=Object(n.useState)({value:"",error:null,placeholder:k(t),changed:!1}),r=Object(l.a)(c,2),o=r[0],i=r[1],s=Object(n.useState)({value:"",error:null}),j=Object(l.a)(s,2),u=j[0],d=j[1],b=Object(n.useState)({value:"",error:null}),p=Object(l.a)(b,2),O=p[0],v=p[1];Object(n.useEffect)((function(){t?i({value:o.value,error:o.changed?w(o.value,t):null,placeholder:k(t),changed:o.changed}):(i({value:"",error:null,placeholder:k(t),changed:!1}),d({value:"",error:null}),v({value:"",error:null}))}),[t]),Object(n.useEffect)((function(){var e=!o.error&&!u.error&&!O.error;a({isValid:e,name:o.value,author:u.value,description:O.value})}),[o,u,O,a]);return console.log("RENDERED DETAILS VIEW"),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(h.a.Group,{widths:"equal",children:[Object(N.jsx)(h.a.Input,{fluid:!0,label:"Project Name",placeholder:o.placeholder,value:o.value,onChange:function(e,a){var n=a.value;i({value:n,error:o.changed?w(n,t):null,placeholder:o.placeholder,changed:!0})},error:!!o.error&&{content:o.error,pointing:"above"}}),Object(N.jsx)(h.a.Input,{fluid:!0,label:"Author",placeholder:"John Doe",value:u.value,onChange:function(e,t){var a=t.value;d({value:a,error:a?null:"Author is required"})},error:!!u.error&&{content:u.error,pointing:"above"}})]}),Object(N.jsx)(h.a.TextArea,{label:"Project Description",placeholder:"Add a brief description about your project",value:O.value,onChange:function(e,t){var a=t.value;v({value:a,error:a?null:"Project Description is required"})},error:!!O.error&&{content:O.error,pointing:"above"}})]})},C=Object(n.memo)(y),S=function(e){var t=e.onChange,a=Object(n.useState)("none"),c=Object(l.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)({value:"",error:null}),s=Object(l.a)(i,2),j=s[0],u=s[1];Object(n.useEffect)((function(){var e=!j.error;t({isValid:e,dataBaseType:r,dataBaseName:j.value})}),[r,j,t]);return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(h.a.Group,{widths:"equal",children:[Object(N.jsx)(h.a.Select,{fluid:!0,label:"Database",options:f,value:r,onChange:function(e,t){var a=t.value;o(a)}}),Object(N.jsx)(h.a.Input,{disabled:"none"===r,fluid:!0,label:"Database Name",placeholder:"express-app-db",value:j.value,onChange:function(e,t){var a=t.value;u({value:a,error:a?null:"Database name is required"})},error:!!j.error&&{content:j.error,pointing:"above"}})]})})},T=Object(n.memo)(S),P=a(183),A=a(75),E=a(190),R=function(e){var t=e.onChange,a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),j=s[0],u=s[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),p=b[0],O=b[1];return Object(n.useEffect)((function(){t({isValid:!0,hasReactNavigation:r,hasRedux:j,hasVectorIcons:p})}),[t,p,r,j]),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["React Navigation   ",Object(N.jsx)(P.a,{on:"click",content:Object(N.jsxs)("span",{children:["This will include all the basic dependencies for a stack navigator, navigation utility functions, clean project structure the initial configuration recommended by the"," ",Object(N.jsx)("a",{href:"https://reactnavigation.org",target:"_blank",children:"Official React Navigation docs"})]}),trigger:Object(N.jsx)(A.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(E.a,{toggle:!0,checked:r,onChange:function(e,t){var a=t.checked;o(a)}})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2 align-center",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["Redux   ",Object(N.jsx)(P.a,{on:"click",content:Object(N.jsxs)("span",{children:["This will include"," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/redux",target:"_blank",children:"redux v4.1.2"}),","," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/react-redux",target:"_blank",children:"react-redux v7.2.6"}),","," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/redux-saga",target:"_blank",children:"redux-saga v1.1.3"}),", a clean project structure and initial configurations"]}),trigger:Object(N.jsx)(A.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(E.a,{toggle:!0,checked:j,onChange:function(e,t){var a=t.checked;u(a)}})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2",children:[Object(N.jsx)(h.a.Field,{children:Object(N.jsxs)("label",{children:["React Native Vector Icons   ",Object(N.jsx)(P.a,{on:"click",content:Object(N.jsxs)("span",{children:["This will include the"," ",Object(N.jsx)("a",{href:"https://www.npmjs.com/package/react-native-vector-icons",target:"_blank",children:"react-native-vector-icons v9.1.0"})," ","package and the configuration to work out of the box"]}),trigger:Object(N.jsx)(A.a,{className:"cursor-pointer",name:"info circle"})})]})}),Object(N.jsx)(E.a,{toggle:!0,checked:p,onChange:function(e,t){var a=t.checked;O(a)}})]})]})},V=Object(n.memo)(R),D=a(188),B=a(185),I=function(e){var t=e.heading,a=e.code;return Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)(u.a,{as:"h5",color:"green",children:t}),Object(N.jsxs)(D.a,{className:"flex justify-between items-center mt-3 font-mono",inverted:!0,children:[a,Object(N.jsx)(P.a,{content:"Copied!",on:"click",pinned:!0,trigger:Object(N.jsx)(B.a,{onClick:function(){navigator.clipboard.writeText(a)},icon:!0,children:Object(N.jsx)(A.a,{name:"copy"})})})]})]})};var z=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(l.a)(r,2),i=o[0],O=o[1],v=Object(n.useState)({isValid:!1,name:"",author:"",description:""}),f=Object(l.a)(v,2),m=f[0],x=f[1],w=Object(n.useState)({isValid:!1,dataBaseType:"none",dataBaseName:""}),k=Object(l.a)(w,2),y=k[0],S=k[1],P=Object(n.useState)({isValid:!1,hasReactNavigation:!1,hasRedux:!1,hasVectorIcons:!1}),A=Object(l.a)(P,2),E=A[0],R=A[1],D=Object(n.useState)(null),B=Object(l.a)(D,2),z=B[0],q=B[1],F=function(e){var t=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,c=0;c<e;c++)t+=a.charAt(Math.floor(Math.random()*n));return t}(6);q(t);var a=document.createElement("a");a.href=window.URL.createObjectURL(new Blob([e])),a.download="".concat(t,".js"),document.body.appendChild(a),a.click()};return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("header",{className:"header",children:Object(N.jsx)(u.a,{as:"h2",image:j,content:"JS Project Wizard"})}),Object(N.jsx)("main",{className:"content",children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(I,{heading:"If you are here the first time, run the following command before getting started to install the dependencies",code:"npm install --prefix $HOME async"}),Object(N.jsxs)(h.a,{onSubmit:function(){var e,t;if(m.isValid)switch(O(!0),a){case p:if(!y.isValid)return;e=Object(s.a)(Object(s.a)({},m),{},{dbType:y.dataBaseType,dbName:y.dataBaseName}),(t=e,new Promise((function(e,a){var n="".concat("https://js-project-wizard-api.herokuapp.com/api","/express");fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){t.text().then((function(t){e(t)}))})).catch((function(e){a(e)}))}))).then((function(e){F(e),c(null),O(!1)})).catch((function(e){O(!1)}));break;case b:if(!E.isValid)return;(function(e){return console.log(e),new Promise((function(t,a){var n="".concat("https://js-project-wizard-api.herokuapp.com/api","/react-native");fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.text().then((function(e){t(e)}))})).catch((function(e){a(e)}))}))})(e=Object(s.a)(Object(s.a)({},m),E)).then((function(e){F(e),c(null),O(!1)})).catch((function(e){O(!1)}));break;default:O(!1)}},loading:i,className:"mt-10",children:[Object(N.jsx)(h.a.Select,{fluid:!0,label:"Project Type",options:g,value:a,onChange:function(e,t){var a=t.value;q(null),c(a)}}),a&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(C,{projectType:a,onChange:x}),a===p?Object(N.jsx)(T,{onChange:S}):Object(N.jsx)(V,{onChange:R}),Object(N.jsx)(h.a.Button,{className:"my-3",primary:!0,children:"Generate Project"})]})]}),z&&Object(N.jsx)(I,{heading:"Generation complete. Move the downloaded file into where you want to initialize the project and run the following command.",code:"node ".concat(z,".js")})]})}),Object(N.jsx)("div",{className:"right-content"}),Object(N.jsx)("footer",{className:"footer"})]})};var q=function(){return Object(N.jsx)(o.a,{children:Object(N.jsx)(i.c,{children:Object(N.jsx)(i.a,{exact:!0,path:"/js-project-wizard/",component:z})})})};a(166);r.a.render(Object(N.jsx)(q,{}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.08d384af.chunk.js.map