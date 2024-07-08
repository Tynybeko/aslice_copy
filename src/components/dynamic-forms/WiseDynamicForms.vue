<template>
  <div>
    <div class="forms-group px-4 py-4">
      <FormDynamic
        v-if="currentScreen === 'currency-select'"
        :form="currencyForm"
        :confirmation-text="'next'"
        @update:forms="changeCurrency($event)"
        @confirm:send="currentScreen = 'wise-form'"
        @close:form="currentScreen = 'wise-form'"
      >
        <template #send-btn=""></template>
      </FormDynamic>
    </div>
    <FormDynamicMultiple
      v-if="currentScreen === 'wise-form'"
      :api="api"
      @send:form="sendForm"
    >
      <template #close-btn>
        <button
          class="btn-default"
          type="button"
          @click="currentScreen = 'currency-select'"
        >
          <span class="d-sm-inline-block margin-top-05">
            back
          </span>
        </button>
      </template>
    </FormDynamicMultiple>
  </div>
</template>
<script>
import { Currencies } from "../../utils/currency-codes";

import FormDynamic from "./components/FormDynamic";
import FormDynamicMultiple from "@/components/dynamic-forms/components/FormDynamicMultiple";

import api from "@/service/api";
import { mapGetters, mapActions } from "vuex";
import { errorHandler } from "@/utils/errorHandler";
import swal from "sweetalert2";

const ERRORS_MAP = new Map([
  [
    "details.legalType must be one of the following values: PRIVATE,BUSINESS",
    "'Recipient type' must be one of the following values: Person, Business."
  ],
  [
    "details.legalType should not be empty",
    "'Recipient type' should not be empty."
  ],
  [
    "details.address should not be empty",
    "'Country', 'City', 'Recipient Address' should not be empty."
  ],
  [
    `Found the following validation errors: "abartn": "Unknown routing number. Please check the number and try again."`,
    "Unknown ACH routing number. Please check the number and try again."
  ],
  [
    `Found the following validation errors: "IBAN": "Please specify a valid IBAN."`,
    `Found the following validation errors: "IBAN": "Please specify a valid IBAN."`
  ]
])

export default {
  name: "WiseDynamicForms",
  components: {
    FormDynamic,
    FormDynamicMultiple
  },
  props: {
    api: {
      type: Object,
      required: true
    },
    drawingForms: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      currentScreen: "currency-select",
      currency: "USD",
      currencyForm: {
        title: "Select Currency",
        fields: [
          {
            group: [
              {
                displayFormat: null,
                example: "",
                key: "currency",
                maxLength: null,
                minLength: null,
                name: "Currency",
                refreshRequirementsOnChange: true,
                required: true,
                type: "select",
                validationAsync: null,
                validationRegexp: null,
                valuesAllowed: Currencies,
                value: "USD"
              }
            ]
          }
        ]
      }
    };
  },

  computed: {
    ...mapGetters("user", {
      user: "getUser"
    })
  },

  methods: {
    ...mapActions("user", ["updateUserWithoutNextTab"]),

    async changeCurrency(event) {
      console.log("CURRENCY WAS CHANGED: ", event)
      this.currency = event.value;
      this.api.queryParams.target = event.value;
    },

    async sendForm(data) {
      const {form, payload} = data
      const body = {
        ...payload,
        currency: this.currency
      };
      const response = await api.postWisePayoutMethod(this.user.id, body);
      errorHandler(response, async () => {
          await this.updateUserWithoutNextTab({ newData: response, user: this.user });
          this.$emit("close", 'success');
          this.$bvModal.show('payment-reminder');
        }, (err) => {
          console.log(err, form);
          const newErrors = [];
          if (Array.isArray(err)) {
            // Test
            
            err.map(error => {
              const errMsg = ERRORS_MAP.get(error);
              if (errMsg) {
                newErrors.push(errMsg);
              }
            })
          } else {
            const errMsg = ERRORS_MAP.get(err);
            if (errMsg) {
              newErrors.push(errMsg);
            }
          }
  
          swal.fire({
            icon: "error",
            text: newErrors.join('\n\n')
          })
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-default {
  line-height: 20px;
  border-radius: 50px;
  border: solid 1px transparent;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  min-height: 20px;
  width: 100%;
  color: #fff;
  background: #442671;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #442671;
    background: #fff;
    border: solid 1px #442671;
    transition: all 0.3s ease-in-out;
  }
}

.gray-color {
  color: #75707b;
}

.settings-text {
  font-size: 12px;
}

::v-deep .v-select {
  width: 100%;
}

::v-deep .custom-select {
  height: 32px;
  border: solid 1px #ced4da !important;
  padding: 5px 10px;
}

::v-deep .vs__dropdown-toggle {
  padding-bottom: 0px;
  border-radius: 0px;
  width: 100% !important;
  border: 1px solid #080809;
}

::v-deep .custom-control-label {
  padding-left: 10px;
}

::v-deep .custom-control-input ~ .custom-control-label::before {
  border-radius: 15px;
  height: 22px;
  width: 22px;
}

::v-deep .custom-control-input:checked ~ .custom-control-label::before {
  border-radius: 15px;
}

::v-deep .custom-control-input ~ .custom-control-label::after {
  top: 9px !important;
  left: -14px !important;
  width: 0.8rem;
  height: 0.8rem;
}
::v-deep .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #442671 !important;
  background-image: none;
  border-radius: 10px;
}
</style>
