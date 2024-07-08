<template>
  <b-row class="process-one" no-gutters>
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
    <b-col class="process-one-right col px-0">
      <b-row style="padding-left: 20px; padding-right: 20px; max-width: 524px">
        <b-col cols="12">
          <h4 class="base-form__title">CONTACT INFO</h4>
        </b-col>
        <b-col
          cols="12"
          no-gutters
          class="mt-4"
          :class="
            !$v.form.email.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="email mb-1">
            <p class="mb-0 text-uppercase base-form__label-text">Email</p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="email"
              v-model="form.email"
              disabled="disabled"
            ></b-form-input>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.email.required && $v.form.email.$dirty"
          >
            Field is required.
          </div>
          <div
            class="error"
            v-if="!$v.form.email.email && $v.form.email.$dirty"
          >
            Field must have at least an email.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.password.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="password" style="position: relative;">
            <p class="mb-0 text-uppercase base-form__label-text">
              Create strong password
            </p>
            <div class="position-relative">
              <b-form-input
                @input="validatePassword($event)"
                autocomplete="new-password"
                class="w-100 px-0 base-form__input"
                :type="!showPassword ? 'password' : 'text'"
                v-model.trim="$v.form.password.$model"
              />
              <svg
                style="position: absolute; top: 50%; right: 10px; cursor: pointer; transform: translateY(-50%);"
                @click="showPassword = !showPassword"
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                />
              </svg>
              <svg
                style="position: absolute; top: 50%; right: 10px; cursor: pointer; transform: translateY(-50%);"
                v-if="showPassword"
                @click="showPassword = !showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"
                />
              </svg>
            </div>

            <div class="password-requirements" style="margin-top: 5.5px;">
              Required:
              <span :class="lowerCaseExist ? 'green-text' : ''">
                One lowercase letter,
              </span>
              <span :class="upperCaseExist ? 'green-text' : ''">
                one uppercase letter,
              </span>
              <span :class="numberExist ? 'green-text' : ''">
                one number,
              </span>
              <span :class="form.password.length >= 8 ? 'green-text' : ''">
                8 characters minimum
              </span>
            </div>
            <password
              v-model.trim="$v.form.password.$model"
              :strength-meter-only="true"
            />
          </div>

          <div
            class="error"
            v-if="!$v.form.password.required && $v.form.password.$dirty"
          >
            Field is required.
          </div>
          <div
            class="error"
            v-if="!$v.form.password.minLength && $v.form.password.$dirty"
          >
            Password must have at least
            {{ $v.form.password.$params.minLength.min }} letters.
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.passwordConfirmation.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="password">
            <p class="mb-0 text-uppercase base-form__label-text">
              Re-enter Password
            </p>
            <b-form-input
              class="w-100 px-0"
              type="password"
              v-model.trim="$v.form.passwordConfirmation.$model"
            ></b-form-input>
          </div>
          <div
            class="error"
            v-if="
              !$v.form.passwordConfirmation.sameAsPassword &&
                $v.form.passwordConfirmation.$dirty
            "
          >
            Passwords must be identical.
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.firstName.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="firstname">
            <p class="mb-0 text-uppercase base-form__label-text">First name</p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.firstName"
            ></b-form-input>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.lastName.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="lastname">
            <p class="mb-0 text-uppercase base-form__label-text">Last name</p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.lastName"
            ></b-form-input>
          </div>
        </b-col>
        <b-col
          v-if="isPromoter"
          cols="12"
          class="mt-4"
          :class="
            !$v.form.role.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="role">
            <p class="mb-0 text-uppercase base-form__label-text">
              Title/Position/Role
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.role"
            ></b-form-input>
          </div>
        </b-col>
        <b-col v-if="isPromoter" class="process-one-right col px-0">
          <b-row
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
                  {{ usePersona ? "Persona" : "Stripe Digital" }} Digital
                  Identity verification. We do this in order to confirm correct
                  payments and deter false applications. Click the button below
                  to verify who you are.
                </p>
                <button
                  v-if="!vipVerificationChecking"
                  class="controller"
                  type="button"
                  @click="handleVerifyBePersona()"
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
            style="background-color: #AAA3B1; height: 1px; margin-left: 0px; min-width: 100vw; margin-bottom: 0px;"
          ></b-row>
        </b-col>
        <b-col v-if="isPromoter" cols="12">
          <h4 class="base-form__title">Company information</h4>
        </b-col>
        <b-col
          v-if="isPromoter"
          cols="12"
          class="mt-4"
          :class="
            !$v.form.companyName.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="company-name">
            <p class="mb-0 text-uppercase base-form__label-text">
              Company name
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.companyName"
            ></b-form-input>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.addressLine1.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="address1">
            <p class="mb-0 text-uppercase base-form__label-text">
              <template v-if="isPromoter">
                Company Address Line 1
              </template>
              <template v-else>
                Address Line 1
              </template>
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.addressLine1"
            ></b-form-input>
          </div>
          <div class="additional-information">
            Example:12345 North Street
          </div>
          <!-- <div
            class="error"
            v-if="
              !$v.form.addressLine1.required && $v.form.addressLine1.$dirty
            "
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col cols="12" class="mt-4">
          <div class="address2">
            <p class="mb-0 text-uppercase base-form__label-text">
              <template v-if="isPromoter">
                Company Address Line 2
              </template>
              <template v-else>
                Address Line 2
              </template>
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.addressLine2"
            ></b-form-input>
          </div>
          <div class="additional-information">
            Example:3rd Floor
          </div>
          <!-- <div
            class="error"
            v-if="
              !$v.form.addressLine2.required && $v.form.addressLine2.$dirty
            "
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.city.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="city">
            <p class="mb-0 text-uppercase base-form__label-text">City</p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.city"
            ></b-form-input>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.city.required && $v.form.city.$dirty"
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.country.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="country" id="country-select">
            <p class="mb-0 text-uppercase base-form__label-text">Country</p>
            <v-select
              :options="[...allCountries]"
              label="name"
              class="base-form__input"
              :filter="filterCountry"
              :value="[...allCountries].name"
              :reduce="allCountries => allCountries.name"
              v-model="form.country"
              placeholder="Select Country"
            ></v-select>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.country.required && $v.form.country.$dirty"
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.state.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="state">
            <p class="mb-0 text-uppercase base-form__label-text">
              State/Province/Region
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.state"
            ></b-form-input>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.state.required && $v.form.state.$dirty"
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.form.postalCode.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="state">
            <p class="mb-0 text-uppercase base-form__label-text">
              Postal Code
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="form.postalCode"
            ></b-form-input>
          </div>
          <div
            class="error"
            v-if="!$v.form.postalCode.required && $v.form.postalCode.$dirty"
          >
            Field is required.
          </div>
        </b-col>
      </b-row>
      <b-row
        class="mt-5"
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row style="padding-left: 20px; padding-right: 20px; max-width: 524px">
        <verify-control-button
          class="my-4"
          style="padding-left: 20px;"
          @clicked="go"
          :disabledNext="isDisabledNext"
          hide-prev
        />
      </b-row>

      <!-- <b-row style="margin-top: 40px;">
        <b-col cols="12" class="d-flex">
          <button
            :class="{
              controller: true,
              'not-allowed light-gray next-button': isPasswordConfirmed,
              'controller-hover next-button': !isPasswordConfirmed
            }"
            :disabled="isPasswordConfirmed"
            @click="go"
          >
            <b-icon
              class="d-block d-sm-none mx-auto"
              icon="chevron-right"
              aria-hidden="true"
            ></b-icon>
            <span class="d-none d-sm-inline-block margin-top-05">Next</span>
          </button>
      </b-col>
      </b-row> -->
    </b-col>
  </b-row>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import VerifyControlButton from "./VerifyControlButton";
