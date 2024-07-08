<template>
  <b-row>
    <b-col cols="12" class="d-flex">
      <slot name="prev"></slot>
      <button
        v-show="!hidePrev"
        :class="{
          controller: true,
          'not-allowed light-gray': disabledPrev,
          'controller-hover': !disabledPrev
        }"
        :disabled="disabledPrev"
        @click="toggle(-1)"
      >
        <span class="d-sm-inline-block margin-top-05">Back</span>
      </button>
      <ButtonLine
        v-show="!hideNext"
        :disabled="disabledNext"
        @click="toggle(1)"
      >
        Next
      </ButtonLine>
      <slot />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonLine from "@/components/global/buttons/ButtonLine.vue";

export default {
  components: {
    ButtonLine
  },
  computed: {
    ...mapGetters({
      currentTabComponent: "user/getCurrentTabComponent"
    })
  },
  props: {
    hideNext: {
      type: Boolean,
      default: false
    },
    hidePrev: {
      type: Boolean,
      default: false
    },
    disabledNext: {
      type: Boolean,
      default: false
    },
    disabledPrev: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle(value) {
      if (value === -1) {
        const lsvalue = localStorage.getItem("verificationStarted");
        const diff = parseInt(lsvalue) + value;
        this.$emit("click:prev", value);
        if (diff > 0) {
          localStorage.removeItem("verificationStarted");
          localStorage.setItem("verificationStarted", diff);
        } else {
          return;
        }
      }
      this.$emit("click:next", value);
      this.$emit("clicked", value);
    }
  }
};
</script>

<style scoped lang="scss"></style>
