<template>
  <div>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <h3>Editing</h3>
        <form>
          <div class="form-group col-md-offset-2 col-md-8">
            <input class="form-control" v-model="story.plot">
          </div>
        </form>
        <button @click="goBack"> Back </button>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from '../store.js'
export default {
  props: ['id'],
  data () {
    return {
      story: {}
    }
  },
  methods: {
    isTheOne (story) {
      return story.id === this.id
    },
    saveChanges(story){
      console.log('Saved!')
      this.$router.push('/stories')
    },
    goBack(){
      this.$router.back()
    },
  },
  mounted () {
    this.story = store.stories.find(this.isTheOne)
  }
}
</script>
