<template lang="pug">
  .home
    HelloWorld 
    Education
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Education from '@/components/Education.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld, Education
  }
}
</script>
