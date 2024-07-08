<template>
  <div class="success">
    <div class="success-container">
      <span class="success-container__title">SUCCESS</span>
      <span class="success-container__subtitle"
        >You have successfully registered.</span
      >
      <div @click="goHome" class="success-container__link">Go to main page</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      console.log("GO TO HOME in success");
      this.$router
        .push({
          name: "Main"
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped lang="scss">
.container__link {
  cursor: pointer;
}
.success {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 468px;
    width: 434px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-top: 136px;
    margin-bottom: 156px;

    &__title {
      font-weight: 800;
      font-size: 36px;
      line-height: 44px;
      color: #000000;
      font-family: "Montserrat-ExtraBold";
      margin-bottom: 35px;
    }
    &__subtitle {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 35px;
    }
    &__link {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #5913ee;
      text-decoration: none;
    }
  }
}
</style>
