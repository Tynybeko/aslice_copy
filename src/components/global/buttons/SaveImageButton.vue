<template>
  <a
    class="primary-button text-decoration-none my-4 my-lg-5 px-4"
    :download="filename"
    :href="href"
    :data-key="dataKey"
  >
    <slot>Save image</slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    dataKey: {
      type: Number,
      required: true
    },
    filename: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.primary-button {
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 50px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  border: 1px solid #442671;
  font-family: "Graphik-Regular-Web", sans-serif;
  display: flex;
  align-items: center;
  background: #442671;
  color: #ffffff;
  margin-left: 10px;
  transition: 0.2s;

  &:hover {
    background: #ffffff;
    color: #442671;
  }
}
</style>
