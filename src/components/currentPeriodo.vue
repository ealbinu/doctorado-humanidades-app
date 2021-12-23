<template lang="pug">
div
    q-card-section.text-center()
        .text-h6 {{currentP.name}}
        div.text-caption.text-grey
            | {{currentP.startDate}}
            span.text-primary.text-bold.q-mx-sm - 
            | {{currentP.endDate}}
        datesprogress(:date1="currentP.startDate" :date2="currentP.endDate" v-if="currentP")
</template>
<script>
import {ref, computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import datesprogress from 'components/datesprogress'
export default {
    components: {
        datesprogress
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const currentP = computed(() => {
            return $store.getters['api/getPeriodo']
        })
        $store.dispatch('api/GetPeriodo')
        return {
            currentP
        }

    }
}
</script>