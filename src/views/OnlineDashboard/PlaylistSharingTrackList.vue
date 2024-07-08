<template>
  <div class="row mx-0 bg-white pl-lg-5 pt-lg-5 pl-sm-2 pt-sm-4 pt-4">
    <AppModal v-if="showCopySuccessModal" closeIcon title="Copied to clipboard" @onClose="handleCloseCopySuccessModal" />
    <div class="col-12 px-4">
      <div class="col-12 row flex flex-wrap-reverse w-100">
        <div class="track-list-wrapper bg-gray  pl-lg-5 pt-lg-5 pb-lg-3 pr-lg-4 px-4 py-4 mb-4" ref="text">
          <simplebar class="track-list-scrolled d-flex flex-column pr-4">
            <span class="label-text mb-4 d-flex color-purple">
              {{ description + "\n\n" }}
            </span>
            <span v-if="user.primeArtistName" class="label-text d-flex color-purple">
              {{ user.primeArtistName + "\n" }}
            </span>
            <span v-if="playlist.datePlayed" class="label-text d-flex color-purple">
              {{ momentDate(playlist.datePlayed) + "\n" }}
            </span>
            <span v-if="playlist.venue" class="label-text d-flex color-purple">
              {{ playlist.venue + "\n" }}
            </span>
            <span v-if="playlist.city && playlist.country" class="label-text d-flex color-purple mb-3">
              {{ `${playlist.city}, ${playlist.country}` + "\n\n" }}
            </span>
            <div v-for="(track, index) in playlist.tracks" :key="index" class="d-flex">
              <div class="d-flex label-text mr-2">{{ index + 1 }}.</div>
              <div class="d-flex flex-column mb-3" v-if="!playlist.hiddenTracks.find(el => el.id === track.id)">
                <span v-if="track.performers.length" class="label-text d-flex">
                  Artist:
                  {{ track.performers.map(({ name }) => name).join(" & ") }}
                </span>
                <span v-if="track.remixers.length" class="label-text d-flex">
                  Remixer:
                  {{ track.remixers.map(({ name }) => name).join(" & ") }}
                </span>
                <span v-if="user.playlistsDisplayingPreference === 'Full track info' &&
                  track.name
                  " class="label-text d-flex">
                  Track: {{ track.name + "\n\n" }}
                </span>
              </div>
              <div class="d-flex flex-column mb-3" v-else>
                <span v-if="track.performers.length" class="label-text d-flex">
                  Artist: Hidden by DJ
                </span>
                <span v-if="track.remixers.length" class="label-text d-flex">
                  Remixer: Hidden by DJ
                </span>
                <span v-if="user.playlistsDisplayingPreference === 'Full track info' &&
                  track.name
                  " class="label-text d-flex">
                  Track: Hidden by DJ
                </span>
              </div>
            </div>
          </simplebar>
        </div>
        <div class=" pl-lg-5 px-4">
          <p class="lable-text purple text-uppercase">Playlist</p>
          <h1>{{ playlist.name }}</h1>
          <p class="lable-text purple text-uppercase">Tracklist Display</p>
          <div class="row mx-0 mt-0 align-items-center mb-4">
            <h3 class="title mb-0">{{ user.playlistsDisplayingPreference }}</h3>
            <router-link :to="{
              name: 'Display'
            }" class="label-text color-gray d-flex ml-3">
              (Change Settings)
            </router-link>
          </div>
          <div class="col-12 pr-4 pl-0 mt-lg-2">
            <span class="label-text text-uppercase color-gray d-flex mb-lg-3 mb-2">
              Display Artist Social Handles
            </span>
            <div class="social-media-checkbox">
              <label class="square-radio">
                <input type="radio" v-model="selectedSocialMedia" value="twitter" />
                Twitter
                <span class="checkmark"></span>
              </label>
              <label class="square-radio">
                <input type="radio" v-model="selectedSocialMedia" value="instagram" />
                Instagram
                <span class="checkmark"></span>
              </label>
              <label class="square-radio">
                <input type="radio" v-model="selectedSocialMedia" value="facebook" />
                Facebook
                <span class="checkmark"></span>
              </label>
              <label class="square-radio">
                <input type="radio" v-model="selectedSocialMedia" value="none" @change="handleNoneSelection" />
                None
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <PrimaryButton class="text-decoration-none my-4 my-lg-5 px-4 justify-content-lg-start justify-content-center"
            type="button" @click="copyButtonHandler()">
            Copy text
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import swal from "sweetalert2";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import AppModal from "@/components/AppModal.vue";
import PrimaryButton from "@/components/global/buttons/PrimaryButton.vue";

export default {
  name: "PlaylistSharingTrackList",
  components: {
    PrimaryButton,
    AppModal,
    simplebar
  },
  data() {
    return {
      showCopySuccessModal: false,
      description:
        "Learn how www.aslice.com is building a more equitable music economy.",
      selectedSocialMedia: '',
    };
  },
  computed: {
    ...mapState("playlistSharing", ["playlist"]),
    ...mapState("user", {
      user: "data"
    }),
    isFullTrackInfo() {
      return this.user.playlistsDisplayingPreference === "Full track info";
    },
  },
  methods: {
    handleCloseCopySuccessModal() {
      this.showCopySuccessModal = false;
    },
    momentDate(data) {
      return moment(data, moment.ISO_8601).format("DD/MM/YYYY");
    },
    handleNoneChange() {
      if (this.socialMediaHandles.none) {
        this.socialMediaHandles.twitter = false;
        this.socialMediaHandles.instagram = false;
        this.socialMediaHandles.facebook = false;
        this.socialLinks = []
      }
    },

    copyButtonHandler() {
      let reducer = "";
      for (const child of this.$refs.text.children) {
        reducer += child.textContent + "\n";
      }
      try {
        navigator.clipboard.writeText(reducer);
        this.showCopySuccessModal = true;
      } catch (error) {
        swal.fire({
          icon: "error",
          text: error.message
        });
      }
    }
  },
  watch: {
    selectedSocialMedia(value) {
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white;
}

.bg-gray {
  background: #f2f1ef;
}

.mt-lg-6 {
  @media only screen and (min-width: 992px) {
    margin-top: 60px !important;
  }
}

.square-radio {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-right: 15px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

.square-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.square-radio input:checked~.checkmark {
  background-color: #2196F3;
}

.square-radio .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 0;
  /* This makes it square */
}

.square-radio .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.square-radio input:checked~.checkmark:after {
  display: block;
}

.square-radio .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.label-text {
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.15em;
}

.purple {
  color: #442671;
}

.title {
  font-size: 24px;
  line-height: 42px;
  color: #442671;
}

.track-list-wrapper {
  max-width: 678px;
  width: 100%;
  max-height: 377px;

  .label-text {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: normal;
  }
}

.track-list-scrolled {
  max-height: 339px;
}

.social-media-checkbox label {
  display: flex;
  gap: 10px;
}

.social-media-checkbox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
}

@media only screen and (min-width: 992px) {
  .track-list-wrapper {
    max-height: 536px;
  }

  .track-list-scrolled {
    max-height: 483px;
  }
}

::v-deep .simplebar-scrollbar:before {
  color: #c4c4c4;
  width: 5px;
  opacity: 0.3;
}

.rounded-button {
  border: none;
  color: #fff;
  background: #442671;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #442671 !important;
    background: #fff;
  }
}
</style>
