(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9401],{8623:function(e,t,r){"use strict";r.d(t,{O:function(){return P}});var s=r(7294),i=r(4761),n=r(917),o=r(6817),a=r(6768),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))m.call(t,r)&&h(e,r,t[r]);return e},f=(e,t)=>c(e,d(t));let x=(0,n.F4)({"from, to":{opacity:.4},"50%":{opacity:1}});var v=(0,o.k)((e,{height:t,width:r,radius:s,circle:i,animate:n})=>({root:{height:(0,a.h)(t),width:i?(0,a.h)(t):(0,a.h)(r),borderRadius:i?(0,a.h)(t):e.fn.radius(s),position:"relative",WebkitTransform:"translateZ(0)"},visible:{overflow:"hidden","&::before":f(X({},e.fn.cover(0)),{content:'""',background:"dark"===e.colorScheme?e.colors.dark[7]:e.white,zIndex:10}),"&::after":f(X({},e.fn.cover(0)),{content:'""',background:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],animation:n?`${x} 1500ms linear infinite`:"none",zIndex:11})}})),g=r(7414),w=Object.defineProperty,j=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&N(e,r,t[r]);if(j)for(var r of j(t))y.call(t,r)&&N(e,r,t[r]);return e},k=(e,t)=>{var r={};for(var s in e)b.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&j)for(var s of j(e))0>t.indexOf(s)&&y.call(e,s)&&(r[s]=e[s]);return r};let E={height:"auto",width:"100%",visible:!0,animate:!0},P=(0,s.forwardRef)((e,t)=>{let r=(0,i.N4)("Skeleton",E,e),{height:n,width:o,visible:a,animate:l,className:c,circle:d,radius:u,unstyled:p,variant:m}=r,h=k(r,["height","width","visible","animate","className","circle","radius","unstyled","variant"]),{classes:X,cx:f}=v({height:n,width:o,circle:d,radius:u,animate:l},{name:"Skeleton",unstyled:p,variant:m});return s.createElement(g.x,O({className:f(X.root,{[X.visible]:a},c),ref:t},h))});P.displayName="@mantine/core/Skeleton"},8852:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-smtp",function(){return r(554)}])},9140:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(5893),i=r(7414),n=r(8623);function o(e){let{}=e;return(0,s.jsxs)(i.x,{className:"",children:[(0,s.jsx)(n.O,{mt:6,height:30,radius:"xs"}),(0,s.jsx)(n.O,{mt:6,height:30,radius:"xs"}),(0,s.jsx)(n.O,{mt:6,height:30,radius:"xs"}),(0,s.jsx)(n.O,{mt:6,height:30,radius:"xs"}),(0,s.jsx)(n.O,{mt:6,height:30,width:"90%",radius:"xs"}),(0,s.jsx)(n.O,{mt:6,height:30,width:"80%",radius:"xs"})]})}r(7294)},6125:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(5893),i=r(1163),n=r(7294),o=r(5578),a=r(247);function l(e){let{children:t}=e,{pathname:r,push:l}=(0,i.useRouter)(),[c,d]=(0,n.useState)(null),{isAuthenticated:u,isInitialized:p,authUser:m}=(0,o.a)(e=>e);return((0,n.useEffect)(()=>{c&&r!==c&&(d(null),l(c))},[r,l,c]),p)?r.includes("/reset-password")?(r!==c&&d(r),l("/reset-password"),(0,s.jsx)("div",{})):!u&&r.includes("/signin")?(r!==c&&d(r),l("/signin"),(0,s.jsx)("div",{})):u?u&&((null==m?void 0:m.isSuperAdmin)===!0||(null==m?void 0:m.isAdmin)===!0||(null==m?void 0:m.isTestAdmin)===!0)?(0,s.jsx)(s.Fragment,{children:t}):u&&(null==m?void 0:m.isSuperAdmin)===!1&&(null==m?void 0:m.isAdmin)===!1&&(null==m?void 0:m.isTestAdmin)===!1?(0,s.jsx)(a.default,{}):(0,s.jsx)("div",{}):(l("/signin"),(0,s.jsx)("div",{})):(0,s.jsx)("div",{})}},554:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var s=r(5893),i=r(2445),n=r(7414),o=r(5117),a=r(1664),l=r.n(a),c=r(7294),d=r(61),u=r(7841),p=r(7248),m=r(7317),h=r(4922),X=r(5910),f=r(6310),x=r(7582),v=r(4934),g=r(4074);r(8660);class w{static fromJson(e){return(0,v.yE)(w,e,{exposeDefaultValues:!0,excludeExtraneousValues:!0})}static toJson(e){return(0,v.zb)(e)}constructor(){this.id="",this.password="",this.host="",this.port="",this.email=""}}(0,x.gn)([(0,g.C)({name:"id"})],w.prototype,"id",void 0),(0,x.gn)([(0,g.C)()],w.prototype,"password",void 0),(0,x.gn)([(0,g.C)()],w.prototype,"host",void 0),(0,x.gn)([(0,g.C)()],w.prototype,"port",void 0),(0,x.gn)([(0,g.C)()],w.prototype,"email",void 0);var j=r(9828),b=r(6418),y=r(5477);async function N(e){let t={...w.toJson(e)};delete t.id;let r=b.U_.currentUser,s=await (0,y.V)(r.uid);if(!s)throw Error("No user found!");if(!s.isSuperAdmin)throw Error("You are not authorized to update smtp settings.");try{return await (0,j.pl)((0,j.JU)(b.$V,"appControlsPrivate","smtp"),{...t},{merge:!0}),!0}catch(e){throw Error(e.message)}}async function O(){try{let e=b.U_.currentUser,t=await (0,y.V)(e.uid);if(!t)return null;if(!t.isSuperAdmin)return w.fromJson({id:"",password:"XXXXXXXXXXXXXXXXXXXXXXX",host:"XXXXXXXXXXXXXXXXXXXXXXX",port:"XXXXXXXXXXXXXXXXXXXXXXX",email:"XXXXXXXXXXXXXXXXXXXXXXX"});let r=await (0,j.QT)((0,j.JU)(b.$V,"appControlsPrivate","smtp"));return w.fromJson({...r.data(),id:r.id})}catch(e){return null}}var k=r(5578),E=r(9140);function P(){let[e,t]=(0,c.useState)(!0),[r,i]=(0,c.useState)(null);async function n(){i(await O()),t(!1)}return((0,c.useEffect)(()=>{n()},[]),e)?(0,s.jsx)(E.Z,{}):(0,s.jsx)(S,{smtp:r})}function S(e){let{smtp:t}=e,[r,n]=(0,c.useState)(!1),{authUser:o}=(0,k.a)(e=>e),a=f.Ry({email:f.Z_().required("Required"),password:f.Z_().required("Required"),host:f.Z_().required("Required"),port:f.Z_().required("Required")}),l=(0,p.c)({validate:(0,m.X)(a),initialValues:{email:(null==t?void 0:t.email)||"",password:(null==t?void 0:t.password)||"",host:(null==t?void 0:t.host)||"",port:(null==t?void 0:t.port)||""}}),x=async()=>{if(!l.validate().hasErrors)try{n(!0);let e=new w;e.email=l.values.email,e.password=l.values.password,e.host=l.values.host,e.port=l.values.port,await N(e),n(!1),(0,h.c0)({color:"blue",title:"Success",message:"Smtp updated",autoClose:6e3})}catch(e){n(!1),(0,h.c0)({color:"red",title:"Error",message:e.message,autoClose:6e3})}};return(0,s.jsxs)(i.W,{p:0,children:[(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)(d.o,{className:"mt-4",placeholder:"Email",label:"Email",maxLength:50,...l.getInputProps("email")}),(0,s.jsx)(d.o,{className:"mt-4",placeholder:"Password",label:"Password",maxLength:50,...l.getInputProps("password")}),(0,s.jsx)(d.o,{className:"mt-4",placeholder:"Host",label:"Host",maxLength:50,...l.getInputProps("host")}),(0,s.jsx)(d.o,{className:"mt-4",placeholder:"Port",label:"Port",maxLength:50,...l.getInputProps("port")})]}),(0,s.jsx)(u.z,{onClick:x,leftIcon:(0,s.jsx)(X.Z,{size:14}),variant:"filled",disabled:r||(null==o?void 0:o.isSuperAdmin)==!1,className:"w-full mt-4 h-[40px] bg-app-primary text-white border-0 hover:opacity-90 hover:text-md",children:"Submit"})]})}var _=r(8185),C=r(6125),Z=r(3649);function A(){let[e,t]=(0,c.useState)("");return(0,c.useEffect)(()=>{console.log(e)},[e]),(0,s.jsx)(C.Z,{children:(0,s.jsx)(Z.Z,{variant:"admin",children:(0,s.jsx)(_.Z,{title:"Tags",children:(0,s.jsxs)(i.W,{className:"mt-4",children:[(0,s.jsx)("div",{className:"flex justify-between",children:(0,s.jsx)(n.x,{className:"flex items-center",children:(0,s.jsx)(l(),{href:"/tags",children:(0,s.jsxs)(o.x,{className:"text-2xl font-semibold leading-10 cursor-pointer",children:["SMTP Email ",(0,s.jsx)("span",{className:"text-xl",children:"(Only Super Admins can view and edit this page)"})]})})})}),(0,s.jsx)("div",{className:"mt-10"}),(0,s.jsx)(P,{})]})})})})}},247:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=r(5893),i=r(7414),n=r(5117),o=r(7841),a=r(1163),l=r(8185),c=r(3759);function d(){let e=(0,a.useRouter)();return(0,s.jsx)(l.Z,{title:"No Access",children:(0,s.jsxs)(i.x,{className:"flex flex-col items-center justify-center h-screen dark:bg-dark-100 bg-light-100",children:[(0,s.jsx)(n.x,{className:"mb-10 font-bold",children:"You dont have access to this page. Please contact the admin."}),(0,s.jsx)("img",{src:"/svg/404.svg",className:"h-[300px]"}),(0,s.jsx)(o.z,{onClick:function(){(0,c.w7)(),e.push("/signin")},className:"w-[200px] mt-12 border-0 bg-app-primary text-white hover:bg-opacity-90 transition",children:"Back to sign in"})]})})}},5910:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(2581),i=r(7294),n=["size","color"];function o(e){var t=e.size,r=void 0===t?24:t,o=e.color,a=(0,s.Kd)(e,n);return i.createElement("svg",(0,s.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-send",width:r,height:r,viewBox:"0 0 24 24",stroke:void 0===o?"currentColor":o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),i.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}),i.createElement("path",{d:"M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"}))}}},function(e){e.O(0,[4793,3053,6897,3981,9774,2888,179],function(){return e(e.s=8852)}),_N_E=e.O()}]);