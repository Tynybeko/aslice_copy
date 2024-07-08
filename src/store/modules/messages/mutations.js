export const mutations = {
  RESET_STATE(state) {
    state.messages.splice(0, state.messages.length);
    state.page = 1;
    state.take = 20;
    state.allMessagesLoaded = false;
  },

  APPEND_MESSAGES(state, { messages, take }) {
    state.messages.push(...messages);
    state.page++;
    state.take = take;
  },

  ALL_MESSAGES_LOADED(state) {
    state.allMessagesLoaded = true;
  },

  UPDATE_SINGLE_MESSAGE(state, payload) {
    const index = state.messages.findIndex(
      message => message.id === payload.id
    );
    if (index !== -1) {
      state.messages.splice(index, 1, { ...state.messages[index], ...payload });
    }
  }
};
