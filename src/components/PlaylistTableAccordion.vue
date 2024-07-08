<template>
  <div id="playlists" class="row playlist-content" style="margin: 0;">
    <div class="col-12 palylist-table">
      <div class="page-content">
        <div
          class="row accordion-playlist-header"
          :class="{ 'accordion-playlist-header--promoter': isPromoter }"
          style="text-align: left; margin: 0; letter-spacing: 4px;"
        >
          <div
            class="col-1 playlist-cell playlist-header-status d-lg-block d-none maxwidth-100"
          >
            <span id="playlist-status" class="cursor-pointer">STATUS </span>
            <b-tooltip target="playlist-status">STATUS</b-tooltip>
          </div>
          <div class="col-lg-2 col-5 playlist-cell">
            <span id="playlist-playlist-name" class="cursor-pointer">
              PLAYLIST
            </span>
            <b-tooltip target="playlist-playlist-name">PLAYLIST</b-tooltip>
          </div>
          <div
            class="col-lg-2 col-7 maxwidth-200 d-flex justify-content-end justify-content-lg-start playlist-cell"
          >
            <span
              id="playlist-artist-name"
              class="text-uppercase cursor-pointer"
              >Artist Name / Alias</span
            >
            <b-tooltip target="playlist-artist-name" class="text-uppercase"
              >Artist Name / Alias</b-tooltip
            >
          </div>
          <div
            class="col-1 playlist-cell playlist-header-submitted d-lg-block d-none"
          >
            <span id="playlist-submit-status" class="cursor-pointer"
              >SUBMITTED
              <b-tooltip target="playlist-submit-status">SUBMITTED</b-tooltip>
            </span>
          </div>
          <div
            class="col-1 playlist-cell playlist-header-plated d-lg-block d-none"
          >
            <span id="playlist-last-played" class="cursor-pointer"
              >PLAYED
              <b-tooltip target="playlist-last-played">PLAYED</b-tooltip>
            </span>
          </div>
          <div v-if="!isPromoter"
            class="col-1 playlist-cell playlist-header-given d-lg-block d-none"
          >
            <span id="playlist-total-given" class="cursor-pointer"
              >TOTAL
              <b-tooltip target="playlist-total-given">TOTAL GIVEN</b-tooltip>
            </span>
          </div>
          <div
            class="col-1 playlist-cell playlist-header-venue d-lg-block d-none"
          >
            <span id="playlist-venue" class="cursor-pointer"
              >VENUE
              <b-tooltip target="playlist-venue">VENUE</b-tooltip>
            </span>
          </div>
          <div
            v-if="!isPromoter"
            class="col-1 playlist-cell playlist-header-venue d-lg-block d-none"
          >
            <span id="playlist-venue" class="cursor-pointer"
              >PROMOTER
              <b-tooltip target="playlist-venue">PROMOTER</b-tooltip>
            </span>
          </div>
          <div v-if="!isPromoter"
            class="col-1 playlist-cell playlist-header-venue d-lg-block d-none"
          >
            <span id="playlist-venue" class="cursor-pointer"
              >SOCIAL SHARE
              <b-tooltip target="playlist-venue">SOCIAL SHARE</b-tooltip>
            </span>
          </div>
        </div>
        <div v-if="playlist.results && playlist.results.length">
          <b-card
            v-for="(singlePlaylist, index) in playlist.results"
            :key="singlePlaylist.id"
            class="no-border"
            style="background: #f2f1ef;"
            no-body
          >
            <b-card-header
              :id="'playlist-info-button' + index"
              class="p-0"
              header-tag="header"
              role="tab"
            >
              <b-button
                block
                variant="info"
                :class="{ collapsed: currentIndex === index }"
              >
                <div class="playlist-title">
                  <div class="row mx-0">
                    <div
                      class="col-1 playlist-cell maxwidth-100"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <div
                        v-if="singlePlaylist.status"
                        class="circle-status circle-status-active"
                      ></div>
                      <div
                        v-else
                        class="circle-status circle-status-innactive"
                      ></div>
                    </div>
                    <div
                      class="col-lg-2 playlist-cell col playlist-header-title"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span :id="`playlist-singleplaylist-name-${index}`">{{
                        singlePlaylist.name
                      }}</span>
                      <b-tooltip
                        :target="`playlist-singleplaylist-name-${index}`"
                      >
                        {{ singlePlaylist.name }}
                      </b-tooltip>
                    </div>
                    <div class="col-lg-2 maxwidth-200 d-lg-flex d-none">
                      <v-select
                        v-if="
                          !groupArtist.includes(
                            singlePlaylist.primeArtistName
                          ) && !isPromoter
                        "
                        class="w-100 my-auto"
                        autocomplete="on"
                        :options="[
                          ...data.performers.map(performer => ({
                            name: performer.name
                          }))
                        ]"
                        label="name"
                        closeOnSelect
                        :value="selectedName(singlePlaylist, data)"
                        :searchable="false"
                        :clearable="false"
                        @option:selected="
                          updatePlaylistData({
                            ...singlePlaylist,
                            primeArtistName: $event.name
                          })
                        "
                      >
                        <template #open-indicator="{ attributes }">
                          <img
                            v-if="!singlePlaylist.status"
                            v-bind="attributes"
                            alt="show"
                            src="@/assets/images/select-arrow-grey.svg"
                          />
                          <img
                            v-else
                            v-bind="attributes"
                            src="@/assets/images/select-arrow-purple.svg"
                            alt="show"
                          />
                        </template>
                        <template #option="{ name }">
                          <span class="playlist-cell">{{ name }}</span>
                        </template>
                      </v-select>
                      <div
                        v-else
                        class="w-100 my-auto group-name"
                        @click="
                          showItContent(
                            singlePlaylist.id,
                            singlePlaylist.user.id,
                            singlePlaylist,
                            index
                          )
                        "
                      >
                        {{ returnArtistName(singlePlaylist, data) }}
                      </div>
                    </div>
                    <div
                      class="col-1 playlist-cell d-lg-block d-none"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span :id="`playlist-singleplaylist-created-${index}`">
                        {{ momentDate(singlePlaylist.created) }}
                      </span>
                      <b-tooltip
                        :target="`playlist-singleplaylist-created-${index}`"
                      >
                        {{ momentDate(singlePlaylist.created) }}
                      </b-tooltip>
                    </div>
                    <div
                      class="col-1 playlist-cell d-lg-block d-none"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span :id="`playlist-singleplaylist-datePlayed-${index}`">
                        {{ momentDate(singlePlaylist.datePlayed) }}
                      </span>
                      <b-tooltip
                        :target="`playlist-singleplaylist-datePlayed-${index}`"
                      >
                        {{ momentDate(singlePlaylist.datePlayed) }}
                      </b-tooltip>
                    </div>
                    <div
                      v-if=" !isPromoter && singlePlaylist.isPaid"
                      class="col-1 playlist-cell d-lg-block d-none"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span>{{ currencySymbol }}</span>
                      <span>{{
                        parseFloat(singlePlaylist.totalAmount).toFixed()
                      }}</span>
                    </div>
                    <div
                      v-if="!isPromoter && !singlePlaylist.isPaid"
                      class="col-1 playlist-cell"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span style="color: rgb(252, 180, 22);">Pending</span>
                    </div>
                    <div
                      class="col-1 playlist-cell"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span
                        :id="`playlist-singleplaylist-venue-${index}`"
                        class="d-lg-block d-none playlist-cell"
                        >{{ singlePlaylist.venue }}</span
                      >
                      <b-tooltip
                        :target="`playlist-singleplaylist-venue-${index}`"
                      >
                        {{ singlePlaylist.venue }}
                      </b-tooltip>
                    </div>
                    <div
                      v-if="!isPromoter"
                      class="col-1 playlist-cell"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span
                        :id="`playlist-singleplaylist-promoter-${index}`"
                        class="d-lg-block d-none playlist-cell"
                      >
                        {{
                          formatPromoters(singlePlaylist.promotionCompanies)
                        }}
                      </span>
                      <b-tooltip
                        :target="`playlist-singleplaylist-promoter-${index}`"
                      >
                        {{
                          formatPromoters(singlePlaylist.promotionCompanies)
                        }}
                      </b-tooltip>
                    </div>
                    <div class="col-lg col mx-lg-0 ml-auto d-flex flex-wrap">
                      <router-link
                        v-if="!isPromoter"
                        class="
                          share-btn
                          text-uppercase
                          rounded-button
                          text-decoration-none
                          button-default
                          ml-auto
                          px-4
                          d-flex
                          align-items-center
                          my-auto
                          ml-auto
                        "
                        style="min-height: 30px; max-height: 30px; z-index: 10"
                        :class="{}"
                        :disabled="!singlePlaylist.status"
                        :event="singlePlaylist.status ? 'click' : ''"
                        :to="{
                          name: 'Playlist Sharing Preview',
                          params: { id: singlePlaylist.id }
                        }"
                        @click.stop
                      >
                        <span class="d-lg-flex d-none playlist-cell">
                          share
                        </span>
                        <span class="d-lg-none">share</span>
                      </router-link>
                    </div>
                    <div
                      class="col playlist-cell d-lg-flex d-none"
                      @click="
                        showItContent(
                          singlePlaylist.id,
                          singlePlaylist.user.id,
                          singlePlaylist,
                          index
                        )
                      "
                    >
                      <span class="ml-auto mr-2 highlighted-text"
                        >Tracklist</span
                      >
                      <span>
                        <img
                          alt=""
                          class="arrow-down"
                          src="@/assets/images/arrow-down.svg"
                      /></span>
                    </div>
                    <div class="col-12 pt-0 pb-3 d-flex d-lg-none">
                      <v-select
                        class="w-100 my-auto"
                        autocomplete="on"
                        :options="
                          data.performers.map(performer => ({
                            name: performer.name
                          }))
                        "
                        label="name"
                        closeOnSelect
                        :value="
                          singlePlaylist.primeArtistName
                            ? singlePlaylist.primeArtistName
                            : data.primeArtistName
                        "
                        :searchable="false"
                        :clearable="false"
                        @option:selected="
                          updatePlaylistData({
                            ...singlePlaylist,
                            primeArtistName: $event.name
                          })
                        "
                      >
                        <template #open-indicator="{ attributes }">
                          <img
                            v-if="!singlePlaylist.status"
                            v-bind="attributes"
                            alt="show"
                            src="@/assets/images/select-arrow-grey.svg"
                          />
                          <img
                            v-else
                            v-bind="attributes"
                            src="@/assets/images/select-arrow-purple.svg"
                            alt="show"
                          />
                        </template>
                        <template #option="{ name }">
                          <span class="playlist-cell">{{ name }}</span>
                        </template>
                      </v-select>
                    </div>
                  </div>
                </div>
                <span class="button-plus-img"></span>
              </b-button>
            </b-card-header>
            <b-collapse
              :id="`playlist-info-` + index"
              accordion="my-accordion"
              role="tabpanel"
              :visible="currentIndex === index"
            >
              <b-card-body
                v-if="returnPlaylistTracks(singlePlaylist.id, index).length > 0"
              >
                <b-card-text>
                  <div
                    class="row accordion-playlist-header"
                    :class="{
                      'accordion-playlist-header--promoter': isPromoter
                    }"
                    style="margin: 0; text-align: left; letter-spacing: 4px;"
                  >
                    <div class="col-2 playlist-header-status">
                      <div class="row">
                        <div class="col-6" style="background: #F2F1EF;"></div>
                        <div class="col-6">#</div>
                      </div>
                    </div>
                    <div class="col-2">ARTIST</div>
                    <div class="col-3">REMIXER</div>
                    <div class="col-4">TITLE</div>
                    <div
                      class="col-1 text-center"
                      v-if="
                        data.tracksPrivacyPreference === 'Hide track details'
                      "
                    >
                      DISPLAY
                    </div>
                    <div class="col-1 text-center" v-else></div>
                  </div>
                  <div
                    v-if="trackData && trackData.length > 0"
                    :key="updatedListKey"
                  >
                    <div
                      v-for="(track, ind) in returnPlaylistTracks(
                        singlePlaylist.id
                      )"
                      :key="ind + singlePlaylist.id"
                      :class="[
                        'row card-text-row',
                        { row_grey: track.isHidden }
                      ]"
                      style="margin: 0;"
                    >
                      <div class="col-2">
                        <div class="row">
                          <div class="col-6 px-1 px-md-2">
                            <div
                              v-if="track.collationStatus === 'unmatchable'"
                              class="circle-status circle-status-unmatchable"
                            />
                            <div
                              v-else-if="track.status"
                              class="circle-status circle-status-active"
                            ></div>
                            <div
                              v-else
                              class="circle-status circle-status-innactive"
                            ></div>
                          </div>
                          <div
                            class="col-6 px-1 px-md-2"
                            style="text-align: center;"
                          >
                            {{ ind + 1 }}
                          </div>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="row">
                          <div class="col-5 min-width-on-large-name">
                            <span
                              v-for="(performer, perfIndex) in track.performers"
                              :key="performer.id"
                              class="lnik-to"
                              >{{ performer.name
                              }}<span
                                v-if="
                                  track.performers.length > 1 &&
                                    perfIndex < track.performers.length - 1
                                "
                                >&nbsp;&amp;&nbsp;
                              </span>
                            </span>
                          </div>
                          <div class="col-4">
                            <template v-if="track.status">
                              <span
                                v-for="(remixer, perfIndex) in track.remixers"
                                :key="remixer.id"
                                class="lnik-to"
                                >{{ remixer.name
                                }}<span
                                  v-if="
                                    track &&
                                      track.remixers &&
                                      track.remixers.length > 1 &&
                                      perfIndex !== track.remixers.length - 1
                                  "
                                  >,&nbsp;
                                </span>
                              </span>
                            </template>
                          </div>
                          <div
                            class="col-3 record-invite min-width-on-large-invite"
                          >
                            <button
                              v-if="
                                !isPromoter &&
                                  singlePlaylist.status &&
                                  track.performers
                                    .concat(track.remixers)
                                    .some(
                                      performer =>
                                        !performer.userId && !performer.isGroup
                                    )
                              "
                              class="track-invite-button"
                              @click="
                                showInvitationPopup(track, [
                                  ...track.performers,
                                  ...(track.remixers || [])
                                ])
                              "
                            >
                              INVITE
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <span>{{ track.name }}</span>
                      </div>
                      <div
                        class="col-1 text-center"
                        v-if="
                          data.tracksPrivacyPreference === 'Hide track details'
                        "
                      >
                        <img
                          v-if="track.isHidden"
                          src="@/assets/images/eye-white.svg"
                          style="cursor: pointer"
                          @click="
                            handleToggleHiddenStatus(singlePlaylist, track)
                          "
                        />
                        <img
                          v-else
                          src="@/assets/images/eye.svg"
                          style="cursor: pointer"
                          @click="
                            handleToggleHiddenStatus(singlePlaylist, track)
                          "
                        />
                      </div>
                      <div class="col-1 text-center" v-else></div>
                    </div>
                  </div>
                  <div
                    v-if="singlePlaylist.status && !isPromoter"
                    class="d-flex justify-content-center my-3 list-footer"
                  >
                    <button
                      class="track-invite-button"
                      style="max-width: 200px; text-transform: uppercase;"
                      @click="showDragModal(singlePlaylist.id)"
                    >
                      Report Mistake
                    </button>
                  </div>
                  <modal
                    name="example-modal"
                    class="dragMod"
                    transition="nice-modal-fade"
                    :draggable="draggableMod"
                    :resizable="resizableMod"
                    :clickToClose="clickToCloseMod"
                    height="auto"
                    width="425px"
                  >
                    <div class="example-modal-content">
                      <div class="modal-top">
                        <img
                          class="app-modal__close"
                          src="@/assets/images/close-groups-modal.svg"
                          @click="hideMistake"
                        />
                      </div>
                      <div class="modal-main">
                        <h2 class="app-modal__title mb-4">Report Mistake</h2>
                        <p class="app-modal__description">
                          While we strive for 100% accuracy, sometimes mistakes
                          can happen. Please let us know in the field below by
                          noting the track number, the suggested correction to
                          artist/remixer/title and when possible include a
                          weblink to any public site that the track can be found
                          on. (Ex. Beatport, Bandcamp, Soundcloud etc.)
                        </p>
                        <p class="app-modal__description mt-3 mb-0">Thanks</p>
                        <p class="app-modal__description">The Aslice Team.</p>
                        <div class="block-border">
                          <div
                            class=""
                            v-for="(letter, index) in letters"
                            :key="index"
                          >
                            <div
                              class="block-form"
                              :class="letter.index % 2 === 0 ? 'event' : ''"
                            >
                              <v-select
                                class="input w-100"
                                v-model="letter.name"
                                :searchable="false"
                                :options="arrLetters"
                                :clearable="false"
                                label="option"
                                placeholder="<1> <Artist, Remixer, Title>"
                              >
                                <template #open-indicator="{ attributes }">
                                  <img
                                    v-bind="attributes"
                                    src="@/assets/images/select-arrow-purple.svg"
                                  />
                                </template>
                              </v-select>
                              <p
                                class="app-modal__description mt-3"
                                style="color: rgba(170, 163, 177, 1);"
                              >
                                Suggested Correction
                              </p>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                v-model="letter.message"
                                rows="4"
                                placeholder="Ex. Artist, Remixer, Title, Link"
                              >
                              </textarea>
                            </div>
                          </div>
                          <button
                            v-if="
                              returnPlaylistTracks(singlePlaylist.id).length >
                                letters.length
                            "
                            class="app-modal__description btn-letter"
                            @click="addLetter"
                          >
                            <img
                              class="mr-2"
                              src="@/assets/images/Union.svg"
                              @click="submitSend"
                            />
                            Report Another Track
                          </button>
                        </div>
                      </div>
                      <div class="modal-bottom">
                        <button
                          class="track-invite-button"
                          @click="submitLetters"
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  </modal>
                  <modal
                    name="send-modal"
                    class="dragMod"
                    transition="nice-modal-fade"
                    :draggable="false"
                    :resizable="false"
                    :clickToClose="clickToCloseMod"
                    height="auto"
                    width="425px"
                  >
                    <div class="example-modal-content">
                      <div class="modal-top">
                        <img
                          class="app-modal__close"
                          src="@/assets/images/close-groups-modal.svg"
                          @click="submitSend"
                        />
                      </div>
                      <div class="modal-main">
                        <h2 class="app-modal__title mb-4">
                          Email Sent to Aslice
                        </h2>
                        <p class="app-modal__description">
                          An Aslice admin has been notified and will reach out
                          with any further questions.
                        </p>
                      </div>
                      <div class="modal-bottom">
                        <button class="track-invite-button" @click="submitSend">
                          close
                        </button>
                      </div>
                    </div>
                  </modal>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <div v-else class="no-data">
          No data yet
        </div>
      </div>
    </div>
    <AppModal
      v-if="isInvitationPopupOpen"
      closeIcon
      customFooter
      customContent
      @onClose="handleCloseInviteModal"
    >
      <template #body>
        <h2 class="app-modal__title" style="margin-bottom: 20px;">
          Invite to Aslice
        </h2>
        <v-select
          class="w-100"
          :searchable="false"
          :options="
            selectedTrackPerformers
              .filter(performer => !performer.isGroup)
              .map(user => user)
          "
          label="displayedName"
          :selectable="
            option => !JSON.stringify(option).includes('(Already registered)')
          "
          :clearable="false"
          placeholder="Producer name"
          @option:selected="handleSelectionProducer($event)"
        >
          <template #open-indicator="{ attributes }">
            <img
              v-bind="attributes"
              src="@/assets/images/select-arrow-purple.svg"
            />
          </template>
        </v-select>
        <div class="app-modal__input" style="margin-top: 20px;">
          <label for="email">Enter Producer’s Email</label>
          <input
            id="email"
            v-model="$v.invitationData.email.$model"
            autocomplete="off"
            placeholder="Enter producer's email"
            required
            type="email"
          />
        </div>
        <p class="app-modal__description" ref="copyText">
          Hi
          <span class="highlighted-text">{{
            invitationData.producerName || "producer name"
          }}</span
          >. <br /><br />

          Wanted to let you know that
          {{ $v.invitationData.djName.$model }} played your track
          {{ editingTrack.name }} and shared some of Their DJ fee with you via
          Aslice. It appears you’re not in their system yet. Please take a
          moment to register at Aslice.com to claim your fair share and learn
          how you can become part of a fairer music ecosystem. <br /><br />
          Thanks <br />
          Aslice, On behalf of
          <span class="highlighted-text">{{
            $v.invitationData.djName.$model
          }}</span>
        </p>
        <br />
        <v-select
          v-model="$v.invitationData.djName.$model"
          class="w-100"
          :searchable="false"
          :options="djNameGroup"
          :clearable="false"
          placeholder="DJ name"
        >
          <template #open-indicator="{ attributes }">
            <img
              v-bind="attributes"
              src="@/assets/images/select-arrow-purple.svg"
            />
          </template>
        </v-select>
      </template>
      <template #footer>
        <div class="app-modal__footer">
          <span class="underlined-text gray-text" @click="copyInvitationText()"
            >Copy Invite Text</span
          >
          <button
            class="px-4"
            :disabled="isSendingInvite || $v.invitationData.$invalid"
            @click="handleSendInvitation"
          >
            Invite
          </button>
        </div>
      </template>
    </AppModal>
    <AppModal
      v-if="isInviteSentPopupOpen"
      closeIcon
      title="Invite Sent"
      description="An email has been sent to the Producer."
      @onClose="isInviteSentPopupOpen = false"
    />

    <AppModal
      v-if="isCopiedToClipboardPopupOpen"
      closeIcon
      title="Copied to clipboard"
      @onClose="isCopiedToClipboardPopupOpen = false"
    />

    <div
      v-if="playlist.count > take"
      class="d-flex mx-auto custom-pagination mt-3"
    >
      <AslicePagination
        v-model="page"
        :per-page="take"
        :total-rows="rowsCount"
      />
    </div>
    <div class="mt-auto"></div>
  </div>
