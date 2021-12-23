<template lang="pug">
div
    .row.q-col-gutter-md
        .col-6
            .row.q-col-gutter-md.full-height.items-center
                .col-sm-6.col-12: usuariosactivos(usergroup="estudiante")
                .col-sm-6.col-12: usuariosactivos(usergroup="docente")
        .col-6: notificaciones


    q-separator(spaced)
    
    estadisticasCalificadores
    
    
       
</template>


<script>

import usuariosactivos from 'components/dashboard/coordinador/usuariosactivos'
import notificaciones from 'components/dashboard/coordinador/notificaciones'
import estadisticasCalificadores from 'components/dashboard/coordinador/estadisticasCalificadores'
export default {
    components: {
        usuariosactivos,
        notificaciones,
        estadisticasCalificadores
    },
    setup () {
        return {

        }
    }
}
</script>