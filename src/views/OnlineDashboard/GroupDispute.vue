<template>
  <div class="content" id="dashboard-content-page">
    <SubmittedDisputeModal
      v-if="showSubmittedModal"
      @onClose="handleCloseModal"
    />
    <div
      class="d-flex d-lg-none h-100 w-100"
      style="padding: 60px 20px; background-color: #442671;"
    >
      <h1 class="text-white">
        There is too much information on this page to display correctly. Try
        resizing or please open the page from your laptop/desktop.
      </h1>
    </div>

    <div class="group-form group-dispute d-lg-flex d-none">
      <div class="group-form__header">
        <div
          class="group-form__back-link"
          @click="
            $router.push({
              name: 'Preferences'
            })
          "
        >
          <div>
            <img alt="" src="@/assets/images/slider-arrow-prev.svg" />
          </div>
          <span>Back to Preferences</span>
        </div>
        <h1>Group Dispute</h1>
      </div>
      <div class="group-dispute__body">
        <div class="group-form__title">
          <div class="group-form__group-name">
            <span>Group name</span>
            <h3>{{ group ? group.name : "" }}</h3>
          </div>
        </div>
        <div class="group-dispute__info-item">
          <span>your Artist Name</span>
          <p>{{ artistName }}</p>
        </div>
        <div class="group-dispute__info-item">
          <span>Your email</span>
          <p>{{ data.email }}</p>
        </div>
        <div class="group-dispute__select">
          <label for="disput-about">What is your dispute about?</label>
          <v-select
            id="disput-about"
            v-model="subject"
            :options="disputOptions"
            :clearable="false"
            :searchable="false"
            placeholder="Select an option"
          />
        </div>
        <div class="group-dispute__comment">
          <label for="comments">Comments</label>
          <textarea 
            v-model="comment"
            id="comments"
            rows="10"
          />
        </div>
        <button
          class="rounded-button"
          @click="handleSubmit"
        >
          submit
        </button>
        <p class="group-dispute__warning">
          Please allow up to 90 days for Aslice to review your issue.
          During this time all group features are disabled and all
          members will be contacted. Any earnings are still calculated
          and recorded during this time.
          <br />
          <br />
          If a dispute cannot be resolved by the group members, a 3rd
          party or Aslice, the group may be marked as ‘CHARITY” and all
          future proceeds may be donated to the Aslice foundation on behalf
          of the group. 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SubmittedDisputeModal from "@/components/groups/SubmittedDisputeModal.vue";

const DISPUT_ABOUT = [
  'Request An Alternative Group Admin',
  'Group Membership Status',
  'Financial Dispute'
]

export default {
  name: "GroupDispute",
  components: {
    SubmittedDisputeModal
  },
  data() {
    return {
      comment: '',
      subject: '',
      showSubmittedModal: false,
      disputOptions: DISPUT_ABOUT,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.subject && this.comment) {
        await this.$store.dispatch("groups/openDisput", {
          data: { 
            subject: this.subject, 
            comments: this.comment,
            type: "Group",
            groupId: this.group.id,
          } 
        });
        this.showSubmittedModal = true;
      }
    },
    handleCloseModal() {
      this.$router.push({ name: "Preferences" });
    }
  },
  computed: {
    group() {
      return this.$store.state.groups.group;
    },
    artistName() {
      const membership = this.group.groupMemberships.find(({ user }) => (user && user.id === this.data.id));
      
      return membership && membership.member ? membership.member.name : '';
    },
    ...mapState("user", ["data"])
  },
};
</script>

<style lang="scss" scoped>
.group-dispute {
  justify-content: flex-start;

  &__body {
    flex-grow: 1;
    padding: 20px;
    background: #FCFBF9;
  }

  .group-form__title {
    padding: 0;
  }

  &__info-item {
    margin-top: 20px;
    span {
      font-size: 9px;
      color: #aaa3b1;
      line-height: 10px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    p {
      font-size: 12px;
      color: #75707B;
      line-height: 16px;
      margin: 5px 0px 0px 0px;
    }
  }

  &__comment {
    margin-top: 20px;
    label {
      font-size: 9px;
      display: block;
      color: #75707B;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-family: "Graphik-Regular-Web";
    }

    textarea {
      width: 100%;
      resize: none;
      padding: 10px;
      max-width: 500px;
      border: 1px solid #75707B;
    }
  }

  &__select {
    margin-top: 20px;
    label {
      color: #442671;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 10px;
    }
    ::v-deep .vs__dropdown-toggle {
      height: 29px;
      width: 100% !important;
      border-radius: 2px;
      padding-bottom: 0px;
      border: 1px solid #442671;
    }

    ::v-deep .vs__search {
      margin: 0;
    }

    ::v-deep .vs__selected-options {
      padding: 0px 10px !important;
    }

    ::v-deep .vs__dropdown-option {
      padding: 5px 15px !important;
    }

    ::v-deep .vs__selected {
      top: 50%;
      color: #442671;
      position: absolute;
      transform: translateY(-50%);
    }

    ::v-deep .vs__dropdown-menu {
      padding: 0;
    }

    ::v-deep .v-select {
      max-width: 500px;
      color: #442671;
    }

    ::v-deep .vs__actions svg path {
      d: path("M1 1.2002L6.07143 5.2002L11.1429 1.2002") !important;
    }

    ::v-deep .vs__actions svg {
      path {
        stroke: #442671;
        color: #442671;
      }

      width: 12px;
      height: 6px;
    }
  }

  .rounded-button {
    padding: 0;
    width: 100px;
    margin-top: 20px;
    text-align: center;
  }

  &__warning {
    width: 100%;
    max-width: 500px;
    color: #E32D26;
    font-size: 12px;
    line-height: 16px;
    margin: 20px 0px 0px 0px;
  }
}
</style>
