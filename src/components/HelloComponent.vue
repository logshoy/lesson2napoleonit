<template>
  <div class="helloComponent">
    А яя здесь живу
    <h3>Я тут был и жил</h3>
  
  </div>
</template>

<script>
export default {
  name: 'HelloComponent',
  data() {
    return {
      helloArray: ['Hello', 'world'],
      essential:[{link: 'https://vuejs.org', name:'Core Dock'},
      {link: 'https://forum.vuejs.org', name:'Forum'},
      {link: 'https://chat.vuejs.org', name:'Chat'},
      {link: 'https://twitter.com/vuejs', name:'Twiiters'},
      {link: 'https://news.vuejs.org', name:'News'}]   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
