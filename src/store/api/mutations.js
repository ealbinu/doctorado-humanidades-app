import {LocalStorage} from 'quasar'

export const SET_USER =(state, data) => {
    LocalStorage.set('iconosPL_user', JSON.stringify(data))
    state.user = data
}
export const UNSET_USER =(state) => {
    localStorage.removeItem('iconosPL_user')
    state.user = null
}

export const SET_PERIODO =(state, data) => {
    state.periodo = data
}



