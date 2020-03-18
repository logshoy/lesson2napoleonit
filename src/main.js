import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueResourse from 'vue-resource'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueResourse)
Vue.use(Vuelidate)

Vue.http.options.root = 'http://localhost:3000/'

Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

