"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[417],{905:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(3673);const i={key:0,class:"text-center q-my-lg"};function c(e,t,a,c,s,o){const r=(0,n.up)("conacytPrint"),l=(0,n.up)("desempeno"),d=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(d,{padding:""},{default:(0,n.w5)((()=>[c.activeItem&&c.activeItem.firmaconacyt&&c.activeItem.firmaCoordinador?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(r,{asignacion:c.activeItem},null,8,["asignacion"])])):(0,n.kq)("",!0),c.activeItem?((0,n.wg)(),(0,n.j4)(l,{key:1,item:c.activeItem},null,8,["item"])):(0,n.kq)("",!0)])),_:1})}var s=a(1959),o=a(8825),r=a(3617),l=a(9582),d=a(4706),p=a(8971);const u={components:{desempeno:d.Z,conacytPrint:p.Z},setup(){(0,o.Z)();const e=(0,r.oR)(),t=((0,l.tv)(),(0,l.yj)()),a=(0,s.iH)(null),n=(0,s.Fl)((()=>e.getters["api/getUser"])),i=(0,s.iH)(null),c=()=>{e.dispatch("api/GetSingleData",{coll:"estudiantes",id:n.value.id}).then((e=>{i.value=e[0],d()}))};c();const d=()=>{const n={asignacion:t.params.id,tipo:"director"};e.dispatch("api/GetAllDataFilteredV2",["asesores",n]).then((t=>{const n=t[0];e.dispatch("api/GetSingleUser",n.docente).then((t=>{n.docenteName=t.name,e.dispatch("api/GetAllDataFilteredV2",["docentes",{user:n.docente}]).then((e=>{n.docenteData=e[0],a.value=n}))}))}))};return{user:n,userData:i,activeItem:a}}};var m=a(4260),v=a(4379),g=a(7518),h=a.n(g);const f=(0,m.Z)(u,[["render",c]]),k=f;h()(u,"components",{QPage:v.Z})}}]);