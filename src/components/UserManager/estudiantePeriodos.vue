<template lang="pug">
div.relative-position
    q-inner-loading(:showing="loading")
    .text-h6.text-dark.q-my-md Periodos
    .text-center(v-if="!loading")
        q-btn(label="Asignar periodos"  color="primary" unelevated no-caps @click="dialog=true").q-my-md
    q-dialog(v-model="dialog")
        q-card.shadow-24.bg-dark.full-width
            q-card-section
                .text-center.text-body1.text-white Asignar periodos
            q-card-section
                q-item(v-for="(i, index) in periodos").bg-white.rounded-borders.q-my-xs
                    q-item-section
                        q-item-label.text-bold.text-body1.text-primary {{i.name}}
                        q-item-label(caption) Inicio: #[span.text-bold {{i.startDate}}]
                        q-item-label(caption) Fin: #[span.text-bold {{i.endDate}}]
                    q-item-section(side)
                        q-checkbox(v-model="asignadosNuevos" :val="i")
            q-card-section
                .text-center
                    q-btn(label="Guardar"  color="primary" unelevated no-caps @click="asignarFN")
    

    .row.q-col-gutter-md
        .col-12.col-sm-4(v-for="(i, index) in asignaciones"): q-card.shadow-24
            q-card-section.text-center
                .text-h6 {{i.periodo.name}}
                div.text-caption.text-grey
                    | 2021/11/01
                    span.text-primary.text-bold.q-mx-sm - 
                    | 2021/12/31
            q-card-section: asesores(:asignacion="i" :key="i._id")

</template>
<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import asesores from 'components/UserManager/estudianteAsesores'
export default {
    props: ['estudiantedata'],
    components: {asesores},
    setup (props) {
        const $q = useQuasar()
        const $store = useStore()

        const loading = ref(true)

        const periodos = ref([])
        const dialog = ref(false)

        const asignadosNuevos = ref([])
        
        const asignarFN = () => {
            dialog.value = false
            for(var i in asignadosNuevos.value){
                const asignItem = {
                    estudiante: {
                        _id: props.estudiantedata,
                        link: "estudiantes"
                    },
                    periodo: {
                        _id: asignadosNuevos.value[i]._id,
                        link: "periodos"
                    },
                    coll: 'asignaciones'
                }
                $store.dispatch('api/SaveItem', asignItem).then(res => {
                    $q.notify('Periodos asignados a estudiante')
                    loadAsignaciones()
                })
            }
        }

        const loadPeriodos = () => {
            $store.dispatch('api/GetAllData', 'periodos').then(res => {
                periodos.value = res
                loadAsignaciones()
            })
        }


        //
        const asignaciones = ref([])

        const loadAsignaciones = () => {
            console.log(props)
            $store.dispatch('api/GetAllDataFiltered', ['asignaciones', 'estudiante', props.estudiantedata.user]).then(res => {
                asignaciones.value = res
                for(var i in res){
                    periodos.value = periodos.value.filter(function(value, index, arr){
                        return value._id != res[i].periodo._id
                    })
                }
                loading.value = false
            })
        }
        loadPeriodos()
        

        return {
            dialog,
            periodos,
            asignadosNuevos,
            asignarFN,
            asignaciones,
            loading,
            loadAsignaciones
        }
    }
}
</script>