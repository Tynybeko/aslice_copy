<template>
  <div class="online-dashboard-wrapper">
    <Navbar />
    <EndYearBonus v-if="showBonusLine && $device.mobile" />
    <left-side-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import LeftSideMenu from "../components/LeftSideMenu.vue";
import EndYearBonus from "@/components/EndYearBonus.vue";
import { mapGetters } from "vuex";

export default {
  name: "OnlineDashboardLayout",
  components: {
    EndYearBonus,
    Navbar,
    LeftSideMenu
  },
  computed: {
    ...mapGetters("djdashboard", ["showBonusLine"])
  }
};
</script>

<style lang="scss" scoped>
.online-dashboard-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
