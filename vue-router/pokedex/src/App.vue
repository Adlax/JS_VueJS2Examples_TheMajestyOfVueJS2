<template>
  <div id="app">
    <img src="./assets/pok-logo.jpeg" height="200px" width="200px">
    <h1> Welcome to pokemon town! </h1>
    <transition class="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
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
.subtitle {
  color: #42b983;
}
</style>
