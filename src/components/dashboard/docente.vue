<template lang="pug">
div
    q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="asignaciones" :columns="columns")
        template(v-slot:body="props")
            q-tr(:props="props" @click="openit(props.row)").cursor-pointer
                
                q-td(key="estudiante" :props="props")
                        .text-caption {{props.row.estudiante_user.name}}
                        .text-body2.text-dark.text-bold {{ props.row.asignacion.estudiante.tituloInvestigacion}}
                        .porcentaje: div(:style="'width:'+ props.row.porcentaje + '%'")
                
                q-td(key="generacion" :props="props")
                    template(v-if="props.row.asignacion.estudiante.generacion.name") {{ props.row.asignacion.estudiante.generacion.name }}
                    template(v-else) No asignado 
                q-td(key="periodo" :props="props") {{props.row.asignacion.periodo.name}}
                q-td(key="tipo" :props="props" :class="props.row.tipo=='director'?'text-primary':'text-secondary'").text-capitalize.text-bold {{props.row.tipo}}
                q-td(key="calificacion" :props="props") {{props.row.calificacion}}
                q-td(key="firmaconacyt" :props="props") {{props.row.firmaconacyt ? 'Firmado' : '-'}}
                q-td(key="firmaCoordinador" :props="props") {{props.row.firmaCoordinador ? 'Firmado' : '-'}}




</template>


<script>
import {ref, computed, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import _ from 'lodash'
export default {
    setup (){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $_ = inject('$_')
        
        const loading = ref(false)


        const user = computed (() => {
            return $store.getters['api/getUser']
        })
        const currentP = computed(() => {
            return $store.getters['api/getPeriodo']
        })

        const asignaciones = ref([]) 


        const loadItems = async () => {
            const request = {
                docente: user.value.id,
                "asignacion.periodo": currentP.value._id
            }

            const res = await $store.dispatch('api/GetAllDataFilteredV2', ['asesores', request])

            for(var i in res){
                const itm = res[i]
                if(itm.asignacion.estudiante.status!='ACTIVO'){
                }
            }
            asignaciones.value = res
        }
        
        loadItems()

        
        const openit = (item) => {
            const asesoreid = item._id
            const asignacion = item.asignacion._id
            const estudiante = item.asignacion.estudiante.user
            $router.push('/desempeno/'+asesoreid)
        }
        return{
            columns: [
                { name: 'estudiante', label: 'Investigación', field: 'estudiante', align:'left' },
                { name: 'generacion', label: 'Generación', field: 'asignacion', align:'left' },
                { name: 'periodo', label: 'Periodo', field: 'asignacion', align:'left' },
                { name: 'tipo', label: 'Tipo', field: 'tipo', align:'left' },
                { name: 'calificacion', label: 'Calificacion', field: 'calificacion', align:'center' },
                { name: 'firmaconacyt', label: 'CONACYT', field: 'firmaconacyt', align:'center' },
                { name: 'firmaCoordinador', label: 'Firma de coordinador', field: 'firmaCoordinador', align:'center' },

            ],
            loading,
            openit,
            asignaciones,
        }
    }
}
</script>

<style lang="scss" scoped>
.porcentaje{
    width: 100%;
    height: 6px;
    background: #eee;
    div{
        background: $primary;
        height: 6px;
    }
}

</style>