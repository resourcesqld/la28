(function(){"use strict";var e={5735:function(e,t,a){var r=a(9242),o=a(3396),n=a(7139);const i={id:"formio-land-form",class:"container container-fluid qg-site-width"},s={id:"qg-three-col",class:"row no-secondary-nav"},l={id:"qg-primary-content",role:"main"},p=(0,o._)("br",null,null,-1),u=(0,o._)("em",null,"(Land Act 1994)",-1),c=(0,o._)("div",{class:"clearfix"},null,-1),d=(0,o._)("div",{class:"qg-content-footer"},[(0,o._)("dl",null,[(0,o._)("dt",null,"Version:"),(0,o._)("dd",null,"2022/01")])],-1),m=(0,o._)("div",{id:"qg-options",class:"row justify-content-sm-end"},null,-1),f={id:"qg-secondary-content"};function h(e,t,a,r,h,v){const _=(0,o.up)("FormWrapper"),U=(0,o.up)("RightSideBar"),P=(0,o.up)("LeftSideBar");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",s,[(0,o._)("div",l,[(0,o._)("h1",null,[(0,o.Uk)((0,n.zw)(h.formName),1),p,u]),(0,o.Wm)(_,{projectUrl:h.projectUrl,wizardUrl:h.wizardUrl,createFormUrl:h.createFormUrl,formIdentifier:h.formIdentifier,savedApplicationPage:h.savedApplicationPage,thankYouPage:h.thankYouPage,submissionId:h.submissionId,hasPayment:h.hasPayment,paymentUrl:h.paymentUrl,recaptchaSiteKey:h.recaptchaSiteKey,purchaseItemName:h.purchaseItemName,guidePageUrl:h.guidePageUrl,shortUuidToken:h.shortUuidToken,feesCode:h.feesCode,feesUrl:h.feesUrl,privateKey:h.privateKey,authUrl:h.authUrl,formInfo:h.formInfo},null,8,["projectUrl","wizardUrl","createFormUrl","formIdentifier","savedApplicationPage","thankYouPage","submissionId","hasPayment","paymentUrl","recaptchaSiteKey","purchaseItemName","guidePageUrl","shortUuidToken","feesCode","feesUrl","privateKey","authUrl","formInfo"]),c,d,m]),(0,o._)("aside",f,[(0,o.Wm)(U)]),(0,o.Wm)(P,{formName:h.formName},null,8,["formName"])])])}var v=a(4808),_={name:"App",components:{LeftSideBar:v.Jq,FormWrapper:v.n5,RightSideBar:v.mM},data(){return{projectUrl:"https://api.forms.platforms.qld.gov.au/la28e",wizardUrl:"https://api.forms.platforms.qld.gov.au/la28e/application-form",createFormUrl:"https://api.forms.platforms.qld.gov.au/la28e/application-form",formIdentifier:"la28-production",formName:"Form 28e - Approval of a sublease",purchaseItemName:{VUE_APP_NAME:"la28",VUE_APP_ENV:"production",VUE_APP_PROJECT_URL:"https://api.forms.platforms.qld.gov.au/la28e",VUE_APP_WIZARD_URL:"https://api.forms.platforms.qld.gov.au/la28e/application-form",VUE_APP_SAVED_APPLICATION_PAGE:"https://www.qld.gov.au/environment/land/state/application/forms/services/saved-application",VUE_APP_THANK_YOU_PAGE:"https://www.qld.gov.au/environment/land/state/application/forms/services/thank-you-with-payment",VUE_APP_RECAPTCHA_SITE_KEY:"6LfKymMaAAAAAFLAylqOntXqT7CW6t2HlMgMcvkC",VUE_APP_FORM_NAME:"Form 28e - Approval of a sublease",VUE_APP_GUIDE_PAGE_URL:"https://www.qld.gov.au/environment/land/state/application/forms/services/approval-of-a-sublease",VUE_APP_HAS_PAYMENT:"true",VUE_APP_FEECODE:"33931",VUE_APP_PRIVATE_KEY:"bGEtZm9ybXM6V2VsY29tZTEyMyM=",VUE_APP_FORM_INFO:"99c55b00-ca0e-11ee-bcd6-2c8db19e0795",VUE_APP_PAYMENT_URL:"https://apps.resources.qld.gov.au/payment/api/payment/land-application",VUE_APP_FEE_URL:"https://apps.resources.qld.gov.au/payment/api/collection/fees-details",VUE_APP_AUTH_URL:"https://apps.resources.qld.gov.au/payment/api/login",NODE_ENV:"production",BASE_URL:"https://www.qld.gov.au/?a=311457:/"}.VUE_APP_PURCHASE_ITEM_NAME,savedApplicationPage:"https://www.qld.gov.au/environment/land/state/application/forms/services/saved-application",thankYouPage:"https://www.qld.gov.au/environment/land/state/application/forms/services/thank-you-with-payment",guidePageUrl:"https://www.qld.gov.au/environment/land/state/application/forms/services/approval-of-a-sublease",submissionId:"",hasPayment:"true",paymentUrl:"https://apps.resources.qld.gov.au/payment/api/payment/land-application",recaptchaSiteKey:"6LfKymMaAAAAAFLAylqOntXqT7CW6t2HlMgMcvkC",shortUuidToken:"",feesCode:"33931",feesUrl:"https://apps.resources.qld.gov.au/payment/api/collection/fees-details",privateKey:"bGEtZm9ybXM6V2VsY29tZTEyMyM=",authUrl:"https://apps.resources.qld.gov.au/payment/api/login",formInfo:"99c55b00-ca0e-11ee-bcd6-2c8db19e0795"}},beforeMount(){let e=window.location.search,t=new URLSearchParams(e),a=t.get("submissionId")??"",r=t.get("token")??"";this.createFormUrl=this.wizardUrl,""!==a&&""!==r&&(this.createFormUrl+="/submission/"+a),this.submissionId=a,this.shortUuidToken=r}},U=a(89);const P=(0,U.Z)(_,[["render",h]]);var g=P;(0,r.ri)(g).use(v.h).mount("#app")},6807:function(e){e.exports=Formio}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,n){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var p=o();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,i=r[0],s=r[1],l=r[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(t&&t(r);p<i.length;p++)n=i[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5735)}));r=a.O(r)})();
//# sourceMappingURL=app.b82dedd7.js.map