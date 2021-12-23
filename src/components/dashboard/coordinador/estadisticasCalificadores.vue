<template lang="pug">
.row.q-col-gutter-md
    .col-3: q-card.shadow-24
        q-card-section.text-center
            .text-body2.text-dark Análisis
            apexchart(width="100%" type="pie" :options="options" :series="series.analisis")
            q-inner-loading(:showing="loading")
    .col-3: q-card.shadow-24
        q-card-section.text-center
            .text-body2.text-dark Estructura
            apexchart(width="100%" type="pie" :options="options" :series="series.estructura")
            q-inner-loading(:showing="loading")
    .col-3: q-card.shadow-24
        q-card-section.text-center
            .text-body2.text-dark Redacción
            apexchart(width="100%" type="pie" :options="options" :series="series.redaccion")
            q-inner-loading(:showing="loading")

    .col-3: q-card.shadow-24
        q-card-section.text-center
            .text-body2.text-dark Argumentación
            apexchart(width="100%" type="pie" :options="options" :series="series.argumentacion")
            q-inner-loading(:showing="loading")
    



</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()

        const loading = ref(true)
        const series = ref(
            {
                analisis: [0,0,0,0],
                estructura: [0,0,0,0],
                redaccion: [0,0,0,0],
                argumentacion: [0,0,0,0],
            }
        )

        const itemsType = ['analisis', 'estructura', 'redaccion', 'argumentacion']
        const loadItems = () => {
            $store.dispatch('api/GetAllData', 'asesores').then(res => {
                for(var i  in res){
                    const item = res[i]

                    for(var x in itemsType){
                        const type = item[itemsType[x]]
                        if(type){
                            if(type.valor == 'excelente'){ series.value[itemsType[x]][0] += 1 }
                            if(type.valor == 'bueno'){ series.value[itemsType[x]][1] += 1 }
                            if(type.valor == 'satisfactorio'){ series.value[itemsType[x]][2] += 1 }
                            if(type.valor == 'no satisfactorio'){ series.value[itemsType[x]][3] += 1 }
                        }
                    }
                }
                loading.value = false
            })
        }
        loadItems()

        return {
            loading, 
            series,
            options: { 
                labels: ['Excelente', 'Bueno', 'Satisfactorio', 'No satisfactorio'],
                legend:{ show: false }
            }



        }

    }
}
</script>