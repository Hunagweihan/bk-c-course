(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{103:function(e,t,s){"use strict";s.r(t);var a=s(104);var i=s.n(a);for(var n in a)if(n!=="default")(function(e){s.d(t,e,function(){return a[e]})})(n);t["default"]=i.a},104:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a={name:"course_number",data:function e(){return{addType:false,isManage:false,CourseData:[],studentList:[],addList:[],student_id:[],course_id:"",formData:{name:"",class_number:""},studentInfo:{},file:{},data:[],page:{current:1,limit:10,count:30,location:"left",align:"right",showLimit:true,limitList:[10,20,30]},visible:{addstudent:{isshow:false},addexcel:{isshow:false},deletestudent:{isshow:false},deleteall:{isshow:false}}}},watch:{"$store.state.currentCourseId":function e(t){this.course_id=this.$store.state.currentCourseId;this.getList();this.judgeManage()}},created:function e(){var t=this;this.course_id=this.$store.state.currentCourseId;this.getList();this.$http.get("/course/find_courses/").then(function(e){if(e.result){t.CourseData=e.data}});this.userInfo=this.$store.state.user;this.judgeManage()},methods:{getList:function e(){var t=this;var s={};s.page_size=this.page.limit;s.course_id=this.course_id;s.page=this.page.current;this.$http.get("/course/search_course_student/",{params:s}).then(function(e){if(e.result){t.page.count=e.count;t.data=e.data}else{t.$bkMessage({message:e.message,delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.$http.get("/course/search_member_info/?member_identify=STUDENT").then(function(e){if(e.result){t.studentList=e.data}else{t.$bkMessage({message:"页面加载出错，请刷新重试！",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},judgeManage:function e(){var t=this;if(this.$store.state.user.identity==="TEACHER"){this.isManage=true}else{this.isManage=false;var s=this;this.CourseData.forEach(function(e){if(t.$store.state.currentCourseId===e.course_id){e.manage_student.forEach(function(e){var a=e.substring(0,e.indexOf("("));if(a===t.userInfo.class_number){s.isManage=true}})}})}},isTeacher:function e(t){if(t.identify==="TEACHER"){return false}else{return true}},addStudent:function e(){var t=this;if(this.addType){if(this.formData.name===""||this.formData.class_number===""){this.$bkMessage({message:"请补全内容",delay:1e3,theme:"error",affsetY:60,ellipsisLine:2})}else{this.formData.course_id=this.course_id;this.$http.post("/course/add_course_member/",this.formData).then(function(e){if(e.result){t.$bkMessage({message:e.message,delay:1e3,theme:"success",offsetY:60,ellipsisLine:2});t.getList()}else{t.$bkMessage({message:e.message,delay:1e3,theme:"error",affsetY:60,ellipsisLine:2})}})}}else{var s={};s.student_id=this.addList;s.course_id=this.course_id;this.$http.post("/course/add_course_student/",s).then(function(e){if(e.result){t.getList();t.$bkMessage({message:e.message,delay:1e3,theme:"success",offsetY:60,ellipsisLine:2});t.getList()}else{t.$bkMessage({message:e.message,delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.addList=[]}},addExcel:function e(t){var s=this;var a=new FormData;a.append("excel_file",t.fileList[0].origin);a.append("course_id",this.course_id);var i={headers:{"Content-Type":"multipart/form-data"}};this.$http.post("/course/import_student_excel/",a,i).then(function(e){if(e.result){s.getList();s.$bkMessage({message:"导入学生信息成功",delay:1e3,theme:"success",offsetY:60,ellipsisLine:2})}else{s.$bkMessage({message:e.message,delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},handleRes:function e(t){if(t.result){return true}return false},downtemplete:function e(){var t=this;var s=document.createElement("a");this.$http.get("/course/download_student_excel_template_url/").then(function(e){if(e.result){s.href=e.url;s.click()}else{t.$bkMessage({message:"点名册模板下载失败请重新尝试",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},handleSelect:function e(t){var s=this;this.student_id=[];t.forEach(function(e){s.student_id.push(e.id)})},removeallBefore:function e(){if(this.student_id!==0){this.visible.deleteall.isshow=true}},beforRemove:function e(t){this.student_id=[];this.studentInfo=t;this.student_id.push(t.id);this.visible.deletestudent.isshow=true},removeStudent:function e(t){var s=this;this.$http.delete("/course/delete_student_course_contact/",{params:{course_id:this.course_id,student_id:JSON.stringify(t)}}).then(function(e){if(e.result){s.getList();s.$bkMessage({message:e.message,delay:1e3,theme:"success",offsetY:60,ellipsisLine:2})}else{s.$bkMessage({message:"删除失败",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},pageChange:function e(){this.getList()},limitChange:function e(){this.page.current=1;this.getList()}}};t.default=a},105:function(e,t,s){},162:function(e,t,s){"use strict";var a=s(105);var i=s.n(a);var n=i.a},185:function(e,t,s){"use strict";var a=function(){var e=this;var t=e.$createElement;var s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"wrapper1"},[e.isManage?s("div",{staticClass:"wrapper-head"},[s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(t){e.visible.addstudent.isshow=true}}},[e._v("增加学生")]),e._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(t){e.visible.addexcel.isshow=true}}},[e._v("导入成员")]),e._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:e.downtemplete}},[e._v("下载点名册模板")]),e._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:e.removeallBefor}},[e._v("批量删除")])],1):e._e(),e._v(" "),s("div",{staticClass:"wrapper-body"},[s("bk-table",{staticStyle:{"margin-top":"15px"},attrs:{size:"small",data:e.data},on:{"selection-change":e.handleSelect,"row-mouse-enter":e.handleRowMouseEnter,"row-mouse-leave":e.handleRowMouseLeave,"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange}},[s("bk-table-column",{attrs:{type:"selection",width:"60",align:"center","header-align":"center",selectable:e.isTeacher}}),e._v(" "),s("bk-table-column",{attrs:{type:"index",label:"序列",align:"center","header-align":"center",width:"60"}}),e._v(" "),s("bk-table-column",{attrs:{label:"姓名",prop:"name",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{label:"学号",prop:"class_number",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{label:"专业",prop:"professional_class",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{label:"身份",prop:"identify",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.identify==="STUDENT"?s("span",[e._v("学生")]):e._e(),e._v(" "),t.row.identify==="TEACHER"?s("span",[e._v("老师")]):e._e(),e._v(" "),t.row.identify==="NOT_CERTIFIED"?s("span",[e._v("未认证")]):e._e()]}}])}),e._v(" "),e.isManage?s("bk-table-column",{attrs:{label:"操作",width:"150",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",disabled:t.row.identify==="TEACHER",text:""},on:{click:function(s){e.beforRemove(t.row)}}},[e._v("移除")])]}}])}):e._e()],1),e._v(" "),s("div",{staticStyle:{"padding-top":"10px"}},[s("bk-pagination",{attrs:{size:"small",current:e.page.current,limit:e.page.limit,count:e.page.count,location:e.page.location,align:e.page.align,"show-limit":e.page.showLimit,"limit-list":e.page.limitList,"show-total-count":true},on:{"update:current":function(t){e.$set(e.page,"current",t)},"update:limit":function(t){e.$set(e.page,"limit",t)},change:e.pageChange,"limit-change":e.limitChange}})],1)],1),e._v(" "),s("div",{attrs:{id:"dialog"}},[s("bk-dialog",{attrs:{theme:"primary","mask-close":false,title:"删除学生"},on:{confirm:function(t){e.removeStudent(e.student_id)}},model:{value:e.visible.deletestudent.isshow,callback:function(t){e.$set(e.visible.deletestudent,"isshow",t)},expression:"visible.deletestudent.isshow"}},[s("div",{staticClass:"dialog-body"},[e._v("\n                    你确定要删除"+e._s(e.studentInfo.name)+"同学吗?\n                ")])]),e._v(" "),s("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false},on:{confirm:function(t){e.removeStudent(e.student_id)}},model:{value:e.visible.deleteall.isshow,callback:function(t){e.$set(e.visible.deleteall,"isshow",t)},expression:"visible.deleteall.isshow"}},[s("div",{staticClass:"dialog-body"},[s("p",[e._v("确定要删除"+e._s(e.student_id.length)+"项内容吗？")])])]),e._v(" "),s("bk-dialog",{attrs:{theme:"primary",width:"530","mask-close":false,title:"增加学生"},on:{confirm:e.addStudent},model:{value:e.visible.addstudent.isshow,callback:function(t){e.$set(e.visible.addstudent,"isshow",t)},expression:"visible.addstudent.isshow"}},[e.addType===false?s("div",{staticStyle:{"text-align":"center"}},[s("div",{staticClass:"dialog-body"},[s("bk-select",{staticStyle:{width:"250px","margin-top":"10px"},attrs:{searchable:"",multiple:"","display-tag":""},model:{value:e.addList,callback:function(t){e.addList=t},expression:"addList"}},e._l(e.studentList,function(e){return s("bk-option",{key:e.member_id,attrs:{id:e.member_id,name:e.member_display_name}})}),1)],1),e._v(" "),s("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(t){e.addType=true}}},[e._v("学生未认证，点此添加")])],1):e._e(),e._v(" "),e.addType===true?s("div",[s("bk-form",{ref:"validateForm",attrs:{model:e.formData}},[s("bk-form-item",{attrs:{label:"姓名",required:true,property:"name","error-display-type":"normal"}},[s("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入姓名"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),s("bk-form-item",{attrs:{label:"学号",required:true,property:"class_number","error-display-type":"normal"}},[s("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入学号"},model:{value:e.formData.class_number,callback:function(t){e.$set(e.formData,"class_number",t)},expression:"formData.class_number"}})],1)],1),e._v(" "),s("bk-button",{staticStyle:{"margin-left":"90px","margin-top":"20px"},attrs:{theme:"primary",text:""},on:{click:function(t){e.addType=false}}},[e._v("学生已认证，点此添加")])],1):e._e()]),e._v(" "),s("bk-dialog",{attrs:{theme:"primary","mask-close":false,"show-footer":false,title:"导入学生名单"},model:{value:e.visible.addexcel.isshow,callback:function(t){e.$set(e.visible.addexcel,"isshow",t)},expression:"visible.addexcel.isshow"}},[s("div",{staticClass:"excel-dialog-body"},[s("div",{staticStyle:{width:"350px"}},[s("bk-upload",{attrs:{"with-credentials":true,"custom-request":e.addExcel,"handle-res-code":e.handleRes,limit:1,tip:"只限上传.xls文件",accept:".xls","delay-time":0},on:{"on-exceed":e.testExceed}})],1)])])],1)])])};var i=[];s.d(t,"a",function(){return a});s.d(t,"b",function(){return i})},79:function(e,t,s){"use strict";s.r(t);var a=s(185);var i=s(103);for(var n in i)if(n!=="default")(function(e){s.d(t,e,function(){return i[e]})})(n);var r=s(162);var l=s(2);var o=Object(l["a"])(i["default"],a["a"],a["b"],false,null,"081f044c",null);t["default"]=o.exports}}]);