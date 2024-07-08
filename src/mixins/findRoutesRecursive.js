export default {
  methods: {
    find(handler) {
      const routes = [...this.$router.options.routes];
      const acc = [];
      this._findRecursive(routes, handler, acc);
      return acc;
    },
    _findRecursive(routes = [], handler, acc) {
      if (!routes) return [];
      const success = routes.filter(route => handler(route));
      acc.push(...success);

      for (const page of routes) {
        if (page.name !== undefined && page && page?.children) {
          this._findRecursive(page?.children, handler, acc);
        }
      }
    }
  }
};
