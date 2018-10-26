webpackJsonp([20],{"8JvV":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"OrgRealResult",components:{RealQueryForm:function(){return t.e(101).then(t.bind(null,"Ju5o"))},BaseTable:function(){return t.e(83).then(t.bind(null,"ss0d"))}},data:function(){return{realForm:{org:"27000",channel:"ct",size:"quarter",timeRange:"2018Q1",productType:"all"},columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"premiumIncome",width:120,label:"保费收入(万元)",align:"center"},{prop:"premiumPercent",width:120,label:"保费占比(%)",align:"center"},{prop:"finalPayRate",width:120,label:"合并终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:200,label:"满期赔付率(含IBNR)(%)",align:"center"},{prop:"marketRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],orgRealResultData:[{id:"1",org:"太原支公司",premiumIncome:"4942.15",premiumPercent:"15.38",finalPayRate:"56.86",fullPayRate:"57.96",marketRate:"17.5",operationCostRate:"98.2"},{id:"2",org:"大同支公司",premiumIncome:"3706.50",premiumPercent:"11.54",finalPayRate:"58.60",fullPayRate:"59.70",marketRate:"21.3",operationCostRate:"97.7"},{id:"3",org:"阳泉支公司",premiumIncome:"2543.25",premiumPercent:"7.92",finalPayRate:"57.60",fullPayRate:"58.89",marketRate:"18.5",operationCostRate:"97.3"},{id:"4",org:"长治支公司",premiumIncome:"2583.10",premiumPercent:"8.04",finalPayRate:"56.86",fullPayRate:"57.21",marketRate:"17.5",operationCostRate:"98.2"},{id:"5",org:"晋城支公司",premiumIncome:"2523.25",premiumPercent:"7.85",finalPayRate:"58.60",fullPayRate:"59.72",marketRate:"21.3",operationCostRate:"97.7"},{id:"6",org:"朔州支公司",premiumIncome:"2510.65",premiumPercent:"7.81",finalPayRate:"57.60",fullPayRate:"58.30",marketRate:"18.5",operationCostRate:"97.3"},{id:"7",org:"晋中支公司",premiumIncome:"2603.40",premiumPercent:"8.11",finalPayRate:"56.86",fullPayRate:"57.20",marketRate:"17.5",operationCostRate:"98.2"},{id:"8",org:"运城支公司",premiumIncome:"2564.55",premiumPercent:"7.98",finalPayRate:"58.60",fullPayRate:"59.70",marketRate:"21.3",operationCostRate:"97.7"},{id:"9",org:"忻州支公司",premiumIncome:"2514.05",premiumPercent:"7.83",finalPayRate:"57.60",fullPayRate:"58.70",marketRate:"57.6",operationCostRate:"97.3"},{id:"10",org:"临汾支公司",premiumIncome:"3018.65",premiumPercent:"9.40",finalPayRate:"58.60",fullPayRate:"59.70",marketRate:"21.3",operationCostRate:"97.7"},{id:"11",org:"吕梁支公司",premiumIncome:"2614.45",premiumPercent:"8.14",finalPayRate:"56.86",fullPayRate:"57.96",marketRate:"17.5",operationCostRate:"98.2"},{id:"12",org:"合计",premiumIncome:"32124",premiumPercent:"100",finalPayRate:"57.67",fullPayRate:"58.64",marketRate:"19.13",operationCostRate:"97.8"}]}},methods:{inspectTable:function(){},exportTable:function(){},sum:function(e){var a=e.columns,t=e.data,r=[];return a.forEach(function(e,a){0===a?r[a]="合计":(r[a]=0,t.forEach(function(t){r[a]+=Number(t[e.property])}),a>=3&&(r[a]/=t.length),r[a]=r[a].toFixed(2))}),r}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("real-query-form",{ref:"realQueryForm",attrs:{realForm:e.realForm}})],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportTable}},[e._v("导出报表")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.orgRealResultData,"row-key":"id"}})],1)])])},staticRenderFns:[]};var i=t("VU/8")(r,n,!1,function(e){t("GGV4")},"data-v-a1b3f35a",null);a.default=i.exports},GGV4:function(e,a){}});