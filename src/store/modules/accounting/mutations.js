export const mutations = {
  INIT_DATE_RANGES(state, payload) {
    state[payload.fieldName] = payload.quarters;
  },

  INIT_DATE_RANGES_PRODUCER(state, payload) {
    state[payload.fieldName] = payload.quartersProducer;
  },

  INIT_TOTAL_AMOUNT(state, payload) {
    state[payload.fieldName] = payload.totalAmount;
  },

  SET_CURRENT_RANGE(state, { from, to, fieldname }) {
    state[fieldname] = { from, to };
  }
};
