(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1421:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(1401),i=(t(0),t(476));function o(){return Object(a.a)()||i.a}},1452:function(e,n,t){"use strict";var a=t(11),i=t(0),o=t(2),r=t(1);n.a=function(e){var n=e.time,t=Math.floor((new Date).getTime()/1e3),c=Object(i.useState)(0),d=Object(a.a)(c,2),l=d[0],s=d[1],u=Object(i.useRef)(),p=Object(i.useState)("0"),b=Object(a.a)(p,2),f=b[0],h=b[1],x=Object(i.useState)("0"),m=Object(a.a)(x,2),g=m[0],j=m[1],O=Object(i.useState)("0"),v=Object(a.a)(O,2),y=v[0],k=v[1],w=Object(i.useState)("0"),C=Object(a.a)(w,2),S=C[0],z=C[1];return Object(i.useEffect)((function(){return n&&(u.current=setInterval((function(){s((function(e){return e>0?e-1:0}))}),1e3)),function(){n&&clearInterval(u.current)}}),[u,s,n]),Object(i.useEffect)((function(){if(n){var e=parseInt(n)-t;s(e>0?parseInt(n)-t:0)}}),[n,s,t]),Object(i.useEffect)((function(){var e=l%60,n=Math.floor(l/60%60),t=Math.floor(l/60/60%24),a=Math.floor(l/60/60/24);z(e<10?"0".concat(e):e.toString()),k(n<10?"0".concat(n):n.toString()),j(t<10?"0".concat(t):t.toString()),h(a<10?"0".concat(a):a.toString())}),[l]),Object(r.jsxs)(o.ib,{color:"#A7A7CC",fontSize:"12px",bold:!0,children:[f,":",g,":",y,":",S]})}},1788:function(e,n,t){"use strict";t.r(n);var a=t(3),i=t.n(a),o=t(12),r=t(11),c=t(8),d=t(0),l=t(20),s=t(68),u=(t(34),t(84)),p=t(146),b=t(233),f=t(469),h=t(486);var x=t(328),m=t(1421),g=t(1399),j=t(467),O=Object(j.a)(d.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),v=Object(j.a)(d.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),y=Object(j.a)(d.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),k=Object(j.a)(d.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),w=t(254),C=d.forwardRef((function(e,n){var t=e.classes,a=e.className,i=e.color,o=void 0===i?"standard":i,r=e.component,c=e.disabled,p=void 0!==c&&c,b=e.page,f=e.selected,h=void 0!==f&&f,x=e.shape,j=void 0===x?"round":x,C=e.size,S=void 0===C?"medium":C,z=e.type,A=void 0===z?"page":z,E=e.variant,B=void 0===E?"text":E,M=Object(s.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),N=("rtl"===Object(m.a)().direction?{previous:k,next:y,last:O,first:v}:{previous:y,next:k,first:O,last:v})[A];return"start-ellipsis"===A||"end-ellipsis"===A?d.createElement("div",{ref:n,className:Object(u.a)(t.root,t.ellipsis,p&&t.disabled,"medium"!==S&&t["size".concat(Object(w.a)(S))])},"\u2026"):d.createElement(g.a,Object(l.a)({ref:n,component:r,disabled:p,focusVisibleClassName:t.focusVisible,className:Object(u.a)(t.root,t.page,t[B],t[j],a,"standard"!==o&&t["".concat(B).concat(Object(w.a)(o))],p&&t.disabled,h&&t.selected,"medium"!==S&&t["size".concat(Object(w.a)(S))])},M),"page"===A&&b,N?d.createElement(N,{className:t.icon}):null)})),S=Object(p.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(x.a)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(x.a)(e.palette.primary.main,.5)),backgroundColor:Object(x.a)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(x.a)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(x.a)(e.palette.secondary.main,.5)),backgroundColor:Object(x.a)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(x.a)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(C);function z(e,n,t){return"page"===e?"".concat(t?"":"Go to ","page ").concat(n):"Go to ".concat(e," page")}var A,E,B,M,N,I,L,P,$,D,_,T,R,F,Q,V,G,W,H,J,U,X,q,K,Y,Z,ee,ne,te,ae,ie,oe,re,ce,de,le,se,ue=d.forwardRef((function(e,n){e.boundaryCount;var t=e.classes,a=e.className,i=e.color,o=void 0===i?"standard":i,r=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),c=void 0===r?z:r,p=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),x=void 0===p?function(e){return d.createElement(S,e)}:p,m=e.shape,g=void 0===m?"round":m,j=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),O=void 0===j?"medium":j,v=e.variant,y=void 0===v?"text":v,k=Object(s.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.boundaryCount,t=void 0===n?1:n,a=e.componentName,i=void 0===a?"usePagination":a,o=e.count,r=void 0===o?1:o,c=e.defaultPage,d=void 0===c?1:c,u=e.disabled,p=void 0!==u&&u,x=e.hideNextButton,m=void 0!==x&&x,g=e.hidePrevButton,j=void 0!==g&&g,O=e.onChange,v=e.page,y=e.showFirstButton,k=void 0!==y&&y,w=e.showLastButton,C=void 0!==w&&w,S=e.siblingCount,z=void 0===S?1:S,A=Object(s.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),E=Object(h.a)({controlled:v,default:d,name:i,state:"page"}),B=Object(f.a)(E,2),M=B[0],N=B[1],I=function(e,n){v||N(n),O&&O(e,n)},L=function(e,n){var t=n-e+1;return Array.from({length:t},(function(n,t){return e+t}))},P=L(1,Math.min(t,r)),$=L(Math.max(r-t+1,t+1),r),D=Math.max(Math.min(M-z,r-t-2*z-1),t+2),_=Math.min(Math.max(M+z,t+2*z+2),$[0]-2),T=[].concat(Object(b.a)(k?["first"]:[]),Object(b.a)(j?[]:["previous"]),Object(b.a)(P),Object(b.a)(D>t+2?["start-ellipsis"]:t+1<r-t?[t+1]:[]),Object(b.a)(L(D,_)),Object(b.a)(_<r-t-1?["end-ellipsis"]:r-t>t?[r-t]:[]),Object(b.a)($),Object(b.a)(m?[]:["next"]),Object(b.a)(C?["last"]:[])),R=function(e){switch(e){case"first":return 1;case"previous":return M-1;case"next":return M+1;case"last":return r;default:return null}},F=T.map((function(e){return"number"===typeof e?{onClick:function(n){I(n,e)},type:"page",page:e,selected:e===M,disabled:p,"aria-current":e===M?"true":void 0}:{onClick:function(n){I(n,R(e))},type:e,page:R(e),selected:!1,disabled:p||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?M>=r:M<=1)}}));return Object(l.a)({items:F},A)}(Object(l.a)({},e,{componentName:"Pagination"})),C=w.items;return d.createElement("nav",Object(l.a)({"aria-label":"pagination navigation",className:Object(u.a)(t.root,a),ref:n},k),d.createElement("ul",{className:t.ul},C.map((function(e,n){return d.createElement("li",{key:n},x(Object(l.a)({},e,{color:o,"aria-label":c(e.type,e.page,e.selected),shape:g,size:O,variant:y})))}))))})),pe=Object(p.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(ue),be=t(26),fe=t(4),he=t(85),xe=t.n(he),me=t(137),ge=t(96),je=t(69),Oe=t(50),ve=t.p+"static/media/ListIcon.96219b6e.svg",ye=t(52),ke=t(2),we=t(74),Ce=t(9),Se=t(80),ze=t.p+"static/media/GearIcon.2899c071.svg",Ae=t(1),Ee=["text"],Be=fe.default.div(A||(A=Object(c.a)(["\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]))),Me=function(e){var n=e.text,t=Object(Se.a)(e,Ee),a=window.screen.width,i=Object(ke.zb)(n,{placement:a>768?"top-start":"top-end",trigger:"hover"}),o=i.targetRef,r=i.tooltip,c=i.tooltipVisible;return Object(Ae.jsxs)(ke.j,Object(Ce.a)(Object(Ce.a)({},t),{},{children:[c&&r,Object(Ae.jsx)(Be,{ref:o,children:Object(Ae.jsx)("img",{src:ze,alt:"nuclear icon"})})]}))},Ne=t(1452),Ie=fe.default.div(E||(E=Object(c.a)(["\n    background: ",";\n    border-radius: 8px;\n"])),(function(e){return e.theme.isDark?"#040413":"#2A2E60"})),Le=fe.default.div(B||(B=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    padding: 24px;\n    gap: 16px;\n"]))),Pe=fe.default.div(M||(M=Object(c.a)(["\n    div:first-child {\n        font-weight: bold;\n        font-size: 20px;\n        text-transform: capitalize;\n    }\n    div:last-child {\n        font-weight: 600;\n        font-size: 14px;\n        white-space: nowrap;\n        color: #A7A7CC;\n        text-transform: capitalize;\n    }\n"]))),$e=fe.default.div(N||(N=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    flex: 1;\n    align-items: flex-end;\n    div:first-child {\n        font-weight: 600;\n        font-size: 13px;\n        white-space: nowrap;\n        color: #F2C94C;\n    }\n    div:last-child {\n        font-weight: 600;\n        font-size: 11px;\n        white-space: nowrap;\n        color: #A7A7CC;\n    }\n"]))),De=fe.default.div(I||(I=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),_e=fe.default.div(L||(L=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    padding-bottom: 37px;\n    div:last-child {\n        text-align: center;\n        font-size: 14px;\n        color: #A7A7CC;\n    }\n"]))),Te=fe.default.span(P||(P=Object(c.a)(["\n    color: ",";\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 10px;\n    letter-spacing: 0.2em;\n"])),(function(e){return"active"===e.state?"#00AC1C":"pending"===e.state?"#FFC700":"#D91A00"})),Re=fe.default.div($||($=Object(c.a)(["\n    width: 100%;\n"]))),Fe=fe.default.div(D||(D=Object(c.a)(["\n    margin: 8px 24px;\n    background-color: #23234B;\n    border-radius: 8px;\n    position: relative;\n"]))),Qe=fe.default.div(_||(_=Object(c.a)(["\n    width: ",";\n    height: 12px;\n    background: linear-gradient(90deg, #610D89 0%, #C42BB4 100%);\n    border-radius: 8px 0px 0px 8px;\n    padding: 1px;\n    display: flex;\n    justify-content: center;\n    font-size: 9px;\n    font-weight: bold;\n\n"])),(function(e){return"".concat(e.state,"%")})),Ve=fe.default.div(T||(T=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    // padding: 0px 24px; \n"]))),Ge=fe.default.div(R||(R=Object(c.a)(["\n    color: #A7A7CC;\n    font-weight: 600;\n    font-size: 14px;\n"]))),We=fe.default.div(F||(F=Object(c.a)(["\n    color: #F2C94C;\n    font-weight: 600;\n    font-size: 14px;\n"]))),He=fe.default.div(Q||(Q=Object(c.a)(["\n    height: 1px;\n    background: #21214A;\n    margin: 16px 0px;\n"]))),Je=fe.default.div(V||(V=Object(c.a)(["\n    padding: 24px 0px;\n    width: calc(100% - 42px);\n"]))),Ue=fe.default.div(G||(G=Object(c.a)(["\n    img {\n        width: 64px;\n        height: 64px;\n        max-width: unset;\n    }\n"]))),Xe=fe.default.div(W||(W=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n    flex: 2;\n"]))),qe=function(e){var n=e.saleId,t=e.ownerAddress,a=e.tokenSymbole,i=e.tokenName,o=e.tokenLogo,r=e.activeSale,c=e.softCap,d=e.hardCap,l=e.totalCap,s=e.minContribution,u=e.maxContribution,p=e.endTime,b=e.tokenState,f=Object(we.g)(),h=Object(ge.c)().account;return Object(Ae.jsxs)(Ie,{onClick:function(){h===t?f.push("/launchpad/presale/".concat(n)):f.push("/launchpad/live/".concat(n))},children:[Object(Ae.jsxs)(Le,{children:[Object(Ae.jsxs)(Xe,{children:[Object(Ae.jsx)(Ue,{children:Object(Ae.jsx)("img",{src:o,alt:"token icon"})}),Object(Ae.jsxs)(Pe,{children:[Object(Ae.jsx)(ke.ib,{children:a}),Object(Ae.jsx)(ke.ib,{children:i})]})]}),Object(Ae.jsxs)($e,{children:[Object(Ae.jsx)(ke.ib,{children:"Sale end in:"}),Object(Ae.jsx)(Ne.a,{time:p})]})]}),Object(Ae.jsxs)(De,{children:[Object(Ae.jsx)(Te,{state:b,children:"".concat(b," Sale")}),Object(Ae.jsx)(Re,{children:Object(Ae.jsx)(Fe,{children:Object(Ae.jsxs)(Qe,{state:r,children:[r.toFixed(2),"%"]})})}),Object(Ae.jsxs)(Je,{children:[Object(Ae.jsxs)(Ve,{children:[Object(Ae.jsx)(Ge,{children:"Raised:"}),Object(Ae.jsxs)(We,{children:[l,"/",d]})]}),Object(Ae.jsx)(He,{}),Object(Ae.jsxs)(Ve,{children:[Object(Ae.jsx)(Ge,{children:"Soft Cap / Hard Cap:"}),Object(Ae.jsxs)(We,{children:[c,"/",d," BNB"]})]}),Object(Ae.jsx)(He,{}),Object(Ae.jsxs)(Ve,{children:[Object(Ae.jsx)(Ge,{children:"Min/Max Contribution:"}),Object(Ae.jsxs)(We,{children:[s,"/",u," BNB"]})]}),Object(Ae.jsx)(He,{})]})]}),Object(Ae.jsxs)(_e,{children:[Object(Ae.jsx)(Me,{text:"Tokens can be clones and can have the same name as existing coins. Token creators can pretend to be owners of the real project. Please use provided social links to research and examine every project to avoid scams."}),Object(Ae.jsx)(ke.ib,{children:"Custom Contract"})]})]})},Ke=t(473),Ye=t(475),Ze=fe.default.div(H||(H=Object(c.a)(["\n  flex-wrap: wrap;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  padding: 0px 15px;\n  margin: 21px 0px;\n  border-radius: 3px;\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: center;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(e){return e.theme.isDark?"#0E0E26":"#2A2E60"}),(function(e){return e.theme.mediaQueries.sm})),en=Object(fe.default)(ke.H)(J||(J=Object(c.a)(["\n    height: 47px;\n    margin: 12px 0;\n    margin-right: ",";\n    width: ",";\n    background: ",";\n    > div {\n        flex: 1;\n        height: 47px;\n        border-radius: 5px;\n        box-sizing: border-box;\n        background: ",";\n        > div {\n            border: 1px solid ",";\n            height: 47px;\n            background: ",";\n            > div {\n                color: #A7A7CC;\n            }\n        }\n  }\n"])),(function(e){return e.isMobile?"0":"38px"}),(function(e){return e.isMobile?"100%":"auto"}),(function(e){return e.theme.isDark?"#0E0E26":"#2A2E60"}),(function(e){return e.theme.isDark?"#0E0E26":"#2A2E60"}),(function(e){return e.theme.isDark?"#2E2E55":"#4A5187"}),(function(e){return e.theme.isDark?"#0E0E26":"#2A2E60"})),nn=fe.default.div(U||(U=Object(c.a)(["\n  flex: 1;\n  position: relative;\n  padding: 0 20px;\n  z-index: 3;\n  "," {\n    min-width: 420px;\n  }\n  & input {\n    background: transparent;\n    border: none;\n    width: 100%;\n    box-shadow: none;\n    outline: none;\n    color: #A7A7CC;\n    font-size: 16px;\n    &::placeholder {\n      color: #A7A7CC;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),tn=fe.default.div(X||(X=Object(c.a)(["\n  position: absolute;\n  width: 100%;\n  background: #131313;\n  color: #eee;\n  margin-top: 12px;\n  overflow-y: auto;\n  max-height: 90vh;\n  & a {\n    color: white !important;\n  }\n  & .selectedItem {\n    background: rgba(0, 0, 0, 0.4);\n  }\n  "," {\n    max-height: 600px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),an=Object(fe.default)(ke.ib)(q||(q=Object(c.a)(["\n  padding: 0 4px;\n  width: ",";\n  height: 47px;\n  text-overflow: ellipsis;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 5px;\n  margin: 12px 0;\n  & button:last-child {\n    background: #8b2a9b;\n  }\n  "," {\n    flex: 1;\n    border: 1px solid ",";\n    border-radius: 5px;\n  }\n"])),(function(e){return e.isMobile?"100%":"auto"}),(function(e){return e.theme.isDark?"#2E2E55":"#4A5187"}),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.theme.isDark?"#2E2E55":"#4A5187"})),on=Object(fe.default)(ke.M)(K||(K=Object(c.a)(["\n  background-color: transparent !important;\n  margin: 0px 3px;\n  border: none;\n  outline: none !important;\n  box-shadow: none;\n}\n"]))),rn=function(){var e=Object(be.b)().t,n=!Object(ke.wb)().isXl,t=Object(d.useState)(!1),a=Object(r.a)(t,2),i=a[0],o=(a[1],Object(d.useState)([])),c=Object(r.a)(o,2),l=c[0];c[1];return Object(Ae.jsxs)(Ze,{children:[Object(Ae.jsx)(en,{isMobile:n,children:Object(Ae.jsx)(Ke.a,{options:[{label:e("Gold"),value:"gold"},{label:e("Silver"),value:"silver"},{label:e("Bronze"),value:"Bronze"},{label:e("other"),value:"other"}],onChange:function(e){e.value}})}),Object(Ae.jsxs)(an,{isMobile:n,children:[Object(Ae.jsxs)(nn,{children:[Object(Ae.jsx)("input",{placeholder:"Search",onChange:function(e){e.target.value}}),i&&Object(Ae.jsx)(tn,{children:l.length>0?Object(Ae.jsx)("span",{children:"ddd"}):null})]}),Object(Ae.jsx)(on,{onClick:function(){console.log("search")},children:Object(Ae.jsx)(Ye.a,{width:"22px",height:"22px",color:Object(fe.useTheme)().colors.primary})})]})]})},cn=t(220),dn=fe.default.div(Y||(Y=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  color: white;\n  margin: 24px 0 40px;\n  text-align: left;\n  .ml16 {\n    margin-left: 16px;\n  }\n  .ml32 {\n    margin-left: 32px;\n  }\n  p {\n    line-height: 24px;\n  }\n  p.w110 {\n    width: 110px;\n  }\n  p.w80 {\n    width: 80px;\n  }\n  "," {\n    align-items: flex-start;\n  }\n"])),(function(e){return e.theme.mediaQueries.xl})),ln=fe.default.h2(Z||(Z=Object(c.a)(["\n  font-size: 24px;\n  line-height: 24px;\n  font-weight: 700;\n  "," {\n    font-size: 36px;\n    line-height: 42px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xl})),sn=fe.default.div(ee||(ee=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),un=fe.default.div(ne||(ne=Object(c.a)(["\n  display: flex;\n  img {\n    margin-right: 14px;\n  }\n"]))),pn=fe.default.div(te||(te=Object(c.a)(["\n  span {\n    font-size: 12px;\n    color: #777777;\n  }\n"]))),bn=(fe.default.div(ae||(ae=Object(c.a)(["\n  button {\n    color: white;\n    border-radius: 5px;\n    height: 34px;\n    background: linear-gradient(90deg, #610D89 0%, #C42BB4 100%);\n    font-weight: 600;\n    font-size: 13px;\n    width: 102px;\n    outline: none;\n\n    img {\n      width: 16px;\n      height: 16px;\n      margin-right: 6px;\n    }\n\n    "," {\n      width: 176px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),fe.default.div(ie||(ie=Object(c.a)(["\n  > "," {\n    font-size: 12px;\n  }\n  div:last-child {\n    input {\n      border-radius: 8px;\n      border: unset;\n      height: 34px;\n      max-width: 192px;\n      width: 100%;\n      background: ",";\n    }\n  }\n"])),ke.ib,(function(e){return e.theme.isDark?"#040413":"#2A2E60"})),fe.default.div(oe||(oe=Object(c.a)(["\n  > "," {\n    font-size: 12px;\n  }\n  div: last-child {\n    background: ",";\n    border-radius: 8px;\n    div {\n      border-radius: 8px;\n      border: unset;\n      background: ",";\n    }\n  }\n"])),ke.ib,(function(e){return e.theme.isDark?"#040413":"#2A2E60"}),(function(e){return e.theme.isDark?"#040413":"#2A2E60"})),fe.default.div(re||(re=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  gap: 16px;\n  padding: 8px 0px;\n  justify-content: flex-end;\n  "," {\n    flex-direction: column;\n    align-items: end;\n  }\n  "," {\n    flex-direction: unset;\n    align-items: center;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.md})),fe.default.div(ce||(ce=Object(c.a)(["\n  margin-top: 48px;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]))),fe.default.div(de||(de=Object(c.a)(["\n  margin-top: 24px;\n  display: grid;\n  grid-gap: 20px;\n  width: 100%;\n  "," {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  "," {\n    grid-template-columns: repeat(",", 1fr);\n  }\n  @media screen and (min-width: 1320px) {\n    grid-template-columns: repeat(",", 1fr);\n  }\n  @media screen and (min-width: 1720px) {\n    grid-template-columns: repeat(",", 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return e.theme.mediaQueries.xl}),(function(e){return e.toggled?"3":"2"}),(function(e){return e.toggled?"4":"3"}),(function(e){return e.toggled?"5":"4"}))),fn=fe.default.div(le||(le=Object(c.a)(["\n  margin: 50px auto;\n  .MuiPagination-root {\n    .MuiPagination-ul {\n      flex-wrap: nowrap;\n      li {\n        &:first-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          > button::after {\n            content: 'Previous';\n            color: #7F1696;\n          }\n          > button {\n            border: none;\n          }\n          > button.Mui-disabled::after {\n            color: #888888;\n          }\n        }\n        &:last-child {\n          flex-basis: 100%;\n          display: flex;\n          justify-content: flex-end;\n          align-items: center;\n          border: none;\n          > button::before {\n            content: 'Next';\n            color: #7F1696;\n          }\n          > button {\n            border: none;\n          }\n          > button.Mui-disabled::before {\n            color: #888888;\n          }\n        }\n        & .MuiPaginationItem-icon {\n          display: none;\n        }\n        & button {\n          color: white;\n          border: 1px solid rgba(255, 255, 255, 0.15);\n        }\n        & button.Mui-selected {\n          border: none;\n          background: linear-gradient(90deg, #610D89 0%, #C42BB4 100%);\n        }\n\n      }\n    }\n  }\n"]))),hn=Object(Oe.u)(je.a),xn=fe.default.div(se||(se=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));n.default=function(){var e=Object(ge.c)().chainId,n=(Object(be.b)().t,Object(ye.d)().menuToggled),t=Object(d.useState)(null),a=Object(r.a)(t,2),c=a[0],l=a[1],s=Object(d.useState)(!0),u=Object(r.a)(s,2),p=u[0],b=u[1];return Object(d.useEffect)((function(){var n=function(){var n=Object(o.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:xe.a.get("".concat("https://thesphynx.co/api2","/getAllPresaleInfo/").concat(e)).then(function(){var e=Object(o.a)(i.a.mark((function e(n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.data){e.next=13;break}return e.prev=1,e.next=4,Promise.all(n.data.map(function(){var e=Object(o.a)(i.a.mark((function e(n){var t,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={saleId:n.sale_id,ownerAddress:n.owner_address,tokenName:n.token_name,tokenSymbole:n.token_symbol,tokenLogo:n.logo_link,activeSale:0,totalCap:0,softCap:n.soft_cap,hardCap:n.hard_cap,minContribution:n.min_buy,maxContribution:n.max_buy,endTime:n.end_time,tokenState:"active"},e.next=3,hn.totalContributionBNB(n.sale_id);case 3:return a=e.sent.toString(),o=parseFloat(me.utils.formatUnits(a,n.decimal)),t.totalCap=o,t.activeSale=o/n.hard_cap,e.next=9,hn.isDeposited(n.sale_id.toString());case 9:return a=e.sent,(a=!0)&&(r=Math.floor((new Date).getTime()/1e3),parseInt(n.start_time)<r&&parseInt(n.end_time)>r?t.totalCap<t.softCap?t.tokenState="failed":t.tokenState="active":r>parseInt(n.end_time)?t.tokenState="ended":r<parseInt(n.start_time)&&(t.tokenState="pending")),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 4:t=e.sent,l(t),b(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0),b(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();e&&n()}),[e]),Object(Ae.jsxs)(dn,{children:[Object(Ae.jsx)(sn,{children:Object(Ae.jsxs)(un,{children:[Object(Ae.jsx)("img",{src:ve,alt:"listIcon"}),Object(Ae.jsx)(pn,{children:Object(Ae.jsx)(ln,{children:"LaunchPad Listings"})})]})}),Object(Ae.jsx)(rn,{}),p&&Object(Ae.jsx)(xn,{children:Object(Ae.jsx)(cn.a,{})}),Object(Ae.jsx)(bn,{toggled:n,children:c&&c.map((function(e){return Object(Ae.jsx)(qe,{saleId:e.saleId,ownerAddress:e.ownerAddress,tokenName:e.tokenName,tokenSymbole:e.tokenSymbole,tokenLogo:e.tokenLogo,activeSale:100*e.activeSale,totalCap:e.totalCap,softCap:e.softCap,hardCap:e.hardCap,minContribution:e.minContribution,maxContribution:e.maxContribution,endTime:e.endTime,tokenState:e.tokenState,children:Object(Ae.jsx)("img",{src:e.tokenLogo,alt:"token icon"})})}))}),Object(Ae.jsx)(fn,{children:Object(Ae.jsx)(pe,{count:5,siblingCount:0})})]})}}}]);