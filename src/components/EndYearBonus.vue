<template>
  <div v-if="!$device.mobile">
    <div class="end-year-bonus mx-n4 mt-n5">
      <h5>End of year producer bonus</h5>
      <button @click="handleOpenModal">Learn More</button>
    </div>
    <EndYearBonusModal :open="showModal" @onClose="handleCloseModal" />
  </div>
  <div v-else class="end-year-bonus end-year-bonus-mobile">
    <button @click="handleOpenModal">End of Year Producer Bonus</button>
    <EndYearBonusModal :open="showModal" @onClose="handleCloseModal" />
  </div>
</template>

<script>
import EndYearBonusModal from "./EndYearBonusModal.vue";

export default {
  name: "EndYearBonus",
  components: {
    EndYearBonusModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    handleOpenModal() {
      this.showModal = true;
    },
    handleCloseModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.end-year-bonus {
  height: 70px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 20px;
  background: #fcb416;
  justify-content: space-between;

  &-mobile {
    position: sticky;
    z-index: 999;
    top: 48px;
    left: 0;
    justify-content: center;
    margin-bottom: 0;
  }

  h5 {
    margin-top: 5px;
    font-size: 32px;
    color: #442671;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    font-family: "Graphik-Regular-Web", sans-serif;
  }

  button {
    height: 40px;
    color: #fff;
    padding: 0 20px;
    border-radius: 50px;
    background: #442671;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    border: 1px solid #442671;
    transition: all 0.2s linear;

    &:hover {
      color: #442671;
      background: transparent;
    }
  }
}
</style>
