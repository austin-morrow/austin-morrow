<template>
  <div class="big-square-image">
    <div class="content">
      <img src="../assets/images/fulllogo.png" class="image" alt="Big Square Image">
      <h2 class="big-text">Some text that is super inspirational that will make clients want to book</h2>
      <button class="btn btn-dark" style="border-radius: 50px;">Get started</button>
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

.image {
border-radius: 15px;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.big-text {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
