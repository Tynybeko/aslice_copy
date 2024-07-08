<template>
  <div class="group-modal">
    <div class="group-modal__container">
      <img
        class="group-modal__close"
        src="@/assets/images/close-groups-modal.svg"
        @click="handleClose"
      />
      <div class="group-modal__body">
        <h2 class="group-modal__title">Invite To Group</h2>
        <p>
          Aslice will contact the group member listed below. Aslice will attempt
          to notify this member four times in 30 days to join the group.
        </p>
        <div class="group-modal__input">
          <label>Artist Name</label>
          <span>{{ name }}</span>
        </div>
        <div class="group-modal__input">
          <label>email address</label>
          <span v-if="email">{{ email }}</span>
          <b-input
            v-else
            v-model="$v.newEmail.$model"
            @input="$v.newEmail.$reset()"
            @blur="$v.newEmail.$touch()"
            @focus="$v.newEmail.$reset()"
          />
          <span
            class="error"
            v-if="!email && $v.newEmail.$invalid && $v.newEmail.$dirty"
          >
            Incorrect email
          </span>
        </div>
        <label class="group-modal__checkbox"
          >I verify that all of the information is correct
          <input type="checkbox" v-model="verifyed" />
          <span class="group-modal__checkbox__checkmark"></span>
        </label>
      </div>
      <div class="group-modal__footer">
        <button
          class="button-default"
          :disabled="(!verifyed || !email) && (!verifyed || !newEmail)"
          @click="handleSubmit"
        >
          Invite
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  name: "InviteModal",
  props: {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      verifyed: false,
      newEmail: ""
    };
  },
  validations: {
    newEmail: {
      required,
      email
    }
  },
  methods: {
    handleSubmit() {
      if (this.email && this.verifyed) {
        this.$emit("onSubmit", this.email);
      }
      if (!this.email && this.verifyed && !this.$v.newEmail.$invalid) {
        this.$emit("onSubmit", this.newEmail);
      }
    },
    handleClose() {
      this.$emit("onClose");
    }
  }
};
</script>
