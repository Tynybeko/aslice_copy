import request from "@/utils/request";
import api from "@/service/api";
import router from "@/router";
import Vue from "vue";
import Swal from "sweetalert2";
import createMutationsSharer from "vuex-shared-mutations";
import swal from "sweetalert2";
import * as Sentry from "@sentry/vue";
import { errorHandler } from "@/utils/errorHandler";
import { compare } from "@/utils/array";

export default {
  namespaced: true,
  plugins: [createMutationsSharer({ predicate: ["updateSuccess"] })],
  state: {
    neeedsToUpdate: false,
    canSavePreferences: false,

    token: localStorage.getItem("token") || "",

    data: null,
    userCopy: null,
    changedUserData: {},
    userPreferencesErrors: false,

    isAuthorized: false,
    currentTabComponent: parseInt(
      parseInt(localStorage.getItem("verificationStarted")) || 1
    ),
    societies: []
  },
  mutations: {
    AUTH_SUСCESS(state, userData) {
      state.isAuthorized = true;
      const userInfo = userData;
      const { user } = userInfo;
      const socials = [
        { type: "Bandcamp", link: "" },
        { type: "Beatport", link: "" },
        { type: "Discogs", link: "" },
        { type: "Soundcloud", link: "" },
        { type: "Tracksource", link: "" },
        { type: "Facebook", link: "" },
        { type: "Instagram", link: "" },
        { type: "Resident advisor", link: "" },
        { type: "Twitter", link: "" }
      ];
      if (user.socials && user.socials.length > 0) {
        user.socials.forEach(social => {
          const found = socials.find(s => s.type === social.type);
          if (found) {
            found.link = social.link;
          }
        });
      }
      userInfo.socials = socials;
      state.data = user;
      state.userCopy = JSON.parse(JSON.stringify(user));
      if (userData.accessToken) {
        state.token = userData.accessToken;
        localStorage.setItem("token", userData.accessToken);
      }
      localStorage.setItem("currentUserId", JSON.stringify(state.data.id));
      if (
        router.currentRoute.name !== "betapage" &&
        router.currentRoute.name !== "EmailVerification" &&
        router.currentRoute.name !== "AuthVerifyProcess"
      ) {
        // console.log("REDIRECT TO MAIN in user store module");
        // QUESTION: for what it?
        // TODO: if depricated - clear this
        // router.push({ name: "Main" });
      }

      if (state.data.registrationComplete) {
        localStorage.removeItem("verificationStarted");
      }

      Sentry.setUser({
        id: user.id,
        email: user.email,
        username: user.asliceId,
        ip_address: "{{auto}}"
      });
    },
    LOGOUT(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("currentUserId");
      // TODO: убрать, доработать через middleware, разобраться почему он не работает как надо (должен удалить из localStorage)
      localStorage.removeItem("verifyUserId");
      localStorage.removeItem("verificationStarted");
      Vue.$cookies.remove("user_id");
      Vue.$cookies.remove("access_token");
      state.isAuthorized = false;
      state.token = null;
      state.data = null;
      if (router.currentRoute.name !== "Main" && state.data == null) {
        router.push({ name: "Main" });
      }
    },

    loginSuccess(state, user) {
      state.isAuthorized = true;
      state.data = user;
      state.userCopy = JSON.parse(JSON.stringify(user));
    },
    loginFailure(state) {
      state.isAuthorized = false;
      state.data = null;
      state.userCopy = null;
      localStorage.removeItem("token");
      Vue.$cookies.remove("access_token");
    },
    registerSuccess(state) {
      state.isAuthorized = false;
    },
    registerFailure(state) {
      state.isAuthorized = false;
    },
    updateSuccess(state, user) {
      localStorage.removeItem("tempEmail");
      localStorage.removeItem("tempId");
      localStorage.setItem("currentUserId", JSON.stringify(user.id));
      const socialsArray = ["", "", "", "", "", ""];
      user.socials.forEach(social => {
        socialsArray.forEach(link => {
          if (social.link.includes(link)) {
            social.link = social.link.replace(link, "");
          }
        });
      });
      state.data = user;
    },
    updateFailure(state, oldUser) {
      state.data = oldUser;
    },
    deleteAvatarSuccess(state) {
      state.data.avatar = null;
    },
    setToken(state, accessToken) {
      state.token = accessToken;
      localStorage.setItem("token", accessToken);
    },
    avatarUpdating(state, resp) {
      if (resp.avatar !== null) {
        state.data.avatar = resp.avatar;
        state.userCopy.avatar = resp.avatar;
      }
    },
    changingVerificationStatus(state, resp) {
      state.data.verificationStatus = resp;
    },
    changingPayPalStatus(state, resp) {
      state.data.paypalEmail = resp;
    },
    saveStripeData(state, resp) {
      state.data = resp;
    },
    savePayPalData(state, resp) {
      state.data = resp;
    },
    updateSocials(state, social) {
      state.data.socials = social;
    },
    updateCurrency(state, preferredCurrency) {
      state.data.preferredCurrency = preferredCurrency;
    },
    SET_CURRENT_TAB_COMPONENT(state, payload) {
      state.currentTabComponent = payload;
    },
    SET_NEXT_TAB(state) {
      state.currentTabComponent += 1;
    },
    SET_USER_DATA(state, payload) {
      state.data = payload;
    },
    SOCKET_USERUPDATED(state, payload) {
      console.debug("SOCKET_USERUPDATED", payload);
      state.data = payload;
    },
    UPDATE_USER_COPY(state, payload) {
      state.userCopy = {
        ...state.userCopy,
        ...payload,
        venues: [
          ...(state.userCopy.venues?.find(v => v?.isPrimary) ? [state.userCopy.venues.find(v => v?.isPrimary)] : []),
          ...(payload.venues || [])
        ]
      };
      if (payload?.venues?.[0].isPrimary) {
        state.userCopy.venues.shift();
      }
      state.changedUserData = {
        ...state.changedUserData,
        ...payload
      };

      let newBool = !!Object.keys(state.changedUserData).length;
      if (state.userCopy?.performers?.length !== state.data.performers.length) {
        newBool = true;
      }
      if (
        state.userCopy?.playlistsDisplayingPreference !==
        state.data?.playlistsDisplayingPreference
      ) {
        newBool = true;
      }
      if (
        state.userCopy?.tracksDisplayingPreference !==
        state.data?.tracksDisplayingPreference
      ) {
        newBool = true;
      }
      if (
        state.userCopy?.tracksPrivacyPreference !==
        state.data?.tracksPrivacyPreference
      ) {
        newBool = true;
      }
      if (state.userCopy.country !== state.data.country) {
        newBool = true;
      }
      if (state.userCopy.preferredCurrency !== state.data.preferredCurrency) {
        newBool = true;
      }
      if (state.userCopy?.genres?.length !== state.data?.genres?.length) {
        newBool = true;
      }
      if (state.userCopy.addressLine1 !== state.data.addressLine1) {
        newBool = true;
      }
      if (state.userCopy.addressLine2 !== state.data.addressLine2) {
        newBool = true;
      }
      if (state.userCopy.city !== state.data.city) {
        newBool = true;
      }
      if (state.userCopy?.newPassword) {
        newBool = true;
      }
      if (state.userCopy?.state !== state.data.state) {
        newBool = true;
      }
      if (state.userCopy?.postalCode !== state.data.postalCode) {
        newBool = true;
      }
      if (
        state.userCopy.defaultPayoutMethod !== state.data.defaultPayoutMethod
      ) {
        newBool = true;
      }
      if (state.userCopy.offlinePayments !== state.data.offlinePayments) {
        newBool = true;
      }
      if (
        state.userCopy.defaultPaymentMethod !== state.data.defaultPaymentMethod
      ) {
        newBool = true;
      }
      state.userCopy.socials.forEach(socialLink => {
        const copy = state.data.socials.find(
          link => socialLink.type === link.type
        );
        if (copy?.link !== socialLink.link && !!socialLink.link) {
          newBool = true;
        }
      });

      if (state.userCopy.societies?.length !== state.data.societies?.length) {
        newBool = true;
      }
      if (state.userCopy.societies?.length && state.data.societies?.length) {
        if (state.userCopy.societies[0].name !== state.data.societies[0].name) {
          newBool = true;
        }
      }

      if (state.userCopy.publisherEmail !== state.data.publisherEmail) {
        newBool = true;
      }
      if (
        state.userCopy.deniedTopics.length !== state.data.deniedTopics.length
      ) {
        newBool = true;
      }
      state.userCopy.deniedTopics.forEach(option => {
        if (!state.data.deniedTopics.find(opt => opt === option)) {
          newBool = true;
        }
      });

      state.canSavePreferences = newBool;
    },
    SET_VENUE_ADDRESS(state, payload) {
      state.userCopy = {
        ...state.userCopy,
        venueAddressLine1: payload.addressLine1,
        venueAddressLine2: payload.addressLine2,
        venueCity: payload.city,
        venueCountry: payload.country,
        venueState: payload.state,
        venuePostalCode: payload.postalCode
      };
    },
    SAVE_FLAG_DISABLE(state) {
      state.canSavePreferences = false;
      state.changedUserData = {};
    },
    SET_UPDATE_STATE(state, payload) {
      state.neeedsToUpdate = payload;
    },

    SET_SOCIETIES_LIST(state, payload) {
      state.societies = payload;
    },

    SET_USER_ERRORS(state, payload) {
      state.userPreferencesErrors = payload;
    }
  },
  actions: {
    async onSubmit({ dispatch }, { newUserData, user }) {
      let _valid = true;
      const validatePassword = () => {
        const pass = newUserData.newPassword;
        const isNotEmpty = pass && pass.length > 0;
        return (
          !(isNotEmpty && /[A-Z]/.test(pass)) ||
          !(isNotEmpty && /[a-z]/.test(pass)) ||
          !(isNotEmpty && /\d/.test(pass))
        );
      };

      if (newUserData.genres?.length < 1) {
        console.log("GENERS");
        swal.fire({
          icon: "error",
          text: "Please select at least 1 genre"
        });
        return;
      }
      let filledSocials = newUserData.socials?.filter(x => x.link !== "");
      if (filledSocials && filledSocials.length < 2) {
        console.log("filledSocials");
        swal.fire({
          icon: "error",
          text: "Please fill at least 2 social links"
        });
        return;
      }
      let payload = {
        addressLine1: newUserData.addressLine1,
        addressLine2: newUserData.addressLine2,
        city: newUserData.city,
        country: newUserData.country,
        deniedTopics: newUserData.deniedTopics,
        notificationSchedules: newUserData.notificationSchedules,
        email: newUserData.email,
        firstName: newUserData.firstName,
        genres: newUserData.genres,
        lastName: newUserData.lastName,
        performers: newUserData.performers?.map(({ name }) => name),
        playlistsDisplayingPreference:
          newUserData.playlistsDisplayingPreference?.label,
        postalCode: newUserData.postalCode,
        preferredCurrency: newUserData.preferredCurrency,
        publisherEmail: newUserData.publisherEmail,
        defaultPayoutMethod: newUserData.defaultPayoutMethod,
        defaultPaymentMethod: newUserData.defaultPaymentMethod,
        offlinePayments: newUserData.offlinePayments,
        societies: newUserData.societies,
        state: newUserData.state,
        socials: newUserData.socials?.filter(link => !!link.link),
        tracksDisplayingPreference:
          newUserData.tracksDisplayingPreference?.label,
        tracksPrivacyPreference: newUserData.tracksPrivacyPreference?.label
      };
      if (!payload.playlistsDisplayingPreference) {
        delete payload.playlistsDisplayingPreference;
      }
      if (!payload.tracksDisplayingPreference) {
        delete payload.tracksDisplayingPreference;
      }
      if (!payload.tracksPrivacyPreference) {
        delete payload.tracksPrivacyPreference;
      }

      const promoterFields = ["companyName", "roleInCompany", "primeVenueName"];
      for (const field of promoterFields) {
        if (field in newUserData) {
          payload[field] = newUserData[field];
        }
      }

      if ("venues" in newUserData) {
        payload.venues = newUserData.venues.map(v => v.name);
      }

      // TODO: Socials validations add after update socials page

      if (newUserData?.newPassword) {
        if (newUserData.oldPassword !== "") {
          if (newUserData.newPassword === newUserData.newPasswordVerify) {
            if (validatePassword()) {
              swal.fire({
                icon: "error",
                title: "Your password is too weak.",
                text: "Follow the recommended password setting standards"
              });
              return;
            }
            payload.currentPassword = newUserData.oldPassword;
            payload.password = newUserData.newPassword;
            _valid = true;
          } else {
            _valid = false;
            swal.fire({
              icon: "error",
              text: "New Password and Verify New Password are different."
            });
          }
        } else {
          _valid = false;
          console.log("filledSocials");
          swal.fire({
            icon: "error",
            text: "Type your old password"
          });
        }
      }

      // WTF?
      if (newUserData.roles) {
        payload.roles = [];

        if (Array.isArray(newUserData.roles)) {
          payload.roles.push(newUserData.roles[0].name);
        } else {
          payload.roles.push(newUserData.roles);
        }
      }
      console.log("PAYLOAD: ", payload, _valid);
      if (_valid) {
        dispatch("updateUser", { newData: payload, user });
        this._vm.$bvToast.toast("Success", {
          title: "Your profile has been updated.",
          variant: "success",
          autoHideDelay: 5000,
          appendToast: false,
          solid: true
        });
      }
    },
    confirmStripeData({ dispatch, commit }, resp) {
      if (resp) {
        commit("saveStripeData", resp);
        if (localStorage.getItem("redirectedFromProccess")) {
          dispatch("setCurrentTabComponent", 2, { root: true });
          router.push({ name: "AuthVerifyProcess" });
        }
        if (localStorage.getItem("redirectStripeFromSettings")) {
          localStorage.removeItem("redirectStripeFromSettings");
          router.push({ name: "Payments", query: { remind: "1" } });
        }
        if (localStorage.getItem("redirectStripeFromOverview")) {
          localStorage.removeItem("redirectStripeFromOverview");
          router.push({ name: "Overview" });
        }
      }
    },
    confirmPayPalData({ dispatch, commit }, resp) {
      if (resp) {
        commit("savePayPalData", resp);
        if (localStorage.getItem("redirectedFromProccess")) {
          dispatch("setCurrentTabComponent", 2, { root: true });
          router.push({ name: "AuthVerifyProcess" });
        }
        if (localStorage.getItem("redirectStripeFromSettings")) {
          localStorage.removeItem("redirectStripeFromSettings");
          router.push({ name: "Payments", query: { remind: "1" } });
        }
        if (localStorage.getItem("redirectStripeFromOverview")) {
          localStorage.removeItem("redirectStripeFromOverview");
          router.push({ name: "Overview" });
        }
      }
    },
    authSuccessFromVerification({ commit }, resp) {
      commit("AUTH_SUСCESS", resp);
    },
    changeVerificationStatus({ commit }, resp) {
      if (resp) {
        commit("changingVerificationStatus", resp);
        router.push({ name: "AuthVerifyProcess" });
      }
    },
    changePayPalStatus({ dispatch, commit }, resp) {
      if (resp) {
        commit("changingPayPalStatus", resp);
        if (localStorage.getItem("redirectStripeFromOverview")) {
          localStorage.removeItem("redirectStripeFromOverview");
          router.push({ name: "Overview" });
          return;
        }
        if (localStorage.getItem("redirectStripeFromSettings")) {
          localStorage.removeItem("redirectStripeFromSettings");
          router.push({ name: "Payments", query: { remind: "1" } });
          return;
        }
        if (localStorage.getItem("redirectedFromProccess")) {
          dispatch("setCurrentTabComponent", 2, { root: true });
          router.push({ name: "AuthVerifyProcess" });
        }
      }
    },
    async login({ commit }, user) {
      console.log("ON ACTION: ", {
        email: user.email,
        password: this.password
      });
      const response = await request.post("/api/auth/login", user);
      console.log(response);
      if (response.Error || response.Data.Error) {
        Swal.fire({
          icon: "error",
          text: response.Error
        });
        commit("loginFailure");
        return;
      }
      commit("loginSuccess", response.data && response.data.user);
      commit("setToken", response.data && response.data.accessToken);
      return response;
    },
    async logout({ commit }) {
      Swal.showLoading();
      const response = await api.logout();
      Swal.close();

      if (response.Error) {
        Swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }

      commit("LOGOUT");
    },
    async register({ commit }, user) {
      try {
        const response = await request.post("/api/users/register", user, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        commit("registerSuccess", response.data);
        return response;
      } catch (error) {
        commit("registerFailure");
        throw error;
      }
    },
    async updateUser({ state, commit }, { newData, user }) {
      const { venueAddress } = newData;
      delete newData.venueAddress;

      if ("primeVenueName" in newData && user.primeVenueName) {
        delete newData.primeVenueName;
      }

      let response;
      if (user && user.id) {
        response = await api.updateUser(user.id, newData);
        commit("SAVE_FLAG_DISABLE");
      } else {
        response = await api.updateUser(state.data.id, newData);
        commit("SAVE_FLAG_DISABLE");
      }
      Swal.showLoading();
      if (response.Error) {
        commit("updateFailure", user);
        Swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }

      const respUser = JSON.parse(JSON.stringify(response.Data));

      if (venueAddress) {
        const primaryVenueId = response.Data.venues.find(v => v.isPrimary).id;
        const venueResponse = await api.updateVenue(primaryVenueId, {
          address: {
            addressLine1: venueAddress.addressLine1,
            addressLine2: venueAddress.addressLine2,
            city: venueAddress.city,
            state: venueAddress.state,
            country: venueAddress.country,
            postalCode: venueAddress.postalCode
          },
          sameAddress: venueAddress.sameAddress,
          multipleAddresses: venueAddress.multipleAddresses
        });

        if (venueResponse.Error) {
          await Swal.fire({
            icon: "error",
            text: venueResponse.Error
          });
          return;
        }
      }

      Swal.close();
      commit("SET_NEXT_TAB");
      const socials = [
        { type: "Bandcamp", link: "" },
        { type: "Beatport", link: "" },
        { type: "Discogs", link: "" },
        { type: "Soundcloud", link: "" },
        { type: "Tracksource", link: "" },
        { type: "Facebook", link: "" },
        { type: "Instagram", link: "" },
        { type: "Resident advisor", link: "" },
        { type: "Twitter", link: "" }
      ];
      if (respUser.socials && respUser.socials.length > 0) {
        respUser.socials.forEach(social => {
          const found = socials.find(s => s.type === social.type);
          if (found) {
            found.link = social.link;
          }
        });
      }
      respUser.socials = socials;
      commit("updateSuccess", respUser);
    },
    async updateUserWithoutNextTab({ state, commit }, { newData, user }) {
      let response;
      if (user && user.id) {
        response = await api.updateUser(user.id, newData);
        commit("SAVE_FLAG_DISABLE");
      } else {
        response = await api.updateUser(state.data.id, newData);
        commit("SAVE_FLAG_DISABLE");
      }
      Swal.showLoading();
      if (response.Error) {
        commit("updateFailure", user);
        Swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      Swal.close();
      const respUser = JSON.parse(JSON.stringify(response.Data));
      const socials = [
        { type: "Bandcamp", link: "" },
        { type: "Beatport", link: "" },
        { type: "Discogs", link: "" },
        { type: "Soundcloud", link: "" },
        { type: "Tracksource", link: "" },
        { type: "Facebook", link: "" },
        { type: "Instagram", link: "" },
        { type: "Resident advisor", link: "" },
        { type: "Twitter", link: "" }
      ];
      if (respUser.socials && respUser.socials.length > 0) {
        respUser.socials.forEach(social => {
          const found = socials.find(s => s.type === social.type);
          if (found) {
            found.link = social.link;
          }
        });
      }
      respUser.socials = socials;
      commit("updateSuccess", respUser);
    },
    async updateProfileAvatar({ state, commit }, formdata) {
      Swal.showLoading();
      const response = await api.updateAvatar(state.data.id, formdata);
      if (response.Error) {
        Swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      commit("avatarUpdating", response.Data);
      Swal.close();
    },
    setCurrentTabComponent({ commit }, payload) {
      commit("SET_CURRENT_TAB_COMPONENT", payload);
    },
    setUserData({ commit }, payload) {
      commit("SET_USER_DATA", payload);
    },
    async getSocieties({ commit }) {
      swal.close();
      swal.showLoading();
      const response = await api.getSocieties();
      errorHandler(response, () => {
        if (response.Data.results.length > 0) {
          const societesData = response.Data.results.sort(compare);
          societesData.unshift({ id: 0, name: "None" });
          commit("SET_SOCIETIES_LIST", societesData);
        }
        swal.close();
      });
    },
    async loadVenueAddress({ state, commit, getters }) {
      if (!getters.isPromoter) {
        return;
      }

      const primaryVenueId = state.data?.venues.find(v => v.isPrimary)?.id;

      if (!primaryVenueId) {
        return;
      }

      const venueResponse = await api.fetchVenue(primaryVenueId);

      if (venueResponse.Error) {
        await swal.fire({
          icon: "error",
          text: venueResponse.Error || "Failed to fetch primary venue"
        });
        return;
      }

      commit("SET_VENUE_ADDRESS", {
        addressLine1: venueResponse.Data.address.addressLine1,
        addressLine2: venueResponse.Data.address.addressLine2,
        city: venueResponse.Data.address.city,
        country: venueResponse.Data.address.country,
        state: venueResponse.Data.address.state,
        postalCode: venueResponse.Data.address.postalCode
      });
    }
  },
  getters: {
    isAuthorized(state) {
      return !!state.token;
    },
    isDj(state) {
      return (
        state.data &&
        state.data.roles &&
        state.data.roles.some(r => r.name === "dj")
      );
    },
    isPromoter(state) {
      return (
        state.data &&
        state.data.roles &&
        state.data.roles.some(r => r.name === "promoter")
      );
    },
    getUser(state) {
      return state.data;
    },
    getUserCopy(state) {
      return JSON.parse(JSON.stringify(state.userCopy));
    },
    getChangedUserData(state) {
      return state.changedUserData;
    },
    getSocieties(state) {
      return state.societies;
    },

    getUpdateState(state) {
      return state.neeedsToUpdate;
    },
    currencySymbol(state) {
      let currencySymbol = "$";
      if (
        state.data.preferredCurrency &&
        state.data.preferredCurrency !== null
      ) {
        if (state.data.preferredCurrency === "EUR") {
          currencySymbol = "€";
        }
        if (state.data.preferredCurrency === "GBP") {
          currencySymbol = "£";
        }
      }
      return currencySymbol;
    },
    getCurrentTabComponent(state) {
      return state.currentTabComponent;
    }
  }
};
