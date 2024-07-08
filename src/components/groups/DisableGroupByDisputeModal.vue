<template>
  <div class="group-modal">
    <div class="group-modal__container">
      <div class="group-modal__body">
        <h2 class="group-modal__title group-modal__title_red">This Group Edit Has Been Locked Because Of a Dispute</h2>
        <div class="group-modal__input">
          <label>Artist who filed dispute:</label>
          <span>{{ artistName }}</span>
        </div>
        <div class="group-modal__input">
          <label>Reason for dispute:</label>
          <span>{{ disput.subject }}</span>
        </div>
        <div class="group-modal__input">
          <label>date filed:</label>
          <span>{{ moment(disput.created).format('YYYY-MM-DD') }}</span>
        </div>
        <p>
          Disputes can take up to 90 days to resolve.
          During this time, group and individual earnings
          are still tracked. Check your email for updates from Aslice.
        </p>
      </div>
      <div class="group-modal__footer">
        <button
          class="button-default"
          @click="handleClose"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "DisableGroupByDisputeModal",
  props: ['disput', 'group'],
  data() {
    return {
      moment,
      verifyed: false,
      newEmail: ""
    };
  },
  methods: {
    handleClose() {
      this.$emit("onClose");
    }
  },
  computed: {
    artistName() {
      const membership = this.group.groupMemberships.find(({ user }) => (user && user.id === this.disput.user.id));
      
      return membership && membership.member ? membership.member.name : '';
    },
  }
};
</script>

<style lang="scss" scoped>
  .group-modal {
    &__container {
      max-width: 425px;
    }
    &__input {
      label {
        margin-bottom: 20px;
        font-family: "Graphik-Regular-Web";
      }
      span {
        color: #75707B;
        margin-top: 0px;
      }
    }
    &__footer {
      .button-default {
        width: 82px;
      }
    }
    p {
      margin-bottom: 0px;
    }
  }
</style>
