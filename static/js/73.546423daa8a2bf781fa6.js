webpackJsonp([73],{"36Iv":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),u=s("NYxO"),a={name:"BudgetApproval",components:{QueryForm:function(){return s.e(81).then(s.bind(null,"Hb8j"))},BaseTable:function(){return s.e(79).then(s.bind(null,"ss0d"))}},data:function(){return{currentPage:1,pageSize:10,budget:{formulateInstitution:"",type:"",channel:"",timeSlot:"",version:"",isUpToDate:"",bore:"",productType:""},columns:[{prop:"subInstitution",label:"预算制定机构",width:140},{prop:"type",label:"预算类型",width:100},{prop:"channel",label:"预算渠道",width:100},{prop:"timeSlot",label:"预算时间段",width:100},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"version",label:"版本",width:170},{prop:"submitUser",label:"提交人",width:100},{prop:"submitDateTime",label:"提交时间",width:130},{prop:"status",label:"状态",width:100,status:!0},{prop:"operation",label:"操作",width:100,operation:!0,operations:[{text:"审批",event:"approval"}]}],data:[{subInstitution:"北京分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"10002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"山东省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"20002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"江苏省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"30002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"黑龙江省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"40002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"重庆市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"50002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"河南省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"60002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"上海市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"70002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"广东省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"80002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"深圳市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"90002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"天津市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"100002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"青岛分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"110002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"辽宁省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"120002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"河北省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"130002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"海南省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"140002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"广西分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"150002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"湖南省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"160002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"浙江省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"170002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"贵州省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"180002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"四川省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"190002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"青海省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"200002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"云南省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"210002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"陕西省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"220002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"湖北省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"230002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"吉林省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"240002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"新疆分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"250002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"宁波市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"260002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"山西省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"270002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"大连市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"280002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"甘肃省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"290002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"安徽省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"300002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"江西省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"310002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"福建省分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"320002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"内蒙古分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"330002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"厦门市分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"340002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"宁夏自治区分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"350002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"},{subInstitution:"西藏自治区分公司",type:"年度预算",channel:"传统渠道",timeSlot:"2018",bore:"保单年口径",productType:"全部",version:"360002018y01150830",submitUser:"张翰",submitDateTime:"2017-12-27 12:37",status:"待审批",statusType:"warning"}]}},computed:n()({},Object(u.c)({tableHeader:function(t){return t.app.tableHeader}}),{currentData:function(){var t=[],e=(this.currentPage-1)*this.pageSize,s=this.currentPage*this.pageSize;s=s<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var i=e;i<s;++i)t.push(this.data[i]);return t},timeSlots:function(){var t=[],e=this.budget.type+"";return"month"===e?(t.push({value:"201801",label:"2018第一季度"}),t.push({value:"201802",label:"2018第二季度"}),t.push({value:"201803",label:"2018第三季度"}),t.push({value:"201804",label:"2018第四季度"}),this.resetTime("201801")):"year"===e&&(t.push({value:"2018",label:"2018"}),this.resetTime("2018")),t}}),methods:{query:function(){this.currentPage=1},resetForm:function(t){this.$refs[t].reset()},approval:function(t){this.$router.push({path:"/admin/budget/approval/"+t})},resetTime:function(t){this.budget.timeSlot=t},dataChange:function(t,e){this.pageSize=t,this.currentPage=e}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"form"},[s("query-form",{ref:"approvalForm",attrs:{budget:t.budget}},[s("el-form-item",{attrs:{label:"是否最新",prop:"isUpToDate"}},[s("el-select",{model:{value:t.budget.isUpToDate,callback:function(e){t.$set(t.budget,"isUpToDate",e)},expression:"budget.isUpToDate"}},[s("el-option",{attrs:{value:"1",label:"是"}}),t._v(" "),s("el-option",{attrs:{value:"0",label:"否"}})],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"option"},[s("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.resetForm("approvalForm")}}},[t._v("重置")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.query}},[t._v("查询")])],1),t._v(" "),s("div",{staticClass:"data"},[s("div",{staticClass:"table"},[s("base-table",{attrs:{columns:t.columns,data:t.currentData,pagination:!0,total:t.data.length,rowKey:"version"},on:{approval:t.approval,dataChange:t.dataChange}})],1)])])},staticRenderFns:[]},o=s("VU/8")(a,r,!1,null,null,null);e.default=o.exports}});