<template>
  <div
    class="container-fluid online-dashboard-container online-dashboard-content-view"
    id="dashboard-content-page"
  >
    <AppModal
      v-if="showEmptyDateModal"
      title="Please Select Date"
      closeIcon
      @onClose="handleCloseEmptyDateModal"
    />
    <AppModal
      v-if="showClosedQuaterModal"
      title="Producer Accounting Message (Current Quarter Selected)"
      description="The current quarter report can only be downloaded after it is closed. Please check back soon."
      closeIcon
      @onClose="showClosedQuaterModal = false"
    />
    <AppModal
      v-if="showClosedQuaterModalPromoter"
      title="Promoter Accounting Message (Current Quarter Selected)"
      description="The current quarter report can only be downloaded after it is closed. Please check back soon."
      closeIcon
      @onClose="showClosedQuaterModalPromoter = false"
    />
    <AppModal
      v-if="showClosedQuaterModalDJ"
      title="DJ Accounting Message (Current Quarter Selected)"
      description="The current quarter report can only be downloaded after it is closed. Please check back soon."
      closeIcon
      @onClose="showClosedQuaterModalDJ = false"
    />
    <AppModal
      v-if="notDjModal"
      title="Unlock Your DJ Profile"
      closeIcon
      description="DJ Reports are a history of shared playlists from working DJs. Your account is currently  registered as a <span style='text-decoration: underline;'>music producer</span> only.<br><br>If you play paid gigs and would like to share with producers, visit the “DJ Overview” tab and enter your payment details to unlock your DJ account."
      @onClose="closeModalDj"
      custom-footer
    >
      <template #footer>
        <div class="app-modal__footer">
          <button>
            <router-link :to="{ name: 'OverviewType', params: { type: 'dj' } }">
              Go TO DJ OVERVIEW
            </router-link>
          </button>
        </div>
      </template>
    </AppModal>
    <div
      class="d-flex d-lg-none h-100 w-100"
      style="padding: 60px 20px"
      :style="{ 'background-color': isPromoter ? '#616060' : '#442671' }"
    >
      <h1 class="text-white">
        To view and download your <u><b>Accounting</b></u> reports, please try
        resizing or log in from your desktop or laptop.
      </h1>
    </div>
    <div class="row mx-0 d-lg-flex align-self-lg-start d-none mx-0">
      <div class="col-12 py-3 px-4 settings-title-wrapper d-flex">
        <h1 class="settings-title py-0 mb-0">
          {{ isPromoter ? "Reports" : "Accounting" }}
        </h1>
      </div>
      <div
        v-if="isPromoter"
        class="col-12 d-flex flex-column select-report-section px-4 b-right align-items-center justify-content-center"
        :class="{ 'select-report-section--promoter': isPromoter }"
      >
        <div
          class="d-flex flex-column w-100 align-items-center"
          style="max-width: 245px;"
        >
          <h1 class="section-title text-white align-items-center mb-0">
            Events Report
          </h1>
          <v-select
            v-model="djRange"
            class="w-100 mt-4"
            autocomplete="on"
            :searchable="false"
            :options="quarters"
            :clearable="false"
            @option:selected="
              SET_CURRENT_RANGE({ fieldname: 'currentDjRange', ...$event })
            "
          >
            <template #open-indicator="{ attributes }">
              <img
                v-bind="attributes"
                src="@/assets/images/select-arrow-white.svg"
              />
            </template>
          </v-select>
          <ButtonLine
            variant="white"
            class="mt-4"
            @click="
              handleLoadReport({
                apiMethod: 'getAccountingPromoterReport',
                range: currentDjRange,
                role: 'promoter'
              })
            "
          >
            download report
          </ButtonLine>
        </div>
      </div>
      <template v-else>
        <div
          class="col-6 d-flex flex-column select-report-section px-4 b-right align-items-center justify-content-center"
          :class="{ 'select-report-section--promoter': isPromoter }"
        >
          <div
            class="d-flex flex-column w-100 align-items-center"
            style="max-width: 245px;"
          >
            <h1 class="section-title text-white align-items-center mb-0">
              DJ Report
            </h1>
            <v-select
              v-model="djRange"
              class="w-100 mt-4"
              autocomplete="on"
              :searchable="false"
              :options="quarters"
              :clearable="false"
              @option:selected="
                SET_CURRENT_RANGE({ fieldname: 'currentDjRange', ...$event })
              "
            >
              <template #open-indicator="{ attributes }">
                <img
                  v-bind="attributes"
                  src="@/assets/images/select-arrow-white.svg"
                />
              </template>
            </v-select>
            <button
              class="download-report mt-4"
              @click="
                handleLoadReport({
                  apiMethod: 'getAccountingDjReport',
                  userId: user.id,
                  range: currentDjRange,
                  role: 'dj'
                })
              "
            >
              download report
            </button>
            <router-link
              :to="{ name: 'FAQ', query: { anchor: 'payment-method-info' } }"
              class="skip-button underlined-text mt-4 p-0"
            >
              Payment Method / Account FAQ section
            </router-link>
          </div>
        </div>
        <div
          class="col-6 d-flex flex-column select-report-section px-4 align-items-center justify-content-center"
          :class="{ 'select-report-section--promoter': isPromoter }"
        >
          <div
            class="d-flex flex-column w-100  align-items-center"
            style="max-width: 245px;"
          >
            <h1 class="section-title text-white align-items-center mb-0">
              Producer Report
            </h1>
            <v-select
              v-model="producerRange"
              class="w-100 mt-4"
              :searchable="false"
              :options="quartersProducer"
              :clearable="false"
              placeholder="Date"
              @option:selected="
                SET_CURRENT_RANGE({
                  fieldname: 'currentProducerRange',
                  ...$event
                })
              "
            >
              <template #open-indicator="{ attributes }">
                <img
                  v-bind="attributes"
                  src="@/assets/images/select-arrow-white.svg"
                />
              </template>
            </v-select>
            <button
              class="download-report mt-4"
              @click="
                handleLoadReport({
                  apiMethod: 'getAccountingProducerReport',
                  userId: user.id,
                  range: currentProducerRange,
                  role: 'producer'
                })
              "
            >
              download report
            </button>
            <router-link
              class="skip-button underlined-text mt-4 p-0"
              :to="{
                name: 'FAQ',
                query: { anchor: 'payment-method-info' }
              }"
            >
              Payment Method / Account FAQ section
            </router-link>
          </div>
        </div>
      </template>
      <div v-if="isPromoter" class="col-12 pt-3">
        <p class="accounting__explanation">Accounting Details</p>
        <ul class="accounting__text mt-5">
          <li>
            These reports display playlist data in detail by date
            played/reported at your events.
          </li>
          <li>
            All quarterly reports are available once quarter is completed.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "vue2-datepicker/index.css";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import AppModal from "@/components/AppModal";
