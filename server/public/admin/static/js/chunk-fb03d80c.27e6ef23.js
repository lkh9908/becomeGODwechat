(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb03d80c"],{1582:function(e,t,u){"use strict";u.r(t);var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},n=[],s=u("978a"),r={components:{sidebar:s["a"]},data:function(){return{moduleName:"AI绘画",submenus:[{title:"生成记录",routeName:"ModuleDrawMsg",routeQuery:{}},{title:"参数配置",routeName:"ModuleDrawSetting",routeQuery:{}}]}},methods:{}},i=r,o=(u("4fe7"),u("2877")),l=Object(o["a"])(i,a,n,!1,null,"68f29ccb",null);t["default"]=l.exports},"17ff":function(e,t,u){},"4fe7":function(e,t,u){"use strict";u("e493")},"7a38":function(e,t,u){"use strict";u("17ff")},"978a":function(e,t,u){"use strict";var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,a){return u("li",{key:a,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},n=[],s=u("5530"),r=(u("a9e3"),u("b0c0"),u("ac1f"),u("5319"),u("2f62")),i={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},o=i,l=(u("7a38"),u("2877")),c=Object(l["a"])(o,a,n,!1,null,"69562c9a",null);t["a"]=c.exports},e493:function(e,t,u){}}]);