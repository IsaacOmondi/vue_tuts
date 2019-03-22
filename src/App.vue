<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Filters</h1>
        <p>{{name | toUppercase | to-lowercase}} </p>

        <hr>
        <button @click="fruits.push('Berries')">Add new Item</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit.id">
            {{fruit}}
          </li>
        </ul>
      
      <hr>
      <app-list></app-list>
      </div>

      
    </div>
    <hr>
  </div>
</template>

<script>
import List from './components/List.vue';
import {fruitMixin} from './components/fruitMixin';
export default {
  mixins: [fruitMixin],
  data() {
    return {
      name: 'Isaac',
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
};
</script>

<style>
</style>
