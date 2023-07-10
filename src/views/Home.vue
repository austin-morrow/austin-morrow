<template>
  <div class="logo-container">
    <img class="logo" src="../assets/images/logo_no_bg.png" alt="Logo" />
    <div class="text-container">
      <h2 class="new-website">New Website</h2>
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
    <div>
      <div class="text">CONTACT FORM</div>
    </div>
    <div class="icons">
      <i class="bi bi-github"></i>
      <i class="bi bi-linkedin"></i>
      <i class="bi bi-twitter"></i>
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

.new-website {
  padding-top: 50px;
  color: #fff;
  font-size: 70px;
  font-family: "Marck Script", cursive;
}

.text {
  padding-top: 20px;
  color: #fff;
  text-decoration: underline;
}

.banner {
  width: 250px;
  display: block;
  padding-top: 60px;
}

.bi {
  color: #fff;
  row-gap: 10px;
}
</style>
