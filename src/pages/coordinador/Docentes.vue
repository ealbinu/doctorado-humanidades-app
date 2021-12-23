<template lang="pug">
q-page(padding)
    activos(ref="docentesActivos")
    q-separator(spaced)
    inactivos(@updated="docentesActivos.addDocente($event)")
    
</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import inactivos from 'components/coordinador/docentes/inactivos.vue'
import activos from 'components/coordinador/docentes/activos.vue'
export default {
    components: {
        inactivos,
        activos
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
    
        const docentesActivos = ref()

        return {
            docentesActivos
        }

    }
}
</script>