import {LocalStorage} from 'quasar'

export default function () {
  return {
    user: JSON.parse(LocalStorage.getItem('iconosPL_user')) || null,
    periodo: ''
  }
}
