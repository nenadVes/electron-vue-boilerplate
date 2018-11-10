import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { en } from './en'
import { sr } from './sr'

Vue.use(VueI18n)

const messages = {
  en: en,
  sr: sr
}
// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'en', // set locale
  messages
})

