<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-default" @click="selectedComponent = 'appQuote'">Quote</button>
        <button class="btn btn-default" @click="selectedComponent = 'appAuthor'">Author</button>
        <button class="btn btn-default" @click="selectedComponent = 'appNew'">New</button>
        <p>{{selectedComponent}}</p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent">Default Content</component>
        </keep-alive>

        <!-- <app-quote>
          <h1>{{name}}</h1>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data: function() {
    return {
      name: "Isaac",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>
