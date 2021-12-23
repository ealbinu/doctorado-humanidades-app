
import { api } from 'boot/axios'
import { QAjaxBar } from 'quasar'
import { useStore } from 'vuex'




export const Login = ({commit}, credentials) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/authUser', credentials).then(res => {
            const dt = res.data
            const usrdata = {
                user: dt.user,
                email: dt.email,
                name: dt.name,
                group: dt.group,
                api_key: dt.api_key,
                id: dt._id,
            }
            commit('SET_USER', usrdata)
            resolve(res)
        }).catch(error => {
            reject({error:true, message:'Verifica tus datos.'})
        })
    }, error => {
        reject({error:true})
    })
}

export const Logout = ({commit}) => {
    commit('UNSET_USER')
}

export const GetUsers = ({commit}) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers').then(res => {
            resolve(res.data)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}
//Returns only actives
export const GetUsersByGroup = ({commit}, groupusers) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers', {filter:{group:groupusers, active: true}}).then(res => {
            resolve(res.data)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}
//Also return inactive
export const GetUsersByGroupAll = ({commit}, groupusers) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers', {filter:{group:groupusers}}).then(res => {
            resolve(res.data)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const GetSingleUser = ({commit}, userid) => {
    return new Promise((resolve, reject) => {
        api.post('/cockpit/listUsers', {filter:{_id:userid}}).then(res => {
            resolve(res.data[0])
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const GetAllData = ({commit}, collectionname) => {
    return new Promise((resolve, reject) => {
        api.post('/collections/get/'+collectionname, {populate:1}).then(res => {
            resolve(res.data.entries)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}
export const GetAllDataFiltered = ({commit}, body) => {
    //body = [collection, filterField, filterValue]
    let filterVL = {}
    filterVL[body[1]] = body[2]
    return new Promise((resolve, reject) => {
        api.post('/collections/get/'+body[0], {filter:filterVL, populate:1}).then(res => {
            resolve(res.data.entries)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const GetAllDataFilteredV2 = ({commit}, body) => {
    //body = [collection, {"key":"value"}]
    let filterVL = body[1]
    return new Promise((resolve, reject) => {
        api.post('/collections/get/'+body[0], {filter:filterVL, populate:1}).then(res => {
            resolve(res.data.entries)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}



export const GetSingleData = ({commit}, body) => {
    //body = {coll, filter}
    return new Promise((resolve, reject) => {
        api.post('/collections/get/'+body.coll, {filter:{user:body.id}, populate:1}).then(res => {
            resolve(res.data.entries)
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const SaveUser = ({commit}, body) => {

    return new Promise((resolve, reject) => {
        api.post('/cockpit/saveUser', body).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject({error:true, message:'Ocurrió un error.', data: error.response.data.error})
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const SaveItem = ({commit}, body) => {
    return new Promise((resolve, reject) => {
        const coll =  body.coll
        let newbody = body
        delete newbody.coll
        if(newbody._id==undefined){
            delete newbody._id
        }
        api.post('/collections/save/'+coll, {data: newbody}).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject({error:true, message:'Ocurrió un error.', data: error})
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const RemoveItem = ({commit}, body) => {
    //body = [collection, filterField, filterValue]
    return new Promise((resolve, reject) => {
        let filterVL = {}
        filterVL[body[1]] = body[2]
        api.post('/collections/remove/'+body[0], {filter:filterVL}).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject({error:true, message:'Ocurrió un error.', data: error})
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}







export const NewNotification = ({commit}, body) => {
    const newbody = {...body, status: 'unread'}
    return new Promise((resolve, reject) => {
        api.post('/collections/save/notificaciones', {data: newbody}).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject({error:true, message:'Ocurrió un error.', data: error})
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}






export const GetPeriodo = ({commit}) => {

    return new Promise((resolve, reject) => {
        api.post('/collections/get/periodos', {filter:{actual: true}}).then(res => {
            resolve(res.data.entries[0])
            commit('SET_PERIODO', res.data.entries[0])
        })
    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const SetPeriodo = ({commit}, periodo) => {
    return new Promise((resolve, reject) => {
        //Find active and remove state
        api.post('/collections/get/periodos', {filter:{actual: true}}).then(res => {
            if(res.data.entries[0]){
                var reqPrev = {
                    _id: res.data.entries[0]._id,
                    actual: false
                }
                api.post('/collections/save/periodos', {data:reqPrev})
            }
        
            // Set new to state active
            var reqNext = {
                _id: periodo._id,
                actual: true
            }
            api.post('/collections/save/periodos', {data:reqNext}).then(res => {
                resolve(res.data)
                commit('SET_PERIODO', item)
            }).catch(error => {
                reject({error:true, message:'Ocurrió un error.', data: error})
            })
        
        
        })
        

        


    }, error => {
        reject({error:true, message:'Ocurrió un error.', data: error})
    })
}

export const ImageB64 = ({commit}, imagepath) => {
    const req = {
        src: imagepath.path,
        b64: true,
        w: 300,
        m: 'fitToWidth'

    }
    return new Promise((resolve, reject) => {
        api.post('/cockpit/image', req).then(res => {
            resolve(res.data)
        }, error => {
            reject({error:true, message:'Ocurrió un error.', data: error})
        })
    })
}