webpackJsonp([10],{FvK8:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("uuPU"),a={name:"news",components:{},data:function(){return{donationState:!1,homeNewList:e.a,singleState:!1,title:"",singleNew:{}}},computed:{},methods:{switchNew:function(t){this.singleNew=this.homeNewList[t],this.singleState=!0,this.title=this.singleNew.name},clickNew:function(){this.singleNew={},this.title="",this.singleState=!1}},created:function(){}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"layout layout-sys1 layout-current",attrs:{"layout-guid":"7","layout-no-guid":"dcc8e447-bce0-4f01-9934-6cc8c61dc0fd"}},[s("div",{staticClass:"layout-bg"},[s("div",{staticClass:"mod mod-color mod-current01"},[s("div",{staticClass:"mod-bg mod-bg-current01"},[t._m(0),t._v(" "),s("div",{staticClass:"mod-content mod-content-current01"},[s("div",{staticClass:"content-bg content-bg-current01"},[t._m(1),t._v("\n                                     >"),s("span",{staticClass:"present",on:{click:function(i){t.clickNew()}}},[t._v("News")])])]),t._v(" "),t._m(2)])])])]),t._v(" "),s("div",{staticClass:"layout layout-sys2 layout-page",attrs:{"layout-guid":"8","layout-no-guid":"7606154e-2135-44f8-8881-ae2a95e91390"}},[s("div",{staticClass:"layout-bg"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left-bg"},[s("div",{staticClass:"mod mod-color mod-group mod-news-group01"},[s("div",{staticClass:"mod-bg mod-bg-group"},[t._m(3),t._v(" "),s("div",{staticClass:"mod-content mod-content-group"},[s("div",{staticClass:"content-bg content-bg-group"},[s("div",{staticClass:"group-box"},[s("ul",{staticClass:"group-tabs"},[s("li",{staticClass:"group-tab group-tab-first",on:{click:function(i){t.clickNew()}}},[t._m(4)])])])])]),t._v(" "),t._m(5)])])])]),t._v(" "),t.singleState?s("div",{staticClass:"right"},[s("div",{staticClass:"right-bg"},[s("div",{staticClass:"mod mod-color mod-list mod-news-list01"},[s("div",{staticClass:"mod-bg mod-bg-list"},[s("div",{staticClass:"mod-title mod-title-list"},[s("div",{staticClass:"title-bg title-bg-list",staticStyle:{position:"relative"}},[s("div",{staticClass:"title-left title-left-list"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"title-right title-right-list",staticStyle:{position:"absolute",right:"10px",top:"0px","font-size":"16px"},on:{click:function(i){t.clickNew()}}},[t._v("Return")])])]),t._v(" "),s("div",{staticClass:"mod-content mod-content-list"},[s("div",{staticClass:"content-bg content-bg-list"},[s("div",{staticClass:"list-box"},[s("p",{staticStyle:{"font-size":"20px"}},[t._v("\n                                                   "+t._s(t.singleNew.text)+"\n                                                 ")]),t._v(" "),t.singleNew.video1?s("div",{staticStyle:{"margin-top":"10px"}},[s("video",{attrs:{src:t.singleNew.video1,controls:"",width:"465px",height:"261px"}})]):t._e(),t._v(" "),t.singleNew.video2?s("div",{staticStyle:{"margin-top":"10px"}},[s("video",{attrs:{src:t.singleNew.video2,controls:"",width:"465px",height:"261px"}})]):t._e()])])])])])])]):s("div",{staticClass:"right"},[s("div",{staticClass:"right-bg"},[s("div",{staticClass:"mod mod-color mod-list mod-news-list01"},[s("div",{staticClass:"mod-bg mod-bg-list"},[t._m(6),t._v(" "),s("div",{staticClass:"mod-content mod-content-list"},[s("div",{staticClass:"content-bg content-bg-list"},[s("div",{staticClass:"list-box"},[s("ul",{staticClass:"list-tabs"},t._l(t.homeNewList,function(i,e){return s("li",{key:e,staticClass:"list-tab",on:{click:function(i){t.switchNew(e)}}},[s("a",{staticClass:"list-link",attrs:{target:"_blank",href:"javascript:void(0);",title:i.name}},[t._v(t._s(i.name))]),t._v(" "),s("span",{staticClass:"list-time"},[t._v(t._s(i.time))])])}))])])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mod-title mod-title-current01"},[i("div",{staticClass:"title-bg title-bg-current01"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("span",{staticClass:"here"},[i("a",{attrs:{href:"javascript:void(0);",rel:"nofollow"}},[this._v("Home")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mod-bottom mod-bottom-current01"},[i("div",{staticClass:"bottom-bg bottom-bg-current01"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mod-title mod-title-group"},[i("div",{staticClass:"title-bg title-bg-group"},[i("div",{staticClass:"title-left title-left-group"},[this._v("News Group")]),this._v(" "),i("div",{staticClass:"title-right title-right-group"})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"group-link",attrs:{href:"javascript:void(0);",title:"Company News"}},[i("span",[this._v("Company News")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mod-bottom mod-bottom-group"},[i("div",{staticClass:"bottom-bg bottom-bg-group"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mod-title mod-title-list"},[i("div",{staticClass:"title-bg title-bg-list"},[i("div",{staticClass:"title-left title-left-list"},[this._v("News")]),this._v(" "),i("div",{staticClass:"title-right title-right-list"})])])}]};var n=s("VU/8")(a,o,!1,function(t){s("R+aS")},null,null);i.default=n.exports},"R+aS":function(t,i){},uuPU:function(t,i,s){"use strict";i.a=[{name:"New equipment---KURA",desc:"New equipment---KURA",text:'In August 2017, Our company introduced machinery automation equipment "KUKA",  unmanned automatic operation is achieved. The introduction of the new KURA will improve the production schedule and ensure the quality of products, also meet the diversified needs of customers.Please feel free to contact us if you have any project need to quote or make.',chtext:"2017年8月公司引进KUKA机械自动化设备,实现无人化操作生产",time:"2017-08",video1:"./static/video/news/n1.mp4",video2:""},{name:"German customers visiting",desc:"German customers visiting",text:"In March 2018，German customers came to our factory for inspection spindle and boring bar, accuracy of parts is 0.0001mm. We took them to our actual factory floor for visiting our advanced equipment.Finally,after they knowed our factory well,they decided to send their other drawings to our engineers ,they want to place new order in the next month.Just beacause they verified our productivity and quality contoling ability by themselves.They left a wonderful memory in our factory. We had a very pleasant conversation with each other.",chtext:"2018年3月德国客户来厂现场检测主轴和樘杆，精度达到0.0001mm，得到客户的认可",time:"2018-03",video1:"./static/video/news/n2_1.mp4",video2:"./static/video/news/n2_2.mp4"}]}});