<template>
  <div id="aslice-navbar">
    <div class="container-fluid navigation-bar">
      <div class="d-flex align-items-center justify-content-between">
        <div id="main-logo">
          <img
            class="aslice-logo"
            src="@/assets/images/logo-beta.svg"
            @click="backToHome"
          />
        </div>
        <div class="d-flex align-items-center">
          <div class="login-button-wrapper" style="padding-left: 0; display: flex;">
            <button
              v-b-modal.login-modal
              id="login-modal-button"
              class="login-button btn-outline"
              v-if="!isAuthorized"
            >
              LOGIN
            </button>
            <template v-if="!$device.mobile">
              <router-link
                style="margin-left: 10px;"
                class="login-button btn-outline signup-button text-decoration-none d-inline-flex"
                :to="{ name: 'Main', hash: '#sign-up-section' }"
                v-if="!isAuthorized"
              >
                SIGN UP
              </router-link>
              
              <div v-else class="d-flex align-items-center">
                <div v-if="djRole && this.$route.path === '/online-dashboard/playlists'">
                  <button class="btn-hidden-track">

                    Hidden Track:
                    <span>
                      {{ tracksPrivacyPreference }}
                    </span>
                  </button>
                
                </div>
                <div class="navbar-left">
                  <p
                    v-if="isPromoter && data.primeVenueName"
                    class="navbar-text navbar-asliceIdTitle"
                  >
                    {{ data.primeVenueName }}
                  </p>
                  <p
                    v-else-if="data.primeArtistName"
                    class="navbar-text navbar-asliceIdTitle"
                  >
                    {{ data.primeArtistName }}
                  </p>
                  <p class="navbar-text navbar-asliceidtext">
                    ID:
                    <span style="color: #442671">{{ data.asliceId }}</span>
                  </p>
                </div>
                <div class="navbar-right">
                  <img
                    v-if="data.avatar"
                    :src="avatar"
                    alt=""
                    class="navbar-avatar"
                  />
                  <svg
                    v-else
                    width="40"
                    height="40"
                    viewBox="0 0 60 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="30" cy="30.7764" r="30" fill="#442671" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 27.3613C33.3137 27.3613 36 24.675 36 21.3613C36 18.0476 33.3137 15.3613 30 15.3613C26.6862 15.3613 24 18.0476 24 21.3613C24 24.675 26.6862 27.3613 30 27.3613ZM24 29.7615C20.6863 29.7615 18 32.4478 18 35.7615V41.7615H42V35.7615C42 32.4478 39.3137 29.7615 36 29.7615H24Z"
                      fill="#F2F1EF"
                    />
                  </svg>
                </div>
              </div>
            </template>
          </div>
          <div class="hamburger-button-wrapper" v-b-toggle.sidebar-right style=" margin-left: 10px;">
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1.28262" x2="20" y2="1.28262" stroke="#442671" />
              <line y1="11.2826" x2="20" y2="11.2826" stroke="#442671" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isAuthorized && showCharityEventBanner" class="container-fluid navigation-bar  banner-top">
      <div class="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
        <div class="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
          <img src="@/assets/images/icon-vote.svg" alt=""/>
          <p class="m-0 pl-3">Help choose a charity to donate money collected for unmatched music.</p>
        </div>
        <div>
          <router-link to="/online-dashboard/overview/vote">
            <button>Vote now</button>
          </router-link>
        </div>
      </div>
    </div>

    <b-sidebar id="sidebar-right" right shadow backdrop backdrop-variant="dark">
      <div id="navigation-elements" class="px-3 py-2">
        <template v-for="option in routes">
          <div 
            :key="option.name"
            v-if="(option.navFooter || option.logout) && (option.isAuthorize ? option.isAuthorized == isAuthorized : true)"
          >
            <b-nav-item
              :to="{ name: option.name }"
              @click="hideShadow(option)"
            >
              {{ option.name }}
            </b-nav-item>
          </div>
        </template>
      </div>
    </b-sidebar>
    <b-modal id="login-modal" centered modal-header="no">
      <span class="button-plus-img" @click="closeLoginModal"
        ><svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4078 0.765695L14.7344 0.0922603L8 6.82661L1.26565 0.0922596L0.592215 0.765695L7.32657 7.50004L0.592215 14.2344L1.26565 14.9078L8 8.17348L14.7344 14.9078L15.4078 14.2344L8.67344 7.50005L15.4078 0.765695Z"
            fill="#442671"
          />
        </svg>
      </span>
      <div class="col-12 login-popup-logo-wrapper">
        <svg
          class="login-popup-logo"
          width="35"
          height="36"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4912 0C7.84513 0 0 7.98624 0 17.8058C0 21.8839 1.35291 25.649 3.62826 28.6539L5.25351 26.9994C3.38228 24.4237 2.27535 21.24 2.27535 17.8058C2.27535 9.26511 9.10141 2.30733 17.5 2.30733C25.8986 2.30733 32.7246 9.25616 32.7246 17.8058C32.7246 21.2489 31.6177 24.4237 29.7465 26.9994L31.3717 28.6539C33.6471 25.649 35 21.8839 35 17.8058C34.9912 7.98624 27.1461 0 17.4912 0ZM25.7053 22.8945C26.619 21.3741 27.1022 19.6213 27.1022 17.8058C27.1022 12.4131 22.7887 8.02201 17.4912 8.02201C12.1938 8.02201 7.88906 12.4131 7.88906 17.8058C7.88906 19.6213 8.38102 21.3741 9.28589 22.8945L10.9551 21.1953C10.4367 20.1579 10.1556 18.9953 10.1556 17.8058C10.1556 13.683 13.4501 10.3383 17.4912 10.3383C21.5324 10.3383 24.8268 13.692 24.8268 17.8058C24.8268 18.9953 24.5545 20.1579 24.0274 21.1953L25.7053 22.8945ZM17.4912 16.1692L5.96511 27.9116L4.35743 29.5482C4.85818 30.1295 5.39408 30.675 5.96511 31.1848C9.04869 33.9393 13.0811 35.6206 17.5 35.6206C21.9189 35.6206 25.9513 33.9482 29.0349 31.1848C29.6059 30.675 30.1418 30.1295 30.6426 29.5482L29.0349 27.9116L17.4912 16.1692ZM17.4912 33.3043C13.7048 33.3043 10.2347 31.8913 7.56401 29.5482L17.4912 19.4424L27.4184 29.5482C24.7565 31.8913 21.2864 33.3043 17.4912 33.3043Z"
            fill="#442671"
          />
        </svg>
      </div>
      <b-form @submit.prevent="login()" v-if="!forgetPassword">
        <b-row>
          <b-col cols="8" offset="2">
            <div class="email">
              <p class="mb-0">Email</p>
              <b-form-input
                class="w-100 px-0"
                type="email"
                v-model.trim="$v.form.email.$model"
              ></b-form-input>
            </div>
            <div
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
            </div>
          </b-col>
          <b-col cols="8" offset="2" class="mt-3">
            <div class="password" style="position: relative;">
              <p class="mb-0">Password</p>
              <input
                class="w-100"
                v-model.trim="$v.form.password.$model"
                type="password"
              />
              <span
                class="forget-password"
                @click="forgetPassword = !forgetPassword"
                >Forgot?</span
              >
            </div>
          </b-col>
          <b-col cols="8" offset="2" class="relative">
            <div class="d-flex flex-row">
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
                Field must have at least
                {{ $v.form.password.$params.minLength.min }} characters.
              </div>
            </div>
          </b-col>
          <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
            <buttons-rounded
              style="color: ##271A56!important;"
              :btn-disable="
                form.form && form.password && form.password.length >= 8
              "
              class="mx-auto d-block"
              button-type="submit"
            />
          </b-col>
        </b-row>
        <b-row v-if="availableToGoogleLoging">
          <b-col cols="8" offset="2">
            <p
              class="text-center my-2"
              style="color: #75707B; font-size: 12px; margin: 27.5px 0!important;"
            >
              or
            </p>
          </b-col>
          <b-col cols="8" offset="2">
            <buttons-smaller-rounded
              class="mx-auto d-block google-signin-button"
              v-google-signin-button="clientId"
            ></buttons-smaller-rounded>
          </b-col>
          <b-col
            cols="8"
            offset="2"
            class="d-flex flex-row justify-content-center align-items-center"
          >
            <feedback-regular :title="errorText" />
          </b-col>
        </b-row>
      </b-form>
      <div v-else>
        <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
          <div class="password" style="position: relative;">
            <p class="mb-0">Email</p>
            <input
              class="w-100"
              v-model.trim="passwordRestoreEmail"
              type="email"
            />
          </div>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
          <button
            style="color: ##271A56!important; width: 100%;"
            class="mx-auto d-block rounded-button"
            @click="sendRestoreLink"
          >
            SUBMIT
          </button>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
          <button
            style="color: ##271A56!important; width: 100%;"
            class="mx-auto d-block rounded-button"
            @click="cancelRestoring"
          >
            Cancel
          </button>
        </b-col>
      </div>
      <div class="modal-login-background" @click="closeLoginModalTotaly"></div>
    </b-modal>
    <b-modal id="restore-modal" centered modal-header="no">
      <span class="button-plus-img" @click="closeRestoreModal"
        ><svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4078 0.765695L14.7344 0.0922603L8 6.82661L1.26565 0.0922596L0.592215 0.765695L7.32657 7.50004L0.592215 14.2344L1.26565 14.9078L8 8.17348L14.7344 14.9078L15.4078 14.2344L8.67344 7.50005L15.4078 0.765695Z"
            fill="#442671"
          />
        </svg>
      </span>
      <div class="col-12 login-popup-logo-wrapper">
        <svg
          class="login-popup-logo"
          width="35"
          height="36"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4912 0C7.84513 0 0 7.98624 0 17.8058C0 21.8839 1.35291 25.649 3.62826 28.6539L5.25351 26.9994C3.38228 24.4237 2.27535 21.24 2.27535 17.8058C2.27535 9.26511 9.10141 2.30733 17.5 2.30733C25.8986 2.30733 32.7246 9.25616 32.7246 17.8058C32.7246 21.2489 31.6177 24.4237 29.7465 26.9994L31.3717 28.6539C33.6471 25.649 35 21.8839 35 17.8058C34.9912 7.98624 27.1461 0 17.4912 0ZM25.7053 22.8945C26.619 21.3741 27.1022 19.6213 27.1022 17.8058C27.1022 12.4131 22.7887 8.02201 17.4912 8.02201C12.1938 8.02201 7.88906 12.4131 7.88906 17.8058C7.88906 19.6213 8.38102 21.3741 9.28589 22.8945L10.9551 21.1953C10.4367 20.1579 10.1556 18.9953 10.1556 17.8058C10.1556 13.683 13.4501 10.3383 17.4912 10.3383C21.5324 10.3383 24.8268 13.692 24.8268 17.8058C24.8268 18.9953 24.5545 20.1579 24.0274 21.1953L25.7053 22.8945ZM17.4912 16.1692L5.96511 27.9116L4.35743 29.5482C4.85818 30.1295 5.39408 30.675 5.96511 31.1848C9.04869 33.9393 13.0811 35.6206 17.5 35.6206C21.9189 35.6206 25.9513 33.9482 29.0349 31.1848C29.6059 30.675 30.1418 30.1295 30.6426 29.5482L29.0349 27.9116L17.4912 16.1692ZM17.4912 33.3043C13.7048 33.3043 10.2347 31.8913 7.56401 29.5482L17.4912 19.4424L27.4184 29.5482C24.7565 31.8913 21.2864 33.3043 17.4912 33.3043Z"
            fill="#442671"
          />
        </svg>
      </div>
      <b-form
        @submit.prevent="onSubmit()"
        class="mx-auto mb-3 col-md-10"
        novalidate
      >
        <b-form-group
          class="mb-2"
          id="input-group-2"
          label="Password"
          label-for="pass"
          style="position: relative;"
        >
          <b-form-input
            @input="validatePassword($event)"
            id="pass"
            v-model.trim="password"
            :type="!showPassword ? 'password' : 'text'"
            placeholder="Enter Password"
            :state="passwordState"
            aria-describedby="password-help-block"
          ></b-form-input>
          <svg
            style="position: absolute; top: 30px; right: 10px; cursor: pointer;"
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
            style="position: absolute; top: 30px; right: 10px; cursor: pointer;"
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
          <div
            :class="lowerCaseExist ? 'green-text' : ''"
            class="additional-information"
            style="margin-top: 15px;"
          >
            One lowercase letter required.
          </div>
          <div
            :class="upperCaseExist ? 'green-text' : ''"
            class="additional-information"
          >
            One uppercase letter required.
          </div>
          <div
            :class="password.length >= 8 ? 'green-text' : ''"
            class="additional-information"
          >
            8 characters minimum.
          </div>
          <div
            :class="numberExist ? 'green-text' : ''"
            class="additional-information"
          >
            One number required.
          </div>
        </b-form-group>

        <b-form-group
          class="mb-5"
          id="input-group-3"
          label="Repeat password"
          label-for="pass2"
        >
          <b-form-input
            id="pass2"
            v-model.trim="repeatPassword"
            type="password"
            :state="repeatPasswordState"
            placeholder="Enter Password"
            aria-describedby="repeat-password-help-block"
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
            :disabled="
              (!password && !repeatPassword) || password !== repeatPassword
            "
            :class="
              (!password && !repeatPassword) || password !== repeatPassword
                ? 'disabled'
                : ''
            "
            style="width: 100%;"
            class="rounded-button"
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
import { mapState, mapActions, mapGetters } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import request from "@/utils/request";
import Password from "vue-password-strength-meter";
import GoogleSignInButton from "vue-google-signin-button-directive";
import ButtonsRounded from "@/components/global/buttons/ButtonsRounded";
import ButtonsSmallerRounded from "@/components/global/buttons/ButtonsSmallerRounded";
import FeedbackRegular from "@/components/global/feedback/FeedbackRegular";
import api from "@/service/api";
import swal from "sweetalert2";
import findRoutesRecursive from "@/mixins/findRoutesRecursive";

