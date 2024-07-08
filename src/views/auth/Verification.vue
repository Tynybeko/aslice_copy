<template>
  <the-container>
    <div
      class="verification d-flex flex-column justify-content-center align-items-center w-100 mh-100 px-3"
      :class="{ 'verification--promoter': isPromoter }"
    >
      <div class="centered-container">
        <svg
          @click="goMain"
          width="118"
          height="30"
          viewBox="0 0 118 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="margin-bottom: 80px; cursor: pointer;"
        >
          <path
            d="M12.8757 3.77878C5.775 3.77878 0 9.65765 0 16.8861C0 19.8881 0.995913 22.6596 2.67086 24.8716L3.86725 23.6537C2.48978 21.7577 1.67494 19.4141 1.67494 16.8861C1.67494 10.5991 6.69978 5.47726 12.8822 5.47726C19.0646 5.47726 24.0894 10.5925 24.0894 16.8861C24.0894 19.4207 23.2746 21.7577 21.8971 23.6537L23.0935 24.8716C24.7685 22.6596 25.7644 19.8881 25.7644 16.8861C25.7579 9.65765 19.9829 3.77878 12.8757 3.77878ZM18.9223 20.632C19.5949 19.5128 19.9506 18.2225 19.9506 16.8861C19.9506 12.9164 16.7753 9.68398 12.8757 9.68398C8.97615 9.68398 5.80733 12.9164 5.80733 16.8861C5.80733 18.2225 6.16949 19.5128 6.83558 20.632L8.06431 19.3812C7.68276 18.6175 7.47581 17.7617 7.47581 16.8861C7.47581 13.8512 9.90092 11.3891 12.8757 11.3891C15.8505 11.3891 18.2756 13.8578 18.2756 16.8861C18.2756 17.7617 18.0752 18.6175 17.6872 19.3812L18.9223 20.632ZM12.8757 15.6813L4.39107 24.3252L3.20761 25.5299C3.57623 25.9579 3.97072 26.3594 4.39107 26.7347C6.66097 28.7623 9.62931 30 12.8822 30C16.1351 30 19.1034 28.7689 21.3733 26.7347C21.7937 26.3594 22.1882 25.9579 22.5568 25.5299L21.3733 24.3252L12.8757 15.6813ZM12.8757 28.2949C10.0885 28.2949 7.53401 27.2548 5.56806 25.5299L12.8757 18.0908L20.1834 25.5299C18.2239 27.2548 15.6695 28.2949 12.8757 28.2949Z"
            fill="white"
          />
          <path
            d="M48.2952 7.90651H51.1536V25.7472H48.2952L48.0171 23.4365C46.5232 25.0494 44.4732 26.0632 42.1774 26.0632C37.1461 26.0632 33.1948 22.0145 33.1948 16.8269C33.1948 11.6392 37.1397 7.59052 42.1774 7.59052C44.4797 7.59052 46.5297 8.60434 48.0171 10.2502L48.2952 7.90651ZM48.0494 16.8269C48.0494 13.4101 45.5661 10.8163 42.268 10.8163C38.944 10.8163 36.4542 13.4101 36.4542 16.8269C36.4542 20.2436 38.9375 22.8374 42.268 22.8374C45.5661 22.8374 48.0494 20.2436 48.0494 16.8269Z"
            fill="white"
          />
          <path
            d="M53.0872 23.759L54.6716 21.0994C56.256 22.3041 58.2478 22.9954 59.9874 22.9954C62.4449 22.9954 63.6542 22.3634 63.6542 20.7505C63.6542 19.4207 62.5677 18.6636 60.0521 18.1896C55.7322 17.3338 53.902 15.6879 53.902 12.686C53.902 9.58525 56.45 7.59052 60.4595 7.59052C62.6065 7.59052 64.6566 8.13034 66.2733 9.11125L64.6566 11.7709C63.3179 10.9809 62.1409 10.6649 60.4595 10.6649C58.4095 10.6649 57.1032 11.422 57.1032 12.6926C57.1032 14.0224 57.8792 14.5293 60.8928 15.1942C64.9347 16.1093 66.8877 17.8802 66.8877 20.7637C66.8877 24.0816 64.1845 26.0764 59.9874 26.0764C57.433 26.0632 54.7621 25.181 53.0872 23.759Z"
            fill="white"
          />
          <path
            d="M69.151 20.8492V0H72.3845V20.4016C72.3845 22.0803 72.7596 23.0283 74.1888 23.0283C74.8096 23.0283 75.2752 22.8374 75.9284 22.4621L77.1118 25.181C76.0836 25.8459 74.9971 26.0698 73.9107 26.0698C70.8259 26.0632 69.151 24.0421 69.151 20.8492Z"
            fill="white"
          />
          <path
            d="M78.3794 2.84397C78.3794 1.63923 79.343 0.658325 80.5523 0.658325C81.7358 0.658325 82.7252 1.63923 82.7252 2.84397C82.7252 4.04871 81.7293 5.02962 80.5523 5.02962C79.343 5.02962 78.3794 4.04871 78.3794 2.84397ZM78.9097 25.7472V7.90652H82.1432V25.7472H78.9097Z"
            fill="white"
          />
          <path
            d="M84.6266 16.8269C84.6266 11.6392 88.7266 7.59052 93.8873 7.59052C96.3706 7.59052 98.4529 8.47926 100.037 10.0263L97.8644 12.3963C96.8103 11.4483 95.407 10.8163 93.8873 10.8163C90.5309 10.8163 87.8924 13.4101 87.8924 16.8269C87.8924 20.2436 90.5309 22.8374 93.8873 22.8374C95.407 22.8374 96.8103 22.2054 97.8644 21.2574L100.07 23.6274C98.4529 25.1481 96.3706 26.0632 93.8873 26.0632C88.7266 26.0632 84.6266 22.0145 84.6266 16.8269Z"
            fill="white"
          />
          <path
            d="M117.628 17.6827H103.892C104.235 20.8163 106.66 22.9361 110.016 22.9361C111.82 22.9361 113.56 22.2383 114.679 21.0994L116.729 23.4101C115.021 25.181 112.752 26.0698 109.951 26.0698C104.577 26.0698 100.691 22.2449 100.691 16.9585C100.691 11.7051 104.603 7.59711 109.609 7.59711C114.304 7.59711 117.686 11.0467 117.686 15.8196C117.692 17.1758 117.692 17.3996 117.628 17.6827ZM114.491 14.9309C114.459 12.5872 112.318 10.7242 109.583 10.7242C106.97 10.7242 104.862 12.4029 104.144 14.9309H114.491Z"
            fill="white"
          />
        </svg>

        <h1 v-if="isPromoter">
          Support The Sound Registration
        </h1>
        <h1 v-else>
          Registration and <br />
          Verification
        </h1>
        <p v-if="isPromoter" class="mt-4">
          Welcome to the Aslice Promoter/Venue/club portal, please follow the
          instructions to register your account. You will be able to set up more
          customized preferences once you complete this process. Account
          verification can take up to 30 days.
        </p>
        <p v-else class="mt-4">
          Welcome to Aslice, please follow the instructions to register your
          account. You will be able to set up more customized preferences once
          you complete this process. Don’t worry you will always be able to go
          back and change your settings once you’ve been verified.
        </p>
        <button
          class="btn-rounded dark-purple btn-rounded-gray__hover btn-border d-flex flex-row justify-content-center align-items-center"
          type="button"
          @click="saveAndGo"
          style="max-width: 148px !important;"
        >
          <span class="button-text">GET STARTED</span>
        </button>
      </div>
    </div>
  </the-container>
