import { actions } from "@/store/modules/djdashboard/actions";
import { state } from "@/store/modules/djdashboard/state";
import { mutations } from "@/store/modules/djdashboard/mutations";
import { getters } from "@/store/modules/djdashboard/getters";

export default {
  name: "djdashboard",
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
