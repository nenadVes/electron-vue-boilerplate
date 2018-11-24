import Vue from 'vue'
import localForage from 'localforage'
import { Task } from '../../models/task.model'
import _findIndex from 'lodash/findIndex'

const tasks = {
  state: {
    tasks: []
  },

  mutations: {
    ADD_TASK: (state, variable) => {
      state.tasks.push(variable)
    },
    EDIT_TASK: (state, { task, index }) => {
      Vue.set(state.tasks, index, task)
    }
  },

  actions: {
    AddTask({ commit, state }, formdata) {
      commit('ADD_TASK', formdata)
      saveToLocalForage(state.tasks)
    },
    DeleteTask({ commit, state }, id) {
      const index = _findIndex(state.tasks, { 'id': id })
      const task = state.tasks[index]
      task.deleted_at = new Date()
      commit('EDIT_TASK', task, index)
      saveToLocalForage(state.tasks)
    },
    EditTask({ commit, state }, task) {
      commit('EDIT_TASK', { task, index: _findIndex(state.tasks, { id: task.id }) })
      saveToLocalForage(state.tasks)
    }
  },

  getters: {
    tasks: state => state.tasks,
    activeTasks: state => () => state.tasks.filter(task => !task.deleted_at).map(task => new Task(task, state.tasks)),
    activeRepairTasks: state => () => state.tasks.filter(task => !task.deleted_at).filter(task => task.type === '1').map(task => new Task(task, state.tasks))
  }
}

function saveToLocalForage(tasks) {
  localForage.setItem('tasks', tasks)
}

export default tasks
