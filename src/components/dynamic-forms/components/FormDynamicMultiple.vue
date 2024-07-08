<template>
  <div>
    <div
      class="forms-group px-4 pt-4"
      v-for="(form, index) in formsConfig"
      :key="index"
    >
      <FormDynamic
        :form.sync="form"
        @update:forms="refreshForms($event)"
        @confirm:send="send"
        @blur="validateField({ ...$event, formIndex: index })"
      ></FormDynamic>
    </div>
    <div class="forms-group px-4 py-4">
      <slot name="close-btn">
        <slot name="close-btn"></slot>
      </slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
import { appendToObject } from "@/utils/objects";
import FormDynamic from "@/components/dynamic-forms/components/FormDynamic";
// import { errorHandler } from "@/utils/errorHandler";

const headers = {
  // Comment to select system language
  "Accept-Language": "en_US",
  "Accept-Minor-Version": 1
};

function initConfig(response) {
  const forms = response.data;

  forms.forEach((form, index) => {
    if (!this.formsConfig.length) {
      this.formsConfig = forms;
    }
    this.setValuesForForm(form, index);
  });
}

export default {
  name: "FormDynamicMultiple",
  components: {
    FormDynamic
  },
  props: {
    api: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formsConfig: []
    };
  },
  async mounted() {
    await this.loadForms("GET", this.initForms);
  },
  methods: {
    initForms(response) {
      initConfig.apply(this, [response]);
      swal.close();
    },

    send(form) {
      const details = this.getFormData(form);
      const body = {
        type: form.type,
        accountHolderName: details.accountHolderName,
        details
      };
      this.$emit("send:form", { payload: body, form });
    },

    async loadForms(method, handler, body = {}) {
      swal.showLoading();
      await axios
        .request({
          url: this.api.url,
          method,
          params: this.api.queryParams,
          data: {
            ...body
          },
          headers: headers
        })
        .then(handler)
        .catch(error => {
          swal.fire({
            icon: "error",
            text: error.message
          });
        });
    },

    isExistsField(field, formIndex) {
      const fields = this.formsConfig[formIndex].fields;
      const key = field.group[0].key;
      return fields.find(el => el.group[0].key === key);
    },

    updateValuesAndFields(field, formIndex) {
      const fields = this.formsConfig[formIndex].fields;
      let key, index;
      key = field.group[0]?.key;
      index = fields.findIndex(el => el?.group[0]?.key === key);
      const group = this.formsConfig[formIndex].fields[index]?.group[0];
      const value = this.formsConfig[formIndex].fields[index]?.group[0]?.value;
      const exampleValidationFullName = key === 'accountHolderName' ? { example: 'John Doe' } : {}
      return {
        ...field,
        group: [
          {
            ...(group ? group : field.group[0]),
            ...field.group[0],
            value: index === -1 ? undefined : value,
            validationMessage: "",
            ...exampleValidationFullName
          }
        ]
      };
    },

    validateField(event) {
      const { field, formIndex } = event;
      if (field.validationRegexp) {
        // TODO: придется создать мапу валидмесседжей
        const reg = new RegExp(field.validationRegexp);
        const test = reg.test(field.value);
        const index = this.formsConfig[formIndex].fields.findIndex(
          el =>
            el.group[0].key === field.key && el.group[0].value === field.value
        );

        if (!test) {
          let validationMessage = "";
          if (field.required && !field.value) {
            validationMessage = "Field is required";
          } else {
            validationMessage = `Incorrect value, example: ${field.example}`;
          }

          this.$set(
            this.formsConfig[formIndex].fields[index].group[0],
            "validationMessage",
            validationMessage
          );
        } else {
          this.$set(
            this.formsConfig[formIndex].fields[index].group[0],
            "validationMessage",
            ""
          );
        }
      }
    },

    setValuesForForm(form, formIndex) {
      const { fields, title, type } = form;
      this.formsConfig[formIndex].title = title;
      this.formsConfig[formIndex].type = type;
      fields.filter(field => this.isExistsField(field, formIndex));
      const f = fields.map(field =>
        this.updateValuesAndFields(field, formIndex)
      );
      this.$set(this.formsConfig[formIndex], "fields", f);
    },

    getFormData(form) {
      const body = {};
      form.fields.forEach(item => {
        const key = item.group[0].key;
        const value = item.group[0]?.value || null;
        if (key.split(".").length > 0 && value) {
          appendToObject(body, key, value);
          // Feature splitting object generation
        } else if (key.split(".").length < 1 && value) body[key] = value;
      });
      return body;
    },

    async refreshForms(event) {
      const { field, form } = event;
      if (field?.refreshRequirementsOnChange) {
        const details = this.getFormData(form);
        const body = { legalType: details.legalType, details };
        await this.loadForms("POST", this.initForms, body);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
