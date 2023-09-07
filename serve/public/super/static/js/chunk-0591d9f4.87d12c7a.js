(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0591d9f4"],{"2eee":function(t,e,a){"use strict";a("524f")},"524f":function(t,e,a){},7424:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"系统配置",name:"system"}},[t.form?a("el-form",{ref:"systemForm",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"系统名称",prop:"system_title"}},[a("el-input",{attrs:{placeholder:"系统标题",size:"small"},model:{value:t.form["system_title"],callback:function(e){t.$set(t.form,"system_title",e)},expression:"form['system_title']"}})],1),a("el-form-item",{attrs:{label:"后台logo",prop:"system_logo"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:t.form["system_logo"],callback:function(e){t.$set(t.form,"system_logo",e)},expression:"form['system_logo']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"system_logo"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["system_logo"]?a("img",{staticClass:"avatar",staticStyle:{height:"50px",width:"auto"},attrs:{src:t.form["system_logo"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"210px",height:"50px","line-height":"50px"}})]),a("span",[t._v("210x50像素")])],1),a("el-form-item",{attrs:{label:"ICP备案号",prop:"system_icp"}},[a("el-input",{attrs:{placeholder:"ICP备案号",size:"small"},model:{value:t.form["system_icp"],callback:function(e){t.$set(t.form,"system_icp",e)},expression:"form['system_icp']"}})],1),a("el-form-item",{attrs:{label:"公网安备号",prop:"system_gongan"}},[a("el-input",{attrs:{placeholder:"公网安备号",size:"small"},model:{value:t.form["system_gongan"],callback:function(e){t.$set(t.form,"system_gongan",e)},expression:"form['system_gongan']"}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1),a("el-tab-pane",{attrs:{label:"接口设置",name:"api"}},[t.form?a("el-form",{ref:"apiForm",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"接口通道",prop:"channel"}},[a("el-radio-group",{model:{value:t.form["channel"],callback:function(e){t.$set(t.form,"channel",e)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"gpt",size:"mini"}},[t._v("直连")]),a("el-radio",{attrs:{label:"diy",size:"mini"}},[t._v("间联")])],1)],1),"diy"===t.form["channel"]?a("el-form-item",{attrs:{label:"接口域名",prop:"host"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"http:// 或 https://域名 ，结尾不带/",size:"small"},model:{value:t.form["host"],callback:function(e){t.$set(t.form,"host",e)},expression:"form['host']"}})],1):t._e(),"diy"===t.form["channel"]?a("el-form-item",{attrs:{label:"接口密钥"}},[a("el-input",{staticStyle:{width:"160px"},attrs:{placeholder:"自定义",size:"small"},model:{value:t.form["key"],callback:function(e){t.$set(t.form,"key",e)},expression:"form['key']"}})],1):t._e(),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1)],1)],1)},l=[],o=(a("7b4c"),a("90e7")),i=a("b775");function n(t){return Object(i["a"])({url:"/upload/image",method:"post",data:t})}var r={data:function(){return{tabName:"system",form:null,formRules:{}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(o["a"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting()},doSubmit:function(){var t=this,e=null;"system"===this.tabName?e=this.$refs.systemForm:"api"===this.tabName&&(e=this.$refs.apiForm),e&&e.validate((function(e){e?Object(o["b"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message({message:e.message,type:"success",duration:1500})})):t.$message({message:"请填写必填项",type:"error",duration:1500})}))},uploadImage:function(t){var e=this,a=new FormData;a.append("file",t.file),t.data&&a.append("data",JSON.stringify(t.data)),n(a).then((function(a){"system_logo"===t.data.type&&e.$set(e.form,"system_logo",a.data.path),e.$message.success("上传成功")}))}}},m=r,c=(a("2eee"),a("864a"),a("3427")),p=Object(c["a"])(m,s,l,!1,null,"1f52e36f",null);e["default"]=p.exports},"864a":function(t,e,a){"use strict";a("9342")},"90e7":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return o}));var s=a("b775");function l(t){return Object(s["a"])({url:"/setting/getSetting",method:"post",data:t})}function o(t){return Object(s["a"])({url:"/setting/setSetting",method:"post",data:t})}},9342:function(t,e,a){}}]);