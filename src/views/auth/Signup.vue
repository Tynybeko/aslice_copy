<template>
  <b-container fluid class="signup-wrapper">
    <b-row class="h-100">
      <b-col
        md="6"
        offset-md="3"
        class="signup-wrapper__content d-flex flex-column justify-content-center align-items-center"
      >
        <b-row no-gutters class="w-100">
          <b-col cols="12">
            <b-row no-gutters>
              <b-col cols="8" offset="2">
                <div class="d-flex flex-column justify-content-start">
                  <h4 class="text-uppercase">AS A {{ person[0].title }}</h4>
                  <h4 class="mt-3">{{ person[0].content }}</h4>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <form class="w-100 mt-3" @submit.prevent="signup()">
          <b-row>
            <b-col cols="8" offset="2">
              <div class="email">
                <p class="mb-0">Email</p>
                <input
                  class="w-100"
                  v-model.trim="$v.form.email.$model"
                  type="email"
                />
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
              <buttons-rounded
                :btn-disable="$v.$invalid"
                class="mx-auto d-block"
                title="Sign up"
                button-type="submit"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="8" offset="2">
              <p class="text-center my-2">or</p>
            </b-col>
            <b-col cols="8" offset="2">
              <buttons-smaller-rounded
                title="Sign up with"
                class="mx-auto d-block"
                @clicked="$router.push('/signup/success')"
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
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import ButtonsRounded from "@/components/global/buttons/ButtonsRounded";
import ButtonsSmallerRounded from "@/components/global/buttons/ButtonsSmallerRounded";
import FeedbackRegular from "@/components/global/feedback/FeedbackRegular";
// import api from "@/service/api";
export default {
  components: {
    ButtonsRounded,
    ButtonsSmallerRounded,
    FeedbackRegular
  },
  data() {
    return {
      form: {
        email: "",
        role: ""
      },
      errorText: "",
      person: {},
      people: [
        {
          id: 0,
          title: "dj",
          content:
            "I will be paying in to Aslice. I make money from performances. I want to help creators/producers."
        },
        {
          id: 1,
          title: "producer",
          content:
            "I produce music, either released or not, and my music gets played by DJs."
        },
        {
          id: 2,
          title: "fan",
          content: " I want to follow my favorite DJs and Producers"
        }
      ]
    };
  },
  validations: {
    form: {
      email: {
        email,
        required
      }
    }
  },
  created() {
    this.person = this.people.filter(item => {
      return item.title == this.$route.params.id;
    });
  },
  methods: {
    signup() {
      console.log(this.$v.$invalid);
      this.form.role = this.$route.params.id;
      // api
      //   .authSignup(this.form)
      //   .then((res) => {
      //     if (res.Error) {
      //       this.errorText = res.Error;
      //     } else {
      //       this.$router.push("/signup/success");
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }
};
</script>
