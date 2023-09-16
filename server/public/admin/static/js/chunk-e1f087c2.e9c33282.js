(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1f087c2"],{"076f":function(t,e,a){"use strict";a("5b2a")},3004:function(t,e,a){},"5b2a":function(t,e,a){},"90e7":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return c}));var n=a("b775");function r(t){return Object(n["a"])({url:"/setting/getSetting",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/setting/getEngines",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/setting/setSetting",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/setting/getBalance",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/setting/getLxaiBalance",method:"post",data:t})}},c666:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"AI绘画 - 参数配置",name:"draw"}},[t.form?a("el-form",{ref:"drawForm",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"绘画接口类型",prop:"platform"}},[a("el-radio-group",{model:{value:t.form["platform"],callback:function(e){t.$set(t.form,"platform",e)},expression:"form['platform']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[t._v("OpenAI")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"mj",size:"mini"}},[t._v("Midjourney")])],1)],1),a("el-form-item",{attrs:{label:"接口通道",prop:"channel"}},["openai"===t.form["platform"]?a("el-radio-group",{model:{value:t.form["channel"],callback:function(e){t.$set(t.form,"channel",e)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[t._v("OpenAI官方接口")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"api2d",size:"mini"}},[t._v("Api2d")])],1):t._e(),"mj"===t.form["platform"]?a("el-radio-group",{model:{value:t.form["channel"],callback:function(e){t.$set(t.form,"channel",e)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"lxai",size:"mini"}},[t._v("灵犀AI")]),a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"replicate",size:"mini"}},[t._v("Replicate")])],1):t._e(),"sd"===t.form["platform"]?a("el-radio-group",{model:{value:t.form["channel"],callback:function(e){t.$set(t.form,"channel",e)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"lxai",size:"mini"}},[t._v("灵犀AI")])],1):t._e(),"openai"===t.form["platform"]&&"openai"===t.form["channel"]?a("p",[t._v("可以使用普通的openai key，请根据您当地的法规酌情使用")]):t._e(),"openai"===t.form["platform"]&&"api2d"===t.form["channel"]?a("p",[t._v("这是一个提供openai接口的第三方平台，消耗90P/张，"),a("a",{staticClass:"text-primary",attrs:{href:"https://api2d.com/r/191912",target:"_blank"}},[t._v("注册地址")])]):t._e(),"mj"===t.form["platform"]&&"lxai"===t.form["channel"]?a("p",[t._v("由灵犀AI提供的Midjourney接口，$0.065/张，"),a("a",{staticClass:"text-primary",attrs:{href:"http://xhl.4387.top",target:"_blank"}},[t._v("key下单地址")])]):t._e(),"mj"===t.form["platform"]&&"replicate"===t.form["channel"]?a("p",[t._v("由Replicate提供的Midjourney接口，"),a("a",{staticClass:"text-primary",attrs:{href:"https://replicate.com/prompthero/openjourney",target:"_blank"}},[t._v("注册地址")])]):t._e()],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(e){return t.doSubmit("drawForm")}}},[t._v("保 存")])],1)],1):t._e()],1)],1)],1)},r=[],i=(a("e9c4"),a("90e7")),o={data:function(){return{tabName:"draw",form:null,balance:null,lxaiBalance:null,formRules:{platform:[{required:!0,message:"此项必填",trigger:"blur"}],channel:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(i["d"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t?Object(i["e"])({name:e.tabName,data:JSON.stringify(e.form)}).then((function(t){e.getSetting(),e.$message.success(t.message)})):e.$message.error("请填写必填项")}))},getBalance:function(){var t=this;Object(i["a"])({apikey:this.form.apikey}).then((function(e){t.balance=e.data}))},getLxaiBalance:function(){var t=this;Object(i["c"])({apikey:this.form.lxai_key}).then((function(e){t.lxaiBalance=e.data}))}}},l=o,c=(a("076f"),a("f008"),a("2877")),s=Object(c["a"])(l,n,r,!1,null,"d2b383b2",null);e["default"]=s.exports},f008:function(t,e,a){"use strict";a("3004")}}]);