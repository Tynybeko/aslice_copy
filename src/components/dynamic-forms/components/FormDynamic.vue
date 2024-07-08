<template>
  <div>
    <div v-if="form.title" class="group-modal__title mb-0">
      {{ form.title }}
    </div>

    <div class="flex-column px-0 mt-4">
      <div
        v-for="(field, idx) in form.fields"
        :key="idx"
        class="flex-column px-0 mt-4"
      >
        <span class="label-text d-flex">{{ field.group[0].name }}</span>
        <component
          class="mt-2 d-flex w-100"
          v-model="field.group[0].value"
          :ref="field.group[0].key"
          :is="getComponentName(field.group[0])"
          :options="getOptions(field.group[0])"
          @change="updateForm(field.group[0], $event)"
          @blur="onBlur(field.group[0])"
        ></component>

        <span
          class="error"
          v-if="field.group[0] && field.group[0].validationMessage"
        >
          {{ field.group[0].validationMessage }}
        </span>
      </div>
    </div>

    <slot name="send-btn" v-bind="{ form, confirmationText }">
      <button
        class="btn-default mt-4 w-100"
        type="button"
        @click="confirm(form)"
      >
        <span class="d-sm-inline-block margin-top-05">
          {{ confirmationText }}
        </span>
      </button>
    </slot>

    <slot name="close-btn" v-bind="{ form }"></slot>
  </div>
</template>

<script>
const fieldComponentList = new Map([
  ["select", "b-form-select"],
  ["text", "b-input"],
  ["radio", "b-form-radio-group"]
]);

export default {
  name: "FormDynamic",
  props: {
    form: {
      type: Object,
      required: true
    },
    sendButton: {
      type: Boolean,
      default: true
    },
    confirmationText: {
      type: String,
      default: "send"
    }
  },
  methods: {
    confirm(form) {
      this.$emit("confirm:send", form);
    },

    getComponentName(field) {
      return fieldComponentList.get(field.type);
    },

    getOptions(field) {
      return field?.valuesAllowed?.map(item => ({
        value: item.key,
        text: item.name
      }));
    },

    updateForm(field, event) {
      field.value = event;
      this.$emit("update:forms", { value: event, field, form: this.form });
      this.onBlur(field);
    },

    onBlur(field) {
      this.$emit("blur", { field });
    }
  }
};
</script>
