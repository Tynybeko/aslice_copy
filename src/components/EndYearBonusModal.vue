<template>
  <b-modal
    :visible="open"
    centered
    class="year-bonus-modal"
    dialog-class="bonus-dialog"
    header-class="bonus-header"
    body-class="bonus-body"
    footer-class="bonus-footer"
    @hide="handleCloseModal"
  >
    <template #modal-header="{ close }">
      <div class="app-modal__header">
        <h5>End of year Producer bonus</h5>
        <img
          class="app-modal__close"
          src="@/assets/images/close-groups-modal.svg"
          @click="close"
          alt="close icon"
        />
      </div>
    </template>
    <template #default>
      <div class="app-modal__user-select">
        <img
          v-if="data.avatar"
          :src="avatar"
          alt=""
          class="app-modal__user-icon"
        />
        <v-select
          v-if="step === 1"
          v-model="performer"
          :options="performers"
          label="name"
          closeOnSelect
          :searchable="false"
          :clearable="false"
        >
          <template #open-indicator="{ attributes }">
            <img
              v-bind="attributes"
              src="@/assets/images/select-arrow-purple.svg"
              alt="show"
            />
          </template>
        </v-select>
        <span v-else>{{ performer.name }}</span>
      </div>
      <div class="app-modal__body">
        <template v-if="step === 1">
          <p class="app-modal__description">
            You have supported {{ numArtists }} artists during the past year
            through your playlist contributions and uploads. Now is your chance
            to give a little bonus to all those artists again.
          </p>
          <p class="app-modal__description">
            Whether it be one last “thank you” or simply to write off an
            additional tax deduction, we have created this portal so that you
            can make an additional 1 time payment with NO Aslice fees being
            taken. 100% of this money (excluding payment processor fees) will be
            evenly spread across all the unique artists you played this year.
          </p>
          <p class="app-modal__description">
            Enter the amount below and your saved payment preference will be
            charged.
          </p>
          <div class="app-modal__amount">
            <span>Amount to Share</span>
            <input
              type="text"
              :value="amount"
              @input="handleAmountChange"
              @keypress="isNumber"
            />
          </div>
          <p class="app-modal__description">
            Thank you for your part of creating a fairer music ecosystem and for
            your continued generosity.
          </p>
          <p class="app-modal__description">
            The Aslice Team.
          </p>
        </template>
        <div v-if="step === 2" class="app-modal__info">
          <h4>Confirm Payment</h4>
          <p class="app-modal__description">
            Once you press submit, this non-refundable 1 time charge will be
            processed according to your saved payment source.
          </p>
          <div class="app-modal__amount">
            <span>Amount to Share</span>
            <div>{{ amount }}</div>
          </div>
        </div>
        <div v-if="step === 3" class="app-modal__info">
          <h4>Thank you for sharing</h4>
          <p class="app-modal__description">
            Your contribution gave {{ numArtists }} artists an end of year
            bonus.
          </p>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="app-modal__footer">
        <button
          v-if="step === 1"
          :disabled="!parseInt(amount.replace('$', ''))"
          @click="handleGoToNextStep"
        >
          Pay Now
        </button>
        <template v-if="step === 2">
          <button class="button-link" @click="handleGoPrevStep">
            Cancel
          </button>
          <button @click="handleConfirm">
            Confirm
          </button>
        </template>
        <button v-if="step === 3" @click="handleCloseModal">
          Close
        </button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EndYearBonusModal",
  props: {
    open: Boolean
  },
  data() {
    return {
      step: 1,
      amount: "$0",
      performer: null
    };
  },
  created() {
    this.$store.dispatch("djdashboard/fetchPlayedProducerCount");
  },
  mounted() {
    this.performer = this.performers[0] || null;
  },
  methods: {
    isNumber(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        event.preventDefault();
      } else {
        return true;
      }
    },
    handleAmountChange(event) {
      if (!event.target.value.startsWith("$")) {
        this.amount = `$${event.target.value}`;
      } else {
        this.amount = event.target.value;
      }
    },
    handleCloseModal() {
      this.step = 1;
      this.performer = this.performers[0] || null;
      this.$emit("onClose");
    },
    handleGoToNextStep() {
      this.step += 1;
    },
    handleGoPrevStep() {
      this.step -= 1;
    },
    async handleConfirm() {
      await this.$store.dispatch("djdashboard/createProducerBonusFromDj", {
        type: "ProducersEndOfYear",
        performerId: this.performer.id,
        amount: Number(this.amount.substring(1))
      });
      this.step = 3;
    }
  },
  computed: {
    ...mapState("user", ["data"]),
    ...mapState("djdashboard", ["playedProducerCount"]),
    avatar() {
      if (this.data?.avatar) {
        return `${process.env.VUE_APP_S3_URL}${this.data.avatar}`;
      }

      return "";
    },
    performers() {
      return [
        ...this.data.performers.map(performer => ({
          ...performer,
          name: performer.name
        })),
        ...this.data.groupMemberships.map(({ group }) => ({
          ...group,
          name: group.name
        }))
      ];
    },
    numArtists() {
      return this.playedProducerCount ?? "N/A";
    }
  }
};
</script>

<style lang="scss">
.bonus-dialog {
  max-width: 600px;
}

.bonus-header,
.bonus-body,
.bonus-footer {
  padding: 0;
  display: block;
  text-align: unset;
}
</style>

<style lang="scss" scoped>
.app-modal {
  &__container {
    max-width: 600px;
  }
  &__header {
    height: 82px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    background: #fcb416;
    justify-content: space-between;

    h5 {
      margin-top: 5px;
      font-size: 32px;
      color: #442671;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
      font-family: "Graphik-Regular-Web", sans-serif;
    }
  }
  &__close {
    position: static;
  }
  &__footer {
    margin: 0;
    button {
      width: auto;
      padding: 0 20px;
    }
    .button-link {
      width: auto;
    }
  }
  &__body {
    padding: 40px 80px;
  }
  &__user-select {
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f1ef;
  }
  &__amount {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    flex-direction: column;
    font-family: "Graphik-Regular-Web", sans-serif;

    span {
      font-size: 9px;
      font-weight: 500;
      color: #aaa3b1;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    input {
      padding: 0;
      width: 150px;
      height: 50px;
      border: none;
      margin-top: 4px;
      color: #442671;
      font-size: 24px;
      text-align: center;
      border-radius: 4px;
      background: #f2f1ef;
    }

    div {
      width: 150px;
      height: 50px;
      display: flex;
      margin-top: 4px;
      font-size: 24px;
      color: #75707b;
      text-align: center;
      border-radius: 4px;
      align-items: center;
      background: #f2f1ef;
      justify-content: center;
    }
  }
  &__info {
    h4 {
      font-size: 32px;
      color: #442671;
      text-align: center;
      margin-bottom: 20px;
      text-transform: capitalize;
      font-family: "Graphik-Regular-Web", sans-serif;
    }
    .app-modal__amount {
      margin-top: 40px;
    }
  }
  &__user-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
  &__user-select {
    display: flex;
    padding: 0 20px;
    align-items: center;

    .v-select {
      width: 250px;

      .vs__dropdown-toggle {
        height: 30px;
        padding: 0;
        width: 100% !important;
      }

      .vs__selected-options {
        padding: 0 10px !important;
      }
    }
    .vs--single.vs--open .vs__selected {
      position: static !important;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      color: #75707b;
    }
  }
}
</style>
