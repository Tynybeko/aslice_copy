<template>
  <div class="search-button">
    <label :for="id">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="currentColor"
      >
        <path
          d="M14.5001 14.2929L10.7241 10.5169C11.6314 9.42758 12.0839 8.03038 11.9873 6.61596C11.8908 5.20153 11.2526 3.87879 10.2057 2.92288C9.15867 1.96698 7.78347 1.45152 6.36612 1.48372C4.94877 1.51593 3.5984 2.09333 2.59593 3.09581C1.59345 4.09828 1.01605 5.44865 0.983845 6.866C0.951637 8.28335 1.4671 9.65855 2.423 10.7055C3.37891 11.7525 4.70165 12.3907 6.11608 12.4872C7.5305 12.5838 8.9277 12.1313 10.017 11.2239L13.7931 15L14.5001 14.2929ZM2.00012 7C2.00012 6.10998 2.26404 5.23995 2.75851 4.49993C3.25297 3.75991 3.95578 3.18313 4.77804 2.84254C5.60031 2.50194 6.50511 2.41283 7.37802 2.58646C8.25094 2.7601 9.05276 3.18868 9.6821 3.81802C10.3114 4.44735 10.74 5.24918 10.9137 6.12209C11.0873 6.995 10.9982 7.8998 10.6576 8.72207C10.317 9.54434 9.7402 10.2471 9.00018 10.7416C8.26016 11.2361 7.39013 11.5 6.50012 11.5C5.30705 11.4987 4.16323 11.0241 3.3196 10.1805C2.47597 9.33689 2.00144 8.19306 2.00012 7Z"
        />
      </svg>
    </label>
    <input
      :id="id"
      class="search-input"
      type="search"
      :placeholder="placeholder"
      @keyup.enter="submit"
      v-model="searchValue"
    />
    <svg
      v-show="!!searchValue"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="#442671"
      @click="clear"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3506 14.8958L15 14.2464L8.26566 7.51206L14.7595 1.01822L14.0861 0.344788L7.59222 6.83862L0.857866 0.104262L0.208482 0.753646L6.94284 7.48801L0.449001 13.9818L1.12244 14.6553L7.61628 8.16144L14.3506 14.8958Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  data() {
    return {
      searchValue: ""
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    }
  },
  watch: {
    searchValue(value) {
      if (!value) {
        this.$emit("submit", value);
      }
    }
  },
  methods: {
    submit(event) {
      this.$emit("submit", event.target.value);
    },
    clear() {
      if (!this.searchValue) {
        return;
      }

      this.searchValue = "";
    }
  }
};
</script>

<style scoped lang="scss">
.search-button {
  display: flex;
  height: 41px;
  padding: 9px 14px;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid #f2f1ef;
  background: #f2f1ef;
  transition-timing-function: ease-out;
  transition-duration: 300ms;
  color: #616060;

  &:focus-within {
    border: 1px solid var(--Purples-Lt-Purple, #442671);
    background: var(--White, #fff);
    color: #442671;
  }
}
label {
  margin: 0;
}
.search-input {
  width: 100%;
  border: none;
  padding: 0;
  margin-bottom: 3px;
  color: #616060;
  font-family: Graphik App, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 1.82px;
  transition-timing-function: ease-out;
  transition-duration: 300ms;

  &::placeholder {
    text-transform: uppercase;
    transition-timing-function: ease-out;
    transition-duration: 300ms;
  }

  &:focus::placeholder {
    color: #c2c1bf;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
}
</style>
