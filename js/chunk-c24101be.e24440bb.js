(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c24101be"],{"333a":function(t,e,a){"use strict";var i=a("e9d8"),s=a.n(i);s.a},4886:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("van-nav-bar",{attrs:{"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-search",{attrs:{placeholder:"请输入搜索关键词",shape:"round"},on:{focus:t.categoryFocus},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})]},proxy:!0},{key:"right",fn:function(){return[a("van-button",{staticClass:"searchButton",attrs:{type:"danger"},on:{click:t.getSearchList}},[t._v("搜索")])]},proxy:!0}])}),a("div",{staticClass:"sideContent"},[a("van-sidebar",{model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.sidebarList,(function(e,i){return a("van-sidebar-item",{key:i,attrs:{title:e.category_cn},on:{click:function(a){return t.getTwoCat(e.category_id)}}})})),1),a("div",{staticClass:"sidebarRight"},[a("div",[a("ul",t._l(t.sidebarRightList,(function(e,i){return a("li",{key:i,on:{click:function(a){return t.getGoodsList(e.category_id)}}},[a("img",{attrs:{src:e.img,alt:""}}),a("p",[t._v(t._s(e.category_cn))])])})),0)])])],1)],1)},s=[],n={name:"category",components:{},data:function(){return{activeKey:0,sidebarList:[],searchVal:"",sidebarRightList:[]}},methods:{onClickLeft:function(){this.$router.go(-1)},getSearchList:function(){},getTwoCat:function(t){var e=this;this.axios.post("https://api.ymduo.com/category/categoryList",this.$qs.stringify({category_id:t})).then((function(t){console.log(t.data.result.data),e.sidebarRightList=t.data.result.data}))},categoryFocus:function(){this.$router.push("/search")},getGoodsList:function(t){this.$router.push({name:"categoryList",params:{cid:t}})}},created:function(){var t=this;this.axios.post("https://api.ymduo.com/category/categoryList",this.$qs.stringify({category_id:0})).then((function(e){console.log(e.data.result.data),t.sidebarList=e.data.result.data}))},mounted:function(){this.getTwoCat(2390)}},o=n,c=(a("333a"),a("2877")),r=Object(c["a"])(o,i,s,!1,null,"5e5c5412",null);e["default"]=r.exports},e9d8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c24101be.e24440bb.js.map