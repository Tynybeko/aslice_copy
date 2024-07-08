<template>
  <div class="col-8 px-4 settings-content">
    <div class="row mx-0">
      <div class="col-12 px-0">
        <h3 class="payment-title mb-4 mt-4">Sending Payments (DJ)</h3>
        <p class="settings-text gray-color mb-4" style="max-width: 453px">
          Please enter your currency of choice and connect your payment information below.
        </p>
        <p class="text-currency mt-4" style="margin-bottom: 10px;">
          Currency 
        </p>
        <p class="unavailable-text gray-color mb-4 mt-0"  style="max-width:384px">
          What currency do you prefer as a default? (Once chosen the currency is locked)
        </p>
        <v-select
          class="col-6 px-0"
          style="margin-bottom: 15px; margin-top: 10px;max-width:335px"
          label="name"
          :clearable="false"
          :options="listsCurrency"
          v-model="userCopy.preferredCurrency"
          @option:selected="UPDATE_USER_COPY({ preferredCurrency: userCopy.preferredCurrency})"
          :disabled="user.stripePaymentMethodId === null || data.preferredCurrency === null ? false : true"
        >
          <template #open-indicator="{ attributes }">
            <img
              v-bind="attributes"
              src="@/assets/images/arrow-playlist-optionsOne.svg"
            />
          </template>
        </v-select>
        <h3 class="payment-title mb-4 mt-4">Payment Options</h3>
        <p class="settings-text gray-color mb-0" style="max-width: 384px;">
          Aslice offers multiple payment options. To streamline uploading of playlists to “1 click”, we suggest you connect a stored payment option.
          <br><br>
          Aslice additionally offers an Invoice payment system that requires payment input each time you submit a playlist. This option may unlock additional payment options, however requires more user input... 
        </p>
        <b-col class="mt-4 mb-4 col-lg-6 col-12 p-0">
          <b-form-radio
            class="d-flex justify-content-start mt-4 pl-4 align-items-center"
            style="padding-left: 2rem!important;"
            v-model="userCopy.offlinePayments"
            @change="UPDATE_USER_COPY({ offlinePayments: userCopy.offlinePayments})"
            :value="defaultPayoutOptions[2]"
          >
            One-click payment option
          </b-form-radio>
          <b-form-radio
            class="d-flex justify-content-start mt-4 pl-4 align-items-center"
            style="padding-left: 2rem!important;"
            v-model="userCopy.offlinePayments"
            @change="UPDATE_USER_COPY({ offlinePayments: userCopy.offlinePayments, defaultPaymentMethod: 'Stripe' })"
            :value="defaultPayoutOptions[3]"
          >
            Invoiced payment option
          </b-form-radio>
        </b-col>
        <div class="row mx-0">
          <div
            class="stripe-wrapper d-flex flex-column align-items-center justify-content-between col"
            style="max-width: 334px;"
          >
            <div class="d-flex justify-content-center my-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="78" height="32" viewBox="0 0 78 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M77.4615 16.5281C77.4615 11.1205 74.8119 6.85352 69.7478 6.85352C64.6624 6.85352 61.5854 11.1205 61.5854 16.4859C61.5854 22.8441 65.2179 26.0549 70.4316 26.0549C72.9743 26.0549 74.8974 25.4845 76.3504 24.6818V20.4571C74.8974 21.1753 73.2307 21.6189 71.1154 21.6189C69.0427 21.6189 67.2051 20.9007 66.9701 18.4081H77.4188C77.4188 18.1335 77.4615 17.0351 77.4615 16.5281ZM66.906 14.5214C66.906 12.1344 68.3803 11.1416 69.7265 11.1416C71.0299 11.1416 72.4188 12.1344 72.4188 14.5214H66.906Z" fill="#75707B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3376 6.85352C51.2435 6.85352 49.8974 7.8252 49.1495 8.50116L48.8718 7.19149H44.1709V31.8216L49.5128 30.7021L49.5341 24.7241C50.3034 25.2733 51.4359 26.0549 53.3162 26.0549C57.141 26.0549 60.6239 23.0131 60.6239 16.3169C60.6025 10.191 57.0769 6.85352 53.3376 6.85352ZM52.0555 21.4077C50.7948 21.4077 50.047 20.9641 49.5341 20.4149L49.5128 12.578C50.0683 11.9654 50.8376 11.543 52.0555 11.543C54 11.543 55.3461 13.6976 55.3461 16.4647C55.3461 19.2953 54.0213 21.4077 52.0555 21.4077Z" fill="#75707B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8208 5.60748L42.1841 4.4668V0.178711L36.8208 1.29826V5.60748Z" fill="#75707B"/>
                <path d="M42.1841 7.21289H36.8208V25.696H42.1841V7.21289Z" fill="#75707B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0727 8.77563L30.7309 7.21249H26.1155V25.6956H31.4574V13.1693C32.718 11.5428 34.8548 11.8386 35.5172 12.0709V7.21249C34.8334 6.959 32.3334 6.49428 31.0727 8.77563Z" fill="#75707B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3891 2.62891L15.1754 3.72733L15.1541 20.6473C15.1541 23.7736 17.5258 26.0761 20.6882 26.0761C22.4404 26.0761 23.7224 25.7592 24.4276 25.379V21.0909C23.7438 21.3655 20.3677 22.3372 20.3677 19.2109V11.7121H24.4276V7.21273H20.3677L20.3891 2.62891Z" fill="#75707B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94456 12.578C5.94456 11.7542 6.62832 11.4373 7.7608 11.4373C9.38473 11.4373 11.436 11.9232 13.0599 12.7892V7.8252C11.2864 7.12812 9.5343 6.85352 7.7608 6.85352C3.42319 6.85352 0.538574 9.09262 0.538574 12.8315C0.538574 18.6616 8.65823 17.7322 8.65823 20.2459C8.65823 21.2176 7.80353 21.5344 6.60695 21.5344C4.83345 21.5344 2.56849 20.8162 0.773617 19.8445V24.8719C2.7608 25.7169 4.76934 26.076 6.60695 26.076C11.0514 26.076 14.1069 23.9003 14.1069 20.1191C14.0856 13.8243 5.94456 14.9439 5.94456 12.578Z" fill="#75707B"/>
              </svg>
            </div>
            <div
              class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center p-0"
            >
              <p>Stripe offers payment options based on the currency you chose above.</p>
              <button
                v-if="user.stripePaymentMethodId === null"
                :disabled="data.preferredCurrency === null"
                class="stripe-button"
                :class="{ des: data.preferredCurrency === null }"
                @click="getStripeUrl"
              >
                <span class="margin-top-05 d-inline-block">
                  Connect
                </span>
              </button>
              <template v-else>
                <button
                  class="stripe-button"
                  @click="getStripeUrl"
                >
                  <span class="margin-top-05 d-inline-block">Edit</span>
                </button>

                <div class="connected-mark mt-4 mb-3">
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5.5" cy="5" r="5" fill="#29C9BE" />
                  </svg>
                  Connected
                </div>
                <b-form-radio
                  class="d-flex justify-content-center"
                  :class="isPaymentMethodDisabled ? 'opacity' : '' "
                  :disabled="isPaymentMethodDisabled"
                  v-model="userCopy.defaultPaymentMethod"
                  @change="UPDATE_USER_COPY({ defaultPaymentMethod: userCopy.defaultPaymentMethod})"
                  :value="defaultPayoutOptions[4]"
                >
                  Default Payment Method
                </b-form-radio>
              </template>
            </div>
          </div>
          <div
            class="stripe-wrapper d-flex flex-column align-items-center justify-content-between col ml-4"
            style="max-width: 334px;"
          >
            <div class="d-flex justify-content-center my-0">
              <img
                src="@/assets/images/paypal-logo.svg"
                alt="paypal"
                style="width: 64px"
              />
            </div>
            <div
              class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center p-0"
            >
              <p>Paypal offers payment options based on your saved selection within their platform.</p>
              <button
                v-if="user.paypalVaultId === null"
                :disabled="data.preferredCurrency === null"
                class="stripe-button"
                :class="{ des: data.preferredCurrency === null }"
                @click="getPayPalPaymentMethodUrl"
              >
                <span class="margin-top-05 d-inline-block">
                  Connect
                </span>
              </button>
              <template v-else>
                <button
                  class="stripe-button"
                  @click="getPayPalPaymentMethodUrl"
                >
                  <span class="margin-top-05 d-inline-block">Edit</span>
                </button>

                <div class="connected-mark mt-4 mb-3">
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5.5" cy="5" r="5" fill="#29C9BE" />
                  </svg>
                  Connected
                </div>
                <b-form-radio
                  class="d-flex justify-content-center"
                  :class="isPaymentMethodDisabled ? 'opacity' : ''"
                  :disabled="isPaymentMethodDisabled"
                  v-model="userCopy.defaultPaymentMethod"
                  @change="UPDATE_USER_COPY({ defaultPaymentMethod: userCopy.defaultPaymentMethod})"
                  :value="defaultPayoutOptions[5]"
                >
                  Default Payment Method
                </b-form-radio>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr style="background:#AAA3B1; margin: 20px 0" />
    <div id="payment-section" class="row mx-0 mt-4" style="">
      <div class="col-12 px-0">
        <h3 class="payment-title mb-4">Receiving Payouts (Producer)</h3>
        <p class="settings-text gray-color mb-4" style="max-width: 453px;">
          Please connect at least one or both of the following options to streamline the process of receiving automatic payouts. If Paypal is unavailable in your territory or if you prefer bank transfers, please use <a href="https://wise.com" style="text-decoration: underline; color: inherit;" target="_blank">Wise</a> to enter your details. Payments are made in USD.(Set default and save preferences) 
        </p>
        
        <div class="row mb-4 mx-0">
          <!-- PAY PAL -->
          <div class=" col px-0" style="max-width: 334px;">
            <div
              class="stripe-wrapper d-flex flex-column align-items-center justify-content-between"
              style="position: relative;"
            >
              <div class="d-flex justify-content-center my-auto">
                <img src="@/assets/images/paypal-logo.svg" alt="paypal"  style="width: 64px" />
              </div>
              <div class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center">
                <button
                  v-if="!user.paypalEmail"
                  class="stripe-button"
                  @click="getPayPalUrl"
                >
                  CONNECT
                </button>
               
                <button
                  v-else
                  class="stripe-button mt-3"
                  @click="getPayPalUrl"
                >
                  EDIT
                </button>
                <div
                  v-if="user && user.paypalEmail"
                  class="connected-mark mt-4"
                >
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5" r="5" fill="#29C9BE"/>
                  </svg>
                  Connected
                </div>
                <b-form-radio
                  v-if="user.paypalEmail"
                  class="d-flex justify-content-center mt-4"
                  v-model="userCopy.defaultPayoutMethod"
                  @change="UPDATE_USER_COPY({ defaultPayoutMethod: userCopy.defaultPayoutMethod})"
                  :value="defaultPayoutOptions[1]"
                >
                Default Payout Method
                </b-form-radio>
                
              </div>
            </div>
          </div>
          <!-- END OF PAY PAL -->
  
          <!-- WISE -->
          <div class="ml-4 my-lg-0 col px-0" style="max-width: 334px;">
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
                  class="stripe-button"
                  @click="showModalDynamicForms"
                >
                  FILL OUT FORM
                </button>
                <button
                  v-else
                  class="stripe-button  mt-3"
                  @click="showModalDynamicForms"
                >
                  EDIT
                </button>
                <div
                  v-if="user && !!user.wiseRecipientId"
                  class="connected-mark mt-4"
                >
                  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5" r="5" fill="#29C9BE"/>
                  </svg>
                  Connected
                </div>
                <b-form-radio
                  v-if="user.wiseRecipientId"
                  class="d-flex justify-content-center mt-4"
                  v-model="userCopy.defaultPayoutMethod"
                  @change="UPDATE_USER_COPY({ defaultPayoutMethod: userCopy.defaultPayoutMethod})"
                  :value="defaultPayoutOptions[0]"
                >
                Default Payout Method
                </b-form-radio>
                
              </div>
            </div>
          </div>
          <!-- END OF WISE -->
        </div>
      </div>
    </div>
    <NotificationModal id="payment-reminder" title="Reminder">
      When changing any financial options, please remember to check the box for
      “default payment/payout method” and save your preferences before
      navigating to another page.
    </NotificationModal>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { loadStripe } from "@stripe/stripe-js";
