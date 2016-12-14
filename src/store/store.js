import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // initial app store data
  state: {
    todos: 
      [
        {
          body: 'Don\'t be lazy, complete me!',
          completed: false
        }
      ],
    newTodo: '',
    message: 'Vue App using Vuex'
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo
    },
    CLEAR_TODO(state) {
      state.newTodo = ''
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },
    EDIT_TODO(state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = ! todo.completed
    }
  },
  actions: {
    getTodo({commit}, todo) {
      commit('GET_TODO', todo)
    },
    clearTodo({commit}) {
      commit('CLEAR_TODO')
    },
    addTodo({commit}) {
      commit('ADD_TODO')
    },
    editTodo({commit}, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo) {
      commit('COMPLETE_TODO', todo)
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {
      return ! todo.completed
    }),
    completedTodos: state => state.todos.filter((todo) => {
      return todo.completed
    }),
    message: state => state.message
  }
})
