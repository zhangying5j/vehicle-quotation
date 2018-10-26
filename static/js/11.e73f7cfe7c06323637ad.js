webpackJsonp([11],{aSJF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),o=a.n(r),n=a("NYxO"),s={name:"Approval",components:{BackButton:function(){return a.e(84).then(a.bind(null,"uOVF"))},QueryForm:function(){return a.e(85).then(a.bind(null,"Hb8j"))},BaseTable:function(){return a.e(83).then(a.bind(null,"ss0d"))}},props:{version:{type:String,required:!0}},data:function(){return{historyFlag:!0,approvalResult:"",budget:{formulateInstitution:"",type:"",channel:"",timeSlot:"",version:this.version,isUpToDate:"",backDate:""},columns:[{prop:"subInstitution",label:"机构",width:160,align:"right"},{prop:"type",label:"预算类型",width:80},{prop:"channel",label:"预算渠道",width:100,align:"center"},{prop:"timeSlot",label:"预算时间段",width:100,align:"center"},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"targetPremium",label:"目标保费 (万元)",width:100,align:"center"},{prop:"targetOperaCostRate",label:"目标经营成本率",width:100,align:"center"},{prop:"targetReimburseRate",label:"目标赔付率",width:80,align:"center"},{prop:"targetMarketCostRate",label:"目标市场费用率",width:100,align:"center"},{prop:"targetNonMarketCostRate",label:"目标非市场费用率",width:100,align:"center"}],data:[],sourceData:[{companyCode:"c1",subInstitution:"山西省分公司太原支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c2",subInstitution:"山西省分公司大同支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c3",subInstitution:"山西省分公司阳泉支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c4",subInstitution:"山西省分公司长治支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c5",subInstitution:"山西省分公司晋城支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c6",subInstitution:"山西省分公司朔州支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c7",subInstitution:"山西省分公司晋中支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c8",subInstitution:"山西省分公司运城支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c9",subInstitution:"山西省分公司忻州支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c10",subInstitution:"山西省分公司临汾支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c11",subInstitution:"山西省分公司吕梁支公司",type:"年度",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"}],historyData:[{companyCode:"c1-h",subInstitution:"山西省分公司太原支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c2-h",subInstitution:"山西省分公司大同支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c3-h",subInstitution:"山西省分公司阳泉支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c4-h",subInstitution:"山西省分公司长治支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c5-h",subInstitution:"山西省分公司晋城支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c6-h",subInstitution:"山西省分公司朔州支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c7-h",subInstitution:"山西省分公司晋中支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c8-h",subInstitution:"山西省分公司运城支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c9-h",subInstitution:"山西省分公司忻州支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c10-h",subInstitution:"山西省分公司临汾支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"},{companyCode:"c11-h",subInstitution:"山西省分公司吕梁支公司",type:"历史",channel:"传统渠道",timeSlot:"2017",bore:"保单年口径",productType:"全部",targetPremium:5e3,targetOperaCostRate:"99%",targetReimburseRate:"56%",targetMarketCostRate:"25%",targetNonMarketCostRate:"18%"}]}},computed:o()({},Object(n.c)({tableHeader:function(t){return t.app.tableHeader}}),{historyBtnText:function(){return this.historyFlag?"显示历史数据":"隐藏历史数据"},hisBtnIcon:function(){return this.historyFlag?"el-icon-arrow-up":"el-icon-arrow-down"}}),mounted:function(){this.data=this.sourceData},methods:{switchHistoryData:function(){var t=this,e=this.historyFlag,a=[];e?(this.sourceData.forEach(function(e){a.push(e),a.push(t.historyData.find(function(t){return t.companyCode.startsWith(e.companyCode)}))}),this.data=a):this.data=this.sourceData,this.historyFlag=!e},rowStyle:function(t){return t.row.companyCode.endsWith("-h")?"color: #795CF9":""}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{attrs:{budget:t.budget}},[a("el-form-item",{attrs:{label:"是否最新",prop:"isUpToDate"}},[a("el-select",{model:{value:t.budget.isUpToDate,callback:function(e){t.$set(t.budget,"isUpToDate",e)},expression:"budget.isUpToDate"}},[a("el-option",{attrs:{value:"1"}},[t._v("是")]),t._v(" "),a("el-option",{attrs:{value:"0"}},[t._v("否")])],1)],1),t._v(" "),a("template",{slot:"last"},[a("el-form-item",{attrs:{label:"回滚日期",prop:"backDate"}},[a("el-radio-group",{model:{value:t.budget.backDate,callback:function(e){t.$set(t.budget,"backDate",e)},expression:"budget.backDate"}},[a("el-radio",{attrs:{label:1}},[t._v("同比")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("环比")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("回滚3个月")]),t._v(" "),a("el-radio",{attrs:{label:6}},[t._v("回滚6个月")]),t._v(" "),a("el-radio",{attrs:{label:12}},[t._v("回滚12个月")])],1)],1)],1)],2)],1),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:t.columns,data:t.data,maxHeight:500,rowKey:"no",rowStyle:t.rowStyle}})],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",icon:t.hisBtnIcon},on:{click:t.switchHistoryData}},[t._v(t._s(t.historyBtnText))])],1),t._v(" "),a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[t._v("意见")]),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.approvalResult,callback:function(e){t.approvalResult=e},expression:"approvalResult"}})],1),t._v(" "),a("div",{staticClass:"option"},[a("back-button",[t._v("返回")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("审核通过")]),t._v(" "),a("el-button",{attrs:{type:"info"}},[t._v("驳回")])],1)])])])},staticRenderFns:[]};var u=a("VU/8")(s,i,!1,function(t){a("ctq2")},"data-v-e20dbf8e",null);e.default=u.exports},ctq2:function(t,e){}});