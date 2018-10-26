webpackJsonp([120],{b1QR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("NYxO"),r=a("Z4dx"),n={name:"TabTable",components:{BizSectorList:function(){return a.e(99).then(a.bind(null,"jpoa"))}},data:function(){return{totalData:[],dataSource:[],currentSector:0,columns:[{prop:"bizSmallType",label:"业务小类",children:[{prop:"lastYearComInsAmount",label:"商业险上年出险金额",width:460,align:"center"},{prop:"lastYearComInsCount",label:"商业险上年出险次数",width:220,align:"center"},{prop:"carAge",label:"车龄",width:120,align:"center"}]},{prop:"intelligence",label:"智能推荐结果",children:[{prop:"comAuto",label:"商业自主系数",width:120,align:"center"},{prop:"marketRate",label:"车险市场费用率",width:130,align:"center"}]},{prop:"paramConfig",label:"参数配置",children:[{prop:"isInverseDiscount",label:"是否反算折扣",width:120,align:"center"},{prop:"isInverseCost",label:"是否反算费用",width:120,align:"center"},{prop:"targetCost",label:"配置目标成本(%)",width:140,align:"center"},{prop:"nonMarketRate",label:"配置非市场费用率(%)",width:170,align:"center"},{prop:"comAutoUp",label:"商业险自主系数上限",width:100,align:"center"},{prop:"comAutoDown",label:"商业险自主系数下限",width:100,align:"center"},{prop:"comMarketRateUp",label:"商业险市场费用率上限(%)",width:120,align:"center"},{prop:"comMarketRateDown",label:"商业险市场费用率下限(%)",width:120,align:"center"},{prop:"forceMarketRate",label:"交强险市场费用率配置值",width:120,align:"center"},{prop:"expComPercent",label:"预期商业险保费占比",width:110,align:"center"},{prop:"expForcePercent",label:"预期交强险保费占比",width:110,align:"center"},{prop:"expPremiumScale",label:"预期该类业务保费规模(万元)",width:130,align:"center"},{prop:"expPremiumPercent",label:"预期该类业务保费占比",width:110,align:"center"}]},{prop:"actualPremiumPercent",label:"实际该类业务保费占比",children:[{prop:"comAutoAvg",label:"商业险自主系数平均值",width:110,align:"center"},{prop:"comMarketRateAvg",label:"商业险市场费用率平均值",width:120,align:"center"},{prop:"comMarketRateUpPercent",label:"商业险市场费用率上限占比",width:120,align:"center"},{prop:"comMarketRateDownPercent",label:"商业险市场费用率下限占比",width:120,align:"center"},{prop:"comFullRate",label:"商业险满期赔付率(含IBNR)",width:120,align:"center"},{prop:"comExpCostRate",label:"商业险预期经营成本率(%)",width:120,align:"center"},{prop:"forceFinalRate",label:"交强险终极赔付率(%)",width:120,align:"center"},{prop:"forceFullRate",label:"交强险满期赔付率(%)(含IBNR)",width:140,align:"center"},{prop:"forceExpCostRate",label:"交强险预期经营成本率(%)",width:120,align:"center"},{prop:"actualComPercent",label:"实际商业险保费占比",width:110,align:"center"},{prop:"actualForcePercent",label:"实际交强险保费占比",width:110,align:"center"},{prop:"actualPremiumPercent",label:"实际该类业务保费占比",width:110,align:"center"}]},{prop:"futureCarInsuranceRunForecast",label:"车险未来经营情况预测",children:[{prop:"totalFinalRate",label:"车险合计终极赔付率(%)",width:120,align:"center"},{prop:"totalFullRate",label:"车险合计满期赔付率(%)(含IBNR)",width:140,align:"center"},{prop:"totalMarketRate",label:"车险合计市场费用率(%)",width:120,align:"center"},{prop:"totalExpCostRate",label:"车险合计预期经营成本率(%)",width:120,align:"center"}]}]}},computed:Object(l.d)({sectors:function(e){return e.individual.sectors},tableHeader:function(e){return e.app.tableHeader}}),created:function(){var e=this;Object(r.d)(this.param).then(function(t){e.totalData=t.data;var a=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",a),e.dataSource=t.data[e.currentSector].detailData})},methods:{sectorClick:function(e){this.currentSector=this.sectors.findIndex(function(t){return t.id===e}),this.dataSource=this.totalData[this.currentSector].detailData}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[e._v("导出")])],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{height:"450",data:e.dataSource,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.columns,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}},e._l(t.children,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))}))],1)])])},staticRenderFns:[]};var c=a("VU/8")(n,i,!1,function(e){a("pvm2")},"data-v-43c7fd4a",null);t.default=c.exports},pvm2:function(e,t){}});