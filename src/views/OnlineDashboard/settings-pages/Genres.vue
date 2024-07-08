<template>
  <div class="col-xl-5 col-lg-7 px-0 settings-content">
    <b-col cols="12" class="px-4">
      <p class="col-12 mt-4 mb-3 d-flex px-0 settings-text gray-color">
        Please select as many genres as you think describes your style. (minimum
        of 1 is required)
      </p>
      <b-row no-gutters>
        <b-col sm="6">
          <b-form-checkbox
            v-for="genre in genres.slice(0, Math.ceil(genres.length / 2))"
            :key="genre.id"
            :id="`checkbox-${genre.id}`"
            :name="`checkbox-${genre.id}`"
            v-model="userCopy.genres"
            :value="genre.title"
            @change="UPDATE_USER_COPY({ genres: userCopy.genres })"
          >
            <span
              :id="`cell-item-${genre.id}`"
              class="cell-item"
              style="position: relative; top: -2px; margin-left: 10px"
              >{{ genre.title }}</span
            >
            <b-tooltip :target="`cell-item-${genre.id}`">
              {{ genre.title }}
            </b-tooltip>
          </b-form-checkbox>
        </b-col>
        <b-col sm="6">
          <b-form-checkbox
            v-for="genre in genres.slice(Math.ceil(genres.length / 2))"
            :key="genre.id"
            :id="`checkbox-${genre.id}`"
            :name="`checkbox-${genre.id}`"
            v-model="userCopy.genres"
            :value="genre.title"
            @change="UPDATE_USER_COPY({ genres: userCopy.genres })"
          >
            <span
              :id="`cell-item-${genre.id}`"
              class="cell-item"
              style="position: relative; top: -2px; margin-left: 10px"
              >{{ genre.title }}</span
            >
            <b-tooltip :target="`cell-item-${genre.id}`">
              {{ genre.title }}
            </b-tooltip>
          </b-form-checkbox>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Genres",
  data() {
    return {
      genres: [
        { id: 1, title: "140 / Deep Dubstep / Grime" },
        { id: 2, title: "Hard Techno" },
        { id: 3, title: "Afro House" },
        { id: 4, title: "House" },
        { id: 5, title: "Bass / Club" },
        { id: 6, title: "Indie Dance" },
        { id: 7, title: "Bass House" },
        { id: 8, title: "Melodic House & Techno" },
        { id: 9, title: "Big Room / Breakbeat / UK Bass" },
        { id: 10, title: "Minimal / Deep Tech" },
        { id: 11, title: "Dance / Electro Pop" },
        { id: 12, title: "Nu-Disco / Disco" },
        { id: 13, title: "Deep House" },
        { id: 14, title: "Organic House / Downtempo" },
        { id: 15, title: "DJ Tools" },
        { id: 16, title: "Progressive House" },
        { id: 17, title: "Drum & Bass" },
        { id: 18, title: "Psy-Trance" },
        { id: 19, title: "Tech House" },
        { id: 20, title: "Electro (Classic / Detroit / Modern)" },
        { id: 21, title: "Techno (Peak Time / Driving)" },
        { id: 22, title: "Electro House" },
        { id: 23, title: "Techno (Raw / Deep / Hypnotic)" },
        { id: 24, title: "Electronica" },
        { id: 25, title: "Trance" },
        { id: 26, title: "Funky / Groove / Jackin' House" },
        { id: 27, title: "Trap / Hip-Hop / R&B" },
        { id: 28, title: "Future House" },
        { id: 29, title: "UK Garage / Bassline" },
        { id: 30, title: "Hard Dance / Hardcore" },
        { id: 31, title: "Ambient / Chillout Room" },
        { id: 32, title: "Experimental / Leftfield" },
        { id: 33, title: "EBM / Industrial" }
      ].sort((a, b) => a.title.localeCompare(b.title))
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy"
    })
  },
  methods: mapMutations("user", ["UPDATE_USER_COPY"])
};
</script>

<style lang="scss" scoped>
.gray-color {
  color: #75707b;
}

.settings-text {
  font-size: 12px;
}

::v-deep .custom-control-label {
  display: flex;
}
.cell-item {
  word-break: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
