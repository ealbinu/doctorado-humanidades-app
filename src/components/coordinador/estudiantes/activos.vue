<template lang="pug">
q-card.shadow-24: q-card-section
    q-table(:rows="estudiantes" :columns="columns" :pagination="pagination" v-if="estudiantes.length>0" :filter="filter").shadow-0
        template(v-slot:top)
            .row.full-width
                .col-6: .text-h6 Estudiantes
                .col-6
                    q-input(label="Filtrar" standout="bg-primary text-white" v-model="filter" unelevated style="max-width:200px" dense clearable).q-ml-auto
                        //template(v-slot:append): q-icon(name="search")

        template(v-slot:loading)
            q-inner-loading(showing color="primary")
        template(v-slot:body="props")
            q-tr(:props="props" v-if="props.row.estudiante_user" @click="gotoStudent(props.row)" :class="colorByStatus(props.row.status)").cursor-pointer
                q-td(key="user" :props="props").text-bold {{props.row.estudiante_user.user}}
                q-td(key="name" :props="props") {{props.row.estudiante_user.name}}
                q-td(key="email" :props="props") {{props.row.estudiante_user.email}}
                q-td(key="generacion" :props="props") {{props.row.generacion?props.row.generacion.name:'-'}}
                
                q-td(key="tituloInvestigacion" :props="props") {{props.row.tituloInvestigacion || 'Sin título'}}
                q-td(key="status" :props="props")
                    q-icon(v-if="props.row.status == 'ACTIVO'" name="done_outline" color="positive"): q-tooltip {{props.row.status}}
                    q-icon(v-if="props.row.status == 'EGRESADO'" name="school" color="info"): q-tooltip {{props.row.status}}
                    q-icon(v-if="props.row.status == 'BAJA'" name="block" color="grey"): q-tooltip {{props.row.status}}
                
</template>
<script>
import {ref, inject } from 'vue'
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
        const estudiantes = ref([])

        const filter = ref('')

        if($route.query.filter){
            filter.value = $route.query.filter
        }

        const columns = [
            { name: 'user', label: 'Nº de Cuenta', field: row=> row.estudiante_user.user, align:'left', sortable: true},
            { name: 'name', label: 'Nombre', field: row=>row.estudiante_user.name, align:'left' },
            { name: 'email', label: 'Email', field: row=>row.estudiante_user.email, align:'left' },
            { name: 'generacion', label: 'Generación', field: row=>row.generacion.name, align:'left' },
            { name: 'tituloInvestigacion', label: 'Investigación', field: row=>row.tituloInvestigacion, align:'left' },
            { name: 'status', label: 'Estatus', field: row=>row.status, align:'left', sortable: true},
        ]
        const pagination = {
            sortBy: 'active',
            rowsPerPage: 40,
            descending: true,
        }

        const colorByStatus = (status) => {
            let colclass = ''
            switch(status){
                case 'BAJA':
                    colclass = 'text-grey'
                    break;
                case 'EGRESADO':
                    colclass = 'text-info'
                    break;
            }

            return colclass
        }

        const loadItems = async () => {
            const lista = await $store.dispatch('api/GetAllData', 'estudiantes')
            const listaFiltered = await $_.partition(lista, (el) => {
                return el.estudiante_user.active === true
            })
            estudiantes.value = listaFiltered[0]
        }
        
        loadItems()

        const addStudent = (item) => {
            loadItems()
        }

        const gotoStudent = (item) => {
            const path = '/estudiante/'+item.user
            $router.push(path)
        }

        return {
            estudiantes,
            columns,
            pagination,
            addStudent,
            gotoStudent,
            filter,
            colorByStatus
        }

    }
}
</script>