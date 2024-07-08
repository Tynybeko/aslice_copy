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
          <h4 class="base-form__title">
            COLLECTIONS &nbsp;<span style="color: #AAA3B1;">(optional)</span>
          </h4>
        </b-col>

        <b-col cols="12">
          <p v-if="isPromoter" class="mt-4 mb-4 base-form__description-text">
            Performance Rights Organization(PRO). <br /><br />
            Are you as a Venue/Festival/Promoter paying any local collection
            society? Aslice can generate reports and in some cases work directly
            with your PRO to help make sure your money is being paid down the
            line correctly to all the producers who are being played in your
            venues/events.
          </p>
          <p v-else class="mt-4 mb-4 base-form__description-text">
            Performance Rights Organization(PRO). <br /><br />
            Producers, we are working on establishing how to report your
            information to PRO’s for a 2nd layer of payment where applicable.
            Please check this
            <a href="/copyrightexplained">LINK</a>
            explaining the importance of PRO’s, publishing rights and how they
            affect you. If you’re not registered currently, you can add this at
            any time in your preferences. Additionaly, if you work with a
            publishing company, please enter the contact info below.
          </p>
        </b-col>
        <b-col class="mt-4" cols="12">
          <p class="mb-0 text-uppercase base-form__label-text">
            Performance Collection Society - ONLY
          </p>
          <v-select
            class="base-form__input input--performance"
            :options="societesData"
            label="name"
            v-model="society"
            :reduce="s => s.id"
            placeholder="Performance Collection Society Name"
          ></v-select>
        </b-col>

        <b-col class="mt-4" cols="12">
          <p class="mb-0 text-uppercase base-form__label-text">
            <template v-if="isPromoter">
              Contact person at society selected above (if known)
            </template>
            <template v-else>
              Publisher email
            </template>
          </p>
          <b-form-input
            class="w-100 px-0 base-form__input"
            type="email"
            placeholder="Enter Email"
            v-model="form.email"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row
        class="mt-5"
        style="background-color: #AAA3B1; height: 1px; margin-left: 0"
      ></b-row>

      <b-col class="process-one-right col px-0">
        <b-row
          style="padding-left: 20px; padding-right: 20px; max-width: 524px"
        >
          <b-col cols="12" class="mt-4">
            <verify-control-button
              @clicked="go"
              hide-prev
              :disabled-next="!canSubmit"
            >
              <button class="skip-button" @click="skipStep">
                <span class="margin-top-05">Skip</span>
              </button>
            </verify-control-button>
          </b-col>
        </b-row>
      </b-col>
    </b-col>
  </b-row>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import api from "@/service/api";
import VerifyControlButton from "./VerifyControlButton";
import VerifyProcessController from "@/mixins/verify-process-controller";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Process-4",
  mixins: [VerifyProcessController],
  components: {
    VerifyControlButton
  },
  computed: {
    ...mapState("verifySteps", ["registrationForm"]),
    ...mapState("user", ["data"]),
    ...mapGetters("user", ["isPromoter"]),
    canSubmit() {
      return this.society || !this.$v.form.email.$invalid;
    }
  },
  async created() {
    await this.getSocieties();
    this.form.email = this.data.publisherEmail || this.form.email;

    if (this.data.societies.length) {
      this.society = this.data.societies[0].id;
    }
  },
  async mounted() {
    localStorage.removeItem("redirectedFromProccess");
    if (!localStorage.getItem("verificationStarted")) {
      localStorage.setItem("verificationStarted", 4);
    }
    if (
      localStorage.getItem("verificationStarted") &&
      localStorage.getItem("verificationStarted") < 4
    ) {
      localStorage.removeItem("verificationStarted");
      localStorage.setItem("verificationStarted", 4);
    }

    await this.$nextTick();
    window.scrollTo(0, 0);
  },
  data() {
    return {
      societesData: [],
      form: {
        email: ""
      },
      society: null
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    compare(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    async getSocieties(search) {
      const response = await api.getSocieties(search);
      if (response.Error) {
        console.log(response.Error, "error");
        return;
      }
      if (response.Data.results.length > 0) {
        this.societesData = response.Data.results.sort(this.compare);
        this.societesData.unshift({ id: 0, name: "None" });
      }
    },
    skipStep() {
      this.$store.dispatch("user/setCurrentTabComponent", 5);
    },
    async go(val) {
      if (val > -1) {
        const payload = {};

        if (this.form.email) {
          payload.publisherEmail = this.form.email;
        }
        if (this.society) {
          payload.societies = [{ id: this.society }];
        }

        await this.updateUser({ newData: payload, user: this.data });
        this.$store.commit("verifySteps/registrationStepFour", this.form);
      } else await this.$store.dispatch("user/setCurrentTabComponent", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.skip-button {
  display: flex;
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  text-decoration: underline;
  color: #442671;
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

::v-deep .v-select {
  padding-top: 0px !important;
}

::v-deep .vs__selected-options {
  padding: 0 20px !important;
}

::v-deep .vs__dropdown-toggle {
  min-height: 30px;
  border: 1px solid #442671 !important;
  border-radius: 3px !important;

  .vs__selected-options {
    padding: 0px 20px !important;
  }

  svg {
    margin-top: 2px;
  }

  svg path {
    stroke: #442671;
  }
}

input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #aaa3b1;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #aaa3b1;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #aaa3b1;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #aaa3b1;
}
::v-deep .input--performance .vs__selected-options {
  display: contents;
  padding: 10px !important;
}
::v-deep .input--performance .vs__dropdown-toggle {
  padding: 5px !important;
}
::v-deep .input--performance .vs__selected {
  position: relative;
}
.vs__selected {
  text-align: left !important;
}
</style>
