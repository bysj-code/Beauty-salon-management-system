(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chanpinxinxi/detail"],{"7ab0":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"924d"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"8ab2"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,Number(t.detail.price).toFixed(2));t.$mp.data=Object.assign({},{$root:{g0:n}})},r=[]},"8cdf":function(t,e,n){"use strict";(function(t){n("7f62");a(n("66fd"));var e=a(n("a80d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"90b2":function(t,e,n){"use strict";n.r(e);var a=n("aabf"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a80d:function(t,e,n){"use strict";n.r(e);var a=n("7ab0"),i=n("90b2");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("fe74");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},aabf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,i,r,s){try{var u=t[r](s),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(a,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var s=t.apply(e,n);function u(t){r(s,a,i,u,c,"next",t)}function c(t){r(s,a,i,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id,t.userid&&(e.userid=t.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return s(a.default.mark((function e(){var i,r,s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),i=t.getStorageSync("nowTable"),e.next=4,n.$api.session(i);case 4:r=e.sent,n.user=r.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),n.getStoreup(),s=t.getStorageSync("discusschanpinxinxiCleanType"),s&&(t.removeStorageSync("discusschanpinxinxiCleanType"),n.mescroll.num=1,n.upCallback(n.mescroll));case 10:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","chanpinxinxi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=this;return s(a.default.mark((function e(){var n,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,limit:1,refid:t.id,tablename:"chanpinxinxi",userid:t.user.id,type:1},e.next=3,t.$api.list("storeup",n);case 3:i=e.sent,t.storeupFlag=i.data.list.length;case 5:case"end":return e.stop()}}),e)})))()},shoucang:function(){var e=this;return s(a.default.mark((function n(){var i,r,u,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e,r={page:1,limit:1,refid:i.detail.id,tablename:"chanpinxinxi",userid:i.user.id,type:1},n.next=4,i.$api.list("storeup",r);case 4:if(u=n.sent,1!=u.data.list.length){n.next=9;break}return c=u.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,i.$api.del("storeup",JSON.stringify([c]));case 3:i.$utils.msg("取消成功"),i.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),n.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=s(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,i.$api.add("storeup",{userid:i.user.id,name:i.detail.chanpinmingcheng,picture:i.swiperList[0],refid:i.detail.id,tablename:"chanpinxinxi"});case 3:i.$utils.msg("收藏成功"),i.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return n.stop()}}),n)})))()},onAcrossTap:function(e,n,a,i,r){if(t.setStorageSync("crossTable","chanpinxinxi"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",i),""!=a&&!a.startsWith("[")){var s=t.getStorageSync("crossObj");for(var u in s)if(u==a&&s[u]==r)return void this.$utils.msg(i)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=this;return s(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("chanpinxinxi",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.tupian?t.detail.tupian.split(","):[],t.detail.chanpinxiangqing=t.detail.chanpinxiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return s(a.default.mark((function n(){var i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("discusschanpinxinxi",{page:t.num,limit:10,refid:e.id});case 2:i=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(i.data.list),0==i.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCartTap:function(){var e=this;return s(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.getStorageSync("cart".concat(e.detail.id).concat(e.user.id))){n.next=3;break}return e.$utils.msg("该商品已添加到购物车"),n.abrupt("return");case 3:return n.next=5,e.$api.add("cart",{tablename:"chanpinxinxi",goodid:e.detail.id,goodname:e.detail.chanpinmingcheng,picture:e.swiperList[0],buynumber:1,userid:e.user.id,price:e.detail.price,discountprice:e.detail.vipprice});case 5:t.setStorageSync("cart".concat(e.detail.id).concat(e.user.id),!0),e.$utils.msg("添加到购物车成功");case 7:case"end":return n.stop()}}),n)})))()},onBuyTap:function(){t.setStorageSync("orderGoods",[{tablename:"chanpinxinxi",goodid:this.detail.id,goodname:this.detail.chanpinmingcheng,picture:this.swiperList[0],buynumber:1,price:this.detail.price,discountprice:this.detail.vipprice}]),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=1")},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return s(a.default.mark((function e(){var n,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,limit:1,status:"已完成",goodid:t.detail.id},e.next=3,t.$api.page("orders",n);case 3:if(i=e.sent,0!=i.data.list.length){e.next=7;break}return t.$utils.msg("请完成订单后再评论"),e.abrupt("return");case 7:t.$utils.jump("../discusschanpinxinxi/add-or-update?refid=".concat(t.id));case 8:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return s(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("chanpinxinxi",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},db63:function(t,e,n){},fe74:function(t,e,n){"use strict";var a=n("db63"),i=n.n(a);i.a}},[["8cdf","common/runtime","common/vendor"]]]);