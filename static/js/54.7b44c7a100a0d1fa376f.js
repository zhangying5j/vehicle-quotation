webpackJsonp([54],{"2YyT":function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={name:"Agent",components:{VersionQueryForm:function(){return o.e(96).then(o.bind(null,"8qXw"))},BaseTable:function(){return o.e(90).then(o.bind(null,"ss0d"))},Price:function(){return o.e(2).then(o.bind(null,"czlG"))}},data:function(){return{warnTableVisible:!1,personForm:{org:"27000",channel:"ct",feeModel:"fleet",endMonth:"03",timeRange:"",version:"50000201801010900"},columns:[{prop:"protocolNo",width:160,label:"协议号",align:"center"},{prop:"protocolName",width:240,label:"协议名称",align:"center"},{prop:"premiumIncome",width:120,label:"保费收入",align:"center",children:[{prop:"expIncome",width:120,label:"预测值(万元)",align:"center"},{prop:"realIncome",width:120,label:"实际值(万元)",align:"center"},{prop:"disIncome",width:120,label:"二者差(万元)",align:"center"}]},{prop:"incomePercentForce",width:120,label:"保费收入占比(交强险)",align:"center",children:[{prop:"expIncomePercentForce",width:120,label:"预测值(%)",align:"center"},{prop:"realIncomePercentForce",width:120,label:"实际值(%)",align:"center"},{prop:"disIncomePercentForce",width:120,label:"二者差(%)",align:"center"}]},{prop:"comAuto",width:120,label:"商业险自主系数",align:"center",children:[{prop:"expComAuto",width:120,label:"预测值(%)",align:"center"},{prop:"realComAuto",width:120,label:"实际值(%)",align:"center"},{prop:"disComAuto",width:120,label:"二者差(%)",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率",align:"center",children:[{prop:"expOperation",width:120,label:"预测值(%)",align:"center"},{prop:"realOperation",width:120,label:"实际值(%)",align:"center"},{prop:"disOperation",width:120,label:"二者差(%)",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率",align:"center",children:[{prop:"expMarket",width:120,label:"预测值(%)",align:"center"},{prop:"realMarket",width:120,label:"实际值(%)",align:"center"},{prop:"disMarket",width:120,label:"二者差(%)",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率",align:"center",children:[{prop:"expFinal",width:120,label:"预测值(%)",align:"center"},{prop:"realFinal",width:120,label:"实际值(%)",align:"center"},{prop:"disFinal",width:120,label:"二者差(%)",align:"center"}]},{prop:"fullPayRate",width:120,label:"满期赔付率",align:"center",children:[{prop:"realFull",width:120,label:"实际值(%)",align:"center"}]}],fleetData:[{id:"1",protocolNo:"20180101010001",protocolName:"2018机动车辆投保协议",expIncome:"2530.35",realIncome:"2543.25",disIncome:"12.90",expIncomePercentForce:"30.00",realIncomePercentForce:"29.50",disIncomePercentForce:"-0.50",expComAuto:"45.00",realComAuto:"42.60",disComAuto:"-2.40",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03",realFull:"57.90"},{id:"2",protocolNo:"20180101020001",protocolName:"2018非机动车辆投保协议",expIncome:"2571.00",realIncome:"2583.10",disIncome:"12.10",expIncomePercentForce:"28.00",realIncomePercentForce:"24.60",disIncomePercentForce:"-3.40",expComAuto:"45.00",realComAuto:"45.70",disComAuto:"0.70",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4",realFull:"60.00"},{id:"3",protocolNo:"20180101030001",protocolName:"2018营业出租客车投保协议",expIncome:"2511.45",realIncome:"2523.25",disIncome:"11.80",expIncomePercentForce:"25.00",realIncomePercentForce:"26.80",disIncomePercentForce:"1.80",expComAuto:"50.00",realComAuto:"56.30",disComAuto:"6.30",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4",realFull:"58.70"},{id:"4",protocolNo:"20180101040001",protocolName:"2018营业租赁客车投保协议",expIncome:"2496.85",realIncome:"2510.65",disIncome:"13.80",expIncomePercentForce:"30.00",realIncomePercentForce:"31.20",disIncomePercentForce:"1.20",expComAuto:"60.00",realComAuto:"58.60",disComAuto:"-1.40",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03",realFull:"58.00"},{id:"5",protocolNo:"20180101050001",protocolName:"2018非营业企业客车投保协议",expIncome:"2587.80",realIncome:"2603.40",disIncome:"15.60",expIncomePercentForce:"28.00",realIncomePercentForce:"29.90",disIncomePercentForce:"1.90",expComAuto:"90.00",realComAuto:"96.30",disComAuto:"6.30",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4",realFull:"59.60"},{id:"6",protocolNo:"20180101060001",protocolName:"2018非营业企业货车投保协议",expIncome:"2545.15",realIncome:"2564.55",disIncome:"19.40",expIncomePercentForce:"30.00",realIncomePercentForce:"30.20",disIncomePercentForce:"0.20",expComAuto:"85.00",realComAuto:"85.20",disComAuto:"0.20",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4",realFull:"58.60"},{id:"7",protocolNo:"合计",protocolName:"",expIncome:"15242.6",realIncome:"15328.2",disIncome:"85.6",expIncomePercentForce:"28.50",realIncomePercentForce:"28.69",disIncomePercentForce:"0.19",expComAuto:"62.62",realComAuto:"64.25",disComAuto:"1.63",expOperation:"97.64",realOperation:"97.73",disOperation:"0.096",expMarket:"18.05",realMarket:"19.11",disMarket:"1.07",expFinal:"57.71",realFinal:"57.69",disFinal:"-0.012",realFull:"58.81"}]}},methods:{tick:function(){var e=document.getElementsByClassName("el-table__body")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[6],r=e.getElementsByTagName("td");e.removeChild(r[1]),r[0].setAttribute("colspan","2")},inspectTable:function(){},exportTable:function(){},sum:function(e){var r=e.columns,o=e.data,t=[];return r.forEach(function(e,r){0===r?t[r]="合计":1===r?t[r]="":(t[r]=0,o.forEach(function(o){t[r]+=Number(o[e.property])}),r>=5&&(t[r]/=o.length),t[r]=t[r].toFixed(2))}),t},tableCellClassName:function(e){var r=e.row,o=e.column,t=!1;return"disIncomePercentBiz"===o.property?t=Math.abs(r.disIncomePercentBiz)>3:"disIncomePercentForce"===o.property?t=Math.abs(r.disIncomePercentForce)>.5:"disComAuto"===o.property?t=Math.abs(r.disComAuto)>2:"disOperation"===o.property?t=Math.abs(r.disOperation)>.3:"disMarket"===o.property?t=Math.abs(r.disMarket)>1:"disFinal"===o.property&&(t=Math.abs(r.disFinal)>.3),t?"alert-cell":null}}},a={render:function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"container"},[o("div",{staticClass:"form"},[o("version-query-form",{ref:"versionQueryForm",attrs:{personForm:e.personForm,endMonthShow:!0,timeRangeShow:!1,versionShow:!1}})],1),e._v(" "),o("div",{staticClass:"option"},[o("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),o("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),o("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(r){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),o("div",{staticClass:"data"},[o("div",{staticClass:"table"},[o("base-table",{attrs:{columns:e.columns,data:e.fleetData,"row-key":"id",mountedCallBack:e.tick}})],1)]),e._v(" "),o("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(r){e.warnTableVisible=r}}},[o("price",{attrs:{typeProp:"protocol"}})],1)],1)},staticRenderFns:[]};var n=o("VU/8")(t,a,!1,function(e){o("KzPL")},"data-v-382d5bda",null);r.default=n.exports},KzPL:function(e,r){}});