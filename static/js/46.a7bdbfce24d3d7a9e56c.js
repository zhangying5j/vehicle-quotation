webpackJsonp([46],{bo3m:function(e,a){},yzF8:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("Dd8w"),i=t.n(l),r=t("NYxO"),n={name:"Analysis",components:{BaseTable:function(){return t.e(87).then(t.bind(null,"ss0d"))}},data:function(){return{approveHisCols:[{prop:"d1",width:120,label:"处理人",align:"center"},{prop:"d2",width:120,label:"级别名称",align:"center"},{prop:"d3",width:120,label:"处理部门",align:"center"},{prop:"d4",width:130,label:"处理时间",align:"center"},{prop:"d5",width:120,label:"审核意见",align:"center"}],approveHisData:[{d1:"张三",d2:"高级",d3:"000001",d4:"2018-07-19 11:02:28",d5:"同意"},{d1:"李四",d2:"高级",d3:"000001",d4:"2018-07-19 15:47:02",d5:"同意"}],approveHisVisible:!1,mediaUploadVisible:!1,yearColumn:[{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],yearData:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}],yearDetailHidden:!0,yearDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],yearDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}],approveColumn:[{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],approveData:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],approveDetailHidden:!0,approveDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],approveDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],evaluateColumn:[{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],evaluateData:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],evaluateDetailHidden:!0,evaluateDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],evaluateDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],compareColumn:[{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],compareData:[{insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}],compareDetailHidden:!0,compareDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],compareDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-新车",insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-新车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}]}},computed:i()({currentData:function(){var e=[],a=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;t=t<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var l=a;l<t;++l)e.push(this.data[l]);return e}},Object(r.c)({tableHeader:function(e){return e.app.tableHeader}})),methods:{spanRow:function(e){e.row,e.column;var a=e.rowIndex;if(0===e.columnIndex)return 0===a?[this.yearData.length,1]:[0,0]},spanDetailRow:function(e){e.row,e.column;var a=e.rowIndex;if(0===e.columnIndex)return 0===a||3===a?[3,1]:[0,0]}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"data"},[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"代理协议回滚12个月历史保单情况"}},[t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.yearData,"span-method":e.spanRow,stripe:"",border:"","header-cell-style":e.tableHeader}},[t("el-table-column",{attrs:{"header-align":"center",align:"center",label:"详情","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.yearDetailHidden=!e.yearDetailHidden}}},[e._v("详情")])]}}])}),e._v(" "),e._l(e.yearColumn,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})})],2)],1),e._v(" "),t("div",{attrs:{hidden:e.yearDetailHidden},on:{"update:hidden":function(a){e.yearDetailHidden=a}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.yearDetailData,"span-method":e.spanDetailRow,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.yearDetailColumn,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"评估月1日至评估日已审核协议情况"}},[t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.approveData,"span-method":e.spanRow,stripe:"",border:"","header-cell-style":e.tableHeader}},[t("el-table-column",{attrs:{"header-align":"center",align:"center",label:"详情","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.approveDetailHidden=!e.approveDetailHidden}}},[e._v("详情")])]}}])}),e._v(" "),e._l(e.approveColumn,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})})],2)],1),e._v(" "),t("div",{attrs:{hidden:e.approveDetailHidden},on:{"update:hidden":function(a){e.approveDetailHidden=a}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.approveDetailData,"span-method":e.spanDetailRow,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.approveDetailColumn,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"该代理协议的评估情况"}},[t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.evaluateData,"span-method":e.spanRow,stripe:"",border:"","header-cell-style":e.tableHeader}},[t("el-table-column",{attrs:{"header-align":"center",align:"center",label:"详情","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.evaluateDetailHidden=!e.evaluateDetailHidden}}},[e._v("详情")])]}}])}),e._v(" "),e._l(e.evaluateColumn,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})})],2)],1),e._v(" "),t("div",{attrs:{hidden:e.evaluateDetailHidden},on:{"update:hidden":function(a){e.evaluateDetailHidden=a}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.evaluateDetailData,"span-method":e.spanDetailRow,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.evaluateDetailColumn,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"代理协议历史数据与待申报数据合并后与预算对比分析"}},[t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.compareData,"span-method":e.spanRow,stripe:"",border:"","header-cell-style":e.tableHeader}},[t("el-table-column",{attrs:{"header-align":"center",align:"center",label:"详情","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.compareDetailHidden=!e.compareDetailHidden}}},[e._v("详情")])]}}])}),e._v(" "),e._l(e.compareColumn,function(a){return t("el-table-column",{key:a.prop,attrs:{"header-align":"center",prop:a.prop,"min-width":a.width,label:a.label,align:a.align}},e._l(a.children,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))})],2)],1),e._v(" "),t("div",{attrs:{hidden:e.compareDetailHidden},on:{"update:hidden":function(a){e.compareDetailHidden=a}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.compareDetailData,"span-method":e.spanDetailRow,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.compareDetailColumn,function(a){return t("el-table-column",{key:a.prop,attrs:{"header-align":"center",prop:a.prop,"min-width":a.width,label:a.label,align:a.align}},e._l(a.children,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))}))],1)])],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:""}},[e._v("申报")]),e._v(" "),t("el-button",{attrs:{plain:""},on:{click:function(a){e.mediaUploadVisible=!0}}},[e._v("影像上传")]),e._v(" "),t("el-button",{attrs:{plain:""},on:{click:function(a){e.approveHisVisible=!0}}},[e._v("审核信息")])],1),e._v(" "),t("el-dialog",{attrs:{title:"审核信息",visible:e.approveHisVisible},on:{"update:visible":function(a){e.approveHisVisible=a}}},[t("base-table",{attrs:{columns:e.approveHisCols,data:e.approveHisData,"show-header":!0}}),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(a){e.approveHisVisible=!1}}},[e._v("确认")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"影像上传",visible:e.mediaUploadVisible,width:"400px"},on:{"update:visible":function(a){e.mediaUploadVisible=a}}},[t("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,drag:""}},[t("i",{staticClass:"el-icon-upload"}),e._v(" "),t("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),t("em",[e._v("点击上传")])]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("上传视频格式")])]),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(a){e.mediaUploadVisible=!1}}},[e._v("上传")]),e._v(" "),t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(a){e.mediaUploadVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var p=t("VU/8")(n,o,!1,function(e){t("bo3m")},"data-v-454779b5",null);a.default=p.exports}});