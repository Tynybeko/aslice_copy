<template>
  <div class="resources">
    <div class="resources-title">Resources</div>
    <div class="resources-subtitle">
      Educational material, news, and more about Aslice and the global
      electronic music community.
    </div>
    <hr class="resources-line" />
    <div v-if="categoriesLoading">
      <b-skeleton height="100px"></b-skeleton>
    </div>
    <CategoryDropdown
      v-else
      :categories="categories"
      :defaultOpen="!$device.mobile"
      @click="selectCategory"
    />
    <hr class="resources-line" />
    <div class="resources-search-block">
      <SearchButton
        id="searchInput"
        placeholder="search"
        @submit="submitSearch"
      />
    </div>
    <div v-if="postsLoading" class="resources-posts">
      <b-skeleton-img></b-skeleton-img>
      <b-skeleton-img></b-skeleton-img>
      <b-skeleton-img></b-skeleton-img>
    </div>
    <div v-else-if="posts.length" class="resources-posts">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="{ name: 'Post', params: { id: post.slug || post.id } }"
      >
        <ResourceCard
          :title="post.title"
          :categories="post.categories"
          :preview="post.previewImage ? post.previewImage.url : ''"
        />
      </router-link>
    </div>
    <div v-else-if="!!query" class="resources-posts-text">
      We have no articles yet that match this search. Try another search or
      select a new category.
    </div>
    <div v-else-if="category !== null" class="resources-posts-text">
      We have no articles yet that match "{{ selectedCategoryTitle }}". Try
      another search or select a new category.
    </div>
    <div v-else class="resources-posts-text">
      We have no articles yet
    </div>
    <div ref="trigger"></div>
  </div>
</template>

<script>
import CategoryDropdown from "@/components/blog/CategoryDropdown.vue";
import SearchButton from "@/components/blog/SearchButton.vue";
import ResourceCard from "@/components/blog/ResourceCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Resources",
  components: {
    ResourceCard,
    SearchButton,
    CategoryDropdown
  },
  data() {
    return {
      observer: null,
      category: null,
      query: ""
    };
  },
  computed: {
    ...mapState("resources", [
      "categories",
      "categoriesLoading",
      "posts",
      "postsLoading",
      "postsHasNext"
    ]),
    filtered() {
      return this.category !== null || !!this.query;
    },
    selectedCategoryTitle() {
      return this.category
        ? this.categories.find(category => category.id === this.category).title
        : "";
    }
  },
  watch: {
    async postsHasNext(value) {
      if (value) {
        this.observer.observe(this.$refs.trigger);
      }
    },
    async category() {
      await this.fetchPosts(true);
    },
    async query() {
      await this.fetchPosts(true);
    }
  },
  methods: {
    ...mapActions("resources", ["fetchCategories", "fetchPostsCursor"]),
    async fetchPosts(firstBatch = false) {
      return await this.fetchPostsCursor({
        query: this.query,
        category: this.category,
        firstBatch
      });
    },
    async submitSearch(query) {
      this.query = query;
    },
    selectCategory(category) {
      this.category = category;
    }
  },
  async created() {
    await this.fetchCategories();
  },
  mounted() {
    this.$mixpanel.track("Resources Page Visitor");

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(async entry => {
          if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);

            if (!(await this.fetchPosts())) {
              observer.observe(entry.target);
            }
          }
        });
      },
      {
        // 600px is height of ResourceCard
        rootMargin: "0px 0px 600px 0px"
      }
    );
    this.observer.observe(this.$refs.trigger);
  },
  beforeDestroy() {
    this.observer.disconnect();
  }
};
</script>

<style scoped lang="scss">
.resources {
  background: var(--Core-Grayscale-100, #fefefd);
}

.resources-title {
  padding: 7px 20px 29px;
  color: var(--Purples-Lt-Purple, #442671);
  font-family: Graphik App, sans-serif;
  font-size: 95px;
  font-style: normal;
  font-weight: 400;
  line-height: 105px; /* 110.526% */

  @media (max-width: 480px) {
    font-size: 55px;
    line-height: 95%; /* 52.25px */
  }
}

.resources-subtitle {
  padding: 0 20px 23px 20px;
  color: #8f7daa;

  /* Webtext/H3 */
  font-family: Graphik App, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 125% */
}

.resources-line {
  margin: 0;
  background: #c2c1bf;
}

.resources-search-block {
  margin-top: 20px;
  padding: 0 20px 20px;
}

.resources-posts {
  padding: 20px;
  background: #f2f1ef;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & a:hover {
    text-decoration: none;
  }
}

.resources-posts-text {
  padding: 100px;
  background: #f2f1ef;
  text-align: center;
  color: var(--Purples-Lt-Purple, #442671);

  /* Webtext/H1 */
  font-family: Graphik App, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px; /* 104.167% */
  text-transform: capitalize;
}
</style>
