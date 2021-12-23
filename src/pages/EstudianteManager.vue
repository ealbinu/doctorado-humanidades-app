<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md
      .col-12: q-card.shadow-24.bg-dark: q-card-section
        q-icon(name="person" color="white" size="md").q-mr-sm
        span.text-bold.text-primary.text-white {{user.name}}
        div
          span.text-grey.q-mx-sm Cuenta: 
          span.text-white {{user.user}}
          span.text-grey.q-mx-sm Correo: 
          span.text-white {{user.email}}

      .col-12.col-sm-4: q-card.shadow-24
        q-card-section: q-select(label="Generación:" v-model="userData.generacion" standout="bg-primary text-white" dense :options="generaciones" option-value="_id" option-label="name"  map-options @update:model-value="saveThis")

      .col-12.col-md-4: q-card.shadow-24
        q-card-section: q-select(label="Beca:" v-model="userData.beca" standout="bg-primary text-white" dense :options="['CONACYT', 'SIN BECA']" @update:model-value="saveThis")
      .col-12.col-md-4: q-card.shadow-24(:class="[(userData.status=='ACTIVO'?'bg-positive':''),(userData.status=='EGRESADO'?'bg-info':''),(userData.status=='BAJA'?'bg-negative':'')]")
        q-card-section: q-select(dark label="Estatus:" v-model="userData.status" standout="bg-primary text-white" dense :options="['ACTIVO', 'EGRESADO', 'BAJA']" @update:model-value="saveThis")
        
      .col-12: q-card.shadow-24
          q-card-section.text-center
            .text-grey Título de Investigación
            div.text-h6.text-bold.text-primary {{userData.tituloInvestigacion || '- -'}}
              //editThis(v-if="!loading" :value="userData.titulo" field="titulo" label="Título de tésis" coll="tesis" :user="user._id" :id="i._id"  @modified="loadItem" key="tituloTesis")
        
    .q-mt-xl: q-separator(spaced)
    
    periodos(:estudiantedata="userData" v-if="user && userData")
    
    //
      .q-mt-xl: q-separator(spaced)

      .text-h6.text-dark.q-my-md Coloquios / Candidaturas
      
      .row.q-col-gutter-md
        .col-12
            q-card.shadow-24
              q-card-sectionç
                .row.full-width.items-center
                  .col-6: q-checkbox(label="1er Coloquio" v-model="coloquios[0]")
                  .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
        .col-12
            q-card.shadow-24
              q-card-section
                .row.full-width.items-center
                  .col-6: q-checkbox(label="2do Coloquio" v-model="coloquios[0]")
                  .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
        .col-12
            q-card.shadow-24
              q-card-section
                .row.full-width.items-center
                  .col-6: q-checkbox(label="Exámen de candidatura" v-model="coloquios[0]")
                  .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
        .col-12
            q-card.shadow-24
              q-card-section
                .row.full-width.items-center
                  .col-6: q-checkbox(label="Examen de grado" v-model="coloquios[0]")
                  .col-6: q-input(label="Fecha" type="date" stack-label rounded standout="bg-primary text-white")
        
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import editThis from 'components/editThis.vue'
import { useQuasar } from 'quasar'

import periodos from 'components/UserManager/estudiantePeriodos'

export default {
    components: {
      editThis,
      periodos
    },
  setup () {
    const $q = useQuasar()
    const $route = useRoute()
    const $store = useStore()

    const user = ref({name:'', user: ''})
    const userData = ref({ })
    const userTesis = ref([{titulo:''}])
    const loading = ref(true)

    const periodos = ref([])
    const coloquios = ref([])


    const generaciones = ref([])

    const saveThis = () => {
      const reqItem = {...userData.value, coll:'estudiantes'}
      $store.dispatch('api/SaveItem', reqItem).then(res => {
        $q.notify('Guardado')
      })
    }
    const loadItem = () => {

      
      $store.dispatch('api/GetSingleUser', $route.params.id).then(res => {
        user.value = res
        // ------ call
        $store.dispatch('api/GetSingleData', {coll: 'estudiantes', id: $route.params.id}).then(res => {
          if(res.length){
            userData.value = res[0]
          }
        })
      })


    }
    loadItem()


    const loadGeneraciones = () => {
      $store.dispatch('api/GetAllData', 'generaciones').then(res => {
        generaciones.value = res
      })
    }
    loadGeneraciones()
   
    return {
      user,
      userData,
      userTesis,
      loadItem,
      loading,
      periodos,
      coloquios,
      generaciones,
      saveThis
    }
  },

}
</script>


<style lang="scss" scoped>

</style>