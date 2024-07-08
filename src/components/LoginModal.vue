<template>
  <div id="aslice-navbar">
    <LoginErrorModal
      v-if="showLoginErrorModal"
      @onClose="handleCloseLoginErrorModal"
    />
    <AppModal
      v-if="showConfirmChangePasswordModal"
      closeIcon
      title="Password Change Confirmation"
      description="You have successfully changed your password. Please login with your new password."
      @onClose="handleClosePasswordChangeConfirmModal"
    />
    <AppModal
        v-if="showForgotPasswordSuccessModal"
        closeIcon
        customContent
        @onClose="handleCloseForgotPasswordSuccessModal"
    >
      <template #body>
        <h2 class="app-modal__title">Please Check Your Email For Final Step</h2>
        <p class="app-modal__description" style="font-size: 14px; line-height: 18.9px">
          You will receive an email with a link to confirm this change. Your new email address will not work until you complete this final step.
        </p>
      </template>
    </AppModal>

    <div v-if="showLoginModal" class="app-modal">
      <div class="app-modal__container">
        <b-form
          :action="`${$aslice.getBaseUrl()}/api/auth/login`"
          v-if="!forgetPassword"
          @submit.prevent="
            login({ password: form.password, email: form.email })
          "
        >
          <img
            class="app-modal__close"
            src="@/assets/images/close-groups-modal.svg"
            @click="handleCloseLoginModal"
          />
          <div class="app-modal__body">
            <img src="@/assets/images/modal-logo.svg" />
            <h2 class="app-modal__title">Login</h2>
            <div class="app-modal__input">
              <label>Enter email</label>
              <input
                v-model.trim="form.email"
                id="username"
                placeholder="Enter Email"
                name="username"
                @blur="$v.form.email.$touch()"
                @input="
                  $v.form.email.$reset()
                "
                @focus="$v.form.email.$reset()"
              />
              <div
                v-if="!$v.form.email.required && $v.form.email.$dirty"
                class="app-modal__input__error"
              >
                Field is required.
              </div>
              <div
                v-if="!$v.form.email.email && $v.form.email.$dirty"
                class="app-modal__input__error"
              >
                Field must have at least an email.
              </div>
            </div>
            <div class="app-modal__input">
              <label>Enter password</label>
              <div class="app-modal__input__container">
                <input
                  v-model.trim="form.password"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  name="passowrd"
                  @blur="$v.form.password.$touch()"
                  @input="
                    $v.form.password.$reset()
                  "
                  @focus="$v.form.password.$reset()"
                />
                <span
                  class="app-modal__input__extra"
                  @click="forgetPassword = !forgetPassword"
                >
                  Forgot?
                </span>
              </div>
              <div
                v-if="!$v.form.password.required && $v.form.password.$dirty"
                class="app-modal__input__error"
              >
                Field is required.
              </div>
              <div
                v-if="!$v.form.password.minLength && $v.form.password.$dirty"
                class="app-modal__input__error"
              >
                Field must have at least
                {{ $v.form.password.$params.minLength.min }} characters.
              </div>
            </div>
          </div>
          <div class="app-modal__footer">
            <button
              type="submit"
              :disabled="
                form.email && form.password && form.password.length < 8
              "
            >
              Login
            </button>
          </div>
        </b-form>
        <div v-else>
          <img
            class="app-modal__close"
            src="@/assets/images/close-groups-modal.svg"
            @click="handleCloseLoginModal"
          />
          <div class="app-modal__body">
            <img src="@/assets/images/modal-logo.svg" />
            <h2 class="app-modal__title">Forgot Password?</h2>
            <div class="app-modal__input">
              <label>Enter email</label>
              <input
                v-model.trim="passwordRestoreEmail"
                type="email"
                placeholder="Enter Email"
              />
              <div
                v-if="!$v.form.email.required && $v.form.email.$dirty"
                class="app-modal__input__error"
              >
                Field is required.
              </div>
              <div
                v-if="!$v.form.email.email && $v.form.email.$dirty"
                class="app-modal__input__error"
              >
                Field must have at least an email.
              </div>
            </div>
          </div>
          <div class="app-modal__footer">
            <button class="button-link" @click="cancelRestoring">
              Cancel
            </button>
            <button @click="sendRestoreLink">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="restore-modal" centered modal-header="no">
      <span class="button-plus-img" @click="closeRestoreModal"
        ><svg
          fill="none"
          height="15"
          viewBox="0 0 16 15"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M15.4078 0.765695L14.7344 0.0922603L8 6.82661L1.26565 0.0922596L0.592215 0.765695L7.32657 7.50004L0.592215 14.2344L1.26565 14.9078L8 8.17348L14.7344 14.9078L15.4078 14.2344L8.67344 7.50005L15.4078 0.765695Z"
            fill="#442671"
            fill-rule="evenodd"
          />
        </svg>
      </span>
      <div class="col-12 login-popup-logo-wrapper">
        <svg
          class="login-popup-logo"
          fill="none"
          height="36"
          viewBox="0 0 35 36"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4912 0C7.84513 0 0 7.98624 0 17.8058C0 21.8839 1.35291 25.649 3.62826 28.6539L5.25351 26.9994C3.38228 24.4237 2.27535 21.24 2.27535 17.8058C2.27535 9.26511 9.10141 2.30733 17.5 2.30733C25.8986 2.30733 32.7246 9.25616 32.7246 17.8058C32.7246 21.2489 31.6177 24.4237 29.7465 26.9994L31.3717 28.6539C33.6471 25.649 35 21.8839 35 17.8058C34.9912 7.98624 27.1461 0 17.4912 0ZM25.7053 22.8945C26.619 21.3741 27.1022 19.6213 27.1022 17.8058C27.1022 12.4131 22.7887 8.02201 17.4912 8.02201C12.1938 8.02201 7.88906 12.4131 7.88906 17.8058C7.88906 19.6213 8.38102 21.3741 9.28589 22.8945L10.9551 21.1953C10.4367 20.1579 10.1556 18.9953 10.1556 17.8058C10.1556 13.683 13.4501 10.3383 17.4912 10.3383C21.5324 10.3383 24.8268 13.692 24.8268 17.8058C24.8268 18.9953 24.5545 20.1579 24.0274 21.1953L25.7053 22.8945ZM17.4912 16.1692L5.96511 27.9116L4.35743 29.5482C4.85818 30.1295 5.39408 30.675 5.96511 31.1848C9.04869 33.9393 13.0811 35.6206 17.5 35.6206C21.9189 35.6206 25.9513 33.9482 29.0349 31.1848C29.6059 30.675 30.1418 30.1295 30.6426 29.5482L29.0349 27.9116L17.4912 16.1692ZM17.4912 33.3043C13.7048 33.3043 10.2347 31.8913 7.56401 29.5482L17.4912 19.4424L27.4184 29.5482C24.7565 31.8913 21.2864 33.3043 17.4912 33.3043Z"
            fill="#442671"
          />
        </svg>
      </div>
      <b-form
        class="mx-auto mb-3 col-md-10"
        novalidate
        @submit.prevent="onSubmit()"
      >
        <b-form-group
          id="input-group-2"
          class="mb-2"
          label="Password"
          label-for="pass"
          style="position: relative;"
        >
          <b-form-input
            id="pass"
            v-model.trim="password"
            :state="passwordState"
            :type="!showPassword ? 'password' : 'text'"
            aria-describedby="password-help-block"
            placeholder="Enter Password"
            @input="validatePassword($event)"
          ></b-form-input>
          <svg
            v-if="!showPassword"
            height="24"
            style="position: absolute; top: 30px; right: 10px; cursor: pointer;"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            @click="showPassword = !showPassword"
          >
            <path
              d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
            />
          </svg>
          <svg
            v-if="showPassword"
            height="24"
            style="position: absolute; top: 30px; right: 10px; cursor: pointer;"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            @click="showPassword = !showPassword"
          >
            <path
              d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"
            />
          </svg>
          <div
            class="d-flex position-relative"
            style="font-size: 10px; font-size: 10px; color: #AAA3B1;"
          >
            <p>
              Required:
              <span :class="lowerCaseExist ? 'green-text' : ''">
                One lowercase letter,
              </span>
              <span :class="upperCaseExist ? 'green-text' : ''">
                one uppercase letter,
              </span>
              <span :class="password.length >= 8 ? 'green-text' : ''">
                8 characters minimum,
              </span>
              <span :class="numberExist ? 'green-text' : ''">
                one number
              </span>
            </p>
          </div>
          <password v-model.trim="password" :strength-meter-only="true" />
          <b-form-invalid-feedback
            v-if="$v.password.$dirty && !$v.password.required"
          >
            Please fill this field
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-if="$v.password.$dirty && !$v.password.minLength"
          >
            Password must contain at least 8 characters
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          class="mb-5"
          label="Repeat password"
          label-for="pass2"
        >
          <b-form-input
            id="pass2"
            v-model.trim="repeatPassword"
            :state="repeatPasswordState"
            aria-describedby="repeat-password-help-block"
            placeholder="Enter Password"
            type="password"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.sameAsPassword"
          >
            Passwords must be identical
          </b-form-invalid-feedback>
        </b-form-group>
        <div
          class="col-10"
          style="text-align: center; margin: 0 auto; margin-top: 50px!important;"
        >
          <button
            :class="
              (!password && !repeatPassword) || password !== repeatPassword
                ? 'disabled'
                : ''
            "
            :disabled="
              (!password && !repeatPassword) || password !== repeatPassword
            "
            class="rounded-button"
            style="width: 100%;"
            type="submit"
            variant="primary"
          >
            Submit
          </button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { email, minLength, required, sameAs } from "vuelidate/lib/validators";
