<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="story in stories"> {{ story.writer }} sais "{{ story.plot }}". Story upvotes {{ story.upvotes }}. </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        stories: [
          {
            plot: 'Je suis defonce',
            writer: 'Weedman',
            upvotes: 25,
            voted: false,
          },
          {
            plot: 'Je vole',
            writer: 'Ninjaman',
            upvotes: 24,
            voted: false,
          },
          {
            plot: 'Je construit un avion',
            writer: 'Magicman',
            upvotes: 45,
            voted: false,
          },
          {
            plot: 'Moi une fusee',
            writer: 'Rocketman',
            upvotes: 36,
            voted: false,
          },
        ]
      }
    }
  }
</script>
