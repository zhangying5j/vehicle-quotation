webpackJsonp([28],{Jn5e:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),r=a.n(l),n=a("NYxO"),o=a("Z4dx"),s={name:"IndividualQuery",components:{CommunalPagination:function(){return a.e(100).then(a.bind(null,"jH2g"))}},created:function(){var e=this;Object(o.c)().then(function(t){e.initData=t.data})},data:function(){return{initData:{},lifeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",status:[]},configCostModelList:[{configCostModelCode:"001",configCostModelName:"个车模式"},{configCostModelCode:"002",configCostModelName:"车队模式"}],statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"org",width:200,label:"编制机构",align:"center"},{prop:"channel",width:250,label:"渠道",align:"center"},{prop:"version",width:250,label:"版本号",align:"center"},{prop:"declarer",width:150,label:"申报人",align:"center"},{prop:"createTime",width:200,label:"申报时间",align:"center"},{prop:"status",width:100,label:"申报状态",align:"center"},{prop:"latestApproval",width:120,label:"最新审批人",align:"center"}],data:[{version:"0200120180701001",org:"北京分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"刘芳",createTime:"2018/07/01",status:"待审批",latestApproval:"张三"},{version:"0200220180501002",org:"天津分公司",channel:"4S店保险中心车险",configCostModel:"车队模式",declarer:"张强",createTime:"2018/05/01",status:"待申报",latestApproval:"张三"},{version:"0200320180301003",org:"上海分公司",channel:"维修店专业车险",configCostModel:"个车模式",declarer:"李菲",createTime:"2018/03/01",status:"待申报",latestApproval:"张三"},{version:"0200120170701004",org:"北京分公司",channel:"电话车险",configCostModel:"个车模式",declarer:"刘芳",createTime:"2017/07/01",status:"待修改",latestApproval:"张三"},{version:"0200220170501005",org:"天津分公司",channel:"银行邮政代理",configCostModel:"车队模式",declarer:"张强",createTime:"2017/05/01",status:"需要重新申报",latestApproval:"张三"},{version:"0200320170301006",org:"上海分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"李菲",createTime:"2017/03/01",status:"已审批",latestApproval:"张三"},{version:"0200120160701007",org:"北京分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"刘芳",createTime:"2016/07/01",status:"待审批",latestApproval:"张三"},{version:"0200220160501008",org:"天津分公司",channel:"保险公司车险",configCostModel:"车队模式",declarer:"张强",createTime:"2016/05/01",status:"待申报",latestApproval:"张三"},{version:"0200320160301009",org:"上海分公司",channel:"网销车险",configCostModel:"个车模式",declarer:"李菲",createTime:"2016/03/01",status:"已审批",latestApproval:"张三"}],currentPage:1,pageSize:2}},computed:r()({currentData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var l=t;l<a;++l)e.push(this.data[l]);return e}},Object(n.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{search:function(e,t){this.currentPage=e,this.pageSize=t,console.log(e)},modify:function(e){},detail:function(e){this.$router.push({path:"/admin/individual/query/detail"})},resetForm:function(){this.$refs.lifeTableSearchForm.resetFields()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableSearch}},[a("el-form-item",{attrs:{label:"机构代码:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableSearch.orgCode,callback:function(t){e.$set(e.lifeTableSearch,"orgCode",t)},expression:"lifeTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"报价策略渠道:",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:e.lifeTableSearch.channel,callback:function(t){e.$set(e.lifeTableSearch,"channel",t)},expression:"lifeTableSearch.channel"}},e._l(e.initData.channelList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{model:{value:e.lifeTableSearch.version,callback:function(t){e.$set(e.lifeTableSearch,"version",t)},expression:"lifeTableSearch.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"操作员:",prop:"approval"}},[a("el-input",{model:{value:e.lifeTableSearch.approval,callback:function(t){e.$set(e.lifeTableSearch,"approval",t)},expression:"lifeTableSearch.approval"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-checkbox-group",{model:{value:e.lifeTableSearch.status,callback:function(t){e.$set(e.lifeTableSearch,"status",t)},expression:"lifeTableSearch.status"}},e._l(e.statusList,function(t){return a("el-checkbox",{key:t.statusCode,attrs:{label:t.statusCode,name:"status"}},[e._v(e._s(t.statusName))])}))],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row.version)}}},[e._v("查看")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])},staticRenderFns:[]};var c=a("VU/8")(s,i,!1,function(e){a("p+8/")},"data-v-a946faf4",null);t.default=c.exports},"p+8/":function(e,t){}});