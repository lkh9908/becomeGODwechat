(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d0288b4"],{"17ff":function(e,t,u){},"7a38":function(e,t,u){"use strict";u("17ff")},"978a":function(e,t,u){"use strict";var r=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,r){return u("li",{key:r,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},o=[],a=u("5530"),i=(u("a9e3"),u("b0c0"),u("ac1f"),u("5319"),u("2f62")),l={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},n=l,s=(u("7a38"),u("2877")),c=Object(s["a"])(n,r,o,!1,null,"69562c9a",null);t["a"]=c.exports},"993a":function(e,t,u){},c288:function(e,t,u){"use strict";u("993a")},d239:function(e,t,u){"use strict";u.r(t);var r=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},o=[],a=u("978a"),i={components:{sidebar:a["a"]},data:function(){return{moduleName:"文档管理",submenus:[{title:"使用教程",routeName:"ModuleArticleHelp",routeQuery:{}},{title:"通知公告",routeName:"ModuleArticleNotice",routeQuery:{}},{title:"服务协议",routeName:"ModuleArticleService",routeQuery:{}},{title:"隐私政策",routeName:"ModuleArticlePrivacy",routeQuery:{}},{title:"免责声明",routeName:"ModuleArticleLegal",routeQuery:{}},{title:"分销协议",routeName:"ModuleArticleCommission",routeQuery:{}},{title:"关于我们",routeName:"ModuleArticleAbout",routeQuery:{}},{title:"联系客服",routeName:"ModuleArticleKefu",routeQuery:{}}]}},methods:{}},l=i,n=(u("c288"),u("2877")),s=Object(n["a"])(l,r,o,!1,null,"3f89247b",null);t["default"]=s.exports}}]);