<template>
  <div class="logo-container">
    <img class="logo" src="../assets/images/dark_mode_logo.png" alt="Logo">
    <div class="text-container">
      <h2 class="text">New Website</h2>
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
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
}

.logo {
  max-width: 450px; 
  display: block;
  margin-bottom: 10px;
}

.text-container {
  text-align: center;
}

.text {
  padding-top: 50px;
  color: #fff;
  font-size: 50px;
}
</style>

