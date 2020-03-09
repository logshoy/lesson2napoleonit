<template>
  <div class="app">
      <Header></Header>
      <router-view class="container" ></router-view>
      <Footer></Footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  width: 280px;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1 0 auto;
}

@media (min-width: 768px) {
  .container {
    width: 708px;
    padding: 0 30px;
  }
}

@media (min-width: 1220px) {
  .container {
    width: 1220px;
    padding: 0;
  }
}



.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer
  }
}

</script>
