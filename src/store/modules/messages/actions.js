import api from "@/service/api";
import { errorHandler } from "@/utils/errorHandler";
import swal from "sweetalert2";

export const actions = {
  async getMessages({ commit, dispatch }, { page, take }) {
    commit("RESET_STATE");
    swal.showLoading();
    const response = await api.getMessages({ page, take });
    errorHandler(response, () => {
      swal.close();
      dispatch("checkMaximumMessages", {
        apiMessagesResponse: response,
        page,
        take
      });
      commit("APPEND_MESSAGES", {
        take,
        messages: response.Data.results
      });
    });
  },

  async loadMoreMessages({ commit, dispatch }, { page, take }) {
    const response = await api.getMessages({ page, take });
    errorHandler(response, () => {
      dispatch("checkMaximumMessages", {
        apiMessagesResponse: response,
        page,
        take
      });
      commit("APPEND_MESSAGES", {
        take,
        messages: response.Data.results
      });
    });
  },

  updateSingleMessage({ commit }, payload) {
    console.log(payload);
    commit("UPDATE_SINGLE_MESSAGE", payload);
  },

  checkMaximumMessages({ commit }, { apiMessagesResponse, page, take }) {
    if (page * take > apiMessagesResponse.Data.count) {
      commit("ALL_MESSAGES_LOADED");
    }
  }
};
