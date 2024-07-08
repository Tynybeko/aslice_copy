export const loadAccountingDataMiddleware = async ({ store, next }) => {
  store.dispatch("accounting/start");
  // const user = store.getters["user/getUser"];
  // const quarters = store.getters["accounting/quarters"];

  // const payload = {
  //   userId: user.id,
  //   isPaid: true,
  //   take: 999,
  //   fromDate: quarters[quarters.length - 1].from,
  //   toDate: quarters[0].to
  // };
  // swal.showLoading();
  //
  // const result = [];
  // user.roles.forEach(role => {
  //   console.log(role.name);
  //   result.push(accountingMethod(role.name));
  // });
  //
  // const results = [0, 0];
  // const responses = (
  //   await Promise.all(
  //     result.map(async method => {
  //       if (method) {
  //         return await method(payload);
  //       }
  //     })
  //   )
  // ).filter(method => method !== undefined);
  //
  // responses.forEach((response, index) => {
  //   errorHandler(response, () => {
  //     results[index] =
  //       responses[index]?.Data?.results?.reduce((acc, playlist) => {
  //         acc += parseInt(playlist.totalAmount);
  //         return acc;
  //       }, parseInt(responses?.Data?.results[0].totalAmount) || 0) || 0;
  //     swal.close();
  //   });
  // });
  //
  // const [djTotalAmount, producerTotalAmount] = results;
  // console.log(djTotalAmount, producerTotalAmount);
  // store.dispatch("accounting/init", { djTotalAmount, producerTotalAmount });
  next();
};
