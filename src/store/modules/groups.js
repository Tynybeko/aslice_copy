import swal from "sweetalert2";
import api from "@/service/api";
import { errorHandler } from "@/utils/errorHandler";

export default {
  namespaced: true,
  state: {
    group: null,
    loading: false
  },
  mutations: {
    SET_GROUP(state, group) {
      console.log("group set");
      state.group = group;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    ON_DESTROY(state) {
      state.group = null;
    }
  },
  actions: {
    async createGroup({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        swal.showLoading();
        const data = await api.createGroupRequest(payload);
        errorHandler(
          data,
          () => {
            commit("SET_GROUP", data.Data);
            swal.close();
          },
          () => {}
        );
      } catch (e) {
        console.log(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async getGroup({ commit }, payload) {
      try {
        commit("SET_GROUP", null);
        commit("SET_LOADING", true);
        const data = await api.getGroupRequest(payload);
        if (data.Data && !data.Error) {
          commit("SET_GROUP", data.Data);
        }
        return data;
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async addMemberToGroup({ commit }, payload) {
      try {
        const { id, data } = payload;
        commit("SET_LOADING", true);
        swal.showLoading();
        const response = await api.addMemberToGroupRequest(id, data);
        errorHandler(response, () => {
          swal.close();
          commit("SET_GROUP", response.Data);
        });
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async inviteMemberToGroup({ commit }, payload) {
      try {
        const { id, data } = payload;
        commit("SET_LOADING", true);
        const response = await api.inviteMemberToGroupRequest(id, data);
        if (response.Data && !response.Error) {
          swal.fire({
            icon: "success",
            text: "Invitation sent successfuly"
          });
        }
        return response;
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async updateUserAlias({ commit }, { groupId, membershipId, performerId }) {
      swal.showLoading();
      const response = await api.updateDataOfMembership(groupId, {
        membershipId,
        performerId
      });
      if (!response.Error) {
        const groupData = await api.getGroupRequest(groupId);
        errorHandler(response, commit("SET_GROUP", groupData.Data), () => {});
        swal.close();
      } else {
        swal.close();
        swal.fire({
          icon: "error",
          text: response.Error
        });
      }
    },
    async approveGroupMembership({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        const response = await api.approveGroupMembershipRequest(payload);
        return errorHandler(response);
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    clearGroup({ commit }) {
      commit("ON_DESTROY");
    },
    async openDisput({ commit }, payload) {
      try {
        const { data } = payload;
        commit("SET_LOADING", true);
        swal.showLoading();
        const response = await api.openDisputRequest(data);
        errorHandler(response);
        return response;
      } catch (e) {
        console.error(e);
      } finally {
        swal.close();
        commit("SET_LOADING", false);
      }
    }
  }
};