import swal from "sweetalert2";
import api from "@/service/api";
import DynamicForms from "../../../components/dynamic-forms/WiseDynamicForms";
import NotificationModal from "@/components/modals/NotificationModal.vue";

const clientId = process.env.VUE_APP_STRIPE_KEY;

export default {
  name: "Payments",
  components: {
    NotificationModal
  },
  data() {
    return {
      listsCurrency: ["USD", "EUR", "GBP"],
      preferredSelected: null,
      preferredSelectedDefault: "USD",
      defaultPayoutOptions: [
        "Wise",
        "PayPal",
        "false",
        "true",
        "Stripe",
        "Paypal"
      ]
    };
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy"
    }),
    isPaymentMethodDisabled() {
      return this.userCopy.offlinePayments === 'true' || this.userCopy.offlinePayments === true;
    }
  },
  methods: {
    ...mapMutations("user", ["UPDATE_USER_COPY"]),
    ...mapMutations({
        updateCurrency: "user/updateCurrency"
      }),
      async updateCurrencyApi(){
        const payload = {
          preferredCurrency: `${this.preferredSelectedDefault}`
        };
        swal.showLoading();
        const response = await api.updateUser(this.data.id, payload);
        if (response.Error || response.Data.Error) {
          swal.fire({
            icon: "error",
            text: response.Error
          });
          return;
        }
        swal.close();
      },
      async onChangeSelectedCurrency(){
        // await this.updateCurrencyApi();
        this.updateCurrency(this.preferredSelectedDefault)
      },
    showModalDynamicForms() {
      this.$modal.show(
        DynamicForms,
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
          drawingForms: [0, 1, 2, 3]
        },
        {
          height: "auto",
          scrollable: true,
        }
      );
    },
    // async getUserPaymentMethod(){
    //   swal.showLoading();
    //   const payload = {
    //     defaultPaymentMethod: "Stripe",
    //     offlinePayments: true,
    //   }
    //   const response = await api.getUserPaymentMethod(this.data.id, payload);
    //   if(response.Data){
    //     console.log(response.Data)
    //     swal.close();
    //   }
    // },
    async getStripeUrl() {
      const stripePromise = loadStripe(clientId);
      swal.showLoading();
      const response = await api.postStripeSessionId(
        this.user.stripeCustomerId
      );
      if (response && response.Data) {
        swal.close();
        localStorage.setItem("redirectStripeFromSettings", "success");
        const stripe = await stripePromise;
        await stripe
          .redirectToCheckout({ sessionId: response.Data })
          .then(function(result) {
            swal.fire({
              icon: "error",
              text: result.error.message
            });
          });
      }
    },
    async getPayPalUrl() {
      swal.showLoading();
      const response = await api.getPayPalredirectingUrl();
      
      if (response && response.Data && response.Data.url) {
        localStorage.setItem("redirectStripeFromSettings", "paypal");
        swal.close();
        window.location.href = response.Data.url;
      } else {
        swal.fire({
          icon: "error",
          text: response.Error
        });
      }
      // this.UPDATE_USER_COPY({ defaultPayoutMethod: "PayPal"})
    },
    async getPayPalPaymentMethodUrl() {
      swal.showLoading();
      const response = await api.getPayPalPaymentMethodUrl();
      swal.close();

      if (response && response.Data && response.Data.url) {
        localStorage.setItem("redirectStripeFromSettings", "paypal");
        window.location.href = response.Data.url;
      } else {
        await swal.fire({
          icon: "error",
          text: response.Error
        });
      }
    }
  },
  mounted() {
    if(this.user.paypalEmail && this.user.wiseRecipientId === null && this.user.defaultPayoutMethod !== "PayPal"){
      this.UPDATE_USER_COPY({ defaultPayoutMethod: "PayPal"})
    }
    if(!this.preferredSelected){this.preferredSelected = this.data.preferredCurrency}

    if (this.$route.query.remind) {
      this.$bvModal.show('payment-reminder');
    }
  },
};
</script>

