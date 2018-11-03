const employee = {
  state: {
    fname: '',
    lname: '',
    email: '',
    number: '',
    status: '',
    desc: '',
    labor: '',
    keywords: []
  },

  mutations: {
    SET_FNAME: (state, fname) => {
      state.fname = fname
    },
    SET_LNAME: (state, lname) => {
      state.lname = lname
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_NUMBER: (state, number) => {
      state.number = number
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_DESC: (state, desc) => {
      state.desc = desc
    },
    SET_LABOR: (state, labor) => {
      state.labor = labor
    },
    SET_KEYWORDS: (state, keywords) => {
      state.keywords = keywords
    }
  },

  actions: {
    // 登录
    PersistEmployee({ commit }, formdata) {
      commit('SET_FNAME', formdata.fname)
      commit('SET_LNAME', formdata.lname)
      commit('SET_EMAIL', formdata.email)
      commit('SET_NUMBER', formdata.number)
      commit('SET_STATUS', formdata.status)
      commit('SET_DESC', formdata.desc)
      commit('SET_LABOR', formdata.labor)
      commit('SET_KEYWORDS', formdata.keywords)
    }
  }
}

export default employee
