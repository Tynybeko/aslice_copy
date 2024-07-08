<template>
  <div class="content" id="dashboard-content-page">
    <div v-if="mobileConfirmation" class="mobile-group d-lg-none">
      <div class="mobile-group__title">
        <span>Group name</span>
        <h1>{{ group ? group.name : "" }}</h1>
        <p
          style="
              color: #442671;
              font-size: 9px;
              line-height: 11px;
            "
          class="mb-0 text-uppercase"
        >
          <span>ID: </span> {{ group ? group.asliceId : "" }}
        </p>
      </div>
      <div class="mobile-group__alias">artist name / alias</div>
      <div class="mobile-group__artist-name">
        {{ mobileUser ? mobileUser.member.name : "" }}
      </div>
      <button
        v-if="mobileUser"
        class="confirm-membership"
        :disabled="mobileUser.status !== 'pending' && mobileUser.status !== 'unreachable'"
        @click="handleApproveMembership"
      >
        Confirm membership
      </button>
    </div>
    <div
      v-else
      class="d-flex d-lg-none h-100 w-100"
      style="padding: 60px 20px; background-color: #442671;"
    >
      <h1 class="text-white">
        There is too much information on this page to display correctly. Try
        resizing or please open the page from your laptop/desktop.
      </h1>
    </div>

    <NewGroupModal
      v-if="showCreteGroupModal"
      @onSubmit="handleCreteGroup"
      @onCancel="handleCancelCreatingGroup"
    />
    <NewMemberModal
      v-if="showAddMemberModal"
      @onClose="handleCloseAddMemberModal"
      @onSubmit="handleAddMember"
    />
    <InviteModal
      v-if="showIviteModal"
      :name="invitedPerformer.name"
      :email="invitedPerformer.email"
      @onClose="handleCloseInviteModal"
      @onSubmit="handleInvitteMember"
    />
    <LaunchDisputeModal
      v-if="showLaunchDisputeModal"
      @onClose="handleLaunchDisputeModal"
      @onContinue="hadleLaunchDispute"
    />
    <DisableGroupByDisputModal
      v-if="disput"
      :group="group"
      :disput="disput"
      @onClose="handleCloseDisableGroupByDisputModal"
    />
    <div class="group-form d-lg-flex d-none">
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
        <h1>New Group Edit</h1>
      </div>
      <div class="group-form__body">
        <div class="group-form__title">
          <div class="group-form__group-name">
            <span>Group name</span>
            <h3>{{ group ? group.name : "" }}</h3>
            <p
              style="
                color: #442671;
                font-size: 9px;
                line-height: 11px;
              "
              class="mt-2 mb-0 text-uppercase"
            >
              <span>ID: </span> {{ group ? group.asliceId : "" }}
            </p>
          </div>
          <div class="group-form__statuses statuses">
            <p class="m-0">Status Key:</p>
            <div class="statuses__item statuses__item_yellow">Pending</div>
            <div class="statuses__item statuses__item_green">Approved</div>
            <div class="statuses__item statuses__item_red">Unreachable</div>
          </div>
        </div>
        <div class="group-table">
          <div class="group-table__header group-table__row">
            <div>Acct Status</div>
            <div>artist name / alias</div>
            <div>Email</div>
            <div>GROUP Membership STATUS</div>
          </div>
          <div class="group-table__body">
            <div
              v-for="item in group ? group.groupMemberships : []"
              :key="item.id"
              class="group-table__row"
            >
              <div>
                <div
                  v-if="item.status"
                  :class="[
                    'group-table__row__status',
                    getStatusClass(item.status)
                  ]"
                />
              </div>
              <div>
                <template
                  v-if="
                    item.user &&
                      item.user.performers &&
                      group.groupMemberships[0].member &&
                      group.groupMemberships[0].member.userId === data.id &&
                      item.user.performers.length > 1 &&
                      group.status === 'pending'
                  "
                >
                  <v-select
                    :value="item.member.name"
                    :options="
                      item.user.performers.map(performer => performer.name)
                    "
                    :clearable="false"
                    @option:selected="
                      updateUserAlias({
                        groupId: group.id,
                        membershipId: item.id,
                        performerId: item.user.performers.find(
                          performer => performer.name === $event
                        ).id
                      })
                    "
                  >
                  </v-select>
                </template>
                <template v-else>
                  {{ item.member.name }}
                </template>
              </div>
              <div>
                <div v-if="item.member.user">{{ item.member.user.email }}</div>
                <button
                  v-else-if="
                    group.groupMemberships.find(({ member }) => member.userId === data.id)
                  "
                  class="group-table__invite-button"
                  @click="
                    handleInviteClick({ ...item.member, email: item.email })
                  "
                >
                  Invite
                </button>
                <div v-else-if="item.email">
                  {{ item.email }}
                </div>
              </div>
              <div>
                <div v-if="item.isAdmin" class="member-status">
                  Group Admin
                </div>
                <button
                  v-if="
                    item.user &&
                      item.user.id === data.id &&
                      (item.status === 'pending' || item.status === 'unreachable')
                  "
                  class="confirm-membership"
                  @click="handleApproveMembership"
                >
                  Confirm membership
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="isAdmin && group.status === 'pending'"
            class="group-table__add"
            @click="showCloseAddMemberModal"
          >
            <img alt="" src="@/assets/images/group-plus-icon.svg" />
            Add Member
          </div>
        </div>
        <button
          class="group-form__disput-btn"
          @click="handleShowLaunchDisputeModal"
        >
          Launch a dispute
          <img alt="" src="@/assets/images/slider-arrow-next.svg" />
        </button>
      </div>
      <div class="group-form__info">
        <div class="group-form__info__title" @click="handleToggleInfo">
          Info
          <img alt="" src="@/assets/images/arrow-down-purple.svg" />
        </div>
        <div v-if="showInfo" class="group-form__info__content">
          <div>
            <span>SIGN UP AND CREATION INSTRUCTIONS</span>
            <ul>
              <li>Please add or check that all members are listed.</li>
              <li>
                Press the invite button associated with each member to invite
                them to the group.
              </li>
              <li>
                Aslice will attempt to notify each member 4 times in 30 days to
                join the group.
              </li>
              <li>
                If the member does not join or is not in the Aslice system,
                their share of the money will be held in a ledger according to
                Aslice’s policy.
              </li>
            </ul>
          </div>
          <div>
            <span>ADMIN ROLES EXPLAINED</span>
            <ul>
              <li>
                Group Admins are assigned by default to either the person who
                created the new group or the first person in the Aslice system
                of an existing group. If you do not agree with the auto-assigned
                Admin, please launch a dispute.
              </li>
              <li>
                Group Admins have permission to designate a member’s status on a
                specific track in the system therefor affecting a specific track
                payment split. By default all tracks will show all members
                active.
              </li>
            </ul>
          </div>
          <div>
            <span>DISPUTES EXPLAINED</span>
            <ul>
              <li>
                If you are a member of a group and disagree with any of the
                admins decisions, you can launch a dispute above by pressing the
                button marked “launch a dispute”.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InviteModal from "@/components/groups/InviteModal.vue";
