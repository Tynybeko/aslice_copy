<template>
  <div class="category-dropdown">
    <div class="category-dropdown-header">
      <div class="title-row">
        <span class="title">Categories</span>
        <button class="collapse-button" @click="toggle">
          <svg
            :class="['icon', { rotated: open }]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.4762 0H9.52381V9.18367H0V10.102H9.52381V19.2857H10.4762V10.102H20V9.18367H10.4762V0Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div :class="['category-dropdown-content', { show: open }]">
      <div class="category-dropdown-content-filters">
        <CategoryButton
          v-for="category in categories"
          :key="category.id"
          @click="click(category.id)"
          :selected="category.id === selected"
        >
          {{ category.title }}
        </CategoryButton>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryButton from "@/components/blog/CategoryButton.vue";

export default {
  name: "CategoryDropdown",
  data() {
    return {
      open: this.defaultOpen,
      selected: null
    };
  },
  props: {
    defaultOpen: {
      type: Boolean,
      default: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    CategoryButton
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    click(category) {
      this.selected = category !== this.selected ? category : null;
      this.$emit("click", this.selected);
    }
  }
};
</script>

<style scoped lang="scss">
.category-dropdown-header {
  padding: 20px;
  background: var(--Core-Grayscale-100, #fefefd);
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.title {
  color: #91918f;
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.35px;
  text-transform: uppercase;
}

.collapse-button {
  border: none;
  background: none;
  padding: 0;
}

.icon {
  color: #616060;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;

  &.rotated {
    transform: rotate(45deg);
  }
}

.category-dropdown-content {
  padding: 0 20px 20px;
  background: var(--Core-Grayscale-100, #fefefd);

  &:not(.show) {
    display: none;
  }
}

.category-dropdown-content-filters {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
}
</style>
