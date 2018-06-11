<template>
  <div>
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to Routing</h1>
    <router-link :to="{ name: 'hello'}" exact> Home </router-link>
    <router-link :to="{ name: 'login'}"> Login </router-link>
    <router-link :to="{ name: 'stories.all'}"> Stories </router-link>
    <transition enter-active-class="animated rollIn" leave-animated-class="animated rollOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import Hello from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Hello,
    Login,
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .router-link-active {
    color: green;
    border-bottom: 1px solid green;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter-to, .fade-leave {
    opacity: 0.8
  }
</style>
