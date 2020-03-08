<template>
  <div class="app">
      <div id="nav">
        <logo></logo>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Всем привет</router-link> |
        <router-link to="/social">Третья страница</router-link>
      </div>
      <router-view/>
      <Footer></Footer>
  </div>
</template>

<style scoped>
body {
  margin: 0!important;
  padding: 0;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { Logo, Footer
  }
}

</script>
