webpackJsonp([20],{GMt1:function(i,n){},v4rp:function(i,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("NYxO"),o={name:"IndividualVehicle",components:{RecommendStep:function(){return t.e(100).then(t.bind(null,"fWNb"))},QueryForm:function(){return t.e(113).then(t.bind(null,"dQTo"))}},created:function(){this.$store.dispatch("initPriceSteps")},data:function(){return{steps:[{id:"1",title:"推荐参数配置",icon:"iconfont icon-ziyuan1",path:"/admin/individual/declare/paramConfig"},{id:"2",title:"智能推荐",icon:"iconfont icon-ziyuan2",path:"/admin/individual/declare/recommend"},{id:"3",title:"自定义维度切分",icon:"iconfont icon-ziyuan3",path:"/admin/individual/declare/custom"},{id:"4",title:"确认业务小类结构",icon:"iconfont icon-ziyuan4",path:"/admin/individual/declare/confirm"},{id:"5",title:"编制定价策略",icon:"iconfont icon-ziyuan5",path:"/admin/individual/declare/config"},{id:"6",title:"补充定价规则",icon:"iconfont icon-ziyuan6",path:"/admin/individual/declare/supply"}]}},computed:Object(e.c)({individualSteps:function(i){return i.individual.individualSteps},stepProcess:function(i){return i.individual.stepProcess},lifeFormOptionShow:function(i){return i.individual.lifeFormOptionShow},lifeFormReadOnly:function(i){return i.individual.lifeFormReadOnly},versionFlag:function(i){return i.individual.versionFlag}}),methods:{querySector:function(){var i=this;this.$store.dispatch("queryParam").then(function(){i.$router.push({path:"/admin/individual/declare/paramConfig"})})},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})}}},a={render:function(){var i=this.$createElement,n=this._self._c||i;return n("div",{staticClass:"iv-container"},[n("div",{staticClass:"step"},[n("recommend-step",{attrs:{step:this.stepProcess,steps:this.individualSteps}})],1),this._v(" "),n("div",{staticClass:"c-main"},[n("div",{staticClass:"form"},[n("query-form",{on:{recommend:this.recommend,querySector:this.querySector}})],1),this._v(" "),n("router-view")],1)])},staticRenderFns:[]};var d=t("VU/8")(o,a,!1,function(i){t("GMt1")},"data-v-bcccb6c0",null);n.default=d.exports}});