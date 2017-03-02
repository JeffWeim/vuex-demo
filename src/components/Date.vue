<template>
  <p v-html="format(date)"></p>
</template>

<script>
  export default {
    methods: {
      format(date) {
        let newDate, year, month, day, hour, minute;

        year = date.getFullYear()
        day = date.getDay()
        month = date.getDate()
        hour = date.getHours()
        minute = date.getMinutes()

        return 'Year: ' + year + '<br>' + 
               'Month: ' + month + '<br>' +
               'Day: ' + day + '<br>' +
               'Hour: ' + hour + '<br>' +
               'Minutes: ' + minute
      }
    },
    computed: {
      date() {
        let todos = this.$store.getters.todos,
            routeId = this.$route.params.id
        
        let current = todos.filter((todo) => {
          if (parseInt(todo.id) === parseInt(routeId)) {
            return todo
          }
        })

        if (current.length > 0) {
          return current[0].created
        }
      }
    }
  }

</script>