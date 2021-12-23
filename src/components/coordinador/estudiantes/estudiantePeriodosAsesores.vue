<template lang="pug">
div
    q-btn(label="Asignar asesores" @click="openDialog" color="positive" unelevated no-caps size="sm").q-mt-md
    q-dialog(v-model="dialog")
        q-card
            q-card-section
                q-list(dense separator)
                    q-item(v-for="(i, index) in docentes")
                        q-item-section
                            div {{i.name}}
                        q-item-section(side)
                            q-checkbox(label="Director" :val="i._id" v-model="directorList" :disable="DirectorisLector(i._id)")
                        q-item-section(side)
                            q-checkbox(label="Lector" :val="i._id" v-model="lectorList" color="secondary"  :disable="LectorisDirector(i._id)")
                template(v-if="directorListOriginal.length>0")
                    q-separator(spaced)
                    .text-caption.text-grey Para cambiar de director primero debe elimnar al que se encuentra asignado.
                q-separator(spaced)
                .text-center: q-btn(label="Guardar asesores" color="primary" unelevated @click="saveItems" no-caps)


</template>
<script>
import {ref, watch, inject, computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['asignacion'],
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        const $_ = inject('$_');
        
        const dialog = ref(false)
        const docentes = ref(null)
        
        const directorListOriginal = ref([])
        const lectorListOriginal = ref([])

        const directorList = ref([])
        const lectorList = ref([])

        const asignacion = ref(props.asignacion)



        // ---
        const LectorisDirector = (item) => {
            const isItem =  directorList.value.includes(item)
            const isFix = lectorListOriginal.value.includes(item)

            return isItem || isFix
        }
        const DirectorisLector = (item) => {
            const isItem = lectorList.value.includes(item)
            const isFix = directorListOriginal.value.length>0
            
            return isItem || isFix
        }
        // ---
        const openDialog = async () => {
            docentes.value = await $store.dispatch('api/GetUsersByGroup', 'docente')
            dialog.value = true
        }
        // --- ALREADY Directores / Lectores
        const loadDirectorLectores = () => {
            const directores = asignacion.value.asesores[0]
            for(var d in directores){
                directorListOriginal.value.push(directores[d].docente)
                directorList.value.push(directores[d].docente)
            }
            const lectores = asignacion.value.asesores[1]
            for(var l in lectores){
                lectorListOriginal.value.push(lectores[l].docente)
                lectorList.value.push(lectores[l].docente)
            }

        }
        loadDirectorLectores()

        //console.log(directorList.value, lectorList.value)
        // ---
        watch(() => directorList.value, (nu, ol) => {
            if(directorList.value.length>1){ directorList.value.shift() }
        })
        // ---
        const saveItems = async () => {
            // Check if exists: Director
            
            const agregarDirectores = $_.difference(directorList.value, directorListOriginal.value)
            const removerDirectores = $_.difference(directorListOriginal.value, directorList.value)
            
            const agregarLectores = $_.difference(lectorList.value, lectorListOriginal.value)
            const removerLectores = $_.difference(lectorListOriginal.value, lectorList.value)
            

            const eliminarAsesores = $_.merge(removerDirectores, removerLectores)


            let asesoresAgregadosCount = 0

            //Director
            for(var ll in agregarDirectores){
                const asesor = agregarDirectores[ll]
                const asignacion = props.asignacion
                delete asignacion.asesores
                let req = {
                    docente: asesor,
                    asignacion: {
                        _id: asignacion._id,
                        link: "asignaciones"
                    },
                    tipo: 'director',
                    coll: 'asesores',
                }
                const res = await $store.dispatch('api/SaveItem', req)
                asesoresAgregadosCount++
            }
            //Lector
            
            for(var ll in agregarLectores){
                const asesor = agregarLectores[ll]
                const asignacion = props.asignacion
                delete asignacion.asesores
                const req = {
                    docente: asesor,
                    asignacion: {
                        _id: asignacion._id,
                        link: "asignaciones"
                    },
                    tipo: 'lector',
                    coll: 'asesores',
                }
                const res = await $store.dispatch('api/SaveItem', req)
                asesoresAgregadosCount++
            }


            

            if(agregarDirectores.length==0 && agregarLectores.length==0){
                dialog.value = false
                $q.notify('Sin cambios por realizar')
            } else {
                if(asesoresAgregadosCount == 1){
                    $q.notify('1 asesor asignado.')
                } else {
                    $q.notify(asesoresAgregadosCount + ' asesor asignados.')
                }
                context.emit('updateAsesores')
            }
        }
        return {
            dialog,
            openDialog,
            docentes,
            directorList,
            lectorList,
            saveItems,
            LectorisDirector,
            DirectorisLector,
            directorListOriginal,
            lectorListOriginal
        }

    }
}
</script>


<style>
.q-checkbox.disabled{
    opacity: 0.3 !important;
}
</style>