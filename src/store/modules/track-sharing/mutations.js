export const mutations = {
  SET_TRACK(state, payload) {
    state.track = payload;
  },
  SET_NEEDS_TO_UPDATE(state, payload) {
    state.needsToUpdate = payload;
  }
};
