webpackJsonp([51],{ZWwz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),r=a("lDdF"),o=a.n(r),s=a("uXZL"),l=a.n(s),c=a("NYxO"),d=a("P0XF"),u=a("6D10"),p={name:"ReportDetail",components:{BaseTable:function(){return a.e(96).then(a.bind(null,"ss0d"))}},props:{selectDimCode:{type:String},selectIndexCode:{type:String},name:{type:String}},data:function(){return{activeName:"select",activeChartName:"select",chooseLatitude:!1,params:{scene:"车险定价分析",bizSector:"2",insMonth:"201808",secondOrg:"01000",thirdOrg:""},thirdOrgList:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}],rules:{scene:[{required:!0,trigger:"change",message:"业务场景不能为空"}],bizSector:[{required:!0,trigger:"change",message:"业务板块不能为空"}]},currentDimCode:["usage"],currentIndexCode:["totalPremium","comFullRate","comOpeCostRate"],indexShow:!1,ruleShow:!1,detailShow:!1,chartShow:!1,dimColumn:[],indexColumn:[],diaColumns:[{label:"保单号码",prop:"policyNo",width:250},{label:"险类代码",prop:"classCode",width:120},{label:"险种代码",prop:"riskCode",width:120},{label:"投保人代码",prop:"appliCode",width:140},{label:"总保险价值",prop:"sumValue",width:120},{label:"总保险金额",prop:"sumAmount",width:120},{label:"总折扣金额",prop:"sumDiscount",width:120},{label:"总保险费",prop:"sumPremium",width:120},{label:"总附加险保费",prop:"sumSubPrem",width:120},{label:"保单生成日期",prop:"underwriteEndDate",width:120},{label:"起保日期（启运日期）",prop:"startDate",width:120},{label:"起保小时",prop:"startHour",width:120},{label:"终保日期",prop:"endDate",width:120},{label:"终保小时",prop:"endHour",width:120},{label:"自动稽核标志",prop:"renewalFlag",width:120},{label:"业务来源代码",prop:"businessNature",width:120}],chartDimList:"",chartIndexList:[],chartDimData:[],chartIndexData:[],specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},currentEdit:"",activeDimName:"",activeIndexName:"",selectRuleId:[],thirdShow:!1,expandFlag:!1}},created:function(){this.$store.dispatch("initFormData"),this.$store.dispatch("getRuleData"),this.currentDimCode=this.selectDimCode.split(","),this.currentIndexCode=this.selectIndexCode.split(",")},computed:n()({currentDimList:function(){var t=this,e=[];return this.formData.dimList.forEach(function(a){t.currentDimCode.includes(a.code)&&e.push(a)}),e},currentIndexList:function(){var t=this,e=[];return this.formData.indexList.forEach(function(a){t.currentIndexCode.includes(a.code)&&e.push(a)}),e},columns:function(){var t=[];return(this.dimColumn.length>0||this.indexColumn>0)&&this.thirdShow&&t.push({prop:"thirdOrg",width:120,label:"三级机构"}),t.concat(this.dimColumn).concat(this.indexColumn)},thirdColumns:function(){var t=[];return(this.dimColumn.length>0||this.indexColumn>0)&&(t.push({prop:"insMonth",width:120,label:"承保月份"}),t.push({prop:"secondOrg",width:120,label:"二级机构"}),this.thirdShow&&t.push({prop:"thirdOrg",width:120,label:"三级机构"})),t.concat(this.dimColumn).concat(this.indexColumn)},tempList:function(){var t=[],e=this.chartDimData;return this.chartIndexData.forEach(function(a){var i=[];a.data.forEach(function(t,a){i.push({value:t,name:e[a]})}),t.push({id:a.code,options:[{type:"柱状图",option:{title:{text:a.name},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:a.name},xAxis:[{data:e,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value"}],series:[{name:a.name,type:"bar",barWidth:20,data:a.data}]}},{type:"折线图",option:{title:{text:a.name},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:a.name},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{data:e,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value"}],series:[{name:a.name,type:"line",data:a.data}]}},{type:"面积图",option:{title:{text:a.name},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:a.name},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{data:e,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40}}],yAxis:[{type:"value"}],series:[{name:a.name,type:"line",areaStyle:{normal:{}},data:a.data}]}},{type:"条形图",option:{title:{text:a.name},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:a.name},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:e}],series:[{name:a.name,type:"bar",label:{normal:{show:!0,position:"inside"}},data:a.data}]}},{type:"饼状图",option:{title:{text:a.name,subtext:"",left:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:e},series:[{type:"pie",radius:"65%",center:["50%","50%"],selectedMode:"single",data:i,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}},{type:"6",option:{title:{text:a.name},xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],type:"scatter"}]}},{type:"7",option:{title:{text:a.name},tooltip:{},legend:{data:["满期赔付率","合并终极赔付率"]},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:[{name:"家庭自用",max:100},{name:"营业出租租赁",max:100},{name:"营业旅游",max:100},{name:"营业货车",max:100},{name:"非营业机关",max:100},{name:"非营业企业",max:100}]},series:[{name:"满期赔付率 vs 合并终极赔付率",type:"radar",data:[{value:[87.11,78.36,72.36,78.23,69.32,70.32],name:"满期赔付率"},{value:[86.12,77.66,71.25,77.35,68.21,69.36],name:"合并终极赔付率"}]}]}}]})}),t},currentEditIndex:function(){var t=this;if(this.ruleData.length>0)return this.ruleData.findIndex(function(e){return e.id===t.currentEdit})},selectRuleList:function(){var t=this;if(this.ruleData.length>0)return this.selectRuleId.map(function(e){return t.ruleData.find(function(t){return t.id===e})})},mergeData:function(){return Object(u.a)(this.thirdData,["secondOrg"])}},Object(c.d)({tableHeader:function(t){return t.app.tableHeader},formData:function(t){return t.chart.formData},tableData:function(t){return t.chart.tableData},thirdData:function(t){return t.chart.thirdData},detailData:function(t){return t.chart.detailData},ruleData:function(t){return t.chart.ruleData}})),watch:{currentDimList:function(t){var e=this;this.dimColumn=[],t.forEach(function(t){e.dimColumn.push({prop:t.code,label:t.name,width:t.width})})},currentIndexList:function(t){var e=this;this.indexColumn=[],t.forEach(function(t){e.indexColumn.push({prop:t.code,label:t.name,width:t.width})})},chartDimList:function(t){var e=this;this.chartDimData=[],this.currentDimList.find(function(e){return e.code===t}).detail.forEach(function(t){return e.chartDimData.push(t.name)})},chartIndexList:function(t){var e=this;this.chartIndexData=[];var a=this.chartDimData;t.length>0&&a.length>0&&t.forEach(function(t){var i=[];a.forEach(function(t){i.push({dim:t,index:0})});var n=e.currentIndexList.find(function(e){return e.code===t});e.tableData.forEach(function(a){var n=a[e.chartDimList],r=i.findIndex(function(t){return t.dim===n});i[r].index=parseFloat(i[r].index)+parseFloat(a[t])});var r=i.map(function(t){return t.index});e.chartIndexData.push({code:t,name:n.name,data:r})})},tempList:function(t){var e=this;t.length>0&&this.$nextTick(function(){t.forEach(function(t,a){a%3==0?e.drawLine(t.id,t.options[4].option):a%3==1?e.drawLine(t.id,t.options[0].option):a%3==2&&e.drawLine(t.id,t.options[3].option)})})}},methods:{emitEvent:function(t,e){this.$emit(t,e)},expandThird:function(t){this.thirdShow=!0,this.$store.dispatch("getThirdData",t)},exportOrder:function(){var t=this;this.$confirm("确定导出该报表吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"报表导出成功!"});var e=l.a.utils.table_to_book(document.querySelector("#out-table")),a=l.a.write(e,{bookType:"xlsx",bookSST:!0,type:"array"});try{o.a.saveAs(new Blob([a],{type:"application/octet-stream"}),"我的报表.xlsx")}catch(t){"undefined"!=typeof console&&console.info(t,a)}return a}).catch(function(){})},renderHeader:function(t,e){var a=e.column,i=e.$index,n=this;return t("div",[t("el-button",{size:"small",type:"primary",on:{click:function(t){console.log(a),console.log(n.dimColumn);var e=n.dimColumn,i=n.indexColumn,r=e.findIndex(function(t){return t.prop===a.property}),o=i.findIndex(function(t){return t.prop===a.property});console.log(r),console.log(o),r>-1&&(0===r?alert("已经是最左列，不能左移"):n.dimColumn=[{prop:"insMonth2",width:120,label:"承保月份2"}]),o>-1&&(0===o?alert("已经是最左列，不能左移"):(i.splice(o,1),n.indexColumn=i)),event.stopPropagation()}}},[t("i",{class:"el-icon-arrow-left"})]),t("span",{},a.label),t("el-button",{size:"small",type:"primary",on:{click:function(t){var e=this.columns;if(i===e.length-1)alert("已经是最右列，不能右移");else{var a=i-2,n=e[a];e.splice(a,1),e.splice(a+1,0,n),console.log(e)}event.stopPropagation()}}},[t("i",{class:"el-icon-arrow-right"})])])},toggleChoose:function(){this.chooseLatitude=!this.chooseLatitude},expandChange:function(t,e){e.length>0?this.thirdShow=!0:this.thirdShow=!1},getThridOrg:function(t){var e=this.formData.orgList.find(function(e){return e.code===t});this.thirdOrgList=e.children},query:function(){this.$store.dispatch("getTabData"),this.$store.dispatch("getThirdData")},getThirdOrgData:function(){this.thirdShow=!this.thirdShow},addIndex:function(t){this.currentIndexCode.includes(t)||this.currentIndexCode.push(t)},removeIndex:function(t){this.currentIndexCode.splice(this.currentIndexCode.indexOf(t),1)},detail:function(t){this.$store.dispatch("detailData",this.params),this.detailShow=!0},chartDetail:function(){this.chartShow=!0,this.chartDimList="",this.chartIndexList=[],this.currentDimList.length>0&&(this.chartDimList=this.currentDimList[0].code),this.currentIndexList.length>2&&(this.chartIndexList.push(this.currentIndexList[0].code),this.chartIndexList.push(this.currentIndexList[1].code),this.chartIndexList.push(this.currentIndexList[2].code))},drawLine:function(t,e){var a=this.$echarts.init(document.getElementById(t),"macarons");a.clear(),a.setOption(e)},addRecord:function(){var t=Object(d.a)(),e={id:t,ruleName:"",dims:[],indexName:"",indexDown:"",indexUp:"",isEdit:!0};this.ruleData.push(e),this.edit(t)},removeReord:function(t){var e=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=e.ruleData.findIndex(function(e){return e.id===t});a===e.currentEditIndex&&(e.currentEdit=""),e.ruleData.splice(a,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},save:function(){this.ruleData[this.currentEditIndex].isEdit=!1,this.currentEdit=""},edit:function(t){this.currentEditIndex>-1&&(this.ruleData[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.ruleData[this.currentEditIndex].isEdit=!0},addDimTag:function(t,e){var a=t.code,i=t.name;if(this.currentEditIndex>-1){var n=this.ruleData[this.currentEditIndex].dims,r=n.findIndex(function(t){return t.code===a});if(-1===r){var o=[];o.push(e),this.ruleData[this.currentEditIndex].dims.push({code:a,name:i,tags:o})}else{-1===n[r].tags.findIndex(function(t){return t===e})&&this.ruleData[this.currentEditIndex].dims[r].tags.push(e)}}},removeDimTag:function(t,e){var a=this.ruleData[this.currentEditIndex].dims,i=a.findIndex(function(e){return e.name===t}),n=a[i].tags,r=n.findIndex(function(t){return t===e});n.splice(r,1),0===n.length&&a.splice(i,1),console.log(a)},addIndexTag:function(t){var e=this,a=t.name,i=t.code;if(this.currentEditIndex>-1){var n=this.ruleData[this.currentEditIndex].indexName;""!==n?n!==a&&this.$confirm("确定替换已有的指标吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.ruleData[e.currentEditIndex].indexName=a,e.ruleData[e.currentEditIndex].indexCode=i,e.ruleData[e.currentEditIndex].indexDown="-∞",e.ruleData[e.currentEditIndex].indexUp="+∞",e.$message({type:"success",message:"已替换为新指标!"})}).catch(function(){}):(this.ruleData[this.currentEditIndex].indexName=a,this.ruleData[this.currentEditIndex].indexCode=i,this.ruleData[this.currentEditIndex].indexDown="-∞",this.ruleData[this.currentEditIndex].indexUp="+∞")}},removeIndexTag:function(){this.ruleData[this.currentEditIndex].indexName="",this.ruleData[this.currentEditIndex].indexCode="",this.ruleData[this.currentEditIndex].indexDown="",this.ruleData[this.currentEditIndex].indexUp=""},merge:function(t){var e=t.row,a=t.column;t.rowIndex,t.columnIndex;if(["secondOrg"].includes(a.property)){if(e.rowSpan[a.property]>1)return[e.rowSpan[a.property],1];if(0===e.rowSpan[a.property])return[0,0]}},selectChange:function(t){var e=this;this.selectRuleId=[],t.forEach(function(t){e.selectRuleId.push(t.id)})},removeRule:function(t){var e=this.selectRuleId.findIndex(function(e){return e===t});this.selectRuleId.splice(e,1);var a=this.ruleData.find(function(e){return e.id===t});this.$refs.ruleTable.toggleRowSelection(a)},exportData:function(){var t=this;this.$confirm("确定导出数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"导出成功!"})}).catch(function(){})},tableCellClassName:function(t){var e=t.row,a=t.column,i=!1;return this.selectRuleList.forEach(function(t){var n=!1;if(a.property===t.indexCode){var r=Math.abs(e[a.property]);if(("-∞"===t.indexDown||r>t.indexDown)&&("+∞"===t.indexUp||r<t.indexUp)){var o=0;t.dims.forEach(function(t){void 0!==e[t.code]&&t.tags.includes(e[t.code])&&o++}),t.dims.length===o&&(n=!0)}}i=i||n}),i?"alert-cell":null}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-alert",{attrs:{title:t.name,type:"info",closable:!1}}),t._v(" "),a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"180px",model:t.params,rules:t.rules,inline:!0}},[a("el-form-item",{attrs:{label:"业务场景选择",prop:"scene"}},[a("el-select",{attrs:{placeholder:"请选择业务场景选择"},model:{value:t.params.scene,callback:function(e){t.$set(t.params,"scene",e)},expression:"params.scene"}},[a("el-option",{attrs:{value:"车险保单分析",label:"车险保单分析"}}),t._v(" "),a("el-option",{attrs:{value:"车险定价分析",label:"车险定价分析"}})],1)],1),t._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"车险定价分析"===t.params.scene,expression:"params.scene === '车险定价分析'"}],attrs:{label:"业务板块选择",prop:"bizSector"}},[a("el-select",{attrs:{placeholder:"请选择业务板块"},model:{value:t.params.bizSector,callback:function(e){t.$set(t.params,"bizSector",e)},expression:"params.bizSector"}},t._l(t.formData.bizList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1)],1),t._v(" "),a("el-card",{directives:[{name:"show",rawName:"v-show",value:t.chooseLatitude,expression:"chooseLatitude"}],staticClass:"box-card"},[a("div",{staticClass:"clearfix text-center",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.params.scene)+"基础配置")])]),t._v(" "),a("el-collapse-transition",[a("div",[a("div",{staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择维度")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:t.currentDimCode,callback:function(e){t.currentDimCode=e},expression:"currentDimCode"}},t._l(t.formData.dimList,function(e){return a("el-checkbox",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择指标")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"tag"},[t._l(t.currentIndexList,function(e){return a("el-tag",{key:e.code,attrs:{closable:"",type:"primary"},on:{close:function(a){t.removeIndex(e.code)}}},[t._v("\n                        "+t._s(e.name)+"\n                      ")])}),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(e){t.indexShow=!0}}},[t._v("新增指标")])],2)])])],1)],1)]),t._v(" "),a("div",{staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择预警规则")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"tag"},[t._l(t.selectRuleList,function(e){return a("el-tag",{key:e.id,attrs:{type:"primary",closable:""},on:{close:function(a){t.removeRule(e.id)}}},[t._v("\n                        "+t._s(e.ruleName)+"\n                      ")])}),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(e){t.ruleShow=!0}}},[t._v("选择/管理预警规则")])],2)])])],1)],1)])])])],1),t._v(" "),a("el-form",{ref:"chartForm",attrs:{"label-width":"180px",model:t.params,rules:t.rules,inline:!0}},[a("el-form-item",{attrs:{label:"承保月份",prop:"insMonth"}},[a("el-select",{attrs:{placeholder:"请选择承保月份"},model:{value:t.params.insMonth,callback:function(e){t.$set(t.params,"insMonth",e)},expression:"params.insMonth"}},t._l(t.formData.insMonthList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"二级机构",prop:"secondOrg"}},[a("el-select",{attrs:{placeholder:"请选择二级机构"},on:{change:t.getThridOrg},model:{value:t.params.secondOrg,callback:function(e){t.$set(t.params,"secondOrg",e)},expression:"params.secondOrg"}},t._l(t.formData.orgList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.thirdShow,expression:"thirdShow"}],attrs:{label:"三级机构",prop:"thirdOrg"}},[a("el-select",{attrs:{placeholder:"请选择三级机构"},model:{value:t.params.thirdOrg,callback:function(e){t.$set(t.params,"thirdOrg",e)},expression:"params.thirdOrg"}},t._l(t.thirdOrgList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),t._l(t.currentDimList,function(e){return a("el-form-item",{key:e.code,attrs:{label:e.name,prop:e.name}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.params[e.code],callback:function(a){t.$set(t.params,e.code,a)},expression:"params[dim.code]"}},t._l(e.detail,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1)})],2)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.query}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.chartDetail}},[t._v("图表分析")]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.exportOrder}},[t._v("导出")])],1),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{attrs:{stripe:"",border:"",id:"out-table","header-cell-style":t.tableHeader,"max-height":"450",data:t.tableData,"cell-class-name":t.tableCellClassName},on:{"expand-change":t.expandChange}},[a("el-table-column",{attrs:{"header-align":"center",width:"120",label:"明细数据钻取",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:t.detail}},[t._v("\n              详情\n            ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"insMonth",label:"承保月份","min-width":"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"secondOrg",label:"二级机构",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{type:"expand",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{width:"100%",stripe:"",border:"","header-cell-style":t.tableHeader,"show-header":!1,data:t.mergeData,spanMethod:t.merge,"cell-class-name":t.tableCellClassName}},[a("el-table-column",{attrs:{"header-align":"center",width:"120",label:"明细数据钻取",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:t.detail}},[t._v("\n                    详情\n                  ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"insMonth",label:"承保月份","min-width":"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"secondOrg",label:"二级机构",width:"170",align:"center"}}),t._v(" "),t._l(t.columns,function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label}})})],2)]}}])}),t._v(" "),t._l(t.columns,function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label}})})],2)],1)]),t._v(" "),a("el-dialog",{attrs:{title:"选择指标",visible:t.indexShow,width:"30%"},on:{"update:visible":function(e){t.indexShow=e}}},t._l(t.formData.indexList,function(e){return a("el-tag",{key:e.code,attrs:{type:t.currentIndexCode.includes(e.code)?"primary":"info"},nativeOn:{click:function(a){t.addIndex(e.code)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),a("el-dialog",{attrs:{title:"选择/管理预警规则",visible:t.ruleShow,fullscreen:""},on:{"update:visible":function(e){t.ruleShow=e}}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:4}},[a("el-collapse",{staticStyle:{height:"600px",overflow:"auto","overflow-x":"hidden"},attrs:{accordion:""}},[a("el-collapse-item",{attrs:{title:"选择维度",name:"selectDim"}},[a("el-collapse",{attrs:{accordion:""},model:{value:t.activeDimName,callback:function(e){t.activeDimName=e},expression:"activeDimName"}},t._l(t.formData.dimList,function(e){return a("el-collapse-item",{key:e.code,attrs:{title:e.name,name:e.name}},[a("div",{staticClass:"grid-content bg-purple dimension-dialog"},[a("div",{staticClass:"dimension"},t._l(e.detail,function(i){return a("div",{key:i.code,staticClass:"item",on:{click:function(a){t.addDimTag(e,i.name)}}},[a("span",[t._v(t._s(i.name))])])}))])])}))],1),t._v(" "),a("el-collapse-item",{attrs:{title:"选择指标",name:"selectIndex"}},[a("div",{staticClass:"grid-content bg-purple dimension-dialog"},[a("div",{staticClass:"dimension"},t._l(t.formData.indexList,function(e){return a("div",{key:e.code,staticClass:"item",on:{click:function(a){t.addIndexTag(e)}}},[a("span",[t._v(t._s(e.name))])])}))])])],1)],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-table",{ref:"ruleTable",staticClass:"tb-edit",attrs:{border:"",size:"mini",data:t.ruleData,"highlight-current-row":""},on:{"selection-change":t.selectChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",prop:"ruleName",label:"规则名称","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"规则名称"},model:{value:e.row.ruleName,callback:function(a){t.$set(e.row,"ruleName",a)},expression:"scope.row.ruleName"}}):a("span",[t._v(t._s(e.row.ruleName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"left",label:"维度范围",prop:"dims","min-width":"400"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.dims,function(i){return a("span",{key:i.name,attrs:{"disable-transitions":"",size:"small"}},[t._v("\n                  "+t._s(i.name)+":\n                  "),t._l(i.tags,function(n){return a("el-tag",{key:n,attrs:{"disable-transitions":"",size:"small",closable:e.row.isEdit},on:{close:function(e){t.removeDimTag(i.name,n)}}},[t._v("\n                    "+t._s(n)+"\n                  ")])}),t._v(" "),a("br")],2)})}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"指标范围"}},[a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"指标名称",prop:"indexName","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:""!==e.row.indexName,expression:"scope.row.indexName !== ''"}],attrs:{"disable-transitions":"",size:"small",closable:e.row.isEdit},on:{close:t.removeIndexTag}},[t._v("\n                    "+t._s(e.row.indexName)+"\n                  ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"指标下限",prop:"indexDown","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit&&""!==e.row.indexName?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"指标下限"},model:{value:e.row.indexDown,callback:function(a){t.$set(e.row,"indexDown",a)},expression:"scope.row.indexDown"}}):a("span",[t._v(t._s(e.row.indexDown))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"指标上限",prop:"indexUp","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit&&""!==e.row.indexName?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"指标上限"},model:{value:e.row.indexUp,callback:function(a){t.$set(e.row,"indexUp",a)},expression:"scope.row.indexUp"}}):a("span",[t._v(t._s(e.row.indexUp))])]}}])})],1),t._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit!==e.row.id,expression:" currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(a){t.edit(e.row.id)}}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit===e.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:t.save}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(a){a.preventDefault(),t.removeReord(e.row.id)}}})],1)]}}])})],1),t._v(" "),a("el-button",{style:t.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addRecord}},[t._v("\n            新增行\n          ")]),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"30px"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.ruleShow=!1}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.ruleShow=!1}}},[t._v("关闭")])],1)],1)])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"明细数据钻取",visible:t.detailShow,width:"60%"},on:{"update:visible":function(e){t.detailShow=e}}},[a("base-table",{attrs:{columns:t.diaColumns,data:t.detailData}}),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.exportData}},[t._v("导出")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.detailShow=!1}}},[t._v("关闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"归因分析",visible:t.chartShow,fullscreen:""},on:{"update:visible":function(e){t.chartShow=e}}},[a("div",{staticClass:"form"},[a("el-form",{ref:"chartForm",attrs:{"label-width":"180px",model:t.params,rules:t.rules,inline:!0}},[a("el-form-item",{attrs:{label:"承保月份",prop:"insMonth"}},[a("el-select",{attrs:{placeholder:"请选择承保月份"},model:{value:t.params.insMonth,callback:function(e){t.$set(t.params,"insMonth",e)},expression:"params.insMonth"}},t._l(t.formData.insMonthList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"二级机构",prop:"secondOrg"}},[a("el-select",{attrs:{placeholder:"请选择二级机构"},on:{change:t.getThridOrg},model:{value:t.params.secondOrg,callback:function(e){t.$set(t.params,"secondOrg",e)},expression:"params.secondOrg"}},t._l(t.formData.orgList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.thirdShow,expression:"thirdShow"}],attrs:{label:"三级机构",prop:"thirdOrg"}},[a("el-select",{attrs:{placeholder:"请选择三级机构"},model:{value:t.params.thirdOrg,callback:function(e){t.$set(t.params,"thirdOrg",e)},expression:"params.thirdOrg"}},t._l(t.thirdOrgList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),t._l(t.currentDimList,function(e){return a("el-form-item",{key:e.code,attrs:{label:e.name,prop:e.name}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.params[e.code],callback:function(a){t.$set(t.params,e.code,a)},expression:"params[dim.code]"}},t._l(e.detail,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1)})],2)],1),t._v(" "),a("el-collapse",{attrs:{accordion:""},model:{value:t.activeChartName,callback:function(e){t.activeChartName=e},expression:"activeChartName"}},[a("el-collapse-item",{attrs:{title:t.params.scene,name:"select"}},[a("div",{staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择维度(单选)")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-radio-group",{model:{value:t.chartDimList,callback:function(e){t.chartDimList=e},expression:"chartDimList"}},t._l(t.currentDimList,function(e){return a("el-radio",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"sector-list"},[a("div",{staticClass:"title"},[t._v("选择指标(可多选)")]),t._v(" "),a("div",{staticClass:"biz-sector"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:t.chartIndexList,callback:function(e){t.chartIndexList=e},expression:"chartIndexList"}},t._l(t.currentIndexList,function(e){return a("el-checkbox",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.name))])}))],1)],1)],1)],1)],1)])])],1),t._v(" "),a("div",{staticClass:"data"},[a("el-row",{attrs:{gutter:20}},t._l(t.tempList,function(e){return a("el-col",{key:e.id,staticClass:"chart",attrs:{span:8}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{staticStyle:{padding:"14px"}},[a("div",{staticClass:" clearfix"},[a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-cc-chart",name:"zhuzhuang"},on:{click:function(a){t.drawLine(e.id,e.options[0].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chart-line"},on:{click:function(a){t.drawLine(e.id,e.options[1].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chartarea"},on:{click:function(a){t.drawLine(e.id,e.options[2].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chart"},on:{click:function(a){t.drawLine(e.id,e.options[3].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-chart1"},on:{click:function(a){t.drawLine(e.id,e.options[4].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-dotchart"},on:{click:function(a){t.drawLine(e.id,e.options[5].option)}}}),t._v(" "),a("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-radarchart"},on:{click:function(a){t.drawLine(e.id,e.options[6].option)}}})],1)]),t._v(" "),a("div",{staticClass:"image",attrs:{id:e.id}})])],1)}))],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(p,m,!1,function(t){a("n5hQ")},"data-v-4b99bbaf",null);e.default=h.exports},n5hQ:function(t,e){}});