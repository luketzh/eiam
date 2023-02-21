/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[976],{61872:function(H,T,i){var C=i(86855),F=i(5375),O=i(79685),h=i(4847),j=i(63342),A=["fieldProps","proFieldProps"],d=["fieldProps","proFieldProps"],v="text",u=function(x){var W=x.fieldProps,J=x.proFieldProps,I=(0,F.Z)(x,A);return(0,j.jsx)(h.Z,(0,C.Z)({valueType:v,fieldProps:W,filedConfig:{valueType:v},proFieldProps:J},I))},L=function(x){var W=x.fieldProps,J=x.proFieldProps,I=(0,F.Z)(x,d);return(0,j.jsx)(h.Z,(0,C.Z)({valueType:"password",fieldProps:W,proFieldProps:J,filedConfig:{valueType:v}},I))},w=u;w.Password=L,w.displayName="ProFormComponent",T.Z=w},63820:function(H,T,i){var C=i(86855),F=i(5375),O=i(79685),h=i(4847),j=i(63342),A=["fieldProps","proFieldProps"],d=function(u,L){var w=u.fieldProps,z=u.proFieldProps,x=(0,F.Z)(u,A);return(0,j.jsx)(h.Z,(0,C.Z)({ref:L,valueType:"textarea",fieldProps:w,proFieldProps:z},x))};T.Z=O.forwardRef(d)},50102:function(H,T,i){i.d(T,{Gh:function(){return A},SC:function(){return d},Zw:function(){return F},gD:function(){return j},n6:function(){return O},o:function(){return v},pR:function(){return h},rD:function(){return C}});var C;(function(u){u.EX900005="EX900005",u.EX000102="EX000102",u.EX000202="EX000202",u.SUCCESS="200"})(C||(C={}));var F;(function(u){u.ALIYUN="aliyun",u.QI_NIU="qiniu",u.TENCENT="tencent",u.NET_EASE="netease",u.MAXMIND="maxmind"})(F||(F={}));var O;(function(u){u.ALIYUN="aliyun",u.TENCENT="tencent",u.GEE_TEST="geetest",u.HCAPTCHA="hcaptcha",u.RECAPTCHA="recaptcha"})(O||(O={}));var h;(function(u){u.STANDARD="standard",u.CUSTOM_MADE="custom_made"})(h||(h={}));var j;(function(u){u.SAML2="saml2",u.OIDC="oidc",u.CAS="cas",u.JWT="jwt",u.FORM="form",u.OAUTH2="oauth2"})(j||(j={}));var A;(function(u){u.ALLOW="ALLOW",u.DENY="DENY"})(A||(A={}));var d;(function(u){u.ROLE="ROLE",u.RESOURCE="RESOURCE",u.USER="USER",u.ORGANIZATION="ORGANIZATION",u.USER_GROUP="USER_GROUP"})(d||(d={}));var v;(function(u){u.PHONE="PHONE",u.USERNAME="USERNAME",u.EMAIL="EMAIL"})(v||(v={}))},41511:function(H,T,i){i.r(T),i.d(T,{default:function(){return p}});var C=i(76091),F=i.n(C),O=i(84019),h=i.n(O),j=i(32061),A=i.n(j),d=i(7863),v=i.n(d),u=i(50102),L=i(83664),w=i(59251),z=i(55178),x=i(61872),W=i(63820),J=i(90649),I=i(49678),te=i(40780),ce=i(91498),ne=i(15457),oe=i(70453),Q=i(27101),le=i(81262),fe=i(50673),de=i(60703),K=i(79685),ue=i(39620),M=i.n(ue),pe=i(76505),ve=i(18639),me=pe.ZP.ConfigContext;function ye(m){var l=(0,K.useContext)(me),E=l.getPrefixCls,P=".".concat(E()),S=".".concat(m),b=(0,ve.l)(function(B){var N,_,U=B.token;return M()({},"".concat(S),(_={},M()(_,"&-item-card",M()({border:"none",borderRadius:6},"".concat(P,"-pro-card-body"),{padding:"16px !important",background:"#f7f8fa",borderRadius:U.borderRadius})),M()(_,"&-item-content-wrapper",{display:"flex"}),M()(_,"&-item-avatar",M()({width:"54px",height:"54px",borderRadius:"4px",marginRight:"12px"},"& ".concat(P,"-avatar"),M()({width:"54px !important",height:"54px !important",display:"flex",alignItems:"center",borderRadius:"4px"},"> img",{height:"auto"}))),M()(_,"&-item-content",(N={display:"flex",flexDirection:"column",fontSize:"16px",minWidth:0},M()(N,"&-title",{fontWeight:500,color:"#293350",marginTop:"4px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),M()(N,"&-type",{color:"#9fabcb",fontSize:"13px",marginTop:"4px"}),M()(N,"&-desc",{marginTop:"12px"}),N)),_))});return{className:b}}var e=i(18541),t=i(96104),n=i(68591),a=i.n(n),r=i(63342),o=oe.Z.Paragraph,s="topiam-create-app",f=function(l){return l===u.pR.STANDARD?"\u6807\u51C6\u534F\u8BAE":l===u.pR.CUSTOM_MADE?"\u5B9A\u5236\u6A21\u677F":"\u5168\u90E8"},D=function(l){var E=l.name,P=l.code,S=l.protocol,b=l.open,B=l.onCancel,N=(0,de.Z)(),_=v()(N,1),U=_[0],ie=(0,K.useState)(!1),V=v()(ie,2),se=V[0],k=V[1];return(0,ne.Z)(A()(h()().mark(function R(){return h()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:b&&(U==null||U.setFieldsValue({name:"".concat(E," \u5E94\u7528")}));case 1:case"end":return Z.stop()}},R)})),[b]),(0,r.jsx)(z.Y,{title:"\u6DFB\u52A0\u5E94\u7528",open:b,width:500,form:U,scrollToFirstError:!0,initialValues:{template:P},autoFocusFirstInput:!0,layout:"horizontal",labelAlign:"left",labelCol:{span:4},wrapperCol:{span:20},requiredMark:!1,preserve:!1,modalProps:{onCancel:function(G){U.resetFields(),B(G)}},onFinish:function(){var R=A()(h()().mark(function G(Z){var X,re,q;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return k(!0),g.next=3,(0,L.ri)(Z).finally(function(){k(!1)});case 3:if(X=g.sent,re=X.success,q=X.result,!(re&&q)){g.next=9;break}return setTimeout(function(){var y=Q.Z.success({title:"\u6DFB\u52A0\u6210\u529F",content:"\u8BF7\u8FDB\u5165\u5E94\u7528\u7BA1\u7406\u9875\u9762\u5B8C\u5584\u914D\u7F6E\u5E76\u67E5\u770B\u4FE1\u606F",okText:"\u5B8C\u5584\u914D\u7F6E",onOk:function(){y.destroy(),w.m.push("/app/config?id=".concat(q.id,"&name=").concat(Z.name,"&protocol=").concat(S))}})},300),g.abrupt("return",!0);case 9:return g.abrupt("return",!1);case 10:case"end":return g.stop()}},G)}));return function(G){return R.apply(this,arguments)}}(),children:(0,r.jsxs)(le.Z,{spinning:se,children:[(0,r.jsx)(x.Z,{name:"template",hidden:!0}),(0,r.jsx)(x.Z,{name:"name",preserve:!1,label:"\u5E94\u7528\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0",rules:[{required:!0,message:"\u5E94\u7528\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}]}),(0,r.jsx)(W.Z,{name:"remark",preserve:!1,fieldProps:{rows:2,maxLength:20,showCount:!1},placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",label:"\u5907\u6CE8"})]})})},c=function(){var m=(0,K.useState)(u.pR.STANDARD),l=v()(m,2),E=l[0],P=l[1],S=(0,K.useState)(),b=v()(S,2),B=b[0],N=b[1],_=(0,K.useState)(!1),U=v()(_,2),ie=U[0],V=U[1],se=(0,K.useState)(),k=v()(se,2),R=k[0],G=k[1],Z=(0,t.useLocation)(),X=(0,K.useRef)(),re=ye(s),q=re.className;return(0,ne.Z)(A()(h()().mark(function Y(){var g,y,$,he,ae;return h()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if($=e.Z.parse(Z.search),he=$,ae=he.tab,!(!ae||!(ae.toUpperCase()in u.pR))){ee.next=7;break}return P(u.pR.STANDARD),N({type:E}),w.m.replace({pathname:Z.pathname,search:e.Z.stringify({tab:u.pR.STANDARD})}),ee.abrupt("return");case 7:(g=X.current)===null||g===void 0||(y=g.reset)===null||y===void 0||y.call(g),P(ae),N({type:E});case 10:case"end":return ee.stop()}},Y)})),[E]),(0,r.jsx)("div",{className:q,children:(0,r.jsxs)(J._z,{onBack:function(){w.m.push("/app")},className:a()("".concat(s)),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"\u672C\u9875\u9762\u5305\u542B\u4E86\u6240\u6709\u5DF2\u652F\u6301\u7684\u53EF\u6DFB\u52A0\u5E94\u7528\u5217\u8868\uFF0C\u7BA1\u7406\u5458\u53EF\u4EE5\u9009\u62E9\u9700\u8981\u4F7F\u7528\u7684\u5E94\u7528\u8FDB\u884C\u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u5E76\u5F00\u59CB\u540E\u7EED\u4F7F\u7528\u3002"}),(0,r.jsx)("span",{children:"\u5E94\u7528\u5206\u4E3A\u4E24\u79CD\uFF1A\u4E00\u79CD\u662F\u652F\u6301\u6807\u51C6\u7684 OIDC\u3001SAML\u3001JWT\u3001CAS \u7B49\u6A21\u677F\u7684\u5E94\u7528\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u5BF9\u5E94\u7684\u6807\u51C6\u5E94\u7528\u6A21\u677F\u6765\u5B9E\u73B0\u5355\u70B9\u767B\u5F55\u529F\u80FD\uFF1B\u53E6\u4E00\u79CD\u662F\u5B9A\u5236\u5E94\u7528\uFF0C\u672C\u7C7B\u5E94\u7528\u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5BF9\u63A5\u5176\u5355\u70B9\u767B\u5F55\u6216\u7528\u6237\u540C\u6B65\u7684\u63A5\u53E3\uFF0C\u7531 TopIAM \u4E3A\u5176\u63D0\u4F9B\u5B9A\u5236\u5316\u6A21\u677F\u8FDB\u884C\u5BF9\u63A5\u3002"})]}),tabActiveKey:E,onTabChange:function(g){P(g),w.m.replace({pathname:Z.pathname,search:e.Z.stringify({tab:g})})},tabProps:{size:"small"},tabList:[{tab:"\u6807\u51C6\u534F\u8BAE",key:u.pR.STANDARD},{tab:"\u5B9A\u5236\u6A21\u677F",key:u.pR.CUSTOM_MADE}],children:[(0,r.jsx)(I.Z,{bodyStyle:{padding:0},children:(0,r.jsx)(te.t,{layout:"horizontal",onFinish:function(g){var y,$;return N(F()(F()({},B),g)),(y=X.current)===null||y===void 0||($=y.reset)===null||$===void 0||$.call(y),Promise.resolve()},children:(0,r.jsx)(x.Z,{name:"name",label:"\u6A21\u7248\u540D\u79F0"})})}),(0,r.jsx)("br",{}),(0,r.jsx)(ce.Rs,{split:!0,rowKey:"code",showActions:"always",headerTitle:f(E),search:!1,actionRef:X,request:L.LB,pagination:{defaultPageSize:20,size:"small"},grid:{xs:1,sm:2,md:2,lg:3,xl:3,xxl:4},params:F()({},B),itemCardProps:{className:"".concat(s,"-item-card")},metas:{content:{render:function(g,y){return(0,r.jsxs)("div",{className:"".concat(s,"-item-content-wrapper"),onClick:function(){V(!0),G(y)},children:[(0,r.jsx)("div",{className:"".concat(s,"-item-avatar"),children:(0,r.jsx)(fe.C,{shape:"square",src:y.icon,size:45},y.icon)}),(0,r.jsxs)("div",{className:"".concat(s,"-item-content"),children:[(0,r.jsx)("span",{className:"".concat(s,"-item-content-title"),children:y.name}),y.type===u.pR.CUSTOM_MADE&&(0,r.jsx)("span",{className:"".concat(s,"-item-content-type"),children:y.protocol}),(0,r.jsx)(o,{className:"".concat(s,"-item-content-desc"),ellipsis:{tooltip:y.desc,rows:2},title:y.desc,children:y.desc?y.desc:(0,r.jsx)(r.Fragment,{children:"\xA0"})})]})]},y.code)}}}}),R&&(0,r.jsx)(D,{code:R==null?void 0:R.code,name:R==null?void 0:R.name,protocol:R.protocol,open:ie,onCancel:function(){V(!1),G(void 0)}})]})})},p=c},15457:function(H,T,i){var C=i(29268),F=i(79685),O=i(43865);function h(j,A){function d(v){return(0,O.mf)(v[Symbol.asyncIterator])}(0,F.useEffect)(()=>{const v=j();let u=!1;function L(){return(0,C.mG)(this,void 0,void 0,function*(){if(d(v))for(;!((yield v.next()).done||u););else yield v})}return L(),()=>{u=!0}},A)}T.Z=h},43865:function(H,T,i){i.d(T,{mf:function(){return F}});const C=d=>d!==null&&typeof d=="object",F=d=>typeof d=="function",O=d=>typeof d=="string",h=d=>typeof d=="boolean",j=d=>typeof d=="number",A=d=>typeof d=="undefined"},29268:function(H,T,i){i.d(T,{CR:function(){return te},Jh:function(){return x},XA:function(){return I},ZT:function(){return F},_T:function(){return h},ev:function(){return oe},mG:function(){return z},pi:function(){return O},pr:function(){return ne}});var C=function(e,t){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])},C(e,t)};function F(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");C(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var O=function(){return O=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},O.apply(this,arguments)};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n}function j(e,t,n,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,a);else for(var f=e.length-1;f>=0;f--)(s=e[f])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}function A(e,t){return function(n,a){t(n,a,e)}}function d(e,t,n,a,r,o){function s(B){if(B!==void 0&&typeof B!="function")throw new TypeError("Function expected");return B}for(var f=a.kind,D=f==="getter"?"get":f==="setter"?"set":"value",c=!t&&e?a.static?e:e.prototype:null,p=t||(c?Object.getOwnPropertyDescriptor(c,a.name):{}),m,l=!1,E=n.length-1;E>=0;E--){var P={};for(var S in a)P[S]=S==="access"?{}:a[S];for(var S in a.access)P.access[S]=a.access[S];P.addInitializer=function(B){if(l)throw new TypeError("Cannot add initializers after decoration has completed");o.push(s(B||null))};var b=(0,n[E])(f==="accessor"?{get:p.get,set:p.set}:p[D],P);if(f==="accessor"){if(b===void 0)continue;if(b===null||typeof b!="object")throw new TypeError("Object expected");(m=s(b.get))&&(p.get=m),(m=s(b.set))&&(p.set=m),(m=s(b.init))&&r.push(m)}else(m=s(b))&&(f==="field"?r.push(m):p[D]=m)}c&&Object.defineProperty(c,a.name,p),l=!0}function v(e,t,n){for(var a=arguments.length>2,r=0;r<t.length;r++)n=a?t[r].call(e,n):t[r].call(e);return a?n:void 0}function u(e){return typeof e=="symbol"?e:"".concat(e)}function L(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function w(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function z(e,t,n,a){function r(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function f(p){try{c(a.next(p))}catch(m){s(m)}}function D(p){try{c(a.throw(p))}catch(m){s(m)}}function c(p){p.done?o(p.value):r(p.value).then(f,D)}c((a=a.apply(e,t||[])).next())})}function x(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,r,o,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(c){return function(p){return D([c,p])}}function D(c){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(n=0)),n;)try{if(a=1,r&&(o=c[0]&2?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(p){c=[6,p],r=0}finally{a=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var W=Object.create?function(e,t,n,a){a===void 0&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){a===void 0&&(a=n),e[a]=t[n]};function J(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&W(t,e,n)}function I(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function te(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var a=n.call(e),r,o=[],s;try{for(;(t===void 0||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(f){s={error:f}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return o}function ce(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(te(arguments[t]));return e}function ne(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var a=Array(e),r=0,t=0;t<n;t++)for(var o=arguments[t],s=0,f=o.length;s<f;s++,r++)a[r]=o[s];return a}function oe(e,t,n){if(n||arguments.length===2)for(var a=0,r=t.length,o;a<r;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))}function Q(e){return this instanceof Q?(this.v=e,this):new Q(e)}function le(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=n.apply(e,t||[]),r,o=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(l){a[l]&&(r[l]=function(E){return new Promise(function(P,S){o.push([l,E,P,S])>1||f(l,E)})})}function f(l,E){try{D(a[l](E))}catch(P){m(o[0][3],P)}}function D(l){l.value instanceof Q?Promise.resolve(l.value.v).then(c,p):m(o[0][2],l)}function c(l){f("next",l)}function p(l){f("throw",l)}function m(l,E){l(E),o.shift(),o.length&&f(o[0][0],o[0][1])}}function fe(e){var t,n;return t={},a("next"),a("throw",function(r){throw r}),a("return"),t[Symbol.iterator]=function(){return this},t;function a(r,o){t[r]=e[r]?function(s){return(n=!n)?{value:Q(e[r](s)),done:!1}:o?o(s):s}:o}}function de(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof I=="function"?I(e):e[Symbol.iterator](),n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n);function a(o){n[o]=e[o]&&function(s){return new Promise(function(f,D){s=e[o](s),r(f,D,s.done,s.value)})}}function r(o,s,f,D){Promise.resolve(D).then(function(c){o({value:c,done:f})},s)}}function K(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var ue=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function M(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&W(t,e,n);return ue(t,e),t}function pe(e){return e&&e.__esModule?e:{default:e}}function ve(e,t,n,a){if(n==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?a:n==="a"?a.call(e):a?a.value:t.get(e)}function me(e,t,n,a,r){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?r.call(e,n):r?r.value=n:t.set(e,n),n}function ye(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}}}]);
