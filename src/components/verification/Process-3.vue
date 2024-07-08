<template>
  <b-row class="process-three" no-gutters>
    <b-col
      cols="2"
      md="2"
      lg="1"
      class="d-none d-md-flex flex-column align-items-center process-one-left__sidebar max99"
    >
    </b-col>
    <b-col
      cols="2"
      md="2"
      lg="1"
      class="d-flex d-md-none flex-column align-items-center process-one-left__sidebar max99"
    >
    </b-col>

    <b-col
      v-if="customType === 'dj'"
      class="process-one-right col px-0"
      style="padding-bottom: 100px!important;"
    >
      <b-row
        v-if="!data.vip"
        style="padding-left: 15px; padding-right: 15px; max-width: 524px"
      >
        <b-col cols="12" class="ml-2">
          <h4 class="base-form__title mb-0">VERIFICATION</h4>
        </b-col>

        <b-col
          cols="12"
          class="mt-3 ml-2"
          :class="
            data.verificationStatus === 'verified'
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="mb-1">
            <p
              class="mb-4 base-form__description-text"
              style="max-width: 400px;"
            >
              Aslice uses
              {{ usePersona ? "Persona" : "Stripe Digital" }} Digital Identity
              verification. We do this in order to confirm correct payments and
              deter false applications. Click the button below to verify who you
              are.
            </p>
            <button
              v-if="vipVerificationChecking"
              class="controller"
              type="button"
              @click="
                usePersona
                  ? handleVerifyBePersona()
                  : sendStriperVerificationToken()
              "
            >
              <span class="d-sm-inline-block margin-top-05">VERIFY</span>
            </button>
            <button v-else class="controller" type="button">
              <span class="d-sm-inline-block margin-top-05">VERIFIED</span>
            </button>
          </div>
        </b-col>

        <div class="d-flex flex-row">
          <img
            class="ml-2 mt-5 mb-2"
            src="@/assets/images/verification/down-arrow1.svg"
            alt="Down Arrow"
          />
        </div>
      </b-row>

      <b-row
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row style="padding-left: 15px; padding-right: 15px; max-width: 524px">
        <b-col cols="12" class="ml-2">
          <h4 class="base-form__title mb-0">Currency</h4>
        </b-col>

        <b-col
          cols="12"
          class="mt-4 mb-3 ml-2"
          :class="
            !$v.form.preferredCurrency.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 base-form__description-text mb-4">
            What is your preferred currency?
          </p>
          <v-select
            v-model="form.preferredCurrency"
            label="label"
            class="base-form__input"
            :options="[...currencies]"
            :searchable="false"
            :reduce="currencies => currencies.name"
            :value="[...currencies].name"
            placeholder="Select"
            @input="saveToLocalStorage"
          ></v-select
        ></b-col>
      </b-row>

      <b-row
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row style="padding-left: 15px; padding-right: 15px">
        <b-col cols="12" class="ml-2">
          <h4 class="base-form__title mb-0">Payment</h4>
        </b-col>

        <b-col cols="12" class="mt-3 ml-2">
          <div class="mb-1">
            <p
              class="mb-0 base-form__description-text"
              style="max-width: 400px;"
            >
              Please connect to Stripe or PayPal to streamline the process of sending money for uploaded playlists. You may be offered various payment options based on the currency you selected above.
            </p>
          </div>
        </b-col>
        <b-col
            v-if="customType === 'dj'"
            class="col-12 ml-2 d-flex flex-column flex-md-row"
            :class="
            data.stripePaymentMethodId || data.paypalVaultId
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <b-col
              class="mt-3 mr-md-4 p-0"
              style="max-width: 335px;"
          >
            <div
                class="stripe-wrapper d-flex flex-column align-items-center justify-content-between pb-3"
                style="height: 200px;"
            >
              <div class="d-flex justify-content-center my-auto pt-4">
                <img
                    alt="stripe"
                    src="@/assets/images/stripe-logo.svg"
                    style="max-width: 145px; width: 100%;"
                />
              </div>
              <div
                  class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center"
              >
                <button
                    v-if="customType === 'dj' && !data.stripePaymentMethodId"
                    :disabled="!form.preferredCurrency"
                    class="controller"
                    type="button"
                    @click="getStripeUrl"
                >
                  <span class="d-sm-inline-block margin-top-05">Connect</span>
                </button>
                <button v-else class="controller" type="button">
                  <span class="d-sm-inline-block margin-top-05">Connected</span>
                </button>
              </div>
            </div>
          </b-col>
          <b-col
            style="max-width: 335px;"
            class="mt-4 mt-md-3 p-0"
        >
          <div
              class="stripe-wrapper d-flex flex-column align-items-center justify-content-between pb-3"
              style="height: 200px;"
          >
            <div class="d-flex justify-content-center my-auto pt-4">
              <img
                  src="@/assets/images/paypal-logo.svg"
                  alt="paypal"
                  style="width: 64px"
              />
            </div>
            <div
                class="stripe-wrapper__inner d-flex flex-column justify-content-center align-items-center"
            >
              <button
                  v-if="customType === 'dj' && !data.paypalVaultId"
                  class="controller"
                  type="button"
                  :disabled="!form.preferredCurrency"
                  @click="getPayPalPaymentMethodUrl"
              >
                <span class="d-sm-inline-block margin-top-05">Connect</span>
              </button>
              <button class="controller" type="button" v-else>
                <span class="d-sm-inline-block margin-top-05">Connected</span>
              </button>
            </div>
          </div>
        </b-col>
        </b-col>
        <div class="d-flex flex-row">
          <img
            class="ml-2 mt-5 mb-2"
            src="@/assets/images/verification/down-arrow1.svg"
            alt="Down Arrow"
          />
        </div>
      </b-row>

      <b-row
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row
        class="my-4"
        style="padding-left: 15px; padding-right: 15px; max-width: 524px"
      >
        <verify-control-button
          v-if="data && data.roles && data.roles[0].name === 'dj'"
          style="margin-left: 5px; width: 50%"
          hide-prev
          :disabledNext="
            vipVerificationChecking ||
              (!data.stripePaymentMethodId && !data.paypalVaultId) ||
              !form.preferredCurrency
          "
          @clicked="go"
        />
      </b-row>
    </b-col>

    <b-col
      v-else-if="customType === 'producer'"
      class="process-one-right col px-0"
      style="padding-bottom: 100px!important;"
    >
      <b-row
        v-if="!data.vip"
        style="padding-left: 15px; padding-right: 15px; max-width: 524px"
      >
        <b-col cols="12" class="ml-2">
          <h4 class="base-form__title mb-0">VERIFICATION</h4>
        </b-col>

        <b-col
          cols="12"
          class="mt-3 ml-2"
          :class="
            data.verificationStatus === 'verified'
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="mb-1">
            <p
              class="mb-4 base-form__description-text"
              style="max-width: 400px;"
            >
              Aslice uses
              {{ usePersona ? "Persona" : "Stripe Digital" }} Digital Identity
              verification. We do this in order to confirm correct payments and
              deter false applications. Click the button below to verify who you
              are.
            </p>
            <button
              v-if="vipVerificationChecking"
              class="controller"
              type="button"
              @click="
                usePersona
                  ? handleVerifyBePersona()
                  : sendStriperVerificationToken()
              "
            >
              <span class="d-sm-inline-block margin-top-05">VERIFY</span>
            </button>
            <button v-else class="controller" type="button">
              <span class="d-sm-inline-block margin-top-05">VERIFIED</span>
            </button>
          </div>
        </b-col>

        <div class="d-flex flex-row">
          <img
            class="ml-2 mt-5 mb-2"
            src="@/assets/images/verification/down-arrow1.svg"
            alt="Down Arrow"
          />
        </div>
      </b-row>

      <b-row
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row style="padding-left: 15px; padding-right: 15px; max-width: 100%;">
        <b-col cols="12" class="ml-2">
          <h4 class="base-form__title mb-0">Payment</h4>
        </b-col>

        <b-col cols="12" class="mt-3 ml-2">
          <div class="mb-1" style="max-width: 524px">
            <p
              class="mb-4 base-form__description-text"
              style="max-width: 400px;"
            >
              Please connect at least one or both of the following options to
              streamline the process of receiving automatic payouts. If Paypal
              is unavailable in your territory or if you prefer bank transfers,
              please use Wise to enter your details.
            </p>
          </div>
        </b-col>

        <b-row
          class="mx-0 ml-2 position-relative"
          :class="
            !!data.paypalEmail || !!data.wiseRecipientId
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
          style="width: 100%;"
        >
          <b-col class="mt-4 mb-5 col-lg-6 col-12" style="max-width: 524px;">
            <div class="base-box">
              <div class="d-flex justify-content-center">
                <img src="@/assets/images/paypal-logo.svg" alt="paypal" />
              </div>

              <button
                v-if="!data.paypalEmail"
                class="controller px-0 mt-4 mx-auto"
                type="button"
                @click="getPayPalUrl"
                style="max-width: 300px"
              >
                <span class="d-sm-inline-block margin-top-05 px-4">
                  CONNECT
                </span>
              </button>
              <button
                v-else
                class="controller px-0 mt-4 mx-auto"
                type="button"
                @click="getPayPalUrl"
                style="max-width: 300px"
              >
                <span class="d-sm-inline-block margin-top-05 px-4">
                  EDIT
                </span>
              </button>

              <div
                class="connected-mark mt-4 d-flex justify-content-center align-items-center"
                v-if="data.paypalEmail"
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
                <span class="ml-2">Connected</span>
              </div>

              <b-form-radio
                v-if="data.paypalEmail"
                class="d-flex justify-content-center mt-4"
                v-model="data.defaultPayoutMethod"
                :value="defaultPayoutOptions[1]"
              >
                Default payout method
              </b-form-radio>
            </div>
          </b-col>
          <b-col class="mt-4 mb-5 col-lg-6 col-12" style="max-width: 524px;">
            <div class="base-box">
              <div class="d-flex justify-content-center">
                <img
                  src="@/assets/images/wise-logo.svg"
                  alt="wise"
                  style="width: 100px"
                />
              </div>

              <button
                v-if="!data.wiseRecipientId"
                class="controller px-0 mt-4 mx-auto"
                type="button"
                @click="showModalDynamicForms"
                style="max-width: 300px"
              >
                <span
                  class="d-sm-inline-block margin-top-05 px-4 text-uppercase"
                >
                  fill out form
                </span>
              </button>
              <button
                v-else
                class="controller px-0 mt-4 mx-auto"
                type="button"
                @click="showModalDynamicForms"
                style="max-width: 300px"
              >
                <span class="d-sm-inline-block margin-top-05 px-4">
                  EDIT
                </span>
              </button>

              <div
                class="connected-mark mt-4 d-flex justify-content-center align-items-center"
                v-if="data.wiseRecipientId"
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
                <span class="ml-2">Connected</span>
              </div>

              <b-form-radio
                v-if="data.wiseRecipientId"
                class="d-flex justify-content-center mt-4"
                v-model="data.defaultPayoutMethod"
                :value="defaultPayoutOptions[0]"
              >
                Default payout method
              </b-form-radio>
            </div>
          </b-col>
        </b-row>
      </b-row>

      <b-row
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row style="padding-left: 15px; padding-right: 15px; max-width: 524px">
        <verify-control-button
          v-if="data && data.roles && data.roles[0].name === 'producer'"
          class="mt-4"
          style="margin-left: 5px; width: 50%"
          hide-prev
          :disabledNext="
            vipVerificationChecking ||
              (!data.paypalEmail && !data.wiseRecipientId)
          "
          @clicked="go"
        />
      </b-row>
    </b-col>

    <b-col v-else-if="isPromoter" class="process-one-right">
      <b-row style="padding-left: 20px; padding-right: 20px; max-width: 524px">
        <b-col cols="12">
          <h4 class="base-form__title">Performances</h4>
        </b-col>
        <b-col
          cols="12"
          no-gutters
          class="mt-4"
          :class="
            numEventsPerYear
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="email mb-1">
            <p class="mb-0 text-uppercase base-form__label-text">
              On average how many nights/events a year do you produce
            </p>
            <b-form-input
              type="number"
              min="0"
              v-model="numEventsPerYear"
              @keydown="handleInputNumberKeyDown"
            ></b-form-input>
          </div>
        </b-col>
        <b-col
          cols="12"
          no-gutters
          class="mt-4"
          :class="
            numResidentDjs
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="email mb-1">
            <p class="mb-0 text-uppercase base-form__label-text">
              How many resident djs do you have?
            </p>
            <b-form-input
              type="number"
              min="0"
              v-model="numResidentDjs"
              @keydown="handleInputNumberKeyDown"
            ></b-form-input>
          </div>
        </b-col>
      </b-row>
      <b-row style="padding-left: 20px; padding-right: 20px">
        <b-col
          cols="12"
          :class="
            !$v.genres.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <h4 class="base-form__title">Music genres played at your events</h4>
          <p
            class="mt-4 text-uppercase base-form__label-text"
            style="max-width: 397px"
          >
            select all that apply
          </p>

          <b-row style="margin-bottom: 60px;" no-gutters>
            <b-col cols="12">
              <b-row no-gutters class="genres">
                <b-col v-for="genre of genresOptions" :key="genre.id" sm="6">
                  <b-form-checkbox
                    :id="`checkbox-${genre.id}`"
                    v-model="$v.genres.$model"
                    :name="`checkbox-${genre.id}`"
                    :value="genre.title"
                  >
                    <span
                      style="position: relative; top: -2px; margin-left: 10px"
                      >{{ genre.title }}</span
                    >
                  </b-form-checkbox>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row
        class="my-4"
        style="padding-left: 15px; padding-right: 15px; max-width: 524px"
      >
        <verify-control-button
          style="margin-left: 5px; width: 50%"
          hide-prev
          :disabledNext="isDisabledNext"
          @clicked="go"
        />
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import Persona from "persona";
import { required, email } from "vuelidate/lib/validators";
import VerifyControlButton from "./VerifyControlButton";
import VerifyProcessController from "@/mixins/verify-process-controller";
import api from "@/service/api";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import WiseDynamicForms from "../dynamic-forms/WiseDynamicForms";
import allGenres from "@/assets/genres";

