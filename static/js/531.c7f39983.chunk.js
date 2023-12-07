"use strict";(self.webpackChunkreact_phonebook_v8=self.webpackChunkreact_phonebook_v8||[]).push([[531],{4531:function(n,t,e){e.r(t),e.d(t,{ContactEdit:function(){return j},default:function(){return j}});var r=e(9439),o=e(2791),u=e(9434),a=e(7689),i=e(4918),c="NOT_FOUND";var l=function(n,t){return n===t};function s(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,o=void 0===r?l:r,u=e.maxSize,a=void 0===u?1:u,i=e.resultEqualityCheck,s=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!n(t[o],e[o]))return!1;return!0}}(o),f=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:c},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(s):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var o=e[r];return r>0&&(e.splice(r,1),e.unshift(o)),o.value}return c}return{get:r,put:function(t,o){r(t)===c&&(e.unshift({key:t,value:o}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,s);function p(){var t=f.get(arguments);if(t===c){if(t=n.apply(null,arguments),i){var e=f.getEntries(),r=e.find((function(n){return i(n.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function f(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function p(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var u,a=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=i,s=l.memoizeOptions,p=void 0===s?e:s,d=Array.isArray(p)?p:[p],v=f(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],t=v.length,e=0;e<t;e++)n.push(v[e].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:v,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var d=p(s),v=e(4294),h=e(111),m=e(697),x=e(8619),y=e(7756),b=e(9919),g=e(3466),Z=e(184),j=function(){var n=d([function(n){return n.contacts.items},function(n,t){return t.id}],(function(n,t){return n.find((function(n){return n.id===t}))})),t=(0,a.UO)().id,e=(0,u.v9)((function(e){return n(e,{id:t})})),c=(0,a.s0)(),l=(0,u.I0)(),s=(0,o.useState)("".concat(e.name)),f=(0,r.Z)(s,2),p=f[0],j=f[1],C=(0,o.useState)("".concat(e.number)),z=(0,r.Z)(C,2),k=z[0],w=z[1],A=function(n){switch(n.target.name){case"name":j(n.target.value),console.log(n.target.value);break;case"number":w(n.target.value);break;default:return}};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(m.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,Z.jsxs)(m.Z,{sx:{pt:"45px",pb:"45px",borderRadius:"5%",borderStyle:"solid",borderWidth:"2px",width:"600px",ml:"auto",mr:"auto",boxShadow:"0 3px 5px 0 #000"},children:[(0,Z.jsx)(m.Z,{sx:{textAlign:"center",fontWeight:"bold",fontSize:"h3.fontSize",fontFamily:"Monospace",letterSpacing:6},children:"Edit Contact"}),(0,Z.jsxs)(m.Z,{component:"form",sx:{"& .MuiTextField-root":{m:2,width:"60ch"},display:"flex",flexDirection:"column",width:"auto",justifyContent:"center",alignItems:"center",ml:"auto",mr:"auto"},noValidate:!0,onSubmit:function(n){n.preventDefault(),l((0,i.Tk)({name:p,number:k,id:t})),console.log("Contact ".concat(p," updated!")),c(-1)},children:[(0,Z.jsx)(h.Z,{required:!0,label:"Email",type:"name",name:"name",placeholder:"Enter contact`s name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:A,value:p,InputProps:{startAdornment:(0,Z.jsx)(g.Z,{position:"start",children:(0,Z.jsx)(y.Z,{})})}}),(0,Z.jsx)(h.Z,{required:!0,label:"Change phone:",type:"number",name:"number",placeholder:"Enter contact`s number",onChange:A,value:k,InputProps:{startAdornment:(0,Z.jsx)(g.Z,{position:"start",children:(0,Z.jsx)(b.Z,{})})}}),(0,Z.jsx)(v.Z,{variant:"contained",size:"large",endIcon:(0,Z.jsx)(x.Z,{}),type:"submit",children:"UPDATE CONTACT"})]})]})})})}},8619:function(n,t,e){var r=e(4836);t.Z=void 0;var o=r(e(5649)),u=e(184),a=(0,o.default)((0,u.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");t.Z=a},7756:function(n,t,e){var r=e(4836);t.Z=void 0;var o=r(e(5649)),u=e(184),a=(0,o.default)((0,u.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PersonOutline");t.Z=a},9919:function(n,t,e){var r=e(4836);t.Z=void 0;var o=r(e(5649)),u=e(184),a=(0,o.default)((0,u.jsx)("path",{d:"m17.38 10.79-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59z"}),"PhoneEnabled");t.Z=a}}]);
//# sourceMappingURL=531.c7f39983.chunk.js.map