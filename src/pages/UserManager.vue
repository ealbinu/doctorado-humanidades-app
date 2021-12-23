<template lang="pug">
q-page(padding)
    Usuarios(:tipo='ruta2' :key="ruta")
</template>

<script>
import { ref, watch } from 'vue'
import Usuarios from 'components/UserManager/UserManager_Usuarios'
import { useRoute } from 'vue-router'
export default {
    components: {
        Usuarios
    },
  setup () {
    const ruta = ref()
    const $route = useRoute()
    

    const setUserType = (tipo) => {
      let tp = tipo.replace('/', '')
      let usergroup = ''
      switch (tp){
          case 'estudiantes':
              usergroup = 'estudiante'
              break;
          case 'docentes':
              usergroup = 'docente'
              break;
      }
      return usergroup
    }


    ruta.value = setUserType($route.path)
    watch($route,(newv, oldv) => {
      ruta.value = setUserType($route.path)
    })

    return {
      ruta, 
      ruta2: ruta
    }
  },

}
</script>


<style lang="scss" scoped>

</style>