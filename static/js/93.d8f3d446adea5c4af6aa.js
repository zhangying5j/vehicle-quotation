webpackJsonp([93],{Ugw0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),l=i("NYxO"),s={name:"Add",components:{BaseTable:function(){return i.e(96).then(i.bind(null,"ss0d"))}},data:function(){return{columns:[{prop:"subInstitution",label:"机构",width:160},{prop:"type",label:"预算类型",width:100},{prop:"channel",label:"预算渠道",width:120},{prop:"timeSlot",label:"预算时间段",width:200},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费收入",width:140,isEdit:!0,type:"input"},{prop:"targetOperaCostRate",label:"目标综合成本率",width:140,isEdit:!0,type:"input"},{prop:"targetReimburseRate",label:"目标综合赔付率",width:140,isEdit:!0,type:"input"},{prop:"targetMarketCostRate",label:"目标手续费率",width:140,isEdit:!0,type:"input"},{prop:"targetNonMarketCostRate",label:"目标非市场费用率",width:150,isEdit:!0,type:"input"},{prop:"spare1",label:"备用1",width:120,isEdit:!0,type:"input"},{prop:"spare2",label:"备用2",width:120,isEdit:!0,type:"input"},{prop:"spare3",label:"备用3",width:120,isEdit:!0,type:"input"},{prop:"spare4",label:"备用4",width:120,isEdit:!0,type:"input"},{prop:"spare5",label:"备用5",width:120,isEdit:!0,type:"input"},{prop:"spare6",label:"备用6",width:120,isEdit:!0,type:"input"}],impDialogVisible:!1}},computed:n()({},Object(l.d)({tableHeader:function(t){return t.app.tableHeader},addData:function(t){return t.budget.addData}})),methods:{save:function(){this.columns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!1)})},approval:function(){var t=this,e=this.$createElement;this.$msgbox({title:"提示",message:e("p",null,[e("p",null,"①4个季度累计保费收入预算值小于年度保费收入预算值!"),e("p",null,"②4个季度预算加权合计经营成本率大于年度预算经营成本率!"),e("p",{style:"color: blue"},"确定提交审批吗?")]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"提交审核成功!"})}).catch(function(){})},getSummaries:function(t){var e=t.columns,i=t.data,a=[];return i.length>0&&e.forEach(function(t,e){if(0!==e)if(1!==e)if(2!==e)if(3!==e)if(4!==e)if(5!==e){var n=i.map(function(i){return 6===e?Number(i[t.property]):Number(i[t.property].replace("%",""))});n.every(function(t){return isNaN(t)})?a[e]="N/A":(a[e]=n.reduce(function(t,e){var i=Number(e);return isNaN(i)?t:t+e},0),6===e?a[e]=a[e].toFixed(2):e>6&&(a[e]/=i.length,a[e]=a[e].toFixed(2),a[e]+="%"))}else a[e]=i[0].productType;else a[e]=i[0].bore;else a[e]=i[0].timeSlot;else a[e]=i[0].channel;else a[e]=i[0].type;else a[e]="全国总计:"}),a},download:function(){var t=this;this.$confirm("确定下载预算模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"预算模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"}),this.$store.dispatch("uploadData")},exportData:function(){var t=this;this.$confirm("确定导出预算数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"预算数据导出成功!"})}).catch(function(){})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data"},[i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:t.columns,data:t.addData,showSummary:!0,summaryMethod:t.getSummaries}})],1),t._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.download}},[t._v("下载预算模板")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!0}}},[t._v("导入预算数据")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.exportData}},[t._v("导出预算数据")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.approval}},[t._v("提交审批")])],1),t._v(" "),i("el-dialog",{attrs:{title:"导入预算数据",visible:t.impDialogVisible,width:"40%"},on:{"update:visible":function(e){t.impDialogVisible=e}}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择文件")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel文件，且不超过500kb")])],1),t._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.upload}},[t._v("导入")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!1}}},[t._v("关闭")])],1)],1)],1)},staticRenderFns:[]},p=i("VU/8")(s,o,!1,null,null,null);e.default=p.exports}});