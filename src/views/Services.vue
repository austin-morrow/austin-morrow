<template>
  <div class="custom-container">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="custom-column">
            <div class="square"></div>
            <h1>Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta impedit illo ad aliquam distinctio fugiat dolore cum doloribus tempore beatae, illum quo error sapiente quam voluptates molestias hic quos alias..</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="custom-column">
            <div class="square"></div>
            <h1>Develop</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus tenetur, corporis hic, officiis in excepturi voluptatibus ipsam asperiores iure obcaecati animi eius! Totam facilis numquam cupiditate similique ratione, placeat et..</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your Vue component logic goes here
};
</script>

<style scoped>
.custom-container {
  background-color: #2b2b2b;
  padding: 20px; /* Add padding to separate content from the edges if desired */
  width: 100%; /* Set the width to 100% to cover the entire viewport */
}

.custom-column {
  color: white;
  text-align: left;
  padding: 20px;
  position: relative; /* To position the squares relative to the column */
}

.square {
  top: -30px; /* Adjust the positioning based on your preference */
  left: 10px; /* Align the square to the left */
  width: 70px; /* Make the square a little bigger */
  height: 70px; /* Make the square a little bigger */
  background-color: #fff; /* You can set any color you like for the squares */
  border-radius: 10px; /* Adjust the border radius to control the roundness */
}

.custom-column h1 {
  /* Add any custom styles for the header if needed */
}

.custom-column p {
  text-align: left;
}
</style>
