<template>
  <div id="app">
    <Header />
    <Home />
    <Work />
    <Services />
    <Process />
    <About />
    <Contact />
  </div>
</template>

<script>
import Header from "../src/layout/Header.vue";
import Home from "../src/views/Home.vue";
import Work from "../src/views/Work.vue";
import Services from "../src/views/Services.vue";
import Process from "../src/views/Process.vue";
import About from "../src/views/About.vue";
import Contact from "../src/views/Contact.vue";


export default {
  name: "App",
  components: {
    Header, Home, Work, Services, Process, About, Contact
  },
};
</script>

<style>

</style>
