import Vue from 'vue'
import localForage from 'localforage'
import { Employee } from '../../models/employee.model'
import _findIndex from 'lodash/findIndex'
import _find from 'lodash/find'

const employees = {
  state: {
    employees: []
  },

  mutations: {
    ADD_EMPLOYEE: (state, variable) => {
      state.employees.push(variable)
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
    DeleteEmployee({ commit, state }, id) {
      const index = _findIndex(state.employees, { 'id': id })
      const employee = state.employees[index]
      employee.deleted_at = new Date()
      commit('EDIT_EMPLOYEE', employee, index)
      saveToLocalForage(state.employees)
    },
    EditEmployee({ commit, state }, { employee }) {
      commit('EDIT_EMPLOYEE', { employee, index: _findIndex(state.employees, { id: employee.id }) })
      saveToLocalForage(state.employees)
    }
  },

  getters: {
    employees: state => state.employees,
    activeEmployees: state => () => state.employees.filter(employee => !employee.deleted_at).map(employee => new Employee(employee, state.employees)),
    getEmployeeById: state => (id) => new Employee(_find(state.employees, { id }), state.employees)
  }
}

function saveToLocalForage(employees) {
  localForage.setItem('employees', employees)
}

export default employees
