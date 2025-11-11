// Google Analytics 4 Configuration
// Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 Measurement ID

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common events
export const trackQuoteRequest = () => {
  event({
    action: 'quote_request',
    category: 'engagement',
    label: 'Quote Request Button',
  });
};

export const trackContactFormSubmit = () => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'Contact Form',
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'engagement',
    label: 'Phone Number',
  });
};

export const trackLanguageChange = (language: string) => {
  event({
    action: 'language_change',
    category: 'engagement',
    label: language,
  });
};
