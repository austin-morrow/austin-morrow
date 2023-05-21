<template>
  <div class="overlay">
    <div class="overlay-content">
      <button class="close-button" @click="closeOverlay">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeOverlay() {
      this.$emit('close'); // Emitting a 'close' event
    }
  }
}
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
}

.overlay-content {
  position: relative;
}

.close-button {
  padding: 50px 5px 5px 5px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}



</style>
