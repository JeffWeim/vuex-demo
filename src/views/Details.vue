<template>
  <div>
    <router-link :to="{ path: '/' }"> Back</router-link> <br/>
    <h2> {{ detailsMessage }} </h2>
    <p>"{{ currentTodo }}"</p>
    <date></date>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Date from '../components/Date.vue'

  export default {
    name: 'Details-View',
    components: {
      Date
    },
    data() {
      return {}
    },
    computed: {
      detailsMessage() {
        return this.$store.getters.detailsMessage
      },
      currentTodo() {
        let todos = this.$store.getters.todos,
            currentId = this.$store.state.route.params.id

        let body = todos.filter((t) => {
          if (t.id === parseInt(currentId)) {
            return t.body
          }
        })

        if (body.length > 0) {
          return body[0].body
        }
      }
    }
  }
</script>