webpackJsonp([16],{"/d+O":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"index",components:{BaseTable:function(){return t.e(80).then(t.bind(null,"ss0d"))}},data:function(){return{currentPage:1,pageSize:5,agency:{companyCode:"",policyHolder:"",protocolCode:"",salesMan:"",isIncludeSub:"y",sort:[],submitTimeStart:"",submitTimeEnd:"",status:[]},options:[{value:"level",label:"级别",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"firstSubmit",label:"第一次提交时间",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"company",label:"机构",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]}],columns:[{prop:"agencyNo",width:200,label:"代理协议号"},{prop:"agent",width:180,label:"代理人名称"},{prop:"ownOrg",width:260,label:"归属机构"},{prop:"policyHolder",width:120,label:"投保人"},{prop:"createTime",width:120,label:"流入时间"},{prop:"level",width:120,label:"级别"},{prop:"status",width:130,label:"申报状态"},{prop:"approval",width:120,label:"处理人"},{prop:"submitter",width:120,label:"提交人"},{prop:"firstTime",width:180,label:"第一次提交时间"},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"查看",event:"detail"}]}],approvalData:[{agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"待处理",statusType:"",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100002",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"待处理",statusType:"",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100003",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"中级",status:"正在处理",statusType:"danger",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100004",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"中级",status:"已处理未流转",statusType:"warning",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100005",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"已处理流转",statusType:"info",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100006",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"已处理完毕",statusType:"success",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"}]}},computed:{curApprovalData:function(){var e=[],a=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;t=t>this.approvalData.length?this.approvalData.length:t;for(var l=a;l<t;++l)e.push(this.approvalData[l]);return e}},methods:{resetForm:function(){this.$refs.agencyForm.resetFields(),this.agency.status=[]},query:function(){this.currentPage=1},dataChange:function(e,a){this.pageSize=e,this.currentPage=a},detail:function(){this.$router.push({path:"/admin/agency/query/detail"})}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("el-form",{ref:"agencyForm",attrs:{"label-width":"120px",inline:!0,model:e.agency}},[t("el-form-item",{attrs:{label:"机构代码:",prop:"companyCode"}},[t("el-input",{model:{value:e.agency.companyCode,callback:function(a){e.$set(e.agency,"companyCode",a)},expression:"agency.companyCode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投保人:",prop:"policyHolder"}},[t("el-input",{model:{value:e.agency.policyHolder,callback:function(a){e.$set(e.agency,"policyHolder",a)},expression:"agency.policyHolder"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"协议号:",prop:"protocolCode"}},[t("el-input",{model:{value:e.agency.protocolCode,callback:function(a){e.$set(e.agency,"protocolCode",a)},expression:"agency.protocolCode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"归属业务员:",prop:"salesMan"}},[t("el-input",{model:{value:e.agency.salesMan,callback:function(a){e.$set(e.agency,"salesMan",a)},expression:"agency.salesMan"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否包含下级:",prop:"isIncludeSub"}},[t("el-select",{model:{value:e.agency.isIncludeSub,callback:function(a){e.$set(e.agency,"isIncludeSub",a)},expression:"agency.isIncludeSub"}},[t("el-option",{attrs:{label:"是",value:"y"}}),e._v(" "),t("el-option",{attrs:{label:"否",value:"n"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[t("el-cascader",{attrs:{"expand-trigger":"hover",options:e.options},model:{value:e.agency.sort,callback:function(a){e.$set(e.agency,"sort",a)},expression:"agency.sort"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"提交时间:",prop:"submitTime"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.agency.submitTimeStart,callback:function(a){e.$set(e.agency,"submitTimeStart",a)},expression:"agency.submitTimeStart"}})],1),e._v(" "),t("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.agency.submitTimeEnd,callback:function(a){e.$set(e.agency,"submitTimeEnd",a)},expression:"agency.submitTimeEnd"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[t("el-checkbox-group",{model:{value:e.agency.status,callback:function(a){e.$set(e.agency,"status",a)},expression:"agency.status"}},[t("el-checkbox",{attrs:{label:"待处理",name:"1"}}),e._v(" "),t("el-checkbox",{attrs:{label:"正在处理",name:"2"}}),e._v(" "),t("el-checkbox",{attrs:{label:"已处理未流转",name:"3"}}),e._v(" "),t("el-checkbox",{attrs:{label:"已处理流转",name:"4"}}),e._v(" "),t("el-checkbox",{attrs:{label:"已处理完毕",name:"5"}})],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.curApprovalData,pagination:!0,total:e.approvalData.length,rowKey:"agencyNo"},on:{detail:e.detail,dataChange:e.dataChange}})],1)])])},staticRenderFns:[]};var s=t("VU/8")(l,o,!1,function(e){t("7yRs")},"data-v-7b644780",null);a.default=s.exports},"7yRs":function(e,a){}});