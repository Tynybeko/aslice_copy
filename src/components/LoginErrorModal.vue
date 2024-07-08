<template>
  <div class="app-modal">
    <div class="app-modal__container">
      <div class="app-modal__body">
        <img src="@/assets/images/warning-icon.svg" alt="" />
        <h2 class="app-modal__title app-modal__title_red m-0">
          Email And / Or Password Is Incorrect
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
