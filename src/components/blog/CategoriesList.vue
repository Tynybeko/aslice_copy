<template>
  <div class="categories-list">
    <Category v-for="category in categories" :key="category" :name="category" />
  </div>
</template>

<script>
import Category from "@/components/blog/Category.vue";

export default {
  name: "CategoriesList",
  components: {
    Category
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.categories-list {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
