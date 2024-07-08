<template>
  <div
    class="container-fluid online-dashboard-container online-dashboard-content-view"
    id="dashboard-content-page"
  >
    <div
      class="d-flex d-lg-none h-100 w-100"
      style="padding: 60px 20px"
      :style="{ 'background-color': isPromoter ? '#616060' : '#442671' }"
    >
      <h1 class="text-white">
        To view your full
        <u
          ><b>{{ isPromoter ? "Promoter" : "DJ/Producer" }} Overview</b></u
        >, please try resizing or log in from your desktop or laptop.
      </h1>
    </div>
    <div class="row mx-0 h-100 d-lg-flex d-none">
      <div v-if="!isPromoter" class="col-lg-2 col-2 overview-menu-content">
        <div
          class="over-view-menu"
          v-for="menu in visibleTabs"
          :key="menu.id"
          :class="menu.active ? 'overview-menu-acitve' : ''"
          @click="changeOverView(menu.type)"
        >
          <div class="over-view-menu-wrapper">
            <span class="svg-icon" v-html="menu.svgIcon"></span>
            <span class="menu-title">{{ menu.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="d-lg-flex flex-column d-none py-5 px-4"
        :class="{
          'gray-background':
            (overViewMenuArr[0].active &&
              data &&
              !data.roles.some(roleObj => roleObj.name === 'dj') &&
              data.defaultPaymentMethod === null) ||
            (overViewMenuArr[1].active &&
              !data.wiseRecipientId &&
              !data.paypalEmail) ||
            overViewMenuArr[2].active,
          'col-lg-10 col-10': !isPromoter,
          'col-lg-12 col-12': isPromoter
        }"
      >
        <div class="dj-content" v-if="overViewMenuArr[0].active">
          <EndYearBonus v-if="showBonusLine && !$device.mobile" />
          <bottom-popular
            v-if="isAvailable"
            :customType="customType"
            :activeTab="activeTab"
          ></bottom-popular>
          <div
            class="row mx-0"
            v-if="data && data.defaultPaymentMethod !== null"
          >
            <div class="col-3 px-0" style="padding-right: 0">
              <div class="dj-overview-title">
                <h1>Shared in</h1>
                <YearSelect @onChange="handleChangeYear($event, 'dj')" />
              </div>
              <div
                class="dj-overview-shared-information"
                style="margin-top: 30px"
              >
                <p class="information-label">Total shared</p>
                <p
                  class="information-label-value"
                  style="margin: 5px 0; margin-bottom: 7px;"
                >
                  {{ currencySymbol }}{{ totalShared }}
                </p>
                <div class="border-bottom"></div>
              </div>
              <div
                class="dj-overview-shared-information"
                style="margin-top: 32px"
              >
                <p class="information-label">Playlists shared</p>
                <p
                  class="information-label-value"
                  style="margin: 5px 0; margin-bottom: 7px;"
                >
                  {{ playlistShared }}
                </p>
                <div class="border-bottom"></div>
              </div>
            </div>
            <div class="col-6 px-0">
              <ExtendedDoughnut
                v-if="monthData.length > 0 && chartDataAPI.length > 0"
                :monthLabels="monthData"
                :chartData="chartDataAPI"
                :activeTab="activeTab"
                :playlistShared="chartDataAPIPlaylist"
              />
            </div>
            <div class="col-3 px-0" style="text-align: right;">
              <router-link
                class="rounded-button software-download d-inline-block"
                to="/software-download"
                >Download Software</router-link
              >
            </div>
          </div>
          <div v-else class="row mx-0">
            <div class="col-12 px-0" style="text-align: left; max-width: 452px">
              <h3 class="unavailable-title text-capitalize">
                This section is unavailable until you complete the following
                steps.
              </h3>
              <p class="unavailable-text">
                To additionally register as a DJ, we need a few more financial
                details to set you up to make payments. (please click the button
                below)
              </p>
              <button @click="routeToPayments" class="setting-payment">
                <span> set up </span>
              </button>
              <p class="unavailable-text">
                *As a DJ, you can share earnings before verification is
                complete.
              </p>
            </div>
          </div>
        </div>
        <div class="producer-content" v-if="overViewMenuArr[1].active">
          <bottom-popular
            v-if="data.paypalEmail && data.verified"
            :customType="customType"
            :activeTab="activeTab"
          ></bottom-popular>
          <div
            class="row mx-0"
            v-if="
              (data && data.paypalEmail !== null) ||
                (data && data.wiseRecipientId)
            "
          >
            <div class="col-3 px-0">
              <div class="dj-overview-title">
                <h1>Track Stats</h1>
                <YearSelect @onChange="handleChangeYear($event, 'producer')" />
              </div>
              <div
                class="dj-overview-shared-information"
                style="margin-top: 32px"
              >
                <p class="information-label">Total Track plays</p>
                <p
                  class="information-label-value"
                  style="margin: 5px 0; margin-bottom: 7px;"
                >
                  {{ playlistShared }}
                </p>
                <div class="border-bottom"></div>
              </div>
              <p class="settings-text gray-color">
                Individual track stats <br />
                will be visible after <br />
                processing/approval.
              </p>
              <p class="settings-text gray-color">
                Track stats for<br />
                <a
                  class="text-link"
                  href="https://aslice.com/online-dashboard/preferences/profile"
                  >Alias(s) or Group <br />Membership(s)
                </a>
                will not<br />
                appear until verified.
              </p>
              <div
                class="dj-overview-shared-information"
                style="margin-top: 32px"
              >
                <button @click="routeToAccounting" class="rounded-button">
                  Accounting
                </button>
              </div>
            </div>
            <div class="col-6 px-0">
              <ExtendedDoughnut
                v-if="monthData.length > 0 && chartDataAPI.length > 0"
                :monthLabels="monthData"
                :chartData="chartDataAPI"
                :activeTab="activeTab"
                :playlistShared="chartDataAPIPlaylist"
              />
            </div>
          </div>
          <div v-else class="row mx-0">
            <div class="col-12 px-0" style="text-align: left; max-width: 452px">
              <h3 class="unavailable-title text-capitalize">
                This section is unavailable until you complete the following
                steps.
              </h3>
              <p class="unavailable-text">
                To additionally register as a producer, we need a few more
                financial details to set you up to receive payments. (please
                click the button below)
              </p>
              <button @click="routeToPaymentsReceiving" class="setting-payment">
                <span> set up </span>
              </button>
              <p class="unavailable-text">
                *As a DJ, you can share earnings before verification is
                complete. However, to protect producers who receive money, you
                have to be fully verified to access this section. Don�t worry,
                any tracks of yours that are played are still counted and will
                be visible as soon as this process is complete (verification can
                take up to 30 days.)
              </p>
            </div>
          </div>
        </div>
        <div class="fan-content" v-if="overViewMenuArr[2].active">
          <h1 class="main-title">This section is coming soon.</h1>
        </div>
        <div
          class="promoter-content"
          v-else-if="isPromoter && overViewMenuArr[3].active"
        >
          <bottom-popular
            :customType="customType"
            :activeTab="activeTab"
          ></bottom-popular>
          <div class="row mx-0">
            <div class="col-3 px-0">
              <div class="dj-overview-title">
                <h1>Shared In</h1>
              </div>
            </div>
          </div>
          <div class="row mx-0">
            <div class="col-3 px-0">
              <div class="dj-overview-title">
                <YearSelect @onChange="handleChangeYear($event, 'promoter')" />
              </div>
              <div
                class="dj-overview-shared-information"
                style="margin-top: 32px"
              >
                <p class="information-label">Playlists shared</p>
                <p
                  class="information-label-value"
                  style="margin: 5px 0; margin-bottom: 7px;"
                >
                  {{ playlistShared }}
                </p>
                <div class="border-bottom"></div>
              </div>
              <div
                class="dj-overview-shared-information"
                style="margin-top: 32px"
              >
                <div class="d-none">
                  <ButtonLine @click="handleAsliceInvite">
                    Aslice invite
                  </ButtonLine>
                </div>
                <div class="mt-4">
                  <ButtonLine hoverEffect @click="handlePromoterAssets">
                    Promoter assets
                  </ButtonLine>
                </div>
              </div>
            </div>
            <div class="col-6 px-0">
              <ExtendedDoughnut
                style="margin: 50px"
                v-if="!!monthData.length && !!chartDataAPI.length"
                :monthLabels="monthData"
                :chartData="chartDataAPI"
                :activeTab="activeTab"
                :playlistShared="chartDataAPIPlaylist"
              />
            </div>
          </div>
        </div>
        <div class="fan-content" v-if="overViewMenuArr[4].active">
          <iframe id="charityEventBanner" src="https://forms.gle/hpAmFB9Mja6iSME16"  width="100%" height="2000px" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe>
        </div>
      </div>
    </div>
    <div
      class="background-content"
      v-if="background"
      @click="hideAllCollapse"
    ></div>
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
        <div class="app-modal__input" style="margin-top: 20px;">
          <label>Enter DJ Name</label>
          <input type="text" v-model="inviteDjName" placeholder="DJ" required />
        </div>
        <div class="app-modal__input" style="margin-top: 20px;">
          <label>Enter DJ Email</label>
          <input
            type="email"
            v-model="inviteDjEmail"
            placeholder="example@domain.com"
            required
          />
        </div>
        <p class="app-modal__description" ref="copyText">
          Hi
          <span class="highlighted-text">{{ inviteDjName }}</span
          >,<br />
          <br />
          I wanted to let you know that our venue is part of a new initiative to
          support creators. The new project is called
          <b>Support The Sound</b> and is powered by Aslice. You can find out
          more about this new initiative at
          <a href="http://supportthesound.org" target="_blank"
            >supportthesound.org</a
          >.<br />
          <br />
          It appears you’re not in Aslice's system yet. Please take a moment to
          register at <a href="https://aslice.com">aslice.com</a> if you have
          already performed or will be performing with us in the future.<br />
          <br />
          Learn how you can become part of a fairer music ecosystem.<br />
          <br />
          Thanks,<br />
          {{ data.primeVenueName }}
        </p>
        <br />
      </template>
      <template #footer>
        <div class="app-modal__footer">
          <span class="underlined-text gray-text" @click="copyInvitationText"
            >Copy Invite Text</span
          >
          <button
            class="px-4"
            :disabled="!canSendInvite"
            @click="handleSendInvitation"
          >
            Invite
          </button>
        </div>
      </template>
    </AppModal>
    <AppModal
      v-if="isAssetsPopupOpen"
      closeIcon
      customFooter
      customContent
      @onClose="handleCloseAssetsModal"
    >
      <template #body>
        <h2 class="app-modal__title" style="margin-bottom: 20px;">
          Promoter Assets
        </h2>
        <p
          class="app-modal__description"
          style="color: #91918F; font-size: 14px; margin-bottom: 20px; display: block;"
        >
          Resources for Support The Sound members.
        </p>
        <div class="app-modal__divider"></div>
        <ol style="list-style-type: none; margin-left: 0; padding-left: 0; font-family: Roboto-Mono;">
          <li style="color: #0000FF; font-size: 14px; padding-bottom: 10px;">
            <span
              style="color: #9856FC; cursor: pointer; text-decoration: underline;"
              href="#"
              @click="handlePromoterSupport"
              class="hover-support-link"
              >Introduction Email Template</span
            >
          </li>
          <span
            style="color: #75707B; font-size: 14px; margin-bottom: 20px; display: block;"
            >Copy-And-Paste Instructions</span
          >
          <li style="color: #0000FF; font-size: 14px; padding-bottom: 10px;">
            <a
              style="color: #9856FC; text-decoration: underline;"
              href="https://aslice-storage.s3.amazonaws.com/Support+The+Sound+PDFs.zip"
              >Support The Sound Promo PDFs (.zip)</a
            >
          </li>
          <span
            style="color: #75707B; font-size: 14px; margin-bottom: 20px; display: block;"
            >Attach This Document To Your <br />Emails For DJs and Agents</span
          >

          <li style="color: #0000FF; font-size: 14px; padding-bottom: 10px;">
            <a
              style="color: #9856FC; text-decoration: underline;"
              href="https://docs.google.com/document/d/13HHnu9nFggCgsz4MiM-t_FuDtZ6lUNZxo-FcH778FSk/edit"
              target="_blank"
              >FAQs</a
            >
          </li>
          <span
            style="color: #75707B; font-size: 14px; margin-bottom: 20px; display: block;"
            >
            Copy-And-Paste Answers</span
          >
          <li style="color: #0000FF; font-size: 14px; padding-bottom: 10px;">
            <a
              style="color: #9856FC; text-decoration: underline;"
              href="https://drive.google.com/drive/folders/1Smx8GX65GI58wymEveE1FrVzSXTlGqE_?usp=drive_link"
              target="_blank"
              >Logo Pack</a
            >
          </li>
        </ol>
      </template>
      <template #footer>
        <div class="app-modal__footer">
          <button class="px-4 btn-support-close" @click="handleDownloadAssets">
            Close
          </button>
        </div>
      </template>
    </AppModal>
    <AppModal
      v-if="isSupportPopupOpen"
      closeIcon
      customFooter
      customContent
      @onClose="handleCloseSupportModal"
      class="modal-promoter-support"
    >
      <template #body>
        <h2
          class="app-modal__title"
          style="margin-bottom: 20px; max-width: 292px;"
        >
          Support The Sound Email Instructions
        </h2>
        <hr style="background-color: #303030; margin-bottom: 30px;" />
        <ol style="padding-left: 15px; color: #303030;">
          <li style="font-weight: bold; font-size: 16px;">
            <div style="display: flex; align-items: baseline;">
              <span
                style="color: #303030; font-weight: bold; margin-right: 10px;"
              >
                Create New Email With Subject Line:
              </span>
            </div>
          </li>
          <span
            style="color: #4B4B4B; font-size: 16px; font-weight: 500; margin-bottom: 8px; display: inline-block;"
            >DJs & Agents: We have joined Support The Sound! Please read before
            your upcoming booking</span
          >
          <li style="font-weight: bold; font-size: 16px;">
            <div
              style="display: flex; align-items: baseline; margin-bottom: 8px;"
            >
              <span
                style="color: #303030; font-weight: bold; margin-right: 10px;"
              >
                Click “Next”
              </span>
              <span style="font-size: 16px; font-weight: 400;">
                button to view the template.
              </span>
            </div>
          </li>
          <li style="font-weight: bold; font-size: 16px;">
            <div
              style="display: flex; align-items: baseline; margin-bottom: 8px;"
            >
              <span
                style="color: #303030; font-weight: bold; margin-right: 10px;"
              >
                Copy Text,
              </span>
              <span style="font-size: 16px; font-weight: 400;">
                paste into your email, and add your signature.
              </span>
            </div>
          </li>
          <li style="font-weight: bold; font-size: 16px;">
            <div
              style="display: flex; align-items: baseline; margin-bottom: 8px;"
            >
              <span style="font-size: 16px; font-weight: 400;">
                <span
                  style="color: #303030; font-weight: bold; margin-right: 5px; min-width: 170px;"
                >
                  Download And Attach
                </span>
                the
                <a
                  style="color: #0000FF; font-weight: 600;"
                  href="https://aslice-storage.s3.amazonaws.com/Support+The+Sound+Explained+-+For+DJs+%26+Agents.pdf"
                  target="_blank"
                  >Support The Sound Explained (.pdf)</a
                >
                to the email that answers all common questions about the
                initiative.
              </span>
            </div>
          </li>
          <li style="font-weight: bold; font-size: 16px;">
            <div
              style="display: flex; align-items: baseline; margin-bottom: 8px;"
            >
              <span
                style="color: #303030; font-weight: bold; margin-right: 10px;"
              >
                Send to DJs and agents
              </span>
              <span style="font-size: 16px; font-weight: 400;">
                before your event!
              </span>
            </div>
          </li>
        </ol>
      </template>
      <template #footer>
        <div class="app-modal__footer">
          <a href="/supportthesound" style="margin-right: 20px;">
            <ButtonLine
              class="btn-support-next"
              @click="handleNextCopyPage"
              onmouseover="this.style.backgroundColor='#fff';"
              onmouseout="this.style.backgroundColor='transparent';"
              style="background: none !important; border: 1px solid var(--Purples-Lt-Purple, #442671); color: var(--Purples-Lt-Purple, #442671);"
            >
              Next
            </ButtonLine></a
          >
          <button
            class="px-4 btn-support-close"
            @click="handleCloseSupportModal"
          >
            Close
          </button>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script>
import BottomPopular from "@/components/PopularProducerAndTracks";
import { mapState, mapGetters, mapMutations } from "vuex";
import swal from "sweetalert2";
import api from "@/service/api";
import { loadStripe } from "@stripe/stripe-js";
import ExtendedDoughnut from "../../components/ExtendedDoughnut.vue";
import YearSelect from "@/components/YearSelect.vue";
import EndYearBonus from "@/components/EndYearBonus.vue";
import AppModal from "@/components/AppModal.vue";
import ButtonLine from "@/components/global/buttons/ButtonLine.vue";

const clientId = process.env.VUE_APP_STRIPE_KEY;
export default {
  components: {
    ButtonLine,
    YearSelect,
    EndYearBonus,
    BottomPopular,
    ExtendedDoughnut,
    AppModal
  },
  data() {
    return {
      listsCurrency: [{ name: "USD" }, { name: "EUR" }, { name: "GBP" }],
      preferredSelected: null,
      preferredSelectedDefault: "USD",
      currentYear: new Date().getFullYear(),
      totalShared: 0,
      playlistShared: 0,
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      },
      monthData: [],
      chartDataAPI: [],
      chartDataAPIPlaylist: [],
      isInvitationPopupOpen: false,
      isAssetsPopupOpen: false,
      isSupportPopupOpen: false,
      isSendingInvite: false,
      inviteDjName: "",
      inviteDjEmail: "",
      overViewMenuArr: [
        {
          active: false,
          forRole: "dj",
          type: "dj",
          name: "DJ Overview",
          svgIcon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88882 23.5164H8V29.5861H9.88882V23.5164Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M31.9997 23.5164H30.1108V29.5861H31.9997V23.5164Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M29.5779 21.2043H25.589C25.2944 21.2043 25.0557 21.4431 25.0557 21.7377V31.3648C25.0557 31.6594 25.2944 31.8982 25.589 31.8982H29.5779C29.8725 31.8982 30.1113 31.6594 30.1113 31.3648V21.7377C30.1113 21.4431 29.8725 21.2043 29.5779 21.2043Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M14.4114 21.2043H10.4225C10.1279 21.2043 9.88916 21.4431 9.88916 21.7377V31.3648C9.88916 31.6594 10.1279 31.8982 10.4225 31.8982H14.4114C14.706 31.8982 14.9448 31.6594 14.9448 31.3648V21.7377C14.9448 21.4431 14.706 21.2043 14.4114 21.2043Z" stroke="#442671" stroke-miterlimit="10"/>
<path d="M27.0811 12.9826C26.2328 11.9188 25.1557 11.0598 23.9298 10.4695C22.704 9.87913 21.3609 9.57257 20.0003 9.57257C18.6397 9.57257 17.2965 9.87913 16.0707 10.4695C14.8448 11.0598 13.7677 11.9188 12.9194 12.9826" stroke="#442671" stroke-miterlimit="10"/>
<path d="M9.33057 23.5165V18.7712C9.33057 15.9415 10.4547 13.2277 12.4556 11.2268C14.4565 9.2259 17.1703 8.10181 20 8.10181C22.8297 8.10181 25.5435 9.2259 27.5444 11.2268C29.5453 13.2277 30.6694 15.9415 30.6694 18.7712V23.5165" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`,
          id: 10
        },
        {
          active: false,
          forRole: "producer",
          type: "producer",
          name: "Producer Overview",
          svgIcon: `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8501 9.34406H16.6471" stroke="#442671" stroke-miterlimit="10"/>
<path d="M18.4529 9.34406H16.647" stroke="#442671" stroke-miterlimit="10"/>
<path d="M20.2502 9.34406H18.4531" stroke="#442671" stroke-miterlimit="10"/>
<path d="M14.8501 30.6667H20.2501" stroke="#442671" stroke-miterlimit="10"/>
<path d="M23.853 9.34406H25.6501" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.65 30.6667H20.25" stroke="#442671" stroke-miterlimit="10"/>
<path d="M22.047 9.34406H20.25" stroke="#442671" stroke-miterlimit="10"/>
<path d="M22.0469 9.34406H23.8528" stroke="#442671" stroke-miterlimit="10"/>
<path d="M20.25 21.752V30.6666" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.6499 30.6667H30.5166C30.658 30.6667 30.7937 30.6105 30.8937 30.5105C30.9937 30.4105 31.0499 30.2748 31.0499 30.1334V9.87739C31.0499 9.73594 30.9937 9.60028 30.8937 9.50026C30.7937 9.40025 30.658 9.34406 30.5166 9.34406H27.4469" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.6499 9.34406H27.4469" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.6499 30.6666V21.752" stroke="#442671" stroke-miterlimit="10"/>
<path d="M13.0532 9.34406H14.8503" stroke="#442671" stroke-miterlimit="10"/>
<path d="M13.0531 9.34406H9.98353C9.84208 9.34406 9.70642 9.40025 9.6064 9.50026C9.50639 9.60028 9.4502 9.73594 9.4502 9.87739V30.1334C9.4502 30.2748 9.50639 30.4105 9.6064 30.5105C9.70642 30.6105 9.84208 30.6667 9.98353 30.6667H14.8502" stroke="#442671" stroke-miterlimit="10"/>
<path d="M14.8501 30.6666V21.752" stroke="#442671" stroke-miterlimit="10"/>
<path d="M13.0527 9.34399V21.752H14.8498" stroke="#442671" stroke-miterlimit="10"/>
<path d="M13.0527 9.34398V9.33331H16.6469V9.34398" stroke="#442671" stroke-miterlimit="10"/>
<path d="M14.8501 21.752H16.6472V9.34399" stroke="#442671" stroke-miterlimit="10"/>
<path d="M22.0472 9.34398V9.33331H18.4531V9.34398" stroke="#442671" stroke-miterlimit="10"/>
<path d="M18.4531 9.34399V21.752H20.2502" stroke="#442671" stroke-miterlimit="10"/>
<path d="M22.0471 9.34399V21.752H20.25" stroke="#442671" stroke-miterlimit="10"/>
<path d="M25.6499 21.752H27.447V9.34399" stroke="#442671" stroke-miterlimit="10"/>
<path d="M23.853 9.34399V21.752H25.6501" stroke="#442671" stroke-miterlimit="10"/>
<path d="M23.853 9.34398V9.33331H27.4472V9.34398" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`,
          id: 11
        },
        {
          active: false,
          forRole: "fan",
          type: "fan",
          name: "Fan",
          svgIcon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9451 11.2168L20.0018 12.1591L19.0594 11.2158C17.8098 9.96493 16.1145 9.26167 14.3464 9.26074C12.5783 9.25982 10.8822 9.96131 9.63136 11.2109L9.63135 11.2109C8.38045 12.4605 7.67719 14.1558 7.67627 15.9239C7.67535 17.692 8.37684 19.3881 9.62643 20.639L10.5688 21.5823L19.5208 30.5436C19.6457 30.6687 19.8153 30.7391 19.9921 30.7392C20.1689 30.7392 20.3385 30.6691 20.4636 30.5441L30.3682 20.6498C31.6191 19.4002 32.3224 17.7049 32.3233 15.9368C32.3242 14.1687 31.6227 12.4726 30.3732 11.2217L30.3731 11.2217C29.7544 10.6023 29.0197 10.1109 28.2111 9.77545C27.4024 9.43999 26.5356 9.2671 25.6601 9.26665C24.7846 9.26619 23.9176 9.43818 23.1086 9.77279C22.2996 10.1074 21.5644 10.5981 20.9451 11.2168V11.2168Z" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`,
          id: 12
        },
        {
          active: false,
          forRole: "promoter",
          type: "promoter",
          name: "Promoter",
          svgIcon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9451 11.2168L20.0018 12.1591L19.0594 11.2158C17.8098 9.96493 16.1145 9.26167 14.3464 9.26074C12.5783 9.25982 10.8822 9.96131 9.63136 11.2109L9.63135 11.2109C8.38045 12.4605 7.67719 14.1558 7.67627 15.9239C7.67535 17.692 8.37684 19.3881 9.62643 20.639L10.5688 21.5823L19.5208 30.5436C19.6457 30.6687 19.8153 30.7391 19.9921 30.7392C20.1689 30.7392 20.3385 30.6691 20.4636 30.5441L30.3682 20.6498C31.6191 19.4002 32.3224 17.7049 32.3233 15.9368C32.3242 14.1687 31.6227 12.4726 30.3732 11.2217L30.3731 11.2217C29.7544 10.6023 29.0197 10.1109 28.2111 9.77545C27.4024 9.43999 26.5356 9.2671 25.6601 9.26665C24.7846 9.26619 23.9176 9.43818 23.1086 9.77279C22.2996 10.1074 21.5644 10.5981 20.9451 11.2168V11.2168Z" stroke="#442671" stroke-miterlimit="10"/>
</svg>
`,
          id: 13
        },
        {
          active: false,
          forRole: "vote",
          type: "vote",
          name: "Vote For Charity",
          svgIcon: `<svg width="40" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5916 20.5811C15.8886 20.5811 20.1827 16.2915 20.1827 11C20.1827 5.70849 15.8886 1.41888 10.5916 1.41888C5.29457 1.41888 1.00049 5.70849 1.00049 11C1.00049 16.2915 5.29457 20.5811 10.5916 20.5811Z" stroke="#442671" stroke-width="2" stroke-miterlimit="10"/>
<path d="M15.9339 7.79999L9.53386 14.2L6.33386 11" stroke="#442671" stroke-width="2" stroke-miterlimit="10"/>
</svg>
`,
          id: 14
        }
      ]
    };
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapState("djdashboard", ["background"]),
    ...mapState("app", ["showCharityEventBanner"]),
    ...mapGetters({
      currencySymbol: "user/currencySymbol"
    }),
    ...mapGetters("djdashboard", ["showBonusLine"]),
    ...mapGetters("user", ["isPromoter"]),
    isAvailable() {
      const getActive = this.overViewMenuArr.find(x => x.active);
      let resultBoolean = false;
      if (
        getActive.forRole === "dj" &&
        (this.customType == "dj" || this.customType == "dj-producer")
      ) {
        resultBoolean = true;
      }
      if (
        (getActive.forRole === "producer" || getActive.forRole === "dj") &&
        (this.customType == "producer" || this.customType == "dj-producer") &&
        this.data.paypalEmail
      ) {
        resultBoolean = true;
      }
      if (
        getActive.forRole === "fan" &&
        (this.customType == "fan" || this.customType == "dj-producer")
      ) {
        resultBoolean = true;
      }
      return resultBoolean;
    },
    activeTab() {
      return this.overViewMenuArr.find(x => x.active === true);
    },
    visibleTabs() {
      let result = this.overViewMenuArr;

      if (!this.showCharityEventBanner) {
        result = result.filter(tab => tab.type !== "vote");
      }

      result = result.filter(tab => tab.type !== "fan");

      if (!this.isPromoter) {
        result = result.filter(tab => tab.type !== "promoter");
      }

      return result;
    },
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
    canSendInvite() {
      return !this.isSendingInvite && this.inviteDjName && this.inviteDjEmail;
    }
  },
  async created() {
    if (this.registrationForm) {
      console.log(this.registrationForm);
    }
    if (localStorage.getItem("redirectedFromProccess")) {
      localStorage.removeItem("redirectedFromProccess");
    }
    if (localStorage.getItem("redirectStripeFromSettings")) {
      localStorage.removeItem("redirectStripeFromSettings");
    }

    if (
      this.$route &&
      this.$route.params &&
      this.$route.params.historyPlaylistId
    ) {
      this.overViewMenuArr[2].active = true;
      return;
    }
  },
  watch: {
    "$route.params": {
      handler: function({ type = "" }) {
        const menuItem = this.overViewMenuArr.find(menu => menu.type === type);
        if (menuItem) {
          this.overViewMenuArr.forEach(menu => {
            menu.active = menu.id === menuItem.id;
          });

          this.totalShared = 0;
          this.playlistShared = 0;
          this.chartDataAPI = [];
          this.chartDataAPIPlaylist = [];

          if (this.customType === "dj" && this.overViewMenuArr[0].active) {
            this.getDJSharedData();
          }
          if (
            this.customType === "producer" &&
            this.overViewMenuArr[1].active
          ) {
            this.getPlayedProducersTracks();
          }
          if (
            this.customType === "dj-producer" &&
            this.overViewMenuArr[0].active
          ) {
            this.getDJSharedData();
          }
          if (
            this.customType === "dj-producer" &&
            this.overViewMenuArr[1].active
          ) {
            this.getPlayedProducersTracks();
          }

          if (this.isPromoter) {
            this.getPromoterSharedData();
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapMutations({
      updateCurrency: "user/updateCurrency"
    }),
    ...mapMutations("djdashboard", ["setYear"]),
    async updateCurrencyApi() {
      const payload = {
        preferredCurrency: `${this.preferredSelectedDefault}`
      };
      swal.showLoading();
      const response = await api.updateUser(this.data.id, payload);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      swal.close();
    },
    async onChangeSelectedCurrency() {
      await this.updateCurrencyApi();
      this.updateCurrency(this.preferredSelectedDefault);
    },
    async handleChangeYear(year, type) {
      this.currentYear = year;
      this.setYear();

      if (type === "dj") {
        await this.getDJSharedData();
      } else if (type === "producer") {
        await this.getPlayedProducersTracks();
      } else if (type === "promoter") {
        await this.getPromoterSharedData();
      }
    },
    async getPayPalUrl() {
      swal.showLoading();
      const response = await api.getPayPalredirectingUrl();
      if (response && response.Data && response.Data.url) {
        localStorage.setItem("redirectStripeFromOverview", "paypal");
        swal.close();
        window.location.href = response.Data.url;
      } else {
        swal.fire({
          icon: "error",
          text: response.Error
        });
      }
    },
    async sendStripAccId() {
      swal.showLoading();
      const response = await api.postStripeAccount(this.data.stripeAccountId);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      swal.close();
      localStorage.setItem("redirectStripeFromOverview", "stripe");
      window.location.href = response.Data;
    },
    async getStripeUrl() {
      const stripePromise = loadStripe(clientId);
      swal.showLoading();
      const response = await api.postStripeSessionId(
        this.data.stripeCustomerId
      );
      if (response && response.Data) {
        localStorage.setItem("redirectStripeFromOverview", "stripe");
        swal.close();
        const stripe = await stripePromise;
        await stripe
          .redirectToCheckout({ sessionId: response.Data })
          .then(function(result) {
            swal.fire({
              icon: "error",
              text: result.error.message
            });
          });
      }
    },
    routeToAccounting() {
      this.$router.push({ name: "Accounting" }).catch(() => {});
    },
    routeToPayments() {
      this.$router.push({ name: "Payments" }).catch(() => {});
    },
    routeToPaymentsReceiving() {
      this.$router
        .push({ name: "Payments", hash: "#payment-section" })
        .catch(() => {});
    },
    handleAsliceInvite() {
      this.isInvitationPopupOpen = true;
    },
    handlePromoterAssets() {
      this.isAssetsPopupOpen = true;
    },
    handlePromoterSupport() {
      this.isSupportPopupOpen = true;
      this.isAssetsPopupOpen = false;
    },
    async getDJSharedData() {
      this.chartDataAPI.splice(0, this.chartDataAPI.length);
      this.monthData.splice(0, this.monthData.length);
      const response = await api.getSharedData(this.currentYear);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      if (response.Data.byMonth) {
        this.totalShared = response.Data.totalMoneyShared;
        this.playlistShared = response.Data.totalPlaylistsShared;
        for (const monthObj in response.Data.byMonth) {
          this.monthData.push(monthObj);
          const obj = response.Data.byMonth[monthObj];
          for (var prop in obj) {
            if (prop === "moneyShared") {
              this.chartDataAPI.push(obj[prop]);
            }
            if (prop === "playlistsShared") {
              this.chartDataAPIPlaylist.push(obj[prop]);
            }
          }
          let sum = 0;
          this.chartDataAPI.forEach(el => {
            sum = sum + el;
          });
          sum = (sum / this.chartDataAPI.length / 100) * 10;
          this.chartDataAPI = this.chartDataAPI.map(x =>
            x > sum ? x : 100.99
          );
        }
      }
    },
    async getPromoterSharedData() {
      this.chartDataAPI.splice(0, this.chartDataAPI.length);
      this.monthData.splice(0, this.monthData.length);

      const response = await api.getPromoterSharedData(this.currentYear);

      if (response.Error || response.Data.Error) {
        await swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }

      if (!response.Data.byMonth) {
        return;
      }

      this.playlistShared = response.Data.totalPlaylistsShared;

      for (const monthObj in response.Data.byMonth) {
        this.monthData.push(monthObj);
        const obj = response.Data.byMonth[monthObj];

        for (const prop in obj) {
          if (prop === "playlistsShared") {
            this.chartDataAPI.push(obj[prop]);
            this.chartDataAPIPlaylist.push(obj[prop]);
          }
        }
      }
    },
    async getPlayedProducersTracks() {
      this.monthData.splice(0, this.monthData.length);
      this.chartDataAPI.splice(0, this.chartDataAPI.length);
      const response = await api.getProducerPlayedTracks(this.currentYear);
      if (response.Error || response.Data.Error) {
        swal.fire({
          icon: "error",
          text: response.Error
        });
        return;
      }
      if (response.Data.byMonth) {
        // this.totalShared = response.Data.totalMoneyShared;
        this.playlistShared = response.Data.totalTracksPlayed;
        for (const monthObj in response.Data.byMonth) {
          this.monthData.push(monthObj);
          const obj = response.Data.byMonth[monthObj];
          for (var prop in obj) {
            if (prop === "tracksPlayed") {
              this.chartDataAPI.push(obj[prop]);
            }
          }
        }
      }
      this.chartDataAPI.forEach(element => {
        if (element == 0) {
          element = 0.1;
        }
      });
    },
    hideAllCollapse() {
      this.$store.commit(
        "djdashboard/setTrackMonthCollaps",
        !this.trackMonthCollapsed
      );
      this.$store.commit(
        "djdashboard/setProducerMonthCollaps",
        !this.producerMonthCollapsed
      );
    },
    changeOverView(viewType) {
      const { type = "" } = this.$route.params;
      if (type !== viewType) {
        this.$router.push({ name: "OverviewType", params: { type: viewType } });
      }
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
        await swal.fire({
          icon: "success",
          text: "Copied to clipboard"
        });
      } catch (e) {
        await swal.fire({
          icon: "error",
          title: e.message
        });
      }
    },
    handleCloseInviteModal() {
      this.isInvitationPopupOpen = false;
      this.inviteDjName = "";
      this.inviteDjEmail = "";
    },
    handleCloseAssetsModal() {
      this.isAssetsPopupOpen = false;
    },
    handleCloseSupportModal() {
      this.isSupportPopupOpen = false;
    },
    handleNextCopyPage() {
      //
    },
    async handleSendInvitation() {
      this.isSendingInvite = true;
      await swal.fire({
        icon: "warning",
        text: "Will be available soon"
      });
      this.isSendingInvite = false;
      this.handleCloseInviteModal();
    },
    async handleDownloadAssets() {
      this.handleCloseAssetsModal();
    }
  },
  mounted() {
    if (!this.preferredSelected) {
      this.preferredSelected = this.data.preferredCurrency;
    }
  }
};
</script>

<style scoped>
.selected-currenccy {
  height: 35px;
  padding: 7px 10px !important;
  width: 100% !important;
  border-radius: 0 !important;
  background: #aaa3b1;
  color: #ffffff;
  border: 1px solid #ffffff !important;
}
.selected-currenccy p {
  padding-top: 3px;
}
select:active,
select:focus {
  outline: none;
}
.rounded-button.software-download {
  padding: 11px 20px;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 1.82px;
}
.text-link {
  color: #75707b;
  text-decoration: underline;
}
@media (max-width: 1635px) {
  .rounded-button.software-download {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
  }
}
@media (max-width: 1330px) {
  .rounded-button.software-download {
    padding: 11px 20px;
    letter-spacing: 1px;
  }
}
@media (max-width: 1200px) {
  .rounded-button.software-download {
    padding: 6px 10px;
    font-size: 12px;
    letter-spacing: 0;
  }
}
#overview {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2f1ef;
  margin-left: 70px;
}
.overview-menu-content {
  padding: 0;
  border-right: 1px solid #aaa3b1;
}
.overview-content {
  padding-top: 35px;
  padding-left: 40px;
}
.over-view-menu {
  cursor: pointer;
  padding: 14.5px 1em;
  padding-left: 2em;
  width: 100%;
  border-bottom: 1px solid #aaa3b1;
}
.over-view-menu-wrapper {
  text-align: left;
  /* max-width: 180px; */
  margin: 0 auto;
  min-height: 40px;
  display: flex;
  align-items: center;
}
.over-view-menu-wrapper .menu-title {
  padding-left: 10px;
}
.overview-menu-acitve {
  background: #9182c5;
}
.overview-menu-acitve .menu-title {
  color: #fff;
}
.fan-overview {
  background: #aaa3b1;
  padding: 20px;
}
.dj-overview-title {
  font-family: "Europa-Regular", sans-serif;
  text-align: left;
}
.dj-overview-title h1:first-child {
  font-size: 54px;
  color: #aaa3b1;
  margin: 0;
}
.dj-overview-title h1:nth-child(2) {
  margin: 0;
  font-size: 54px;
  color: #442671;
}
.border-bottom {
  width: 50%;
  border-bottom: 1px solid #aaa3b1 !important;
}
.information-label {
  text-transform: uppercase;
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 0.15em;
}
.information-label-value {
  font-family: "Roboto-Mono", monospace;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
}
.background-content {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 8;
  top: 0;
  left: 0;
}
.dj-overview-shared-information {
  text-align: left;
}
.rounded-button {
  text-transform: uppercase;
  letter-spacing: 4px;
  padding-top: 6px;
}
.gray-background {
  background: #aaa3b1;
}
.stripe-wrapper {
  background: #f2f1ef;
  border-color: #aaa3b1;
  padding: 27px 44px;
}
.paypal-wrapper {
  height: 300px;
}
.stripe-button {
  background: transparent;
}
.form-group label {
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
  color: #75707b;
  margin-bottom: 0;
}
.form-group input {
  font-size: 12px;
  font-family: "Roboto-Mono", monospace;
}
.margin-top-05 {
  font-size: 14px;
  font-family: "Europa-Regular", sans-serif;
}
.add-rl {
  text-decoration: underline;
  color: #442671;
  font-family: "Roboto-Mono", monospace;
  font-size: 12px;
}
.settings-text {
  margin-top: 16px;
  line-height: 13px;
  font-size: 11px;
  color: #442671;
  text-align: left;
  font-family: "Roboto-Mono", monospace;
}
.gray-color {
  color: #75707b;
}

::v-deep .doughnut {
  z-index: 1;
}

::v-deep .doughnut__info {
  z-index: -1;
}

::v-deep .doughnut__info ~ * {
  z-index: 1000;
}

::v-deep .doughnut__value {
  display: flex;
  justify-content: center;
}

::v-deep .doughnut__text {
  text-align: center;
}
</style>
<style>
.setting-payment {
  display: flex;
  height: 40px;
  padding: 10px 20px 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #442671;
  background: #f2f1ef;
}
.setting-payment span {
  font-family: "Graphik-Regular-Web", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 1.82px;
  text-transform: uppercase;
  color: #442671;
}
#charityEventBanner {
  height: 2000px !important;
}
iframe {
  /* overflow: auto!important; */
  height: 120vh !important;
}
@media (max-height: 980px) {
  iframe {
    height: 150vh !important;
  }
}
@media (max-height: 768px) {
  iframe {
    height: 200vh !important;
  }
}
.modal-promoter-support .app-modal__container {
  min-width: 670px;
}
.btn-support-next {
  max-width: 80px !important;
  padding: 0px 18px 0px 18px !important;
  min-width: 40px !important;
}
.btn-support-close {
  font-family: Graphik App, sans-serif;
  padding: 8px 20px 8px 20px;
}
</style>
