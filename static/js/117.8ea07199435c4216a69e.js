webpackJsonp([117],{mYeI:function(e,a){},puK7:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"Operation",components:{BaseTable:function(){return t.e(91).then(t.bind(null,"ss0d"))},LifeTableAdviseList:function(){return t.e(96).then(t.bind(null,"kHaw"))}},data:function(){return{param:{company:"02000000-山东分公司",channel:"经代渠道（专属）",saleMan:"李伟",renewalState:"新保",policyHolder:"范禹寰",biDiscount:"1.41118",underwriterLossRate:"0.00"},columns1:[{prop:"type",width:160,label:"车队类型",align:"center"},{prop:"discountRate",width:120,label:"折后赔付率(%)",align:"center"},{prop:"objInfoCoefficient",width:120,label:"客观信息系数",align:"center"},{prop:"driveRegionRoute",width:220,label:"行驶区域和路线系数",align:"center"},{prop:"ProtocolCode",width:140,label:"营运管理水平系数",align:"center"},{prop:"operationTimeStaff",width:240,label:"运营时段与人员配备系数",align:"center"},{prop:"specialRiskFactor",width:120,label:"特殊风险因子",align:"center"},{prop:"finalLossRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"finalLossRateType",width:120,label:"终极赔付率分类",align:"center"}],columns2:[{prop:"type",width:160,label:"车队类型",align:"center"},{prop:"serviceCharge",width:100,label:"手续费(%)",align:"center"},{prop:"manageCharge",width:100,label:"管理费(%)",align:"center"},{prop:"valueCharge",width:100,label:"价值提奖(%)",align:"center"},{prop:"marketRateMerge",width:140,label:"市场费用率合计",align:"center"},{prop:"nonMarketRateMerge",width:140,label:"非市场费用率合计",align:"center"},{prop:"operatingCostRate",width:120,label:"经营成本率(%)",align:"center"}],data1:[{type:"非运营企业客车",discountRate:"36.93",objInfoCoefficient:"16.93",driveRegionRoute:"16.93",ProtocolCode:"16.93",operationTimeStaff:"16.93",specialRiskFactor:"16.93",finalLossRate:"6.93",finalLossRateType:"101BLUE"},{type:"非运营企业客车（含特四）",discountRate:"36.93",objInfoCoefficient:"16.93",driveRegionRoute:"16.93",ProtocolCode:"16.93",operationTimeStaff:"16.93",specialRiskFactor:"16.93",finalLossRate:"6.93",finalLossRateType:"101BLUE"}],data2:[{type:"非运营企业客车",serviceCharge:"36.93",manageCharge:"16.93",valueCharge:"16.93",marketRateMerge:"16.93",nonMarketRateMerge:"16.93",operatingCostRate:"9.9"},{type:"非运营企业客车（含特四）",serviceCharge:"36.93",manageCharge:"16.93",valueCharge:"16.93",marketRateMerge:"16.93",nonMarketRateMerge:"16.93",operatingCostRate:"9.9"}],approvalDesc:"",approvalResult:"",approval:""}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:""}},[e._v("详细信息")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("影像资料")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("影像上传")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("导出")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("修改")])],1),e._v(" "),t("div",{staticClass:"form"},[t("el-form",{attrs:{inline:!0,"label-width":"140px",model:e.param}},[t("el-form-item",{attrs:{label:"归属机构",prop:"company"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.company,callback:function(a){e.$set(e.param,"company",a)},expression:"param.company"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属渠道",prop:"channel"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.channel,callback:function(a){e.$set(e.param,"channel",a)},expression:"param.channel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属业务员",prop:"saleMan"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.saleMan,callback:function(a){e.$set(e.param,"saleMan",a)},expression:"param.saleMan"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"续保状态",prop:"renewalState"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.renewalState,callback:function(a){e.$set(e.param,"renewalState",a)},expression:"param.renewalState"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投保人",prop:"policyHolder"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.policyHolder,callback:function(a){e.$set(e.param,"policyHolder",a)},expression:"param.policyHolder"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"商业险申报折扣",prop:"biDiscount"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.biDiscount,callback:function(a){e.$set(e.param,"biDiscount",a)},expression:"param.biDiscount"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"核保人预估赔付率",prop:"underwriterLossRate"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.underwriterLossRate,callback:function(a){e.$set(e.param,"underwriterLossRate",a)},expression:"param.underwriterLossRate"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("div",{staticClass:"title"},[e._v("车队终极赔付率结果展示")]),e._v(" "),t("base-table",{attrs:{sumText:"全国合计",columns:e.columns1,data:e.data1,"show-header":!0,showSummary:!0}})],1),e._v(" "),t("div",{staticClass:"table"},[t("div",{staticClass:"title"},[e._v("车队预期经营结果展示")]),e._v(" "),t("base-table",{attrs:{sumText:"全国合计",columns:e.columns2,data:e.data2,"show-header":!0,showSummary:!0}})],1),e._v(" "),t("el-alert",{attrs:{title:"调整后终极赔付率：50% 调整后经营成本率：50%",type:"success"}}),e._v(" "),t("life-table-advise-list"),e._v(" "),t("div",{staticClass:"approval",staticStyle:{width:"90%",margin:"0 auto"}},[t("div",{staticClass:"result",staticStyle:{"border-bottom":"1px dashed #ddd","padding-bottom":"20px"}},[t("h3",[e._v("申报情况说明")]),e._v(" "),t("el-input",{attrs:{type:"textarea",rows:3,placeholder:"申报情况说明"},model:{value:e.approvalDesc,callback:function(a){e.approvalDesc=a},expression:"approvalDesc"}})],1),e._v(" "),t("div",{staticClass:"result"},[t("div",{staticClass:"content"},[t("el-form",[t("el-row",[t("el-col",{staticStyle:{"text-align":"center",margin:"20px auto"},attrs:{span:24}},[t("el-radio-group",{attrs:{size:"mini"},model:{value:e.approval,callback:function(a){e.approval=a},expression:"approval"}},[t("el-radio",{attrs:{label:"1",border:""}},[e._v("同意承保")]),e._v(" "),t("el-radio",{attrs:{label:"2",border:""}},[e._v("拒绝承保")]),e._v(" "),t("el-radio",{attrs:{label:"3",border:""}},[e._v("请补充以下材料后重新提交")]),e._v(" "),t("el-radio",{attrs:{label:"4",border:""}},[e._v("请调整以下承保条件后重新提交")]),e._v(" "),t("el-radio",{attrs:{label:"5",border:""}},[e._v("本级拟同意，提交上级审批")])],1)],1),e._v(" "),t("el-col",{staticStyle:{"margin-top":"10px"}},[t("h3",[e._v("签署审批意见")]),e._v(" "),t("el-input",{attrs:{type:"textarea",placeholder:"签署审批意见",rows:3},model:{value:e.approvalResult,callback:function(a){e.approvalResult=a},expression:"approvalResult"}})],1)],1)],1)],1)])])],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:""}},[e._v("暂存")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("放弃处理")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("审核通过")]),e._v(" "),t("el-button",{attrs:{plain:""}},[e._v("下发修改")])],1)])},staticRenderFns:[]};var o=t("VU/8")(l,r,!1,function(e){t("mYeI")},"data-v-06a1d43c",null);a.default=o.exports}});