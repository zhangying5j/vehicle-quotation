webpackJsonp([116],{Nds8:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a("Z4dx"),i={name:"LifeTableQueryForm",props:{lifeTableDetail:{required:!0}},created:function(){var e=this;Object(t.c)().then(function(l){e.initData=l.data})},data:function(){return{initData:{}}}},n={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableDetailForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableDetail}},[a("el-form-item",{attrs:{label:"机构代码:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableDetail.orgCode,callback:function(l){e.$set(e.lifeTableDetail,"orgCode",l)},expression:"lifeTableDetail.orgCode"}},e._l(e.initData.companyList,function(l){return a("el-option",{key:l.code,attrs:{value:l.code,label:l.name}},[1===l.flag?a("span",[e._v(" ")]):2===l.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(l.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"报价策略渠道:",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道"},model:{value:e.lifeTableDetail.channel,callback:function(l){e.$set(e.lifeTableDetail,"channel",l)},expression:"lifeTableDetail.channel"}},e._l(e.initData.channelList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{attrs:{readonly:""},model:{value:e.lifeTableDetail.version,callback:function(l){e.$set(e.lifeTableDetail,"version",l)},expression:"lifeTableDetail.version"}})],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(i,n,!1,function(e){a("sbIR")},"data-v-30360d20",null);l.default=r.exports},sbIR:function(e,l){}});