import swal from "sweetalert2";

export const mutations = {
  clearAllData(state) {
    state.data = [];
    state.playlist = [];
    state.trackData = [];
    state.performerStorage = [];
    state.allTracks = [];
    state.djMostPopularProducers = [];
    state.djMostPopularTracks = [];
    state.producerMostPopulerDjs = [];
    state.producerMostPopularTracks = [];
    state.year = new Date().getUTCFullYear();
  },
  // clearPlayList(state){
  //   state.playlist = [];
  // },
  setProducerMonthCollaps(state, bool) {
    if (bool === true) {
      state.producerMonthCollapsed = true;
      state.background = false;
    } else {
      state.producerMonthCollapsed = false;
      state.background = true;
    }
  },
  setTrackMonthCollaps(state, bool) {
    if (bool === true) {
      state.trackMonthCollapsed = true;
      state.background = false;
    } else {
      state.trackMonthCollapsed = false;
      state.background = true;
    }
  },
  setProducerMonth(state, id) {
    state.selectedProducerMonth = id;
  },
  setTrackMonth(state, id) {
    state.selectedTrackMonth = id;
  },
  setPopularVenues(state, array) {
    state.producerMostPopularVenues = array;
  },
  setDjPopularProducers(state, array) {
    state.djMostPopularProducers = array;
  },
  setProducersPopularDjs(state, array) {
    state.producerMostPopulerDjs = array;
  },
  setDjPopularTracks(state, array) {
    state.djMostPopularTracks = array;
  },
  setProducerPopularTracks(state, array) {
    state.producerMostPopularTracks = array;
  },
  getExactTrack(state, trackId) {
    if (state.allTracks.length > 0) {
      const found = state.allTracks.find(t => t.id == trackId);
      if (found) {
        state.exactTrack = found;
      }
    }
  },
  SET_TRACK_IMAGE(state, newImg) {
    state.track.image = newImg;
  },
  SET_TRACK_VERSION_ID(state, versionId) {
    state.track.versionId = versionId;
  },
  saveAllTracks(state, tracksArray) {
    state.allTracks = tracksArray;
  },
  addPerformer(state, performer) {
    if (state.performerStorage.length > 0) {
      const found = state.performerStorage.find(x => x.id === performer.id);
      if (!found) {
        state.performerStorage.push(performer);
      }
    } else state.performerStorage.push(performer);
  },
  repacePerformers(state, newTrackData) {
    state.trackData.forEach(playlist => {
      playlist.tracks.forEach(track => {
        if (track.id === newTrackData.id) {
          track.performers = newTrackData.performers;
          track.performerTouched = false;
        }
      });
    });
    swal.fire({
      position: "center-center",
      icon: "success",
      title: `"${newTrackData.name}" track performers updated.`,
      showConfirmButton: false,
      timer: 3500
    });
  },
  setData(state, data) {
    state.data = data;
  },
  getPlayList(state, data) {
    data.results.forEach(playlist => {
      playlist.touched = false;
    });
    state.playlist = data;
  },
  getTrack(state, data) {
    if (data.tracks && data.tracks.length > 0) {
      data.tracks.forEach(track => {
        track.trackTouched = false;
        track.performerTouched = false;
      });
    }
    const index = state.trackData.findIndex(x => x.id === data.id);
    if (index + 1) {
      state.trackData[index] = data;
    } else {
      state.trackData.push(data);
    }
  },
  updateStateTrack(state, data) {
    state.trackData.forEach(playlist => {
      playlist.tracks.forEach(track => {
        if (track.id === data.trackInfo.id) {
          track.name = data.trackInfo.name;
        }
      });
    });
  },
  SET_PLAYLIST_VERSION_ID(state, payload) {
    const { id, versionId } = payload;
    const playlist = state.playlist.results.find(pl => pl.id === id);
    if (playlist) {
      playlist.versionId = versionId;
    }
  },
  SET_ROW_COUNT(state, count) {
    state.rowsCount = count;
  },
  SET_CURRENCY(state, currency) {
    state.preferredCurrency = currency;
  },
  SET_TRACK(state, track) {
    state.track = track;
  },
  SET_TOTAL_TRACKS_COUNT(state, count) {
    state.totalTracksCount = count;
  },
  UPDATE_PLAYLIST(state, playlist) {
    const playlistCollection = state.playlist?.results;
    if (playlistCollection) {
      const playlistIndex = playlistCollection.findIndex(
        el => el.id === playlist.id
      );
      if (playlistIndex !== -1) {
        playlistCollection.splice(playlistIndex, 1, playlist);
      }
    }
  },
  SET_PLAYED_PRODUCER_COUNT(state, count) {
    state.playedProducerCount = count;
  },
  setYear(state, year) {
    state.year = year;
  }
};
