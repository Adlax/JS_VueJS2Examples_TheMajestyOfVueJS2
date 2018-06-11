<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="story in store.stories"> {{ story.writer }} sais "{{ story.plot }}". Story upvotes {{ story.upvotes }}. </li>
  </ul>
</template>

<script>
  import {store} from '../store.js'
  export default {
    data () {
      return {
        store,
      }
    },
    created () {
      console.log('stories')
    }
  }
</script>
