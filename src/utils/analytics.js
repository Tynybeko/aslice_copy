/* global dataLayer */
export function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-NNNR8KYB1H");

  const script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-NNNR8KYB1H";
  document.head.appendChild(script);
}

export function trackGoogleAnalyticsEvent(action, category, label) {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}
