<template>
  <the-container>
    <b-row class="verify-process">
      <div class="sidebar-wrapper d-none d-md-flex px-0">
        <the-sidebar />
      </div>
      <b-col cols="12">
        <b-row no-gutters class="verify-process__navbar">
          <b-col
            class="d-flex justify-content-center align-items-center step-counter-wrapper"
          >
            <h3 class="step-counter-wrapper__header mb-0">
              <img
                v-if="currentTabComponent === 6"
                src="@/assets/images/verification/tick.png"
                alt="Tick"
              />
              <span class="step-counter" v-else
                >{{ currentTabComponent }}/5</span
              >
            </h3>
          </b-col>
          <b-col class="verify-form-header">
            <h3 class="verify-form-header__title mb-0">
              <span>{{ title }}</span>
              <span v-if="currentTabComponent <= 4" class="page-header-article">
                Registration details can be edited later in user preferences.
              </span>
            </h3>
          </b-col>
        </b-row>
        <b-row no-gutters class="verify-process__content">
          <b-col cols="12">
            <verification-main></verification-main>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </the-container>
</template>

<script>
import TheContainer from "@/components/container/TheContainer";
import VerificationMain from "@/components/verification/VerificationMain";
import TheSidebar from "@/components/container/TheSidebar";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    TheContainer,
    VerificationMain,
    TheSidebar
  },
  created() {
    if (this.data.registrationComplete) {
      this.$router.push({ name: "Main", replace: true });
    }
  },
  computed: {
    ...mapGetters({
      currentTabComponent: "user/getCurrentTabComponent"
    }),
    ...mapState("user", ["data"]),
    ...mapGetters("user", ["isPromoter"]),
    title() {
      if (this.isPromoter) {
        switch (this.currentTabComponent) {
          case 3:
            return "Questions";
          case 4:
            return "Additional Info";
          case 5:
            return "Terms & Conditions";
          case 6:
            return "Welcome";
          default:
            return "Registration and Verification";
        }
      } else {
        switch (this.currentTabComponent) {
          case 6:
            return "You are now registered";
          default:
            return "Registration and Verification";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.verify-process {
  &__content {
    min-height: calc(100vh - 78px);
  }
}
.verify-process__navbar {
  margin-left: 135px;
}
.align-items-center.step-counter-wrapper {
  max-width: 99px;
}
@media screen and (max-width: 768px) {
  .verify-process__navbar {
    margin-left: 0;
  }
}
@media screen and (max-width: 768px) {
  .align-items-center.step-counter-wrapper {
    max-width: 65px;
  }
  .page-header-article {
    margin-right: 40px;
  }
}
</style>
