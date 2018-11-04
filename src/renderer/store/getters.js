const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  // Employee related
  employees: state => state.data.employees,
  getEmployeeById: state => (employeeID) => {
    return state.data.employees && employeeID in state.data.employees ? state.data.employees[employeeID] : false
  }
}
export default getters
