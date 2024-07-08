export const getters = {
  getId: state => state.playlist?.id,
  getPlaylist: state => state.playlist,
  getUpdateState: state => state.needsToUpdate
};
