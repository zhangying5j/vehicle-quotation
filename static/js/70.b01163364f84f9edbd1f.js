webpackJsonp([70],{"7qKK":function(t,i){},"7uQn":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Dd8w"),o=e.n(n),s=e("NYxO"),a=e("Z4dx"),r={name:"CustomOne",components:{BackButton:function(){return e.e(102).then(e.bind(null,"uOVF"))},BizSectorList:function(){return e.e(103).then(e.bind(null,"jpoa"))},TagDimension:function(){return e.e(109).then(e.bind(null,"RXyt"))},RangeDimension:function(){return e.e(107).then(e.bind(null,"t+1g"))}},data:function(){return{baseRecommend:[],currentSector:0,dimensionList:[],currentCustomDimension:[],currentDimensionDetail:[],currentDimension:"",dimensionColumns:[{prop:"no",title:"序号",width:50,align:"center"},{prop:"tag",title:"标签",width:200,align:"center"},{prop:"range",title:"标签范围",width:128,align:"center"},{prop:"a",title:"满期赔付率（%）",width:140,align:"center"},{prop:"b",title:"合并终极赔付率（%）",width:160,align:"center"},{prop:"c",title:"保费占比（%）",width:120,align:"center"}],currentDimensionData:[{id:"comLastCount",type:"tag",title:"商业险上年出险次数",tags:[{code:"noCom",name:"未投保商业险"},{code:"newCar",name:"新车"},{code:"newIns",name:"新保"},{code:"no3",name:"连续3年+未出险"},{code:"no2",name:"连续2年未出险"},{code:"no1",name:"上年未出险"},{code:"1",name:"1次"},{code:"2",name:"2次"},{code:"3",name:"3次"},{code:"4",name:"4次"},{code:"5",name:"5次+"}],split:[{id:"1",title:"未投保商业险",tags:["noCom"]},{id:"2",title:"0次",tags:["newCar","newIns","no3","no2","no1"]},{id:"3",title:"1次",tags:["1"]},{id:"4",title:"2次",tags:["2"]},{id:"5",title:"3次及以上",tags:["3","4","5"]}]},{id:"age",type:"range",title:"年龄",list:[{id:"1",isEdit:!1,title:"少年",start:"0",end:"20"},{id:"2",isEdit:!1,title:"青年",start:"20",end:"30"},{id:"3",isEdit:!1,title:"中年",start:"31",end:"45"},{id:"4",isEdit:!1,title:"中老年",start:"46",end:"60"},{id:"5",isEdit:!1,title:"老年",start:"60",end:"N"}]},{id:"rci",type:"range",title:"商业险上年出险金额",list:[{id:"1",isEdit:!1,title:"1000以下",start:"0",end:"1000"},{id:"2",isEdit:!1,title:"2000以下",start:"1000",end:"2000"},{id:"3",isEdit:!1,title:"5000以下",start:"2000",end:"5000"},{id:"4",isEdit:!1,title:"10000以下",start:"5000",end:"10000"},{id:"5",isEdit:!1,title:"10000以上",start:"10000",end:"N"}]}],dialogTableVisible:!1,dimensionDialogVisible:!1}},created:function(){var t=this;Object(a.a)(this.param).then(function(i){t.baseRecommend=i.data;var e=i.data.map(function(t){return{id:t.id,name:t.name}});t.$store.commit("SET_SECTORS",e),t.loadDimension(),t.currentDimension=i.data[0].dimensionList[0].code,t.currentDimensionDetail=i.data[0].dimensionList[0].detail})},computed:o()({},Object(s.d)({sectors:function(t){return t.individual.sectors},param:function(t){return t.individual.param},tableHeader:function(t){return t.app.tableHeader}}),{customerDimensionList:function(){var t=this;return this.currentCustomDimension.map(function(i){return t.dimensionList.find(function(t){return t.code===i})})},leftDimensionList:function(){var t=this;return this.dimensionList.filter(function(i){return!t.currentCustomDimension.includes(i.code)})}}),methods:{loadDimension:function(){this.dimensionList=this.baseRecommend[this.currentSector].dimensionList.map(function(t){return{code:t.code,name:t.name}}),this.currentCustomDimension=this.baseRecommend[this.currentSector].recommendDimension},getClassBySector:function(t){this.currentSector=this.sectors.findIndex(function(i){return i.id===t}),this.loadDimension()},addDimension:function(t){this.currentCustomDimension.includes(t)||(this.currentCustomDimension.push(t),"forceLastPay"===t&&this.currentDimensionData.push({id:"forceLastPay",type:"range",title:"交强险上年出险金额",list:[]}))},removeDimension:function(t){var i=this.currentDimensionData.findIndex(function(i){return i.id===t});this.currentDimensionData.splice(i,1),this.currentCustomDimension.splice(this.currentCustomDimension.indexOf(t),1)},dimensionDetail:function(t){this.currentDimension=t;var i=this.baseRecommend[this.currentSector].dimensionList.find(function(i){return i.code===t});this.currentDimensionDetail=i.detail},confirm:function(){this.$router.push({path:"/admin/source/config/customDisFee/two"})}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"biz-content"},[e("biz-sector-list",{attrs:{title:"选择业务板块",sectors:t.sectors},on:{sectorClick:t.getClassBySector}}),t._v(" "),e("div",{attrs:{id:"custom_latitude"}},[e("div",{staticClass:"tableSector"},[e("div",{staticClass:"grid-content bg-purple-light"},[e("div",{staticClass:"tag"},[t._l(t.customerDimensionList,function(i){return e("el-tag",{key:i.code,attrs:{closable:"",type:t.currentDimension===i.code?"primary":"info"},on:{close:function(e){t.removeDimension(i.code)}},nativeOn:{click:function(e){t.dimensionDetail(i.code)}}},[t._v("\n                  "+t._s(i.name)+"\n                ")])}),t._v(" "),e("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(i){t.dimensionDialogVisible=!0}}},[t._v("新增维度")]),t._v(" "),e("el-button",{staticStyle:{float:"right"},attrs:{type:"text",icon:"iconfont icon-bianji",size:"small"},on:{click:function(i){t.dialogTableVisible=!0}}},[t._v("编辑")])],2),t._v(" "),e("el-table",{attrs:{data:t.currentDimensionDetail,stripe:"","header-cell-style":t.tableHeader}},t._l(t.dimensionColumns,function(t){return e("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.title,"min-width":t.width,align:t.align}})}))],1)])]),t._v(" "),e("el-dialog",{attrs:{title:"编辑维度",fullscreen:"",visible:t.dialogTableVisible},on:{"update:visible":function(i){t.dialogTableVisible=i}}},[t._l(t.currentDimensionData,function(i){return["tag"===i.type?e("tag-dimension",{key:i.id,attrs:{data:i}}):t._e(),t._v(" "),"range"===i.type?e("range-dimension",{key:i.id,attrs:{data:i}}):t._e()]}),t._v(" "),e("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(i){t.dialogTableVisible=!1}}},[t._v("保存维度")]),t._v(" "),e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(i){t.dialogTableVisible=!1}}},[t._v("关闭")])],1)],2),t._v(" "),e("el-dialog",{attrs:{title:"添加维度",visible:t.dimensionDialogVisible,width:"30%"},on:{"update:visible":function(i){t.dimensionDialogVisible=i}}},t._l(t.dimensionList,function(i){return e("el-tag",{key:i.code,attrs:{type:t.currentCustomDimension.includes(i.code)?"primary":"info"},nativeOn:{click:function(e){t.addDimension(i.code)}}},[t._v("\n        "+t._s(i.name)+"\n      ")])}))],1),t._v(" "),e("div",{staticClass:"option"},[e("back-button",{attrs:{type:"next"},on:{next:t.confirm}},[t._v("下一步")])],1)])},staticRenderFns:[]};var d=e("VU/8")(r,c,!1,function(t){e("7qKK")},"data-v-1c636646",null);i.default=d.exports}});