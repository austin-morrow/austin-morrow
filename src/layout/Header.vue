<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg" style="padding-top: 20px; padding-bottom: 20px;">
      <div class="menu" @click="openMenu"> 
      <i class="bi bi-list"></i>
      </div>

      <div class="navbar-text d-flex flex-fill justify-content-center">
        <img src="../assets/images/logo_no_bg_lg.png" alt="Logo" class="navImage">
      </div>

      <div class="ml-auto contact">
        <button class="btn btn-light" style="border-radius: 50px;">Get started</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    openMenu() {
      console.log('im hit!');
    }
  },
};
</script>

<style>


.menu {
  padding-left: 5rem;
  font-size: 2rem;
  color: #FDD427;
}

.contact {
  padding-right: 5rem;
}

.navbar-text {
  padding-left: 5rem;
  padding-right: 5rem;
}

.navImage {
  height: 200px;
  width: auto;
}

.navbar-text-item {
  color: black;
}

.navbar {
  background-color: #1f1f1f;
}
</style>
