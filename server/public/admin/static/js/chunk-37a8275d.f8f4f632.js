(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37a8275d"],{"311b":function(e,t,a){"use strict";a("44aa")},4253:function(e,t,a){"use strict";a("660e")},"44aa":function(e,t,a){},"660e":function(e,t,a){},"90e7":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return o}));var r=a("b775");function i(e){return Object(r["a"])({url:"/setting/getSetting",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/setting/getEngines",method:"post",data:e})}function n(e){return Object(r["a"])({url:"/setting/setSetting",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/setting/getBalance",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/setting/getLxaiBalance",method:"post",data:e})}},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var r=a("b775");function i(e){return Object(r["a"])({url:"/upload/image",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/upload/pem",method:"post",data:e})}},a11c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"H5版设置",name:"h5"}},[e.form?a("el-form",{ref:"h5Form",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"H5版站点开关",prop:"is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["is_open"],callback:function(t){e.$set(e.form,"is_open",t)},expression:"form['is_open']"}})],1),e.h5url?a("el-form-item",{attrs:{label:"H5站点链接"}},[a("a",{staticStyle:{color:"#409EFF"},attrs:{href:e.h5url,target:"_blank"}},[e._v(e._s(e.h5url))])]):e._e(),a("el-form-item",{attrs:{label:"H5首页标题",prop:"page_title"}},[a("el-input",{attrs:{placeholder:"请输入首页标题",size:"small"},model:{value:e.form["page_title"],callback:function(t){e.$set(e.form,"page_title",t)},expression:"form['page_title']"}}),a("p",{staticStyle:{margin:"0",color:"#999"}},[e._v("默认：AI创作助手")])],1),a("el-form-item",{attrs:{label:"分享标题",prop:"share_title"}},[a("el-input",{attrs:{placeholder:"默认页面标题",size:"small"},model:{value:e.form["share_title"],callback:function(t){e.$set(e.form,"share_title",t)},expression:"form['share_title']"}})],1),a("el-form-item",{attrs:{label:"分享描述",prop:"share_desc"}},[a("el-input",{attrs:{placeholder:"",size:"small"},model:{value:e.form["share_desc"],callback:function(t){e.$set(e.form,"share_desc",t)},expression:"form['share_desc']"}})],1),a("el-form-item",{attrs:{label:"分享图片",prop:"share_image"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:e.form["share_image"],callback:function(t){e.$set(e.form,"share_image",t)},expression:"form['share_image']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"share_image"},"http-request":e.uploadImage,"show-file-list":!1,multiple:!1}},[e.form["share_image"]?a("img",{staticClass:"avatar",staticStyle:{height:"80px",width:"auto"},attrs:{src:e.form["share_image"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"80px",height:"80px","line-height":"80px"}})]),a("span",[e._v("建议300x300像素，正方形图片")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:function(t){return e.doSubmit("h5Form")}}},[e._v("保 存")])],1)],1):e._e()],1)],1)],1)},i=[],s=(a("e9c4"),a("90e7")),n=a("c24f"),l=a("91b6"),o={data:function(){return{tabName:"h5",form:null,pcurl:"",h5url:"",formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],appid:[{required:!0,message:"此项必填",trigger:"blur"}],appsecret:[{required:!0,message:"此项必填",trigger:"blur"}],token:[{required:!0,message:"此项必填",trigger:"blur"}],aes_key:[{required:!0,message:"此项必填",trigger:"blur"}],page_title:[{required:!0,message:"此项必填",trigger:"blur"}],share_title:[{required:!0,message:"此项必填",trigger:"blur"}],share_desc:[{required:!0,message:"此项必填",trigger:"blur"}],share_image:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting(),this.getWebSiteUrl()},methods:{getSetting:function(){var e=this;Object(s["d"])({name:this.tabName}).then((function(t){e.form=t.data}))},getWebSiteUrl:function(){var e=this;Object(n["i"])().then((function(t){e.pcurl=t.data.pcurl,e.h5url=t.data.h5url}))},switchTab:function(){this.getSetting()},doSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e?Object(s["e"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message.success(e.message)})):t.$message.error("请填写必填项")}))},uploadImage:function(e){var t=this,a=new FormData;a.append("file",e.file),e.data&&a.append("data",JSON.stringify(e.data)),Object(l["a"])(a).then((function(a){"share_image"===e.data.type&&t.$set(t.form,"share_image",a.data.path),t.$message.success("上传成功")}))}}},u=o,c=(a("311b"),a("4253"),a("2877")),m=Object(c["a"])(u,r,i,!1,null,"568ac9b8",null);t["default"]=m.exports}}]);