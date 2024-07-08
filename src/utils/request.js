import axios from "axios";
// import user from "@/store/modules/user";
import swal from "sweetalert2";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 60 * 4 * 1000
  // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
// service.interceptors.request.use(
//   config => {
//     // Add Authorization header to every request, you can add other custom headers here
//     if (user.state.token) {
//       config.headers.Authorization = `Bearer ${user.state.token}`;
//     }
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   }
// );

// Response interceptors
service.interceptors.response.use(undefined, async error => {
  if (error.response && error.response.data) {
    swal.fire({
      icon: "error",
      text: error.response.data.message
    });
  } else {
    if (error.message) {
      swal.fire({
        icon: "error",
        text: error.message
      });
    } else if (typeof error === "string") {
      swal.fire({
        icon: "error",
        text: error
      });
    }
  }

  return Promise.reject(error);
});

export default service;
