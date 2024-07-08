import qs from "qs";
import axiosLib from "axios";
import to from "await-to-js";
import router from "../router";
import { blobToObject } from "@/utils/files";

const axios = axiosLib.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  headers: {
    Accept: "application/json"
  }
});
class AxiosCustomError {
  config;
  code;
  request;
  response;
  isAxiosError;
  name;
  message;
  stack;
  Error;
  constructor(axiosErr) {
    this.config = axiosErr.config;
    this.code = axiosErr.code;
    this.request = axiosErr.request;
    this.response = axiosErr.response;
    this.isAxiosError = axiosErr.isAxiosError;
    this.name = axiosErr.name;
    this.message = axiosErr.message;
    this.stack = axiosErr.stack;
  }
}
// axios.interceptors.request.use(param => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     param.headers = {
//       ...param.headers,
//       ...{ Authorization: "Bearer " + token || "{}" }
//     };
//   }
//   return param;
// });

axios.interceptors.response.use(
  async response => {
    const { status } = response;
    if (status === 502) {
      router.push({ name: "ServerError" });
    }
    return response;
  },
  async error => {
    if (error.response && error.response.status === 401) {
      return { data: { Error: error.response.data.message || "UnAuthorized" } };
    }
    if (error.response && error.response.status === 403) {
      return {
        data: { Error: error.response.data.message || "Access denied" }
      };
    }
    // Handle errors if response data type blob
    if (error.response.data instanceof Blob) {
      error.response.data = await blobToObject(error.response.data);
    }

    const customError = new AxiosCustomError(error);
    customError.Error =
      (error.response && error.response.data && error.response.data.message) ||
      "Server Error";
    return Promise.reject(customError);
  }
);

const posts = [
  {
    id: 100,
    title: "DJ One Sheet For DJs, Booking Agents, Artist Managers, And More",
    preview: "",
    categories: []
  },
  {
    id: 99,
    title:
      "More About Aslice’s Pilot Partnership Programs With SOCAN And BumaStemra",
    preview: "",
    categories: []
  },
  {
    id: 98,
    title: "Aslice Founder At Berlin’s Tech Open Air Conference 2023 #TOA23",
    preview: "",
    categories: []
  },
  {
    id: 97,
    title: "Sharing Is Tax-Deductible! Tax Tips For Working DJs",
    preview: "",
    categories: []
  },
  {
    id: 96,
    title: "aslice integration x Native Instruments TRAKTOR Pro DJ software",
    preview: "",
    categories: []
  },
  {
    id: 95,
    title: "95 DJ One Sheet For DJs, Booking Agents, Artist Managers, And More",
    preview: "",
    categories: []
  },
  {
    id: 94,
    title:
      "94 More About Aslice’s Pilot Partnership Programs With SOCAN And BumaStemra",
    preview: "",
    categories: []
  },
  {
    id: 93,
    title: "93 Aslice Founder At Berlin’s Tech Open Air Conference 2023 #TOA23",
    preview: "",
    categories: []
  },
  {
    id: 92,
    title: "92 Sharing Is Tax-Deductible! Tax Tips For Working DJs",
    preview: "",
    categories: []
  },
  {
    id: 91,
    title: "91 aslice integration x Native Instruments TRAKTOR Pro DJ software",
    preview: "",
    categories: []
  },
  {
    id: 90,
    title: "90 DJ One Sheet For DJs, Booking Agents, Artist Managers, And More",
    preview: "",
    categories: []
  },
  {
    id: 89,
    title:
      "89 More About Aslice’s Pilot Partnership Programs With SOCAN And BumaStemra",
    preview: "",
    categories: []
  },
  {
    id: 88,
    title: "88 Aslice Founder At Berlin’s Tech Open Air Conference 2023 #TOA23",
    preview: "",
    categories: []
  },
  {
    id: 87,
    title: "87 Sharing Is Tax-Deductible! Tax Tips For Working DJs",
    preview: "",
    categories: []
  },
  {
    id: 86,
    title: "86 aslice integration x Native Instruments TRAKTOR Pro DJ software",
    preview: "",
    categories: []
  },
  {
    id: 85,
    title: "85 DJ One Sheet For DJs, Booking Agents, Artist Managers, And More",
    preview: "",
    categories: []
  },
  {
    id: 84,
    title:
      "84 More About Aslice’s Pilot Partnership Programs With SOCAN And BumaStemra",
    preview: "",
    categories: []
  },
  {
    id: 83,
    title: "83 Aslice Founder At Berlin’s Tech Open Air Conference 2023 #TOA23",
    preview: "",
    categories: []
  },
  {
    id: 82,
    title: "82 Sharing Is Tax-Deductible! Tax Tips For Working DJs",
    preview: "",
    categories: []
  },
  {
    id: 81,
    title: "81 aslice integration x Native Instruments TRAKTOR Pro DJ software",
    preview: "",
    categories: []
  },
  {
    id: 80,
    title: "80 DJ One Sheet For DJs, Booking Agents, Artist Managers, And More",
    preview: "",
    categories: []
  },
  {
    id: 79,
    title:
      "79 More About Aslice’s Pilot Partnership Programs With SOCAN And BumaStemra",
    preview: "",
    categories: []
  },
  {
    id: 78,
    title: "78 Aslice Founder At Berlin’s Tech Open Air Conference 2023 #TOA23",
    preview: "",
    categories: []
  },
  {
    id: 77,
    title: "77 Sharing Is Tax-Deductible! Tax Tips For Working DJs",
    preview: "",
    categories: []
  },
  {
    id: 76,
    title: "76 aslice integration x Native Instruments TRAKTOR Pro DJ software",
    preview: "",
    categories: []
  }
];

