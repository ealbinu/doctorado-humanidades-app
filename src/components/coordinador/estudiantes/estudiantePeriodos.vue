<template lang="pug">
div
    q-card.shadow-24
        q-card-section
            .row.q-col-gutter-md.items-center.q-pb-md
                .col-6
                    .text-caption Periodos
                .col-6.text-right
                    periodoInscribir(v-if="!loading" :yainscrito="periodosAsignados" :student="student" @updated="loadItems")
        
            .row.q-col-gutter-md
                .col-md-4.col-12(v-for="(i, index) in periodosAsignados")
                    q-card.shadow-24
                        q-card-section.text-center()
                            .text-h5.text-bold.text-dark {{i.periodo.name}}
                            div.text-caption.text-grey
                                | {{i.periodo.startDate}}
                                span.text-primary.text-bold.q-mx-sm - 
                                | {{i.periodo.endDate}}
                            datesprogress(:date1="i.periodo.startDate" :date2="i.periodo.endDate")
                        q-card-section.text-center
                            .text-caption.text-grey Asesores
                            div(v-if="i.asesores").q-mt-md
                                q-card.bg-dark.shadow-24(v-for="(i2, index2) in i.asesores[0]"): q-card-section
                                    .text-body1.text-white {{i2.docente_user.name}}
                                    .text-bold.text-capitalize.text-accent {{i2.tipo}}
                                    eliminarAsesor(:asignacion="i2" @updated-asesor="loadAsesores(index)")
                                q-card.shadow-14.q-mt-sm(v-for="(i2, index2) in i.asesores[1]"): q-card-section
                                    .text-body1.text-blue-grey {{i2.docente_user.name}}
                                    .text-bold.text-capitalize.text-grey {{i2.tipo}}
                                    eliminarAsesor(:asignacion="i2" @updated-asesor="loadAsesores(index)")
                            .text-center
                                administrarAsesores(:asignacion="i" v-if="i.asesores" @update-asesores="loadAsesores(index)")
                        
                        q-card-section.text-center
                            .text-caption.text-grey Fechas
                                q-toggle(v-model="i.activeDates" v-if="!i.activeDates" size="xs"): q-tooltip Editar fechas
                            div(v-if="i.activeDates").q-mt-md
                                q-input(label="1er Coloquio" type="text" v-model="i.coloquio1" standout="bg-primary text-white" stack-label dense readonly).q-mt-sm
                                    q-popup-proxy(cover transition-show="scale")
                                        q-date(v-model="i.coloquio1" minimal mask="YYYY-MM-DD")
                                q-input(label="2do Coloquio" type="text" v-model="i.coloquio2" standout="bg-primary text-white" stack-label dense readonly).q-mt-sm
                                    q-popup-proxy(cover transition-show="scale")
                                        q-date(v-model="i.coloquio2" minimal mask="YYYY-MM-DD")
                                q-input(label="Examen de candidatura" type="text" v-model="i.candidatura" standout="bg-primary text-white" stack-label dense readonly).q-mt-sm
                                    q-popup-proxy(cover transition-show="scale")
                                        q-date(v-model="i.candidatura" minimal mask="YYYY-MM-DD")
                                q-input(label="Examen de grado" type="text" v-model="i.grado" standout="bg-primary text-white" stack-label dense readonly).q-mt-sm
                                    q-popup-proxy(cover transition-show="scale")
                                        q-date(v-model="i.grado" minimal mask="YYYY-MM-DD")
                                q-btn(label="Guardar fechas" unelevated color="positive" size="sm" no-caps @click="saveDates(i)").q-mt-md
                            div(v-else)
                                q-card(v-if="i.coloquio1!=undefined").shadow-14.q-mt-sm: q-card-section.q-py-xs
                                    .text-caption.text-grey 1er Coloquio
                                    .text-body1 {{i.coloquio1}}
                                q-card(v-if="i.coloquio2!=undefined").shadow-14.q-mt-sm: q-card-section.q-py-xs
                                    .text-caption.text-grey 2do Coloquio
                                    .text-body1 {{i.coloquio2}}
                                q-card(v-if="i.candidatura!=undefined").shadow-14.q-mt-sm: q-card-section.q-py-xs
                                    .text-caption.text-grey Examen de candidatura
                                    .text-body1 {{i.candidatura}}
                                q-card(v-if="i.grado!=undefined").shadow-14.q-mt-sm: q-card-section.q-py-xs
                                    .text-caption.text-grey Examen de grado
                                    .text-body1 {{i.grado}}
                    periodoDesinscribir(:asignacion="i" :key="index" @updated="loadItems")





</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar, date } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import datesprogress from 'components/datesprogress'
import administrarAsesores from 'components/coordinador/estudiantes/estudiantePeriodosAsesores'
import eliminarAsesor from 'components/coordinador/estudiantes/estudiantePeriodosEliminarAsesor'
import periodoInscribir from 'components/coordinador/estudiantes/periodoInscribir'
import periodoDesinscribir from 'components/coordinador/estudiantes/periodoDesinscribir'

export default {
    components: {
        datesprogress,
        administrarAsesores,
        eliminarAsesor,
        periodoInscribir,
        periodoDesinscribir
    },
    props: ['student'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $_ = inject('$_');

        const loading = ref(true)
        //---------
        const student = ref(props.student)
        const periodosAsignados = ref([])

        const activeDates = ref(false)



        //---------
        const loadItems = async () => {
            loading.value = true
            periodosAsignados.value = []
            periodosAsignados.value = await $store.dispatch('api/GetAllDataFiltered', ['asignaciones', 'estudiante', student.value._id])
            for(var pa in periodosAsignados.value){
                loadAsesores(pa)
            }
            loading.value = false
        }
        loadItems()
        //---------
        const loadAsesores = async (pa) => {
            loading.value = true
            const periodo = periodosAsignados.value[pa]
            periodo.activeDates = false
            periodosAsignados.value[pa].asesores = null
            const listaAsesores = await $store.dispatch('api/GetAllDataFiltered', ['asesores', 'asignacion', periodo._id])
            periodosAsignados.value[pa].asesores = await $_.partition(listaAsesores, (el) => {
                return el.tipo === 'director'
            })
            loading.value = false

        }
        // ------
        const saveDates = async (asignacion) => {
            var req = {
                _id: asignacion._id,
                coloquio1: asignacion.coloquio1,
                coloquio2: asignacion.coloquio2,
                candidatura: asignacion.candidatura,
                coll: 'asignaciones'
            }
            const res = await $store.dispatch('api/SaveItem', req)
            $q.notify('Fechas guardadas')
            asignacion.activeDates = false
        }

        
        return {
            periodosAsignados,
            loadItems,
            loadAsesores,
            saveDates,
            loading,
        }

    }
}
</script>

<style>
.q-checkbox.disabled{
    opacity: 0.3 !important;
}
</style>