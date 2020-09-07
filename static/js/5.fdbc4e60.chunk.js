/*! For license information please see 5.fdbc4e60.chunk.js.LICENSE.txt */
(this.webpackJsonpotopark_superadmin=this.webpackJsonpotopark_superadmin||[]).push([[5],{431:function(e,r,t){"use strict";t.d(r,"a",(function(){return Fe}));var n=t(402);var u=t(167),c=t.n(u),a=t(168),i=t(433);function s(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=t(78),f=t(80),l=t(0),b=function(e){return e instanceof HTMLElement},d="blur",v="change",O="input",p="onBlur",h="onChange",j="onSubmit",g="onTouched",m="all",k="max",y="min",x="maxLength",R="minLength",w="pattern",C="required",E="validate";function V(e,r,t){var n=e.ref;b(n)&&t&&(n.addEventListener(r?v:O,t),n.addEventListener(d,t))}var S=function(e){return null==e},F=function(e){return Array.isArray(e)},D=function(e){return"object"===typeof e},L=function(e){return!S(e)&&!F(e)&&D(e)&&!(e instanceof Date)},A=function(e){return!F(e)&&(/^\w*$/.test(e)||!/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(e))},B=function(e){var r=[];return e.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,(function(e,t,n,u){r.push(n?u.replace(/\\(\\)?/g,"$1"):t||e)})),r};function T(e,r,t){for(var n=-1,u=A(r)?[r]:B(r),c=u.length,a=c-1;++n<c;){var i=u[n],s=t;if(n!==a){var o=e[i];s=L(o)||F(o)?o:isNaN(+u[n+1])?{}:[]}e[i]=s,e=e[i]}return e}var N=function(e){return Object.entries(e).reduce((function(e,r){var t=Object(f.a)(r,2),n=t[0],u=t[1];return A(n)?Object.assign(Object.assign({},e),Object(o.a)({},n,u)):(T(e,n,u),e)}),{})},W=function(e){return void 0===e},M=function(e){return e.filter(Boolean)},H=function(e,r,t){var n=M(r.split(/[,[\].]+?/)).reduce((function(e,r){return S(e)?e:e[r]}),e);return W(n)||n===e?W(e[r])?t:e[r]:n},I=function(e,r){for(var t in e)if(H(r,t)){var n=e[t];if(n){if(n.ref.focus){n.ref.focus();break}if(n.options){n.options[0].ref.focus();break}}}},P=function(e,r){b(e)&&e.removeEventListener&&(e.removeEventListener(O,r),e.removeEventListener(v,r),e.removeEventListener(d,r))},z={isValid:!1,value:""},$=function(e){return F(e)?e.reduce((function(e,r){return r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e}),z):z},_=function(e){return"radio"===e.type},q=function(e){return"file"===e.type},J=function(e){return"checkbox"===e.type},U=function(e){return e.type==="".concat("select","-multiple")},G={value:!1,isValid:!1},K={value:!0,isValid:!0},Q=function(e){if(F(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.ref.checked})).map((function(e){return e.ref.value}));return{value:r,isValid:!!r.length}}var t=e[0].ref,n=t.checked,u=t.value,c=t.attributes;return n?c&&!W(c.value)?W(u)||""===u?K:{value:u,isValid:!0}:K:G}return G};function X(e,r,t){var n=e.current[r];if(n){var u=n.ref.value,c=n.ref;return q(c)?c.files:_(c)?$(n.options).value:U(c)?s(c.options).filter((function(e){return e.selected})).map((function(e){return e.value})):J(c)?Q(n.options).value:u}if(t)return t.current[r]}function Y(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&Y(e.parentNode)}var Z=function(e){return L(e)&&!Object.keys(e).length},ee=function(e){return"boolean"===typeof e};function re(e,r){var t=A(r)?[r]:B(r),n=1==t.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=W(e)?n++:e[r[n++]];return e}(e,t),u=t[t.length-1],c=void 0;n&&delete n[u];for(var a=0;a<t.slice(0,-1).length;a++){var i=-1,s=void 0,o=t.slice(0,-(a+1)),f=o.length-1;for(a>0&&(c=e);++i<o.length;){var l=o[i];s=s?s[l]:e[l],f===i&&(L(s)&&Z(s)||F(s)&&!s.filter((function(e){return L(e)&&!Z(e)||ee(e)})).length)&&(c?delete c[l]:delete e[l]),c=s}}return e}var te=function(e,r){return e&&e.ref===r};function ne(e,r,t,n,u,c){var a=t.ref,i=t.ref,s=i.name,o=i.type,f=t.mutationWatcher,l=e.current[s];if(!u){var b=X(e,s,n);W(b)||(n.current[s]=b)}if(o)if((_(a)||J(a))&&l){var d=l.options;F(d)&&d.length?(M(d).forEach((function(e,t){var n=e.ref,u=e.mutationWatcher;(n&&Y(n)&&te(e,n)||c)&&(P(n,r),u&&u.disconnect(),re(d,"[".concat(t,"]")))})),d&&!M(d).length&&delete e.current[s]):delete e.current[s]}else(Y(a)&&te(l,a)||c)&&(P(a,r),f&&f.disconnect(),delete e.current[s]);else delete e.current[s]}var ue=function(e){return"string"===typeof e};var ce=function(e,r,t){var n={},u=function(r){(W(t)||(ue(t)?r.startsWith(t):F(t)&&t.find((function(e){return r.startsWith(e)}))))&&(n[r]=X(e,r))};for(var c in e.current)u(c);return function e(r,t){if(!L(r)||!L(t))return t;for(var n in t){var u=r[n],c=t[n];L(u)&&L(c)?r[n]=e(u,c):r[n]=c}return r}(N((r||{}).current||{}),N(n))},ae=function(e,r){var t=r.type,n=r.types,u=void 0===n?{}:n,c=r.message;return L(e)&&e.type===t&&e.message===c&&Object.keys(e.types||{}).length===Object.keys(u).length&&Object.entries(e.types||{}).every((function(e){var r=Object(f.a)(e,2),t=r[0],n=r[1];return u[t]===n}))};function ie(e){var r=e.errors,t=e.name,n=e.error,u=e.validFields,c=e.fieldsWithValidation,a=Z(n),i=Z(r),s=H(n,t),o=H(r,t);return(!a||!u.has(t))&&(!!(i!==a||!i&&!o||a&&c.has(t)&&!u.has(t))||s&&!ae(o,s))}var se=function(e){return e instanceof RegExp},oe=function(e){return L(r=e)&&!se(r)?e:{value:e,message:""};var r},fe=function(e){return"function"===typeof e},le=function(e){return ue(e)||L(e)&&Object(l.isValidElement)(e)};function be(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(le(e)||ee(e)&&!e)return{type:t,message:le(e)?e:"",ref:r}}var de=function(e,r,t,n,u){if(r){var c=t[e];return Object.assign(Object.assign({},c),{types:Object.assign(Object.assign({},c&&c.types?c.types:{}),Object(o.a)({},n,u||!0))})}return{}},ve=function(){var e=Object(a.a)(c.a.mark((function e(r,t,n,u){var a,i,s,o,l,b,d,v,O,p,h,j,g,m,V,F,D,A,B,T,N,W,M,H,I,P,z,q,U,G,K,Y,re,te,ne,ce,ae,ie,ve,Oe,pe,he,je,ge,me,ke,ye,xe,Re,we,Ce,Ee,Ve,Se,Fe,De,Le,Ae;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.ref,i=n.ref,s=i.type,o=i.value,l=n.options,b=n.required,d=n.maxLength,v=n.minLength,O=n.min,p=n.max,h=n.pattern,j=n.validate,g=r.current,m=a.name,V={},F=_(a),D=J(a),A=F||D,B=""===o,T=de.bind(null,m,t,V),N=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:R,c=e?r:t;V[m]=Object.assign({type:e?n:u,message:c,ref:a},T(e?n:u,c))},!b||!(!F&&!D&&(B||S(o))||ee(o)&&!o||D&&!Q(l).isValid||F&&!$(l).isValid)){e.next=16;break}if(W=le(b)?{value:!!b,message:b}:oe(b),M=W.value,H=W.message,!M){e.next=16;break}if(V[m]=Object.assign({type:C,message:H,ref:A?(g[m].options||[])[0].ref:a},T(C,H)),t){e.next=16;break}return e.abrupt("return",V);case 16:if(S(O)&&S(p)){e.next=24;break}if(z=oe(p),q=z.value,U=z.message,G=oe(O),K=G.value,Y=G.message,"number"===s||!s&&!isNaN(o)?(re=a.valueAsNumber||parseFloat(o),S(q)||(I=re>q),S(K)||(P=re<K)):(te=a.valueAsDate||new Date(o),ue(q)&&(I=te>new Date(q)),ue(K)&&(P=te<new Date(K))),!I&&!P){e.next=24;break}if(N(!!I,U,Y,k,y),t){e.next=24;break}return e.abrupt("return",V);case 24:if(!ue(o)||B||!d&&!v){e.next=34;break}if(ne=oe(d),ce=ne.value,ae=ne.message,ie=oe(v),ve=ie.value,Oe=ie.message,pe=o.toString().length,he=!S(ce)&&pe>ce,je=!S(ve)&&pe<ve,!he&&!je){e.next=34;break}if(N(!!he,ae,Oe),t){e.next=34;break}return e.abrupt("return",V);case 34:if(!h||B){e.next=40;break}if(ge=oe(h),me=ge.value,ke=ge.message,!se(me)||me.test(o)){e.next=40;break}if(V[m]=Object.assign({type:w,message:ke,ref:a},T(w,ke)),t){e.next=40;break}return e.abrupt("return",V);case 40:if(!j){e.next=73;break}if(ye=X(r,m,u),xe=A&&l?l[0].ref:a,!fe(j)){e.next=54;break}return e.next=46,j(ye);case 46:if(Re=e.sent,!(we=be(Re,xe))){e.next=52;break}if(V[m]=Object.assign(Object.assign({},we),T(E,we.message)),t){e.next=52;break}return e.abrupt("return",V);case 52:e.next=73;break;case 54:if(!L(j)){e.next=73;break}Ce={},Ee=0,Ve=Object.entries(j);case 57:if(!(Ee<Ve.length)){e.next=69;break}if(Se=Object(f.a)(Ve[Ee],2),Fe=Se[0],De=Se[1],Z(Ce)||t){e.next=61;break}return e.abrupt("break",69);case 61:return e.next=63,De(ye);case 63:Le=e.sent,(Ae=be(Le,xe,Fe))&&(Ce=Object.assign(Object.assign({},Ae),T(Fe,Ae.message)),t&&(V[m]=Ce));case 66:Ee++,e.next=57;break;case 69:if(Z(Ce)){e.next=73;break}if(V[m]=Object.assign({ref:xe},Ce),t){e.next=73;break}return e.abrupt("return",V);case 73:return e.abrupt("return",V);case 74:case"end":return e.stop()}}),e)})));return function(r,t,n,u){return e.apply(this,arguments)}}(),Oe=function(e){return S(e)||!D(e)},pe=function e(r,t){return Object.entries(t).map((function(n){var u=Object(f.a)(n,2),c=u[0];return function(t,n,u){var c=u?"".concat(r,".").concat(n):"".concat(r,"[").concat(n,"]");return Oe(t)?c:e(c,t)}(u[1],c,L(t))})).flat(1/0)},he=function(e,r,t,n,u){var c;return t.add(r),Z(e)?c=void 0:(c=H(e,r),(L(c)||F(c))&&pe(r,c).forEach((function(e){return t.add(e)}))),W(c)?u?n:H(n,r):c},je=function(e){var r=e.isOnBlur,t=e.isOnChange,n=e.isOnTouch,u=e.isTouched,c=e.isReValidateOnBlur,a=e.isReValidateOnChange,i=e.isBlurEvent,s=e.isSubmitted;return!e.isOnAll&&(!s&&n?!(u||i):(s?c:r)?!i:!(s?a:t)||i)},ge=function(e){return e.substring(0,e.indexOf("["))};function me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var u=0,c=t;u<c.length;u++){var a=c[u],i=e[a],s=r[a];if((L(i)||F(i))&&(L(s)||F(s))?!me(i,s):i!==s)return!1}return!0}var ke=function(e,r){return RegExp("^".concat(r,"[\\d+]").replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e)},ye=function(e,r){return s(e).some((function(e){return ke(r,e)}))},xe=function(e){return e.type==="".concat("select","-one")};function Re(e,r){var t=new MutationObserver((function(){Y(e)&&(t.disconnect(),r())}));return t.observe(window.document,{childList:!0,subtree:!0}),t}var we=function(e){return{isOnSubmit:!e||e===j,isOnBlur:e===p,isOnChange:e===h,isOnAll:e===m,isOnTouch:e===g}},Ce=function(e){return _(e)||J(e)},Ee="undefined"===typeof window,Ve="undefined"!==typeof document&&!Ee&&!W(window.HTMLElement),Se=Ve?"Proxy"in window:"undefined"!==typeof Proxy;function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.mode,t=void 0===r?j:r,n=e.reValidateMode,u=void 0===n?h:n,i=e.resolver,v=e.context,O=e.defaultValues,p=void 0===O?{}:O,g=e.shouldFocusError,k=void 0===g||g,y=e.shouldUnregister,x=void 0===y||y,R=e.criteriaMode,w=Object(l.useRef)({}),C=Object(l.useRef)({}),E=Object(l.useRef)({}),D=Object(l.useRef)({}),A=Object(l.useRef)({}),B=Object(l.useRef)(new Set),P=Object(l.useRef)({}),z=Object(l.useRef)({}),$=Object(l.useRef)(new Set),G=Object(l.useRef)(new Set),K=Object(l.useRef)(!0),Q=Object(l.useRef)(p),Y=Object(l.useRef)({}),ee=Object(l.useRef)(!1),te=Object(l.useRef)(!1),se=Object(l.useRef)(!1),oe=Object(l.useRef)(!1),le=Object(l.useRef)(0),be=Object(l.useRef)(!1),de=Object(l.useRef)(),ke=Object(l.useRef)({}),Fe=Object(l.useRef)({}),De=Object(l.useRef)(v),Le=Object(l.useRef)(i),Ae=Object(l.useRef)(new Set),Be=Object(l.useState)(),Te=Object(f.a)(Be,2),Ne=Te[1],We=Object(l.useRef)(we(t)),Me=We.current,He=Me.isOnSubmit,Ie=Me.isOnTouch,Pe=R===m,ze=Object(l.useRef)({isDirty:!Se,dirtyFields:!Se,isSubmitted:He,submitCount:!Se,touched:!Se||Ie,isSubmitting:!Se,isValid:!Se}),$e=Object(l.useRef)(we(u)),_e=$e.current,qe=_e.isOnBlur,Je=_e.isOnChange;De.current=v,Le.current=i;var Ue=Object(l.useCallback)((function(){return!ee.current&&Ne({})}),[]),Ge=Object(l.useCallback)((function(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t||ie({errors:C.current,error:r,name:e,validFields:G.current,fieldsWithValidation:$.current}),u=H(C.current,e);if(Z(r)?(($.current.has(e)||Le.current)&&(G.current.add(e),n=n||u),C.current=re(C.current,e)):(G.current.delete(e),n=n||!u||!ae(u,r[e]),T(C.current,e,r[e])),n&&!S(t))return Ue(),!0}),[]),Ke=Object(l.useCallback)((function(e,r){var t=e.ref,n=e.options,u=Ve&&b(t)&&S(r)?"":r;_(t)&&n?n.forEach((function(e){var r=e.ref;return r.checked=r.value===u})):q(t)&&!ue(u)?t.files=u:U(t)?s(t.options).forEach((function(e){return e.selected=u.includes(e.value)})):J(t)&&n?n.length>1?n.forEach((function(e){var r=e.ref;return r.checked=String(u).includes(r.value)})):n[0].ref.checked=!!u:t.value=u}),[]),Qe=Object(l.useCallback)((function(e){var r=ze.current,t=r.isDirty,n=r.dirtyFields;if(!w.current[e]||!t&&!n)return!1;var u=Y.current[e]!==X(w,e,ke),c=H(A.current,e),a=ye(Ae.current,e),i=oe.current;return u?T(A.current,e,!0):re(A.current,e),oe.current=a&&!me(H(cr(),ge(e)),H(Q.current,ge(e)))||!Z(A.current),t&&i!==oe.current||n&&c!==H(A.current,e)}),[]),Xe=Object(l.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(r,t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.current[r]){e.next=6;break}return e.next=3,ve(w,Pe,w.current[r],ke);case 3:return n=e.sent,Ge(r,n,!!t&&null),e.abrupt("return",Z(n));case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),[Ge,Pe]),Ye=Object(l.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(r){var t,n,u,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le.current(cr(),De.current,Pe);case 2:if(t=e.sent,n=t.errors,u=K.current,K.current=Z(n),!F(r)){e.next=12;break}return a=r.map((function(e){var r=H(n,e);return r?T(C.current,e,r):re(C.current,e),!r})).every(Boolean),Ue(),e.abrupt("return",a);case 12:return i=H(n,r),Ge(r,i?Object(o.a)({},r,i):{},u!==K.current),e.abrupt("return",!i);case 15:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Ge,Pe]),Ze=Object(l.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(r){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r||Object.keys(w.current),!Le.current){e.next=3;break}return e.abrupt("return",Ye(t));case 3:if(!F(t)){e.next=9;break}return e.next=6,Promise.all(t.map(function(){var e=Object(a.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe(r,!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 6:return n=e.sent,Ue(),e.abrupt("return",n.every(Boolean));case 9:return e.next=11,Xe(t);case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Ye,Xe]),er=Object(l.useCallback)((function(e,r,t){var n=t.shouldDirty,u=t.shouldValidate;pe(e,r).forEach((function(t){var c={},a=w.current[t];a&&(T(c,e,r),Ke(a,H(c,t)),n&&Qe(t),u&&Ze(t))}))}),[Ze,Ke,Qe]),rr=Object(l.useCallback)((function(e,r,t){return w.current[e]?(Ke(w.current[e],r),t.shouldDirty&&Qe(e)):(Oe(r)||er(e,r,t),x||(ke.current[e]=r),!0)}),[Qe,Ke,er]),tr=function(e){return te.current||B.current.has(e)||B.current.has((e.match(/\w+/)||[])[0])},nr=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!Z(P.current))for(var t in P.current)e&&!P.current[t].has(e)&&!P.current[t].has(ge(e))&&P.current[t].size||(z.current[t](),r=!1);return r};function ur(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=rr(e,r,t)||tr(e);nr(e),n&&Ue(),t.shouldValidate&&Ze(e)}function cr(e){return ue(e)?X(w,e,ke):F(e)?e.reduce((function(e,r){return Object.assign(Object.assign({},e),Object(o.a)({},r,X(w,r,ke)))}),{}):ce(w,ke)}de.current=de.current?de.current:function(){var e=Object(a.a)(c.a.mark((function e(r){var t,n,u,a,i,s,f,l,b,v,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.type,n=r.target,u=n.name,!(a=w.current[u])){e.next=27;break}if(s=t===d,f=je(Object.assign({isBlurEvent:s,isReValidateOnChange:Je,isReValidateOnBlur:qe,isSubmitted:se.current,isTouched:!!H(E.current,u)},We.current)),l=Qe(u)||tr(u),s&&!H(E.current,u)&&ze.current.touched&&(T(E.current,u,!0),l=!0),!f){e.next=11;break}return nr(u),e.abrupt("return",l&&Ue());case 11:if(!Le.current){e.next=22;break}return e.next=14,Le.current(cr(),De.current,Pe);case 14:b=e.sent,v=b.errors,O=K.current,K.current=Z(v),i=H(v,u)?Object(o.a)({},u,H(v,u)):{},O!==K.current&&(l=!0),e.next=25;break;case 22:return e.next=24,ve(w,Pe,a,ke);case 24:i=e.sent;case 25:nr(u),!Ge(u,i)&&l&&Ue();case 27:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var ar=Object(l.useCallback)(Object(a.a)(c.a.mark((function e(){var r,t,n,u,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,Le.current(Object.assign(Object.assign(Object.assign({},Q.current),cr()),r),De.current,Pe);case 3:t=e.sent,n=t.errors,u=K.current,K.current=Z(n),u!==K.current&&Ue();case 8:case"end":return e.stop()}}),e)}))),[Pe]),ir=Object(l.useCallback)((function(e,r){return ne(w,de.current,e,ke,x,r)}),[x]),sr=Object(l.useCallback)((function(e,r){!e||ye(Ae.current,e.ref.name)&&!r||(ir(e,r),x&&([C,E,A,Y].forEach((function(r){return re(r.current,e.ref.name)})),[$,G].forEach((function(r){return r.current.delete(e.ref.name)})),(ze.current.isValid||ze.current.touched||ze.current.isDirty)&&(oe.current=!Z(A.current),Ue(),Le.current&&ar())))}),[ar,ir]);function or(e){e?(F(e)?e:[e]).forEach((function(e){return re(C.current,e)})):C.current={},Ue()}function fr(e,r){K.current=!1,T(C.current,e,Object.assign(Object.assign({},r),{ref:(w.current[e]||{}).ref})),Ue()}var lr=Object(l.useCallback)((function(e,r,t){var n=t?P.current[t]:B.current,u=W(r)?Q.current:r,c=ce(w,ke,e);return ue(e)?he(c,e,n,W(r)?H(u,e):r,!0):F(e)?e.reduce((function(e,r){return Object.assign(Object.assign({},e),Object(o.a)({},r,he(c,r,n,u)))}),{}):(W(t)&&(te.current=!0),N(!Z(c)&&c||u))}),[]);function br(e,r){return lr(e,r)}function dr(e){(F(e)?e:[e]).forEach((function(e){return sr(w.current[e],!0)}))}function vr(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var t,n,u=e.name,c=e.type,a=e.value,o=Object.assign({ref:e},r),f=w.current,l=Ce(e),d=function(r){return Ve&&(!b(e)||r===e)},v=f[u],O=!0;if(v&&(l?F(v.options)&&M(v.options).find((function(e){return a===e.ref.value&&d(e.ref)})):d(v.ref)))f[u]=Object.assign(Object.assign({},v),r);else{if(c){var p=Re(e,(function(){return sr(v)}));v=l?Object.assign({options:[].concat(s(M(v&&v.options||[])),[{ref:e,mutationWatcher:p}]),ref:{type:c,name:u}},r):Object.assign(Object.assign({},o),{mutationWatcher:p})}else v=o;f[u]=v;var h=W(H(ke.current,u));if(Z(Q.current)&&h||(n=H(h?Q.current:ke.current,u),O=W(n),t=ye(Ae.current,u),O||t||Ke(v,n)),i&&!t&&ze.current.isValid?ar():Z(r)||($.current.add(u),!He&&ze.current.isValid&&ve(w,Pe,v,ke).then((function(e){var r=K.current;Z(e)?G.current.add(u):K.current=!1,r!==K.current&&Ue()}))),!Y.current[u]&&(!t||!O)){var j=X(w,u,ke);Y.current[u]=O?L(j)?Object.assign({},j):j:n}c&&V(l&&v.options?v.options[v.options.length-1]:v,l||xe(e),de.current)}}function Or(e,r){if(!Ee)if(ue(e))vr({name:e},r);else{if(!L(e)||!("name"in e))return function(r){return r&&vr(r,e)};vr(e,r)}}var pr=Object(l.useCallback)((function(e,r){return function(){var t=Object(a.a)(c.a.mark((function t(n){var u,a,i,s,o,f,l,b,d,v;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&n.preventDefault&&(n.preventDefault(),n.persist()),u={},a=ce(w,ke),ze.current.isSubmitting&&(be.current=!0,Ue()),t.prev=4,!Le.current){t.next=16;break}return t.next=8,Le.current(a,De.current,Pe);case 8:i=t.sent,s=i.errors,o=i.values,C.current=s,u=s,a=o,t.next=28;break;case 16:f=0,l=Object.values(w.current);case 17:if(!(f<l.length)){t.next=28;break}if(!(b=l[f])){t.next=25;break}return d=b.ref.name,t.next=23,ve(w,Pe,b,ke);case 23:(v=t.sent)[d]?(T(u,d,v[d]),G.current.delete(d)):$.current.has(d)&&(re(C.current,d),G.current.add(d));case 25:f++,t.next=17;break;case 28:if(!Z(u)||!Object.keys(C.current).every((function(e){return Object.keys(w.current).includes(e)}))){t.next=35;break}return C.current={},Ue(),t.next=33,e(a,n);case 33:t.next=40;break;case 35:if(C.current=Object.assign(Object.assign({},C.current),u),!r){t.next=39;break}return t.next=39,r(u,n);case 39:k&&I(w.current,u);case 40:return t.prev=40,se.current=!0,be.current=!1,le.current=le.current+1,Ue(),t.finish(40);case 46:case"end":return t.stop()}}),t,null,[[4,,40,46]])})));return function(e){return t.apply(this,arguments)}}()}),[k,Pe]),hr=function(e){var r=e.errors,t=e.isDirty,n=e.isSubmitted,u=e.touched,c=e.isValid,a=e.submitCount,i=e.dirtyFields;r||(C.current={}),u||(E.current={}),c||(G.current=new Set,$.current=new Set,K.current=!0),t||(oe.current=!1),i||(A.current={}),n||(se.current=!1),a||(le.current=0),Y.current={},D.current={},B.current=new Set,te.current=!1},jr=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Ve)for(var t=0,n=Object.values(w.current);t<n.length;t++){var u=n[t];if(u){var c=u.ref,a=u.options,i=Ce(c)&&F(a)?a[0].ref:c;if(b(i))try{i.closest("form").reset();break}catch(s){}}}w.current={},Q.current=e||Object.assign({},Q.current),e&&nr(""),ke.current=x?{}:e||{},Object.values(Fe.current).forEach((function(e){return fe(e)&&e()})),hr(r),Ue()};Object(l.useEffect)((function(){return ee.current=!1,function(){ee.current=!0,w.current&&Object.values(w.current).forEach((function(e){return sr(e,!0)}))}}),[sr]),!i&&ze.current.isValid&&(K.current=G.current.size>=$.current.size&&Z(C.current));var gr={dirtyFields:A.current,isSubmitted:se.current,submitCount:le.current,touched:E.current,isDirty:oe.current,isSubmitting:be.current,isValid:He?se.current&&Z(C.current):K.current},mr={trigger:Ze,setValue:Object(l.useCallback)(ur,[Ue,rr,Ze]),getValues:Object(l.useCallback)(cr,[]),register:Object(l.useCallback)(Or,[Q.current]),unregister:Object(l.useCallback)(dr,[]),formState:Se?new Proxy(gr,{get:function(e,r){if(r in e)return ze.current[r]=!0,e[r]}}):gr},kr=Object.assign({removeFieldEventListener:ir,renderWatchedInputs:nr,watchInternal:lr,reRender:Ue,mode:We.current,reValidateMode:{isReValidateOnBlur:qe,isReValidateOnChange:Je},errorsRef:C,touchedFieldsRef:E,fieldsRef:w,isWatchAllRef:te,watchFieldsRef:B,resetFieldArrayFunctionRef:Fe,watchFieldsHookRef:P,watchFieldsHookRenderRef:z,fieldArrayDefaultValues:D,validFieldsRef:G,dirtyFieldsRef:A,fieldsWithValidationRef:$,fieldArrayNamesRef:Ae,isDirtyRef:oe,isSubmittedRef:se,readFormStateRef:ze,defaultValuesRef:Q,unmountFieldsStateRef:ke,validateResolver:i?ar:void 0},mr);return Object.assign({watch:br,control:kr,handleSubmit:pr,reset:Object(l.useCallback)(jr,[]),clearErrors:Object(l.useCallback)(or,[]),setError:Object(l.useCallback)(fr,[]),errors:C.current},mr)}var De=Object(l.createContext)(null);De.displayName="RHFContext"}}]);
//# sourceMappingURL=5.fdbc4e60.chunk.js.map