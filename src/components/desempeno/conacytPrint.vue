<template lang="pug">
div

    template( v-if="asignacion.firmaconacyt && asignacion.firmaCoordinador" )
        q-btn(@click="buildPDF" color="primary" outline no-caps)
            template(v-slot)
                .text-center
                    q-icon(name="img:conacyt.svg" size="xl")
                    div Descargar Reporte CONACYT
    //iframe(style="width: 500px; height: 760px;" :src="thesrc")

</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

import labelmake from 'labelmake'

import pdf from 'components/desempeno/pdfConacytBase64.js'
import schemas from 'components/desempeno/pdfConacytSchemas.js'


export default {
    props: ['asignacion'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        
        const thesrc = ref('') 



        const template = {
            basePdf: pdf.pdf,
            schemas: schemas.schemas
        }
        

        const user = ref(null)
        const userData = ref(null)

        


        let inputs = [
            {
                estudianteNombre: '',
                estudianteGrado: 'Doctorado',
                asesorNombre: '',
                estudianteTitulo: '',
                periodoInicio: props.asignacion.asignacion.periodo.startDate,
                periodoFinal: props.asignacion.asignacion.periodo.endDate,
                desempenoE: props.asignacion.desempeno=='excelente'?'X':'',
                desempenoB: props.asignacion.desempeno=='bueno'?'X':'',
                desempenoS: props.asignacion.desempeno=='suficiente'?'X':'',
                desempenoN: props.asignacion.desempeno=='no satisfactorio'?'X':'',
                cumplimientoE: props.asignacion.cumplimiento=='excelente'?'X':'',
                cumplimientoB: props.asignacion.cumplimiento=='bueno'?'X':'',
                cumplimientoS: props.asignacion.cumplimiento=='suficiente'?'X':'',
                cumplimientoN: props.asignacion.cumplimiento=='no satisfactorio'?'X':'',
                obtencionE: props.asignacion.obtencion=='excelente'?'X':'',
                obtencionB: props.asignacion.obtencion=='bueno'?'X':'',
                obtencionS: props.asignacion.obtencion=='suficiente'?'X':'',
                obtencionN: props.asignacion.obtencion=='no satisfactorio'?'X':'',
                comentarios: 'Sin comentarios',
                porcentaje: props.asignacion.porcentaje + '%',
                recomienda: 'Recomienda...',
                nombreAsesorFirma: props.asignacion.docenteName,
                nombreCoordinadorFirma: 'C. Alberto Sánchez',
                asesorFirma: '',
                coordinadorFirma: '',
                fechaEvaluacion: props.asignacion.asignacion.periodo.endDate
            },
        ]

        
        /*
        //Base64Img
        $store.dispatch('api/ImageB64', props.asignacion.docenteData.firma).then(res => {
            inputs[0].asesorFirma = res
            inputs[0].coordinadorFirma = res
            buildPDF()
        })
        */



        const buildPDF = async () => {
            const pdf = await labelmake({template, inputs})
            const blob = new Blob([pdf.buffer], {type: 'application/pdf'})
            //thesrc.value = URL.createObjectURL(blob)
            var fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        }



       const loadItems = () => {
           $store.dispatch('api/GetSingleUser', props.asignacion.docente).then(resDocente => {

           
            $store.dispatch('api/GetAllDataFilteredV2', ['docentes', {user:props.asignacion.docente} ]).then(resDocenteData => {

                
                    $store.dispatch('api/GetSingleUser', props.asignacion.estudiante).then(res => {
                        user.value = res
                        var reqStud = {
                            coll: 'estudiantes',
                            user: props.asignacion.estudiante
                        }
                        $store.dispatch('api/GetSingleData', reqStud).then(resData => {

                            userData.value = resData[0]
                            $store.dispatch('api/GetAllData', 'coordinadors').then(resFirma => {

                                inputs[0].asesorNombre = resDocente.name;
                                inputs[0].nombreAsesorFirma = resDocente.name;
                                inputs[0].estudianteNombre = user.value.name;
                                inputs[0].estudianteTitulo = userData.value.tituloInvestigacion;

                                inputs[0].asesorFirma = resDocenteData[0].firma;
                                inputs[0].coordinadorFirma = resFirma[0].firma;
  

                            })
                            

                        })
                    })
                
                })
            })
            
        }

        loadItems()
       
       

        return {
            user,
            userData,
            thesrc,
            buildPDF,
        }

    }
}
</script>