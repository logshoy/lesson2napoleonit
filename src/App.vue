<template lang="pug">
  div(class="app" :class="{ green: checked , gray: !checked }"  ) 
    Header(:checked="checked" )
    input(type="checkbox" v-model="checked" ) 
    label(v-if="checked===true") Зеленая тема
    label(v-else) Серая тема
    router-view( class="container")
    SwitchTheme( text="Hello VueDose!" @click.native="toggleTheme" )
    Footer(:checked="checked" )
</template>

<style lang="stylus">
html,
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.container {
  width: 280px;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1 0 auto;
}

.gray {
  background: #e5e5e5;
}

.green {
  background: green;
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

// стили из смены темы
.light {
  background-color: white;
}

.dark {
  background-color: #000;
}






</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SwitchTheme from '@/components/SwitchTheme.vue'

export default {
  name: 'App',
  components: { Header, Footer, SwitchTheme},
    data() {
      return {
        checked: false,
        mode: "light"
      }
    },
    methods: {
      toggleTheme() {
      this.mode = this.mode === "light" ? "dark" : "light";
      }
    }
}

</script>
