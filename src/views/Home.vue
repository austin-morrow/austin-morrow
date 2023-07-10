<template>
  <div class="logo-container">
    <img class="logo" src="../assets/images/logo_no_bg.png" alt="Logo" />
    <div class="text-container">
      <h2 class="text">New Website</h2>
    </div>
    <div>
      <img
        class="construction"
        src="../assets/images/temp_logo.png"
        alt="Under Constructions"
      />
    </div>
    <div>
      <img
        class="banner"
        src="../assets/images/banner.png"
        alt="Under Constructions"
      />
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.logo {
  max-width: 500px;
  display: block;
  margin-bottom: 10px;
}

.construction {
  width: 800px;
  display: block;
}

.text-container {
  text-align: center;
}

.text {
  padding-top: 50px;
  color: #fff;
  font-size: 70px;
  font-family: "Marck Script", cursive;
}

.banner {
  width: 250px;
  display: block;
  padding-top: 60px;
}
</style>
