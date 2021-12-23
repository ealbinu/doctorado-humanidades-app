<template lang="pug">
q-page(padding)
    activos(ref="estudiantesActivos")
    q-separator(spaced)
    inactivos(@updated="estudiantesActivos.addStudent($event)")
    
</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import inactivos from 'components/coordinador/estudiantes/inactivos.vue'
import activos from 'components/coordinador/estudiantes/activos.vue'
export default {
    components: {
        inactivos,
        activos
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
    
        const estudiantesActivos = ref()

        return {
            estudiantesActivos
        }

    }
}
</script>