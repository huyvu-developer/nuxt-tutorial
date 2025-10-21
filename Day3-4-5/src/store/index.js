import { createStore } from 'vuex';

// Khởi tạo store Vuex
const store = createStore({
  state() {
    return {
      userName: 'HieuKieu',
      darkMode: false,
      count: 0, // giá trị đếm
      task: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false },
      ]
    }
  },

  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    userinfo(state) {
      return `${state.userName}, (${state.darkMode ? 'Dark Mode' : 'Light Mode'})`
    },
    allTasks: state => state.task,
    completedTasks: state => state.task.filter(t => t.completed),
    pendingTasks: state => state.task.filter(t => !t.completed),
  },

  mutations: {
    INCREMENT(state) {
      state.count++
    },
    DECREMENT(state) {
      state.count--
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    updateUserName(state, name) {
      state.userName = name
    },
    addTask(state, title) {
      state.task.push({
        id: Date.now(),
        title,
        completed: false
      })
    },
    toggleTask(state, id) {
      const task = state.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
    },
    deleteTask(state, id) {
      state.task = state.task.filter(t => t.id !== id)
    }
  },

  actions: {
    increment({ commit }) {
      commit('INCREMENT')
    },
    decrement({ commit }) {
      commit('DECREMENT')
    },
  },
});

export default store
