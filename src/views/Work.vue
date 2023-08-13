<template>
  <div class="work">
    <h2 class="heading">FEATURED WORK</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div class="box"></div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="box"></div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="box"></div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px; /* Decreased padding for smaller boxes */
  text-align: center;
  margin-bottom: 20px;
  border-radius: 15px; /* Added border radius */
  height: 0;
  padding-bottom: 50%; /* Maintain square shape and make it smaller */
}

.heading {
 padding-left: 50px;
 padding-bottom: 20px;
 color: white;
}

.work {
  background-color: #1f1f1f;
}
</style>