</template>

<script>
import TheContainer from "@/components/container/TheContainer";
import api from "@/service/api";
import { mapState, mapActions } from "vuex";
import swal from "sweetalert2";
export default {
  name: "Verification",
  components: {
    TheContainer
  },
  data() {
    return {
      info: {}
    };
  },
  computed: {
    ...mapState("user", ["isAuthorized"]),
    isPromoter() {
      return !!this.info["promoter"];
    }
  },
  methods: {
    ...mapActions("verifySteps", ["saveUserIdToState"]),
    goMain() {
      this.$router.push({ name: "Main" }).catch(() => {});
    },
    saveAndGo() {
      if (this.info.user_id) {
        this.saveUserIdToState(this.info.user_id);
        this.$router.push({ name: "AuthVerifyProcess" }).catch(() => {});
      }
    },
    async verifyEmail() {
      console.log("GETTING DATA");
      swal.showLoading();
      const payload = {
        user_id: this.info.user_id,
        access_token: this.info.access_token
      };
      const response = await api.emailVerify(payload);
      if (response.Error) {
        if (
          response.Error === "Token has expired" ||
          response.Error === "Token not found or already been used"
        ) {
          localStorage.removeItem("verificationStarted");
          localStorage.removeItem("currentUserId");
          localStorage.removeItem("token");
          this.$cookies.remove("user_id");
          this.$cookies.remove("access_token");
          this.$router.push({ name: "Main" }).catch(() => {});
          const backMain = swal.fire({
            icon: "error",
            text: this.isPromoter
              ? "Unfortunately, this token link has expired (valid 72 hours) or already used. Please contact support."
              : "Unfortunately, this token link has expired (valid 72 hours) or already used. Please start the process over by selecting DJ / Producer sign up.",
            confirmButtonText: "Back to Home page"
          });
          if (backMain.isConfirmed) {
            this.$router.push({ name: "Main" }).catch(() => {});
          }
          return;
        }
        const backMain = swal.fire({
          icon: "error",
          text: response.Error,
          confirmButtonText: "Back to Home page"
        });
        if (backMain.isConfirmed) {
          this.$router.push({ name: "Main" }).catch(() => {});
        }
        return;
      }
      localStorage.setItem("verificationStarted", 1);
      this.$store.commit("user/AUTH_SUСCESS", response.Data);
      swal.close();
    }
  },
  async created() {
    if (localStorage.getItem("verifyUserId")) {
      localStorage.removeItem("verifyUserId");
    }
    if (localStorage.getItem("redirectedFromProccess")) {
      localStorage.removeItem("redirectedFromProccess");
    }
    if (localStorage.getItem("redirectStripeFromSettings")) {
      localStorage.removeItem("redirectStripeFromSettings");
    }
    if (localStorage.getItem("redirectStripeFromOverview")) {
      localStorage.removeItem("redirectStripeFromOverview");
    }
    this.info = this.$route.query;
    console.log("SET INFO: ", this.info);
    if (localStorage.getItem("regForm")) {
      localStorage.removeItem("regForm");
    }
    if (!localStorage.getItem("verificationStarted")) {
      await this.verifyEmail();
    } else {
      this.$router.push({ name: "AuthVerifyProcess" }).catch(() => {});
    }
  }
};
</script>
<style scoped lang="scss">
.button-text {
  font-size: 14px !important;
  font-family: "Graphik-Regular-Web";
  letter-spacing: 0.13em;
  line-height: 20px;
}
</style>
