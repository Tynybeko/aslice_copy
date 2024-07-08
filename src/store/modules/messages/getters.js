export const getters = {
  getMessages: state => state.messages,
  getPage: state => state.page,
  getLimitPerPage: state => state.take,
  getMessagesListState: state => state.allMessagesLoaded
};
