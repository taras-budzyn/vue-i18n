(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(e,n,t){},331:function(e,n,t){},343:function(e,n,t){"use strict";var a=t(315);t.n(a).a},367:function(e,n,t){"use strict";var a=t(331);t.n(a).a},453:function(e,n,t){"use strict";t.r(n);var a=t(373),c=(t(175),{name:"CarbonAds",props:{code:{type:String,required:!0},placement:{type:String,required:!0}},mounted:function(){var e=document.createElement("script");e.id="_carbonads_js",e.src="//cdn.carbonads.com/carbon.js?serve=".concat(this.code,"&placement=").concat(this.placement),this.$el.appendChild(e)}}),o=(t(367),t(44)),r=Object(o.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"carbon-ads"})}),[],!1,null,null,null).exports,s={name:"Layout",components:{ParentLayout:a.a,CarbonAds:r}},i=(t(343),Object(o.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main-container"},[t("ParentLayout",{scopedSlots:e._u([{key:"page-top",fn:function(){return[e.$site.themeConfig.carbonAds?t("CarbonAds",{key:"ca:"+e.$page.path,attrs:{code:e.$site.themeConfig.carbonAds.carbon,placement:e.$site.themeConfig.carbonAds.placement}}):e._e()]},proxy:!0}])})],1)}),[],!1,null,"238bd661",null));n.default=i.exports}}]);