const clientId = process.env.VUE_APP_STRIPE_KEY;

export default {
  name: "Process-3",
  mixins: [VerifyProcessController],
  components: {
    VerifyControlButton
  },
  data() {
    return {
      paypalEmail: "",
      usePersona: true,
      paypalEmailRepeat: "",
      currencies: [
        {
          id: 1,
          label: "$ USD",
          name: "USD"
        },
        {
          id: 2,
          label: "€ EUR",
          name: "EUR"
        },
        {
          id: 3,
          label: "£ GBP",
          name: "GBP"
        }
      ],
      form: {
        preferredCurrency: ""
      },
      defaultPayoutOptions: ["Wise", "PayPal"],
      numEventsPerYear: "",
      numResidentDjs: "",
      genres: [],
      genresOptions: allGenres
    };
  },
  computed: {
    ...mapState("verifySteps", ["registrationForm"]),
    ...mapState("user", ["data"]),
    ...mapGetters("user", ["isPromoter"]),
    vipVerificationChecking() {
      return this.data.vip
        ? false
        : this.data.verificationStatus !== "verified";
    },
    customType() {
      if (this.isPromoter) {
        return "promoter";
      }
      let result;
      if (this.data) {
        if (Array.isArray(this.data.roles)) {
          ``;
          if (this.data.roles && this.data.roles.length > 0) {
            if (this.data.roles.find(x => x.name === "dj")) {
              result = "dj";
            }
            if (this.data.roles.find(x => x.name === "fan")) {
              result = "fan";
            }
            if (this.data.roles.find(x => x.name === "producer")) {
              result = "producer";
            }
            if (
              this.data.roles.find(x => x.name === "dj") &&
              this.data.roles.find(x => x.name === "producer")
            ) {
              result = "dj-producer";
            }
          }
        } else {
          result = this.data.roles;
        }
      }
      return result;
    },
    isDisabledNext() {
      const valid =
        this.numEventsPerYear &&
        +this.numEventsPerYear >= 0 &&
        this.numResidentDjs &&
        +this.numResidentDjs >= 0 &&
        !!this.genres.length;
      return !valid;
    }
  },
  validations() {
    let result = {
      form: {
        verificationStatus: {
          required
        },
        paypalEmail: {
          required
        },
        preferredCurrency: {
          required
        }
      },
      paypalEmail: {
        required,
        email
      },
      paypalEmailRepeat: {
        mustEqualWith: (value, data) => {
          console.log(value, data);
          return data.paypalEmail === value;
        }
      },
      numEventsPerYear: {},
      numResidentDjs: {},
      genres: {}
    };

    if (this.isPromoter) {
      result = {
        ...result,
        numEventsPerYear: {
          required
        },
        genres: {
          required
        }
      };
    } else {
      result = {
        ...result
      };
    }

    return result;
  },
  async created() {
    if (this.data.eventsPerYearCount !== null) {
      this.numEventsPerYear = this.data.eventsPerYearCount.toString();
    }
    if (this.data.residentDjsCount !== null) {
      this.numResidentDjs = this.data.residentDjsCount.toString();
    }
    this.genres = this.data.genres || this.genres;
  },
  async mounted() {
    if (this.data.verificationStatus === "verified") {
      this.usePersona = !!this.data.personaInquiry;
    }
    if (this.customType === "producer") {
      localStorage.setItem("selectedCurrency", "USD");
    }
    if (!localStorage.getItem("verificationStarted")) {
      localStorage.setItem("verificationStarted", 3);
    }
    if (
      localStorage.getItem("verificationStarted") &&
      localStorage.getItem("verificationStarted") < 3
    ) {
      localStorage.removeItem("verificationStarted");
      localStorage.setItem("verificationStarted", 3);
    }
    if (localStorage.getItem("selectedCurrency")) {
      this.form.preferredCurrency = this.currencies.find(
        x =>
          x.name ===
          JSON.parse(JSON.stringify(localStorage.getItem("selectedCurrency")))
      ).name;
    }
    await this.checkAuth();
    await this.$nextTick();
    window.scrollTo(0, 0);
  },
  methods: {
    ...mapActions("user", ["updateUser", "updateUserWithoutNextTab"]),
    ...mapActions("verifySteps", ["submitStoredForm"]),
    ...mapMutations("user", ["changingVerificationStatus"]),
    handleInputNumberKeyDown(event) {
      if (["-", "+", "e", ".", ","].includes(event.key)) {
        event.preventDefault();
      }
    },
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
          drawingForms: [0, 1, 2, 3]
        },
        {
          height: "auto",
          styles: {
            "overflow-y": "auto"
          },
          scrollable: false,
          adaptive: true
        }
      );
    },
    saveToLocalStorage(evt) {
      this.form.preferredCurrency = evt;
      localStorage.setItem("selectedCurrency", evt);
    },
    async sendStripAccId() {
      swal.showLoading();
      const response = await api.postStripeAccount(this.data.stripeAccountId);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      swal.close();
      localStorage.setItem("redirectedFromProccess", "stripe");
      window.location.href = response.Data;
    },
    async getStripeUrl() {
      await this.updatePreferredCurrency();
      const stripePromise = loadStripe(clientId);
      swal.showLoading();
      const response = await api.postStripeSessionId(
        this.data?.stripeCustomerId
      );
      if (response && response.Data) {
        localStorage.setItem("redirectedFromProccess", "stripe");
        swal.close();
        // if (!JSON.parse(localStorage.getItem("regForm"))) {
        //   localStorage.setItem(
        //     "regForm",
        //     JSON.stringify(this.registrationForm)
        //   );
        // }
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
    async getPayPalPaymentMethodUrl() {
      await this.updatePreferredCurrency();
      swal.showLoading();
      const response = await api.getPayPalPaymentMethodUrl();
      swal.close();
      if (response && response.Data && response.Data.url) {
        localStorage.setItem("redirectedFromProccess", "paypal");
        window.location.href = response.Data.url;
      } else {
        await swal.fire({
          icon: "error",
          text: response.Error
        });
      }
    },
    async getPayPalUrl() {
      swal.showLoading();
      const response = await api.getPayPalredirectingUrl();
      localStorage.setItem("redirectedFromProccess", "paypal");
      if (response && response.Data && response.Data.url) {
        swal.close();
        window.location.href = response.Data.url;
      } else {
        swal.fire({
          icon: "error",
          text: response.Error
        });
      }
    },
    async checkAuth() {
      const response = await api.isAuthorized(this.data.id);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      this.$store.commit("user/AUTH_SUСCESS", { user: response.Data });
      this.$store.commit("verifySteps/updateRegForm", response.Data);
    },
    async sendStriperVerificationToken() {
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
        setTimeout(() => {
          window.location.href = response.Data.url;
        }, 0);
      }
    },
    handleVerifyBePersona() {
      const client = new Persona.Client({
        templateId: process.env.VUE_APP_PERSONA_TEMPLATE_ID,
        environment: process.env.VUE_APP_PERSONA_MODE,
        onReady: () => client.open(),
        onComplete: async ({ inquiryId }) => {
          const response = await api.createPersonaInquiries(inquiryId);
          if (response && !response.Error) {
            this.changingVerificationStatus("verified");
          }
        },
        onError: error => {
          swal.fire({
            icon: "error",
            text: error
          });
        }
      });
    },
    async updatePreferredCurrency() {
      const payload = {
        preferredCurrency: this.form.preferredCurrency
      };
      await this.updateUserWithoutNextTab({
        newData: payload,
        user: this.data
      });
    },
    async go(val) {
      localStorage.removeItem("selectedCurrency");
      localStorage.removeItem("redirectedFromProccess");
      if (val > -1) {
        const payload = {
          eventsPerYearCount: +this.numEventsPerYear,
          residentDjsCount: +this.numResidentDjs,
          genres: this.genres
        };
        await this.updateUser({ newData: payload, user: this.data });
      } else this.$store.dispatch("user/setCurrentTabComponent", val);
    }
  }
};
</script>
<style lang="scss" scoped>
.red {
  color: crimson;
}
.pd-100 {
  padding-top: 100px;
}
.mb-0 {
  margin-bottom: 0;
}
.currency-select-status {
  margin-top: 300px;
}
.max99 {
  max-width: 99px;
  min-width: 99px;
}
@media screen and (max-width: 768px) {
  .max99 {
    max-width: 65px;
    min-width: 65px;
  }
}
.stripe-wrapper.paypal-wrapper {
  border-color: #aaa3b1;
  padding: 27px 44px;
}
.paypal-wrapper {
  height: 284px;
}
.paypal-wrapper .form-group label {
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
  color: #75707b;
  margin-bottom: 0;
}
.paypal-wrapper .form-group input {
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
}

