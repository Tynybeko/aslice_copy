<template>
  <div class="app-modal">
    <div class="app-modal__container">
      <img
        v-if="closeIcon"
        class="app-modal__close"
        src="@/assets/images/close-groups-modal.svg"
        @click="handleCloseModal"
      />
      <div class="app-modal__body">
        <slot v-if="customContent" name="body" />
        <div>
          <h2
            v-if="title"
            v-html="title"
            class="app-modal__title"
          />
          <p
            v-if="description"
            v-html="description"
            class="app-modal__description"
          />
        </div>
      </div>
      <slot v-if="customFooter" name="footer" />
      <div v-else class="app-modal__footer">
        <button @click="handleCloseModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    closeIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    customContent: {
      type: Boolean,
      required: false,
      default: false
    },
    customFooter: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit("onClose");
    }
  }
};
</script>
