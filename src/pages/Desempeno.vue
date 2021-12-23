<template lang="pug">
q-page(padding)
  
  div.text-center.q-my-lg(v-if="estudiante"): conacytPrint(:asignacion="asesor")
  
  q-form(v-if="estudiante && estudianteUser" @submit.prevent="saveAsesor")
    .row.q-col-gutter-md
      .col-12
        q-card.shadow-24.text-dark.bg-white: q-card-section().text-center
              .text-grey Investigación
              div.text-h6.text-bold.text-primary {{estudiante.tituloInvestigacion}}
              .text-body1.text-info {{estudianteUser.name}}
              .text-caption Cuenta: {{estudianteUser.user}}
              .text-caption Generación: {{estudiante.generacion.name}}
              q-badge(:color="asesor.tipo=='director'?'primary':'secondary'"): .text-capitalize {{asesor.tipo}}

      .col-12(v-if="asesor.tipo=='director'")
        lectores(:asignacion="asesor.asignacion._id")
        

      .col-12
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md Análisis
                .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.analisis.valor" inline)
              q-card-section
                q-input(v-model="asesor.analisis.comentario" filled type="textarea" label="Análisis")
      .col-12
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md Estructura
                .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.estructura.valor" inline )
              q-card-section
                q-input(v-model="asesor.estructura.comentario" filled type="textarea" label="Estructura")
      .col-12
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md Redacción
                .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.redaccion.valor" inline )
              q-card-section
                q-input(v-model="asesor.redaccion.comentario" filled type="textarea" label="Redacción")
      .col-12
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md Argumentación
                .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.argumentacion.valor" inline )
              q-card-section
                q-input(v-model="asesor.argumentacion.comentario" filled type="textarea" label="Argumentación")
      .col-12
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md ¿Cómo considera que ha sido el desempeño del estudiante?
                .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.desempeno" inline )
      .col-6
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md Fortalezas
                .text-caption(v-for="(i, index) in calificadoresAlt"): q-checkbox(v-model="fortalezas" :val="i" :label="i" dense)

      .col-6
          q-card.bg-white.shadow-24
              q-card-section
                .text-h6.text-primary.q-mb-md Debilidades
                .text-caption(v-for="(i, index) in calificadoresAlt"): q-checkbox(v-model="debilidades" :val="i" :label="i" dense)
            
      .col-12
          q-card.bg-white.shadow-24

              q-card-section
                .text-h6.text-primary.q-mb-md ¿Cuál es el porcentaje de avance de la investigación del estudiante?
                .row.items-center.justify-center
                  .col-sm-6
                    q-input(v-model="asesor.porcentaje" standout="bg-primary text-white"  label="Porcentaje" type="number" max="100")
                      template(v-slot:append): .text-bold.text-h6 %
                    q-card.bg-dark.q-mt-md
                      q-card-section
                        q-input(v-model="asesor.calificacion" standout dark  label="Calificación" type="number" max="10")
                          template(v-slot:prepend): q-icon(name="sports_score")
                  .col-sm-6.co
                    apexchart(width="100%" type="radialBar" :options="options" :series="[asesor.porcentaje]")
    
    template(v-if="asesor.tipo=='director'")
      .text-h6.text-dark.q-my-md.prefers-color Reporte CONACYT
        q-toggle(v-model="asesor.reporteconacyt")

      .row.q-col-gutter-md(v-if="asesor.reporteconacyt")
        .col-12
            q-card.bg-white.shadow-24
                q-card-section
                  .text-h6.text-primary.q-mb-md Cumplimiento del plan de estudios:
                  .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.cumplimiento" inline )
                q-card-section
                  .text-h6.text-primary.q-mb-md Obtención del grado dentro del tiempo oficial del plan de estudios:
                  .text-caption.desempenoradios: q-option-group(:options="calificadores" type="radio" v-model="asesor.obtencion" inline )
                q-card-section
                  .text-h6.text-primary.q-mb-md Comentarios sobre la evaluación:
                  q-input(v-model="asesor.comentarios" filled type="textarea" label="Comentarios")
                q-card-section
                  .text-h6.text-primary.q-mb-md Con base en las respuestas anteriores y en el Art. 24 del Reglamento de Becas sobre suspensión, cancelación y conclusión de la beca, ¿Recomienda continuar, suspender o cancelar la beca? Indique causales:
                  q-input(v-model="asesor.conservaBeca" filled type="textarea" label="Causales")
                q-card-section
                  .text-h6.text-primary Firmar reporte CONACYT
                  .text-caption.q-mt-sm Se utilizará la firma guardada en #[a(href="/mi-cuenta") Mi cuenta].
                  q-card.bg-accent.q-mt-md
                    q-card-section
                      q-toggle(v-model="asesor.firmaconacyt" label="Firmar reporte" :disable="!userData.firma")
                      template(v-if="!userData.firma")
                        .text-caption No hay una firma guardada. Añada una para poder firmar el reporte.
                      
    
    .row.q-col-gutter-md.q-my-xl
      .col-12.text-center
        q-btn(label="Guardar" color="primary" unelevated type="submit" no-caps)
