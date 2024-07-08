<template>
  <a class="linkedin-share-button" href="#" @click="click">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path
        d="M14.375 0.53125H1.625C1 0.53125 0.5 1.03125 0.5 1.59375V14.4062C0.5 14.9688 1 15.4688 1.625 15.4688H14.375C15 15.4688 15.5 14.9688 15.5 14.4062V1.59375C15.5 1.03125 15 0.53125 14.375 0.53125ZM4.9375 13.2812H2.75V6.15625H4.9375V13.2812ZM3.875 5.15625C3.1875 5.15625 2.5625 4.59375 2.5625 3.84375C2.5625 3.09375 3.125 2.53125 3.875 2.53125C4.5625 2.53125 5.1875 3.09375 5.1875 3.84375C5.1875 4.59375 4.5625 5.15625 3.875 5.15625ZM13.3125 13.2188H11.125V9.71875C11.125 8.90625 11.125 7.78125 9.9375 7.78125C8.75 7.78125 8.625 8.71875 8.625 9.59375V13.1562H6.4375V6.15625H8.5V7.09375H8.5625C8.875 6.53125 9.625 5.90625 10.6875 5.90625C12.9375 5.90625 13.375 7.40625 13.375 9.34375V13.2188H13.3125Z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: "LinkedInShareButton",
  methods: {
    click() {
      const url = `https://www.linkedin.com/sharing/share-offsite?url=${window.location.href}`;
      window.open(url, "_blank", "scrollbars=no, width=600, height=480");
    }
  }
};
</script>

<style scoped lang="scss">
.linkedin-share-button {
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
