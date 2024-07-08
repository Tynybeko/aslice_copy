<template>
  <div v-if="user" class="container-fluid online-dashboard-container" :class="{
    'gray-background': !JSON.stringify(user.roles).includes('producer')
  }" id="dashboard-content-page">

    <div class="col-12 d-flex flex-column" style="padding: 0;">
      <div class="d-flex align-items-center background-color">
        <h1 class="sub-page-title color-purple">
          All Tracks
        </h1>
        <div class="self-tracks-selector  d-none" :class="{
          'd-lg-flex': JSON.stringify(user.roles).includes('producer')
        }">
          <div class="self-tracks-selector__title">Self Plays:</div>
          <div key="show-own-tracks" :class="[
            'self-tracks-selector__option',
            { 'self-tracks-selector__option_active': showOwnTracks === 1 }
          ]" @click="handleShowOwnTracksChange(1)">
            Show
          </div>
          <div key="hide-own-tracks" :class="[
            'self-tracks-selector__option',
            { 'self-tracks-selector__option_active': showOwnTracks === 0 }
          ]" @click="handleShowOwnTracksChange(0)">
            Hide
          </div>
        </div>
      </div>
      <table v-if="CountTracksPrivacyPreference !== null" class="table table-hover custom-table preference">
        <thead>
          <tr>
            <th class="first-col">Beta Hide tracks pro Feature</th>
            <th class="second-col">Play Count</th>
            <th class="third-col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="first-col">Tracks reported anonymously</td>
            <td class="second-col">{{ CountTracksPrivacyPreference }}</td>
            <td class="third-col">
              <b-container fluid>
                <b-row align-v="center" align-h="end">
                  <b-col cols="auto">
                    <span class="action-cell" @click="routeToTrack(0)">
                      Details
                    </span>
                  </b-col>
                </b-row>
              </b-container>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-hover custom-table" :class="{
        'mb-0': !user.verified
      }">
        <thead>
          <tr>
            <th class="first-col">Track title</th>
            <th class="mobil-first-col">Track title</th>
            <th class="second-col" style="cursor: pointer;" @click="handleSortChange('playCount')">
              <div class="d-flex justify-content-lg-start justify-content-center">
                <div class="mr-2">play count</div>
                <template v-if="allTracks.length">
                  <img v-if="getCurrentFieldDirection('playCount') === 'down'" src="@/assets/images/sort-up.svg"
                    alt="sort" />
                  <img v-else-if="getCurrentFieldDirection('playCount') === 'up'" src="@/assets/images/sort-down.svg"
                    alt="sort" />
                  <img v-else src="@/assets/images/sort.svg" alt="sort" />
                </template>
              </div>
            </th>
            <th class="third-col"></th>
          </tr>
        </thead>
        <tbody v-if="allTracks.length && user.verified">
          <tr v-for="(track, i) in allTracks" :key="i">
            <td class="first-col ">{{ track.name }}</td>
            <td class="mobil-first-col ">{{ track.name.length > 12 ? track.name.substring(0, 12) + '...' : track.name }}
            </td>
            <td class="second-col">{{ track.playCount }}</td>
            <td class="third-col">
              <b-container fluid>
                <b-row align-v="center" align-h="end">
                  <b-col cols="auto" class="d-lg-flex d-none">
                    <button class="rounded-button" @click="handleNotMyTrack(track.id)">
                      Not my track
                    </button>
                  </b-col>
                  <b-col cols="auto">
                    <span class="action-cell" @click="routeToTrack(track.id)">
                      Details
                    </span>
                  </b-col>
                </b-row>
              </b-container>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!user.verified || !JSON.stringify(user.roles).includes('producer')" style="
          margin-top: -2px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          color: #F2F1EF;
          background: #AAA3B1;
          height: calc(100vh - 156px);
        ">
        <div class="text-capitalize" style="
            max-width: 453px;
            font-size: 36px;
            line-height: 42px;
            font-family: 'Europa-Regular';
            font-width: 400;
          ">
          This section is unavailable until you are verified.
        </div>
        <div class="mt-5" style="font-size: 12px; line-height: 16px; max-width: 453px;">
          To protect producers who receive money, we have to fully verified your profile to access this section. Don’t
          worry, any tracks of yours that are played are still counted and will be visible as soon as this process is
          complete. (verification can take up to 30 days.)
        </div>
      </div>
      <div v-else-if="user.verified && take <= totalTracksCount"
        class="d-flex justify-content-center custom-pagination mt-3 mb-4">
        <AslicePagination v-model="page" :per-page="take" :total-rows="totalTracksCount" />
      </div>
      <!-- <div
        v-if="!JSON.stringify(user.roles).includes('producer')"
        class="row mx-0"
      >
        <PayPalConnect class="px-4" style="max-width: 452px" />
      </div> -->
      <div v-if="user.verified &&
        !allTracks.length &&
        JSON.stringify(user.roles).includes('producer') &&
        !dataError
        " class="no-data">
        No data yet
      </div>
      <div class="data_forbidden" v-else-if="dataError && dataError != 403">
        <p>{{ dataError }}</p>
      </div>
    </div>

    <AppModal v-if="showNotMyTrackModal" title="This Is Not My Track" closeIcon :description="`
        I want to report that this is not my track and should be fixed in the Aslice Database.<br>
        <br>
        *An Aslice Admin may reach out with any questions.
      `
      " @onClose="showNotMyTrackModal = false" custom-footer>
      <template #footer>
        <div class="app-modal__footer">
          <button @click="handleSubmitNotMyTrack">
            Submit
          </button>
        </div>
      </template>
    </AppModal>

    <AppModal v-if="preloadModal" title="Gathering information" closeIcon :description="`
        Please do not refresh or leave this page. We are gathering the most current information from our database. This process may take up to 1 minute.
      `
      " @onClose="preloadModal = false" custom-footer>
      <template #footer>
        <div class="app-modal__footer">
          <button @click="preloadModal = false">
            Close
          </button>
        </div>
      </template>
    </AppModal>

    <AppModal v-if="showNotMyTrackConfirmationModal" title="Thank You<br>Report Submitted"
      @onClose="showNotMyTrackConfirmationModal = false" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import swal from "sweetalert2";
// import PayPalConnect from "@/components/PayPalConnect";
import AslicePagination from "@/components/global/AslicePagination.vue";
import AppModal from "@/components/AppModal";
import api from "@/service/api";

export default {
  name: "Tracks",
  components: {
    // PayPalConnect,
    AslicePagination,
    AppModal
  },
  data() {
    return {
      page: 1,
      take: 20,
      CountTracksPrivacyPreference: null,
      sort: {
        field: "playCount",
        direction: ""
      },
      dataError: {},
      showOwnTracks: 1,
      preloadModal: true,
      showNotMyTrackModal: false,
      showNotMyTrackConfirmationModal: false,
      notMyTrackId: null
    };
  },
  created() {
    const { page = 1 } = this.$route.query;
    this.page = page;
    this.showOwnTracks = Number(localStorage.getItem("showSelfPlays"));
  },
  computed: {
    ...mapState("user", {
      user: state => state.data
    }),
    ...mapState("djdashboard", ["allTracks", "totalTracksCount"]),
    verified() {
      return this.user.verified;
    },


    customType() {
      let result;
      if (this.user) {
        if (Array.isArray(this.user.roles)) {
          if (this.user.roles && this.user.roles.length > 0) {
            if (this.user.roles.find(x => x.name === "dj")) {
              result = "dj";
            }
            if (this.user.roles.find(x => x.name === "fan")) {
              result = "fan";
            }
            if (this.user.roles.find(x => x.name === "producer")) {
              result = "producer";
            }
            if (
              this.user.roles.find(x => x.name === "dj") &&
              this.user.roles.find(x => x.name === "producer")
            ) {
              result = "dj-producer";
            }
          }
        } else {
          result = this.user.roles;
        }
      }
      return result;
    },
    queryParams() {
      return {
        page: this.page,
        take: this.take,
        userId: this.user.id,
        showSelfPlays:
          this.showOwnTracks || Number(localStorage.getItem("showSelfPlays")),
        orderColumn: this.sort.field || "datePlayed",
        orderDirection: this.sort.direction || null
      };
    }
  },
  watch: {
    allTracks(newData) {
      if (newData.length > 0) {
        this.preloadModal = false
      }
    },
    page() {
      this.fetchAllTracks();
    }
  },
  methods: {
    ...mapActions("djdashboard", ["getAllTracks"]),
    routeToTrack(trackId) {
      this.$router
        .push({ name: "Track", params: { id: trackId } })
        .catch(() => { });
    },
    handleNotMyTrack(trackId) {
      this.notMyTrackId = trackId;
      this.showNotMyTrackModal = true;
    },
    async handleSubmitNotMyTrack() {
      this.showNotMyTrackModal = false;

      // swal.showLoading();
      const response = await api.reportNotMyTrack(this.notMyTrackId);
      // swal.close();

      this.notMyTrackId = null;

      if (response.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }

      this.showNotMyTrackConfirmationModal = true;
    },
    fetchAllTracks() {
      this.$router
        .push({
          name: "Tracks",
          query: Object.assign({ ...this.$route.query }, this.queryParams)
        })
        .catch(() => { });
    },
    getCurrentFieldDirection(field) {
      if (field === this.sort.field) {
        if (this.sort.direction === "ASC") {
          return "down";
        }
        if (this.sort.direction === "DESC") {
          return "up";
        }
        return "";
      }
      return "";
    },
    getCurrentDirection() {
      if (this.sort.direction === "DESC") {
        return "ASC";
      }
      if (this.sort.direction === "ASC") {
        return "";
      }
      return "DESC";
    },
    handleSortChange(field) {
      if (!this.allTracks.length || !this.user.verified) return;
      if (field === this.sort.field) {
        const direction = this.getCurrentDirection();
        if (direction) {
          this.sort.direction = direction;
        } else {
          this.sort.field = "";
          this.sort.direction = "";
        }
      } else {
        this.sort.field = field;
        this.sort.direction = "DESC";
      }
      this.fetchAllTracks();
    },
    handleShowOwnTracksChange(showOwnTracks) {
      this.page = 1;
      this.showOwnTracks = showOwnTracks;
      localStorage.setItem("showSelfPlays", showOwnTracks);
      this.fetchAllTracks();
    }
  },
  async mounted() {
    if (!this?.user?.roles?.some(item => item.name == 'producer')) {
      this.dataError = 403
      return this.preloadModal = false
    }
    const { orderColumn = "", orderDirection = "" } = this.$route.query;
    this.sort.field = orderColumn;
    this.sort.direction = orderDirection;
    swal.showLoading();
    const data = await api.reportTracksPrivacyPreference();
    this.CountTracksPrivacyPreference = data.Data.totalPlayCount || null;
    this.dataError = data.Error;
    swal.close();
    if (this.user.roles.find(e => e.name !== 'admin') || this.user.roles.find(e => e.name !== 'producer')) {
      this.preloadModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.background-color {
  background-color: #f2f1ef
}

.self-tracks-selector {
  display: flex;
  margin-top: 8px;
  font-size: 12px;
  color: #aaa3b1;
  font-weight: 400;
  margin-left: 20px;
  align-items: center;

  &__title {
    margin-right: 8px;
  }

  &__option {
    cursor: pointer;
    position: relative;

    &_active {
      color: #442671;

      &:after {
        content: "";
        left: 50%;
        height: 2px;
        bottom: 0px;
        position: absolute;
        background: #442671;
        width: calc(100% + 4px);
        transform: translateX(-50%);
      }
    }
  }

  &__option+&__option {
    margin-left: 15px;
  }
}

.gray-background {
  background: #aaa3b1 !important;
}

.action-cell {
  color: #442671;
  font-size: 12px;
  line-height: 20px;
  text-decoration: underline;
}

thead th {
  padding-top: 5px;
  padding-bottom: 5px;
}

#tracks {
  background: #f2f1ef;
  margin-left: 70px;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  /* padding: 16px 23px; */
}

.sub-page-title {
  font-family: "Europa-Regular";
  font-size: 36px;
  line-height: 42px;
  padding-left: 23px;
  padding-top: 11px;
  margin-bottom: 0;
  padding-bottom: 11px;
  background-color: #f2f1ef !important;
  display: flex;
}

th {
  border: none !important;
}

.pagination {
  width: auto;
}

@media (max-width: 768px) {
  .custom-table .first-col {
    display: none;
  }

  .custom-table .mobil-first-col {
    display: table-cell;
    width: 45%;
    padding-left: 20px;
    text-align: left;
  }

  .custom-table .second-col {
    width: 50%;
    text-align: center;
    padding: 5px 0;
  }
}

table.custom-table.preference thead {
  background: #413568 !important;
}

.preference {
  margin-bottom: 0 !important;
}

.custom-table tbody tr td {
  line-height: 40px;
}

.data_forbidden {
  margin-top: -1em;
  background-color: rgba(117, 112, 123, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100svh;
  color: #fff;

  p {
    max-width: 280px;
  }
}
</style>
