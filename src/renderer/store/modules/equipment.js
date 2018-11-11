import Vue from 'vue'
import localForage from 'localforage'
import { Equipment } from '../../models/equipment.model'
import _findIndex from 'lodash/findIndex'
import _find from 'lodash/find'

const equipment = {
  state: {
    equipment: []
  },

  mutations: {
    ADD_EQUIPMENT: (state, variable) => {
      state.equipment.push(variable)
    },
    EDIT_EQUIPMENT: (state, { equipment, index }) => {
      Vue.set(state.equipment, index, equipment)
    }
  },

  actions: {
    AddEquipment({ commit, state }, formdata) {
      commit('ADD_EQUIPMENT', formdata)
      saveToLocalForage(state.equipment)
    },
    DeleteEquipment({ commit, state }, id) {
      const index = _findIndex(state.equipment, { 'id': id })
      const equipment = state.equipment[index]
      equipment.deleted_at = new Date()
      commit('EDIT_EQUIPMENT', equipment, index)
      saveToLocalForage(state.equipment)
    },
    EditEquipment({ commit, state }, { equipment }) {
      commit('EDIT_EQUIPMENT', { equipment, index: _findIndex(state.equipment, { id: equipment.id }) })
      saveToLocalForage(state.equipment)
    }
  },

  getters: {
    equipment: state => state.equipment,
    activeEquipment: state => () => state.equipment.filter(equipment => !equipment.deleted_at).map(equipment => new Equipment(equipment, state.equipment)),
    getEquipment: state => (id) => new Equipment(_find(state.equipment, { id }), state.equipment)
  }
}

function saveToLocalForage(equipment) {
  localForage.setItem('equipment', equipment)
}

export default equipment
