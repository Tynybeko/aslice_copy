<template>
  <div class="col-xl-4 col-lg-5 px-4 settings-content">
    <div class="px-0 mx-0 pb-3">
      <div class="row mx-0">
        <h4 class="px-0 pt-4 pb-3 col-12">
          <template v-if="isPromoter">
            LINKS FOR YOUR VENUE/FESTIVAL/PROMOTIONS COMPANY
          </template>
          <template v-else>
            Identity links for music matching and profile building
          </template>
        </h4>
        <p class="px-0 col-12 online-preference-text">
          <template v-if="isPromoter">
            Please fill out as many of the following links to your brand.<br />
            (minimum of 2 is required)
          </template>
          <template v-else>
            In order to verify music across multiple public sites and databases
            and build your artist profile we ask you to please fill in as many
            links as possible to assist us in accurate matches and guarantee
            future payouts.
          </template>
        </p>

        <template v-if="!isPromoter">
          <div class="col-12 px-0">
            <h4 style="margin-top: 20px; margin-bottom: 10px;">
              Identity links
            </h4>
          </div>
          <div
            v-for="(link, index) in identityLinks"
            :key="index"
            class="mt-3 px-0 col-12"
          >
            <label class="mb-0 label-text">{{ link.title }}</label>
            <div
              class="form-group mb-0 field-badge"
              :class="{
                'field-badge_yellow':
                  user.verified &&
                  !!!user.socials.find(
                    socialLink =>
                      socialLink.link === link.link &&
                      !!link.link &&
                      link.type === socialLink.type
                  ),
                'field-badge_green':
                  user.verified &&
                  !!user.socials.find(
                    socialLink =>
                      socialLink.link === link.link &&
                      !!link.link &&
                      link.type === socialLink.type
                  )
              }"
            >
              <input
                type="text"
                class="form-control"
                :disabled="
                  user.verified &&
                    !!user.socials.find(
                      socialLink =>
                        socialLink.link === link.link &&
                        !!link.link &&
                        link.type === socialLink.type
                    )
                "
                v-model.trim="$v.identityLinks.$each[index].link.$model"
                @input="handleInputChange"
              />
              <div
                v-if="$v.identityLinks.$each[index].link.$error"
                class="error"
              >
                Please enter as url.
              </div>
            </div>
          </div>
        </template>

        <b-col cols="12" no-gutters class="mt-3 px-0">
          <h4 class="mt-4 mb-3">
            Social profile
          </h4>
        </b-col>

        <b-col
          v-for="(link, index) in visibleSocialProfileLinks"
          :key="identityLinks.length + index"
          cols="12"
          no-gutters
          class="mt-3 px-0 col-7"
        >
          <label class="mb-0 label-text">{{ link.title }}</label>
          <div
            class="form-group mb-0 field-badge"
            :class="{
              'field-badge_yellow':
                user.verified &&
                !!!user.socials.find(
                  socialLink =>
                    socialLink.link === link.link &&
                    !!link.link &&
                    link.type === socialLink.type
                ),
              'field-badge_green':
                user.verified &&
                !!user.socials.find(
                  socialLink =>
                    socialLink.link === link.link &&
                    !!link.link &&
                    link.type === socialLink.type
                )
            }"
          >
            <input
              type="text"
              class="form-control"
              placeholder="Enter Link"
              :disabled="
                user.verified &&
                  !!user.socials.find(
                    socialLink =>
                      socialLink.link === link.link &&
                      !!link.link &&
                      link.type === socialLink.type
                  )
              "
              v-model.trim="$v.socialProfileLinks.$each[index].link.$model"
              @input="handleInputChange"
            />
            <div
              v-if="$v.socialProfileLinks.$each[index].link.$error"
              class="error"
            >
              Please enter as url.
            </div>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

const correctUrlValidation = value => {
  return !value
    ? true
    : /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        value
      );
};

