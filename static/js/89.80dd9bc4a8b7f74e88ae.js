webpackJsonp([89],{STJg:function(e,t){},aTIo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"BasePagination",props:{total:{type:Number,required:!0}},data:function(){return{pageSizes:[5,10,20,25],currentPage:1,pageSize:10}},computed:{},methods:{sizeChange:function(e){this.pageSize=e,this.currentPage=1,this.dataChange(e,this.currentPage)},currentChange:function(e){this.currentPage=e,this.dataChange(this.pageSize,e)},dataChange:function(e,t){this.$emit("dataChange",e,t)}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"right","margin-top":"16px"}},[t("el-pagination",{attrs:{"prev-text":"上一页","next-text":"下一页","current-page":this.currentPage,"page-sizes":this.pageSizes,"page-size":this.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.total},on:{"size-change":this.sizeChange,"current-change":this.currentChange}})],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(e){a("STJg")},"data-v-23c9560c",null);t.default=r.exports}});