import request from "@/utils/request";
import Password from "vue-password-strength-meter";
import api from "@/service/api";
import swal from "sweetalert2";
import LoginErrorModal from "./LoginErrorModal.vue";
import AppModal from "./AppModal.vue";
import { errorHandler } from "@/utils/errorHandler";

export default {
  name: "LoginModal",
  components: {
    Password,
    LoginErrorModal,
    AppModal
  },
  props: ["showLoginModal"],
  data() {
    return {
      lowerCaseExist: false,
      upperCaseExist: false,
      numberExist: false,
      showPassword: false,
      password: "",
      repeatPassword: "",
      id: "",
      accessToken: "",
      forgetPassword: false,
      passwordRestoreEmail: "",
      routerOptions: this.$router.options.routes,
      search: null,
      dataFromServer: [],
      dataFromServer2: [],
      form: {
        email: "",
        password: "",
        joinEmail: "",
        joinPwd: ""
      },
      showLoginErrorModal: false,
      showConfirmChangePasswordModal: false,
      showForgotPasswordSuccessModal: false
    };
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(8)
      }
    },
    passwordRestoreEmail: {
      email,
      required
    },
    password: { required, minLength: minLength(8) },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"]),
    passwordState() {
      return this.$v.password.$dirty &&
        (!this.$v.password.required || !this.$v.password.minLength)
        ? false
        : null;
    },
    repeatPasswordState() {
      return this.$v.repeatPassword.$dirty &&
        !this.$v.repeatPassword.sameAsPassword
        ? false
        : null;
    }
  },
  mounted() {
    if (
      this.$route.query &&
      this.$route.query.id &&
      this.$route.query.access_token
    ) {
      this.id = this.$route.query.id;
      this.accessToken = this.$route.query.access_token;
    }

    if (this.$refs.joinEmail?.value && this.$refs.joinPwd?.value) {
      this.login();
    }
  },
  methods: {
    ...mapActions("user", ["googleLogin"]),
    
    handleClosePasswordChangeConfirmModal() {
      this.showConfirmChangePasswordModal = false;
      this.$router.push({ name: "Main" }).catch(() => {});
    },
    handleCloseForgotPasswordSuccessModal() {
      this.showForgotPasswordSuccessModal = false;
    },
    handleCloseLoginErrorModal() {
      this.showLoginErrorModal = false;
    },
    handleCloseLoginModal() {
      this.forgetPassword = false;
      this.form.email = "";
      this.form.password = "";
      this.passwordRestoreEmail = "";
      this.$emit("onCloseLoginModal");
    },
    validatePassword(evt) {
      const isNotEmpty = evt && evt.length > 0;
      this.upperCaseExist = isNotEmpty && /[A-Z]/.test(evt);
      this.lowerCaseExist = isNotEmpty && /[a-z]/.test(evt);
      this.numberExist = isNotEmpty && /\d/.test(evt);
    },
    async onSubmit() {
      if (
        !this.password &&
        !this.repeatPassword &&
        this.repeatPassword !== this.password
      ) {
        this.$v.$touch();
        return;
      }
      if (!this.lowerCaseExist || !this.upperCaseExist || !this.numberExist) {
        swal.fire({
          icon: "error",
          title: "Your password is too weak.",
          text: "Follow the recommended password setting standards"
        });
        return;
      }
      swal.showLoading();
      request
        .put(`/api/users/${this.id}/set-password`, {
          password: this.password,
          accessToken: this.accessToken
        })
        .then(() => {
          this.passwordRestoreEmail = "";
          this.forgetPassword = false;
          this.$bvModal.hide("restore-modal");
          swal.close();
          this.showConfirmChangePasswordModal = true;
        })
        .catch(() => {});
    },
    cancelRestoring() {
      this.passwordRestoreEmail = "";
      this.forgetPassword = false;
    },
    async sendRestoreLink() {
      if (!this.$v.passwordRestoreEmail.$model) {
        swal.fire({
          icon: "error",
          text: "Type your email."
        });
        return;
      }
      if (!this.$v.passwordRestoreEmail.email) {
        swal.fire({
          icon: "error",
          text: "Email field must be email"
        });
        return;
      }
      swal.showLoading();
      const response = await api.sendPasswordChangeRequest(
        this.passwordRestoreEmail
      );
      swal.close();
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      this.showForgotPasswordSuccessModal = true;
      this.handleCloseLoginModal();
    },
    closeRestoreModal() {
      this.passwordRestoreEmail = "";
      this.forgetPassword = false;
      this.$bvModal.hide("restore-modal");
      this.$router
        .push({
          name: "Main"
        })
        .catch(() => {});
    },
    async login(payload) {
      if (!this.$v.form.password.minLength || !this.$v.form.email.$model) {
        swal.fire({
          icon: "error",
          text: "Incorrect passowrd or email"
        });
      }
      if (this.form.password && this.form.password) {
        swal.showLoading();
        const response = await api.authLogin({
          password: payload.password,
          email: payload.email
        });
        this.handleCloseLoginModal();
        errorHandler(response, () => {
          swal.close();
          this.$store.commit("user/AUTH_SUСCESS", response.Data);
          const filteredRoles = response.Data.user.roles
            .map(role => role.name)
            .filter(name =>
              ["dj", "producer", "fan", "promoter"].includes(name)
            );
          const role = filteredRoles[0];
          this.$router.push({ name: "OverviewType", params: { type: role } });
        });
      }
    },
    async getUser(search) {
      if (search) {
        this.dataFromServer = [];
        const response = await api.searcField(search);
        if (!response.Error) {
          response.Data.results.forEach(result => {
            for (const [key, value] of Object.entries(result)) {
              let val = value;
              this.dataFromServer2.push(key);
              if (typeof val === "string") {
                if (val.toLowerCase().includes(search.toLowerCase())) {
                  const found = this.dataFromServer.find(x => x === value);
                  if (!found) {
                    this.dataFromServer.push(value);
                  }
                }
              }
            }
          });
          // this.dataFromServer = response.Data.results;
          return;
        }
        if (response.Error) {
          swal.fire({
            icon: "Error",
            text: response.Error
          });
        }
      }
    },
    async Logout() {
      await this.$store.dispatch("user/logout");
      this.$store.commit("djdashboard/clearAllData");
    }
  }
};
</script>
<style scoped>
#sidebar-right .button-plus-img {
  cursor: pointer;
  position: absolute;
  top: 21px;
  right: 20px;
}

