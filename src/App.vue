<template>
  <div id="app">
    <app-layout>
      <router-view />
    </app-layout>
    <b-toast
      id="socket-toast"
      no-auto-hide
      no-close-button
      title="Connecting..."
      toaster="b-toaster-bottom-right"
      variant="info"
      :visible="isAuthorized && $socket.disconnected"
      v-show="isAuthorized && $socket.disconnected"
    >
      <div class="d-flex align-items-center" style="gap: 8px">
        <b-spinner label="Connecting..."></b-spinner>
        The connection is in progress...
      </div>
    </b-toast>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout";
import { mapActions, mapState } from "vuex";
import swal from "sweetalert2";
import api from "@/service/api";

export default {
  components: {
    AppLayout
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"]),
    ...mapState("app", ["socketConnected"])
  },
  watch: {
    isAuthorized(value) {
      if (value) {
        this.$socket.client.connect();
      } else {
        if (this.$socket.connected) {
          this.$socket.client.disconnect();
        }
      }
    }
  },
  methods: {
    ...mapActions("app", ["hideBackground"]),
    hideShadow() {
      this.hideBackground(false);
    },
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    // TODO: вынести всю эту рухлядь в демона (TODO: создать синглтон класс демона)
    sessionHandler() {
      document.addEventListener("visibilitychange", async () => {
        if (document.hidden) {
          const date = new Date().getTime();
          sessionStorage.setItem("last-view", JSON.stringify(date));
        } else {
          const currentDateTime = new Date().getTime();
          const oldDateTime = Number(sessionStorage.getItem("last-view"));
          const dt = currentDateTime - oldDateTime;
          if (dt > 3000) {
            const userId = this.$store.state.user?.data?.id;
            if (userId) {
              swal.showLoading();
              const userData = await api.isAuthorized(userId);
              swal.close();
              this.$store.dispatch("user/setUserData", userData.Data);
            }
          }
        }
      });
    },
    scrollToElement(hash) {
      const domElement = document.querySelector(hash);
      if (domElement) {
        const offset = window.pageYOffset;
        const y = domElement.getBoundingClientRect().y;
        window.scroll({
          top: offset + y,
          behavior: "smooth"
        });
      }
    }
  },
  async created() {
    if (this.isAuthorized) {
      this.$socket.client.connect();
    }

    if (localStorage.getItem("currentUser")) {
      localStorage.removeItem("currentUser");
    }
    // this.sessionHandler();
  },
  mounted() {
    this.$router.afterEach(to => {
      if (to.hash) {
        setTimeout(() => {
          this.scrollToElement(to.hash);
        });
      }
    });

    if (process.env.NODE_ENV === "production") {
      // Reload a page when new version is deployed
      this.$store.dispatch("app/getCurrentVersion");
      setInterval(() => {
        this.$store.dispatch("app/checkVersion");
      }, 60000);
    }
  }
};
</script>
