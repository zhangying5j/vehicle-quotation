webpackJsonp([25],{AuI8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("Dd8w"),a=r.n(o),n=r("lDdF"),i=r.n(n),s=r("uXZL"),l=r.n(s),c=r("NYxO"),u={name:"Order",components:{BaseTable:function(){return r.e(101).then(r.bind(null,"ss0d"))}},created:function(){this.$store.dispatch("initOrderFormData")},data:function(){return{params:{insMonth:"",secondOrg:"",thirdOrg:"",channel:"",carFlag:""},thirdOrgList:[],rules:{},currentInfoCode:["policyNo","frameNo","carNo","policyName","policyGender","policyAge","bizOrg","premium","alreadyPay","noPay"],queryColumn:[],infoColumn:[],selectShow:!1,currentDimCode:["policyNo","frameNo","carNo","policyName","policyGender","policyAge","bizOrg"],currentIndexCode:["totalPremium","alreadyPay","noPay"],dimColumn:[],indexColumn:[]}},methods:{getThridOrg:function(e){var t=this.orderFormData.orgList.find(function(t){return t.code===e});this.thirdOrgList=t.children},query:function(){this.$store.dispatch("getOrderTableData")},exportOrder:function(){var e=this;this.$confirm("确定导出该清单吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"清单导出成功!"});var t=l.a.utils.table_to_book(document.querySelector("#out-table")),r=l.a.write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{i.a.saveAs(new Blob([r],{type:"application/octet-stream"}),"车险业务清单.xlsx")}catch(e){"undefined"!=typeof console&&console.info(e,r)}return r}).catch(function(){})}},computed:a()({currentInfoList:function(){var e=this,t=[];return this.orderFormData.infoList.forEach(function(r){e.currentInfoCode.includes(r.code)&&t.push(r)}),t},currentDimList:function(){var e=this,t=[];return this.orderFormData.dimList.forEach(function(r){e.currentDimCode.includes(r.code)&&t.push(r)}),t},currentIndexList:function(){var e=this,t=[];return this.orderFormData.indexList.forEach(function(r){e.currentIndexCode.includes(r.code)&&t.push(r)}),t},columns:function(){return this.dimColumn.concat(this.indexColumn)}},Object(c.d)({orderFormData:function(e){return e.chart.orderFormData},orderTableData:function(e){return e.chart.orderTableData}})),watch:{orderFormData:function(e){var t=this;this.queryColumn=[],this.queryColumn.push({prop:"insMonth",width:120,label:"承保月份"}),this.queryColumn.push({prop:"secondOrg",width:120,label:"二级机构"}),this.queryColumn.push({prop:"thirdOrg",width:120,label:"三级机构"}),e.queryList.forEach(function(e){t.queryColumn.push({prop:e.code,label:e.name,width:e.width})})},currentInfoList:function(e){var t=this;this.infoColumn=[],e.forEach(function(e){t.infoColumn.push({prop:e.code,label:e.name,width:e.width})})},currentDimList:function(e){var t=this;this.dimColumn=[],e.forEach(function(e){t.dimColumn.push({prop:e.code,label:e.name,width:e.width})})},currentIndexList:function(e){var t=this;this.indexColumn=[],e.forEach(function(e){t.indexColumn.push({prop:e.code,label:e.name,width:e.width})})}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("el-form",{ref:"orderForm",attrs:{"label-width":"180px",model:e.params,rules:e.rules,inline:!0}},[r("el-form-item",{attrs:{label:"承保月份",prop:"insMonth"}},[r("el-select",{attrs:{placeholder:"请选择承保月份"},model:{value:e.params.insMonth,callback:function(t){e.$set(e.params,"insMonth",t)},expression:"params.insMonth"}},e._l(e.orderFormData.insMonthList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"二级机构",prop:"secondOrg"}},[r("el-select",{attrs:{placeholder:"请选择二级机构"},on:{change:e.getThridOrg},model:{value:e.params.secondOrg,callback:function(t){e.$set(e.params,"secondOrg",t)},expression:"params.secondOrg"}},e._l(e.orderFormData.orgList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"三级机构",prop:"thirdOrg"}},[r("el-select",{attrs:{placeholder:"请选择三级机构"},model:{value:e.params.thirdOrg,callback:function(t){e.$set(e.params,"thirdOrg",t)},expression:"params.thirdOrg"}},e._l(e.thirdOrgList,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),e._l(e.orderFormData.queryList,function(t){return r("el-form-item",{key:t.code,attrs:{label:t.name,prop:t.name}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.params[t.code],callback:function(r){e.$set(e.params,t.code,r)},expression:"params[query.code]"}},e._l(t.detail,function(e){return r("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)})],2)],1),e._v(" "),r("div",{staticStyle:{"text-align":"center",margin:"10px auto"}},[r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"},on:{click:function(t){e.selectShow=!e.selectShow}}},[r("span",[e._v("选择展示信息项")]),e._v(" "),e.selectShow?r("i",{staticClass:"el-icon-arrow-up"}):r("i",{staticClass:"el-icon-arrow-down"})]),e._v(" "),r("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.exportOrder}},[e._v("导出")])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.selectShow,expression:"selectShow"}],staticClass:"sector-list"},[r("div",{staticClass:"title"},[e._v("选择维度")]),e._v(" "),r("div",{staticClass:"biz-sector"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form",{attrs:{"label-width":"120px",inline:!0}},[r("el-form-item",[r("el-checkbox-group",{model:{value:e.currentDimCode,callback:function(t){e.currentDimCode=t},expression:"currentDimCode"}},e._l(e.orderFormData.dimList,function(t){return r("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.name))])}))],1)],1)],1)],1)],1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.selectShow,expression:"selectShow"}],staticClass:"sector-list"},[r("div",{staticClass:"title"},[e._v("选择指标")]),e._v(" "),r("div",{staticClass:"biz-sector"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form",{attrs:{"label-width":"120px",inline:!0}},[r("el-form-item",[r("el-checkbox-group",{model:{value:e.currentIndexCode,callback:function(t){e.currentIndexCode=t},expression:"currentIndexCode"}},e._l(e.orderFormData.indexList,function(t){return r("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.name))])}))],1)],1)],1)],1)],1)]),e._v(" "),r("div",{staticClass:"data"},[r("div",{staticClass:"table"},[r("base-table",{attrs:{border:!0,columns:e.columns,id:"out-table",data:e.orderTableData}})],1)])])},staticRenderFns:[]};var m=r("VU/8")(u,d,!1,function(e){r("IY0s")},"data-v-b5e1c034",null);t.default=m.exports},IY0s:function(e,t){}});