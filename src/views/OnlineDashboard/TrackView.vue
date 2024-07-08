<template>
  <div
    class="container-fluid online-dashboard-container"
    id="dashboard-content-page"
  >
    <div class="col-12 d-flex flex-column px-0">
      <div class="row mx-0 my-4 buttons-row px-4">
        <button
          class="back-button align-items-center text-decoration-none link-span btn-outline-none d-flex px-0"
          @click="backToAlLTracks"
        >
          <div class="my-auto d-flex back-arrow">
            <svg class="px-4 my-auto w-100" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.146445 3.64645C-0.0488167 3.84171 -0.0488167 4.15829 0.146445 4.35355L3.32843 7.53553C3.52369 7.7308 3.84027 7.7308 4.03553 7.53553C4.23079 7.34027 4.23079 7.02369 4.03553 6.82843L1.20711 4L4.03553 1.17157C4.2308 0.97631 4.2308 0.659727 4.03553 0.464465C3.84027 0.269203 3.52369 0.269203 3.32843 0.464465L0.146445 3.64645ZM15.5 3.5L0.499999 3.5L0.499999 4.5L15.5 4.5L15.5 3.5Z" fill="#AAA3B1"/>
            </svg>
          </div>
          <span class="ml-3" v-if="this.$route.params.id !== 0">Back to Tracks</span>
          <span class="ml-3" v-else>Back to Tracks</span>
        </button>
      </div>
      <div v-if="track && this.$route.params.id !== 0" class="row d-flex flex-lg-row flex-column p-4 bg-opacity" style="margin: 0;">
        <div class="d-flex flex-column">
          <div class="track-image" style="padding-right: 6px;">
            <b-form-file
              style="display: none;"
              id="trackImage"
              @change="onFileChange($event)"
              ref="file-input"
              placeholder="Photo"
              class="mb-2"
              accept=".jpg, .png, .jpeg, .webp"
            ></b-form-file>
            <img
              v-if="newImage"
              :src="newImage"
              alt="track-image"
              style="width: 100%; height: 100%; min-width: 260px; min-height: 260px;"
            />
            <img
              v-else-if="track.artworks && track.artworks.length > 1"
              :src="
                this.$aslice.getImage(this.track.artworks.find(artwork => artwork.user.id === data.id).url)
              "
              style="width: 100%; height: 100%; min-width: 260px; min-height: 260px;"
              alt="track-image data_id"
            />
            <img
              v-else-if="track.artworks.length === 1"
              :src="
                $aslice.getImage(track.artworks.find(artwork => artwork.user.id).url)
              "
              style="width: 100%; height: 100%; min-width: 260px; min-height: 260px;"
              alt="track-image data_id"
            />          
            <div class="default-image" v-else>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 28.0002V10.6669L29.3334 8.00024V24.0002"
                  stroke="#442671"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10.6667 32.0002C12.8759 32.0002 14.6667 30.2094 14.6667 28.0002C14.6667 25.7911 12.8759 24.0002 10.6667 24.0002C8.45761 24.0002 6.66675 25.7911 6.66675 28.0002C6.66675 30.2094 8.45761 32.0002 10.6667 32.0002Z"
                  stroke="#442671"
                  stroke-miterlimit="10"
                />
                <path
                  d="M25.3333 28.0002C27.5424 28.0002 29.3333 26.2094 29.3333 24.0002C29.3333 21.7911 27.5424 20.0002 25.3333 20.0002C23.1241 20.0002 21.3333 21.7911 21.3333 24.0002C21.3333 26.2094 23.1241 28.0002 25.3333 28.0002Z"
                  stroke="#442671"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
            
          </div>
          <a
            class="social-share rounded-button"
            @click="handleRedirectToSharing"
          >
            Social share
          </a>
        </div>
        <div class="col d-lg-flex d-block px-4">
          <div 
            class="col-12 track-information d-flex flex-column p-0"
            :class="isGroupTrack ? 'col-lg-6' : 'col-lg-3'"
          >
              <div class="row mx-0 my-3 d-lg-none d-block">
                <div class="underlined-text color-purple" @click="callUploading" style="display: inline-block;">
                  Upload Image (JPEG or PNG)
                </div>
              </div>
              <div class="row" style="margin: 0;">
                <p class="information-label">ARTIST</p>
                <p class="information-label-value" v-if="track.performers">
                  {{ track.performers.map(({ name }) => name).join(", ") }}
                </p>
              </div>
              <div class="row" style="margin: 0;">
                <p class="track-info-block information-label">TRACk</p>
                <p
                  class="track-info-block information-label-value"
                  v-if="track.name"
                >
                  {{ track.name }}
                </p>
              </div>
              <div v-if="track.remixers && track.remixers.length > 0" class="row" style="margin: 0;">
                <p class="track-info-block information-label text-uppercase">
                  remixer
                </p>
                <div
                  class="track-info-block information-label-value w-100"
                  style="min-height: 24px; display: flex; margin-bottom: 1rem;"
                >
                  <template>
                    <span v-for="(remixer, index) in track.remixers" :key="index">
                      {{ remixer.name }}
                    </span>
                  </template>
                </div>
              </div>
              <div class="row mb-2" style="margin: 0;">
                <div
                  class="form-group mb-2 w-100 "
                >
                  <label class="track-info-block information-label">Label</label>
                  <template>
                    <input
                      style="padding-top: 0!important;"
                      type="text"
                      class="form-control"
                      id="labelName"
                      placeholder="Enter Label Name"
                      v-model="labelName"
                      ref="labelNameInput"
                      :disabled="readModeLabel"
                    />
                    <span
                      class="underlined-text color-purple right-1"
                      @click="handleEditClickLabel(track.userLabels.find(label => label.user.id === data.id))"
                      >Edit</span
                    >
                    <div class="hr-line"></div>
                    <span
                      class="underlined-text color-purple right-2"
                      @click="updateTrackLabel"
                      >Save</span
                    >
                  </template>
                </div>
              </div>
              <div class="row mb-2" style="margin: 0;">
                <div
                  class="form-group mb-2  w-100"
                  style=" position: relative;"
                >
                  <label class="track-info-block information-label">Buy Link</label>
                  <template>
                    <input
                      style="padding-top: 0!important;"
                      type="text"                
                      class="form-control"
                      id="buyLink"
                      placeholder="Enter Link"
                      v-model="link"
                      ref="EnterLinkInput"
                      :disabled="readMode"
                    />
                    <span
                      class="underlined-text color-purple right-1"
                      @click="
                        handleEditClick(
                          track.buyLinks.find(link => link.user.id === data.id) 
                        )
                      "
                      >Edit</span
                    >
                    <div class="hr-line"></div>
                    <span
                      class="underlined-text color-purple right-2"
                      @click="updateTrackBuyLink"
                      >Save</span
                    >
                  </template>
                </div>
              </div>
              <div class="row mx-0 mt-0 d-lg-block d-none">
                <div class="underlined-text color-purple as" @click="callUploading" style="display: inline-block;">
                  Upload Image (JPEG or PNG)
                </div>
              </div>
          </div>
          <div v-if="isGroupTrack" class="solid d-lg-block d-none"></div>
          <div 
            v-if="isGroupTrack"
            class="col-lg-6 col-12 track-information d-flex flex-column pl-0 pr-4"
          >
            <div class="row mb-2 d-flex flex-wrap block-rigth" style="margin: 0;">
              <div
                class="col-12 form-group mb-2 p-0 w-100"
                style=" position: relative;"
              >
                <label class="track-info-block information-label">Group Members</label>
              </div>
              <div class="col-12 d-flex justify-content-between mb-2 w-100 p-0 info">
                <div class="d-flex flex-wrap name-members">
                  <div 
                    v-for="(elem, index) in groupMembers" 
                    :key="index"
                    class="m-0"
                  >
                    <p 
                      v-if="!isEditAdmin"
                      :class="elem.status === 'excluded' ? 'delete' : ''" 
                      class="m-0"
                    >
                      {{elem.name}}<span v-if="groupMembers.length > (index + 1)" class="mr-2">,</span>
                    </p>
                    <div v-else>
                      <div v-if="elem.status !== 'excluded'" class="mr-2 d-flex aligne-item-center border">
                        <p class="m-0">
                          {{elem.name}}
                        </p><img 
                          v-if="groupMembers.length > index"
                          @click="deleteMemberGroup(index)" 
                          class="mr-2" 
                          src="@/assets/images/close-groups-modal.svg"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  v-if="isAdminGroup"
                  class="d-flex" 
                  style="flex: 0 0 auto;"

                >
                  <span 
                    class="color-purple"
                    :class="isEditAdmin ? 'gray' : ''" 
                    @click="editMember"
                  >
                    Edit
                  </span>
                  <div class="hr-line"></div>
                  <span 
                    class="color-purple"
                    @click="saveStatusMemberGroup"
                  >
                    Save
                  </span>
                </div>
                <div v-else>
                  <span 
                    class="color-purple"
                    :class="isEditAdmin ? 'gray' : ''" 
                    @click="showDragModal"
                  >
                    Dispute
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row d-flex flex-lg-row flex-column p-4 bg-opacity" style="margin: 0;">
        <div class="d-flex flex-column">
          <div class="track-image" style="padding-right: 6px;">
            <div class="default-image">
              <img
                alt=""
                style=""
                src="@/assets/images/quick_stats-1.svg"
              />
            </div>
          </div>
          <a
            class="social-share rounded-button"
            @click="handleRedirectToFeatureSharing"
          >
            Social share
          </a>
        </div>
        <div class="block-line"></div>
        <div class="col d-lg-flex d-block px-4 block-feature">
          <p>
            BETA HIDE TRACKS PRO FEATURE: Aslice is testing a new feature that allows DJs to share with producers without revealing the actual track that was played. This feature has been requested by a few artists and enables them to keep their secrets while continuing to share with the producers who create the music they play.
            <br><br>  
            *You can still create social assets, however the information will be slightly different, highlighting the date, the DJ who played your music and the venue.
          </p>
        </div>
      </div>
      <div class="row  px-4 margin-20">
        <table class="table table-hover custom-table">
          <thead>
            <tr>
              <th v-if="this.$route.params.id === 0" class="zero-col"></th>
              <th class="first-col">Played by</th>
              <th class="second-col" data-alt="played" @click="handleSorting">
                Played on
                <img v-if="sortField === 'played' && sortOrder === 'asc'" src="@/assets/images/sort-up.svg" alt="sort" />
                <img v-else-if="sortField === 'played' && sortOrder === 'desc'" src="@/assets/images/sort-down.svg" alt="sort" />
                <img v-else src="@/assets/images/sort.svg" alt="sort" />
              </th>
              <th class="third-col" data-alt="submitted" @click="handleSorting">
                Submitted On
                <img v-if="sortField === 'submitted' && sortOrder === 'asc'" src="@/assets/images/sort-up.svg" alt="sort" />
                <img v-else-if="sortField === 'submitted' && sortOrder === 'desc'" src="@/assets/images/sort-down.svg" alt="sort" />
                <img v-else src="@/assets/images/sort.svg" alt="sort" />
              </th>
              <th class="fourth-col" data-alt="venue" @click="handleSorting">
                Venue
                <img v-if="sortField === 'venue' && sortOrder === 'asc'" src="@/assets/images/sort-up.svg" alt="sort" />
                <img v-else-if="sortField === 'venue' && sortOrder === 'desc'" src="@/assets/images/sort-down.svg" alt="sort" />
                <img v-else src="@/assets/images/sort.svg" alt="sort" />
              </th>
              <th class="five-col"></th>
            </tr>
          </thead>
          <tbody v-if="this.$route.params.id !== 0">
            <template v-if="track && track.playbackHistory">
              <tr v-for="history in sortedPlaylists" :key="Math.random(history.id)">
                <td class="first-col">
                  {{ get(history, "playlist.user.primeArtistName", "") }}
                </td>
                <td 
                  class="mobil-first-col"
                  @click="redirectToFanPlaylist(history.playlist.id)"
                >
                  {{ get(history, "playlist.user.primeArtistName", "") }}
                </td>
                <td class="second-col cursor-unset">{{ momentDate(history.datePlayed) }}</td>
                <td class="third-col cursor-unset">
                  {{ momentDate(history.playlist.created) }}
                </td>
                <td class="fourth-col cursor-unset">
                {{ history.playlist ? history.playlist.venue : "" }}
                </td>
                <td
                  class="five-col action-cell"
                  @click="redirectToFanPlaylist(history.playlist.id)"
                >
                  View Playlist
                </td>
              </tr></template
            >
          </tbody>
          <tbody v-else>
            <template>
              <tr v-for="(history, index) in sortedPlaylists" :key="index">
                <td class="zero-col">
                  {{ index + 1 }}
                </td>
                <td class="first-col">
                  {{ get(history, "playlist.primeArtistName", "") }}
                </td>
                <td class="second-col cursor-unset">{{ momentDate(history.datePlayed) }}</td>
                <td class="third-col cursor-unset">
                  {{ momentDate(history.playlist.created) }}
                </td>
                <td class="fourth-col cursor-unset">
                {{ history.playlist ? history.playlist.venue : "" }}
                </td>
                <td
                  class="five-col action-cell"
                  @click="redirectToFanPlaylist(history.playlist.id)"
                >
                  View Playlist
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <modal 
      name="send-modal"
      class="dragMod"
      transition="nice-modal-fade"
      :draggable="false"
      :resizable="false"
      height="auto"
      width="425px"
    >
      <div class="example-modal-content">
        <div class="modal-top">
          <img
            class="app-modal__close"
            src="@/assets/images/close-groups-modal.svg"
            @click="closeModalDispute"
          />
        </div>
        <div class="modal-main">
          <h2 class="app-modal__title mb-4">Group Track Dispute</h2>
          <p class="app-modal__description">
            By disputing a group track you are locking up any earnings for all members listed past or present. An email will be sent to the Aslice Team as well as any registered members who are Aslice users.
          </p>
          <p class="app-modal__description"> 
            The next steps of the dispute will depend on the request and information you fill in below.  Please be as detailed as you can and we will reach out to the members of the group to attempt to resolve the issue directly.
          </p>
          <p class="app-modal__description"> 
            Group track disputes can take up to 30 days to process. During that time any earnings are safely held.
          </p> 
          <p class="app-modal__description">  
            Thanks 
            <br>
            The Aslice Team.
          </p>
          <p class="app-modal__description">
            Reason For Dispute
          </p>
          <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1"
            rows="4" 
            placeholder="Please provide rationale as to why you are disputing this group membership here."
            v-model="letterMessage"
          >
        </textarea>
        </div>
        <div class="modal-bottom">
          <button 
            class="track-invite-button"
            @click="saveEditGroup"
          >
          submit
        </button>
        </div>
      </div>
    </modal>
    <modal 
      name="send-letter"
      class="dragMod"
      transition="nice-modal-fade"
      :draggable="false"
      :resizable="false"
      height="auto"
      width="425px"
    >
      <div class="example-modal-content">
        <div class="modal-top">
          <img
            class="app-modal__close"
            src="@/assets/images/close-groups-modal.svg"
            @click="closeModalLetter"
          />
        </div>
        <div class="modal-main">
          <h2 class="app-modal__title mb-4">Notification sent</h2>
          <p class="app-modal__description">
            All group members will be informed of the changes made.
          </p>
        </div>
        <div class="modal-bottom">
          <button 
            class="track-invite-button"
            @click="closeModalLetter"
          >
          close
        </button>
        </div>
      </div>
    </modal>
     
    <modal 
      name="Dispute-Initiated"
      class="dragMod"
      transition="nice-modal-fade"
      :draggable="false"
      :resizable="false"
      height="auto"
      width="425px"
    >
      <div class="example-modal-content">
        <div class="modal-top">
          <img
            class="app-modal__close"
            src="@/assets/images/close-groups-modal.svg"
            @click="closeModalLetter"
          />
        </div>
        <div class="modal-main">
          <h2 class="app-modal__title mb-4">Dispute Initiated</h2>
          <p class="app-modal__description">
            All group members will be informed of the dispute via email.
          </p>
        </div>
        <div class="modal-bottom">
          <button 
            class="track-invite-button"
            @click="closeModalDisputeMessege"
          >
          close
        </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import get from "lodash/get";
