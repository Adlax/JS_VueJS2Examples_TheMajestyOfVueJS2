<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <register :stories="stories"></register>
    <stories :stories="stories"></stories>
  </div>
</template>

<script>
import Hello from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Stories from './components/Stories.vue'
export default {
  name: 'App',
  components: {
    Hello,
    Login,
    Register,
    Stories
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
</style>
