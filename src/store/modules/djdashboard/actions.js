import swal from "sweetalert2";
import api from "@/service/api";
// import get from "lodash/get";
import request from "@/utils/request";
import qs from "qs";
import { errorHandler } from "@/utils/errorHandler";

export const actions = {
  async updateTrackImage({ commit }, payload) {
    swal.showLoading();
    const response = await api.updateTrackImage(payload.id, payload.formdata);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    commit("SET_TRACK_IMAGE", response.Data.image);
    commit("SET_TRACK_VERSION_ID", response.Data.versionId);
    swal.close();
  },
  async getProducerMostPopularTracks({ commit }, payload) {
    swal.showLoading();
    commit("setTrackMonth", payload.monthQty);
    const response = await api.getProducerMostPlayedTracks(payload);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    if (response.Data) {
      commit("setProducerPopularTracks", response.Data);
    }
    swal.close();
  },
  async getdjMostPopularTracks({ commit }, payload) {
    swal.showLoading();
    commit("setTrackMonth", payload.monthQty);
    const response = await api.getPopularTracks(payload);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    if (response.Data) {
      commit("setDjPopularTracks", response.Data);
    }
    swal.close();
  },
  async getProducerMostPopularDjs({ commit }, payload) {
    console.log("take", payload);
    swal.showLoading();
    commit("setProducerMonth", payload.monthQty);
    const response = await api.getProducerMostPlayedDjs(payload);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    if (response.Data) {
      commit("setProducersPopularDjs", response.Data);
    }
    swal.close();
  },
  async getProducerMostPopularVenues({ commit }, payload) {
    swal.showLoading();
    commit("setProducerMonth", payload.monthQty);
    const response = await api.getPopularVenues(payload);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    if (response.Data) {
      commit("setPopularVenues", response.Data);
    }
    swal.close();
  },
  async getdjMostPopularProducers({ commit }, monthQty) {
    swal.showLoading();
    commit("setProducerMonth", monthQty);
    const response = await api.getPopularProducers(monthQty);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    if (response.Data) {
      commit("setDjPopularProducers", response.Data);
    }
    swal.close();
  },
  async getAllTracks({ commit }, params) {
    // swal.showLoading();
    const response = await api.getAllTracks(params);
    if (
      response.Data &&
      response.Data.results &&
      response.Data.results.length > 0
    ) {
      commit("saveAllTracks", response.Data.results);
      commit("SET_TOTAL_TRACKS_COUNT", response.Data.count);
    }
    // swal.close();
  },
  async getTrackById({ commit }, { trackId, userId, showSelfPlays }) {
    try {
      swal.showLoading();
      const response = await api.getTrackRequest(
        trackId,
        userId,
        showSelfPlays
      );
      if (!response.Error && response.Data) {
        commit("SET_TRACK", response.Data);
        return response.Data;
      }
      return null;
    } catch (e) {
      console.error(e);
    } finally {
      swal.close();
    }
  },
  async updateTrack({ commit, state }, { trackId, data }) {
    try {
      swal.showLoading();
      const response = await api.updateTrackData(trackId, data);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return null;
      } else if (response.Data) {
        commit("SET_TRACK", { ...state.track, ...response.Data });
        swal.close();
        return response.Data;
      }
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async updatePreferredCurrency({ commit }, { userId, data }) {
    try {
      swal.showLoading();
      const response = await api.updateUser(userId, data);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return null;
      } else if (response.Data) {
        commit("SET_CURRENCY", { ...response.Data });
        swal.close();
        return response.Data;
      }
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async updateTrackLabel({ commit, state }, { trackId, data }) {
    try {
      swal.showLoading();
      const response = await api.updateTrackLabel(trackId, data);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return null;
      } else if (response.Data) {
        commit("SET_TRACK", { ...state.track, ...response.Data });
        swal.close();
        return response.Data;
      }
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async addTrackPerformers({ commit }, data) {
    const payload = {
      performers: data.performers
    };
    const trackId = data.trackId;
    swal.showLoading();
    const response = await api.addTrackPerformers(trackId, payload);
    if (response.Error) {
      swal.fire({
        icon: "error",
        title: response.Error
      });
      return;
    }
    commit("repacePerformers", response.Data);
  },
  async updateTrackPerformers({ commit }, data) {
    const payload = {
      performers: data.performers,
      replaceWith: data.performers
    };
    const trackId = data.trackId;
    swal.showLoading();
    const response = await api.changeTrackPerformers(trackId, payload);
    if (response.Error) {
      swal.fire({
        icon: "error",
        title: response.Error
      });
      return;
    }
    commit("repacePerformers", response.Data);
  },
  async removeTrackPerformers({ commit }, data) {
    const payload = {
      performers: data.performers
    };
    const trackId = data.trackId;
    swal.showLoading();
    const response = await api.removePerformerFromTrack(trackId, payload);
    if (response.Error) {
      swal.fire({
        icon: "error",
        title: response.Error
      });
      return;
    }
    commit("repacePerformers", response.Data);
  },
  async getPerformerByHisId({ commit }, performerId) {
    swal.showLoading();
    const response = await api.getPerformerDataById(performerId);
    if (response.Error) {
      console.log(response.Error, "error");
      return;
    }
    commit("addPerformer", response.Data);
    swal.close();
  },
  async updateTrackData({ commit }, data) {
    swal.showLoading();
    const name = data.trackInfo.name;
    const response = await api.updateTrackName(data.trackInfo.id, { name });
    if (!response.Error) {
      const newData = {
        playlistData: data.playlistData,
        trackInfo: data.trackInfo
      };
      if (response.Data.name === data.trackInfo.name) {
        commit("updateStateTrack", newData);
      }
      swal.close();
      return;
    }
    swal.close();
    swal.fire({
      icon: "error",
      title: response.Error
    });
    // this.getTracktData(id, userId);
  },
  async getPlaylistData({ commit }, params) {
    swal.showLoading();
    const response = await api.getPlaylistsData(params);
    if (response.Error || response.Data.Error) {
      swal.fire({
        icon: "error",
        text: response.Error
      });
      return;
    }
    commit("getPlayList", response.Data);
    commit("SET_ROW_COUNT", response.Data.count);
    console.log(response.Data);
    swal.close();
  },
  async getTracktData({ commit }, data) {
    // const found = state.trackData.find(x => x.id === data.id);
    // if (!found) {
    swal.showLoading();
    const response = await api.getTracksData(data);
    if (!response.Error) {
      commit("getTrack", response.Data);
      swal.close();
      return;
    }
    swal.fire({
      icon: "error",
      title: response.Error
    });
    // }
  },
  async getDjData({ commit }, params) {
    const response = await request.get(
      `/api/dj-dashboard?${qs.stringify(params, { skipNulls: true })}`
    );
    if (response.data) {
      commit("setData", response.data);
    }
    return response && response.data;
  },
  async toggleHiddenStatusTrack({ commit }, payload) {
    try {
      swal.showLoading();
      const { id, data } = payload;
      const response = await api.toggleHiddenStatusTrackRequest(id, data);
      errorHandler(response, () => {
        commit("getTrack", response.Data);
        commit("SET_PLAYLIST_VERSION_ID", {
          id: response.Data.id,
          versionId: response.Data.versionId
        });
        swal.close();
        return;
      });
      return response;
    } catch (e) {
      console.error(e);
    }
  },
  async updatePlaylist({ commit }, { playlist }) {
    swal.showLoading();
    let editableData = {};
    editableData.versionId = playlist.versionId;
    // editableData.name = playlist.name;
    editableData.id = playlist.id;
    editableData.primeArtistName = playlist.primeArtistName;
    // editableData.venue = playlist.venue;
    // editableData.promotionCompany = playlist.promotionCompany
    //   ? playlist.promotionCompany
    //   : "";
    // editableData.country = playlist.country;
    // editableData.city = playlist.city;
    // editableData.datePlayed = playlist.datePlayed;
    const response = await api.updatePlaylist(editableData);
    errorHandler(response, () => {
      swal.close();
      commit("UPDATE_PLAYLIST", response.Data);
    });
  },
  async fetchPlayedProducerCount({ commit }) {
    const response = await api.getPlayedProducersCountRequest();
    errorHandler(response, () => {
      commit("SET_PLAYED_PRODUCER_COUNT", response.Data?.count || 0);
    });
  },
  async createProducerBonusFromDj(context, payload) {
    swal.showLoading();
    const response = await api.createProducerBonusFromDjRequest(payload);
    return errorHandler(response, () => {
      swal.close();
    });
  }
};
