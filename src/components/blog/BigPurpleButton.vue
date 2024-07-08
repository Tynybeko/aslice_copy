<template>
  <button class="big-purple-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BigPurpleButton"
};
</script>

<style scoped lang="scss">
.big-purple-button {
  height: 78px;
  padding: 30px 40px 28px;

  border: none;
  border-radius: 50px;
  background: var(--accent-brand-purple-core-brand-600, #9856fc);

  /* Big Drop */
  box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.1);

  color: var(--core-grayscale-100, #fefefd);
  text-align: center;
  font-family: Graphik App, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
  letter-spacing: 2.34px;
  text-transform: uppercase;
  transition-timing-function: ease-out;
  transition-duration: 300ms;

  &:hover {
    background: var(--accent-brand-purple-500, #ad78fd);
  }
}
</style>
