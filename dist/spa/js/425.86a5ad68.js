"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[425],{6425:(e,a,t)=>{t.r(a),t.d(a,{default:()=>qe});var o=t(3673);const n={key:0,class:"row q-col-gutter-md"},s={class:"col-12"},l={class:"col-12"};function i(e,a,t,i,c,d){const r=(0,o.up)("docenteCuenta"),u=(0,o.up)("asesorias"),p=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(p,{padding:"",data:"coordinador/Docente"},{default:(0,o.w5)((()=>[i.docente?((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",s,[(0,o.Wm)(r,{docente:i.docente},null,8,["docente"])]),(0,o._)("div",l,[(0,o.Wm)(u,{docente:i.docente},null,8,["docente"])])])):(0,o.kq)("",!0)])),_:1})}var c=t(1959),d=t(8825),r=t(3617),u=t(9582),p=t(8880);const m={class:"col-6"},v={class:"text-caption text-white"},g=(0,o.Uk)("Docente "),_={key:0,class:"text-secondary"},w={key:0,class:"col-6 text-right text-white"},y={class:"col-12"},f={class:"col-6"},b={class:"col-6"},k={key:1,class:"col-6 text-center"},W={key:2,class:"col-6 text-center"},h={key:3,class:"col-12 text-center"};function q(e,a,t,n,s,l){const i=(0,o.up)("q-toggle"),c=(0,o.up)("q-icon"),d=(0,o.up)("q-input"),r=(0,o.up)("q-btn"),u=(0,o.up)("q-form"),q=(0,o.up)("q-card-section"),x=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(x,{class:"shadow-24 bg-dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"row q-col-gutter-md items-center",onSubmit:(0,p.iM)(n.updateAccount,["prevent"])},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("div",v,[g,t.docente.docente_user.active?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",_,"deshabilitado"))])]),t.docente.docente_user.active?((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(i,{label:"Modificar",modelValue:n.modifyAccount,"onUpdate:modelValue":a[0]||(a[0]=e=>n.modifyAccount=e)},null,8,["modelValue"])])):(0,o.kq)("",!0),(0,o._)("div",y,[(0,o.Wm)(d,{label:"Nombre",modelValue:t.docente.docente_user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.docente.docente_user.name=e),dark:"",standout:"",dense:"",readonly:!n.modifyAccount},{prepend:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"person"})])),_:1},8,["modelValue","readonly"])]),(0,o._)("div",f,[(0,o.Wm)(d,{label:"Cuenta",modelValue:t.docente.docente_user.user,"onUpdate:modelValue":a[2]||(a[2]=e=>t.docente.docente_user.user=e),dark:"",standout:"",dense:"",readonly:!n.modifyAccount},{prepend:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"account_box"})])),_:1},8,["modelValue","readonly"])]),(0,o._)("div",b,[(0,o.Wm)(d,{label:"Correo electrónico",modelValue:t.docente.docente_user.email,"onUpdate:modelValue":a[3]||(a[3]=e=>t.docente.docente_user.email=e),dark:"",standout:"",dense:"",readonly:!n.modifyAccount},null,8,["modelValue","readonly"])]),n.modifyAccount&&t.docente.docente_user.active?((0,o.wg)(),(0,o.iD)("div",k,[(0,o.Wm)(r,{label:"Deshabilitar",onClick:n.disableAccount,color:"negative",unelevated:"",size:"sm","no-caps":""},null,8,["onClick"])])):(0,o.kq)("",!0),n.modifyAccount&&t.docente.docente_user.active?((0,o.wg)(),(0,o.iD)("div",W,[(0,o.Wm)(r,{label:"Guardar",color:"primary",unelevated:"",type:"submit"})])):(0,o.kq)("",!0),t.docente.docente_user.active?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(r,{label:"Habilitar usuario",onClick:n.enableAccount,color:"secondary",unelevated:""},null,8,["onClick"])]))])),_:1},8,["onSubmit"])])),_:1})])),_:1})}const x={props:["docente"],setup(e){const a=(0,d.Z)(),t=(0,r.oR)(),o=((0,u.tv)(),(0,c.iH)(e.docente)),n=(0,c.iH)(!1),s=async()=>{o.value.docente_user.active=!1,n.value=!1,t.dispatch("api/SaveUser",{user:o.value.docente_user})},l=async()=>{o.value.docente_user.active=!0,n.value=!1,t.dispatch("api/SaveUser",{user:o.value.docente_user})},i=async()=>{try{await t.dispatch("api/SaveUser",{user:o.value.docente_user});a.notify("Datos guardados"),n.value=!1}catch(e){a.notify(e.message)}};return{modifyAccount:n,disableAccount:s,enableAccount:l,updateAccount:i}}};var Z=t(4260),D=t(151),V=t(5589),C=t(5269),Q=t(8886),U=t(4842),A=t(4554),I=t(8240),H=t(7518),S=t.n(H);const z=(0,Z.Z)(x,[["render",q]]),L=z;S()(x,"components",{QCard:D.Z,QCardSection:V.Z,QForm:C.Z,QToggle:Q.Z,QInput:U.Z,QIcon:A.Z,QBtn:I.Z});var j=t(2323);const G={class:"row full-width items-center"},P=(0,o._)("div",{class:"col-6"},[(0,o._)("div",{class:"text-caption"},"Asesorias")],-1),T={class:"col-6 text-right"},R={class:"text-bold"},B={class:"text-caption text-grey"},F={class:"text-caption text-grey"},K=(0,o._)("div",{class:"text-center text-caption text-grey"},[(0,o.Uk)("Se muestran los contenidos registrados hasta el el momento por el docente. Los reportes de desempeño aprobados por el director se encuentran en la sección de "),(0,o._)("strong",null,"reportes"),(0,o.Uk)(".")],-1);function Y(e,a,t,n,s,l){const i=(0,o.up)("q-inner-loading"),c=(0,o.up)("asignar"),d=(0,o.up)("q-td"),r=(0,o.up)("q-tr"),u=(0,o.up)("q-table"),p=(0,o.up)("q-card-section"),m=(0,o.up)("desempeno"),v=(0,o.up)("q-card"),g=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(v,{class:"shadow-24"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{showing:n.loading,color:"primary"},null,8,["showing"]),(0,o.Wm)(u,{class:"shadow-0",rows:n.asesorias,columns:n.columns,pagination:n.pagination},{top:(0,o.w5)((()=>[(0,o._)("div",G,[P,(0,o._)("div",T,[(0,o.Wm)(c,{yaregistradas:n.asesorias,docente:t.docente,onUpdated:n.loadItems},null,8,["yaregistradas","docente","onUpdated"])])])])),body:(0,o.w5)((e=>[e.row&&e.row.estudiante_user?((0,o.wg)(),(0,o.j4)(r,{key:0,class:"cursor-pointer",props:e,onClick:a=>n.openView(e.row)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{key:"estudiante",props:e},{default:(0,o.w5)((()=>[(0,o._)("div",R,(0,j.zw)(e.row.estudiante_user.name),1),(0,o._)("div",B,(0,j.zw)(e.row.asignacion.estudiante.tituloInvestigacion),1),(0,o._)("div",F,(0,j.zw)(e.row.asignacion.periodo.name),1)])),_:2},1032,["props"]),(0,o.Wm)(d,{class:"text-bold text-capitalize",key:"tipo",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,j.zw)(e.row.tipo),1)])),_:2},1032,["props"])])),_:2},1032,["props","onClick"])):(0,o.kq)("",!0)])),_:1},8,["rows","columns","pagination"]),(0,o.Wm)(g,{modelValue:n.dialog,"onUpdate:modelValue":a[0]||(a[0]=e=>n.dialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[K])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{item:n.activeItem,conacyt:""},null,8,["item"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}var M=t(4706);const J={class:"text-body1"},N={class:"text-caption text-grey"},$={class:"text-caption text-blue-grey"},E=(0,o._)("strong",null,"Director:",-1),O={class:"text-caption text-blue-grey"},X=(0,o._)("strong",null,"Lectores:",-1),ee={class:"text-center"},ae=(0,o._)("div",{class:"text-caption text-grey"},[(0,o.Uk)("Se muestran estudiantes inscritos al periodo actual. Para asignar docente a otros periodos vaya a la sección "),(0,o._)("strong",null,"estudiantes"),(0,o.Uk)(".")],-1);function te(e,a,t,n,s,l){const i=(0,o.up)("q-btn"),c=(0,o.up)("q-item-section"),d=(0,o.up)("q-checkbox"),r=(0,o.up)("q-item"),u=(0,o.up)("q-list"),p=(0,o.up)("q-separator"),m=(0,o.up)("q-card-section"),v=(0,o.up)("q-card"),g=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{label:"Asignar asesoría",unelevated:"",onClick:n.openDialog,"no-caps":"",color:"primary"},null,8,["onClick"]),(0,o.Wm)(g,{modelValue:n.dialog,"onUpdate:modelValue":a[2]||(a[2]=e=>n.dialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"shadow-24"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{dense:"",separator:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.periodosDisponibles,((e,t)=>((0,o.wg)(),(0,o.j4)(r,null,{default:(0,o.w5)((()=>[e.estudiante_user?((0,o.wg)(),(0,o.j4)(c,{key:0},{default:(0,o.w5)((()=>[(0,o._)("div",J,(0,j.zw)(e.estudiante_user.name),1),(0,o._)("div",N,(0,j.zw)(e.estudiante.tituloInvestigacion||"Investigación sin título"),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.asesores_directores,((e,a)=>((0,o.wg)(),(0,o.iD)("div",$,[E,(0,o.Uk)(" "+(0,j.zw)(e.docente_user.name),1)])))),256)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.asesores_lectores,((e,a)=>((0,o.wg)(),(0,o.iD)("div",O,[X,(0,o.Uk)(" "+(0,j.zw)(e.docente_user.name),1)])))),256))])),_:2},1024)):(0,o.kq)("",!0),(0,o.Wm)(c,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:n.seleccionDirector,"onUpdate:modelValue":a[0]||(a[0]=e=>n.seleccionDirector=e),val:e,label:"Director",disable:e.asesores_directores.length>0},null,8,["modelValue","val","disable"])])),_:2},1024),(0,o.Wm)(c,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:n.seleccionLector,"onUpdate:modelValue":a[1]||(a[1]=e=>n.seleccionLector=e),val:e,label:"Lector",disable:e.asesores_lectores.length>2},null,8,["modelValue","val","disable"])])),_:2},1024)])),_:2},1024)))),256))])),_:1}),(0,o.Wm)(p,{spaced:""}),(0,o._)("div",ee,[(0,o.Wm)(i,{label:"Guardar asignaciones",color:"primary",unelevated:"",onClick:n.saveItems,"no-caps":""},null,8,["onClick"])]),(0,o.Wm)(p,{spaced:""}),ae])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const oe={props:["yaregistradas","docente"],setup(e,a){const t=(0,d.Z)(),n=(0,r.oR)(),s=((0,u.tv)(),(0,o.f3)("$_"),(0,c.iH)([])),l=(0,c.iH)([]),i=(0,c.iH)(!1),p=()=>{i.value=!0,v()},m=(0,c.iH)(null),v=async()=>{const a=n.getters["api/getPeriodo"],t={"periodo._id":a._id},o=await n.dispatch("api/GetAllDataFilteredV2",["asignaciones",t]);let s=o;for(var l in e.yaregistradas){const a=e.yaregistradas[l].asignacion;var i=s.findIndex((e=>e._id==a._id));s.splice(i,1)}m.value=s},g=async()=>{for(var o in s.value){const a=s.value[o];let t={docente:e.docente.user,asignacion:{_id:a._id,link:"asignaciones"},tipo:"director",coll:"asesores"};await n.dispatch("api/SaveItem",t)}for(var o in l.value){const a=l.value[o];let t={docente:e.docente.user,asignacion:{_id:a._id,link:"asignaciones"},tipo:"lector",coll:"asesores"};await n.dispatch("api/SaveItem",t)}i.value=!1,s.value.length>0||l.value.length>0?(t.notify("Asesorías asignadas"),a.emit("updated")):t.notify("Sin cambios por realizar"),s.value=[],l.value=[]};return{dialog:i,openDialog:p,periodosDisponibles:m,seleccionDirector:s,seleccionLector:l,saveItems:g}}};var ne=t(6778),se=t(7011),le=t(3414),ie=t(2035),ce=t(5735),de=t(5869);const re=(0,Z.Z)(oe,[["render",te]]),ue=re;S()(oe,"components",{QBtn:I.Z,QDialog:ne.Z,QCard:D.Z,QCardSection:V.Z,QList:se.Z,QItem:le.Z,QItemSection:ie.Z,QCheckbox:ce.Z,QSeparator:de.Z});var pe=t(6061),me=t.n(pe);const ve={components:{desempeno:M.Z,asignar:ue,VueJsonPretty:me()},props:["docente"],setup(e){(0,d.Z)();const a=(0,r.oR)(),t=((0,u.tv)(),(0,c.iH)(!0)),o=(0,c.iH)(!1),n=(0,c.iH)(!1),s=(0,c.iH)(null),l=()=>{a.dispatch("api/GetAllData","coordinadors").then((e=>{e[0].firma&&(s.value=e[0].firma)}))};l();const i=[{name:"estudiante",label:"Investigación",field:"estudiante",align:"left"},{name:"tipo",label:"Tipo",field:"tipo",align:"left"}],p={sortBy:"active",rowsPerPage:10,descending:!0},m=e=>{o.value=!0,n.value=e},v=(0,c.iH)([]),g=async()=>{t.value=!0;const o={docente:e.docente.user._id},n=await a.dispatch("api/GetAllDataFilteredV2",["asesores",o]);v.value=n,t.value=!1};return g(),{columns:i,pagination:p,asesorias:v,openView:m,dialog:o,activeItem:n,firmaCoordinador:s,loadItems:g,loading:t}}};var ge=t(6941),_e=t(3243),we=t(8186),ye=t(3884);const fe=(0,Z.Z)(ve,[["render",Y]]),be=fe;S()(ve,"components",{QCard:D.Z,QCardSection:V.Z,QInnerLoading:ge.Z,QTable:_e.Z,QTr:we.Z,QTd:ye.Z,QDialog:ne.Z});const ke={components:{docenteCuenta:L,asesorias:be},setup(){(0,d.Z)();const e=(0,r.oR)(),a=((0,u.tv)(),(0,u.yj)()),t=(0,c.iH)(null),o=async()=>{const o=await e.dispatch("api/GetSingleData",{coll:"docentes",id:a.params.id});t.value=o[0]};return o(),{docente:t}}};var We=t(4379);const he=(0,Z.Z)(ke,[["render",i]]),qe=he;S()(ke,"components",{QPage:We.Z})}}]);