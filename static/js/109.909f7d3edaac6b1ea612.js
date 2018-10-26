webpackJsonp([109],{dQTo:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=l("NYxO"),r=l("Z4dx"),i={name:"QueryForm",data:function(){return{initData:{},rules:{subCompanyCode:[{required:!0,trigger:"change",message:"机构不能为空"}],channel:[{required:!0,trigger:"change",message:"渠道不能为空"}]}}},computed:Object(t.c)({viewParameters:function(e){return e.individual.viewParameters},lifeFormOptionShow:function(e){return e.individual.lifeFormOptionShow},rollbackFlag:function(e){return e.individual.rollbackFlag},versionFlag:function(e){return e.individual.versionFlag},param:function(e){return e.individual.param}}),created:function(){var e=this;Object(r.c)().then(function(a){e.initData=a.data})},methods:{querySector:function(){this.valid("querySector")},valid:function(e){var a=this;this.$refs.individualVehicleForm.validate(function(l){l&&a.$emit(e)})}}},n={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[l("el-form-item",{attrs:{label:"机构代码",prop:"subCompanyCode"}},[l("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium",disabled:!e.lifeFormOptionShow},model:{value:e.param.subCompanyCode,callback:function(a){e.$set(e.param,"subCompanyCode",a)},expression:"param.subCompanyCode"}},e._l(e.initData.companyList,function(e){return l("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[l("el-select",{attrs:{placeholder:"请选择渠道",size:"medium",disabled:!e.lifeFormOptionShow},model:{value:e.param.channel,callback:function(a){e.$set(e.param,"channel",a)},expression:"param.channel"}},e._l(e.initData.channelList,function(e){return l("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-radio-group",{attrs:{disabled:!e.lifeFormOptionShow},model:{value:e.param.businesStrategy,callback:function(a){e.$set(e.param,"businesStrategy",a)},expression:"param.businesStrategy"}},e._l(e.initData.businesStrategy,function(e){return l("el-radio",{key:e.code,attrs:{label:e.name}})}))],1),e._v(" "),l("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.rollbackFlag,expression:"rollbackFlag"}],attrs:{label:"保单范围",prop:"rollback"}},[l("el-select",{attrs:{placeholder:"请选择回滚月份",size:"medium"},model:{value:e.param.rollback,callback:function(a){e.$set(e.param,"rollback",a)},expression:"param.rollback"}},[l("el-option",{attrs:{label:"回滚12个月",value:"12"}}),e._v(" "),l("el-option",{attrs:{label:"回滚15个月",value:"15"}}),e._v(" "),l("el-option",{attrs:{label:"回滚18个月",value:"18"}}),e._v(" "),l("el-option",{attrs:{label:"回滚21个月",value:"21"}}),e._v(" "),l("el-option",{attrs:{label:"回滚24个月",value:"24"}}),e._v(" "),l("el-option",{attrs:{label:"回滚27个月",value:"27"}}),e._v(" "),l("el-option",{attrs:{label:"回滚30个月",value:"30"}}),e._v(" "),l("el-option",{attrs:{label:"回滚33个月",value:"33"}}),e._v(" "),l("el-option",{attrs:{label:"回滚36个月",value:"36"}})],1)],1),e._v(" "),l("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.versionFlag,expression:"versionFlag"}],attrs:{label:"版本号"}},[l("el-input",{attrs:{readonly:""},model:{value:e.param.version,callback:function(a){e.$set(e.param,"version",a)},expression:"param.version"}})],1),e._v(" "),l("el-form-item",[l("el-button",{directives:[{name:"show",rawName:"v-show",value:e.viewParameters,expression:"viewParameters"}],attrs:{plain:"",size:"small",type:"primary"},on:{click:e.querySector}},[e._v("查看参数")])],1)],1)},staticRenderFns:[]};var o=l("VU/8")(i,n,!1,function(e){l("qekU")},"data-v-0081230e",null);a.default=o.exports},qekU:function(e,a){}});