::v-deep .v-select {
  padding-top: 0 !important;
}

::v-deep .vs__dropdown-toggle {
  border: 1px solid #442671 !important;
  border-radius: 3px !important;

  .vs__selected-options {
    padding: 0 20px !important;
  }

  svg {
    margin-top: 2px;
  }

  svg path {
    stroke: #442671;
  }
}

::v-deep .vs__dropdown-toggle {
  min-height: 30px;
}

.base-box {
  width: 100%;
  padding: 30px 40px;
  border: solid #aaa3b1 1px;
  display: flex;
  flex-direction: column;
}

::v-deep
  .custom-radio
  .custom-control-input:checked
  ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23796498' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E") !important;
}

::v-deep .custom-control-label::before {
  left: -2.25rem;
}

::v-deep .custom-control-label::after {
  left: -2rem;
}

::v-deep {
  & .radio-checkboxes,
  & .genres {
    & .custom-control-label::before {
      left: -30px;
      top: 5px;
    }
    & .custom-control-label::after {
      left: -27px;
      top: 8px;
    }
    &
      .custom-checkbox
      .custom-control-input:checked
      ~ .custom-control-label::after {
      left: -30px;
      top: 5px;
    }
    & .custom-control {
      padding-left: 30px;
    }
  }
  & .custom-control-inline {
    margin-right: 20px;
  }
}

::v-deep .base-form__input {
  padding-bottom: 2px !important;

  input {
    margin-top: 0;
  }

  .vs__selected {
    height: 100%;
  }
}
/**
 */
</style>