import NewGroupModal from "@/components/groups/NewGroupModal.vue";
import NewMemberModal from "@/components/groups/NewMemberModal.vue";
import LaunchDisputeModal from "@/components/groups/LaunchDisputeModal.vue";
import DisableGroupByDisputModal from "@/components/groups/DisableGroupByDisputeModal.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import swal from "sweetalert2";

const STATUS_CLASSES = {
  pending: "group-table__row__status_yellow",
  approved: "group-table__row__status_green",
  unreachable: "group-table__row__status_red"
};

export default {
  name: "Groups",
  components: {
    InviteModal,
    NewGroupModal,
    NewMemberModal,
    LaunchDisputeModal,
    DisableGroupByDisputModal
  },
  data() {
    return {
      disput: null,
      showInfo: true,
      invitedPerformer: "",
      showIviteModal: false,
      showAddMemberModal: false,
      showCreteGroupModal: false,
      showLaunchDisputeModal: false,
      mobileConfirmation: false
    };
  },
  computed: {
    group() {
      return this.$store.state.groups.group;
    },
    isAdmin() {
      const adminMember = (this.group ? this.group.groupMemberships : []).find(
        ({ isAdmin }) => isAdmin
      );
      if (adminMember && adminMember.user) {
        return adminMember.user.id === this.data.id;
      }
      return false;
    },
    ...mapState("user", ["data"]),
    mobileUser() {
      const user = this.group.groupMemberships.find(
        ({ user }) => user.id === this.data.id
      );
      return user || null;
    }
  },
  mounted() {
    const { msg_id: msgId } = this.$route.query;
    this.mobileConfirmation = !!msgId;
    if (!this.$route.params.id) {
      this.showCreteGroupModal = true;
    } else {
      const disput = this.group.disputes.find(({ isClosed }) => !isClosed);
      this.disput = disput || null;
    }
  },
  methods: {
    ...mapActions("groups", ["updateUserAlias"]),
    ...mapMutations("user", ["SET_UPDATE_STATE"]),
    async handleCreteGroup(name) {
      await this.$store.dispatch("groups/createGroup", { name, url: "" });
      if (this.group && this.group.id) {
        // TODO: check update state user after refactoring settings module
        this.SET_UPDATE_STATE(true);
        this.$router.push({
          name: "Groups",
          params: {
            id: this.group.id
          }
        });
      }
    },
    handleCancelCreatingGroup() {
      this.$router.push({
        name: "Preferences"
      });
    },
    handleCancelCreateModal() {
      this.showCreteGroupModal = false;
    },
    handleToggleInfo() {
      this.showInfo = !this.showInfo;
    },
    showCloseAddMemberModal() {
      this.showAddMemberModal = true;
    },
    handleCloseAddMemberModal() {
      this.showAddMemberModal = false;
    },
    async handleAddMember(data) {
      await this.$store.dispatch("groups/addMemberToGroup", {
        id: this.group.id,
        data
      });
      await this.$store.dispatch("groups/getGroup", this.group.id);
      this.handleCloseAddMemberModal();
    },
    getStatusClass(status) {
      return STATUS_CLASSES[status] || "";
    },
    handleInviteClick(performer) {
      this.invitedPerformer = performer;
      this.showIviteModal = true;
    },
    handleCloseInviteModal() {
      this.invitedPerformer = "";
      this.showIviteModal = false;
    },
    handleLaunchDisputeModal() {
      this.showLaunchDisputeModal = false;
    },
    handleShowLaunchDisputeModal() {
      this.showLaunchDisputeModal = true;
    },
    hadleLaunchDispute() {
      this.$router.push({
        name: "GroupDispute",
        params: { id: this.group.id }
      });
    },
    async handleInvitteMember(email) {
      await this.$store.dispatch("groups/inviteMemberToGroup", {
        id: this.group.id,
        data: {
          email,
          performerId: this.invitedPerformer.id
        }
      });
      this.handleCloseInviteModal();
    },
    async handleApproveMembership() {
      await this.$store.dispatch(
        "groups/approveGroupMembership",
        this.group.id
      );
      if (this.mobileConfirmation) {
        setTimeout(() => {
          this.$router
            .push({ name: "Main" })
            .then(() => {
              swal.fire({
                icon: "success",
                text: "Thank you for confirming your membership.",
                showConfirmButton: false
              });
            })
            .catch(() => {});
        }, 1600);
      } else {
        await this.$store.dispatch("groups/getGroup", this.group.id);
        swal.fire({
          icon: "success",
          text: "Thank you for confirming your membership.",
          showConfirmButton: false
        });
      }
      location.reload();
    },
    handleCloseDisableGroupByDisputModal() {
      this.disput = null;
      this.$router.push({ name: "Preferences" });
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-group {
  &__title {
    padding: 40px 0px;
    text-align: center;
    font-family: "Graphik-Regular-Web";

    span {
      font-size: 9px;
      font-weight: 500;
      color: #aaa3b1;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0;
      font-size: 24px;
      color: #442671;
      line-height: 42px;
    }
  }
  &__alias {
    height: 29px;
    display: flex;
    color: #fff;
    font-size: 9px;
    align-items: center;
    background: #9182c5;
    letter-spacing: 0.15em;
    justify-content: center;
    text-transform: uppercase;
    font-family: "Graphik-Regular-Web";
  }
  &__artist-name {
    font-size: 12px;
    color: #442671;
    margin: 40px 0px;
    text-align: center;
  }
  .confirm-membership {
    display: block;
    margin: 0 auto;
    height: 40px;
  }
}
::v-deep .vs__dropdown-toggle {
  width: 100% !important;
}

::v-deep .vs__selected-options {
  padding: 2px 20px !important;
}

::v-deep .vs__selected {
  color: #442671;
}

::v-deep .v-select {
  max-width: 250px;
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
</style>
