<template>
  <div class="container-fluid" style="background: #442671; height: 100vh;">
    <div class="row">
      <div
        v-if="!failed"
        class="col-6"
        style="margin: 0 auto; text-align: center; padding-top: 50px;"
      >
        <h1
          v-if="!changeText"
          style="color: #fff; margin-top: 50px; margin-bottom: 50px;"
        >
          Verifying your account
        </h1>
        <div v-if="!changeText" class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          v-if="!changeText"
          style="color: #fff; margin-top: 50px; margin-bottom: 50px;"
        >
          You will be redirected to the verification process
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "@/service/api";
import q from "q";
export default {
  data() {
    return {
      changeText: false,
      failed: false,
      isQueryEmpty: false,
      backTo: ""
    };
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"])
  },
  methods: {
    ...mapActions("user", [
      "changePayPalStatus",
      "confirmStripeData",
      "confirmPayPalData"
    ]),
    async sendVerification(userId) {
      if (this.$router.currentRoute.name === "identify-status") {
        if (localStorage.getItem("redirectStripeFromSettings")) {
          console.log("BACK TO PAYMENTS IN Identification.vue")
          this.backTo = "Payments";
          console.log(this.backTo)
        }
        if (localStorage.getItem("redirectStripeFromOverview")) {
          console.log("BACK TO PAYMENTS IN Identification.vue")
          this.backTo = "Payments";
          console.log(this.backTo)
        }
        if (localStorage.getItem("redirectedFromProccess")) {
          this.backTo = "AuthVerifyProcess";
          console.log(this.backTo)
        }
        if (
          !localStorage.getItem("redirectStripeFromSettings") &&
          !localStorage.getItem("redirectStripeFromOverview") &&
          !localStorage.getItem("redirectedFromProccess")
        ) {
          console.log("BACK TO MAIN IN Identification.vue");
          this.backTo = "Main";
          console.log(this.backTo)
        }
        this.isQueryEmpty = Object.keys(this.$route.query).length === 0;
        console.log("80")
        if (
          this.$route.query.error &&
          this.$route.query.error === "access_denied"
        ) {
          if (localStorage.getItem("redirectedFromProccess")) {
            localStorage.removeItem("redirectedFromProccess");
            this.$store.commit("user/SET_CURRENT_TAB_COMPONENT", 3);
          } else {
            // localStorage.removeItem("redirectStripeFromSettings");
            localStorage.removeItem("redirectStripeFromOverview");
          }
          console.log('92')
          this.$router.push({ name: this.backTo }).catch(() => {});
          console.log('94')
        }
        if (this.isQueryEmpty) {
          if (localStorage.getItem("redirectedFromProccess")) {
            localStorage.removeItem("redirectedFromProccess");
            this.$store.commit("user/SET_CURRENT_TAB_COMPONENT", 3);
          } else {
            // localStorage.removeItem("redirectStripeFromSettings");
            localStorage.removeItem("redirectStripeFromOverview");
          }
          console.log('103')
          this.$router.push({ name: this.backTo }).catch(() => {});
          console.log('106')
        }
        if (this.$route.query.code) {
          var code = this.$route.query.code;
          const response = await api.getPayPalStatus(userId, code);
          if (!response.Error) {
            if (
              response.Data &&
              response.Data.paypalEmail &&
              response.Data.paypalEmail !== null
            ) {
              this.changePayPalStatus(response.Data.paypalEmail);
              this.changeText = true;
              return;
            }
          } else console.log(response.Error, "error");
        }
        console.log('123')
        if (this.$route.query.session_id) {
          var sessionId = this.$route.query.session_id;
          console.log('126')
          const response = await api.postStripePayMethodId(userId, sessionId);
          console.log('128')
          if (!response.Error) {
            if (
              response.Data &&
              response.Data.stripePaymentMethodId &&
              response.Data.stripePaymentMethodId !== null
            ) {
              console.log('135')
              this.confirmStripeData(response.Data);
              this.changeText = true;
              return;
            }
          } else console.log(response.Error, "error");
        }

        if (this.$route.query.approval_token_id) {
          const response = await api.bindPayPalPaymentMethod(userId, this.$route.query.approval_token_id);
          if (!response.Error) {
            this.confirmPayPalData(response.Data);
            this.changeText = true;
            return;
          } else {
            console.error(response.Error);
          }
        }
      }
      console.log('140')
      q.delay(3000).then(() => this.sendVerification(userId));
    }
  },
  mounted() {
    setTimeout(() => {
      this.sendVerification(this.data.id);
    }, 2500);
  }
};
</script>

<style scoped>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
.rounded-button {
  background: #fff;
  padding: 15px 20px;
  text-decoration: none !important;
  color: #442671 !important;
}
.rounded-button:hover {
  font-weight: bold;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
