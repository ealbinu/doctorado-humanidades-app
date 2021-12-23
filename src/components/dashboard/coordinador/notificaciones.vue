<template lang="pug">
q-card().shadow-24
    q-card-section
        .text-center.text-body1 Notificaciones ({{lista.length}})
    q-card-section
        q-scroll-area(style="height: 120px")
            q-list(dense separator)
                q-item(v-for="(i, index) in lista" )
                    q-item-section
                        q-item-label {{i.description}}
                        q-item-label(caption) {{toDate(i._created)}}
                    q-item-section(side): .row.q-col-gutter-xs
                        .col-12.col-sm-6: q-btn(v-if="i.sendto || i.sendto!=''" @click="gotoit(i, index)" unelevated icon="open_in_browser" color="primary" size="xs" padding="4px"): q-tooltip Ir a sección
                        .col-12.col-sm-6: q-btn(@click="removeit(i, index)" unelevated icon="delete" color="negative" size="xs" padding="4px"): q-tooltip Eliminar notificación

            div(v-if="lista.length==0").text-caption.text-center.text-grey Sin notificaciones
    q-inner-loading(:showing="loading")
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { date } from 'quasar'
export default {
    props: ['usergroup'],
    setup (props) {
        const $router = useRouter()
        const $store = useStore()
        const lista = ref([])
        const loading = ref(true)
        const removeit = (item, index)  => {
            const reqitem = ref({
                _id : item._id,
                coll: 'notificaciones',
                status: 'read'
            })
            $store.dispatch('api/SaveItem', reqitem.value).then(res=>{

            })

            lista.value.splice(index,1)
        }
        const gotoit = (item, index) => {
            removeit(item, index)
            $router.push(item.sendto)
        }
        const toDate = (thedate) => {
            return date.formatDate(thedate*1000, 'YYYY/MM/DD - HH:MM:ss')
        }
        const loadItems = () => {
            $store.dispatch('api/GetAllDataFiltered', ['notificaciones', 'status', 'unread']).then(res => {
                    lista.value = res  
                    loading.value = false
            })
        }
        loadItems()
        return {
            lista,
            loading,
            removeit,
            gotoit,
            toDate
        }
    }
}
</script>