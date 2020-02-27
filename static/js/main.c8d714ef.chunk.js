(this.webpackJsonplesson_5=this.webpackJsonplesson_5||[]).push([[0],{22:function(e,t,n){e.exports={enter:"animationElements_enter__2GCAJ",enterActive:"animationElements_enterActive__1ojWK",exit:"animationElements_exit__1SihY",exitActive:"animationElements_exitActive__1RJC2"}},27:function(e,t,n){e.exports={enter:"animationPhonebook_enter__2Pu43",enterActive:"animationPhonebook_enterActive__19Ubo",exit:"animationPhonebook_exit__2DaDr",exitActive:"animationPhonebook_exitActive__2MfLk"}},28:function(e,t,n){e.exports={enter:"animationError_enter__17P7T",enterActive:"animationError_enterActive__2QrzO",exit:"animationError_exit__2pbMx",exitActive:"animationError_exitActive__3k-c7"}},35:function(e,t,n){e.exports=n(56)},53:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(4),l=n(13),u=n(5),s=n(14),m=n(15),p=n(17),b=n(16),E=n(18),h="ADD_CONTACT",_="DELETE_CONTACT",f="FILTER_CONTACTS",d="CLEAR_FILTER",v=n(26),y=n.n(v),C=n(6),O=n.n(C),x=n(57),j=n(27),g=n.n(j),A=n(28),k=n.n(A),N={name:"",number:"",isVisible:!1,isError:!1},L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state=Object(u.a)({},N),n.handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number;if(""!==a)if(n.props.contacts.some((function(e){return e.name.toLowerCase()===a.toLowerCase()})))n.setState({isError:!0}),setTimeout((function(){n.setState({isError:!1})}),3e3);else{var c={name:a,number:r,id:y()()};n.props.addContact(c),n.setState(Object(u.a)({},N))}},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isVisible,c=e.isError;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{in:a,timeout:1e3,classNames:g.a},r.a.createElement("h2",null,"Phonebook")),r.a.createElement("form",{onSubmit:this.handleSubmit,className:O.a.contactForm},r.a.createElement("label",{className:O.a.inputLabel},"Name:",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange})),r.a.createElement("label",{className:O.a.inputLabel},"Number:",r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},"Add Contact")),r.a.createElement(x.a,{in:c,timeout:500,classNames:k.a,unmountOnExit:!0},r.a.createElement("div",{className:O.a.error},"Contact ".concat(t," already exists!"))))}}]),t}(a.Component),F=Object(i.b)((function(e){return{contacts:e.contacts}}),{addContact:function(e){return{type:h,payload:e}}})(L),R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleFilterChange=function(e){""!==e.target.value?n.props.filterContacts(e.target.value):n.props.clearFilterVal()},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:O.a.inputWrapper},r.a.createElement("input",{type:"text",placeholder:"Search contacts by name...",value:this.props.filterVal,onChange:this.handleFilterChange}))}}]),t}(a.Component),S=Object(i.b)((function(e){return{filterVal:e.filter}}),{filterContacts:function(e){return{type:f,payload:e}},clearFilterVal:function(){return{type:d}}})(R),T=n(58),w=n(22),D=n.n(w),P=Object(i.b)((function(e){return{contacts:e.contacts,searchResult:e.searchResult}}),{deleteContact:function(e){return{type:_,payload:e}}})((function(e){var t=e.contacts,n=e.searchResult,a=e.deleteContact;return r.a.createElement(r.a.Fragment,null,t.length>1&&r.a.createElement(S,null),0!==n.length?r.a.createElement(T.a,{component:"ul"},n.map((function(e){var t=e.name,n=e.number,c=e.id;return r.a.createElement(x.a,{key:c,classNames:D.a,timeout:500,unmountOnExit:!0},r.a.createElement("li",null,r.a.createElement("p",null,t,":"),r.a.createElement("p",null,n),r.a.createElement("button",{type:"button",onClick:function(){return a(c)}},"x")))}))):r.a.createElement(T.a,{component:"ul"},t.map((function(e){var t=e.name,n=e.number,c=e.id;return r.a.createElement(x.a,{key:c,classNames:D.a,timeout:500,unmountOnExit:!0},r.a.createElement("li",null,r.a.createElement("p",null,t,": "),r.a.createElement("p",null,n),r.a.createElement("button",{type:"button",onClick:function(){return a(c)}},"x")))}))))})),V=(n(53),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(P,null))}),J=n(3),W=n(32),I={contacts:[],filter:"",searchResult:[]},M=n(23),z=n(29),U=n.n(z),Y=n(30),B={key:"root",storage:U.a},G=Object(M.a)(B,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)({},e,{contacts:[].concat(Object(W.a)(e.contacts),[t.payload])});case _:return Object(u.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case f:return Object(u.a)({},e,{filter:t.payload,searchResult:e.contacts.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}))});case d:return Object(u.a)({},e,{filter:"",searchResult:[]});default:return e}})),K=Object(J.d)(G,Object(J.a)(Y.a)),Q=Object(M.b)(K),q=n(31);o.a.render(r.a.createElement(i.a,{store:K},r.a.createElement(q.a,{loading:null,persistor:Q},r.a.createElement(V,null))),document.getElementById("root"))},6:function(e,t,n){e.exports={contactForm:"components_contactForm__2nzUs",inputWrapper:"components_inputWrapper__3YdeE",inputLabel:"components_inputLabel__2SJR5",error:"components_error__2yypR"}}},[[35,1,2]]]);
//# sourceMappingURL=main.c8d714ef.chunk.js.map