#restore-modal___BV_modal_body_ .button-plus-img:hover svg path {
  fill: #271a56 !important;
}

.navigation-bar {
  padding: 10px 20px;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
}

.login-button-wrapper {
  text-align: right;
}

.login-button {
  padding-left: 5px;
  border: 1px solid #75707b;
  text-align: center;
  padding: 6.5px 15px;
  font-size: 14px;
  border-radius: 60px;
  width: auto;
  color: #271a56;
  text-transform: capitalize;
  font-weight: 400;
  font-family: "Europa-Regular";
  letter-spacing: 4px;
}

.login-button:hover {
  color: #fff;
  background: #442671 !important;
  border-color: #442671;
}

.hamburger-button-wrapper svg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  cursor: pointer;
}

.login-popup-logo-wrapper {
  text-align: center;
  margin-bottom: 18px;
}

.my-2 {
  margin-top: 27px !important;
  margin-bottom: 27px !important;
}

.mb-0 {
  color: #75707b;
  font-size: 12px !important;
  line-height: 20px !important;
  margin-bottom: 8px !important;
}

#restore-modal___BV_modal_body_ .button-plus-img {
  display: block;
  position: absolute;
  right: 26.7px;
  top: -5px;
  cursor: pointer;
}

/* @media only screen and (max-width: 1146px) {
  .signup-button {
    display: none;
  }
} */
@media only screen and (max-width: 1100px) {
  .nav-item {
    font-size: 27px;
  }

  .b-sidebar {
    width: auto;
  }
}

