import axios from "axios";
import isNil from "lodash/isNil";

export default {
  namespaced: true,
  state: {
    currentVersion: undefined,
    socketConnected: false,
    currentRegistrationType: null,
    shadowBackground: false,
    showCharityEventBanner: false,
  },
  mutations: {
    SET_CURRENT_VERSION(state, version) {
      state.currentVersion = version;
    },
    SOCKET_CONNECT(state) {
      console.debug("SOCKET_CONNECT");
      state.socketConnected = true;
    },
    SOCKET_DISCONNECT(state, data) {
      console.debug("SOCKET_DISCONNECT", data);
      state.socketConnected = false;
    },
    HIDE_REGISTRATION_TYPE(state, data) {
      state.currentRegistrationType = data;
    }
  },
  actions: {
    hideRegistr({ commit }, data) {
      commit("HIDE_REGISTRATION_TYPE", data);
    },
    async getCurrentVersion({ commit }) {
      try {
        const {
          headers: { "last-modified": version }
        } = await axios.head("/");
        if (!isNil(version)) {
          commit("SET_CURRENT_VERSION", version);
          localStorage.setItem("version", version);
        }
      } catch (e) {
        console.error("Failed to get current version", e);
      }
    },
    async checkVersion({ state: { currentVersion } }) {
      try {
        const {
          headers: { "last-modified": remoteVersion }
        } = await axios.head("/");
        if (!isNil(remoteVersion) && currentVersion !== remoteVersion) {
          // TODO: Attention! needs check working in dev
          // TODO: needs to set last modified header on development
          console.debug("Reloading to the new version...");
          window.location.reload();
        }
      } catch (e) {
        console.error("Failed to check new version", e);
      }
    }
  },
  modules: {}
};
