<template>
  <button
    class="btn-rounded btn-rounded__hover btn-border px-4 d-flex flex-row justify-content-center align-items-center"
    type="button"
    @click="toggle()"
  >
    {{ title }}
    <img
      src="@/assets/images/login/google.png"
      alt="Google Image"
      class="ml-2"
    />
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Login in with"
    }
  },
  methods: {
    toggle() {
      this.$emit("clicked");
    }
  }
};
</script>
