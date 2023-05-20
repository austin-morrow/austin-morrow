<template>
  <div id="app">
    <Header />

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../src/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
/* Your global styles can be defined here */
</style>
