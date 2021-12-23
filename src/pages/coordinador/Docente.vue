<template lang="pug">
q-page(padding data="coordinador/Docente")
    .row.q-col-gutter-md(v-if="docente")
        .col-12
            docenteCuenta(:docente="docente")
        .col-12
            asesorias(:docente="docente")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import docenteCuenta from 'components/coordinador/docentes/docenteCuenta'
import asesorias from 'components/coordinador/docentes/asesorias'

export default {
    components: {
        docenteCuenta,
        asesorias
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $route = useRoute()
        
        // --   Load docente
        const docente = ref(null)
        const loadItem = async () => {
            const docenteData = await $store.dispatch('api/GetSingleData', {coll:'docentes', id: $route.params.id})
            docente.value = docenteData[0]
        }
        loadItem()
        return {
            docente
        }

    }
}
</script>