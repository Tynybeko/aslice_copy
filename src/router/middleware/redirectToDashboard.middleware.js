import router from "@/router";

const redirectionMainErrorGuard = ({ to, next }) => {
  if (to.path === "/main" || to.path === "/main/") {
    return router.push({ name: "Main", query: to.query });
  }
  return next();
};

const isAuthMiddleware = ({ store, next }) => {
  if (!store.state.user.data) {
    return router.push({ name: "Main" });
  }
  return next();
};

const alreadyAuthMiddleware = ({ to, store, next, from }) => {
  try {
    const { id, roles } = store.getters["user/getUser"];
    if (to.name === "Main" && id) {
      if (from.name && !["Main", "AuthVerifyProcess"].includes(from.name)) {
        return router.push(from).catch(() => {});
      }
      const filteredRoles = roles
        .map(role => role.name)
        .filter(name => ["dj", "producer", "fan", "promoter"].includes(name));
      const role = filteredRoles[0];
      return router.push({
        name: "OverviewType",
        params: { type: role }
      });
    }
  } catch (e) {
    return next();
  }
};

// No use on Main
const notAuthorized = ({ store, next }) => {
  const userId = store.getters["user/getUser"]?.id;
  if (!userId) {
    return router.push({ name: "Main" });
  }

  return next();
};

export {
  redirectionMainErrorGuard,
  isAuthMiddleware,
  alreadyAuthMiddleware,
  notAuthorized
};
