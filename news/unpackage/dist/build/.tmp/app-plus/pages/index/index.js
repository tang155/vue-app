(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"185e":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},"191f":function(n,e,t){"use strict";var a=t("f61e"),u=t.n(a);u.a},"1d3c":function(n,e,t){"use strict";(function(n){t("a58f"),t("921b");a(t("66fd"));var e=a(t("e2af"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"4ea3":function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{news:[]}},onLoad:function(){var e=this;n.showLoading({title:"加载中。。。",mask:!1}),n.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(a){console.log(t(a," at pages\\index\\index.vue:36")),e.news=a.data,n.hideLoading()},fail:function(){},complete:function(){}})},methods:{openinfo:function(e){console.log(t(e," at pages\\index\\index.vue:47"));var a=e.currentTarget.dataset.newsid;console.log(t(a," at pages\\index\\index.vue:49")),n.navigateTo({url:"../info/info?newsid="+a,success:function(n){},fail:function(){},complete:function(){}})}}};e.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},d254:function(n,e,t){"use strict";t.r(e);var a=t("4ea3"),u=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);e["default"]=u.a},e2af:function(n,e,t){"use strict";t.r(e);var a=t("185e"),u=t("d254");for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);t("191f");var i=t("2877"),c=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},f61e:function(n,e,t){}},[["1d3c","common/runtime","common/vendor"]]]);