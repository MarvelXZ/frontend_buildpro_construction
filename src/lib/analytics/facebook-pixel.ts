// Facebook Pixel Configuration
// Replace with your actual Facebook Pixel ID

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && window.fbq && FB_PIXEL_ID) {
    window.fbq('init', FB_PIXEL_ID);
  }
};

// Track page view
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track custom events
type FacebookEvent = {
  eventName: string;
  parameters?: Record<string, any>;
};

export const trackEvent = ({ eventName, parameters }: FacebookEvent) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Predefined events
export const trackLead = () => {
  trackEvent({
    eventName: 'Lead',
  });
};

export const trackContact = () => {
  trackEvent({
    eventName: 'Contact',
  });
};

export const trackQuoteRequest = () => {
  trackEvent({
    eventName: 'SubmitApplication',
    parameters: {
      content_name: 'Quote Request',
    },
  });
};

export const trackPhoneClick = () => {
  trackEvent({
    eventName: 'Contact',
    parameters: {
      content_name: 'Phone Click',
    },
  });
};
