<template>
  <button
    :class="{
      'btn-rounded light-gray px-4': true,
      'not-allowed black-text': btnDisable,
      'btn-rounded__hover': !btnDisable
    }"
    :type="buttonType"
    :disabled="btnDisable"
    @click="toggle()"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Login"
    },
    buttonType: {
      type: String,
      default: () => "button"
    },
    btnDisable: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    toggle() {
      this.$emit("clicked");
    }
  }
};
</script>
