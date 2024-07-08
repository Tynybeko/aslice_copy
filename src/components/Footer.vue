<template>
  <div class="container-fluid" @mouseenter="showOnlyButtons">
    <div class="col-12">
      <template v-for="option in routerOptions">
        <b-nav-item
          :to="option.path"
          :key="option.name"
          v-if="
            option.navFooter &&
              (option.isAuthorized ? option.isAuthorized == isAuthorized : true)
          "
          >{{ option.name }}</b-nav-item
        >
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      currentRout: this.$router.currentRoute.name,
      routerOptions: this.$router.options.routes
    };
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"])
  },
  methods: {
    ...mapActions("app", ["hideRegistr"]),
    showOnlyButtons() {
      this.hideRegistr(null);
    }
  }
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  padding: 40px 20px;
  font-family: "Roboto-Mono";
  padding-bottom: 10px;
}
.nav-item {
  list-style: none;
}
.nav-item a {
  font-family: "Roboto-Mono";
  /* text-transform: uppercase; */
  /* letter-spacing: 4px; */
  padding: 4px 16px;
  color: #75707b;
  font-size: 12px;
  line-height: 20px;
}
.arrow-image-wrapper {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  transform: rotate(180deg);
}
.arrow-image-wrapper svg {
  margin: 0 auto;
}
.not-main {
  margin: 0 !important;
  float: right;
  padding-left: 45px;
}
.nav-item a:hover {
  color: #4c4a4e;
}

@media only screen and (max-width: 991px) {
  .container-fluid {
    padding-top: 70px;
  }
}
</style>
