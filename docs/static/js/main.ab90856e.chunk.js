(this["webpackJsonpjs-project-wizard-web"]=this["webpackJsonpjs-project-wizard-web"]||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(51),o=n.n(c),r=(n(151),n(130)),i=n(10),s=n(32),l=(n(152),n.p+"static/media/logo.1e29a291.svg"),j=n(185),d=n(181),u=n(183),b=n(187),h=n(182),O=n(184),p=n(75),f=function(e,t,n){return new Promise((function(a,c){var o="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL,"/express?name=").concat(e,"&description=").concat(t,"&author=").concat(n);fetch(encodeURI(o)).then((function(e){e.text().then((function(e){a(e)}))})).catch((function(e){c(e)}))}))},m=n(9);var x=function(){var e=Object(a.useState)("express"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),i=r[0],x=r[1],v=Object(a.useState)(""),g=Object(s.a)(v,2),S=g[0],w=g[1],P=Object(a.useState)(""),C=Object(s.a)(P,2),y=C[0],E=C[1],N=Object(a.useState)(!1),T=Object(s.a)(N,2),_=T[0],A=T[1],R=Object(a.useState)(!1),k=Object(s.a)(R,2),D=k[0],U=k[1],B=Object(a.useState)(!1),I=Object(s.a)(B,2),L=I[0],J=I[1],W=Object(a.useState)(!1),z=Object(s.a)(W,2),F=z[0],G=z[1],H=Object(a.useState)(null),K=Object(s.a)(H,2),M=K[0],q=K[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("header",{className:"header",children:Object(m.jsx)(j.a,{as:"h2",image:l,content:"JS Project Wizard"})}),Object(m.jsx)("div",{className:"left-content"}),Object(m.jsx)("main",{className:"content",children:Object(m.jsxs)(d.a,{children:[Object(m.jsxs)(u.a,{onSubmit:function(){if(q(null),U(!1),J(!1),G(!1),i||U(!0),S||J(!0),y||G(!0),D||L||F)return null;A(!0),f(i,y,S).then((function(e){var t=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*a));return t}(6);q(t);var n=document.createElement("a");n.href=window.URL.createObjectURL(new Blob([e])),n.download="".concat(t,".js"),document.body.appendChild(n),n.click(),x(""),w(""),E(""),A(!1)})).catch((function(e){A(!1),window.alert("Oops! Something went wrong. Please try again in a while.")}))},loading:_,children:[Object(m.jsx)(u.a.Select,{fluid:!0,label:"Project Type",options:[{key:"express",text:"Express",value:"express"}],value:n,onChange:function(e,t){var n=t.value;c(n)}}),Object(m.jsxs)(u.a.Group,{widths:"equal",children:[Object(m.jsx)(u.a.Input,{fluid:!0,label:"Project Name",placeholder:"express-app",value:i,onChange:function(e,t){var n=t.value;x(n)},error:!!D&&{content:"Please enter a project name",pointing:"above"}}),Object(m.jsx)(u.a.Input,{fluid:!0,label:"Author",placeholder:"John Doe",value:S,onChange:function(e,t){var n=t.value;w(n)},error:!!L&&{content:"Please enter the author name",pointing:"above"}})]}),Object(m.jsx)(u.a.TextArea,{label:"Project Description",placeholder:"Add a brief description about your project",value:y,onChange:function(e,t){var n=t.value;E(n)},error:!!F&&{content:"Please enter a description",pointing:"above"}}),Object(m.jsx)(u.a.Button,{className:"my-3",primary:!0,children:"Generate Project"})]}),M&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{as:"h5",color:"green",children:"Generation complete. Create a new folder, move the downloaded file into the folder and run the following command on a terminal inside of that folder"}),Object(m.jsxs)(b.a,{className:"flex justify-between items-center mt-3 font-mono",inverted:!0,children:["npm i async && node ",M,".js",Object(m.jsx)(h.a,{content:"Copied!",on:"click",pinned:!0,trigger:Object(m.jsx)(O.a,{onClick:function(){navigator.clipboard.writeText("npm i async && node ".concat(M,".js"))},icon:!0,children:Object(m.jsx)(p.a,{name:"copy"})})})]})]})]})}),Object(m.jsx)("div",{className:"right-content"}),Object(m.jsx)("footer",{className:"footer"})]})};var v=function(){return Object(m.jsx)(r.a,{children:Object(m.jsx)(i.c,{children:Object(m.jsx)(i.a,{exact:!0,path:"/",component:x})})})};n(164);o.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.ab90856e.chunk.js.map