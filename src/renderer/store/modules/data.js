const data = {
  state: {
    employees: [],
    workorders: [],
    equipment: []
  },

  mutations: {
    ADD_EMPLOYEE: (state, variable) => {
      state.employees.push(variable)
    }
  },

  actions: {
    // 登录
    AddEmployee({ commit }, formdata) {
      commit('ADD_EMPLOYEE', formdata)
    }
  }
}

export default data
