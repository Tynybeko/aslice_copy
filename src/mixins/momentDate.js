import moment from "moment";

export default {
  methods: {
    momentDate(data) {
      return moment(data, moment.ISO_8601).format("DD/MM/YYYY");
    }
  }
};
