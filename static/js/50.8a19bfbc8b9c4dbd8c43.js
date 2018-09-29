webpackJsonp([50],{WMAi:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=o("Dd8w"),a=o.n(c),l=o("NYxO"),n={name:"index",components:{BaseTable:function(){return o.e(101).then(o.bind(null,"ss0d"))}},created:function(){this.$store.dispatch("initFormData")},data:function(){return{queryData:{org:"00000"},rules:{org:[{required:!0,trigger:"change",message:"机构名称不能为空"}]},dataHidden:!0,orgList:[{code:"10000",name:"北京分公司"},{code:"20000",name:"上海分公司"},{code:"30000",name:"江苏省分公司"},{code:"40000",name:"山东省分公司"},{code:"50000",name:"山西省分公司"}],columns:[{prop:"org",label:"机构名称",width:"120"},{prop:"channelDown",label:"自主渠道系数下限",width:"150",isEdit:!0,type:"input"},{prop:"channelUp",label:"自主渠道系数上限",width:"150",isEdit:!0,type:"input"},{prop:"protectDown",label:"自主核保系数下限",width:"150",isEdit:!0,type:"input"},{prop:"protectUp",label:"自主核保系数上限",width:"150",isEdit:!0,type:"input"},{prop:"comNewServiceUp",label:"商业险新车手续费上限",width:"180",isEdit:!0,type:"input"},{prop:"comOldServiceUp",label:"商业险旧车手续费上限",width:"180",isEdit:!0,type:"input"},{prop:"forceServiceUp",label:"交强险手续费上限",width:"150",isEdit:!0,type:"input"},{prop:"allCost",label:"综合成本率",width:"120",isEdit:!0,type:"input"},{prop:"allFee",label:"综合费用率",width:"120",isEdit:!0,type:"input"}],data:[],secondData:[{id:"1",org:"北京分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"上海分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"江苏省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山东省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],thirdData:[{id:"1",org:"山西省分公司太原支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"山西省分公司大同支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"山西省分公司阳泉支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山西省分公司长治支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司晋城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"6",org:"山西省分公司朔州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"7",org:"山西省分公司晋中支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"8",org:"山西省分公司运城支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"9",org:"山西省分公司忻州支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"10",org:"山西省分公司临汾支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"11",org:"山西省分公司吕梁支公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}],impDialogVisible:!1}},computed:a()({},Object(l.d)({formData:function(e){return e.budget.formData}})),methods:{query:function(){var e=this;this.$refs.queryForm.validate(function(t){t&&(""===e.queryData.org?(e.dataHidden=!0,e.data=[]):"00000"===e.queryData.org?(e.dataHidden=!1,e.data=e.secondData):"27000"===e.queryData.org?(e.dataHidden=!1,e.data=e.thirdData):(e.dataHidden=!1,e.data=[]))})},download:function(){var e=this;this.$confirm("确定下载模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"}),this.data=[{id:"1",org:"北京分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"2",org:"上海分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"3",org:"江苏省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"4",org:"山东省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"},{id:"5",org:"山西省分公司",channelDown:"0.75",channelUp:"1.10",protectDown:"0.85",protectUp:"1.20",comNewServiceUp:"18",comOldServiceUp:"16",forceServiceUp:"12",allCost:"96",allFee:"95"}]},exportData:function(){var e=this;this.$confirm("确定导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"数据导出成功!"})}).catch(function(){})},save:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)})}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"form"},[o("el-form",{ref:"queryForm",attrs:{"label-width":"180px",model:e.queryData,rules:e.rules,inline:!0}},[o("el-form-item",{attrs:{label:"机构名称",prop:"org"}},[o("el-select",{attrs:{placeholder:"请选择机构名称"},model:{value:e.queryData.org,callback:function(t){e.$set(e.queryData,"org",t)},expression:"queryData.org"}},e._l(e.formData.companyList,function(t){return o("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?o("span",[e._v(" ")]):2===t.flag?o("span",[e._v("   ")]):e._e(),e._v(" "),o("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),o("div",{staticClass:"data"},[o("div",{staticClass:"table"},[o("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id"}})],1)]),e._v(" "),o("div",{staticClass:"option"},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.download}},[e._v("下载预算模板")]),e._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("导入预算数据")]),e._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("导出预算数据")]),e._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.save}},[e._v("保存")])],1),e._v(" "),o("el-dialog",{attrs:{title:"导入预算数据",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[o("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),o("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:e.upload}},[e._v("导入")]),e._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var i=o("VU/8")(n,r,!1,function(e){o("sA+D")},"data-v-53d615fa",null);t.default=i.exports},"sA+D":function(e,t){}});