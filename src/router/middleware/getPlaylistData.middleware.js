import api from "@/service/api";
import swal from "sweetalert2";

const alreadyLoaded = ({ store, params }) => {
  const id = store.getters["playlistSharing/getId"];
  const needsUpdate = store.getters["playlistSharing/getUpdateState"];
  return params?.id === id && id && params?.id && !needsUpdate;
};

const getPlaylistDataMiddleware = async ({ to, from, router, next, store }) => {
  const params = to.params;
  const userId = store.getters["user/getUser"].id;
  if (alreadyLoaded({ store, params })) {
    return next();
  }
  swal.showLoading();
  const playlist = await api.getPlaylist({
    ...params,
    userId
  });
  if (!playlist.Error) {
    store.dispatch("playlistSharing/setPlaylist", playlist.Data);
    store.commit("playlistSharing/SET_NEEDS_TO_UPDATE", false);
    swal.close();
    return next();
  } else {
    swal.fire({
      icon: "error",
      text: playlist.Error
    });
    return router.push(from);
  }
};

const playlistDataGuard = ({ store, next, router }) => {
  const playlist = store.getters["playlistSharing/getPlaylist"];
  if (!playlist.status) {
    return router.push({ name: "Playlists" });
  }
  return next();
};
export { getPlaylistDataMiddleware, playlistDataGuard };
