import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "@/styles/main.scss";
import Vuelidate from "vuelidate";
import VueTheMask from "vue-the-mask";
import { BSidebar, BIcon, ToastPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueCookies from "vue-cookies";
import api from "@/service/api";
import { AsliceResources } from "./service/resources";
import VueRouter from "vue-router";
import device from "vue-device-detector";
import { currencies } from "./service/resources";
import Mixpanel from "./plugins/mixpanel";
import VModal from "vue-js-modal";
import { initGoogleAnalytics } from './utils/analytics';
// import AbstractModal from "vue-js-modal/src/components/Modal";
import PictureSharesheet from "vue-picture-sharesheet";
import * as Sentry from "@sentry/vue";
import VueMeta from "vue-meta";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
import MarqueeText from "vue-marquee-text-component";
import swal from "sweetalert2";

Vue.component("v-select", vSelect);
Vue.component("b-sidebar", BSidebar);
Vue.component("marquee-text", MarqueeText);
Vue.component("b-icon", BIcon);
Vue.component("picture-sharesheet", PictureSharesheet);
Vue.use(ToastPlugin);
Vue.use(Vuelidate);
Vue.use(VueTheMask);
Vue.use(VueCookies);
Vue.use(AsliceResources, { store, currencies });
Vue.use(VueRouter);
Vue.use(device);
Vue.use(Mixpanel, { token: process.env.VUE_APP_MIXPANEL_TOKEN });
Vue.use(VModal, {
  dynamic: true,
  draggable: true
});
Vue.use(VueMeta);

const socket = io(process.env.VUE_APP_BASE_API, {
  autoConnect: false
});

Vue.use(VueSocketIOExt, socket, { store });

// Vue.component("modal", {
//   extends: AbstractModal,
//   computed: {
//     /**
//      * Fix using "adaptive" and "scrollable" at the same time
//      */
//     autoHeight() {
//       if (this.scrollable) {
//         return "auto";
//       }
//       return AbstractModal.computed.autoHeight.apply(this);
//     }
//   }
// });

if (process.env.NODE_ENV === "production") {
  initGoogleAnalytics();
  Sentry.init({
    Vue,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    environment: process.env.VUE_APP_SENTRY_ENVIRONMENT || "local",
    release: process.env.VUE_APP_GIT_HASH,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router)
      }),
      new Sentry.Replay()
    ],
    // Performance Monitoring
    tracesSampleRate: +(process.env.VUE_APP_SENTRY_TRACES_SAMPLE_RATE ?? 0.1),
    // Session Replay
    replaysSessionSampleRate: +(
      process.env.VUE_APP_SENTRY_REPLAYS_SESSION_SAMPLE_RATE ?? 0.0
    ),
    replaysOnErrorSampleRate: +(
      process.env.VUE_APP_SENTRY_REPLAYS_ERROR_SAMPLE_RATE ?? 1.0
    ),
    sendDefaultPii: true,
    ignoreErrors: [
      "ChunkLoadError",
      "Loading chunk",
      "Loading CSS chunk",
      "ResizeObserver loop completed with undelivered notifications",
      "ResizeObserver loop limit exceeded"
    ],
    beforeSend(event, hint) {
      console.debug("Sentry beforeSend", event, hint);

      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }

      return event;
    }
  });
}

Vue.config.productionTip = false;

export const app = (async () => {
  const token = localStorage.getItem("token");

  if (token && !Vue.$cookies.isKey("access_token")) {
    Vue.$cookies.set("access_token", token, "365d", "/", "", false, "Strict");
  }

  if (localStorage.getItem("currentUserId")) {
    const userId = JSON.parse(localStorage.getItem("currentUserId"));
    swal.showLoading();
    const response = await api.isAuthorized(userId);
    swal.close();
    if (response.Error) {
      store.commit("user/LOGOUT");
      store.commit("djdashboard/clearAllData");
      setTimeout(() => {
        window.location.reload();
      }, 100);
      console.log(response.Error, "error");
      return;
    } else {
      store.commit("user/AUTH_SUСCESS", { user: response.Data });
    }
  }
  return new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
})();
