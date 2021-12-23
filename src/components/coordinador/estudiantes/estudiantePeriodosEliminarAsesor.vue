<template lang="pug">
div
    q-btn(icon="delete"  @click="openDialog" color="negative" no-caps size="xs" unelevated round).absolute-bottom-right.q-ma-sm
        q-tooltip Eliminar asesor
    q-dialog(v-model="dialog")
        q-card
            q-toolbar.bg-negative.text-white: q-toolbar-title Eliminar asesor
            q-card-section.text-center
                .text-body2 Se eliminará al asesor
                .text-h6 {{asignacion.docente_user.name}}
                .text-body2 del periodo
                .text-h6 {{asignacion.asignacion.periodo.name}}
                q-separator(spaced)
                template(v-if="asignacion.analisis || asignacion.estructura || asignacion.redaccion || asignacion.argumentacion")
                    .text-h6.text-negative El contenido escrito en el reporte por el asesor será eliminado y no se podrá recuperar.
                    .text-left
                        q-separator
                        .text-caption.text-grey Análisis
                        .text-body2.text-grey {{asignacion.analisis.comentario}}
                        q-separator
                        .text-caption.text-grey Estructura
                        .text-body2.text-grey {{asignacion.estructura.comentario}}
                        q-separator
                        .text-caption.text-grey Redacción
                        .text-body2.text-grey {{asignacion.redaccion.comentario}}
                        q-separator
                        .text-caption.text-grey Argumentación
                        .text-body2.text-grey {{asignacion.argumentacion.comentario}}
            q-card-section.text-center
                q-btn(color="negative" label="Eliminar asesor" @click="deleteAsesor")


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
        
        //-- Dialog
        const dialog = ref(false)
        const openDialog = () => {
            dialog.value = true
        }
        // --
        const deleteAsesor = async () => {
            //console.log(props.asignacion._id)
            const res = await $store.dispatch('api/RemoveItem', ['asesores', '_id', props.asignacion._id])
            dialog.value = false
            context.emit('updatedAsesor')
            $q.notify('Asesor eliminado')
        }
        return {
            dialog,
            openDialog,
            deleteAsesor
        }

    }
}
</script>