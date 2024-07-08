<template>
  <div class="group-modal">
    <div class="group-modal__container">
      <div class="group-modal__body">
        <h2 class="group-modal__title">Your Dispute Has Been Submitted</h2>
      </div>
      <div class="group-modal__footer">
        <button
          class="button-default"
          @click="handleCancel"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmittedDisputeModal",
  methods: {
    handleCancel() {
      this.$emit('onClose');
    }
  }
};
</script>

<style lang="scss" scoped>
  .group-modal {
    &__container {
      max-width: 425px;
    }
    &__footer {
      .button-default {
        width: 93px;
      }
    }
  }
</style>
