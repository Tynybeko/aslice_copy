export const getters = {
  showBonusLine: (state, getters, rootState, rootGetters) => {
    return new Date().getMonth() === 11 && rootGetters["user/isDj"];
  }
};
