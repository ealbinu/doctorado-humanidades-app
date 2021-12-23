<template lang="pug">
q-page(padding)

  q-card.shadow-24: q-card-section
    q-table.shadow-0(:loading="loading" no-data-label="Sin datos" :rows="items" :columns="columns" :pagination="pagination")
      template(v-slot:top)
        .text-caption Periodos
        NuevoSetDePeriodoVue(@updated="updatePeriodos")

      
      template(v-slot:body="props")
          q-tr(:props="props" :class="props.row.actual?'bg-blue-grey-1 text-primary':''")
              q-td(key="actual" :props="props")
                template(v-if="props.row.actual")
                  q-icon(name="check" color="primary" size="md")
                template(v-else)
                  q-btn(icon="check_box_outline_blank" unelevated color="primary" flat size="sm" @click="setPeriodo(props.row)")
                    q-tooltip Asignar {{props.row.name}} como periodo actual.
              q-td(key="name" :props="props").text-bold.text-body1 {{props.row.name}}
              q-td(key="asignaciones" :props="props").text-bold {{props.row.asignaciones.length}}
              q-td(key="startDate" :props="props")
                q-btn(flat :label="props.row.startDate")
                  q-popup-proxy(cover transition-show="scale" @show="modStartDate(props.row)")
                    div
                      div: q-date(v-model="editingDate" minimal flat no-unset)
                      div.text-center.q-mb-sm: q-btn(label="Modificar" color="primary" size="sm")
                  q-tooltip Modificar
              q-td(key="endDate" :props="props"): q-btn(flat :label="props.row.endDate" @click="modEndDate(props.row)"): q-tooltip Modificar
              q-td(key="actions" :props="props")
                q-btn(icon="delete" @click="deleteItem(props.row)" size="xs" color="negative" round unelevated :disabled="props.row.actual"): q-tooltip Eliminar
      template(v-slot:bottom)
        .text-caption.text-center.q-mt-md Seleccione el periodo actual marcando la casilla a la izquierda
          q-icon(name="check")
          |  para asignar el periodo que transcurre en la plataforma. No podrá eliminar el periodo actual. Para actualizar las fechas de inicio o fin  dé clic sobre la fecha.

</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import editThis from 'components/editThis.vue'
import { date, useQuasar } from 'quasar'
import NuevoSetDePeriodoVue from 'src/components/periodos/NuevoSetDePeriodo.vue'

    const $q = useQuasar()
    const $route = useRoute()
    const $store = useStore()

    

    const periodoActual = computed (() => {
      return $store.getters['api/getPeriodo']
    })


    const updatePeriodos = () => {
      loadItem()
    }

    const loading = ref(true)


    const editingDate = ref()
    const modStartDate = (item) => {
      editingDate.value = date.formatDate(new Date(item.startDate) , 'YYYY/MM/DD')

    }
    const modEndDate = (item) => {

    }



    const items = ref([])

    const pagination = {
      sortBy: 'startDate',
      descending: true,
      rowsPerPage: 10
    }
    const columns = [
        { name: 'actual', label: 'Actual', field: 'actual', align:'center' },
        { name: 'name', label: 'Nombre', field: 'name', align:'left' },
        { name: 'asignaciones', label: 'Estudiantes inscritos', field: 'asignaciones', align:'center' },
        { name: 'startDate', label: 'Inicio', field: 'startDate', align:'center', sortable: true},
        { name: 'endDate', label: 'Fin', field: 'endDate', align:'center', sortable: true},
        { name: 'actions' }
    ]

    const newItem = ref({
      name: '',
      startDate: date.formatDate(Date.now(), 'YYYY-MM-DD'),
      endDate: date.formatDate(Date.now(), 'YYYY-MM-DD')
    })

    const submitNew = () => {
      const reqItem = {...newItem.value, coll: 'periodos'}
      $store.dispatch('api/SaveItem', reqItem).then(res=>{
          loadItem()
          newItem.value = {
            name: '',
            startDate: date.formatDate(Date.now(), 'YYYY-MM-DD'),
            endDate: date.formatDate(Date.now(), 'YYYY-MM-DD')
          }
      })
    }

    const loadItem = () => {
      items.value = []
      $store.dispatch('api/GetAllData', 'periodos').then(res => {
            items.value = res
            loading.value = false
      })

      $store.dispatch('api/GetPeriodo')
    }
    loadItem()

    const deleteItem = (item) => {
      let mess = ''
      if(item.asignaciones.length>0){
        mess = 'Se eliminarán las asignaciones de estudiantes inscritos. Los reportes de los asesores también serán eliminados.'
      }
      if(item.asignaciones.length == 1) {
        mess += '<br><br> <strong>Se eliminará '+item.asignaciones.length+' asignacion de estudiante inscrito al periodo.</strong>'
      } else if(item.asignaciones.length>1){
        mess += '<br><br> <strong>Se eliminarán '+item.asignaciones.length+' asignaciones de estudiantes inscritos al periodo.</strong>'
      }
      $q.dialog({
        title: 'Eliminar periodo',
        message: mess,
        html: true,
        cancel: 'Cancelar',
        ok: 'Eliminar',
      }).onOk(()=>{
        deletePeriodo(item)
      })
    }
    // --
    let asesoriasEliminadas = 0
    let asesoresEliminados = 0
    const deletePeriodo = async (item) => {
      const periodoRES = $store.dispatch('api/RemoveItem', ['periodos', '_id', item._id])
      for(var i in item.asignaciones){
        const asignacion = item.asignaciones[i]
        const asignacion_id = asignacion._id
        const asignaRES = await $store.dispatch('api/RemoveItem', ['asignaciones', '_id', asignacion_id])
        asesoriasEliminadas++
        for(var d in asignacion.asesores_directores){
          const item_id = asignacion.asesores_directores[d]._id
          asesoresEliminados++
          const directoRES = await $store.dispatch('api/RemoveItem', ['asesores', '_id', item_id])
        }
        for(var l in asignacion.asesores_lectores){
          const item_id = asignacion.asesores_lectores[l]._id
          asesoresEliminados++
          const lectoRES = await $store.dispatch('api/RemoveItem', ['asesores', '_id', item_id])
        }
      }
      
      
      if(asesoriasEliminadas==0 && asesoresEliminados==0){
        $q.notify('Se eliminó el periodo.')
      } else {
        $q.notify('Se eliminó el periodo con '+asesoriasEliminadas+' asignaciones y '+asesoresEliminados+' reportes de asesores.')
      }
      loadItem()
    }

    
   
    const setPeriodo = (item) => {
      console.log(item)
      $store.dispatch('api/SetPeriodo', item).then(res => {
        loadItem()
        $q.notify('Periodo actual modificado')
      })
    }


</script>


<style lang="scss" scoped>

</style>