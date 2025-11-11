// Google Ads Conversion Tracking
// Replace with your actual Google Ads Conversion IDs

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';

type ConversionEvent = {
  send_to: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
};

// Send conversion event to Google Ads
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const event: ConversionEvent = {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    };

    if (value) {
      event.value = value;
      event.currency = 'RSD'; // Serbian Dinar
    }

    window.gtag('event', 'conversion', event);
  }
};

// Predefined conversion events
export const trackQuoteConversion = () => {
  // Replace 'QUOTE_CONVERSION_LABEL' with your actual conversion label
  trackConversion(process.env.NEXT_PUBLIC_QUOTE_CONVERSION_LABEL || '');
};

export const trackContactConversion = () => {
  // Replace 'CONTACT_CONVERSION_LABEL' with your actual conversion label
  trackConversion(process.env.NEXT_PUBLIC_CONTACT_CONVERSION_LABEL || '');
};

export const trackPhoneConversion = () => {
  // Replace 'PHONE_CONVERSION_LABEL' with your actual conversion label
  trackConversion(process.env.NEXT_PUBLIC_PHONE_CONVERSION_LABEL || '');
};
