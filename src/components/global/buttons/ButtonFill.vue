<template>
  <button class="button-fill" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonFill"
};
</script>

<style scoped lang="scss">
.button-fill {
  padding: 10px 18px;
  border: none;
  border-radius: 50px;
  background: var(--Purples-Lt-Purple, #442671);
  color: var(--White, #fff);
  text-align: center;
  font-family: Graphik App, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 1.82px;
  text-transform: uppercase;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:active {
    background: var(--Purples-Accent-Purple, #9182c5);
  }

  &:disabled {
    background: var(--Grays-MD-Gray, #aaa3b1);
  }
}
</style>
