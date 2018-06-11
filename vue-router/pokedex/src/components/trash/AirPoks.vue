<template>
  <div id="airpoks">
    <h1> Air Pokemons </h1>
    <div v-for="pok in airPoks" class="">
      {{ pok.name }} <br/>
      {{ pok.level }}
    </div>
    <button @click="goCategories" class=""> Back to all categories </button>
    <button @click="addPokemon" class=""> Add a pokemon </button>
  </div>
</template>

<script>
  import {store} from '../store.js'
  export default {
    data () {
      return {
        poks: store.poks
      }
    },
    computed: {
      airPoks () {
        return this.poks.filter(function(item){
          return item.cat === 'air'
        })
      }
    },
    methods: {
      goCategories(){
        this.$router.push('/categories')
      }
    }
  }
</script>

<style>
</style>
