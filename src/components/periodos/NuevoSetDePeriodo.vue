<template lang="pug">
q-card.shadow-24.bg-dark.full-width.q-my-md: q-card-section
    q-form(@submit.prevent="submitNew")
        .row.q-col-gutter-md.items-center
            .col-12: q-input(v-model="periodoName" label="Nombre o año de periodo" standout="bg-primary text-white text-h6" input-class="text-center text-white" dense dark required)
        
        template(v-for="(i, index) in periodos" v-if="periodoName")
            q-separator
            .row.q-col-gutter-md.items-center.text-center.q-mt-xs
                .col-sm-2.col-12(v-if="periodos.length>1"): .bg-white.rounded-borders.q-py-xs.text-h6
                    span {{periodoName}}
                    span(v-if="periodos.length>1") -#[strong {{index+1}}]
                .col-sm-4.col-5
                    q-input(v-model="i.startDate" label="Inicio"  standout="bg-primary text-white" dense dark readonly).cursor-pointer
                        q-popup-proxy(cover transition-show="scale")
                            q-date(v-model="i.startDate" minimal mask="YYYY-MM-DD" no-unset)
                .col-sm-4.col-5
                    q-input(v-model="i.endDate" label="Fin" type="date" standout="bg-primary text-white" dense dark readonly).cursor-pointer
                        q-popup-proxy(cover transition-show="scale")
                                q-date(v-model="i.endDate" minimal mask="YYYY-MM-DD" :navigation-min-year-month="date.formatDate(i.startDate,'YYYY/MM')"  no-unset)
                .col.text-center
                    q-btn(color="grey" size="xs" padding="2px 6px" icon="remove" v-if="index>0" @click="deletePeriodo(index)").q-mx-auto
                        q-tooltip Eliminar fecha
                    q-btn(color="primary" size="sm" icon="add" @click="newPeriodo" v-if="periodos.length-1 == index").q-mt-sm
                        q-tooltip Nueva fecha

        .row.q-col-gutter-md.items-center.q-mt-xs
            .col-12.text-center
                q-btn(:label="periodos.length>1?'Crear set de periodos' : 'Crear periodo'"  color="primary" unelevated no-caps  type="submit")
    .q-mt-md.text-center.text-caption.text-white Para crear nuevos periodos ingrese el nombre, fechas de inicio y fin. Puede añadir múltiples periodos con nombres consecutivos dándo click en "
        q-icon(name="add")
        |  Nueva Fecha"

</template>
<script setup>
import { useStore } from 'vuex'

import { date, useQuasar } from 'quasar'
import {ref} from 'vue'
const $store = useStore()
const props = defineProps({})
const emit = defineEmits(['updated'])
const todayDate = Date.now()
const periodoName = ref(date.formatDate(todayDate, 'YYYY'))

const periodosInit = [
    {
        startDate: date.formatDate( todayDate, 'YYYY-MM-DD'),
        endDate: date.formatDate( date.addToDate( todayDate, {days:1}) , 'YYYY-MM-DD'),
    }
]
const periodos = ref()
periodos.value = periodosInit



const newPeriodo = () => {
    const prevDate = new Date( periodos.value[periodos.value.length-1].endDate )
    const newitem = {
        startDate: date.formatDate( date.addToDate(prevDate, {days:2}), 'YYYY-MM-DD') ,
        endDate: date.formatDate( date.addToDate(prevDate, {days:3}), 'YYYY-MM-DD') 
    }
    console.log(newitem)
    periodos.value.push(newitem)
}
const deletePeriodo = (index) => {
    periodos.value.splice(index, 1)
}

const submitNew = () => {
    
    for(var i in periodos.value){
        const reqItem = {...periodos.value[i], coll: 'periodos'}
        reqItem.name = periodoName.value
        if(periodos.value.length>1){
            reqItem.name+='-'+((i*1)+1)
        }
        $store.dispatch('api/SaveItem', reqItem).then(res=>{
            periodos.value = periodosInit
            periodoName.value = date.formatDate(todayDate, 'YYYY')
            emit('updated')

        })
    }
}
</script>