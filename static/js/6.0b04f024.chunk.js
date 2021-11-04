(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,a=n(19),c=n(20).a.button(r||(r=Object(a.a)(["\n  margin-left: auto;\n  margin-right: auto; \n  padding: 10px 20px;\n  outline: none;\n  border: 1px solid rgba(244, 247, 62, 0.809);\n  background-color: #31708f;\n  color: white;\n  cursor: pointer;\n  font-size: small;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n  &:hover {\n    background-color: rgba(5, 104, 253, 0.85);\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n      0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  }\n  &.btn:active {\n    background-color: rgba(5, 104, 253, 0.85);\n    box-shadow: 0 3px #666;\n    transform: translateY(3px);\n}\n"])))},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var r,a=n(19),c=n(20).a.div(r||(r=Object(a.a)(["\n  padding: 10px 5px;\n"]))),o=n(1),i=function(e){var t=e.title,n=e.children;return Object(o.jsxs)(c,{children:[Object(o.jsx)("h2",{children:t}),n]})}},125:function(e){e.exports=JSON.parse('[{"id":"idName","type":"text","name":"Name","pattern":"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([\' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","title":"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan \u0438 \u0442. \u043f.","required":"required"},{"id":"idNumber","type":"tel","name":"Number","pattern":"\'+?[0-9s-()]+\'","title":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +","required":"required"}]')},132:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(117),a=n(0),c=n(30),o=n(125),i=n(130),u=n(122),s=n(15),b=n(114),d=n(3),l=n(115),p=n(1);function j(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],j=t[1],x=Object(a.useState)(""),h=Object(r.a)(x,2),m=h[0],f=h[1],O=Object(c.b)(),g=Object(r.a)(O,1)[0],v=Object(a.useState)(!0),w=Object(r.a)(v,2),N=w[0],k=w[1],q=function(e){j(""),f(""),k(!1)};return Object(p.jsx)(l.a,{children:N?Object(p.jsxs)(i.a,{onSubmit:function(e){e.preventDefault(),g({name:n,number:m}),s.b.success("New contact added"),q(e)},children:[o.map((function(e){var t=e.id,n=e.type,r=e.name,a=e.pattern,c=e.title,o=e.required;return Object(p.jsx)(u.a,{htmlFor:t,label:r,className:"mb-3",children:Object(p.jsx)(i.a.Control,{size:"lg",id:t,type:n,name:r,pattern:a,title:c,required:o,placeholder:r,onChange:function(e){return function(e,t){switch(e.name){case"Name":j((function(){return t}));break;case"Number":f((function(){return t}))}}({name:r},e.target.value)}})},r)})),Object(p.jsx)(b.a,{type:"submit",children:"Create contact"})]}):Object(p.jsx)(d.a,{to:"/contacts"})})}function x(){return Object(p.jsx)("section",{children:Object(p.jsx)(j,{})})}}}]);
//# sourceMappingURL=6.0b04f024.chunk.js.map