import _ from "lodash";

export default {
  data() {
    return {
      page: this.$route.query.page || 1,
      perPage: 5,
      pageCount: 0,
      allItems: [],
      items: []
    };
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.perPage);
      this.pageCount = _.size(this.allItems);
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    },
    onPageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`).catch(() => {});
      this.items = this.allItems[page - 1] || this.allItems[0];
    }
  }
};
