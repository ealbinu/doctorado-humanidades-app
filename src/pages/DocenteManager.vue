<template lang="pug">
q-page(padding)
    .row.q-col-gutter-md
      .col-12: q-card.shadow-24.bg-dark: q-card-section
        q-icon(name="assignment_ind" color="white" size="md").q-mr-sm
        span.text-bold.text-primary.text-white {{user.name}}
    
    .text-h6.text-dark.q-my-md Asignar estudiantes

    .row.q-col-gutter-md
      .col-12: q-card.shadow-24: q-card-section
        q-inner-loading(:showing="loading")
        q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="estudiantes" :columns="columns" dense v-if="!loading")
            template(v-slot:body="props")
                q-tr(:props="props")
                    q-td(key="name" :props="props")  {{props.row.name}}
                    q-td(key="generacion" :props="props")  {{props.row.generacion.name}}
                    q-td(key="periodos" :props="props"): q-btn(label="Periodos" color="primary" @click="openPeriodos(props.row)" size="sm")
    q-dialog(v-model="dialog")
      q-card(style="max-width: 80vw").full-width: q-card-section
        periodos(:estudianteid="activeuser.user" v-if="activeuser")

</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import editThis from 'components/editThis.vue'
import _ from 'lodash'
import periodos from 'components/UserManager/estudiantePeriodos'

export default {
    components: {
      editThis,
      periodos
    },
  setup () {
    const $route = useRoute()
    const $store = useStore()

    const user = ref({name:'', user: ''})
    const userData = ref({generacion: '', })
    
    
    const activeuser = ref(null)
    const dialog = ref(false)

    const loading = ref(true)

    const estudiantes = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'generacion', label: 'Generación', field: 'generacion', align:'left' },
        { name: 'periodos', label: 'Periodos', align:'center' },
    ]


    const loadItem = () => {
      $store.dispatch('api/GetSingleUser', $route.params.id).then(res => {
        user.value = res
        // ------ cal
        
        $store.dispatch('api/GetUsersByGroup', 'estudiante').then(res2 => {
          estudiantes.value = []
          for(var i in res2){
            if(res2[i].active){
              estudiantes.value.push(res2[i])
            }
          }
          // ------ call
          $store.dispatch('api/GetAllData', 'estudiantes').then(res3 => {
              for(var i in estudiantes.value){
                const mergeUsers = res3.filter(function(value, index, arr){
                  return value.user == estudiantes.value[i]._id
                })
                _.merge(estudiantes.value[i], mergeUsers[0])
              }
            loading.value = false
          })
        })
      })
    }

    loadItem()

    const openPeriodos = (user) => {
      dialog.value = true
      activeuser.value = user
    }
   
    return {
      user,
      userData,
      dialog,
      loadItem,
      loading,
      columns,
      estudiantes,
      openPeriodos,
      activeuser
    }
  },

}
</script>


<style lang="scss" scoped>

</style>