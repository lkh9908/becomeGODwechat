(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0765f582"],{"129f":function(t,e,a){"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}},"1ac4":function(t,e,a){"use strict";a("c22c")},"206e":function(t,e,a){"use strict";a("a89b")},3435:function(t,e,a){"use strict";a("b8e9")},"715d":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return n})),a.d(e,"h",(function(){return o})),a.d(e,"f",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"l",(function(){return d})),a.d(e,"j",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"i",(function(){return h})),a.d(e,"k",(function(){return f}));var i=a("b775");function s(t){return Object(i["a"])({url:"/commission/getList",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/commission/getSonList",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/commission/getTuserList",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/commission/getOrderList",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/commission/getApplyList",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/commission/getApplyInfo",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/commission/delApply",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/commission/setApplyStatus",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/commission/getWithdrawList",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/commission/delWithdraw",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/commission/getWithdrawInfo",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/commission/saveWithdrawInfo",method:"post",data:t})}},7476:function(t,e,a){"use strict";a("dae3")},"841c":function(t,e,a){"use strict";var i=a("c65b"),s=a("d784"),n=a("825a"),o=a("7234"),r=a("1d80"),l=a("129f"),c=a("577e"),u=a("dc4a"),d=a("14c3");s("search",(function(t,e,a){return[function(e){var a=r(this),s=o(e)?void 0:u(e,t);return s?i(s,e,a):new RegExp(e)[t](c(a))},function(t){var i=n(this),s=c(t),o=a(e,i,s);if(o.done)return o.value;var r=i.lastIndex;l(r,0)||(i.lastIndex=0);var u=d(i,s);return l(i.lastIndex,r)||(i.lastIndex=r),null===u?-1:u.index}]}))},a89b:function(t,e,a){},ac9d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-bottom":"20px"}},[a("div",{staticClass:"toolbar"},[a("div",[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"320px"},attrs:{placeholder:"昵称 / 姓名 / 手机号",size:"small",clearable:""},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)]),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{prop:"commission_time",label:"成为分销商时间",width:"180"}}),a("el-table-column",{attrs:{prop:"nickname",label:"微信",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.avatar}}),t._v(" "+t._s(e.row.nickname)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"realname",label:"姓名",width:"100"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"150"}}),a("el-table-column",{attrs:{prop:"total_fee",label:"可提现 / 已获得总佣金",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.commission_money)+"元 / "+t._s(e.row.commission_total)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"nickname",label:"他的上级",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.puser?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.puser.avatar}}),t._v(" "+t._s(e.row.puser.nickname)+" [ID: "+t._s(e.row.puser.id)+"] ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-s-marketing"},nativeOn:{click:function(a){return a.preventDefault(),t.sonList(e.row.id)}}},[t._v("下级分销商("+t._s(e.row.son_count)+")")]),a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-s-marketing"},nativeOn:{click:function(a){return a.preventDefault(),t.tuserList(e.row.id)}}},[t._v("推广的用户("+t._s(e.row.tuser_count)+")")]),a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-s-order"},nativeOn:{click:function(a){return a.preventDefault(),t.myOrderList(e.row.id)}}},[t._v("分销订单("+t._s(e.row.order_count)+")")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.sonListShow?a("son",{attrs:{pid:t.pid},on:{close:t.closeSonList}}):t._e(),t.tuserListShow?a("tuser",{attrs:{pid:t.pid},on:{close:t.closeTuserList}}):t._e(),t.myOrderListShow?a("myorder",{attrs:{pid:t.pid},on:{close:t.closeMyOrderList}}):t._e()],1)},s=[],n=(a("ac1f"),a("841c"),a("715d")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"查看下级分销商",width:"1000px",visible:!0,"close-on-click-modal":!0,"before-close":t.handleClose}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{prop:"commission_time",label:"成为分销商时间",width:"180"}}),a("el-table-column",{attrs:{label:"客户微信",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.avatar}}),t._v(" "+t._s(e.row.nickname)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"realname",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"150"}}),a("el-table-column",{attrs:{label:"可提现 / 已获得总佣金"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.commission_money)+"元 / "+t._s(e.row.commission_total)+"元")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1)},r=[],l=(a("a9e3"),{props:{isShow:{type:Boolean,default:!1},pid:{type:Number,default:0}},data:function(){return{listShow:!1,dataTotal:0,page:1,pagesize:10,dataList:[]}},created:function(){this.getSonList()},methods:{handleClose:function(){this.listShow=!1,this.dataList=[],this.$emit("close")},getSonList:function(){var t=this;Object(n["g"])({page:this.page,pagesize:this.pagesize,pid:this.pid}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getSonList()}}}),c=l,u=(a("7476"),a("2877")),d=Object(u["a"])(c,o,r,!1,null,"941d0c30",null),p=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"查看推广的用户",width:"1000px",visible:!0,"close-on-click-modal":!0,"before-close":t.handleClose}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:"注册时间",width:"180"}}),a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"80"}}),a("el-table-column",{attrs:{label:"头像昵称",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.avatar}}),t._v(" "+t._s(e.row.nickname)+" ")])]}}])}),a("el-table-column",{attrs:{label:"是否分销商",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.commission_level>0?a("span",[t._v("分销商")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"realname",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1)},h=[],f={props:{pid:{type:Number,default:0}},data:function(){return{dataTotal:0,page:1,pagesize:10,dataList:[]}},created:function(){this.getTuserList()},methods:{handleClose:function(){this.dataList=[],this.$emit("close")},getTuserList:function(){var t=this;Object(n["h"])({page:this.page,pagesize:this.pagesize,pid:this.pid}).then((function(e){var a=e.data;t.dataList=a.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getTuserList()}}},g=f,b=(a("1ac4"),Object(u["a"])(g,m,h,!1,null,"56b0bb58",null)),w=b.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"查看分销商订单",width:"1400px",visible:!0,"close-on-click-modal":!0,"before-close":t.handleClose}},[a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"create_time",label:"下单时间",width:"160"}}),a("el-table-column",{attrs:{prop:"user_id",label:"客户ID",width:"80"}}),a("el-table-column",{attrs:{prop:"nickname",label:"头像昵称",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.avatar}}),t._v(" "+t._s(e.row.nickname)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"out_trade_no",label:"订单号",width:"200"}}),a("el-table-column",{attrs:{label:"订单金额",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" ￥"+t._s(e.row.total_fee)+" ")]}}])}),a("el-table-column",{attrs:{prop:"status",label:"支付状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("span",[t._v("未付款")]):t._e(),1===e.row.status?a("span",[t._v("已付款")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"commission1",label:"直接推荐人",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.commission1?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.commission1_avatar}}),t._v(" "+t._s(e.row.commission1_nickname||"无昵称")+"（￥"+t._s(e.row.commission1_fee)+"） ")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"commission2",label:"间接推荐人"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.commission2?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.commission2_avatar}}),t._v(" "+t._s(e.row.commission2_nickname||"无昵称")+"（￥"+t._s(e.row.commission2_fee)+"） ")]):t._e()]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)],1)},y=[],v={props:{pid:{type:Number,default:0}},data:function(){return{dataTotal:0,page:1,pagesize:10,dataList:[]}},created:function(){this.getOrderList()},methods:{handleClose:function(){this.dataList=[],this.$emit("close")},getOrderList:function(){var t=this;Object(n["f"])({page:this.page,pagesize:this.pagesize,pid:this.pid}).then((function(e){var a=e.data;t.dataList=a.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getOrderList()}}},L=v,S=(a("206e"),Object(u["a"])(L,_,y,!1,null,"2d4ecd56",null)),x=S.exports,k={components:{son:p,tuser:w,myorder:x},data:function(){return{search:{},dataList:[],dataTotal:0,page:1,pagesize:10,detailShow:!1,pid:0,tuserListShow:!1,sonListShow:!1,myOrderListShow:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(n["e"])({page:this.page,pagesize:this.pagesize,keyword:this.search.keyword}).then((function(e){var a=e.data;t.dataList=a.list,t.dataTotal=e.data.count}))},sonList:function(t){this.pid=t,this.sonListShow=!0},closeSonList:function(){this.pid=0,this.sonListShow=!1},tuserList:function(t){this.pid=t,this.tuserListShow=!0},closeTuserList:function(){this.pid=0,this.tuserListShow=!1},myOrderList:function(t){this.pid=t,this.myOrderListShow=!0},closeMyOrderList:function(){this.pid=0,this.myOrderListShow=!1},doSearch:function(){this.getList(),this.page=1},pageChange:function(t){this.page=t,this.getList()}}},O=k,z=(a("3435"),Object(u["a"])(O,i,s,!1,null,"55d3360e",null));e["default"]=z.exports},b8e9:function(t,e,a){},c22c:function(t,e,a){},dae3:function(t,e,a){}}]);