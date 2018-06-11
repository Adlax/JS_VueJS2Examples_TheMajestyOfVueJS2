<template>
  <div class="hello">
    <h2 class="subtitle"> Add a new pokemon </h2>
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <input v-model="newPokemon.name" class="form-control">
      </div>
    </div>
    <br/>
    <button @click="cancel" class="btn btn-default"> Cancel </button>
    <button @click="save" class="btn btn-success"> Add </button>
  </div>
</template>

<script>
  import {pokedex} from '../pokedex.js'
  export default {
    data () {
      return {
        category: {},
        newPokemon: {
          name: '',
          level: '1',
          hungry: true
        }
      }
    },
    mounted () {
      this.category = pokedex.categories.find(this.getCategory)
    },
    methods: {
      getCategory(){
        return this.$route.params.name
      },
      cancel () {
        this.$router.push('/category/' + this.category.name)
      },
      save () {
        this.category.pokemons.push(this.newPokemon)
        this.$router.push('/category/' + this.category.name)
      }
    }
  }
</script>