</template>

<script>
import {ref, computed} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import _ from 'lodash'

import lectores from 'components/desempeno/lectores'
import conacytPrint from 'components/desempeno/conacytPrint'
export default {
  components:{
    lectores,
    conacytPrint
  },
  setup () {
    const $q = useQuasar()
    const $store = useStore()
    const $router = useRouter()
    const $route = useRoute()

    const user = computed (() => {
      return $store.getters['api/getUser']
    })
    const userData = ref(null)
    const loadUserData = () => {
        $store.dispatch('api/GetSingleData',  {coll: user.value.group+'s', user: user.value.id}).then(res => {
            userData.value = res[0]
        })
    }
    loadUserData()


    const asesor = ref(null)
    
    
    const estudiante = ref(null)
    const estudianteUser = ref(null)

    const fortalezas = ref([])
    const debilidades = ref([])

    const loadItems = () => {
      const req = {
        _id: $route.params.id
      }
      //Load main asesor item
      $store.dispatch('api/GetAllDataFilteredV2', ['asesores',req ]).then(res => {
        asesor.value = res[0]
        //If new append values
        if(!asesor.value.calificacion){ buildAsesorItem()}
        //Load student's info
        var reqEstudiante = { user: asesor.value.asignacion.estudiante.user }
        $store.dispatch('api/GetAllDataFilteredV2', ['estudiantes', reqEstudiante]).then(resEst => {
          estudiante.value = resEst[0]
          //Load student's access info (name)
          $store.dispatch('api/GetSingleUser', estudiante.value.user).then(resEstUsr => {
            estudianteUser.value = resEstUsr
          
          
          })

        })

        if(asesor.value.fortalezas){
          fortalezas.value = asesor.value.fortalezas
        }
        if(asesor.value.debilidades){
          debilidades.value = asesor.value.debilidades
        }
        
      })
    }
    loadItems()


    


    const buildAsesorItem = () => {
      const defaultValues = {
          analisis: {
            valor: 'excelente',
            comentario: ''
          },
          estructura: {
            valor: 'excelente',
            comentario: ''
          },
          redaccion: {
            valor: 'excelente',
            comentario: ''
          },
          argumentacion: {
            valor: 'excelente',
            comentario: ''
          },
          desempeno: 'excelente',
          fortalezas: [],
          debilidades: [],
          porcentaje: 0,
          calificacion: 10,
          cumplimiento: null,
          obtencion: null,
          reporteconacyt: false,
          firmaconacyt: false,
      }
      _.merge(asesor.value, defaultValues)

    }

    const saveAsesor = () => {
      asesor.value.coll = 'asesores'

      asesor.value.fortalezas = fortalezas.value
      asesor.value.debilidades = debilidades.value


      $store.dispatch('api/SaveItem', asesor.value).then(res => {
        $q.notify('Desempeño guardado')
        
        if(asesor.value.firmaconacyt){
          $store.dispatch('api/NewNotification', {description: 'Reporte Conacyt: '+estudianteUser.value.user, sendto:'/reportesconacyt'})
        }

      })
    }



    



    return {
      user,
      userData,
      fortalezas,
      debilidades,
      calificadores: [
        { label: 'Excelente', value: 'excelente' },
        { label: 'Bueno', value: 'bueno' },
        { label: 'Suficiente', value: 'suficiente' },
        { label: 'No satisfactorio', value: 'no satisfactorio' },
      ],
      calificadoresAlt: [
        'Delimitación epistemológica del problema',
        'Delimitación conceptual',
        'Relaciones conceptuales',
        'Aplicaciones conceptuales con lo empírico',
        'Escritura, organización y formato del texto',
        'Relación de las partes del texto',
        'Uso de fuentes y documentos',
        'Delimitación metodológica de la investigación',
        'Construcción de método de análisis',
        'Construcción de categorías de obseervación y análisis',
        'Desarrollo del análisis',
        'Disposición a contribuir al campo social',
        'Influencia en la trayectoria del doctorado',
        'Aporte social cognitivo, epistemológico o tecnológico'
      ],
      options: { labels: ['Avance'] },
      asesor,
      estudiante,
      estudianteUser,
      saveAsesor,
    }
  }
}
</script>


<style lang="scss">
.desempenoradios .q-radio__label {
    font-weight: bold;
    line-height: 1;
}
.desempenoradios .q-radio__label:after {
    font-weight: normal;
    display: block;
    color: #9E9E9E;
    max-width: 120px;
    font-size: 0.7rem;
}
.desempenoradios .q-option-group > div:nth-child(1) .q-radio__label:after {
    content: "Completamente seguro";
}
.desempenoradios .q-option-group > div:nth-child(2) .q-radio__label:after {
    content: "Seguro";
}
.desempenoradios .q-option-group > div:nth-child(3) .q-radio__label:after {
    content: "Casi seguro";
}
.desempenoradios .q-option-group > div:nth-child(4) .q-radio__label:after {
    content: "No es seguro";
}

</style>