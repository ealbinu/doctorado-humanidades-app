<template lang="pug">
q-card.shadow-24: q-card-section
    q-table(:rows="inactivos" :columns="columns" dense :pagination="pagination" :class="inactivos.length==0?'text-grey-4':''").shadow-0
        template(v-slot:top)
            .text-h6 Usuarios no habilitados
        template(v-slot:loading)
            q-inner-loading(showing color="primary")
        template(v-slot:body="props")
            q-tr(:props="props" no-hover)
                q-td(key="user" :props="props").text-bold  {{props.row.user}}
                q-td(key="name" :props="props") {{props.row.name}}
                q-td(key="email" :props="props") {{props.row.email}}
                q-td(key="active" :props="props")
                    q-toggle(v-model="props.row.active" @update:model-value="habilitarFN(props.row)")
                        //q-tooltip(v-if="props.row.active") Des
                        q-tooltip(v-if="!props.row.active") Habilitar usuario
</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const $_ = inject('$_');
        const inactivos = ref([])

        const generacionperiodoRef = ref() 

        const columns = [
            { name: 'user', label: 'Nº de Cuenta', field: 'user', align:'left' },
            { name: 'name', label: 'Nombre', field: 'name', align:'left' },
            { name: 'email', label: 'Email', field: 'email', align:'left' },
            { name: 'active', label: 'Habilitar acceso', field: 'active', align:'center', sortable: true },
        ]
        const pagination = {
            sortBy: 'active',
            rowsPerPage: 5,
            descending: true,
        }
        const habilitarFN = async (item) => {
            const updateUser = await $store.dispatch('api/SaveUser', {user: item})
            $q.notify('Docente habilitado')
            createUserDB(item)

            $_.remove(inactivos.value, item)
        }
        const createUserDB = async (item) => {
            let userCollection = await $store.dispatch('api/GetSingleData', {coll: 'docentes', id:item._id})
            const request = {
                coll: 'docentes',
                user: item._id,
            }
            if(userCollection.length == 0){
                const res = await $store.dispatch('api/SaveItem', request)
                context.emit('updated', res)
            } else {
                console.log('Usuario rehabilitado')
                context.emit('updated', userCollection[0])
            }
        }

        const loadDocentes= async () => {
            const lista = await $store.dispatch('api/GetUsersByGroupAll', 'docente')
            const listaFiltered = await $_.partition(lista, (el) => {
                return el.active === false
            })

            inactivos.value = listaFiltered[0]
            //activos.value = listaFiltered[1]
        }
        loadDocentes()





        return {
            inactivos,
            columns,
            pagination,
            habilitarFN,
            generacionperiodoRef
        }

    }
}
</script>