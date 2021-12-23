import Vue from 'vue'
import { boot } from 'quasar/wrappers'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

export default boot(async ({Vue, app}) => {
  app.component('vue-json-pretty', VueJsonPretty)
})

