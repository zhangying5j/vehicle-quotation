webpackJsonp([88],{CjOy:function(t,e){},fWNb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"RecommendStep",props:{step:{type:Number,default:0},steps:{type:Array,required:!0}},methods:{skipStep:function(t){var e=this.steps.find(function(e){return e.id===t});this.$router.push(e.path)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-steps",{staticStyle:{width:"90%",margin:"0 auto"},attrs:{"align-center":"",active:t.step}},t._l(t.steps,function(e){return n("el-step",{key:e.id,attrs:{icon:e.icon,title:e.title},nativeOn:{click:function(n){t.skipStep(e.id)}}})}))},staticRenderFns:[]};var s=n("VU/8")(i,r,!1,function(t){n("CjOy")},"data-v-37a1d019",null);e.default=s.exports}});