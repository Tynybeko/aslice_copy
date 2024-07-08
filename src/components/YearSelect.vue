<template>
  <div
    :class="['year-select', { 'year-select_open': isOpend }]"
    v-click-outside="handleHideDropdown"
  >
    <div class="year-select__value" @click="toggleDropdown">
      {{ currentYear }}
    </div>
    <img src="@/assets/images/year-select-angle.svg" alt="" />
    <div class="year-select__dropdown">
      <div
        v-for="year in years"
        :key="year"
        :class="[
          'year-select__item',
          { 'year-select__item_active': currentYear === year }
        ]"
        @click="handleChooseYear(year)"
      >
        {{ year }}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "YearSelect",
  directives: {
    ClickOutside
  },
  data() {
    return {
      years: [],
      isOpend: false,
      currentYear: new Date().getFullYear()
    };
  },
  created() {
    const theYear =
      new Date().getMonth() === 11
        ? new Date().getFullYear() + 1
        : new Date().getFullYear();
    for (let i = theYear; i >= 2021; i -= 1) {
      this.years.push(i);
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpend = !this.isOpend;
    },
    handleHideDropdown() {
      this.isOpend = false;
    },
    handleChooseYear(year) {
      this.currentYear = year;
      this.handleHideDropdown();
      this.$emit("onChange", year);
    }
  }
};
</script>

<style lang="scss" scoped>
.year-select {
  position: relative;
  width: 150px;
  color: #442671;
  cursor: pointer;
  background: transparent;
  font-family: "Roboto-Mono";
  border-bottom: 1px solid #aaa3b1;

  img {
    top: 50%;
    right: 15px;
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &__value {
    font-size: 48px;
    line-height: 50px;
    padding: 16px 0px;
    user-select: none;
  }

  &_open &__dropdown {
    display: block;
  }

  &_open img {
    transform: translateY(-50%) rotate(180deg);
  }

  &__dropdown {
    display: none;
    top: calc(100% - 3px);
    left: 0px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    border-radius: 4px;
    background: #fff;
    box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.25);
  }

  &__item {
    color: #75707b;
    font-size: 12px;
    line-height: 40px;
    padding: 0px 10px;
    cursor: pointer;

    &:hover,
    &_active {
      color: #fff;
      background: #9182c5;
    }

    & + & {
      border-top: 1px solid #aaa3b1;
    }
  }
}
</style>