import ButtonLine from "@/components/global/buttons/ButtonLine.vue";
// import swal from "sweetalert2";

export default {
  components: {
    ButtonLine,
    AppModal
  },
  data() {
    return {
      producerRange: "Date",
      djRange: "Date",
      showEmptyDateModal: false,
      showClosedQuaterModal: false,
      showClosedQuaterModalPromoter: false,
      showClosedQuaterModalDJ: false,
      notDjModal: false
    };
  },
  computed: {
    ...mapState("user", {
      user: state => state.data
    }),
    ...mapState("accounting", {
      quarters: state => state.quarters,
      quartersProducer: state => state.quartersProducer,
      currentDjRange: state => state.currentDjRange,
      currentProducerRange: state => state.currentProducerRange
    }),
    ...mapGetters("user", ["isPromoter"])
  },
  methods: {
    ...mapMutations("accounting", ["SET_CURRENT_RANGE"]),
    ...mapActions("accounting", ["loadReport"]),
    closeModalDj() {
      this.notDjModal = false;
      this.showClosedQuaterModalDJ = false;
    },
    handleLoadReport({ range, role, ...props }) {
      const isDjUser = this.user.roles.some(role => role.name === "dj");
      if (range) {
        const dateFrom = moment.utc(range.from).startOf("month");
        const dateTo = moment.utc(range.to).endOf("month");
        const rangeFrom = dateFrom.toISOString();
        const rangeTo = dateTo.toISOString();
        const quarter = Math.floor((dateFrom.month() + 3) / 3);
        let reportType = "";
        if (role === "promoter") {
          reportType = "Promoter";
          console.log(role);
        }
        if (role === "dj") {
          reportType = "DJ";
          console.log(role);
        }
        if (role === "producer") {
          reportType = "Producer";
          console.log(role);
        }
        const filename = `Q${quarter} ${dateFrom.year()} ${reportType}.pdf`;
        if (role === "producer") {
          if (dateTo.isBefore()) {
            this.loadReport({
              from: rangeFrom,
              to: rangeTo,
              role,
              filename,
              ...props
            });
          } else {
            this.showClosedQuaterModalPromoter = true;
          }
        } else if (role === "dj") {
          if (dateTo.isBefore() && isDjUser) {
            this.loadReport({
              from: rangeFrom,
              to: rangeTo,
              role,
              filename,
              ...props
            });
          } else if (!dateTo.isBefore() && isDjUser) {
            this.showClosedQuaterModalDJ = true;
          } else {
            this.notDjModal = true;
          }
        } else if (role === "promoter") {
          if (dateTo.isBefore()) {
            this.loadReport({
              from: rangeFrom,
              to: rangeTo,
              role,
              filename,
              ...props
            });
          } else {
            this.showClosedQuaterModalPromoter = true;
          }
        }
        // } else {
        //   this.loadReport({
        //     from: rangeFrom,
        //     to: rangeTo,
        //     role,
        //     filename,
        //     ...props
        //   });
        // }
      } else {
        if (role === "dj" && isDjUser) {
          this.showEmptyDateModal = true;
        } else if (role === "dj") {
          this.notDjModal = true;
        } else {
          this.showEmptyDateModal = true;
        }
      }
    },
    handleCloseEmptyDateModal() {
      this.showEmptyDateModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
/**
Rebuild
 */
.gray-text {
  font-size: inherit !important;
  font-family: "Graphik-Regular-Web" !important;
  color: #aaa3b1;
}
.text-link {
  color: #75707b;
  text-decoration: underline;
}
.text-small {
  padding-right: 0;
  text-align: right;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 400;
  color: #aaa3b1;
}

.b-right {
  border-right: solid 1px #aaa3b1;
}

.b-left {
  border-left: solid 1px #aaa3b1;
}
.b-bottom {
  border-bottom: solid 1px #aaa3b1;
}
.b-tol {
  border-top: solid 1px #aaa3b1;
}

.select-report-section {
  background-color: #9182c5;
  min-height: 409px;

  &--promoter {
    background: var(--Core-Grayscale-900, #616060);
  }
}

::v-deep .vs__dropdown-toggle {
  height: 40px;
  padding: 0 !important;
  width: 100% !important;
  border-radius: 2px !important;
  border: 1px solid #fff !important;

  svg path {
    stroke: white;
  }
}

::v-deep .vs__selected-options {
  width: calc(100% - 50px);
  padding: 10px !important;
  margin-top: 0;
}
::v-deep .vs__selected {
  color: white !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 180px;
  display: inline-block;
}
::v-deep .vs__search {
  margin-top: 0;
  color: white !important;
}

::v-deep .vs__dropdown-menu {
  padding-top: 0;
  padding-bottom: 0;
  max-height: 290px;
}

::v-deep .vs__dropdown-option {
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.section-title {
  font-size: 24px;
  font-family: "Europa-Regular";
  line-height: 26px;
  color: #442671;
}

.skip-button {
  color: #fff;
  margin-left: 0;
}

.download-report {
  line-height: 40px;
  border-radius: 50px;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  font-family: "URWForm-Regular";
  min-height: 40px;
  width: 100%;
  color: #fff;
  background: #442671;
  transition: all 0.3s ease-in-out;
}

.download-report:hover {
  color: #442671;
  background: #fff;
  transition: all 0.3s ease-in-out;
}

.accounting__explanation {
  color: var(--Grays-Drk-Gray, #75707b);
  font-family: "Graphik App", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.35px;
  text-transform: uppercase;
}

.accounting__text {
  color: var(--Grays-Drk-Gray, #75707b);
  font-family: "Roboto Mono", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
/**
End Rebuild
 */

::v-deep .vs__actions svg {
  d: path("M1 0.5L6 4.5L11 0.5") !important;
  width: auto;
  height: auto;
  transform-origin: center;
}
</style>

<style lang="scss">
/**
TODO: replace it to global styles
 */
.swal2-content {
  padding: 0;
}
.h-70 {
  height: 70px;
  min-height: 70px;
}

.custom .swal2-actions {
  padding-top: 15px;
  padding-bottom: 15px;
  background: #f2f1ef;
  display: flex;
  justify-content: flex-end;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  & > .swal2-styled.swal2-confirm {
    background-color: #442671 !important;
    color: white !important;
  }

  & > .swal2-loader {
    margin-left: auto;
    margin-right: auto;
  }
}
.background-gray {
  background: #f2f1ef;
}

.border-bottom-4 {
  border-radius: 4px;
}

.complicated-modal__item {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #75707b;
}

.complicated-modal__title {
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  text-transform: capitalize;
  color: #442671;
}
.app-modal__footer button {
  width: auto;
  padding: 0px 20px;
}
.app-modal__footer button a {
  color: inherit;
  text-decoration: none;
}
</style>
