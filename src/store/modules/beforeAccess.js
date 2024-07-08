export default {
  namespaced: true,
  state: {
    granted: false
  },
  mutations: {
    BETA_INIT(state) {
      state.granted = true;
      localStorage.setItem("granted", true);
    },
    BETA_ACCESS_INIT(state) {
      const accessGranted = JSON.parse(localStorage.getItem("granted"));
      state.granted = accessGranted || false;
    }
  },
  actions: {
    betaInit({ commit }) {
      commit("BETA_INIT");
    },
    betaAccess({ commit }) {
      commit("BETA_ACCESS_INIT");
    }
  }
};