@media only screen and (max-width: 768px) {
  .nav-item {
    font-size: 21px;
  }

  .nav-link {
    padding-top: 0;
    padding-bottom: 0;
  }
}

@media only screen and (max-width: 555px) {
  .nav-item {
    font-size: 16px;
  }
}

.aslice-logo {
  position: relative;
  top: 5px;
}

/* @media only screen and (max-width: 450px) {
  .login-button {
    padding: 6.5px 23px;
  }
} */
@media only screen and (max-width: 436px) {
  .hamburger-button-wrapper svg {
    top: 4px;
  }

  /* .login-button {
    padding: 6.5px 30px;
  } */
  .navbar-left {
    padding-right: 10px;
    padding-left: 0;
  }

  .navbar-right {
    width: 40px !important;
    padding-right: 0 !important;
  }
}

/* @media only screen and (max-width: 410px) {
  .login-button {
    padding: 6.5px 27px;
  }
} */
.navbar-left {
  padding-right: 10px;
}

.navbar-right {
  width: 40px;
  padding-right: 5px;
}

/* @media only screen and (max-width: 390px) {
  .login-button {
    padding: 6.5px 24px;
  }
}
@media only screen and (max-width: 350px) {
  .login-button {
    padding: 6.5px 20px;
  }
} */
@media only screen and (max-width: 335px) {
  /* .login-button {
    font-size: 12px;
    padding: 6.5px 20px;
  } */
  .navbar-left {
    padding-right: 0;
  }

  .navbar-right {
    max-width: 40px !important;
    padding-right: 5px !important;
  }
}

.forget-password {
  position: absolute;
  top: 38px;
  right: 10px;
  font-size: 10px;
  line-height: 16px;
  color: #271a56;
  cursor: pointer;
}

.signup-button {
  background: #442671 !important;
  border-color: #442671 !important;
  color: #fff;
}

.green-text {
  color: #31bcb2;
}

.invalid-feedback {
  font-size: 12px;
}

.disabled {
  background: #f2f1ef !important;
  border-color: #f2f1ef !important;
}

.disabled:hover {
  color: #271a56 !important;
}

.modal-login-background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
