<template>
  <div
    class="container-fluid online-dashboard-container"
    id="dashboard-content-page"
  >
    <div class="settings-title-wrapper d-flex">
      <h1
        class="settings-title align-items-center d-lg-flex"
        style="width: auto;"
      >
        Playlists
        <span class="settings-title__description d-inline">
          <YearSelect @onChange="handleChangeYear($event)"/>
        </span>
      </h1>
      <SearchButton
        v-if="isPromoter"
        class="playlist__search"
        id="searchInput"
        placeholder="DJ name/alias search"
        @submit="submitSearch"
      />
      <div class="d-flex align-items-center colors">
        <p class="m-0 d-lg-block d-none">Status Key:</p>
        <div class="colors__item colors__item_red">Pending</div>
        <div class="colors__item colors__item_green">Approved</div>
        <div class="colors__item colors__item_purple">Charity</div>
      </div>
    </div>
    <playlist-table
      :playlistData="data"
      :playlist="playlist"
      :trackData="trackData"
      :customType="customType"
      :yearPlayList="yearPlayList"
      :query="query"
    />
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import moment from "moment";
import playlistTable from "@/components/PlaylistTableAccordion.vue";
import YearSelect from "@/components/YearSelect.vue";
import SearchButton from "@/components/blog/SearchButton.vue";

export default {
  components: {
    SearchButton,
    YearSelect,
    playlistTable
  },
  name: "DjPlaylist",
  data() {
    return {
      yearPlayList: moment().format('YYYY'),
      query: ""
    }
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapState("djdashboard",{
      playlist:"playlist", 
      trackData:"trackData", 
      allTracks:"allTracks"
    }),
    ...mapGetters("user", ["isPromoter"]),
    customType() {
      if (this.isPromoter) {
        return "promoter";
      }

      let result;
      if (this.data) {
        if (Array.isArray(this.data.roles)) {
          if (this.data.roles && this.data.roles.length > 0) {
            if (this.data.roles.find(x => x.name === "dj")) {
              result = "dj";
            }
            if (this.data.roles.find(x => x.name === "fan")) {
              result = "fan";
            }
            if (this.data.roles.find(x => x.name === "producer")) {
              result = "producer";
            }
            if (
              this.data.roles.find(x => x.name === "dj") &&
              this.data.roles.find(x => x.name === "producer")
            ) {
              result = "dj-producer";
            }
          }
        } else {
          result = this.data.roles;
        }
      }
      return result;
    },
    
  },
  created() {
    if (this.$route.query.search) {
      this.query = this.$route.query.search;
    }
  },
  methods: {
    handleChangeYear(year){ 
      this.yearPlayList = year
      return this.yearPlayList
    },
    addTrack() {
      this.trackOBJ.tracks.push({
        name: null,
        performer: null
      });
    },
    async submitSearch(query) {
      this.query = query;
    }
  },
};
</script>

<style lang="scss">
/**
TODO: After ready all mobile styles
ATTENTION!!!
After mobile styles are ready delete this section
 */
.settings-title__description{
  .year-select{
    width: 90px !important;
    z-index: 5;
    border: 1px solid #aaa3b1;
    padding: 5px 0px 5px 10px;
    border-radius: 2px;
    &__value{
      font-size: 20px !important;
      line-height: 20px !important;
      padding: 0px 0px !important;
    }
    &__dropdown{
      top: calc(100% + 2px);
    }
    img{
      right: 10px;
    }
  }
} 

 
@media screen and (max-width: 991px) {
  .on-mobile-are-not-available {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.playlist {
  &__search {
    flex-grow: 1;
  }
}

#dashboard-content-page .playlist-menu {
  min-height: calc(100vh - 195px);
  padding-left: 15px;
}

.playlist-for-dj-only {
  padding: 25px;
}
.settings-title {
  margin-bottom: 0px;

  &__description {
    color: #75707b;
    font-size: 11px;
    margin-left: 28px;
    font-family: "Roboto-Mono";
  }
}
.settings-title-wrapper {
  display: flex;
  border-bottom: 0;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.colors p {
  color: #aaa3b1;
  font-size: 12px;
  margin-right: 20px;
}
.colors__item {
  color: #75707b;
  font-size: 11px;
  margin-left: 10px;
  padding-left: 15px;
  position: relative;

  @media only screen and (min-width: 992px) {
    margin-left: 20px;
  }
}
.colors__item::before {
  content: "";
  top: 50%;
  left: 0px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
}
.colors__item.colors__item_red::before {
  background: #fcb416;
}
.colors__item.colors__item_green::before {
  background: #29c9be;
}
.colors__item.colors__item_purple::before {
  background: #9182c5;
}
@media (max-width: 1070px) {
  .settings-title-wrapper {
    display: block;
  }
}
@media (max-width: 500px) {
  .settings-title-wrapper {
    padding: 10px 16px;
  }
  .settings-title {
    font-size: 25px;
  }
}
</style>
