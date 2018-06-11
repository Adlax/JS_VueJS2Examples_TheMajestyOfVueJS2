// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Home from './components/Home.vue'
import Category from './components/Category.vue'
import Create from './components/Create.vue'
/*
import WaterPoks from './components/WaterPoks.vue'
import FirePoks from './components/FirePoks.vue'
import ElectricalPoks from './components/ElectricalPoks.vue'
import AirPoks from './components/AirPoks.vue'
*/

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //alias: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/category/:name/',
    name: 'show',
    component: Category,
    children: [
      {
        path: 'pokemons/new',
        name: 'create',
        component: Create,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes,
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
