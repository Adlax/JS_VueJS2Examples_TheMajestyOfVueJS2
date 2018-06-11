<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="story in stories"> {{ story.writer }} sais "{{ story.plot }}". Story upvotes {{ story.upvotes }}. </li>
  </ul>
</template>

<script>
  export default {
    props: ['stories'],
    data () {
      return {

      }
    }
  }
</script>
