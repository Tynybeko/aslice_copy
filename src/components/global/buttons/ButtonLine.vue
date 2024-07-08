<template>
  <button
    class="as-button-line"
    :class="{
      'as-button-line--white': variant === 'white',
      'as-button-line--purple-hover': hoverEffect
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonLine",
  props: {
    variant: {
      type: String,
      default: "default"
    },
    hoverEffect: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss"></style>
