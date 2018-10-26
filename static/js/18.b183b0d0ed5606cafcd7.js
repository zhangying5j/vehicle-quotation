webpackJsonp([18],{QSvm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),o=i.n(a),r=i("NYxO"),l={name:"Split",components:{QueryForm:function(){return i.e(89).then(i.bind(null,"Hb8j"))},BaseTable:function(){return i.e(87).then(i.bind(null,"ss0d"))}},created:function(){this.$store.dispatch("initThirdData")},data:function(){return{budget:{formulateInstitution:"",type:"",channel:"",timeSlot:""},columns:[{prop:"subInstitution",label:"机构",width:160},{prop:"type",label:"预算类型",width:80},{prop:"channel",label:"预算渠道",width:100},{prop:"timeSlot",label:"预算时间段",width:100},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费 (万元)",width:140},{prop:"targetOperaCostRate",label:"目标经营成本率",width:140},{prop:"targetReimburseRate",label:"目标赔付率",width:140},{prop:"targetMarketCostRate",label:"目标市场费用率",width:140},{prop:"targetNonMarketCostRate",label:"目标非市场费用率",width:140}],splitColumns:[{prop:"subInstitution",label:"机构",width:160},{prop:"type",label:"预算类型",width:80},{prop:"channel",label:"预算渠道",width:120},{prop:"timeSlot",label:"预算时间段",width:120},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费 (万元)",width:140,isEdit:!0,type:"input"},{prop:"targetOperaCostRate",label:"目标经营成本率",width:140,isEdit:!0,type:"input"},{prop:"targetReimburseRate",label:"目标赔付率",width:140,isEdit:!0,type:"input"},{prop:"targetMarketCostRate",label:"目标市场费用率",width:140,isEdit:!0,type:"input"},{prop:"targetNonMarketCostRate",label:"目标非市场费用率",width:140,isEdit:!0,type:"input"}],splitList:[{subInstitution:"山西省分公司",type:"年度",channel:"非网电预算",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"}],impDialogVisible:!1}},computed:o()({},Object(r.c)({tableHeader:function(t){return t.app.tableHeader},thirdData:function(t){return t.budget.thirdData}})),methods:{save:function(){this.splitColumns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!1)})},approval:function(){this.$message({type:"success",message:"提交审批成功!"})},getSummaries:function(t){var e=t.columns,i=t.data,a=[];return i.length>0&&e.forEach(function(t,e){if(0!==e)if(1!==e)if(2!==e)if(3!==e)if(4!==e)if(5!==e){var o=i.map(function(i){return 6===e?Number(i[t.property]):Number(i[t.property].replace("%",""))});o.every(function(t){return isNaN(t)})?a[e]="N/A":(a[e]=o.reduce(function(t,e){var i=Number(e);return isNaN(i)?t:t+e},0),6===e?a[e]=a[e].toFixed(2):e>6&&(a[e]/=i.length,a[e]=a[e].toFixed(2),a[e]+="%"))}else a[e]=i[0].productType;else a[e]=i[0].bore;else a[e]=i[0].timeSlot;else a[e]=i[0].channel;else a[e]=i[0].type;else a[e]="全国总计:"}),a},download:function(){var t=this;this.$confirm("确定下载预算模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"预算模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"}),this.$store.dispatch("uploadThirdData")},exportData:function(){var t=this;this.$confirm("确定导出预算数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"预算数据导出成功!"})}).catch(function(){})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"form"},[i("query-form",{ref:"splitDetailForm",attrs:{budget:t.budget,versionShow:!1}})],1),t._v(" "),i("div",{staticStyle:{height:"30px","line-height":"30px"}},[t._v("总公司二级机构预算")]),t._v(" "),i("div",{staticClass:"data"},[i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:t.columns,data:t.splitList}}),t._v(" "),i("div",{staticStyle:{height:"30px","line-height":"30px"}},[t._v("拆分三级机构")]),t._v(" "),i("base-table",{attrs:{columns:t.splitColumns,showHeader:!1,data:t.thirdData,showSummary:!0,summaryMethod:t.getSummaries}})],1),t._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.download}},[t._v("下载预算模板")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!0}}},[t._v("导入预算数据")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.exportData}},[t._v("导出预算数据")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""}},[t._v("校验")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.approval}},[t._v("提交审批")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"导入预算数据",visible:t.impDialogVisible,width:"40%"},on:{"update:visible":function(e){t.impDialogVisible=e}}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择文件")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel文件，且不超过500kb")])],1),t._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.upload}},[t._v("导入")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!1}}},[t._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var n=i("VU/8")(l,s,!1,function(t){i("eWqE")},"data-v-b5cbd44a",null);e.default=n.exports},eWqE:function(t,e){}});