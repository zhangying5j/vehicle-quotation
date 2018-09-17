webpackJsonp([72],{eMAz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),r=i("NYxO"),l=i("Z4dx"),s={name:"Recommend",components:{BizSectorList:function(){return i.e(100).then(i.bind(null,"jpoa"))},BackButton:function(){return i.e(98).then(i.bind(null,"uOVF"))}},data:function(){return{rangeShow:!0,currentActive:0,columns:[],column1:[{prop:"no",title:"业务小类序号",width:120,headerAlign:"center",align:"center"}],column2:[{prop:"recommendAutoCoe",title:"推荐自主折扣系数",width:150,headerAlign:"center",align:"center"},{prop:"recommendMarketRate",title:"推荐手续费率(%)",width:140,headerAlign:"center",align:"center"},{prop:"totalPremium",title:"总保费(最新自主系数) (万元)",width:190,headerAlign:"center",align:"center"},{prop:"premiumAccount",title:"保费占比(%)",width:100,headerAlign:"center",align:"center"},{prop:"uLossRatio",title:"终极赔付率(%)",width:120,headerAlign:"center",align:"center"},{prop:"uLossRatioROB",title:"终极赔付率风险等级分类(%)",width:220,headerAlign:"center",align:"center"},{prop:"estimateCostRate",title:"预估经营成本率(%)",width:140,headerAlign:"center",align:"center"},{prop:"historyAutoCoe",title:"历史自主系数",width:120,headerAlign:"center",align:"center"},{prop:"historyMarketRate",title:"历史市场费用率(%)",width:140,headerAlign:"center",align:"center"},{prop:"historyFullRate",title:"历史满期赔付率(%)",width:140,headerAlign:"center",align:"center"},{prop:"historyLossRate",title:"历史出单终极赔付率(%)",width:170,headerAlign:"center",align:"center"}],dimensionColumns:[{prop:"no",title:"序号",width:50,align:"center"},{prop:"tag",title:"标签",width:200,align:"center"},{prop:"range",title:"标签范围",width:128,align:"center"},{prop:"down",title:"从()",width:128,align:"center"},{prop:"up",title:"至(不含)",width:128,align:"center"},{prop:"a",title:"满期赔付率（%）",width:140,align:"center"},{prop:"b",title:"合并终极赔付率（%）",width:160,align:"center"},{prop:"c",title:"保费占比（%）",width:120,align:"center"}],bizClassList:[],currentSector:"",dimensionList:[],dimensionDetail:[],dimensionDialogVisible:!1}},created:function(){var t=this;this.$store.dispatch("initPriceSteps"),Object(l.f)(this.param).then(function(e){t.$store.commit("SET_SECTORS",e.data.sectorList),t.columns=[],t.columns=t.columns.concat(t.column1),t.columns=t.columns.concat(e.data.sectorList[0].cols),t.columns=t.columns.concat(t.column2),t.bizClassList=e.data.sectorList[0].bizClassList,t.currentSector=e.data.sectorList[0].id})},computed:a()({},Object(r.d)({sectors:function(t){return t.individual.sectors},param:function(t){return t.individual.param},tableHeader:function(t){return t.app.tableHeader}})),methods:{customDimension:function(){this.$router.push({path:"/admin/individual/declare/custom"})},confirmBiz:function(){this.$store.dispatch("recommendSteps"),this.$router.push({path:"/admin/individual/declare/config"})},getClassBySector:function(t){this.currentSector=t;var e=this.sectors.findIndex(function(e){return e.id===t});this.columns=[],this.columns=this.columns.concat(this.column1),this.columns=this.columns.concat(this.sectors[e].cols),this.columns=this.columns.concat(this.column2),this.bizClassList=this.sectors[e].bizClassList},sectorDimension:function(){var t=this;Object(l.b)("").then(function(e){t.dimensionList=e.data.dimensionList,t.dimensionDetail=e.data.dimensionList[0].detail,t.dimensionDialogVisible=!0})},queryDimension:function(t,e){this.currentActive=e;var i=this.dimensionList.findIndex(function(e){return e.code===t});this.rangeShow=this.dimensionList[i].rangeShow,this.dimensionDetail=this.dimensionList[i].detail}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"biz-content"},[i("biz-sector-list",{attrs:{title:"选择业务板块",sectors:t.sectors},on:{sectorClick:t.getClassBySector}}),t._v(" "),i("div",{staticClass:"data"},[i("div",{staticClass:"title"},[i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.sectorDimension}},[t._v("查看维度切分方式")])],1)]),t._v(" "),i("div",{staticClass:"table"},[i("el-table",{attrs:{data:t.bizClassList,"row-key":"no",stripe:"","header-cell-style":t.tableHeader}},t._l(t.columns,function(t){return i("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.title,"min-width":t.width,align:t.align}})}))],1)]),t._v(" "),i("div",{staticClass:"option"},[i("back-button",{attrs:{plain:""}},[t._v("上一步")]),t._v(" "),i("back-button",{attrs:{plain:"",type:"next"},on:{next:t.customDimension}},[t._v("不接受智能推荐，自定义维度")]),t._v(" "),i("back-button",{attrs:{plain:"",type:"next"},on:{next:t.confirmBiz}},[t._v("接受智能推荐，提交")])],1),t._v(" "),i("el-dialog",{attrs:{title:"维度切分方式",visible:t.dimensionDialogVisible,width:"84%"},on:{"update:visible":function(e){t.dimensionDialogVisible=e}}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple dimension-dialog"},[i("div",{staticClass:"dimension"},t._l(t.dimensionList,function(e){return i("div",{key:e.code,class:t.currentActive===e.id?"item el-icon-circle-check active":"item",on:{click:function(i){t.queryDimension(e.code,e.id)}}},[i("span",[t._v(t._s(e.name))])])}))])]),t._v(" "),i("el-col",{attrs:{span:18}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-table",{attrs:{data:t.dimensionDetail,stripe:"","header-cell-style":t.tableHeader,height:"400px"}},[i("el-table-column",{attrs:{"header-align":"center",prop:"no",label:"序号","min-width":"50",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{"header-align":"center",prop:"tag",label:"标签","min-width":"200",align:"center"}}),t._v(" "),t.rangeShow?i("el-table-column",{attrs:{"header-align":"center",prop:"range",label:"标签范围","min-width":"250",align:"center"}}):t._e(),t._v(" "),t.rangeShow?t._e():i("el-table-column",{attrs:{"header-align":"center",prop:"down",label:"从()","min-width":"125",align:"center"}}),t._v(" "),t.rangeShow?t._e():i("el-table-column",{attrs:{"header-align":"center",prop:"up",label:"至(不含)","min-width":"125",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{"header-align":"center",prop:"a",label:"满期赔付率（%）","min-width":"140",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{"header-align":"center",prop:"b",label:"合并终极赔付率（%）","min-width":"160",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{"header-align":"center",prop:"c",label:"保费占比（%）","min-width":"120",align:"center"}})],1)],1)])],1),t._v(" "),i("div",{staticStyle:{clear:"both"}})],1)],1)},staticRenderFns:[]};var c=i("VU/8")(s,o,!1,function(t){i("njxr")},"data-v-0fe96216",null);e.default=c.exports},njxr:function(t,e){}});