import VerifyProcessController from "@/mixins/verify-process-controller";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import Password from "vue-password-strength-meter";
import Persona from "persona";
import api from "@/service/api";
import swal from "sweetalert2";
import Swal from "sweetalert2";
import countries from "@/assets/countries";
export default {
  name: "Process-1",
  mixins: [VerifyProcessController],
  components: {
    VerifyControlButton,
    Password
  },
  data() {
    return {
      showPassword: false,
      passwordIsHard: false,
      lowerCaseExist: false,
      upperCaseExist: false,
      numberExist: false,
      usePersona: true,
      allCountries: [],
      form: {
        email: "",
        password: "",
        passwordConfirmation: "",
        firstName: "",
        lastName: "",
        role: "",
        companyName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        state: "",
        postalCode: "",
        verificationStatus: ""
      }
    };
  },
  validations() {
    let result = {
      form: {
        verificationStatus: {
          required
        },
        email: {
          email,
          required
        },
        password: {
          required,
          minLength: minLength(8)
        },
        passwordConfirmation: {
          required,
          sameAsPassword: sameAs("password")
        },
        firstName: {
          required
        },
        lastName: {
          required
        },
        role: {},
        companyName: {},
        addressLine1: {
          required
        },
        addressLine2: {},
        city: {
          required
        },
        country: {
          required
        },
        state: {
          required
        },
        postalCode: {
          required
        }
      }
    };

    if (this.isPromoter) {
      result = {
        ...result,
        form: {
          ...result.form,
          role: {
            required
          },
          companyName: {
            required
          }
        }
      };
    } else {
      result = {
        ...result,
        form: {
          ...result.form
        }
      };
    }

    return result;
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapGetters({
      user: "user/getUser"
    }),
    ...mapGetters("user", ["isPromoter"]),
    vipVerificationChecking() {
      return this.data.verificationStatus === "verified" ? true : false;
    },
    isPasswordConfirmed() {
      return (
        this.$v.form.password.$invalid ||
        this.$v.form.passwordConfirmation.$invalid
      );
    },
    isDisabledNext() {
      const isUniqueFieldsInvalid = this.isPromoter
        ? this.$v.form.role.$invalid ||
          this.$v.form.companyName.$invalid ||
          this.$v.form.verificationStatus.$invalid
        : false;
      return (
        this.isPasswordConfirmed ||
        this.$v.form.firstName.$invalid ||
        this.$v.form.lastName.$invalid ||
        this.$v.form.addressLine1.$invalid ||
        this.$v.form.city.$invalid ||
        this.$v.form.country.$invalid ||
        this.$v.form.state.$invalid ||
        this.$v.form.postalCode.$invalid ||
        isUniqueFieldsInvalid
      );
    }
  },
  created() {
    this.allCountries = countries;
    if (this.user && this.user.email !== null) {
      this.form.email = this.user.email;
    } else {
      this.form.email = localStorage.getItem("tempEmail");
    }

    this.form.firstName = this.user.firstName || this.form.firstName;
    this.form.lastName = this.user.lastName || this.form.lastName;
    this.form.role = this.user.roleInCompany || this.form.role;
    this.form.companyName = this.user.companyName || this.form.companyName;
    this.form.addressLine1 = this.user.addressLine1 || this.form.addressLine1;
    this.form.addressLine2 = this.user.addressLine2 || this.form.addressLine2;
    this.form.city = this.user.city || this.form.city;
    this.form.country = this.user.country || this.form.country;
    this.form.state = this.user.state || this.form.state;
    this.form.postalCode = this.user.postalCode || this.form.postalCode;
    this.form.verificationStatus =
      this.user.verificationStatus || this.form.verificationStatus;
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    ...mapActions("verifySteps", ["submitStoredForm"]),
    ...mapMutations("user", ["changingVerificationStatus"]),
    validatePassword(evt) {
      const isNotEmpty = evt && evt.length > 0;
      this.upperCaseExist = isNotEmpty && /[A-Z]/.test(evt);
      this.lowerCaseExist = isNotEmpty && /[a-z]/.test(evt);
      this.numberExist = isNotEmpty && /\d/.test(evt);
    },
    filterCountry(options, search) {
      const toLowerSearch = search.toLowerCase();
      return options.filter(x =>
        (x.name || "").toLowerCase().startsWith(toLowerSearch)
      );
    },
    callSelect(evt) {
      this.form.country = evt.name;
    },
    handleVerifyBePersona() {
      const client = new Persona.Client({
        templateId: process.env.VUE_APP_PERSONA_TEMPLATE_ID,
        environment: process.env.VUE_APP_PERSONA_MODE,
        onReady: () => client.open(),
        onComplete: async ({ inquiryId }) => {
          const response = await api.createPersonaInquiries(inquiryId);
          if (response && !response.Error) {
            this.form.verificationStatus = "verified";
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
    async getAllCountries() {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      this.allCountries = await response.json();
    },
    async go() {
      if (this.isDisabledNext) {
        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: "Please fill all required fields correctly."
        });
        return;
      }
      let payload = {
        addressLine1: this.form.addressLine1,
        addressLine2: this.form.addressLine2,
        city: this.form.city,
        country: this.form.country,
        email: this.form.email,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        password: this.form.password,
        passwordConfirmation: this.form.passwordConfirmation,
        postalCode: this.form.postalCode,
        state: this.form.state,
        verificationStatus: this.form.verificationStatus
      };
      if (this.isPromoter) {
        payload = {
          ...payload,
          roleInCompany: this.form.role,
          companyName: this.form.companyName
        };
      } else {
        payload = {
          ...payload
        };
      }
      if (!this.lowerCaseExist || !this.upperCaseExist || !this.numberExist) {
        Swal.fire({
          icon: "error",
          title: "Your password is too weak.",
          text: "Follow the recommended password setting standards"
        });
        return;
      }
      await this.updateUser({ newData: payload, user: this.user });
      this.$store.commit("verifySteps/registrationStepOne", this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .Password {
  margin-left: 0;
  margin-right: 0;
}

.process-one {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.required-star {
  color: red;
  font-size: 10px;
  position: relative;
  top: -6px;
  right: 5px;
}
.email input,
.firstname input,
.lastname input,
.role input,
.company-name input {
  color: #442671 !important;
}
.max99 {
  max-width: 99px;
  min-width: 99px;
}
.green-text {
  color: #31bcb2;
}

::v-deep .v-select {
  padding-top: 0px !important;
}

::v-deep .vs__dropdown-toggle {
  border: 1px solid #442671 !important;
  border-radius: 3px !important;

  svg {
    margin-top: 2px;
  }

  svg path {
    stroke: #442671;
  }
}

@media screen and (max-width: 768px) {
  .max99 {
    max-width: 65px;
    min-width: 65px;
  }
}

::v-deep .vs__selected-options {
  padding: 0 20px !important;
}

::v-deep .vs__dropdown-toggle {
  min-height: 30px;
}
</style>
