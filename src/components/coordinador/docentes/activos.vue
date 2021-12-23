<template lang="pug">

q-card.shadow-24: q-card-section
    q-table(:rows="docentes" :columns="columns" :pagination="pagination" v-if="docentes.length>0").shadow-0
        template(v-slot:top)
            .text-h6 Docentes
        template(v-slot:loading)
            q-inner-loading(showing color="primary")
        template(v-slot:body="props")
            q-tr(:props="props" v-if="props.row.docente_user" @click="gotoDocente(props.row)").cursor-pointer
                q-td(key="user" :props="props").text-bold {{props.row.docente_user.user}}
                q-td(key="name" :props="props") {{props.row.docente_user.name}}
                q-td(key="email" :props="props") {{props.row.docente_user.email}}

            
</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $route = useRoute()
        const $_ = inject('$_');
        const docentes = ref([])


        const columns = [
            { name: 'user', label: 'Usuario', field: 'user', align:'left' },
            { name: 'name', label: 'Nombre', field: 'name', align:'left' },
            { name: 'email', label: 'Email', field: 'email', align:'left' },

        ]
        const pagination = {
            sortBy: 'active',
            rowsPerPage: 10,
            descending: true,
        }
        const loadItems = async () => {
            const lista = await $store.dispatch('api/GetAllData', 'docentes')

            const listaFiltered = await $_.partition(lista, (el) => {
                return el.docente_user.active === true
            })
            docentes.value = listaFiltered[0]
        }
        
        loadItems()

        const addDocente =async (item) => {
            if(item.docente_user){
                docentes.value.push(item)
            } else {
                loadItems()
            }
        }

        const gotoDocente = (item) => {
            const path = '/docente/'+item.user
            console.log(path)
            $router.push(path)
        }

        return {
            docentes,
            columns,
            pagination,
            addDocente,
            gotoDocente
        }

    }
}
</script>