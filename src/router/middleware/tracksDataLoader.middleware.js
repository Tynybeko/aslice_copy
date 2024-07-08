export const tracksDataLoaderMiddleware = async ({ store, to, next }) => {
  const { query } = to;
  const { id, roles } = store.getters["user/getUser"];
  if (!roles?.some(item => item.name == 'producer')) return await next();
  store.dispatch("djdashboard/getAllTracks", {
    page: "1",
    take: "20",
    userId: String(id),
    orderColumn: "datePlayed",
    ...query
  });
  return await next();
};
