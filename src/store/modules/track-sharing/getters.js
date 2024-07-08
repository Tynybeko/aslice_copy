export const getters = {
  getId: state => state.track?.id,
  getTrack: state => state.track,
  getUpdateState: state => state.needsToUpdate
};
