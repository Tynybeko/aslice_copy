<template>
  <div class="container-fluid" style="background: #442671; height: 100vh;">
    <div class="row">
      <div
        class="col-6"
        style="margin: 0 auto; text-align: center; padding-top: 50px;"
      >
        <h1
          v-if="!changeText"
          style="color: #fff; margin-top: 50px; margin-bottom: 50px;"
        >
          {{ errorText }}
        </h1>
        <div v-if="unverified">
          <button
            class="stripe-button retry-button"
            @click="sendStriperVerificationTokenToReg"
          >
            <span v-if="unverified" class="margin-top-05 d-inline-block retry"
              >Retry</span
            >
          </button>
        </div>
        <div
          v-if="
            !changeText &&
              !unverified &&
              errorText !== 'Forbidden resource' &&
              !stripeIdentityAndPayments
          "
          class="lds-roller"
        >
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
          v-if="changeText"
          style="color: #fff; margin-top: 50px; margin-bottom: 50px;"
        >
          You will be redirected to the verification process
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-6" style="margin: 0 auto; text-align: center;">
        <stripe-element-card
          v-if="stripeIdentityAndPayments"
          ref="elementRef"
          :pk="pulishableKey"
          :hidePostalCode="true"
          @token="tokenCreated"
        >
        </stripe-element-card>
        <button
          class="stripe-send-token"
          v-if="stripeIdentityAndPayments"
          @click="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "@/service/api";
import swal from "sweetalert2";
import q from "q";
import { StripeElementCard } from "@vue-stripe/vue-stripe";
// import { loadStripe } from "@stripe/stripe-js";
export default {
  components: {
    StripeElementCard
  },
  data() {
    return {
      pulishableKey: process.env.VUE_APP_STRIPE_KEY,
      stripeIdentityAndPayments: false,
      changeText: false,
      unverified: false,
      errorText: "Verifying your account"
    };
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"])
  },
  methods: {
    ...mapActions("user", ["changeVerificationStatus"]),
    // async createToken() {
    //   const stripePromise = loadStripe(this.pulishableKey);
    //   const stripe = await stripePromise;
    //   const newData = {
    //     currency: "USD"
    //   };
    //   stripe
    //     .createToken(this.$refs.elementRef, newData)
    //     .then(async function(result) {
    //       if (result.token) {
    //         const response = await api.bindStripePayoutMethod(
    //           this.data.id,
    //           result.token.id
    //         );
    //         if (response.Error || response.Data.Error) {
    //           swal.fire({
    //             icon: "error",
    //             text: response.Error
    //           });
    //           return;
    //         }
    //         await this.getStripeVerificationStatus();
    //       }
    //     });
    // },
    async tokenCreated(token) {
      const response = await api.bindStripePayoutMethod(this.data.id, token.id);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      await this.getStripeVerificationStatus();
    },
    submit() {
      this.$refs.elementRef.submit();
    },
    async sendStriperVerificationTokenToReg() {
      const response = await api.StripeVerify();
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      if (response.Data) {
        localStorage.setItem("redirectedFromProccess", "stripe");
        window.location.href = response.Data.url;
      }
    },
    async getStripeVerificationStatus() {
      swal.showLoading();
      const response = await api.checkStripeAccountStatus(this.data.id);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      if (response.Data) {
        swal.close();
        if (response.Data.accountDataRequired == false) {
          this.stripeIdentityAndPayments = true;
        }
        if (response.Data.payoutMethodRequired == true) {
          return;
        }
        if (
          response.Data.accountDataRequired == false &&
          response.Data.payoutMethodRequired == false &&
          localStorage.getItem("redirectStripeFromSettings")
        ) {
          this.$router.push({ name: "Payments" }).catch(() => {
            localStorage.removeItem("redirectStripeFromSettings");
          });
        }
        if (
          response.Data.accountDataRequired == false &&
          response.Data.payoutMethodRequired == false &&
          localStorage.getItem("redirectStripeFromOverview")
        ) {
          localStorage.removeItem("redirectStripeFromOverview");
          this.$router.push({ name: "Overview" }).catch(() => {});
        }
        if (
          response.Data.accountDataRequired == false &&
          response.Data.payoutMethodRequired == false &&
          localStorage.getItem("redirectedFromProccess")
        ) {
          this.$router.push({ name: "AuthVerifyProcess" }).catch(() => {});
        }
      }
    },
    async sendStriperVerificationToken(userId) {
      swal.showLoading();
      if (this.$router.currentRoute.name === "verify-status") {
        if (
          localStorage.getItem("redirectStripeFromSettings") ||
          localStorage.getItem("redirectStripeFromOverview")
        ) {
          await this.getStripeVerificationStatus();
          return;
        } else {
          const response = await api.getVerificationStatus(userId);
          if (!response.Error) {
            swal.close();
            if (response.Data.verificationStatus === "verified") {
              await this.changeVerificationStatus(
                response.Data.verificationStatus
              );
              this.changeText = true;
              return;
            }
            if (
              response.Data.verificationStatus === "requires_input" &&
              (response.Data.lastErrorCode || response.Data.lastErrorReason)
            ) {
              this.errorText =
                "Stripe was unable to verify you. Please try again.";
              this.unverified = true;
              return;
            }
          } else {
            this.errorText = response.Error;
            swal.fire({
              icon: "error",
              text: response.Error
            });
            return;
          }
        }
      }

      q.delay(3000).then(() => this.sendStriperVerificationToken(userId));
    }
  },
  mounted() {
    setTimeout(() => {
      this.sendStriperVerificationToken(this.data.id);
    }, 2500);
  }
};
</script>

<style>
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
.stripe-button {
  padding: 0 12px;
  max-width: 280px;
  background: #fff;
  border: none;
  height: 41px;
  line-height: 38px;
  border-radius: 20px;
  font-family: "Europa-Regular";
  color: rgb(68, 38, 113);
}
.stripe-button span {
  margin: 0;
}
.stripe-button:hover {
  border: 1px solid #fff !important;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.stripe-send-token {
  border: none;
  height: 41px;
  padding: 0 25px;
  font-size: 16px;
  font-family: "Europa-Regular";
  color: rgb(68, 38, 113);
  background: #fff;
  border-radius: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
}
.retry {
  text-transform: uppercase;
}
.retry-button {
  width: 120px !important;
}
</style>