<style lang="scss" scoped>
#payment-section {
  .stripe-wrapper{
    height: 100% !important;
  }
}

.selected-currenccy{
    height: 35px;
    padding: 5px 10px !important;
    width: 100% !important;
    max-width: 350px;
    border-radius: 0px !important;
    background:#f2f1ef;
    color:#aaa3b1;
    border: 1px solid #aaa3b1 !important;
    p{
      padding-top: 3px;
    }
  }
  .text-currency{
    font-family: "Graphik-Regular-Web";
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    /* Purples/Lt Purple */

    color: #442671;
  }
  select:active, select:focus { outline: none; }
.settings-text {
  font-size: 12px;
  font-family: "Roboto-Mono";
}

.gray-color {
  color: #75707b;
}

.stripe-wrapper {
  border: 1px solid #aaa3b1;
  height: auto;
  padding: 20px 40px 40px;
}

.stripe-button {
  background-color: transparent;
}

.paypal-wrapper {
  border-color: #aaa3b1;
  height: 250px;
  padding: 27px 44px;
}

.paypal-wrapper .paypal-save {
  outline: none;
  background: transparent;
  border-radius: 60px;
  font-family: "Roboto-Mono";
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
  max-width: 75px !important;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  color: #442671;
  border-color: #442671;
  padding-top: 0 !important;

  &:hover {
    background: #442671;
    color: #fff;
  }
}
::v-deep
 .custom-radio
