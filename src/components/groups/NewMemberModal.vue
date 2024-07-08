<template>
  <div class="group-modal">
    <div class="group-modal__container">
      <img
        class="group-modal__close"
        src="@/assets/images/close-groups-modal.svg"
        @click="handleClose"
      />
      <div class="group-modal__body">
        <h2 class="group-modal__title">Add Member</h2>
        <p>
          Please fill in the information below to add a new group member. Once saved, press the “INVITE” button to finish the process on main group page.
        </p>
        <div class="group-modal__input">
          <label for="artist-name">Artist Name</label>
          <input
            id="artist-name"
            v-model="name"
            placeholder="Enter Name"
            type="text"
          />
        </div>
        <div class="group-modal__input">
          <label for="artist-name">email address</label>
          <input
            id="artist-name"
            v-model="email"
            placeholder="Enter Email"
            type="email"
          />
        </div>
        <label class="group-modal__checkbox">I verify that all of the information is correct
          <input
              v-model="verifyed"
              type="checkbox"
          />
          <span class="group-modal__checkbox__checkmark"></span>
        </label>
      </div>
      <div class="group-modal__footer">
        <button
          :disabled="!verifyed || !name || !email"
          class="button-default"
          @click="handleSubmit"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewMemberModal",
  data() {
    return {
      name: '',
      email: '',
      verifyed: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.name && this.email && this.verifyed) {
        this.$emit("onSubmit", {performerName: this.name, email: this.email});
      }
    },
    handleClose() {
      this.$emit("onClose");
    }
  }
}
</script>
