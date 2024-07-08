<template>
  <div class="bg">
    <b-container class="text-center text-white">
      <b-row>
        <b-col>
          <h1 class="mb-4 display-1 font-weight-bolder text-uppercase">502</h1>
          <h2 class="mb-4 display-4 font-weight-bolder text-uppercase">
            BAD GATEWAY
          </h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ServerErrorPage",
  methods: {
    goHome() {
      this.$router
        .push({
          name: "Main"
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 20vh;
  padding-bottom: 10vh;
}

h1,
h2 {
  font-family: "Europa-Regular";
  letter-spacing: 4px;
  color: #442671;
}
</style>
