<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <!-- <login></login> -->
    <register></register>
    <!-- <router-view/> -->
    <!-- <stories></stories> -->
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Hello from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import Stories from './components/Stories.vue'
export default {
  name: 'App',
  components: {
    Hello,
    Login,
    Register,
    Stories,
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
</style>
