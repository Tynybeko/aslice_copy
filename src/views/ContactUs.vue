<template>
  <div>
    <div class="container-fluid">
      <div class="container contact-us-page">
        <div class="col-lg-8 col-12" style="padding: 0; margin: 0 auto;">
          <h1 class="page-title" style="margin-bottom: 17px; padding: 0 15px;">
            Contact
          </h1>
          <b-form
            @submit.prevent="sendMessage"
            class="mx-auto mb-5 col-md-12 performer-form"
            autocomplete="off"
          >
            <div class="row">
              <div class="col-lg-6 col-12">
                <b-form-group
                  id="input-group-1"
                  label="First Name"
                  label-for="firstName"
                  style="margin-top: 20px;"
                  class="input-label"
                >
                  <b-form-input
                    id="firstName"
                    v-model="messageForm.firstName"
                    type="text"
                    required
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-lg-6 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Last Name"
                  label-for="lastName"
                  style="margin-top: 20px;"
                  class="input-label"
                >
                  <b-form-input
                    id="lastName"
                    v-model="messageForm.lastName"
                    type="text"
                    required
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-12">
                <b-form-group
                  id="input-group-1"
                  label="Email"
                  label-for="email"
                  class="input-label"
                >
                  <b-form-input
                    id="email"
                    v-model="messageForm.email"
                    type="email"
                    required
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div
                class="col-12"
                id="contact-questions"
                style="margin-bottom: 15px;"
              >
                <p class="mb-0 label-text" style="margin-bottom: 10px!important;">
                  What do you have a question about?
                </p>
                <v-select
                  class="conact-question"
                  :options="[...questionOptions]"
                  label="label"
                  :reduce="questionOptions => questionOptions.label"
                  :value="[...questionOptions].label"
                  v-model="messageForm.topic"
                  placeholder="Select an option"
                  ><template #search="{attributes, events}">
                    <input
                      class="vs__search"
                      :required="!messageForm.topic"
                      v-bind="attributes"
                      v-on="events"
                    /> </template
                ></v-select>
              </div>
              <div class="col-12" style="margin-bottom: 15px;">
                <p class="mb-0 label-text" style="margin-bottom: 10px!important;">
                  Comments
                </p>
                <textarea
                  class="contact-comments"
                  name="contact-comments"
                  id="contact-comments"
                  required
                  v-model="messageForm.comment"
                ></textarea>
              </div>
              <div class="col-12" style="margin-bottom: 15px;">
                <p class="mb-0 label-text" style="margin-bottom: 10px!important;">
                  Screenshot / Attachment (JPEG, PNG)
                </p>
                <b-form-file
                  v-model="$v.messageForm.attachments.$model"
                  placeholder="Choose a file or drop it here "
                  accept="image/jpeg, image/png"
                  drop-placeholder="Choose a file or drop it here "
                  @input="$v.messageForm.attachments.$touch()"
                  @change="$v.messageForm.attachments.$reset()"
                ></b-form-file>
                <span
                  :style="{
                    fontSize: '11px',
                    color:
                      $v.messageForm.attachments.$invalid &&
                      $v.messageForm.attachments.$dirty
                        ? 'red'
                        : '#AAA3B1'
                  }"
                  class="description mt-2 d-flex"
                  >Limit: one attachment per submission.</span
                >
              </div>
              <div class="col-12">
                <vue-recaptcha
                  class="recaptcha-warapper"
                  ref="recaptcha"
                  theme="dark"
                  :sitekey="sitekey"
                  @verify="googleValidate"
                  @expired="onCaptchaExpired"
                />
              </div>
              <div class="col-12">
                <div class="row" style="margin: 0;">
                  <button class="rounded-button" type="submit">SEND</button>
                </div>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script>
import Footer from "@/components/FooterNew.vue";
import swal from "sweetalert2";
import api from "@/service/api";
import VueRecaptcha from "vue-recaptcha";
import { randomNumber } from "@/utils/helper";
import { mapState } from "vuex";

const EmptyMessageForm = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "",
  comments: "",
  attachments: []
};

