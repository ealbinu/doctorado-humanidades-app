"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[592],{1592:(e,a,o)=>{o.r(a),o.d(a,{default:()=>A});var t=o(3673);function n(e,a,o,n,s,i){const l=(0,t.up)("activos"),r=(0,t.up)("q-separator"),c=(0,t.up)("inactivos"),d=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(d,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{ref:"docentesActivos"},null,512),(0,t.Wm)(r,{spaced:""}),(0,t.Wm)(c,{onUpdated:a[0]||(a[0]=e=>n.docentesActivos.addDocente(e))})])),_:1})}var s=o(1959),i=o(8825),l=o(3617),r=o(9582),c=o(2323);const d=(0,t._)("div",{class:"text-h6"},"Usuarios no habilitados",-1),p=(0,t.Uk)("Habilitar usuario");function u(e,a,o,n,s,i){const l=(0,t.up)("q-inner-loading"),r=(0,t.up)("q-td"),u=(0,t.up)("q-tooltip"),m=(0,t.up)("q-toggle"),w=(0,t.up)("q-tr"),g=(0,t.up)("q-table"),f=(0,t.up)("q-card-section"),v=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(v,{class:"shadow-24"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,{class:(0,c.C_)(["shadow-0",0==n.inactivos.length?"text-grey-4":""]),rows:n.inactivos,columns:n.columns,dense:"",pagination:n.pagination},{top:(0,t.w5)((()=>[d])),loading:(0,t.w5)((()=>[(0,t.Wm)(l,{showing:"",color:"primary"})])),body:(0,t.w5)((e=>[(0,t.Wm)(w,{props:e,"no-hover":""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-bold",key:"user",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.row.user),1)])),_:2},1032,["props"]),(0,t.Wm)(r,{key:"name",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.row.name),1)])),_:2},1032,["props"]),(0,t.Wm)(r,{key:"email",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.row.email),1)])),_:2},1032,["props"]),(0,t.Wm)(r,{key:"active",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:e.row.active,"onUpdate:modelValue":[a=>e.row.active=a,a=>n.habilitarFN(e.row)]},{default:(0,t.w5)((()=>[e.row.active?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(u,{key:0},{default:(0,t.w5)((()=>[p])),_:1}))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination","class"])])),_:1})])),_:1})}const m={setup(e,a){const o=(0,i.Z)(),n=(0,l.oR)(),c=((0,r.tv)(),(0,t.f3)("$_")),d=(0,s.iH)([]),p=(0,s.iH)(),u=[{name:"user",label:"Nº de Cuenta",field:"user",align:"left"},{name:"name",label:"Nombre",field:"name",align:"left"},{name:"email",label:"Email",field:"email",align:"left"},{name:"active",label:"Habilitar acceso",field:"active",align:"center",sortable:!0}],m={sortBy:"active",rowsPerPage:5,descending:!0},w=async e=>{await n.dispatch("api/SaveUser",{user:e});o.notify("Docente habilitado"),g(e),c.remove(d.value,e)},g=async e=>{let o=await n.dispatch("api/GetSingleData",{coll:"docentes",id:e._id});const t={coll:"docentes",user:e._id};if(0==o.length){const e=await n.dispatch("api/SaveItem",t);a.emit("updated",e)}else console.log("Usuario rehabilitado"),a.emit("updated",o[0])},f=async()=>{const e=await n.dispatch("api/GetUsersByGroupAll","docente"),a=await c.partition(e,(e=>!1===e.active));d.value=a[0]};return f(),{inactivos:d,columns:u,pagination:m,habilitarFN:w,generacionperiodoRef:p}}};var w=o(4260),g=o(151),f=o(5589),v=o(3243),_=o(6941),b=o(8186),h=o(3884),k=o(8886),y=o(8870),Z=o(7518),q=o.n(Z);const W=(0,w.Z)(m,[["render",u]]),Q=W;q()(m,"components",{QCard:g.Z,QCardSection:f.Z,QTable:v.Z,QInnerLoading:_.Z,QTr:b.Z,QTd:h.Z,QToggle:k.Z,QTooltip:y.Z});const U=(0,t._)("div",{class:"text-h6"},"Docentes",-1);function C(e,a,o,n,s,i){const l=(0,t.up)("q-inner-loading"),r=(0,t.up)("q-td"),d=(0,t.up)("q-tr"),p=(0,t.up)("q-table"),u=(0,t.up)("q-card-section"),m=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(m,{class:"shadow-24"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[n.docentes.length>0?((0,t.wg)(),(0,t.j4)(p,{key:0,class:"shadow-0",rows:n.docentes,columns:n.columns,pagination:n.pagination},{top:(0,t.w5)((()=>[U])),loading:(0,t.w5)((()=>[(0,t.Wm)(l,{showing:"",color:"primary"})])),body:(0,t.w5)((e=>[e.row.docente_user?((0,t.wg)(),(0,t.j4)(d,{key:0,class:"cursor-pointer",props:e,onClick:a=>n.gotoDocente(e.row)},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-bold",key:"user",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.row.docente_user.user),1)])),_:2},1032,["props"]),(0,t.Wm)(r,{key:"name",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.row.docente_user.name),1)])),_:2},1032,["props"]),(0,t.Wm)(r,{key:"email",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.row.docente_user.email),1)])),_:2},1032,["props"])])),_:2},1032,["props","onClick"])):(0,t.kq)("",!0)])),_:1},8,["rows","columns","pagination"])):(0,t.kq)("",!0)])),_:1})])),_:1})}const D={setup(){(0,i.Z)();const e=(0,l.oR)(),a=(0,r.tv)(),o=((0,r.yj)(),(0,t.f3)("$_")),n=(0,s.iH)([]),c=[{name:"user",label:"Usuario",field:"user",align:"left"},{name:"name",label:"Nombre",field:"name",align:"left"},{name:"email",label:"Email",field:"email",align:"left"}],d={sortBy:"active",rowsPerPage:10,descending:!0},p=async()=>{const a=await e.dispatch("api/GetAllData","docentes"),t=await o.partition(a,(e=>!0===e.docente_user.active));n.value=t[0]};p();const u=async e=>{e.docente_user?n.value.push(e):p()},m=e=>{const o="/docente/"+e.user;console.log(o),a.push(o)};return{docentes:n,columns:c,pagination:d,addDocente:u,gotoDocente:m}}},T=(0,w.Z)(D,[["render",C]]),j=T;q()(D,"components",{QCard:g.Z,QCardSection:f.Z,QTable:v.Z,QInnerLoading:_.Z,QTr:b.Z,QTd:h.Z});const z={components:{inactivos:Q,activos:j},setup(){(0,i.Z)(),(0,l.oR)(),(0,r.tv)();const e=(0,s.iH)();return{docentesActivos:e}}};var H=o(4379),S=o(5869);const x=(0,w.Z)(z,[["render",n]]),A=x;q()(z,"components",{QPage:H.Z,QSeparator:S.Z})}}]);