// Google Analytics event tracking utility

export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: value,
    });
  }
};

// Predefined tracking functions for common actions
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", "engagement", `${buttonName} - ${location}`);
};

export const trackCTAClick = (ctaType: string, location: string) => {
  trackEvent("cta_click", "conversion", `${ctaType} - ${location}`);
};

export const trackDemoRequest = (location: string) => {
  trackEvent("demo_request", "lead_generation", location);
};

export const trackPricingView = (planName: string) => {
  trackEvent("pricing_view", "engagement", planName);
};

export const trackPricingCTA = (planName: string, action: string) => {
  trackEvent("pricing_cta", "conversion", `${planName} - ${action}`);
};

export const trackNavigation = (destination: string) => {
  trackEvent("navigation", "engagement", destination);
};
