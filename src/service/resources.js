/**
 * Notes: this is a $aslice plugin what can can be expanded, for what you need
 * Example: works with currencies
 * Example: resource accesses depending on the environment
 */

/**
 * will create links to amazons images
 * @param {string} value
 * @returns {string}
 */
const getResources = value => {
  return value ? process.env.VUE_APP_S3_URL + value : null;
};

const getBaseUrl = () => {
  return process.env.VUE_APP_BASE_API;
};

/**
 * dev mode helper
 * @returns {string | undefined}
 */
const getMode = () => {
  return process.env?.NODE_ENV;
};

const currencies = new Map([
  ["USD", "$"],
  ["EUR", "€"],
  ["GBP", "£"]
]);

/**
 * @type {PluginObject}
 */
const AsliceResources = {};
AsliceResources.install = function(Vue, options) {
  Vue.prototype.$aslice = {};
  Vue.prototype.$aslice.getImage = getResources;
  Vue.prototype.$aslice.getResources = getResources;
  Vue.prototype.$aslice.getBaseUrl = getBaseUrl;

  Vue.directive("aslice-resources", (el, binding) => {
    el.href = getResources(binding.value);
  });
  Vue.directive("aslice-resources-src", (el, binding) => {
    el.src = getResources(binding.value);
  });
  Vue.directive("aslice-resources-href", (el, binding) => {
    el.href = getResources(binding.value);
  });
  Vue.directive("in-dev", (el, params) => {
    const mode = getMode();
    const message = params?.value?.message || "Coming soon";
    const messageMobile = params?.value?.messageMobile || message;
    if (mode !== "development") {
      el.innerHTML = `
        <div
          class="d-none d-lg-flex h-100 w-100 lock-screen"
          style="padding: 60px 20px;"
        >
          <h1 class="main-title">${message}</h1>
        </div>
          <div
          class="d-lg-none d-flex h-100 w-100 lock-screen"
          style="padding: 60px 20px;"
        >
          <h1 class="main-title">${messageMobile}</h1>
        </div>
        
      `;
    }
  });
  Vue.filter("currencyFilterAfter", function(value) {
    const { store, currencies } = options;
    const user = store.getters["user/getUser"];
    return currencies.get(user.preferredCurrency) + toString(value);
  });
  Vue.filter("currencyFilterBefore", function(value) {
    const { store, currencies } = options;
    const user = store.getters["user/getUser"];
    return currencies.get(user.preferredCurrency) + String(value);
  });
};

export { AsliceResources, currencies };