import { sortBy } from "lodash";
import { mapState, mapActions } from "vuex";
import api from "@/service/api";
import swal from "sweetalert2";
import moment from "moment";
import { showAsliceModal } from "@/utils/aslice-modal";

export default {
  data() {
    return {
      excludedMemberships: [],
      deleteMembersGroup:[],
      letterMessage:'',
      trackId:null,
      groupId:null,
      isEditAdmin:false,
      isAdminGroup:null,
      isGroupTrack:null,
      groupMembers:[],
      get,
      readMode: true,
      readModeLabel:true,
      newImage: null,
      link: "",
      labelName: "",
      currentTrack: null,
      currentTrackId: null,
      avatarBaseUrl: "https://aslice-dev-storage.s3.amazonaws.com/",
      newPlayedList: [],
      sortField: null,
      sortOrder: null
    };
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapState("djdashboard", ["allTracks", "exactTrack", "track"]),
    sortedPlaylists() {
      let result = this.newPlayedList;

      if (this.sortField === null || this.sortOrder === null) {
        return result;
      }

      switch (this.sortField) {
        case "played":
          result = sortBy(result, [obj => new Date(obj.datePlayed)]);
          break;
        case "submitted":
          result = sortBy(result, [obj => new Date(obj.playlist.created)]);
          break;
        case "venue":
          result = sortBy(result, [obj => obj.playlist.venue?.toLowerCase()]);
          break;
        default:
          break;
      }

      if (this.sortOrder === "desc") {
        result.reverse();
      }

      return result;
    }
  },
  methods: {
    showDragModal(){
      this.$modal.show('send-modal');
    },
    closeModalLetter(){
      this.$modal.hide('send-letter');
      this.fetchTrack();
    },
    closeModalDispute(){
      this.$modal.hide('send-modal')
    },
    closeModalDisputeMessege(){
      this.$modal.hide('Dispute-Initiated')
    },
    async TracksPrivacyPreference(){
      swal.showLoading();
      const response = await api.reportTracksPrivacyPreference();
      this.newPlayedList = response.Data.details;

      swal.close();
      if (response.Error) {
        swal.fire({
          icon: "error",
          title: response.Error
        });
        return;
      }
    },
    async saveStatusMemberGroup(){
      if(this.deleteMembersGroup.length > 0){
        swal.showLoading();
        const response = await api.updateStatusMemberGroup(this.trackId,{
          versionId: this.track.versionId,
          excludedMembershipsIds: [...new Set(this.deleteMembersGroup)]
        })
        swal.close();
        if (response.Error) {
          swal.fire({
            icon: "error",
            title: response.Error
          });
          return;
        }
        this.groupMembers = []
        this.$modal.show('send-letter');
      }
      this.deleteMembersGroup = []
      this.isEditAdmin = false
    },
    async saveEditGroup(){
      swal.showLoading();
      const response = await api.openDisputRequest({
        subject: `Dispute track ${this.trackId}`, 
        comments: this.letterMessage,
        type: "GroupTrack",
        groupId: this.groupId,
        trackId: this.trackId
      });
      if (response.Error) {
        this.closeModalDispute();
        swal.fire({
          icon: "error",
          title: response.Error
        });
        return;
      }
      swal.close();
      this.closeModalDispute();
      this.$modal.show('Dispute-Initiated');
    },
    deleteMemberGroup(index){
      this.deleteMembersGroup.push(this.groupMembers[index].id)
      this.excludedMemberships.forEach(item => {this.deleteMembersGroup.push(item.id)})
      this.groupMembers.splice(index, 1)
    },
    editMember(){
      this.isEditAdmin = true
    },
    handleSorting(e) {
      const sortColumn = e.currentTarget.dataset.alt;

      if (this.sortField !== sortColumn) {
        this.sortField = sortColumn;
        this.sortOrder = "desc";
      } else if (this.sortOrder === "desc") {
        this.sortOrder = "asc";
      } else {
        this.sortField = null;
        this.sortOrder = null;
      }
    },
    handleEditClick(link) {
      this.readMode = false;
      link ? this.link = link.url : "";
      this.$nextTick(() => {
        this.$refs.EnterLinkInput.focus();
      });
    },
    handleEditClickLabel(label){
      this.readModeLabel = false;
      label ? this.labelName = label.label : "";
      this.$nextTick(() => {
        this.$refs.labelNameInput.focus();
      });
    },
    redirectToFanPlaylist(playlistId) {
      this.$router
        .push({ name: "Overview", params: { historyPlaylistId: playlistId } })
        .catch(() => {});
    },
    async updateTrackBuyLink() {
      const response = await this.$store.dispatch("djdashboard/updateTrack", {
        trackId: this.currentTrackId,
        data: {
          name: this.track.name,
          buyLink: this.link,
          versionId: this.track.versionId
        }
      });

      if (response) {
        this.link =
          response?.buyLinks.find(link => link.user.id === this.data.id).url ||
          "";
      }else{this.link = ""}
      
      this.readMode = true;
    },
    async updateTrackLabel(){
        const response = await this.$store.dispatch("djdashboard/updateTrackLabel", {
          trackId: this.currentTrackId,
          data: {
            name: this.track.name,
            userLabel: this.labelName,
            versionId: this.track.versionId
          }
        });
        if (response) {
          this.labelName = 
            response?.userLabels.find(el => el.user.id === this.data.id).label || 
            "";
        }else{this.labelName = ""}
        this.readModeLabel = true;
    },
    ...mapActions("djdashboard", ["getAllTracks", "updateTrackImage"]),
    callUploading() {
      document.getElementById("trackImage").click();
    },
    momentDate(data) {
      return moment(data, moment.ISO_8601).format("DD/MM/YYYY");
    },
    backToAlLTracks() {
      // TODO: сделать хранение страницы треков в стейте
      this.$router.push({ name: "Tracks" });
    },
    imageToDataUrl(image) {
      return new Promise(resolve => {
        const fr = new FileReader();
        fr.readAsDataURL(image);
        fr.onload = function() {
          return resolve(this.result);
        };
      });
    },
    async onFileChange(ev) {
      this.newImage = await this.imageToDataUrl(ev.target.files[0]);
      const fd = new FormData();
      fd.append("file", ev.target.files[0]);
      fd.append("versionId", this.track.versionId);

      const payload = {
        id: this.currentTrackId,
        formdata: fd
      };
      await this.updateTrackImage(payload);
      await this.fetchTrack();
    },
    handleRedirectToFeatureSharing(){
      this.$router.push({
        name: "Feature Track Sharing Preview"
      });
    },
    handleRedirectToSharing() {
      console.log(this.track)
      if (!this.track.artworks.length) {
        if(this.track.image !== null) {
          this.$router.push({
            name: "Track Sharing Preview",
            params: {
              id: this.track.id
            }
          });
        }else{
          showAsliceModal.apply(this, [
            {
              title: "Missing Artwork",
              text: `You must upload track artwork before using this feature`,
              buttonText: "close",
              width: 350,
              height: "auto"
            }
          ]);
        }
      }else {
        this.$router.push({
          name: "Track Sharing Preview",
          params: {
            id: this.track.id
          }
        });
      }
    },
    async fetchTrack() {
      const { id } = this.$route.params;
      const showSelfPlays = JSON.parse(localStorage.getItem("showSelfPlays"));
      if (id !== 0) {
        this.currentTrackId = id;
        const response = await this.$store.dispatch(
          "djdashboard/getTrackById",
          {
            trackId: id,
            userId: this.data.id,
            showSelfPlays: showSelfPlays === 0 ? true : false
          }
        );
        if (!response) {
          await this.$router.push({ name: "Overview" });
          return;
        }
        this.isGroupTrack = response.performers[0].isGroup
        if(this.isGroupTrack){
          response.performers[0].groupMemberships.forEach(el => {
            this.groupMembers.push({
              'id':el.id, 
              'userId':el.member.userId, 
              'isAdmin': el.isAdmin, 
              'name': el.member.displayedName, 
              'status': el.member.status
            })
          })
          if(response.excludedMemberships){
            response.excludedMemberships.forEach(item => {
              this.excludedMemberships.push({id: item.id})
            })
          }
          this.groupMembers = this.groupMembers.map(obj1 => {
            const obj2 = this.excludedMemberships.find(obj2 => obj2.id === obj1.id);
            if (obj2) {
              obj1.status = 'excluded';
            }
            return obj1;
          });
          this.trackId = response.id
          this.groupId = response.performers[0].id
          this.isAdminGroup = this.groupMembers.find(el => el.userId == this.data.id)?.isAdmin ?? false;

        }
        if (response) {
          this.link = response?.buyLinks.find(link => link.user.id === this.data.id)?.url || "";
          this.labelName = response?.userLabels.find(label => label.user.id === this.data.id)?.label || "";
        }
      }else{
        console.log(id)
      }
    }
  },
  watch: {
    newPlayedList(newNewPlayedList){
      if(this.$route.params.id !== 0){
        this.newPlayedList = newNewPlayedList
      }
    }
  },
  async mounted() {
    if(this.$route.params.id !== 0){
      await this.fetchTrack();
      this.newPlayedList = this.track.playbackHistory;
    }else{
      this.TracksPrivacyPreference()
    }
    
  }
};
</script>

