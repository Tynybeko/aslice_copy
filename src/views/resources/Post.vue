<template>
  <div v-if="post" class="post">
    <div class="post-back-block">
      <div class="post-back-button">
        <SmallArrowButton @click="clickBack" />
        <span class="post-back-button-text">Back To All Resources</span>
      </div>
    </div>
    <div class="post-preview">
      <img :src="previewSrc" alt="preview" />
    </div>
    <div class="post-content">
      <div class="post-content-body">
        <div class="post-share-block">
          <ShareWidget class="post-share-widget" @copied="copyUrl" />
        </div>
        <div class="post-content-body-main">
          <div class="post-categories-label">Categories</div>
          <CategoriesList :categories="categoriesTitles" />
          <h1 class="post-title">{{ post.title }}</h1>
          <hr class="post-title-line" />
          <div class="post-content-html" v-html="post.content"></div>
        </div>
      </div>
    </div>
    <div v-if="relatedPosts.length" class="post-related-posts">
      <div class="post-related-title">Related Articles and Resources</div>
      <div v-if="!$device.mobile" class="post-related-posts-grid">
        <router-link
          v-for="post in relatedPosts"
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
      <VueSlickCarousel
        v-else
        :dots="true"
        :arrows="false"
        :infinite="false"
        :slidesToShow="1"
        :slidesToScroll="1"
        :autoplay="false"
      >
        <router-link
          v-for="post in relatedPosts"
          :key="post.id"
          :to="{ name: 'Post', params: { id: post.slug || post.id } }"
        >
          <ResourceCard
            :title="post.title"
            :categories="post.categories"
            :preview="post.previewImage ? post.previewImage.url : ''"
          />
        </router-link>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import SmallArrowButton from "@/components/global/buttons/SmallArrowButton.vue";
import api from "@/service/api";
import swal from "sweetalert2";
import ShareWidget from "@/components/share/ShareWidget.vue";
import CategoriesList from "@/components/blog/CategoriesList.vue";
import ResourceCard from "@/components/blog/ResourceCard.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Post",
  data() {
    return {
      post: null,
      relatedPosts: []
    };
  },
  components: {
    VueSlickCarousel,
    ResourceCard,
    CategoriesList,
    ShareWidget,
    SmallArrowButton
  },
  computed: {
    previewSrc() {
      return this.$aslice.getResources(this.post?.previewImage?.url);
    },
    categoriesTitles() {
      return this.post
        ? this.post.categories.map(category => category.title)
        : [];
    }
  },
  methods: {
    clickBack() {
      this.$router.replace({ name: "Resources" });
    },
    copyUrl() {
      swal.fire({
        icon: "success",
        text: "The page link is copied to the clipboard"
      });
    }
  },
  async created() {
    const postId = this.$route.params.id;

    let result;

    if (/^\d+$/.test(postId)) {
      result = await api.fetchPost(postId);
    } else {
      result = await api.fetchPostBySlug(postId);
    }

    if (result.Error) {
      await swal.fire({
        icon: "error",
        text: result.Error || "Failed to fetch post. Please refresh the page"
      });
      return;
    }

    this.post = result.Data;

    const relatedPostsResult = await api.fetchRelatedPosts(result.Data.id);

    if (relatedPostsResult.Error) {
      await swal.fire({
        icon: "error",
        text:
          relatedPostsResult.Error ||
          "Failed to fetch related posts. Please refresh the page"
      });
      return;
    }

    this.relatedPosts = relatedPostsResult.Data;
  }
};
</script>

<style lang="scss">
.post-content-html {
  & h2 {
    margin: 18px 0 20px;
    color: var(--Core-Brand-Purple-Core-Brand-600, #442671);

    /* Blog-H3-Med */
    font-family: Graphik App, sans-serif !important;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    text-transform: capitalize;
  }
  & p {
    margin-bottom: 19px;
    color: #616060;

    /* Body Copy Roboto 14 */
    font-family: Roboto Mono, monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
  }
  & a:not(.big-purple-button) {
    color: #616060;
    text-decoration-line: underline;
  }
  & img {
    margin: 41px 0;
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
}
</style>
<style scoped lang="scss">
.post {
  background: var(--Core-Grayscale-100, #fefefd);
}

.post-back-block {
  padding: 50px 139px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
}

.post-content {
  padding: 0 136px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
}

.post-back-button {
  display: flex;
  align-items: center;
  gap: 10px;
}

.post-back-button-text {
  color: #91918f;
  /* Webtext/Body Copy */
  font-family: Roboto Mono, monospace;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%; /* 18.9px */
}

.post-preview {
  padding: 0 139px;

  & img {
    width: 100%;
    height: 500px;
    border-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    & img {
      height: 300px;
    }
  }
}

.post-content-body {
  padding: 77px 0;
  display: flex;

  @media (max-width: 425px) {
    padding: 20px 0;
    flex-direction: column;
    gap: 20px;
  }
}

.post-share-block {
  padding-right: 76px;
}

.post-content-body-main {
  padding-left: 80px;
  border-left: 1px solid #c2c1bf;

  @media (max-width: 425px) {
    border: none;
    padding: 0;
  }
}

.post-categories-label {
  margin-bottom: 6px;
  color: #c2c1bf;
  font-family: Graphik App, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.35px;
  text-transform: uppercase;
}

.post-share-widget {
  position: sticky;
  top: 100px;
}

.post-title {
  margin: 75px 0 83px;
  color: var(--Purples-Lt-Purple, #442671);

  /* Webtext/H1 */
  font-family: Graphik App, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px; /* 104.167% */
  text-transform: capitalize;

  @media (max-width: 425px) {
    margin: 40px 0;
  }
}

.post-title-line {
  margin: 0 0 76px;
  border-top: 1px solid #c2c1bf;

  @media (max-width: 425px) {
    margin: 0 0 40px;
  }
}

.post-related-posts {
  background: #f2f1ef;
  padding: 20px;

  @media (max-width: 425px) {
    padding-bottom: 40px;
  }

  & a:hover {
    text-decoration: none;
  }
}

.post-related-title {
  margin-bottom: 20px;
  color: #616060;
  font-family: Graphik App, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
}

.post-related-posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.post-carousel-item {
  width: 100px;
  height: 100px;
}
</style>
