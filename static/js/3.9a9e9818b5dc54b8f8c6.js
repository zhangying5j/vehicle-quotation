webpackJsonp([3],{"+fKB":function(t,i,e){t.exports=e.p+"static/img/Bitmap5.35e80f9.png"},"0mz7":function(t,i,e){t.exports=e.p+"static/img/Bitmap1.2d08ac8.png"},Tww3:function(t,i){},ZSye:function(t,i,e){t.exports=e.p+"static/img/Bitmap6.469b624.png"},ZqDA:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={name:"workspace",data:function(){return{activeName2:"first",dialogVisible:!1,mMd:"margin:5px ",newTag:[{id:1,name:"业务预算录入",icon:"",bg:"#86D7F7"},{id:2,name:"个车定价策略",icon:"",bg:"#F786AC"},{id:3,name:"设置",icon:"",bg:"#F7C586"}],tags:[{id:1,name:"业务预算录入",icon:"",bg:"#86D7F7"},{id:2,name:"个车定价策略",icon:"",bg:"#F786AC"},{id:3,name:"设置",icon:"",bg:"#F7C586"},{id:4,name:"经营结果回溯分析",icon:"",bg:"#6ECCB9"},{id:5,name:"检视预警报告",icon:"",bg:"#B7ABFF"},{id:6,name:"单车定价策略编制",icon:"",bg:"#6ECCB9"},{id:7,name:"车队定价策略编制",icon:"",bg:"#B7ABFF"}],msg:[{title:"北京市个车定价策略调整预警",status:"未审批",type:"default"},{title:"北京东城区实际经营成果超预算",status:"已审批",type:"success"},{title:"北京西城区二季度预算待录入",status:"停止审批",type:"warning"},{title:"北京东城区定价策略待审批",status:"审批终止",type:"danger"},{title:"北京东城区定价策略预测对比预警",status:"审批通过",type:"success"}],news:[{title:"车险“自律”手续费速查"},{title:"车险“报行合一”8月1日正式实施"},{title:"商业车险三次费改后的市场展望"},{title:"一分钟看懂商业车险三次费改"},{title:"费改之后的中国车险市场将走向何方"}],datamodal:[{id:1,title:"车险业务分析",img:e("0mz7"),path:"/admin/chart/data"},{id:2,title:"经营目标管理",img:e("f+Ri"),path:"/admin/budget/add"},{id:3,title:"核保定价制定",img:e("aNBH"),path:"/admin/system/parameter/recommend"},{id:4,title:"核保定价输出",img:e("hZNa"),path:"/admin/underwriting/price/onlineVersionSub"},{id:5,title:"核保定价回溯",img:e("+fKB"),path:"/admin/inspect/configFee"},{id:6,title:"系统管理",img:e("ZSye"),path:"/admin/system/parameter/bizCodeType"}]}},computed:{},methods:{addQuick:function(t){var i=this.newTag.findIndex(function(i){return i.id===t}),e=this.tags.find(function(i){return i.id===t});-1===i&&this.newTag.length<5?this.newTag.push(e):this.$message({type:"error",message:"最多只能添加5个快捷导航"}),-1!==i&&this.$message({type:"error",message:"不能重复添加"})},removeItem:function(t){var i=this.newTag.findIndex(function(i){return i.id===t});this.newTag.splice(i,1)},enter:function(t){this.$store.commit("SET_CURRENT_ACTIVE",t),this.$router.push({path:t})}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"main"},[e("div",{staticClass:"qucik-nav"},[e("span",[t._v("快捷导航")]),t._v(" "),e("div",{staticClass:"qucik-main"},[e("ul",[t._l(t.newTag,function(i){return e("li",{key:i.id,style:{background:i.bg}},[e("i",{staticClass:"el-icon-news"}),t._v(" "),e("br"),t._v(" "),e("h4",[t._v(" "+t._s(i.name)+" ")]),t._v(" "),e("i",{staticClass:"removeItem el-icon-circle-close",on:{click:function(e){t.removeItem(i.id)}}})])}),t._v(" "),e("li",[e("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"},on:{click:function(i){t.dialogVisible=!0}}},[e("i",{staticClass:"el-icon-circle-plus"})]),t._v(" "),e("br")])],2)])]),t._v(" "),e("div",{staticClass:"content"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:18}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"moudel"},[e("el-row",{attrs:{gutter:20}},t._l(t.datamodal,function(i){return e("el-col",{key:i.id,staticClass:"item",attrs:{span:8}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("div",{staticClass:"img"},[e("img",{staticClass:"image",attrs:{src:i.img},on:{click:function(e){t.enter(i.path)}}})]),t._v(" "),e("div",{staticClass:"blcokTitle"},[e("a",{on:{click:function(e){t.enter(i.path)}}},[t._v(" "+t._s(i.title)+" ")])])])],1)}))],1)])]),t._v(" "),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"info"},[e("el-card",{staticClass:"box-card news",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("消息")]),t._v(" "),e("i",{staticClass:"el-icon-error pull-right"})]),t._v(" "),e("ul",t._l(t.msg,function(i,a){return e("li",{key:a},[e("a",{attrs:{href:"#"}},[t._v(t._s(i.title))]),t._v(" "),e("span",{staticClass:"pull-right"},[e("el-tag",{attrs:{size:"mini",type:i.type}},[t._v(t._s(i.status))])],1)])}))]),t._v(" "),e("el-card",{staticClass:"box-card msg"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("资讯")]),t._v(" "),e("i",{staticClass:"el-icon-error pull-right"})]),t._v(" "),e("ul",t._l(t.news,function(i,a){return e("li",{key:a},[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(i.title)+" ")])])}))])],1)])])],1)],1)]),t._v(" "),e("el-dialog",{attrs:{title:"常用菜单",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("span",t._l(t.tags,function(i){return e("el-tag",{key:i.id,staticStyle:{cursor:"pointer"},style:t.mMd,attrs:{type:"primary"},nativeOn:{click:function(e){t.addQuick(i.id)}}},[t._v("\n        "+t._s(i.name)+"\n      ")])})),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var n=e("VU/8")(a,s,!1,function(t){e("Tww3")},"data-v-0d2b21c6",null);i.default=n.exports},aNBH:function(t,i,e){t.exports=e.p+"static/img/Bitmap3.bd2db65.png"},"f+Ri":function(t,i,e){t.exports=e.p+"static/img/Bitmap2.d8e233a.png"},hZNa:function(t,i,e){t.exports=e.p+"static/img/Bitmap4.99afe3f.png"}});