(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4568],{7810:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/no-access",function(){return r(247)}])},8185:function(t,e,r){"use strict";var n=r(5893),i=r(7414),a=r(9008),s=r.n(a),o=r(7294);let u=(0,o.forwardRef)((t,e)=>{let{children:r,title:a="",meta:o,...u}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"".concat(a," | Signally")}),o]}),(0,n.jsx)(i.x,{sx:{},ref:e,...u,children:r})]})});e.Z=u},3759:function(t,e,r){"use strict";r.d(e,{YR:function(){return u},c0:function(){return d},mW:function(){return c},w7:function(){return l}});var n=r(6418),i=r(4864),a=r(9828),s=r(1376),o=r(6167);async function u(t,e){t.trim().toLowerCase();try{let r=await (0,i.e5)(n.U_,t,e);return r.user}catch(t){throw Error(t.message)}}async function d(t){t.trim().toLowerCase();try{return await (0,i.LS)(n.U_,t),!0}catch(t){throw t}}async function c(t,e){try{t.trim().toLowerCase();let r=await (0,i.Xb)(n.U_,t,e);if(r){await (0,a.pl)((0,a.JU)(n.$V,"users",r.user.uid),{name:"",email:r.user.email,isNotificationsEnabled:!0,isAdmin:!0,isSuperAdmin:!0,subIsLifetime:!0,timestampUpdated:(0,a.Bt)(),timestampCreated:(0,a.Bt)(),roles:["admin","superadmin"]},{merge:!0});let t=new s.r;return await (0,o.wo)(t),await (0,a.pl)((0,a.JU)(n.$V,"appControlsPrivate","appControlsPrivate"),{isSuperAdminConfigured:!0},{merge:!0}),r.user}}catch(t){throw t}}async function l(){try{await n.U_.signOut()}catch(t){throw t}}},6167:function(t,e,r){"use strict";r.d(e,{r1:function(){return u},uN:function(){return d},wo:function(){return o}});var n=r(9828),i=r(1376),a=r(6418),s=r(5477);async function o(t){let e={...i.r.toJson(t)};delete e.id,delete e.apiHasAccess,delete e.apiInfo,delete e.apiWebSocketUrl;try{let t=a.U_.currentUser,r=await (0,s.V)(t.uid);if(!r)throw Error("No user found!");if(!r.isSuperAdmin&&!r.isAdmin)throw Error("You are not authorized to update terms settings.");return await (0,n.pl)((0,n.JU)(a.$V,"appControlsPublic","appControlsPublic"),{...e},{merge:!0}),await (0,n.pl)((0,n.JU)(a.$V,"signalsAggrOpen","crypto"),{isEnabled:e.isEnabledCryptoSignals,sort:e.sortOrderCryptoSignals,name:e.headingNameCrypto},{merge:!0}),await (0,n.pl)((0,n.JU)(a.$V,"signalsAggrOpen","forex"),{isEnabled:e.isEnabledForexSignals,sort:e.sortOrderForexSignals,name:e.headingNameForex},{merge:!0}),await (0,n.pl)((0,n.JU)(a.$V,"signalsAggrOpen","stocks"),{isEnabled:e.isEnabledStocksSignals,sort:e.sortOrderStocksSignals,name:e.headingNameStocks},{merge:!0}),await (0,n.pl)((0,n.JU)(a.$V,"newsAggr","crypto"),{isEnabled:e.isEnabledCryptoNews},{merge:!0}),await (0,n.pl)((0,n.JU)(a.$V,"newsAggr","forex"),{isEnabled:e.isEnabledForexNews},{merge:!0}),await (0,n.pl)((0,n.JU)(a.$V,"newsAggr","stocks"),{isEnabled:e.isEnabledStocksNews},{merge:!0}),!0}catch(t){throw Error(t.message)}}async function u(t){let e={...i.r.toJsonLinks(t)};try{let t=a.U_.currentUser,r=await (0,s.V)(t.uid);if(!r)throw Error("No user found!");if(!r.isSuperAdmin&&!r.isAdmin)throw Error("You are not authorized to update terms settings.");return await (0,n.pl)((0,n.JU)(a.$V,"appControlsPublic","appControlsPublic"),{...e},{merge:!0}),!0}catch(t){throw Error(t.message)}}async function d(){try{let t=await (0,n.QT)((0,n.JU)(a.$V,"appControlsPublic","appControlsPublic"));return i.r.fromJson({...t.data(),id:t.id})}catch(t){return null}}},5477:function(t,e,r){"use strict";r.d(e,{V:function(){return o},z:function(){return s}});var n=r(9828),i=r(817),a=r(6418);async function s(t,e){let r={isAdmin:e.isAdmin,isSuperAdmin:e.isSuperAdmin,subIsLifetime:e.subIsLifetime,subIsLifetimeEndDate:e.subIsLifetimeEndDate,username:e.username,profileImage:e.profileImage,timestampUpdated:(0,n.Bt)()};try{let e=a.U_.currentUser,i=await o(e.uid);if(!i)throw Error("No user found!");if(!i.isSuperAdmin&&!i.isAdmin)throw Error("You are not authorized to update users.");return await (0,n.r7)((0,n.JU)(a.$V,"users",t),{...r}),!0}catch(t){throw Error(t.message)}}async function o(t){try{var e,r,s,o,u,d,c,l,p,m,f;let b=await (0,n.QT)((0,n.JU)(a.$V,"users",t));if(!b.data())return null;return i._.fromJson({...b.data(),id:b.id,timestampCreated:null===(e=b.data().timestampCreated)||void 0===e?void 0:e.toDate(),timestampUpdated:null===(r=b.data().timestampUpdated)||void 0===r?void 0:r.toDate(),subIsLifetimeEndDate:null===(s=b.data().subIsLifetimeEndDate)||void 0===s?void 0:s.toDate(),subRevenueCatBillingIssueDetectedAt:null===(o=b.data().subRevenueCatBillingIssueDetectedAt)||void 0===o?void 0:o.toDate(),subRevenueCatOriginalPurchaseDate:null===(u=b.data().subRevenueCatOriginalPurchaseDate)||void 0===u?void 0:u.toDate(),subRevenueCatLatestPurchaseDate:null===(d=b.data().subRevenueCatLatestPurchaseDate)||void 0===d?void 0:d.toDate(),subRevenueCatExpirationDate:null===(c=b.data().subRevenueCatExpirationDate)||void 0===c?void 0:c.toDate(),subRevenueCatUnsubscribeDetectedAt:null===(l=b.data().subRevenueCatUnsubscribeDetectedAt)||void 0===l?void 0:l.toDate(),subStripeStart:null===(p=b.data().subStripeStart)||void 0===p?void 0:p.toDate(),subStripeEnd:null===(m=b.data().subStripeEnd)||void 0===m?void 0:m.toDate(),subSubscriptionEndDate:null===(f=b.data().subSubscriptionEndDate)||void 0===f?void 0:f.toDate()})}catch(t){return null}}},247:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});var n=r(5893),i=r(7414),a=r(5117),s=r(7841),o=r(1163),u=r(8185),d=r(3759);function c(){let t=(0,o.useRouter)();return(0,n.jsx)(u.Z,{title:"No Access",children:(0,n.jsxs)(i.x,{className:"flex flex-col items-center justify-center h-screen dark:bg-dark-100 bg-light-100",children:[(0,n.jsx)(a.x,{className:"mb-10 font-bold",children:"You dont have access to this page. Please contact the admin."}),(0,n.jsx)("img",{src:"/svg/404.svg",className:"h-[300px]"}),(0,n.jsx)(s.z,{onClick:function(){(0,d.w7)(),t.push("/signin")},className:"w-[200px] mt-12 border-0 bg-app-primary text-white hover:bg-opacity-90 transition",children:"Back to sign in"})]})})}},1163:function(t,e,r){t.exports=r(6885)},4864:function(t,e,r){"use strict";r.d(e,{LS:function(){return n.LS},Xb:function(){return n.Xb},e5:function(){return n.e5}});var n=r(5955)}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=7810)}),_N_E=t.O()}]);