webpackJsonp([83],{QBZp:function(e,t){},xZFZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),l=a.n(r),s=a("NYxO"),n=a("Z4dx"),i={name:"index",components:{CommunalPagination:function(){return a.e(101).then(a.bind(null,"jH2g"))}},created:function(){var e=this;Object(n.c)().then(function(t){e.initData=t.data})},data:function(){return{initData:{},lifeTableApprove:{orgCode:"",status:""},statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"version",width:250,label:"版本号",align:"center"},{prop:"org",width:200,label:"编制机构",align:"center"},{prop:"channel",width:250,label:"渠道",align:"center"},{prop:"declarer",width:150,label:"申报人",align:"center"},{prop:"createTime",width:200,label:"申报时间",align:"center"},{prop:"status",width:100,label:"申报状态",align:"center"},{prop:"latestApproval",width:120,label:"最新审批人",align:"center"}],data:[{version:"0200120180701001",org:"北京分公司",channel:"网销车险",declarer:"刘芳",createTime:"2018/07/01",status:"已审批",latestApproval:"张三"},{version:"0200220180501002",org:"天津分公司",channel:"4S店保险中心车险",declarer:"张强",createTime:"2018/05/01",status:"待审批",latestApproval:"张三"},{version:"0200320180301003",org:"上海分公司",channel:"维修店专业车险",declarer:"李菲",createTime:"2018/03/01",status:"待申报",latestApproval:"张三"},{version:"0200120170701004",org:"北京分公司",channel:"电话车险",declarer:"刘芳",createTime:"2017/07/01",status:"待修改",latestApproval:"张三"},{version:"0200220170501005",org:"天津分公司",channel:"银行邮政代理",declarer:"张强",createTime:"2017/05/01",status:"需要重新申报",latestApproval:"张三"},{version:"0200320170301006",org:"上海分公司",channel:"网销车险",declarer:"李菲",createTime:"2017/03/01",status:"已审批",latestApproval:"张三"},{version:"0200120160701007",org:"北京分公司",channel:"网销车险",declarer:"刘芳",createTime:"2016/07/01",status:"待审批",latestApproval:"张三"},{version:"0200220160501008",org:"天津分公司",channel:"保险公司车险",declarer:"张强",createTime:"2016/05/01",status:"待申报",latestApproval:"张三"},{version:"0200320160301009",org:"上海分公司",channel:"网销车险",declarer:"李菲",createTime:"2016/03/01",status:"已审批",latestApproval:"张三"}],currentPage:1,pageSize:2}},computed:l()({currentData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var r=t;r<a;++r)e.push(this.data[r]);return e}},Object(s.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{search:function(e,t){this.currentPage=e,this.pageSize=t,console.log(e)},approval:function(e){this.$router.push({path:"/admin/individual/approval/detail"})},detail:function(e){this.$router.push({path:"/admin/individual/query/detail"})},query:function(){this.currentPage=1}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableForm",attrs:{"label-width":"100px",inline:!0,model:e.lifeTableApprove}},[a("el-form-item",{attrs:{label:"机构代码:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableApprove.orgCode,callback:function(t){e.$set(e.lifeTableApprove,"orgCode",t)},expression:"lifeTableApprove.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"全部"},model:{value:e.lifeTableApprove.status,callback:function(t){e.$set(e.lifeTableApprove,"status",t)},expression:"lifeTableApprove.status"}},e._l(e.statusList,function(e){return a("el-option",{key:e.statusCode,attrs:{label:e.statusName,value:e.statusCode}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(t){return["status"!==t.prop?a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}}):a("el-table-column",{key:t.prop,attrs:{"header-align":"center","min-width":t.width,label:t.label,align:t.align},scopedSlots:e._u([{key:"default",fn:function(t){return["已审批"===t.row.status?a("el-tag",{attrs:{type:"success"}},[e._v(e._s(t.row.status))]):"待审批"===t.row.status?a("el-tag",{attrs:{type:"warning"}},[e._v(e._s(t.row.status))]):a("el-tag",[e._v(e._s(t.row.status))])]}}])})]}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return["待审批"===t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.approval(t.row.version)}}},[e._v("审批")]):a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row)}}},[e._v("查看")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(e){a("QBZp")},"data-v-0083c7fe",null);t.default=c.exports}});