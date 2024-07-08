const dashboardVerifyRedirectMiddleware = ({ store, next, router }) => {
  if (
    localStorage.getItem("currentUserId") &&
    localStorage.getItem("verificationStarted") &&
    localStorage.getItem("verificationStarted") < 6
  ) {
    store.dispatch(
      "user/setCurrentTabComponent",
      parseInt(localStorage.getItem("verificationStarted"))
    );
    return router.push({ name: "AuthVerifyProcess" });
  }
  return next();
};

export { dashboardVerifyRedirectMiddleware };
