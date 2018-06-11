<template>
  <div class="hello">
    <h2 class="subtitle"> {{ category.name }} pokemons </h2>
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <ul class="list-group">
          <li v-for="pokemon in category.pokemons" class="list-group-item">
            <strong>{{ pokemon.name }}</strong> <br/>
            Level : {{ pokemon.level }}
          </li>
        </ul>
      </div>
    </div>
    <button @click="goBack" class="btn btn-info"> Back to categories </button>
    <!-- <router-link :to="{ path: category.name + '/pokemons/new', params: { name: category.name } }" tag="button" class="btn btn-success"> Add a pokemon </router-link> -->
    <router-link :to="{ name: 'create', params: { name: category.name } }" tag="button" class="btn btn-success"> Add a pokemon </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import {pokedex} from '../pokedex.js'
  export default {
    data () {
      return {
        category: {}
      }
    },
    mounted () {
      this.category = pokedex.categories.find(this.getCategory)
    },
    methods: {
      getCategory(){
        return this.$route.params.name
      },
      goBack () {
        this.$router.push('/')
      }
    }
  }
</script>
