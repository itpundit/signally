(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1522],{2568:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video-lessons",function(){return n(270)}])},5120:function(e,t,n){"use strict";n.d(t,{D:function(){return w}});var s=n(5893),r=n(61),a=n(7414),i=n(5117),o=n(3648),l=n(9834),c=n(3221),d=n(7728),u=n(9604),m=n(4094),h=n(7060),x=n(7294),g=n(6589),f=n(9743),p=n(3738);let v=(e,t,n,s)=>{let r=(0,u.O4)(e.getValue(t),n);return s({itemRank:r}),r.passed};function w(e){var t;let{columns:n,data:u}=e,[w,j]=x.useState({pageIndex:0,pageSize:10}),[b,y]=x.useState([]),[N,k]=x.useState(""),C=(0,m.b7)({data:u,columns:n,state:{sorting:b,pagination:w,globalFilter:N},globalFilterFn:v,onGlobalFilterChange:k,onSortingChange:y,onPaginationChange:j,getCoreRowModel:(0,h.sC)(),getFilteredRowModel:(0,h.vL)(),getPaginationRowModel:(0,h.G_)(),getSortedRowModel:(0,h.tj)()});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"border rounded shadow-md border-slate-300 border-opacity-30 text-[12px]",children:[(0,s.jsx)("div",{className:"mx-2 mt-2",children:(0,s.jsx)(r.o,{className:"mt-6",placeholder:"Type a keyword to search...",type:"text",value:null!=N?N:"",onChange:e=>k(String(e.target.value))})}),(0,s.jsx)("div",{className:"overflow-auto",children:(0,s.jsxs)("table",{className:"min-w-[1000px] w-full border-transparent",children:[(0,s.jsx)("thead",{className:"",children:C.getHeaderGroups().map(e=>(0,s.jsx)("tr",{className:"p-0 m-0 border-none",children:e.headers.map(e=>(0,s.jsx)("th",{style:{width:150!==e.getSize()?e.getSize():void 0},className:"w-[".concat(e.getSize(),"%]  dark:border-gray-700 text-left py-3 px-2 bg-slate-100 dark:bg-gray-800  text-gray-600 dark:text-gray-300  font-bold"),children:e.isPlaceholder?null:(0,s.jsxs)("div",{className:e.column.getCanSort()?"cursor-pointer select-none flex items-center align-middle":"flex",onClick:e.column.getToggleSortingHandler(),children:[(0,m.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,s.jsx)(g.Z,{className:"ml-1"}),desc:(0,s.jsx)(f.Z,{className:"ml-1"})})[e.column.getIsSorted()])&&void 0!==t?t:(0,s.jsx)(p.Z,{className:"ml-1 text-transparent"})]})},e.id))},e.id))}),(0,s.jsx)("tbody",{children:C.getRowModel().rows.map(e=>(0,s.jsx)("tr",{className:"transition hover:bg-slate-50 hover hover:dark:bg-dark-400",children:e.getVisibleCells().map(e=>(0,s.jsx)("td",{className:"text-left text-[13.5px] py-4 px-2 border-b border-gray-100 dark:border-gray-700",children:(0,m.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-end gap-2 px-4 py-3",children:[(0,s.jsxs)(a.x,{className:"flex items-center mr-0",children:[(0,s.jsx)(i.x,{className:"mr-2",children:"Rows per page"}),(0,s.jsx)(o.Ph,{className:"w-[70px] p-0 mb-0 native-select-table",iconWidth:0,placeholder:"10",value:w.pageSize.toString(),onChange:e=>{C.setPageSize(Number(e))},data:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"}]})]}),(0,s.jsxs)("span",{className:"flex items-center gap-1 mr-4",children:[(0,s.jsx)("div",{children:"Page"}),(0,s.jsxs)(i.x,{children:[C.getState().pagination.pageIndex+1," of ",C.getPageCount()]})]}),(0,s.jsxs)(a.x,{className:"flex",children:[(0,s.jsx)(l.A,{className:"mr-2",variant:"subtle",onClick:()=>C.previousPage(),disabled:!C.getCanPreviousPage(),children:(0,s.jsx)(c.Z,{size:30})}),(0,s.jsx)(l.A,{variant:"subtle",onClick:()=>C.nextPage(),disabled:!C.getCanNextPage(),children:(0,s.jsx)(d.Z,{size:30})})]})]})]})})}},6125:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),r=n(1163),a=n(7294),i=n(5578),o=n(247);function l(e){let{children:t}=e,{pathname:n,push:l}=(0,r.useRouter)(),[c,d]=(0,a.useState)(null),{isAuthenticated:u,isInitialized:m,authUser:h}=(0,i.a)(e=>e);return((0,a.useEffect)(()=>{c&&n!==c&&(d(null),l(c))},[n,l,c]),m)?n.includes("/reset-password")?(n!==c&&d(n),l("/reset-password"),(0,s.jsx)("div",{})):!u&&n.includes("/signin")?(n!==c&&d(n),l("/signin"),(0,s.jsx)("div",{})):u?u&&((null==h?void 0:h.isSuperAdmin)===!0||(null==h?void 0:h.isAdmin)===!0||(null==h?void 0:h.isTestAdmin)===!0)?(0,s.jsx)(s.Fragment,{children:t}):u&&(null==h?void 0:h.isSuperAdmin)===!1&&(null==h?void 0:h.isAdmin)===!1&&(null==h?void 0:h.isTestAdmin)===!1?(0,s.jsx)(o.default,{}):(0,s.jsx)("div",{}):(l("/signin"),(0,s.jsx)("div",{})):(0,s.jsx)("div",{})}},6198:function(e,t,n){"use strict";n.d(t,{S2:function(){return l},WG:function(){return c},fl:function(){return u},mF:function(){return o}});var s=n(9828),r=n(1816),a=n(6418),i=n(5477);async function o(e){let t={...r.n.toJson(e)};delete t.id;try{let e=a.U_.currentUser,n=await (0,i.V)(e.uid);if(!n)throw Error("No user found!");if(!n.isSuperAdmin&&!n.isAdmin)throw Error("You are not authorized to update videos.");return await (0,s.ET)((0,s.hJ)(a.$V,"videoLessons"),{...t}),await m(),!0}catch(e){throw Error(e.message)}}async function l(e,t){let n={...r.n.toJson(t),timestampUpdated:(0,s.Bt)()};delete n.timestampCreated;try{let t=a.U_.currentUser,r=await (0,i.V)(t.uid);if(!r)throw Error("No user found!");if(!r.isSuperAdmin&&!r.isAdmin)throw Error("You are not authorized to update videos.");return await (0,s.r7)((0,s.JU)(a.$V,"videoLessons",e),{...n}),await m(),!0}catch(e){throw Error(e.message)}}async function c(e){try{let t=await (0,s.QT)((0,s.JU)(a.$V,"videoLessons",e));if(!t.data())return null;return r.n.fromJson({...t.data(),id:t.id})}catch(e){return null}}async function d(){try{let e=await (0,s.PL)((0,s.IO)((0,s.hJ)(a.$V,"videoLessons"),(0,s.ar)("status","==","Published"),(0,s.b9)(50)));return e.docs.map(e=>r.n.fromJson({...e.data(),id:e.id}))}catch(e){return[]}}async function u(e){try{let t=a.U_.currentUser,n=await (0,i.V)(t.uid);if(!n)throw Error("No user found!");if(!n.isSuperAdmin&&!n.isAdmin)throw Error("You are not authorized to update videos.");return await (0,s.oe)((0,s.JU)(a.$V,"videoLessons",e)),await m(),!0}catch(e){throw Error(e.message)}}async function m(){try{let e=await d(),t=e.map(e=>r.n.toJson(e));return t.sort((e,t)=>t.timestampCreated.getTime()-e.timestampCreated.getTime()),await (0,s.pl)((0,s.JU)(a.$V,"videoLessonsAggr","videoLessons"),{data:t,timestampUpdated:(0,s.Bt)()}),!0}catch(e){throw console.log(e),Error(e.message)}}},247:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(5893),r=n(7414),a=n(5117),i=n(7841),o=n(1163),l=n(8185),c=n(3759);function d(){let e=(0,o.useRouter)();return(0,s.jsx)(l.Z,{title:"No Access",children:(0,s.jsxs)(r.x,{className:"flex flex-col items-center justify-center h-screen dark:bg-dark-100 bg-light-100",children:[(0,s.jsx)(a.x,{className:"mb-10 font-bold",children:"You dont have access to this page. Please contact the admin."}),(0,s.jsx)("img",{src:"/svg/404.svg",className:"h-[300px]"}),(0,s.jsx)(i.z,{onClick:function(){(0,c.w7)(),e.push("/signin")},className:"w-[200px] mt-12 border-0 bg-app-primary text-white hover:bg-opacity-90 transition",children:"Back to sign in"})]})})}},270:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(5893),r=n(5117),a=n(7414),i=n(2445),o=n(7841),l=n(8276),c=n(4922),d=n(7060),u=n(1664),m=n.n(u),h=n(1163),x=n(1252),g=n(3616),f=n(8185),p=n(5120),v=n(6125),w=n(3649),j=n(6198),b=n(5578),y=n(4732);let N=(0,d.Cl)(),k=[N.accessor("timestampCreated",{header:"Date",cell:e=>(0,y.Mu)(e.getValue()),size:170}),N.accessor("isFree",{header:"Free",cell:e=>(0,s.jsx)(r.x,{children:e.getValue()?"Yes":"No"})}),N.accessor("status",{header:"Status",cell:e=>e.getValue()}),N.accessor("title",{header:"Title",cell:e=>e.getValue()}),N.accessor("link",{header:"Link",cell:e=>e.getValue()}),N.accessor("id",{header:"Action",cell:e=>(0,s.jsx)(a.x,{className:"flex items-center justify-center ",children:(0,s.jsx)(E,{id:e.row.original.id})})})];function C(){let{videoLessons:e}=(0,b.a)(e=>e),{isAuthenticated:t}=(0,b.a)(e=>e);return(0,s.jsx)(v.Z,{children:(0,s.jsx)(w.Z,{variant:"admin",children:(0,s.jsx)(f.Z,{title:"Video Lesson",children:(0,s.jsxs)(i.W,{size:"xl",className:"",children:[(0,s.jsxs)(a.x,{className:"flex items-center justify-between mt-10 mb-5 text-center",children:[(0,s.jsx)(r.x,{className:"text-2xl font-semibold leading-10 cursor-pointer",children:"Video Lessons"}),(0,s.jsx)(m(),{href:"/video-lessons/create",children:(0,s.jsx)(o.z,{type:"submit",variant:"white",className:"text-black transition border-0 bg-app-yellow hover:bg-opacity-90",children:"New Lesson"})})]}),(0,s.jsx)(p.D,{data:e,columns:k})]})})})})}function E(e){let{id:t}=e,n=(0,h.useRouter)(),i=(0,l.o)(),d=async e=>{i.closeModal(e);try{await (0,j.fl)(t),(0,c.c0)({title:"Success",message:"Video Lesson deleted",autoClose:6e3})}catch(e){(0,c.c0)({color:"red",title:"Error",message:"There was an error deleting the video lesson",autoClose:6e3})}};return(0,s.jsxs)(a.x,{className:"flex",children:[(0,s.jsx)(x.Z,{className:"mr-2 cursor-pointer text-app-yellow",onClick:()=>n.push("/video-lessons/".concat(t))})," ",(0,s.jsx)(g.Z,{className:"text-red-400 cursor-pointer",onClick:()=>{let e=i.openModal({title:"Are you sure you want to proceed?",centered:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.x,{size:"sm",children:"Delete this video? This action cannot be undone."}),(0,s.jsxs)(a.x,{className:"flex justify-end mt-6",children:[(0,s.jsx)(o.z,{variant:"outline",className:"mx-2 w-min",fullWidth:!0,onClick:()=>i.closeModal(e),mt:"md",children:"No don't delete it"}),(0,s.jsx)(o.z,{className:"mx-2 w-min btn-delete",fullWidth:!0,onClick:()=>d(e),mt:"md",children:"Delete Video Lesson"})]})]})})}})]})}},4732:function(e,t,n){"use strict";n.d(t,{Mu:function(){return a},Pp:function(){return i}});var s=n(6794),r=n(9828);function a(e){return e?(e instanceof r.EK&&(e=e.toDate()),(0,s.Z)(new Date(e),"dd MMM, yyyy")):""}function i(e){return e?(e instanceof r.EK&&(e=e.toDate()),(0,s.Z)(new Date(e),"MMM-d-yyyy @ p")):""}},1252:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(2581),r=n(7294),a=["size","color"];function i(e){var t=e.size,n=void 0===t?24:t,i=e.color,o=(0,s.Kd)(e,a);return r.createElement("svg",(0,s.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-edit",width:n,height:n,viewBox:"0 0 24 24",stroke:void 0===i?"currentColor":i,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}),r.createElement("path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}),r.createElement("path",{d:"M16 5l3 3"}))}},3616:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(2581),r=n(7294),a=["size","color"];function i(e){var t=e.size,n=void 0===t?24:t,i=e.color,o=(0,s.Kd)(e,a);return r.createElement("svg",(0,s.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-trash",width:n,height:n,viewBox:"0 0 24 24",stroke:void 0===i?"currentColor":i,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},o),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),r.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),r.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),r.createElement("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),r.createElement("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}))}}},function(e){e.O(0,[4793,3053,3143,3981,9774,2888,179],function(){return e(e.s=2568)}),_N_E=e.O()}]);