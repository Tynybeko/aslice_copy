<template>
  <b-row class="process-one" no-gutters>
    <b-col
      cols="2"
      md="2"
      lg="1"
      class="d-none d-md-flex flex-column align-items-center process-one-left__sidebar max99"
    >
    </b-col>
    <b-col
      cols="2"
      md="2"
      lg="1"
      class="d-flex d-md-none flex-column align-items-center process-one-left__sidebar max99"
    >
    </b-col>
    <b-col class="process-one-right col px-0">
      <b-row style="padding-left: 20px; padding-right: 20px; max-width: 524px">
        <b-col
          v-if="!isPromoter"
          cols="12"
          :class="{
            'js-error':
              !$v.form.producerName.required && $v.form.producerName.$dirty
          }"
        >
          <h4 class="base-form__title mb-0">ALIAS</h4>
          <p class="mt-4 mb-4 base-form__description-text">
            What is your artist name on
            <a
              href="https://www.discogs.com/"
              target="_blank"
              class="gray-link underlined-text"
              >Discogs.com</a
            >? Please use the exact match. Example: Artist(XX)
          </p>
          <p class="base-form__description-text">
            If you do not have an artist page on Discogs or your name is already
            taken in our system, consider using a country code or other unique
            identifier in your name. Example: Artist(USA)
          </p>
        </b-col>

        <b-col
          v-if="!isPromoter"
          id="performer-select"
          cols="12"
          class="mb-5"
          no-gutters
          style="margin-top: 4px;"
          :class="
            !$v.form.producerName.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="field-box">
            <p class="mb-0 text-uppercase base-form__label-text">
              ARTIST NAME
            </p>
            <b-form-input
              v-model="$v.form.producerName.$model"
              class="w-100 px-0 base-form__input"
              type="text"
            ></b-form-input>
            <!-- <v-select

              @search="getPerformer"
              :options="[...perFormerData]"
              label="name"
              :value="[...perFormerData].name"
              v-model="form.producerName"
            ></v-select> -->
          </div>
          <div
            class="error mt-1"
            v-if="!$v.form.producerName.required && $v.form.producerName.$dirty"
          >
            Name is required.
          </div>
        </b-col>

        <b-col v-if="isPromoter" cols="12">
          <h4 class="base-form__title">
            Primary venue/festival/promotions company
          </h4>
        </b-col>

        <b-col
          v-if="isPromoter"
          id="primary-venue"
          cols="12"
          class="mt-3 mb-5"
          no-gutters
          style="margin-top: 4px;"
          :class="
            !$v.form.primaryVenue.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="field-box">
            <p class="mb-0 text-uppercase base-form__label-text">
              Name of Venue/Festival/Promotions Company
            </p>
            <b-form-input
              v-model="$v.form.primaryVenue.$model"
              class="w-100 px-0 base-form__input"
              type="text"
            ></b-form-input>
          </div>
          <div
            class="error mt-1"
            v-if="!$v.form.primaryVenue.required && $v.form.primaryVenue.$dirty"
          >
            Name is required.
          </div>
        </b-col>

        <b-col v-if="isPromoter" cols="12" no-gutters>
          <p class="mb-0 text-uppercase base-form__label-text">
            Additional Venue/Festival/Promotions Company Names
          </p>
          <b-form-tags
            v-model="$v.form.altVenues.$model"
            placeholder="Add venue..."
          ></b-form-tags>
        </b-col>

        <div class="d-flex flex-row">
          <img
            alt="Down Arrow"
            class="ml-2 mb-2 mt-4"
            src="@/assets/images/verification/down-arrow1.svg"
          />
        </div>
      </b-row>

      <b-row
        class="mt-1"
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row
        v-if="isPromoter"
        style="padding-left: 20px; padding-right: 20px; max-width: 524px"
      >
        <b-col cols="12">
          <h4 class="base-form__title">
            address of venue/festival/promotions company
          </h4>

          <b-row>
            <b-col cols="12">
              <b-form-checkbox v-model="sameAddress">
                <span style="position: relative; top: -2px; margin-left: 10px">
                  This is the same as the business address
                </span>
              </b-form-checkbox>
            </b-col>
            <b-col cols="12">
              <b-form-checkbox v-model="multipleAddresses">
                <span style="position: relative; top: -2px; margin-left: 10px">
                  We produce events at multiple locations
                </span>
              </b-form-checkbox>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.addressLine1.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="address1">
            <p class="mb-0 text-uppercase base-form__label-text">
              Venue Address Line 1
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="addressLine1"
              :disabled="skipAddress"
            ></b-form-input>
          </div>
          <div class="additional-information">
            Example:12345 North Street
          </div>
          <!-- <div
            class="error"
            v-if="
              !$v.form.addressLine1.required && $v.form.addressLine1.$dirty
            "
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col cols="12" class="mt-4">
          <div class="address2">
            <p class="mb-0 text-uppercase base-form__label-text">
              Venue Address Line 2
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="addressLine2"
              :disabled="skipAddress"
            ></b-form-input>
          </div>
          <div class="additional-information">
            Example:3rd Floor
          </div>
          <!-- <div
            class="error"
            v-if="
              !$v.form.addressLine2.required && $v.form.addressLine2.$dirty
            "
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.city.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="city">
            <p class="mb-0 text-uppercase base-form__label-text">City</p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="city"
              :disabled="skipAddress"
            ></b-form-input>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.city.required && $v.form.city.$dirty"
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.country.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="country" id="country-select">
            <p class="mb-0 text-uppercase base-form__label-text">Country</p>
            <v-select
              :options="[...allCountries]"
              label="name"
              class="base-form__input"
              :filter="filterCountry"
              :value="[...allCountries].name"
              :reduce="allCountries => allCountries.name"
              v-model="country"
              placeholder="Select Country"
              :disabled="skipAddress"
            ></v-select>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.country.required && $v.form.country.$dirty"
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.state.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="state">
            <p class="mb-0 text-uppercase base-form__label-text">
              State/Province/Region
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="state"
              :disabled="skipAddress"
            ></b-form-input>
          </div>
          <!-- <div
            class="error"
            v-if="!$v.form.state.required && $v.form.state.$dirty"
          >
            Field is required.
          </div> -->
        </b-col>
        <b-col
          cols="12"
          class="mt-4"
          :class="
            !$v.postalCode.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <div class="state">
            <p class="mb-0 text-uppercase base-form__label-text">
              Postal Code
            </p>
            <b-form-input
              class="w-100 px-0 base-form__input"
              type="text"
              v-model="postalCode"
              :disabled="skipAddress"
            ></b-form-input>
          </div>
          <div
            class="error"
            v-if="!$v.postalCode.required && $v.postalCode.$dirty"
          >
            Field is required.
          </div>
        </b-col>
        <img
          alt="Down Arrow"
          class="ml-2 mb-2 mt-4"
          src="@/assets/images/verification/down-arrow1.svg"
        />
      </b-row>
      <b-row
        v-else
        style="padding-left: 20px; padding-right: 20px; max-width: 808px"
        :class="{
          'js-error': !$v.status.notEmptyArray
        }"
      >
        <b-col
          cols="12"
          :class="
            !$v.status.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <h4 class="base-form__title">GENRE</h4>
          <p class="mt-4 base-form__description-text" style="max-width: 397px">
            Please select as many genres as you think describes your style.
          </p>

          <div
            class="position-relative mt-3 mb-5"
            :class="{
              'red-link': !$v.status.notEmptyArray,
              'gray-link': $v.status.notEmptyArray
            }"
          >
            (minimum of 1 is required)
          </div>

          <b-row style="margin-bottom: 60px;">
            <b-col cols="12">
              <b-row>
                <b-col v-for="genre of genres" :key="genre.id" sm="6">
                  <b-form-checkbox
                    :id="`checkbox-${genre.id}`"
                    v-model="$v.status.$model"
                    :name="`checkbox-${genre.id}`"
                    :value="genre.title"
                  >
                    <span
                      style="position: relative; top: -2px; margin-left: 10px"
                      >{{ genre.title }}</span
                    >
                  </b-form-checkbox>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <img
          alt="Down Arrow"
          class="ml-2 mb-2 mt-4"
          src="@/assets/images/verification/down-arrow1.svg"
        />
      </b-row>

      <b-row
        class="mt-1"
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <b-row
        style="padding-left: 20px; padding-right: 20px; max-width: 524px"
        :class="{
          'js-error': lengthOfFilledSocials < 2
        }"
      >
        <b-col cols="12">
          <h4 v-if="isPromoter" class="base-form__title">
            links for your venue/festival/promotions company
          </h4>
          <h4 v-else class="base-form__title">
            Identity links for music matching and profile building
          </h4>
          <p v-if="isPromoter" class="mt-4 base-form__description-text">
            Please fill out as many of the following links to your brand.
            <br />
            <br />
            <span
              :class="{
                'red-link': lengthOfFilledSocials < 2,
                'gray-link': !(lengthOfFilledSocials < 2)
              }"
              >(minimum of 2 is required)</span
            >
          </p>
          <p v-else class="mt-4 base-form__description-text">
            In order to verify music across multiple public sites and databases
            and build your artist profile we ask you to please fill in as many
            links as possible to assist us in accurate matches and guarantee
            future payouts.
            <br />
            <br />
            <span
              :class="{
                'red-link': lengthOfFilledSocials < 2,
                'gray-link': !(lengthOfFilledSocials < 2)
              }"
              >(minimum of 2 is required)</span
            >
          </p>
        </b-col>

        <b-col v-if="!isPromoter" class="mt-3" cols="12" no-gutters>
          <h4 class="base-form__title">Identity links</h4>
        </b-col>

        <!-- BANDCAMP -->
        <b-col
          v-if="!isPromoter"
          class="mt-4"
          cols="12"
          :class="
            $v.form.bandcamp.$dirty && !$v.form.bandcamp.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">Bandcamp</p>

          <b-form-input
            id="bandcampInput"
            v-model="$v.form.bandcamp.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.bandcamp.$touch()"
            @blur="resetIfInvalid($v.form.bandcamp)"
          ></b-form-input>

          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.bandcamp.correctUrlValidation && $v.form.bandcamp.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <!-- BEATPORT -->
        <b-col
          v-if="!isPromoter"
          class="mt-4"
          cols="12"
          :class="
            $v.form.beatport.$dirty && !$v.form.beatport.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">Beatport</p>
          <b-form-input
            id="beatportInput"
            v-model="$v.form.beatport.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.beatport.$touch()"
            @blur="resetIfInvalid($v.form.beatport)"
          ></b-form-input>
          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.beatport.correctUrlValidation && $v.form.beatport.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <!-- DISCOGS -->
        <b-col
          v-if="!isPromoter"
          class="mt-4"
          cols="12"
          :class="
            $v.form.discogs.$dirty && !$v.form.discogs.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">Discogs</p>
          <b-form-input
            id="discogsInput"
            v-model="$v.form.discogs.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.discogs.$touch()"
            @blur="resetIfInvalid($v.form.discogs)"
          ></b-form-input>
          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.discogs.correctUrlValidation && $v.form.discogs.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <!-- SoundCloud -->
        <b-col
          v-if="!isPromoter"
          class="mt-4"
          cols="12"
          :class="
            $v.form.soundCloud.$dirty && !$v.form.soundCloud.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">SoundCloud</p>
          <b-form-input
            id="soundCloudInput"
            v-model="$v.form.soundCloud.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.soundCloud.$touch()"
            @blur="resetIfInvalid($v.form.soundCloud)"
          ></b-form-input>
          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.soundCloud.correctUrlValidation &&
                $v.form.soundCloud.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <b-col
          v-if="!isPromoter"
          class="mt-4"
          cols="12"
          :class="
            $v.form.tracksource.$dirty && !$v.form.tracksource.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">Traxsource</p>
          <b-form-input
            id="tracksourceInput"
            v-model="$v.form.tracksource.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.tracksource.$touch()"
            @blur="resetIfInvalid($v.form.tracksource)"
          ></b-form-input>

          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.tracksource.correctUrlValidation &&
                $v.form.tracksource.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <b-col class="mt-5" cols="12">
          <h4 class="base-form__title">Social profile</h4>
        </b-col>

        <b-col
          class="mt-4"
          cols="12"
          :class="
            !$v.form.website.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">
            Website
          </p>
          <b-form-input
            id="facebookInput"
            v-model="$v.form.website.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.website.$touch()"
            @blur="resetIfInvalid($v.form.website)"
          ></b-form-input>

          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.website.correctUrlValidation && $v.form.website.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <b-col
          class="mt-4"
          cols="12"
          :class="
            !$v.form.facebook.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">
            Facebook{{ !isPromoter ? " Artist Page" : "" }}
          </p>
          <b-form-input
            id="facebookInput"
            v-model="$v.form.facebook.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.facebook.$touch()"
            @blur="resetIfInvalid($v.form.facebook)"
          ></b-form-input>

          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.facebook.correctUrlValidation && $v.form.facebook.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <b-col
          class="mt-4"
          cols="12"
          :class="
            !$v.form.instagram.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">Instagram</p>
          <b-form-input
            id="instagramInput"
            v-model="$v.form.instagram.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.instagram.$touch()"
            @blur="resetIfInvalid($v.form.instagram)"
          ></b-form-input>

          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.instagram.correctUrlValidation &&
                $v.form.instagram.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <b-col
          class="mt-4"
          cols="12"
          :class="
            !$v.form.advisor.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">
            Resident Advisor
          </p>
          <b-form-input
            id="advisorInput"
            v-model="$v.form.advisor.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.advisor.$touch()"
            @blur="resetIfInvalid($v.form.advisor)"
          ></b-form-input>
          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.advisor.correctUrlValidation && $v.form.advisor.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>

        <b-col
          class="mt-4"
          cols="12"
          :class="
            !$v.form.twitter.$invalid
              ? 'verify-process__badge active'
              : 'verify-process__badge'
          "
        >
          <p class="mb-0 text-uppercase base-form__label-text">Twitter</p>
          <b-form-input
            id="advisorInput"
            v-model="$v.form.twitter.$model"
            class="w-100 px-0 base-form__input"
            placeholder="Enter Link"
            type="text"
            @focus="$v.form.twitter.$touch()"
            @blur="resetIfInvalid($v.form.twitter)"
          ></b-form-input>
          <div
            class="error js-error position-relative mt-2"
            v-if="
              !$v.form.twitter.correctUrlValidation && $v.form.twitter.$dirty
            "
          >
            Please enter as url.
          </div>
        </b-col>
      </b-row>

      <b-row
        class="mt-5"
        style="background-color: #AAA3B1; height: 1px; margin-left: 0px"
      ></b-row>

      <verify-control-button
        class="my-4"
        style="padding-left: 20px;"
        hide-prev
        @click:next="validation"
        :disabled-next="isDisabledNext"
      />
    </b-col>
  </b-row>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapState } from "vuex";
