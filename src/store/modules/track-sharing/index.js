import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import { getters } from "./getters";

export default {
  name: "trackSharing",
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
