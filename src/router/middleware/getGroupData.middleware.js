import swal from "sweetalert2";
import { markAsRead } from "@/utils/messages";

const getGroupDataMiddleware = async ({ store, to, next }) => {
  const { id } = to.params;

  if (id) {
    swal.showLoading();
    await store.dispatch("groups/getGroup", id);
    // TODO: ask about msg_id & user_id
    await markAsRead({
      payload: to.query
      // TODO: store as context
    });
    await swal.close();
  } else {
    store.dispatch("groups/clearGroup");
  }

  return next();
};

export { getGroupDataMiddleware };
