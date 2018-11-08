import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import employees from './modules/employees'
import getters from './getters'
import localForage from 'localforage'
import { asyncForEach } from './../utils/helpers'

Vue.use(Vuex)

const PRESERVABLE_STATES = ['employees']

const store = new Vuex.Store({
  modules: {
    app,
    employees,
    user
  },
  getters,
  actions: {
    async InitState({ commit }) {
      commit('INIT_STATE')
    }
  },
  mutations: {
    INIT_STATE: (state) => {
      asyncForEach(PRESERVABLE_STATES, async(entity) => {
        const entityData = await localForage.getItem(entity)
        state[entity][entity] = entityData || []
      })
    }
  }
})

export default store
