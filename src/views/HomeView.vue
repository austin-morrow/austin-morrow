<template>
  <div class="big-square-image">
    <div class="content">
      <div class="text-container">
        <p class="upward-text">Your Text Here</p>
      </div>

      <img src="../assets/images/fulllogo.png" alt="Big Square Image">

      <div class="button-container">
        <ul class="button-list">
          <li>
            <i class="bi bi-github"></i>
          </li>
          <li>
            <i class="bi bi-linkedin"></i>
          </li>
          <li>
            <i class="bi bi-twitter"></i>
          </li>
        </ul>
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
  margin-left: 5px;
}

.upward-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin: 0;
  font-size: 16px;
}

.button-container {
  margin-right: 5px;
}

.button-container button {
  margin-left: 5px;
}

.button-container button:first-child {
  margin-left: 0;
}
</style>