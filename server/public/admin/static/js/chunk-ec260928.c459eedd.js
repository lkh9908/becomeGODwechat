(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec260928"],{"17ff":function(e,t,u){},"1f16":function(e,t,u){"use strict";u("d4df")},"7a38":function(e,t,u){"use strict";u("17ff")},"978a":function(e,t,u){"use strict";var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,a){return u("li",{key:a,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},r=[],s=u("5530"),n=(u("a9e3"),u("b0c0"),u("ac1f"),u("5319"),u("2f62")),o={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},i=o,l=(u("7a38"),u("2877")),c=Object(l["a"])(i,a,r,!1,null,"69562c9a",null);t["a"]=c.exports},cacf:function(e,t,u){"use strict";u.r(t);var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},r=[],s=u("978a"),n={components:{sidebar:s["a"]},data:function(){return{moduleName:"AI文本创作",submenus:[{title:"创作记录",routeName:"ModuleWriteMsg",routeQuery:{}},{title:"模型管理",routeName:"ModuleWritePrompts",routeQuery:{}},{title:"类别管理",routeName:"ModuleWriteTopic",routeQuery:{}}]}},methods:{}},o=n,i=(u("1f16"),u("2877")),l=Object(i["a"])(o,a,r,!1,null,"1ad19816",null);t["default"]=l.exports},d4df:function(e,t,u){}}]);