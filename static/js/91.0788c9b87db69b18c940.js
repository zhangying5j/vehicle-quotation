webpackJsonp([91],{"5aui":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),i=r.n(n),o=r("NYxO"),u={name:"BudgetAdd",components:{QueryForm:function(){return r.e(98).then(r.bind(null,"Hb8j"))}},data:function(){return{budget:{formulateInstitution:"01000",type:"month",channel:"ct",timeSlot:"2018-1",version:"",bore:"policy",productType:"all"},rules:{formulateInstitution:[{required:!0,trigger:"change",message:"预算制定机构不能为空"}],type:[{required:!0,trigger:"change",message:"预算类型不能为空"}],channel:[{required:!0,trigger:"change",message:"预算渠道不能为空"}],timeSlot:[{required:!0,trigger:"change",message:"预算时间段不能为空"}],bore:[{required:!0,trigger:"change",message:"预算口径不能为空"}],productType:[{required:!0,trigger:"change",message:"业务分类不能为空"}]}}},computed:i()({},Object(o.d)({formData:function(t){return t.budget.formData}}),{timeSlots:function(){var t=this.budget.type+"";return"month"===t?this.resetTime("201801"):"year"===t&&this.resetTime("2018"),[]}}),methods:{resetForm:function(){this.$refs.addFrom.reset()},createBudget:function(){this.$refs.addFrom.valid()},toAddBudget:function(){var t=this,e=this.formData,r=e.types.find(function(e){return e.code===t.budget.type}),n=e.channelList.find(function(e){return e.code===t.budget.channel}),i=r.timeSlots.find(function(e){return e.code===t.budget.timeSlot}),o=e.boreList.find(function(e){return e.code===t.budget.bore}),u=e.productTypeList.find(function(e){return e.code===t.budget.productType});this.$store.dispatch("setAddData",{formulateInstitution:this.budget.formulateInstitution,type:r.name,channel:n.name,timeSlot:i.name,bore:o.name,productType:u.name}),this.$router.push({path:"/admin/budget/add/create"})},resetTime:function(t){this.budget.timeSlot=t},history:function(){this.$store.dispatch("historyData"),this.$router.push({path:"/admin/budget/add/history"})}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("query-form",{ref:"addFrom",attrs:{budget:t.budget,rules:t.rules,validMethod:"toAddBudget"},on:{toAddBudget:t.toAddBudget}})],1),t._v(" "),r("div",{staticClass:"option"},[r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.resetForm}},[t._v("重置")]),t._v(" "),r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.createBudget}},[t._v("新增")]),t._v(" "),r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.history}},[t._v("查看历史数据")])],1),t._v(" "),r("router-view")],1)},staticRenderFns:[]},a=r("VU/8")(u,s,!1,null,null,null);e.default=a.exports}});