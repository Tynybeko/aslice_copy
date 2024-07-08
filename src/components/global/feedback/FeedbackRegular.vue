<template>
  <p class="error mb-0 bottom-15px">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-15px {
  bottom: -25px;
}
p {
  color: #ff3b3b !important;
}
</style>
