<template>
  <div class="app-modal">
    <div class="app-modal__container">
      <div class="app-modal__body">
        <h2 class="app-modal__title m-0">
          Password Change Confirmation
        </h2>
      </div>
      <div class="app-modal__footer">
        <button @click="handleCloseModal">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleCloseModal() {
      this.$emit('onClose');
    }
  }
}
</script>
