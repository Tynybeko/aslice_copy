export const loginAsUserMiddleware = ({ to, next, router }) => {
  const {
    query: { token, userId }
  } = to;
  const userIdNumber = Number(userId);

  if (!token || !userIdNumber) {
    next();
    return;
  }

  localStorage.clear();
  localStorage.setItem("currentUserId", userIdNumber);
  localStorage.setItem("token", token);
  const { $cookies } = router.app;
  $cookies.set("user_id", userIdNumber, "365d", "/", "", false, "Strict");
  $cookies.set("access_token", token, "365d", "/", "", false, "Strict");
  window.location.replace("/");
};
