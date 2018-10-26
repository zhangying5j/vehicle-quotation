webpackJsonp([66],{"471E":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"RealResult",components:{RealQueryForm:function(){return t.e(119).then(t.bind(null,"Ju5o"))},BaseTable:function(){return t.e(101).then(t.bind(null,"ss0d"))}},data:function(){return{realForm:{org:"27000",channel:"ct",size:"quarter",timeRange:"2018Q1",productType:"all"},columns:[{prop:"finalPayRateType",width:150,label:"合并终极赔付率分类",align:"center"},{prop:"premiumIncome",width:120,label:"保费收入(万元)",align:"center"},{prop:"premiumLastChange",width:200,label:"保费同比变化幅度(%)",align:"center"},{prop:"premiumPercent",width:140,label:"保费占比(%)",align:"center"},{prop:"percentChange",width:140,label:"占比变化百分点(%)",align:"center"},{prop:"finalPayRate",width:140,label:"合并终极赔付率(%)",align:"center"},{prop:"finalLastChange",width:140,label:"同比变化百分点(%)",align:"center"},{prop:"fullPayRate",width:200,label:"满期赔付率(含IBNR)(%)",align:"center"},{prop:"disRate",width:400,label:"终极赔付率与满期赔付率(含IBNR)的差(%)",align:"center"},{prop:"marketRate",width:140,label:"市场费用率(%)",align:"center"},{prop:"marketLastChange",width:140,label:"同比变化百分点(%)",align:"center"},{prop:"operationCostRate",width:140,label:"经营成本率(%)",align:"center"},{prop:"operationLastChange",width:140,label:"同比变化百分点(%)",align:"center"}],realResultData:[{id:"1",finalPayRateType:"低I(<=40%)",premiumIncome:"8648.65",premiumLastChange:"10.52",premiumPercent:"26.92",percentChange:"2.68",finalPayRate:"39",finalLastChange:"10.6",fullPayRate:"40.1",disRate:"-1.1",marketRate:"25",marketLastChange:"10.3",operationCostRate:"95.7",operationLastChange:"5.6"},{id:"2",finalPayRateType:"低II(41%-45%)",premiumIncome:"5126.35",premiumLastChange:"8.62",premiumPercent:"15.96",percentChange:"0.92",finalPayRate:"43",finalLastChange:"9.6",fullPayRate:"44.2",disRate:"-1.2",marketRate:"23",marketLastChange:"9.6",operationCostRate:"96.6",operationLastChange:"7.8"},{id:"3",finalPayRateType:"低III(46%-50%)",premiumIncome:"2523.25",premiumLastChange:"5.69",premiumPercent:"7.85",percentChange:"-1.81",finalPayRate:"48",finalLastChange:"12.5",fullPayRate:"48.9",disRate:"-0.9",marketRate:"21",marketLastChange:"5.2",operationCostRate:"98.7",operationLastChange:"10.1"},{id:"4",finalPayRateType:"低级小计",premiumIncome:"16298.25",premiumLastChange:"9.17",premiumPercent:"50.74",percentChange:"1.43",finalPayRate:"41.65",finalLastChange:"10.58",fullPayRate:"42.75",disRate:"-1.10",marketRate:"23.75",marketLastChange:"9.29",operationCostRate:"96.44",operationLastChange:"6.99"},{id:"5",finalPayRateType:"中I(51%-60%)",premiumIncome:"2510.65",premiumLastChange:"11.3",premiumPercent:"7.82",percentChange:"3.41",finalPayRate:"53",finalLastChange:"5.9",fullPayRate:"54.3",disRate:"-1.3",marketRate:"18",marketLastChange:"4.8",operationCostRate:"97.8",operationLastChange:"9.4"},{id:"6",finalPayRateType:"中II(61%-70%)",premiumIncome:"2603.40",premiumLastChange:"9.6",premiumPercent:"8.10",percentChange:"1.83",finalPayRate:"65",finalLastChange:"9.8",fullPayRate:"66",disRate:"-1",marketRate:"16",marketLastChange:"7.6",operationCostRate:"96.7",operationLastChange:"6.9"},{id:"7",finalPayRateType:"中III(71%-80%)",premiumIncome:"2564.55",premiumLastChange:"-1.2",premiumPercent:"7.98",percentChange:"-8.21",finalPayRate:"73",finalLastChange:"-1.2",fullPayRate:"74.2",disRate:"-1.2",marketRate:"17",marketLastChange:"5.9",operationCostRate:"96.5",operationLastChange:"5.8"},{id:"8",finalPayRateType:"中级小计",premiumIncome:"7678.60",premiumLastChange:"6.55",premiumPercent:"23.90",percentChange:"-0.1.01",finalPayRate:"63.75",finalLastChange:"4.85",fullPayRate:"64.91",disRate:"-1.16",marketRate:"16.99",marketLastChange:"6.12",operationCostRate:"96.99",operationLastChange:"7.35"},{id:"9",finalPayRateType:"高I(81%-90%)",premiumIncome:"2514.05",premiumLastChange:"10.6",premiumPercent:"7.82",percentChange:"2.76",finalPayRate:"88",finalLastChange:"11.7",fullPayRate:"89.3",disRate:"-1.3",marketRate:"19",marketLastChange:"2.3",operationCostRate:"97.3",operationLastChange:"4.6"},{id:"10",finalPayRateType:"高II(91%-95%)",premiumIncome:"3018.65",premiumLastChange:"5.6",premiumPercent:"9.40",percentChange:"-1.89",finalPayRate:"92",finalLastChange:"7.5",fullPayRate:"93",disRate:"-1",marketRate:"22",marketLastChange:"5.8",operationCostRate:"96.4",operationLastChange:"8.7"},{id:"11",finalPayRateType:"高III(>95%)",premiumIncome:"2614.45",premiumLastChange:"4.1",premiumPercent:"8.14",percentChange:"-3.28",finalPayRate:"96",finalLastChange:"6.4",fullPayRate:"96.9",disRate:"-0.9",marketRate:"27",marketLastChange:"8.4",operationCostRate:"95.9",operationLastChange:"6.5"},{id:"12",finalPayRateType:"高级小计",premiumIncome:"8147.15",premiumLastChange:"6.66",premiumPercent:"25.36",percentChange:"-0.90",finalPayRate:"92.04",finalLastChange:"8.44",fullPayRate:"93.11",disRate:"-1.06",marketRate:"22.68",marketLastChange:"5.55",operationCostRate:"96.52",operationLastChange:"6.73"},{id:"13",finalPayRateType:"合计",premiumIncome:"32124",premiumLastChange:"7.91",premiumPercent:"100",percentChange:"0.26",finalPayRate:"59.71",finalLastChange:"8.67",fullPayRate:"60.81",disRate:"-1.11",marketRate:"21.86",marketLastChange:"7.58",operationCostRate:"96.59",operationLastChange:"7.01"}]}},methods:{inspectTable:function(){},exportTable:function(){},sum:function(e){var a=e.columns,t=e.data,n=[];return a.forEach(function(e,a){0===a?n[a]="合计":(n[a]=0,t.forEach(function(t){n[a]+=Number(t[e.property])}),a>=2&&(n[a]/=t.length),n[a]=n[a].toFixed(2))}),n}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("real-query-form",{ref:"realQueryForm",attrs:{realForm:e.realForm}})],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportTable}},[e._v("导出报表")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.realResultData,"row-key":"id"}})],1)])])},staticRenderFns:[]};var i=t("VU/8")(n,r,!1,function(e){t("Zbnr")},"data-v-2906a32f",null);a.default=i.exports},Zbnr:function(e,a){}});