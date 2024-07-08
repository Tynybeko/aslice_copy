import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import groups from "./modules/groups";
import verifySteps from "./modules/verifySteps";
import resources from "./modules/resources";
import djdashboard from "./modules/djdashboard/index";
import beforeAccess from "./modules/beforeAccess";
import messages from "./modules/messages/index";
import playlistSharing from "./modules/playlist-sharing/index";
import trackSharing from './modules/track-sharing/index';
import accounting from "./modules/accounting/index";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    app,
    user,
    groups,
    messages,
    accounting,
    verifySteps,
    djdashboard,
    beforeAccess,
    trackSharing,
    playlistSharing,
    resources
  }
});
