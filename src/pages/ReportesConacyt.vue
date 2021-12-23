<template lang="pug">
q-page(padding)
    template(v-if="reportes && estudiantes")
        q-card.shadow-24: q-card-section
            q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="reportes" :columns="columns")
                template(v-slot:body="props")
                    q-tr(:props="props" @click="openit(props.row)").cursor-pointer
                        q-td(key="estudiante" :props="props")
                            .text-caption {{findUserData(props.row.asignacion.estudiante.user).name}}
                            .text-body2.text-dark.text-bold {{ props.row.asignacion.estudiante.tituloInvestigacion}}
                            .porcentaje: div(:style="'width:'+ props.row.porcentaje + '%'")
                        q-td(key="generacion" :props="props") {{ props.row.asignacion.estudiante.generacion.name }}
                        q-td(key="periodo" :props="props") {{props.row.asignacion.periodo.name}}
                        q-td(key="calificacion" :props="props") {{props.row.calificacion}}
                        q-td(key="firmaconacyt" :props="props") {{props.row.firmaconacyt ? 'Firmado' : '-'}}
                        q-td(key="firmaCoordinador" :props="props") {{props.row.firmaCoordinador ? 'Firmado' : '-'}}
            q-dialog(v-model="dialog")
                q-card
                    q-card-section
                        //.row.q-col-gutter-md.q-mb-md
                            .col-12: q-card.shadow-24
                                q-card-section.text-center
                                    .text-grey Lector
                                    div.text-body1.text-bold.text-secondary {{activeItem.docenteName}}
                        div.text-center.q-my-lg(v-if="activeItem"): conacytPrint(:asignacion="activeItem")
                        desempeno(:item="activeItem" conacyt=true)
                    q-card-section.text-center(v-if="!activeItem.firmaCoordinador")
                        q-btn(label="Aprobar y firmar reporte " no-caps color="primary" @click="signReport")
                    q-card-section.text-center(v-else)
                        .text-h6.text-primary.q-mb-md Firmado por coordinador
                        .text-center
                            q-img(style="width: 100%; max-width: 200px" :src="firmaCoordinador")

</template>
<script>
import {ref,computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import desempeno from 'components/desempeno/desempenoViewOnly'
import conacytPrint from 'components/desempeno/conacytPrint'
import _ from 'lodash'
export default {
    components: {
        desempeno,
        conacytPrint
    },
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const loading = ref(false)

        const reportes = ref(null)
        const estudiantes = ref(null)
        
        const findUserData = (id) => {
            return _.find(estudiantes.value, {_id:id});
        }
        const firmaCoordinador = ref(null)
        const loadItems = () => {
            var filterreq = {
                tipo: 'director',
                firmaconacyt: true,
            }

            
            $store.dispatch('api/GetAllData', 'coordinadors').then(res => {
                if(res[0].firma){
                    firmaCoordinador.value = res[0].firma
                }
            })

            $store.dispatch('api/GetAllDataFilteredV2', ['asesores', filterreq]).then(res => {
                reportes.value = res
            })
            $store.dispatch('api/GetUsersByGroup', 'estudiante').then(res => {
                var students = []
                for(var i  in res){
                    if(res[i].active){
                        students.push(res[i])
                    }
                }
                estudiantes.value = students
            })
        }
        loadItems()


        const dialog = ref(false)
        const activeItem = ref(null)
        const openit = (item) => {
            dialog.value = true
            activeItem.value = item
        }


        const signReport = () => {
            var reqsave = {
                coll: 'asesores',
                _id: activeItem.value._id,
                firmaCoordinador: true
            }
            $store.dispatch('api/SaveItem', reqsave).then(res => {
                dialog.value = false
                activeItem.value = null
                $q.notify('Reporte firmado')
                loadItems()
            })
        }


        return {
            loading,
            reportes,
            columns: [
                { name: 'estudiante', label: 'Investigación', field: 'estudiante', align:'left' },
                { name: 'generacion', label: 'Generación', field: 'asignacion', align:'left' },
                { name: 'periodo', label: 'Periodo', field: 'asignacion', align:'left' },
                { name: 'calificacion', label: 'Calificacion', field: 'calificacion', align:'center' },
                { name: 'firmaconacyt', label: 'CONACYT', field: 'firmaconacyt', align:'center' },
                { name: 'firmaCoordinador', label: 'Firma de coordinador', field: 'firmaCoordinador', align:'center' },
            ],
            estudiantes,
            findUserData,
            openit,
            activeItem,
            dialog,
            signReport,
            firmaCoordinador,
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