.custom-control-input:checked
~ .custom-control-label::after {
  background-image: url("../../../assets/images/Button_Check.svg") !important;
  width: 17px;
  height: 100%;
  border: none;
  top: 0px;
  display: block;
  position: absolute;
  background-repeat: no-repeat;
}
::v-deep .vs__dropdown-toggle {
  width: 100% !important;
}
::v-deep .custom-control-input:checked ~ .custom-control-label::before {
  left: -2rem;
  border: none;
  top: 0px;
  width: 17px;
  height: 16px;
  display: block;
}
::v-deep .custom-control-input ~ .custom-control-label::before {
  left: -2rem;
  border: none;
  top: 0px;
  width: 17px;
  height: 100%;
  border: none;
  top: 0px;
  display: block;
  position: absolute;
}

::v-deep .custom-control-label::after {
  background-image: url("../../../assets/images/Button_Checked.svg") !important;
  left: -2rem;
  background: none;
  width: 17px;
  height: 100%;
  border: none;
  top: 0px;
  display: block;
  position: absolute;
  background-repeat:no-repeat

}

::v-deep .custom-control-label{
  line-height: normal;
}
.opacity{
  opacity: .4 !important;
}
</style>
<style>
.vs--disabled .vs__dropdown-toggle, .vs--disabled .vs__search,.vs--disabled .vs__open-indicator{
    background-color: #AAA3B1!important;
    border-radius: 0px !important;
    
  }
  .vs--disabled .vs__dropdown-toggle, .vs__dropdown-toggle{
    border: 1px solid #442671 !important;
  }
  .block_options .vs__dropdown-toggle, .vs__dropdown-toggle {
    border: 1px solid #442671 !important;
    border-radius: 0px !important;
    cursor: pointer !important;
  }
  .block_options .vs__dropdown-toggle .vs__selected-options, .vs__selected-options{
    padding: 10px 10px !important;
    font-size: 12px !important;
  }
  .vs__selected{
    padding: 0px !important;
  }

  .vm--container {
    z-index: 1000;
  }
</style>