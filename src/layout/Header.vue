<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/path/to/logo.png" alt="Logo" class="logo">
      </a>
      <div class="ml-auto">
        <button class="btn btn-outline-light" @click="toggleOverlay">MENU</button>
      </div>
    </nav>

    <Overlay v-if="showOverlay" @close="toggleOverlay" />
  </div>
</template>

<script>
import Overlay from '../components/Overlay.vue';

export default {
  components: {
    Overlay
  },
  data() {
    return {
      showOverlay: false
    };
  },
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
  }
}
</script>

<style>
.logo {
  height: 30px; /* Adjust the height as per your logo's size */
}
</style>
