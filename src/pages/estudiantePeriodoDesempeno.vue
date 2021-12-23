<template lang="pug">
q-page(padding)
    div(v-if="activeItem && activeItem.firmaconacyt && activeItem.firmaCoordinador").text-center.q-my-lg: conacytPrint(:asignacion="activeItem")

    desempeno(:item="activeItem" v-if="activeItem")
    

</template>
<script>
import {ref, computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import desempeno from 'components/desempeno/desempenoViewOnly'

import conacytPrint from 'components/desempeno/conacytPrint'

export default {
    components: {
        desempeno,
        conacytPrint
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $route = useRoute()

        const activeItem = ref(null)

        const user = computed (() => {
            return $store.getters['api/getUser']
        })
        const userData = ref(null)
        const loadUserData = () => {
            $store.dispatch('api/GetSingleData',  {coll: 'estudiantes', id: user.value.id}).then(res => {
                userData.value = res[0]
                loadItem()
            })

        }
        loadUserData()
        

        const loadItem = () =>{
            const request = {
                asignacion: $route.params.id,
                tipo: 'director'
            }
            $store.dispatch('api/GetAllDataFilteredV2', ['asesores',request ]).then(res => {
                const acItem = res[0]
    
                $store.dispatch('api/GetSingleUser', acItem.docente).then(resDocente => {
                    acItem.docenteName = resDocente.name
                    
                    $store.dispatch('api/GetAllDataFilteredV2', ['docentes', {user:acItem.docente} ]).then(resDocenteData => {
                        acItem.docenteData = resDocenteData[0]
                        activeItem.value = acItem
                    })
                    
                })
            })
        }
        
        return {
            user,
            userData,
            activeItem

        }

    }
}
</script>