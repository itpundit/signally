"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1964],{6434:function(e,t,n){n.d(t,{Z:function(){return k}});var i=n(5893),s=n(7841),r=n(7414),a=n(5117),l=n(50),o=n(61),c=n(2615),u=n(8701),d=n(2167),m=n(7248),h=n(7317),x=n(4922),f=n(1163),g=n(7294),j=n(5910),p=n(6310),v=n(8715),w=n(668),y=n(4984),b=n(5758),N=n(9140);function k(e){let{id:t}=e,[n,s]=(0,g.useState)(null!=t),[r,a]=(0,g.useState)(null);async function l(){t&&a(await (0,y.IK)(t)),s(!1)}return((0,g.useEffect)(()=>{l()},[]),n)?(0,i.jsx)(N.Z,{}):!r&&t?(0,i.jsx)(b.X,{}):(0,i.jsx)(E,{id:t,announcement:r})}function E(e){var t,n,b,N;let{id:k,announcement:E}=e,U=(0,f.useRouter)(),[A,C]=(0,g.useState)(!1),[z,J]=(0,g.useState)(null),R=p.Ry({title:p.Z_().required("Required"),body:p.Z_().required("Required"),link:p.Z_().url("Invalid URL"),image:p.Z_()}),S=(0,m.c)({validate:(0,h.X)(R),initialValues:{title:null!==(t=null==E?void 0:E.title)&&void 0!==t?t:"",body:null!==(n=null==E?void 0:E.body)&&void 0!==n?n:"",link:null!==(b=null==E?void 0:E.link)&&void 0!==b?b:"",image:null!==(N=null==E?void 0:E.image)&&void 0!==N?N:""}}),T=async()=>{if(!S.validate().hasErrors)try{var e,t;C(!0);let n=new v.j;n.title=S.values.title,n.body=S.values.body,n.link=S.values.link,n.timestampCreated=null!==(e=null==E?void 0:E.timestampCreated)&&void 0!==e?e:new Date,n.image=null!==(t=null==E?void 0:E.image)&&void 0!==t?t:"",z&&(n.image=await (0,w.T)({file:z})),E||await (0,y.$q)(n),E&&k&&await (0,y.sY)(k,n),C(!1),U.push("/announcements"),(0,x.c0)({title:"Success",message:"Announcement was created",autoClose:6e3})}catch(e){console.log(e),C(!1),(0,x.c0)({color:"red",title:"Error",message:"There was an error creating the announcement",autoClose:6e3})}};return(0,i.jsx)(r.x,{className:"",children:(0,i.jsxs)(l.r,{align:"start",children:[(0,i.jsxs)(l.r.Col,{md:12,xs:12,children:[(0,i.jsx)(o.o,{className:"mt-4",placeholder:"Title",label:"Title",...S.getInputProps("title")}),(0,i.jsx)(c.g,{minRows:3,className:"mt-4",placeholder:"Body",label:"Body",...S.getInputProps("body")}),(0,i.jsx)(o.o,{className:"mt-4",placeholder:"Link",label:"Link",...S.getInputProps("link")}),(0,i.jsxs)(r.x,{className:"relative",children:[(0,i.jsx)(()=>z||S.values.image?(0,i.jsx)(s.z,{className:"absolute z-40 btn right-2 top-2",onClick:()=>{S.setFieldValue("image",""),J(null)},children:"Remove"}):null,{}),(0,i.jsx)(u.fh,{className:"z-0 p-2 mt-8",multiple:!1,disabled:null!=z||""!=S.values.image,onDrop:e=>{if(e.length>0){let t=e[0];J(Object.assign(t,{preview:URL.createObjectURL(t)}))}},onReject:e=>console.log("rejected files",e),maxSize:3145728,accept:d.d1,children:(0,i.jsx)(()=>""!=S.values.image?(0,i.jsx)(r.x,{className:"relative flex justify-center",children:(0,i.jsx)("img",{className:"h-[300px]",src:S.values.image,alt:"Preview"})}):z?(0,i.jsx)(r.x,{className:"relative flex justify-center",children:(0,i.jsx)("img",{className:"h-[300px]",src:z.preview,alt:"Preview"})}):(0,i.jsx)(r.x,{className:"min-h-[300px] pointer-events-none flex justify-center items-center text-center",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(a.x,{size:"xl",inline:!0,children:"Drag images here or click to select files"}),(0,i.jsx)(a.x,{size:"sm",color:"dimmed",inline:!0,mt:7,children:"Attach as many files as you like, each file should not exceed 5mb"})]})}),{})})]})]}),(0,i.jsx)(l.r.Col,{md:12,xs:12,children:(0,i.jsx)(r.x,{children:(0,i.jsx)(s.z,{loading:A,onClick:T,leftIcon:(0,i.jsx)(j.Z,{size:14}),variant:"filled",className:"w-full mt-10 text-black transition border-0 bg-app-yellow hover:bg-opacity-90",children:"Submit"})})})]})})}},5758:function(e,t,n){n.d(t,{X:function(){return a}});var i=n(5893),s=n(7414),r=n(5117);function a(e){let{}=e;return(0,i.jsxs)(s.x,{className:"border p-10 flex flex-col items-center rounded-md",children:[(0,i.jsx)("img",{className:"w-[400px] object-contain",src:"/images/form-error.png",alt:""}),(0,i.jsx)(r.x,{className:"text-center mt-10",children:"There was an error loading the form. Please try again later."})]})}n(7294)},9140:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(5893),s=n(7414),r=n(8623);function a(e){let{}=e;return(0,i.jsxs)(s.x,{className:"",children:[(0,i.jsx)(r.O,{mt:6,height:30,radius:"xs"}),(0,i.jsx)(r.O,{mt:6,height:30,radius:"xs"}),(0,i.jsx)(r.O,{mt:6,height:30,radius:"xs"}),(0,i.jsx)(r.O,{mt:6,height:30,radius:"xs"}),(0,i.jsx)(r.O,{mt:6,height:30,width:"90%",radius:"xs"}),(0,i.jsx)(r.O,{mt:6,height:30,width:"80%",radius:"xs"})]})}n(7294)},6125:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(5893),s=n(1163),r=n(7294),a=n(5578),l=n(247);function o(e){let{children:t}=e,{pathname:n,push:o}=(0,s.useRouter)(),[c,u]=(0,r.useState)(null),{isAuthenticated:d,isInitialized:m,authUser:h}=(0,a.a)(e=>e);return((0,r.useEffect)(()=>{c&&n!==c&&(u(null),o(c))},[n,o,c]),m)?n.includes("/reset-password")?(n!==c&&u(n),o("/reset-password"),(0,i.jsx)("div",{})):!d&&n.includes("/signin")?(n!==c&&u(n),o("/signin"),(0,i.jsx)("div",{})):d?d&&((null==h?void 0:h.isSuperAdmin)===!0||(null==h?void 0:h.isAdmin)===!0||(null==h?void 0:h.isTestAdmin)===!0)?(0,i.jsx)(i.Fragment,{children:t}):d&&(null==h?void 0:h.isSuperAdmin)===!1&&(null==h?void 0:h.isAdmin)===!1&&(null==h?void 0:h.isTestAdmin)===!1?(0,i.jsx)(l.default,{}):(0,i.jsx)("div",{}):(o("/signin"),(0,i.jsx)("div",{})):(0,i.jsx)("div",{})}},668:function(e,t,n){n.d(t,{T:function(){return o}});var i=n(6650),s=n(6770),r=n.n(s),a=n(7632);let l=e=>{let{file:t}=e;return new Promise(e=>{r().imageFileResizer(t,1500,1500,"JPEG",95,0,t=>{e(t)},"base64")})},o=async e=>{let{file:t}=e,n="",s=(0,i.cF)(),r=(0,i.iH)(s,"images/".concat((0,a.Z)(),".jpeg")),o=await l({file:t});try{let e=await (0,i.sf)(r,o,"data_url");n=await (0,i.Jt)(e.ref)}catch(e){}return n}},4984:function(e,t,n){n.d(t,{$q:function(){return o},IK:function(){return u},sY:function(){return c},yL:function(){return m}});var i=n(6154),s=n(9828),r=n(8715),a=n(6418),l=n(5477);async function o(e){try{var t;let n=a.U_.currentUser,o=await (0,l.V)(n.uid);if(!o)throw Error("No user found!");if(!o.isSuperAdmin&&!o.isAdmin)throw Error("You are not authorized to create announcements.");let c=await (null===(t=a.U_.currentUser)||void 0===t?void 0:t.getIdToken(!0));return await (0,s.ET)((0,s.hJ)(a.$V,"announcements"),{...r.j.toJson(e),timestampCreated:(0,s.Bt)()}),await h(),await i.Z.post("/api/notifications",{title:e.title,body:e.body.substring(0,50),jsonWebToken:c}),!0}catch(e){throw Error(e.message)}}async function c(e,t){let n={...r.j.toJson(t),timestampUpdated:(0,s.Bt)()};delete n.timestampCreated;try{let t=a.U_.currentUser,i=await (0,l.V)(t.uid);if(!i)throw Error("No user found!");if(!i.isSuperAdmin&&!i.isAdmin)throw Error("You are not authorized to update announcements.");return await (0,s.r7)((0,s.JU)(a.$V,"announcements",e),{...n}),await h(),!0}catch(e){throw Error(e.message)}}async function u(e){try{let t=await (0,s.QT)((0,s.JU)(a.$V,"announcements",e));if(!t.data())return null;return r.j.fromJson({...t.data(),id:t.id})}catch(e){throw Error(e.message)}}async function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;try{let t=await (0,s.PL)((0,s.IO)((0,s.hJ)(a.$V,"announcements"),(0,s.b9)(e)));return t.docs.map(e=>r.j.fromJson({...e.data(),id:e.id}))}catch(e){throw Error(e.message)}}async function m(e){try{let t=a.U_.currentUser,n=await (0,l.V)(t.uid);if(!n)throw Error("No user found!");if(!n.isSuperAdmin&&!n.isAdmin)throw Error("You are not authorized to create announcements.");return await (0,s.oe)((0,s.JU)(a.$V,"announcements",e)),await h(),!0}catch(e){throw Error(e.message)}}async function h(){try{let e=await d(50),t=e.map(e=>r.j.toJson(e));return t.sort((e,t)=>t.timestampCreated.getTime()-e.timestampCreated.getTime()),await (0,s.pl)((0,s.JU)(a.$V,"announcementsAggr","announcements"),{data:t,timestampUpdated:(0,s.Bt)()}),!0}catch(e){throw console.log(e),Error(e.message)}}},247:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(5893),s=n(7414),r=n(5117),a=n(7841),l=n(1163),o=n(8185),c=n(3759);function u(){let e=(0,l.useRouter)();return(0,i.jsx)(o.Z,{title:"No Access",children:(0,i.jsxs)(s.x,{className:"flex flex-col items-center justify-center h-screen dark:bg-dark-100 bg-light-100",children:[(0,i.jsx)(r.x,{className:"mb-10 font-bold",children:"You dont have access to this page. Please contact the admin."}),(0,i.jsx)("img",{src:"/svg/404.svg",className:"h-[300px]"}),(0,i.jsx)(a.z,{onClick:function(){(0,c.w7)(),e.push("/signin")},className:"w-[200px] mt-12 border-0 bg-app-primary text-white hover:bg-opacity-90 transition",children:"Back to sign in"})]})})}}}]);