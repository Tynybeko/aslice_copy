export const mutations = {
  SET_PLAYLIST(state, payload) {
    state.playlist = payload;
  },
  SET_NEEDS_TO_UPDATE(state, payload) {
    state.needsToUpdate = payload;
  }
};
