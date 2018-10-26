webpackJsonp([19],{Bqla:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"index",components:{QueryForm:function(){return a.e(104).then(a.bind(null,"mo6E"))},BaseTable:function(){return a.e(80).then(a.bind(null,"ss0d"))}},data:function(){return{config:{ownOrg:"",agent:"",protocolNo:"",ownSalesMan:"",isCharge:"",isIncludeSub:"",channel:"",source:"",declareFlag:[],type:"",bizSector:""},columns:[],columns1:[{prop:"agencyNo",width:200,label:"业务板块编号"},{prop:"agent",width:180,label:"业务板块名称"},{prop:"ownOrg",width:260,label:"归属机构"},{prop:"lastDeclarer",width:120,label:"最新费用申报人"},{prop:"lastEffectTime",width:160,label:"最新费用生效时间"},{prop:"status",width:120,label:"申报状态"},{prop:"lastApproval",width:120,label:"最新费用审批人"},{prop:"curManager",width:120,label:"当前处理人"},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"配费",event:"configFee"},{text:"撤回",event:"back"}]},{prop:"search",width:120,label:"轨迹查询",operation:!0,operations:[{text:"查询",event:"search"}]},{prop:"isMul",width:220,label:"配置多个归属业务员",isEdit:!0,type:"select",options:[{value:"yes",label:"是"},{value:"no",label:"否"}]}],columns2:[{prop:"agencyNo",width:200,label:"业务来源编号"},{prop:"agent",width:180,label:"业务来源名称"},{prop:"ownOrg",width:260,label:"归属机构"},{prop:"lastDeclarer",width:120,label:"最新费用申报人"},{prop:"lastEffectTime",width:160,label:"最新费用生效时间"},{prop:"status",width:120,label:"申报状态"},{prop:"lastApproval",width:120,label:"最新费用审批人"},{prop:"curManager",width:120,label:"当前处理人"},{prop:"isFee",width:120,label:"是否协议取费",operation:!0,operations:[{text:"是",event:"charge"}]},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"配费",event:"configFee"},{text:"撤回",event:"back"}]},{prop:"search",width:120,label:"轨迹查询",operation:!0,operations:[{text:"查询",event:"search"}]},{prop:"isMul",width:220,label:"配置多个归属业务员",isEdit:!0,type:"select",options:[{value:"yes",label:"是"},{value:"no",label:"否"}]}],configData:[],configData1:[{agencyNo:"50000100001",agent:"家用-新车",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"未申报",statusType:"",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100002",agent:"家用-旧车",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"已审批",statusType:"success",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100003",agent:"企业非营业客车",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"待审批",statusType:"warning",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100004",agent:"企业非营业货车",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"未申报",statusType:"",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100005",agent:"机关非营业客车",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"已审批",statusType:"success",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100006",agent:"机关非营业货车",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"待审批",statusType:"warning",lastApproval:"王伟",curManager:"王伟",isMul:"yes"}],configData2:[{agencyNo:"50000100001",agent:"个人代理",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"未申报",statusType:"",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100002",agent:"专业代理",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"已审批",statusType:"success",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100003",agent:"兼业代理",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"待审批",statusType:"warning",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100004",agent:"个人代理",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"未申报",statusType:"",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100005",agent:"专业代理",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"已审批",statusType:"success",lastApproval:"王伟",curManager:"王伟",isMul:"yes"},{agencyNo:"50000100006",agent:"兼业代理",ownOrg:"50000",lastDeclarer:"张桓",lastEffectTime:"2018/01/01",status:"待审批",statusType:"warning",lastApproval:"王伟",curManager:"王伟",isMul:"yes"}],searchCols:[{prop:"no",width:120,label:"序号"},{prop:"agencyNo",width:130,label:"协议号"},{prop:"agent",width:180,label:"代理人名称"},{prop:"ownOrg",width:120,label:"归属机构"},{prop:"startTime",width:120,label:"起始日期"},{prop:"endTime",width:120,label:"终止日期"},{prop:"isEffect",width:120,label:"是否生效"},{prop:"isFee",width:120,label:"是否协议取费"},{prop:"updateTime",width:120,label:"更新日期"},{prop:"updatePerson",width:120,label:"更新人员名称"},{prop:"operation",width:120,label:"操作",operation:!0,operations:[{text:"查看",event:"look"}]}],searchData:[{no:"1",agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"50000",startTime:"2018/01/01",endTime:"2018/01/01",isEffect:"是",isFee:"否",updateTime:"2018/01/01",updatePerson:"王伟"},{no:"2",agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"50000",startTime:"2018/01/01",endTime:"2018/01/01",isEffect:"是",isFee:"否",updateTime:"2018/01/01",updatePerson:"王伟"},{no:"3",agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"50000",startTime:"2018/01/01",endTime:"2018/01/01",isEffect:"是",isFee:"否",updateTime:"2018/01/01",updatePerson:"王伟"},{no:"4",agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"50000",startTime:"2018/01/01",endTime:"2018/01/01",isEffect:"是",isFee:"否",updateTime:"2018/01/01",updatePerson:"王伟"},{no:"5",agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"50000",startTime:"2018/01/01",endTime:"2018/01/01",isEffect:"是",isFee:"否",updateTime:"2018/01/01",updatePerson:"王伟"}],currentPage:1,pageSize:5,agencyNo:"",isCharge:"y",isChargeVisible:!1,configFeeVal:"",configFeeVisible:!1,backVisible:!1,searchDataVisible:!1}},computed:{curConfigData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.configData.length?this.configData.length:a;for(var i=t;i<a;++i)e.push(this.configData[i]);return e}},methods:{resetForm:function(){this.$refs.configForm.reset()},query:function(){this.currentPage=1},charge:function(e){this.agencyNo=e,this.isChargeVisible=!0},configFee:function(){this.configFeeVisible=!0},configFeeDetail:function(){console.log("back"),"same"===this.configFeeVal?this.$router.push({path:"/admin/source/config/sameFee"}):"dis"===this.configFeeVal&&this.$router.push({path:"/admin/source/config/disFee"})},back:function(e){this.backVisible=!0},search:function(e){this.searchDataVisible=!0},dataChange:function(e,t){this.pageSize=e,this.currentPage=t},look:function(e){console.log("look",e)},change:function(){this.currentPage=1,1===this.config.type?(this.columns=this.columns1,this.configData=this.configData1):2===this.config.type?(this.columns=this.columns2,this.configData=this.configData2):(this.columns=[],this.configData=[])}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"configForm",attrs:{config:e.config},on:{change:e.change}})],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.curConfigData,pagination:!0,total:e.configData.length,rowKey:"agencyNo"},on:{charge:e.charge,configFee:e.configFee,back:e.back,search:e.search,dataChange:e.dataChange}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"代理协议取费设置",visible:e.isChargeVisible,width:"40%"},on:{"update:visible":function(t){e.isChargeVisible=t}}},[a("div",[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"协议号",prop:"agencyNo"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.agencyNo,callback:function(t){e.agencyNo=t},expression:"agencyNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否从协议取费:",prop:"isCharge"}},[a("el-select",{model:{value:e.isCharge,callback:function(t){e.isCharge=t},expression:"isCharge"}},[a("el-option",{attrs:{label:"是",value:"y"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"n"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.isChargeVisible=!1}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.isChargeVisible=!1}}},[e._v("关闭")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"配费模式",visible:e.configFeeVisible,width:"40%"},on:{"update:visible":function(t){e.configFeeVisible=t}}},[a("div",[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"请选择:",prop:"configFeeVal"}},[a("el-select",{model:{value:e.configFeeVal,callback:function(t){e.configFeeVal=t},expression:"configFeeVal"}},[a("el-option",{attrs:{label:"统一配费",value:"same"}}),e._v(" "),a("el-option",{attrs:{label:"差异配费",value:"dis"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.configFeeDetail}},[e._v("进入")])],1)],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.backVisible,width:"20%"},on:{"update:visible":function(t){e.backVisible=t}}},[a("div",[e._v("\n      确定要撤回吗？\n    ")]),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.backVisible=!1}}},[e._v("确定")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.backVisible=!1}}},[e._v("取消")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"协议配费轨迹信息查询",visible:e.searchDataVisible,width:"60%"},on:{"update:visible":function(t){e.searchDataVisible=t}}},[a("div",[a("base-table",{attrs:{columns:e.searchCols,data:e.searchData,rowKey:"no"},on:{look:e.look}})],1)])],1)},staticRenderFns:[]};var l=a("VU/8")(i,s,!1,function(e){a("OlzR")},"data-v-7824a634",null);t.default=l.exports},OlzR:function(e,t){}});