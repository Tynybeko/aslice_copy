<template>
  <div
    class="success-message d-flex flex-column justify-content-center align-items-center w-100 vh-100 px-3"
  >
    <h1 class="text-uppercase text-center text-md-left">
      Thank you for registering
    </h1>
    <h3
      v-if="role !== 'fan'"
      class="text-center text-md-left"
      style="width: 60%; text-align: center!important;"
    >
      A verification email has been sent to {{ email }} <br />
      (If you don't see an email, please check your spam folder).
    </h3>
    <h3
      v-else
      class="text-center text-md-left"
      style="width: 60%; text-align: center!important;"
    >
      Thank you for entering your contact info. Aslice will reach out to you
      when the fan section registration opens to the public.
    </h3>
    <buttons-rounded
      class="mx-auto mt-4 d-block"
      title="Home"
      @clicked="$router.push({ name: 'Main' })"
    />
  </div>
</template>
<script>
import ButtonsRounded from "@/components/global/buttons/ButtonsRounded";
export default {
  name: "SuccessMessage",
  components: {
    ButtonsRounded
  },
  computed: {
    email() {
      return this.$route.params.email
        ? this.$route.params.email
        : "that address";
    },
    role() {
      return this.$route.params.role ? this.$route.params.role : "fan";
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-family: "Gilroy-Regular";
  font-size: 22px;
  color: black;
}
h3 {
  font-family: "Roboto-Mono";
  color: black;
  font-size: 18px;
}
</style>
