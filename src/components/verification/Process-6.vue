<template>
  <b-row class="process-three" no-gutters>
    <b-col
      cols="2"
      md="2"
      lg="1"
      class="d-none d-md-flex flex-column align-items-center process-one-left__sidebar max99"
    >
    </b-col>

    <b-col
      cols="2"
      md="2"
      lg="1"
      class="d-flex d-md-none flex-column align-items-center process-one-left__sidebar max99"
    >
    </b-col>

    <b-col class="process-one-right col px-0">
      <b-row style="padding-left: 20px; padding-right: 20px; max-width: 524px">
        <b-col cols="12">
          <h4 class="base-form__title mb-0">WELCOME</h4>
          <template v-if="isPromoter">
            <p class="mt-4 base-form__description-text">
              Final verification by our team can take up to 30 days. You will
              receive an email notifying you when this process is complete.
              Certain features will require approval before they can be used
              fully.
            </p>
            <p class="mt-4 mb-4 base-form__description-text">
              By default you will receive an email once a week with confirmation
              of any playlists that have been processed in our system. You can
              change that frequency at any time in the preferences “email”
              section.
            </p>
            <p class="mt-4 mb-0 base-form__description-text">
              Welcome to Aslice.
            </p>
          </template>
          <template v-else>
            <p class="mt-4 base-form__description-text">
              You’re now officially registered with Aslice!
            </p>
            <p
              v-if="user.roles.find(item => item.name === 'dj')"
              class="mt-4 mb-4 base-form__description-text"
            >
              – DJs <br />
              Access your dashboard to download the Aslice desktop app and
              upload your first playlist.
            </p>
            <p
              v-if="user.roles.find(item => item.name === 'producer')"
              class="mt-4 mb-4 base-form__description-text"
            >
              – Producers <br />
              Access your dashboard to explore the Aslice features.
            </p>
          </template>
        </b-col>
      </b-row>
      <b-row
        class="mt-5"
        style="background-color: #AAA3B1; height: 1px; margin-left: 0"
      ></b-row>
      <b-row style="padding-left: 20px; padding-right: 20px; max-width: 524px">
        <b-col cols="12" class="mt-4">
          <ButtonLine @click="redirection">
            VIEW DASHBOARD
          </ButtonLine>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonLine from "@/components/global/buttons/ButtonLine.vue";

export default {
  components: {
    ButtonLine
  },
  async mounted() {
    await this.$nextTick();
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters({
      user: "user/getUser"
    }),
    ...mapGetters("user", ["isPromoter"])
  },
  methods: {
    redirection() {
      localStorage.removeItem("verificationStarted");
      const roles = this.user.roles.map(role => role.name);
      const role = roles[0];
      this.$router.push({ name: "OverviewType", params: { type: role } });
    }
  }
};
</script>

<style scoped>
.max99 {
  max-width: 99px;
  min-width: 99px;
}
@media screen and (max-width: 768px) {
  .max99 {
    max-width: 65px;
    min-width: 65px;
  }
}
a.controller.next-step-button {
  margin-top: 11px;
  padding: 10px 15px;
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 1.82px;
  text-transform: uppercase;
  color: #442671;
}
</style>
