(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2ca8b70"],{2078:function(t,e,a){"use strict";var n=a("4c1d"),s=a.n(n);s.a},3320:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchList"},[a("van-popup",{style:{height:"100%",width:"70%"},attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-tag",[t._v("分类")]),a("br"),a("van-tag",[t._v("价格")]),a("br"),a("van-tag",[t._v("品牌")]),a("br"),a("van-tag",[t._v("规格")])],1),a("div",[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},on:{change:t.tagPrice},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),a("van-dropdown-item",{attrs:{options:t.option3},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),a("van-button",{attrs:{type:"default"},on:{click:function(e){t.show=!0}}},[t._v("筛选")])],1)],1),t.msg?t._e():a("div",{ref:"wrap",staticClass:"list"},[t.styleFlag?a("div",{staticClass:"listFirst"},t._l(t.forList,(function(e,n){return a("div",{key:n,staticClass:"list-one",on:{click:function(a){return t.toInfo(e.goods_id)}}},[a("img",{attrs:{src:e.image,alt:""}}),a("p",[t._v(t._s(e.goods_name))]),a("div",{staticClass:"for-price"},[a("span",[t._v("￥"+t._s(e.price))]),a("span",[t._v("看相似")])])])})),0):t._e(),t.styleFlag?t._e():a("div",{staticClass:"listSecond"},t._l(t.forList,(function(e,n){return a("van-card",{key:n,attrs:{price:e.price,desc:e.goods_name,thumb:e.image},on:{click:function(a){return t.toInfo(e.goods_id)}},scopedSlots:t._u([{key:"num",fn:function(){return[a("span",[t._v("看相似")])]},proxy:!0}],null,!0)})})),1)]),t.msg?t._e():a("div",{staticClass:"icon",on:{click:t.changeStyle}},[a("van-icon",{attrs:{size:"32",name:t.iconStyle,color:"#ccc"}})],1),t.msg?a("div",{staticClass:"nullDataCla"},[t._v(t._s(t.msg))]):t._e()],1)},s=[],o={name:"searchList",components:{},props:["forList","sval","msg"],data:function(){return{styleFlag:!0,iconStyle:"orders-o",show:!1,value1:0,value2:"a1",value3:"a",option1:[{text:"综合",value:0},{text:"最新上架",value:1},{text:"价格最低",value:4},{text:"价格最高",value:3},{text:"评价最多",value:2}],option2:[{text:"销量",value:"a1"}],option3:[{text:"有货优先",value:"a"},{text:"货到付款",value:"b"},{text:"京东国际",value:"c"},{text:"PLUS专享",value:"c"},{text:"促销商品",value:"c"},{text:"配送全球",value:"c"}]}},methods:{changeStyle:function(){this.styleFlag=!this.styleFlag,this.iconStyle="apps-o"==this.iconStyle?"orders-o":"apps-o"},tagPrice:function(t){this.$emit("redata",this.sval,t)},toInfo:function(t){this.$router.push({name:"info",params:{pid:t}})}},mounted:function(){}},i=o,c=(a("562d"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"e72ae5b0",null);e["a"]=r.exports},"4c1d":function(t,e,a){},"562d":function(t,e,a){"use strict";var n=a("8f76"),s=a.n(n);s.a},"5ec1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categoryList"},[a("search-header-com"),a("search-list-com",{attrs:{forList:t.goodsList}})],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchHeader"},[a("van-nav-bar",{attrs:{"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-search",{attrs:{placeholder:"请输入搜索关键词",shape:"round"},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})]},proxy:!0},{key:"right",fn:function(){return[a("van-button",{staticClass:"searchButton",attrs:{type:"danger"},on:{click:t.getSearchList}},[t._v("搜索")])]},proxy:!0}])})],1)},i=[],c={name:"",components:{},data:function(){return{searchVal:""}},methods:{onClickLeft:function(){this.$router.go(-1)},getSearchList:function(){}},mounted:function(){}},r=c,l=(a("2078"),a("2877")),u=Object(l["a"])(r,o,i,!1,null,"3b556626",null),d=u.exports,v=a("3320"),p={name:"categoryList",components:{SearchHeaderCom:d,SearchListCom:v["a"]},data:function(){return{cid:"",goodsList:[]}},created:function(){var t=this;this.cid=this.$route.params.cid,console.log(this.cid),this.axios.post("https://api.ymduo.com/category/goodsList",this.$qs.stringify({category_id:this.cid,p:1,order:1})).then((function(e){console.log(e.data.result.data),t.goodsList=e.data.result.data}))},methods:{},mounted:function(){}},f=p,h=Object(l["a"])(f,n,s,!1,null,"4465ab84",null);e["default"]=h.exports},"8f76":function(t,e,a){}}]);
//# sourceMappingURL=chunk-f2ca8b70.06321acc.js.map