export default {
  data() {
    return {
      currentTabComponent: "Process1",
      step: 1
    };
  },
  methods: {
    go(val) {
      this.step = this.step + val;
      this.currentTabComponent = `Process${this.step}`;
    }
  }
};
