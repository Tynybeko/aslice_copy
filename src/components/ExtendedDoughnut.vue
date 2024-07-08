<template>
  <div class="doughnut">
    <Doughnut
      :monthLabels="monthLabels"
      :chartData="chartData"
      @onClick="handleOnClick"
    />
    <div class="doughnut__info">
      <p class="doughnut__text" v-if="showInit">Click a month to view</p>
      <template v-else>
        <span class="doughnut__value" v-if="month">{{ month }}</span>
        <div class="doughnut__delimiter"></div>
        <span
          class="doughnut__elem"
          v-if="total && !['Producer Overview', 'Promoter'].includes(activeTab.name)"
        >
          Total Shared
          <span class="doughnut__value">{{ currencySymbol }}{{ total }}</span>
        </span>
        <span
          class="doughnut__elem"
          v-if="shared && activeTab.name !== 'Producer Overview'"
        >
          Playlist shared
          <span class="doughnut__value">{{ shared }}</span></span
        >
        <span class="doughnut__elem" v-else>
          Track plays
          <span class="doughnut__value">{{ total }}</span></span
        >
      </template>
    </div>
  </div>
</template>

<script>
import Doughnut from "@/components/Doughnut.vue";
import { mapGetters } from "vuex";

export default {
  props: ["monthLabels", "chartData", "playlistShared", "activeTab"],
  computed: {
    ...mapGetters({
      currencySymbol: "user/currencySymbol"
    })
  },
  components: { Doughnut },
  mounted() {
    if (this.chartData && this.chartData.length > 0) {
      this.chartDataProducer = JSON.parse(JSON.stringify(this.chartData));
      this.chartDataProducer = this.chartDataProducer.map(x =>
        x == 100.99 ? 0 : x
      );
    }
  },
  data() {
    return {
      chartDataProducer: [],
      showInit: true,
      month: "",
      shared: null,
      total: null
    };
  },
  methods: {
    handleOnClick(index) {
      this.showInit = false;
      this.month = this.monthLabels[index] || "";
      this.shared = this.playlistShared[index] || null;
      this.total = (+this.chartDataProducer[index]).toFixed(0) || 0;
    }
  }
};
</script>

<style lang="scss">
.doughnut {
  position: relative;
  min-width: 490px;
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: absolute;
    width: 65%;
    height: 65%;
    border-radius: 100%;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }
  &__delimiter {
    display: block;
    margin: 15px auto;
    height: 40px;
    width: 1px;
    background-color: #aaa3b1;
    @media screen and (max-width: 1240px) {
      margin: 4px auto;
    }
    @media screen and (min-width: 2400px) {
      margin: 30px auto;
      height: 80px;
      width: 2px;
    }
  }
  &__elem {
    text-align: center;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #75707b;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
    @media screen and (min-width: 2400px) {
      font-size: 1vw;
      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
    }
  }
  &__value {
    display: block;
    color: #442671;
    font-size: 36px;
    @media screen and (min-width: 2400px) {
      font-size: 2vw;
    }
  }
  &__text {
    color: #75707b;
    font-size: 24px;
    @media screen and (min-width: 2400px) {
      font-size: 2vw;
    }
  }
}
</style>
