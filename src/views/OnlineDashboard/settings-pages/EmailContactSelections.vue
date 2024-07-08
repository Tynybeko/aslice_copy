<template>
  <div class="col-8 settings-content px-4">
    <div class="row mx-0">
      <p class="settings-text color-gray mt-4 mb-4" style="max-width: 453px">
        Welcome to your email and contact preferences page. By default you are
        opted in to all emails when you register. You can opt out of certain
        emails by unchecking the box associated with the topic of the email.
        Remember to save your preferences to complete your selection.
      </p>
      <div class="row mx-0 pt-3 w-100">
        <h4 class="text-uppercase">
          General Emails
        </h4>
        <div
          v-for="option in visibleOptions.filter(o => o.type === 'Subscribe')"
          :key="option.title"
          class="col-12 px-0"
        >
          <b-form-checkbox
            v-model="topics"
            :value="option.topic"
            :disabled="!!option.disabled"
            @input="selectOptions"
          >
            <span
              class="cell-item"
              style="position: relative; top: -2px; margin-left: 10px"
            >
              {{ option.title }}
            </span>
          </b-form-checkbox>
        </div>
        <div
          v-for="option in visibleOptions.filter(
            o => o.type === 'General Emails (DJ and Producer)'
          )"
          :key="option.title"
          class="col-12 px-0"
        >
          <b-form-checkbox
            v-model="topics"
            :value="option.topic"
            :disabled="!!option.disabled"
            @input="selectOptions"
          >
            <span
              class="cell-item"
              style="position: relative; top: -2px; margin-left: 10px"
            >
              {{ option.title }}
            </span>
          </b-form-checkbox>
        </div>

        <template v-if="!isPromoter">
          <h4 class="text-uppercase">
            DJ specific emails
          </h4>
          <div
            v-for="option in visibleOptions.filter(
              o => o.type === 'DJ specific emails'
            )"
            :key="option.title"
            class="col-12 px-0"
          >
            <b-form-checkbox
              v-model="topics"
              :value="option.topic"
              :disabled="!!option.disabled"
              @input="selectOptions"
            >
              <span
                class="cell-item"
                style="position: relative; top: -2px; margin-left: 10px"
              >
                {{ option.title }}
              </span>
            </b-form-checkbox>
          </div>

          <div
            v-for="option in visibleOptions.filter(
              o => o.type === 'Monthly DJ Social Share Assets'
            )"
            :key="option.title"
            class="col-12 px-0"
          >
            <b-form-checkbox
              v-model="topics"
              :value="option.topic"
              :disabled="!!option.disabled"
              @input="selectOptions"
            >
              <span
                class="cell-item"
                style="position: relative; top: -2px; margin-left: 10px"
              >
                {{ option.title }}
              </span>
            </b-form-checkbox>
          </div>

          <h4 class="text-uppercase">
            Producer specific emails
          </h4>
          <div
            v-for="option in visibleOptions.filter(
              o => o.type === 'Producer specific emails'
            )"
            :key="option.title"
            class="col-12 px-0"
          >
            <b-form-checkbox
              v-model="topics"
              :value="option.topic"
              :disabled="!!option.disabled"
              @input="selectOptions"
            >
              <span
                class="cell-item"
                style="position: relative; top: -2px; margin-left: 10px"
              >
                {{ option.title }}
              </span>
            </b-form-checkbox>
          </div>
        </template>
        <template v-else>
          <h4 class="text-uppercase">
            Promoter specific emails
          </h4>
          <div
            v-for="option in visibleOptions.filter(
              o => o.type === 'Promoter specific emails'
            )"
            :key="option.title"
            class="col-12 px-0"
          >
            <b-form-checkbox
              v-model="topics"
              :value="option.topic"
              :disabled="!!option.disabled"
              @input="selectOptions"
            >
              <span
                class="cell-item"
                style="position: relative; top: -2px; margin-left: 10px"
              >
                {{ option.title }}
              </span>
            </b-form-checkbox>
            <div
              v-if="!!option.items"
              class="ml-5"
              :class="{
                'email-contact-selections__items--disabled': !topics.includes(
                  option.topic
                )
              }"
            >
              <b-form-checkbox
                v-for="(item, index) in option.items"
                :key="item.interval"
                :checked="
                  topics.includes(option.topic) && schedule[option.topic]
                    ? schedule[option.topic] === item.interval
                    : index === 0
                "
                :disabled="
                  !topics.includes(option.topic) ||
                    schedule[option.topic] === item.interval
                "
                @input="selectSchedule($event, option.topic, item.interval)"
              >
                <span style="position: relative; top: -2px; margin-left: 10px">
                  {{ item.title }}
                </span>
              </b-form-checkbox>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "EmailContactSelections",
  data() {
    return {
      options: [
        {
          title: "Subscribe me to the Aslice Newsletter (optional)",
          topic: "Newsletter",
          type: "Subscribe",
          roles: ["dj", "producer", "promoter"]
        },
        {
          title: "Subscribe me to the Aslice Resources blog page (optional)",
          topic: "Resources",
          type: "Subscribe",
          roles: ["dj", "producer", "promoter"]
        },
        {
          title:
            "Financial notifications and end of year reporting (mandatory)",
          topic: "",
          type: "General Emails (DJ and Producer)",
          roles: ["dj", "producer"],
          disabled: true
        },
        {
          title: "Notification of user or admin changes to account (mandatory)",
          topic: "",
          type: "General Emails (DJ and Producer)",
          roles: ["dj", "producer", "promoter"],
          disabled: true
        },
        {
          title: "Notify me when a playlist upload was successful (optional)",
          topic: "PlaylistsUploading",
          type: "DJ specific emails",
          roles: ["dj", "producer"]
        },
        {
          title:
            "Notify me when a playlist has completed processing (optional)",
          topic: "PlaylistApproving",
          type: "DJ specific emails",
          roles: ["dj", "producer"]
        },
        {
          title: "Monthly Reminder to upload gigs (optional)",
          topic: "DjNotUploadingPlaylists",
          type: "DJ specific emails",
          roles: ["dj", "producer"]
        },
        {
          title: "Monthly DJ Social Share Assets (optional)",
          topic: "SendPlaylistsAssets",
          type: "Monthly DJ Social Share Assets",
          roles: ["dj", "producer"]
        },
        {
          title: "Notify me when someone has played my track (optional)",
          topic: "ProducerTracksPlayed",
          type: "Producer specific emails",
          roles: ["dj", "producer"]
        },
        {
          title: "Quarterly Event Reports (mandatory)",
          topic: "QuarterlyPlaylistReporting",
          type: "Promoter specific emails",
          roles: ["promoter"],
          disabled: true
        },
        {
          title: "Notification of playlist uploads by DJs (mandatory)",
          topic: "PlaylistsUploading",
          type: "Promoter specific emails",
          roles: ["promoter"],
          disabled: true,
          items: [
            {
              title: "Receive Weekly",
              interval: "Weekly"
            },
            {
              title: "Receive Monthly",
              interval: "Monthly"
            }
          ]
        },
        {
          title: "Venue specific Social Share Assets (monthly) (optional)",
          topic: "VenueAssets",
          type: "Promoter specific emails",
          roles: ["promoter"]
        }
      ],
      topics: []
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy"
    }),
    ...mapGetters("user", ["isPromoter"]),
    visibleOptions() {
      return this.options.filter(o =>
        this.user.roles.some(r => o.roles.includes(r.name))
      );
    },
    schedule() {
      return this.userCopy.notificationSchedules.reduce((result, value) => {
        result[value.topic] = value.interval;
        return result;
      }, {});
    }
  },
  created() {
    this.topics = this.visibleOptions
      .filter(o => !this.userCopy.deniedTopics.some(t => t === o.topic))
      .map(o => o.topic);
  },
  methods: {
    ...mapMutations("user", ["UPDATE_USER_COPY"]),
    selectOptions() {
      this.topics = this.topics.filter(
        so =>
          !this.options.some(
            o =>
              o.items?.length &&
              !this.topics.includes(o.topic) &&
              o.items.some(i => i.interval === so)
          )
      );
      this.UPDATE_USER_COPY({
        deniedTopics: this.visibleOptions
          .filter(o => !this.topics.includes(o.topic))
          .map(o => o.topic)
      });
    },
    selectSchedule(value, topic, interval) {
      if (!value) {
        return;
      }

      this.UPDATE_USER_COPY({
        notificationSchedules: [
          ...this.userCopy.notificationSchedules.filter(s => s.topic !== topic),
          {
            topic,
            interval
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-text {
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
}

h4 {
  font-weight: bold;
  font-size: 9px;
  letter-spacing: 0.15em;
  line-height: 11px;
  color: #442671;
  text-transform: uppercase;
}

.email-contact-selections {
  &__items {
    &--disabled {
      opacity: 0.6;
    }
  }
}
</style>
