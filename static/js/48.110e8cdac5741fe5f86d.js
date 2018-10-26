webpackJsonp([48],{EUY8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),o=n("NYxO"),i={name:"ReportCustom",components:{BaseTable:function(){return n.e(89).then(n.bind(null,"ss0d"))}},data:function(){return{activeName:"select",params:{scene:"",insMonth:"",secondOrg:"",thirdOrg:"",channel:"",carFlag:""},thirdOrgList:[],rules:{},columnShowList:[],indexShow:!1,detailShow:!1,currentDimCode:[],currentIndexCode:[],dimColumn:[],indexColumn:[],releaseDialogShow:!1,setKeyWords:[],report:{reportName:"",keyWord:""}}},created:function(){this.$store.dispatch("initFormData")},computed:a()({currentDimList:function(){var e=this;return this.currentDimCode.map(function(t){return e.formData.dimList.find(function(e){return e.code===t})})},currentIndexList:function(){var e=this;return this.currentIndexCode.map(function(t){return e.formData.indexList.find(function(e){return e.code===t})})},columns:function(){var e=[];return(this.dimColumn.length>0||this.indexColumn>0)&&(e.push({prop:"insMonth",width:120,label:"承保月份"}),e.push({prop:"secondOrg",width:120,label:"二级机构"}),e.push({prop:"thirdOrg",width:120,label:"三级机构"})),e.concat(this.dimColumn).concat(this.indexColumn)},keyWords:function(){var e=this.dimColumn.map(function(e){return e.label}),t=this.indexColumn.map(function(e){return e.label});return e.concat(t).concat(this.setKeyWords)}},Object(o.c)({formData:function(e){return e.chart.formData},tableData:function(e){return e.chart.tableData}})),watch:{currentDimList:function(e){var t=this;this.dimColumn=[],e.forEach(function(e){t.dimColumn.push({prop:e.code,label:e.name,width:e.width})})},currentIndexList:function(e){var t=this;this.indexColumn=[],e.forEach(function(e){t.indexColumn.push({prop:e.code,label:e.name,width:e.width})})}},methods:{getThridOrg:function(e){var t=this.formData.orgList.find(function(t){return t.code===e});this.thirdOrgList=t.children},dimChange:function(e){this.currentDimCode=e},addIndex:function(e){this.currentIndexCode.includes(e)||this.currentIndexCode.push(e)},removeIndex:function(e){this.currentIndexCode.splice(this.currentIndexCode.indexOf(e),1)},query:function(){""===this.params.insMonth||""===this.params.secondOrg||""===this.params.thirdOrg?this.$message({type:"warning",message:"数据量过大，建议先选择承保月份、二级机构、三级机构等条件以缩小选择范围"}):this.$store.dispatch("getTabData")},release:function(){var e=this;this.$confirm("确定发布该自定义报表吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"发布成功!"})}).catch(function(){})},addKeyWord:function(){var e=this.report.keyWord;""!==e&&(-1===this.keyWords.findIndex(function(t){return t===e})?this.setKeyWords.push(e):this.$message({type:"warning",message:"该关键字已存在，不能重复添加!"}))}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-collapse-item",{attrs:{title:e.params.scene,name:"select"}},[n("div",{staticClass:"sector-list"},[n("div",{staticClass:"title"},[e._v("选择维度")]),e._v(" "),n("div",{staticClass:"biz-sector"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-form",{attrs:{"label-width":"120px",inline:!0}},[n("el-form-item",[n("el-checkbox-group",{on:{change:e.dimChange},model:{value:e.columnShowList,callback:function(t){e.columnShowList=t},expression:"columnShowList"}},e._l(e.formData.dimList,function(t){return n("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.name))])}))],1)],1)],1)],1)],1)]),e._v(" "),n("div",{staticClass:"sector-list"},[n("div",{staticClass:"title"},[e._v("选择指标")]),e._v(" "),n("div",{staticClass:"biz-sector"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-light"},[n("div",{staticClass:"tag"},[e._l(e.currentIndexList,function(t){return n("el-tag",{key:t.code,attrs:{closable:"",type:"primary"},on:{close:function(n){e.removeIndex(t.code)}}},[e._v("\n                    "+e._s(t.name)+"\n                  ")])}),e._v(" "),n("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(t){e.indexShow=!0}}},[e._v("新增指标")])],2)])])],1)],1)])])],1),e._v(" "),n("div",{staticClass:"form"},[n("el-form",{ref:"chartForm",attrs:{"label-width":"180px",model:e.params,rules:e.rules,inline:!0}},[n("el-form-item",{attrs:{label:"承保月份",prop:"insMonth"}},[n("el-select",{attrs:{placeholder:"请选择承保月份"},model:{value:e.params.insMonth,callback:function(t){e.$set(e.params,"insMonth",t)},expression:"params.insMonth"}},e._l(e.formData.insMonthList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"二级机构",prop:"secondOrg"}},[n("el-select",{attrs:{placeholder:"请选择二级机构"},on:{change:e.getThridOrg},model:{value:e.params.secondOrg,callback:function(t){e.$set(e.params,"secondOrg",t)},expression:"params.secondOrg"}},e._l(e.formData.orgList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"三级机构",prop:"thirdOrg"}},[n("el-select",{attrs:{placeholder:"请选择三级机构"},model:{value:e.params.thirdOrg,callback:function(t){e.$set(e.params,"thirdOrg",t)},expression:"params.thirdOrg"}},e._l(e.thirdOrgList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),e._l(e.currentDimList,function(t){return n("el-form-item",{key:t.code,attrs:{label:t.name,prop:t.name}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.params[t.code],callback:function(n){e.$set(e.params,t.code,n)},expression:"params[dim.code]"}},e._l(t.detail,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)})],2)],1),e._v(" "),n("div",{staticClass:"option"},[n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:function(t){e.releaseDialogShow=!0}}},[e._v("发布")])],1),e._v(" "),n("div",{staticClass:"data"},[n("div",{staticClass:"table"},[n("base-table",{attrs:{columns:e.columns,data:e.tableData}})],1)]),e._v(" "),n("el-dialog",{attrs:{title:"选择指标",visible:e.indexShow,width:"30%"},on:{"update:visible":function(t){e.indexShow=t}}},e._l(e.formData.indexList,function(t){return n("el-tag",{key:t.code,attrs:{type:e.currentIndexCode.includes(t.code)?"primary":"info"},nativeOn:{click:function(n){e.addIndex(t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e._v(" "),n("el-dialog",{attrs:{title:"完善报表信息",visible:e.releaseDialogShow,width:"50%"},on:{"update:visible":function(t){e.releaseDialogShow=t}}},[n("div",{staticClass:"form"},[n("el-form",{ref:"reportForm",attrs:{"label-width":"125px",model:e.report}},[n("el-form-item",{attrs:{label:"报表名称：",prop:"reportName"}},[n("el-input",{model:{value:e.report.reportName,callback:function(t){e.$set(e.report,"reportName",t)},expression:"report.reportName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"报表关键字：",prop:"keyWord"}},[n("el-input",{attrs:{placeholder:"请添加报表关键字"},model:{value:e.report.keyWord,callback:function(t){e.$set(e.report,"keyWord",t)},expression:"report.keyWord"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-circle-plus-outline"},on:{click:e.addKeyWord},slot:"append"})],1),e._v(" "),n("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.release}},[e._v("发布")])],1),e._v(" "),n("el-form-item",{attrs:{label:"报表已有关键字",prop:"keyWord"}},e._l(e.keyWords,function(t){return n("el-tag",{key:t,attrs:{closable:"",type:"primary"},on:{close:function(n){e.removeKey(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])}))],1)],1)])],1)},staticRenderFns:[]};var l=n("VU/8")(i,s,!1,function(e){n("Tg67")},"data-v-440352fe",null);t.default=l.exports},Tg67:function(e,t){}});