<template>
  <div
    class="container-fluid online-dashboard-container settings"
    id="dashboard-content-page"
  >
    <div
      class="d-flex d-lg-none h-100 w-100"
      style="padding: 60px 20px"
      :style="{ 'background-color': isPromoter ? '#616060' : '#442671' }"
    >
      <h1 class="text-white">
        To view your full profile <u><b>Preferences</b></u
        >, please try resizing or log in from your desktop or laptop.
      </h1>
    </div>

    <div class="d-lg-flex d-none settings__header">
      <h1 class="settings-title m-0">Preferences</h1>
      <div class="d-flex align-items-center settings__statuses">
        <p class="m-0">Status Key:</p>
        <div class="settings__statuses__item settings__statuses__item_orange">
          Pending
        </div>
        <div class="settings__statuses__item settings__statuses__item_green">
          Approved
        </div>
      </div>
    </div>

    <div class="dashboard-content-page__inner row mx-0 d-lg-flex d-none">
      <div class="col-xl-2 col-3 px-0 d-flex flex-column settings-menu-content">
        <router-link
          v-for="(route, key) in routes"
          class="settings-menu"
          :class="{ 'settings-menu--promoter': isPromoter }"
          tag="div"
          :key="key"
          :to="{ name: route.name }"
        >
          <span class="svg-icon"></span>
          <span class="menu-title">{{ route.name }}</span>
        </router-link>

        <ButtonLine
          id="save-pref-button"
          :disabled="!canSavePreferences || userPreferencesErrors"
          :style="{ marginTop: '30px', marginBottom: '30px' }"
          @click="onSubmit({ newUserData: changedUserData, user })"
          class="settings__btn_save-preferences"
        >
          Save Preferences
        </ButtonLine>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import findRoutesRecursive from "@/mixins/findRoutesRecursive";
import { mapState, mapGetters, mapActions } from "vuex";
import ButtonLine from "@/components/global/buttons/ButtonLine.vue";

export default {
  name: "Preferences",
  components: {
    ButtonLine
  },
  mixins: [findRoutesRecursive],
  computed: {
    ...mapState("user", ["canSavePreferences", "userPreferencesErrors"]),
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy",
      changedUserData: "getChangedUserData"
    }),
    ...mapGetters("user", ["isPromoter"]),
    routes() {
      let result = this.find(route => route.name === "Preferences")[0]
        ?.children;

      if (this.isPromoter) {
        result = result.filter(
          route => !["Display", "Payments"].includes(route.name)
        );
      }

      return result;
    }
  },
  methods: {
    ...mapActions("user", ["onSubmit"])
  }
};
</script>

<style lang="scss" scoped>
.settings {
  &__header {
    height: 70px;
    padding: 0 22px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #aaa3b1;
  }

  &__statuses {
    p {
      color: #aaa3b1;
      font-size: 12px;
      margin-right: 20px;
    }

    &__item {
      color: #75707b;
      font-size: 11px;
      margin-left: 20px;
      padding-left: 15px;
      position: relative;

      &_orange::before {
        background: #fcb416;
      }

      &_green::before {
        background: #29c9be;
      }
    }

    &__item::before {
      content: "";
      top: 50%;
      left: 0px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}

.settings-menu {
  cursor: pointer;
  padding: 25px 48px;
  width: 100%;
  border-bottom: 1px solid #aaa3b1;

  &.router-link-active {
    background: #9182c5;
    .menu-title {
      color: #fff;
    }
  }

  &--promoter.router-link-active {
    background: var(--Core-Grayscale-900, #616060);
  }
}

.settings-menu-content {
  min-height: calc(100vh - 142px);
  min-width: 280px;
  padding-right: 0;
  border-right: 1px solid #aaa3b1;
}

.settings__btn_save-preferences {
  margin-left: 45px;
  margin-right: 45px;
  @media screen and (max-width: 1850px) {
    margin-left: 30px;
    margin-right: 30px;
  }
}
.dashboard-content-page__inner {
  flex-wrap: nowrap !important;
}
</style>
