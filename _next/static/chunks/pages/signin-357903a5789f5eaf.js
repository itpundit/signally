(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2176],{81:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return l(3977)}])},3977:function(e,s,l){"use strict";l.r(s),l.d(s,{__N_SSP:function(){return b},default:function(){return y}});var a=l(5893),t=l(2445),r=l(7414),o=l(5117),i=l(61),n=l(7841),c=l(7248),d=l(7317),x=l(4922),u=l(1163),m=l(7294),p=l(5910),w=l(6310),f=l(3759),h=l(5578);function j(){let e=(0,u.useRouter)(),[s,l]=(0,m.useState)(!1),{isAuthenticated:t,isInitialized:j}=(0,h.a)(e=>e),{streamAuthUserAdmin:g}=(0,h.a)(e=>e),N=w.Ry({email:w.Z_().required("Required"),password:w.Z_().required("Required")}),v=(0,c.c)({validate:(0,d.X)(N),initialValues:{email:"",password:""}}),b=async()=>{if(!v.validate().hasErrors)try{l(!0),await (0,f.YR)(v.values.email,v.values.password),e.push("/dashboard"),g(),l(!1)}catch(e){l(!1),(0,x.c0)({color:"red",title:"Error",message:"Invalid email or password",autoClose:6e3})}};return(0,a.jsxs)(r.x,{className:"xs:w-full sm:w-[500px] py-10 px-6 rounded-md",children:[(0,a.jsx)(r.x,{className:"flex flex-col w-full mx-auto text-center ",children:(0,a.jsx)(o.x,{className:"mt-4 text-2xl font-bold",children:"Signally account login"})}),(0,a.jsxs)(r.x,{className:"flex flex-col items-center mt-8",children:[(0,a.jsxs)(r.x,{className:"w-full",children:[(0,a.jsx)(i.o,{placeholder:"Email",label:"Email",radius:0,...v.getInputProps("email")}),(0,a.jsx)(i.o,{type:"password",className:"mt-4",placeholder:"Password",label:"Password",...v.getInputProps("password")}),(0,a.jsx)(n.z,{onClick:b,loading:s,leftIcon:(0,a.jsx)(p.Z,{size:14}),variant:"filled",className:"w-full mt-10 text-black transition border-0 bg-app-yellow hover:bg-opacity-90",children:"Sign in with email"})]}),(0,a.jsx)(r.x,{className:"flex flex-col flex-wrap items-start justify-start w-full mt-4",children:(0,a.jsx)(n.z,{onClick:()=>e.push("/reset-password"),className:"btn-text text-app-yellowText hover:text-opacity-80 text-[14px] mt-[2px] transition",children:"Forgot password?"})})]})]})}function g(){let e=(0,u.useRouter)(),[s,l]=(0,m.useState)(!1),{isAuthenticated:t,isInitialized:j}=(0,h.a)(e=>e),{streamAuthUserAdmin:g}=(0,h.a)(e=>e),N=w.Ry({email:w.Z_().required("Required"),password:w.Z_().required("Required"),passwordConfirm:w.Z_().required("Required").oneOf([w.iH("password")],"Passwords must match")}),v=(0,c.c)({validate:(0,d.X)(N),initialValues:{email:"",password:"",passwordConfirm:""}}),b=async()=>{if(!v.validate().hasErrors)try{l(!0),await (0,f.mW)(v.values.email,v.values.password),e.push("/dashboard"),g(),l(!1)}catch(e){l(!1),console.log(e),(0,x.c0)({color:"red",title:"Error",message:"Invalid email or password",autoClose:6e3})}};return(0,a.jsxs)(r.x,{className:"xs:w-full sm:w-[600px] py-10 px-6 rounded-md h-screen",children:[(0,a.jsxs)(r.x,{className:"flex flex-col w-full mx-auto text-center",children:[(0,a.jsx)(o.x,{className:"mt-10 font-bold xs:text-xl sm:text-2xl",children:"Welcome to Signally"}),(0,a.jsx)(o.x,{className:"mt-2 font-bold xs:text-md sm:text-lg",children:"Please create the admin users below"})]}),(0,a.jsx)(r.x,{className:"flex flex-col items-center mt-8",children:(0,a.jsxs)(r.x,{className:"w-full",children:[(0,a.jsx)(i.o,{className:"mt-4",placeholder:"Email",label:"Email",...v.getInputProps("email")}),(0,a.jsx)(i.o,{type:"password",className:"mt-4",placeholder:"Password",label:"Password",...v.getInputProps("password")}),(0,a.jsx)(i.o,{type:"password",className:"mt-4",placeholder:"Confirm Password",label:"Confirm Password",...v.getInputProps("passwordConfirm")}),(0,a.jsx)(n.z,{onClick:b,loading:s,leftIcon:(0,a.jsx)(p.Z,{size:14}),variant:"filled",className:"w-full mt-10 text-black transition border-0 bg-app-yellow hover:bg-opacity-90",children:"Sign up with email"})]})})]})}var N=l(8185),v=l(3649),b=!0;function y(e){let{isSuperAdminConfigured:s}=e;return(0,a.jsx)(v.Z,{variant:"logoOnly",children:(0,a.jsx)(N.Z,{title:"Signin",children:(0,a.jsxs)(t.W,{size:"xl",className:"flex items-center justify-center",children:[s&&(0,a.jsx)(j,{}),!s&&(0,a.jsx)(g,{})]})})})}},5910:function(e,s,l){"use strict";l.d(s,{Z:function(){return o}});var a=l(2581),t=l(7294),r=["size","color"];function o(e){var s=e.size,l=void 0===s?24:s,o=e.color,i=(0,a.Kd)(e,r);return t.createElement("svg",(0,a.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-send",width:l,height:l,viewBox:"0 0 24 24",stroke:void 0===o?"currentColor":o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),t.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}),t.createElement("path",{d:"M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"}))}}},function(e){e.O(0,[4793,3053,6897,3981,9774,2888,179],function(){return e(e.s=81)}),_N_E=e.O()}]);