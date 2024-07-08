export default {
  created() {
    document.body.classList.add("overflow-hidden");
  },

  beforeDestroy() {
    document.body.classList.remove("overflow-hidden");
  }
};