export default {
  name: "OnlinePresence",
  data() {
    return {
      identityLinks: [
        {
          link: "",
          type: "Bandcamp",
          title: "Bandcamp"
        },
        {
          link: "",
          type: "Beatport",
          title: "Beatport"
        },
        {
          link: "",
          type: "Discogs",
          title: "Discogs"
        },
        {
          link: "",
          type: "Soundcloud",
          title: "Soundcloud"
        },
        {
          link: "",
          type: "Tracksource",
          title: "Tracksource"
        }
      ],
      socialProfileLinks: [
        {
          link: "",
          type: "Website",
          title: "Website"
        },
        {
          link: "",
          type: "Facebook",
          title: "Facebook Artist Page"
        },
        {
          link: "",
          type: "Instagram",
          title: "Instagram"
        },
        {
          link: "",
          type: "Twitter",
          title: "Twitter"
        },
        {
          link: "",
          type: "Resident advisor",
          title: "Resident advisor"
        }
      ]
    };
  },
  validations: {
    identityLinks: {
      $each: {
        link: {
          correctUrlValidation
        }
      }
    },
    socialProfileLinks: {
      $each: {
        link: {
          correctUrlValidation
        }
      }
    }
  },
  mounted() {
    this.userCopy.socials.forEach(social => {
      let link = this.identityLinks.find(link => social.type === link.type);
      if (link) {
        link.link = social.link;
      }
      link = this.socialProfileLinks.find(link => social.type === link.type);
      if (link) {
        link.link = social.link;
      }
    });
    console.log("1", this.$v.identityLinks);
    console.log("2", this.$v.socialProfileLinks);
    this.$v.identityLinks.$touch();
    this.$v.socialProfileLinks.$touch();
    this.handleInputChange();
  },
  beforeDestroy() {
    this.SET_USER_ERRORS(false);
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy"
    }),
    ...mapGetters("user", ["isPromoter"]),
    visibleSocialProfileLinks() {
      let result = this.socialProfileLinks;

      if (this.isPromoter) {
        result = result.map(v => {
          if (v.type === "Facebook") {
            return {
              ...v,
              title: "Facebook"
            };
          }

          return v;
        });
      }

      return result;
    }
  },
  methods: {
    ...mapMutations("user", ["UPDATE_USER_COPY", "SET_USER_ERRORS"]),
    handleInputChange() {
      let haveErrors = false;
      for (let i = 0; i < this.identityLinks.length; i += 1) {
        if (this.$v.identityLinks.$each[i].$error) {
          haveErrors = true;
          break;
        }
      }
      for (let i = 0; i < this.socialProfileLinks.length; i += 1) {
        if (this.$v.socialProfileLinks.$each[i].$error) {
          haveErrors = true;
          break;
        }
      }
      this.SET_USER_ERRORS(haveErrors);
      if (!haveErrors) {
        this.UPDATE_USER_COPY({
          socials: [...this.identityLinks, ...this.socialProfileLinks]
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.settings {
  .group-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;
    padding-right: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #75707b;
    width: 100%;

    input {
      border-bottom: none !important;
    }
  }
}

#dashboard-content-page .form-control {
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #75707b;
  background-color: transparent !important;
}

.form-group label {
  color: #75707b;
  font-size: 12px;
  margin: 0;
}

.form-control {
  color: #000000;
  font-size: 12px;
}

.pink-color {
  color: #442671;
}

.field-badge {
  position: relative;
  &_yellow,
  &_green {
    &:after {
      bottom: 9px;
      content: "";
      right: 2px;
      width: 6px;
      height: 6px;
      border-radius: 10px;
      position: absolute;
      transform: translateY(-50%);
    }
  }

  &_yellow {
    &:after {
      background: #fcb416;
    }
  }

  &_green {
    &:after {
      background: #29c9be;
    }
  }
}

h4 {
  font-size: 9px;
  color: #442671;
  font-family: "Roboto-Mono";
  text-transform: uppercase;
  letter-spacing: 0.65px;
  font-weight: bold;
}

.online-preference-text {
  font-size: 12px;
  color: #75707b;
  font-family: "Roboto-Mono";
}
</style>
