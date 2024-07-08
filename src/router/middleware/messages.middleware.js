const messagesMiddleware = async ({ store, next }) => {
  await store.dispatch("messages/getMessages", { page: 1, take: 20 });
  return next();
};

export { messagesMiddleware };
