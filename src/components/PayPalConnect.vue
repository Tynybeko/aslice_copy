<template>
  <div class="col-12 px-0" style="text-align: left;">
    <h3 class="unavailable-title text-capitalize" style="max-width: 453px;">
      This section is unavailable until you are verified.
    </h3>
    <p class="unavailable-text" style="max-width: 453px;">
      To protect producers who receive money, we have to fully verified your profile to access this section.  Don’t worry, any tracks of yours that are played are still counted and will be visible as soon as this process is complete.  (verification can take up to 30 days.)
    </p>
  
    <div class="row mx-n4 mb-4">
      <div class="px-4 pr-lg-2 col-12 col-lg-6">
        <!-- PAY PAL -->
        <div
        class="stripe-wrapper d-flex flex-column align-items-center justify-content-between"
        style="position: relative;"
      >
        <div class="d-flex justify-content-center my-auto">
          <img src="@/assets/images/paypal-logo.svg" alt="paypal" style="width: 64px" />
        </div>
        <div class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center">
          <button
            v-if="!user.paypalEmail"
            class="stripe-button bg-transparent"
            @click="getPayPalUrl"
          >
            CONNECT
          </button>
          <div
            v-if="user && user.paypalEmail"
            class="connected-mark"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0.5C2.9625 0.5 0.5 2.9625 0.5 6C0.5 9.0375
                    2.9625 11.5 6 11.5C9.0375 11.5 11.5 9.0375 11.5 6C11.5 2.9625 9.0375 0.5 6 0.5ZM8.384 5.07C8.4279
                    5.01982 8.46132 4.96137 8.48229 4.89808C8.50327 4.8348 8.51137 4.76796 8.50614 4.70149C8.5009 4.63503
                    8.48242 4.57028 8.45179 4.51106C8.42116 4.45185 8.37899 4.39935 8.32777 4.35667C8.27656 4.31399 8.21732
                    4.28198 8.15355 4.26253C8.08978 4.24308 8.02276 4.23658 7.95644 4.24341C7.89012 4.25025 7.82584 4.27027
                    7.76737 4.30232C7.70891 4.33436 7.65744 4.37777 7.616 4.43L5.466 7.0095L4.3535 5.8965C4.2592 5.80542 4.1329
                    5.75502 4.0018 5.75616C3.8707 5.7573 3.74529 5.80989 3.65259 5.90259C3.55989 5.99529 3.5073 6.1207 3.50616
                    6.2518C3.50502 6.3829 3.55542 6.5092 3.6465 6.6035L5.1465 8.1035C5.19563 8.1526 5.25445 8.19092 5.31921
                    8.21603C5.38397 8.24114 5.45325 8.25248 5.52263 8.24932C5.59202 8.24617 5.65999 8.2286 5.72221 8.19772C5.78442
                    8.16685 5.83953 8.12335 5.884 8.07L8.384 5.07Z"
                fill="#31BCB2"
              />
            </svg>
            Connected
          </div>
        </div>
      </div>
        <!-- END OF PAY PAL -->
      </div>
      <!-- WISE -->
      <div class="my-4 my-lg-0 px-4 pl-lg-2 col-12 col-lg-6">
        <div
        class="stripe-wrapper d-flex flex-column align-items-center justify-content-between"
        style="position: relative;"
      >
        <div class="d-flex justify-content-center my-auto">
          <img src="@/assets/images/wise-logo.svg" alt="wise" style="width: 100px" />
        </div>
        <div class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center">
          <button
            v-if="!user.wiseRecipientId"
            class="stripe-button bg-transparent"
            @click="showModalDynamicForms"
          >
            FILL OUT FORM
          </button>
          <div
            v-if="user && !!user.wiseRecipientId"
            class="connected-mark"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0.5C2.9625 0.5 0.5 2.9625 0.5 6C0.5 9.0375
                    2.9625 11.5 6 11.5C9.0375 11.5 11.5 9.0375 11.5 6C11.5 2.9625 9.0375 0.5 6 0.5ZM8.384 5.07C8.4279
                    5.01982 8.46132 4.96137 8.48229 4.89808C8.50327 4.8348 8.51137 4.76796 8.50614 4.70149C8.5009 4.63503
                    8.48242 4.57028 8.45179 4.51106C8.42116 4.45185 8.37899 4.39935 8.32777 4.35667C8.27656 4.31399 8.21732
                    4.28198 8.15355 4.26253C8.08978 4.24308 8.02276 4.23658 7.95644 4.24341C7.89012 4.25025 7.82584 4.27027
                    7.76737 4.30232C7.70891 4.33436 7.65744 4.37777 7.616 4.43L5.466 7.0095L4.3535 5.8965C4.2592 5.80542 4.1329
                    5.75502 4.0018 5.75616C3.8707 5.7573 3.74529 5.80989 3.65259 5.90259C3.55989 5.99529 3.5073 6.1207 3.50616
                    6.2518C3.50502 6.3829 3.55542 6.5092 3.6465 6.6035L5.1465 8.1035C5.19563 8.1526 5.25445 8.19092 5.31921
                    8.21603C5.38397 8.24114 5.45325 8.25248 5.52263 8.24932C5.59202 8.24617 5.65999 8.2286 5.72221 8.19772C5.78442
                    8.16685 5.83953 8.12335 5.884 8.07L8.384 5.07Z"
                fill="#31BCB2"
              />
            </svg>
            Connected
          </div>
        </div>
      </div>
      </div>
      <!-- END OF WISE -->
    </div>
    <p class="unavailable-text" style="max-width: 453px;">
      *As a DJ you can share earnings before verification is complete, however to protect producers who receive money,
      you have to be fully verified to access this section.  Don’t worry, any tracks of yours that are played are still
      counted and will be visible as soon as this process is complete.  (verification can take up to 30 days.)
    </p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import swal from "sweetalert2";
import api from "@/service/api";
import WiseDynamicForms from "./dynamic-forms/WiseDynamicForms";
import { showAsliceModal } from "../utils/aslice-modal";

export default {
  name: "PayPalConnect",
  computed: mapGetters("user", {
    user: "getUser",
  }),
  methods: {
    showModalDynamicForms() {
      this.$modal.show(
        WiseDynamicForms,
        {
          api: {
            url:
              "https://api.sandbox.transferwise.tech/v1/account-requirements",
            queryParams: {
              source: "USD",
              target: "USD",
              sourceAmount: 1
            }
          },
          drawingForms: [0, 1, 2, 3],
        },
        {
          height: "auto",
          scrollable: true,
          adaptive: true,
        },
        {
          'before-close': ($event) => {
            if ($event.params === "success")
              showAsliceModal.apply(this, [{
                text:
                  'You have successfully added Wise to your producer payment method. To edit your payment information, visit the "Payments" section under the Preferences tab.',
                title: 'Payment method confirmed',
                buttonText: 'Close'
              }])
          }
        }
      )
  },
    
    async getPayPalUrl() {
      swal.showLoading();
      const response = await api.getPayPalredirectingUrl();
      if (response && response.Data && response.Data.url) {
        localStorage.setItem("redirectStripeFromOverview", "paypal");
        swal.close();
        window.location.href = response.Data.url;
      } else {
        swal.fire({
          icon: "error",
          text: response.Error
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.stripe-wrapper {
  background: #f2f1ef;
  border-color: #aaa3b1;
  padding: 27px 44px;
}
.paypal-wrapper {
  height: 300px;
}
</style>
