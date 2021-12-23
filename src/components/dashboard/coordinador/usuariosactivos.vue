<template lang="pug">
q-card().shadow-24
    q-card-section.text-center
        template(v-if="usergroup=='estudiante'")
            q-icon(name="people_alt" color="secondary" size="md")
        template(v-else)
            q-icon(name="contact_page" color="secondary" size="md")
        .text-body2.text-dark {{usergroup=='estudiante'? 'Estudiantes' : 'Docentes'}} activos
        .text-h6.text-primary.text-bold
            template(v-if="!loading") {{activos.length}}
            template(v-else): q-skeleton(type="text")
        //.text-caption.text-grey
            template(v-if="!loading") Inactivos: {{inactivos.length}}
            template(v-else): q-skeleton(type="text")
    q-inner-loading(:showing="loading")
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    props: ['usergroup'],
    setup (props) {
        const $store = useStore()
        const lista = ref(null)
        const activos = ref([])
        const inactivos = ref([])
        const loading = ref(true)
        const findUsers = () => {
            
            $store.dispatch('api/GetUsersByGroup', props.usergroup).then(res => {
                    lista.value = res
                    for(var i  in res){
                        if(res[i].active){
                            activos.value.push(res[i])
                        } else {
                            inactivos.value.push(res[i])
                        }
                    }
                    loading.value = false
            })
        }
        findUsers()
        return {
            lista,
            loading,
            activos,
            inactivos,
        }
    }
}
</script>