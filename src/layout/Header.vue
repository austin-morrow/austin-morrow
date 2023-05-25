<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-white" style="padding-top: 20px; padding-bottom: 20px;">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/Personal Logo-5.png" alt="Logo" class="logo">
      </a>

      <div class="navbar-text d-flex flex-fill justify-content-center">
        <span class="navbar-text-item">Work</span>
        <span class="navbar-text-item">Services</span>
        <span class="navbar-text-item">Process</span>
        <span class="navbar-text-item">About</span>
      </div>

      <div class="ml-auto menu">
        <button class="btn btn-dark" style="border-radius: 50px;">Get started</button>
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
  methods: {},
};
</script>

<style>
.logo {
  height: 60px;
  padding-left: 5rem;
}

.menu {
  padding-right: 5rem;
}

.navbar-text {
  padding-left: 5rem;
  padding-right: 5rem;
  gap: 5rem;
}

.navbar-text-item {
  color: black;
}
</style>
