webpackJsonp([23],{FK0D:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Xxa5"),i=a.n(r),n=a("exGp"),l=a.n(n),s=a("Dd8w"),d=a.n(s),o=a("NYxO"),u={data:function(){return{id:this.$route.params.id,detail:null,formValidate:{title:"",link:""},ruleValidate:{title:[{required:!0,message:"广告标题不能为空",trigger:"blur"}],link:[{required:!0,message:"广告链接不能为空",trigger:"blur"}]}}},created:function(){this.fetchData()},methods:d()({},Object(o.b)({getAdvertise:"advertise/getAdvertise",updateAdvertise:"advertise/updateAdvertise"}),{fetchData:function(){var e=this;return l()(i.a.mark(function t(){var a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getAdvertise({id:e.id});case 3:a=t.sent,r=a.data.data,e.formValidate.title=r.title,e.formValidate.link=r.link,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}},t,e,[[0,9]])}))()},update:function(){var e=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.formValidate.id=e.id,t.prev=1,t.next=4,e.updateAdvertise(e.formValidate);case 4:e.$Message.success("更新成功!"),e.$router.push("/advertise"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}},t,e,[[1,8]])}))()},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.update():t.$Message.error("请完成表单!")})},handleReset:function(e){this.$refs[e].resetFields()}})},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"广告标题",prop:"title"}},[a("Input",{attrs:{placeholder:"广告名称"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),e._v(" "),a("FormItem",{attrs:{label:"广告链接",prop:"link"}},[a("Input",{attrs:{placeholder:"广告链接"},model:{value:e.formValidate.link,callback:function(t){e.$set(e.formValidate,"link",t)},expression:"formValidate.link"}})],1),e._v(" "),a("FormItem",[a("Button",{on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("重置")]),e._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]},f=a("VU/8")(u,c,!1,null,null,null);t.default=f.exports}});