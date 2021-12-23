<template lang="pug">
q-card.shadow-24.bg-dark
    q-card-section
        q-form(@submit.prevent="updateAccount").row.q-col-gutter-md.items-center
            .col-6
                .text-caption.text-white Estudiante 
                    span(v-if="!student.estudiante_user.active").text-secondary deshabilitado
            .col-6.text-right.text-white(v-if="student.estudiante_user.active")
                q-toggle(label="Modificar" v-model="modifyAccount")
            .col-12
                q-input(label="Nombre" v-model="student.estudiante_user.name" dark standout dense :readonly="!modifyAccount")
                    template(v-slot:prepend): q-icon(name="person")
            .col-6
                q-input(label="Cuenta" v-model="student.estudiante_user.user" dark standout dense :readonly="!modifyAccount")
                    template(v-slot:prepend): q-icon(name="account_box")
            .col-6
                q-input(label="Correo electrónico" v-model="student.estudiante_user.email" dark standout dense :readonly="!modifyAccount")
            .col-6(v-if="modifyAccount && student.estudiante_user.active").text-center
                q-btn(label="Deshabilitar" @click="disableAccount" color="negative" unelevated size="sm" no-caps)
            .col-6(v-if="modifyAccount && student.estudiante_user.active").text-center
                q-btn(label="Guardar" color="primary"  unelevated type="submit")
            .col-12(v-if="!student.estudiante_user.active").text-center
                q-btn(label="Habilitar usuario" @click="enableAccount" color="secondary" unelevated)

</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    props: ['student'],
    setup(props){
        const $q = useQuasar()
        const $store = useStore()
        const $router = useRouter()
        //---------
        const student = ref(props.student)
        const modifyAccount = ref(false)
        //---------
        const disableAccount = async () => {

            student.value.estudiante_user.active = false
            modifyAccount.value = false
            $store.dispatch('api/SaveUser', {user: student.value.estudiante_user})
        }
        //---------
        const enableAccount = async () => {

            student.value.estudiante_user.active = true
            modifyAccount.value = false
            $store.dispatch('api/SaveUser', {user: student.value.estudiante_user})
        }
        //---------
        const updateAccount = async () => {

            try {
                const res = await $store.dispatch('api/SaveUser', {user: student.value.estudiante_user})
                $q.notify('Datos guardados')
                modifyAccount.value = false
            } catch (err){
                $q.notify(err.message)
            }
            
        }
        return {
            modifyAccount,
            disableAccount,
            enableAccount,
            updateAccount,
        }

    }
}
</script>