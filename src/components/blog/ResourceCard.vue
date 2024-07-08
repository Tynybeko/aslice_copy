<template>
  <div class="resource-card" v-bind="$attrs" v-on="$listeners">
    <div class="preview-block">
      <img class="preview" :src="previewSrc" alt="preview" />
    </div>
    <div class="info-padding">
      <div class="info">
        <div class="title-block">
          <span class="title">
            {{ title }}
          </span>
        </div>
        <div class="categories-block">
          <div class="label">
            Categories
          </div>
          <CategoriesList class="categories" :categories="categoriesTitles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesList from "@/components/blog/CategoriesList.vue";

export default {
  name: "ResourceCard",
  components: {
    CategoriesList
  },
  props: {
    preview: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  computed: {
    previewSrc() {
      return this.$aslice.getResources(this.preview);
    },
    categoriesTitles() {
      return this.categories.map(category => category.title);
    }
  }
};
</script>

<style lang="scss">
.category {
  border: 1px solid #c2c1bf !important;
  background: none !important;
  padding: 4px 9px !important;
  color: #c2c1bf !important;
  transition-timing-function: ease-out;
  transition-duration: 300ms;
}
.resource-card:hover .category {
  background: #f7f7f5 !important;
  border: 1px solid #f7f7f5 !important;
  color: #91918f !important;
}
</style>
<style scoped lang="scss">
.resource-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid #c2c1bf;
  background: #f2f1ef;
  cursor: pointer;
  transition-timing-function: ease-out;
  transition-duration: 300ms;

  &:hover {
    box-shadow: 15px 10px 30px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #fefefd;
    background: #fefefd;

    .title {
      color: #442671;
    }
  }
}

.preview-block {
  width: 100%;
  height: 299px;
  background: #d6bbfe;
  border-radius: 5px 5px 0 0;
}

.preview {
  width: 100%;
  height: 299px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 5px 5px 0 0;
}

.info-padding {
  height: 299px;
  //padding: 20px;
  padding: 16px 20px 19px 19px;
}

.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.title-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.title {
  align-self: stretch;
  color: #616060;

  /* Webtext/H2 */
  font-family: Graphik App, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px; /* 131.25% */
  text-transform: capitalize;

  transition-timing-function: ease-out;
  transition-duration: 300ms;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.categories-block {
  //margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
}

.label {
  color: #c2c1bf;
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.35px;
  text-transform: uppercase;
}

.categories {
  //margin-top: 10px;
}
</style>
