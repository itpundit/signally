"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{48622:function(e,s,t){t.d(s,{Z:function(){return P}});var r=t(85893),i=t(67841),a=t(7414),l=t(95117),n=t(72445),o=t(23833),u=t(80061),c=t(52615),d=t(83932),m=t(78701),x=t(22167),h=t(77248),g=t(57317),p=t(74922),j=t(11163),f=t(67294),v=t(16310),w=t(21315),y=t(60668),L=t(67725),b=t(45578),N=t(25758),E=t(39140),C=t(60941);function P(e){let{id:s}=e,[t,i]=(0,f.useState)(null!=s),[a,l]=(0,f.useState)(null);async function n(){s&&l(await (0,L.K$)(s)),i(!1)}return((0,f.useEffect)(()=>{n()},[]),t)?(0,r.jsx)(E.Z,{}):!a&&s?(0,r.jsx)(N.X,{}):(0,r.jsx)(S,{id:s,post:a})}function S(e){let{id:s,post:t}=e,N=v.Ry({title:v.Z_().required("Required"),body:v.Z_(),status:v.Z_().required("Required"),slug:v.Z_().required("Required"),image:v.Z_(),postDate:v.hT().required("Required"),isFree:v.Z_().required("Required")}),E=(0,h.c)({validate:(0,g.X)(N),initialValues:{title:(null==t?void 0:t.title)||"",body:(null==t?void 0:t.body)||"",status:(null==t?void 0:t.status)||"Draft",slug:(null==t?void 0:t.slug)||"",image:(null==t?void 0:t.image)||"",postDate:(null==t?void 0:t.postDate)||new Date,isFree:(null==t?void 0:t.isFree)==!1?"No":"Yes"}}),P=(0,j.useRouter)(),[S,k]=(0,f.useState)(!1),[A,U]=(0,f.useState)(null),[Z,J]=(0,f.useState)(""),{isHandlePostSubmitCalled:R}=(0,b.a)(e=>e),{setIsHandlePostSubmitCalled:V}=(0,b.a)(e=>e);(0,f.useEffect)(()=>{R&&$()},[R]);let $=async()=>{if(console.log(E.values),console.log(E.errors),E.validate().hasErrors){V(!1);return}try{k(!0);let e=new w.y;e.title=E.values.title,e.slug=E.values.slug.replace(/-+$/,""),e.body=E.values.body,e.status=E.values.status,e.postDate=E.values.postDate,e.image=E.values.image,e.status=E.values.status,e.isFree="Yes"==E.values.isFree,A&&(e.image=await (0,y.T)({file:A}),E.values.image=e.image),t||await (0,L.td)(e),t&&s&&await (0,L.$f)(s,e),U(null),V(!1),s||E.reset(),s||P.push("/posts"),(0,p.c0)({color:"blue",title:"Success",message:"Post created",autoClose:6e3})}catch(e){V(!1),(0,p.c0)({color:"red",title:"Error",message:e.message,autoClose:6e3})}};return(0,r.jsxs)(n.W,{className:"max-w-[1600px]",p:0,children:[(0,r.jsxs)(a.x,{className:"relative ",children:[(0,r.jsx)(()=>A||E.values.image?(0,r.jsx)(i.z,{className:"absolute z-40 btn right-2 top-2",onClick:()=>{E.setFieldValue("image",""),U(null)},children:"Remove"}):null,{}),(0,r.jsx)(m.fh,{className:"z-0 p-2 mt-8",multiple:!1,disabled:null!=A||""!=E.values.image,onDrop:e=>{if(e.length>0){let s=e[0];U(Object.assign(s,{preview:URL.createObjectURL(s)}))}},onReject:e=>console.log("rejected files",e),maxSize:5242880,accept:x.d1,children:(0,r.jsx)(()=>""!=E.values.image?(0,r.jsx)(a.x,{className:"relative flex justify-center",children:(0,r.jsx)("img",{className:"h-[300px]",src:E.values.image,alt:"Preview"})}):A?(0,r.jsx)(a.x,{className:"relative flex justify-center",children:(0,r.jsx)("img",{className:"h-[300px]",src:A.preview,alt:"Preview"})}):(0,r.jsx)(a.x,{className:"min-h-[300px] pointer-events-none flex justify-center items-center text-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(l.x,{inline:!0,children:"Drag image here or click to select files"}),(0,r.jsx)(l.x,{size:"sm",color:"dimmed",inline:!0,mt:7,children:"Attach a single image"})]})}),{})})]}),(0,r.jsxs)("div",{className:"mt-4 ",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-x-4 ",children:[(0,r.jsx)(o.p,{className:"",placeholder:"Free?",label:"Free?",data:["Yes","No"],...E.getInputProps("isFree")}),(0,r.jsx)(o.p,{className:"",placeholder:"Status",label:"Post status",data:["Draft","Published","Archived"],...E.getInputProps("status")}),(0,r.jsx)(d.W,{className:"col-span-1",label:"Publish date",maxDate:new Date,...E.getInputProps("postDate")})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(u.o,{className:"w-full",placeholder:"Slug",label:"Slug",radius:0,...E.getInputProps("slug")}),(0,r.jsx)(i.z,{onClick:function(){let e=E.values.title.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");E.setValues({...E.values,slug:e.replace(/-+$/,"")})},className:"btn-app mt-2 ml-10 h-[38px]",children:"Generate slug"})]}),(0,r.jsx)(c.g,{placeholder:"Title",label:"Title",radius:0,rows:2,...E.getInputProps("title")}),(0,r.jsx)(C.S,{value:E.values.body,onChange:e=>E.setValues({...E.values,body:e}),className:"",id:"rte"}),(0,r.jsx)("div",{className:"pb-20"})]})]})}},25758:function(e,s,t){t.d(s,{X:function(){return l}});var r=t(85893),i=t(7414),a=t(95117);function l(e){let{}=e;return(0,r.jsxs)(i.x,{className:"border p-10 flex flex-col items-center rounded-md",children:[(0,r.jsx)("img",{className:"w-[400px] object-contain",src:"/images/form-error.png",alt:""}),(0,r.jsx)(a.x,{className:"text-center mt-10",children:"There was an error loading the form. Please try again later."})]})}t(67294)},39140:function(e,s,t){t.d(s,{Z:function(){return l}});var r=t(85893),i=t(7414),a=t(38623);function l(e){let{}=e;return(0,r.jsxs)(i.x,{className:"",children:[(0,r.jsx)(a.O,{mt:6,height:30,radius:"xs"}),(0,r.jsx)(a.O,{mt:6,height:30,radius:"xs"}),(0,r.jsx)(a.O,{mt:6,height:30,radius:"xs"}),(0,r.jsx)(a.O,{mt:6,height:30,radius:"xs"}),(0,r.jsx)(a.O,{mt:6,height:30,width:"90%",radius:"xs"}),(0,r.jsx)(a.O,{mt:6,height:30,width:"80%",radius:"xs"})]})}t(67294)},60941:function(e,s,t){t.d(s,{S:function(){return x}});var r=t(85893),i=t(14953),a=t(2637),l=t(50601),n=t(18151),o=t(41705),u=t(96279),c=t(48510),d=t(71284),m=t(54929);function x(e){let{...s}=e,t=(0,d.jE)({extensions:[m.Z,l.ZP,c.Z,u.Z,o.Z,n.Z,i.r],content:s.value,onUpdate:e=>{let{editor:t}=e;s.onChange(t.getHTML())}});return(0,r.jsxs)(a.L,{editor:t,children:[(0,r.jsxs)(a.L.Toolbar,{sticky:!0,stickyOffset:60,children:[(0,r.jsxs)(a.L.ControlsGroup,{children:[(0,r.jsx)(a.L.Bold,{}),(0,r.jsx)(a.L.Italic,{}),(0,r.jsx)(a.L.Underline,{}),(0,r.jsx)(a.L.Strikethrough,{}),(0,r.jsx)(a.L.ClearFormatting,{}),(0,r.jsx)(a.L.Highlight,{}),(0,r.jsx)(a.L.Code,{})]}),(0,r.jsxs)(a.L.ControlsGroup,{children:[(0,r.jsx)(a.L.H1,{}),(0,r.jsx)(a.L.H2,{}),(0,r.jsx)(a.L.H3,{}),(0,r.jsx)(a.L.H4,{})]}),(0,r.jsxs)(a.L.ControlsGroup,{children:[(0,r.jsx)(a.L.Blockquote,{}),(0,r.jsx)(a.L.Hr,{}),(0,r.jsx)(a.L.BulletList,{}),(0,r.jsx)(a.L.OrderedList,{}),(0,r.jsx)(a.L.Subscript,{}),(0,r.jsx)(a.L.Superscript,{})]}),(0,r.jsxs)(a.L.ControlsGroup,{children:[(0,r.jsx)(a.L.Link,{}),(0,r.jsx)(a.L.Unlink,{})]}),(0,r.jsxs)(a.L.ControlsGroup,{children:[(0,r.jsx)(a.L.AlignLeft,{}),(0,r.jsx)(a.L.AlignCenter,{}),(0,r.jsx)(a.L.AlignJustify,{}),(0,r.jsx)(a.L.AlignRight,{})]})]}),(0,r.jsx)(a.L.Content,{})]})}},96125:function(e,s,t){t.d(s,{Z:function(){return o}});var r=t(85893),i=t(11163),a=t(67294),l=t(45578),n=t(70247);function o(e){let{children:s}=e,{pathname:t,push:o}=(0,i.useRouter)(),[u,c]=(0,a.useState)(null),{isAuthenticated:d,isInitialized:m,authUser:x}=(0,l.a)(e=>e);return((0,a.useEffect)(()=>{u&&t!==u&&(c(null),o(u))},[t,o,u]),m)?t.includes("/reset-password")?(t!==u&&c(t),o("/reset-password"),(0,r.jsx)("div",{})):!d&&t.includes("/signin")?(t!==u&&c(t),o("/signin"),(0,r.jsx)("div",{})):d?d&&((null==x?void 0:x.isSuperAdmin)===!0||(null==x?void 0:x.isAdmin)===!0||(null==x?void 0:x.isTestAdmin)===!0)?(0,r.jsx)(r.Fragment,{children:s}):d&&(null==x?void 0:x.isSuperAdmin)===!1&&(null==x?void 0:x.isAdmin)===!1&&(null==x?void 0:x.isTestAdmin)===!1?(0,r.jsx)(n.default,{}):(0,r.jsx)("div",{}):(o("/signin"),(0,r.jsx)("div",{})):(0,r.jsx)("div",{})}},60668:function(e,s,t){t.d(s,{T:function(){return o}});var r=t(86650),i=t(76770),a=t.n(i),l=t(57632);let n=e=>{let{file:s}=e;return new Promise(e=>{a().imageFileResizer(s,1500,1500,"JPEG",95,0,s=>{e(s)},"base64")})},o=async e=>{let{file:s}=e,t="",i=(0,r.cF)(),a=(0,r.iH)(i,"images/".concat((0,l.Z)(),".jpeg")),o=await n({file:s});try{let e=await (0,r.sf)(a,o,"data_url");t=await (0,r.Jt)(e.ref)}catch(e){}return t}},67725:function(e,s,t){t.d(s,{$f:function(){return o},K$:function(){return u},d3:function(){return d},td:function(){return n}});var r=t(39828),i=t(21315),a=t(6418),l=t(85477);async function n(e){try{let s=a.U_.currentUser,t=await (0,l.V)(s.uid);if(!t)throw Error("No user found!");if(!t.isSuperAdmin&&!t.isAdmin)throw Error("You are not authorized to update links settings.");let n=(0,r.IO)((0,r.hJ)(a.$V,"posts"),(0,r.ar)("name","==",e.title)),o=(0,r.IO)((0,r.hJ)(a.$V,"posts"),(0,r.ar)("slug","==",e.slug)),u=await (0,r.PL)(n),c=await (0,r.PL)(o);if(u.size>0||c.size>0)throw Error("Post name or slug already exists");return await (0,r.ET)((0,r.hJ)(a.$V,"posts"),{...i.y.toJson(e),timestampCreated:(0,r.Bt)(),timestampUpdated:(0,r.Bt)()}),await m(),!0}catch(e){throw Error(e.message)}}async function o(e,s){let t={...i.y.toJson(s),timestampUpdated:(0,r.Bt)()};delete t.timestampCreated;try{let s=a.U_.currentUser,i=await (0,l.V)(s.uid);if(!i)throw Error("No user found!");if(!i.isSuperAdmin&&!i.isAdmin)throw Error("You are not authorized to update links settings.");return await (0,r.r7)((0,r.JU)(a.$V,"posts",e),{...t}),await m(),!0}catch(e){throw Error(e.message)}}async function u(e){try{let s=await (0,r.QT)((0,r.JU)(a.$V,"posts",e));if(!s.data())return null;return i.y.fromJson({...s.data(),id:s.id})}catch(e){throw Error(e.message)}}async function c(){try{let e=await (0,r.PL)((0,r.IO)((0,r.hJ)(a.$V,"posts"),(0,r.ar)("status","==","Published"),(0,r.b9)(50)));return e.docs.map(e=>i.y.fromJson({...e.data(),id:e.id}))}catch(e){throw Error(e.message)}}async function d(e){try{let s=a.U_.currentUser,t=await (0,l.V)(s.uid);if(!t)throw Error("No user found!");if(!t.isSuperAdmin&&!t.isAdmin)throw Error("You are not authorized to update links settings.");return await (0,r.oe)((0,r.JU)(a.$V,"posts",e)),await m(),!0}catch(e){throw console.log(e),Error(e.message)}}async function m(){try{let e=await c(),s=e.map(e=>i.y.toJson(e));return await (0,r.pl)((0,r.JU)(a.$V,"postsAggr","posts"),{data:s,timestampUpdated:(0,r.Bt)()}),!0}catch(e){throw console.log(e),Error(e.message)}}},70247:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var r=t(85893),i=t(7414),a=t(95117),l=t(67841),n=t(11163),o=t(58185),u=t(43759);function c(){let e=(0,n.useRouter)();return(0,r.jsx)(o.Z,{title:"No Access",children:(0,r.jsxs)(i.x,{className:"flex flex-col items-center justify-center h-screen dark:bg-dark-100 bg-light-100",children:[(0,r.jsx)(a.x,{className:"mb-10 font-bold",children:"You dont have access to this page. Please contact the admin."}),(0,r.jsx)("img",{src:"/svg/404.svg",className:"h-[300px]"}),(0,r.jsx)(l.z,{onClick:function(){(0,u.w7)(),e.push("/signin")},className:"w-[200px] mt-12 border-0 bg-app-primary text-white hover:bg-opacity-90 transition",children:"Back to sign in"})]})})}}}]);