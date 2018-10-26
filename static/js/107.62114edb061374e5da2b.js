webpackJsonp([107],{"0yYg":function(e,a){},qLn9:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"YearHistory",components:{BaseTable:function(){return t.e(96).then(t.bind(null,"ss0d"))}},data:function(){return{columns:[{prop:"detail",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"detail"}]},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],data:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}],yearDetailHidden:!0,detailColumns:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],detailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}]}},methods:{detail:function(){this.yearDetailHidden=!this.yearDetailHidden},merge:function(e){e.row,e.column;var a=e.rowIndex;if(0===e.columnIndex)return 0===a?[this.data.length,1]:[0,0]}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"insuranceType",spanMethod:e.merge},on:{detail:e.detail}}),e._v(" "),t("base-table",{directives:[{name:"show",rawName:"v-show",value:!e.yearDetailHidden,expression:"!yearDetailHidden"}],attrs:{columns:e.detailColumns,data:e.detailData,rowKey:"insuranceType"}})],1)},staticRenderFns:[]};var l=t("VU/8")(n,i,!1,function(e){t("0yYg")},"data-v-eb0b3e32",null);a.default=l.exports}});