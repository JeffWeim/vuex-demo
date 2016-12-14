
<template>
  <div id="app">
    <h3>{{ message }}</h3>
    <GetTodo></GetTodo>
    <CompletedTodo></CompletedTodo>
    <CurrentTodo></CurrentTodo>
  </div>
</template>

<script>
  import GetTodo from './components/GetTodo.vue'
  import CurrentTodo from './components/CurrentTodo.vue'
  import CompletedTodo from './components/CompletedTodo.vue'

  export default {
    name: 'app',
    components: {
      GetTodo,
      CurrentTodo,
      CompletedTodo
    },
    computed: {
      message(){
        return this.$store.getters.message
      }
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    h3 {
      color: #025aa5;
      text-align: center;
    }
  }
</style>
