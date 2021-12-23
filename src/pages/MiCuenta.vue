<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md
        .col-12
            firma(:userdata="userData" :user="user" v-if="userData" @reload="loadUserData")

</template>
<script>
import {ref, computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import firma from 'components/micuenta/firma'

export default {
    components: {
        firma
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()

        
        

        const user = computed (() => {
            return $store.getters['api/getUser']
        })
        const userData = ref(null)
        const loadUserData = () => {
            $store.dispatch('api/GetSingleData',  {coll: user.value.group+'s', user: user.value.id}).then(res => {
                userData.value = res[0]
            })
        }
        loadUserData()

        

        

        return {
            user,
            userData,
            loadUserData
        }

    }
}
</script>