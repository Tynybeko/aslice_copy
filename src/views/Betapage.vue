<template>
  <div class="container-fluid">
    <div class="header-row" style="padding-left: 50px;">
      <svg
        @click="goMainPage"
        width="118"
        height="30"
        viewBox="0 0 118 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
          d="M69.1511 20.8492V0H72.3845V20.4016C72.3845 22.0803 72.7596 23.0283 74.1888 23.0283C74.8097 23.0283 75.2753 22.8374 75.9285 22.4621L77.1119 25.181C76.0837 25.8459 74.9972 26.0698 73.9108 26.0698C70.826 26.0632 69.1511 24.0421 69.1511 20.8492Z"
          fill="white"
        />
        <path
          d="M78.3794 2.84397C78.3794 1.63923 79.343 0.658325 80.5523 0.658325C81.7358 0.658325 82.7252 1.63923 82.7252 2.84397C82.7252 4.04871 81.7293 5.02962 80.5523 5.02962C79.343 5.02962 78.3794 4.04871 78.3794 2.84397ZM78.9097 25.7472V7.90652H82.1432V25.7472H78.9097Z"
          fill="white"
        />
        <path
          d="M84.6265 16.8269C84.6265 11.6392 88.7266 7.59052 93.8872 7.59052C96.3705 7.59052 98.4529 8.47926 100.037 10.0263L97.8644 12.3963C96.8103 11.4483 95.4069 10.8163 93.8872 10.8163C90.5308 10.8163 87.8923 13.4101 87.8923 16.8269C87.8923 20.2436 90.5308 22.8374 93.8872 22.8374C95.4069 22.8374 96.8103 22.2054 97.8644 21.2574L100.07 23.6274C98.4529 25.1481 96.3705 26.0632 93.8872 26.0632C88.7266 26.0632 84.6265 22.0145 84.6265 16.8269Z"
          fill="white"
        />
        <path
          d="M117.628 17.6827H103.892C104.235 20.8163 106.66 22.9361 110.016 22.9361C111.82 22.9361 113.56 22.2383 114.679 21.0994L116.729 23.4101C115.021 25.181 112.751 26.0698 109.951 26.0698C104.577 26.0698 100.691 22.2449 100.691 16.9585C100.691 11.7051 104.603 7.59711 109.609 7.59711C114.304 7.59711 117.686 11.0467 117.686 15.8196C117.692 17.1758 117.692 17.3996 117.628 17.6827ZM114.491 14.9309C114.459 12.5872 112.318 10.7242 109.583 10.7242C106.97 10.7242 104.862 12.4029 104.144 14.9309H114.491Z"
          fill="white"
        />
      </svg>
      <span class="beta-title" @click="goMainPage">beta</span>
    </div>
    <div class="row content-box">
      <!-- <div class="col-lg-4 col-md-12 content-box-inside content-box-left">
        <div class="content-box-inside-wrapper">
          <h1>Beta Access</h1>
          <p>
            If you have already received a password please enter it below.
          </p>
          <form @submit.prevent="askBetaAccess">
            <div class="form-group">
              <label>Enter Email:</label>
              <input
                required
                type="email"
                class="form-control"
                id="beta-artist-email"
                min="1"
                minlength="1"
                v-model="betaAccess.email"
              />
            </div>
            <div class="form-group">
              <label>Enter Password:</label>
              <input
                required
                type="password"
                class="form-control"
                id="beta-artist-password"
                min="1"
                minlength="1"
                v-model="betaAccess.password"
              />
            </div>
            <div class="form-group" style="text-align: center;">
              <button type="submit" class="rounded-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> -->
      <div class="col-lg-6 col-md-12 content-box-inside  content-box-center">
        <h1>Request Access</h1>
        <p>
          If you would like to be part of the community please fill out the
          information below.
        </p>
        <form @submit.prevent="askAccess">
          <div class="form-group">
            <label>Enter Artist Name:</label>
            <input
              required
              type="text"
              class="form-control"
              id="access-artist-name"
              min="1"
              minlength="1"
              v-model="requestAccess.artistName"
            />
          </div>
          <div class="form-group">
            <label>Enter Email:</label>
            <input
              required
              type="email"
              class="form-control"
              id="access-artist-email"
              min="1"
              minlength="1"
              v-model="requestAccess.email"
            />
          </div>
          <vue-recaptcha
            class="recaptcha-warapper"
            ref="recaptcha"
            theme="dark"
            :sitekey="sitekey"
            @verify="googleValidate"
            @expired="onCaptchaExpired"
          />
          <div class="form-group" style="text-align: center;">
            <button type="submit" class="rounded-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="col-lg-6 col-md-12 content-box-inside  content-box-right">
        <h1>User Login</h1>
        <p>Already registered, login here.</p>
        <form @submit.prevent="userDoLogin">
          <div class="form-group">
            <label>Enter Email:</label>
            <input
              required
              type="email"
              class="form-control"
              id="login-email"
              min="1"
              minlength="1"
              v-model="userLogin.email"
            />
          </div>
          <div class="form-group" style="position: relative;">
            <label>Enter Password:</label>
            <input
              required
              type="password"
              class="form-control"
              id="login-password"
              min="1"
              minlength="1"
              v-model="userLogin.password"
            />
            <span class="forget-password" @click="showRestoreModal"
              >Forgot?</span
            >
          </div>
          <div class="form-group" style="text-align: center;">
            <button type="submit" class="rounded-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <b-modal id="restore-modal" centered modal-header="no">
      <span class="button-plus-img" @click="closeModalTotaly"
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
      <div>
        <form @submit.prevent="sendRestoreLink()">
          <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
            <div class="password" style="position: relative;">
              <p class="mb-0">Email</p>
              <input
                class="w-100 restore-email"
                v-model.trim="passwordRestoreEmail"
                type="email"
              />
            </div>
          </b-col>
          <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
            <button
              style="color: ##271A56!important; width: 100%;"
              class="mx-auto d-block rounded-button"
              type="submit"
            >
              SUBMIT
            </button>
          </b-col>
          <b-col cols="8" offset="2" class="mt-3 relative mt-18px">
            <button
              style="color: ##271A56!important; width: 100%;"
              class="mx-auto d-block rounded-button"
              type="reset"
              @click="cancelRestoring"
            >
              Cancel
            </button>
          </b-col>
        </form>
      </div>
      <div class="modal-login-background" @click="closeModalTotaly"></div>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import swal from "sweetalert2";
