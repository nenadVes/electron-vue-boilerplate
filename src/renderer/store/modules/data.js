import Vue from 'vue'

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
    // 登录
    AddEmployee({ commit }, formdata) {
      commit('ADD_EMPLOYEE', formdata)
    },
    DeleteEmployee({ commit }, index) {
      commit('DELETE_EMPLOYEE', index)
    },
    EditEmployee({ commit }, { employee, index }) {
      commit('EDIT_EMPLOYEE', { employee, index })
    }
  }
}

export default data
