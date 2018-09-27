webpackJsonp([36],{foeB:function(e,t){},yzwc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Z4dx"),n={name:"Recommend",components:{BaseTable:function(){return a.e(101).then(a.bind(null,"ss0d"))}},created:function(){var e=this;Object(o.c)().then(function(t){e.initData=t.data})},data:function(){return{initData:{},dataHidden:!0,impDialogVisible:!1,param:{subCompanyCode:"01000",channel:"ct"},rules:{subCompanyCode:[{required:!0,trigger:"change",message:"机构不能为空"}],channel:[{required:!0,trigger:"change",message:"渠道不能为空"}]},columns:[{prop:"bizpcatgcd",label:"业务板块",width:150,align:"center"},{prop:"channelnmscope",label:"数据范围-渠道",width:130,align:"center",isEdit:!0,type:"select",options:[{value:"01",label:"网电"},{value:"02",label:"传统"}]},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!0,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthscope",label:"保单范围(回滚月份数)",width:180,align:"center",isEdit:!0,type:"select",options:[{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"23",label:"23"},{value:"24",label:"24"},{value:"25",label:"25"},{value:"26",label:"26"},{value:"27",label:"27"},{value:"28",label:"28"},{value:"29",label:"29"},{value:"30",label:"30"},{value:"31",label:"31"},{value:"32",label:"32"},{value:"33",label:"33"},{value:"34",label:"34"},{value:"35",label:"35"},{value:"36",label:"36"}]},{prop:"autoChannelDown",label:"自主渠道系数下限",width:150,align:"center",isEdit:!0,type:"input"},{prop:"autoChannelUp",label:"自主渠道系数上限",width:150,align:"center",isEdit:!0,type:"input"},{prop:"autoProtectDown",label:"自主核保系数下限",width:150,align:"center",isEdit:!0,type:"input"},{prop:"autoProtectUp",label:"自主核保系数上限",width:150,align:"center",isEdit:!0,type:"input"},{prop:"forceMarketRate",label:"交强市场费用率(%)",width:150,align:"center",isEdit:!0,type:"input"},{prop:"marketcostmin",label:"市场费用率下限（%）",width:150,align:"center",isEdit:!0,type:"input"},{prop:"marketcostmax",label:"市场费用率上限（%）",width:150,align:"center",isEdit:!0,type:"input"},{prop:"expectcostratemin",label:"预估经营成本率下限（%）",width:170,align:"center",isEdit:!0,type:"input"},{prop:"expectcostratemax",label:"预估经营成本率上限（%）",width:170,align:"center",isEdit:!0,type:"input"}],curData:[],data:[{id:"1",bizpcatgcd:"家用车-新车",channelnmscope:"传统",levelscope:"本级",monthscope:"12",autoChannelDown:"0.75",autoChannelUp:"1.10",autoProtectDown:"0.85",autoProtectUp:"1.20",forceMarketRate:"45",marketcostmin:"17",marketcostmax:"30",expectcostratemin:"76",expectcostratemax:"96"},{id:"2",bizpcatgcd:"家用车-旧车",channelnmscope:"传统",levelscope:"上级",monthscope:"15",autoChannelDown:"0.77",autoChannelUp:"1.08",autoProtectDown:"0.83",autoProtectUp:"1.22",forceMarketRate:"38",marketcostmin:"15",marketcostmax:"28",expectcostratemin:"79",expectcostratemax:"98"},{id:"3",bizpcatgcd:"企业非营业客车",channelnmscope:"网电",levelscope:"本级",monthscope:"18",autoChannelDown:"0.76",autoChannelUp:"1.09",autoProtectDown:"0.84",autoProtectUp:"1.21",forceMarketRate:"40",marketcostmin:"15",marketcostmax:"30",expectcostratemin:"80",expectcostratemax:"99"},{id:"4",bizpcatgcd:"企业非营业货车",channelnmscope:"网电",levelscope:"上级",monthscope:"21",autoChannelDown:"0.78",autoChannelUp:"1.07",autoProtectDown:"0.82",autoProtectUp:"1.24",forceMarketRate:"43",marketcostmin:"18",marketcostmax:"29",expectcostratemin:"78",expectcostratemax:"97"},{id:"5",bizpcatgcd:"机关非营业客车",channelnmscope:"传统",levelscope:"本级",monthscope:"24",autoChannelDown:"0.80",autoChannelUp:"1.08",autoProtectDown:"0.79",autoProtectUp:"1.22",forceMarketRate:"38",marketcostmin:"16",marketcostmax:"27",expectcostratemin:"76",expectcostratemax:"97"},{id:"6",bizpcatgcd:"机关非营业货车",channelnmscope:"传统",levelscope:"上级",monthscope:"27",autoChannelDown:"0.79",autoChannelUp:"1.06",autoProtectDown:"0.81",autoProtectUp:"1.25",forceMarketRate:"44",marketcostmin:"16",marketcostmax:"28",expectcostratemin:"76",expectcostratemax:"97"},{id:"7",bizpcatgcd:"机关非营业特种车",channelnmscope:"网电",levelscope:"本级",monthscope:"30",autoChannelDown:"0.75",autoChannelUp:"1.10",autoProtectDown:"0.85",autoProtectUp:"1.20",forceMarketRate:"40",marketcostmin:"15",marketcostmax:"30",expectcostratemin:"79",expectcostratemax:"98"},{id:"8",bizpcatgcd:"机动非营业客车",channelnmscope:"网电",levelscope:"上级",monthscope:"33",autoChannelDown:"0.77",autoChannelUp:"1.08",autoProtectDown:"0.83",autoProtectUp:"1.22",forceMarketRate:"43",marketcostmin:"18",marketcostmax:"29",expectcostratemin:"78",expectcostratemax:"97"},{id:"9",bizpcatgcd:"营业出租客车",channelnmscope:"传统",levelscope:"本级",monthscope:"36",autoChannelDown:"0.76",autoChannelUp:"1.09",autoProtectDown:"0.84",autoProtectUp:"1.21",forceMarketRate:"40",marketcostmin:"15",marketcostmax:"29",expectcostratemin:"78",expectcostratemax:"97"},{id:"10",bizpcatgcd:"营业出租货车",channelnmscope:"传统",levelscope:"上级",monthscope:"12",autoChannelDown:"0.78",autoChannelUp:"1.07",autoProtectDown:"0.81",autoProtectUp:"1.23",forceMarketRate:"43",marketcostmin:"18",marketcostmax:"29",expectcostratemin:"78",expectcostratemax:"96"},{id:"11",bizpcatgcd:"营业城市公交",channelnmscope:"网电",levelscope:"本级",monthscope:"15",autoChannelDown:"0.80",autoChannelUp:"1.08",autoProtectDown:"0.79",autoProtectUp:"1.22",forceMarketRate:"38",marketcostmin:"16",marketcostmax:"28",expectcostratemin:"76",expectcostratemax:"97"},{id:"12",bizpcatgcd:"营业旅游客车",channelnmscope:"网电",levelscope:"上级",monthscope:"18",autoChannelDown:"0.79",autoChannelUp:"1.06",autoProtectDown:"0.80",autoProtectUp:"1.24",forceMarketRate:"43",marketcostmin:"16",marketcostmax:"28",expectcostratemin:"76",expectcostratemax:"97"},{id:"13",bizpcatgcd:"营业公路货车",channelnmscope:"传统",levelscope:"本级",monthscope:"21",autoChannelDown:"0.78",autoChannelUp:"1.07",autoProtectDown:"0.81",autoProtectUp:"1.23",forceMarketRate:"40",marketcostmin:"15",marketcostmax:"28",expectcostratemin:"79",expectcostratemax:"97"},{id:"14",bizpcatgcd:"营业公路挂车",channelnmscope:"传统",levelscope:"上级",monthscope:"24",autoChannelDown:"0.80",autoChannelUp:"1.08",autoProtectDown:"0.79",autoProtectUp:"1.22",forceMarketRate:"43",marketcostmin:"18",marketcostmax:"29",expectcostratemin:"78",expectcostratemax:"96"}]}},methods:{clear:function(){this.dataHidden=!0,this.curData=[]},query:function(){var e=this;this.$refs.recommendForm.validate(function(t){t&&(e.dataHidden=!1,e.curData=e.data)})},download:function(){var e=this;this.$confirm("确定下载模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"数据导入成功!"})},exportData:function(){var e=this;this.$confirm("确定导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"数据导出成功!"})}).catch(function(){})},save:function(){this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"recommendForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[a("el-form-item",{attrs:{label:"机构代码",prop:"subCompanyCode"}},[a("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium"},on:{change:e.clear},model:{value:e.param.subCompanyCode,callback:function(t){e.$set(e.param,"subCompanyCode",t)},expression:"param.subCompanyCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道",size:"medium"},on:{change:e.clear},model:{value:e.param.channel,callback:function(t){e.$set(e.param,"channel",t)},expression:"param.channel"}},e._l(e.initData.channelList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.query}},[e._v("查看参数")])],1)],1)],1),e._v(" "),a("div",{staticClass:"data",attrs:{hidden:e.dataHidden},on:{"update:hidden":function(t){e.dataHidden=t}}},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.curData,rowKey:"id",maxHeight:550}})],1)]),e._v(" "),a("div",{staticClass:"option",attrs:{hidden:e.dataHidden},on:{"update:hidden":function(t){e.dataHidden=t}}},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.download}},[e._v("模板下载")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("数据导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("数据导出")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.save}},[e._v("保存")])],1),e._v(" "),a("el-dialog",{attrs:{title:"数据导入",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.upload}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,c,!1,function(e){a("foeB")},"data-v-7e2504f1",null);t.default=l.exports}});