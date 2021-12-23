import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files



export default boot(async ({ app, router, store }) => {
  router.beforeEach((to, from, next) => {
    const isAuth = store.getters['api/getUser']!=null
    let user = null
    if(isAuth){
      user = store.getters['api/getUser']
    }

    

    if (to.matched.some(record => record.meta.forAuth)){
      if(isAuth){
        
        //console.log(to.matched.some(record => record.meta.group ==  isAuth.group ))
        if(to.meta.group){
          if(to.meta.group.includes(user.group)){
            next()
          } else {
            next({
              path: '/dashboard'
            })
          }
        } else {
          next()
        }

      } else {
        next({
          path: '/'
        })
      }
    } else {
      if(isAuth){
        next({
          path: '/dashboard'
        })
      } else {
        next()
      }
    }





  })
})
