<template lang="pug">
div
    q-separator(spaced).q-my-md
    .text-body1.text-center.text-info DIRECTOR

    q-list(separator)
        q-item(v-for="(i, index) in directores" v-if="docentes.length" dense).text-center
            q-item-section.text-bold {{docenteName(i.docente)[0].name}}
            q-item-section(side  v-if="readonly==undefined"): q-btn(icon="delete" @click="deleteItem(i)" size="xs" padding="4px" color="negative"): q-tooltip Eliminar

    
    
    .text-center: q-btn(icon="add" label="Asignar director" color="info" unelevated no-caps @click="openDialog('director')" v-if="directores.length==0 && readonly==undefined").q-my-md

    q-separator(spaced).q-my-md
    .text-body1.text-center.text-negative LECTORES
    q-list(separator v-if="readonly!=undefined && lectores.length>0").text-center
        q-item(v-for="(i, index) in lectores" v-if="docentes.length" dense)
            q-item-section {{docenteName(i.docente)[0].name}}
            q-item-section(side v-if="readonly==undefined"): q-btn(icon="delete" @click="deleteItem(i)" size="xs" padding="4px" color="negative"): q-tooltip Eliminar

    .text-center: q-btn(icon="add" label="Asignar lector" color="secondary" unelevated no-caps @click="openDialog('lector')"  v-if="readonly==undefined").q-my-md

    q-dialog(v-model="dialog")
        q-card.shadow-24.bg-dark.full-width
            q-form(@submit.prevent="nuevoFN")
                q-card-section
                    .text-center.text-body1.text-white Asignar {{nuevoTipo=='director'?'Director':'Lector'}}
                q-card-section
                    .bg-white.rounded-borders.q-pa-sm: q-select(:options="docentes" v-model="nuevoItem" option-label="name" map-options standout="bg-primary text-white" required)
                q-card-section: .text-center
                    q-btn(icon="add" label="Asignar lector" color="primary" unelevated no-caps type="submit" :disabled="!nuevoItem")

                
</template>

<script>

import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

export default {
    props: ['asignacion', 'readonly'],
    setup (props) {
        const $q = useQuasar()
        const $store = useStore()
        
        const dialog = ref(false)

        const docentes = ref([])
        const directores = ref([])
        const lectores = ref([])


        const nuevoItem = ref(null)
        const nuevoTipo = ref('director')

         const openDialog = (type) => {
            nuevoTipo.value = type
            dialog.value = true
            nuevoItem.value = null
            
        }


        const loadDocentes = () => {
            if(docentes.value.length>0){
                return false
            }
            $store.dispatch('api/GetUsersByGroup', 'docente').then(res => {
                docentes.value = []
                for(var i in res){
                    if(res[i].active){
                        docentes.value.push(res[i])
                    }
                }
            })
        }

        const nuevoFN = () => {
            var reqItem = {
                docente: nuevoItem.value._id,
                tipo: nuevoTipo.value,
                asignacion: {
                    _id: props.asignacion._id,
                    link: "asignaciones"
                },
                coll: 'asesores'
            }
            $store.dispatch('api/SaveItem', reqItem).then(res => {
                $q.notify('Docente asignado')
                nuevoItem.value=null
                dialog.value=false
                loadAsignados()
            })
        }

        const docenteName = (theid) => {
            return docentes.value.filter(function(value,index,arr){
                return value._id == theid
            })
        }

        const loadAsignados = () => {
            const filtering = { "asignacion._id": props.asignacion._id }
            $store.dispatch('api/GetAllDataFilteredV2', ['asesores', filtering]).then(res => {
                directores.value = []
                lectores.value = []
                for(var i in res){
                    if(res[i].tipo=='director'){
                        directores.value.push(res[i])
                    } else {
                        lectores.value.push(res[i])

                    }
                }
            })
            loadDocentes()
        }
        loadAsignados()


        const deleteItem = (item) => {
            $store.dispatch('api/RemoveItem', ['asesores', '_id', item._id]).then(res => {
                loadAsignados()
            })
        }

        return {
            docentes,
            dialog,
            directores,
            lectores,
            openDialog,
            nuevoItem,
            nuevoTipo,
            nuevoFN,
            loadAsignados,
            docenteName,
            deleteItem
        }
    }
}
</script>