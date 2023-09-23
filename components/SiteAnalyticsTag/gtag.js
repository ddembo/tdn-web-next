// Adapted from https://dany-rivera.medium.com/how-to-integrate-google-analytics-on-your-next-js-13-app-easy-guide-c7389666831c

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, { page_path: url });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
