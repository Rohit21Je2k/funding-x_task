(this["webpackJsonpfunding-x"]=this["webpackJsonpfunding-x"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(5),i=a.n(n),o=a(3),c=a(2),l=a.p+"static/media/title-img.d0d199a4.png",u=(a(10),a(0));function d(){return Object(u.jsx)("div",{className:"form__title",children:Object(u.jsx)("img",{className:"form__title__img",src:l,alt:"title-img"})})}a(12);function b(e){var t=e.children;return Object(u.jsx)("div",{className:"form__about",children:t})}a(13);function j(e){var t=e.id,a=e.className,r=e.name,s=e.type,n=e.label,i=e.values,o=e.placeholder,c=e.required,l=e.description,d=e.onClick,b=e.onBlur,j=e.onChange,m=i.value,h=i.error,p=i.isValid;return Object(u.jsxs)("div",{className:"form__input-field ".concat(h?"error":""),children:[Object(u.jsxs)("div",{className:"form__input-field__header",children:[Object(u.jsx)("label",{htmlFor:r,className:"form__input-field__label",children:n}),c&&Object(u.jsx)("span",{className:"form__input-field__asterisk",children:"*"}),l&&Object(u.jsx)("p",{className:"form__input-field__description",children:l})]}),Object(u.jsxs)("div",{className:"form__input-field__container",children:[Object(u.jsx)("input",{id:t,className:"form__input-field__input ".concat(a),name:r,type:s,value:m,placeholder:o,required:c,onClick:d,onBlur:b,onChange:j,autoComplete:"off"}),Object(u.jsx)("span",{className:"underline"})]}),h&&!p&&Object(u.jsx)("div",{className:"form__input-field__message",children:h})]})}a(14);function m(e){var t=e.onClick;return Object(u.jsx)("button",{className:"form__submit-btn",onClick:t,children:"Submit"})}function h(e,t,a,r){var s="";switch(a){case"text":t.trim()||(s="Field Required");break;case"email":t.trim()||(s="Email Required");break;case"phone":t.trim()||(s="Phone Required");break;case"url":t.trim()||(s="Url Required")}r((function(t){return t[e].error=s,Object(o.a)({},t)}))}function p(){var e=function(e){var t=Object(r.useState)(e),a=Object(c.a)(t,2),s=a[0],n=a[1],i=Object(r.useState)({}),o=Object(c.a)(i,2);return{form:s,setForm:n,errors:o[0],setErrors:o[1]}}({name:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},email:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},phone:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},pageUrl:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"url"},aboutUs:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"}}),t=e.form,a=e.setForm,s=Object(r.useState)(!1),n=Object(c.a)(s,2),i=n[0],l=n[1];var p=function(e){var r=e.target,s=r.name,n=r.value,i=t[s].validateType;h(s,n,i,a),a((function(e){return e[s].value=n,Object(o.a)({},e)}))},f=function(e){var r=e.target,s=r.name,n=r.value,i=t[s].validateType;h(s,n,i,a),a((function(e){return e[s].isTouched=!0,Object(o.a)({},e)}))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={name:t.name.value,email:t.email.value,phone:t.phone.value,pageUrl:t.pageUrl.value,aboutUs:t.aboutUs.value};fetch("http://localhost:8000/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){e.ok&&l(!0)})).then((function(e){return console.log(e)})),console.log(a)},children:[Object(u.jsx)(d,{}),Object(u.jsxs)(b,{children:[Object(u.jsx)("h1",{className:"form__about__title",children:"Web Development Task"}),i?Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Form Submitted Successfully"}),Object(u.jsx)("a",{className:"resubmit-link",href:"/",children:"Submit Another Response"})]}):Object(u.jsxs)("div",{children:["Welcome to FundingX!",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"To become a part of our Web Development Team, please complete the task before the deadline mentioned.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),"No task submissions will be entertained after the deadline ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"TASK -",Object(u.jsx)("br",{}),"Replicate this Google form which you are looking at.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"If you like, you may enhance the looks of the page according to you.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Host this page on GitHub pages or any hosting service you like and paste link in the form.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"The tasks given are for understanding how well you are equipped with the skills.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Deadline for submission- July 31, 4:00 p.m.",Object(u.jsx)("p",{className:"form__about__legend",children:"*Required"})]})]}),!i&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{name:"name",type:"text",label:"Name",placeholder:"Your answer",values:t.name,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(j,{name:"email",type:"email",label:"Email Id",placeholder:"Your answer",values:t.email,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(j,{name:"phone",type:"text",label:"Phone No.",placeholder:"Your answer",values:t.phone,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(j,{name:"pageUrl",type:"url",label:"Page URL",placeholder:"Your answer",values:t.pageUrl,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(j,{name:"aboutUs",type:"text",label:"What is FundingX about?",placeholder:"Your answer",description:"Just a one liner as to what you think we do.",values:t.aboutUs,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(m,{onClick:function(){for(var e in t){var r=t[e];h(e,r.value,r.validateType,a)}}})]})]})}var f=a.p+"static/media/google.2973bc75.svg";a(15);function x(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("p",{className:"footer__warning",children:"Never submit passwords through Google Forms."}),Object(u.jsx)("p",{className:"footer__disclaimer",children:"This content is neither created nor endorsed by Google."}),Object(u.jsxs)("div",{className:"footer__links",children:[Object(u.jsx)("a",{href:"/",className:"footer__link",children:"Report Abuse"}),Object(u.jsx)("a",{href:"/",className:"footer__link",children:"Terms of Service"}),Object(u.jsx)("a",{href:"/",className:"footer__link",children:"Privacy Policy"})]}),Object(u.jsxs)("div",{className:"footer__product-name",children:[Object(u.jsx)("img",{className:"footer__product-name__img",src:f,alt:"google-img"}),Object(u.jsx)("p",{className:"footer__product-name__text",children:"Forms"})]})]})}a(16);var O=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(p,{}),Object(u.jsx)(x,{})]}),Object(u.jsx)("a",{href:"https://github.com/Rohit21Je2k/funding-x_task",className:"github__link",children:"Github Repo Link"})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a2e18710.chunk.js.map