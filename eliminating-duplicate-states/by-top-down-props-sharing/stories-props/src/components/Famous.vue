<template>
  <div id="famous">
    <h2> Les histoires les plus connues (<strong>{{ famous.length }}</strong>) </h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="story in famous">
        {{ story.writer }} said "{{ story.plot }}".
        Story upvotes {{ story.upvotes }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['stories'],
    computed: {
      famous () {
        return this.stories.filter(function(item){
          return item.upvotes > 30;
        })
      }
    },
    data () {
      return {

      }
    }
  }
</script>
