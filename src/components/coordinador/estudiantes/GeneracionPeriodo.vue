<template lang="pug">
q-dialog(v-model="dialog")
    q-card.bg-dark
        q-card-section
            .row.q-col-gutter-md.q-mb-md
                .col-6
                    q-card.shadow-24
                        q-card-section
                            .text-h6 Inscribir a periodo
                            q-select(v-model="periodoChoose" :options="periodos" map-options option-label="name")
                                template(v-slot:option="scope")
                                    q-item(v-bind="scope.itemProps")
                                        q-item-section
                                            q-item-label {{scope.opt.name}}
                                            q-item-label(caption v-if="scope.opt.actual") Periodo actual
                        //p {{periodos}}
                .col-6
                    q-card.shadow-24
                        q-card-section
                            .text-h6 Elegir generación
                            q-select(v-model="generacionChoose" :options="generaciones" map-options option-label="name")
        q-card-section
            .row.items-center
                .col-6: q-btn(label="Cancelar asignación" color="secondary"  unelevated v-close-popup)
                .col-6: q-btn(label="Asignar periodo y generación" color="primary"  unelevated @click="asignarFN")

</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['user'],
    setup(props, {expose}){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const dialog = ref(false)

        const userItem = ref(null)
        const openit = (item) => {
            const request = {
                coll: 'estudiantes',
                id: item._id
            }
            userItem.value = item
            if(userItem.value){
                dialog.value = true
                loadItems()
            }
        }

        const periodos = ref([])
        const generaciones = ref([])

        const periodoChoose = ref([])
        const generacionChoose = ref([])

        const loadItems = async () => {
            periodos.value = await $store.dispatch('api/GetAllData', 'periodos')
            generaciones.value = await $store.dispatch('api/GetAllData', 'generaciones')
            periodoChoose.value = $store.getters['api/getPeriodo']
            generacionChoose.value = generaciones.value[generaciones.value.length-1]
        }


        const asignarFN = async () => {
            const saveUser = {
                coll: 'estudiantes',
                _id: userItem.value._id,
                generacion: {
                    _id: generacionChoose.value._id,
                    link: "generaciones"
                },
            }
            const storeGeneracion = await $store.dispatch('api/SaveItem', saveUser)
            const savePeriodo = {
                coll: 'asignaciones',
                periodo: {
                    _id: periodoChoose.value._id,
                    link: "periodos"
                },
                estudiante: {
                    _id: userItem.value._id,
                    link: "estudiantes"
                }
            }
            
            const storePeriodo = await $store.dispatch('api/SaveItem', savePeriodo)
            dialog.value = false
            $q.notify('Periodo y Generación asignados')
        }


        loadItems()

        expose({
            openit
        })
        return {
            openit,
            dialog,
            periodos,
            generaciones,
            periodoChoose,
            generacionChoose,
            asignarFN
        }

    }
}
</script>