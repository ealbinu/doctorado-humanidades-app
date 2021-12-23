<template lang="pug">

div
    
    div.text-center.q-my-lg: desempenoPrint(:asignacion="item" :docente="docente" v-if="docente.name")

    .row.q-col-gutter-md
        .col-12
            q-card.bg-white.shadow-24
                q-card-section.text-center
                    .text-body2.text-primary Director
                    .text-body1 {{docente.name}}
        .col-12(v-if="item.analisis")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary Análisis

                    q-badge(:label="calificadores[item.analisis.valor][0]" :color="calificadores[item.analisis.valor][1]" floating)
                    p {{item.analisis.comentario}}
        
        .col-12(v-if="item.estructura")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary Estructura
                    q-badge(:label="calificadores[item.estructura.valor][0]" :color="calificadores[item.estructura.valor][1]" floating)
                    p {{item.estructura.comentario}}
        .col-12(v-if="item.redaccion")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary Redacción
                    q-badge(:label="calificadores[item.redaccion.valor][0]" :color="calificadores[item.redaccion.valor][1]" floating)
                    p {{item.redaccion.comentario}}
        
        .col-12(v-if="item.argumentacion")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary Argumentación
                    q-badge(:label="calificadores[item.argumentacion.valor][0]" :color="calificadores[item.argumentacion.valor][1]" floating)
                    p {{item.argumentacion.comentario}}

        .col-12(v-if="item.desempeno")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary.q-mb-md ¿Cómo considera que ha sido el desempeño del estudiante?
                    .text-body1.flex.justify-center
                        div.text-white.rounded-borders.q-px-sm(:class=" 'bg-'+calificadores[item.desempeno][1] ") {{ calificadores[item.desempeno][0] }} 
        
        .col-6(v-if="item.fortalezas")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary.q-mb-md Fortalezas
                    div(v-for="(ifo, indexfo) in item.fortalezas") {{ifo}}
        .col-6(v-if="item.debilidades")
            q-card.bg-white.shadow-24
                q-card-section
                    .text-h6.text-primary.q-mb-md Debilidades
                    div(v-for="(ide, indexde) in item.debilidades") {{ide}}
            
        .col-12
            q-card.bg-white.shadow-24
                q-card-section(v-if="item.porcentaje || item.calificacion")
                    .text-h6.text-primary.q-mb-md ¿Cuál es el porcentaje de avance de la investigación del estudiante?
                    .row.items-center.justify-center
                        .col-sm-6
                            apexchart(width="100%" type="radialBar" :options="options" :series="[item.porcentaje]")
                        .col-sm-6(v-if="item.calificacion")
                            q-card.bg-dark.q-mt-md
                                q-card-section

                                    q-input(v-model="item.calificacion" standout dark  label="Calificación" readonly)
                                        template(v-slot:prepend): q-icon(name="sports_score")
        
    template(v-if="withconacyt && item.reporteconacyt")
        .text-h6.text-dark.q-my-md.prefers-color Reporte CONACYT
        .row.q-col-gutter-md()
            .col-12
                q-card.bg-white.shadow-24
                    q-card-section(v-if="item.cumplimiento")
                        .text-h6.text-primary.q-mb-md Cumplimiento del plan de estudios:
                        .text-body1.flex.justify-center
                            div.text-white.rounded-borders.q-px-sm(:class=" 'bg-'+calificadores[item.cumplimiento][1]") {{ calificadores[item.cumplimiento][0] }} 
                    q-card-section(v-if="item.obtencion")
                        .text-h6.text-primary.q-mb-md Obtención del grado dentro del tiempo oficial del plan de estudios:
                        .text-body1.flex.justify-center

                            div.text-white.rounded-borders.q-px-sm(:class=" 'bg-'+calificadores[item.obtencion][1]") {{ calificadores[item.obtencion][0] }} 
                    q-card-section(v-if="item.comentarios")
                        .text-h6.text-primary.q-mb-md Comentarios sobre la evaluación:

                        p {{item.comentarios}}
                    q-card-section(v-if="item.conservaBeca")
                        .text-h6.text-primary.q-mb-md Con base en las respuestas anteriores y en el Art. 24 del Reglamento de Becas sobre suspensión, cancelación y conclusión de la beca, ¿Recomienda continuar, suspender o cancelar la beca? Indique causales:
                        p {{item.conservaBeca}}
                    q-card-section(v-if="item.firmaconacyt")
                        .text-h6.text-primary.q-mb-md Firma de asesor
                        .text-center
                            q-img(style="width: 100%; max-width: 200px" :src="docente.firma")
                            p {{docente.name}}

                    
    


</template>
<script>
import {ref, computed} from 'vue'
import { QSpinnerClock, useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import desempenoPrint from 'components/desempeno/desempenoPrint.vue'
export default {
    components: {
        desempenoPrint
    },
    props: ['item', 'conacyt'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()

        
        const docente = ref({
            name: null,
            firma: null,
        })
        
        const getDocente = () => {
            var req = {
                coll: 'docentes',
                user: props.item.docente
            }
            $store.dispatch('api/GetSingleUser', props.item.docente).then(resdocente => {
                docente.value.name = resdocente.name

            })
            $store.dispatch('api/GetSingleData', req).then(resdocente => {
                docente.value.firma = resdocente[0].firma
            })
        }

        getDocente()



        let calificadores = []
        calificadores['excelente'] = ['Excelente', 'primary']
        calificadores['bueno'] = ['Bueno', 'positive']
        calificadores['suficiente'] = ['Suficiente', 'secondary']
        calificadores['no satisfactorio'] = ['No satisfactorio', 'negative']
        
        return {
            calificadores,
            options: { labels: ['Avance'] },
            docente,
            withconacyt: props.conacyt!=undefined,
        }

    }
}
</script>