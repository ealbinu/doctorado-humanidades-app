<template lang="pug">
q-card.shadow-24
    q-card-section
        q-inner-loading(:showing="loading" color="primary")
        //VueJsonPretty(:data="asesorias")
        //VueJsonPretty(:data="asesorias[0]")
        q-table(:rows="asesorias" :columns="columns" :pagination="pagination").shadow-0
            template(v-slot:top)
                .row.full-width.items-center
                    .col-6: .text-caption Asesorias
                    .col-6.text-right: asignar(:yaregistradas="asesorias" :docente="docente" @updated="loadItems")
            //template(v-slot:loading)
            template(v-slot:body="props")
                q-tr(:props="props" v-if="props.row && props.row.estudiante_user" @click="openView(props.row)").cursor-pointer
                    q-td(key="estudiante" :props="props")
                        .text-bold {{props.row.estudiante_user.name}}
                        .text-caption.text-grey {{props.row.asignacion.estudiante.tituloInvestigacion}}
                        .text-caption.text-grey {{props.row.asignacion.periodo.name}}
                    q-td(key="tipo" :props="props").text-bold.text-capitalize {{props.row.tipo}}
        
        q-dialog(v-model="dialog")
            q-card
                q-card-section: .text-center.text-caption.text-grey Se muestran los contenidos registrados hasta el el momento por el docente. Los reportes de desempeño aprobados por el director se encuentran en la sección de #[strong reportes].
                q-card-section
                    desempeno(:item="activeItem" conacyt=true)


</template>
<script>

import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import desempeno from 'components/desempeno/desempenoViewOnly'
import asignar from 'components/coordinador/docentes/asesoriasAsignar'


import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
export default {
    components: {
        desempeno,
        asignar,
        VueJsonPretty
    },
    props: ['docente'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()

        const loading = ref(true)

        const dialog = ref(false)
        const activeItem = ref(false)
        
        
        // -- firma Coordinador
        const firmaCoordinador = ref(null)
        const loadFirmaCoordinador = () => {
            $store.dispatch('api/GetAllData', 'coordinadors').then(res => {
                if(res[0].firma){
                    firmaCoordinador.value = res[0].firma
                }
            })
        }
        loadFirmaCoordinador()

        //-- table properties
        const columns = [
            { name: 'estudiante', label: 'Investigación', field: 'estudiante', align:'left' },
            { name: 'tipo', label: 'Tipo', field: 'tipo', align:'left' },


        ]
        const pagination = {
            sortBy: 'active',
            rowsPerPage: 10,
            descending: true,
        }

        // -- openView
        const openView = (item) => {
            dialog.value = true
            activeItem.value = item
        }
        //-- load asesorias
        const asesorias = ref([])
        const loadItems = async () => {
            loading.value = true
            const req = {
                docente: props.docente.user._id
            }
            const res = await $store.dispatch('api/GetAllDataFilteredV2', ['asesores', req])
            asesorias.value = res
            loading.value = false
        }
        loadItems()

        return {
            columns,
            pagination,
            asesorias,
            openView,
            dialog,
            activeItem,
            firmaCoordinador,
            loadItems,
            loading
        }

    }
}
</script>