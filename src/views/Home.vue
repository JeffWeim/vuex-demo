
<template>
  <div class="container">
    <div class="title-container">
      <h3>{{message}}</h3> <button @click.prevent="edit">Edit Title</button>
    </div>

    <div v-if="canEdit" class="edit-container">
      <input v-model="message" :value="message"> <br>
      <button @click.prevent="save($event)">Save Title</button>
      <button @click.prevent="cancel">Cancel</button>
    </div>

    <GetTodo></GetTodo>

    <CompletedTodo></CompletedTodo>

    <CurrentTodo></CurrentTodo>

  </div>
</template>

<script>
  import GetTodo from '../components/GetTodo.vue'
  import CurrentTodo from '../components/CurrentTodo.vue'
  import CompletedTodo from '../components/CompletedTodo.vue'
  import Mappie from '../components/Mappie.vue'

  import { mapState } from 'vuex'

  export default {
    name: 'Home-View',
    components: {
      GetTodo,
      CurrentTodo,
      CompletedTodo,
      Mappie
    },
    data() {
      return {
        canEdit: false,
        old: '',
      }
    },
    /*
    // If you want to map a getter to a different name, use an object (instead an array)
    computed:
      mapState([
        // pass a string array to mapState when the name of mapped computed property is same as state sub tree name.
        'message'
      ])
    */
    computed: {
      message: {
        get() {
          return this.$store.state.home.message
        },
        set(value) {
          this.$store.dispatch('updateMessage', value) // dispatch from component, commit in the store file
        }
      }
    },
    methods: {
      edit() {
        this.old = this.message
        this.canEdit = true
      },
      cancel() {
        this.canEdit = false
        this.message = this.old
      },
      save() {
        this.$store.dispatch('updateMessage', this.message)
        this.canEdit = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    h3 {
      color: #025aa5;
      text-align: center;
    }
  }

  .container + div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .edit-container,
  .title-container {
    margin: 2rem 0;
  }
</style>
