<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 bottom-overview-content"
        style="right: 0; z-index: 10"
        :class="!menuCollapsed ? '' : 'detailed'"
      >
        <div class="row">
          <div
            class="col-12 popular-producers"
            :class="{ 'popular-producers--promoter': isPromoter }"
          >
            <div class="row" style="margin-right: 0;">
              <div
                class="col-8 title-overlay"
                style="cursor: pointer;"
                @click="openProducerDetails"
              >
                <span v-if="isPromoter"></span>
                <span
                  v-else-if="
                    (customType === 'dj' || customType === 'dj-producer') &&
                      activeTab.name === 'DJ Overview'
                  "
                >
                  DJ
                </span>
                <span v-else>Producers</span>
                INSIGHTS
              </div>
              <div
                class="col-4"
                style="text-align: right; position: relative; padding-right: 0"
              >
                <template v-if="!isPromoter">
                  <span
                    class="month-selector"
                    style="position: relative;"
                    v-for="(month, index) in producersMonthArray"
                    :key="'producer-' + index"
                    @click="showProducerDetails(month.id)"
                  >
                    {{ month.name }}
                    <div class="month-selected" v-if="month.selected"></div>
                  </span>
                </template>
                <svg
                  :class="!menuCollapsed ? '' : 'rotated'"
                  @click="openProducerDetails"
                  class="show-all-arrow"
                  width="12"
                  height="14"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 5.43896L6 1.43896L1 5.43896" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div class="popular__inner d-flex w-100" v-if="menuCollapsed">
            <div class="col-3 menu-insights">
              <div class="menu-insights__decor"></div>
              <div
                v-for="item in sortedTabs"
                :key="item.id"
                class="menu-insights__item"
                :class="[
                  item.active ? 'active' : '',
                  item.type ? '' : 'd-none'
                ]"
                @click="onToggle(item.id)"
              >
                <div>
                  <!-- <div @click="itemPopularMenu(item.id)"> -->
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="col-9 p-0 m-0">
              <div
                v-if="popularMenuDj[0].active"
                class="popular-content"
                :class="{ 'col-12': !isPromoter }"
              >
                <template v-if="isPromoter">
                  <b-table
                    class="insights__table"
                    :fields="mostPlayedTracksFields"
                    :items="mostPlayedTracksData"
                  >
                  </b-table>
                </template>
                <template
                  v-else-if="
                    (customType === 'dj' || customType === 'dj-producer') &&
                      djMostPopularTracks.length > 0 &&
                      activeTab.name === 'DJ Overview'
                  "
                >
                  <div
                    class="popular-row"
                    v-for="(track, index) in djMostPopularTracks"
                    :key="index"
                  >
                    <div>{{ index + 1 }}</div>
                    <div>
                      <div
                        class="long-text"
                        @mouseenter="
                          handleLongTextHover(
                            $event,
                            get(track, 'track.name', '')
                          )
                        "
                        @mouseleave="handleLongTextMouseLeave"
                      >
                        <span>{{ get(track, "track.name", "") }}</span>
                      </div>
                    </div>
                    <div>
                      <div
                        class="long-text"
                        @mouseenter="
                          handleLongTextHover(
                            $event,
                            get(track, 'track.performers', [])
                              .map(({ name }) => name)
                              .join(', ')
                          )
                        "
                        @mouseleave="handleLongTextMouseLeave"
                      >
                        {{
                          get(track, "track.performers", [])
                            .map(({ name }) => name)
                            .join(", ")
                        }}
                      </div>
                    </div>
                  </div>
                </template>
                <template
                  v-else-if="
                    (customType === 'producer' ||
                      customType === 'dj-producer') &&
                      producerMostPopularTracks.length > 0 &&
                      activeTab.name === 'Producer Overview'
                  "
                >
                  <div
                    class="popular-row"
                    style="cursor: pointer"
                    v-for="(track, index) in producerMostPopularTracks"
                    :key="index"
                    @click="handleTrackClick(track.track.id)"
                  >
                    <div>{{ index + 1 }}</div>
                    <div>
                      <div
                        class="long-text"
                        @mouseenter="
                          handleLongTextHover($event, track.track.name)
                        "
                        @mouseleave="handleLongTextMouseLeave"
                      >
                        {{ track.track.name }}
                      </div>
                    </div>
                    <div>
                      <div
                        class="long-text"
                        @mouseenter="
                          handleLongTextHover(
                            $event,
                            track.track.performers
                              .map(({ name }) => name)
                              .join(', ')
                          )
                        "
                        @mouseleave="handleLongTextMouseLeave"
                      >
                        {{
                          track.track.performers
                            .map(({ name }) => name)
                            .join(", ")
                        }}
                      </div>
                    </div>
                  </div></template
                >
                <template
                  v-else-if="
                    (customType === 'dj' || customType === 'dj-producer') &&
                      ((!djMostPopularTracks.length &&
                        activeTab.name === 'DJ Overview') ||
                        (!producerMostPopularTracks.length &&
                          activeTab.name === 'Producer Overview'))
                  "
                  ><div class="no-data">No data yet</div>
                </template>
              </div>
              <div
                v-else-if="popularMenuDj[1].active || popularMenuDj[2].active"
                class="popular-content"
                :class="{ 'col-12': !isPromoter }"
              >
                <template v-if="isPromoter">
                  <b-table
                    class="insights__table"
                    :fields="mostPlayedProducersFields"
                    :items="mostPlayedProducersData"
                  >
                  </b-table>
                </template>
                <template
                  v-if="
                    (customType === 'dj' || customType === 'dj-producer') &&
                      djMostPopularProducers.length > 0 &&
                      activeTab.name === 'DJ Overview'
                  "
                >
                  <div
                    class="popular-row"
                    v-for="(producer, i) in djMostPopularProducers"
                    :key="i"
                  >
                    <div>{{ i + 1 }}</div>
                    <div>{{ producer.performer.name }}</div>
                  </div>
                </template>
                <template
                  v-else-if="
                    (customType === 'producer' ||
                      customType === 'dj-producer') &&
                      producerMostPopulerDjs.length > 0 &&
                      activeTab.name === 'Producer Overview'
                  "
                >
                  <div
                    class="popular-row"
                    v-for="(dj, index) in producerMostPopulerDjs"
                    :key="index"
                  >
                    <div>{{ index + 1 }}</div>
                    <div>{{ dj.user.primeArtistName }}</div>
                  </div>
                </template>
                <template
                  v-else-if="
                    (customType === 'dj' || customType === 'dj-producer') &&
                      ((!djMostPopularProducers.length &&
                        activeTab.name === 'DJ Overview') ||
                        (!producerMostPopulerDjs.length &&
                          activeTab.name === 'Producer Overview'))
                  "
                  ><div class="no-data">No data yet</div>
                </template>
              </div>
              <div
                v-else-if="
                  popularMenuDj[3].active &&
                    producerMostPopularVenues.length > 0
                "
                class="col-12 popular-content"
              >
                <template
                  v-if="
                    (customType === 'producer' ||
                      customType === 'dj-producer') &&
                      activeTab.name === 'Producer Overview'
                  "
                >
                  <div
                    v-for="(el, index) in producerMostPopularVenues"
                    :key="index"
                    class="popular-row"
                  >
                    <div>{{ index + 1 }}</div>
                    <div>{{ el.venueName }}</div>
                    <div>{{ el.venueCity }}, {{ el.venueCountry }}</div>
                  </div>
                </template>
              </div>
              <div v-else-if="popularMenuDj[4].active" class="popular-content">
                <b-table
                  class="insights__table"
                  :fields="playlistUploadsByDjFields"
                  :items="playlistUploadsByDjData"
                  tbody-tr-class="insights__dj-row"
                  @row-clicked="handleDjRowClick"
                >
                </b-table>
              </div>
              <div v-else>
                <div class="popular-content">
                  <div class="no-data">No data yet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="tooltip" class="text-tooltip">
      <span>{{ tooltipText }}</span>
    </div>
  </div>