import api from "@/service/api";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "Betapage",
  components: { VueRecaptcha },
  computed: {
    ...mapState("user", ["data", "isAuthorized"])
  },
  data() {
    return {
      sitekey: process.env.VUE_APP_GOOGLE_AUTH_RECAPTCHA,
      notAnRobot: false,
      passwordRestoreEmail: "",
      betaAccess: {
        email: "",
        password: ""
      },
      requestAccess: {
        artistName: "",
        email: ""
      },
      userLogin: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("beforeAccess", ["betaInit"]),
    async checkQueryAndLogin() {
      if (!this.data) {
        if (
          this.$route.query &&
          this.$route.query.email &&
          this.$route.query.password
        ) {
          this.betaAccess.email = this.$route.query.email;
          this.betaAccess.password = this.$route.query.password;
          setTimeout(async () => {
            if (this.betaAccess.email && this.betaAccess.password) {
              await this.askBetaAccess();
            }
          }, 100);
        }
      }
    },
    showRestoreModal() {
      this.$bvModal.show("restore-modal");
    },
    closeModalTotaly() {
      this.passwordRestoreEmail = "";
      this.$bvModal.hide("restore-modal");
    },
    cancelRestoring() {
      this.passwordRestoreEmail = "";
      this.closeModalTotaly();
    },
    async sendRestoreLink() {
      if (!this.passwordRestoreEmail) {
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
    googleValidate() {
      this.notAnRobot = true;
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    askBetaAccess() {
      if (!this.betaAccess.email && !this.betaAccess.password) {
        return;
      }
      swal.showLoading();
      api
        .betaAccess(this.betaAccess)
        .then(res => {
          if (res.Error) {
            swal.fire({
              icon: "error",
              text: res.Error
            });
            return;
          } else {
            this.betaAccess = {
              email: "",
              password: ""
            };
            swal.close();
            this.betaInit();
            this.$router
              .push({
                name: "Main"
              })
              .catch(() => {});

            // this.$store.commit("user/AUTH_SUСCESS", res.Data);
            // this.$router.push({ name: "Dashboard" });
          }
        })
        .catch(() => {});
    },
    askAccess() {
      if (this.notAnRobot == false) {
        swal.fire({
          icon: "error",
          text: "Confirm that you are not a robot please."
        });
        return;
      }
      if (!this.requestAccess.artistName && !this.requestAccess.email) {
        swal.fire({
          icon: "error",
          text: "Fill Artist name and Artist email please."
        });
        return;
      }
      swal.showLoading();
      api
        .requestAccess(this.requestAccess)
        .then(res => {
          if (res.Error) {
            swal.fire({
              icon: "error",
              text: res.Error
            });
            return;
          } else {
            this.requestAccess = {
              artistName: "",
              name: ""
            };
            swal.fire({
              icon: "success",
              text: "Request submitted"
            });
            // this.$router.push({
            //   name: "Main"
            // });
            // this.$store.commit("user/AUTH_SUСCESS", res.Data);
            // this.$router.push({ name: "Dashboard" });
          }
        })
        .catch(() => {});
    },
    userDoLogin() {
      if (!this.userLogin.email && !this.userLogin.password) {
        return;
      }
      swal.showLoading();
      api
        .authLogin(this.userLogin)
        .then(res => {
          if (res.Error) {
            swal.fire({
              icon: "error",
              text: res.Error
            });
            return;
          } else {
            this.userLogin = {
              email: "",
              password: ""
            };
            swal.close();
            this.betaInit();
            this.$store.commit("user/AUTH_SUСCESS", res.Data);
            this.$router
              .push({
                name: "Main"
              })
              .catch(() => {});
          }
        })
        .catch(() => {});
    },
    goMainPage() {
      this.$router.push({ name: "Main" }).catch(() => {});
    }
  },
  async mounted() {
    if (this.data) {
      this.$router.push({ name: "Main" }).catch(() => {});
    } else {
      await this.checkQueryAndLogin();
    }
  }
};
</script>

<style scoped>
.header-row {
  position: relative;
  width: 100%;
  height: 110px;
  align-items: center;
  display: flex;
}
.container-fluid {
  padding-bottom: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #442671;
}
.beta-title {
  font-size: 11px;
  color: #9182c5;
  margin-left: 7px;
  margin-bottom: 17px;
  user-select: none;
  cursor: pointer;
}
.content-box {
  height: 100%;
  min-height: 100%;
  display: flex;
  flex: 1 0 auto;

  margin: 0;
  width: 100%;
  border-top: 1px solid #9182c5;
  border-radius: 2px 0px 0px 2px;
}
.content-box-inside {
  /* flex: 1; */
  /* padding: 25px; */
  padding: 5% 15%;
}
.content-box-inside-wrapper {
  align-items: center;
  align-self: center;
}
.content-box-left,
.content-box-center {
  border-right: 1px solid #9182c5;
}
.content-box-inside h1 {
  font-size: 36px;
  color: #9182c5;
  font-family: "Europa-Regular";
}
.content-box-inside p {
  font-size: 11px;
  color: #fff;
  font-family: "Roboto-Mono";
  margin-bottom: 30px;
}
label,
input {
  color: #fff !important;
  font-size: 11px;
  font-family: "Roboto-Mono";
  border-color: #fff !important;
}
.rounded-button {
  margin-top: 30px;
  color: #fff;
  border-color: #fff;
}
.rounded-button:hover {
  background: #fff;
  color: #442671 !important;
  border-color: #fff;
}
svg {
  cursor: pointer;
}
.content-box-inside h1 {
  height: 86px;
}
.content-box-inside p {
  height: 70px;
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
#login-modal___BV_modal_body_ .button-plus-img,
#restore-modal___BV_modal_body_ .button-plus-img {
  display: block;
  position: absolute;
  right: 26.7px;
  top: -5px;
  cursor: pointer;
}
#restore-modal___BV_modal_body_ .rounded-button {
  border-color: #271a56;
  color: #271a56;
}
#restore-modal___BV_modal_body_ .rounded-button:hover {
  background: #271a56;
  color: #fff !important;
}
#restore-modal___BV_modal_body_ input {
  color: #000 !important;
}
.login-popup-logo-wrapper {
  text-align: center;
  margin-bottom: 18px;
}
.restore-email {
  background: transparent !important;
  border: none !important;
  border-bottom: 1px solid #75707b !important;
  border-radius: 0 !important;
  padding-left: 0 !important;
  padding-bottom: 11px !important;
}
.mb-0 {
  color: #75707b;
  font-size: 12px !important;
  line-height: 20px !important;
  margin-bottom: 8px !important;
}
@media only screen and (max-width: 991px) {
  .content-box-inside {
    border-bottom: 1px solid #9182c5;
  }
}
</style>
