<template>
  <div id="get-todo" >
    <input class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to...">
    <button class="btn btn-primary" @click.prevent="addTodo"> Add </button>
  </div>  
</template>

<script>
  export default {
    methods: {
      getTodo(e) {
        this.$store.dispatch('getTodo', e.target.value)
      },
      addTodo() {
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
      }
    },
    computed: {
      newTodo() {
        return this.$store.getters.newTodo
      }
    }
  }
</script>

<style lang="scss" scoped>
  #get-todo {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn-primary {
      text-align: center;
    }
  }
</style>