</template>
<script>
import moment from "moment";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import api from "@/service/api";
import swal from "sweetalert2";
import AppModal from "@/components/AppModal";
import AslicePagination from "@/components/global/AslicePagination.vue";
import { email, required } from "vuelidate/lib/validators";

export default {
  components: {
    AppModal,
    AslicePagination
  },
  props: [
    "playlistData",
    "playlist",
    "trackData",
    "customType",
    "yearPlayList",
    "query"
  ],
  data() {
    return {
      letters: [{ index: 1, trackId: null, name: "", message: "" }],
      playlistId: null,
      arrLetters: [],
      djNameGroup: [],
      bigMod: false,
      draggableMod: true,
      resizableMod: true,
      clickToCloseMod: false,
      scrollableMod: false,
      groupArtist: [],
      page: 1,
      userId: null,
      take: 15,
      orderColumn: "datePlayed",
      orderDirection: "DESC",
      selectedTrackPerformers: [],
      invitationData: {
        email: null,
        djName: null,
        producerName: null
      },
      editingTrack: {
        id: null,
        name: ""
      },
      additionalBoolean: true,
      currentPlaylist: null,
      updatedListKey: 0,
      currentIndex: null,
      isInviteSentPopupOpen: false,
      isInvitationPopupOpen: false,
      isCopiedToClipboardPopupOpen: false,
      isSendingInvite: false
    };
  },
  validations: {
    invitationData: {
      email: {
        email,
        required
      },
      djName: {
        required
      },
      producerName: {
        required
      }
    }
  },
  computed: {
    ...mapState("djdashboard", {
      performerStorage: "performerStorage",
      rowsCount: "rowsCount"
    }),
    ...mapState("user", ["data"]),
    ...mapGetters({
      currencySymbol: "user/currencySymbol"
    }),
    ...mapGetters("user", ["isPromoter"]),
    queryParams() {
      const result = {
        page: this.page,
        take: this.take,
        orderColumn: this.orderColumn,
        orderDirection: this.orderDirection
      };

      if (this.isPromoter) {
        result.venueIds = this.data.venues
          .filter(v => v.status === "Approved")
          .map(v => v.id);
      } else {
        result.userId = this.userId;
      }

      if (this.query) {
        result.query = this.query;
      }

      return result;
    }
  },
  methods: {
    submitSend() {
      this.$modal.hide("send-modal");
      this.letters = [{ index: 1, trackId: null, name: "", message: "" }];
    },
    hideMistake() {
      this.arrLetters = [];
      this.letters = [{ index: 1, trackId: null, name: "", message: "" }];
      this.$modal.hide("example-modal");
    },
    async submitLetters() {
      const singleId = this.playlistId;
      const singleMistakes = [];

      for (let el = 0; el < this.letters.length; el++) {
        singleMistakes.push({
          trackId: this.letters[el].name.trackId,
          description: this.letters[el].message
        });
      }
      const response = await api.inviteMistake(singleId, {
        mistakes: singleMistakes
      });
      if (response.Error) {
        swal.fire({
          icon: "error",
          title: response.Error
        });
        return;
      }
      this.$modal.hide("example-modal");
      this.$modal.show("send-modal");
      this.letters = [{ index: 1, trackId: null, name: "", message: "" }];
      this.arrLetters = [];
    },
    addLetter() {
      this.letters.push({
        index: this.letters.length + 1,
        trackId: null,
        name: "",
        message: ""
      });
      this.arrLetters = this.arrLetters.filter(
        item1 => !this.letters.some(item2 => item2.name.index === item1.index)
      );
    },
    showDragModal(id) {
      this.playlistId = id;
      this.returnPlaylistTracks(id).forEach((item, index) => {
        if (item.remixers.length > 0) {
          this.arrLetters.push({
            index: index,
            trackId: `${item.id}`,
            option: `<${index + 1}> ${item.performers[0].name}, ${
              item.remixers[0].name
            }, ${item.name}`
          });
          return;
        }
        this.arrLetters.push({
          index: index,
          trackId: `${item.id}`,
          option: `<${index + 1}> ${item.performers[0].name}, ${item.name}`
        });
      });
      this.$modal.show("example-modal");
    },
    ...mapActions("user", ["updateProfileAvatar"]),
    ...mapActions("djdashboard", [
      "getTracktData",
      "getPlaylistData",
      "toggleHiddenStatusTrack",
      "updatePlaylist"
    ]),
    ...mapMutations("playlistSharing", ["SET_NEEDS_TO_UPDATE"]),
    selectedName(singlePlaylist, data) {
      if (this.groupArtist.length < data.groupMemberships.length) {
        for (const el of data.groupMemberships) {
          this.groupArtist.push(el.group.name);
        }
      }
      let name = singlePlaylist.primeArtistName
        ? singlePlaylist.primeArtistName
        : data.primeArtistName;
      return name;
    },
    returnArtistName(singlePlaylist, data) {
      if (this.groupArtist.length < data.groupMemberships.length) {
        for (const el of data.groupMemberships) {
          this.groupArtist.push(el.group.name);
        }
      }
      let name = singlePlaylist.primeArtistName
        ? singlePlaylist.primeArtistName
        : singlePlaylist.user.performers[0].name;
      return name;
    },
    async handleToggleHiddenStatus(playList, track) {
      await this.toggleHiddenStatusTrack({
        id: playList.id,
        data: {
          trackId: track?.trackId || track.id,
          versionId: playList.versionId
        }
      });
      this.updatedListKey += 1;
    },
    handleCloseInviteModal() {
      this.isInvitationPopupOpen = false;
      this.invitationData = {
        email: null,
        djName: null,
        producerName: null,
        producerId: null
      };
      this.editingTrack = null;
      this.selectedTrackPerformers = [];
    },
    returnPlaylistTracks(playlistId) {
      let tracksArray = [];
      if (this.trackData && this.trackData.length > 0) {
        const found = this.trackData.find(x => x.id === playlistId);
        if (found) {
          const hiddenIds = found.hiddenTracks.map(({ id }) => id);
          if (
            found.id &&
            found.id === playlistId &&
            found.tracks &&
            found.status
          ) {
            tracksArray = found.tracks.map(track => ({
              ...track,
              isHidden: hiddenIds.includes(track?.trackId || track.id)
            }));
          } else {
            tracksArray = [];
            if (
              found.id &&
              found.id === playlistId &&
              found.tracks &&
              found.rawTracks
            ) {
              found.rawTracks.forEach(rawTrack => {
                const foundTack = found.tracks.find(
                  x => rawTrack.trackId == x.id
                );
                if (foundTack && foundTack.status) {
                  tracksArray.push({
                    ...foundTack,
                    isHidden: hiddenIds.includes(
                      foundTack?.trackId || foundTack.id
                    )
                  });
                } else {
                  rawTrack.status = false;
                  rawTrack.name = rawTrack.title;
                  rawTrack.performers = [];
                  rawTrack.isHidden = hiddenIds.includes(
                    rawTrack?.trackId || rawTrack.id
                  );

                  var nameArr = rawTrack.artist.split(",");
                  for (let index = 0; index < nameArr.length; index++) {
                    rawTrack.performers.push({
                      id: index,
                      name: nameArr[index],
                      displayedName: nameArr[index]
                    });
                  }
                  if (
                    foundTack &&
                    foundTack.remixers &&
                    foundTack.remixers.length >= 0
                  ) {
                    rawTrack.remixers = foundTack.remixers;
                  }
                  tracksArray.push(rawTrack);
                }
              });
            }
          }
        }
      }
      return tracksArray;
    },
    async loadTracks(event) {
      if (this.data && Object.keys(this.data).length > 0) {
        this.userId = this.data.id;
        if (this.isPromoter && !this.queryParams.venueIds.length) {
          await swal.fire({
            icon: "warning",
            text: "Please wait until at least one of your venues is approved"
          });
          return;
        }

        await this.getPlaylistData({
          ...this.queryParams,
          fromDate: moment(`${this.yearPlayList - 1}-12-31`).format(),
          toDate: moment(`${this.yearPlayList}-12-31`).format(),
          page: event || 1
        });
      }
    },
    updatePlaylistData(playlist) {
      console.log(playlist);
      console.log(this.name);
      setTimeout(() => {
        this.updatePlaylist({
          playlist,
          successMessage: "Playlist artist name was changed"
        });
        this.SET_NEEDS_TO_UPDATE(true);
      }, 100);
    },
    performerUsersNullChecking(name) {
      let res = [];
      this.selectedTrackPerformers.forEach(performer => {
        if (performer.user === null) {
          res.push(performer);
        } else {
          res.push(name);
        }
      });
      if (res.length === 1) {
        this.additionalBoolean = false;
      }
    },
    async handleSendInvitation() {
      if (this.invitationData.email === null) {
        swal.fire({
          icon: "error",
          title: "Please type performer's email."
        });
        return;
      }
      if (this.invitationData.producerName === null) {
        swal.fire({
          icon: "error",
          title: "Please choose the Producer"
        });
        return;
      }
      if (this.invitationData.djName === null) {
        swal.fire({
          icon: "error",
          title: "Please choose the DJ"
        });
        return;
      }

      this.isSendingInvite = true;
      swal.showLoading();
      const response = await api.invitePerformer({
        ...this.invitationData,
        trackTitle: this.editingTrack.name
      });
      swal.close();
      this.isSendingInvite = false;

      if (response.Error) {
        swal.fire({
          icon: "error",
          title: response.Error
        });
        return;
      }
      this.handleCloseInviteModal();
      this.isInviteSentPopupOpen = true;
    },
    showInvitationPopup(track, performersArray) {
      this.editingTrack = null;
      this.editingTrack = track;
      this.selectedTrackPerformers = performersArray.map(p => ({
        ...p,
        displayedName:
          (p.displayedName || p.name) + (p.user ? " (Already registered)" : "")
      }));
      this.invitationData = {
        email: null,
        djName: this.data.primeArtistName,
        producerName:
          performersArray.length === 1
            ? performersArray[0].displayedName
            : null,
        producerId: performersArray.length === 1 ? performersArray[0].id : null
      };

      this.additionalBoolean = true;
      this.performerUsersNullChecking(performersArray);
      this.isInvitationPopupOpen = true;
    },
    inviteButtonShowHide(performersArray) {
      return !!performersArray.find(x => x.user === null);
    },
    inviteButtonShowHide2(artist) {
      return !!artist;
    },
    handleSelectionProducer(event) {
      this.invitationData.producerName = event.displayedName;
      this.invitationData.producerId = event.id;
    },
    momentDate(data) {
      return moment(data, moment.ISO_8601).format("DD/MM/YYYY");
    },
    // TODO: needs refactoring
    async showItContent(id, userId, playlist, index) {
      this.currentIndex = this.currentIndex === index ? null : index;
      const div = document.getElementById(`playlist-info-${index}`);
      const divShowClass = div.classList.contains("show");
      const row = index + 1;
      this.currentPlaylist = null;
      this.currentPlaylist = playlist;
      if (!divShowClass && !this.$device.mobile) {
        await this.getTracktData({ id, userId });
      }
      setTimeout(() => {
        if (div) {
          if (row > 15) {
            window.scrollTo({ top: row * 30, behavior: "smooth" });
          }
          if (row > 10) {
            window.scrollTo({ top: row * 40, behavior: "smooth" });
          }
          if (row > 5) {
            window.scrollTo({ top: row * 50, behavior: "smooth" });
          } else window.scrollTo({ top: row * 60, behavior: "smooth" });
        }
      }, 200);
    },

    async copyInvitationText() {
      try {
        const inviteTextNode = this.$refs["copyText"];
        const range = document.createRange();
        range.selectNode(inviteTextNode);
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        this.isCopiedToClipboardPopupOpen = true;
      } catch (e) {
        swal.fire({
          icon: "error",
          title: e.message
        });
      }
    },
    formatPromoters(promotionCompanies) {
      const promoters = promotionCompanies.map(promoter => promoter.name);
      if (promoters.length > 1) {
        const lastPromoter = promoters.pop();
        return promoters.join(', ') + ' and ' + lastPromoter;
      } else if (promoters.length === 1) {
        return promoters[0];
      } else {
        return "";
      }
    }
  },
  watch: {
    yearPlayList(newVal) {
      console.log(newVal);
      this.page = 1;
      this.loadTracks();
      return newVal;
    },
    query() {
      this.loadTracks();
    },
    page(value) {
      this.loadTracks(value);
    }
  },
  mounted() {
    if (this.customType !== null) {
      if (["dj", "dj-producer", "promoter"].includes(this.customType)) {
        this.loadTracks();
      }
    }
    if (this.data.performers) {
      this.djNameGroup = [...this.data.performers.map(({ name }) => name)];
      if (this.data.groupMemberships) {
        this.djNameGroup = [
          ...this.djNameGroup,
          ...this.data.groupMemberships.map(({ group }) => group.name)
        ];
      }
    }
  }
};
</script>
<style lang="scss">
.dragMod {
  overflow: auto;
  padding: 70px 0 30px;
  [data-modal="example-modal"] {
    background: #ffffff00;
  }
  .example-modal-content {
    padding: 0px;
    .modal-top {
      position: relative;
      display: flex;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 60px;
      background: #f2f1ef;
    }
    .modal-main {
      padding: 15px 35px 25px;
      .block-border {
        border: 1px solid #aaa3b1;
        padding: 0px;
        height: 244px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 2px;
          background-color: #ffffff00;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #aaa3b1;
        }
        [aria-label="Search for option"] {
          border-radius: 2px !important;
        }
        .block-form {
          padding: 15px;
          input {
            padding: 0px !important;
          }
          .vs__search {
            color: rgba(117, 112, 123, 0.5) !important;
            &::placeholder {
              color: rgba(117, 112, 123, 0.5) !important;
            }
          }
          .vs__selected {
            padding: 0;
            color: #75707b !important;
          }
          .vs__dropdown-toggle {
            height: 40px;
            .vs__selected-options {
              color: #75707b !important;
              font-size: 12px;
              .vs__search {
                ::placeholder {
                  color: #75707b !important;
                }
              }
            }
          }
          .vs__selected-options {
            padding: 5px 20px !important;
            margin-top: 0;
            display: flex;
            align-items: center;
            color: #75707b !important;
          }
          .vs__dropdown-menu {
            max-height: 200px;
            margin-top: -38px;
            &::-webkit-scrollbar {
              width: 2px;
              background-color: #ffffff00;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #aaa3b1;
            }
            li {
              padding-left: 20px !important;
              &:hover,
              &:active,
              &:focus {
                color: #75707b !important;
                background: #f2f1ef !important;
              }
            }
            .vs__dropdown-option--highlight {
              color: #75707b !important;
              background: #f2f1ef !important;
            }
          }
        }
        .block-form.event {
          background: rgba(242, 241, 239, 0.6);
          border-top: 1px solid #aaa3b1;
          border-bottom: 1px solid #aaa3b1;
        }
        .form-control {
          border: 1px solid #aaa3b1;
          border-radius: 2px;
          padding: 10px 20px;
          font-size: 12px;
          &::placeholder {
            font-size: 12px;
            color: rgba(117, 112, 123, 0.5);
          }
        }
        .btn-letter {
          border: none;
          color: #442671;
          display: flex;
          align-items: center;
          background: none;
          padding: 0 15px 15px;
          font-size: 10px;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #442671;
            border-radius: 50%;
            margin-right: 10px;
            font-size: 1.3rem;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .modal-bottom {
      position: relative;
      bottom: 0;
      display: flex;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 70px;
      background: #f2f1ef;
      .track-invite-button {
        max-width: 110px;
        text-transform: uppercase;
        margin-right: 15px;
        background-color: #442671;
        color: #fff;
        font-size: 14px;
        padding: 11px 20px;
        letter-spacing: 0.13em;
        height: 40px;
      }
    }
  }
}
.app-modal__body .vs__dropdown-toggle .vs__selected-options,
.app-modal__body .vs__dropdown-toggle .vs__actions {
  background: #ffffff !important;
}
.list-footer .track-invite-button {
  background: #f2f1ef;
  transition: 0.3s;
}
.list-footer .track-invite-button:hover {
  background: #442671;
}
.group-name {
  color: #442671 !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  padding: 0 1.25em;
}
.row.row_grey {
  background: #aaa3b1;
  color: #75707b !important;
}
.row.row_grey .lnik-to {
  color: #75707b;
}
.card-text {
  @media only screen and (min-width: 992px) {
    // padding-left: 100px;
  }
  // padding-left: 20px;
}

.no-border {
  border: none;
  border-radius: 0;
}

.card-body {
  padding: 0;
}

.card-body {
  background: #f2f1ef;
}

.card-text-row {
  background: #fff;
  font-size: 12px;
  min-height: 41px;
  line-height: 41px;
  padding: 0;
  border-bottom: 1px solid #75707b;
}

.card-header button {
  background: #fcfbf9;
  border-radius: 0;
  border: none;
  color: #75707b;
  font-size: 12px;
  font-family: "Roboto-Mono", sans-serif;
  min-height: 42px;
  line-height: 42px;
  padding: 0;
}

.card-header button:hover {
  background: #e2e2e1;
  color: #fff;
}

.card-header button:focus,
.card-header button:focus-within {
  outline: none;
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  color: inherit !important;
}

.card-header button:focus .playlist-header-title {
  color: #442671 !important;
}

.accordion-playlist-header {
  text-align: left;
  font-size: 9px;
  font-family: "Europa-Bold" !important;
  color: #fff;
  background: #9182c5;
  min-height: 30px;
  line-height: 30px;

  &--promoter {
    background: var(--Core-Grayscale-900, #616060);
  }
}

.playlist-header-title {
  color: #442671;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-header button:focus .playlist-header-title {
  color: #fff;
}

.playlist-header-status {
  text-align: center;
}

.circle-status {
  margin: 0 auto;
  margin-top: 14px !important;
}

.card-body .card-text-row {
  color: #442671;
}

.card-body .card-text-row:last-child {
  border: none;
}
.card .playlist-title {
  text-align: left;
  // span{
  //   color: #000;
  // }
}
.vs__dropdown-toggle .card .playlist-title {
  text-align: left;
  span {
    color: #000;
  }
  &:hover {
    span {
      color: #fff !important;
    }
  }
}

.btn-info:hover {
  color: inherit !important;
}

#email {
  padding-left: 0 !important;
}

.form-group label {
  font-size: 12px;
  color: #75707b;
}

.form-group input {
  font-size: 12px;
  line-height: 20px;
  // color: #aaa3b1;
}

.invitation-text-wrapper {
  margin-top: 21.5px;
  border: 1px solid #aaa3b1;
  box-sizing: border-box;
  padding: 15.5px 20px;
}

.invitation-text {
  font-size: 12px;
  line-height: 20px;
  color: #75707b;
  font-family: "Roboto-Mono";
}

.highlighted-text {
  color: #442671;
}

.collapsed .arrow-down {
  transform: rotate(180deg);
}

.playlist-cell {
  word-break: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.playlist-title {
  .vs__selected-options,
  .vs__actions {
    background: #ffffff !important;
  }
}
.block-form {
  .vs__selected-options,
  .vs__actions {
    background: #fff !important;
  }
}
.vs__selected-options input::placeholder {
  font-size: 12px;
  color: #75707b !important;
  opacity: 1 !important;
}
.vs__selected:hover {
  color: #fff !important;
}
</style>

<style lang="scss" scoped>
.btn-block {
  display: block;
  width: 100%;
  text-align: center;
  // vertical-align: middle;
}

::v-deep .vs__dropdown-toggle {
  height: 30px;
  padding: 0 !important;
  width: 100% !important;
  border-radius: 2px !important;
  border: 1px solid #aaa3b1 !important;

  svg path {
    stroke: #aaa3b1;
  }
}

::v-deep .vs__selected-options {
  width: calc(100% - 50px);
  padding: 5px 10px !important;
  margin-top: 0;
  word-break: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
::v-deep .vs__selected {
  color: #442671 !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
}
::v-deep .vs__search {
  margin-top: 0;
  color: #442671 !important;
}

::v-deep .vs__dropdown-menu {
  padding-top: 0;
  padding-bottom: 0;
  max-height: 290px;
  background: #f2f1ef;
  min-width: 250px;
}

::v-deep .vs__dropdown-option {
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

::v-deep .vs__dropdown-toggle .vs__selected-options {
  border-radius: 2px;
}

::v-deep .vs__dropdown-toggle .vs__actions {
  border-radius: 2px;
}
.maxwidth-200 {
  @media screen and (min-width: 992px) {
    max-width: 200px !important;
  }
}
.maxwidth-100 {
  max-width: 100px !important;
}
.share-btn {
  padding: 6px 10px 4px 10px !important;
  @media screen and (min-width: 1240px) {
    margin-left: 0 !important;
    margin-right: auto !important;
  }
}
</style>
