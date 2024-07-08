<template>
  <div class="group-modal">
    <div class="group-modal__container">
      <div class="group-modal__body">
        <h2 class="group-modal__title">New Group Edit</h2>
        <p>
          If you are the first member of a group please read the instructions on the following page carefully.
          By default, the creator of the group becomes the admin. <br /><br />

          While a member’s active status can change, their membership in the group 
          cannot change once added.
        </p>
        <div class="group-modal__input">
          <label for="">group name</label>
          <input
            type="text"
            v-model="name"
            placeholder="Enter Group Name"
          />
        </div>
        <label class="group-modal__checkbox">I verify that all of the information is correct
          <input
            type="checkbox"
            v-model="verifyed"
          />
          <span class="group-modal__checkbox__checkmark"></span>
        </label>
      </div>
      <div class="group-modal__footer">
        <button
          class="button-link"
          @click="handleCancel"
        >
          Cancel
        </button>
        <button
          class="button-default"
          :disabled="!verifyed || !name"
          @click="handleSubmit"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewGroupModal',
  data() {
    return {
      name: '',
      verifyed: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.name && this.verifyed) {
        this.$emit('onSubmit', this.name);
      }
    },
    handleCancel() {
      this.$emit('onCancel');
    }
  }
}
</script>
