webpackJsonp([93],{"7xhL":function(e,l){},Nds8:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableDetailForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableDetail}},[a("el-form-item",{attrs:{label:"机构代码:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableDetail.orgCode,callback:function(l){e.$set(e.lifeTableDetail,"orgCode",l)},expression:"lifeTableDetail.orgCode"}},e._l(e.orgList,function(e){return a("el-option",{key:e.orgCode,attrs:{label:e.orgName,value:e.orgCode}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"报价策略渠道:",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:e.lifeTableDetail.channel,callback:function(l){e.$set(e.lifeTableDetail,"channel",l)},expression:"lifeTableDetail.channel"}},e._l(e.channelList,function(e){return a("el-option",{key:e.channelCode,attrs:{label:e.channelName,value:e.channelCode}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{attrs:{readonly:""},model:{value:e.lifeTableDetail.version,callback:function(l){e.$set(e.lifeTableDetail,"version",l)},expression:"lifeTableDetail.version"}})],1)],1)],1)])},staticRenderFns:[]};var t=a("VU/8")({name:"LifeTableQueryForm",props:{lifeTableDetail:{required:!0}},data:function(){return{orgList:[{orgCode:"000000",orgName:"北京分公司"},{orgCode:"000001",orgName:"天津分公司"},{orgCode:"000002",orgName:"上海分公司"}],channelList:[{channelCode:"001",channelName:"保险公司车险"},{channelCode:"002",channelName:"银行邮政代理"},{channelCode:"003",channelName:"电话车险"},{channelCode:"004",channelName:"网销车险"},{channelCode:"005",channelName:"4S店保险中心车险"},{channelCode:"006",channelName:"维修店专业车险"}]}}},n,!1,function(e){a("7xhL")},"data-v-727ef47c",null);l.default=t.exports}});