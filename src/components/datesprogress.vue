<template lang="pug">
div
    q-linear-progress(:value="percentage" color="positive")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['date1', 'date2'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        var start = new Date(props.date1)
        var end = new Date(props.date2)
        var today = new Date()
        var percentage = Math.round( (today-start) / (end - start) * 10 )/10
        
        return {
            percentage
        }

    }
}
</script>