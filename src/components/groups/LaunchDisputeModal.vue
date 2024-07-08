<template>
  <div class="group-modal">
    <div class="group-modal__container">
      <div class="group-modal__body">
        <h2 class="group-modal__title group-modal__title_red">Are You Sure You Want To File A Dispute?</h2>
        <p>
          Disputes are only to be considered as a last case scenario.
          We ask that all members try and resolve the issues amongst themselves.
          Disputes can take up to 90 days to resolve, during which time the group’s
          editing features are locked.
        </p>
      </div>
      <div class="group-modal__footer">
        <button
          class="button-link"
          @click="handleCancel"
        >
          Cancel
        </button>
        <button
          class="button-default"
          @click="handleContinue"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaunchDisputeModal",
  methods: {
    handleContinue() {
      this.$emit('onContinue');
    },
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
        width: 124px;
      }
    }
  }
</style>
