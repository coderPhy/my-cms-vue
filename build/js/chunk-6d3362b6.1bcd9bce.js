(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3362b6"],{1021:function(e,t,n){"use strict";n("da73")},3573:function(e,t,n){"use strict";var o=n("7a23"),r={class:"page-content"},a=["innerHTML"],c=Object(o["createTextVNode"])("修改"),i=Object(o["createTextVNode"])("删除");function l(e,t,n,l,u,p){var s=Object(o["resolveComponent"])("el-button"),d=Object(o["resolveComponent"])("hy-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createVNode"])(d,Object(o["mergeProps"])(e.contentTableConfig,{listData:e.dataList,dataCount:e.dataCount,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=function(t){return e.pageInfo=t}),onSelectionChange:e.selectionChange}),Object(o["createSlots"])({headerHandler:Object(o["withCtx"])((function(){return[e.isCreate?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,type:"primary",size:"medium",onClick:e.handleNewClick},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.headerBtnText),1)]})),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0)]})),content:Object(o["withCtx"])((function(e){return[Object(o["createElementVNode"])("div",{innerHTML:e.row.content},null,8,a)]})),enable:Object(o["withCtx"])((function(e){return[Object(o["createVNode"])(s,{size:"mini",type:e.row.enable?"success":"danger"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.enable?"启用":"禁用"),1)]})),_:2},1032,["type"])]})),createAt:Object(o["withCtx"])((function(t){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]})),updateAt:Object(o["withCtx"])((function(t){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$filters.formatTime(t.row.updateAt)),1)]})),handle:Object(o["withCtx"])((function(t){return[e.isUpdate?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,onClick:function(n){return e.handleEditClick(t.row)},type:"text",sie:"mini",icon:"el-icon-edit"},{default:Object(o["withCtx"])((function(){return[c]})),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0),e.isDelete?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,onClick:function(n){return e.handleDeleteClick(t.row)},type:"text",sie:"mini",icon:"el-icon-delete"},{default:Object(o["withCtx"])((function(){return[i]})),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0)]})),footer:Object(o["withCtx"])((function(){return[]})),_:2},[Object(o["renderList"])(e.outerPropSlots,(function(t){return{name:t.slotName,fn:Object(o["withCtx"])((function(n){return[t.slotName?Object(o["renderSlot"])(e.$slots,t.slotName,{key:0,row:n.row},void 0,!0):Object(o["createCommentVNode"])("",!0)]}))}}))]),1040,["listData","dataCount","page","onSelectionChange"])])}n("4de4"),n("d3b7");var u=n("9ab4"),p=(n("7db0"),n("0613"));function s(e,t){var n=Object(p["c"])(),o=n.state.login.permissions,r="system:"+e+":"+t;return!!o.find((function(e){return e===r}))}var d={class:"table"},b={class:"header"},f={class:"title"},g={class:"handler"},m={key:0,class:"footer"};function O(e,t,n,r,a,c){var i=Object(o["resolveComponent"])("el-table-column"),l=Object(o["resolveComponent"])("el-table"),u=Object(o["resolveComponent"])("el-pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",d,[Object(o["createElementVNode"])("div",b,[Object(o["renderSlot"])(e.$slots,"header",{},(function(){return[Object(o["createElementVNode"])("div",f,Object(o["toDisplayString"])(n.title),1),Object(o["createElementVNode"])("div",g,[Object(o["renderSlot"])(e.$slots,"headerHandler",{},void 0,!0)])]}),!0)]),Object(o["createVNode"])(l,{data:n.listData,border:"",style:{width:"100%"},onSelectionChange:r.handleSelectionChange,"row-key":n.childrenProps.rowKey,"tree-props":n.childrenProps.treeProp},{default:Object(o["withCtx"])((function(){return[n.showSelectColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,type:"selection",align:"center",width:"60px"})):Object(o["createCommentVNode"])("",!0),n.showIndexColumn?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1,type:"index",label:"序号",align:"center",width:"60px"})):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.propList,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(i,Object(o["mergeProps"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(o["withCtx"])((function(n){return[Object(o["renderSlot"])(e.$slots,t.slotName,{row:n.row},(function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.row[t.prop]),1)]}),!0)]})),_:2},1040)})),128))]})),_:3},8,["data","onSelectionChange","row-key","tree-props"]),n.showFooter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m,[Object(o["renderSlot"])(e.$slots,"footer",{},(function(){return[Object(o["createVNode"])(u,{onSizeChange:r.handleSizeChange,onCurrentChange:r.handleCurrentChange,"current-page":n.page.currentPage,"page-sizes":[10,20,30],"page-size":n.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:n.dataCount},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]}),!0)])):Object(o["createCommentVNode"])("",!0)])}n("a9e3");var j={props:{title:{type:String,default:""},listData:{type:Array,required:!0},propList:{type:Array,requiredL:!0},dataCount:{type:Number,default:0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,dafault:!1},page:{type:Object,default:function(){return{currentPage:0,pageSize:10}}},childrenProps:{type:Object,default:function(){return{}}},showFooter:{type:Boolean,default:!0}},emits:["selectionChange","update:page"],setup:function(e,t){var n=t.emit,o=function(e){n("selectionChange",e)},r=function(t){n("update:page",Object(u["a"])(Object(u["a"])({},e.page),{pageSize:t}))},a=function(t){n("update:page",Object(u["a"])(Object(u["a"])({},e.page),{currentPage:t}))};return{handleSelectionChange:o,handleSizeChange:r,handleCurrentChange:a}}},h=(n("7698"),n("6b0d")),C=n.n(h);const N=C()(j,[["render",O],["__scopeId","data-v-55f5cb94"]]);var y=N,v=y,w=Object(o["defineComponent"])({props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0},headerBtnText:{type:String,default:"新建"}},components:{hyTable:v},emits:["newBtnClick","editBtnClick"],setup:function(e,t){var n=t.emit,r=Object(p["c"])(),a=s(e.pageName,"create"),c=s(e.pageName,"update"),i=s(e.pageName,"delete"),l=s(e.pageName,"query"),d=Object(o["ref"])({currentPage:1,pageSize:10});Object(o["watch"])(d,(function(){b()}));var b=function(t){void 0===t&&(t={}),l&&r.dispatch("system/getPageListAction",{pageName:e.pageName,queryInfo:Object(u["a"])({offset:(d.value.currentPage-1)*d.value.pageSize,size:d.value.pageSize},t)})};b({});var f=Object(o["computed"])((function(){return r.getters["system/pageListData"](e.pageName)})),g=Object(o["computed"])((function(){return r.getters["system/pageListCount"](e.pageName)})),m=function(){},O=e.contentTableConfig.propList.filter((function(e){return"createAt"!==e.slotName&&("enable"!==e.slotName&&("updateAt"!==e.slotName&&("handle"!==e.slotName&&("handle"!==e.slotName&&"content"!==e.slotName))))})),j=function(t){r.dispatch("system/deletePageDataAction",{pageName:e.pageName,id:t.id})},h=function(){n("newBtnClick")},C=function(e){n("editBtnClick",e)};return{dataList:f,dataCount:g,pageInfo:d,getPageData:b,outerPropSlots:O,selectionChange:m,isCreate:a,isUpdate:c,isDelete:i,handleDeleteClick:j,handleNewClick:h,handleEditClick:C}}});n("1021");const k=C()(w,[["render",l],["__scopeId","data-v-1a4dff5e"]]);var S=k;t["a"]=S},"408a":function(e,t,n){var o=n("e330");e.exports=o(1..valueOf)},"4de4":function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").filter,a=n("1dde"),c=a("filter");o({target:"Array",proto:!0,forced:!c},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("e330"),r=n("1d80"),a=n("577e"),c=n("5899"),i=o("".replace),l="["+c+"]",u=RegExp("^"+l+l+"*"),p=RegExp(l+l+"*$"),s=function(e){return function(t){var n=a(r(t));return 1&e&&(n=i(n,u,"")),2&e&&(n=i(n,p,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5f65":function(e,t,n){},7156:function(e,t,n){var o=n("1626"),r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var c,i;return a&&o(c=t.constructor)&&c!==n&&r(i=c.prototype)&&i!==n.prototype&&a(e,i),e}},7698:function(e,t,n){"use strict";n("5f65")},a9e3:function(e,t,n){"use strict";var o=n("83ab"),r=n("da84"),a=n("e330"),c=n("94ca"),i=n("6eeb"),l=n("1a2d"),u=n("7156"),p=n("3a9b"),s=n("d9b5"),d=n("c04e"),b=n("d039"),f=n("241c").f,g=n("06cf").f,m=n("9bf2").f,O=n("408a"),j=n("58a8").trim,h="Number",C=r[h],N=C.prototype,y=r.TypeError,v=a("".slice),w=a("".charCodeAt),k=function(e){var t=d(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,n,o,r,a,c,i,l,u=d(e,"number");if(s(u))throw y("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=j(u),t=w(u,0),43===t||45===t){if(n=w(u,2),88===n||120===n)return NaN}else if(48===t){switch(w(u,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+u}for(a=v(u,2),c=a.length,i=0;i<c;i++)if(l=w(a,i),l<48||l>r)return NaN;return parseInt(a,o)}return+u};if(c(h,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var x,B=function(e){var t=arguments.length<1?0:C(k(e)),n=this;return p(N,n)&&b((function(){O(n)}))?u(Object(t),n,B):t},T=o?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;T.length>V;V++)l(C,x=T[V])&&!l(B,x)&&m(B,x,g(C,x));B.prototype=N,N.constructor=B,i(r,h,B)}},ab96:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"menu"};function a(e,t,n,a,c,i){var l=Object(o["resolveComponent"])("page-content");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createVNode"])(l,{contentTableConfig:e.contentTableConfig,pageName:"menu"},null,8,["contentTableConfig"])])}var c=n("3573"),i={title:"菜单列表",propList:[{prop:"name",label:"菜单名称",minWidth:"100"},{prop:"type",label:"类型",minWidth:"60"},{prop:"url",label:"菜单url",minWidth:"100"},{prop:"icon",label:"菜单icon",minWidth:"100"},{prop:"permission",label:"按钮权限",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handle"}],childrenProps:{rowKey:"id",treeProp:{children:"children"}},showFooter:!1},l=Object(o["defineComponent"])({name:"sMenu",components:{pageContent:c["a"]},setup:function(){return{contentTableConfig:i}}}),u=n("6b0d"),p=n.n(u);const s=p()(l,[["render",a]]);t["default"]=s},da73:function(e,t,n){}}]);
//# sourceMappingURL=chunk-6d3362b6.1bcd9bce.js.map