<template>
  <div class="col-lg-5 px-4 settings-content" style="max-width: 425px;">
    <div class="row mx-0 block_options">
      <p class="col-12 mt-4 mb-0 d-flex px-0 settings-text gray-color">
        How do you prefer the tracks in your playlist(s) displayed?
      </p>
      <v-select
        class="col-12 px-0"
        style="margin-bottom: 15px; margin-top: 10px;"
        label="label"
        :clearable="false"
        :options="[...selectOrder]"
        :searchable="false"
        :value="userCopy.tracksDisplayingPreference"
        @option:selected="
          UPDATE_USER_COPY({
            tracksDisplayingPreference: $event
          })
        "
      >
        <template #open-indicator="{ attributes }">
          <img
            v-bind="attributes"
            src="@/assets/images/arrow-playlist-optionsOne.svg"
          />
        </template>
      </v-select>
    </div>
    <div class="row mx-0 block_options">
      <p class="col-12 mb-0 px-0 settings-text gray-color">
        How do you prefer your playlist(s) displayed publicly?
      </p>
      <v-select
        class="col-12  px-0"
        style="margin-bottom: 15px; margin-top: 10px;"
        label="label"
        :clearable="false"
        :options="[...selectFanOrder]"
        :searchable="false"
        :value="selectedOptionHide"
        :disabled="isHideTrack()"
        @option:selected="
          UPDATE_USER_COPY({
            playlistsDisplayingPreference: $event
          })
        "
      >
        <template #open-indicator="{ attributes }">
          <img
            v-bind="attributes"
            src="@/assets/images/arrow-playlist-optionsOne.svg"
          />
        </template>
      </v-select>
    </div>
    <div class="row mx-0 block_feuture">
      <p class="col-12 mb-0 px-0 settings-text gray-color">
        <span> BETA FEATURE: </span><br>
        Hide Details Pro Feature  - Turning this on will allow you to share with the producer without revealing the track you played. Playlist minimum increases to 30 €/$/£ per playlist.
      </p>
      <v-select
        class="col-12  px-0"
        style="margin-bottom: 15px; margin-top: 10px;"
        label="label"
        :clearable="false"
        :options="[...selectFeature]"
        :searchable="false"
        :value="userCopy.tracksPrivacyPreference"
        v-model="userCopy.tracksPrivacyPreference"
        @option:selected="
          UPDATE_USER_COPY({
            tracksPrivacyPreference: $event
          })
        "
      >
        <template #open-indicator="{ attributes }">
          <img
            v-bind="attributes"
            src="@/assets/images/arrow-playlist-options.svg"
          />
        </template>
      </v-select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PlaylistOptions",
  data() {
    return {
      selectFeature: [
        {
          id: 46,
          label: "Full track details"
        },
        {
          id: 45,
          label: "Hide track details"
        }
      ],
      selectFanOrder: [
        {
          id: 44,
          label: "Artist name only"
        },
        {
          id: 43,
          label: "Full track info"
        }
      ],
      selectOrder: [
        {
          id: 42,
          label: "Alphabetical by artist"
        },
        {
          id: 41,
          label: "Order played"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy"
    }),
    selectedOptionHide(){
      if(this.userCopy.tracksPrivacyPreference.label === "Hide track details"){
        return 'Artist name only'
      }
      return this.userCopy.playlistsDisplayingPreference
    },
    
    // isHideTrack(){
    //   return this.userCopy.tracksPrivacyPreference.label === "Hide track details"
    // }
  },
  methods:{ 
    ...mapMutations("user", ["UPDATE_USER_COPY"]),
    isHideTrack(){
      if(this.userCopy.tracksPrivacyPreference.label === "Hide track details" || this.userCopy.tracksPrivacyPreference === "Hide track details"){
        return true
      }else{
        return false
      }
    }
  },
  mounted() {
    if(this.userCopy.tracksPrivacyPreference === "Hide track details"){
      console.log(this.userCopy.tracksPrivacyPreference)
      this.isHideTrack()
    }
  },
};
</script>

<style lang="scss" scoped>
.gray-color {
  color: #75707b;
}

.settings-text {
  font-size: 12px;
}

::v-deep .v-select {
  width: 100%;
}

::v-deep .vs__dropdown-toggle {
  padding-bottom: 0px;
  border-radius: 0px;
  width: 100% !important;
  border: 1px solid #080809;
}

.block_options{
  padding: 0px;
  ::v-deep .vs__dropdown-toggle {
    border: 1px solid #442671!important;
    .vs__selected{
      padding: 0!important;
    }
    .vs__selected-options {
      padding: 10px 10px !important;
      font-size: 12px !important;
    }
  }
}
.block_feuture{
  display: block;
  background: #413568;
  padding: 15px;
  color: #ffffff;
  border-radius: 4px;
  p{
    color:#F2F1EF;
    font-family: "Roboto-Mono";
    font-size: 12px;
    line-height: 16px;
    span{
      color:#AAA3B1
    }
  }
  ::v-deep .vs__dropdown-toggle {
    border: 1px solid #F2F1EF!important;
    .vs__selected{
      color: #9182C5;
      padding: 0!important;
    }
    .vs__selected-options {
      padding: 10px 10px !important;
      font-size: 12px !important;
    }
  }
}

</style>
<style>
  .vs--disabled .vs__dropdown-toggle, .vs--disabled .vs__search,.vs--disabled .vs__open-indicator{
    background-color: #AAA3B1!important;
  }
  .block_feuture .vs__selected-options, .block_feuture .vs__actions{
    background: inherit!important;
  }
  .block_options .vs--disabled .vs__dropdown-toggle{
    background-color: #AAA3B1!important;
  }
  .block_options .vs--disabled .vs__selected-options,.block_options .vs--disabled .vs__actions {
    background: #AAA3B1 !important;
  }
</style>