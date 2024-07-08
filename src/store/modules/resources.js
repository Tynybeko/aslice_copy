import api from "@/service/api";
import swal from "sweetalert2";

export default {
  namespaced: true,
  state: {
    categories: [],
    categoriesLoading: true,
    posts: [],
    postsLoading: true,
    postsCount: null,
    postsPage: 1,
    postsTake: 12,
    postsHasNext: true
  },
  mutations: {
    SET_CATEGORIES(state, value) {
      state.categories = value;
    },
    SET_CATEGORIES_LOADING(state, value) {
      state.categoriesLoading = value;
    },
    SET_POSTS(state, value) {
      state.posts = value;
    },
    SET_POSTS_LOADING(state, value) {
      state.postsLoading = value;
    },
    SET_POSTS_COUNT(state, value) {
      state.postsCount = value;
    },
    SET_POSTS_PAGE(state, value) {
      state.postsPage = value;
    },
    SET_POSTS_TAKE(state, value) {
      state.postsTake = value;
    },
    SET_POSTS_HAS_NEXT(state, value) {
      state.postsHasNext = value;
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      commit("SET_CATEGORIES_LOADING", true);
      const result = await api.fetchCategories();
      commit("SET_CATEGORIES_LOADING", false);

      if (result.Error) {
        await swal.fire({
          icon: "error",
          text: result.Error || "Failed to fetch categories"
        });
        return false;
      }

      commit("SET_CATEGORIES", result.Data);
      return true;
    },
    async fetchCategoriesMock({ commit }) {
      commit("SET_CATEGORIES_LOADING", true);
      const data = await api.fetchCategoriesMock();
      commit("SET_CATEGORIES_LOADING", false);
      commit("SET_CATEGORIES", data);
      return data;
    },
    async fetchPosts({ commit, state }) {
      commit("SET_POSTS_LOADING", true);
      const data = await api.fetchPosts({
        page: state.postsPage,
        take: state.postsTake
      });
      commit("SET_POSTS", data.results);
      commit("SET_POSTS_COUNT", data.count);
      commit("SET_POSTS_LOADING", false);
      return data;
    },
    async fetchPostsCursor({ commit, state }, { query, category, firstBatch }) {
      commit("SET_POSTS_LOADING", true);
      const result = await api.fetchPostsCursor({
        cursor:
          !firstBatch && state.posts.length
            ? state.posts[state.posts.length - 1].id
            : null,
        take: state.postsTake,
        query,
        categories: category
      });
      commit("SET_POSTS_LOADING", false);

      if (result.Error) {
        await swal.fire({
          icon: "error",
          text: result.Error || "Failed to fetch posts"
        });
        return false;
      }

      commit(
        "SET_POSTS",
        firstBatch
          ? result.Data.results
          : [...state.posts, ...result.Data.results]
      );
      commit("SET_POSTS_HAS_NEXT", result.Data.hasNext);
      return true;
    }
  }
};
