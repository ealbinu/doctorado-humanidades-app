<template lang="pug">
q-layout(view="lhr LpR fFf")
  q-header().bg-transparent
    .q-pa-sm
      q-toolbar().text-dark.bg-white.rounded-borders
        q-btn(:icon="leftDrawerOpen ? 'menu' : 'menu_open'" @click="toggleLeftDrawer" flat).q-px-xs
        q-toolbar-title.text-body1 Bienvenido, #[strong {{userData ? userData.name : ''}}].
        div.text-right.text-caption 
          div.text-caption.text-dark {{userData ? userData.user: ''}}
          div.text-caption.text-dark.text-bold {{userData ? userData.email: ''}}
  q-drawer(v-model="leftDrawerOpen" :breakpoint="820")
    .q-pa-sm.full-height
      section.full-height.rounded-borders.shadow-24.text-white.text-bold.drawerContainer
        .q-px-sm.q-py-sm.text-center
          q-img(src="~/assets/logodh.png")
        
          //Periodo actual
          currentP
        
        
        q-list(separator).q-pa-sm
          template( v-for="(i, index) in menuItems" )
            q-item(clickable :to="i.path" active-class="text-accent" v-if="visibleForUser(i)").rounded-borders
              q-item-section(avatar): q-icon(:name="i.icon")
              q-item-section: q-item-label {{i.label}}
        
          estudianteMenu(:userdata="userData" v-if="userData")

        footer.flex.column.q-pa-sm.text-center.items-center
          q-btn(label="Cerrar sesión" color="white" text-color="dark" size="sm" no-caps @click="logoutFN")
          q-separator(spaced).full-width
          q-img(src="~/assets/logouam.png")

  q-page-container: router-view/
</template>
<script>
import {ref, computed} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import estudianteMenu from 'components/estudianteMenu'
import currentP from 'components/currentPeriodo'
export default{
  components: {
    estudianteMenu,
    currentP
  },
  setup () {
    const $store = useStore()
    const $router = useRouter()

    const menuItems = ref([
      { label: 'Inicio', path: '/dashboard', icon:'notes', group: ['estudiante']},
      { label: 'Investigaciones', path: '/dashboard', icon:'description', group: ['docente']},
      { label: 'Panel', path: '/dashboard', icon:'insights', group: ['admin', 'coordinador']},
      { label: 'Estudiantes', path: '/estudiantes', icon:'people_alt', group: ['admin', 'coordinador']},
      { label: 'Docentes', path: '/docentes', icon:'contact_page', group: ['admin', 'coordinador']},
      { label: 'Periodos', path: '/periodos', icon:'date_range', group: ['admin', 'coordinador']},
      { label: 'Generaciones', path: '/generaciones', icon:'group_work', group: ['admin', 'coordinador']},
      { label: 'Reportes', path: '/reportesconacyt', icon:'summarize', group: ['admin', 'coordinador']},
      { label: ' Mi cuenta', path: '/mi-cuenta', icon:'auto_awesome', group: ['admin', 'coordinador', 'docente']},
      //{ label: 'Candidatura', path: '/candidatura', icon:'auto_awesome'},
      //{ label: 'Desempeño', path: '/desempeno', icon:'psychology'},
      //{ label: 'Estadísticas', path: '/estadisticas', icon:'badge'},
    ])



    const logoutFN = () => {
      $store.dispatch('api/Logout')
      $router.push('/')
    }
    const leftDrawerOpen = ref(true)


    const userData = computed (() => {
      return $store.getters['api/getUser']
    }) 

    const visibleForUser = (item) => {
      
      if(userData.value!==null && item.group){
        if(item.group.includes(userData.value.group)){
          return true
        } else {
          return false
        }
      } else {

        return true
      }
    }


    const GetPeriodo = () => {
      $store.dispatch('api/GetPeriodo').then(res => {

      })
    }
    //GetPeriodo()


    return {
      menuItems,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logoutFN,
      userData,
      visibleForUser,
    }
  },
}
</script>

<style lang="scss">
.q-drawer{
  background: transparent !important;
}
.drawerContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $dark;
    background-image: url(~assets/pattern.png), linear-gradient($dark, darken($dark, 20%));
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay, normal;
}
/*
.q-toolbar{
    background-image: url(~assets/pattern.png) !important;
    background-size: 50% !important;
    background-repeat: no-repeat !important;
    background-position: right center !important;
    background-blend-mode: overlay;
}
*/
.copy{
  line-height: 1.2;
  font-size: 0.6rem;
}
</style>