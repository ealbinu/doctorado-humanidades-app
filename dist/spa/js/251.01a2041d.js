"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[251],{7251:(e,a,s)=>{s.r(a),s.d(a,{default:()=>z});var t=s(3673),l=s(2323);const o={class:"row q-col-gutter-md"},n={class:"col-12"},u={class:"text-bold text-primary text-white"},i=(0,t._)("span",{class:"text-grey q-mx-sm"},"Cuenta: ",-1),d={class:"text-white"},r=(0,t._)("span",{class:"text-grey q-mx-sm"},"Correo: ",-1),c={class:"text-white"},p={class:"col-12 col-sm-4"},m={class:"col-12 col-md-4"},w={class:"col-12 col-md-4"},h={class:"col-12"},_=(0,t._)("div",{class:"text-grey"},"Título de Investigación",-1),g={class:"text-h6 text-bold text-primary"},v={class:"q-mt-xl"};function f(e,a,s,f,x,b){const D=(0,t.up)("q-icon"),W=(0,t.up)("q-card-section"),V=(0,t.up)("q-card"),q=(0,t.up)("q-select"),C=(0,t.up)("q-separator"),Z=(0,t.up)("periodos"),y=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(y,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",n,[(0,t.Wm)(V,{class:"shadow-24 bg-dark"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"q-mr-sm",name:"person",color:"white",size:"md"}),(0,t._)("span",u,(0,l.zw)(f.user.name),1),(0,t._)("div",null,[i,(0,t._)("span",d,(0,l.zw)(f.user.user),1),r,(0,t._)("span",c,(0,l.zw)(f.user.email),1)])])),_:1})])),_:1})]),(0,t._)("div",p,[(0,t.Wm)(V,{class:"shadow-24"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{label:"Generación:",modelValue:f.userData.generacion,"onUpdate:modelValue":[a[0]||(a[0]=e=>f.userData.generacion=e),f.saveThis],standout:"bg-primary text-white",dense:"",options:f.generaciones,"option-value":"_id","option-label":"name","map-options":""},null,8,["modelValue","options","onUpdate:modelValue"])])),_:1})])),_:1})]),(0,t._)("div",m,[(0,t.Wm)(V,{class:"shadow-24"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{label:"Beca:",modelValue:f.userData.beca,"onUpdate:modelValue":[a[1]||(a[1]=e=>f.userData.beca=e),f.saveThis],standout:"bg-primary text-white",dense:"",options:["CONACYT","SIN BECA"]},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})]),(0,t._)("div",w,[(0,t.Wm)(V,{class:(0,l.C_)(["shadow-24",["ACTIVO"==f.userData.status?"bg-positive":"","EGRESADO"==f.userData.status?"bg-info":"","BAJA"==f.userData.status?"bg-negative":""]])},{default:(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{dark:"",label:"Estatus:",modelValue:f.userData.status,"onUpdate:modelValue":[a[2]||(a[2]=e=>f.userData.status=e),f.saveThis],standout:"bg-primary text-white",dense:"",options:["ACTIVO","EGRESADO","BAJA"]},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["class"])]),(0,t._)("div",h,[(0,t.Wm)(V,{class:"shadow-24"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{class:"text-center"},{default:(0,t.w5)((()=>[_,(0,t._)("div",g,(0,l.zw)(f.userData.tituloInvestigacion||"- -"),1)])),_:1})])),_:1})])]),(0,t._)("div",v,[(0,t.Wm)(C,{spaced:""})]),f.user&&f.userData?((0,t.wg)(),(0,t.j4)(Z,{key:0,estudiantedata:f.userData},null,8,["estudiantedata"])):(0,t.kq)("",!0)])),_:1})}var x=s(1959),b=s(9582),D=s(3617),W=s(885),V=s(8825),q=s(9985);const C={components:{editThis:W.Z,periodos:q.Z},setup(){const e=(0,V.Z)(),a=(0,b.yj)(),s=(0,D.oR)(),t=(0,x.iH)({name:"",user:""}),l=(0,x.iH)({}),o=(0,x.iH)([{titulo:""}]),n=(0,x.iH)(!0),u=(0,x.iH)([]),i=(0,x.iH)([]),d=(0,x.iH)([]),r=()=>{const a={...l.value,coll:"estudiantes"};s.dispatch("api/SaveItem",a).then((a=>{e.notify("Guardado")}))},c=()=>{s.dispatch("api/GetSingleUser",a.params.id).then((e=>{t.value=e,s.dispatch("api/GetSingleData",{coll:"estudiantes",id:a.params.id}).then((e=>{e.length&&(l.value=e[0])}))}))};c();const p=()=>{s.dispatch("api/GetAllData","generaciones").then((e=>{d.value=e}))};return p(),{user:t,userData:l,userTesis:o,loadItem:c,loading:n,periodos:u,coloquios:i,generaciones:d,saveThis:r}}};var Z=s(4260),y=s(4379),A=s(151),T=s(5589),k=s(4554),I=s(8516),S=s(5869),Q=s(5735),G=s(4842),H=s(7518),U=s.n(H);const E=(0,Z.Z)(C,[["render",f]]),z=E;U()(C,"components",{QPage:y.Z,QCard:A.Z,QCardSection:T.Z,QIcon:k.Z,QSelect:I.Z,QSeparator:S.Z,QCheckbox:Q.Z,QInput:G.Z})}}]);