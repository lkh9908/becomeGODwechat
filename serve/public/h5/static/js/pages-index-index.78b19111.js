(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2c39":function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("ac1f"),a("841c"),a("c975"),a("e25e"),a("5319"),a("498a"),a("14d9"),a("d3b7"),a("e9c4"),a("8a79");var s=i(a("44fb")),r=i(a("fd1e"));a("fd1e8"),a("279a"),a("a7eb"),a("40d3");var l=getApp(),d=[],c=0,u=new AbortController,f=u.signal,g={components:{TextComponent:s.default,Welcome:r.default},data:function(){return{pageIsLoad:!1,siteroot:"",group_id:0,lists:[],message:"",writingText:"",writing:!1,page:1,pagesize:10,scrollTop:0,page_title:"",hasModel4:!1,model4Name:"",balance_model4:"",model:"default"}},onLoad:function(t){var e=this,a=0,i=window.location.search;i&&-1!=i.indexOf("tuid=")&&(i=i.split("tuid=")[1],a=parseInt(i),a&&uni.setStorageSync("tuid",a)),this.setData({system:l.globalData.system,siteroot:l.globalData.siteroot.replace("/web.php",""),page_title:l.globalData.page_title}),l.globalData.util.checkLogin().then((function(){e.getHistoryMsg(),e.checkModel4(),setTimeout((function(){e.setData({pageIsLoad:!0})}),500)})),setTimeout((function(){uni.setNavigationBarTitle({title:l.globalData.page_title})}),300)},onShow:function(){uni.setNavigationBarTitle({title:l.globalData.page_title})},methods:{sendText:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var a,i,o,s,r,u,g,b,p,v,m,h,x,w,y;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.writing){e.next=2;break}return e.abrupt("return");case 2:if(a=t.trim(t.message),a){e.next=7;break}return l.globalData.util.message("请输入你的问题"),t.message="",e.abrupt("return");case 7:return c&&(clearInterval(c),c=0,d=[]),t.lists.push({user:"我",message:a}),t.message="",t.writing=!0,t.scrollToBottom(),i=new Headers,i.append("Content-Type","application/json"),i.append("X-site",uni.getStorageSync("sitecode")),o=t.siteroot+"/web.php/chat/sendText",s={message:a,model:t.model},e.next=19,fetch(o,{method:"POST",signal:f,headers:i,body:JSON.stringify(s)});case 19:if(r=e.sent,r.ok){e.next=24;break}return t.writing=!1,l.globalData.util.message(r.statusText),e.abrupt("return");case 24:u=r.body.getReader(),g=new TextDecoder("utf-8"),b=!1,p="",c=setInterval((function(){d.length>0?(t.writingText+=d.shift(),t.scrollToBottom()):t.writing||(clearInterval(c),c=0,t.writingText&&t.lists.push({user:"AI",message:t.writingText}),t.writingText="",setTimeout((function(){t.scrollToBottom()}),200))}),50);case 29:if(b){e.next=50;break}return t.scrollToBottom(),e.next=33,u.read();case 33:if(v=e.sent,m=v.value,h=v.done,!m){e.next=47;break}if(x=g.decode(m),"\n"!==x||!p.endsWith("\n")){e.next=40;break}return e.abrupt("continue",29);case 40:if(!x){e.next=47;break}if(-1===x.indexOf("[error]")){e.next=45;break}if(w=function(){t.writing=!1,t.writingText="",t.lists.pop();var e=x.replace("[error]","");return-1!==e.indexOf("请登录")?(t.$emit("showlogin"),setTimeout((function(){l.globalData.util.message(e)}),500)):-1!==e.indexOf("请充值")?"model4"==t.model?l.globalData.util.message(e,"error",(function(){uni.navigateTo({url:"/pages/pay/model4"})})):l.globalData.util.message(e,"error",(function(){uni.navigateTo({url:"/pages/pay/vip"})})):l.globalData.util.message(e,"error"),"break"}(),"break"!==w){e.next=45;break}return e.abrupt("break",50);case 45:for(t.writing=!0,y=0;y<x.length;y++)d.push(x[y]);case 47:b=h,e.next=29;break;case 50:t.writing=!1,t.getBalanceModel4();case 52:case"end":return e.stop()}}),e)})))()},abortFetching:function(){var e=this;t("log","abortFetching"," at pages/index/index.vue:274"),u.abort(),setTimeout((function(){clearInterval(c),c=0,e.writingText&&e.lists.push({user:"AI",message:e.writingText}),e.writing=!1,e.writingText="",setTimeout((function(){e.scrollToBottom()}),200)}),200)},sendConfirm:function(){var t=this;setTimeout((function(){t.sendText()}),50)},getHistoryMsg:function(){var t=this;l.globalData.util.request({url:"/chat/getHistoryMsg",data:{model:this.model}}).then((function(e){t.setData({lists:e.data.list}),setTimeout((function(){t.scrollToBottom()}),300)}))},checkModel4:function(){var t=this;l.globalData.util.request({url:"/h5/hasModel4",data:{from:"h5"},loading:!1}).then((function(e){t.setData({hasModel4:e.data.hasModel4,model4Name:e.data.model4Name})}))},getBalanceModel4:function(){var t=this;l.globalData.util.request({url:"/h5/getBalance",loading:!1}).then((function(e){t.setData({balance_model4:e.data.balance_model4})}))},toModel4Pay:function(){wx.navigateTo({url:"/pages/pay/model4"})},scrollToBottom:function(){var t=this;setTimeout((function(){var e=uni.createSelectorQuery().in(t);e.select(".list").boundingClientRect((function(e){e&&t.setData({scrollTop:parseInt(e.height)})})),e.exec((function(t){}))}),200)},quickMessage:function(t){this.message=t},toPay:function(){uni.navigateTo({url:"/pages/pay/pay"})},getWxappInfo:function(){var t=this;return new Promise((function(e,a){l.globalData.util.request({url:"/wxapp/getWxappInfo",loading:!1}).then((function(a){var i=a.data.page_title;i&&uni.setNavigationBarTitle({title:i}),"chat"==a.data.index_type&&a.data.outtype&&"stream"==a.data.outtype&&(t.setData({outtype:a.data.outtype}),t.socketConnect());var n=a.data.welcome;if(n){var o=t.lists;0==o.length&&(o.push({user:"AI",message:[n]}),t.setData({lists:o}))}t.setData({shareTitle:a.data.share_title,shareImage:a.data.share_image,is_check:a.data.is_check,index_type:a.data.index_type,content:a.data.content?JSON.parse(a.data.content):""}),e()}))}))},copyText:function(t){var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",e.style="width:0;height:0;",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length),l.globalData.util.message("已复制"),document.execCommand("copy"),e.remove()},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},switchModel:function(t){this.model!=t?this.writing?l.globalData.util.message("输出中，请稍等"):(this.setData({model:t,page:1}),this.getHistoryMsg(),this.getBalanceModel4()):this.scrollTop+=1}}};e.default=g}).call(this,a("0de9")["log"])},6742:function(t,e,a){"use strict";var i=a("8d31"),n=a.n(i);n.a},"8d31":function(t,e,a){var i=a("b3f3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("b55ac44e",i,!0,{sourceMap:!1,shadowMode:!1})},b3f3:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-67f0aab6]{background:#f7f7f7}body.?%PAGE?%[data-v-67f0aab6]{background:#f7f7f7}.tab-model[data-v-67f0aab6]{position:fixed;left:%?218?%;top:%?40?%;width:%?314?%;height:%?80?%;border-radius:%?20?%;background:#f6fafc;padding:%?10?%;box-sizing:border-box;z-index:99;display:flex;justify-content:space-between;align-items:center;box-shadow:0 0 %?20?% rgba(0,0,0,.1)}.tab-model .tab-item[data-v-67f0aab6]{width:%?140?%;height:%?60?%;line-height:%?60?%;text-align:center;border-radius:%?20?%;border:1px solid #ebf7f5;color:#666;font-size:%?30?%}.tab-model .tab-item[data-v-67f0aab6]:hover,\n.tab-model .active[data-v-67f0aab6]{background:#fff;color:#666;border:1px solid #f7f7f7}.gold .tab-model .active[data-v-67f0aab6]{border:1px solid #f5ad0c;color:#f5ad0c}.gold .balance4[data-v-67f0aab6]{line-height:%?48?%;margin-top:%?10?%;text-align:center;font-size:%?24?%;color:#999}.gold .balance4 uni-text[data-v-67f0aab6]{color:#10a37f;margin:0 %?10?%}.gold .box-input[data-v-67f0aab6]{padding-bottom:%?20?%}.gold .box-input .input[data-v-67f0aab6]{background:#fffef8;border:1px solid #ffa41a;border-radius:%?20?%}.gold .box-input .input uni-textarea[data-v-67f0aab6]{min-height:%?80?%}.box-input[data-v-67f0aab6]{width:100%;padding:%?40?% 0;left:0;bottom:0;border-top:1px solid #d8d8e2;background:#f6fafc}.box-input .input[data-v-67f0aab6]{width:%?690?%;margin:0 %?30?%;position:relative;box-sizing:border-box;box-shadow:0 0 %?12?% rgba(0,0,0,.1);background:#fefefe}.box-input .input uni-textarea[data-v-67f0aab6]{width:%?580?%;padding:%?20?% %?10?% %?20?% %?20?%;border-radius:%?10?%;line-height:%?40?%;max-height:%?800?%;overflow-x:hidden;overflow-y:auto}.box-input .input .btn-send[data-v-67f0aab6]{position:absolute;right:0;bottom:0;width:%?100?%;height:%?80?%;padding:0;border:none;border-radius:%?10?%;background:none;display:flex;align-items:center;justify-content:center;z-index:9}.box-input .input .btn-send[data-v-67f0aab6]::after{display:none}.box-input .input .btn-send[data-v-67f0aab6]:active{background:#f2f2f2}.box-input .input .btn-send uni-image[data-v-67f0aab6]{width:%?40?%}.empty[data-v-67f0aab6]{text-align:center;margin:0 %?60?%;padding:%?80?% 0 %?100?% 0;margin-top:%?200?%;background:#fff;border-radius:%?20?%}.empty uni-image[data-v-67f0aab6]{width:%?404?%;height:%?266?%;margin-bottom:%?40?%}.empty .tip[data-v-67f0aab6]{width:100%;line-height:%?40?%;font-size:%?32?%;letter-spacing:%?2?%;color:#444}.btn-finish[data-v-67f0aab6]{width:60%;height:%?80?%;line-height:%?80?%;border-radius:%?48?%;border:none;color:#fff;margin:%?240?% auto 0 20%;box-shadow:0 0 %?20?% rgba(0,235,79,.1);font-size:%?30?%;letter-spacing:%?4?%;outline:none;background:#39b54a;text-align:center}.page[data-v-67f0aab6]{width:100%;overflow:hidden;display:flex;flex-direction:column;position:absolute;left:0;right:0;top:0;bottom:0;background:#fff}.box-msg-list[data-v-67f0aab6]{width:100%;height:100%;top:0;bottom:%?132?%;left:0;box-sizing:border-box;overflow:hidden}.list[data-v-67f0aab6]{width:100%;height:auto}.message[data-v-67f0aab6]{display:flex;justify-content:flex-start;padding:%?40?% %?40?%;border-top:%?2?% solid #eee}.message[data-v-67f0aab6]:last-child{border-bottom:0}.message .text[data-v-67f0aab6]{width:100%;color:#343541;line-height:%?52?%;font-size:%?32?%;word-break:break-all;padding:%?4?% 0;overflow:hidden}.message .text span[data-v-67f0aab6]{display:inline}.message .avatar[data-v-67f0aab6]{width:%?48?%;height:%?48?%;background:#10a37f;margin-right:%?30?%;color:#fff;font-size:%?28?%;border-radius:%?4?%;display:flex;align-items:center;justify-content:center;margin-top:%?6?%}.message .avatar uni-image[data-v-67f0aab6],\n.message .avatar img[data-v-67f0aab6]{width:%?36?%;height:%?36?%}.account[data-v-67f0aab6]{margin:%?20?% %?30?%;padding:%?16?% %?24?% %?16?% %?24?%;box-sizing:border-box;\n\t/* background: #f3f6f9; */border-radius:%?10?%;display:flex;justify-content:space-between;align-items:center}.account .balance[data-v-67f0aab6]{color:#666;font-size:%?24?%}.account .balance uni-text[data-v-67f0aab6]{color:#10a37f;margin-right:%?6?%}.account .btn-pay[data-v-67f0aab6]{display:inline-block;color:#10a37f;margin-left:%?20?%;font-size:%?24?%}.banner-ad[data-v-67f0aab6]{width:100%;height:%?120?%;border-top:%?2?% solid #ddd}.content[data-v-67f0aab6]{padding:%?20?%}.content uni-view[data-v-67f0aab6]{margin:%?10?% 0;word-break:break-all;line-height:1.5;font-size:%?28?%;color:#444}.content uni-image[data-v-67f0aab6]{width:100%}.btn-copy[data-v-67f0aab6]{color:#409eff}",""]),t.exports=e},cefd:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{height:"100%"}},[t.pageIsLoad?a("v-uni-view",{staticClass:"page",class:{gold:"model4"===t.model}},[t.hasModel4?a("v-uni-view",{staticClass:"tab-model"},[a("v-uni-view",{staticClass:"tab-item",class:{active:"default"===t.model},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchModel("default")}}},[t._v("默认")]),a("v-uni-view",{staticClass:"tab-item",class:{active:"model4"===t.model},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchModel("model4")}}},[t._v(t._s(t.model4Name))])],1):t._e(),a("v-uni-scroll-view",{staticClass:"box-msg-list",attrs:{"scroll-x":!1,"scroll-y":!0,"scroll-with-animation":!1,"scroll-top":t.scrollTop}},[t.lists&&t.lists.length>0?a("v-uni-view",{staticClass:"list"},[t._l(t.lists,(function(e,i){return["AI"==e.user?a("v-uni-view",{key:i+"_0",staticClass:"message",staticStyle:{background:"#f7f7f8"},attrs:{"data-index":i}},[a("v-uni-view",{staticClass:"avatar"},[a("img",{attrs:{src:"/static/img/ic_ai.png"}})]),a("v-uni-view",{staticClass:"text markdown-body"},[a("textComponent",{attrs:{text:e.message}}),a("v-uni-view",{staticStyle:{display:"block"}},[a("span",{staticClass:"btn-copy",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyText(e.message)}}},[t._v("复制内容")])])],1)],1):a("v-uni-view",{staticClass:"message",staticStyle:{background:"#fff"},attrs:{"data-index":i},on:{longpress:function(a){arguments[0]=a=t.$handleEvent(a),t.copyText(e.message)}}},[a("v-uni-view",{staticClass:"avatar",staticStyle:{background:"#9aa37e"}},[a("img",{attrs:{src:"/static/img/ic_user.png"}})]),a("v-uni-view",{staticClass:"text markdown-body"},[a("textComponent",{attrs:{text:e.message}})],1)],1)]})),t.writing||t.writingText?a("v-uni-view",{staticClass:"message",staticStyle:{background:"#f7f7f8"}},[a("v-uni-view",{staticClass:"avatar"},[a("img",{attrs:{src:"/static/img/ic_ai.png"}})]),a("v-uni-view",{staticClass:"text markdown-body"},[a("textComponent",{attrs:{text:t.writingText,writing:!(!t.writing&&!t.writingText)}}),a("v-uni-view",{staticStyle:{display:"block"}},[a("span",{staticClass:"btn-copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.abortFetching.apply(void 0,arguments)}}},[t._v("停止回复")])])],1)],1):t._e()],2):a("v-uni-view",{style:"padding-top: "+(t.hasModel4?40:0)+"rpx;"},[a("welcome",{on:{use:function(e){arguments[0]=e=t.$handleEvent(e),t.quickMessage.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"box-input"},[a("v-uni-view",{staticClass:"input"},[a("v-uni-textarea",{attrs:{type:"text","confirm-type":"send","auto-height":!0,placeholder:"输入你的问题",maxlength:"3000","cursor-spacing":"0"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.sendConfirm.apply(void 0,arguments)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-uni-button",{staticClass:"btn-send",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendText.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{mode:"widthFix",src:"/static/images/ic_send.png"}})],1)],1),"model4"===t.model?a("v-uni-view",{staticClass:"balance4",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toModel4Pay.apply(void 0,arguments)}}},[t._v(t._s(t.model4Name)+" 余额"),a("v-uni-text",[t._v(t._s(t.balance_model4))]),t._v("万字")],1):t._e()],1)],1):t._e()],1)},n=[]},d412:function(t,e,a){"use strict";a.r(e);var i=a("cefd"),n=a("fb67");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("6742");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"67f0aab6",null,!1,i["a"],void 0);e["default"]=r.exports},fb67:function(t,e,a){"use strict";a.r(e);var i=a("2c39"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);