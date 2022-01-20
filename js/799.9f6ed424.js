"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[799],{4799:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D});var s=t(3673),o=t(8880),l=t(9901),u=t.n(l),n=t(9881),r=t.n(n);const d={class:"text-center q-mt-lg"},i={class:"text-center"};function m(e,a,t,l,n,m){const c=(0,s.up)("q-img"),p=(0,s.up)("q-card-section"),w=(0,s.up)("q-input"),g=(0,s.up)("q-btn"),v=(0,s.up)("q-form"),f=(0,s.up)("q-separator"),b=(0,s.up)("registro"),q=(0,s.up)("q-card"),y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(y,{class:"flex flex-center column"},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{class:"bg-dark shadow-20",style:{width:"320px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"text-center q-my-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{src:u()})])),_:1}),(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(v,{onSubmit:(0,o.iM)(l.loginFn,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{label:"Nº de cuenta / Usuario",standout:"",dark:"",dense:"",modelValue:l.authuser,"onUpdate:modelValue":a[0]||(a[0]=e=>l.authuser=e),autocomplete:"username"},null,8,["modelValue"]),(0,s.Wm)(w,{class:"q-mt-sm",label:"Contraseña",standout:"",dark:"",dense:"",type:"password",modelValue:l.authpass,"onUpdate:modelValue":a[1]||(a[1]=e=>l.authpass=e),autocomplete:"current-password"},null,8,["modelValue"]),(0,s._)("div",d,[(0,s.Wm)(g,{label:"Ingresar",color:"primary",unelevated:"",type:"submit"})])])),_:1},8,["onSubmit"])])),_:1}),(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(f,{spaced:""}),(0,s._)("div",i,[(0,s.Wm)(b)]),(0,s.Wm)(f,{spaced:""})])),_:1}),(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c,{src:r()})])),_:1})])),_:1})])),_:1})}var c=t(1959),p=t(3617),w=t(8825),g=t(9582);const v={class:"text-center q-mt-sm"},f={class:"text-center q-mt-lg"},b=(0,s._)("div",{class:"text-center q-my-sm text-white text-h6"},"Registro exitoso.",-1),q=(0,s._)("div",{class:"text-center q-my-sm text-white text-body2"},"Tu registro será evaluado y en caso de cubrir los requisitos tu cuenta se activará.",-1);function y(e,a,t,l,u,n){const r=(0,s.up)("q-btn"),d=(0,s.up)("q-btn-toggle"),i=(0,s.up)("q-separator"),m=(0,s.up)("q-input"),c=(0,s.up)("q-icon"),p=(0,s.up)("q-form"),w=(0,s.up)("q-card-section"),g=(0,s.up)("q-card"),y=(0,s.up)("q-dialog");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(r,{size:"sm",flat:"",label:"Nuevo usuario",padding:"0",color:"positive",onClick:a[0]||(a[0]=e=>l.dialog=!0)}),(0,s.Wm)(y,{modelValue:l.dialog,"onUpdate:modelValue":a[7]||(a[7]=e=>l.dialog=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"bg-dark shadow-20",style:{width:"320px"}},{default:(0,s.w5)((()=>[l.success?((0,s.wg)(),(0,s.j4)(w,{key:1},{default:(0,s.w5)((()=>[b,q])),_:1})):((0,s.wg)(),(0,s.j4)(w,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{onSubmit:(0,o.iM)(l.signinFn,["prevent"])},{default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s.Wm)(d,{unelevated:"","toggle-color":"info","text-color":"white",modelValue:l.newuser.group,"onUpdate:modelValue":a[1]||(a[1]=e=>l.newuser.group=e),options:[{label:"Estudiante",value:"estudiante"},{label:"Docente",value:"docente"}]},null,8,["modelValue"])]),(0,s.Wm)(i,{spaced:""}),(0,s.Wm)(m,{modelValue:l.newuser.user,"onUpdate:modelValue":a[2]||(a[2]=e=>l.newuser.user=e),label:"estudiante"==l.newuser.group?"Nº de cuenta":"Usuario",rounded:"",standout:"",dark:"",dense:"",required:""},null,8,["modelValue","label"]),(0,s.Wm)(m,{class:"q-mt-sm",modelValue:l.newuser.name,"onUpdate:modelValue":a[3]||(a[3]=e=>l.newuser.name=e),label:"Nombre",rounded:"",standout:"",dark:"",dense:"",required:""},null,8,["modelValue"]),(0,s.Wm)(m,{class:"q-mt-sm",modelValue:l.newuser.email,"onUpdate:modelValue":a[4]||(a[4]=e=>l.newuser.email=e),type:"email",label:"Email",rounded:"",standout:"",dark:"",dense:"",required:""},null,8,["modelValue"]),(0,s.Wm)(m,{class:"q-mt-sm",modelValue:l.newuser.password,"onUpdate:modelValue":a[6]||(a[6]=e=>l.newuser.password=e),label:"Contraseña",type:l.passview?"text":"password",rounded:"",standout:"",dark:"",dense:"",required:"",hint:"Al menos 6 caracteres.",pattern:".{6,}"},{append:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"cursor-pointer",color:"primary",name:l.passview?"visibility_off":"visibility",onClick:a[5]||(a[5]=e=>l.passview=!l.passview)},null,8,["name"])])),_:1},8,["modelValue","type"]),(0,s._)("div",f,[(0,s.Wm)(r,{label:"Registrar",color:"primary",unelevated:"",type:"submit"})])])),_:1},8,["onSubmit"])])),_:1}))])),_:1})])),_:1},8,["modelValue"])])}(0,w.Z)();const h={setup(){const e=(0,w.Z)(),a=(0,p.oR)(),t=(0,c.iH)(!1),s=(0,c.iH)(!1),o=(0,c.iH)(!1),l=(0,c.iH)({user:"",name:"",email:"",password:"",group:"estudiante",active:!1}),u=()=>{a.dispatch("api/SaveUser",{user:l.value}).then((t=>{e.notify("Registro exitoso."),o.value=!0,a.dispatch("api/NewNotification",{description:"Registro: "+l.value.user,sendto:"/"+l.value.group+"s"})})).catch((a=>{switch(e.notify(a.message),a.data){case"Username is already used!":e.notify("El Nº de cuenta o usuario ya esta registrado.");break;case"Email is already used!":e.notify("El correo electrónico ya esta registrado.");break}}))};return{dialog:t,signinFn:u,newuser:l,passview:s,success:o}}};var W=t(4260),V=t(8240),_=t(6778),Z=t(151),x=t(5589),k=t(5269),Q=t(8761),U=t(5869),C=t(4842),S=t(4554),N=t(7518),F=t.n(N);const H=(0,W.Z)(h,[["render",y]]),I=H;F()(h,"components",{QBtn:V.Z,QDialog:_.Z,QCard:Z.Z,QCardSection:x.Z,QForm:k.Z,QBtnToggle:Q.Z,QSeparator:U.Z,QInput:C.Z,QIcon:S.Z});const R={components:{registro:I},setup(){const e=(0,w.Z)(),a=(0,p.oR)(),t=(0,g.tv)(),s=(0,c.iH)(""),o=(0,c.iH)(""),l=async()=>{a.dispatch("api/Login",{user:s.value,password:o.value}).then((a=>{e.notify("Bienvenido"),t.push("/dashboard")})).catch((a=>{e.notify(a.message)}))};return{loginFn:l,authuser:s,authpass:o}},methods:{}};var E=t(4379),B=t(4027);const j=(0,W.Z)(R,[["render",m],["__scopeId","data-v-5ea21c31"]]),D=j;F()(R,"components",{QPage:E.Z,QCard:Z.Z,QCardSection:x.Z,QImg:B.Z,QForm:k.Z,QInput:C.Z,QBtn:V.Z,QSeparator:U.Z})}}]);