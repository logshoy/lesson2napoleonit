<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloComponent></HelloComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloComponent from '@/components/HelloComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HelloComponent
  }
}
</script>
