<template lang="pug">
div
    q-btn(label="Asignar asesoría" unelevated @click="openDialog" no-caps color="primary")
    q-dialog(v-model="dialog")
        q-card.shadow-24
            q-card-section
                    q-list(dense separator)
                        q-item(v-for="(i, index) in periodosDisponibles")
                            q-item-section(v-if="i.estudiante_user")
                                .text-body1 {{i.estudiante_user.name}}
                                .text-caption.text-grey {{i.estudiante.tituloInvestigacion || 'Investigación sin título'}}
                                .text-caption.text-blue-grey(v-for="(iUs, indexUs) in i.asesores_directores") #[strong Director:] {{iUs.docente_user.name}}
                                .text-caption.text-blue-grey(v-for="(iUs, indexUs) in i.asesores_lectores") #[strong Lectores:] {{iUs.docente_user.name}}
                            q-item-section(side)
                                q-checkbox(v-model="seleccionDirector" :val="i" label="Director" :disable="i.asesores_directores.length>0")
                            q-item-section(side)
                                q-checkbox(v-model="seleccionLector" :val="i" label="Lector" :disable="i.asesores_lectores.length>2")
                    q-separator(spaced)
                    .text-center: q-btn(label="Guardar asignaciones" color="primary" unelevated @click="saveItems" no-caps)
                    q-separator(spaced)
                    .text-caption.text-grey Se muestran estudiantes inscritos al periodo actual. Para asignar docente a otros periodos vaya a la sección #[strong estudiantes].
</template>
<script>
import {ref, inject} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['yaregistradas', 'docente'],
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $_ = inject('$_')
        
        // --
        const seleccionDirector = ref([]) 
        const seleccionLector = ref([]) 
        // -- 
        const dialog = ref(false)
        const openDialog = () => {
            dialog.value = true
            loadItems()
        }

        // -- 
        const periodosDisponibles = ref (null)

        const loadItems = async () => {
            const periodoNow = $store.getters['api/getPeriodo']
            const req = {
                "periodo._id": periodoNow._id
            }
            const res = await $store.dispatch('api/GetAllDataFilteredV2', ['asignaciones', req])
            let disponibles = res
            for(var ya in props.yaregistradas){
                const asignacion = props.yaregistradas[ya].asignacion
                var itemIndex = disponibles.findIndex(i => i._id == asignacion._id);
                disponibles.splice(itemIndex,1);
            }
            periodosDisponibles.value = disponibles
        }

        // --


        const saveItems = async () => {
            for(var i in seleccionDirector.value){
                const asignacion = seleccionDirector.value[i];
                let req = {
                    docente: props.docente.user,
                    asignacion: {
                        _id: asignacion._id,
                        link: "asignaciones"
                    },
                    tipo: 'director',
                    coll: 'asesores'
                }
                const res = await $store.dispatch('api/SaveItem', req)
            }
            for(var i in seleccionLector.value){
                const asignacion = seleccionLector.value[i];
                let req = {
                    docente: props.docente.user,
                    asignacion: {
                        _id: asignacion._id,
                        link: "asignaciones"
                    },
                    tipo: 'lector',
                    coll: 'asesores'
                }
                const res = await $store.dispatch('api/SaveItem', req)
            }

            dialog.value = false
            if(seleccionDirector.value.length>0 || seleccionLector.value.length>0){
                $q.notify('Asesorías asignadas')
                context.emit('updated')
            } else {
                $q.notify('Sin cambios por realizar')
            }
            seleccionDirector.value = []
            seleccionLector.value = []

        }


        return {
            dialog,
            openDialog,
            periodosDisponibles,
            seleccionDirector,
            seleccionLector,
            saveItems
        }

    }
}
</script>

<style>
.q-checkbox.disabled{
    opacity: 0.3 !important;
}
</style>