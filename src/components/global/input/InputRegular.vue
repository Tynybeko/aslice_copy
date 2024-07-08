<template>
  <input type="text" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => ""
    },
    type: {
      type: String,
      default: () => "text"
    }
  }
};
</script>