const clientId = process.env.VUE_APP_GOOGLE_AUTH;

export default {
  directives: {
    GoogleSignInButton
  },
  mixins: [findRoutesRecursive],
  components: {
    ButtonsRounded,
    ButtonsSmallerRounded,
    FeedbackRegular,
    Password
  },
  data() {
    return {
      availableToGoogleLoging: false,
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
      clientId,
      form: {
        email: "",
        password: ""
      },
      errorText: ""
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
    ...mapState("app", ["shadowBackground"]),
    ...mapState("app", ["showCharityEventBanner"]),
    ...mapGetters("user", ["isPromoter"]),
    playlistsPage(){
      if (this.$route.path == "/online-dashboard/playlists" ) {
          return true
        } else {
          return false
        }
    },
    routes() {
      return this.find(route => {
        if (this.data?.id) {
          return route.navFooter || route.logout;
        }
        return route.navFooter && !route.isAuthorized;
      });
      // return this.find(route => {
      //   return (
      //     (route.navFooter || route.logout) &&
      //     route.isAuthorized === this.isAuthorized
      //   );
      // });
    },
    tracksPrivacyPreference(){
      return this.data.tracksPrivacyPreference === 'Hide track details' ?  'ON' : 'OFF'
    },
    avatar() {
      let avatarUrl = "";
      if (this.data && this.data.avatar) {
        avatarUrl = `${process.env.VUE_APP_S3_URL}${this.data.avatar}`;
      }
      return avatarUrl;
    },
    djRole() {
      return this.data.roles?.find(e => e.name === 'dj');
    },
    isDataFullfilled() {
      if (this.data && Object.keys(this.data).length > 0) {
        return true;
      } else return false;
    },
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
  methods: {
    ...mapActions("user", ["googleLogin"]),
    closeLoginModalTotaly() {
      this.closeModalTotaly();
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
      await request.put(`/api/users/${this.id}/set-password`, {
        password: this.password,
        accessToken: this.accessToken
      });
      this.$router
        .push({
          name: "Main"
        })
        .catch(() => {});
    },
    goToSignUp() {
      if (window.innerWidth > 991) {
        window.scrollTo({
          top: document.body.scrollHeight - 1000,
          behavior: "smooth"
        });
      } else
        window.scrollTo({
          top: document.body.scrollHeight - 1800,
          behavior: "smooth"
        });
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
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      swal.fire({
        icon: "success",
        text: "Check your email please"
      });
      this.closeModalTotaly();
    },
    hideShadow(option) {
      if (option.logout) {
        this.Logout();
      }
    },
    closeModalTotaly() {
      this.passwordRestoreEmail = "";
      this.forgetPassword = false;
      this.$bvModal.hide("restore-modal");
      this.$bvModal.hide("login-modal");
    },
    closeLoginModal() {
      this.$bvModal.hide("login-modal");
      this.passwordRestoreEmail = "";
      this.forgetPassword = false;
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
    showRestoreModal() {
      this.$bvModal.show("restore-modal");
    },
    closeSideBar() {
      document.getElementById("main-logo").click();
    },
    async OnGoogleAuthSuccess(idToken) {
      await this.googleLogin({ token: idToken });
      this.$bvModal.hide("login-modal");
    },
    OnGoogleAuthFail(error) {
      if (error.error !== "popup_closed_by_user") {
        swal.fire({
          icon: "error",
          text: error.error
        });
      } else {
        swal.fire({
          icon: "info",
          text: "You need to fill required fields to log in"
        });
      }
    },
    login() {
      if (!this.$v.form.password.minLength || !this.$v.form.email.$model) {
        swal.fire({
          icon: "error",
          text: "Error"
        });
      } else {
        swal.showLoading();
        api
          .authLogin(this.form)
          .then(res => {
            if (res.Error) {
              this.form.email = "";
              this.form.password = "";
              swal.close();
              this.errorText = res.Error;
              return;
            } else {
              this.form = {
                email: "",
                password: ""
              };
              swal.close();
              this.$store.commit("user/AUTH_SUСCESS", res.Data);
              this.$bvModal.hide("login-modal");
              this.$router.push({ name: "Dashboard" }).catch(() => {});
            }
          })
          .catch(() => {});
      }
    },
    async checkQueryAndLogin() {
      if (!this.data) {
        if (
          this.$route.query &&
          this.$route.query.email &&
          this.$route.query.password
        ) {
          this.form.email = this.$route.query.email;
          this.form.password = this.$route.query.password;
          setTimeout(async () => {
            if (this.form.email && this.form.password) {
              await this.login();
            }
          }, 100);
        }
      }
    },
    backToHome() {
      try {
        const { roles } = this.data;
        const filteredRoles = roles
          .map(role => role.name)
          .filter(name => ["dj", "producer", "fan", "promoter"].includes(name));
        const role = filteredRoles[0];
        this.$router
          .push({ name: "OverviewType", params: { type: role } })
          .catch(() => {});
      } catch (e) {
        if (this.$route.name !== "Main") {
          this.$router.push({ name: "Main" }).catch(() => {});
        }
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
  },
  async mounted() {
    if (
      this.$route.query &&
      this.$route.query.id &&
      !this.$route.query.email &&
      this.$route.query.access_token
    ) {
      this.id = this.$route.query && this.$route.query.id;
      this.accessToken = this.$route.query && this.$route.query.access_token;
      this.showRestoreModal();
    }
    await this.checkQueryAndLogin();
  }
};
</script>
<style scoped lang="scss">
.banner-top{
  background:#9856FC!important;
  max-height: 100%!important;
  p{
    font-family: "Graphik-Regular-Web";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
  }
  @media only screen and (max-width: 768px){
    p{
      text-align: center;
      padding: 16px 0
    }
  }
  a{
    text-decoration: none;
    button{
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 15px 10px;
      gap: 10px;
      width: 126px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #442671;
      border-radius: 50px;
      font-family: 'Graphik-Regular-Web';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      color: #442671;
    }
  }
}
@media only screen and (max-width: 768px){
    .banner-top{
      padding-top: 26px!important;
      padding-bottom: 26px!important;
      padding-left: 20px!important;
      padding-right: 20px!important;
    }
  }
#aslice-navbar {
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
}
#sidebar-right .button-plus-img {
  cursor: pointer;
  position: absolute;
  top: 21px;
  right: 20px;
}
#login-modal___BV_modal_body_ .button-plus-img:hover svg path,
#restore-modal___BV_modal_body_ .button-plus-img:hover svg path {
  fill: #271a56 !important;
}
.navigation-bar {
  padding: 10px 20px;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  max-height: 60px;
}
.login-button-wrapper {
  text-align: right;
}
.login-button {
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  color: #442671;
  border-radius: 50px;
  letter-spacing: 0.13em;
  background: transparent;
  text-transform: uppercase;
  border: 1px solid #442671;
  font-family: "Graphik-Regular-Web";
  display: flex;
  align-items: center;
}
.login-button:hover {
  color: #fff;
  background: #442671 !important;
  border-color: #442671;
}
.hamburger-button-wrapper svg {
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
#login-modal___BV_modal_body_ .button-plus-img,
#restore-modal___BV_modal_body_ .button-plus-img {
  display: block;
  position: absolute;
  right: 26.7px;
  top: -5px;
  cursor: pointer;
}
#login-modal___BV_modal_body_ button.black-text {
  color: #271a56 !important;
}

@media only screen and (max-width: 768px) {
  .nav-link {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.aslice-logo {
  cursor: pointer;
}

@media only screen and (max-width: 512px) {
  .hamburger-button-wrapper svg {
    top: 4px;
  }
  .login-button {
    height: 40px;
    padding: 0 20px;
    font-size: 14px;
    color: #442671;
    border-radius: 50px;
    letter-spacing: 0.13em;
    background: transparent;
    text-transform: uppercase;
    border: 1px solid #442671;
    font-family: "Graphik-Regular-Web";
    display: flex;
    align-items: center;
  }
}

.navbar-right {
  width: 40px;
  margin: 0px 15px;
}
.shadow-background {
  z-index: 50;
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.navbar-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
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

.navbar-asliceIdTitle {
  margin: 0;
  font-family: "Roboto-Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #442671;
  padding-bottom: 0;
  letter-spacing: 0;
}
.navbar-asliceidtext {
  color: #aaa3b1;
  padding-bottom: 0;
  padding-right: 5px;
  font-size: 9px;
  font-weight: bold;
  line-height: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: "Graphik-Regular-Web";
}
@media (max-width: 400px) {
}
.btn-hidden-track{
  cursor: revert;
  padding: 10px;
  background-color: #271a56;
  color: #AAA3B1;
  text-transform: uppercase;
  margin-right: 20px;
  font-family: "Graphik-Regular-Web";
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  border: none;
  letter-spacing: 0.15em;
  
  span{
    color:#29C9BE
  }
}

</style>
