import Vue from 'vue'
import App from './App'

import Hello from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import StoriesPage from './components/StoriesPage.vue'
import StoriesAll from './components/StoriesAll.vue'
import StoriesFamous from './components/StoriesFamous.vue'
import StoriesEdit from './components/StoriesEdit.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/stories',
    component: StoriesPage,
    children: [
      {
        path: '',
        name: 'stories.all',
        component: StoriesAll
      },
      {
        path: 'famous',
        alias: '/famous',
        name: 'stories.famous',
        component: StoriesFamous
      },
      {
        path: ':id/edit',
        props: (route) => ({ id: Number(route.params.id) }),
        name: 'stories.edit',
        component: StoriesEdit
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes,
})

let User = {
  isAdmin: false
}

/*
router.beforeEach( (to, from, next) => {
  if(to.path!== '/login' && !User.isAdmin){
    next('/login')
  } else {
    next()
  }
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
