<template lang="pug">
q-page.flex.flex-center.column
  q-card.bg-dark(style="width: 320px;").shadow-20
    q-card-section.text-center.q-my-sm
      //img(src="~assets/iconos.png" style="max-height: 30px")
      q-img(src="~/assets/logodh.png")
    q-card-section
      q-form(@submit.prevent="loginFn")
        q-input(label="Nº de cuenta / Usuario"  standout dark dense v-model="authuser" autocomplete="username")
        q-input(label="Contraseña"  standout dark dense type="password" v-model="authpass" autocomplete="current-password").q-mt-sm
        .text-center.q-mt-lg
          q-btn(label="Ingresar" color="primary"  unelevated type="submit")
    q-card-section
      q-separator(spaced)
      .text-center: registro
      q-separator(spaced)
      
    q-card-section
      
      q-img(src="~/assets/logouam.png")
  q-card.q-ma-sm.fixed-bottom-left
    q-card-section.text-center
      div.text-grey.text-bold
        span usuario
        span.text-dark  / 
        span contraseña
      q-separator
      div
        span.text-primary docente
        span.text-dark  / 
        span.text-secondary docente
      q-separator
      div
        span.text-primary 01110284
        span.text-dark  / 
        span.text-secondary estudiante
      q-separator
      div
        span.text-primary coordinador
        span.text-dark  / 
        span.text-secondary coordinador
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import registro from 'components/registro'
export default {
  components: {registro},
  setup () {
    const $q = useQuasar()
    const $store = useStore()
    const $router = useRouter()
  

    const authuser = ref('')
    const authpass = ref('')
    
    

    const loginFn = async() => {
      $store.dispatch('api/Login', {user:authuser.value, password: authpass.value}).then(res => {
        $q.notify('Bienvenido')
        $router.push('/dashboard')
        //$store.commit('api/SET_USER', res.data)
      }).catch(error => {
        $q.notify(error.message)
      })
    }
    return {
      loginFn,
      authuser,
      authpass
    }
  },
  methods: {
    
  }
}
</script>


<style lang="scss" scoped>
.q-page{
    background-color: $dark;
    background-image: url(~assets/pattern.png), linear-gradient($dark, darken($dark, 20%));
    background-size: 140%;
    background-position: center;
    background-blend-mode: overlay, normal;

}
</style>