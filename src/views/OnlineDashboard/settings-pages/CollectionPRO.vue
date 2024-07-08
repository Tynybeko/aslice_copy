<template>
  <div class="col-8 px-4 settings-content" style="max-width: 425px">
    <h4 class="base-form__title">
      Collections (optional)
    </h4>
    <p class="settings-description gray-color my-4">
      <template v-if="isPromoter">
        Performance Rights Organization (PRO).<br />
        <br />
        Are you as a Venue/Festival/Promoter paying any local collection
        society? Aslice can generate reports and in some cases work directly
        with your PRO to help make sure your money is being paid down the line
        correctly to all the producers who are being played in your
        venues/events.
      </template>
      <template v-else>
        Being a member of a collection society (PRO) is not required to be part
        of Aslice, but is highly encouraged. If you’re not registered please
        check this
        <a class="link-span" target="_blank" href="/copyrightexplained">LINK</a>
        explaining the importance of PRO’s, publishing and how they affect you.
      </template>
    </p>

    <p class="settings-text">
      Performance Rights Organization — ONLY
    </p>
    <v-select
      style="margin-bottom: 15px; margin-top: 10px;"
      label="name"
      placeholder="Select"
      :options="societies"
      :value="userCopy.societies[0]"
      @input="selectSociety"
    >
      <template #open-indicator="{ attributes }">
        <img
          v-bind="attributes"
          src="@/assets/images/arrow-playlist-optionsOne.svg"
        />
      </template>
      <template #option="{ name, id }">
        <div :id="`cell-item-${id}`" class="cell-item">{{ name }}</div>
        <b-tooltip :target="`cell-item-${id}`">{{ name }}</b-tooltip>
      </template>
      <template #selected-option="{ name, id }">
        <div :id="`cell-item-${id}`" class="cell-item">{{ name }}</div>
        <b-tooltip :target="`cell-item-${id}`">{{ name }}</b-tooltip>
      </template>
    </v-select>
    <div class="form-group" style="margin-top: 15px">
      <label class="settings-text">
        <template v-if="isPromoter">
          Contact person at society selected above (if known)
        </template>
        <template v-else>
          Publisher Email
        </template>
      </label>
      <input
        type="text"
        class="form-control pink-color"
        id="email"
        :value="userCopy.publisherEmail"
        @input="
          UPDATE_USER_COPY({ publisherEmail: $event.target.value || null })
        "
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CollectionPRO",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy",
      societies: "getSocieties"
    }),
    ...mapGetters("user", ["isPromoter"])
  },
  methods: {
    ...mapMutations("user", ["UPDATE_USER_COPY"]),
    selectSociety(value) {
      console.debug(value);
      this.UPDATE_USER_COPY({ societies: value ? [value] : [] });
    }
  }
};
</script>

<style lang="scss" scoped>
.gray-color {
  color: #75707b;
}

.settings-description {
  font-family: Roboto Mono, monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  color: #75707b;
}

.settings-text {
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #616060;
}

#dashboard-content-page .form-control {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #75707b;
  background-color: transparent !important;
}

.form-group label {
  margin: 0;
}

.form-control {
  color: #000000;
  font-size: 12px;
}

.pink-color {
  color: #442671;
}

.form-group .underlined-text {
  bottom: 5px;
  top: auto;
  position: absolute;
}

.form-group .underlined-text {
  bottom: 5px;
  top: auto;
  position: absolute;
}

.cell-item {
  word-break: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}

::v-deep {
  .vs__dropdown-toggle {
    padding-bottom: 0;
    border-radius: 0;
    width: 100% !important;
    border: 1px solid #080809;
  }
  .v-select {
    width: 100%;
  }
  .vs__selected {
    max-width: 250px;
  }
  .vs__actions svg path {
    display: none;
    pointer-events: none;
  }
  .vs__clear {
    display: none;
  }
}
</style>
