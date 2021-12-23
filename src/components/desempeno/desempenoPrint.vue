<template lang="pug">
div

    template( v-if="asignacion" )
        q-btn(@click="buildPDF" color="primary" outline no-caps)
            template(v-slot)
                .text-center
                    q-icon(name="description" size="xl")
                    div Descargar Reporte 
    //iframe(style="width: 500px; height: 760px;" :src="thesrc")

</template>
<script>
import {ref} from 'vue'
import { useQuasar, date } from 'quasar'
import { useStore } from 'vuex'

import labelmake from 'labelmake'

import pdf from 'components/desempeno/pdfReporteBase64.js'
import schemas from 'components/desempeno/pdfReporteSchemas.js'


export default {
    props: ['asignacion', 'docente'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        
        const thesrc = ref('') 



        const template = {
            basePdf: pdf.pdf,
            schemas: schemas.schemas
        }


        const printValorUpper = (txt) => {
            if(txt && txt.valor){
                return txt.valor.toUpperCase()
            } else {
                return ''
            }
        }
        const printComUpper = (txt) => {
            if(txt && txt.comentario){
                return txt.comentario.toUpperCase()
            } else {
                return ''
            }
        }
        const printUpper = (txt) => {
            if(txt){
                return txt.toUpperCase()
            } else {
                return ''
            }
        }
        const printTxt = (txt) => {
            if(txt){
                return txt.toUpperCase()
            } else {
                return ''
            }
        }
        

        const timeStamp = Date.now()
        const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')

        const item = ref(props.asignacion)
        const textos = `
Análisis:  ${printValorUpper(item.value.analisis)}
${printComUpper(item.value.analisis)}
\n
Estructura:  ${printValorUpper(item.value.estructura)}
${printComUpper(item.value.estructura)}
\n
Redacción:  ${printValorUpper(item.value.redaccion)}
${printComUpper(item.value.redaccion)}
\n
Argumentación:  ${printValorUpper(item.value.argumentacion)}
${printComUpper(item.value.argumentacion)}
\n
¿Cómo considera que ha sido el desempeño del estudiante?
${printUpper(item.value.desempeno)}
\n
Fortalezas:
${item.value.fortalezas || ''}
\n
Debilidades:
${item.value.debilidades || ''}
\n
¿Cuál es el porcentaje de avance de la investigación del estudiante?

Avance: ${item.value.porcentaje || '      '}%

Calificación: ${item.value.calificacion || ''} 
        `
        let inputs = [
            {
                estudianteNombre: item.value.estudiante_user.name,
                asesorNombre: props.docente.name,
                textos: textos,
                fechaEvaluacion: formattedString
            }
        ]



        

        const buildPDF = async () => {

            const pdf = await labelmake({template, inputs})
            const blob = new Blob([pdf.buffer], {type: 'application/pdf'})
            thesrc.value = URL.createObjectURL(blob)
            var fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        }



        return {

            thesrc,
            buildPDF,
        }

    }
}
</script>