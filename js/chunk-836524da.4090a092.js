(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-836524da"],{"1dde":function(t,e,a){var n=a("d039"),s=a("b622"),r=a("2d00"),o=s("species");t.exports=function(t){return r>=51||!n((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2d3b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("van-nav-bar",{attrs:{"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"title",fn:function(){return[a("van-search",{attrs:{autofocus:"",placeholder:"请输入搜索关键词",shape:"round"},on:{focus:t.searchFocus},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})]},proxy:!0},{key:"right",fn:function(){return[a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.searchFlag,expression:"searchFlag"}],staticClass:"searchButton",attrs:{type:"danger"},on:{click:t.getSearchList}},[t._v("搜索")])]},proxy:!0}])}),t.searchFlag?a("div",{staticClass:"content"},[a("div",{staticClass:"nearest"},[a("p",[t._v("最近搜索")]),a("van-icon",{attrs:{name:"delete",size:"22"},on:{click:t.clearArr}})],1),a("div",t._l(t.searchArr,(function(e,n){return a("van-tag",{key:n,attrs:{color:"#ddd"},on:{click:function(a){return t.getListTag(e)}}},[t._v(t._s(e)+" ")])})),1),a("div",{staticClass:"nearest"},[a("p",[t._v("热门搜索")]),a("van-icon",{attrs:{name:"delete",size:"22"}})],1),a("div",[a("van-tag",{attrs:{color:"#ddd"}},[t._v("标签")]),a("van-tag",{attrs:{color:"#ddd"}},[t._v("标签")])],1)]):t._e(),t.searchFlag?t._e():a("search-list-com",{attrs:{forList:t.searchList,sval:t.searchVal,msg:t.nullDataMsg},on:{redata:t.getListPrice}})],1)},s=[],r=(a("c975"),a("a434"),a("3320")),o={name:"search",components:{SearchListCom:r["a"]},data:function(){return{searchVal:"",searchList:[],searchArr:[],searchFlag:!0,nullDataMsg:""}},beforeCreate:function(){},methods:{onClickLeft:function(){this.$router.go(-1)},getList:function(t,e){var a=this;this.axios.post("https://api.ymduo.com/search/index",this.$qs.stringify({keywords:t,order:e,p:1})).then((function(t){"201"==t.data.code?a.nullDataMsg=t.data.msg:(a.nullDataMsg="",a.searchList=t.data.result.data)}))},getListPrice:function(t,e){this.getList(t,e)},getListTag:function(t){this.searchVal=t,this.getList(t,1),this.searchFlag=!1},getSearchList:function(){if(""!=this.searchVal){this.searchFlag=!1;var t=JSON.parse(localStorage.searchArr);-1!=t.indexOf(this.searchVal)&&t.splice(t.indexOf(this.searchVal),1),t.unshift(this.searchVal),localStorage.searchArr=JSON.stringify(t),this.getList(this.searchVal,1)}else this.$Toast.fail("请输入需要搜索的商品")},clearArr:function(){localStorage.searchArr="[]",this.searchArr=JSON.parse(localStorage.searchArr)},searchFocus:function(){this.searchFlag=!0}},mounted:function(){localStorage.searchArr=localStorage.searchArr?localStorage.searchArr:"[]",this.searchArr=JSON.parse(localStorage.searchArr)},updated:function(){var t=document.getElementsByClassName("van-nav-bar__title")[0];t.style.marginLeft="30px",t.style.maxWidth="73%",t.style.height="45px",document.getElementsByClassName("van-search")[0].style.padding="6px 0 0 6px",document.getElementsByClassName("van-button--normal")[0].style.padding="0 0.1rem",document.getElementsByClassName("van-button--normal")[0].style.width="50px"}},i=o,c=(a("36e4"),a("2877")),l=Object(c["a"])(i,n,s,!1,null,"01d0bcec",null);e["default"]=l.exports},3320:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchList"},[a("van-popup",{style:{height:"100%",width:"70%"},attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-tag",[t._v("分类")]),a("br"),a("van-tag",[t._v("价格")]),a("br"),a("van-tag",[t._v("品牌")]),a("br"),a("van-tag",[t._v("规格")])],1),a("div",[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},on:{change:t.tagPrice},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),a("van-dropdown-item",{attrs:{options:t.option3},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),a("van-button",{attrs:{type:"default"},on:{click:function(e){t.show=!0}}},[t._v("筛选")])],1)],1),t.msg?t._e():a("div",{ref:"wrap",staticClass:"list"},[t.styleFlag?a("div",{staticClass:"listFirst"},t._l(t.forList,(function(e,n){return a("div",{key:n,staticClass:"list-one",on:{click:function(a){return t.toInfo(e.goods_id)}}},[a("img",{attrs:{src:e.image,alt:""}}),a("p",[t._v(t._s(e.goods_name))]),a("div",{staticClass:"for-price"},[a("span",[t._v("￥"+t._s(e.price))]),a("span",[t._v("看相似")])])])})),0):t._e(),t.styleFlag?t._e():a("div",{staticClass:"listSecond"},t._l(t.forList,(function(e,n){return a("van-card",{key:n,attrs:{price:e.price,desc:e.goods_name,thumb:e.image},on:{click:function(a){return t.toInfo(e.goods_id)}},scopedSlots:t._u([{key:"num",fn:function(){return[a("span",[t._v("看相似")])]},proxy:!0}],null,!0)})})),1)]),t.msg?t._e():a("div",{staticClass:"icon",on:{click:t.changeStyle}},[a("van-icon",{attrs:{size:"32",name:t.iconStyle,color:"#ccc"}})],1),t.msg?a("div",{staticClass:"nullDataCla"},[t._v(t._s(t.msg))]):t._e()],1)},s=[],r={name:"searchList",components:{},props:["forList","sval","msg"],data:function(){return{styleFlag:!0,iconStyle:"orders-o",show:!1,value1:0,value2:"a1",value3:"a",option1:[{text:"综合",value:0},{text:"最新上架",value:1},{text:"价格最低",value:4},{text:"价格最高",value:3},{text:"评价最多",value:2}],option2:[{text:"销量",value:"a1"}],option3:[{text:"有货优先",value:"a"},{text:"货到付款",value:"b"},{text:"京东国际",value:"c"},{text:"PLUS专享",value:"c"},{text:"促销商品",value:"c"},{text:"配送全球",value:"c"}]}},methods:{changeStyle:function(){this.styleFlag=!this.styleFlag,this.iconStyle="apps-o"==this.iconStyle?"orders-o":"apps-o"},tagPrice:function(t){this.$emit("redata",this.sval,t)},toInfo:function(t){this.$router.push({name:"info",params:{pid:t}})}},mounted:function(){}},o=r,i=(a("562d"),a("2877")),c=Object(i["a"])(o,n,s,!1,null,"e72ae5b0",null);e["a"]=c.exports},"36e4":function(t,e,a){"use strict";var n=a("ba72"),s=a.n(n);s.a},"562d":function(t,e,a){"use strict";var n=a("8f76"),s=a.n(n);s.a},"65f0":function(t,e,a){var n=a("861d"),s=a("e8b5"),r=a("b622"),o=r("species");t.exports=function(t,e){var a;return s(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?n(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var n=a("c04e"),s=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?s.f(t,o,r(0,a)):t[o]=a}},"8f76":function(t,e,a){},a434:function(t,e,a){"use strict";var n=a("23e7"),s=a("23cb"),r=a("a691"),o=a("50c4"),i=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var a,n,u,d,f,h,x=i(this),y=o(x.length),_=s(t,y),b=arguments.length;if(0===b?a=n=0:1===b?(a=0,n=y-_):(a=b-2,n=p(v(r(e),0),y-_)),y+a-n>g)throw TypeError(m);for(u=c(x,n),d=0;d<n;d++)f=_+d,f in x&&l(u,d,x[f]);if(u.length=n,a<n){for(d=_;d<y-n;d++)f=d+n,h=d+a,f in x?x[h]=x[f]:delete x[h];for(d=y;d>y-n+a;d--)delete x[d-1]}else if(a>n)for(d=y-n;d>_;d--)f=d+n-1,h=d+a-1,f in x?x[h]=x[f]:delete x[h];for(d=0;d<a;d++)x[d+_]=arguments[d+2];return x.length=y-n+a,u}})},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var n=a("83ab"),s=a("d039"),r=a("5135"),o=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var a=[][t],l=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return i[t]=!!a&&!s((function(){if(l&&!n)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:c}):t[1]=1,a.call(t,u,d)}))}},ba72:function(t,e,a){},c975:function(t,e,a){"use strict";var n=a("23e7"),s=a("4d64").indexOf,r=a("a640"),o=a("ae40"),i=[].indexOf,c=!!i&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?i.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-836524da.4090a092.js.map