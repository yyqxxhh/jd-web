(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bc0b938"],{3433:function(t,e,o){},"7d27":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"myOrder"},[o("van-nav-bar",{attrs:{title:"我的京东","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[o("van-icon",{attrs:{name:"more-o",size:"30"}})]},proxy:!0}])}),o("van-search",{attrs:{placeholder:"商品名称/商品编号/订单号"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),o("van-tabs",{on:{click:t.changeOrder},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[o("van-tab",{attrs:{title:"全部"}},t._l(t.myOrderData,(function(t,e){return o("van-card",{key:e,attrs:{num:t.goods[0].goods_number,price:t.goods[0].goods_price,title:t.goods[0].goods_name,thumb:t.goods[0].goods_img}})})),1),o("van-tab",{attrs:{title:"代付款"}},t._l(t.myOrderData,(function(e,r){return o("van-card",{key:r,attrs:{num:e.goods[0].goods_number,price:e.goods[0].goods_price,title:e.goods[0].goods_name,thumb:e.goods[0].goods_img},scopedSlots:t._u([{key:"footer",fn:function(){return[o("van-button",{attrs:{size:"mini"},on:{click:function(o){return t.$router.push({name:"delivery",params:{orderItem:e.goods[0]}})}}},[t._v("查看物流")])]},proxy:!0}],null,!0)})})),1),o("van-tab",{attrs:{title:"待收货"}},t._l(t.myOrderData,(function(t,e){return o("van-card",{key:e,attrs:{num:t.goods[0].goods_number,price:t.goods[0].goods_price,title:t.goods[0].goods_name,thumb:t.goods[0].goods_img}})})),1),o("van-tab",{attrs:{title:"已完成"}},t._l(t.myOrderData,(function(t,e){return o("van-card",{key:e,attrs:{num:t.goods[0].goods_number,price:t.goods[0].goods_price,title:t.goods[0].goods_name,thumb:t.goods[0].goods_img}})})),1)],1)],1)},n=[],a={name:"myOrder",components:{},data:function(){return{value:"",active:0,myOrderData:[]}},methods:{onClickLeft:function(){this.$router.go(-1)},getOrder:function(t){var e=this;this.axios.post("https://api.ymduo.com/ordershow/index",this.$qs.stringify({userid:956532,page:1,type:t})).then((function(t){console.log(t.data.result.data),e.myOrderData=t.data.result.data}))},changeOrder:function(){this.getOrder(this.active)}},created:function(){this.type=this.$route.params.type,this.active=this.type,this.getOrder(this.type)},mounted:function(){}},s=a,i=(o("ef98"),o("2877")),d=Object(i["a"])(s,r,n,!1,null,"79810e3c",null);e["default"]=d.exports},ef98:function(t,e,o){"use strict";var r=o("3433"),n=o.n(r);n.a}}]);
//# sourceMappingURL=chunk-6bc0b938.fed6259d.js.map