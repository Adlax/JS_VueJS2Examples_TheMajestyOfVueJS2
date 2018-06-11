<template>
  <div id="famous">
    <h2> Les histoires les plus connues (<strong>{{ famous.length }}</strong>) </h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="story in famous">
        {{ story.writer }} said "{{ story.plot }}".
        Story upvotes {{ story.upvotes }}.
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      famous () {
        return this.stories.filter(function(item){
          return item.upvotes > 30
        })
      }
    },
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
