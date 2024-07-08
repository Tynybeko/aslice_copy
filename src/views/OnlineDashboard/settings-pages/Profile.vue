<template>
  <div class="col-xl-10 col-9 px-0 settings-content">
    <AliasModal
      v-if="showAliasModal"
      @onClose="
        willCreateGroup
          ? handleRedirectToCreateGroup()
          : handleCloseAliasModal($event)
      "
    />

    <b-modal
      id="delete-account-popup"
      content-class="complicated-modal"
      hide-header
      hide-footer
      body-class="modal-hide-paddings"
      aria-expanded="true"
    >
      <!-- @submit="sendInvitation" -->
      <div class="complicated-modal__close-button-wrapper">
        <svg
          @click="closeDeleteModal"
          class="complicated-modal__close-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0504 1.12351L14.3769 0.450079L7.64258 7.18443L0.908229 0.450078L0.234794 1.12351L6.96914 7.85786L0.234793 14.5922L0.908228 15.2656L7.64258 8.5313L14.3769 15.2656L15.0504 14.5922L8.31601 7.85786L15.0504 1.12351Z"
            fill="#442671"
          />
        </svg>
      </div>

      <div class="complicated-modal__item complicated-modal-mt">
        <h1 class="complicated-modal__title">Delete Account</h1>
      </div>
      <b-form class="performer-form" autocomplete="off">
        <div class="delete-account-step-one" v-if="deletingStepOne">
          <article class="pop-up-article complicated-modal__item">
            We hate to see you go. Please take a minute to let us know why
            you’re leaving.
          </article>
          <div class="complicated-modal__item">
            <div class="checkboxes-wrapper w-100">
              <b-col
                sm="12"
                v-for="question of deletingQuestion"
                :key="question.id"
              >
                <b-form-checkbox
                  v-model="deletingStatus"
                  :id="`checkbox-${question.id}`"
                  :name="`checkbox-${question.id}`"
                  :value="question"
                >
                  <span class="question-title">{{ question.title }}</span>
                </b-form-checkbox>
              </b-col>
              <textarea
                class="deleting-answer"
                name="deleting-answer"
                id="deleting-answer"
                v-model="reasonForDeletion"
                :disabled="!deletingStatus.find(item => item.id === 3)"
              ></textarea>
            </div>
          </div>
          <div
            class="complicated-modal__item--small complicated-modal-py-medium complicated-modal-mt-large complicated-modal__footer"
          >
            <div
              class="btn-default--without-fill complicated-modal-ml-auto"
              @click="deletingStepOne = !deletingStepOne"
            >
              Skip
            </div>
            <div
              class="btn-default"
              @click="deletingStepOne = !deletingStepOne"
            >
              Next
            </div>
          </div>
        </div>
        <div class="delete-account-step-two" v-else>
          <article
            class="pop-up-article complicated-modal__item complicated-modal-mt"
          >
            Deleting your account is permanent. All of your information will be
            removed from our database and the email associated with this account
            will be blocked from registering again. Any balance in your account
            will be sent to your PayPal within 30 days. Any earnings generated
            in the future will be donated to The Aslice Foundation.
          </article>
          <div
            class="complicated-modal__item--small complicated-modal-py-medium complicated-modal-mt-large complicated-modal__footer"
          >
            <div
              class="btn-default--without-fill complicated-modal-ml-auto"
              @click="closeDeleteModal"
            >
              Cancel
            </div>
            <div class="btn-default" @click="deleteAccount">
              Delete
            </div>
          </div>
        </div>
      </b-form>
    </b-modal>

    <div class="row mx-0 py-4">
      <div
        class="pl-4 pr-3 image-wrapper"
        style="min-width: 135px;max-width: 135px;"
      >
        <img
          class="profileAvatar"
          v-if="userCopy.avatar"
          :src="
            userCopy.avatar instanceof mapInstances.get('File')
              ? ''
              : $aslice.getImage(userCopy.avatar)
          "
          alt=""
          @click="
            $refs['file-input'].$el.querySelector(`[type='file']`).click()
          "
        />
        <svg
          v-else
          style="cursor: pointer;"
          width="100px"
          height="100px"
          viewBox="0 0 60 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="
            $refs['file-input'].$el.querySelector(`[type='file']`).click()
          "
        >
          <circle cx="30" cy="30.7764" r="30" fill="#442671" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 27.3613C33.3137 27.3613 36 24.675 36 21.3613C36 18.0476 33.3137 15.3613 30 15.3613C26.6862 15.3613 24 18.0476 24 21.3613C24 24.675 26.6862 27.3613 30 27.3613ZM24 29.7615C20.6863 29.7615 18 32.4478 18 35.7615V41.7615H42V35.7615C42 32.4478 39.3137 29.7615 36 29.7615H24Z"
            fill="#F2F1EF"
          />
          <circle
            cx="41.1757"
            cy="40.8043"
            r="5.02356"
            fill="#F2F1EF"
            stroke="#442671"
          />
          <path d="M41.1755 43.3308L41.1755 38.278" stroke="#442671" />
          <path d="M38.6565 40.8043H43.6948" stroke="#442671" />
        </svg>

        <b-form-file
          style="display: none;"
          id="photo"
          v-model="avatarFile"
          @change="onFileChange"
          ref="file-input"
          placeholder="Photo"
          class="mb-2"
          accept=".jpg, .png, .jpeg, .webp"
        ></b-form-file>
      </div>
      <div class="col-8 pl-0 input-wrapper" style="padding-left: 0;">
        <div class="row mx-0">
          <div class="col-12 px-0">
            <h4 v-if="userCopy.primeArtistName" class="profile-settings-title">
              {{ userCopy.primeArtistName }}
            </h4>
            <h4
              v-else-if="userCopy.firstName && userCopy.lastName"
              class="profile-settings-title"
            >
              {{ userCopy.firstName }} {{ userCopy.lastName }}
            </h4>
          </div>
          <div class="col-4 pl-0">
            <p class="navbar-text navbar-asliceIdTitle">ASLICE ID:</p>
            <p
              class="navbar-text navbar-asliceidtext"
              style="margin-bottom: 9px;"
            >
              {{ userCopy.asliceId }}
            </p>
            <button v-b-modal.delete-account-popup class="delete-account">
              Delete Account
            </button>
          </div>
          <div class="col-7 pl-0">
            <p
              class="navbar-text navbar-asliceIdTitle"
              style="text-transform: uppercase;"
            >
              Verification status:
            </p>
            <p
              class="navbar-text navbar-asliceidtext"
              style="margin-bottom: 9px; text-transform: uppercase;"
              :style="!userCopy.verified ? 'color: #E32D26' : ''"
            >
              <span v-if="!userCopy.verified">In Process</span>
              <span v-else>Verified</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mx-0 pb-4">
      <div class="col-12">
        <div class="row">
          <div class="col-7 px-4">
            <h4 class="base-form__title">
              CONTACT INFO
            </h4>
            <div class="form-group" style="position: relative;">
              <label class="label-text">Email</label>
              <span
                v-if="!availableChangeEmail"
                style="cursor: pointer; z-index: 5;"
                class="underlined-text color-purple"
                @click="startEditinEmail"
                >Edit</span
              >
              <span
                v-else
                style="cursor: pointer; z-index: 5;"
                class="underlined-text color-purple"
              >
                <span @click="changeUsersEmail">Save changes</span> /
                <span @click="cancelEditingEmail">Cancel</span></span
              >
              <input
                v-model="userCopy.email"
                id="email"
                type="text"
                class="form-control pink-color"
                :style="
                  availableChangeEmail
                    ? `border-color: #31BCB2!important`
                    : `border-color: #75707b`
                "
                :disabled="!availableChangeEmail"
              />
            </div>
            <div
              v-if="userCopy && !isPromoter"
              class="form-group aliases"
              style="position: relative;"
            >
              <div class="duo-or-group-name">
                <p class="mb-2 label-text">Alias</p>
                <div class="group-wrapper">
                  <span
                    style="cursor: pointer; z-index: 5;"
                    class="underlined-text color-purple group-wrapper__create-button"
                    @click="addAlias"
                    >Add</span
                  >
                  <p class="group-wrapper__description">
                    Any updates to alias will require re-verification.
                  </p>
                  <span
                    v-for="performer in userCopy.performers"
                    :class="[
                      'group-badge group-badge-alias',
                      getGroupClass(performer.status)
                    ]"
                    :key="performer.id"
                  >
                    {{ performer.name }}
                  </span>
                  <span v-if="showAliasInput" class="adding-member-of-group">
                    <b-form-input
                      class="w-100 px-0"
                      type="text"
                      v-model="addingPerformer"
                    ></b-form-input>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="form-group aliases groups"
              v-if="userCopy && !isPromoter"
              style="position: relative;"
            >
              <div class="duo-or-group-name mt-4">
                <p class="mb-2 label-text">
                  Group Name (Click Group Name To Edit)
                </p>
                <div class="group-wrapper">
                  <span
                    v-show="
                      userCopy.roles.find(role => role.name === 'producer') &&
                        userCopy.verified
                    "
                    style="cursor: pointer; z-index: 5;"
                    class="underlined-text color-purple group-wrapper__create-button"
                    @click="handleCreateGroup"
                    >Create</span
                  >
                  <p class="group-wrapper__description">
                    Any updates to group list will require re-verification.
                  </p>
                  <span
                    v-for="group in userCopy.groupMemberships"
                    :class="['group-badge', getGroupClass(group.group.status)]"
                    :key="group.id"
                    @click="
                      $router.push({
                        name: 'Groups',
                        params: { id: group.group.id }
                      })
                    "
                  >
                    {{ group.group.name }}
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group" style="position: relative;">
              <label class="label-text">Password</label>
              <input
                v-model="oldPassword"
                type="password"
                autocomplete="on"
                class="form-control"
                :disabled="!passwordEditing"
                @input="UPDATE_USER_COPY({ oldPassword: $event.target.value })"
              />
              <span
                class="underlined-text color-purple"
                v-if="!passwordEditing"
                @click="startEditingPassword"
                >Edit</span
              >
              <span
                class="underlined-text color-purple"
                v-else
                @click="cancelEditingPassword"
                >Cancel</span
              >
            </div>
            <form
              autocomplete="off"
              class="form-group new-pass"
              v-if="passwordEditing"
              style="position: relative; margin-bottom: 5px!important;"
            >
              <label class="label-text">New Password</label>
              <input
                v-model="newPassword"
                class="form-control"
                :type="!showPassword ? 'password' : 'text'"
                :class="{
                  attention: passwordEditing
                }"
                autocomplete="new-password"
                @input="validatePassword($event)"
              />
              <password v-model="newPassword" :strength-meter-only="true" />
              <svg
                style="position: absolute; top: 25px; right: 10px; cursor: pointer;"
                @click="showPassword = !showPassword"
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                />
              </svg>
              <svg
                style="position: absolute; top: 25px; right: 10px; cursor: pointer;"
                v-if="showPassword"
                @click="showPassword = !showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"
                />
              </svg>
            </form>
            <div class="password-editing-tips" v-if="passwordEditing">
              <div
                :class="lowerCaseExist ? 'green-text' : ''"
                class="additional-information"
              >
                One lowercase letter required.
              </div>
              <div
                :class="upperCaseExist ? 'green-text' : ''"
                class="additional-information"
              >
                One uppercase letter required.
              </div>
              <div
                :class="newPassword.length >= 8 ? 'green-text' : ''"
                class="additional-information"
              >
                8 characters minimum.
              </div>
              <div
                :class="numberExist ? 'green-text' : ''"
                class="additional-information"
              >
                One number required.
              </div>
            </div>
            <form
              autocomplete="off"
              class="form-group new-pass"
              v-if="passwordEditing"
            >
              <label class="label-text">Verify New Password</label>
              <input
                v-model="newPasswordVerify"
                type="password"
                autocomplete="new-password"
                class="form-control"
                :class="{
                  attention: passwordEditing
                }"
                @input="
                  UPDATE_USER_COPY({ newPasswordVerify: $event.target.value })
                "
              />
            </form>
            <div
              class="form-group field-badge"
              :class="{
                'field-badge_yellow': !!!userCopy.firstName,
                'field-badge_green': !!userCopy.firstName
              }"
            >
              <label class="label-text">First Name</label>
              <input
                v-model="userCopy.firstName"
                id="first-name"
                type="text"
                class="form-control pink-color"
                :disabled="!!userCopy.firstName"
              />
            </div>
            <div
              class="form-group field-badge"
              :class="{
                'field-badge_yellow': !!!userCopy.lastName,
                'field-badge_green': !!userCopy.lastName
              }"
            >
              <label class="label-text">Last Name</label>
              <input
                v-model="userCopy.lastName"
                id="last-name"
                type="text"
                class="form-control pink-color"
                :disabled="!!userCopy.lastName"
              />
            </div>
            <div
              v-if="isPromoter"
              class="form-group field-badge"
              :class="{
                'field-badge_yellow': !!!userCopy.roleInCompany,
                'field-badge_green': !!userCopy.roleInCompany
              }"
            >
              <label class="label-text">Title/Position/Role</label>
              <input
                v-model="userCopy.roleInCompany"
                id="role"
                type="text"
                class="form-control pink-color"
                :disabled="!!userCopy.roleInCompany"
                @input="
                  UPDATE_USER_COPY({ roleInCompany: $event.target.value })
                "
              />
            </div>
          </div>
        </div>
        <div class="d-flex flex-row">
          <img
            class="profile__arrow"
            alt="Down Arrow"
            src="@/assets/images/verification/down-arrow1.svg"
          />
        </div>
        <hr />
        <div class="row">
          <div class="col-7 px-4">
            <h4 v-if="isPromoter" class="base-form__title">
              Company information
            </h4>
            <div
              v-if="isPromoter"
              class="form-group field-badge"
              :class="{
                'field-badge_yellow': !!!userCopy.companyName,
                'field-badge_green': !!userCopy.companyName
              }"
            >
              <label class="label-text">Company Name</label>
              <input
                v-model="userCopy.companyName"
                id="company-name"
                type="text"
                class="form-control pink-color"
                :disabled="!!userCopy.companyName"
                @input="UPDATE_USER_COPY({ companyName: $event.target.value })"
              />
            </div>
            <div class="form-group">
              <label class="label-text">
                {{ isPromoter ? "Company" : "" }} Address Line 1
              </label>
              <input
                v-model="userCopy.addressLine1"
                type="text"
                class="form-control"
                id="address1"
                disabled
                @input="UPDATE_USER_COPY({ addressLine1: $event.target.value })"
              />
              <div class="additional-information">
                Example:12345 North Street
              </div>
            </div>
            <div class="form-group">
              <label class="label-text">
                {{ isPromoter ? "Company" : "" }} Address Line 2
              </label>
              <input
                v-model="userCopy.addressLine2"
                type="text"
                class="form-control"
                id="address2"
                disabled
                @input="UPDATE_USER_COPY({ addressLine2: $event.target.value })"
              />
              <div class="additional-information">
                Example:3rd Floor
              </div>
            </div>
            <div class="form-group">
              <label class="label-text">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                v-model="userCopy.city"
                placeholder=""
                disabled
                @input="UPDATE_USER_COPY({ city: $event.target.value })"
              />
            </div>
            <div class="form-group country">
              <label class="label-text">Country</label>
              <v-select
                :value="userCopy.country || ''"
                label="name"
                style="margin-bottom: 15px; margin-top: 10px;"
                placeholder=""
                :clearable="false"
                :filter="filterCountry"
                :options="allCountries"
                :reduce="allCountries => allCountries.name"
                disabled
                @option:selected="UPDATE_USER_COPY({ country: $event.name })"
              >
                <template #open-indicator="{ attributes }">
                  <img
                    v-bind="attributes"
                    src="@/assets/images/arrow-playlist-optionsOne.svg"
                  />
                </template>
              </v-select>
            </div>
            <div class="row">
              <div class="col-7">
                <div class="form-group">
                  <label class="label-text">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="state"
                    v-model="userCopy.state"
                    placeholder=""
                    disabled
                    @input="UPDATE_USER_COPY({ state: $event.target.value })"
                  />
                </div>
              </div>
              <div class="col-5">
                <div class="form-group">
                  <label class="label-text">Postal Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="postcode"
                    v-model="userCopy.postalCode"
                    placeholder=""
                    disabled
                    @input="
                      UPDATE_USER_COPY({ postalCode: $event.target.value })
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row" v-if="isPromoter">
          <img
            class="profile__arrow"
            alt="Down Arrow"
            src="@/assets/images/verification/down-arrow1.svg"
          />
        </div>
        <hr v-if="isPromoter" />
        <div class="row">
          <div class="col-7 px-4">
            <h4 v-if="isPromoter" class="base-form__title d-none">
              Primary venue/festival/promotions company
            </h4>
            <div v-if="isPromoter" class="form-group field-badge d-none">
              <label class="label-text">
                Name of Venue/Festival/Promotions Company
              </label>
              <input
                v-model="userCopy.primeVenueName"
                id="primary-venue"
                type="text"
                class="form-control pink-color"
                disabled
                @input="
                  UPDATE_USER_COPY({ primeVenueName: $event.target.value })
                "
              />
            </div>
            <div v-if="isPromoter" class="form-group field-badge d-none">
              <label class="label-text">
                Additional Venue/Festival/Promotions Company Names
              </label>
              <b-form-tags
                :value="
                  userCopy.venues.filter(v => !v.isPrimary).map(v => v.name)
                "
                placeholder="Add venue..."
                @input="
                  UPDATE_USER_COPY({
                    venues: $event.map(v => ({ isPrimary: false, name: v }))
                  })
                "
              ></b-form-tags>
            </div>
            <h4 v-if="isPromoter" class="base-form__title">
              Primary venue/festival/promotions company
            </h4>
            <div v-if="isPromoter" class="form-group field-badge">
              <label class="label-text"
                >Name of venue/Festival/promotions company</label
              >
              <input
                v-model="userCopy.primeVenueName"
                id="company-name"
                type="text"
                class="form-control pink-color"
                :disabled="!!userCopy.primeVenueName"
              />
            </div>
            <h4 v-if="isPromoter" class="base-form__title">
              Additional Venue/Festival/Promotions Company Names
            </h4>
            <div
              v-if="isPromoter"
              class="form-group aliases"
              style="position: relative;"
            >
              <div class="duo-or-group-name">
                <div class="group-wrapper">
                  <span
                    style="cursor: pointer; z-index: 5;"
                    class="underlined-text color-purple group-wrapper__create-button"
                    @click="addVenue"
                  >
                    Add
                  </span>
                  <p class="group-wrapper__description">
                    Any updates to venues will require re-verification.
                  </p>
                  <span
                    v-for="venue in userCopy.venues"
                    :class="['group-badge group-badge__promoter']"
                    :key="venue.id"
                  >
                    {{ venue.name }}
                  </span>
                  <span v-if="showVenueInput" class="adding-member-of-group">
                    <b-form-input
                      class="w-100 px-0"
                      type="text"
                      v-model="addingVenue"
                    ></b-form-input>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row" v-if="isPromoter">
          <img
            class="profile__arrow"
            alt="Down Arrow"
            src="@/assets/images/verification/down-arrow1.svg"
          />
        </div>
        <hr v-if="isPromoter" />
        <div class="row">
          <div class="col-7 px-4">
            <h4 v-if="isPromoter" class="base-form__title">
              address of venue/festival/promotions company
            </h4>
            <b-row v-if="isPromoter">
              <b-col cols="12">
                <b-form-checkbox v-model="primaryVenue.sameAddress" disabled>
                  <span
                    style="position: relative; top: -2px; margin-left: 10px"
                  >
                    This is the same as the business address
                  </span>
                </b-form-checkbox>
              </b-col>
              <b-col cols="12">
                <b-form-checkbox
                  v-model="primaryVenue.multipleAddresses"
                  disabled
                >
                  <span
                    style="position: relative; top: -2px; margin-left: 10px"
                  >
                    We produce events at multiple locations
                  </span>
                </b-form-checkbox>
              </b-col>
            </b-row>
            <template v-if="isPromoter">
              <div class="form-group">
                <label class="label-text">
                  Venue Address Line 1
                </label>
                <input
                  v-model="venueAddress.addressLine1"
                  type="text"
                  class="form-control"
                  id="venue-address1"
                  disabled
                  @input="
                    UPDATE_USER_COPY({ venueAddressLine1: $event.target.value })
                  "
                />
                <div class="additional-information">
                  Example:12345 North Street
                </div>
              </div>
              <div class="form-group">
                <label class="label-text">
                  Venue Address Line 2
                </label>
                <input
                  v-model="venueAddress.addressLine2"
                  type="text"
                  class="form-control"
                  id="venue-address2"
                  disabled
                  @input="
                    UPDATE_USER_COPY({ venueAddressLine2: $event.target.value })
                  "
                />
                <div class="additional-information">
                  Example:3rd Floor
                </div>
              </div>
              <div class="form-group">
                <label class="label-text">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="venue-city"
                  v-model="venueAddress.city"
                  placeholder=""
                  disabled
                  @input="UPDATE_USER_COPY({ venueCity: $event.target.value })"
                />
              </div>
              <div class="form-group country">
                <label class="label-text">Country</label>
                <v-select
                  :value="venueAddress.country"
                  label="name"
                  style="margin-bottom: 15px; margin-top: 10px;"
                  placeholder=""
                  :clearable="false"
                  :filter="filterCountry"
                  :options="allCountries"
                  :reduce="allCountries => allCountries.name"
                  disabled
                  @option:selected="
                    UPDATE_USER_COPY({ venueCountry: $event.name })
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
              <div class="row">
                <div class="col-7">
                  <div class="form-group">
                    <label class="label-text">State</label>
                    <input
                      type="text"
                      class="form-control"
                      id="venue-state"
                      v-model="venueAddress.state"
                      placeholder=""
                      disabled
                      @input="
                        UPDATE_USER_COPY({ venueState: $event.target.value })
                      "
                    />
                  </div>
                </div>
                <div class="col-5">
                  <div class="form-group">
                    <label class="label-text">Postal Code</label>
                    <input
                      type="text"
                      class="form-control"
                      id="venue-postcode"
                      v-model="venueAddress.postalCode"
                      placeholder=""
                      disabled
                      @input="
                        UPDATE_USER_COPY({
                          venuePostalCode: $event.target.value
                        })
                      "
                    />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <AppModal
      v-if="showCheckEmailModal"
      closeIcon
      title="Please Check Your Email For Final Step"
      :description="
        `
        You will receive an email with a link to confirm this change.
        Your new email address will not work until you complete this final step.
      `
      "
      @onClose="showCheckEmailModal = false"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { errorHandler } from "@/utils/errorHandler";
