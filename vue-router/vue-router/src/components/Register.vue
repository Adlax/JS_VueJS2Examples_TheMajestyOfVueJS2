<template>
  <div id="register">
    <h2> Register form </h2>
    <input class="form-control" placeholder="First Name">
    <input class="form-control" placeholder="Last Name">
    <input class="form-control" placeholder="e-mail">
    <input class="form-control" placeholder="Password">
    <input class="form-control" placeholder="Confirm Password">
    <button class="btn"> Sign Up! </button>
    <famous :stories="stories"></famous>
  </div>
</template>

<script>
  import Famous from './Famous.vue'
  export default {
    components: {
      Famous,
    },
    props: ['stories'],
    created () {
      console.log('registered')
    }
  }
</script>
