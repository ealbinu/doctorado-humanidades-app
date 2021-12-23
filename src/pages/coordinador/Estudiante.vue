<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md(v-if="student")
        .col-12
            estudianteCuenta(:student="student")
        .col-12
            estudianteInformacion(:student="student")
        .col-12
            estudiantePeriodos(:student="student")


</template>
<script>

import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

import estudianteCuenta from 'components/coordinador/estudiantes/estudianteCuenta'
import estudianteInformacion from 'components/coordinador/estudiantes/estudianteInformacion'
import estudiantePeriodos from 'components/coordinador/estudiantes/estudiantePeriodos'


export default {
    components: {
        estudianteCuenta,
        estudianteInformacion,
        estudiantePeriodos
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $route = useRoute()
        
        const student = ref(null)

        //---------
        const loadItems = async () => {
            const req = {
                coll: 'estudiantes',
                id: $route.params.id
            }
            const studentData = await $store.dispatch('api/GetSingleData', req)
            student.value = studentData[0]
        }
        loadItems()
        


        return {
            student,
            
        }

    }
}
</script>