import { mapInstances } from "@/utils/instances";
import { readFile } from "@/utils/files";

import swal from "sweetalert2";
import api from "@/service/api";

import Password from "vue-password-strength-meter";
import AliasModal from "@/components/AliasModal";
import AppModal from "@/components/AppModal";

import countries from "@/assets/countries";

const GROUP_CLASSES = {
  pending: "group-badge_yellow",
  approved: "group-badge_green"
};

export default {
  name: "Profile",
  components: {
    Password,
    AliasModal,
    AppModal
  },
  data() {
    return {
      mapInstances: mapInstances,

      avatarFile: [],
      showAliasModal: false,
      willCreateGroup: false,

      reasonForDeletion: "",
      deletingStepOne: true,
      deletingStatus: [],
      deletingQuestion: [
        { id: 0, title: "I don't use it often" },
        { id: 1, title: "Something is broken" },
        { id: 2, title: "The service is not useful" },
        { id: 3, title: "Other, please specify:" }
      ],

      availableChangeEmail: false,
      showCheckEmailModal: false,
      untouchedEmail: null,

      isAliasChanges: true,
      isVenueChanges: true,
      addingPerformer: null,
      addingVenue: null,
      showAliasInput: false,
      showVenueInput: false,

      allCountries: countries,

      oldPassword: "",
      newPassword: "",
      newPasswordVerify: "",
      showPassword: false,
      passwordEditing: false,

      upperCaseExist: false,
      lowerCaseExist: false,
      numberExist: false,

      postalCode: "+1",
      sameAddress: false,
      multipleAddresses: false
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
      userCopy: "getUserCopy"
    }),
    primaryVenue() {
      return this.userCopy.venues.find(v => v.isPrimary);
    },
    ...mapGetters("user", ["isPromoter"]),
    venueAddress() {
      return this.primaryVenue.address;
    }
  },
  methods: {
    ...mapActions("user", ["updateUser", "updateProfileAvatar"]),
    ...mapMutations("user", ["UPDATE_USER_COPY"]),
    readFile: readFile,
    async onFileChange(ev) {
      this.userCopy.avatar = ev.target.files[0];
      const fd = new FormData();
      fd.append("avatarFile", ev.target.files[0]);
      await this.updateProfileAvatar(fd);
    },

    async deleteAccount() {
      const payload = this.deletingStatus
        .sort((item1, item2) => item1.id < item2.id)
        .map(item => item.title)
        .join("; ")
        .concat(" " + this.reasonForDeletion);

      swal.showLoading();
      const response = await api.deleteAsliceAccount(this.userCopy.id, payload);
      errorHandler(response, () => {
        this.closeDeleteModal();
        this.$store.commit("user/LOGOUT");
        this.$store.commit("djdashboard/clearAllData");
        swal.close();
      });
    },
    doSmth(a) {
      for (var q = 1, i = 1; q < a.length; ++q) {
        if (a[q] !== a[q - 1]) {
          a[i++] = a[q];
        }
      }

      a.length = i;
      return a;
    },
    closeDeleteModal() {
      this.$bvModal.hide("delete-account-popup");
      setTimeout(() => {
        this.deletingStepOne = true;
      }, 300);
    },

    cancelEditingEmail() {
      this.userCopy.email = JSON.parse(JSON.stringify(this.untouchedEmail));
      this.availableChangeEmail = false;
    },
    startEditinEmail() {
      this.availableChangeEmail = true;
      this.untouchedEmail = JSON.parse(JSON.stringify(this.userCopy.email));
    },
    async changeUsersEmail() {
      const payload = {
        userId: this.userCopy.id,
        email: this.userCopy.email
      };
      const response = await api.changeEmail(payload);
      errorHandler(response, () => {
        this.showCheckEmailModal = true;
        this.cancelEditingEmail();
      });
    },

    addAlias() {
      if (!this.showAliasInput) {
        this.showAliasInput = true;
      } else {
        if (!this.addingPerformer) {
          swal.fire({
            icon: "error",
            text: "Please type any alias name."
          });
          return;
        }
        const trimmedElement = this.addingPerformer.trim();
        if (this.userCopy.performers.length > 0) {
          if (
            this.userCopy.performers.some(({ name }) => name === trimmedElement)
          ) {
            swal.fire({
              icon: "error",
              text: `You already have ${trimmedElement} in alias list.`
            });
            return;
          }
        }
        this.userCopy.performers.push({
          id: Date.now(),
          name: trimmedElement,
          status: "pending"
        });
        this.UPDATE_USER_COPY({
          performers: this.userCopy.performers
        });
        this.isAliasChanges = true;
        this.addingPerformer = null;
        this.showAliasInput = false;
      }
    },

    addVenue() {
      if (!this.showVenueInput) {
        this.showVenueInput = true;
      } else {
        if (!this.addingVenue) {
          swal.fire({
            icon: "error",
            text: "Please type any venue name."
          });
          return;
        }
        const trimmedElement = this.addingVenue.trim();
        if (this.userCopy.venues.length > 0) {
          if (
            this.userCopy.venues.some(({ name }) => name === trimmedElement)
          ) {
            swal.fire({
              icon: "error",
              text: `You already have ${trimmedElement} in venue list.`
            });
            return;
          }
        }
        this.userCopy.venues.push({
          id: Date.now(),
          isPrimary: false,
          name: trimmedElement,
          status: "Pending"
        });
        this.UPDATE_USER_COPY({
          venues: this.userCopy.venues
        });
        this.isVenueChanges = true;
        this.addingVenue = null;
        this.showVenueInput = false;
      }
    },

    getGroupClass(status) {
      return GROUP_CLASSES[status?.toLowerCase()] || "";
    },
    handleCreateGroup() {
      this.willCreateGroup = true;
      this.showAliasModal = true;
    },
    handleRedirectToCreateGroup() {
      this.willCreateGroup = false;
      this.showAliasModal = false;
      this.$router.push({ name: "Groups" });
    },

    startEditingPassword() {
      this.newPassword = "";
      this.passwordEditing = true;
      this.lowerCaseExist = false;
      this.upperCaseExist = false;
      this.numberExist = false;
    },
    cancelEditingPassword() {
      this.oldPassword = "";
      this.newPassword = "";
      this.passwordEditing = false;
      this.lowerCaseExist = false;
      this.upperCaseExist = false;
      this.numberExist = false;
    },
    validatePassword(event) {
      const evt = event.target.value;
      const isNotEmpty = evt && evt.length > 0;
      this.upperCaseExist = isNotEmpty && /[A-Z]/.test(evt);
      this.lowerCaseExist = isNotEmpty && /[a-z]/.test(evt);
      this.numberExist = isNotEmpty && /\d/.test(evt);
      this.UPDATE_USER_COPY({ newPassword: evt });
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
hr {
  margin-left: -15px;
  margin-right: -15px;
  border-top: 1px solid #aaa3b1;
}

.profile {
  &__arrow {
    margin-left: -10px;
  }
}

.profile-settings-title {
  color: #442671;
  font-family: "Roboto-Mono";
  font-size: 24px;
  line-height: 16px;
  margin: 0;
  margin-bottom: 15px;
}

.profileAvatar {
  cursor: pointer;
  max-width: 100px;
  width: 100%;
  height: 100px;
  border-radius: 50%;
}
.text-error {
  color: #e32d26;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.delete-account {
  background: transparent;
  border: none;
  text-decoration: underline;
  color: #442671;
  font-size: 12px;
  text-align: left;
  padding: 0;
}

::v-deep .vs__dropdown-toggle {
  padding-bottom: 0px;
  border-radius: 0px;
  width: 100% !important;
  border: 1px solid #080809;
}

::v-deep .v-select {
  width: 100%;
}

.settings {
  &__header {
    height: 70px;
    padding: 0 22px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #aaa3b1;
  }
  &__statuses {
    p {
      color: #aaa3b1;
      font-size: 12px;
      margin-right: 20px;
    }

    &__item {
      color: #75707b;
      font-size: 11px;
      margin-left: 20px;
      padding-left: 15px;
      position: relative;

      &_orange::before {
        background: #fcb416;
      }
      &_green::before {
        background: #29c9be;
      }
    }
    &__item::before {
      content: "";
      top: 50%;
      left: 0px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      transform: translateY(-50%);
    }
  }

  .group-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;
    padding-right: 30px;
    padding-bottom: 10px;
    position: relative;
    border-bottom: 1px solid #75707b;
    width: 100%;

    input {
      border-bottom: none !important;
    }

    &__description {
      margin: 0;
      font-size: 12px;
      font-family: "Roboto-Mono";
      color: #e32d26;
      position: absolute;
      bottom: 9px;
      left: calc(100% + 20px);
      width: 70%;
    }
  }
  .group-wrapper .group-wrapper__create-button {
    bottom: 9px;
  }
  .group-badge {
    display: block;
    font-size: 12px;
    color: #442671;
    cursor: pointer;
    border-radius: 3px;
    padding: 4px 28px 4px 8px;
    border: 1px solid #aaa3b1;
    margin-right: 10px;
    margin-top: 10px;
    position: relative;
    background: #fff;
    &__promoter {
      background: transparent;
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
    }

    &::before {
      content: "";
      top: 50%;
      width: 1px;
      right: 23px;
      height: 15px;
      position: absolute;
      background: #aaa3b1;
      transform: translateY(-50%);
    }

    &::after {
      content: "";
      top: 50%;
      right: 8px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      background: #aaa3b1;
      transform: translateY(-50%);
    }

    &_yellow::after {
      background: #fcb416;
    }
    &_green::after {
      background: #29c9be;
    }
  }

  .group-badge-alias {
    cursor: unset;
  }

  .adding-member-of-group {
    margin-top: 10px;
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

.form-group .underlined-text {
  bottom: 5px;
  top: auto;
  position: absolute;
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

.new-pass input {
  color: #442671;
}

#dashboard-content-page .attention {
  background-color: #e8f0fe !important;
}

.password-editing-tips .additional-information {
  position: relative;
}

.green-text {
  color: #31bcb2 !important;
}

.base-form {
  &__title {
    font-family: Graphik App, sans-serif !important;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: 0.15em;
    color: #442671;
    margin-bottom: 14px;
  }
}
</style>
