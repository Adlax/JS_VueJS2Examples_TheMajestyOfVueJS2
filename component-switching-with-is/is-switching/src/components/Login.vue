<template>
  <div id="login">
    <h2> Sign in </h2>
    <input type="email" placeholder="type your email here...">
    <input type="password" placeholder="type your password here...">
    <button class="btn"> Sign In! </button>
  </div>
</template>

<script>
  export default {
    created () {
      console.log('login made');
    }
  }
</script>
