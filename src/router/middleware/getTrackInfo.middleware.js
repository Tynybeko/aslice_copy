import api from "@/service/api";
import swal from "sweetalert2";

const alreadyLoaded = ({ store, params }) => {
  const id = store.getters["trackSharing/getId"];
  const needsUpdate = store.getters["trackSharing/getUpdateState"];
  return params?.id === id && id && params?.id && !needsUpdate;
};

const getTrackDataMiddleware = async ({ to, from, router, next, store }) => {
  const params = to.params;
  const userId = store.getters["user/getUser"].id;
  if (alreadyLoaded({ store, params })) {
    return next();
  }
  swal.showLoading();
  const track = await api.getTrackRequest(params.id, userId);

  if (!track.Error) {
    if (!track.Data.artworks.length && track.Data.image === null) {
      return;
    }
    store.dispatch("trackSharing/setTrack", track.Data);
    store.commit("trackSharing/SET_NEEDS_TO_UPDATE", true);
    swal.close();
    return next();
  } else {
    await swal.fire({
      icon: "error",
      text: track.Error
    });
    return router.push(from).catch();
  }
};

export { getTrackDataMiddleware };