import VerifyControlButton from "./VerifyControlButton";
import VerifyProcessController from "@/mixins/verify-process-controller";
import countries from "@/assets/countries";
import allGenres from "@/assets/genres";
import swal from "sweetalert2";

const notEmptyArray = value => !!value?.length;
const correctUrlValidation = value =>
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );

export default {
  name: "Process-2",
  mixins: [VerifyProcessController],
  components: {
    VerifyControlButton
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapGetters("user", ["isPromoter"]),
    roles() {
      return this?.data?.roles.map(role => role.name).join(",") || "";
    },
    watcherr() {
      let newbool = true;
      // if (this.duoORGroup) {
      //   newbool = false;
      // } else newbool = true;
      return newbool;
    },
    lengthOfFilledSocials() {
      // retailer: this.form.retailer,
      let socialArr = {
        bandcamp: this.form.bandcamp,
        beatport: this.form.beatport,
        discogs: this.form.discogs,
        soundCloud: this.form.soundCloud,
        tracksource: this.form.tracksource,
        facebook: this.form.facebook,
        instagram: this.form.instagram,
        advisor: this.form.advisor,
        twitter: this.form.twitter,
        website: this.form.website
      };
      const result = [];
      Object.keys(socialArr).forEach(element => {
        if (!this.$v.form[element].$invalid) {
          result.push(socialArr[element]);
        }
      });
      return result.length;
    },
    isDisabledNext() {
      const promoterValid =
        this.form.primaryVenue &&
        (this.multipleAddresses ||
          (this.addressLine1 &&
            this.city &&
            this.country &&
            this.state &&
            this.postalCode));
      const djProducerValid =
        (this.form.producerName || this.data.primeArtistName) &&
        this.status.length >= 1;
      const exclusiveValid = this.isPromoter ? promoterValid : djProducerValid;
      const commonValid = this.lengthOfFilledSocials >= 2;
      const valid = commonValid && exclusiveValid;
      return !valid;
    },
    skipAddress() {
      return this.sameAddress || this.multipleAddresses;
    }
  },
  data() {
    return {
      addingGroup: null,
      showGroupInput: false,
      // socialsArray: ["", "", "", "", "", ""],
      searchPerformer: "",
      // duoORGroup: false,
      form: {
        producerName: "",
        primaryVenue: "",
        altVenues: [],
        groups: [],
        accountType: "",
        bandcamp: "",
        beatport: "",
        discogs: "",
        soundCloud: "",
        tracksource: "",
        facebook: "",
        instagram: "",
        advisor: "",
        twitter: "",
        website: ""
      },
      sameAddress: false,
      multipleAddresses: false,
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      state: "",
      postalCode: "",
      status: [],
      genres: allGenres,
      allCountries: countries
    };
  },
  watch: {
    sameAddress(value) {
      if (value) {
        this.multipleAddresses = false;
      }

      this.addressLine1 = value ? this.data.addressLine1 : "";
      this.addressLine2 = value ? this.data.addressLine2 : "";
      this.city = value ? this.data.city : "";
      this.country = value ? this.data.country : "";
      this.state = value ? this.data.state : "";
      this.postalCode = value ? this.data.postalCode : "";
    },
    multipleAddresses(value) {
      if (value) {
        this.sameAddress = false;
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.city = "";
        this.country = "";
        this.state = "";
        this.postalCode = "";
      }
    }
  },
  validations() {
    let result = {
      status: {
        notEmptyArray
      },
      form: {
        groups: {
          required
        },
        producerName: {},
        primaryVenue: {},
        altVenues: {},
        accountType: {
          required
        },
        bandcamp: {
          correctUrlValidation
        },
        beatport: {
          correctUrlValidation
        },
        discogs: {
          correctUrlValidation
        },
        soundCloud: {
          correctUrlValidation
        },
        tracksource: {
          correctUrlValidation
        },
        facebook: {
          correctUrlValidation
        },
        instagram: {
          correctUrlValidation
        },
        advisor: {
          correctUrlValidation
        },
        twitter: {
          correctUrlValidation
        },
        website: {
          correctUrlValidation
        }
      }
    };

    if (this.isPromoter) {
      result = {
        ...result,
        form: {
          ...result.form,
          primaryVenue: {
            required
          }
        },
        addressLine1: {
          required
        },
        addressLine2: {},
        city: {
          required
        },
        country: {
          required
        },
        state: {
          required
        },
        postalCode: {
          required
        }
      };
    } else {
      result = {
        ...result,
        form: {
          ...result.form,
          producerName: {
            required
          }
        }
      };
    }

    return result;
  },
  async created() {
    if (this.data.primeArtistName) {
      this.form.producerName = this.data.primeArtistName;
    }
    if (this.data.genres && this.data.genres.length) {
      this.status = this.data.genres;
    }

    this.form.primaryVenue = this.data.primeVenueName || this.form.primaryVenue;
    this.form.altVenues =
      this.data.venues.filter(v => !v.isPrimary).map(v => v.name) ||
      this.form.altVenues;
    const primaryVenue = this.data.venues.find(v => v.isPrimary);
    const venueAddress = primaryVenue?.address;

    if (primaryVenue) {
      this.sameAddress = primaryVenue.sameAddress;
      this.multipleAddresses = primaryVenue.multipleAddresses;
    }

    if (venueAddress) {
      this.addressLine1 = venueAddress.addressLine1 || this.addressLine1;
      this.addressLine2 = venueAddress.addressLine2 || this.addressLine2;
      this.city = venueAddress.city || this.city;
      this.country = venueAddress.country || this.country;
      this.state = venueAddress.state || this.state;
      this.postalCode = venueAddress.postalCode || this.postalCode;
    }

    this.form.bandcamp =
      this.data.socials.find(s => s.type === "Bandcamp")?.link ||
      this.form.bandcamp;
    this.form.beatport =
      this.data.socials.find(s => s.type === "Beatport")?.link ||
      this.form.beatport;
    this.form.discogs =
      this.data.socials.find(s => s.type === "Discogs")?.link ||
      this.form.discogs;
    this.form.soundCloud =
      this.data.socials.find(s => s.type === "Soundcloud")?.link ||
      this.form.soundCloud;
    this.form.tracksource =
      this.data.socials.find(s => s.type === "Traxsource")?.link ||
      this.form.tracksource;
    this.form.facebook =
      this.data.socials.find(s => s.type === "Facebook")?.link ||
      this.form.facebook;
    this.form.instagram =
      this.data.socials.find(s => s.type === "Instagram")?.link ||
      this.form.instagram;
    this.form.advisor =
      this.data.socials.find(s => s.type === "Resident advisor")?.link ||
      this.form.advisor;
    this.form.twitter =
      this.data.socials.find(s => s.type === "Twitter")?.link ||
      this.form.twitter;
    this.form.website =
      this.data.socials.find(s => s.type === "Website")?.link ||
      this.form.website;
  },
  async mounted() {
    this.genres.sort((a, b) => (a.title > b.title ? 1 : -1));
    if (!localStorage.getItem("verificationStarted")) {
      localStorage.setItem("verificationStarted", 2);
    }
    if (
      localStorage.getItem("verificationStarted") &&
      localStorage.getItem("verificationStarted") < 2
    ) {
      localStorage.removeItem("verificationStarted");
      localStorage.setItem("verificationStarted", 2);
    }
    if (
      this.data &&
      this.data.roles &&
      this.data.roles.length > 0 &&
      this.data.roles[0].name
    ) {
      this.form.accountType = this.data.roles[0].name;
    } else {
      this.form.accountType = "";
    }
    await this.$nextTick();
    window.scrollTo(0, 0);
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    removeFromGroup(groupName) {
      this.form.groups.splice(
        this.form.groups.findIndex(g => g == groupName),
        1
      );
    },
    addGroup() {
      if (!this.showGroupInput) {
        this.showGroupInput = true;
      } else {
        if (!this.addingGroup) {
          swal.fire({
            icon: "error",
            text: "Please type any group name."
          });
          return;
        }
        const trimmedElement = this.addingGroup.trim();
        if (this.form.groups.length > 0) {
          if (this.form.groups.some(x => x == trimmedElement)) {
            swal.fire({
              icon: "error",
              text: `You already have ${trimmedElement} in group list.`
            });
            return;
          }
        }
        this.form.groups.push(trimmedElement);
        this.addingGroup = null;
      }
    },
    resetIfInvalid(field) {
      field.$invalid ? field.$reset() : null;
    },
    validateUrl(value) {
      return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        value
      );
    },
    async go(val, handler) {
      if (val > -1 && !this.$v.form.accountType.$invalid) {
        let payload = {
          roles: [],
          primeArtistName: null,
          socials: []
        };
        if (
          !this.isPromoter &&
          !this.form.producerName &&
          !this.data.primeArtistName
        ) {
          swal.fire({
            icon: "error",
            text: 'Please fill "Primary DJ or Producer Name" field',
            onClose: handler
          });
          return;
        }
        if (!this.isPromoter && this.status.length < 1) {
          swal.fire({
            icon: "error",
            text: "Please select at least 1 genre",
            onClose: handler
          });
          return;
        }
        if (this.lengthOfFilledSocials < 2) {
          swal.fire({
            icon: "error",
            text: "Please fill at least 2 social links",
            onClose: handler
          });
          return;
        }
        payload.roles = [this.form.accountType];
        payload.primeArtistName = this.form.producerName;

        if (this.isPromoter) {
          payload.primeVenueName = this.form.primaryVenue;
          payload.venues = this.form.altVenues;
          payload.venueAddress = {
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            city: this.city,
            country: this.country,
            state: this.state,
            postalCode: this.postalCode,
            sameAddress: this.sameAddress,
            multipleAddresses: this.multipleAddresses
          };
        } else {
          payload.genres = this.status;
        }
        // { type: "Online retailer", link: this.form.retailer },
        payload.socials = [
          { type: "Website", link: this.form.website },
          { type: "Facebook", link: this.form.facebook },
          { type: "Discogs", link: this.form.discogs },
          { type: "Resident advisor", link: this.form.advisor },
          { type: "Soundcloud", link: this.form.soundCloud },
          { type: "Instagram", link: this.form.instagram },
          { type: "Twitter", link: this.form.twitter },
          { type: "Bandcamp", link: this.form.bandcamp },
          { type: "Beatport", link: this.form.beatport },
          { type: "Tracksource", link: this.form.tracksource }
        ];
        payload.socials = payload.socials.filter(x => x.link !== "");
        for (const social of payload.socials) {
          if (social.link !== null || social.link !== "") {
            if (!this.validateUrl(social.link)) {
              swal.fire({
                icon: "error",
                text: `${social.link} is incorrect for ${social.type}`
              });
              break;
            }
          }
        }
        if (!payload.primeArtistName || this.data.primeArtistName !== null) {
          delete payload.primeArtistName;
        }
        await this.updateUser({ newData: payload, user: this.data });
        this.$store.commit("verifySteps/registrationStepTwoSocials", this.form);
      } else {
        this.$store.dispatch("user/setCurrentTabComponent", val);
      }
    },

    validation(val) {
      this.$v.form.producerName.$touch();
      const handleScrolling = () => {
        setTimeout(() => {
          const pos =
            window.pageYOffset +
            this.$el.querySelector(".js-error").getBoundingClientRect().top;
          console.log(this.$el.querySelector(".js-error"), pos);
          window.scrollTo({ top: pos, behavior: "smooth" });
        }, 300);
      };
      this.go(val, handleScrolling);
    },
    filterCountry(options, search) {
      const toLowerSearch = search.toLowerCase();
      return options.filter(x =>
        (x.name || "").toLowerCase().startsWith(toLowerSearch)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.circle-one {
  margin-top: 100px;
}

.circle-two {
  margin-bottom: 205px;
}

#performer-select .vs__search {
  border-bottom: 0 !important;
  padding: 5px !important;
}

#performer-select .vs__dropdown-toggle {
  border: none !important;
  border-radius: 0 !important;
  border-bottom: 1px solid #c4c4c4 !important;
}

.duo-or-group {
  margin-top: 18px;
  margin-bottom: 3px;
}

.red-link {
  font-size: 12px;
  color: #e32d26 !important;
}

.gray-link {
  color: #75707b !important;
}

.max99 {
  max-width: 99px;
  min-width: 99px;
}

@media screen and (max-width: 768px) {
  .max99 {
    max-width: 65px;
    min-width: 65px;
  }
}

.input-group-text {
  color: #000;
}

.performer-group-wrapper {
  min-height: 25px;
}

.process2 .circle-two .round:last-child {
  margin-top: 55px;
}

.process2 .circle-two .round:nth-child(6) {
  margin-top: 135px;
}

.process2 .circle-two .round:nth-child(5) {
  margin-top: 50px;
}

.process2 .circle-two .round:nth-child(3) {
  margin-top: 55px;
}

::v-deep .custom-control-label {
  &:after {
    top: 7px;
    left: -17px;
  }
}

::v-deep .vs__selected-options {
  padding: 0 20px !important;
}

::v-deep .vs__dropdown-toggle {
  min-height: 30px;
}

input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #aaa3b1;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #aaa3b1;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #aaa3b1;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #aaa3b1;
}
</style>
