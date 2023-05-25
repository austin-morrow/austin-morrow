<template>
  <div id="app">
    <Header />
    <router-view />
    <Work />
    <Services />
  </div>
</template>

<script>
import Header from "../src/layout/Header.vue";
import Work from "../src/views/Work.vue";
import Services from "../src/views/Services.vue";

export default {
  name: "App",
  components: {
    Header, Work, Services
  },
};
</script>

<style>
/* Your global styles can be defined here */
</style>
