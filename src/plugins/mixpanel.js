import mixpanelBrowser from 'mixpanel-browser';

const Mixpanel = {
  install: function(Vue, { token = "", config = {} }) {
    Vue.prototype.$mixpanel = mixpanelBrowser;
    Vue.prototype.$mixpanel.init(token, config);
  }
}

export default Mixpanel;
