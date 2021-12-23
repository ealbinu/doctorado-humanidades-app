<template lang="pug">
template( v-for="(i, index) in menuItems" )
    q-item(clickable :to="'/periodo/'+i._id" active-class="text-accent").rounded-borders
        q-item-section(avatar): q-icon(name="description")
        q-item-section: q-item-label Periodo {{i.periodo.name}}
</template>
<script>
import {ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['userdata'],
    setup (props) {
        const $store = useStore()
        const $router = useRouter()
        
        
        const menuItems = ref([])
        const periodos = ref([])

        const loadItems = () => {
            const filters = {estudiante: props.userdata.id}
            $store.dispatch('api/GetAllDataFilteredV2', ['asignaciones', filters]).then(res => {
                menuItems.value = res
            })
        }
        if(props.userdata.group=='estudiante'){
            loadItems()
        }

        return {
            menuItems
        }
    }
}
</script>