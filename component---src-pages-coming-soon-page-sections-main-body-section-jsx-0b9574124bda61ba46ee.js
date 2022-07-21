/*! For license information please see component---src-pages-coming-soon-page-sections-main-body-section-jsx-0b9574124bda61ba46ee.js.LICENSE.txt */
(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[218,3975,2017,8830,5836,4241,9504],{14715:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=r(n(59713)),a=r(n(6479)),o=r(n(67154)),c=r(n(67294)),s=(r(n(45697)),r(n(75900))),u=(n(73976),r(n(6988))),l=n(53017),f=(r(n(66857)),[0,8,16,24,32,40]),p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var d=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return f.forEach((function(e,r){0!==r&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})})),n}(0,"xs"),l.keys.reduce((function(t,n){return function(e,t,n){var r={};p.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.default)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))};function x(e){var t,n=e.alignContent,r=e.alignItems,u=e.classes,l=e.className,f=e.component,p=e.container,d=e.direction,g=e.item,m=e.justify,b=e.lg,h=e.md,y=e.sm,w=e.spacing,v=e.wrap,j=e.xl,O=e.xs,S=e.zeroMinWidth,P=(0,a.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),Z=(0,s.default)((t={},(0,i.default)(t,u.container,p),(0,i.default)(t,u.item,g),(0,i.default)(t,u.zeroMinWidth,S),(0,i.default)(t,u["spacing-xs-".concat(String(w))],p&&0!==w),(0,i.default)(t,u["direction-xs-".concat(String(d))],d!==x.defaultProps.direction),(0,i.default)(t,u["wrap-xs-".concat(String(v))],v!==x.defaultProps.wrap),(0,i.default)(t,u["align-items-xs-".concat(String(r))],r!==x.defaultProps.alignItems),(0,i.default)(t,u["align-content-xs-".concat(String(n))],n!==x.defaultProps.alignContent),(0,i.default)(t,u["justify-xs-".concat(String(m))],m!==x.defaultProps.justify),(0,i.default)(t,u["grid-xs-".concat(String(O))],!1!==O),(0,i.default)(t,u["grid-sm-".concat(String(y))],!1!==y),(0,i.default)(t,u["grid-md-".concat(String(h))],!1!==h),(0,i.default)(t,u["grid-lg-".concat(String(b))],!1!==b),(0,i.default)(t,u["grid-xl-".concat(String(j))],!1!==j),t),l);return c.default.createElement(f,(0,o.default)({className:Z},P))}t.styles=d,x.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,u.default)(d,{name:"MuiGrid"})(x);t.default=g},97322:function(e,t,n){"use strict";var r=n(95318);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i.default}});var i=r(n(14715))},66857:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return function(){return null}};t.default=n},75900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},35985:function(e,t,n){"use strict";n.d(t,{RK:function(){return o},eR:function(){return c},nC:function(){return s},Wn:function(){return u},Df:function(){return l},lr:function(){return f},MA:function(){return p},E7:function(){return d},nq:function(){return x},bE:function(){return g},An:function(){return m},X_:function(){return b},kY:function(){return h},ur:function(){return y},TI:function(){return w},D6:function(){return v},iW:function(){return j},cq:function(){return O},TN:function(){return S},X5:function(){return P}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=260,c={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},s=a(a({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"}),{},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),u={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},l={fontWeight:"300",lineHeight:"1.5em"},f="#F5A800",p="#ff9800",d="#f44336",x="#4caf50",g="#00acc1",m="#e91e63",b="#999999",h={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},y={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},w={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},v={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},j={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},O={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},S=(a({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},v),a({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},w),a({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},j),a({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},y),a({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},h),a({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},O),a({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},l),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700"}),P=a(a({},S),{},{marginTop:".625rem"})},48359:function(e,t,n){"use strict";var r=n(87462),i=n(63366),a=(n(67294),n(6988)),o=n(97322),c=n(23431),s=["classes","children","className"];function u(e){var t=Object.assign({},e),n=t.classes,a=t.children,u=t.className,l=(0,i.Z)(t,s);return(0,c.tZ)(o.Z,(0,r.Z)({container:!0},l,{className:n.grid+" "+u}),a)}u.defaultProps={className:""},t.Z=(0,a.default)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(u)},55212:function(e,t,n){"use strict";var r=n(87462),i=n(63366),a=(n(67294),n(6988)),o=n(97322),c=n(23431),s=["classes","children","className"];t.Z=(0,a.default)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})((function(e){var t=Object.assign({},e),n=t.classes,a=t.children,u=t.className,l=(0,i.Z)(t,s);return(0,c.tZ)(o.Z,(0,r.Z)({item:!0},l,{className:n.grid+" "+u}),a)}))},75620:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(94578),i=n(67294),a=n(6988),o=n(48359),c=n(55212),s=n(4942);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={section:{padding:"30px 0",textAlign:"center"},title:l(l({},n(35985).TN),{},{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},p=n(23431),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.classes;return(0,p.tZ)("div",{className:e.section},(0,p.tZ)(o.Z,{justify:"center"},(0,p.tZ)(c.Z,{xs:12,sm:12,md:8},(0,p.tZ)("h1",{className:e.title},"This Page is Coming Soon"),(0,p.tZ)("p",{className:e.about},"Sorry! This page is still currently undergoing development. Stay tuned!"))))},t}(i.Component),x=(0,a.default)(f)(d)}}]);
//# sourceMappingURL=component---src-pages-coming-soon-page-sections-main-body-section-jsx-0b9574124bda61ba46ee.js.map