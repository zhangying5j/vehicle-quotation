webpackJsonp([107],{"6mWM":function(t,e){},"t+1g":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("P0XF"),s={name:"RangeDimension",props:{data:{type:Object,required:!0}},data:function(){return{currentEdit:"",specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"}}},computed:{currentEditIndex:function(){var t=this;return this.data.list.findIndex(function(e){return e.id===t.currentEdit})}},methods:{addRecord:function(){var t=Object(n.a)(),e={id:t,isEdit:!1,title:"",start:"",end:""};this.data.list.push(e),this.edit(t)},removeRecord:function(t){var e=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=e.data.list.findIndex(function(e){return e.id===t});i===e.currentEditIndex&&(e.currentEdit=""),e.data.list.splice(i,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},edit:function(t){this.currentEditIndex>-1&&(this.data.list[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.data.list[this.currentEditIndex].isEdit=!0},save:function(){this.data.list[this.currentEditIndex].isEdit=!1,this.currentEdit=""}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",[i("el-col",{staticClass:"m-top-md",attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple-dark"},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(t.data.title))])]),t._v(" "),i("el-table",{staticClass:"tb-edit",attrs:{border:"",size:"mini",data:t.data.list,"highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"title",label:"标签"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?i("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:e.row.title,callback:function(i){t.$set(e.row,"title",i)},expression:"scope.row.title"}}):i("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"start",label:"从（）"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?i("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:e.row.start,callback:function(i){t.$set(e.row,"start",i)},expression:"scope.row.start"}}):i("span",[t._v(t._s(e.row.start))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"end",label:"至（不含）"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?i("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:e.row.end,callback:function(i){t.$set(e.row,"end",i)},expression:"scope.row.end"}}):i("span",[t._v(t._s(e.row.end))])]}}])}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit!==e.row.id,expression:"currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(i){t.edit(e.row.id)}}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit===e.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:t.save}})],1),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[i("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(i){i.preventDefault(),t.removeRecord(e.row.id)}}})],1)]}}])})],1),t._v(" "),i("el-button",{style:t.specialTableBtn,attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.addRecord}},[t._v("\n            新增行\n          ")])],1)],1)])],1)},staticRenderFns:[]};var a=i("VU/8")(s,r,!1,function(t){i("6mWM")},"data-v-62249e52",null);e.default=a.exports}});