webpackJsonp([62],{Qun9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"DisFee",components:{BaseTable:function(){return a.e(92).then(a.bind(null,"ss0d"))}},data:function(){return{configHidden:!0,totalPay:"",fleetTypeCode:[],fleetTypeList:[{code:"1",name:"企业未营业车"},{code:"2",name:"营业公路客运"},{code:"3",name:"营业城市公交"},{code:"4",name:"营业旅游车"},{code:"5",name:"非营业货车(含特四)"},{code:"6",name:"营业货车(含特四)"},{code:"7",name:"特一"},{code:"8",name:"特二"},{code:"9",name:"特三"},{code:"10",name:"营业出租租赁客车"}],columns:[{prop:"version",width:130,label:"版本号"},{prop:"org",width:130,label:"机构"},{prop:"channel",width:130,label:"渠道"},{prop:"operation",width:100,label:"操作",operation:!0,operations:[{text:"差异配费",event:"configFee"}]}],disFeeData:[{version:"500020180101001",org:"山西省分公司",channel:"传统渠道"}],configColumns:[{prop:"bizSector",width:120,label:"业务板块"},{prop:"bizTypeNo",width:120,label:"业务小类号"},{prop:"bizDetail",width:230,label:"业务板块明细"},{prop:"insuranceType",width:120,label:"险种代码"},{prop:"finalPayRate",width:140,label:"终极赔付率(%)"},{prop:"auto",width:120,label:"自主系数",isEdit:!0,type:"input"},{prop:"historyAuto",width:120,label:"历史自主系数"},{prop:"premiumPercent",width:120,label:"保费占比(%)",isEdit:!0,type:"input"},{prop:"serviceCost",width:120,label:"手续费率(%)",isEdit:!0,type:"input"},{prop:"manageCost",width:120,label:"管理费率(%)",isEdit:!0,type:"input"},{prop:"award",width:120,label:"价值提奖(%)",isEdit:!0,type:"input"},{prop:"operationCostRate",width:140,label:"经营成本率(%)"}],configData:[{bizSector:"家用车-新车",bizTypeNo:"00001",bizDetail:"家用车，新车，含车损",insuranceType:"0507",finalPayRate:"57.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"10.8",serviceCost:"0.4",manageCost:"1.2",award:"1.5",operationCostRate:"96.7"},{bizSector:"家用车-新车",bizTypeNo:"00002",bizDetail:"家用车，新车，含车损",insuranceType:"0528",finalPayRate:"56.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"11.8",serviceCost:"0.8",manageCost:"1.2",award:"1.5",operationCostRate:"97.7"},{bizSector:"家用车-新车",bizTypeNo:"00003",bizDetail:"家用车，新车，单三者，同保",insuranceType:"0507",finalPayRate:"57.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"10.8",serviceCost:"0.4",manageCost:"1.2",award:"1.5",operationCostRate:"96.7"},{bizSector:"家用车-旧车",bizTypeNo:"00004",bizDetail:"家用车，新车，单三者，同保",insuranceType:"0528",finalPayRate:"56.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"11.8",serviceCost:"0.8",manageCost:"1.2",award:"1.5",operationCostRate:"97.7"},{bizSector:"家用车-旧车",bizTypeNo:"00005",bizDetail:"家用车，旧车，单三者",insuranceType:"0507",finalPayRate:"57.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"10.8",serviceCost:"0.4",manageCost:"1.2",award:"1.5",operationCostRate:"96.7"},{bizSector:"家用车-旧车",bizTypeNo:"00006",bizDetail:"家用车，旧车，单三者",insuranceType:"0528",finalPayRate:"56.6",auto:"0.56",historyAuto:"1.00",premiumPercent:"11.8",serviceCost:"0.8",manageCost:"1.2",award:"1.5",operationCostRate:"97.7"}]}},methods:{query:function(){},configFee:function(){this.configHidden=!this.configHidden},analysis:function(){this.$router.push("/admin/agency/config/analysis")}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"sector-list"},[a("div",{staticClass:"biz-sector"},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(t){e.fleetTypeCode=t},expression:"fleetTypeCode"}},[e._l(e.fleetTypeList,function(t){return a("el-checkbox",{key:t.code,attrs:{label:t.code,name:"fleetType"}},[e._v("\n              "+e._s(t.name)+"\n            ")])}),e._v(" "),a("el-checkbox",{staticStyle:{color:"red"},attrs:{label:"0"}},[e._v(" 未勾选板块出单取0费用")])],2)],1)],1)],1)]),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.disFeeData,rowKey:"version"},on:{configFee:e.configFee}})],1)]),e._v(" "),a("div",{staticClass:"form",attrs:{hidden:e.configHidden},on:{"update:hidden":function(t){e.configHidden=t}}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",{attrs:{label:"预估总保费:"}},[a("el-input",{model:{value:e.totalPay,callback:function(t){e.totalPay=t},expression:"totalPay"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"data",attrs:{hidden:e.configHidden},on:{"update:hidden":function(t){e.configHidden=t}}},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.configColumns,data:e.configData,rowKey:"version"}})],1)]),e._v(" "),a("div",{staticClass:"option",attrs:{hidden:e.configHidden},on:{"update:hidden":function(t){e.configHidden=t}}},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("差异配费导出")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("差异配费导入")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.analysis}},[e._v("下一步")])],1)])},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(e){a("j7kU")},"data-v-2afb30e0",null);t.default=n.exports},j7kU:function(e,t){}});