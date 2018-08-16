webpackJsonp([73],{oUwX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),o=a.n(r),s=a("NYxO"),n={name:"BudgetDetail",components:{BackButton:function(){return a.e(81).then(a.bind(null,"uOVF"))},QueryForm:function(){return a.e(82).then(a.bind(null,"Hb8j"))},BaseTable:function(){return a.e(80).then(a.bind(null,"ss0d"))}},props:{version:{type:String,required:!0}},data:function(){return{budget:{formulateInstitution:"",type:"",channel:"",timeSlot:"",isUpToDate:"",version:this.version},columns:[{prop:"subInstitution",label:"机构",width:200,align:"right"},{prop:"type",label:"预算类型",width:80},{prop:"channel",label:"预算渠道",width:100},{prop:"timeSlot",label:"预算时间段",width:100},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费 (万元)",width:140},{prop:"targetOperaCostRate",label:"目标经营成本率",width:140},{prop:"targetReimburseRate",label:"目标赔付率",width:140},{prop:"targetMarketCostRate",label:"目标市场费用率",width:140},{prop:"targetNonMarketCostRate",label:"目标非市场费用率",width:140}],data:[{subInstitution:"太原支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"大同支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"阳泉支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"长治支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"晋城支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"朔州支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"晋中支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"运城支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"忻州支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"临汾支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"吕梁支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{subInstitution:"山西省分公司合计",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:25e4,targetOperaCostRate:"99%",targetReimburseRate:"50%",targetMarketCostRate:"30%",targetNonMarketCostRate:"18%"},{subInstitution:"总公司的山西省分公司预算",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:22e4,targetOperaCostRate:"99%",targetReimburseRate:"50%",targetMarketCostRate:"30%",targetNonMarketCostRate:"18%"}]}},computed:o()({},Object(s.c)({tableHeader:function(t){return t.app.tableHeader}}))},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"detailForm",attrs:{budget:t.budget}},[a("el-form-item",{attrs:{label:"是否最新",prop:"isUpToDate"}},[a("el-select",{model:{value:t.budget.isUpToDate,callback:function(e){t.$set(t.budget,"isUpToDate",e)},expression:"budget.isUpToDate"}},[a("el-option",{attrs:{value:"1"}},[t._v("是")]),t._v(" "),a("el-option",{attrs:{value:"0"}},[t._v("否")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary"}},[t._v("预算汇总")])],1),t._v(" "),a("div",{staticClass:"data"},[a("base-table",{attrs:{columns:t.columns,data:t.data,rowKey:"no"}}),t._v(" "),a("div",{staticClass:"option"},[a("back-button",[t._v("返回")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("下载预算Excel模板")])],1)],1)])},staticRenderFns:[]},u=a("VU/8")(n,i,!1,null,null,null);e.default=u.exports}});