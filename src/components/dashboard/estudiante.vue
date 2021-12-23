<template lang="pug">
.row.q-col-gutter-md(v-if="userData")
    .col-12: q-card.shadow-24
          q-card-section
            q-input(v-model="userData.tituloInvestigacion" standout="bg-primary text-white" label="Título de Investigación" type="textarea")
            .text-center.q-mt-md: q-btn(label="Actualizar título" no-caps color="primary" unelevated @click="saveThis(userData.tituloInvestigacion, 'tituloInvestigacion')")
    .col-sm-4: q-card.shadow-24: q-card-section
        q-input(readonly label="Generación" v-model="userData.generacion.name")
    .col-sm-4: q-card.shadow-24: q-card-section
        q-input(readonly label="Beca" v-model="userData.beca")
    .col-sm-4: q-card.shadow-24: q-card-section
        q-input(readonly label="Estado" v-model="userData.status")


.q-mt-xl: q-separator(spaced).q-my-md
.text-h6.text-dark.q-my-md Periodos
.row.q-col-gutter-md.relative-position
    .col-12.col-sm-4(v-for="(i, index) in asignaciones"): q-card.shadow-24
        q-card-section.text-center
            .text-h6 {{i.periodo.name}}
            div.text-caption.text-grey
                | {{i.periodo.startDate}}
                span.text-primary.text-bold.q-mx-sm - 
                | {{i.periodo.endDate}}
            datesprogress(:date1="i.periodo.startDate" :date2="i.periodo.endDate")
        q-card-section
            asesores(:asignacion="i" :key="i._id" readonly)
        q-card-section.text-center
            q-btn(color="primary" label="Ver desempeño" no-caps unelevated :to="'/periodo/'+i._id")

    

    
    q-inner-loading(:showing="loading")
</template>

<script>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import asesores from 'components/UserManager/estudianteAsesores.vue'
import datesprogress from 'components/datesprogress'

export default {
    components: {
        asesores,
        datesprogress,
    },
    setup (){
        const $q = useQuasar()
        const $router = useRouter()
        const $store = useStore()
        
        const loading = ref(false)
        const asignaciones = ref(null)
        
        const user = computed (() => {
            return $store.getters['api/getUser']
        })
        const userData = ref(null)

        


        const saveThis = (value, field) => {
            if(!value){
                $q.notify('Verifica el contenido')
                return false
            }
            let reqItem = {_id: userData.value._id, coll:'estudiantes'}
            reqItem[field] = value

            $store.dispatch('api/SaveItem', reqItem).then(res => {
                $q.notify('Guardado')
            })
        }


        const loadAsignaciones = () => {
            $store.dispatch('api/GetAllDataFiltered', ['asignaciones', 'estudiante', user.value.id]).then(res => {
                asignaciones.value = res
                loading.value = false
            })
        }
        const loadUserData = () => {
            $store.dispatch('api/GetSingleData',  {coll: 'estudiantes', id: user.value.id}).then(res => {
                userData.value = res[0]
                loadAsignaciones()
            })
        }
        loadUserData()
        


        return{
            user,
            userData,
            saveThis,
            asignaciones,
            loading
        }
    }
}
</script>
