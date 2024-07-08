const setTab = (step, userId, store) => {
  localStorage.setItem("verificationStarted", String(step));
  localStorage.setItem("verifyUserId", String(userId));
  localStorage.setItem("currentUserId", String(userId));
  store.dispatch(
    "user/setCurrentTabComponent",
    parseInt(localStorage.getItem("verificationStarted"))
  );
};

const incompleteRegistrationMiddleware = ({ store, next, router }) => {
  const user = store.getters["user/getUser"];

  if (user.registrationComplete) {
    return next();
  }

  if (user.registrationStep) {
    setTab(user.registrationStep, user.id, store);
    return router.push({ name: "AuthVerifyProcess" });
  }

  return next();
};

export { incompleteRegistrationMiddleware };
