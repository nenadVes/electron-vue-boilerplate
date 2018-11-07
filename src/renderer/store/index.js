import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import data from './modules/data'
import getters from './getters'
import localForage from 'localforage'
import { asyncForEach } from './../utils/helpers'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    data,
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
      asyncForEach(Object.keys(state.data), async(entity) => {
        state.data[entity] = await localForage.getItem(entity)
      })
    }
  }
})

export default store
