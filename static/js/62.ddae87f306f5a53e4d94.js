webpackJsonp([62],{DL3p:function(e,t){},cp51:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("div",{staticClass:"form"},[i("el-form",{ref:"searchForm",attrs:{"label-width":"125px",model:e.search}},[i("el-form-item",{attrs:{prop:"keyWord"}},[i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%"},attrs:{placeholder:"请输入报表关键字查找",size:"medium"},model:{value:e.search.keyWord,callback:function(t){e.$set(e.search,"keyWord",t)},expression:"search.keyWord"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchKeyWord},slot:"append"})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"qucik-nav"},[i("span",[e._v("我的报表")]),e._v(" "),i("div",{staticClass:"qucik-main"},[i("ul",[e._l(e.selectReport,function(t){return i("li",{key:t.id,style:{background:t.bg}},[i("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"},on:{click:e.reportDetail}},[i("i",{staticClass:"el-icon-news"}),e._v(" "),i("br"),e._v(" "),i("h4",[e._v(" "+e._s(t.name)+" ")])])])}),e._v(" "),i("li",[i("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"},on:{click:function(t){e.dialogVisible=!0}}},[i("i",{staticClass:"el-icon-circle-plus"})]),e._v(" "),i("br")])],2)])]),e._v(" "),i("el-dialog",{attrs:{title:"自定义报表列表",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("span",e._l(e.reports,function(t){return i("el-tag",{key:t.id,staticStyle:{cursor:"pointer"},style:e.mMd,attrs:{type:"primary"},nativeOn:{click:function(i){e.addReport(t.id)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var r=i("VU/8")({name:"MyReport",data:function(){return{search:{keyWord:""},dialogVisible:!1,selectReportIds:[6,7,8,9,10],reports:[{id:1,name:"报表1",icon:"",bg:"#86D7F7",keyWords:["商业险上年出险次数","商业险上年出险金额","商业险经营成本率(%)"]},{id:2,name:"报表2",icon:"",bg:"#F786AC",keyWords:["新车购置价","使用性质","商业险终极赔付率"]},{id:3,name:"报表3",icon:"",bg:"#F7C586",keyWords:["年龄","投保组合","商业险满期赔付率(含IBNR)"]},{id:4,name:"报表4",icon:"",bg:"#6ECCB9",keyWords:["性别","座位数","保费占比(%)"]},{id:5,name:"报表5",icon:"",bg:"#B7ABFF",keyWords:["新车购置价","使用性质","商业险保费占比","交强险保费占比"]},{id:6,name:"报表6",icon:"",bg:"#86D7F7",keyWords:["商业险上年出险次数","商业险上年出险金额","商业险保费占比","交强险保费占比"]},{id:7,name:"报表7",icon:"",bg:"#F786AC",keyWords:["新车购置价","使用性质","保费占比(%)"]},{id:8,name:"报表8",icon:"",bg:"#F7C586",keyWords:["年龄","投保组合","商业险满期赔付率(含IBNR)"]},{id:9,name:"报表9",icon:"",bg:"#6ECCB9",keyWords:["性别","座位数","商业险终极赔付率"]},{id:10,name:"报表10",icon:"",bg:"#B7ABFF",keyWords:["新车购置价","使用性质","商业险经营成本率(%)"]},{id:11,name:"报表11",icon:"",bg:"#86D7F7",keyWords:["商业险上年出险次数","商业险上年出险金额","商业险经营成本率(%)"]},{id:12,name:"报表12",icon:"",bg:"#F786AC",keyWords:["新车购置价","使用性质","商业险终极赔付率"]}],mMd:"margin:5px "}},computed:{selectReport:function(){var e=this;return this.selectReportIds.map(function(t){return e.reports.find(function(e){return e.id===t})})}},methods:{addReport:function(e){-1===this.selectReportIds.findIndex(function(t){return t===e})?this.selectReportIds.push(e):this.$message({type:"warning",message:"该报表已选择!"})},searchKeyWord:function(){var e=this.search.keyWord;if(""!==e){var t=[];this.selectReport.forEach(function(i){-1!==i.keyWords.findIndex(function(t){return t===e})&&t.push(i.id)}),this.selectReportIds=t}},reportDetail:function(){this.$router.push({path:"/admin/chart/reportCustom"})}}},s,!1,function(e){i("DL3p")},"data-v-1b43e972",null);t.default=r.exports}});