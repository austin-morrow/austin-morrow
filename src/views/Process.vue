<template>
  <div class="container-fluid custom-container">
    <div class="row justify-content-center align-items-center" style="height: 100vh;">
      <div class="custom-box">
        <div class="white-box">
          <!-- Your content goes here -->
          <h1>Hello, I'm a white box that takes up 70% of the container width and now centered!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add this style to your component */
.custom-container {
  background-color: #2b2b2b;
  display: flex;
  justify-content: center; /* Horizontally center the row content */
  align-items: center; /* Vertically center the row content */
}

.custom-box {
  width: 70%; /* Set the width of the custom box to 70% of the container */
}

.white-box {
  background-color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  height: 600px;
}
</style>
