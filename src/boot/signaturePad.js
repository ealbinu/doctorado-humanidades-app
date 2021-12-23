import { boot } from 'quasar/wrappers'
import VueSignaturePad from 'vue-signature-pad'

export default boot(async ({app}) => {
  app.use(VueSignaturePad)
})