</template>

<script>
import get from "lodash/get";
import { mapState, mapActions } from "vuex";
import api from "@/service/api";
import swal from "sweetalert2";

export default {
  name: "PopularProducerAndTracks",
  props: ["customType", "activeTab"],
  data() {
    return {
      menuCollapsed: false,
      mostPlayedId: 1,
      takeTracks: 15,
      takeProducers: 15,
      takeDjs: 15,
      takeVenues: 15,
      popularMenuDj: [
        {
          id: 1,
          sort: 3,
          name: "Most Played Tracks",
          active: true,
          type: true
        },
        {
          id: 2,
          sort: 2,
          name: "Most Played Producers",
          active: false,
          type: true
        },
        {
          id: 3,
          sort: 4,
          name: "Most Played DJs",
          active: false,
          type: false
        },
        {
          id: 4,
          sort: 5,
          name: "Most Played Venues",
          active: false,
          type: false
        },
        {
          id: 5,
          sort: 1,
          name: "Playlist Uploads By DJ",
          active: false,
          type: false
        }
      ],
      tooltipText: "",
      producersMonthArray: [
        { id: 1, name: "1M", selected: false },
        { id: 6, name: "6M", selected: true },
        { id: 12, name: "1Y", selected: false }
      ],
      tracksMonthArray: [
        { id: 1, name: "1M", selected: false },
        { id: 6, name: "6M", selected: true },
        { id: 12, name: "1Y", selected: false }
      ],
      playlistUploadsByDjFields: [
        {
          key: "djName",
          label: "DJ Name"
        },
        {
          key: "uploadsCount",
          label: "Number of Playlists",
          class: "text-right"
        }
      ],
      playlistUploadsByDjData: [],
      mostPlayedProducersFields: [
        {
          key: "producer",
          label: "Producer Name",
          formatter: (value, key, item) => {
            return item.performer.displayedName;
          }
        },
        {
          key: "totalPlayCount",
          label: "Number of Plays",
          class: "text-right"
        }
      ],
      mostPlayedProducersData: [],
      mostPlayedTracksFields: [
        {
          key: "track",
          label: "Track Name",
          formatter: (value, key, item) => {
            return item.track.name;
          }
        },
        {
          key: "artists",
          label: "Artist",
          formatter: (value, key, item) => {
            return item.track.performers.map(p => p.displayedName).join(", ");
          }
        },
        {
          key: "remixers",
          label: "Remixer",
          formatter: (value, key, item) => {
            return item.track.remixers.map(p => p.displayedName).join(", ");
          }
        },
        {
          key: "totalPlayCount",
          label: "Number of Plays",
          class: "text-right"
        }
      ],
      mostPlayedTracksData: []
    };
  },
  computed: {
    ...mapState("djdashboard", [
      "djMostPopularProducers",
      "djMostPopularTracks",
      "producerMostPopulerDjs",
      "producerMostPopularVenues",
      "producerMostPopularTracks",
      "selectedProducerMonth",
      "selectedTrackMonth",
      "producerMonthCollapsed",
      "trackMonthCollapsed",
      "year"
    ]),
    ...mapState("user", ["data"]),
    sortedTabs() {
      return this.popularMenuDj.toSorted((a, b) => a.sort - b.sort);
    },
    isPromoter() {
      return this.customType === "promoter";
    }
  },
  created() {
    this.popularMenuDj[4].type = this.isPromoter;

    if (this.isPromoter) {
      this.onToggle(5);
    }
  },
  async mounted() {
    await this.handleFetchingData();
  },
  methods: {
    ...mapActions("djdashboard", [
      "getdjMostPopularProducers",
      "getdjMostPopularTracks",
      "getProducerMostPopularTracks",
      "getProducerMostPopularVenues",
      "getProducerMostPopularDjs"
    ]),
    get,
    onToggle(id) {
      this.takeTracks = 15;
      this.takeProducers = 15;
      this.takeDjs = 15;
      this.takeVenues = 15;
      this.mostPlayedId = id;
      this.popularMenuDj.forEach(el => {
        el.active = false;
      });
      this.popularMenuDj[id - 1].active = true;
      this.showProducerDetails(6);
    },
    // itemPopularMenu(id) {
    //   const array = id === 1 ? this.tracksMonthArray : this.producersMonthArray;
    //   array.forEach(el => el.selected && this.showProducerDetails(el.id));
    // },
    async handleFetchingData() {
      // Loading popular menu
      if (this.activeTab.name === "Producer Overview") {
        this.popularMenuDj[1].type = false;
        this.popularMenuDj[2].type = true;
        this.popularMenuDj[3].type = true;
      }
      // console.log("customType: ", this.customType);
      if (this.customType === "dj-producer") {
        // console.log("is dj-producer joined");
        await this.selectDjTrackMonth(this.tracksMonthArray[1].id);
        // await this.getProducerMostPopularTracks(this.tracksMonthArray[1].id);
        // await this.getProducerMostPopularVenues(this.tracksMonthArray[1].id);
        await this.selectDjProducerMonth(this.producersMonthArray[1].id);
        return;
      }
      if (/dj/gm.test(this.customType)) {
        // console.log("is dj selecting");
        await this.selectDjTrackMonth(this.tracksMonthArray[1].id);
        await this.selectDjProducerMonth(this.producersMonthArray[1].id);
        return;
      }
      if (/producer/gm.test(this.customType)) {
        // console.log("is producer selecting");
        await this.getProducerMostPopularTracks(this.tracksMonthArray[1].id);
        await this.getProducerMostPopularVenues(this.tracksMonthArray[1].id);
        await this.selectDjProducerMonth(this.producersMonthArray[1].id);
        return;
      }

      if (this.isPromoter) {
        await this.loadPlaylistUploadsByDj();
        await this.loadMostPlayedProducers();
        await this.loadMostPlayedTracks();
      }
    },
    async loadPlaylistUploadsByDj() {
      const response = await api.fetchPlaylistUploadsByDj(this.year);

      if (response.Error) {
        await swal.fire({
          icon: "error",
          text:
            response.Error || `Failed to fetch data for "Playlist Uploads By DJ`
        });
        return;
      }

      this.playlistUploadsByDjData = response.Data;
    },
    async loadMostPlayedProducers() {
      const response = await api.fetchPromoterMostPlayedProducers(this.year);

      if (response.Error) {
        await swal.fire({
          icon: "error",
          text:
            response.Error || `Failed to fetch data for "Most Played Producers`
        });
        return;
      }

      this.mostPlayedProducersData = response.Data;
    },
    async loadMostPlayedTracks() {
      const response = await api.fetchMostPlayedTracks(this.year);

      if (response.Error) {
        await swal.fire({
          icon: "error",
          text: response.Error || `Failed to fetch data for "Most Played Tracks`
        });
        return;
      }

      this.mostPlayedTracksData = response.Data;
    },
    selectDjTrackMonth(monthId) {
      this.tracksMonthArray.map(pm => {
        if (pm.id === monthId) {
          const payload = {
            monthQty: monthId,
            take: 15
          };
          pm.selected = true;
          this.$store.commit("djdashboard/setTrackMonth", monthId);
          if (
            (this.customType === "dj" || this.customType === "dj-producer") &&
            this.activeTab.name === "DJ Overview"
          ) {
            this.getdjMostPopularTracks(payload);
          }
          if (
            (this.customType === "producer" ||
              this.customType === "dj-producer") &&
            this.activeTab.name === "Producer Overview"
          ) {
            this.getProducerMostPopularTracks(payload);
            this.getProducerMostPopularVenues(payload);
          }
        } else {
          pm.selected = false;
        }
      });
    },
    sequence(start, step) {
      start -= step;
      return function() {
        return (start += step);
      };
    },
    openProducerDetails() {
      this.menuCollapsed = !this.menuCollapsed;
      const listElm = document.querySelector(
        ".online-dashboard-content-view-wrapper"
      );
      listElm.addEventListener("scroll", () => {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          if (this.mostPlayedId === 1) {
            this.takeTracks = this.takeTracks + this.takeTracks;
            const payload = {
              monthQty: this.monthId,
              take: this.takeTracks
            };
            this.getdjMostPopularTracks(payload);
          } else if (this.mostPlayedId === 2) {
            this.takeProducers = this.takeProducers + this.takeProducers;
            const payload = {
              monthQty: this.monthId,
              take: this.takeProducers
            };
            this.getdjMostPopularProducers(payload);
          } else if (this.mostPlayedId === 3) {
            this.takeDjs = this.takeDjs + this.takeDjs;
            const payload = {
              monthQty: this.monthId,
              take: this.takeDjs
            };
            this.getProducerMostPopularDjs(payload);
          } else if (this.mostPlayedId === 4) {
            this.takeVenues = this.takeVenues + this.takeVenues;
            const payload = {
              monthQty: this.monthId,
              take: this.takeVenues
            };
            this.getProducerMostPopularVenues(payload);
          }
        }
      });
      // this.$store.commit("djdashboard/setProducerMonthCollaps", !this.producerMonthCollapsed);
    },
    showProducerDetails(monthId) {
      this.$store.commit("djdashboard/setTrackMonthCollaps", "true");
      this.selectDjTrackMonth(monthId);
      this.$store.commit("djdashboard/setProducerMonthCollaps", "true");
      this.selectDjProducerMonth(monthId);
    },
    selectDjProducerMonth(monthId) {
      this.monthId = monthId;
      this.producersMonthArray.map(pm => {
        if (pm.id === monthId) {
          pm.selected = true;
          this.$store.commit("djdashboard/setProducerMonth", monthId);
          if (
            (this.customType === "dj" || this.customType === "dj-producer") &&
            this.activeTab.name === "DJ Overview" &&
            this.data
          ) {
            // console.log("GET MOST POPULAR PRODUCRS");
            const payload = {
              monthQty: monthId,
              take: 15
            };
            this.getdjMostPopularProducers(payload);
          }
          if (
            (this.customType === "producer" ||
              this.customType === "dj-producer") &&
            this.activeTab.name === "Producer Overview"
          ) {
            const payload = {
              monthQty: monthId,
              take: 15
            };
            this.getProducerMostPopularDjs(payload);
          }
        } else {
          pm.selected = false;
        }
      });
    },
    handleLongTextHover(event, text) {
      const tooltip = this.$refs.tooltip;
      const { top, left } = event.target.getBoundingClientRect();
      if (event.target.scrollWidth > event.target.offsetWidth) {
        this.tooltipText = text;
        tooltip.style.display = "block";
        tooltip.style.top = top - 30 + "px";
        tooltip.style.left = left + "px";
      }
    },
    handleLongTextMouseLeave() {
      const { tooltip } = this.$refs;

      if (tooltip && tooltip.style) {
        tooltip.style.display = "none";
      }
    },
    handleTrackClick(id) {
      this.$router.push(`/online-dashboard/track/${id}`);
    },
    handleDjRowClick(item) {
      this.$router.push({ name: "Playlists", query: { search: item.djName } });
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .insights {
    &__table {
      thead {
        background: #f2f1ef;
        text-transform: uppercase;
        font-family: Graphik App, sans-serif;
        font-size: 9px;
        font-weight: 500;
        line-height: 11px;
        letter-spacing: 0.15em;
        color: #91918f;

        th {
          border: 0;
          padding: 8px 20px;
        }
      }
      tbody {
        font-family: Roboto Mono, monospace;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0;
        color: #442671;

        tr {
          border-bottom: 2px solid #eae8eb;
        }
        td {
          border: 0;
          padding: 12px 20px;
        }
      }
    }

    &__dj-row {
      cursor: pointer;
    }
  }
}

.text-tooltip {
  z-index: 10;
  display: none;
  position: fixed;
  background: #ffffff;
  border: 1px solid #f2f1ef;
  border-radius: 2px;
  padding: 10px;
  font-size: 12px;
  color: #442671;
  pointer-events: none;
  font-family: "Roboto-Mono", monospace;
  box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.25);
}
.long-text {
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bottom-overview-content {
  position: absolute;
  z-index: 9;
  bottom: 0;
  /* width: calc(50% - 2px); */
}
.month-selector {
  color: #442671;
  cursor: pointer;
  margin-left: 10px;
  display: inline-block;
  font-weight: bold;
}
.month-selector:first-child {
  margin-left: 0;
}
.month-selected {
  border-bottom: 1px solid #fff;
  width: 100%;
  position: absolute;
  bottom: -3px;
  left: 0;
}
.show-all-arrow {
  cursor: pointer;
  margin-left: 18px;
}
.title-overlay {
  padding-right: 0;
  text-align: left;
  font-family: "Europa-Regular", sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
}
.detailed {
  height: 430px;
  transition: all 2s;
}
.rotated {
  transform: rotate(180deg);
}
.popular-producers,
.popular-tracks {
  height: 30px;
  max-height: 30px;
  background: #9182c5;
  padding: 0 20px;
  font-size: 9px;
  color: #fff;

  &--promoter {
    background: var(--Core-Grayscale-900, #616060);
  }
}
.popular-tracks .row,
.popular-producers .row {
  height: 100%;
  align-items: center;
}
.popular-content {
  background: #fff;
  height: fit-content;
}
.popular-row {
  display: flex;
  margin: 0 -15px;
  align-items: center;
  border-bottom: 1px solid #aaa3b1;
  padding: 10px 20px;
  max-height: 40px;
  height: 40px;
}
.popular-row > div {
  width: 20px;
  flex-grow: 1;
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
  text-align: left;
  line-height: 20px;
  color: #442671;
}
.popular-row > div + div {
  margin-left: 20px;
}
.popular-row > div:first-child {
  color: #000;
  flex-grow: unset;
}
.popular-content .col-1 {
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
}
.popular__inner {
  min-height: 400px;
  background: #ffffff;
}
.no-data {
  height: 100%;
  font-size: 14px;
}
.menu-insights {
  border-right: 1px solid #aaa3b1;
  border-left: 1px solid #aaa3b1;
  background: #f2f1ef;
  font-family: Roboto Mono, monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  color: #442671;
}
.menu-insights__decor {
  position: absolute;
  z-index: -1;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #f2f1ef;
}
.menu-insights__item {
  display: flex;
  margin: 0 -15px;
  align-items: center;
  padding: 10px 20px;
  max-height: 40px;
  height: 40px;
  cursor: pointer;
}
.menu-insights__item.active,
.menu-insights__item:hover {
  background: #ffffff;
}
@media (max-width: 1500px) {
  .second-svg {
    right: 30px !important;
  }
  .popular-tracks .col-4 {
    padding-left: 0;
    padding-right: 55px !important;
  }
}
@media (max-width: 1066px) {
  .popular-producers,
  .popular-tracks {
    max-height: 40px;
    height: 40px;
  }
}
</style>
