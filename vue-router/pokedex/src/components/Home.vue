<template>
  <div class="hello">
    <h2 class="subtitle"> Categories </h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="category in categories">
        <p class="category-title"> {{ category.name }} with {{ category.pokemons.length }} pokemons </p>
        <router-link :to="{ name: 'show', params: { name: category.name } }" tag="button" class="btn btn-primary"> Show </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {pokedex} from '../pokedex.js'
  export default {
    data () {
      return {
        categories: pokedex.categories
      }
    }
  }
</script>

<style scoped>
  .category-title {
    font-size: 30pt;
    font-weight: 100;
  }
</style>
