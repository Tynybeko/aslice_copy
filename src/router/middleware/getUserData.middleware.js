import api from "../../service/api";
import swal from "sweetalert2";

export const getUserData = async ({ store, next }) => {
  const user = store.getters["user/getUser"];
  const updateState = store.getters["user/getUpdateState"];
  if (user && updateState) {
    swal.showLoading();
    const userData = await api.isAuthorized(user);
    swal.close();
    store.dispatch("user/setUserData", userData.Data);
  }
  return next();
};
