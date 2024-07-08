import api from "@/service/api";
import swal from "sweetalert2";
export default {
  namespaced: true,
  state: {
    userId: JSON.parse(localStorage.getItem("verifyUserId")) || null,
    registrationForm: {
      firstName: "",
      lastName: "",
      performerName: [],
      password: "",
      roles: [],
      genres: [],
      emailVerified: true,
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      socials: [],
      societies: [],
      publisherEmail: "",
      preferredCurrency: null
    },
    stepsReadyStatus: {
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      stepFour: false
    }
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
      localStorage.setItem("verifyUserId", userId);
    },
    //will think that next button is enabled (everything is valid)
    registrationStepOne(state, form) {
      state.registrationForm.password = form.password;
      state.registrationForm.firstName = form.firstName;
      state.registrationForm.lastName = form.lastName;
      state.registrationForm.addressLine1 = form.addressLine1;
      state.registrationForm.addressLine2 = form.addressLine2;
      state.registrationForm.city = form.city;
      state.registrationForm.state = form.state;
      state.registrationForm.country = form.country;
      state.registrationForm.postalCode = form.postalCode;
      state.stepsReadyStatus.stepOne = true;
    },
    registrationStepTwo(state, form) {
      state.registrationForm.performerName = form.producerName.name;
      if (form.advisor !== null) {
        state.registrationForm.socials.push(form.advisor);
      }
      if (form.discogs !== null) {
        state.registrationForm.socials.push(form.discogs);
      }
      if (form.facebook !== null) {
        state.registrationForm.socials.push(form.facebook);
      }
      if (form.instagram !== null) {
        state.registrationForm.socials.push(form.instagram);
      }
      if (form.retailer !== null) {
        state.registrationForm.socials.push(form.retailer);
      }
      if (form.soundCloud !== null) {
        state.registrationForm.socials.push(form.soundCloud);
      }
      state.registrationForm.roles = [form.accountType];
      state.stepsReadyStatus.stepTwo = true;
    },
    registrationStepTwoGenres(state, status) {
      state.registrationForm.genres = status;
    },
    registrationStepTwoSocials(state, payload) {
      state.registrationForm.socials = [
        { type: "Facebook", link: payload.facebook },
        { type: "Discogs", link: payload.discogs },
        { type: "Resident advisor", link: payload.advisor },
        { type: "Soundcloud", link: payload.soundCloud },
        { type: "Online retailer", link: payload.retailer },
        { type: "Instagram", link: payload.instagram }
      ];
    },
    registrationStepThree(state, payload) {
      if (
        payload.preferredCurrency !== null ||
        payload.preferredCurrency !== ""
      ) {
        state.registrationForm.preferredCurrency = payload.preferredCurrency;
      }
      state.stepsReadyStatus.stepThree = true;
    },
    registrationStepFour(state, form) {
      state.registrationForm.publisherEmail = form.email;
      state.registrationForm.societies = [{ id: form.societies[0] }];
      state.stepsReadyStatus.stepFour = true;
    },
    submitRegistrationBecauseOfStripe(state, form) {
      state.registrationForm = form;
    },
    updateRegForm(state, form) {
      state.registrationForm = form;
    }
  },
  actions: {
    submitStoredForm({ commit }, form) {
      commit("submitRegistrationBecauseOfStripe", form);
    },
    saveUserIdToState({ commit }, userId) {
      commit("setUserId", userId);
    },
    //if all steps are true -> call api to send request and get response;
    async sendVerificationData({ state, dispatch, commit }, userId) {
      const payload = state.registrationForm;
      payload.socials = payload.socials.filter(x => x.link !== "");
      if (
        payload.preferredCurrency === "" ||
        payload.preferredCurrency === null
      ) {
        payload.preferredCurrency = "USD";
      }
      swal.showLoading();
      const response = await api.updateUser(userId, payload);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      commit("updateRegForm", response.Data);
      dispatch("user/authSuccessFromVerification", response.Data, {
        root: true
      });
      swal.close();
      // axios
      //   .put(`/api/users/${state.userId}`, state.registrationForm)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // if (response.Error) {
      //   swal.fire({
      //     icon: "error",
      //     title: response.Error
      //   });
      //   return;
      // }
    }
  }
};
