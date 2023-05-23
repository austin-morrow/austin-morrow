<template>
  <div class="big-square-image">
    <div class="content">
      <div class="text-container">
        <p class="upward-text">morrow.austin5@gmail.com</p>
      </div>

      <img src="../assets/images/fulllogo.png" alt="Big Square Image">

      <div class="button-container">
            <i class="bi bi-github fs-4"></i>
            <i class="bi bi-linkedin fs-4"></i>
            <i class="bi bi-twitter fs-4"></i>
      </div>
    </div>

  </div>
</template>

<style scoped>
.big-square-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5px;
  box-sizing: border-box;
}

.content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.text-container {
  margin-left: 10px;
}

.upward-text {
  writing-mode: vertical-lr;
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
  transform: rotate(180deg); 
}

.button-container {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fs-4 {
font-size: 30px;
}


</style>