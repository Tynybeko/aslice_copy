<template>
  <b-container fluid class="login-wrapper">
    <b-row class="h-100">
      <b-col
        md="3"
        class="login-wrapper__header d-flex flex-column justify-content-center align-items-center relative"
      >
        <router-link to="/" class="logo-position">
          <img src="@/assets/images/main/logo.png" alt="Aslice" />
        </router-link>
        <h2>Login</h2>
      </b-col>
      <b-col
        md="9"
        class="login-wrapper__content d-flex justify-content-center align-items-center"
      >
        <b-form @submit.prevent="login()">
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
              <div class="password">
                <p class="mb-0">Password</p>
                <input
                  class="w-100"
                  v-model.trim="$v.form.password.$model"
                  type="password"
                />
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
            <b-col cols="8" offset="2" class="mt-3 relative">
              <buttons-rounded
                :btn-disable="$v.$invalid"
                class="mx-auto d-block"
                button-type="submit"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="8" offset="2">
              <p class="text-center my-2">or</p>
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
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";
import ButtonsRounded from "@/components/global/buttons/ButtonsRounded";
import FeedbackRegular from "@/components/global/feedback/FeedbackRegular";
import api from "@/service/api";

export default {
  components: {
    ButtonsRounded,
    FeedbackRegular
  },
  data() {
    return {
      form: {
        email: "", //maxim@trmcreates.com
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
    }
  },
  computed: {
    ...mapState("user", ["token", "data"])
  },
  methods: {
    login() {
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        api
          .authLogin(this.form)
          .then(res => {
            if (res.Error) {
              console.log(res.Error);
              this.errorText = res.Error;
            } else {
              this.form = {
                email: "",
                password: ""
              };
              this.$store.commit("user/AUTH_SUСCESS", res.Data);
              this.$router.push("/").catch(() => {});
            }
          })
          .catch(() => {});
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.data && this.data.id && this.data.roles.length > 0) {
        this.$router.push({ path: "/" }).catch(() => {});
      }
    }, 500);
  }
};
</script>

<style lang="scss">
.logo-position {
  position: absolute;
  top: 26px;
  left: 36px;
}
</style>
