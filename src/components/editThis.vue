<template lang="pug">
span.q-ml-sm
    q-btn(icon="brush" flat padding="2px" color="grey" size="xs" @click="dialog = true")
        q-tooltip Editar
    q-dialog(v-model="dialog")
        q-card.bg-dark.shadow-20(style="min-width:320px").full-width
            q-card-section.text-center: .text-h6.text-white Editar
            q-card-section
                q-form(@submit.prevent="saveit")
                    q-input(v-model="thevalue" :label="thelabel" rounded standout dark dense required)
                    q-separator(spaced)
                    .text-center.q-mt-sm
                        q-btn(label="Guardar" color="secondary" unelevated type="submit")
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    props: ['value', 'field', 'label', 'coll', 'id', 'user'],
    setup (props, context) {
        const $store = useStore()
        const dialog = ref(false)
        const thevalue = ref(props.value)
        const thelabel = ref(props.label)

        const item = ref({
            _id : props.id,
            coll: props.coll,
        })

        const saveit = () => {
            if(props.user){
                item.value['user'] = props.user
            }
            item.value[props.field] = thevalue.value
            $store.dispatch('api/SaveItem', item.value).then(res => {
                context.emit('modified')
                dialog.value = false
                item.value = {
                    _id : props.id,
                    coll: props.coll,
                }
            })
        }
        
        return {
            dialog,
            thevalue,
            thelabel,
            saveit,
        }
    }
}
</script>