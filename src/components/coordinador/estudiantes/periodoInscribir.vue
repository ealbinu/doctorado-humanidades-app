<template lang="pug">
div
    q-btn( label="Inscribir a periodo" unelevated color="primary" no-caps @click="openDialog")
    q-dialog(v-model="dialog")
        q-card.shadow-24
            q-card-section
                .text-caption Periodos disponibles
                q-list(separator)
                    q-item(v-for="(i, index) in periodos")
                        q-item-section
                            .text-h6 {{i.name}}
                            .text-caption.text-grey {{i.startDate}} #[strong -] {{i.endDate}}
                            .text-primary(v-if="i.actual") Actual
                        q-item-section(side): q-btn(label="Inscribir a periodo" unelevated color="primary" size="sm" no-caps @click="inscribir(i)")
</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import difference from 'boot/difference.js'

export default {
    props: ['yainscrito', 'student'],
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $_ = inject('$_')
        // -- dialog
        const dialog = ref(false)
        const openDialog = () => {
            dialog.value = true
            loadPeriodos()
        }
        // -- yainscrito
        const inscrito = []
        const yainscritoFn = () => {
            for(var i in props.yainscrito){
                inscrito.push(JSON.parse(JSON.stringify(props.yainscrito[i].periodo)))
            }
        }
        yainscritoFn()
        // -- periodos
        const periodos = ref([])
        const loadPeriodos = async () => {
            const res = await $store.dispatch('api/GetAllData', 'periodos')
            
            let result = inscrito.filter(o1 => res.some(o2 => o1._id === o2._id))
            // Periodos a los que no esta inscrito:
            for(var i in result){
                $_.remove(res, result[i])
            }
            periodos.value = res
        }
        // -- inscribir a periodo : Asignacion
        const inscribir = async (periodo) => {
            const reqAsignacion = {
                coll: 'asignaciones',
                periodo: {
                    _id:periodo._id,
                    link:"periodos"
                },
                estudiante: {
                    _id: props.student._id,
                    link:"estudiantes"
                },
            }            
            const res = await $store.dispatch('api/SaveItem', reqAsignacion)
            dialog.value = false
            $q.notify('Estudiante inscrito a periodo')

            context.emit('updated')
        }

        return {
            dialog,
            openDialog,
            periodos,
            inscribir
        }
    }
}
</script>