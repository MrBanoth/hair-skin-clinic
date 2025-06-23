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
  
  const eventParams: Record<string, string | number> = {
    event_category: category,
    event_label: label,
  };
  
  if (value !== undefined) {
    eventParams.value = value;
  }
  
  window.gtag('event', action, eventParams);
};

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (command: string, ...params: (string | Record<string, string | number | boolean>)[]) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}
