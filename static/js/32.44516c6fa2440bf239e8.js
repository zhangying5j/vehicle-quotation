webpackJsonp([32],{Jn5e:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("Dd8w"),r=t.n(l),n=t("NYxO"),o={name:"IndividualQuery",components:{CommunalPagination:function(){return t.e(100).then(t.bind(null,"jH2g"))}},data:function(){return{lifeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",status:[]},configCostModelList:[{configCostModelCode:"001",configCostModelName:"个车模式"},{configCostModelCode:"002",configCostModelName:"车队模式"}],orgList:[{orgCode:"000000",orgName:"北京分公司"},{orgCode:"000001",orgName:"天津分公司"},{orgCode:"000002",orgName:"上海分公司"}],channelList:[{channelCode:"001",channelName:"保险公司车险"},{channelCode:"002",channelName:"银行邮政代理"},{channelCode:"003",channelName:"电话车险"},{channelCode:"004",channelName:"网销车险"},{channelCode:"005",channelName:"4S店保险中心车险"},{channelCode:"006",channelName:"维修店专业车险"}],statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"org",width:200,label:"编制机构",align:"center"},{prop:"channel",width:250,label:"渠道",align:"center"},{prop:"version",width:250,label:"版本号",align:"center"},{prop:"declarer",width:150,label:"申报人",align:"center"},{prop:"createTime",width:200,label:"申报时间",align:"center"},{prop:"status",width:100,label:"申报状态",align:"center"},{prop:"latestApproval",width:120,label:"最新审批人",align:"center"}],data:[{version:"0200120180701001",org:"北京分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"刘芳",createTime:"2018/07/01",status:"待审批",latestApproval:"张三"},{version:"0200220180501002",org:"天津分公司",channel:"4S店保险中心车险",configCostModel:"车队模式",declarer:"张强",createTime:"2018/05/01",status:"待申报",latestApproval:"张三"},{version:"0200320180301003",org:"上海分公司",channel:"维修店专业车险",configCostModel:"个车模式",declarer:"李菲",createTime:"2018/03/01",status:"待申报",latestApproval:"张三"},{version:"0200120170701004",org:"北京分公司",channel:"电话车险",configCostModel:"个车模式",declarer:"刘芳",createTime:"2017/07/01",status:"待修改",latestApproval:"张三"},{version:"0200220170501005",org:"天津分公司",channel:"银行邮政代理",configCostModel:"车队模式",declarer:"张强",createTime:"2017/05/01",status:"需要重新申报",latestApproval:"张三"},{version:"0200320170301006",org:"上海分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"李菲",createTime:"2017/03/01",status:"已审批",latestApproval:"张三"},{version:"0200120160701007",org:"北京分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"刘芳",createTime:"2016/07/01",status:"待审批",latestApproval:"张三"},{version:"0200220160501008",org:"天津分公司",channel:"保险公司车险",configCostModel:"车队模式",declarer:"张强",createTime:"2016/05/01",status:"待申报",latestApproval:"张三"},{version:"0200320160301009",org:"上海分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"李菲",createTime:"2016/03/01",status:"已审批",latestApproval:"张三"}],currentPage:1,pageSize:2}},computed:r()({currentData:function(){var e=[],a=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;t=t<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var l=a;l<t;++l)e.push(this.data[l]);return e}},Object(n.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{search:function(e,a){this.currentPage=e,this.pageSize=a,console.log(e)},modify:function(e){},detail:function(e){this.$router.push({path:"/admin/individual/query/detail"})},resetForm:function(){this.$refs.lifeTableSearchForm.resetFields()}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableSearch}},[t("el-form-item",{attrs:{label:"机构代码:",prop:"orgCode"}},[t("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableSearch.orgCode,callback:function(a){e.$set(e.lifeTableSearch,"orgCode",a)},expression:"lifeTableSearch.orgCode"}},e._l(e.orgList,function(e){return t("el-option",{key:e.orgCode,attrs:{label:e.orgName,value:e.orgCode}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"报价策略渠道:",prop:"channel"}},[t("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:e.lifeTableSearch.channel,callback:function(a){e.$set(e.lifeTableSearch,"channel",a)},expression:"lifeTableSearch.channel"}},e._l(e.channelList,function(e){return t("el-option",{key:e.channelCode,attrs:{label:e.channelName,value:e.channelCode}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[t("el-input",{model:{value:e.lifeTableSearch.version,callback:function(a){e.$set(e.lifeTableSearch,"version",a)},expression:"lifeTableSearch.version"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"操作员:",prop:"approval"}},[t("el-input",{model:{value:e.lifeTableSearch.approval,callback:function(a){e.$set(e.lifeTableSearch,"approval",a)},expression:"lifeTableSearch.approval"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[t("el-checkbox-group",{model:{value:e.lifeTableSearch.status,callback:function(a){e.$set(e.lifeTableSearch,"status",a)},expression:"lifeTableSearch.status"}},e._l(e.statusList,function(a){return t("el-checkbox",{key:a.statusCode,attrs:{label:a.statusCode,name:"status"}},[e._v(e._s(a.statusName))])}))],1)],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}),e._v(" "),t("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.detail(a.row.version)}}},[e._v("查看")])]}}])})],2)],1),e._v(" "),t("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])},staticRenderFns:[]};var i=t("VU/8")(o,s,!1,function(e){t("XbeP")},"data-v-7a0a660c",null);a.default=i.exports},XbeP:function(e,a){}});