export async function Request(axiosRequest) {
  const promise = axios(axiosRequest);
  const result = await to(promise);
  const axiosResponse = (result[1] && result[1].data) || {};
  let err = result[0];

  return {
    Error: err ? err.Error || "Server Error" : axiosResponse?.Error,
    Data: axiosResponse
  };
}
export default {
  async StripeVerify() {
    return await Request({
      method: "post",
      url: `/api/stripe/verification-session`
    });
  },
  async createPersonaInquiries(inquiryId) {
    return await Request({
      method: "post",
      url: `/api/persona/inquiries`,
      data: { inquiryId }
    });
  },
  async getVerificationStatus(userId) {
    return await Request({
      method: "get",
      url: `/api/users/${userId}/verification-status`
    });
  },
  async Login(email, password) {
    return await Request({
      method: "post",
      url: `/api/auth/login`,
      data: { email, password }
    });
  },
  async logout() {
    return await Request({
      method: "post",
      url: `/api/auth/logout`
    });
  },
  async updateAvatar(userId, formdata) {
    return await Request({
      method: "post",
      url: `/api/users/${userId}/avatar`,
      data: formdata
    });
  },
  async deleteAvatar(userId) {
    return await Request({
      method: "delete",
      url: `/api/users/${userId}/avatar`
    });
  },
  async updateUser(userId, user) {
    return await Request({
      method: "put",
      url: `/api/users/${userId}`,
      data: user
    });
  },
  async getUserPaymentMethod(userId, user) {
    return await Request({
      method: "get",
      url: `/api/users/${userId}`,
      data: user
    });
  },
  async isAuthorized(userId) {
    return await Request({
      method: "get",
      url: `/api/users/${userId}`
    });
  },
  async searcField(searchParam) {
    return await Request({
      method: "get",
      url: `/api/users?username=${searchParam}&email=${searchParam}&performerName=${searchParam}`
    });
  },
  async getPlaylistsData(params) {
    const queryParams = params
      ? `?${qs.stringify(params, { skipNulls: true, arrayFormat: "repeat" })}`
      : "";
    return await Request({
      method: "get",
      url: `/api/playlists${queryParams}`
    });
  },
  async getPlaylist(payload) {
    return await Request({
      url: `/api/playlists/${payload?.id || ""}`,
      params: payload
    });
  },
  async updatePlaylist(payload) {
    return await Request({
      method: "PUT",
      url: `/api/playlists/${payload?.id || ""}`,
      data: { ...payload }
    });
  },
  async getTracksData(data) {
    return await Request({
      method: "get",
      url: `/api/playlists/${data.id}?userId=${data.userId}`
    });
  },
  async toggleHiddenStatusTrackRequest(id, data) {
    return await Request({
      method: "post",
      url: `/api/playlists/${id}/track/toggle-hidden-status`,
      data
    });
  },
  async getPerformersData(text) {
    return await Request({
      method: "get",
      url: `/api/performers?name=${text}`
    });
  },
  async deleteAsliceAccount(userId, reson) {
    return await Request({
      method: "delete",
      url: `/api/users/${userId}`,
      data: { reasonForDeletion: reson }
    });
  },
  /** TRACK API**/
  async updateTrackImage(trackId, formdata) {
    return await Request({
      method: "post",
      url: `/api/tracks/${trackId}/image`,
      data: formdata
    });
  },
  async reportNotMyTrack(trackId) {
    return await Request({
      method: "post",
      url: `/api/tracks/${trackId}/not-my-track`
    });
  },
  async reportTracksPrivacyPreference() {
    return await Request({
      method: "get",
      url: `/api/tracks/hidden`
    });
  },
  async addNewTrack(data) {
    return await Request({
      method: "post",
      url: `/api/tracks`,
      data: { data }
    });
  },
  async addTrackPerformers(trackId, payload) {
    return await Request({
      method: "post",
      url: `/api/tracks/${trackId}/performer`,
      data: payload
    });
  },
  async changeTrackPerformers(trackId, payload) {
    return await Request({
      method: "put",
      url: `/api/tracks/${trackId}/performer`,
      data: payload
    });
  },
  async removePerformerFromTrack(trackId, payload) {
    return await Request({
      method: "delete",
      url: `/api/tracks/${trackId}/performer`,
      data: payload
    });
  },
  async inviteMistake(id, payload) {
    return await Request({
      method: "post",
      url: `/api/playlists/${id}/report-mistake`,
      data: payload
    });
  },
  async invitePerformer(data) {
    return await Request({
      method: "post",
      url: "/api/users/send-invitation/",
      data: data
    });
  },
  async updateTrackData(trackId, payload) {
    return await Request({
      method: "put",
      url: `/api/tracks/${trackId}`,
      data: payload
    });
  },
  async updateTrackLabel(trackId, payload) {
    return await Request({
      method: "put",
      url: `/api/tracks/${trackId}`,
      data: payload
    });
  },
  async updateTrackName(trackId, name) {
    return await Request({
      method: "put",
      url: `/api/tracks/${trackId}`,
      data: name
    });
  },
  async updateStatusMemberGroup(trackId, payload) {
    return await Request({
      method: "put",
      url: `/api/tracks/${trackId}`,
      data: payload
    });
  },
  async getAllTracks(params) {
    return await Request({
      method: "get",
      url: `/api/tracks`,
      params
    });
  },
  async getTrackRequest(id, userId, skipOwnPlays) {
    return await Request({
      method: "get",
      url: `/api/tracks/${id}`,
      params: { userId, skipOwnPlays }
    });
  },
  async getPopularVenues(payload) {
    return await Request({
      method: "get",
      url: `/api/dashboard/producer/most-played-venues`,
      params: { monthQuantity: payload.monthQty, take: payload.take }
    });
  },
  async getPopularProducers(payload) {
    return await Request({
      method: "get",
      url: `/api/dashboard/dj/most-played-producers`,
      params: { monthQuantity: payload.monthQty, take: payload.take }
    });
  },
  async fetchPromoterMostPlayedProducers(year) {
    return await Request({
      method: "get",
      url: `/api/dashboard/promoter/most-played-producers`,
      params: { year }
    });
  },
  async getPopularTracks(payload) {
    return await Request({
      method: "get",
      url: `/api/dashboard/dj/most-played-tracks`,
      params: { monthQuantity: payload.monthQty, take: payload.take }
    });
  },
  async fetchMostPlayedTracks(year) {
    return await Request({
      method: "get",
      url: `/api/dashboard/promoter/most-played-tracks`,
      params: { year }
    });
  },
  async fetchPlaylistUploadsByDj(year) {
    return await Request({
      method: "get",
      url: `/api/dashboard/promoter/djs-playlists-uploads`,
      params: { year }
    });
  },
  async getSharedData(query) {
    return await Request({
      method: "get",
      url: `/api/dashboard/dj/shared-data`,
      params: { year: query }
    });
  },
  async getPromoterSharedData(year) {
    return await Request({
      method: "get",
      url: `/api/dashboard/promoter/shared-data`,
      params: { year }
    });
  },
  async getProducerMostPlayedDjs(payload) {
    return await Request({
      method: "get",
      url: `/api/dashboard/producer/most-played-djs`,
      params: { monthQuantity: payload.monthQty, take: payload.take }
    });
  },
  async getProducerMostPlayedTracks(payload) {
    return await Request({
      method: "get",
      url: `/api/dashboard/producer/most-played-tracks`,
      params: { monthQuantity: payload.monthQty, take: payload.take }
    });
  },
  async getProducerPlayedTracks(query) {
    return await Request({
      method: "get",
      url: `/api/dashboard/producer/tracks-played`,
      params: { year: query }
    });
  },
  // async postTrack (data) {
  //   return await Request({
  //     method: "post",
  //     url: `/api/playlists`,
  //     data: data,
  //   });
  // },
  /** PERFORMER API**/
  async getPerformerDataById(performerId) {
    return await Request({
      method: "get",
      url: `/api/performers/${performerId}`
    });
  },
  authLogin(payload) {
    return Request({
      method: "post",
      url: "/api/auth/login",
      data: payload
    });
  },
  requestAccess(payload) {
    return Request({
      method: "post",
      url: "/api/beta-access/request-access",
      data: payload
    });
  },
  betaAccess(payload) {
    return Request({
      method: "post",
      url: "/api/beta-access/check-access",
      data: payload
    });
  },
  async authSignup(payload) {
    return await Request({
      method: "post",
      url: "/api/users/register",
      data: payload
    });
  },
  async emailVerify(payload) {
    return await Request({
      method: "post",
      url: `/api/users/${payload.user_id}/verify-email`,
      data: {
        accessToken: payload.access_token
      }
    });
  },
  async changeEmail(payload) {
    return await Request({
      method: "post",
      url: `/api/users/${payload.userId}/change-email`,
      data: {
        email: payload.email
      }
    });
  },
  async googleRegistration(payload) {
    return await Request({
      method: "post",
      url: "/api/users/google-register",
      data: payload
    });
  },
  async googleAuth(payload) {
    return await Request({
      method: "post",
      url: "/api/auth/google-login",
      data: payload
    });
  },
  async getSocieties() {
    return await Request({
      method: "get",
      url: `/api/societies?take=999`
    });
  },
  async getPayPalredirectingUrl() {
    return await Request({
      method: "get",
      url: "/api/paypal/auth-url"
    });
  },
  async getPayPalPaymentMethodUrl() {
    return await Request({
      method: "get",
      url: "/api/paypal/setup-token-url"
    });
  },
  async getPayPalStatus(userId, codeId) {
    return await Request({
      method: "post",
      url: `/api/users/${userId}/bind-paypal`,
      data: { code: codeId }
    });
  },
  async postStripeSessionId(id) {
    return await Request({
      method: "post",
      url: `/api/stripe/checkout-session`,
      data: { customerId: id }
    });
  },
  async postStripePayMethodId(userId, id) {
    return await Request({
      method: "post",
      url: `/api/users/${userId}/bind-stripe-payment-method`,
      data: { sessionId: id }
    });
  },
  async bindPayPalPaymentMethod(userId, tokenId) {
    return await Request({
      method: "post",
      url: `/api/users/${userId}/bind-paypal-payment-method`,
      data: { tokenId }
    });
  },
  async postWisePayoutMethod(userId, payload) {
    return await Request({
      method: "post",
      url: `/api/users/${userId}/bind-wise-payout-method`,
      data: payload
    });
  },
  async postStripeAccount(id) {
    return await Request({
      method: "post",
      url: `/api/stripe/accounts/connect`,
      data: { accountId: id }
    });
  },
  async bindStripePayoutMethod(userId, generatedToken) {
    return await Request({
      method: "post",
      url: `/api/users/${userId}/bind-stripe-payout-method`,
      data: { token: generatedToken }
    });
  },
  async checkStripeAccountStatus(userId) {
    return await Request({
      method: "get",
      url: `/api/users/${userId}/stripe-account-state`
    });
  },
  async payPalCreateOrder(id) {
    return await Request({
      method: "post",
      url: `/api/playlists/${id}/create-order`
    });
  },
  async payPalDonate(id) {
    return await Request({
      method: "post",
      url: `/api/playlists/${id}/donate`
    });
  },
  // TODO: Remove after refactoring
  // async getAccountingStatistic(payload) {
  //   if (payload.fromDate !== null && payload.toDate !== null) {
  //     return await Request({
  //       method: "get",
  //       url: `/api/accounting/accruals?fromDate=${payload.fromDate}&toDate=${payload.toDate}`
  //     });
  //   }
  //   return await Request({
  //     method: "get",
  //     url: "/api/accounting/accruals"
  //   });
  // },
  async getAccountingDjReport(startDate, endDate, userId) {
    if (startDate !== null && endDate !== null) {
      return await Request({
        method: "get",
        url: `/api/playlists/report?fromDate=${startDate}&toDate=${endDate}&userId=${userId}`,
        responseType: "blob"
      });
    }
  },
  async getAccountingPromoterReport(startDate, endDate) {
    if (startDate !== null && endDate !== null) {
      return await Request({
        method: "get",
        url: `/api/playlists/report/for-promoter?fromDate=${startDate}&toDate=${endDate}`,
        responseType: "blob"
      });
    }
  },
  async getAccountingProducerReport(startDate, endDate, userId) {
    if (startDate !== null && endDate !== null) {
      return await Request({
        method: "get",
        url: `/api/accounting/accruals/report?fromDate=${startDate}&toDate=${endDate}&userId=${userId}`,
        responseType: "blob"
      });
    }
  },
  // async getAccountingSharedData(payload) {
  //   if (!payload.fromDate || !payload.toDate) {
  //     return await Request({
  //       method: "get",
  //       url: `/api/playlists?userId=${payload.userId}&isPaid=${payload.isPaid}&take=${payload.take}`
  //     });
  //   }
  //   return await Request({
  //     method: "get",
  //     url: `/api/playlists?userId=${payload.userId}&isPaid=${payload.isPaid}&take=${payload.take}&fromDate=${payload.fromDate}&toDate=${payload.toDate}`
  //   });
  // },
  async sendFeedback(feedbacPayload) {
    return await Request({
      method: "post",
      url: "/api/feedback",
      data: feedbacPayload,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  async sendPasswordChangeRequest(userEmail) {
    return await Request({
      method: "post",
      url: "/api/users/forgot-password",
      data: { email: userEmail }
    });
  },
  async getDesktopAppLinks() {
    return await Request({
      method: "get",
      url: "/api/desktop-app-builds"
    });
  },
  async createGroupRequest(data) {
    return await Request({
      method: "post",
      url: "/api/performers/create-group",
      data
    });
  },
  async getGroupRequest(id) {
    return await Request({
      method: "get",
      url: `/api/performers/${id}`
    });
  },
  async addMemberToGroupRequest(id, data) {
    return await Request({
      method: "post",
      url: `/api/performers/${id}/group-membership`,
      data
    });
  },
  async inviteMemberToGroupRequest(id, data) {
    return await Request({
      method: "post",
      url: `/api/performers/${id}/send-invitation`,
      data
    });
  },
  async updateDataOfMembership(id, data) {
    return await Request({
      method: "PUT",
      url: `/api/performers/${id}/group-membership`,
      data
    });
  },
  async approveGroupMembershipRequest(id) {
    return await Request({
      method: "post",
      url: `/api/performers/${id}/group-membership/approve`
    });
  },
  async openDisputRequest(data) {
    return await Request({
      method: "post",
      // url: `/api/performers/${id}/open-dispute`,
      url: `/api/disputes`,
      data
    });
  },
  async getMessages(paylpad) {
    const payload = paylpad;
    return await Request({
      method: "get",
      url: "/api/messages",
      params: {
        ...payload
      }
    });
  },
  async markAsRead(payload) {
    return await Request({
      method: "post",
      url: `api/messages/${payload.id}/mark-as-read`
    });
  },
  async postSubscribeNewslatterEmail(payload) {
    return await Request({
      method: "post",
      url: "/api/newsletter/subscribe",
      data: {
        ...payload
      }
    });
  },
  async getPlayedProducersCountRequest() {
    return await Request({
      method: "get",
      url: "/api/accounting/paid-producers-count"
    });
  },
  async createProducerBonusFromDjRequest(payload) {
    return await Request({
      method: "post",
      url: "/api/bonuses",
      data: { ...payload }
    });
  },
  async fetchCategories() {
    return await Request({
      method: "get",
      url: "/api/posts/categories"
    });
  },
  async fetchCategoriesMock() {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          "General",
          "Business",
          "General",
          "Clubs",
          "General",
          "Documents",
          "General",
          "Financials",
          "General",
          "Machine Learning",
          "General",
          "Music Producers",
          "General",
          "Software",
          "General",
          "Videos",
          "General"
        ]);
      }, 1000);
    });
  },
  async fetchPosts({ page, take }) {
    return await new Promise(resolve => {
      setTimeout(() => {
        const count = posts.length;
        const results = posts.slice((page - 1) * take, page * take);
        resolve({
          count,
          results
        });
      }, 1000);
    });
  },
  async fetchPostsCursorMock({ cursor, take }) {
    return await new Promise(resolve => {
      setTimeout(() => {
        let results = posts.filter(post => (cursor ? post.id < cursor : true));
        const numRemain = results.length;
        results = results.slice(0, take);
        const hasNext = numRemain > results.length;
        resolve({
          hasNext,
          results
        });
      }, 1000);
    });
  },
  async fetchPostsCursor({ cursor, take, query, categories }) {
    return await Request({
      method: "get",
      url: "/api/posts/published",
      params: {
        cursor,
        take,
        query: query || null,
        categories
      }
    });
  },
  async fetchPost(id) {
    return await Request({
      method: "get",
      url: `/api/posts/${id}`
    });
  },
  async fetchPostBySlug(slug) {
    return await Request({
      method: "get",
      url: `/api/posts/get-one-by`,
      params: {
        slug
      }
    });
  },
  async fetchRelatedPosts(id) {
    return await Request({
      method: "get",
      url: `/api/posts/${id}/related`
    });
  },
  async fetchVenue(id) {
    return await Request({
      method: "get",
      url: `/api/venues/get-one-by`,
      params: {
        id
      }
    });
  },
  async updateVenue(id, venue) {
    return await Request({
      method: "put",
      url: `/api/venues/${id}`,
      data: venue
    });
  }
};
