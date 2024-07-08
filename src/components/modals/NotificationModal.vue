<template>
  <b-modal
    v-bind="$attrs"
    v-on="$listeners"
    dialog-class="notification-modal-dialog"
    content-class="notification-modal-content"
    header-class="notification-modal-header"
    body-class="notification-modal-body"
    footer-class="notification-modal-footer"
    centered
  >
    <template #modal-header-close>
      <img src="@/assets/images/close-groups-modal.svg" alt="close icon" />
    </template>
    <div class="title">
      {{ title }}
    </div>
    <div class="message">
      <slot></slot>
    </div>
    <template #modal-footer="{ close }">
      <ButtonFill @click="close">Close</ButtonFill>
    </template>
  </b-modal>
</template>

<script>
import ButtonFill from "@/components/global/buttons/ButtonFill.vue";

export default {
  name: "NotificationModal",
  components: {
    ButtonFill
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.notification-modal-dialog {
  max-width: 425px;
}

.notification-modal-content,
.notification-modal-header,
.notification-modal-footer {
  border: none;
}

.notification-modal-header {
  padding: 18px 22px;
}

.notification-modal-body {
  padding: 2px 41px 39px;
}

.notification-modal-footer {
  background: var(--Grays-Lt-Gray, #f2f1ef);
  padding: 12px 16px;
}
</style>

<style scoped lang="scss">
.title {
  color: #442671;
  font-family: Graphik App, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px; /* 131.25% */
  text-transform: capitalize;
}
.message {
  margin-top: 22px;
  color: var(--Grays-Drk-Gray, #75707b);

  /* Webtext/Body Copy */
  font-family: Roboto Mono, monospace;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 18.9px */
}
</style>
