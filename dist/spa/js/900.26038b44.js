"use strict";(self["webpackChunkiconos_plataforma"]=self["webpackChunkiconos_plataforma"]||[]).push([[900],{9900:(a,e,o)=>{o.r(e),o.d(e,{default:()=>F});var i=o(3673),n=o(2323);const t=a=>((0,i.dD)("data-v-199262b5"),a=a(),(0,i.Cn)(),a),r={class:"text-caption"},l={class:"text-body2 text-dark text-bold"},d={class:"porcentaje"},s={key:0,class:"text-center q-my-lg"},c=t((()=>(0,i._)("div",{class:"text-h6 text-primary q-mb-md"},"Firmado por coordinador",-1))),p={class:"text-center"};function u(a,e,o,t,u,m){const f=(0,i.up)("q-td"),w=(0,i.up)("q-tr"),g=(0,i.up)("q-table"),v=(0,i.up)("conacytPrint"),_=(0,i.up)("desempeno"),y=(0,i.up)("q-card-section"),k=(0,i.up)("q-btn"),b=(0,i.up)("q-img"),C=(0,i.up)("q-card"),h=(0,i.up)("q-dialog"),W=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(W,{padding:""},{default:(0,i.w5)((()=>[t.reportes&&t.estudiantes?((0,i.wg)(),(0,i.j4)(C,{key:0,class:"shadow-24"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"shadow-0",loading:t.loading,"no-data-label":"Sin datos",rows:t.reportes,columns:t.columns},{body:(0,i.w5)((a=>[(0,i.Wm)(w,{class:"cursor-pointer",props:a,onClick:e=>t.openit(a.row)},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{key:"estudiante",props:a},{default:(0,i.w5)((()=>[(0,i._)("div",r,(0,n.zw)(t.findUserData(a.row.asignacion.estudiante.user).name),1),(0,i._)("div",l,(0,n.zw)(a.row.asignacion.estudiante.tituloInvestigacion),1),(0,i._)("div",d,[(0,i._)("div",{style:(0,n.j5)("width:"+a.row.porcentaje+"%")},null,4)])])),_:2},1032,["props"]),(0,i.Wm)(f,{key:"generacion",props:a},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(a.row.asignacion.estudiante.generacion.name),1)])),_:2},1032,["props"]),(0,i.Wm)(f,{key:"periodo",props:a},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(a.row.asignacion.periodo.name),1)])),_:2},1032,["props"]),(0,i.Wm)(f,{key:"calificacion",props:a},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(a.row.calificacion),1)])),_:2},1032,["props"]),(0,i.Wm)(f,{key:"firmaconacyt",props:a},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(a.row.firmaconacyt?"Firmado":"-"),1)])),_:2},1032,["props"]),(0,i.Wm)(f,{key:"firmaCoordinador",props:a},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(a.row.firmaCoordinador?"Firmado":"-"),1)])),_:2},1032,["props"])])),_:2},1032,["props","onClick"])])),_:1},8,["loading","rows","columns"]),(0,i.Wm)(h,{modelValue:t.dialog,"onUpdate:modelValue":e[0]||(e[0]=a=>t.dialog=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,null,{default:(0,i.w5)((()=>[t.activeItem?((0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(v,{asignacion:t.activeItem},null,8,["asignacion"])])):(0,i.kq)("",!0),(0,i.Wm)(_,{item:t.activeItem,conacyt:""},null,8,["item"])])),_:1}),t.activeItem.firmaCoordinador?((0,i.wg)(),(0,i.j4)(y,{key:1,class:"text-center"},{default:(0,i.w5)((()=>[c,(0,i._)("div",p,[(0,i.Wm)(b,{style:{width:"100%","max-width":"200px"},src:t.firmaCoordinador},null,8,["src"])])])),_:1})):((0,i.wg)(),(0,i.j4)(y,{key:0,class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{label:"Aprobar y firmar reporte ","no-caps":"",color:"primary",onClick:t.signReport},null,8,["onClick"])])),_:1}))])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})):(0,i.kq)("",!0)])),_:1})}var m=o(1959),f=o(8825),w=o(3617),g=o(9582),v=o(4706),_=o(8971),y=o(8603),k=o.n(y);const b={components:{desempeno:v.Z,conacytPrint:_.Z},setup(){const a=(0,f.Z)(),e=(0,w.oR)(),o=((0,g.tv)(),(0,m.iH)(!1)),i=(0,m.iH)(null),n=(0,m.iH)(null),t=a=>k().find(n.value,{_id:a}),r=(0,m.iH)(null),l=()=>{var a={tipo:"director",firmaconacyt:!0};e.dispatch("api/GetAllData","coordinadors").then((a=>{a[0].firma&&(r.value=a[0].firma)})),e.dispatch("api/GetAllDataFilteredV2",["asesores",a]).then((a=>{i.value=a})),e.dispatch("api/GetUsersByGroup","estudiante").then((a=>{var e=[];for(var o in a)a[o].active&&e.push(a[o]);n.value=e}))};l();const d=(0,m.iH)(!1),s=(0,m.iH)(null),c=a=>{d.value=!0,s.value=a},p=()=>{var o={coll:"asesores",_id:s.value._id,firmaCoordinador:!0};e.dispatch("api/SaveItem",o).then((e=>{d.value=!1,s.value=null,a.notify("Reporte firmado"),l()}))};return{loading:o,reportes:i,columns:[{name:"estudiante",label:"Investigación",field:"estudiante",align:"left"},{name:"generacion",label:"Generación",field:"asignacion",align:"left"},{name:"periodo",label:"Periodo",field:"asignacion",align:"left"},{name:"calificacion",label:"Calificacion",field:"calificacion",align:"center"},{name:"firmaconacyt",label:"CONACYT",field:"firmaconacyt",align:"center"},{name:"firmaCoordinador",label:"Firma de coordinador",field:"firmaCoordinador",align:"center"}],estudiantes:n,findUserData:t,openit:c,activeItem:s,dialog:d,signReport:p,firmaCoordinador:r}}};var C=o(4260),h=o(4379),W=o(151),q=o(5589),Z=o(3243),x=o(8186),I=o(3884),Q=o(6778),U=o(8240),j=o(4027),z=o(7518),D=o.n(z);const H=(0,C.Z)(b,[["render",u],["__scopeId","data-v-199262b5"]]),F=H;D()(b,"components",{QPage:h.Z,QCard:W.Z,QCardSection:q.Z,QTable:Z.Z,QTr:x.Z,QTd:I.Z,QDialog:Q.Z,QBtn:U.Z,QImg:j.Z})}}]);