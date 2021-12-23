<template lang="pug">
q-card.shadow-24
    q-card-section
        .text-h6.text-primary Firma
        .text-caption Añada su firma para utilizarla en los reportes CONACYT
        .text-center
            q-btn(color="primary" :label="userdata.firma?'Actualizar firma':'Añadir firma'" unelevated @click="openDialogFirma" v-if="!dialogFirma" no-caps)
        
        template(v-if="dialogFirma")
            .row.q-col-gutter-md.items-center.justify-center
                .col-sm-6.text-center(v-if="userdata.firma")
                    q-card.bg-grey.q-ma-md(style="max-width: 380px").q-mx-auto
                        q-card-section.text-center
                            .text-caption.text-white Firma almacenada
                            q-img(:src="userdata.firma" style="width:100%; max-width: 380px")
                .col-sm-6
                    q-card.bg-primary.q-ma-md(style="max-width: 380px").q-mx-auto
                        q-card-section.text-center
                            .text-caption.text-white Trace su firma en el recuadro inferior.
                            VueSignaturePad(width="320px" height="180px" ref="signature").bg-white.q-mx-auto
                            .row.q-mt-md.items-center
                                .col-6: q-btn(label="Limpiar" unelevated color="primary" size="sm" no-caps @click="signature.clearSignature()")
                                .col-6: q-btn(label="Guardar firma" unelevated color="primary"  no-caps @click="saveSignature")
                    q-card.bg-primary.q-ma-md(style="max-width: 380px").q-mx-auto
                        q-card-section.text-center
                            .text-caption.text-white O cargue la imagen con su firma.
                            file-pond(
                                name="firma"
                                accepted-file-types="image/jpeg, image/png"
                                :allow-multiple="false"
                                label-idle="Arrastre la imagen aquí o dé clic"
                                label-file-loading="Cargando"
                                label-file-waiting-for-size="Analizando"
                                label-tap-to-cancel="Clic para cancelar"
                                credits="false"
                                :allowFileEncode="true"
                                :server="processFile"
                                ref="pond")
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';


const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileEncode
)
export default {
    props: ['userdata', 'user'],
    
    setup(props, context){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        
        const dialogFirma = ref(false)
        const signature = ref()
        
        
        const signatureFile = ref()

        const saveSignature = () => {
            saveSignatureToDB()
        }

        const pond = ref()
        
        const saveSignatureToDB = (b64string) => {
            const req = {
                coll: props.user.group+'s',
                _id: props.userdata._id,
                firma: signature.value.saveSignature().data
            }
            if(b64string!=undefined){
                req.firma = b64string
            }
            $store.dispatch('api/SaveItem', req).then(res => {
                $q.notify('Firma actualizada')
                context.emit('reload')
            })
        }

        const openDialogFirma = () => {
            dialogFirma.value = true
        }
        
        const processFile = {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                const reader = new FileReader()
                reader.onloadend = () => {
                    const b64String = reader.result
                    console.log(b64String)
                    saveSignatureToDB(b64String)
                    pond.value.removeFiles()
                }
                reader.readAsDataURL(file)
                    load()

            },
            revert: null,
            labelTapToUndo: 'Cerrar'
            //console.log(file)
            //console.log('addedFile', signatureFile.value.getFileEncodeBase64String())
        }

        return {
            dialogFirma,
            openDialogFirma,
            signature,
            saveSignature,
            FilePond,
            signatureFile,
            processFile,
            pond
        }

    },
    components: {FilePond}
}
</script>