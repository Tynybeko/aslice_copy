<template>
  <div class="online-dashboard-content-view-wrapper">
    <router-view class="online-dashboard-content-view"></router-view>
    <h1 class="on-mobile-are-not-available">
      There is too much information on this page to display correctly. Try
      resizing or please open the page from your laptop/desktop.
    </h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("user", ["data", "isAuthorized"])
  },
  mounted() {
    if (this.data == null) {
      this.$router.push({ name: "Main" }).catch(() => {});
    }
  },
  async created() {
    if (localStorage.getItem("redirectedFromProccess")) {
      localStorage.removeItem("redirectedFromProccess");
    }
    if (localStorage.getItem("redirectStripeFromSettings")) {
      localStorage.removeItem("redirectStripeFromSettings");
    }
    if (localStorage.getItem("redirectStripeFromOverview")) {
      localStorage.removeItem("redirectStripeFromOverview");
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep #dashboard-content-page {
  padding-top: 0;
  padding-bottom: 0;
  background: #f2f1ef;
  margin-left: 0;
  min-height: inherit;
  width: 100%;
}

@media screen and (min-width: 992px) {
  ::v-deep #dashboard-content-page {
    min-height: calc(100vh - 60px);
    width: calc(100% - 70px);
    margin-left: 70px;
  }
}
</style>

<style>
.on-mobile-are-not-available {
  padding-top: 60px;
  padding-left: 15px;
  display: none;
  color: #fff;
  font-family: "Europa-Regular";
}

.online-dashboard-content-view-wrapper {
  overflow-x: hidden;
}

.online-dashboard-content-view-wrapper {
  display: flex;
  flex: 1 0 auto;
  align-content: stretch;
  width: 100%;
}
</style>
