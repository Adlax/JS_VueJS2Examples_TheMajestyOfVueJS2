<template>
  <div class="row">
    <div class="col-md-offset-2 col-md-8">
      <h2> Sign in </h2>
      <form class="form-inline">
        <div class="form-group">
          <input type="form-control" placeholder="type your email here...">
        </div>
        <div class="form-control">
          <input type="password" class="form-control" placeholder="type your password here...">
        </div>
        <button type="submit" class="btn"> Sign In! </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      console.log('login made');
    }
  }
</script>
