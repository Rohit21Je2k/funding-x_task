(this["webpackJsonpfunding-x"]=this["webpackJsonpfunding-x"]||[]).push([[0],[,,,,,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),i=r(5),n=r.n(i),c=r(4),o=r(2),l=r.p+"static/media/title-img.d0d199a4.png",u=(r(10),r(0));function d(){return Object(u.jsx)("div",{className:"form__title",children:Object(u.jsx)("img",{className:"form__title__img",src:l,alt:"title-img"})})}r(12);function j(e){var t=e.children;return Object(u.jsx)("div",{className:"form__about",children:t})}r(13);function b(e){var t=e.id,r=e.className,a=e.name,s=e.type,i=e.label,n=e.values,c=e.placeholder,o=e.required,l=e.description,d=e.onClick,j=e.onBlur,b=e.onChange,m=n.value,h=n.error,p=n.isValid,f=n.isTouched;return Object(u.jsxs)("div",{className:"form__input-field",children:[Object(u.jsxs)("div",{className:"form__input-field__header",children:[Object(u.jsx)("label",{htmlFor:a,className:"form__input-field__label",children:i}),o&&Object(u.jsx)("span",{className:"form__input-field__asterisk",children:"*"}),l&&Object(u.jsx)("p",{className:"form__input-field__description",children:l})]}),Object(u.jsx)("div",{className:"form__input-field__container",children:Object(u.jsx)("input",{id:t,className:"form__input-field__input ".concat(r),name:a,type:s,value:m,placeholder:c,required:o,onClick:d,onBlur:j,onChange:b,autoComplete:"off"})}),h&&!p&&f&&Object(u.jsx)("div",{className:"form__input-field__message",children:h})]})}r(14);function m(e){var t=e.onClick;return Object(u.jsx)("button",{className:"form__submit-btn",onClick:t,children:"Submit"})}function h(e,t){var r="";switch(t){case"text":e.trim()||(r="Field Required");break;case"email":e.trim()||(r="Email Required");break;case"phone":e.trim()||(r="Phone Required");break;case"url":e.trim()||(r="Url Required")}return r}function p(){var e=function(e,t){var r=Object(a.useState)(e),s=Object(o.a)(r,2),i=s[0],n=s[1],c=Object(a.useState)({}),l=Object(o.a)(c,2);return{form:i,setForm:n,errors:l[0],setErrors:l[1]}}({name:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},email:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},phone:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},pageUrl:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"},aboutUs:{value:"",isTouched:!1,isValid:!1,error:"",validateType:"text"}}),t=e.form,r=e.setForm,s=Object(a.useState)(!1),i=Object(o.a)(s,2),n=i[0],l=i[1];var p=function(e){var a=e.target,s=a.name,i=a.value,n=h(i,t[s].validateType);r((function(e){return e[s].value=i,e[s].error=n,Object(c.a)({},e)}))},f=function(e){var a=e.target,s=a.name,i=h(a.value,t[s].validateType);r((function(e){return e[s].isTouched=!0,e[s].error=i,Object(c.a)({},e)}))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0)},children:[Object(u.jsx)(d,{}),Object(u.jsxs)(j,{children:[Object(u.jsx)("h1",{className:"form__about__title",children:"Web Development Task"}),n?Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Form Submitted Successfully"}),Object(u.jsx)("a",{className:"resubmit-link",href:"/",children:"Submit Another Response"})]}):Object(u.jsxs)("div",{children:["Welcome to FundingX!",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"To become a part of our Web Development Team, please complete the task before the deadline mentioned.",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),"No task submissions will be entertained after the deadline ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"TASK -",Object(u.jsx)("br",{}),"Replicate this Google form which you are looking at.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"If you like, you may enhance the looks of the page according to you.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Host this page on GitHub pages or any hosting service you like and paste link in the form.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"The tasks given are for understanding how well you are equipped with the skills.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Deadline for submission- July 31, 4:00 p.m.",Object(u.jsx)("p",{className:"form__about__legend",children:"*Required"})]})]}),!n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{name:"name",type:"text",label:"Name",placeholder:"Your answer",values:t.name,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(b,{name:"email",type:"email",label:"Email Id",placeholder:"Your answer",values:t.email,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(b,{name:"phone",type:"text",label:"Phone No.",placeholder:"Your answer",values:t.phone,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(b,{name:"pageUrl",type:"url",label:"Page URL",placeholder:"Your answer",values:t.pageUrl,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(b,{name:"aboutUs",type:"text",label:"What is FundingX about?",placeholder:"Your answer",description:"Just a one liner as to what you think we do.",values:t.aboutUs,onChange:p,onBlur:f,required:!0}),Object(u.jsx)(m,{onClick:function(){console.log(t)}})]})]})}var f=r.p+"static/media/google.2973bc75.svg";r(15);function x(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("p",{className:"footer__warning",children:"Never submit passwords through Google Forms."}),Object(u.jsx)("p",{className:"footer__disclaimer",children:"This content is neither created nor endorsed by Google."}),Object(u.jsxs)("div",{className:"footer__links",children:[Object(u.jsx)("a",{href:"/",className:"footer__link",children:"Report Abuse"}),Object(u.jsx)("a",{href:"/",className:"footer__link",children:"Terms of Service"}),Object(u.jsx)("a",{href:"/",className:"footer__link",children:"Privacy Policy"})]}),Object(u.jsxs)("div",{className:"footer__product-name",children:[Object(u.jsx)("img",{className:"footer__product-name__img",src:f,alt:"google-img"}),Object(u.jsx)("p",{className:"footer__product-name__text",children:"Forms"})]})]})}r(16);var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(p,{}),Object(u.jsx)(x,{})]})})};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.84b3cf72.chunk.js.map