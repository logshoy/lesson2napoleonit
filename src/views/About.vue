<template lang="pug">
  .about
    h1 This is an about page
    h2 {{ myVariable }}
    h2(@click="incrementCount") {{ mySecondVariable }}
    input(v-model="inputFilter")
    .todos
      ul
        li(v-for="todo in filteredJson" :key="todo.id") {{todo.title}}

</template>
<script>
export default {
  name: "About",
  data(){
    return{
      myJson:[],
      inputFilter:''
    }
  },
  methods: {
    incrementCount() {
      this.$store.commit('increment')
    },
    getFromChild(message) {
      alert(message)
    }
  },
  computed:{
    // vuexData() {
    //   return this.$store.state.getters.myVariable
    // },
    // ...mapGetters(['myVariable', 'mySecondVariable','count']),
    // filteredJson() {
    //   return this.myJson.filter(element => element.title.includes(this.inputFilter))
    // }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.myJson=json) 
  }
}
</script>