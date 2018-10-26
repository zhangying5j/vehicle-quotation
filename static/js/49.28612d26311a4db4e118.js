webpackJsonp([49],{ucYm:function(e,t){},xiGe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),n=a("NYxO"),o=a("Z4dx"),r=a("P0XF"),s={name:"ConfirmBizClass",components:{BackButton:function(){return a.e(90).then(a.bind(null,"uOVF"))},BizSectorList:function(){return a.e(92).then(a.bind(null,"jpoa"))}},data:function(){return{newName:"",search:{comLastPay:"01",carAge:"01",comLatCount:"01"},columns:[{prop:"no",title:"业务小类序号",width:120,headerAlign:"center",align:"center"},{prop:"lastYearCount",title:"商业险上年出险次数",width:170,headerAlign:"center",align:"left"},{prop:"lastYearAmount",title:"商业险上年出险金额",width:170,headerAlign:"center",align:"left"},{prop:"age",title:"年龄",width:120,headerAlign:"center",align:"center"},{prop:"recommendAutoCoe",title:"推荐自主系数",width:120,headerAlign:"center",align:"center"},{prop:"recommendMarketRate",title:"推荐市场费用率(%)",width:140,headerAlign:"center",align:"center"},{prop:"totalPremium",title:"总保费(最新自主系数) (万元)",width:210,headerAlign:"center",align:"center"},{prop:"premiumAccount",title:"保费占比(%)",width:100,headerAlign:"center",align:"center"},{prop:"uLossRatio",title:"终极赔付率(%)",width:120,headerAlign:"center",align:"center"},{prop:"uLossRatioROB",title:"终极赔付率风险等级分类(%)",width:220,headerAlign:"center",align:"center"},{prop:"estimateCostRate",title:"预估经营成本率(%)",width:140,headerAlign:"center",align:"center"},{prop:"historyAutoCoe",title:"历史自主系数",width:120,headerAlign:"center",align:"center"},{prop:"historyMarketRate",title:"历史市场费用率(%)",width:140,headerAlign:"center",align:"center"},{prop:"historyFullRate",title:"历史满期赔付率(%)",width:140,headerAlign:"center",align:"center"},{prop:"historyLossRate",title:"历史出单终极赔付率(%)",width:170,headerAlign:"center",align:"center"}],data:[{no:"1",lastYearCount:"0次",lastYearAmount:"0-1000",insureCombine:"单交",age:"20-30",recommendAutoCoe:.57,recommendMarketRate:"38",totalPremium:40,premiumAccount:10,uLossRatio:39,uLossRatioROB:"低I",estimateCostRate:85.32,historyAutoCoe:.62,historyMarketRate:36,historyFullRate:40.1,historyLossRate:39.1},{no:"2",lastYearCount:"1次",lastYearAmount:"1000-2000",insureCombine:"单交,单商_单三_无附加",age:"31-45",recommendAutoCoe:.48,recommendMarketRate:"39",totalPremium:35,premiumAccount:20,uLossRatio:43,uLossRatioROB:"低II",estimateCostRate:89.65,historyAutoCoe:.51,historyMarketRate:37,historyFullRate:44.2,historyLossRate:43.31},{no:"3",lastYearCount:"2次",lastYearAmount:"1000-2000",insureCombine:"单交,单商_单三_有附加",age:"46-60",recommendAutoCoe:.52,recommendMarketRate:"36",totalPremium:50,premiumAccount:10,uLossRatio:48,uLossRatioROB:"低III",estimateCostRate:85.21,historyAutoCoe:.48,historyMarketRate:35,historyFullRate:48.9,historyLossRate:48.25},{no:"4",lastYearCount:"2次",lastYearAmount:"2000-5000",insureCombine:"单交,单商_损三_无附加",age:"20以下",recommendAutoCoe:.57,recommendMarketRate:"38",totalPremium:40,premiumAccount:20,uLossRatio:53,uLossRatioROB:"中I",estimateCostRate:85.32,historyAutoCoe:.62,historyMarketRate:36,historyFullRate:54.3,historyLossRate:53.6},{no:"5",lastYearCount:"3次及以上",lastYearAmount:"5000-10000",insureCombine:"单交,单商_损三_有附加",age:"20-30",recommendAutoCoe:.48,recommendMarketRate:"39",totalPremium:35,premiumAccount:10,uLossRatio:65,uLossRatioROB:"中II",estimateCostRate:89.65,historyAutoCoe:.51,historyMarketRate:37,historyFullRate:66,historyLossRate:65.31},{no:"6",lastYearCount:"3次及以上",lastYearAmount:"10000+",insureCombine:"单交,交商_交三_无附加",age:"46-60",recommendAutoCoe:.52,recommendMarketRate:"36",totalPremium:50,premiumAccount:30,uLossRatio:73,uLossRatioROB:"中III",estimateCostRate:85.21,historyAutoCoe:.48,historyMarketRate:35,historyFullRate:74.2,historyLossRate:73.25}],items:[{itemLabel:"商业险上年出险金额:",selectInfo:"请选择商业险上年出险金额",modelName:"01",options:[{optLabel:"上年出险金额0",optValue:"01"},{optLabel:"上年出险金额0-1000",optValue:"02"},{optLabel:"上年出险金额1000-2000",optValue:"03"},{optLabel:"上年出险金额2000-5000",optValue:"04"},{optLabel:"上年出险金额5000-10000",optValue:"05"},{optLabel:"上年出险金额10000+",optValue:"06"}]},{itemLabel:"车龄:",selectInfo:"请选择车龄",modelName:"01",options:[{optLabel:"10年以上",optValue:"01"},{optLabel:"6-10年",optValue:"02"},{optLabel:"3-6年",optValue:"03"},{optLabel:"1-3年",optValue:"04"},{optLabel:"不满1年",optValue:"05"}]},{itemLabel:"商业险上年出险次数:",selectInfo:"请选择商业险上年出险次数",modelName:"01",options:[{optLabel:"上年未出险",optValue:"01"},{optLabel:"上年出险1次",optValue:"02"},{optLabel:"上年出险2次",optValue:"03"},{optLabel:"上年出险3次",optValue:"04"},{optLabel:"上年出险4次",optValue:"05"},{optLabel:"上年出险5次及以上",optValue:"06"}]},{itemLabel:"是否自定义业务小类:",selectInfo:"请选择是否自定义业务小类",modelName:"0",options:[{optLabel:"是",optValue:"1"},{optLabel:"否",optValue:"0"}]}],businessSmallTypeColumns:[{prop:"lastYearCommercialInsuranceAmount",title:"商业险上年出险金额",width:200,align:"left"},{prop:"lastYearCommercialInsuranceCount",title:"商业险上年出险次数",width:180,align:"left"},{prop:"carAge",title:"车龄",width:100,align:"center"},{prop:"isCustom",title:"是否自定义业务小类",width:100,align:"center"}],businessSmallTypeData:[{lastYearCommercialInsuranceAmount:"上年出险金额0",lastYearCommercialInsuranceCount:"上年未出险",carAge:"10年以上",isCustom:"否"},{lastYearCommercialInsuranceAmount:"上年出险金额0-1000",lastYearCommercialInsuranceCount:"上年出险1次",carAge:"6-10年",isCustom:"否"},{lastYearCommercialInsuranceAmount:"上年出险金额1000-2000",lastYearCommercialInsuranceCount:"上年出险2次",carAge:"3-6年",isCustom:"否"},{lastYearCommercialInsuranceAmount:"上年出险金额2000-5000",lastYearCommercialInsuranceCount:"上年出险3次",carAge:"1-3年",isCustom:"否"},{lastYearCommercialInsuranceAmount:"上年出险金额5000-10000",lastYearCommercialInsuranceCount:"上年出险4次",carAge:"6-10年",isCustom:"否"},{lastYearCommercialInsuranceAmount:"上年出险金额10000+",lastYearCommercialInsuranceCount:"上年出险5次及以上",carAge:"不满1年",isCustom:"否"}],mergeBusinessSmallTypeDialogVisible:!1,mergeInputNameDialogVisible:!1,multipleSelection:[],itemList:[{title:"商业险上年出险次数",name:"comLastCount",detail:[{label:"未投保商业险"},{label:"0次"},{label:"1次"},{label:"2次"},{label:"3次及以上"}]},{title:"商业险上年出险金额",name:"rci",detail:[{label:"0-1000"},{label:"1000-2000"},{label:"2000-5000"},{label:"5000-10000"},{label:"10000+"}]},{title:"年龄",name:"age",detail:[{label:"20以下"},{label:"20-30"},{label:"30-45"},{label:"45-60"},{label:"60以上"}]},{title:"投保组合",name:"insCom",detail:[{label:"单交"},{label:"单商_单三_无附加"},{label:"单商_单三_有附加"},{label:"单商_损三_无附加"},{label:"单商_损三_有附加"},{label:"交商_交三_无附加"},{label:"交商_交三_有附加"},{label:"交商_交三损_无附加"},{label:"交商_交三损_有附加"},{label:"交商_其他"}]},{title:"性别",name:"gender",detail:[{label:"男"},{label:"女"},{label:"未知"}]},{title:"使用性质",name:"usage",detail:[{label:"家庭自用"},{label:"营业出租租赁"},{label:"营业旅游"},{label:"营业货车"},{label:"非营业机关"},{label:"非营业企业"}]},{title:"新车购置价",name:"car-price",detail:[{label:"0-10万"},{label:"10-25万"},{label:"25-40万"},{label:"40万以上"}]},{title:"车龄",name:"car-age",detail:[{label:"1年以下"},{label:"1-3年"},{label:"3-6"},{label:"6-10"},{label:"10年以上"}]},{title:"交强险上年出险次数",name:"forceLastCount",detail:[]},{title:"合计上年出险次数",name:"totalLastCount",detail:[]},{title:"合计上年出险金额",name:"totalLastPay",detail:[]},{title:"经验品牌分组",name:"jyBrandGroup",detail:[]},{title:"经验车系分组",name:"jyCarGroup",detail:[]},{title:"行业车系分组",name:"industryGroup",detail:[]},{title:"座位数",name:"seatCount",detail:[]},{title:"吨位数",name:"tonCount",detail:[]},{title:"车龄",name:"useYear",detail:[]},{title:"三者限额",name:"amount",detail:[]},{title:"是否异地牌照",name:"outLandFlag",detail:[]},{title:"是否投保盗抢险",name:"theftFlag",detail:[]},{title:"是否投保车上人员责任险",name:"personDuty",detail:[]},{title:"是否投保划痕险",name:"scratchFlag",detail:[]},{title:"是否投保玻璃险",name:"glassFlag",detail:[]},{title:"车辆种类",name:"carKind",detail:[]},{title:"新续转保标识",name:"newFlag",detail:[]}],bizData:[{id:"1",bizName:"家庭自用20以下男性",isEdit:!1,tags:["20以下","男","家庭自用"]}],specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},currentEdit:"",activeName:""}},computed:l()({currentEditIndex:function(){var e=this;return this.bizData.findIndex(function(t){return t.id===e.currentEdit})}},Object(n.c)({sectors:function(e){return e.individual.sectors},tableHeader:function(e){return e.app.tableHeader}})),created:function(){var e=this;Object(o.g)().then(function(t){e.$store.commit("SET_SECTORS",t.data)})},methods:{config:function(){this.$router.push({path:"/admin/individual/declare/config"})},handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.forEach(function(e){console.log(e.carAge)})},sectorClick:function(e){},edit:function(e){this.currentEditIndex>-1&&(this.bizData[this.currentEditIndex].isEdit=!1),this.currentEdit=e,this.bizData[this.currentEditIndex].isEdit=!0},save:function(){this.bizData[this.currentEditIndex].isEdit=!1,this.currentEdit=""},remove:function(e){var t=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=t.bizData.findIndex(function(t){return t.id===e});a===t.currentEditIndex&&(t.currentEdit=""),t.bizData.splice(a,1),t.$message({type:"success",message:"删除成功!"})}).catch(function(){})},addRecord:function(){var e=Object(r.a)(),t={id:e,bizName:"",isEdit:!0,tags:[]};this.bizData.push(t),this.edit(e)},removeTag:function(e){var t=this.bizData[this.currentEditIndex].tags.findIndex(function(t){return t===e});this.bizData[this.currentEditIndex].tags.splice(t,1)},addTag:function(e){this.currentEditIndex>-1&&(-1===this.bizData[this.currentEditIndex].tags.findIndex(function(t){return t===e})&&this.bizData[this.currentEditIndex].tags.push(e))},defalutMerge:function(){this.newName="机构缺省业务小类",this.mergeInputNameDialogVisible=!0},merge:function(){this.newName="",this.mergeInputNameDialogVisible=!0},saveMerge:function(){this.mergeBusinessSmallTypeDialogVisible=!1}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[a("el-alert",{attrs:{title:"已推荐",type:"success",closable:"","show-icon":""}})],1),e._v(" "),a("div",{staticClass:"btn"},[a("el-button",{attrs:{size:"mini",plain:"",type:"primary"},on:{click:function(t){e.mergeBusinessSmallTypeDialogVisible=!0}}},[e._v("合并业务小类")])],1)]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{attrs:{data:e.data,"row-key":"no",stripe:"","header-cell-style":e.tableHeader}},e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,label:e.title,"min-width":e.width,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"option"},[a("back-button",{attrs:{plain:""}},[e._v("上一步")]),e._v(" "),a("back-button",{attrs:{plain:"",type:"next"},on:{next:e.config}},[e._v("下一步")])],1),e._v(" "),a("el-dialog",{attrs:{title:"合并小类",visible:e.mergeBusinessSmallTypeDialogVisible,width:"60%"},on:{"update:visible":function(t){e.mergeBusinessSmallTypeDialogVisible=t}}},[a("div",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"自定义业务小类"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-collapse",{staticStyle:{height:"400px",overflow:"auto","overflow-x":"hidden"},attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.itemList,function(t){return a("el-collapse-item",{key:t.name,attrs:{title:t.title,name:t.name}},[a("div",{staticClass:"grid-content bg-purple dimension-dialog"},[a("div",{staticClass:"dimension"},e._l(t.detail,function(t){return a("div",{key:t.label,staticClass:"item",on:{click:function(a){e.addTag(t.label)}}},[a("span",[e._v(e._s(t.label))])])}))])])}))],1),e._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-table",{staticClass:"tb-edit",attrs:{border:"",size:"mini",data:e.bizData,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"title",label:"业务小类名称",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"业务小类名称"},model:{value:t.row.bizName,callback:function(a){e.$set(t.row,"bizName",a)},expression:"scope.row.bizName"}}):a("span",[e._v(e._s(t.row.bizName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"tags",label:"业务小类范围"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.tags,function(i){return a("el-tag",{key:i,attrs:{"disable-transitions":"",size:"small",closable:t.row.isEdit},on:{close:function(t){e.removeTag(i)}}},[e._v("\n                          "+e._s(i)+"\n                        ")])})}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.currentEdit!==t.row.id,expression:" currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(a){e.edit(t.row.id)}}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.currentEdit===t.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:e.save}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(a){a.preventDefault(),e.remove(t.row.id)}}})],1)]}}])})],1),e._v(" "),a("el-button",{style:e.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addRecord}},[e._v("\n                    新增行\n                  ")])],1)])],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"合并业务小类"}},[a("div",{staticClass:"form"},[a("el-form",{attrs:{"label-width":"170px",inline:!0,size:"small",model:e.search}},[e._l(e.items,function(t){return a("el-form-item",{key:t.itemLabel,attrs:{label:t.itemLabel}},[a("el-select",{attrs:{editable:!1,placeholder:t.selectInfo},model:{value:t.modelName,callback:function(a){e.$set(t,"modelName",a)},expression:"item.modelName"}},e._l(t.options,function(e){return a("el-option",{key:e.optValue,attrs:{label:e.optLabel,value:e.optValue}})}))],1)}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("查询")])],1)],2)],1),e._v(" "),a("div",{attrs:{calss:"data"}},[a("el-table",{attrs:{data:e.businessSmallTypeData,border:"",stripe:"","header-cell-style":e.tableHeader},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.businessSmallTypeColumns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,label:e.title,"min-width":e.width,align:e.align}})})],2)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary"},on:{click:e.defalutMerge}},[e._v("设置缺省业务小类")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.merge}},[e._v("合并")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveMerge}},[e._v("保存")])],1)])],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.mergeInputNameDialogVisible,width:"20%"},on:{"update:visible":function(t){e.mergeInputNameDialogVisible=t}}},[a("div",[a("el-form",{attrs:{size:"small","label-width":"60px"}},[a("el-form-item",{attrs:{label:"请命名"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-circle-check-outline"},on:{click:function(t){e.mergeInputNameDialogVisible=!1}},slot:"append"})],1)],1)],1)],1)])],1)},staticRenderFns:[]};var u=a("VU/8")(s,c,!1,function(e){a("ucYm")},"data-v-41e31b6f",null);t.default=u.exports}});