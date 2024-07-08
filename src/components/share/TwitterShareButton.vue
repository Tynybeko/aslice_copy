<template>
  <a class="twitter-share-button" href="#" @click="click">
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.14163 6.06101L11.6089 0.868164H10.5503L6.67137 5.37703L3.57328 0.868164H0L4.68492 7.68638L0 13.1319H1.05866L5.15491 8.37035L8.42672 13.1319H12L7.14137 6.06101H7.14163ZM5.69165 7.74645L5.21697 7.06751L1.44011 1.66511H3.06615L6.11412 6.02501L6.5888 6.70395L10.5508 12.3712H8.92476L5.69165 7.74671V7.74645Z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: "TwitterShareButton",
  methods: {
    click() {
      const url = `https://twitter.com/intent/tweet/?url=${window.location.href}`;
      window.open(url, "_blank", "scrollbars=no, width=600, height=480");
    }
  }
};
</script>

<style scoped lang="scss">
.twitter-share-button {
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
