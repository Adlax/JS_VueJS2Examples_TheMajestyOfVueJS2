<template>
  <div id="register">
    <h2> Register form </h2>
    <input class="form-control" placeholder="First Name">
    <input class="form-control" placeholder="Last Name">
    <input class="form-control" placeholder="Email">
    <input class="form-control" placeholder="Password">
    <input class="form-control" placeholder="Confirm Password">
    <button class="btn"> Sign Up! </button>
    <famous></famous>
  </div>
</template>

<script>
  import Famous from './Famous.vue'
  export default {
    components: {
      Famous,
    },
    created () {
      console.log('registered')
    }
  }
</script>
