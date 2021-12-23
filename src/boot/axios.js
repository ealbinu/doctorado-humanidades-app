import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useStore } from 'vuex'
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ 
  baseURL: 'https://previo.website/dochum/service/api'
})



//api.defaults.headers.common['Cockpit-Token'] = 'a69178b33f2a7cf0b7b8715cd62174';
api.defaults.headers.common['Cockpit-Token'] = 'be158f72a7f92b078603f7d6d3b4e9';

export default boot(({ app, store }) => {
  const isAuth = store.getters['api/getUser']!=null
    let user = null
    if(isAuth){
      user = store.getters['api/getUser']
      if(user.api_key){
        api.defaults.headers.common['Cockpit-Token'] = user.api_key;
      }

    }

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
  
})

export { api }
