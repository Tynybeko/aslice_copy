<template>
  <span class="category">{{ name }}</span>
</template>

<script>
export default {
  name: "Category",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.category {
  border-radius: 50px;
  background: #f7f7f5;
  padding: 6px 10px;
  color: #91918f;
  text-align: center;
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.35px;
  text-transform: uppercase;
}
</style>