export default {
  name: "Contact",
  metaInfo: {
    title: "Contact page",
    meta: [
      {
        property: "og:description",
        content:
          "Aslice.com | Creating A Fairer Music Ecosystem → Contact The Aslice Team here via our official contact page. For accounting and technical support, business/partnership inquiries, and more."
      },
      {
        name: "description",
        content:
          "Aslice.com | Creating A Fairer Music Ecosystem → Contact The Aslice Team here via our official contact page. For accounting and technical support, business/partnership inquiries, and more."
      }
    ]
  },
  components: { VueRecaptcha, Footer },
  data() {
    return {
      sitekey: process.env.VUE_APP_GOOGLE_AUTH_RECAPTCHA,
      notAnRobot: false,
      messageForm: JSON.parse(JSON.stringify(EmptyMessageForm)),
      calculate: {
        left: null,
        right: null,
        result: null
      },
      questionOptions: [
        {
          id: 1,
          label: "General"
        },
        {
          id: 2,
          label: "Registration"
        },
        {
          id: 3,
          label: "Identity & Music Rights"
        },
        {
          id: 4,
          label: "Payments"
        },
        {
          id: 5,
          label: "Account"
        },
        {
          id: 6,
          label: "Feature Request"
        },
        {
          id: 7,
          label: "Report A Bug"
        },
        {
          id: 8,
          label: "Support The Sound"
        }
      ]
    };
  },
  validations: {
    messageForm: {
      attachments: {
        maxSize: value => {
          console.log(value);
          if (Array.isArray(value) && value.length !== 0) {
            const result = value.reduce((acc, item) => {
              acc += item.size;
              return acc;
            }, 0);
            console.log(result);
            return result < 10485760;
          }
          return true;
        }
      }
    }
  },
  methods: {
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    googleValidate() {
      this.notAnRobot = true;
    },
    initCalculate() {
      this.calculate.left = randomNumber(1, 100);
      this.calculate.right = randomNumber(1, 100);
      this.calculate.result = null;
    },
    async sendMessage() {
      if (this.$v.messageForm.$invalid) {
        swal.fire({
          icon: "error",
          text: "The total file size should not exceed 10mb"
        });
        return;
      }
      if (this.notAnRobot == false) {
        swal.fire({
          icon: "error",
          text: "Confirm that you are not a robot please."
        });
        return;
      }
      const payload = {
        firstName: this.messageForm.firstName,
        lastName: this.messageForm.lastName,
        email: this.messageForm.email,
        topic: this.messageForm.topic,
        comments: this.messageForm.comment,
        attachments: this.messageForm.attachments
      };

      const formDataPayload = new FormData();
      Object.keys(payload).map(key => {
        if (Array.isArray(payload[key])) {
          for (let i in payload[key]) {
            formDataPayload.append(`${key}`, payload[key][i]);
          }
        } else {
          formDataPayload.append(key, payload[key]);
        }
      });
      swal.showLoading();
      const response = await api.sendFeedback(formDataPayload);
      if (response.Error || response.Data.Error) {
        if (response.Error.includes("topic should not be empty")) {
          swal.fire({
            icon: "error",
            text: "Question about field should not be empty"
          });
          return;
        }
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      swal.fire({
        icon: "success",
        title: "Feedback sent successfully!",
        showConfirmButton: true
      });
      this.messageForm = JSON.parse(JSON.stringify(EmptyMessageForm));
      this.initCalculate();
    },
    cleanMessageForm() {}
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.initCalculate();
  },
  computed: {
    ...mapState("user", ["data"]),
    calculateLabel() {
      return `Please type result of ${this.calculate.left} + ${this.calculate.right} below`;
    }
  }
};
</script>

<style scoped>
.container-fluid {
  padding: 3.5px 21.5px;
  padding-top: 150px;
  padding-bottom: 30px;
  min-height: calc(100vh - 365px);
  background: #e5e5e5;
}
.contact-comments {
  max-height: 150px;
  height: 150px;
  resize: none;
  border: 1px solid #75707b;
  background: transparent;
  color: #000;
  width: 100%;
  outline: none;
  padding: 5px 8px;
  font-size: 12px;
}
.rounded-button {
  height: 40px;
  padding: 0 20px;
  letter-spacing: 0.13em;
}
</style>
