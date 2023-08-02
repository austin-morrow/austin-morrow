<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="service-content">
          <div class="icon-box design-icon"></div>
          <h2 class="services">Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita pariatur enim ex consectetur dicta quidem quis doloribus quaerat, adipisci quisquam illo a quia accusantium!</p>
        </div>
      </div>
      <div class="col">
        <div class="service-content">
          <div class="icon-box develop-icon"></div>
          <h2 class="services">Develop</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi officiis totam repudiandae, vitae in id excepturi alias quis facere saepe qui voluptatem, et cumque.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Add any JavaScript logic here if needed
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Hide horizontal scrollbar if present */
  background-color: #2b2b2b; /* Set background color for the entire page */
}

.container {
  padding-top: 100px;
}

.row {
  display: flex;
  justify-content: space-around;
}

.col {
  color: white;
  text-align: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.service-content {
  text-align: left;
}

.icon-box {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 10px; /* Use a border radius to create square corners */
  margin-bottom: 15px;
}

.design-icon {
  /* Add any specific styles for the design icon here */
}

.develop-icon {
  /* Add any specific styles for the develop icon here */
}

.services {
  padding-left: 0;
 
}
</style>
