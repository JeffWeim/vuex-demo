
const home = {
  state: {
    todos: [
      {
        body: 'Learn more about Vuex',
        completed: false,
        id: 0,
        created: new Date('01/31/2017')
      }
    ],
    newTodo: '',
    message: 'Vue - Vuex - Vue-Router Demo',
    id: 0
  },
  // Each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive the state as the first argument
  // Mutations MUST be synchronous
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
        completed: false,
        id: state.id += 1,
        created: new Date(),
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
    },
    UPDATE_MESSAGE(state, message) {
      state.message = message
    }
  },
  // Actions can contain asynchronous code
  // Typical Flow is a flow of asynchronous code, that results in committing to a mutation
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
    },
    updateMessage({commit}, message) {
      commit('UPDATE_MESSAGE', message)
    }
  },
  // Think of 'getters' as the computed properties of the Vuex store
  //
  // Getters will also receive other getters as the 2nd argument
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {
      return ! todo.completed
    }),
    completedTodos: state => state.todos.filter((todo) => {
      return todo.completed
    }),
    message: state => state.message,
  }
}

export default home;