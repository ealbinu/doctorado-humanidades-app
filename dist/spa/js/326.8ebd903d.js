"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[326],{9326:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var o=a(3673),r=a(2323),n=a(9901),s=a.n(n),l=a(9881),u=a.n(l);const i={class:"q-pa-sm"},c=(0,o.Uk)("Bienvenido, "),d=(0,o.Uk)("."),p={class:"text-right text-caption"},m={class:"text-caption text-dark"},g={class:"text-caption text-dark text-bold"},w={class:"q-pa-sm full-height"},b={class:"full-height rounded-borders shadow-24 text-white text-bold drawerContainer"},f={class:"q-px-sm q-py-sm text-center"},_={class:"flex column q-pa-sm text-center items-center"};function h(e,t,a,n,l,h){const v=(0,o.up)("q-btn"),q=(0,o.up)("q-toolbar-title"),k=(0,o.up)("q-toolbar"),x=(0,o.up)("q-header"),D=(0,o.up)("q-img"),Z=(0,o.up)("currentP"),W=(0,o.up)("q-icon"),Q=(0,o.up)("q-item-section"),I=(0,o.up)("q-item-label"),P=(0,o.up)("q-item"),y=(0,o.up)("estudianteMenu"),z=(0,o.up)("q-list"),C=(0,o.up)("q-separator"),U=(0,o.up)("q-drawer"),F=(0,o.up)("router-view"),H=(0,o.up)("q-page-container"),L=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(L,{view:"lhr LpR fFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{class:"bg-transparent"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(k,{class:"text-dark bg-white rounded-borders"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"q-px-xs",icon:n.leftDrawerOpen?"menu":"menu_open",onClick:n.toggleLeftDrawer,flat:""},null,8,["icon","onClick"]),(0,o.Wm)(q,{class:"text-body1"},{default:(0,o.w5)((()=>[c,(0,o._)("strong",null,(0,r.zw)(n.userData?n.userData.name:""),1),d])),_:1}),(0,o._)("div",p,[(0,o._)("div",m,(0,r.zw)(n.userData?n.userData.user:""),1),(0,o._)("div",g,(0,r.zw)(n.userData?n.userData.email:""),1)])])),_:1})])])),_:1}),(0,o.Wm)(U,{modelValue:n.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=e=>n.leftDrawerOpen=e),breakpoint:820},{default:(0,o.w5)((()=>[(0,o._)("div",w,[(0,o._)("section",b,[(0,o._)("div",f,[(0,o.Wm)(D,{src:s()}),(0,o.Wm)(Z)]),(0,o.Wm)(z,{class:"q-pa-sm",separator:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.menuItems,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[n.visibleForUser(e)?((0,o.wg)(),(0,o.j4)(P,{key:0,class:"rounded-borders",clickable:"",to:e.path,"active-class":"text-accent"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{name:e.icon},null,8,["name"])])),_:2},1024),(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])):(0,o.kq)("",!0)],64)))),256)),n.userData?((0,o.wg)(),(0,o.j4)(y,{key:0,userdata:n.userData},null,8,["userdata"])):(0,o.kq)("",!0)])),_:1}),(0,o._)("footer",_,[(0,o.Wm)(v,{label:"Cerrar sesión",color:"white","text-color":"dark",size:"sm","no-caps":"",onClick:n.logoutFN},null,8,["onClick"]),(0,o.Wm)(C,{class:"full-width",spaced:""}),(0,o.Wm)(D,{src:u()})])])])])),_:1},8,["modelValue"]),(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(F)])),_:1})])),_:1})}var v=a(1959),q=a(3617),k=a(9582);function x(e,t,a,n,s,l){const u=(0,o.up)("q-icon"),i=(0,o.up)("q-item-section"),c=(0,o.up)("q-item-label"),d=(0,o.up)("q-item");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.menuItems,((e,t)=>((0,o.wg)(),(0,o.j4)(d,{class:"rounded-borders",clickable:"",to:"/periodo/"+e._id,"active-class":"text-accent"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"description"})])),_:1}),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Periodo "+(0,r.zw)(e.periodo.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),256)}const D={props:["userdata"],setup(e){const t=(0,q.oR)(),a=((0,k.tv)(),(0,v.iH)([])),o=((0,v.iH)([]),()=>{const o={estudiante:e.userdata.id};t.dispatch("api/GetAllDataFilteredV2",["asignaciones",o]).then((e=>{a.value=e}))});return"estudiante"==e.userdata.group&&o(),{menuItems:a}}};var Z=a(4260),W=a(3414),Q=a(2035),I=a(4554),P=a(2350),y=a(7518),z=a.n(y);const C=(0,Z.Z)(D,[["render",x]]),U=C;z()(D,"components",{QItem:W.Z,QItemSection:Q.Z,QIcon:I.Z,QItemLabel:P.Z});const F={class:"text-h6"},H={class:"text-caption text-grey"},L=(0,o._)("span",{class:"text-primary text-bold q-mx-sm"},"- ",-1);function j(e,t,a,n,s,l){const u=(0,o.up)("datesprogress"),i=(0,o.up)("q-card-section");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o._)("div",F,(0,r.zw)(n.currentP.name),1),(0,o._)("div",H,[(0,o.Uk)((0,r.zw)(n.currentP.startDate),1),L,(0,o.Uk)((0,r.zw)(n.currentP.endDate),1)]),n.currentP?((0,o.wg)(),(0,o.j4)(u,{key:0,date1:n.currentP.startDate,date2:n.currentP.endDate},null,8,["date1","date2"])):(0,o.kq)("",!0)])),_:1})])}var R=a(8825),O=a(4131);const S={components:{datesprogress:O.Z},setup(){(0,R.Z)();const e=(0,q.oR)(),t=((0,k.tv)(),(0,v.Fl)((()=>e.getters["api/getPeriodo"])));return e.dispatch("api/GetPeriodo"),{currentP:t}}};var V=a(5589);const G=(0,Z.Z)(S,[["render",j]]),M=G;z()(S,"components",{QCardSection:V.Z});const T={components:{estudianteMenu:U,currentP:M},setup(){const e=(0,q.oR)(),t=(0,k.tv)(),a=(0,v.iH)([{label:"Inicio",path:"/dashboard",icon:"notes",group:["estudiante"]},{label:"Investigaciones",path:"/dashboard",icon:"description",group:["docente"]},{label:"Panel",path:"/dashboard",icon:"insights",group:["admin","coordinador"]},{label:"Estudiantes",path:"/estudiantes",icon:"people_alt",group:["admin","coordinador"]},{label:"Docentes",path:"/docentes",icon:"contact_page",group:["admin","coordinador"]},{label:"Periodos",path:"/periodos",icon:"date_range",group:["admin","coordinador"]},{label:"Generaciones",path:"/generaciones",icon:"group_work",group:["admin","coordinador"]},{label:"Reportes",path:"/reportesconacyt",icon:"summarize",group:["admin","coordinador"]},{label:" Mi cuenta",path:"/mi-cuenta",icon:"auto_awesome",group:["admin","coordinador","docente"]}]),o=()=>{e.dispatch("api/Logout"),t.push("/")},r=(0,v.iH)(!0),n=(0,v.Fl)((()=>e.getters["api/getUser"])),s=e=>null===n.value||!e.group||!!e.group.includes(n.value.group);return{menuItems:a,leftDrawerOpen:r,toggleLeftDrawer(){r.value=!r.value},logoutFN:o,userData:n,visibleForUser:s}}};var Y=a(9214),B=a(3812),K=a(9570),N=a(8240),A=a(3747),E=a(2901),J=a(4027),X=a(7011),$=a(5869),ee=a(2652);const te=(0,Z.Z)(T,[["render",h]]),ae=te;z()(T,"components",{QLayout:Y.Z,QHeader:B.Z,QToolbar:K.Z,QBtn:N.Z,QToolbarTitle:A.Z,QDrawer:E.Z,QImg:J.Z,QList:X.Z,QItem:W.Z,QItemSection:Q.Z,QIcon:I.Z,QItemLabel:P.Z,QSeparator:$.Z,QPageContainer:ee.Z})}}]);