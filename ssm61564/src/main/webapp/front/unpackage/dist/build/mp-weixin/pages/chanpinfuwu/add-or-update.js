(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chanpinfuwu/add-or-update"],{"7d29":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},8445:function(e,n,t){},b0c5:function(e,n,t){"use strict";t.r(n);var u=t("ef78"),r=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);n["default"]=r.a},db83:function(e,n,t){"use strict";t.r(n);var u=t("7d29"),r=t("b0c5");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("de08");var i,o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"72945c54",null,!1,u["a"],i);n["default"]=c.exports},de08:function(e,n,t){"use strict";var u=t("8445"),r=t.n(u);r.a},e39b:function(e,n,t){"use strict";(function(e){t("7f62");u(t("66fd"));var n=u(t("db83"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},ef78:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,u,r,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(u,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(u,r){var i=e.apply(n,t);function o(e){a(i,u,r,o,c,"next",e)}function c(e){a(i,u,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("29c3"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{fuwubianhao:this.getUUID(),fuwumingcheng:"",fuwuleixing:"",tupian:"",fuwuneirong:"",fuwujieshao:""},fuwuleixingOptions:[],fuwuleixingIndex:0,user:{},ro:{fuwubianhao:!1,fuwumingcheng:!1,fuwuleixing:!1,tupian:!1,fuwuneirong:!1,fuwujieshao:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(u.default.mark((function r(){var a,i,o,c;return u.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:return i=r.sent,t.user=i.data,r.next=7,t.$api.option("fuwuleixing","fuwuleixing",{});case 7:if(i=r.sent,t.fuwuleixingOptions=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=17;break}return t.ruleForm.id=n.id,r.next=15,t.$api.info("chanpinfuwu",t.ruleForm.id);case 15:i=r.sent,t.ruleForm=i.data;case 17:if(t.cross=n.cross,!n.cross){r.next=49;break}o=e.getStorageSync("crossObj"),r.t0=u.default.keys(o);case 21:if((r.t1=r.t0()).done){r.next=49;break}if(c=r.t1.value,"fuwubianhao"!=c){r.next=27;break}return t.ruleForm.fuwubianhao=o[c],t.ro.fuwubianhao=!0,r.abrupt("continue",21);case 27:if("fuwumingcheng"!=c){r.next=31;break}return t.ruleForm.fuwumingcheng=o[c],t.ro.fuwumingcheng=!0,r.abrupt("continue",21);case 31:if("fuwuleixing"!=c){r.next=35;break}return t.ruleForm.fuwuleixing=o[c],t.ro.fuwuleixing=!0,r.abrupt("continue",21);case 35:if("tupian"!=c){r.next=39;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,r.abrupt("continue",21);case 39:if("fuwuneirong"!=c){r.next=43;break}return t.ruleForm.fuwuneirong=o[c],t.ro.fuwuneirong=!0,r.abrupt("continue",21);case 43:if("fuwujieshao"!=c){r.next=47;break}return t.ruleForm.fuwujieshao=o[c],t.ro.fuwujieshao=!0,r.abrupt("continue",21);case 47:r.next=21;break;case 49:t.styleChange();case 50:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fuwuleixingChange:function(e){this.fuwuleixingIndex=e.target.value,this.ruleForm.fuwuleixing=this.fuwuleixingOptions[this.fuwuleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(u.default.mark((function t(){var r,a,i,o,c,s,f,l,d,g;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.cross){t.next=16;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=16;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=12;break}for(f in s)f==o&&(s[f]=c);return l=e.getStorageSync("crossTable"),t.next=10,n.$api.update("".concat(l),s);case 10:t.next=16;break;case 12:r=Number(e.getStorageSync("userid")),a=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!a||!r){t.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,d={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=22,n.$api.list("chanpinfuwu",d);case 22:if(g=t.sent,!(g.data.total>=i)){t.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!n.ruleForm.id){t.next=33;break}return t.next=31,n.$api.update("chanpinfuwu",n.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,n.$api.add("chanpinfuwu",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!n.ruleForm.id){t.next=43;break}return t.next=41,n.$api.update("chanpinfuwu",n.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,n.$api.add("chanpinfuwu",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),u=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),u=u>9?u:"0"+u,r=r>9?r:"0"+r,"".concat(t,"-").concat(u,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])}},[["e39b","common/runtime","common/vendor"]]]);