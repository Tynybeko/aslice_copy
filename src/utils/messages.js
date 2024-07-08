import api from "@/service/api";
import { errorHandler } from "@/utils/errorHandler";
import store from "@/store";

/**
 *
 * @param payload type message data
 * @returns {Promise<void>}
 */
const markAsRead = async ({ payload }) => {
  console.log("works, payload", payload);
  if (payload?.msg_id || payload?.id) {
    console.log("works");
    const result = await api.markAsRead({ id: payload?.msg_id || payload?.id });
    console.log(result);
    errorHandler(result, () => {
      console.log("attempt to dispatch messages/updateSingleMessage");
      store.dispatch("messages/updateSingleMessage", result.Data);
    });
    // TODO: after message storage ready update messages
  }
};

export { markAsRead };
