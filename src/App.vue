<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Routing</h1>
        <hr>
        <app-header></app-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {
    appHeader: Header
  }
};
</script>

<style>
</style>
