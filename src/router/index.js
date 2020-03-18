import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'

Vue.use(VueRouter)

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
routes: [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('Home')
  },
  {
    path: '/about',
    name: 'About',
    component: lazyLoad('About')
  },
  {
    path: '/third',
    name: 'Third',
    component:  lazyLoad('Third')
  },
  {
    path: '/formvuelidate',
    name: 'Formvuelidate',
    component: lazyLoad('Formvuelidate')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: lazyLoad('Vuex')
  },
  
  ]
})


