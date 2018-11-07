import Vue from 'vue'
import localForage from 'localforage'

const data = {
  state: {
    employees: [],
    workorders: [],
    equipment: []
  },

  mutations: {
    ADD_EMPLOYEE: (state, variable) => {
      state.employees.push(variable)
    },
    DELETE_EMPLOYEE: (state, index) => {
      state.employees.splice(index, 1)
    },
    EDIT_EMPLOYEE: (state, { employee, index }) => {
      Vue.set(state.employees, index, employee)
    }
  },

  actions: {
    AddEmployee({ commit, state }, formdata) {
      commit('ADD_EMPLOYEE', formdata)
      saveToLocalForage(state.employees)
    },
    DeleteEmployee({ commit, state }, index) {
      commit('DELETE_EMPLOYEE', index)
      saveToLocalForage(state.employees)
    },
    EditEmployee({ commit, state }, employee, index) {
      commit('EDIT_EMPLOYEE', employee, index)
      saveToLocalForage(state.employees)
    }
  }
}

function saveToLocalForage(employees) {
  localForage.setItem('employees', employees)
}

export default data