<style scoped>
.color-purple.gray{
  color: #AAA3B1!important;
  cursor: auto!important
}
.name-members p{
  color:#442671
}
.name-members p.delete{
  text-decoration: line-through;
}
.name-members .border{
  border:1px solid #AAA3B1;
  padding: 2px 0px 2px 8px;
}
.name-members .border p{
  padding-right: 5px;
  border-right:1px solid #dddbe0
}
.name-members .border img{
  max-width: 11px;
  margin-left: 5px;
  cursor: pointer;
}
.hr-line{
  display: block;
  position: absolute;
  bottom:7px;
  right: 40px;
  width: 1px;
  height: 14px;
  border-right: 1px solid rgba(68, 38, 113, 1);
}
.block-rigth .hr-line{
  position: relative;
  display: block;
  bottom: auto;
  right: auto;
  width: 1px;
  height: 14px;
  top: 2px;
  margin: 0 10px;
  border-right: 1px solid rgba(68, 38, 113, 1);
}

.block-rigth .info{
  padding-bottom: 5px!important;
  border-bottom: 1px solid #75707B
}
.block-rigth .color-purple{
  cursor:pointer;
  text-decoration: underline;
  font-size: 12px;
}
.right-1{
  right: 50px;
  
}
.bg-opacity{
  background: rgba(255, 255, 255, 0.6)
}
.social-share{
  display: flex;
  align-items:center;
  justify-content: center;
  margin-top: 20px;
  max-width: 190px;
  cursor: pointer;
  text-decoration: none;
  padding: 0;
}
.solid{
  width: 1px;
  height: 100%;
  margin: 0 20px;
  border-left: 1px solid rgba(170, 163, 177, 1);
  opacity: 1;
}
.margin-20{
  margin: 0 -20px;
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

.btn-outline-none {
  outline: none;
  border: none;
  background-color: initial;
}

#track-view {
  background: #f2f1ef;
  margin-left: 70px;
  min-height: calc(100vh - 60px);
  padding: 22px 0;
  padding-bottom: 0;
}
.zero-col{
  width: 30px !important;
  color: #AAA3B1;
  text-align: center;
}
.first-col {
  width: 35% !important;
  padding-left: 10px;
}
.second-col {
  width: 10% !important;
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
  cursor: pointer;
}
td.second-col {
  color: #000;
  cursor: pointer;
}
td.third-col {
  color: #000;
  cursor: pointer;
}
.third-col {
  width: 15% !important;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
}
.fourth-col {
  width: 25% !important;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
}
.five-col{
  color: #442671;
  font-size: 12px;
  line-height: 20px;
  text-decoration: underline;
}
@media (max-width:768px){
  .second-col, .third-col, .fourth-col{
    display: none;
  }
  .first-col{
    display: none;
  }
  .custom-table .mobil-first-col{
    display: table-cell;
    width: 45%;
    padding-left: 20px;
    text-align: left;
  }
}
.track-info-block {
  text-transform: uppercase;
}
.track-image {
  width: 260px;
  max-width: 260px;
  height: 260px;
}
@media (max-width: 480px) {
  .track-image {
    width: 100%;
    min-width: 300px;
    max-width: 100%;
    height: auto;
    min-height: 300px;
    background: #ffffff;
    display: flex;
    align-items:center
  }
}
.table-wrapper {
  height: 400px;
  overflow: auto;
}
.skip-button {
  text-decoration: none;
}
.skip-button svg {
  position: relative;
  top: -1px;
}
.default-image {
  height: 100%;
  position: relative;
  width: 100%;
  background: #fff;
}
.default-image svg {
  margin: auto auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#buyLink, #labelName {
  font-size: 12px;
  color: #000;
  font-family: "Roboto-Mono";
  padding-right: 75px;
  padding-bottom: 0 !important;
}
.underlined-text {
  font-size: 12px;
  bottom: 6px;
  top: auto;
}
.information-label-value {
  font-size: 24px;
}
.form-group{
  position: relative;
}
.form-group input{
  padding-top: 0px !important;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(117, 112, 123, 1);
  padding-left: 0;
}
.form-group label {
  font-size: 9px;
  width: 50%;
}
@media (max-width:480px) {
  .form-group label {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
  .dragMod{
  overflow: auto;
  padding: 70px 0 30px;
  [data-modal="example-modal"]{
    background: #ffffff00;
  }
  .example-modal-content{
    padding: 0px;
    .modal-top{
      position: relative;
      display: flex;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 60px;
      background: #F2F1EF;
    }
    .modal-main{
      padding: 15px 35px 25px;
      .block-border{
        border: 1px solid #AAA3B1;
        padding: 0px;
        height:244px;
        overflow-y: scroll;
        &::-webkit-scrollbar{
          width: 2px;
          background-color: #ffffff00;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #AAA3B1;
        }
        [aria-label="Search for option"]{
          border-radius:2px!important;
        }
        .block-form{
          padding: 15px;
          input{
            padding: 0px !important;
          }
          .vs__search{
            color: rgba(117, 112, 123, 0.5)!important;
            &::placeholder{
              color: rgba(117, 112, 123, 0.5)!important;
            }
          }
          .vs__selected{
            padding: 0;
            color: #75707B!important;
          }
          .vs__dropdown-toggle {
            height: 40px;
            .vs__selected-options{
              color: #75707B!important;
              font-size: 12px;
              .vs__search{
                ::placeholder{
                  color: #75707B!important;
                }
              }
            }
          }
          .vs__selected-options {
            padding: 5px 20px !important;
            margin-top: 0;
            display: flex;
            align-items: center;
            color: #75707B!important;
          }
          .vs__dropdown-menu{
            max-height: 200px;
            margin-top: -38px;
            &::-webkit-scrollbar{
              width: 2px;
              background-color: #ffffff00;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #AAA3B1;
            }
            li{
              height: 40px!important;
              padding-left: 20px!important;
              &:hover, &:active, &:focus{
                color: #75707B!important;
                background: #F2F1EF!important
              }
            }
            .vs__dropdown-option--highlight{
              color: #75707B!important;
              background: #F2F1EF!important
            }
          }
        }
        .block-form.event{
          background: rgba(242, 241, 239, 0.6);
          border-top:1px solid #AAA3B1;
          border-bottom:1px solid #AAA3B1;
        }
        .form-control{
          border: 1px solid #aaa3b1;
          border-radius: 2px;
          padding: 10px 20px;
          font-size: 12px;
          &::placeholder{
            font-size: 12px;
            color: rgba(117, 112, 123, 0.5);
          }
        }
        .btn-letter{
          border:none;
          color:#442671;
          display: flex;
          align-items:center;
          background: none;
          padding: 0 15px 15px;
          font-size: 10px;
          span{
            display: flex;
            align-items:center;
            justify-content: center;
            border: 1px solid #442671;
            border-radius:50%;
            margin-right: 10px;
            font-size: 1.3rem;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .modal-bottom{
      position: relative;
      bottom: 0;
      display: flex;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 70px;
      background: #F2F1EF;
      .track-invite-button{
        max-width: 110px;
        text-transform: uppercase;
        margin-right: 15px;
        background-color:#442671;
        color:#fff;
        font-size: 14px;
        padding: 11px 20px;
        letter-spacing: 0.13em;
        height: 40px;
      }
    }
  }
}
.block-line{
  margin-left: 20px;
  border-left: thin solid #AAA3B1;
}
.block-feature{
  background: #75707B;
  color: #FFFFFF;
  justify-content: center;
  margin-left: 20px;
  p{
    display: flex;
    align-self: center;
    max-width: 452px;
  }
}
</style>
