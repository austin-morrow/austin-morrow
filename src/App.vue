<template>
  <div id="app">
    <Header />
    <Home />
    <Work />
    <Services />
  </div>
</template>

<script>
import Header from "../src/layout/Header.vue";
import Home from "../src/views/Home.vue";
import Work from "../src/views/Work.vue";
import Services from "../src/views/Services.vue";


export default {
  name: "App",
  components: {
    Header, Home, Work, Services
  },
};
</script>

<style>

</style>
