<template>
  <div
    class="container-fluid download-app-page"
    v-if="customType && (customType === 'dj' || customType === 'dj-producer')"
  >
    <div
      class="col-lg-5 col-md-8 col-10"
      style="padding: 0; margin: 0 auto;"
      v-if="isAuthorized"
    >
      <h1 class="settings-title main-title">
        Download desktop app
      </h1>
      <p>Please download the correct version based on your operating system.</p>
      <div class="row" style="margin: 0;">
        <div @click="handleTrackDownload('MAC')" class="download-button" style="margin-right: 20px">
          <a :href="amazonUrl + macLink" target="_blank" class="rounded-button"
            >Mac Download</a
          >
        </div>
        <div @click="handleTrackDownload('PC')" class="download-button">
          <a :href="amazonUrl + pcLink" target="_blank" class="rounded-button"
            >PC Download</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "@/service/api";
export default {
  data() {
    return {
      macLink: null,
      pcLink: null,
      amazonUrl: process.env.VUE_APP_S3_URL
    };
  },
  methods: {
    handleTrackDownload(type) {
      this.$mixpanel.track('Download App', { type });
    }
  },
  computed: {
    ...mapState("user", ["data", "isAuthorized"]),
    customType() {
      let result;
      if (this.data) {
        if (Array.isArray(this.data.roles)) {
          if (this.data.roles && this.data.roles.length > 0) {
            if (this.data.roles.find(x => x.name === "dj")) {
              result = "dj";
            }
            if (this.data.roles.find(x => x.name === "fan")) {
              result = "fan";
            }
            if (this.data.roles.find(x => x.name === "producer")) {
              result = "producer";
            }
            if (
              this.data.roles.find(x => x.name === "dj") &&
              this.data.roles.find(x => x.name === "producer")
            ) {
              result = "dj-producer";
            }
          }
        } else {
          result = this.data.roles;
        }
      }
      return result;
    }
  },
  async mounted() {
    if (
      this.isAuthorized &&
      this.customType &&
      (this.customType === "dj" || this.customType === "dj-producer")
    ) {
      const response = await api.getDesktopAppLinks();
      if (response.Data) {
        this.macLink = response.Data.find(x => x.platform === "mac").url;
        this.pcLink = response.Data.find(x => x.platform === "pc").url;
      }
    } else {
      this.$router.push({ name: "Main" }).catch(() => {});
    }
  }
};
</script>

<style scoped>
.download-app-page {
  padding: 3.5px 21.5px;
  padding-top: 80px;
  height: 100vh;
  background: #f2f1ef;
}
.download-app-page p {
  font-family: "Roboto-Mono";
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 55px;
  color: #75707b;
}
.download-app-page h1 {
  margin-top: 55px;
}
.download-app-page .col-12.col-md-4.col-lg-3 p {
  margin-bottom: 20px;
}
.rounded-button {
  min-width: 163px;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  padding: 10.5px 23px;
}
.download-button p {
  margin-bottom: 13px;
}
@media only screen and (max-width: 449px) {
  .download-button {
    width: 100%;
    text-align: center;
    margin: 0 !important;
  }
  .download-button p {
    margin-bottom: 10px;
  }
  .download-button:first-child {
    margin-bottom: 20px !important;
  }
}
</style>
