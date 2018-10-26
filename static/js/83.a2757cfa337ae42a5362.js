webpackJsonp([83],{"36Iv":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),i=a.n(r),n=a("NYxO"),s={name:"BudgetApproval",components:{QueryForm:function(){return a.e(91).then(a.bind(null,"Hb8j"))},BaseTable:function(){return a.e(89).then(a.bind(null,"ss0d"))}},data:function(){return{currentPage:1,pageSize:10,budget:{formulateInstitution:"",type:"",channel:"",timeSlot:"",version:"",isUpToDate:"",bore:"",productType:""},rules:{formulateInstitution:[{required:!0,trigger:"change",message:"预算制定机构不能为空"}],type:[{required:!0,trigger:"change",message:"预算类型不能为空"}],channel:[{required:!0,trigger:"change",message:"预算渠道不能为空"}],timeSlot:[{required:!0,trigger:"change",message:"预算时间段不能为空"}]},columns:[{prop:"subInstitution",label:"预算制定机构",width:140},{prop:"type",label:"预算类型",width:100},{prop:"channel",label:"预算渠道",width:120},{prop:"timeSlot",label:"预算时间段",width:140},{prop:"bore",label:"预算口径",width:100},{prop:"productType",label:"业务分类",width:100},{prop:"version",label:"版本",width:170},{prop:"submitUser",label:"提交人",width:100},{prop:"submitDateTime",label:"提交时间",width:150},{prop:"status",label:"状态",width:100,status:!0},{prop:"operation",label:"操作",width:100,operation:!0,operations:[{text:"审批",event:"approval"}]}],data:[],dataShow:!1}},computed:i()({},Object(n.c)({tableHeader:function(t){return t.app.tableHeader},formData:function(t){return t.budget.formData},approveListData:function(t){return t.budget.approveListData}}),{currentData:function(){var t=[],e=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var r=e;r<a;++r)t.push(this.data[r]);return t},timeSlots:function(){var t=[],e=this.budget.type+"";return"month"===e?(t.push({value:"201801",label:"2018第一季度"}),t.push({value:"201802",label:"2018第二季度"}),t.push({value:"201803",label:"2018第三季度"}),t.push({value:"201804",label:"2018第四季度"}),this.resetTime("201801")):"year"===e&&(t.push({value:"2018",label:"2018"}),this.resetTime("2018")),t}}),watch:{approveListData:function(t){this.data=t}},methods:{query:function(){this.$refs.approvalForm.valid()},getAppList:function(){var t=this;this.dataShow=!0,this.currentPage=1;var e=this.formData,a=e.companyList.find(function(e){return e.code===t.budget.formulateInstitution}),r=e.types.find(function(e){return e.code===t.budget.type}),i=e.channelList.find(function(e){return e.code===t.budget.channel}),n=r.timeSlots.find(function(e){return e.code===t.budget.timeSlot});this.$store.dispatch("setApproveListData",{subInstitution:a.name,type:r.name,channel:i.name,timeSlot:n.name})},resetForm:function(t){this.$refs[t].reset()},approval:function(t){var e=this.budget.formulateInstitution;this.$router.push({path:"/admin/budget/approval/"+e+"/"+t})},resetTime:function(t){this.budget.timeSlot=t},dataChange:function(t,e){this.pageSize=t,this.currentPage=e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"approvalForm",attrs:{budget:t.budget,rules:t.rules,validMethod:"getAppList"},on:{getAppList:t.getAppList}},[a("el-form-item",{attrs:{label:"是否最新",prop:"isUpToDate"}},[a("el-select",{model:{value:t.budget.isUpToDate,callback:function(e){t.$set(t.budget,"isUpToDate",e)},expression:"budget.isUpToDate"}},[a("el-option",{attrs:{value:"1",label:"是"}}),t._v(" "),a("el-option",{attrs:{value:"0",label:"否"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.resetForm("approvalForm")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.query}},[t._v("查询")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dataShow,expression:"dataShow"}],staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:t.columns,data:t.currentData,pagination:!0,total:t.approveListData.length,rowKey:"version"},on:{approval:t.approval,dataChange:t.dataChange}})],1)])])},staticRenderFns:[]},l=a("VU/8")(s,o,!1,null,null,null);e.default=l.exports}});