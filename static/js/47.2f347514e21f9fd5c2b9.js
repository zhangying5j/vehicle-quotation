webpackJsonp([47],{cpH2:function(e,t){},z3wf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),l=a.n(r),i=a("NYxO"),o={name:"configProtocol",components:{BackButton:function(){return a.e(81).then(a.bind(null,"uOVF"))}},computed:l()({},Object(i.c)({tableHeader:function(e){return e.app.tableHeader}})),data:function(){return{showColumn:[{prop:"fleetType",width:150,label:"车队类型",align:"center"},{prop:"carCount",width:120,label:"承包车辆数(台)",align:"center"},{prop:"premiumScale",width:120,label:"年保费规模(万元)",align:"center"},{prop:"fleetTypeRate",width:190,label:"车队类型占总保费用比(%)",align:"center"},{prop:"force",width:70,label:"交强(%)",align:"center"},{prop:"lost",width:120,label:"车损(含不计)(%)",align:"center"},{prop:"three",width:120,label:"三者(含不计)(%)",align:"center"},{prop:"goods",width:100,label:"车上货物(%)",align:"center"},{prop:"driver",width:150,label:"车上人员(驾驶员)(%)",align:"center"},{prop:"passenger",width:150,label:"车上人员(乘客)(%)",align:"center"},{prop:"glass",width:70,label:"玻璃(%)",align:"center"},{prop:"thief",width:120,label:"盗抢(含不计)(%)",align:"center"},{prop:"nature",width:120,label:"自燃损失险(%)",align:"center"},{prop:"other",width:110,label:"其他险别(%)",align:"center"},{prop:"total",width:80,label:"合计 (%)",align:"center"}],showData:[{fleetType:"营业出租租赁客车",carCount:"200",premiumScale:"298.85",fleetTypeRate:"100.00",force:"21.13",lost:"32.9",three:"31.14",goods:"0",driver:"0.81",passenger:"0.5",glass:"2.67",thief:"7.6",nature:"2.93",other:"0.32",total:"100.00"}],edits:["serviceCost","exhibitionCost","awardUp"],editColumn:[{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"fleetType",width:150,label:"车队类型",align:"center"},{prop:"premiumPercent",width:120,label:"保费占比(%)",align:"center"},{prop:"auto",width:120,label:"自主系数",align:"center"},{prop:"historyAuto",width:120,label:"历史自主系数",align:"center"},{prop:"serviceCost",width:120,label:"手续费(%)",align:"center"},{prop:"exhibitionCost",width:120,label:"展业费(%)",align:"center"},{prop:"awardUp",width:120,label:"价值提奖(%)",align:"center"},{prop:"total",width:120,label:"合计(%)",align:"center"},{prop:"approveMarketUp",width:190,label:"已审批市场费用上限(%)",align:"center"},{prop:"historyFullPayRate",width:140,label:"历史满期赔付率(%)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],editData:[{insuranceType:"交强险",fleetType:"营业出租租赁客车",premiumPercent:"21.13",auto:"1",historyAuto:"1",serviceCost:"",exhibitionCost:"",awardUp:"",total:"",approveMarketUp:"0.00",historyFullPayRate:"",finalPayRate:"",operationCostRate:""},{insuranceType:"商业险",fleetType:"营业出租租赁客车",premiumPercent:"78.87",auto:"1.45245252",historyAuto:"1.45245252",serviceCost:"",exhibitionCost:"",awardUp:"",total:"",approveMarketUp:"0.00",historyFullPayRate:"",finalPayRate:"",operationCostRate:""},{insuranceType:"交强险合计",fleetType:"",premiumPercent:"21.13",auto:"1",historyAuto:"1",serviceCost:"0.00",exhibitionCost:"0.00",awardUp:"0.00",total:"0.00",approveMarketUp:"0.00",historyFullPayRate:"27.67",finalPayRate:"67.97",operationCostRate:"89.34"},{insuranceType:"商业险合计",fleetType:"",premiumPercent:"78.87",auto:"1.45245252",historyAuto:"1.45245252",serviceCost:"0.00",exhibitionCost:"0.00",awardUp:"0.00",total:"0.00",approveMarketUp:"0.00",historyFullPayRate:"27.67",finalPayRate:"67.97",operationCostRate:"89.34"}],approve1:"",approve2:""}},methods:{getSummaries:function(e){var t=[];return t[0]="合计",t[1]="",t[2]="100",t[3]="",t[4]="",t[5]="0.00",t[6]="0.00",t[7]="0.00",t[8]="0.00",t[9]="",t[10]="27.67",t[11]="67.97",t[12]="89.34",t},collect:function(){this.$router.push("/admin/fleet/declare/modify/collect")}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"data"},[e._m(0),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.showData,stripe:"",border:"","show-summary":"","header-cell-style":e.tableHeader}},e._l(e.showColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})})),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.editData,stripe:"",border:"","show-summary":"","summary-method":e.getSummaries,"header-cell-style":e.tableHeader}},e._l(e.editColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align},scopedSlots:e._u([{key:"default",fn:function(r){return[-1!==e.edits.indexOf(t.prop)?a("el-input",{attrs:{size:"small"},model:{value:r.row[t.prop],callback:function(a){e.$set(r.row,t.prop,a)},expression:"scope.row[column.prop]"}}):a("span",[e._v(e._s(r.row[t.prop]))])]}}])})}))],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[e._v("申报情况说明")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve1,callback:function(t){e.approve1=t},expression:"approve1"}})],1)])]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[e._v("申报情况说明")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve2,callback:function(t){e.approve2=t},expression:"approve2"}})],1)])])],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("back-button",[e._v("上一步")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.collect}},[e._v("保  存")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc"},[this._v("车队协议配置")])])}]};var p=a("VU/8")(o,n,!1,function(e){a("cpH2")},"data-v-3d0c9824",null);t.default=p.exports}});