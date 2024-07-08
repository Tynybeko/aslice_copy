const getSocieties = async ({ store, next }) => {
  await store.dispatch("user/getSocieties");
  return next();
};

export { getSocieties };
