<template>
  <div
    id="dashboard-content-page"
    class="container-fluid online-dashboard-container online-dashboard-content-view"
  >
    <div class="row mx-0">
      <div class="col-12 px-4">
        <div class="group-form__header mt-4">
          <router-link
            class="back-button align-items-center mb-3 text-decoration-none link-span d-none d-lg-flex"
            :to="{
              name: 'Playlists'
            }"
          >
            <div class="my-auto d-flex back-arrow">
              <svg class="px-4 my-auto w-100" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.146445 3.64645C-0.0488167 3.84171 -0.0488167 4.15829 0.146445 4.35355L3.32843 7.53553C3.52369 7.7308 3.84027 7.7308 4.03553 7.53553C4.23079 7.34027 4.23079 7.02369 4.03553 6.82843L1.20711 4L4.03553 1.17157C4.2308 0.97631 4.2308 0.659727 4.03553 0.464465C3.84027 0.269203 3.52369 0.269203 3.32843 0.464465L0.146445 3.64645ZM15.5 3.5L0.499999 3.5L0.499999 4.5L15.5 4.5L15.5 3.5Z" fill="#AAA3B1"/>
              </svg>
            </div>
            <span class="ml-3">Back to Playlists</span>
          </router-link>
          <h1>Social Share</h1>
        </div>
      </div>

      <div class="col-12 px-4 mt-5 position-relative tabs-menu">
        <nav class="subpage-tabs position-absolute d-flex">
          <router-link
            class="link-span text-uppercase text-decoration-none px-4"
            style="padding-top: 10px; padding-bottom: 10px"
            :to="{
              name: 'Playlist Sharing Preview',
              params: { id: playlistId }
            }"
          >
            image
          </router-link>
          <router-link
            class="link-span text-uppercase text-decoration-none px-4"
            style="padding-top: 10px; padding-bottom: 10px"
            :to="{
              name: 'Playlist Sharing List',
              params: { id: playlistId }
            }"
          >
            tracklist
          </router-link>
        </nav>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "PlaylistSharing",
  data() {
    return {};
  },
  computed: {
    playlistId() {
      return this.$store.getters["playlistSharing/getId"];
    },
  },
  created() {
    this.$root.$el.classList.add("d-flex");
  },
  beforeDestroy() {
    this.$root.$el.classList.remove("d-flex");
  }
};
</script>

<style lang="scss" scoped>
.group-form__header {
  padding-left: 0px;
  border-bottom: none;
  padding-bottom: 8px;
}
.back-arrow {
  min-height: 30px;
  border: solid 1px #aaa3b1;
  border-radius: 15px;
  margin: auto 0;
  transition: 0.2s ease-out;

  &:hover {
    border: solid 1px #442671;
    background: #EADDFE;
    path {
      fill: #442671;
    }
  }
}

h1 {
  color: #442671;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 0;
}

.link-span {
  font-family: "Roboto-Mono";

  &:hover {
    color: #442671;
  }
}

.tabs-menu {
  border-bottom: solid 1px #a7a3a3;
}

.subpage-tabs {
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.15em;
  transform: translate(0, -100%);
  box-sizing: border-box;

  a[aria-current="page"] {
    background-color: white;
  }
  a.router-link-active {
    background-color: white;
  }
  a {
    border-left: solid 1px #a7a3a3;
    border-top: solid 1px #a7a3a3;
  }

  a:last-child {
    border-right: solid 1px #a7a3a3;
  }
}
</style>
