webpackJsonp([95],{"/UEi":function(e,a){},kHaw:function(e,a,p){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={name:"LifeTableAdviseList",components:{CommonTable:function(){return p.e(97).then(p.bind(null,"Lk4z"))}},data:function(){return{adviseColumn:[{prop:"approval",width:120,label:"当前审核人",align:"center"},{prop:"nextApproval",width:120,label:"下级审核人",align:"center"},{prop:"approveTime",width:120,label:"审核时间",align:"center"},{prop:"approveAdvise",width:120,label:"审核意见",align:"center"}],adviseData:[{approval:"孙强",nextApproval:"张三",approveTime:"2018-05-05",approveAdvise:"同意"},{approval:"孙强",nextApproval:"张三",approveTime:"2018-04-04",approveAdvise:"继续补充"},{approval:"孙强",nextApproval:"张三",approveTime:"2018-03-03",approveAdvise:"继续修改"},{approval:"孙强",nextApproval:"张三",approveTime:"2018-02-02",approveAdvise:"建议补充"},{approval:"孙强",nextApproval:"张三",approveTime:"2018-01-01",approveAdvise:"建议修改"}]}}},r={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"data",staticStyle:{width:"100%"}},[a("common-table",{attrs:{columns:this.adviseColumn,dataSource:this.adviseData}})],1)])},staticRenderFns:[]};var i=p("VU/8")(t,r,!1,function(e){p("/UEi")},"data-v-4fad49a9",null);a.default=i.exports}});