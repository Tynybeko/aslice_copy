<template>
  <button class="small-arrow-button" v-bind="$attrs" v-on="$listeners">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="currentColor"
    >
      <path
        d="M0.646445 3.64645C0.451183 3.84171 0.451183 4.15829 0.646445 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646445 3.64645ZM16 3.5L0.999999 3.5L0.999999 4.5L16 4.5L16 3.5Z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "SmallArrowButton"
};
</script>

<style scoped lang="scss">
.small-arrow-button {
  width: 55px;
  height: 30px;
  padding: 0;
  border-radius: 50px;
  border: 1px solid var(--Grays-MD-Gray, #aaa3b1);
  color: #aaa3b1;
  background: none;
  line-height: 0;

  &:hover {
    color: #442671;
    border: 1px solid var(--Purples-Lt-Purple, #442671);
  }
}
</style>
