// Log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
    page_path: url,
  });
};

// Log specific events happening
type EventParams = {
  action: string;
  category: string;
  label: string;
  value?: string | number;
};

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>[];
  }
}
