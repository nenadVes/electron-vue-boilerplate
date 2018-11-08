import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
const messages = {
  en: {
    employees: {
      title: 'Employees',
      number: 'Number',
      fname: 'First Name',
      lname: 'Last Name',
      status: 'Status',
      email: 'Email',
      labels: 'Labels',
      actions: 'Actions',
      buttonsearch: 'Search',
      buttonnew: 'New Employee',
      inputtext: 'Please input'
    },
    equipment: {
      title: 'Employees',
      column1: 'Number',
      column2: 'Name',
      column3: 'Status',
      column4: 'Email',
      column5: 'Labels',
      buttonsearch: 'Search',
      buttonnew: 'New Employee',
      inputtext: 'Please input'
    }
  },
  sr: {
    employees: {
      hello: 'Zaposleni'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

router.replace('/')

new Vue({
  components: { App },
  router,
  i18n,
  store,
  template: '<App/>'
}).$mount('#app')
