webpackJsonp([57],{AFrU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"index",components:{BaseTable:function(){return a.e(96).then(a.bind(null,"ss0d"))}},data:function(){return{currentPage:1,pageSize:5,bizShow:!1,sectorList:[{code:"1",name:"家用-新车"},{code:"2",name:"家用-旧车"},{code:"3",name:"企业非营业客车"},{code:"4",name:"企业非营业货车"},{code:"5",name:"机关非营业客车"},{code:"6",name:"机关非营业货车"},{code:"7",name:"机关非营业特种车"},{code:"8",name:"机动非营业客车"},{code:"9",name:"营业出租客车"},{code:"10",name:"营业出租货车"},{code:"11",name:"营业城市公交"},{code:"12",name:"营业旅游客车"},{code:"13",name:"营业公路货车"},{code:"14",name:"营业公路挂车"}],agency:{companyCode:"",policyHolder:"",protocolCode:"",salesMan:"",isIncludeSub:"y",sort:[],submitTimeStart:"",submitTimeEnd:"",status:[],type:"",bizSector:""},options:[{value:"level",label:"级别",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"firstSubmit",label:"第一次提交时间",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"company",label:"机构",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]}],columns:[],columns1:[{prop:"agencyNo",width:200,label:"业务板块编号"},{prop:"agent",width:180,label:"业务板块名称"},{prop:"ownOrg",width:260,label:"归属机构"},{prop:"policyHolder",width:120,label:"投保人"},{prop:"createTime",width:120,label:"流入时间"},{prop:"level",width:120,label:"级别"},{prop:"status",width:130,label:"申报状态"},{prop:"approval",width:120,label:"处理人"},{prop:"submitter",width:120,label:"提交人"},{prop:"firstTime",width:180,label:"第一次提交时间"},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"查看",event:"detail"}]}],columns2:[{prop:"agencyNo",width:200,label:"业务来源编号"},{prop:"agent",width:180,label:"业务来源名称"},{prop:"ownOrg",width:260,label:"归属机构"},{prop:"policyHolder",width:120,label:"投保人"},{prop:"createTime",width:120,label:"流入时间"},{prop:"level",width:120,label:"级别"},{prop:"status",width:130,label:"申报状态"},{prop:"approval",width:120,label:"处理人"},{prop:"submitter",width:120,label:"提交人"},{prop:"firstTime",width:180,label:"第一次提交时间"},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"查看",event:"detail"}]}],approvalData:[],approvalData1:[{agencyNo:"50000100001",agent:"家用-新车",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"待处理",statusType:"",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100002",agent:"家用-旧车",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"待处理",statusType:"",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100003",agent:"企业非营业客车",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"中级",status:"正在处理",statusType:"danger",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100004",agent:"企业非营业货车",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"中级",status:"已处理未流转",statusType:"warning",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100005",agent:"机关非营业客车",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"已处理流转",statusType:"info",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100006",agent:"机关非营业货车",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"已处理完毕",statusType:"success",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"}],approvalData2:[{agencyNo:"50000100001",agent:"个人代理",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"待处理",statusType:"",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100002",agent:"专业代理",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"待处理",statusType:"",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100003",agent:"兼业代理",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"中级",status:"正在处理",statusType:"danger",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100004",agent:"个人代理",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"中级",status:"已处理未流转",statusType:"warning",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100005",agent:"专业代理",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"已处理流转",statusType:"info",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"},{agencyNo:"50000100006",agent:"兼业代理",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",status:"已处理完毕",statusType:"success",approval:"王伟",submitter:"王伟",firstTime:"2018-01-15 10:30:00"}]}},computed:{curApprovalData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.approvalData.length?this.approvalData.length:a;for(var l=t;l<a;++l)e.push(this.approvalData[l]);return e}},methods:{resetForm:function(){this.$refs.agencyForm.resetFields(),this.agency.status=[]},query:function(){this.currentPage=1},dataChange:function(e,t){this.pageSize=e,this.currentPage=t},detail:function(){this.$router.push({path:"/admin/source/query/detail"})},change:function(e){this.currentPage=1,1===e?(this.bizShow=!0,this.columns=this.columns1,this.approvalData=this.approvalData1):2===e?(this.bizShow=!1,this.columns=this.columns2,this.approvalData=this.approvalData2):(this.bizShow=!1,this.columns=[],this.approvalData=[])}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{attrs:{"label-width":"120px",inline:!0,model:e.agency}},[a("el-row",[a("el-col",{attrs:{span:8,offset:8}},[a("el-form-item",{attrs:{prop:"type"}},[a("el-radio-group",{on:{change:e.change},model:{value:e.agency.type,callback:function(t){e.$set(e.agency,"type",t)},expression:"agency.type"}},[a("el-radio",{staticStyle:{width:"110px"},attrs:{label:1}},[e._v("单一板块配费")]),e._v(" "),a("el-radio",{staticStyle:{width:"110px"},attrs:{label:2}},[e._v("单一来源配费")])],1)],1)],1)],1)],1),e._v(" "),a("el-form",{attrs:{"label-width":"120px",inline:!0,model:e.agency}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.bizShow,expression:"bizShow"}],attrs:{label:"业务板块:",prop:"bizSector"}},[a("el-select",{model:{value:e.agency.bizSector,callback:function(t){e.$set(e.agency,"bizSector",t)},expression:"agency.bizSector"}},e._l(e.sectorList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"机构代码:",prop:"companyCode"}},[a("el-input",{model:{value:e.agency.companyCode,callback:function(t){e.$set(e.agency,"companyCode",t)},expression:"agency.companyCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投保人:",prop:"policyHolder"}},[a("el-input",{model:{value:e.agency.policyHolder,callback:function(t){e.$set(e.agency,"policyHolder",t)},expression:"agency.policyHolder"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"协议号:",prop:"protocolCode"}},[a("el-input",{model:{value:e.agency.protocolCode,callback:function(t){e.$set(e.agency,"protocolCode",t)},expression:"agency.protocolCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"归属业务员:",prop:"salesMan"}},[a("el-input",{model:{value:e.agency.salesMan,callback:function(t){e.$set(e.agency,"salesMan",t)},expression:"agency.salesMan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否包含下级:",prop:"isIncludeSub"}},[a("el-select",{model:{value:e.agency.isIncludeSub,callback:function(t){e.$set(e.agency,"isIncludeSub",t)},expression:"agency.isIncludeSub"}},[a("el-option",{attrs:{label:"是",value:"y"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"n"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"提交时间:",prop:"submitTime"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.agency.submitTimeStart,callback:function(t){e.$set(e.agency,"submitTimeStart",t)},expression:"agency.submitTimeStart"}})],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.agency.submitTimeEnd,callback:function(t){e.$set(e.agency,"submitTimeEnd",t)},expression:"agency.submitTimeEnd"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[a("el-cascader",{attrs:{"expand-trigger":"hover",options:e.options},model:{value:e.agency.sort,callback:function(t){e.$set(e.agency,"sort",t)},expression:"agency.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-checkbox-group",{model:{value:e.agency.status,callback:function(t){e.$set(e.agency,"status",t)},expression:"agency.status"}},[a("el-checkbox",{attrs:{label:"待处理",name:"1"}}),e._v(" "),a("el-checkbox",{attrs:{label:"正在处理",name:"2"}}),e._v(" "),a("el-checkbox",{attrs:{label:"已处理未流转",name:"3"}}),e._v(" "),a("el-checkbox",{attrs:{label:"已处理流转",name:"4"}}),e._v(" "),a("el-checkbox",{attrs:{label:"已处理完毕",name:"5"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.curApprovalData,pagination:!0,total:e.approvalData.length,rowKey:"agencyNo"},on:{detail:e.detail,dataChange:e.dataChange}})],1)])])},staticRenderFns:[]};var s=a("VU/8")(l,o,!1,function(e){a("tpS/")},"data-v-41fe0dfb",null);t.default=s.exports},"tpS/":function(e,t){}});