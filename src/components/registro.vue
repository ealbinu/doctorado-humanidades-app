<template lang="pug">
div
    q-btn(size="sm" flat label="Nuevo usuario" padding="0" color="positive" @click="dialog = true")
    q-dialog(v-model="dialog")
        q-card.bg-dark(style="width: 320px;").shadow-20
            q-card-section(v-if="!success")
                q-form(@submit.prevent="signinFn")
                    .text-center.q-mt-sm
                        q-btn-toggle(unelevated toggle-color="info" text-color="white" v-model="newuser.group" :options="[ {label: 'Estudiante', value: 'estudiante'}, {label: 'Docente', value: 'docente'}]")
                    q-separator(spaced)
                    q-input(v-model="newuser.user" :label="newuser.group=='estudiante'?'Nº de cuenta':'Usuario'" rounded standout dark dense required)
                    q-input(v-model="newuser.name" label="Nombre" rounded standout dark dense required).q-mt-sm
                    q-input(v-model="newuser.email" type="email" label="Email" rounded standout dark dense required).q-mt-sm
                    q-input(v-model="newuser.password" label="Contraseña" :type="passview ? 'text' : 'password'" rounded standout dark dense required hint="Al menos 6 caracteres." pattern=".{6,}").q-mt-sm
                        template(v-slot:append)
                            q-icon(color="primary" :name="passview ? 'visibility_off':'visibility' " @click="passview = !passview").cursor-pointer
                    .text-center.q-mt-lg
                        q-btn(label="Registrar" color="primary"  unelevated type="submit")
            q-card-section(v-else)
                .text-center.q-my-sm.text-white.text-h6 Registro exitoso.
                .text-center.q-my-sm.text-white.text-body2 Tu registro será evaluado y en caso de cubrir los requisitos tu cuenta se activará.

</template>
<script>
import {ref} from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
const $q = useQuasar()
export default {
    setup () {
        const $q = useQuasar()
        const $store = useStore()
        const dialog = ref(false)
        const passview = ref(false)
        const success = ref(false)
        const newuser = ref({
            user: '',
            name: '',
            email: '',
            password: '',
            group: 'estudiante',
            active: false
        })
        const signinFn = () => {
            $store.dispatch('api/SaveUser', {user: newuser.value}).then(res => {
                $q.notify('Registro exitoso.')
                success.value = true
                $store.dispatch('api/NewNotification', {description: 'Registro: '+newuser.value.user, sendto:'/'+newuser.value.group+'s'})
            }).catch(error => {
                $q.notify(error.message)
                switch(error.data){
                    case 'Username is already used!':
                        $q.notify('El Nº de cuenta o usuario ya esta registrado.')
                        break;
                    case 'Email is already used!':
                        $q.notify('El correo electrónico ya esta registrado.')
                        break;
                }
            })
        }
        return {
            dialog,
            signinFn,
            newuser,
            passview,
            success
        }
    }
}
</script>