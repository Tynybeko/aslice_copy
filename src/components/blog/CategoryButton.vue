<template>
  <button
    :class="['category-button', { selected }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CategoryButton",
  props: {
    selected: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.category-button {
  height: 41px;
  padding: 8px 18px;
  border-radius: 50px;
  border: 1px solid var(--Core-Grayscale-800, #91918f);
  background: var(--Core-Grayscale-100, #fefefd);
  color: var(--Core-Grayscale-800, #91918f);
  font-family: Graphik App, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 1.82px;
  text-transform: uppercase;
  transition-timing-function: ease-in;
  transition-duration: 300ms;

  &:hover {
    border: 1px solid #442671;
    background: #eaddfe;
    color: #442671;
  }

  &:active,
  &.selected {
    border: 1px solid #442671;
    background: #442671;
    color: #fefefd;
  }

  @media (max-width: 425px) {
    height: 30px;
    padding: 4px 12px;
  }
}
</style>
