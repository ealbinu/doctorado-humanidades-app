vue3
<template lang="pug">
q-page(padding)
  q-card.shadow-24: q-card-section
    .text-h6.text-primary Generaciones
    q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="items" :columns="columns")
        template(v-slot:top)
            
            q-card.shadow-24.bg-dark.full-width.q-my-md: q-card-section: q-form(@submit.prevent="submitNew").row.q-col-gutter-md.items-center
                .col: q-input(v-model="newItem.name" label="Nombre" standout="bg-primary text-white" dense dark required)
                .col.text-right: q-btn(label="Crear generación"  color="primary" unelevated no-caps :disabled="newItem.name==''" type="submit")
        template(v-slot:body="props")
            q-tr(:props="props")
                q-td(key="name" :props="props")
                  q-btn(@click="estudiantesFilter(props.row.name)" flat :label="props.row.name" no-caps): q-tooltip Ver generación en área de estudiantes

                q-td(key="add" :props="props"): addStudent(:generacion="props.row")
                q-td(key="actions" :props="props")
                  q-btn(icon="delete" @click="deleteItem(props.row)" size="xs" padding="4px" color="negative" round unelevated): q-tooltip Eliminar


    
  q-separator(spaced)
  
  
  
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { date, useQuasar } from 'quasar'
import addStudent from 'components/generaciones/addStudent'
export default {
    components: {
      addStudent
    },
  setup () {
    const $q = useQuasar()
    const $router = useRouter()
    const $store = useStore()

    
    
    const loading = ref(true)

    const items = ref([])
    const columns = [
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'add', label: 'Añadir estudiantes', field: 'add', align:'center' },
        { name: 'actions' }
    ]

    const newItem = ref({
      name: '',
    })

    const submitNew = () => {
      const reqItem = {...newItem.value, coll: 'generaciones'}
      $store.dispatch('api/SaveItem', reqItem).then(res=>{
          loadItem()
          newItem.value={
              name: ''
          }
      })
    }

    const loadItem = () => {
      $store.dispatch('api/GetAllData', 'generaciones').then(res => {
            items.value = res
            loading.value = false
      })
    }

    const deleteItem = (item) => {
      $q.dialog({
        title: 'Eliminar generación',
        message: 'Los estudiantes ligados a esta generación seguirán mostrando el nombre en su información.',
        cancel: 'Cancelar',
        ok: 'Eliminar',
      }).onOk(()=>{
        $store.dispatch('api/RemoveItem', ['generaciones', '_id', item._id]).then(res=>{
          loadItem()
          $q.notify('Eliminado')
        })
      })
    }

    loadItem()


    // --
    const estudiantesFilter = (name) => {
      $router.push({path: '/estudiantes', query: {filter: name}})
    }
   
    return {
      loadItem,
      loading,
      items,
      columns,
      newItem,
      submitNew,
      deleteItem,
      estudiantesFilter
    }
  },

}
</script>


<style lang="scss" scoped>

</style>