<template lang="pug">
q-layout(view="lHh lpR lFf")
  q-page-container: router-view/
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'EmptyLayout',

  components: {

  },
  setup () {

    const menuItems = ref([
      { label: 'Estudiantes', path: '/', icon:'people_alt'},
      { label: 'Candidatura', path: '/', icon:'auto_awesome'},
      { label: 'Desempeño', path: '/', icon:'psychology'},
      { label: 'Configuración', path: '/', icon:'more_vert'},
    ])


    const leftDrawerOpen = ref(true)
    return {
      menuItems,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})
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
.q-toolbar{
    background-image: url(~assets/pattern.png) !important;
    background-size: 50% !important;
    background-repeat: no-repeat !important;
    background-position: right center !important;
    background-blend-mode: overlay;
}
.copy{
  line-height: 1.2;
  font-size: 0.6rem;
}
</style>