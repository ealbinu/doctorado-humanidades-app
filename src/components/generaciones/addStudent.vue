<template lang="pug">
div
    q-btn(label="Administrar estudiantes" unelevated color="primary" size="sm" no-caps @click="dialogOpen")
    q-dialog(v-model="dialog" full-width)
        q-card.shadow-24
            q-card-section
                .row.full-width.q-col-gutter-md
                    .col-6
                        q-card.shadow-24.bg-dark.text-white: q-card-section
                            q-list(dense separator)
                                q-item: .text-h6 Estudiantes en #[span.text-bold.text-accent {{generacion.name}}] generación.
                                template(v-for="(i, index) in estudiantes")
                                    q-item( v-if="i.currentGen")
                                        q-item-section(side): q-checkbox(v-model="i.currentGen" @click="addRemoveGen(i)" color="secondary")
                                        q-item-section
                                            .text-body1 {{i.estudiante_user.name}}
                                            .text-caption.text-grey(v-if="i.currentGen") Generación actual: #[strong {{i.generacion.name}}]
                    .col-6
                        q-card.shadow-24: q-card-section
                            q-list(dense separator)
                                q-item: .text-caption Estudiantes
                                template(v-for="(i, index) in estudiantes")
                                    q-item( v-if="!i.currentGen")
                                        q-item-section(side): q-checkbox(v-model="i.currentGen" @click="addRemoveGen(i)")
                                        q-item-section
                                            .text-body1 {{i.estudiante_user.name}}
                                            .text-caption.text-grey(v-if="i.generacion") Generación actual: #[strong {{ i.generacion.name }}]
            q-inner-loading(:showing="loading")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import _ from 'lodash'
export default {
    props: ['generacion'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const dialog = ref(false)


        
        const dialogOpen = () => {

            dialog.value = true
            loadStudents()
        }
        
        const loading = ref(true)
        const estudiantes = ref(null)
        const generacionModel = ref(null)

        

        const loadStudents = async () => {
            loading.value = true
            estudiantes.value = await $store.dispatch('api/GetAllData', 'estudiantes')
            for(var i in estudiantes.value){
                if(estudiantes.value[i].generacion){
                    estudiantes.value[i].currentGen = _.isEqual(estudiantes.value[i].generacion.name, props.generacion.name)
                } else {
                    estudiantes.value[i].currentGen = false
                }
            }
            loading.value = false
        }


        const addRemoveGen = (item) => {
            var newGen = {
                _id: props.generacion._id,
                link: "generaciones"
            }

            if(!item.currentGen){
                newGen = null
                item.generacion = null
            } else {
                item.generacion = props.generacion
            }
            var req = {
                coll: 'estudiantes',
                _id: item._id,
                //generacion: item.currentGen?props.generacion:''
                generacion: newGen
            }
            $store.dispatch('api/SaveItem', req).then(res => {
                $q.notify('Estudiante actualizado')
            })
        }
        return {
            loading,
            dialog,
            dialogOpen,
            estudiantes,
            generacionModel,
            addRemoveGen
        }

    }
}
</script>