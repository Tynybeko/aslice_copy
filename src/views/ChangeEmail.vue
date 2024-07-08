<template>
  <div class="change-email">
    <h1>Please Confirm Your Email</h1>
    <button class="rounded-button" @click="handleChangeEmail">
      Confirm Email
    </button>
    <AppModal
      v-if="showModal"
      closeIcon
      title="Email Change Confirmation"
      :description="
        `
        You have successfully changed your email and login information.
        Your old email address will no longer work on login or be used as a way to contact you.
      `
      "
      @onClose="handleCloseModal"
    />
  </div>
</template>

<script>
import request from "@/utils/request";
import AppModal from "@/components/AppModal";

export default {
  name: "ChangeEmail",
  components: {
    AppModal
  },
  data() {
    return {
      id: "",
      email: "",
      accessToken: "",
      showModal: false
    };
  },
  mounted() {
    const { access_token: accessToken, email, id } = this.$route.query;
    if (!accessToken || !email || !id) {
      this.$router.push({ name: "Main" });
    } else {
      this.id = id;
      this.email = email;
      this.accessToken = accessToken;
    }
  },
  methods: {
    async handleChangeEmail() {
      try {
        await request.put(`/api/users/${this.id}/set-email`, {
          email: this.email,
          accessToken: this.accessToken
        });
        this.showModal = true;
      } catch (e) {
        console.error(e);
      }
    },
    handleCloseModal() {
      this.$router.push({ name: "Dashboard" });
    }
  }
};
</script>

<style lang="scss" scoped>
.change-email {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 306px);

  h1 {
    color: #442671;
    margin-bottom: 30px;
  }
}
</style>
