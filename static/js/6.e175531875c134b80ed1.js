webpackJsonp([6],{Fdzy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("bOdI"),s=a.n(i),n=a("Dd8w"),o=a.n(n),c=a("NYxO"),r=a("P0XF"),l=a("vLgD"),d={name:"BizCodeType",components:{EditTable:function(){return a.e(91).then(a.bind(null,"lkHm"))}},data:function(){return{bizName:"",rowKey:"bizcdcatgid",newItem:{bizcdcatgennm:"",bizcdcatgcnnm:"",flag:"",bizcdtype:"",ogrdiyflag:"",applyallorgflag:"",datachecktb:"",isEdit:!0},checkDbItems:[],currentEdit:"",flagOptions:[{value:"1",label:"是"},{value:"0",label:"否"}],codeTypes:[{value:"enum",label:"枚举型"},{value:"range",label:"连续性"}],sourceData:[],showData:[],selectedItems:[],createdItems:[],updatedItems:[],deletedItems:[],treeVisible:!1,tableData:[]}},computed:o()({},Object(c.c)({tableHeader:function(e){return e.app.tableHeader}}),{currentEditIndex:function(){var e=this;return this.showData.findIndex(function(t){return t[e.rowKey]===e.currentEdit})},columns:function(){return[{prop:"index",width:50,label:"",type:"selection"},{prop:"bizcdcatgennm",width:"120",label:"英文名称",type:"input"},{prop:"bizcdcatgcnnm",width:"120",label:"中文名称",type:"input"},{prop:"flag",width:"120",label:"是否标志类",type:"select",options:this.flagOptions},{prop:"bizcdtype",width:"120",label:"业务代码类型",type:"select",options:this.codeTypes},{prop:"ogrdiyflag",width:"120",label:"是否机构个性化代码",type:"select",options:this.flagOptions},{prop:"applyallorgflag",width:"120",label:"是否适用全部机构",type:"select",options:this.flagOptions},{prop:"datachecktb",width:"120",label:"校验数据表"},{prop:"operation",width:"120",label:"操作",operation:!0,operations:[{text:"编辑",event:"edit",icon:"iconfont icon-bianji"},{text:"删除",event:"removeRecord",icon:"iconfont icon-iconfont-shanchu"}]}]},propOptions:function(){var e=[];return this.columns.forEach(function(t){if("select"===t.type){var a={prop:t.prop,options:t.options};e.push(a)}}),e}}),created:function(){var e=this;Object(l.a)({url:"/api/meta/sysTb/codeListWithColumns",method:"get"}).then(function(t){e.tableData=t.data}),this.query()},methods:{query:function(){var e,t=this;(e=this.bizName,Object(l.a)({url:"/api/meta/codeCatg/list",method:"get",param:e})).then(function(e){t.sourceData=e.data,t.setShowData()})},checkSelected:function(){if(0===this.selectedItems.length){var e=0===this.showData.length?"请新增记录后再进行操作！":"请先选择要操作的记录";return this.$message({type:"warning",showClose:!0,message:e}),!1}return!0},edit:function(){var e=this;if(this.checkSelected()){var t=[];this.selectedItems.forEach(function(a){e.createdItems.includes(a)||t.push(a)}),this.updatedItems=t,t.forEach(function(t){var a=e.sourceData.find(function(a){return a[e.rowKey]===t}),i=e.showData.findIndex(function(a){return a[e.rowKey]===t});e.showData.splice(i,1,a)}),this.updatedItems.length,this.selectedItems.forEach(function(t){var a=e.showData.findIndex(function(a){return a[e.rowKey]===t});e.$refs.table.toggleSelection(a)}),this.showData.forEach(function(t){e.selectedItems.includes(t[e.rowKey])&&(t.isEdit=!0)})}},save:function(){var e=this;this.showData.forEach(function(t){t.isEdit=!1;var a=t[e.rowKey],i=e.sourceData.findIndex(function(a){return a[e.rowKey]===t[e.rowKey]});if(e.createdItems.includes(a)){var s=o()({},t);e.sourceData.push(s)}else e.updatedItems.includes(a)?e.sourceData.splice(i,1,t):e.sourceData[i].datachecktb=t.datachecktb}),this.deletedItems.forEach(function(t){var a=e.sourceData.findIndex(function(a){return a[e.rowKey]===t});e.sourceData.splice(a,1)}),this.$refs.table.clearSelection(this.selectedItems),this.setShowData(),this.createdItems=[],this.updatedItems=[],this.deletedItems=[]},saveTmp:function(){if(this.checkSelected()){var e=this.getSelectSource();this.save(),(t=e,Object(l.a)({url:"/api/meta/codeCatg/saveTmp",method:"post",data:t})).then(function(e){console.log(e)})}var t},release:function(){if(this.checkSelected()){var e=this.getSelectSource();this.save(),(t=e,Object(l.a)({url:"/api/meta/codeCatg/save",method:"post",data:t})).then(function(e){console.log(e)})}var t},getSelectSource:function(){var e=this,t=[],a=void 0;return this.selectedItems.forEach(function(i){a=e.sourceData.find(function(t){return t[e.rowKey]===i}),t.push(a)}),t},editCheck:function(e){this.currentEdit=e,this.treeVisible=!0,this.checkDbItems.includes(e)||this.checkDbItems.push(e)},setCheckTable:function(){var e="";this.$refs.tree.getCheckedNodes().forEach(function(t){void 0===t.children&&(e+=t.value+",")}),e=e.substring(0,e.length-1),this.showData[this.currentEditIndex].datachecktb=e,this.closeDialog()},closeDialog:function(){this.$refs.tree.setCheckedKeys([]),this.treeVisible=!1,this.currentEdit=""},addRecord:function(){var e=Object(r.a)(),t=o()(s()({},this.rowKey,e),this.newItem);this.showData.push(t),this.createdItems.push(e),this.$refs.table.toggleSelection(this.showData.length-1)},removeRecord:function(e){var t=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=t.showData.findIndex(function(a){return a[t.rowKey]===e});if(t.showData.splice(a,1),t.$message({type:"success",message:"删除成功!"}),t.createdItems.includes(e)){var i=t.createdItems.findIndex(function(t){return t===e});t.createdItems.splice(i,1)}else t.deletedItems.push(e)}).catch(function(){})},selectionChange:function(e){this.selectedItems=e},setShowData:function(){var e=this.propOptions,t=[];this.sourceData.forEach(function(a){var i=o()({},a);e.forEach(function(e){var t=i[e.prop],a=e.options.find(function(e){return e.value===t});i[e.prop]=""===t?"":a.label}),t.push(i)}),this.showData=t}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"160px",inline:!0}},[a("el-form-item",{attrs:{label:"业务代码分类名称",prop:"bizTypeName"}},[a("el-input",{model:{value:e.bizName,callback:function(t){e.bizName=t},expression:"bizName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("edit-table",{ref:"table",attrs:{refName:"editTable",columns:e.columns,data:e.showData,rowKey:e.rowKey,currentEdit:e.currentEdit},on:{selectionChange:e.selectionChange,addRecord:e.addRecord,edit:e.editCheck,removeRecord:e.removeRecord}})],1)]),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.edit}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.saveTmp}},[e._v("暂存")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("导出")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.release}},[e._v("发布")])],1),e._v(" "),a("el-dialog",{attrs:{title:"设置校验数据表",visible:e.treeVisible,width:"40%"},on:{"update:visible":function(t){e.treeVisible=t}}},[a("el-tree",{ref:"tree",attrs:{data:e.tableData,"show-checkbox":"","node-key":"id"}}),e._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.setCheckTable}},[e._v("确定")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.closeDialog}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(d,u,!1,function(e){a("iETm")},"data-v-ec64d03a",null);t.default=h.exports},iETm:function(e,t){}});