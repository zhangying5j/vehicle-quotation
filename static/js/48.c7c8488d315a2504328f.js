webpackJsonp([48],{LpMh:function(t,e){},x0vE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"top"},[i("div",{staticClass:"header"},[i("div",{staticClass:"logo"},[t._v("车险智能定价管理系统")]),t._v(" "),i("div",{staticClass:"nav"},[i("router-link",{attrs:{to:"/index/home"}},[t._v("首页")]),t._v(" "),i("router-link",{attrs:{to:"/index/workspace"}},[t._v("我的工作台")]),t._v(" "),i("router-link",{attrs:{to:"/index/report"}},[t._v("我的报表")])],1),t._v(" "),i("div",{staticClass:"user"},[i("el-button",{staticClass:"option",attrs:{type:"text",icon:"iconfont icon-tuichu2"},on:{click:t.logout}})],1)])]),t._v(" "),i("router-view"),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"coy"},[e("p",[this._v("技术支持：中软国际科技服务有限公司")])])])}]};var s=i("VU/8")({data:function(){return{}},methods:{logout:function(){var t=this;this.$confirm("确认要退出登录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("LogOut").then(function(){t.$router.push({path:"/"})})})}}},n,!1,function(t){i("LpMh")},"data-v-4e498605",null);e.default=s.exports}});