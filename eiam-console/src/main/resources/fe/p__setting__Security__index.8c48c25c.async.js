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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[666],{31632:function(ae,w,r){var o=r(86855),a=r(5375),L=r(41572),i=r(98879),I=r(79685),m=r(26275),W=r(4847),A=r(63342),s=["options","fieldProps","proFieldProps","valueEnum"],G=I.forwardRef(function(d,n){var Z=d.options,E=d.fieldProps,v=d.proFieldProps,H=d.valueEnum,p=(0,a.Z)(d,s);return(0,A.jsx)(W.Z,(0,o.Z)({ref:n,valueType:"checkbox",valueEnum:(0,L.h)(H,void 0),fieldProps:(0,o.Z)({options:Z},E),lightProps:(0,o.Z)({labelFormatter:function(){return(0,A.jsx)(W.Z,(0,o.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,L.h)(H,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:Z},E),proFieldProps:v},p))}},p.lightProps),proFieldProps:v},p))}),y=I.forwardRef(function(d,n){var Z=d.fieldProps,E=d.children;return(0,A.jsx)(i.Z,(0,o.Z)((0,o.Z)({ref:n},Z),{},{children:E}))}),V=(0,m.G)(y,{valuePropName:"checked"}),C=V;C.Group=G,w.Z=C},41326:function(ae,w,r){var o=r(86855),a=r(5375),L=r(41572),i=r(69889),I=r(79685),m=r(26275),W=r(4847),A=r(63342),s=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],G=I.forwardRef(function(d,n){var Z=d.fieldProps,E=d.options,v=d.radioType,H=d.layout,p=d.proFieldProps,e=d.valueEnum,z=(0,a.Z)(d,s);return(0,A.jsx)(W.Z,(0,o.Z)((0,o.Z)({valueType:v==="button"?"radioButton":"radio",ref:n,valueEnum:(0,L.h)(e,void 0)},z),{},{fieldProps:(0,o.Z)({options:E,layout:H},Z),proFieldProps:p,filedConfig:{customLightMode:!0}}))}),y=I.forwardRef(function(d,n){var Z=d.fieldProps,E=d.children;return(0,A.jsx)(i.ZP,(0,o.Z)((0,o.Z)({},Z),{},{ref:n,children:E}))}),V=(0,m.G)(y,{valuePropName:"checked",ignoreWidth:!0}),C=V;C.Group=G,C.Button=i.ZP.Button,C.displayName="ProFormComponent",w.Z=C},53804:function(ae,w,r){var o=r(86855),a=r(5375),L=r(41572),i=r(79685),I=r(9366),m=r(4847),W=r(63342),A=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],s=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],G=i.forwardRef(function(n,Z){var E=n.fieldProps,v=n.children,H=n.params,p=n.proFieldProps,e=n.mode,z=n.valueEnum,Q=n.request,q=n.showSearch,ue=n.options,_=(0,a.Z)(n,A),J=(0,i.useContext)(I.Z);return(0,W.jsx)(m.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,L.h)(z),request:Q,params:H,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:ue,mode:e,showSearch:q,getPopupContainer:J.getPopupContainer},E),ref:Z,proFieldProps:p},_),{},{children:v}))}),y=i.forwardRef(function(n,Z){var E=n.fieldProps,v=n.children,H=n.params,p=n.proFieldProps,e=n.mode,z=n.valueEnum,Q=n.request,q=n.options,ue=(0,a.Z)(n,s),_=(0,o.Z)({options:q,mode:e||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},E),J=(0,i.useContext)(I.Z);return(0,W.jsx)(m.Z,(0,o.Z)((0,o.Z)({valueEnum:(0,L.h)(z),request:Q,params:H,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({getPopupContainer:J.getPopupContainer},_),ref:Z,proFieldProps:p},ue),{},{children:v}))}),V=G,C=y,d=V;d.SearchSelect=C,d.displayName="ProFormComponent",w.Z=d},25051:function(ae,w,r){var o=r(86855),a=r(5375),L=r(79685),i=r(4847),I=r(63342),m=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],W=L.forwardRef(function(A,s){var G=A.fieldProps,y=A.unCheckedChildren,V=A.checkedChildren,C=A.proFieldProps,d=(0,a.Z)(A,m);return(0,I.jsx)(i.Z,(0,o.Z)({valueType:"switch",fieldProps:(0,o.Z)({unCheckedChildren:y,checkedChildren:V},G),ref:s,valuePropName:"checked",proFieldProps:C,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},d))});w.Z=W},4818:function(ae,w,r){r.d(w,{W:function(){return n}});var o=r(68591),a=r.n(o),L=r(76091),i=r.n(L),I=r(39620),m=r.n(I),W=r(27478),A=r(76505),s=r(79685),G=A.ZP.ConfigContext,y=function(E){var v=E.prefixCls;return m()({},"".concat(v),{margin:"0 auto"})};function V(Z){var E=(0,s.useContext)(G),v=E.getPrefixCls,H=".".concat(v());return(0,W.Xj)("ContainerComponent",function(p){var e=i()(i()({},p),{},{prefixCls:".".concat(Z),antCls:H});return[y(e)]})}var C=r(63342),d="topiam-container",n=function(E){var v=E.children,H=v===void 0?null:v,p=E.maxWidth,e=p===void 0?1e3:p,z=V(d),Q=z.wrapSSR,q=z.hashId;return Q((0,C.jsx)("div",{className:a()("".concat(d),q),style:{maxWidth:e},children:H}))}},50102:function(ae,w,r){r.d(w,{Gh:function(){return m},SC:function(){return W},Zw:function(){return a},gD:function(){return I},n6:function(){return L},o:function(){return A},pR:function(){return i},rD:function(){return o}});var o;(function(s){s.EX900005="EX900005",s.EX000102="EX000102",s.EX000202="EX000202",s.SUCCESS="200"})(o||(o={}));var a;(function(s){s.ALIYUN="aliyun",s.QI_NIU="qiniu",s.TENCENT="tencent",s.NET_EASE="netease",s.MAXMIND="maxmind"})(a||(a={}));var L;(function(s){s.ALIYUN="aliyun",s.TENCENT="tencent",s.GEE_TEST="geetest",s.HCAPTCHA="hcaptcha",s.RECAPTCHA="recaptcha"})(L||(L={}));var i;(function(s){s.STANDARD="standard",s.CUSTOM_MADE="custom_made"})(i||(i={}));var I;(function(s){s.SAML2="saml2",s.OIDC="oidc",s.CAS="cas",s.JWT="jwt",s.FORM="form",s.OAUTH2="oauth2"})(I||(I={}));var m;(function(s){s.ALLOW="ALLOW",s.DENY="DENY"})(m||(m={}));var W;(function(s){s.ROLE="ROLE",s.RESOURCE="RESOURCE",s.USER="USER",s.ORGANIZATION="ORGANIZATION",s.USER_GROUP="USER_GROUP"})(W||(W={}));var A;(function(s){s.PHONE="PHONE",s.USERNAME="USERNAME",s.EMAIL="EMAIL"})(A||(A={}))},11217:function(ae,w,r){r.r(w),r.d(w,{default:function(){return ar}});var o=r(84019),a=r.n(o),L=r(32061),i=r.n(L),I=r(7863),m=r.n(I),W=r(90649),A=r(76091),s=r.n(A),G=r(4818),y=r(33665),V=r(49678),C=r(50157),d=r(53425),n=r(4485),Z=r(92479),E=r(81262),v=r(87465),H=r(23571),p=r(79685),e=r(63342),z={labelCol:{span:6},wrapperCol:{span:18}},Q=function(h){var S=n.Z.useForm(),f=m()(S,1),u=f[0],j=(0,p.useState)(!0),U=m()(j,2),T=U[0],B=U[1],b=(0,p.useState)(!1),k=m()(b,2),M=k[0],K=k[1];return(0,p.useEffect)(function(){h.visible&&(B(!0),(0,y.EA)().then(function(c){c.success&&(u.setFieldsValue(c.result),B(!1))}))},[u,h.visible]),(0,e.jsx)(V.Z,{title:"\u57FA\u7840\u8BBE\u7F6E",headerBordered:!0,children:(0,e.jsx)(G.W,{children:(0,e.jsx)(C.A,s()(s()({form:u,scrollToFirstError:!0},z),{},{layout:"horizontal",requiredMark:!1,labelAlign:"left",onFinish:function(){var c=i()(a()().mark(function D(x){var F,t,l;return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return F=x,B(!0),K(!0),Math.sign(x.sessionMaximum)===0&&(F=s()(s()({},F),{},{sessionMaximum:1}),u.setFieldValue("sessionMaximum",1)),g.next=6,(0,y.r3)(F).finally(function(){B(!1),K(!1)});case 6:t=g.sent,l=t.success,l&&Z.ZP.success("\u64CD\u4F5C\u6210\u529F");case 9:case"end":return g.stop()}},D)}));return function(D){return c.apply(this,arguments)}}(),submitter:{render:function(D,x){return(0,e.jsx)(d.S,{children:x})},submitButtonProps:{loading:M},resetButtonProps:{style:{display:"none"}}},children:(0,e.jsxs)(E.Z,{spinning:T,children:[(0,e.jsx)(C.A.Item,{name:"sessionMaximum",extra:"\u540C\u4E00\u7528\u6237\u540C\u65F6\u5728\u7EBF\u6570\u91CF\uFF0C-1\u4E3A\u4E0D\u9650\u5236\u3002",label:"\u7528\u6237\u5E76\u53D1\u6570",children:(0,e.jsx)(v.Z,{min:-1,max:100})}),(0,e.jsx)(C.A.Item,{label:"\u4F1A\u8BDD\u6709\u6548\u65F6\u95F4",name:"sessionValidTime",addonAfter:"\u79D2\uFF08\u6682\u672A\u652F\u6301\uFF09",children:(0,e.jsx)(v.Z,{min:18e3,readOnly:!0})}),(0,e.jsx)(C.A.Item,{label:"\u8BB0\u4F4F\u6211\u6709\u6548\u65F6\u95F4",name:"rememberMeValidTime",addonAfter:"\u79D2",children:(0,e.jsx)(v.Z,{min:43200})}),(0,e.jsx)(C.A.Item,{label:"\u9A8C\u8BC1\u7801\u6709\u6548\u65F6\u95F4",name:"verifyCodeValidTime",extra:"\u9A8C\u8BC1\u573A\u666F\u4E0B\uFF0C\u9A8C\u8BC1\u7801\u9A8C\u8BC1\u6709\u6548\u65F6\u95F4\u3002",addonAfter:"\u5206",children:(0,e.jsx)(v.Z,{min:1,max:30})}),(0,e.jsx)(H.Z,{}),(0,e.jsx)(C.A.Item,{label:"\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u6301\u7EED\u65F6\u95F4",name:"loginFailureDuration",addonAfter:"\u5206\u949F",children:(0,e.jsx)(v.Z,{})}),(0,e.jsx)(C.A.Item,{label:"\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u6B21\u6570",name:"loginFailureCount",extra:'\u7BA1\u7406\u5458\u8BBE\u7F6E\u7528\u6237\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u6B21\u6570\uFF0C\u5728"\u5141\u8BB8\u6301\u7EED\u65F6\u95F4" \u8FBE\u5230\u8BBE\u7F6E\u503C\uFF0C\u5F53\u524D\u8D26\u6237\u88AB\u9501\u5B9A\u3002',addonAfter:"\u81EA\u52A8\u9501\u5B9A",children:(0,e.jsx)(v.Z,{})}),(0,e.jsx)(C.A.Item,{label:"\u81EA\u52A8\u89E3\u9501\u65F6\u95F4",name:"autoUnlockTime",extra:"\u7BA1\u7406\u5458\u8BBE\u7F6E\u81EA\u52A8\u89E3\u9501\u65F6\u95F4\uFF0C\u7528\u6237\u8FDE\u7EED\u767B\u5F55\u5931\u8D25\u88AB\u9501\u5B9A\u540E\uFF0C\u8FBE\u5230\u5BF9\u5E94\u65F6\u95F4\uFF0C\u5C06\u81EA\u52A8\u89E3\u9501\u3002",addonAfter:"\u5206\u949F",children:(0,e.jsx)(v.Z,{min:0})})]})}))})})},q=r(26602),ue=r(10071),_=r(54517),J=r(68263),ee=r(41394),he=r(93977),re=r(80591),Ce=r(41326),me=r(25051),ie=r(67457),te=r(15457),Ee=r(27101),xe=r(63908),Se=function(h){var S=h.visible,f=h.onCancel,u=(0,p.useState)(),j=m()(u,2),U=j[0],T=j[1],B=(0,p.useState)(!0),b=m()(B,2),k=b[0],M=b[1];return(0,te.Z)(i()(a()().mark(function K(){var c,D,x,F;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!S){l.next=9;break}return M(!0),l.next=4,(0,y.uE)();case 4:c=l.sent,D=c.success,x=c.result,D&&x&&(F=x==null?void 0:x.map(function(P){return P.value}),T(F)),M(!1);case 9:case"end":return l.stop()}},K)})),[S]),(0,e.jsx)(Ee.Z,{open:S,title:"\u5185\u7F6E\u5F31\u5BC6\u7801\u5E93",footer:!1,onCancel:f,destroyOnClose:!0,children:(0,e.jsx)(E.Z,{spinning:k,children:(0,e.jsx)(xe.ZP,{size:"small",bordered:!1,dataSource:U,pagination:{simple:!0},renderItem:function(c){return(0,e.jsx)(xe.ZP.Item,{children:c})}})})})},De=r(68591),de=r.n(De),be=r(39620),le=r.n(be),Ie=r(27478),Fe=r(76505),Te=Fe.ZP.ConfigContext,Me=function(S){var f,u=S.prefixCls,j=S.antCls;return le()({},"".concat(u),(f={},le()(f,"".concat(j,"-pro-field-radio-vertical  ").concat(j,"-radio-wrapper"),{display:"flex",alignItems:"center",height:"30px","margin-bottom":" 5px","line-height":"30px"}),le()(f,"&-expiration-date ".concat(j,"-form-item-control-input-content"),{display:"flex",alignItems:"center"}),f))};function Oe(h){var S=(0,p.useContext)(Te),f=S.getPrefixCls,u=".".concat(f());return(0,Ie.Xj)("SettingPasswordPolicy",function(j){var U=s()(s()({},j),{},{prefixCls:".".concat(h),antCls:u});return[Me(U)]})}var Re=q.Z.TextArea,ce="password-policy",Le={labelCol:{span:6},wrapperCol:{span:18}},We=function(h){var S=n.Z.useForm(),f=m()(S,1),u=f[0],j=Oe(ce),U=j.wrapSSR,T=j.hashId,B=(0,p.useState)(!1),b=m()(B,2),k=b[0],M=b[1],K=(0,p.useState)(!0),c=m()(K,2),D=c[0],x=c[1];return(0,te.Z)(i()(a()().mark(function F(){var t;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(!h.visible){P.next=7;break}return x(!0),P.next=4,(0,y.Tz)();case 4:t=P.sent,t!=null&&t.success&&u.setFieldsValue(s()({},t==null?void 0:t.result)),x(!1);case 7:case"end":return P.stop()}},F)})),[u,h.visible]),U((0,e.jsxs)(V.Z,{title:"\u5BC6\u7801\u7B56\u7565",headerBordered:!0,className:de()("".concat(ce),T),children:[(0,e.jsx)(ue.Z,{style:{backgroundColor:"#f1f1f2",border:"1px solid #f1f1f2"},message:"\u914D\u7F6E\u5BC6\u7801\u76F8\u5173\u7B56\u7565\u3002\u4FDD\u5B58\u540E\uFF0C\u6240\u6709\u5BC6\u7801\u65B0\u589E\u6216\u53D8\u66F4\u5747\u4F1A\u8FDB\u884C\u6821\u9A8C\u3002"}),(0,e.jsx)("br",{}),(0,e.jsxs)(G.W,{children:[(0,e.jsx)(C.A,s()(s()({form:u,scrollToFirstError:!0},Le),{},{layout:"horizontal",labelAlign:"left",onFinish:function(){var F=i()(a()().mark(function t(l){var P,g;return a()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return x(!0),Y.next=3,(0,y.RJ)(l).finally(function(){x(!1)});case 3:P=Y.sent,g=P.success,g&&Z.ZP.success("\u4FDD\u5B58\u6210\u529F");case 6:case"end":return Y.stop()}},t)}));return function(t){return F.apply(this,arguments)}}(),submitter:{render:function(t,l){return(0,e.jsx)(d.S,{children:l})},resetButtonProps:{style:{display:"none"}}},children:(0,e.jsxs)(E.Z,{spinning:D,children:[(0,e.jsx)(n.Z.Item,{label:"\u5BC6\u7801\u957F\u5EA6\u9650\u5236",style:{marginBottom:0},children:(0,e.jsxs)(_.Z,{gutter:[8,8],children:[(0,e.jsx)(J.Z,{xs:10,sm:10,md:8,lg:8,xl:6,children:(0,e.jsx)(n.Z.Item,{label:"\u6700\u5C0F\u957F\u5EA6",name:"passwordLeastLength",children:(0,e.jsx)(v.Z,{min:8,max:10})})}),(0,e.jsx)(J.Z,{xs:10,sm:10,md:8,lg:8,xl:6,children:(0,e.jsx)(n.Z.Item,{label:"\u6700\u5927\u957F\u5EA6",name:"passwordBiggestLength",style:{float:"right"},children:(0,e.jsx)(v.Z,{min:1,max:30})})})]})}),(0,e.jsx)(Ce.Z.Group,{layout:"vertical",label:"\u5BC6\u7801\u590D\u6742\u5EA6",name:"passwordComplexity",options:[{value:"0",label:"\u4EFB\u610F\u5BC6\u7801"},{value:"1",label:"\u5FC5\u987B\u5305\u542B\u6570\u5B57\u548C\u5B57\u6BCD"},{value:"2",label:"\u5FC5\u987B\u5305\u542B\u6570\u5B57\u548C\u5927\u5199\u5B57\u6BCD"},{value:"3",label:"\u5FC5\u987B\u5305\u542B\u6570\u5B57\u3001\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u548C\u7279\u6B8A\u5B57\u7B26"},{value:"4",label:"\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u548C\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E24\u79CD"},{value:"5",label:"\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u548C\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E09\u79CD"}]}),(0,e.jsx)(n.Z.Item,{style:{marginBottom:0},label:(0,e.jsxs)("span",{children:["\u5BC6\u7801\u8FC7\u671F\u68C0\u67E5\xA0",(0,e.jsx)(ee.Z,{title:"\u5F00\u542F\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u8BA1\u7B97\u5BC6\u7801\u8BBE\u7F6E\u65F6\u95F4",children:(0,e.jsx)(re.Z,{})})]}),children:(0,e.jsxs)(_.Z,{gutter:[8,8],children:[(0,e.jsx)(J.Z,{xs:10,sm:11,md:9,lg:8,xl:6,children:(0,e.jsxs)(n.Z.Item,{label:"\u6709\u6548\u671F",className:de()("".concat(ce,"-expiration-date"),T),children:[(0,e.jsx)(n.Z.Item,{name:"passwordValidDays",noStyle:!0,children:(0,e.jsx)(v.Z,{min:7,max:365})}),(0,e.jsx)("span",{children:"\xA0\u5929"})]})}),(0,e.jsx)(J.Z,{xs:12,sm:13,md:12,lg:9,xl:8,children:(0,e.jsxs)(n.Z.Item,{label:"\u8FC7\u671F\u524D",className:de()("".concat(ce,"-expiration-date"),T),children:[(0,e.jsx)(n.Z.Item,{name:"passwordValidWarnBeforeDays",noStyle:!0,children:(0,e.jsx)(v.Z,{min:7,max:30})}),(0,e.jsx)("span",{children:"\xA0\u5929\u63D0\u9192"})]})})]})}),(0,e.jsx)(n.Z.Item,{name:"notSameChars",label:(0,e.jsxs)("span",{children:["\u5BC6\u7801\u76F8\u540C\u5B57\u7B26\xA0",(0,e.jsx)(ee.Z,{title:"\u5BC6\u7801\u4E0D\u80FD\u8FDE\u7EED\u5B58\u5728\u76F8\u540C\u5B57\u7B26\u4E2A\u6570",children:(0,e.jsx)(re.Z,{})})]}),children:(0,e.jsx)(v.Z,{min:1,max:10})}),(0,e.jsx)(me.Z,{name:"includeAccountCheck",valuePropName:"checked",label:(0,e.jsxs)("span",{children:["\u7528\u6237\u4FE1\u606F\u68C0\u67E5\xA0",(0,e.jsx)(ee.Z,{title:"\u5F00\u542F\u540E\uFF0C\u5BC6\u7801\u4E2D\u5C06\u4E0D\u80FD\u5305\u542B\u7528\u6237\u540D\u3001\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u524D\u7F00\u548C\u59D3\u540D\u62FC\u97F3",children:(0,e.jsx)(re.Z,{})})]})}),(0,e.jsx)(me.Z,{name:"historyPasswordCheck",label:(0,e.jsxs)("span",{children:["\u5386\u53F2\u5BC6\u7801\u68C0\u67E5\xA0",(0,e.jsx)(ee.Z,{title:"\u68C0\u67E5\u8BBE\u7F6E\u7684\u5BC6\u7801\u662F\u5426\u4E3A\u5386\u53F2\u5BC6\u7801\u3002",children:(0,e.jsx)(re.Z,{})})]})}),(0,e.jsx)(ie.Z,{name:["historyPasswordCheck"],children:function(t){var l=t.historyPasswordCheck;return l?(0,e.jsx)(n.Z.Item,{label:(0,e.jsxs)("span",{children:["\u5386\u53F2\u5BC6\u7801\u6B21\u6570\u8303\u56F4\xA0",(0,e.jsx)(ee.Z,{title:"\u68C0\u67E5\u5386\u53F2\u5BC6\u7801\u6B21\u6570\u8303\u56F4\uFF0C\u8BE5\u503C\u5FC5\u987B\u4ECB\u4E8E1\u523010\u6B21\u5BC6\u7801\u4E4B\u95F4\u3002",children:(0,e.jsx)(re.Z,{})})]}),children:(0,e.jsx)(n.Z.Item,{name:"historyPasswordCheckCount",noStyle:!0,children:(0,e.jsx)(v.Z,{min:1,max:10})})}):(0,e.jsx)(e.Fragment,{})}}),(0,e.jsx)(n.Z.Item,{label:(0,e.jsxs)("span",{children:["\u975E\u6CD5\u5B57\u7B26\u5E8F\u5217\xA0",(0,e.jsx)(ee.Z,{title:"\u9632\u6B62\u975E\u6CD5\u5B57\u7B26\u5E8F\u5217\uFF0C\u4F8B\u5982\u952E\u76D8\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3002",children:(0,e.jsx)(re.Z,{})})]}),name:"illegalSequenceCheck",valuePropName:"checked",children:(0,e.jsx)(he.Z,{})}),(0,e.jsxs)(n.Z.Item,{label:(0,e.jsxs)("span",{children:["\u5F31\u5BC6\u7801\u68C0\u67E5\xA0",(0,e.jsx)(ee.Z,{title:"\u5F31\u5BC6\u7801\u901A\u5E38\u662F\u6307\u5BB9\u6613\u88AB\u522B\u4EBA\u731C\u6D4B\u5230\u6216\u88AB\u7834\u89E3\u5DE5\u5177\u7834\u89E3\u7684\u5BC6\u7801\u3002\u5728\u8BBE\u7F6E\u6216\u4FEE\u6539\u5BC6\u7801\u65F6\uFF0C\u5982\u679C\u5BC6\u7801\u662F\u5F31\u5BC6\u7801\u5B57\u5178\u4E2D\u7684\u5BC6\u7801\uFF0C\u5219\u7CFB\u7EDF\u4F1A\u5F3A\u5236\u7528\u6237\u91CD\u65B0\u8BBE\u7F6E\uFF0C\u4EE5\u63D0\u5347\u7528\u6237\u5BC6\u7801\u7684\u5B89\u5168\u6027\u3002",children:(0,e.jsx)(re.Z,{})})]}),children:[(0,e.jsx)(n.Z.Item,{noStyle:!0,name:"weakPasswordCheck",valuePropName:"checked",children:(0,e.jsx)(he.Z,{})}),(0,e.jsx)(ie.Z,{name:["weakPasswordCheck"],children:function(t){var l=t.weakPasswordCheck;return l&&(0,e.jsx)("span",{children:(0,e.jsx)("a",{onClick:function(){M(!0)},children:"\xA0\u5185\u7F6E\u5F31\u5BC6\u7801\u5E93"})})}})]}),(0,e.jsx)(ie.Z,{name:["weakPasswordCheck"],children:function(t){var l=t.weakPasswordCheck;return l&&(0,e.jsx)(n.Z.Item,{label:"\u5176\u4ED6\u5F31\u5BC6\u7801",extra:(0,e.jsx)("span",{children:"\u6BCF\u884C\u4EE3\u8868\u4E00\u6761\u5F31\u5BC6\u7801"}),children:(0,e.jsx)(_.Z,{children:(0,e.jsx)(J.Z,{span:10,children:(0,e.jsx)(n.Z.Item,{name:"customWeakPassword",style:{marginBottom:5},children:(0,e.jsx)(Re,{rows:3})})})})})}})]})})),(0,e.jsx)(Se,{visible:k,onCancel:function(){M(!1)}})]})]}))},Ne=We,Pe=r(59251),X=r(50102),Ue=r(36489),je=r(53804),Be=r(96597),oe=r(61872),Ke=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(oe.Z,{name:["config","regionId"],label:"RegionId",rules:[{required:!0,message:" RegionId \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(oe.Z,{name:["config","accessKeyId"],label:"accessKeyId",rules:[{required:!0,message:"AccessKeyId \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(oe.Z,{name:["config","accessKeySecret"],label:"accessKeySecret",rules:[{required:!0,message:"AccessKeySecret \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(je.Z,{name:["config","mode"],label:"\u9A8C\u8BC1\u65B9\u5F0F",options:[{value:"slide",label:"\u6ED1\u52A8\u9A8C\u8BC1"},{value:"traceless",label:"\u65E0\u75D5\u9A8C\u8BC1"},{value:"smart",label:"\u667A\u80FD\u9A8C\u8BC1"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u9A8C\u8BC1\u65B9\u5F0F"}]})]})},$e=Ke,we=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(oe.Z,{name:["config","captchaId"],label:"\u9A8C\u8BC1 ID",rules:[{required:!0,message:"\u9A8C\u8BC1 ID \u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(oe.Z.Password,{name:["config","captchaKey"],label:"\u9A8C\u8BC1 KEY",rules:[{required:!0,message:"\u9A8C\u8BC1 KEY \u4E3A\u5FC5\u586B\u9879"}]})]})},ve=we,Ge=function(){return(0,e.jsx)(e.Fragment,{})},Ve=Ge,He=Ee.Z.confirm,Ye={labelCol:{xs:{span:24},sm:{span:7},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:13},md:{span:14}}},Xe={wrapperCol:{xs:{span:24,offset:0},sm:{span:17,offset:7},md:{span:18,offset:6}}},pe=X.n6.GEE_TEST,ke=function(h){var S=n.Z.useForm(),f=m()(S,1),u=f[0],j=h.visible,U=(0,p.useState)(pe),T=m()(U,2),B=T[0],b=T[1],k=(0,p.useState)(!1),M=m()(k,2),K=M[0],c=M[1],D=(0,p.useState)(!1),x=m()(D,2),F=x[0],t=x[1];return(0,te.Z)(i()(a()().mark(function l(){var P,g,O;return a()().wrap(function($){for(;;)switch($.prev=$.next){case 0:if(!j){$.next=11;break}return u.resetFields(),c(!0),$.next=5,(0,y.mg)();case 5:return P=$.sent,g=P.success,O=P.result,g&&O&&O.enabled?(t(O.enabled),b(O.provider),u.setFieldsValue(s()({},O))):u.setFieldsValue({provider:B}),c(!1),$.abrupt("return");case 11:t(!1);case 12:case"end":return $.stop()}},l)})),[j]),(0,e.jsx)(E.Z,{spinning:K,children:(0,e.jsx)(V.Z,{title:"\u884C\u4E3A\u9A8C\u8BC1\u7801",headerBordered:!0,bordered:!1,collapsed:!F,style:{marginBottom:"24px"},extra:(0,e.jsx)(me.Z,{noStyle:!0,fieldProps:{checked:F,onChange:function(){var l=i()(a()().mark(function g(O){return a()().wrap(function($){for(;;)switch($.prev=$.next){case 0:O?t(O):He({title:"\u8B66\u544A",icon:(0,e.jsx)(Ue.Z,{}),content:"\u5173\u95ED\u6B64\u529F\u80FD\u5C06\u65E0\u6CD5\u4F7F\u7528\u884C\u4E3A\u9A8C\u8BC1\u7801\u9A8C\u8BC1\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5173\u95ED\u3002",okText:"\u786E\u5B9A",okType:"danger",cancelText:"\u53D6\u6D88",centered:!0,onOk:function(){var R=i()(a()().mark(function se(){var Ze,ye;return a()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return c(!0),ne.next=3,(0,y.$g)().finally(function(){c(!1)});case 3:if(Ze=ne.sent,ye=Ze.success,!ye){ne.next=12;break}return t(O),Z.ZP.success("\u64CD\u4F5C\u6210\u529F"),b(pe),u.resetFields(),u.setFieldsValue({provider:pe}),ne.abrupt("return");case 12:case"end":return ne.stop()}},se)}));function Ae(){return R.apply(this,arguments)}return Ae}(),onCancel:function(){}});case 1:case"end":return $.stop()}},g)}));function P(g){return l.apply(this,arguments)}return P}()}}),children:(0,e.jsx)(G.W,{children:(0,e.jsxs)(C.A,s()(s()({form:u,scrollToFirstError:!0,layout:"horizontal",initialValues:{provider:"aliyun"}},Ye),{},{labelAlign:"right",onReset:function(){u.resetFields(),u.setFieldsValue({provider:B})},submitter:{render:function(P,g){return(0,e.jsx)(n.Z.Item,s()(s()({},Xe),{},{children:(0,e.jsx)(Be.Z,{children:g})}))},submitButtonProps:{style:{display:F?"":"none"}},resetButtonProps:{style:{display:F?"":"none"}}},onFinish:function(){var l=i()(a()().mark(function P(g){var O,Y;return a()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,y.oE)({provider:g.provider,config:s()(s()({},g.config),{},{provider:g.provider})});case 2:if(O=R.sent,Y=O.success,!Y){R.next=7;break}return Z.ZP.success("\u4FDD\u5B58\u6210\u529F"),R.abrupt("return",Promise.resolve(!0));case 7:return R.abrupt("return",Promise.reject());case 8:case"end":return R.stop()}},P)}));return function(P){return l.apply(this,arguments)}}(),children:[(0,e.jsx)(je.Z,{name:"provider",label:"\u670D\u52A1\u63D0\u4F9B\u5546",rules:[{required:!0}],fieldProps:{onChange:function(){var l=i()(a()().mark(function g(O){var Y,$,R;return a()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return c(!0),b(O),u.resetFields(),u.setFieldsValue({provider:O}),se.next=6,(0,y.mg)();case 6:Y=se.sent,$=Y.success,R=Y.result,$&&R&&R.enabled&&O===R.provider&&(t(R.enabled),u.setFieldsValue(s()({},R))),c(!1);case 11:case"end":return se.stop()}},g)}));function P(g){return l.apply(this,arguments)}return P}()},options:[{value:X.n6.GEE_TEST,label:"\u6781\u9A8C\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:X.n6.ALIYUN,label:"\u963F\u91CC\u4E91\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:X.n6.TENCENT,label:"\u817E\u8BAF\u4E91\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:X.n6.RECAPTCHA,label:"reCaptcha\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0},{value:X.n6.HCAPTCHA,label:"hCaptcha\uFF08\u6682\u672A\u5B9E\u73B0\uFF0C\u6B22\u8FCEPR\uFF09",disabled:!0}]}),B===X.n6.ALIYUN&&(0,e.jsx)($e,{}),B===X.n6.TENCENT&&(0,e.jsx)(Ve,{}),B===X.n6.GEE_TEST&&(0,e.jsx)(ve,{}),B===X.n6.RECAPTCHA&&(0,e.jsx)(ve,{}),B===X.n6.HCAPTCHA&&(0,e.jsx)(ve,{})]}))})})})},ze=r(31632),Je=r(18639),Qe=Fe.ZP.ConfigContext;function qe(h){var S=(0,p.useContext)(Qe),f=S.getPrefixCls,u=".".concat(f()),j=(0,Je.l)(function(){return le()({},".".concat(h),le()({marginBottom:"24px"},"".concat(u,"-pro-field-checkbox-vertical ").concat(u,"-checkbox-group-item"),{height:"30px"}))});return{className:j}}var ge="setting-mfa",_e={labelCol:{xs:{span:24},sm:{span:7},md:{span:6}},wrapperCol:{xs:{span:24},sm:{span:13},md:{span:14}}},er={wrapperCol:{xs:{span:24,offset:0},sm:{span:17,offset:7},md:{span:18,offset:6}}},rr=function(h){var S=n.Z.useForm(),f=m()(S,1),u=f[0],j=(0,p.useState)(!1),U=m()(j,2),T=U[0],B=U[1],b=h.visible,k=qe(ge),M=k.className;return(0,te.Z)(i()(a()().mark(function K(){var c,D,x;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!b){t.next=11;break}return u.resetFields(),B(!0),t.next=5,(0,y.Vr)();case 5:return c=t.sent,D=c.success,x=c.result,D&&x&&u.setFieldsValue(s()({},x)),B(!1),t.abrupt("return");case 11:case"end":return t.stop()}},K)})),[b]),(0,e.jsx)("div",{className:M,children:(0,e.jsxs)(V.Z,{title:"\u591A\u56E0\u7D20\u8BA4\u8BC1",headerBordered:!0,bordered:!1,className:de()("".concat(ge)),children:[(0,e.jsx)(ue.Z,{style:{backgroundColor:"#f1f1f2",border:"1px solid #f1f1f2"},message:"\u652F\u6301\u5728\u8D26\u5BC6\u767B\u5F55\u540E\uFF0C\u5F00\u542F\u4E8C\u6B21\u8BA4\u8BC1\u3002"}),(0,e.jsx)("br",{}),(0,e.jsx)(G.W,{children:(0,e.jsx)(C.A,s()(s()({form:u,scrollToFirstError:!0,layout:"horizontal",labelAlign:"right"},_e),{},{onReset:function(){u.resetFields()},submitter:{render:function(c,D){return(0,e.jsx)(n.Z.Item,s()(s()({},er),{},{children:(0,e.jsx)(Be.Z,{children:D})}))},resetButtonProps:{style:{display:"none"}}},onFinish:function(){var K=i()(a()().mark(function c(D){var x,F;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return B(!0),l.next=3,(0,y.nW)(s()({},D)).finally(function(){B(!1)});case 3:x=l.sent,F=x.success,F&&(Z.ZP.success("\u4FDD\u5B58\u6210\u529F"),D.mode==="none"&&u.resetFields(["manner"]));case 6:case"end":return l.stop()}},c)}));return function(c){return K.apply(this,arguments)}}(),children:(0,e.jsx)(E.Z,{spinning:T,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ce.Z.Group,{label:"MFA\u6A21\u5F0F",name:"mode",initialValue:"none",options:[{label:"\u5173\u95ED",value:"none"},{label:"\u5E38\u5F00\u6A21\u5F0F",value:"always"},{label:"\u667A\u80FD\u6A21\u5F0F\uFF08\u6682\u4E0D\u652F\u6301\uFF09",value:"smart",disabled:!0}],extra:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:"\u5E38\u5F00\u6A21\u5F0F\u4E0B\u6BCF\u6B21\u767B\u5F55\u90FD\u9700\u8981\u4E8C\u6B21\u8BA4\u8BC1\u3002"}),(0,e.jsx)("br",{}),(0,e.jsx)("span",{children:"\u667A\u80FD\u6A21\u5F0F\u4E0B\u4E0D\u5FC5\u6BCF\u6B21\u767B\u5F55\u90FD\u4E8C\u6B21\u8BA4\u8BC1\uFF0C\u7CFB\u7EDF\u4F1A\u7075\u6D3B\u8FDB\u884C\u5224\u65AD\u3002"})]})}),(0,e.jsx)(ie.Z,{name:["mode"],children:function(c){var D=c.mode;return D&&D!=="none"&&(0,e.jsx)(ze.Z.Group,{label:"\u4E8C\u6B21\u8BA4\u8BC1\u65B9\u5F0F",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E8C\u6B21\u8BA4\u8BC1\u65B9\u5F0F"}],name:"factors",layout:"vertical",options:[{label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",value:"sms_otp"},{label:"\u90AE\u4EF6\u9A8C\u8BC1\u7801",value:"email_otp"},{label:"\u8F6F\u4EF6\u52A8\u6001\u7801",value:"app_totp"}]})}})]})})}))})]})})},sr=rr,N;(function(h){h.BASIC_SETTING="basic_setting",h.PASSWORD_POLICY="password_policy",h.MFA="mfa",h.CAPTCHA="captcha"})(N||(N={}));var fe=r(18541),nr=r(96104),ar=function(){var h=(0,p.useState)(),S=m()(h,2),f=S[0],u=S[1],j=(0,nr.useLocation)();return(0,te.Z)(i()(a()().mark(function U(){var T,B,b;return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(T=fe.Z.parse(j.search),B=T,b=B.tab,!(!b||!(b.toUpperCase()in N))){M.next=6;break}return u(N.BASIC_SETTING),Pe.m.replace({pathname:j.pathname,search:fe.Z.stringify({tab:N.BASIC_SETTING})}),M.abrupt("return");case 6:u(b);case 7:case"end":return M.stop()}},U)})),[f]),(0,e.jsxs)(W._z,{content:"\u7CFB\u7EDF\u5168\u5C40\u5B89\u5168\u914D\u7F6E\u3001\u5982\u5BC6\u7801\u7B56\u7565\u3001\u4F1A\u8BDD\u7B56\u7565\u3002 \u5728\u5BC6\u7801\u7B56\u7565\u4E2D\u53EF\u4EE5\u8BBE\u7F6E\u76F8\u5E94\u7684\u5BC6\u7801\u590D\u6742\u5EA6\u3001\u76F8\u5E94\u7684\u9501\u5B9A\u89E3\u9501\u7B56\u7565\uFF0C\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u5141\u8BB8\u4E0E\u5386\u53F2\u5BC6\u7801\u91CD\u590D\u7B49\u9AD8\u7EA7\u7B56\u7565\u3002\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u201C\u5F00\u542F\u5F31\u5BC6\u7801\u5B57\u5178\u5E93\u201D\u6765\u68C0\u67E5\u5BC6\u7801\u7684\u5B89\u5168\u5F3A\u5EA6\u3002",tabActiveKey:f,onTabChange:function(T){u(T),Pe.m.replace({pathname:j.pathname,search:fe.Z.stringify({tab:T})})},tabList:[{tab:"\u57FA\u7840\u8BBE\u7F6E",key:N.BASIC_SETTING},{tab:"\u591A\u56E0\u7D20\u8BA4\u8BC1",key:N.MFA},{tab:"\u884C\u4E3A\u9A8C\u8BC1\u7801",key:N.CAPTCHA},{tab:"\u5BC6\u7801\u7B56\u7565",key:N.PASSWORD_POLICY}],children:[f===N.BASIC_SETTING&&(0,e.jsx)(Q,{visible:f===N.BASIC_SETTING}),f===N.PASSWORD_POLICY&&(0,e.jsx)(Ne,{visible:f===N.PASSWORD_POLICY}),f===N.CAPTCHA&&(0,e.jsx)(ke,{visible:f===N.CAPTCHA}),f===N.MFA&&(0,e.jsx)(sr,{visible:f===N.MFA})]})}}}]);
