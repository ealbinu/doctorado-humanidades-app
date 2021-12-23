import { boot } from 'quasar/wrappers'
import lodash from 'lodash'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({app, Vue}) => {
  app.config.globalProperties.$_ = lodash
  app.provide('$_', lodash)


})
