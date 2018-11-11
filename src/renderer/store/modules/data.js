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
    EDIT_EMPLOYEE: (state, employee, index) => {
      state.employees[index] = employee
    },
    ADD_EQUIPMENT: (state, variable) => {
      state.equipment.push(variable)
    },
    DELETE_EQUIPMENT: (state, index) => {
      state.equipment.splice(index, 1)
    },
    EDIT_EQUIPMENT: (state, _equipment, index) => {
      state.equipment[index] = _equipment
    }
  },

  actions: {
    AddEmployee({ commit }, formdata) {
      commit('ADD_EMPLOYEE', formdata)
    },
    DeleteEmployee({ commit }, index) {
      commit('DELETE_EMPLOYEE', index)
    },
    EditEmployee({ commit }, employee, index) {
      commit('EDIT_EMPLOYEE', employee, index)
    },
    AddEquipment({ commit }, formdata) {
      commit('ADD_EQUIPMENT', formdata)
    },
    DeleteEquipment({ commit }, index) {
      commit('DELETE_EQUIPMENT', index)
    },
    EditEquipment({ commit }, _equipment, index) {
      commit('EDIT_EQUIPMENT', _equipment, index)
    }
  }
}

export default data
