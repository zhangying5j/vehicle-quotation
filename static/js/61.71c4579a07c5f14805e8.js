webpackJsonp([61],{Fr7u:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),i=a.n(l),n=a("NYxO"),o={name:"ParamConfig",components:{BaseTable:function(){return a.e(101).then(a.bind(null,"ss0d"))},BackButton:function(){return a.e(102).then(a.bind(null,"uOVF"))}},data:function(){return{impDialogVisible:!1,columns:[{prop:"bizpcatgcd",label:"业务板块",width:150,align:"center"},{prop:"channelnmscope",label:"数据范围-渠道",width:130,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"网电"},{value:"02",label:"传统"}]},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthscope",label:"保单范围(回滚月份数)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"23",label:"23"},{value:"24",label:"24"},{value:"25",label:"25"},{value:"26",label:"26"},{value:"27",label:"27"},{value:"28",label:"28"},{value:"29",label:"29"},{value:"30",label:"30"},{value:"31",label:"31"},{value:"32",label:"32"},{value:"33",label:"33"},{value:"34",label:"34"},{value:"35",label:"35"},{value:"36",label:"36"}]},{prop:"autoChannelDown",label:"自主渠道系数下限",width:150,align:"center"},{prop:"autoChannelUp",label:"自主渠道系数上限",width:150,align:"center"},{prop:"autoProtectDown",label:"自主核保系数下限",width:150,align:"center"},{prop:"autoProtectUp",label:"自主核保系数上限",width:150,align:"center"},{prop:"forceMarketRate",label:"交强市场费用率(%)",width:150,align:"center"},{prop:"marketcostmin",label:"市场费用率下限（%）",width:150,align:"center"},{prop:"marketcostmax",label:"市场费用率上限（%）",width:150,align:"center"},{prop:"expectcostratemin",label:"预估经营成本率下限（%）",width:170,align:"center"},{prop:"expectcostratemax",label:"预估经营成本率上限（%）",width:170,align:"center"}],editFlag:!1}},computed:i()({},Object(n.d)({tableHeader:function(e){return e.app.tableHeader},sectorParam:function(e){return e.individual.sectorParam},paramTableShow:function(e){return e.individual.paramTableShow}})),methods:{edit:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!0)}),this.editFlag=!0},query:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)}),this.editFlag=!1},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})},download:function(){var e=this;this.$confirm("确定下载模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"数据导入成功!"})},exportData:function(){var e=this;this.$confirm("确定导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"数据导出成功!"})}).catch(function(){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.paramTableShow,expression:"paramTableShow"}],staticClass:"biz-content"},[a("div",{staticClass:"data"},[e._m(0),e._v(" "),a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.sectorParam,rowKey:"id"}})],1)]),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.download}},[e._v("模板下载")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("数据导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("数据导出")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.editFlag,expression:"!editFlag"}],attrs:{type:"primary",plain:""},on:{click:e.edit}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editFlag,expression:"editFlag"}],attrs:{type:"primary",plain:""},on:{click:e.query}},[e._v("保存")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.recommend}},[e._v("智能推荐")])],1),e._v(" "),a("el-dialog",{attrs:{title:"数据导入",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.upload}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip tip-default"},[t("span",{staticClass:"pull-left"},[this._v("基础业务清单范围来自平台：2015年10月1日至2017年10月1日")]),this._v(" "),t("div",{staticClass:"pull-right danger"},[this._v("如果数据量过小会，将影响推荐结果有效性，请合理选择数据范围！")])])}]};var r=a("VU/8")(o,s,!1,function(e){a("OGsf")},"data-v-3d8e146d",null);t.default=r.exports},OGsf:function(e,t){}});