<template lang="pug">
div
    q-card.shadow-24
        q-card-section
            .row.q-col-gutter-md.items-center
                .col-12
                    .text-caption Información 
                .col-4
                    q-select(label="Generación:" v-model="student.generacion" standout="bg-primary text-white" dense :options="generaciones" option-value="_id" option-label="name"  map-options @update:model-value="saveThis")
                .col-4
                    q-select(label="Beca:" v-model="student.beca" standout="bg-primary text-white" dense :options="['CONACYT', 'SIN BECA']" @update:model-value="saveThis")
                .col-4
                    q-select(label="Estatus:" v-model="student.status" standout="bg-primary text-white" dense :options="['ACTIVO', 'EGRESADO', 'BAJA']" @update:model-value="saveThis")
    q-card.shadow-24.q-mt-md
        q-card-section
            .row.q-col-gutter-md.items-center
                .col-12
                    .text-caption Investigación
                .col-12.text-bold.text-primary {{student.tituloInvestigacion || '- - Sin título - -'}}
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['student'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        //---------
        const student = ref(props.student)
        const generaciones = ref([])

        //---------
        const loadItems = async () => {
            generaciones.value = await $store.dispatch('api/GetAllData', 'generaciones')
        }
        loadItems()
        //---------
        const saveThis = async () => {
            const req = {...student.value, coll:'estudiantes'}
            delete req.user
            delete req.periodo_id
            delete req.coloquio
            delete req.tituloInvestigacion
            const res = $store.dispatch('api/SaveItem', req)
            $q.notify('Guardado')
        }
        
        return {
            saveThis,
            generaciones
        }

    }
}
</script>