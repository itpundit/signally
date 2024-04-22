"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7687],{776:function(e,t,a){a.d(t,{Z:function(){return C}});var l=a(5893),s=a(5117),i=a(7414),r=a(7841),o=a(61),n=a(3833),u=a(2615),d=a(9376),c=a(7248),m=a(7317),f=a(4922),p=a(1163),g=a(7294),v=a(5910),h=a(6310),P=a(6592),x=a(8701),y=a(2167),b=a(8276),k=a(668),w=a(4202);function j(e,t,a){return null===Number(t)||null===Number(a)||null===t||""===t||null===a||""===a?"":"Long"===e&&Number(t)>=Number(a)?"Take profit must be higher than entry price":"Short"===e&&Number(t)<=Number(a)?"Take profit must be lower than entry price":""}function N(e,t){return null===e||null===t||0===e||0===t?0:Math.abs(e-t)/t}function T(e,t,a){if(null===e||null===t||""===e||""===t||0===e||0===t)return 0;let l=Math.abs(Math.round((Number(e)-Number(t))*1e4));return(a.includes("JPY")||a.includes("jpy"))&&(l/=100),l}function D(e,t,a){if(null===e||null===t||""===e||""===t||0===e||0===t)return 0;let l=Math.abs(Math.round((Number(e)-Number(t))*1e4));(a.includes("JPY")||a.includes("jpy"))&&(l/=100);let s=(Number(e)-Number(t))/Number(e)*100;return s=Math.abs(s=Math.round((s+Number.EPSILON)*1e6)/1e6),"".concat(s,"%  ||  ").concat(l," pips ")}var L=a(5758),Y=a(9140),H=a(1981),S=a(5578);function C(e){let{id:t,market:a,dbPath:s}=e,[i,r]=(0,g.useState)(null!=t),[o,n]=(0,g.useState)(null);async function u(){t&&n(await (0,w.Ht)({id:t,dbPath:s})),r(!1)}return((0,g.useEffect)(()=>{u()},[]),i)?(0,l.jsx)(Y.Z,{}):!o&&t?(0,l.jsx)(L.X,{}):(0,l.jsx)(E,{id:t,signal:o,market:a,dbPath:s})}function E(e){var t,a,L,Y,C,E,A,Z,F,R,I,q,M,_,U,V,J,z,O,B,$,X,W,G,Q,K,ee,et,ea,el,es;let{id:ei,signal:er,market:eo,dbPath:en}=e,eu=(0,p.useRouter)(),ed=(0,b.o)(),ec=eu.query.isAuto||"",em=null!==(t=null==er?void 0:er.isAuto)&&void 0!==t&&t,[ef,ep]=(0,g.useState)(!1),[eg,ev]=(0,g.useState)(null),eh=(0,S.a)(e=>e.symbolAggr),eP=h.Ry({entryType:h.Z_().required("Required"),symbol:h.Z_().required("Required"),comment:h.Z_(),isFree:h.Z_().required("Required"),analysisImage:h.Z_(),analysisText:h.Z_(),entryPrice:h.Rx().required("Required"),entryDateTime:h.hT().required("Required"),stopLoss:h.Rx().required("Required"),stopLossPips:h.Z_().nullable(),stopLossHit:h.Z_().required("Required"),stopLossDate:h.hT().nullable(),stopLossTime:h.hT().nullable(),takeProfit1:h.Rx().required("Required"),takeProfit1Pips:h.Z_().nullable(),takeProfit1Hit:h.Z_().required("Required"),takeProfit1DateTime:h.hT().nullable(),takeProfit2:"true"==ec?h.Z_().nullable().required("Required"):h.Z_().nullable(),takeProfit2Pips:h.Z_().nullable(),takeProfit2Hit:h.Z_().required("Required"),takeProfit2DateTime:h.hT().nullable(),takeProfit3:"true"==ec?h.Z_().nullable().required("Required"):h.Z_().nullable(),takeProfit3Pips:h.Z_().nullable(),takeProfit3Hit:h.Z_().required("Required"),takeProfit3DateTime:h.hT().nullable()}),ex=(0,c.c)({validate:(0,m.X)(eP),initialValues:{entryType:null!==(a=null==er?void 0:er.entryType)&&void 0!==a?a:"Long",symbol:null!==(L=null==er?void 0:er.symbol)&&void 0!==L?L:"",comment:null!==(Y=null==er?void 0:er.comment)&&void 0!==Y?Y:"",analysisImage:null!==(C=null==er?void 0:er.analysisImage)&&void 0!==C?C:"",analysisText:null!==(E=null==er?void 0:er.analysisText)&&void 0!==E?E:"",entryPrice:null!==(A=null==er?void 0:er.entryPrice)&&void 0!==A?A:"",entryDateTime:null!==(Z=null==er?void 0:er.entryDateTime)&&void 0!==Z?Z:new Date,isFree:(0,H.j)(null!==(F=null==er?void 0:er.isFree)&&void 0!==F&&F),stopLoss:null!==(R=null==er?void 0:er.stopLoss)&&void 0!==R?R:"",stopLossPips:null!==(I=null==er?void 0:er.stopLossPips)&&void 0!==I?I:"",stopLossHit:(0,H.j)(null!==(q=null==er?void 0:er.stopLossHit)&&void 0!==q&&q),stopLossDate:null!==(M=null==er?void 0:er.getStopLossDate)&&void 0!==M?M:null,stopLossTime:null!==(_=null==er?void 0:er.getStopLossTime)&&void 0!==_?_:null,takeProfit1:(null==er?void 0:er.takeProfit1)==0?"":null!==(U=null==er?void 0:er.takeProfit1)&&void 0!==U?U:"",takeProfit1Pips:null!==(V=null==er?void 0:er.takeProfit1Pips)&&void 0!==V?V:"",takeProfit1Hit:(0,H.j)(null!==(J=null==er?void 0:er.takeProfit1Hit)&&void 0!==J&&J),takeProfit1DateTime:null!==(z=null==er?void 0:er.takeProfit1DateTime)&&void 0!==z?z:null,takeProfit2:(null==er?void 0:er.takeProfit2)==0?"":null!==(O=null==er?void 0:er.takeProfit2)&&void 0!==O?O:"",takeProfit2Pips:null!==(B=null==er?void 0:er.takeProfit2Pips)&&void 0!==B?B:"",takeProfit2Hit:(0,H.j)(null!==($=null==er?void 0:er.takeProfit2Hit)&&void 0!==$&&$),takeProfit2Date:null!==(X=null==er?void 0:er.getTakeProfit2Date)&&void 0!==X?X:null,takeProfit2DateTime:null!==(W=null==er?void 0:er.takeProfit2DateTime)&&void 0!==W?W:null,takeProfit3:(null==er?void 0:er.takeProfit3)==0?"":null!==(G=null==er?void 0:er.takeProfit3)&&void 0!==G?G:"",takeProfit3Pips:null!==(Q=null==er?void 0:er.takeProfit3Pips)&&void 0!==Q?Q:"",takeProfit3Hit:(0,H.j)(null!==(K=null==er?void 0:er.takeProfit3Hit)&&void 0!==K&&K),takeProfit3Date:null!==(ee=null==er?void 0:er.getTakeProfit3Date)&&void 0!==ee?ee:null,takeProfit3DateTime:null!==(et=null==er?void 0:er.takeProfit3DateTime)&&void 0!==et?et:null}}),ey=async e=>{let{sendNotification:t,isClosed:a}=e;if(console.log("form.values",ex.values),console.log("form.errors",ex.errors),!ex.validate().hasErrors)try{var l;ep(!0);let e=new P.j;er&&(e={...e,...P.j.toJson(er)}),ei||(e.isAuto="true"==ec),e.market=eo,e.entryType=ex.values.entryType,e.symbol=ex.values.symbol,e.comment=ex.values.comment,e.analysisImage=ex.values.analysisImage,e.analysisText=ex.values.analysisText,e.entryPrice=Number(ex.values.entryPrice),e.entryDateTime=ex.values.entryDateTime,e.isFree=(0,H.Y)(ex.values.isFree),e.stopLoss=Number(ex.values.stopLoss),e.stopLossPct=N(e.entryPrice,e.stopLoss),e.stopLossPips=T(e.entryPrice,e.stopLoss,e.symbol),e.stopLossHit=(0,H.Y)(ex.values.stopLossHit),e.stopLossDateTime=function(e,t){if(!e||!t)return null;let a=new Date(e.getTime());return a.setHours(t.getHours(),t.getMinutes()),a}(ex.values.stopLossDate,ex.values.stopLossTime),e.takeProfit1=Number(ex.values.takeProfit1),e.takeProfit1Pct=N(e.entryPrice,e.takeProfit1),e.takeProfit1Pips=T(e.entryPrice,e.takeProfit1,e.symbol),e.takeProfit1Hit=(0,H.Y)(ex.values.takeProfit1Hit),e.takeProfit1DateTime=ex.values.takeProfit1DateTime,e.takeProfit2=Number(ex.values.takeProfit2),e.takeProfit2Pct=N(e.entryPrice,e.takeProfit2),e.takeProfit2Pips=T(e.entryPrice,e.takeProfit2,e.symbol),e.takeProfit2Hit=(0,H.Y)(ex.values.takeProfit2Hit),e.takeProfit2DateTime=ex.values.takeProfit2DateTime,e.takeProfit3=Number(ex.values.takeProfit3),e.takeProfit3Pct=N(e.entryPrice,e.takeProfit3),e.takeProfit3Pips=T(e.entryPrice,e.takeProfit3,e.symbol),e.takeProfit3Hit=(0,H.Y)(ex.values.takeProfit3Hit),e.takeProfit3DateTime=ex.values.takeProfit3DateTime,e.timestampCreated=null!==(l=null==er?void 0:er.timestampCreated)&&void 0!==l?l:new Date,e.timestampUpdated=new Date,eg&&(e.analysisImage=await (0,k.T)({file:eg})),er||await (0,w.NE)({signal:e,sendNotification:t,dbPath:en}),er&&ei&&await (0,w.Uw)({signal:e,sendNotification:t,dbPath:en,id:ei,isClosed:a}),ep(!1),"commodity"==eo&&eu.push("/signals-commodities"),"crypto"==eo&&eu.push("/signals-crypto"),"forex"==eo&&eu.push("/signals-forex"),"stocks"==eo&&eu.push("/signals-stocks"),(0,f.c0)({title:"Success",message:"Signal was created",autoClose:6e3})}catch(e){console.log("error",e),ep(!1),(0,f.c0)({color:"red",title:"Error",message:"There was an error creating the signals",autoClose:6e3})}},eb=()=>{let e=ed.openModal({title:"Are you sure you want to proceed?",centered:!0,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.x,{size:"sm",children:"Manually close signal? This action cannot be undone."}),(0,l.jsxs)(i.x,{className:"flex justify-end mt-6",children:[(0,l.jsx)(r.z,{variant:"outline",className:"mx-2 border w-min border-light-800 text-dark-400",fullWidth:!0,onClick:()=>ed.closeModal(e),mt:"md",children:"No don't close it"}),(0,l.jsx)(r.z,{className:"mx-2 w-min btn-delete",fullWidth:!0,onClick:()=>{ed.closeModal(e),ey({sendNotification:!1,isClosed:!0})},mt:"md",children:"close signal"})]})]})})};return(0,l.jsxs)(i.x,{className:"",children:["true"==ec&&(0,l.jsx)(s.x,{className:"mb-5 text-xl font-bold text-red-500",children:"You are creating an auto signal, once created values cant be change the api service will handle it"}),em&&(0,l.jsx)(s.x,{className:"mb-5 text-xl font-bold text-red-500",children:"This is an auto signal most fields have been disabled"}),(0,l.jsxs)("div",{className:"grid xs:grid-cols-2 md:grid-cols-3 gap-x-3",children:["true"!=ec&&(0,l.jsx)(o.o,{className:"w-full",placeholder:"Symbol",label:"Symbol",...ex.getInputProps("symbol"),disabled:em}),"true"==ec&&(0,l.jsx)(n.p,{className:"w-full",disabled:em,placeholder:"----",label:"Symbol",data:["",...("forex"===eo?eh.forex:"crypto"===eo?eh.crypto:"stocks"===eo?eh.stocks:[]).map(e=>e.symbol)],onChange:e=>ex.setFieldValue("symbol",e.target.value),value:ex.values.symbol,error:ex.errors.symbol}),(0,l.jsx)(n.p,{className:"w-full",disabled:em,placeholder:"Long",label:"Long/Short",data:["Long","Short"],onChange:e=>ex.setFieldValue("entryType",e.target.value),value:ex.values.entryType,error:ex.errors.entryType}),(0,l.jsx)(n.p,{className:"w-full",placeholder:"Free",label:"Free",data:["","Yes","No"],onChange:e=>ex.setFieldValue("isFree",e.target.value),value:ex.values.isFree,error:ex.errors.isFree})]}),(0,l.jsxs)("div",{className:"grid mt-6 xs:grid-cols-2 md:grid-cols-3 gap-x-3",children:[(0,l.jsx)(o.o,{label:"Entry",placeholder:"Entry",className:"w-full",...ex.getInputProps("entryPrice"),type:"number",disabled:em}),(0,l.jsx)(d.x,{valueFormat:"DD MMM YYYY hh:mm A",label:"Entry date and time",placeholder:"Entry date and time",className:"w-full",...ex.getInputProps("entryDateTime"),disabled:em})]}),(0,l.jsxs)("div",{className:"grid mt-6 xs:grid-cols-2 md:grid-cols-4 gap-x-3",children:[(0,l.jsx)(o.o,{label:"Stop loss",placeholder:"Stop loss",disabled:em,type:"number",className:"w-full",...ex.getInputProps("stopLoss"),error:(ea=ex.values.entryType,el=ex.values.entryPrice,es=ex.values.stopLoss,(null===el||null===es||""===el||""===es?"":"Long"===ea&&Number(el)<=Number(es)?"Stop loss must be lower than entry price":"Short"===ea&&Number(el)>=Number(es)?"Stop loss must be higher than entry price":"")||ex.errors.stopLoss)}),(0,l.jsx)(o.o,{label:"Stop loss pct(%) pips",placeholder:"Stop pct loss pips",className:"w-full",value:D(ex.values.entryPrice,ex.values.stopLoss,ex.values.symbol),disabled:!0}),(0,l.jsx)(d.x,{valueFormat:"DD MMM YYYY hh:mm A",label:"Stop loss day and time",className:"w-full",...ex.getInputProps("stopLossDate"),disabled:!ei||em}),(0,l.jsx)(n.p,{className:"w-full",placeholder:"",disabled:!ei||em,label:"Stop loss hit",data:["Yes","No"],onChange:e=>ex.setFieldValue("stopLossHit",e.target.value),value:ex.values.stopLossHit,error:ex.errors.stopLossHit})]}),(0,l.jsxs)("div",{className:"grid mt-6 xs:grid-cols-2 md:grid-cols-4 gap-x-3",children:[(0,l.jsx)(o.o,{disabled:em,label:"Take profit 1",placeholder:"Take profit 1",type:"number",className:"w-full",...ex.getInputProps("takeProfit1"),error:j(ex.values.entryType,ex.values.entryPrice,ex.values.takeProfit1)||ex.errors.takeProfit1}),(0,l.jsx)(o.o,{label:"Take profit 1 pct(%) pips",placeholder:"No update",value:D(ex.values.entryPrice,ex.values.takeProfit1,ex.values.symbol),className:"w-full",disabled:!0}),(0,l.jsx)(d.x,{valueFormat:"DD MMM YYYY hh:mm A",label:"Take profit 1 day and time",className:"w-full",...ex.getInputProps("takeProfit1DateTime"),disabled:!ei||em}),(0,l.jsx)(n.p,{className:"w-full",disabled:!ei||em,placeholder:"",label:"Take profit 1 hit",data:["Yes","No"],onChange:e=>ex.setFieldValue("takeProfit1Hit",e.target.value),value:ex.values.takeProfit1Hit,error:ex.errors.takeProfit1Hit})]}),(0,l.jsxs)("div",{className:"grid mt-6 xs:grid-cols-2 md:grid-cols-4 gap-x-3",children:[(0,l.jsx)(o.o,{disabled:em,label:"Take profit 2",placeholder:"Take profit 2",className:"w-full",onChange:e=>{ex.setFieldValue("takeProfit2",""==e.target.value?null:e.target.value),console.log(ex.values.takeProfit2)},value:ex.values.takeProfit2,error:j(ex.values.entryType,ex.values.entryPrice,ex.values.takeProfit2)||ex.errors.takeProfit2}),(0,l.jsx)(o.o,{label:"Take profit 2 pct(%) pips",className:"w-full",value:D(ex.values.entryPrice,ex.values.takeProfit2,ex.values.symbol),disabled:!0}),(0,l.jsx)(d.x,{valueFormat:"DD MMM YYYY hh:mm A",label:"Take profit 2 day and time",className:"w-full",...ex.getInputProps("takeProfit2DateTime"),disabled:!ei||em}),(0,l.jsx)(n.p,{className:"w-full",placeholder:"",disabled:!ei||em,label:"Take profit 2 hit",data:["Yes","No"],onChange:e=>ex.setFieldValue("takeProfit2Hit",e.target.value),value:ex.values.takeProfit2Hit,error:ex.errors.takeProfit2Hit})]}),(0,l.jsxs)("div",{className:"grid mt-6 xs:grid-cols-2 md:grid-cols-4 gap-x-3",children:[(0,l.jsx)(o.o,{disabled:em,label:"Take profit 3",placeholder:"Take profit 3",className:"w-full",onChange:e=>{ex.setFieldValue("takeProfit3",""==e.target.value?null:e.target.value)},error:j(ex.values.entryType,ex.values.entryPrice,ex.values.takeProfit3)||ex.errors.takeProfit3,value:ex.values.takeProfit3}),(0,l.jsx)(o.o,{label:"Take profit 3 pct(%) pips",className:"w-full",value:D(ex.values.entryPrice,ex.values.takeProfit3,ex.values.symbol),disabled:!0}),(0,l.jsx)(d.x,{valueFormat:"DD MMM YYYY hh:mm A",label:"Take profit 3 day and time",className:"w-full",...ex.getInputProps("takeProfit3DateTime"),disabled:!ei||em}),(0,l.jsx)(n.p,{className:"w-full",placeholder:"",disabled:!ei||em,label:"Take profit 3 hit",data:["Yes","No"],onChange:e=>ex.setFieldValue("takeProfit3Hit",e.target.value),value:ex.values.takeProfit3Hit,error:ex.errors.takeProfit3Hit})]}),(0,l.jsxs)(i.x,{className:"relative",children:[(0,l.jsx)(()=>eg||ex.values.analysisImage?(0,l.jsx)(r.z,{className:"absolute z-40 btn right-2 top-2",onClick:()=>{ex.setFieldValue("analysisImage",""),ev(null)},children:"Remove"}):null,{}),(0,l.jsx)(x.fh,{className:"z-0 p-2 mt-8",multiple:!1,disabled:null!=eg||""!=ex.values.analysisImage,onDrop:e=>{if(e.length>0){let t=e[0];ev(Object.assign(t,{preview:URL.createObjectURL(t)}))}},onReject:e=>console.log("rejected files",e),maxSize:3145728,accept:y.d1,children:(0,l.jsx)(()=>""!=ex.values.analysisImage?(0,l.jsx)(i.x,{className:"relative flex justify-center",children:(0,l.jsx)("img",{className:"h-[300px]",src:ex.values.analysisImage,alt:"Preview"})}):eg?(0,l.jsxs)(i.x,{className:"relative flex justify-center",children:[(0,l.jsx)("img",{className:"h-[300px]",src:eg.preview,alt:"Preview"})," "]}):(0,l.jsx)(i.x,{className:"min-h-[300px] pointer-events-none flex justify-center items-center text-center",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(s.x,{size:"xl",inline:!0,children:"Drag analysis image here"}),(0,l.jsx)(s.x,{size:"sm",color:"dimmed",inline:!0,mt:7,children:"Attach a single file not larger than 5MB"})]})}),{})})]}),(0,l.jsxs)("div",{className:"mb-5",children:[(0,l.jsx)(u.g,{label:"Analysis",placeholder:"Analysis",minRows:4,maxLength:140,className:"mt-4",...ex.getInputProps("analysisText")}),(0,l.jsx)(u.g,{label:"Comment",placeholder:"Result",minRows:4,maxLength:140,className:"mt-4",...ex.getInputProps("comment")})]}),(0,l.jsxs)("div",{className:"mb-20 md:flex gap-x-5",children:[(!ei||(null==er?void 0:er.isClosed)==!1)&&(0,l.jsx)(r.z,{loading:ef,onClick:()=>ey({sendNotification:!0}),leftIcon:(0,l.jsx)(v.Z,{size:14}),variant:"filled",className:"w-full mt-10 text-black transition border-0 bg-app-yellow hover:bg-opacity-90",children:ei?"Update with notification":"Submit with notification"}),(0,l.jsx)(r.z,{loading:ef,onClick:()=>ey({sendNotification:!1}),leftIcon:(0,l.jsx)(v.Z,{size:14}),variant:"filled",className:"w-full mt-5 text-white transition bg-gray-500 border-0 md:mt-10 bg-opacity-60 hover:bg-opacity-90",children:ei?"Update quietly":"Submit quietly"}),ei&&(null==er?void 0:er.isClosed)==!1&&(0,l.jsx)(r.z,{onClick:function(){ex.validate().hasErrors||eb()},leftIcon:(0,l.jsx)(v.Z,{size:14}),variant:"filled",className:"w-full mt-5 text-white transition bg-red-500 border-0 md:mt-10 hover:bg-opacity-90",children:"Close signal"})]})]})}},5758:function(e,t,a){a.d(t,{X:function(){return r}});var l=a(5893),s=a(7414),i=a(5117);function r(e){let{}=e;return(0,l.jsxs)(s.x,{className:"border p-10 flex flex-col items-center rounded-md",children:[(0,l.jsx)("img",{className:"w-[400px] object-contain",src:"/images/form-error.png",alt:""}),(0,l.jsx)(i.x,{className:"text-center mt-10",children:"There was an error loading the form. Please try again later."})]})}a(7294)},9140:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(5893),s=a(7414),i=a(8623);function r(e){let{}=e;return(0,l.jsxs)(s.x,{className:"",children:[(0,l.jsx)(i.O,{mt:6,height:30,radius:"xs"}),(0,l.jsx)(i.O,{mt:6,height:30,radius:"xs"}),(0,l.jsx)(i.O,{mt:6,height:30,radius:"xs"}),(0,l.jsx)(i.O,{mt:6,height:30,radius:"xs"}),(0,l.jsx)(i.O,{mt:6,height:30,width:"90%",radius:"xs"}),(0,l.jsx)(i.O,{mt:6,height:30,width:"80%",radius:"xs"})]})}a(7294)},6125:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(5893),s=a(1163),i=a(7294),r=a(5578),o=a(247);function n(e){let{children:t}=e,{pathname:a,push:n}=(0,s.useRouter)(),[u,d]=(0,i.useState)(null),{isAuthenticated:c,isInitialized:m,authUser:f}=(0,r.a)(e=>e);return((0,i.useEffect)(()=>{u&&a!==u&&(d(null),n(u))},[a,n,u]),m)?a.includes("/reset-password")?(a!==u&&d(a),n("/reset-password"),(0,l.jsx)("div",{})):!c&&a.includes("/signin")?(a!==u&&d(a),n("/signin"),(0,l.jsx)("div",{})):c?c&&((null==f?void 0:f.isSuperAdmin)===!0||(null==f?void 0:f.isAdmin)===!0||(null==f?void 0:f.isTestAdmin)===!0)?(0,l.jsx)(l.Fragment,{children:t}):c&&(null==f?void 0:f.isSuperAdmin)===!1&&(null==f?void 0:f.isAdmin)===!1&&(null==f?void 0:f.isTestAdmin)===!1?(0,l.jsx)(o.default,{}):(0,l.jsx)("div",{}):(n("/signin"),(0,l.jsx)("div",{})):(0,l.jsx)("div",{})}},668:function(e,t,a){a.d(t,{T:function(){return n}});var l=a(6650),s=a(6770),i=a.n(s),r=a(7632);let o=e=>{let{file:t}=e;return new Promise(e=>{i().imageFileResizer(t,1500,1500,"JPEG",95,0,t=>{e(t)},"base64")})},n=async e=>{let{file:t}=e,a="",s=(0,l.cF)(),i=(0,l.iH)(s,"images/".concat((0,r.Z)(),".jpeg")),n=await o({file:t});try{let e=await (0,l.sf)(i,n,"data_url");a=await (0,l.Jt)(e.ref)}catch(e){}return a}},4202:function(e,t,a){a.d(t,{Ht:function(){return c},NE:function(){return u},Uw:function(){return d},b:function(){return m}});var l=a(6154),s=a(9828),i=a(6592),r=a(6418),o=a(5477),n=a(5049);async function u(e){let{signal:t,sendNotification:a,dbPath:n="signalsCrypto"}=e;if(!t)throw Error("No signal provided!");try{var u;let e=r.U_.currentUser,d=await (0,o.V)(e.uid);if(!d)throw Error("No user found!");if(!d.isSuperAdmin&&!d.isAdmin)throw Error("You are not authorized to create signals.");let c=await (null===(u=r.U_.currentUser)||void 0===u?void 0:u.getIdToken(!0));return await (0,s.ET)((0,s.hJ)(r.$V,n),{...i.j.toJson(t),timestampCreated:(0,s.Bt)(),timestampUpdated:(0,s.Bt)(),timestampLastAutoCheck:(0,s.Bt)()}),await p({dbPath:n}),await g({dbPath:n}),a&&await l.Z.post("/api/notifications",{title:"Signal",body:"New ".concat(t.symbol," signal added"),jsonWebToken:c,runAggregation:!0}),!0}catch(e){throw console.log(e),Error(e.message)}}async function d(e){let{id:t,signal:a,sendNotification:n,dbPath:u="signalsCrypto",isClosed:d=!1}=e;if(!t)throw Error("No id provided!");if(!a)throw Error("No signal provided!");try{var c;let e=r.U_.currentUser,m=await (0,o.V)(e.uid);if(!m)throw Error("No user found!");if(!m.isSuperAdmin&&!m.isAdmin)throw Error("You are not authorized to create signals.");let f=await (null===(c=r.U_.currentUser)||void 0===c?void 0:c.getIdToken(!0)),v=i.j.toJson(a);return delete v.timestampLastAutoCheck,!d&&(await (0,s.r7)((0,s.JU)(r.$V,u,t),{...i.j.toJson(v),timestampUpdated:(0,s.Bt)()}),n&&await l.Z.post("/api/notifications",{title:"Signal",body:"".concat(a.symbol," Signal updated"),jsonWebToken:f,runAggregation:!0})),d&&(await (0,s.r7)((0,s.JU)(r.$V,u,t),{...i.j.toJson(v),isClosedManual:!0,isClosedAuto:!1,isClosed:!0,timestampClosed:(0,s.Bt)()}),n&&await l.Z.post("/api/notifications",{title:"Signal",body:"".concat(a.symbol," Signal closed closed"),jsonWebToken:f,runAggregation:!0})),await p({dbPath:u}),await g({dbPath:u}),!0}catch(e){throw console.log(e),Error(e.message)}}async function c(e){let{id:t,dbPath:a}=e;if(!t)throw Error("No id provided!");try{let e=await (0,s.QT)((0,s.JU)(r.$V,a,t));if(!e.data())return null;return i.j.fromJson({...e.data(),id:e.id})}catch(e){return console.log(e),null}}async function m(e){let{id:t,dbPath:a}=e;if(!t)throw Error("No id provided!");try{let e=r.U_.currentUser,l=await (0,o.V)(e.uid);if(!l)throw Error("No user found!");if(!l.isSuperAdmin&&!l.isAdmin)throw Error("You are not authorized to delete signals.");return await (0,s.oe)((0,s.JU)(r.$V,a,t)),await p({dbPath:a}),await g({dbPath:a}),!0}catch(e){throw Error(e.message)}}async function f(e){let{dbPath:t}=e;try{let e=await (0,s.PL)((0,s.IO)((0,s.hJ)(r.$V,t),(0,s.ar)("isClosed","==",!1))),a=e.docs.map(e=>i.j.fromJson({...e.data(),id:e.id}));return a.sort((e,t)=>e.getEntryDateTime>t.getEntryDateTime?-1:1)}catch(e){return console.log(e),[]}}async function p(e){let{dbPath:t}=e;try{let e=await f({dbPath:t}),a=e.map(e=>i.j.toJson(e)),l="crypto";"signalsForex"===t&&(l="forex"),"signalsStocks"===t&&(l="stocks");let o=a.length>0;return await (0,s.pl)((0,s.JU)(r.$V,"signalsAggrOpen",l),{data:a,hasData:o,timestampUpdated:(0,s.Bt)()},{merge:!0}),!0}catch(e){throw console.log(e),Error(e.message)}}async function g(e){let{dbPath:t}=e;try{let e=(0,n.Z)(new Date,30),a=await (0,s.PL)((0,s.IO)((0,s.hJ)(r.$V,t),(0,s.ar)("entryDateTime",">",e))),l=a.docs.map(e=>i.j.fromJson({...e.data(),id:e.id}));l=l.filter(e=>e.takeProfit1DateTime||e.stopLossDateTime);let o=l.filter(e=>e.getEntryDateTime>(0,n.Z)(new Date,14)),u=l.filter(e=>e.getEntryDateTime>(0,n.Z)(new Date,7)),d=l.length,c=o.length,m=u.length,f=l.filter(e=>e.takeProfit1Hit).length,p=o.filter(e=>e.takeProfit1Hit).length,g=u.filter(e=>e.takeProfit1Hit).length,v="crypto";return"signalsForex"===t&&(v="forex"),"signalsStocks"===t&&(v="stocks"),await (0,s.pl)((0,s.JU)(r.$V,"signalsAggrOpen",v),{performance7Days:{trades:m,profitPercentPerTrade:0,wins:g,winRate:m>0?g/m:0},performance14Days:{trades:c,profitPercentPerTrade:0,wins:p,winRate:c>0?p/c:0},performance30Days:{trades:d,profitPercentPerTrade:0,wins:f,winRate:d>0?f/d:0},timestampUpdated:(0,s.Bt)()},{merge:!0}),!0}catch(e){throw console.log(e),Error(e.message)}}},247:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(5893),s=a(7414),i=a(5117),r=a(7841),o=a(1163),n=a(8185),u=a(3759);function d(){let e=(0,o.useRouter)();return(0,l.jsx)(n.Z,{title:"No Access",children:(0,l.jsxs)(s.x,{className:"flex flex-col items-center justify-center h-screen dark:bg-dark-100 bg-light-100",children:[(0,l.jsx)(i.x,{className:"mb-10 font-bold",children:"You dont have access to this page. Please contact the admin."}),(0,l.jsx)("img",{src:"/svg/404.svg",className:"h-[300px]"}),(0,l.jsx)(r.z,{onClick:function(){(0,u.w7)(),e.push("/signin")},className:"w-[200px] mt-12 border-0 bg-app-primary text-white hover:bg-opacity-90 transition",children:"Back to sign in"})]})})}},1981:function(e,t,a){function l(e){return null==e?"Yes":!0===e?"Yes":"No"}function s(e){return"Yes"==e}a.d(t,{Y:function(){return s},j:function(){return l}})}}]);