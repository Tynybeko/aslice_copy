<template>
  <a class="facebook-share-button" href="#" @click="click">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 8.04554C15.5 3.90339 12.1421 0.545532 8.00001 0.545532C3.85786 0.545532 0.5 3.90339 0.5 8.04554C0.5 11.789 3.24264 14.8918 6.82813 15.4544V10.2135H4.92383V8.04554H6.82813V6.39319C6.82813 4.5135 7.94782 3.47522 9.66098 3.47522C10.4816 3.47522 11.3398 3.6217 11.3398 3.6217V5.46741H10.3941C9.46243 5.46741 9.17188 6.04554 9.17188 6.63866V8.04554H11.252L10.9194 10.2135H9.17187V15.4544C12.7574 14.8918 15.5 11.789 15.5 8.04554Z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: "FacebookShareButton",
  methods: {
    click() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
      window.open(url, "_blank", "scrollbars=no, width=600, height=480");
    }
  }
};
</script>

<style scoped lang="scss">
.facebook-share-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 120px;
  color: var(--Core-Grayscale-800, #91918f);
  border: 1px solid var(--Core-Grayscale-800, #91918f);
  background: var(--Core-Grayscale-100, #fefefd);

  &:hover {
    color: var(--Core-Brand-Purple-Core-Brand-600, #442671);
    border: 1px solid var(--Core-Brand-Purple-Core-Brand-600, #442671);
  }
}
</style>
